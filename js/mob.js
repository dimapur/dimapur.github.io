$(document).ready(function(){
 //Content Should be replaced           
            $(".button-collapse").sideNav();
             $(".dropdown-button").dropdown();
                   
            
            
 var loc        = window.location.href,
        loc_m      = /\/sp\//.test(loc),
        ua         = navigator.userAgent.toLowerCase(),
        is_oldie   = /msie (9.0|8.0)/.test(ua),
        is_mobile  = /mobile|android|ip(ad|od|hone)|windows phone/.test(ua);

    if ((is_mobile || is_oldie) && !loc_m) {
        $("header.page-topbar").hide();
        $("nav.headers11").show();
        $("div.main-container").show();
            
        

    } else  {
        $("header.page-topbar").show();
        $("nav.headers11").hide();
        $("div.main-container").hide();
    }
})();