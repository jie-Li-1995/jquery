// var H3C = H3C || {};
// H3C.isWeiXinBrowser = function() {
//     var ua = navigator.userAgent.toLowerCase();
//     if (ua.match(/MicroMessenger/i) == "micromessenger") {
//         return true;
//     } else {
//         return false;
//     }
// }
// var wxshare = function() {
//     var b_inner = H3C.isWeiXinBrowser();
//     if (b_inner) {
//         var share = '';
//         var _head = $('head:eq(0)');
//         share += '<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"> </sc' + 'ript>\r\n';
//         share += '<script type="text/javascript">\r\n';
//         share += 'var title = "' + $('title', _head).html() + '";\r\n';
//         share += 'var desc = "' + $('meta[name="description"]', _head).attr('content') + '";\r\n';
//         share += 'var link = "' + window.location.href + '";\r\n';
//         if (typeof(imgUrl) !== 'undefined') {
//             share += 'var imgUrl ="' + imgUrl + '";\r\n';
//         } else {
//             share += 'var imgUrl = "http://www.h3c.com/cn/tres/WebUI/images/h3c-wxshare-logo.jpg";\r\n';
//         }
//         share += '</sc' + 'ript>\r\n';
//         share += '<script type="text/javascript" src="http://share.h3c.com/share/jssdk.js"></scr' + 'ipt>'
//         $('body').append(share);
//     }
// }
// 判断浏览器
function myBrowser(){
    var userAgent = window.navigator.userAgent; 
    var isOpera = userAgent.indexOf("Opera") > -1; 
    var isIE = userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera ; 
    var isFF = userAgent.indexOf("Firefox") > -1 ; 
    var isSafari = userAgent.indexOf("Safari") > -1 ;    
    if(isIE){
        if( /MSIE 6.0/ig.test(userAgent) ){ return 'IE6' }
        if( /MSIE 7.0/ig.test(userAgent) ){ return 'IE7' }
        if( /MSIE 8.0/ig.test(userAgent) ){ return 'IE8' }
        if( /MSIE 9.0/ig.test(userAgent) ){ return 'IE9' }
        return 'IE';    
    }
    if(isFF){ return "FF"; }
    if(isOpera){ return "Opera"; }
    return false;   
}

if (myBrowser() === 'IE8' || myBrowser() === 'IE7' || myBrowser() === 'IE6') {
    $("html").addClass('ie8');
    $("body").append('<div id="old"><div class="container"><b>您的浏览器版本过低，</b> 建议使用IE9及以上版本浏览器浏览本站。 <a class="ignore">Ignore</a></div></div>')
    $('#header').css('top', $('#old').height());
    $('.page-container').css('margin-top', $('#old').height() + $('#header').height() + 'px')

    $('a.ignore').click(function(event) {
        $('#old').hide()
        $('#header').attr('style', '')
        $('.page-container').attr('style', '')
    });
}
// 判断是否为PHONE
function isPhone(){
    var userAgent = window.navigator.userAgent; 
    var Agents = new Array("Android", "iPhone", "SymbianOS", "Windows Phone"); 
    var flag = false; 
    for (var v = 0; v < Agents.length; v++) { 
       if (userAgent.indexOf(Agents[v]) > -1) { flag = true; break; } 
    } 
    return flag;  
} 

