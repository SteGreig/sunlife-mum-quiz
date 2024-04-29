// jQuery scroll-to plugin
!function(o,e,t){"undefined"!=typeof module&&module.exports?module.exports=t():"function"==typeof define&&define.amd?define(t):e[o]=t()}("jquery-scrollto",this,function(){var o,e,t;return o=e=window.jQuery||require("jquery"),e.propHooks.scrollTop=e.propHooks.scrollLeft={get:function(o,e){var t=null;return("HTML"===o.tagName||"BODY"===o.tagName)&&("scrollLeft"===e?t=window.scrollX:"scrollTop"===e&&(t=window.scrollY)),null==t&&(t=o[e]),t}},e.Tween.propHooks.scrollTop=e.Tween.propHooks.scrollLeft={get:function(o){return e.propHooks.scrollTop.get(o.elem,o.prop)},set:function(o){"HTML"===o.elem.tagName||"BODY"===o.elem.tagName?(o.options.bodyScrollLeft=o.options.bodyScrollLeft||window.scrollX,o.options.bodyScrollTop=o.options.bodyScrollTop||window.scrollY,"scrollLeft"===o.prop?o.options.bodyScrollLeft=Math.round(o.now):"scrollTop"===o.prop&&(o.options.bodyScrollTop=Math.round(o.now)),window.scrollTo(o.options.bodyScrollLeft,o.options.bodyScrollTop)):o.elem.nodeType&&o.elem.parentNode&&(o.elem[o.prop]=o.now)}},t={config:{duration:400,easing:"swing",callback:void 0,durationMode:"each",offsetTop:0,offsetLeft:0},configure:function(o){return e.extend(t.config,o||{}),this},scroll:function(o,l){var r,n,s,i,p,c,f,a,d,u,g,h,T,w,m,y,L,b;return r=o.pop(),n=r.$container,s=r.$target,c=n.prop("tagName"),i=e("<span/>").css({position:"absolute",top:"0px",left:"0px"}),p=n.css("position"),n.css({position:"relative"}),i.appendTo(n),g=i.offset().top,h=s.offset().top,T=h-g-parseInt(l.offsetTop,10),w=i.offset().left,m=s.offset().left,y=m-w-parseInt(l.offsetLeft,10),f=n.prop("scrollTop"),a=n.prop("scrollLeft"),i.remove(),n.css({position:p}),L={},b=function(){return 0===o.length?"function"==typeof l.callback&&l.callback():t.scroll(o,l),!0},l.onlyIfOutside&&(d=f+n.height(),u=a+n.width(),T>f&&d>T&&(T=f),y>a&&u>y&&(y=a)),T!==f&&(L.scrollTop=T),y!==a&&(L.scrollLeft=y),n.prop("scrollHeight")===n.width()&&delete L.scrollTop,n.prop("scrollWidth")===n.width()&&delete L.scrollLeft,null!=L.scrollTop||null!=L.scrollLeft?n.animate(L,{duration:l.duration,easing:l.easing,complete:b}):b(),!0},fn:function(o){var l,r,n,s;l=[];var i=e(this);if(0===i.length)return this;for(r=e.extend({},t.config,o),n=i.parent(),s=n.get(0);1===n.length&&s!==document.body&&s!==document;){var p,c;p="visible"!==n.css("overflow-y")&&s.scrollHeight!==s.clientHeight,c="visible"!==n.css("overflow-x")&&s.scrollWidth!==s.clientWidth,(p||c)&&(l.push({$container:n,$target:i}),i=n),n=n.parent(),s=n.get(0)}return l.push({$container:e("html"),$target:i}),"all"===r.durationMode&&(r.duration/=l.length),t.scroll(l,r),this}},e.ScrollTo=e.ScrollTo||t,e.fn.ScrollTo=e.fn.ScrollTo||t.fn,t});

