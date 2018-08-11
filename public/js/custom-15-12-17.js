$(document).ready(function () {

    //Scroll to section Restaurant profile 
    $(document).on('click', '.p-sec-scroll', function(e){
        e.preventDefault();
        var ID = $(this).attr('href');
        var scrollVal = $(ID).offset().top;
        $('html, body').scrollTop(scrollVal - $('header').height());
    });
        
    
        

        //Quantity Counter
        $(document).on("click", '.p-count', function() {

              var $button = $(this);
              var oldValue = $button.parent().find("input").val();
              if ($button.text() == "+") {
                  var newVal = parseFloat(oldValue) + 1;
                } else {
               // Don't allow decrementing below zero
                if (oldValue > 0) {
                  var newVal = parseFloat(oldValue) - 1;
                } else {
                  newVal = 0;
                }
              }
              $button.parent().find("input").val(newVal);            
        });    

    //Resturant profile accordian
    $(document).on('click', '.p-rest-accord', function(){
        if(clickToggle){
            $(this).toggleClass('active').next().slideToggle();
        }        
    });

    /*Scroll to top*/
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 700);
        });
    }

    /*New address popup other address function*/
    $(document).on('click', '.p-add-par input', function(){
        
        if($('.p-other').is(':checked')){
            $(this).parents('.p-add-par').next('.p-other-add').show();    
        }
        else{
            $(this).parents('.p-add-par').next('.p-other-add').hide();
        }
    });

    /*Side bar toggle*/        
    $('.my-Account').click(function () {
        if(clickAllowed) {            
            $('.p-top-arrow').removeClass('active');
            $('.rhs-fixed-ord-deatail').removeClass('p-show');
            $('body').removeClass('scroll-stop-alt p-overlay-alt');

            $('.lhs-menu').toggleClass('show');
            $('body').toggleClass('scroll-stop p-overlay');
            
        }
    });

    /*Cart Total slide*/
    var clickedOnce = 1;
    $('.p-cart-slide').click(function(){
        if(clickAllowed) {            
            $('.lhs-menu').removeClass('show');
            $('body').removeClass('scroll-stop p-overlay');

            $('.p-top-arrow').toggleClass('active');
            $('.rhs-fixed-ord-deatail').toggleClass('p-show');
            $('body').toggleClass('scroll-stop-alt p-overlay-alt');           
        }
    });
    

    /*Add promo accordian*/
    $(document).on('click', '.p-accord-btn', function(){

        $(this).parents('.p-accord-wrap').find('.p-accord-slide').slideToggle();
    });

    //Pay Button Place Order
    $(document).on('click', '.p-paypal', function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.p-pay-btn').show().siblings().hide();
    });
    $(document).on('click', '.p-order', function(e){
        e.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        $('.p-order-btn').show().next().hide();
    });

    //Order history accordian
    $(document).on('click', '.p-order-toggle', function(){
        $(this).toggleClass('active').parent().next().slideToggle();
        $(this).parent().parent().siblings().find('.inner').slideUp().find('.p-order-toggle').removeClass('active');
        $(this).parent().parent().siblings().find('.p-order-toggle').removeClass('active');
    });


    /*mob-footer*/
$(".mob-foot h5").click(function(){
    
      $(this).toggleClass("active").next("ul").slideToggle();
    /*$(this).children('arrow-right').toggleClass('active');*/
   });
    //23-11-2017 PK
    $(document).on('click', '.p-toggle-click', function(){
        $(this).parents('.p-toggle-parent').find('.p-toggle').slideToggle();
        $(this).children('.p-down').toggleClass('p-rotate');

         if ($('.p-read-txt').text() == "Read More")
           $('.p-read-txt').text("Read Less")
        else
           $('.p-read-txt').text("Read More");
    });

    
    var $menu_tabs = $('.menu__tabs li a');
    $menu_tabs.on('click', function (e) {
        e.preventDefault();
        $menu_tabs.removeClass('active');
        $(this).addClass('active');

        $('.menu__item').fadeOut(300);
        $(this.hash).delay(300).fadeIn();
    });
    $('.toggle').click(function (e) {
        e.preventDefault();

        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().stop().slideUp(350);
        } else {
            $this.parent().parent().find('li .inner').removeClass('show');
            $this.parent().parent().find('li .inner').slideUp(350);
            $this.next().stop().toggleClass('show');
            $this.next().stop().slideToggle(350);
        }
    });
    
    /*pop up script */
    $(document).on("click", function (e) {
        if ($(".opend-pop").length > 0 && !$(e.target).is(".opend-pop , .opend-pop *, [data-attribute] , [data-attribute] *,[data-disable], .run_it, .run_it *, .bar-notification, .bar-notification *")) {
            $(".opend-pop").fadeOut();
            $(".pop-wrapper").removeClass("overlaypop");

            $("html,body").css('overflow', 'visible');
        }
    });
    $("body").on("click", "[data-attribute] , [data-attribute] *", function (e) {
        e.preventDefault();
       
        $(".pop-wrapper").removeClass("overlaypop");
        $('.fork-pop').removeClass('opend-pop');
        $('.fork-pop').fadeOut();
        $("html,body").css('overflow', 'visible');

        if ($(this).attr("data-attribute") == "create-plylist_pop") {

            $("[data-pop='userplaylist_pop']").addClass("opend-pop").fadeOut();
        }
        $("[data-pop='" + $(this).attr("data-attribute") + "']").addClass("opend-pop").fadeIn();
        $(".pop-wrapper").addClass("overlaypop");
        $("body").css('overflow', 'hidden');
    });
    $('.close_model , .p-close').click(function () {
        $(".pop-wrapper").removeClass("overlaypop");
        $('.fork-pop').removeClass('opend-pop');
        $('.fork-pop').fadeOut();
        $("html,body").css('overflow', 'visible');
    });
    $.fn.openPopup = function (popVal) {
        $("[data-pop='" + popVal + "']").addClass("opend-pop").fadeIn();
        $("body").addClass("overlaypop");
    };
    $.fn.closePopup = function (popVal) {
        $("[data-pop='" + popVal + "']").removeClass("opend-pop").fadeOut();
        $("body").removeClass("overlaypop");
    };
    /*log-reg switch js*/
    $('.st-log').click(function (e) {
        e.preventDefault;
        $('.reg-pop').removeClass('opend-pop').fadeOut();
        $('.log-pop').addClass('opend-pop').fadeIn();
    })
})





