(function(){$(document).ready(function(){var t,e,n,o,s,i,r,c,l;return Function("/*@cc_on return document.documentMode===10@*/")()&&(document.documentElement.className+=" ie10"),r=function(){var t,e,n,o,s,i,r,c,l;for(s="desktop",i=$(".responsivize"),n=i.length,screen.width<=767&&(s="mobile"),l=[],r=0,c=i.length;c>r;r++)t=i[r],o=$(t),e=window.document.createElement("img"),e.src=o.attr("mobile"===s?"data-mobilesrc":"data-fullsrc"),e.className="responsive",e.style.width="100%",o.before(e),l.push(o.hide());return l},r(),n=".maincontent",e=700,o=navigator.userAgent.toLowerCase(),t=o.match(/(iphone|ipod|ipad)/),i=130,t&&(i=10),$(".mini-nav").change(function(t){var e;switch(s(),t.currentTarget.value){case"1":$.smoothScroll({offset:4});break;case"2":e=$(".selected-segments").offset(),$.smoothScroll({offset:e.top-i});break;case"3":e=$(".business-models").offset(),$.smoothScroll({offset:e.top-i});break;case"4":e=$("footer").offset(),$.smoothScroll({offset:e.top-i})}return $(".mini-nav").val($(".mini-nav option:first").val())}),window.PIE&&(PIE.attach($(".dark")[0]),PIE.attach($(".medium")[0]),PIE.attach($(".light")[0]),PIE.attach($(".main-nav")[0]),$(".bordered").each(function(){return PIE.attach(this)})),$("#link1").click(function(t){return t.preventDefault(),s(),$.smoothScroll({offset:8})}),$("#link2").click(function(t){var e;return t.preventDefault(),s(),e=$(".selected-segments").offset(),$.smoothScroll({offset:e.top-i})}),$("#link3").click(function(t){var e;return t.preventDefault(),s(),e=$(".business-models").offset(),$.smoothScroll({offset:e.top-i})}),$("#link4").click(function(t){var e;return t.preventDefault(),s(),e=$("footer").offset(),$.smoothScroll({offset:e.top-i})}),c=function(t){return $("body").removeClass(),$("body").addClass(t)},$(window).scroll(function(){var t,e;return t=$(this).scrollTop(),e=$(this).scrollTop()+$(this).height(),c(".maincontent"===n?$(this).scrollTop()+$(this).height()>$(document).height()-210?"contact-state":t>$(".business-models").offset().top-140?"business-models-state":t>$(".selected-segments").offset().top-140?"selected-segments-state":t>5?"home-state":"nuescht":"nuescht")}),$(".span3 h2").click(function(t){return"20px"===$(this).css("padding-left")?($(this).parent().find(".spanwrapper").toggle("medium"),$(this).toggleClass("open")):void 0}),$(".span3 h3").click(function(t){return"20px"===$(this).css("padding-left")?($(this).parent().find(".spanwrapper").toggle("fast"),$(this).toggleClass("open"),$(this).parent().parent().find(".fillerbox").toggle("medium")):void 0}),$("#link-imprint").click(function(t){return t.preventDefault(),$.smoothScroll({offset:0,speed:e,afterScroll:function(){return l(".subcontent.imprint")}})}),$("#link-privacypolicy").click(function(t){return t.preventDefault(),$.smoothScroll({offset:0,speed:e,afterScroll:function(){return l(".subcontent.privacypolicy")}})}),$("#link-legaldisclaimer").click(function(t){return t.preventDefault(),$.smoothScroll({offset:0,speed:e,afterScroll:function(){return l(".subcontent.legaldisclaimer")}})}),l=function(t){return c("nuescht"),$(n).slideUp(e,"swing",function(e){return function(){return n=t}}(this)),$(t).slideDown(e,"swing",function(t){return function(){return $("body").scroll()}}(this))},s=function(){return $(".subcontent").is(":visible")?($(".maincontent").show(),$(n).hide(0,"swing",function(){return n=".maincontent"})):void 0}})}).call(this);