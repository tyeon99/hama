(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{372:function(t,e,n){var content=n(411);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(91).default)("9d4fcd22",content,!0,{sourceMap:!1})},410:function(t,e,n){"use strict";n(372)},411:function(t,e,n){var r=n(90),o=n(148),d=n(150),l=n(151),c=n(152),f=r((function(i){return i[1]})),w=o(d),v=o(l),x=o(c);f.push([t.i,".introContent[data-v-20bd0fef]{align-items:center;display:flex;flex-direction:column;height:100dvh;justify-content:space-between;overflow-y:auto;width:100%;--tw-bg-opacity:1;background-color:#0f172a;background-color:rgba(15,23,42,var(--tw-bg-opacity,1))}.introSwiper[data-v-20bd0fef]{min-height:592px;width:100%}.swiper-slide[data-v-20bd0fef]{align-items:flex-start;background-attachment:fixed;background-position:50%;background-repeat:no-repeat;background-size:100%;display:flex;flex-direction:column;gap:20px;padding-left:24px;padding-right:24px;padding-top:122px;position:relative;width:100%}.swiper-slide[data-v-20bd0fef]:first-child{background-image:url("+w+");justify-content:flex-start}.swiper-slide[data-v-20bd0fef]:nth-child(2){background-image:url("+v+");justify-content:center;padding-bottom:40px}.swiper-slide[data-v-20bd0fef]:nth-child(3){background-image:url("+x+');justify-content:center;padding-bottom:92px}.swiper-slide .title[data-v-20bd0fef]{font-family:JalnanGothic;font-feature-settings:"liga" off,"clig" off;font-size:32px;font-weight:400;letter-spacing:-2px;line-height:42px;text-shadow:2px 2px 3px rgba(0,0,0,.4)}.swiper-slide .title[data-v-20bd0fef],.swiper-slide .txt[data-v-20bd0fef]{--tw-text-opacity:1;color:#fff;color:rgba(255,255,255,var(--tw-text-opacity,1))}.swiper-slide .txt[data-v-20bd0fef]{font-size:20px;font-weight:500;letter-spacing:-.4px;line-height:24px;text-shadow:0 1px 2.8px rgba(0,0,0,.4)}.swiper-pagination[data-v-20bd0fef]{bottom:16px;left:50%;width:auto;--tw-translate-x:-50%;background-color:rgba(15,23,42,.5);border-radius:16px;padding-left:9px;padding-right:9px;transform:translate(-50%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.start-btn[data-v-20bd0fef]{align-items:center;display:flex;justify-content:center;padding:60px 40px;width:100%}.start-btn button[data-v-20bd0fef]{border-radius:10px;border-width:2px;height:52px;width:100%;--tw-border-opacity:1;border-color:#7139ff;border-color:rgba(113,57,255,var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:#0f172a;background-color:rgba(15,23,42,var(--tw-bg-opacity,1));font-family:JalnanGothic;font-size:18px;font-weight:400;line-height:20px;padding-top:3px;--tw-text-opacity:1;color:#d1bcff;color:rgba(209,188,255,var(--tw-text-opacity,1))}',""]),f.locals={},t.exports=f},433:function(t,e,n){"use strict";n.r(e);n(92);var r={mounted:function(){this.initializeSwiper()},methods:{goLink:function(path){this.$router.push(path)},initializeSwiper:function(){var t=this;this.swiper=new window.Swiper(".introSwiper",{slidesPerView:1,spaceBetween:0,autoplay:{delay:3e3,disableOnInteraction:!1,enabled:!1},pagination:{el:".swiper-pagination",clickable:!0}}),setTimeout((function(){var e;null!==(e=t.swiper)&&void 0!==e&&e.autoplay&&t.swiper.autoplay.start()}),3e3)}}},o=(n(410),n(50)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"introContent"},[t._m(0),t._v(" "),e("div",{staticClass:"start-btn animate__animated animate__fadeInUp animate__faster animate__delay-3s"},[e("button",{on:{click:function(e){return t.goLink("/main")}}},[t._v("체험을 시작하세요")])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"swiper introSwiper"},[e("div",{staticClass:"swiper-wrapper"},[e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"title animate__animated animate__fadeInUp animate__delay-26"},[t._v("\n          보이스 피싱,"),e("br"),t._v("\n          당신은 안전할까요?\n        ")]),t._v(" "),e("div",{staticClass:"txt animate__animated animate__fadeInUp animate__delay-27"},[t._v("철저한 대비만이 우리의 재산을"),e("br"),t._v("지킵니다.")])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"title"},[t._v("하마터면 당할 뻔!")]),t._v(" "),e("div",{staticClass:"txt"},[t._v("방심은 금물, 지금 바로 대비하세요.")])]),t._v(" "),e("div",{staticClass:"swiper-slide"},[e("div",{staticClass:"title"},[t._v("\n          누구나 속지만,"),e("br"),t._v("\n          준비된 사람은 다릅니다.\n        ")]),t._v(" "),e("div",{staticClass:"txt"},[t._v("AI 시뮬레이션으로 피싱의 위험에서 "),e("br"),t._v("벗어나세요.")])])]),t._v(" "),e("div",{staticClass:"swiper-pagination"})])}],!1,null,"20bd0fef",null);e.default=component.exports}}]);