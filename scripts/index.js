const navCart = document.querySelector('.nav-cart')
const webTheme = document.querySelector('.web-theme')

const cartClose = document.querySelector('.cart-close')
const cartContainer = document.querySelector('.cart-container')
const cartEmpty = document.querySelector('.cart-empty')
const cartFull = document.querySelector('.cart-full')


//! ===== CART EMPTY

navCart.addEventListener('click', (e) => {
    if(navItemsQty.textContent > 0){
        cartContainer.style.display = 'flex'
        cartFull.style.display = 'flex'
        cartEmpty.style.display = 'none'
    }else{
        cartContainer.style.display = 'flex'
        cartFull.style.display = 'none'
        cartEmpty.style.display = 'flex'
    }
    
});

cartClose.addEventListener('click', (e)=>{
    cartContainer.style.display = 'none'
})


//! ===== CART PRODUCTS QTY

const minusBtn = document.querySelectorAll('.minus');
const plusBtn = document.querySelectorAll('.plus');
const itemsQty = document.querySelector('.items-qty');
const cartSubtotal = document.querySelectorAll('.cart-subtotal');
const cartTotal = document.querySelector('.cart-total');
const cartCheckout = document.querySelector('.cart-checkout');
const navItemsQty = document.querySelector('.nav-items-count')

let counterHoodies = 0;
let counterShirts = 0;
let counterSweatshirts = 0;

plusBtn[0].addEventListener('click', ()=>{
    counterHoodies++

    plusBtn[0].previousElementSibling.textContent = `${counterHoodies} units`

    itemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    navItemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    cartSubtotal[0].textContent = `Subtotal: $${counterHoodies*20}.00`;

    cartTotal.textContent = `$${counterHoodies*20 + counterShirts*10 + counterSweatshirts*25}.00`

    if(counterHoodies >= 5){
        alert('Sorry, there is no more stock')
        counterHoodies = 5

        plusBtn[0].previousElementSibling.textContent = `5 units`

        cartSubtotal[0].textContent = `Subtotal: $100.00`;

        itemsQty.textContent = 5 + counterShirts + counterSweatshirts;

        navItemsQty.textContent = 5 + counterShirts + counterSweatshirts;

        cartTotal.textContent = `$${100 + counterShirts*10 + counterSweatshirts*25}.00`
    }
})

minusBtn[0].addEventListener('click', ()=>{
    counterHoodies--

    plusBtn[0].previousElementSibling.textContent = `${counterHoodies} units`

    itemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    navItemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    cartSubtotal[0].textContent = `Subtotal: $${counterHoodies*20}`

    cartTotal.textContent = `$${counterHoodies*20 + counterShirts*10 + counterSweatshirts*25}.00`

    if(counterHoodies < 0){
        plusBtn[0].previousElementSibling.textContent = `0 units`

        cartSubtotal[0].textContent = `Subtotal: $0.00`
        counterHoodies = 0

        itemsQty.textContent = counterShirts + counterSweatshirts

        navItemsQty.textContent = counterShirts + counterSweatshirts;

        cartTotal.textContent = `$${counterShirts*10 + counterSweatshirts*25}.00`
    };

    if(counterHoodies === 0 && counterShirts === 0 && counterSweatshirts === 0){
        cartFull.style.display = 'none'
        cartEmpty.style.display = 'flex'
    }
})

plusBtn[1].addEventListener('click', ()=>{
    counterShirts++

    plusBtn[1].previousElementSibling.textContent = `${counterShirts} units`

    itemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    navItemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    cartSubtotal[1].textContent = `Subtotal: $${counterShirts*10}.00`

    cartTotal.textContent = `$${counterHoodies*20 + counterShirts*10 + counterSweatshirts*25}.00`

    if(counterShirts >= 5){
        alert('Sorry, there is no more stock')

        counterShirts = 5

        plusBtn[1].previousElementSibling.textContent = `5 units`

        cartSubtotal[1].textContent = `Subtotal: $50.00`

        itemsQty.textContent = 5 + counterSweatshirts + counterHoodies;

        navItemsQty.textContent = counterHoodies + 5 + counterSweatshirts;

        cartTotal.textContent = `$${counterHoodies*20 + 50 + counterSweatshirts*25}.00`

    };
})

minusBtn[1].addEventListener('click', ()=>{
    counterShirts--

    plusBtn[1].previousElementSibling.textContent = `${counterShirts} units`

    itemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    navItemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    cartSubtotal[1].textContent = `Subtotal: $${counterShirts*10}.00`

    cartTotal.textContent = `$${counterHoodies*20 + counterShirts*10 + counterSweatshirts*25}.00`

    if(counterShirts < 0){
        plusBtn[1].previousElementSibling.textContent = `0 units`

        cartSubtotal[1].textContent = `Subtotal: $0.00`

        counterShirts = 0

        itemsQty.textContent = counterHoodies + counterSweatshirts

        navItemsQty.textContent = counterHoodies + counterSweatshirts;

        cartTotal.textContent = `$${counterHoodies*20 + counterSweatshirts*25}.00`
    };

    if(counterHoodies === 0 && counterShirts === 0 && counterSweatshirts === 0){
        cartFull.style.display = 'none'
        cartEmpty.style.display = 'flex'
    }

})

