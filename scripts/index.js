const navCart = document.querySelector('.nav-cart')
console.log(navCart);
const navItemsCount = document.querySelector('.nav-items-count')
const webTheme = document.querySelector('.web-theme')

const cartClose = document.querySelector('.cart-close')
const cartContainer = document.querySelector('.cart-container')
const cartEmpty = document.querySelector('.cart-empty')
const productHoodies = document.getElementById('product-hoodies')




navCart.addEventListener('click', (e) => {
    cartContainer.style.display = 'flex'
});
    
