// Generated by CoffeeScript 1.4.0
(function(){$(document).ready(function(){var e,t,n,r,i,s,o,u,a;Function("/*@cc_on return document.documentMode===10@*/")()&&(document.documentElement.className+=" ie10");o=function(){var e,t,n,r,i,s,o,u,a;i="desktop";s=$(".responsivize");n=s.length;screen.width<=767&&(i="mobile");a=[];for(o=0,u=s.length;o<u;o++){e=s[o];r=$(e);t=window.document.createElement("img");i==="mobile"?t.src=r.attr("data-mobilesrc"):t.src=r.attr("data-fullsrc");t.className="responsive";t.style.width="100%";r.before(t);a.push(r.hide())}return a};o();n=".maincontent";t=700;r=navigator.userAgent.toLowerCase();e=r.match(/(iphone|ipod|ipad)/);s=100;if(e){s=0;$(".header-container").css("position","absolute")}$(".mini-nav").change(function(e){var t;switch(e.currentTarget.value){case"1":return $.smoothScroll({offset:4});case"2":t=$(".selected-segments").offset();return $.smoothScroll({offset:t.top-s});case"3":t=$(".business-models").offset();return $.smoothScroll({offset:t.top-s});case"4":return $.smoothScroll({offset:$(document).height()})}});if(window.PIE){PIE.attach($(".dark")[0]);PIE.attach($(".medium")[0]);PIE.attach($(".light")[0]);PIE.attach($(".main-nav")[0]);$(".bordered").each(function(){return PIE.attach(this)})}$("#link1").click(function(e){e.preventDefault();i();return $.smoothScroll({offset:8})});$("#link2").click(function(e){var t;e.preventDefault();i();t=$(".selected-segments").offset();return $.smoothScroll({offset:t.top-100})});$("#link3").click(function(e){var t;e.preventDefault();i();t=$(".business-models").offset();return $.smoothScroll({offset:t.top-100})});$("#link4").click(function(e){var t;e.preventDefault();i();t=$(".footer-container").offset();return $.smoothScroll({offset:t.top-100})});u=function(e){$("body").removeClass();return $("body").addClass(e)};$(window).scroll(function(){var e,t;e=$(this).scrollTop();t=$(this).scrollTop()+$(this).height();return n===".maincontent"?$(this).scrollTop()+$(this).height()>$(document).height()-100?u("contact-state"):e>$(".business-models").offset().top-130?u("business-models-state"):e>$(".selected-segments").offset().top-130?u("selected-segments-state"):e>5?u("home-state"):u("nuescht"):u("nuescht")});$(".span3 h2").click(function(e){$(this).parent().find(".spanwrapper").toggle("medium");return $(this).toggleClass("open")});$(".span3 h3").click(function(e){$(this).parent().find(".spanwrapper").toggle("fast");$(this).toggleClass("open");return $(this).parent().parent().find(".fillerbox").toggle("medium")});$("#link-imprint").click(function(e){e.preventDefault();return $.smoothScroll({offset:0,speed:t,afterScroll:function(){return a(".subcontent.imprint")}})});$("#link-privacypolicy").click(function(e){e.preventDefault();return $.smoothScroll({offset:0,speed:t,afterScroll:function(){return a(".subcontent.privacypolicy")}})});$("#link-legaldisclaimer").click(function(e){e.preventDefault();return $.smoothScroll({offset:0,speed:t,afterScroll:function(){return a(".subcontent.legaldisclaimer")}})});a=function(e){var r=this;u("nuescht");$(n).slideUp(t,"swing",function(){return n=e});return $(e).slideDown(t)};return i=function(){if($(".subcontent").is(":visible")){$(".maincontent").show();return $(n).hide(0,"swing",function(){return n=".maincontent"})}}})}).call(this);