$(function(){
     // wxshare();
    var isIE8 = $('html').hasClass('ie8');
    if(!isIE8){
        var mySwiperHero = new Swiper('.index-container', {
            // grabCursor: true,
            // autoplay:5000,
            // paginationClickable: true,
            slidesPerView: 1,
            // pagination: '.index-pagination',
            paginationClickable: true,
            swipeHandler : '.swipe-handler'
        });
        var mySwiperNew = new Swiper('.index-news-container', {
            autoplay:5000,
            nextButton:'.swiper-next',
            prevButton:'.swiper-prev',
            autoplayDisableOnInteraction : false
        });

        var mySwiperBestViews = new Swiper('.bestViews-container', {
            autoplay:5000,
            paginationClickable: true,
            pagination: '.bestViews-pagination',
            paginationClickable: true,
            spaceBetween: 10,
            autoplayDisableOnInteraction : false
        });
        var productImageSwiper = new Swiper ('.product-images-container', {
            // loop: true,
            pagination: '.product-images-pagination',
            nextButton: '.product-images-next',
            prevButton: '.product-images-prev',
            paginationClickable: true
        });
        var productLen = $('.product-images-container').find('.swiper-slide').length
        if(productLen < 2){
            $('.product-images').find('.product-images-prev').hide();
            $('.product-images').find('.product-images-next').hide();
             $('.product-images').find('.product-images-pagination').hide();
        }
        var mySwiperAutonomouslyMb = null;
        var mySwiperCommercialMb = null;
        var mySwiperCommercial = null;
        mySwiperAutonomouslyMb = new Swiper('.autonomously-mb-container', {
            paginationClickable: true,
            pagination: '.autonomously-mb-pagination',
            paginationClickable: true,
            spaceBetween: 10
        });
        mySwiperCommercial = new Swiper('.commercial-container', {
            grabCursor: true,
            paginationClickable: true,
            pagination: '.commercial-product-pagination',
            paginationClickable: true,
            spaceBetween: 10
        });
         mySwiperCommercialMb = new Swiper('.commercial-mb-container', {
            grabCursor: true,
            paginationClickable: true,
            pagination: '.commercial-mb-pagination',
            paginationClickable: true,
            spaceBetween: 10
        });
    }
   if(!isPhone()){
        /*新闻列表*/
        $('.news-list ul.list li,.serveNoticel .serveNoticel-box,.recommendProducts li,.contactUs .contactUs-icon li,.serviceCenter .service-centent-box,.column-list-image-text .item-text span').on({
            mouseenter: function() {
                $(this).addClass('active');
                $(this).find('.moreBtn').addClass('active');
            },
            mouseleave: function() {
                $(this).removeClass('active');
                $(this).find('.moreBtn').removeClass('active');
            }
        })
        $('.news-list .first-news-text,.news-img-text-list li,.characters-intro').on({
            mouseenter: function() {
               $(this).find('.moreBtn').addClass('active');
            },
            mouseleave: function() {
                $(this).find('.moreBtn').removeClass('active');
            }
        })
        if(!isIE8){
            var recommendProducts = new Swiper('.recommendProducts-container', {
                slidesPerView: 4,
                paginationClickable: true,
                spaceBetween: 20
            });
        }
        
        setTimeout(function() {
            $('.News').each(function(index, box) {
                var maxHeight = 0
                $(box).find('.item-height-box').each(function(index, liEle) {
                    if ($(liEle).height() > maxHeight) maxHeight = $(liEle).height();
                });
                $(box).find('.item-height-box').css('height', maxHeight + 18 +'px');
                $(box).find('.item-height-box').find('.news-img-text-list').find('li').css('height', maxHeight + 18 +'px');
            });
            // 
        },1000)
    }else{
        var recommendProducts = new Swiper('.recommendProducts-container', {
            pagination: '.recommendProducts-pagination',
            paginationClickable: true,
            spaceBetween: 20
        });
        var contactUsIconH = $('.contactUs-icon li').width();
        $('.contactUs-icon li').height(contactUsIconH);
        $('.policy-state-box li .text-box').each(function(){
            if($(this).hasClass('text-box2')){
                $(this).removeClass('text-box2')
            }
        })

    }
    setTimeout(function() {
        $('.contact-us-box').each(function(index, box) {
            var maxHeight = 0
            $(box).find('li').each(function(index, liEle) {
                if ($(liEle).height() > maxHeight) maxHeight = $(liEle).height();
            });
            $(box).find('li').css('height', maxHeight + 10 +'px');
        });
        $('.item-text-box').each(function(index, box) {
            var maxHeight = 0
            $(box).find('.text').each(function(index, liEle) {
                if ($(liEle).height() > maxHeight) maxHeight = $(liEle).height();
            });
            console.log(maxHeight)
            $('.item-text-box').find('.text').css('height', maxHeight + 10 + 'px');
        });
    },1000)
     window.onresize = function() {
        setTimeout(function() {
            $('.contact-us-box').each(function(index, box) {
                var maxHeight = 0
                $(box).find('li').each(function(index, liEle) {
                    if ($(liEle).height() > maxHeight) maxHeight = $(liEle).height();
                });
                $(box).find('li').css('height', maxHeight + 10 +'px');
            });
             $('.item-text-box').each(function(index, box) {
                var maxHeight = 0
                $(box).find('.text').each(function(index, liEle) {
                    if ($(liEle).height() > maxHeight) maxHeight = $(liEle).height();
                });
                console.log(maxHeight)
                $('.item-text-box').find('.text').css('height', maxHeight + 10 + 'px');
            });
        },1000)
     }
    var indexNesL = $('.index-news-container .swiper-slide').length-1;
    $('.swiper-prev').mouseover(function() {
       if(mySwiperNew.activeIndex == 0){
            $(this).removeClass('active')
       }else{
        $(this).addClass('active')
       }
    }).mouseleave(function() {
        $(this).removeClass('active')
    });
    $('.swiper-next').mouseover(function() {
       if(mySwiperNew.activeIndex == indexNesL){
            $(this).removeClass('active')
       }else{
        $(this).addClass('active')
       }
    }).mouseleave(function() {
        $(this).removeClass('active')
    });
    function tabSwitch(){
        var winW = $(window).width();
        $('.product .tabNav li').on('click',function(){
            $(this).addClass('active');
            $(this).siblings('li').removeClass('active');
            var _index = $(this).index();
            $('.tabs-text .text').hide()
            $('.tabs-text .text').eq(_index).show()
            if(winW>767){
                $('.tabs-body').find('.tabs-content').hide();
                $('.tabs-body').find('.tabs-content').eq(_index).show();
                if(_index == 1){
                    $('.tabs-body .swiper-wrapper').css('transform','translate3d(0px, 0px, 0px)');
                    $('.tabs-body .swiper-wrapper').css('transition-duration','0');
                    $('.tabs-body .swiper-scrollbar-drag').css('transform','translate3d(0px, 0px, 0px)');
                }
            }else{
                $('.tabs-mb-body .swiper-wrapper').css('transform','translate3d(0px, 0px, 0px)');
                $('.tabs-mb-body .swiper-wrapper').css('transition-duration','0');
                $('.tabs-mb-body .swiper-scrollbar-drag').css('transform','translate3d(0px, 0px, 0px)');
                $('.tabs-mb-body').find('.tabs-mb-content').hide();
                $('.tabs-mb-body').find('.tabs-mb-content').eq(_index).show();
                if(_index == 1){
                    
                    if(mySwiperCommercialMb){
                        mySwiperCommercialMb.destroy(false);
                    }
                     mySwiperCommercialMb = new Swiper('.commercial-mb-container', {
                        grabCursor: true,
                        paginationClickable: true,
                        pagination: '.commercial-mb-pagination',
                        paginationClickable: true,
                        spaceBetween: 10
                    });
                }else{
                    if(mySwiperAutonomouslyMb){
                        mySwiperAutonomouslyMb.destroy(false);
                    }
                    mySwiperAutonomouslyMb = new Swiper('.autonomously-mb-container', {
                        grabCursor: true,
                        paginationClickable: true,
                        pagination: '.autonomously-mb-pagination',
                        paginationClickable: true,
                        spaceBetween: 10
                    });
                }
            }
        })
        
    }
    tabSwitch()
    $('.product-tabs-btn li').on('click',function(){
        $('.product-tabs-btn li').removeClass('active')
        $(this).addClass('active');
        $('.product-technicalData').hide();
        $('.product-technicalData').eq($(this).index()).show();
        productBoxminHeight()
    })
    /*全部产品切换*/
    $('.productAll-list li').on('click',function(){
        $('.productAll-list li').removeClass('active');
        $(this).addClass('active');
        $('.product-type-box').find('.product-type').hide();
        $('.product-type-box').find('.product-type').eq($(this).index()).show();
    })
    /*定义tab切换内容的最小高度*/
    function productBoxminHeight(){
        if(!isPhone()){
            $('.product-container').each(function(){
                var productContainer = $(this).find('.product-tabs').height()
                $(this).find('.product-details').css('min-height',productContainer)
            })
        }
    }
    productBoxminHeight()
    
    /*产品详情切换*/
    $('.product-tabs li').on('click',function(){
        $('.product-details').scrollTop(0)
        var _index = $(this).index();
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        $(this).parents('.product-tabs').siblings('.product-details').find('.product-detail-content').hide();
        $(this).parents('.product-tabs').siblings('.product-details').find('.product-detail-content').eq(_index).show();
        if(_index == 0){
            $('.product-tabs').css('border-top','1px solid #6b017d');
        }else{
            $('.product-tabs').css('border-top','1px solid #dfdfdf');
        }
    });
    $('.product-details .tab-title').click(function() {
        if ($(this).hasClass('active')) {
            $(this).next('.product-detail-content').css('display', 'none');
            $(this).parents('.product-details').find('.tab-title').removeClass('active');
        } else {
            $(this).siblings('.tab-title').removeClass('active');
            $(this).parents('.product-details').find('.product-detail-content').css('display', 'none');
            $(this).next('.product-detail-content').css('display', 'block');
            $(this).addClass('active');
            $('html,body').animate({scrollTop: $(this).offset().top}, 0);
        }
    });
})
