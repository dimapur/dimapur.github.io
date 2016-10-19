/**
 * Created by NKH55 on 04.02.2015.
 */

$(document).ready(function(){
    function hasClass(ele,cls) {
        return !!ele.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)'));
    }
    function addClass(ele,cls) {
        if (!hasClass(ele,cls)) ele.className += " "+cls;
    }

    function removeClass(ele,cls) {
        if (hasClass(ele,cls)) {
            var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
            ele.className=ele.className.replace(reg,' ');
        }
    }
    window.onload = function () {
        if (window.addEventListener)
            document.addEventListener('DOMMouseScroll', moveObject, false);
        document.onmousewheel = moveObject;
    };
    function moveObject(event) {
        var body = document.getElementById('body');

        if(hasClass(body,"scroll")) {
            return false;
        }
        else {
            addClass(body, "scroll");
            var delta = 0;
            if (!event)event = window.event;

            if (event.wheelDelta) {
                delta = event.wheelDelta / 60;
            } else if (event.detail) {
                delta = -event.detail / 2;
            }
            if(delta > 0) {
                clickPrev();
            }
            else {
                clickNext();
            }
            setTimeout(function(){
                removeClass(body, "scroll");
            },500)
        }
    }
    var imgWidth = $('[u4-img]').width();
    var body = $('body');
    var nextPrev = $('[data-next], [data-prev]');
    var firstLi = $('[data-page]:first-child');
    var lastLi = $('[data-page]:last-child');
    var singUp = $('.sign-up');
    var backToStart = $('.back-to-start');

    function clickNext(){
        $('[data-pages]').find('[data-page].active').next().trigger('click');
        $('[data-prev]').addClass('active');
        nextPrev.addClass('disabled').attr('disabled',true);

        setTimeout(function(){
            nextPrev.removeClass('disabled').attr('disabled',false);
        },100);
    }

    function clickPrev(){
        $('[data-pages]').find('[data-page].active').prev().trigger('click');
        $('[data-next]').addClass('active');
        nextPrev.addClass('disabled').attr('disabled',true);
        setTimeout(function(){
            nextPrev.removeClass('disabled').attr('disabled',false);
        },100);
    }

    $(window).load(function () {

        $('[home-wrap]').width(imgWidth);

        setTimeout(function(){
            $('[data-page]:first-child').trigger('click');
        },300);

        firstLi.on('click tap',function(){
            $('[data-next]').addClass('active');
            $('[data-prev]').removeClass('active');
        });

        lastLi.on('click tap',function(){
            $('[data-next]').removeClass('active');
            $('[data-prev]').addClass('active');
        });

        singUp.on('click tap',function(e){
            e.stopPropagation();
            e.preventDefault();
            lastLi.trigger('click');
        });

        backToStart.on('click tap',function(e){
            validate();
            $(backToStart).load("index.html");
            
        });

        $('[data-next]').on('click tap',function(){
            if($(this).hasClass('disabled')){
                return false
            }
            else {
                clickNext();
            }
        });

        $('[data-prev]').on('click tap',function(){
            if($(this).hasClass('disabled')){
                return false
            }
            else {
                clickPrev();
            }
        });

        var interval;
        var a = $('.phone_3_wrap');
        var b = a.find('[data-item]:last-child');

        var c = $('.wr-phone_3');
        var d = c.find('[data-text] p:first-child');
        d.addClass('active');

        var aa = $('.phone_4_wrap');
        var bb = aa.find('[data-item]:last-child');


        var cc = $('.wr-phone_4');
        var dd = cc.find('[data-text] p:first-child');

        dd.addClass('active');

        function cycle(clear){
            var sd = c.find('[data-text] p.active').removeClass('active');
            var sb = a.find('[data-item].active').removeClass('active');
            if(clear) {
                return false;
            }
            else {
                var prev_phone = sb.prev();
                var prev_text = sd.next();
                if(prev_phone.length == 0 && prev_text.length == 0) {
                    prev_phone = b;
                    prev_text = d;
                }
                prev_phone.addClass('active');
                prev_text.addClass('active');
            }

        }

        function cycle2(clear){
            var sd = cc.find('[data-text] p.active').removeClass('active');
            var sb = aa.find('[data-item].active').removeClass('active');
            if(clear) {
                return false;
            }
            else {
                var prev_phone = sb.prev();
                var prev_text = sd.next();
                if(prev_phone.length == 0 && prev_text.length == 0) {
                    prev_phone = bb;
                    prev_text = dd;
                }
                prev_phone.addClass('active');
                prev_text.addClass('active');
            }
        }

        var page = 0;
        var ifpage = 0;
        var say_logo = $('[data-logo-say-item]');

        $('[data-pages]').on('click tap','[data-page]',function(){
            if($(this).hasClass('active') || $(this).hasClass('disabled')){
                return false
            }
            var siblings = $(this).addClass('active').siblings('[data-page]');
            siblings.removeClass('active').addClass('disabled');
            page = $(this).data('page');
            if(ifpage) {
                var a = Math.abs(ifpage) - Math.abs(page);
                a = Math.abs(a);
                if(a > 1) {
                    body.addClass('hide_all_'+page+' roll_'+ifpage+'');
                    var rr = ifpage;
                    setTimeout(function(){
                        body.removeClass('hide_all_'+page+' roll_'+rr+'');
                    },90);
                }
            }

            $(say_logo[say_logo.length - page]).addClass('active').siblings().removeClass('active');

            ifpage = page;

            switch (page) {
                case 1:
                    body.addClass('step1').removeClass('step2 step2_1 step3 step4 step5 step6 step7 step8');
                    break;
                case 2:
                    body.addClass('step2').removeClass('step3 step4 step5 step6 step7 step8');
                    break;
                case 3:
                    cycle(1);
                    body.addClass('step3 step2').removeClass('step4 step5 step6 step7 step8');
                    clearInterval(interval);
                    break;
                case 4:
                    body.addClass('step4 step3 step2').removeClass('step5 step6 step7 step8');
                    cycle2(1);
                    cycle(1);

                    b.addClass('active');
                    d.addClass('active');
                    clearInterval(interval);

                    interval = setInterval(cycle, 5000);
                    break;
                case 5:
                    body.addClass('step5 step4 step3 step2').removeClass('step6 step6 step7 step8');
                    cycle(1);
                    cycle2(1);
                    b.addClass('active');
                    d.addClass('active');
                    setTimeout(function(){
                        b.removeClass('active');
                        d.removeClass('active');
                    }, 500);

                    bb.addClass('active');
                    dd.addClass('active');
                    clearInterval(interval);

                    interval = setInterval(cycle2,4000);
                    break;
                case 6:
                    body.addClass('step6 step5 step4 step3 step2').removeClass('step7 step8');
                    cycle2(1);
                    bb.addClass('active');
                    dd.addClass('active');
                    clearInterval(interval);
                    break;

                case 7:
                    body.addClass('step7 step6 step5 step4 step3 step2').removeClass('step8');
                    break;

                case 8:
                    body.addClass('step8 step7 step6 step5 step4 step3 step2');
                    break;
            }
            setTimeout (function(){
                siblings.removeClass('disabled');
            }, 1000)
        });

        function validateEmail(email) {
            // http://stackoverflow.com/a/46181/11236
            var re = /^[a-zA-Z]\$/;
            return true;
        }

        function validate(){
            var email = $("#reg-email").val();
            if (validateEmail(email)) {
                $('form').addClass('ok').load("html.hfh");
                $('.sign-up').hide();

                var data = $(this).serializeArray();
        		data.push({name: 'AJAX_CALL', value: 'Y'});

        		$.post(window.location.href,data,function(result){},'html');
                $( 'form' ).load( "ajax/test.html #container" );

                
            } else {
                $("form").addClass('wrong');
                setTimeout(function(){
                    $('form').removeClass('wrong')
                },500);
            }
            return false;
        }

        function check() {
            var hhh = screen.height,
                h = screen.availHeight,
                hh = $(window).height(),
                ww = $(window).width(),
                w = screen.availWidth,
                www = screen.width;
            alert('screen-resolution: ' + www + 'x' + hhh + '// ' + 'avail-size: ' + w + 'x' + h + '// ' + 'workspace-size:' + ww + 'x' + hh + ' // ' + 'head:' + (hhh - hh));
        }

        $("form").bind("submit", validate);

        $("form input[type='email']").on("focus", function(){
            body.addClass('focus-form');
            $(this).closest('form').addClass('under-all').prev('[data-overlayer]').show();
        }).on('focusout', function(){
            body.removeClass('focus-form');
            $(this).closest('form').removeClass('under-all').prev('[data-overlayer]').hide();
        });

        if(!$('html').hasClass('bx-no-touch')){
            body.on('swiperight', clickNext);
            body.on('swipeleft', clickPrev);
        }

        $('#overlay').hide();
    });
});


