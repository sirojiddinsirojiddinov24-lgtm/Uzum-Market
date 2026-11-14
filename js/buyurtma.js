const BOT_TOKEN = '9228443880:AAFjk6Cj7pArURMLfRTimzMuJfAY6iOXcB0'
const CHAT_ID='7124186752'


const form=document.querySelector('.form')
const productInp=document.querySelector('#product')
const customerInp=document.querySelector('#customer')
const locationInp=document.querySelector("#location")
const phoneInp=document.querySelector('#phone')
const descInp=document.querySelector('#message')


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    // 2.Inputlarga kiritlgan qiymatlarni olish
    let productValue=productInp.value.trim()
    let customerValue=customerInp.value.trim()
    let locationValue=locationInp.value.trim()
    let phoneValue=phoneInp.value.trim()
    let descValue=descInp.value.trim()
    // 3.Yuboriladigon xabar
    const fullMessage=`
    Product 💻 ${productValue}
    Customer 🧑 ${customerValue}
    Location 🗺️ ${locationValue}
    Phone 📱 ${phoneValue}
    Description 📩 ${descValue}
    `
    // 4.Telegram bot API manzili
    const url=`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`
    
    
    const payload = {
        chat_id: CHAT_ID,
        text: fullMessage,
    }
    try {
        const response=await axios.post(url, payload)

        if(response.data.ok){
            alert("Ma'lumot muvaffaqiyatli jonatildi ✅")
            form.reset()
        }else{
            alert("Ma'lumot jo'natishda xatolik ❌")
        }
    } catch (error) {
        console.log(error)
    }
})
