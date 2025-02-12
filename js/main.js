/*****************************************************************************************
 * 
 * common.js 로 분리 작성 하였음.
 * 
// document >> html 을 의미
// window   >> 브라우저의 tab 을 의미

const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input'); // searchEl 의 자식요소중 input 요소
// .search 클래스의 자식요소 input 
// 위의 코드 와 같다.
// const searcInputEl = document.querySelector('.search input');

//  addEventListener( 이벤트 , 핸들러(함수) )   핸들러는 익명함수를 사용
searchEl.addEventListener('click', function () {
  //Logic...
  // search 를 클릭하면 input 요소에 focus 맞추기
  searchInputEl.focus();
});
// search 의 input 에 focus가 되면
searchInputEl.addEventListener('focus', function ()  {
  // focused 클래스 추가 (안보이게)
  searchEl.classList.add('focused');
  // input 요소에 placeholder 속성값 지정
  searchInputEl.setAttribute('placeholder', '통합검색'); // html 의 속성을 지정함.
});
// search 의 input 에 focus가 해제되면
searchInputEl.addEventListener('blur', function () { 
  searchEl.classList.remove('focused'); // focused 클래스 제거 (보이게)
  searchInputEl.setAttribute('placeholder', '');
  searchInputEl.value = '';
});


// copyright 부분에 년도구해서 넣기
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

*******************************************************************************************/





/** 화면의 스크롤이 일정값 이상이면 .badges 부분이 화면에서 사라지도록 처리 **/
const badgeEl = document.querySelector('header .badges');

/** [[주석1]]
window.addEventListener('scroll',function () {
  console.log('scroll!');
});
 */

// 검색창에 lodash cdn 입력하여 
// https://cdnjs.com/libraries/lodash.js 을 클릭하여 들어가 https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.21/lodash.min.js 을 복사하여 main.html 에 등록
// lodash 사용법은 
// https://lodash.com/ 에서 확인하고 익힌다.

/** [[주석1]] 은 너무많이 실행 됨으로 lodash 사용 */
// 0.3초에 한번 실행되게 제한을 적용
// _.throttle( 함수, 시간 ) 
window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);

  if(window.scrollY > 500) {
    // 배지 숨기기
    //badgeEl.style.display = 'none';
    
    // gsap 사용하여 배지 숨기기
    // gsap.to(요소,지속시간,옵션); badgeEl 를 0.6초동안 투명하게 
    gsap.to(badgeEl, .6, {
      opacity: 0 // 0.6초 동안 투명하여 서서히 안보이게 - 클릭가능
      ,display: 'none' // 실제요소가 사라지게 하여 클릭 불가능하게 처리
    });
    
    // 맨위로 이동 버튼 보이기!
    gsap.to('#to-top', .2, {
      x: 0
    });
  } else {
    // 배지 보이기
    //badgeEl.style.display = 'block';

    // gsap 사용하여 배지 보이기
    // gsap.to(요소,지속시간,옵션); badgeEl 를 0.6초동안 불투명하게
    gsap.to(badgeEl, .6, {
      opacity: 1 // 0.6초 동안 불투명하여 서서히 보이게
      ,display: 'block' // 실제요소가 display 되게 하여 클릭가능하게 
    }); 

    // 맨위로 이동 버튼 숨기기!
    gsap.to('#to-top', .2, {
      x: 100
    });
  }
}, 300)); 

// 검색창에 gsap cdn 입력하여 
// https://cdnjs.com/libraries/gsap 을 클릭하여 들어가 https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js 을 복사하여 main.html 에 등록
// gsap 사용법은 
// https://gsap.com/ 에서 확인하고 익힌다.

// #to-top 번튼 클릭시 scroll을 맨위로 이동하는 처리
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click' , function () { // 여기서의 익명함수를 '이벤트 핸들러' 라 한다.
  // 윈도우객체의 scroll을 0 위치까지 0.7초 동안 이동
  gsap.to(window, .7, {
    scrollTo: 0 // ScrollToPlugin js를 받아야지만 scrollTo 옵션을 쓸 수 있다.
  });
});

