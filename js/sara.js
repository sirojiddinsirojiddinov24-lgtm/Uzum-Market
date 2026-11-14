const section = document.querySelector(".section")
const API = 'https://uzum-market-api.onrender.com/products'

let products=[]
const getProducts = async () => {
    try {
        const request = await axios.get(API)
        const data = request.data
        products = Array.isArray(data) ? data : data.products || []
        const grid = document.createElement("div")
        grid.className = "products-grid"
        section.appendChild(grid)  
        products.forEach(tovar => {
        grid.innerHTML += `
            <div class='div1'>
                <div>
                    <div class="rasm-box">
                        <img src="${tovar.images?.[0] || tovar.thumbnail}">
                        <button class="yurak">🤍</button>
                    </div>
                    <h1>${tovar.title}</h1>
                    <p>${tovar.description.slice(0,60)}...</p>
                    <p>⭐ ${tovar.rating}</p>
                    <h3>${tovar.price}$</h3>
                </div>
            </div>
        `   
        })
        const search = document.querySelector(".sorov")

        search.addEventListener("input", function() {
            const value = search.value.toLowerCase()
        
            const cards = grid.querySelectorAll(".div1")
        
            cards.forEach(function(card) {
                const name = card.innerText.toLowerCase()
            
                card.style.display = name.includes(value) ? "" : "none"
            })
        })
        // Swiper HTML yaratilgandan keyin ishga tushadi
        const swiper = new Swiper('.mySwiper', {
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

        } catch (error) {
            console.log(error)
        }
        // finally{
        //     alert("Malumotlar yuklandi ✔")
        // }
    }
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains("yurak")){
            e.target.classList.toggle("active")
            if (e.target.classList.contains("active")){
                e.target.textContent="❤️"
            }else{
                e.target.textContent="🤍"
            }
        }
    })
getProducts()