!function(t){t.fn.waterfall=function(i){var e=t.extend({imgWidth:150},i),o=this;o.find("img").css("width",e.imgWidth);var n=o.eq(0).outerWidth(!0),h=[],l=Math.floor(t(window).width()/n);console.log("可以放"+l+"列图片"),this.each(function(i,e){var n=t(this);if(i<l)h.push(n.outerHeight(!0));else{var s=Math.min.apply(null,h),a=h.indexOf(s),f=o.eq(a).position().left,r=o.eq(i).css({position:"absolute",left:f,top:s}).outerHeight(!0);h[a]+=r}}),console.log(h)}}(jQuery);