$(window).on('load resize', function () {

    

    //Restaurant profile accordian
    if ($(window).width() <= 768) {
        clickToggle = true;
    }
    else{         
        clickToggle = false;
    }

    /*Side bar toggle*/
    if ($(window).width() <= 1000) {
        clickAllowed = true;
        if($('.p-show').length == 0){
            $('.p-top-arrow').removeClass('active');
        }
    }
    else{         
        clickAllowed = false;
        $('.p-top-arrow').addClass('active');
    }
    

    $('.banner-sec.top').height(window.innerHeight);
    //$(this).scrollTop(0);
    $("#loader-sec").fadeOut();
//	$(".app-btn li").click(function(){
//        $(this).addClass("active").siblings().removeClass("active");
//        $("#getApple_app").show();
//    });
    //$('.fork-pop').height(window.innerHeight - 100).css('overflow', 'auto');
    if($(window).width() >= 768){
        $rightDiscount= $(".right_discount").height();
        $(".left_discount").css("height", $rightDiscount);

        $rightMenu= $(".left_menu").height();
        $(".right_menu").css("height", $rightMenu);
        
        $rightServe = $(".right_serve").height();
        $(".left_serve").css("height", $rightServe);
        }
    
    var $animation_elements = $('.animate-element');
    var $window = $(window);
    
    function check_if_in_view() {
        var window_height = $window.height();
        var window_top_position = $window.scrollTop();
        var window_bottom_position = (window_top_position + window_height);
        $.each($animation_elements, function() {
            var $element = $(this);
            var element_height = $element.outerHeight();
            var element_top_position = $element.offset().top;
            var element_bottom_position = (element_top_position + element_height);

            //check to see if this current container is within viewport
            if (element_top_position <= window_bottom_position ) {
              $element.addClass('in-view');
            } 
          });
        }
    
    $('#getApp').click(function(e){
        e.preventDefault();
        $('.app-link-sec').hide();
        $('.sent-link').show();
        
    });
    $('#sentAPP').click(function(e){
        e.preventDefault();
        $('.sent-link').hide();
        $('.app-link-sec').show();
        $("#phone").val("");
    });
    
    jQuery(function($) {
      $(".touchslider").touchSlider({
          mouseTouch: true,
          autoplay: true
      });
    });
    
    
  /*footer*/
    
    /*dashboard inner pages js*/
    var hh = $('header').outerHeight();
  
    $('.lhs-menu, .filters').height(window.innerHeight - hh);
    $('.rhs-fixed-ord-deatail').height(window.innerHeight - hh);
    //$(window).scroll(function () {
    //    debugger;
    //    var $this = $(this),
    //        $head = $('header');
    //    if ($this.scrollTop() > hh) {
           
    //        $head.addClass('fixed_header');
    //    } else {
    //        $head.removeClass('fixed_header');
    //    }
    //});

  

    /*dashboard inner end*/
    $window.on('scroll resize', check_if_in_view);
    $window.trigger('scroll');
    if (window.outerWidth <= 800)
    {
        $('.prb-sld .nearby-spots').removeAttr("id");
    }
    if (window.outerWidth <= 1000) {
        $('.Wallop').children().removeClass('Wallop-item');

    }

});


