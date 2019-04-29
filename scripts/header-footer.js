$(function(){
	var winW = $(window).width();
	if(winW > 767){
		$(".nav li").on({
			mouseenter: function() {
				var index = $(this).index();
				$('.nav li').removeClass('active');
				$(this).addClass('active');
				$('.headerNavBox').show();
				$('.headerNavBox').find('.headerNav').hide();
				$('.headerNavBox').find('.headerNav').eq(index).show();
				$('.rightProduct').find('.navCoreProduct').hide();
				$('.rightProduct').find('.navCoreProduct').eq(index).show();
			}
		})
		$(".headerNavBox").on("mouseleave", function(){
			$('.headerNavBox').hide();
			$('.headerNavBox').find('.headerNav').hide();
			$('.nav li').removeClass('active');
			$('.rightProduct').find('.navCoreProduct').hide();
		})
	}else{
		//头部移动端导航
		$('.menuMb .menuBtn').on('click',function(){
			$(this).hide();
			$(this).siblings('.menuClose').show();
			$('#header .headerNavBox .leftNav .headerNav').show();
			$('.headerNavBox').slideDown();

		})
		$('.menuMb .menuClose').on('click',function(){
			$(this).hide();
			$(this).siblings('.menuBtn').show();
			$('.headerNavBox').slideUp();
			$('.headerNav h3').removeClass('active');
			$('.headerNav ul').slideUp();
			$('.headerNav ul>li>span').removeClass('active');
			$('.headerNav ul>li>ol').slideUp();
		});

		$('.headerNav h3').on('click',function(){
			var isShow = $(this).hasClass('active');
			if(isShow){
				$(this).removeClass('active');
				$(this).siblings('ul').slideUp();
			}else{
				$('.headerNav ul').slideUp();
				$('.headerNav h3').removeClass('active');
				$(this).addClass('active');
				$(this).siblings('ul').slideDown();
			}
		})

		$('.headerNav ul>li>span').on('click',function(){
			var isShow = $(this).hasClass('active');
			if(isShow){
				$(this).removeClass('active');
				$(this).siblings('ol').slideUp();
			}else{
				$('.headerNav ul>li>span').removeClass('active');
				$('.headerNav ul>li>ol').slideUp();
				$(this).addClass('active');
				$(this).siblings('ol').slideDown();
			}
		})

		//底部部移动端导航
		$('#footer .right_nav h2').on('click',function(){
			var isShow = $(this).hasClass('active');
			if(isShow){
				$(this).removeClass('active');
				$(this).siblings('.box').slideUp();
			}else{
				$('#footer .right_nav h2').removeClass('active');
				$('#footer .right_nav .box').slideUp();
				$(this).addClass('active');
				$(this).siblings('.box').slideDown();
			}
		})
	}

    /*热线电话浮层*/
	$('#hotline').on({
        mouseenter: function() {
            $(this).addClass('on');
            $(this).stop().animate({right: "0"}, 800 );
		},
        mouseleave: function() {
        	$(this).stop().animate({right: "-280px"},800,function(){
        		$(this).removeClass('on');
        	})
        	
        }
    })
})