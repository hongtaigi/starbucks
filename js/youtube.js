// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {
  // <div id="player"></div> 의 id 값 player 를 YT.Player() 의 첫번째 인수로 입력
  new YT.Player('player', {
    //height: '360',
    //width: '640',
    videoId: 'An6LvWQuj_8', // 재생할 youtube 영상 ID
    playerVars: {
      autoplay: true, // 자동 재생 여부
      loop: true,     // 반복 재생 여부
      playlist: 'An6LvWQuj_8',  // loop: true 인경우
                                // 반복 재생할 유튜브 영상 ID 목록 - true인 경우 필수입력 해야함.
    },
    events: {
      onReady: function (event) {
        event.target.mute() // 음소거
      },
    },
    // events: {
    //   'onReady': onPlayerReady,
    //   'onStateChange': onPlayerStateChange 
    // }
  });
}