plusBtn[2].addEventListener('click', ()=>{
    counterSweatshirts++

    plusBtn[2].previousElementSibling.textContent = `${counterSweatshirts} units`

    itemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    navItemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    cartSubtotal[2].textContent = `Subtotal: $${counterSweatshirts*25}.00`

    cartTotal.textContent = `$${counterHoodies*20 + counterShirts*10 + counterSweatshirts*25}.00`

    if(counterSweatshirts >= 5){
        alert('Sorry, there is no more stock')

        counterSweatshirts = 5

        plusBtn[2].previousElementSibling.textContent = `5 units`

        cartSubtotal[2].textContent = `Subtotal: $125.00`

        itemsQty.textContent = 5 + counterShirts + counterHoodies

        navItemsQty.textContent = counterHoodies + counterShirts + 5

        cartTotal.textContent = `$${counterHoodies*20 + counterShirts*10 + 125}.00`

    };
})

minusBtn[2].addEventListener('click', ()=>{
    counterSweatshirts--

    plusBtn[2].previousElementSibling.textContent = `${counterSweatshirts} units`

    itemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts;

    navItemsQty.textContent = counterHoodies + counterShirts + counterSweatshirts

    cartSubtotal[2].textContent = `Subtotal: $${counterSweatshirts*25}.00`

    cartTotal.textContent = `$${counterHoodies*20 + counterShirts*10 + counterSweatshirts*25}.00`

    if(counterSweatshirts < 0){
        plusBtn[2].previousElementSibling.textContent = `0 units`

        cartSubtotal[2].textContent = `Subtotal: $0.00`

        counterSweatshirts = 0

        itemsQty.textContent = counterHoodies + counterShirts

        navItemsQty.textContent = counterHoodies + counterShirts

        cartTotal.textContent = `$${counterHoodies*20 + counterShirts*10}.00`
    };

    if(counterHoodies === 0 && counterShirts === 0 && counterSweatshirts === 0){
        cartFull.style.display = 'none'
        cartEmpty.style.display = 'flex'
    }
})

cartCheckout.addEventListener('click', ()=>{
    alert('Thanks for your purchase')
    cartContainer.style.display = 'none'
})


//! ===== PRODUCTS

const addToCart = document.querySelector('.home-btn')
const addProduct = document.querySelectorAll('.products-btn')
const cartCard = document.querySelectorAll('.cart-card')
const trash = document.querySelectorAll('.trash')
    
addProduct.forEach(button => {
    button.addEventListener('click', ()=>{
        cartContainer.style.display = 'flex'
        cartEmpty.style.display = 'none'
        cartFull.style.display = 'flex'
    })
})


trash[0].addEventListener('click', ()=>{    
    cartCard[0].style.display = 'none'
    if (cartCard[0].style.display == 'none' && cartCard[1].style.display == 'none' && cartCard[2].style.display == 'none'){
        cartEmpty.style.display = 'flex'
    }
   
})

trash[1].addEventListener('click', ()=>{
    cartCard[1].style.display = 'none'
    if (cartCard[0].style.display == 'none' && cartCard[1].style.display == 'none' && cartCard[2].style.display == 'none'){
        cartEmpty.style.display = 'flex'
    }
    
})

trash[2].addEventListener('click', ()=>{
    cartCard[2].style.display = 'none'
    if (cartCard[0].style.display == 'none' && cartCard[1].style.display == 'none' && cartCard[2].style.display == 'none'){
        cartEmpty.style.display = 'flex'
    }
})


addToCart.addEventListener('click', ()=>{
    cartContainer.style.display = 'flex'
    cartEmpty.style.display = 'none'
    cartFull.style.display = 'flex'
})

//! ===== PRODUCTS FILTERS

const showAll = document.querySelector('#show-all');
const showHoodies = document.querySelector('#show-hoodies');
const showShirts = document.querySelector('#show-shirts');
const showSweatshirts = document.querySelector('#show-sweatshirts');
const productsContainer = document.querySelector('.products-content-container');
const productHoodies = document.querySelector('#product-hoodies');
const productShirts = document.querySelector('#product-shirts');
const productSweatshirts = document.querySelector('#product-sweatshirts')




showAll.addEventListener('click', ()=>{
    productsContainer.style.display= 'flex'
    productHoodies.style.display = 'flex'
    productShirts.style.display = 'flex'
    productSweatshirts.style.display = 'flex'

})

showHoodies.addEventListener('click', ()=>{
    productsContainer.style.display= 'flex'
    productHoodies.style.display = 'flex'
    productShirts.style.display = 'none'
    productSweatshirts.style.display = 'none'

})


showShirts.addEventListener('click', ()=>{
    productsContainer.style.display= 'flex'
    productHoodies.style.display = 'none'
    productShirts.style.display = 'flex'
    productSweatshirts.style.display = 'none'

})

showSweatshirts.addEventListener('click', ()=>{
    productsContainer.style.display= 'flex'
    productHoodies.style.display = 'none'
    productShirts.style.display = 'none'
    productSweatshirts.style.display = 'flex'

})





