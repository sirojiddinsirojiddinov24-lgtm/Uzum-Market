const API = 'https://uzum-market-api.onrender.com/products'
const form = document.querySelector("#product-form")
const titleInput = document.querySelector("#title")
const priceInput = document.querySelector("#price")
const thumbnailInput = document.querySelector("#thumbnail")
const descriptionInput = document.querySelector("#description")
const productIdInput = document.querySelector("#product-id")
const productsList = document.querySelector("#products-list")
const submitBtn = document.querySelector("#submit-btn")
const cancelBtn = document.querySelector("#cancel-btn")
const formTitle = document.querySelector("#form-title")
const productCount = document.querySelector("#product-count")

async function getProducts() {
    try {
        const response = await axios.get(API)
        const products = Array.isArray(response.data) ? response.data : response.data.products || []
        renderProducts(products)
    } catch (error) {
        productsList.innerHTML = '<p class="empty">Mahsulotlarni yuklashda xatolik yuz berdi. Serverni tekshiring.</p>'
        console.error(error)
    }
}

function renderProducts(products) {
    productCount.textContent = `${products.length} ta mahsulot`
    if (products.length === 0) {
        productsList.innerHTML = '<p class="empty">Hozircha mahsulotlar yo‘q.</p>'
        return
    }
    productsList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.thumbnail || product.images?.[0] || ""}" alt="${product.title || "Mahsulot"}" onerror="this.src='https://placehold.co/300x200?text=No+Image'">
            <h3>${escapeHTML(product.title || "")}</h3>
            <p>${escapeHTML(product.description || "")}</p>
            <p class="product-price">${Number(product.price || 0).toLocaleString("uz-UZ")} $</p>
            <div class="card-buttons">
                <button class="edit-btn" onclick="editProduct('${product.id}')">Tahrirlash</button>
                <button class="remove-btn" onclick="deleteProduct('${product.id}')">O‘chirish</button>
            </div>
        </div>
    `).join("")
}

function escapeHTML(value) {
    return String(value).replace(/[&<>"']/g, char => ({
        "&": "&amp",
        "<": "&lt",
        ">": "&gt",
        '"': "&quot",
        "'": "&#39"
    })[char])
}

form.addEventListener("submit", async function(event) {
    event.preventDefault()
    const product = {
        title: titleInput.value.trim(),
        price: Number(priceInput.value),
        thumbnail: thumbnailInput.value.trim(),
        description: descriptionInput.value.trim()
    }
    if (!product.title || !product.thumbnail || !product.description || !Number.isFinite(product.price) || product.price < 0) {
        alert("Ma'lumotlarni to‘g‘ri kiriting!")
        return
    }
    try {
        const id = productIdInput.value
        if (id) {
            await axios.patch(`${API}/${encodeURIComponent(id)}`, product)
            alert("Mahsulot muvaffaqiyatli tahrirlandi!")
        } else {
            await axios.post(API, product)
            alert("Yangi mahsulot qo‘shildi!")
        }
        resetForm()
        getProducts()
    } catch (error) {
        alert("Xatolik yuz berdi. Serverni tekshiring!")
        console.error(error)
    }
})

async function editProduct(id) {
    try {
        const response = await axios.get(`${API}/${encodeURIComponent(id)}`)
        const product = response.data
        productIdInput.value = product.id
        titleInput.value = product.title || ""
        priceInput.value = product.price || ""
        thumbnailInput.value = product.thumbnail || product.images?.[0] || ""
        descriptionInput.value = product.description || ""
        formTitle.textContent = "Mahsulotni tahrirlash"
        submitBtn.textContent = "Saqlash"
        cancelBtn.hidden = false
        window.scrollTo({ top: 0, behavior: "smooth" })
    } catch (error) {
        alert("Mahsulot ma'lumotlarini olishda xatolik!")
        console.error(error)
    }
}

async function deleteProduct(id) {
    if (!confirm("Bu mahsulotni o‘chirmoqchimisiz?")) return
    try {
        await axios.delete(`${API}/${encodeURIComponent(id)}`)
        alert("Mahsulot o‘chirildi!")
        getProducts()
    } catch (error) {
        alert("Mahsulotni o‘chirishda xatolik yuz berdi!")
        console.error(error)
    }
}

function resetForm() {
    form.reset()
    productIdInput.value = ""
    formTitle.textContent = "Yangi mahsulot qo‘shish"
    submitBtn.textContent = "Mahsulot qo‘shish"
    cancelBtn.hidden = true
}

cancelBtn.addEventListener("click", resetForm)

window.editProduct = editProduct
window.deleteProduct = deleteProduct

// PIN-kod himoyasi
const ADMIN_PIN = "0847"

const pinModal = document.querySelector("#pinModal")
const pinInput = document.querySelector("#pinInput")
const pinButton = document.querySelector("#pinButton")
const pinError = document.querySelector("#pinError")
const adminContainer = document.querySelector(".container")

// Dastlab admin panel yashirinadi
adminContainer.style.display = "none"
function checkPin() {
    if (pinInput.value === ADMIN_PIN) {
        pinModal.style.display = "none"
        adminContainer.style.display = "block"

        pinError.textContent = ""

        // Mahsulotlarni faqat kirgandan keyin yuklaymiz
        getProducts()

    } else {
        pinError.textContent = "PIN-kod noto'g'ri!"
        pinInput.value = ""
        pinInput.focus()
    }
}

pinButton.addEventListener("click", checkPin)

pinInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkPin()
    }
})

pinInput.focus()
