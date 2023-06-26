/** 슬라이드 컨테이너 */
const container = document.querySelector('.slideContainer');

/** 슬라이드 이미지 */
let slideImg = document.querySelectorAll('.slide img');

prev = document.querySelector('.prev'); // 이전 버튼
next = document.querySelector('.next'); // 다음 버튼

/** 초기화, 배열 길이 */
let counter = 0;


// 다음 <- 0 1 2 3 
next.addEventListener('click', slideNext);
function slideNext() {
    slideImg[counter].style.animation = 'next1 1s ease-out forwards';
    if (counter >= slideImg.length - 1) { 
        counter = 0;
    }
    else {
        counter++;
    }
    slideImg[counter].style.animation = 'next2 1s ease-out forwards';
    console.log(counter);
}


// 이전 1 2 3 0 ->
prev.addEventListener('click', slidePrev);
function slidePrev() {
    slideImg[counter].style.animation = 'prev1 1s ease-out forwards';
    if (counter == 0) {
        counter = slideImg.length - 1;
    }
    else {
        counter--;
    }
    slideImg[counter].style.animation = 'prev2 1s ease-out forwards';
}


// 자동 슬라이딩
function autoSliding() {
    delteInterval = setInterval(timer, 2000);
    function timer() {
        slideNext();
        console.log(counter);
    }
}
autoSliding();


// 마우스 올렸을 때 자동 멈추기
container.addEventListener('mouseover', () => {
    clearInterval(delteInterval);
});

// 마우스 빠졌을 때 재개
container.addEventListener('mouseout', autoSliding);

