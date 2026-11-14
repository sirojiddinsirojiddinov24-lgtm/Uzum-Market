
const section = document.querySelector(".section")
const API = 'https://uzum-market-api.onrender.com/products'
let products = []
let showAll = false
let searchValue = ""

const getProducts = async () => {
    try {
        const request = await axios.get(API)
        const data = request.data
        products = Array.isArray(data) ? data : data.products || []

        section.innerHTML = `
            <div class="boshi">
                <div>
                    <img class="rasm1" src="./imgs/Vector.png">
                    <p>Shahar: <u>Toshkent</u></p>
                    <b class="boshliq">Topshirish punktlari</b>
                </div>
                <div>
                    <p>Buyurtmangizni 1 kunda bepul yetkazib beramiz!</p>
                </div>
                <div>
                    <p>Savol-javoblar</p>
                    <p>Buyurtmalarim</p>
                    <img class="rasm2" src="./imgs/Frame.png">
                    <b>O'zbekcha</b>
                </div>
            </div>
            <div class="boshi1">
                <img class="rasm3" src="./imgs/div.middle-header-main-logo.png">
                <img class="rasm4" src="./imgs/Button_margin.png">
                <div class="input">
                    <input class="sorov" placeholder="Mahsulotlar va turkumlar izlash" type="text">
                    <button class="search-btn">
                        <svg
                            width="23"
                            height="23"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                        >
                            <circle cx="11" cy="11" r="7"></circle>
                            <path d="m20 20-4-4"></path>
                        </svg>
                    </button>
                </div>
                <div class="kirishlar">
                    <p>👨</p>
                    <a href="./kirish.html">Kirish</a>
                </div>
                <div class="kirishlar">
                    <p>🤍</p>
                    <a href="./sara.html">Saralangan</a>
                </div>
                <div class="kirishlar">
                    <p>👜</p>
                    <a href="./savat.html">Savat</a>
                </div>
                <div class="kirishlar">
                    <a class="admin" href="./admin.html">⚙ Admin</a>
            </div>
            </div>
            <div class="boshi2">
                <b><img src="./imgs/div.image.png">Muddatli to'lov</b>
                <p>Elektronika</p>
                <p>Maishiy texnika</p>
                <p>Kiyim</p>
                <p>Poyabzallar</p>
                <p>Aksessuarlar</p>
                <p>Goʻzallik va parvarish</p>
                <p>Salomatlik</p>
                <p>Uy-roʻzgʻor buyumlari</p>
                <p>Qurilish va taʼmirlash</p>
                <p>Yana 🔽</p>
            </div>
            <section class="swiper mySwiper" data-aos="zoom-in">
                <div class="swiper-wrapper">
                    <div class="swiper-slide">
                        <img src="./imgs/image3.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="./imgs/image1.png">
                    </div>
                    <div class="swiper-slide">
                        <img src="./imgs/image2.png">
                    </div>
                </div>
                <div class="swiper-button-next"></div>
                <div class="swiper-button-prev"></div>
                <div class="swiper-pagination"></div>
            </section>
            <h1 class="arzon" data-aos="fade-up">Arzon narxlar ></h1>
        `

        const grid = document.createElement("div")
        grid.className = "products-grid"
        section.appendChild(grid)

        section.insertAdjacentHTML("beforeend", `
            <div class="oxiri">
                <button class="korish">
                    Barcha mahsulotlarni ko'rish →
                </button>
            </div>

            <footer>
                <div class="foter">
                    <div style="margin-left: 150px;">
                        <b>Biz haqimizda</b>
                        <p style="color: grey;padding-top: 15px;">Topshirish punktlari</p>
                        <p style="color: grey;padding-top: 15px;">Vakansiyalar</p>
                    </div>
                    <div>
                        <b>Foydalanuvchilarga</b>
                        <p style="color: grey;padding-top: 15px;">Biz bilan bog'lanish</p>
                        <p style="color: grey;padding-top: 15px;">Savol-Javob</p>
                    </div>
                    <div>
                        <b>Tadbirkorlarga</b>
                        <p style="color: grey;padding-top: 15px;">Uzumda soting</p>
                        <p style="color: grey;padding-top: 15px;">Sotuvchi kabinetiga kirish</p>
                        <p style="color: grey;padding-top: 15px;">Topshirish punktini ochish</p>
                    </div>
                    <div>
                        <b>Ilovani yuklab olish</b>
                        <div style="display: flex;gap: 20px;margin-left: 15px;margin-bottom: 40px;">
                            <b style="color: grey;">AppStore</b>
                            <div style="display: flex;gap: 5px;">
                                <img style="width: 24px;height: 24px;" src="https://static.vecteezy.com/system/resources/previews/017/396/800/non_2x/google-play-store-mobile-apps-logo-free-png.png">
                                <p style="color: grey;">Vakansiyalar</p>
                            </div>
                        </div>
                        <b>Uzum ijtimoiy tarmoqlarda</b>
                        <div style="display: flex;gap: 20px;margin-top: 20px;margin-bottom: 30px;">
                            <img style="width: 32px;height: 32px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2hi2R6Ub2fbfRuZNhJMsNybMTzn63nkpFBycJV4OrWw&s">
                            <img style="width: 32px;height: 32px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTBamgPlQAPq0laTUxiWerNpHWtq_4Qkn-rWM0be9lfw&s">
                            <img style="width: 32px;height: 32px;" src="https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/YouTube_full-color_icon_%282017%29.svg/3840px-YouTube_full-color_icon_%282017%29.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail">
                            <img style="width: 32px;height: 32px;" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKlb5N_KYNjjEuR_g9VLSVJkFRMIk3cL2qdNXYdWJyuRyATws53EEWdNs&s=10">
                        </div>
                    </div>
                </div>
                <hr class="chiziq">
                <div style="display: flex;gap: 70px;">
                    <div class="suz">
                        <div>
                            <b>Maxfiylik kelishuvi</b>
                        </div>
                        <div>
                            <b>Foydalanuvchi kelishuvi</b>
                        </div>
                    </div>
                    <div>
                        <b style="font-size: 13px;">SHAXSIY MA'LUMOTLARNI QAYTA ISHLASH NIZOMI «UZUM MARKET» MCHJ XK</b>
                    </div>
                    <div>
                        <p class="mchj">«2024© XK MCHJ «UZUM MARKET». STIR 309376127. Barcha huquqlar himoyalangan»</p>
                    </div>
                </div>
            </footer>
        `)

        const search = section.querySelector(".sorov")
        const korish = section.querySelector(".korish")

        function renderProducts() {
            grid.innerHTML = ""

            const filteredProducts = products.filter(tovar =>
                (tovar.title || "").toLowerCase().includes(searchValue.toLowerCase().trim())
            )

            const visibleProducts = (showAll || searchValue.trim() !== "")
                ? filteredProducts
                : filteredProducts.slice(0, 20)

            visibleProducts.forEach(tovar => {
                grid.innerHTML += `
                    <div class="div1" data-aos="fade-up">
                        <div>
                            <div class="rasm-box">
                                <img src="${tovar.images?.[0] || tovar.thumbnail || ""}">
                                <button class="yurak">🤍</button>
                            </div>
                            <h1>${tovar.title}</h1>
                            <p>${(tovar.description || "").slice(0,60)}...</p>
                            <p>⭐ ${tovar.rating}</p>
                            <h3>${tovar.price}'$'</h3>
                            <a class="buyurtma" href="./buyurtma.html">🚚 Buyurtma qilish</a>
                        </div>
                    </div>
                `
            })

            korish.textContent = showAll ? "See less" : "See all"
            AOS.refresh()
        }

        search.addEventListener("input", function() {
            searchValue = this.value
            renderProducts()
        })

        korish.addEventListener("click", function() {
            showAll = !showAll
            renderProducts()
        })

        renderProducts()

        new Swiper('.mySwiper', {
            spaceBetween: 30,
            centeredSlides: true,
            loop: true,
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        })

        AOS.refresh()

    } catch (error) {
        console.log(error)
    }
}

document.addEventListener('click', function(e) {
    if (e.target.classList.contains("yurak")) {
        e.target.classList.toggle("active")
        e.target.textContent = e.target.classList.contains("active") ? "❤️" : "🤍"
    }
})

const deleteProduct = async (id) => {
    try {
        await axios.delete(`${API}/${id}`)
        alert("Maxsulot o'chirildi 🗑️")
        await getProducts()
    } catch (error) {
        console.log(error)
    }
}

const updateProduct = async (id) => {
    try {
        let nom = prompt('Maxsulot titleini kiriting: ')
        if (nom === null) return
        let desc = prompt('Maxsulot descriptionini kiriting: ')
        if (desc === null) return
        let rat = prompt('Maxsulot ratingini kiriting: ')
        if (rat === null) return
        let narx = prompt('Maxsulot priceni kiriting: ')
        if (narx === null) return

        await axios.patch(`${API}/${id}`, {
            title: nom,
            description: desc,
            rating: Number(rat),
            price: Number(narx)
        })

        alert("Mahsulot yangilandi ✅")
        await getProducts()
    } catch (error) {
        console.log(error)
    }
}

window.updateProduct = updateProduct
window.deleteProduct = deleteProduct

getProducts()