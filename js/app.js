$(function () {
  // フロートヘッダーメニュー
  var targetHeight = $('.js-float-menu-target').height();
  $(window).on('scroll', function () {
    $('.js-float-menu').toggleClass(
      'float-active',
      $(this).scrollTop() > targetHeight
    );
  });

  //タブの開閉
  $('.accordion_one .accordion_header').click(function(){
    //クリックされた.accordion_oneの中の.accordion_headerに隣接する.accordion_innerが開いたり閉じたりする。
    $(this).next('.accordion_inner').slideToggle();
    $(this).toggleClass("open");
  });

  // SPメニュー
  $('.js-toggle-sp-menu').on('click', function () {
    $(this).toggleClass('active');
    $('.js-toggle-sp-menu-target').toggleClass('active');
  });
  $('.js-menu-link').on('click', function () {
    $('.js-menu-link').removeClass('active');
  });

  //ホバー画像切り替え
  $(".js-change-hover1").hover(function () {
		$(".js-change-image").attr("src","./images/history1.jpg");
	});
  $(".js-change-hover2").hover(function () {
		$(".js-change-image").attr("src","./images/history2.jpg");
	});
	$(".js-change-hover3").hover(function() {
		$(".js-change-image").attr("src","./images/history3.png");
	});
  $(".js-change-hover4").hover(function() {
		$(".js-change-image").attr("src","./images/history4.jpg");
	});
});
  