/** 순차적으로 보이기 *************************************************/
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function (fadeEl, index) {
  // gsap.to(요소,지속시간,옵션)
  gsap.to(fadeEl, 1, {
    // delay : 지연시간
    // index 는 0 부터
    // 첫번째요소 0.7, 두번째요소 1.4, 세번째요소 2.1, 네번째요소 2.8 초후에 실행
    delay: (index + 1) * .7 // 지연시간
    ,opacity: 1
  });
});

/** SWIPER *************************************************/
// new >> 자바스크립트 클래스 생성자
// new Swiper 라른 함수를 사용하여 기능작동
// new Swiper( 선택자 , 옵션 )
new Swiper('.notice-line .swiper-container', {
  direction: 'vertical' // 방향 : 수직
  ,autoplay: true       // 자동실행
  ,loop: true           // 반복실행
});

new Swiper('.promotion .swiper-container', {
  direction: 'horizontal' // 방향 : 수평 // 기본값임으로 생략가능
  ,slidesPerView: 3     // 한번에보이는 슬라이드 수 : 3개 // 기본값 1
  ,spaceBetween: 10     // 슬라이드 사이의 여백 10px
  ,centeredSlides: true // 슬라이드는 가운데서부터 시작하겠다. (왼쪽부터가 아닌 가운데서부터 0번째 인덱스 슬라이드 시작)
  ,loop: true           // 반복실행
  ,autoplay: {
    delay: 5000          // 5초에 한번씩 
  }       // 자동실행

  //페이지번호
  ,pagination: {
    el: '.promotion .swiper-pagination', // 페이지 번호 요소 선택자
    clickable: true,
  },

  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});

new Swiper('.awards .swiper-container',{
  direction: 'horizontal', // 방향 : 수평 // 기본값임으로 생략가능
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next',
  }
});

// <div class="material-icons">upload</div> 버튼 클릭에 따른 
// promotion 감추기/보이기
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function () {
  isHidePromotion = !isHidePromotion; // true|false 를 이전의 값의 반대로 set
  if(isHidePromotion) {
    // 숨김처리
    promotionEl.classList.add('hide'); // hide 클래스 추가
  } else {
    // 보임처리
    promotionEl.classList.remove('hide'); // hide 클래스 제거
  }
});

/** floating *************************************************/

// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  /*
  gsap.to(selector, 1, {
    y: 20,      // Y 축 20px 이동 에니메이션
    repeat: -1, // 무한 반복
    yoyo: true, // 한번 재생된 에니메이션을 다시 뒤로 재상하는 옵션
    ease: Power1.easeInOut, // 부드럽게 // Google 에서 gsap easing 으로 검색 greensock.com > docs > Easing 으로 접속해서 내용볼것
    delay: 1,
  });
  */
  gsap.to(
    selector,           // [인수] : 선택자
    random(1.5, 2.5),   // [인수] : 애니메이션 동작시간 
    {                   // [인수] : 옵션
    y: size,                // Y 축 20px 이동 에니메이션
    repeat: -1,             // 무한 반복
    yoyo: true,             // 한번 재생된 에니메이션을 다시 뒤로 재상하는 옵션
    ease: Power1.easeInOut, // 부드럽게 // Google 에서 gsap easing 으로 검색 greensock.com > docs > Easing 으로 접속해서 내용볼것
    delay: random(0, delay),
  });
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', .5, 15);
floatingObject('.floating3', 1.5, 20);



/** ScrollMagic (스크롤과 요소의 상호작용을 위한 라이브러리 사용) *************************************************/
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function (spyEl) {
  // Scene : 특정한 요소를 감시하는 옵션을 지정하는 method
  // setClassToggle : 특정한 요소에 클래스를 넣었다 뺏다가 하는 함수
  // 
  new ScrollMagic
    .Scene({
      riggerElement: spyEl,   // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8         // 감시트리거가 걸린 viewport의 h 지점 - ( viewport 맨위 : 0 , 맨아래 ; 1 ) 
                              // 화면에 보여진다 판단되면 setClassToggle 실행됨.
    })
    .setClassToggle(spyEl, 'show') // ( 감시element , 토클 할 css 클래스 )
    .addTo(new ScrollMagic.Controller());
});