jQuery(document).ready(function($) {

    var windowWidth = $(window).width();
    if (windowWidth > 600) {
        $('.mumtype-intro .mumtype-next').click(function(e) {
            $('.mumtype-bottom-bar').css('margin-top','100px');
        });
    }

    $('.mumtype-next').click(function(e) {
        $(this).parents('.mumtype-slide').removeClass('active');
        $(this).parents('.mumtype-slide').next('.mumtype-slide').addClass('active');
        $('.mumtype-content').ScrollTo({
            duration: 600
        });
    });

    $('label').click(function() {
        $(this).siblings('.buttons').children('button').removeAttr("disabled");
    });

    $('.mumtype-back').click(function() {
        $(this).parents('.mumtype-slide').removeClass('active');
        $(this).parents('.mumtype-slide').prev('.mumtype-slide').addClass('active');
    });

    $('.mumtype-slide-last .mumtype-next').click(function() {

        var q1 = $('[name="1"]:checked').val();
        var q2 = $('[name="2"]:checked').val();
        var q3 = $('[name="3"]:checked').val();
        var q4 = $('[name="4"]:checked').val();
        var q5 = $('[name="5"]:checked').val();
        var q6 = $('[name="6"]:checked').val();
        var q7 = $('[name="7"]:checked').val();
        var q8 = $('[name="8"]:checked').val();

        var resultStr = q1+q2+q3+q4+q5+q6+q7+q8;

        var ra = resultStr.split("a").length - 1;
        var rb = resultStr.split("b").length - 1;
        var rc = resultStr.split("c").length - 1;
        var rd = resultStr.split("d").length - 1;

        if(ra > rb && ra > rc && ra > rd) {
            var result = 'a';
        } else if(rb > ra && rb > rc && rb > rd) {
            var result = 'b';
        } else if(rc > ra && rc > rb && rc > rd) {
            var result = 'c';
        } else if(rd > ra && rd > rb && rd > rc) {
            var result = 'd';
        } else {
            if(q3 == 'a') { var result = 'a'; }
            else if(q3 == 'b') { var result = 'b'; }
            else if(q3 == 'c') { var result = 'c'; }
            else if(q3 == 'd') { var result = 'd'; }
        }

        if (result == 'a') {
            $('.mumtype-result').text("The Routine Queen");
            $('.mumtype-results .copy p').text("You are always on time, the first one to pick their kids up from the party and always early to the airport. The kids will never forget anything when it comes to school trips or activities because you've just got a natural way of preparing for these things. You're not uptight and know how to have a good laugh at yourself and with others, especially when it means getting involved with things to do with the kids or your friends.");
            var fbName = "I+Am+A+Routine+Queen+Mum!+What+Type+Of+Mum+Are+You?";
            var fbDesc = "I+am+always+on+time+and+highly+reliable;+I’m+not+uptight+and+know+how+to+have+a+good+laugh.";
        } else if (result == 'b') {
            $('.mumtype-result').text("The Lion Mum");
            $('.mumtype-results .copy p').text("Lion Mum you are a fearsome but wonderful thing to behold, especially in the eyes of your cubs. You work hard and play hard, a life mantra you've passed onto your kids; you believe this will give them the best opportunities in life. Speaking of opportunities, you don't make them shy away from a bit of competition and a lot of fun, as you're sure this will prepare for the world that lies in wait for them.");
            var fbName = "I+Am+A+Lion+Mum!+What+Type+Of+Mum+Are+You?";
            var fbDesc = "Fearsome+and+wonderful+in+all+of+the+best+ways;+loved+by+my+cubs,+we+live+by+a+work+hard,+play+hard+mantra.";
        } else if (result == 'c') {
            $('.mumtype-result').text("The Sharp Mum");
            $('.mumtype-results .copy p').text("You're an idealistic mum always looking for opportunities to help your kids learn and achieve their goals. You're charming, persistent and familiar with the benefits of Google. When it comes to having to make decisions or sort things out you make a great mediator and your choices are smart and intuitive. The kids know you rule the roost and your explanations never give them any reason to doubt you; they trust you implicitly.");
            var fbName = "I+Am+A+Sharp+Mum!+What+Type+Of+Mum+Are+You?";
            var fbDesc = "I+am+idealistic,+charming,+persistent,+and+familiar+with+the+benefits+of+Google+and+I+undoubtedly+rule+the+roost.";
        } else if (result == 'd') {
            $('.mumtype-result').text("The Organic Mum");
            $('.mumtype-results .copy p').text("Organic Mum, you're generous and you never fall short when it comes to giving your kids the love or attention they need. You're open to most ideas and encourage your kids to be free-thinking and open-minded about most aspects  of life. You've an artistic mind and always open to sharing your emotions with the kids and provide the best advice for every moment. Live and learn is the way you live your life and want your kids to live theirs.");
            var fbName = "I+Am+An+Organic+Mum!+What+Type+Of+Mum+Are+You?";
            var fbDesc = "To be generous,+open-minded,+emotional+and+free-thinking+are+the+lessons+I+teach+my+kids;+we+live+for+every+moment.";
        }

        $('.mumtype-bottom-bar').css('margin-top','0');

        $('.mumtype-intro').hide();

        $(".mumtype-fb").attr("href", "https://www.facebook.com/dialog/feed?app_id=280515422333538&display=popup&name="+fbName+"&description="+fbDesc+"&caption=www.sunlife.co.uk&link=http://tangledindesign.com/fl/type-of-mum&picture=http://tangledindesign.com/fl/type-of-mum/images/mumtype-fb-dialog.jpg&redirect_uri=http://tangledindesign.com/fl/type-of-mum");

    });

    // Make Facebook/Twitter buttons open in popup window
    $('.mumtype-fb, .mumtype-tweet').click(function (event) {
        if (event.preventDefault) { event.preventDefault(); } else { event.returnValue = false; }
        window.open($(this).attr("href"), "popupWindow", "width=600,height=600,scrollbars=yes");
    });

});