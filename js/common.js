console.log('JS');

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