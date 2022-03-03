/*네브제이쿼리*/
$(function(){
  $(".navbar_nav> li").hover(function(){
      $(this).toggleClass("show").siblings().removeClass("show");
  });    
});
/*네브클릭시백그라운드고정제이쿼리*/
$(function(){	
	$('.tabnav a').click(function () {	
		$('.tabnav a').removeClass('active');
		$(this).addClass('active');	
	})
  });

/*AOS제이쿼리*/
AOS.init({
  duration: 2000 //aos 나타나는 속도
})

/*카드슬라이드 제이쿼리*/
$(document).on('ready', function() {
  $(".slider").slick({
    //설정 값을 원하지 않는 경우 true값을 false로 바꿔주세요.

    centerMode: true, //센터 모드
    centerPadding: "100px", //센터모드 양 끝에 보이는 이미지 간격
    speed: 2000, //다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간
    autoplay:true, //자동 갤러리 구문
    autoplaySpeed:2000, //자동 갤러리가 넘어가는 시간
    slidesToShow: 1,//보여지는 갤러리 수
    slidesToScroll: 1,//넘어가는 갤러리 수
    pauseOnHover:true, // 마우스 호버시 슬라이드 이동 멈춤
    arrows: true, //화살표 버튼
    dots: true, //슬라이드 밑에 동그라미 버튼
    infinite: true //무한반복
  });
});

/*디테일태그 제이쿼리*/
window.addEventListener('DOMContentLoaded', function(){
  document.querySelectorAll('details').forEach(function(item){
      item.addEventListener("toggle", event => {
      let toggled = event.target;
      if (toggled.attributes.open) {/* 열었으면 */
        /* 나머지 다른 열린 아이템을 닫음 */
        document.querySelectorAll('details[open]').forEach(function(opened){
            if(toggled != opened) /* 현재 열려있는 요소가 아니면 */
              opened.removeAttribute('open'); /* 열림 속성 삭제 */
        });
      }
    })
  });
});

