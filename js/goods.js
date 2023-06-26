/** 장바구니 아이콘 */
const cart = document.querySelector('.cart');

/** 장바구니 아이콘 수량 */
const iconQuantity = document.querySelector('.iconQuantity');

/** 장바구니 창 */
const cartPage = document.querySelector('.cartPage');

/** 장바구니 창 리스트 */
const cartList = document.querySelector('.cartList');

/** 장바구니 창 수량 */
let cartQuantity = document.querySelector('.cartQuantity');

/** 장바구니 창 가격 */
let cartPrice = document.querySelector('.cartPrice');


/** 장바구니 창 닫기 */
const cartClose = document.querySelector('.cartClose');



/** 상품 목록 */
const list = document.querySelector('.list');


// 장바구니 창 애니메이션 
cart.addEventListener('click', () => {
    cartPage.style.animation = 'cartOn 1s ease-out forwards';
});

cartClose.addEventListener('click', () => {
    cartPage.style.animation = 'cartOff 1s ease-out forwards';
});


/** 상품 배열 */
const goodsList = [
    {
        id: 1,
        name: '동백',
        image: '1.jpg',
        price: 11000
    },
    {
        id: 2,
        name: '백합',
        image: '2.jpg',
        price: 12000
    },
    {
        id: 3,
        name: '수선화',
        image: '3.jpg',
        price: 13000
    },
    {
        id: 4,
        name: '안개꽃',
        image: '4.jpg',
        price: 14000
    },
    {
        id: 5,
        name: '안스리움',
        image: '5.jpg',
        price: 15000
    },
    {
        id: 6,
        name: '글라디올러스',
        image: '6.jpg',
        price: 16000
    },
    {
        id: 7,
        name: '아미초',
        image: '7.jpg',
        price: 17000
    },
    {
        id: 8,
        name: '후록스',
        image: '8.jpg',
        price: 18000
    }
];

/** 장바구니 배열 */
const cartLists = [];

/* 목록 초기화 (goodsList 가져오기) */
function initApp() {
    goodsList.forEach((value, key) => {
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML =
            `<img src="../images/goods/${value.image}"/>
         <div class="title">${value.name}</div>
         <div class="price">${value.price.toLocaleString("ko-KR")}</div>
         <button onclick="addToCart(${key})">&nbspAdd To Cart&nbsp</button>`;
        list.appendChild(newDiv);
    })
};
initApp();

/* 버튼 클릭 시 목록에 추가 */
function addToCart(key) {
    if (cartLists[key] == null) {
        cartLists[key] = JSON.parse(JSON.stringify(goodsList[key]));
        cartLists[key].quantity = 1;
    }
    reloadCart();
}

/* 갱신, 새로 추가 */
function reloadCart() {
    cartList.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    cartLists.forEach((value, key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if (value != null) {
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <img src="../images/goods/${value.image}"/>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString("ko-KR")}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">&nbsp-&nbsp</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">&nbsp+&nbsp</button>
            </div>`;
            cartList.appendChild(newDiv);
        }
    })
    cartPrice.innerText = totalPrice.toLocaleString();
    cartQuantity.innerText = count;
    iconQuantity.innerText = count;
}



function changeQuantity(key, quantity) {
    if (quantity == 0) {
        delete cartLists[key];
    } else {
        cartLists[key].quantity = quantity;
        cartLists[key].price = quantity * goodsList[key].price;

        console.log(goodsList[key])
        console.log(cartLists[key])

    }
    reloadCart();
}

// console.log(cartLists[key]);
// console.log(goodsList[key]);
// console.trace(goodsList[key].price);
// console.trace(cartLists[key].price);
// console.group(goodsList[key].price);
