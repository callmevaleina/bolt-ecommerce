const navCart = document.querySelector('.nav-cart')
const webTheme = document.querySelector('.web-theme')
const bulbOff = document.querySelector('.icon-bulb-off')
const bulb = document.querySelector('.icon-bulb')


const cartClose = document.querySelector('.cart-close')
const cartContainer = document.querySelector('.cart-container')
const cartEmpty = document.querySelector('.cart-empty')
const cartFull = document.querySelector('.cart-full')

//! ===== WEB THEME 

const focoOn = document.querySelector('.icon-bulb')
const focoOff = document.querySelector('.icon-bulb-off')


focoOn.addEventListener('click', () => {
    
    bulbOff.style.display = 'flex'
    bulb.style.display = 'none'
    document.body.style.background = 'var(--white)'
    document.querySelectorAll('.nav-container a')[0].style.color = 'var(--dark)'
    document.querySelectorAll('.nav-container a')[1].style.color = 'var(--dark)'
    document.querySelectorAll('.nav-container a')[2].style.color = 'var(--dark)'
    document.querySelector('.nav-btns').style.background = 'var(--primary)'
    iconCart.style.color = 'var(--dark)'
    document.querySelector('.home-title').style.color = 'var(--dark)'
    document.querySelector('.home-description').style.color = 'var(--dark)'
    document.querySelector('.products-filter-container').style.background = 'var(--white)'
    
}) 
    

focoOff.addEventListener('click', () =>{
    bulb.style.display = 'flex'
    bulbOff.style.display = 'none'
    document.body.style.background = 'var(--dark)'
    document.querySelectorAll('.nav-container a')[0].style.color = 'var(--white)'
    document.querySelectorAll('.nav-container a')[1].style.color = 'var(--white)'
    document.querySelectorAll('.nav-container a')[2].style.color = 'var(--white)'
    document.querySelector('.nav-btns').style.background = 'var(--primary)'
    document.querySelector('.home-title').style.color = 'var(--white)'
    document.querySelector('.home-description').style.color = 'var(--white)'
    document.querySelector('.products-filter-container').style.background = 'var(--secondary)'
    document.querySelector('.products-filter-container').style.borderRadius = '20px'
    document.querySelectorAll('.product-card')[0].style.filter = 'drop-shadow(0 0 0.2rem var(--white))'
    document.querySelectorAll('.product-card')[1].style.filter = 'drop-shadow(0 0 0.2rem var(--white))'
    document.querySelectorAll('.product-card')[2].style.filter = 'drop-shadow(0 0 0.2rem var(--white))'      

})       
       
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
const cartAmountNumber = document.querySelectorAll('.cart-amount-number')
    
addProduct[0].addEventListener('click', ()=>{
    cartContainer.style.display = 'flex'
    cartEmpty.style.display = 'none'
    cartFull.style.display = 'flex'
        
    if(itemsQty.textContent < 5){
        itemsQty.textContent = counterHoodies += 1;
        navItemsQty.textContent = counterHoodies;
        cartAmountNumber[0].textContent = counterHoodies + ' units'
        
        if(counterHoodies == 5){
            alert('There is not more stock')
        }
        cartSubtotal[0].textContent = `Subtotal: $${counterHoodies * 20}.00`;
        cartTotal.textContent = `$${ counterHoodies * 20 + counterShirts * 10 + counterSweatshirts * 25}.00`;
    
    }   
})

addProduct[1].addEventListener('click', ()=>{
    cartContainer.style.display = 'flex'
    cartEmpty.style.display = 'none'
    cartFull.style.display = 'flex'
        
    if(itemsQty.textContent < 5){
        itemsQty.textContent = counterShirts += 1;
        navItemsQty.textContent = counterShirts;
        cartAmountNumber[1].textContent = counterShirts + ' units'
        
        if(counterShirts == 5){
            alert('There is not more stock')
        }
        cartSubtotal[1].textContent = `Subtotal: $${counterShirts * 10}.00`;
        cartTotal.textContent = `$${ counterHoodies * 20 + counterShirts * 10 + counterSweatshirts * 25}.00`;
    
    }   
})

addProduct[2].addEventListener('click', ()=>{
    cartContainer.style.display = 'flex'
    cartEmpty.style.display = 'none'
    cartFull.style.display = 'flex'

        
    if(itemsQty.textContent < 5){
        itemsQty.textContent = counterSweatshirts += 1;
        navItemsQty.textContent = counterSweatshirts;
        cartAmountNumber[2].textContent = counterSweatshirts + ' units'
        
        if(counterSweatshirts == 5){
            alert('There is not more stock')
        }
        cartSubtotal[2].textContent = `Subtotal: $${counterSweatshirts * 25}.00`;
        cartTotal.textContent = `$${ counterHoodies * 20 + counterShirts * 10 + counterSweatshirts * 25}.00`;
    
    }   
})



trash[0].addEventListener('click', ()=>{    
    cartCard[0].style.display = 'none'
    if (cartCard[0].style.display == 'none' && cartCard[1].style.display == 'none' && cartCard[2].style.display == 'none'){
        cartEmpty.style.display = 'flex'
        cartTotal.textContent = '$0.00'
        itemsQty.textContent = '0'
        navItemsQty.textContent = '0'
    }
   
})

trash[1].addEventListener('click', ()=>{
    cartCard[1].style.display = 'none'
    if (cartCard[0].style.display == 'none' && cartCard[1].style.display == 'none' && cartCard[2].style.display == 'none'){
        cartEmpty.style.display = 'flex'
        cartTotal.textContent = '$0.00'
        itemsQty.textContent = '0'
        navItemsQty.textContent = '0'
    }
    
})

trash[2].addEventListener('click', ()=>{
    cartCard[2].style.display = 'none'
    if (cartCard[0].style.display == 'none' && cartCard[1].style.display == 'none' && cartCard[2].style.display == 'none'){
        cartEmpty.style.display = 'flex'
        cartTotal.textContent = '$0.00'
        itemsQty.textContent = '0'
        navItemsQty.textContent = '0'
    }
})


addToCart.addEventListener('click', ()=>{
    cartContainer.style.display = 'flex'
    cartEmpty.style.display = 'none'
    cartFull.style.display = 'flex'

    if(itemsQty.textContent < 5){
        itemsQty.textContent = counterHoodies += 1;
        navItemsQty.textContent = counterHoodies;
        cartAmountNumber[0].textContent = counterHoodies + ' units'
        
        if(counterHoodies == 5){
            alert('There is not more stock')
        }
        cartSubtotal[0].textContent = `Subtotal: $${counterHoodies * 20}.00`;
        cartTotal.textContent = `$${ counterHoodies * 20 + counterShirts * 10 + counterSweatshirts * 25}.00`;
    
    }  
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





