(window.webpackJsonp=window.webpackJsonp||[]).push([[8,2],{314:function(t,n,e){var content=e(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(89).default)("1981862e",content,!0,{sourceMap:!1})},315:function(t,n,e){"use strict";var o=e(2),r=e(316);o({target:"String",proto:!0,forced:e(317)("link")},{link:function(t){return r(this,"a","href",t)}})},316:function(t,n,e){"use strict";var o=e(3),r=e(21),l=e(14),c=/"/g,f=o("".replace);t.exports=function(t,n,e,o){var d=l(r(t)),v="<"+n;return""!==e&&(v+=" "+e+'="'+f(l(o),c,"&quot;")+'"'),v+">"+d+"</"+n+">"}},317:function(t,n,e){"use strict";var o=e(4);t.exports=function(t){return o((function(){var n=""[t]('"');return n!==n.toLowerCase()||n.split('"').length>3}))}},318:function(t,n,e){"use strict";e(314)},319:function(t,n,e){var o=e(88)((function(i){return i[1]}));o.push([t.i,".offcanvas-overlay[data-v-a727d052]{align-items:center;background-color:rgba(0,0,0,.6);bottom:0;display:flex;justify-content:flex-end;left:0;overscroll-behavior:contain;padding-left:55px;position:fixed;right:0;top:0;touch-action:none;z-index:999}.offcanvas-content[data-v-a727d052]{height:100%;overflow-y:auto;width:320px;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity,1));padding:28px 12px}.offcanvas-close[data-v-a727d052]{margin-bottom:24px;padding-left:12px}.offcanvas-header[data-v-a727d052]{margin-bottom:36px;padding-left:12px}.offcanvas-header .logo[data-v-a727d052]{margin-bottom:28px}.offcanvas-header .line[data-v-a727d052]{height:3px;width:140px;--tw-bg-opacity:1;background-color:#2c2c2c;background-color:rgba(44,44,44,var(--tw-bg-opacity,1))}.offcanvas-body[data-v-a727d052]{padding-left:12px;width:100%}.offcanvas-body .menu-group[data-v-a727d052]{align-items:flex-start;display:flex;flex-direction:column;gap:24px;justify-content:flex-start}.offcanvas-body .menu-group button[data-v-a727d052]{align-items:center;display:flex;gap:16px;justify-content:flex-start}.offcanvas-body .menu-group button span[data-v-a727d052]{font-size:20px;font-weight:800;line-height:24px;--tw-text-opacity:1;color:#2c2c2c;color:rgba(44,44,44,var(--tw-text-opacity,1))}.offcanvas-footer[data-v-a727d052]{bottom:10%;left:50%;position:absolute;--tw-translate-x:-50%;transform:translate(-50%,var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.offcanvas-footer button[data-v-a727d052]{border-radius:10px;border-width:2px;height:48px;width:296px;--tw-border-opacity:1;border-color:#7139ff;border-color:rgba(113,57,255,var(--tw-border-opacity,1));--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity,1));font-size:16px;font-weight:800;line-height:20px;--tw-text-opacity:1;color:#7139ff;color:rgba(113,57,255,var(--tw-text-opacity,1));--tw-shadow:0px 4px 4px 0px rgba(0,0,0,.14);--tw-shadow-colored:0px 4px 4px 0px var(--tw-shadow-color);box-shadow:0 0 transparent,0 0 transparent,0 4px 4px 0 rgba(0,0,0,.14);box-shadow:var(--tw-ring-offset-shadow,0 0 transparent),var(--tw-ring-shadow,0 0 transparent),var(--tw-shadow)}",""]),o.locals={},t.exports=o},321:function(t,n,e){"use strict";e.r(n);e(315);var o={props:{isOffcanvasAni:{type:Boolean,default:!1}},data:function(){return{menuItems:[{label:"AI 피싱체험",link:"/main"},{label:"서비스 소개",link:"/"},{label:"오프라인 교육",link:"/"},{label:"CONTACT US",link:"/"},{label:"구글 안드로이드 앱 다운로드",link:"/"}]}},methods:{closeMenuOffcanvas:function(){this.$emit("close-menuOffcanvas")},goLink:function(path){this.$router.push(path)}}},r=(e(318),e(49)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"offcanvas-overlay animate__animated animate__faster",class:{animate__fadeIn:t.isOffcanvasAni,animate__fadeOut:!t.isOffcanvasAni},on:{click:t.closeMenuOffcanvas}},[n("div",{staticClass:"offcanvas-content animate__animated animate__faster",class:{animate__fadeInRight:t.isOffcanvasAni,animate__fadeOutRight:!t.isOffcanvasAni},on:{click:function(t){t.stopPropagation()}}},[n("div",{staticClass:"offcanvas-close"},[n("button",{on:{click:t.closeMenuOffcanvas}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"14",viewBox:"0 0 14 14",fill:"none"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M8.41425 7.00025L13.7072 1.70725C14.0982 1.31625 14.0982 0.68425 13.7072 0.29325C13.3162 -0.09775 12.6842 -0.09775 12.2933 0.29325L7.00025 5.58625L1.70725 0.29325C1.31625 -0.09775 0.68425 -0.09775 0.29325 0.29325C-0.09775 0.68425 -0.09775 1.31625 0.29325 1.70725L5.58625 7.00025L0.29325 12.2933C-0.09775 12.6842 -0.09775 13.3162 0.29325 13.7072C0.48825 13.9022 0.74425 14.0002 1.00025 14.0002C1.25625 14.0002 1.51225 13.9022 1.70725 13.7072L7.00025 8.41425L12.2933 13.7072C12.4882 13.9022 12.7443 14.0002 13.0002 14.0002C13.2562 14.0002 13.5122 13.9022 13.7072 13.7072C14.0982 13.3162 14.0982 12.6842 13.7072 12.2933L8.41425 7.00025Z",fill:"black"}})])])]),t._v(" "),n("div",{staticClass:"offcanvas-header"},[n("div",{staticClass:"logo"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"97",height:"97",viewBox:"0 0 97 97",fill:"none"}},[n("path",{attrs:{d:"M50 34.0858C50 41.4758 44.26 45.7058 37 46.0858C36.67 46.0858 36.34 46.0858 36 46.0858C34.2908 46.0908 32.5955 45.7788 31 45.1658H30.93C27.119 43.6657 22.881 43.6657 19.07 45.1658H19C17.4045 45.7788 15.7092 46.0908 14 46.0858C13.66 46.0858 13.33 46.0858 13 46.0858C5.74 45.7358 0 41.5058 0 34.0858C0 28.9058 2.81 26.3858 7 23.9658V17.5858C6.99979 14.2265 7.96705 10.9381 9.78616 8.11388C11.6053 5.28965 14.1992 3.04907 17.258 1.65998C20.3167 0.270899 23.7108 -0.207909 27.0344 0.280802C30.358 0.769513 33.4706 2.20506 36 4.41583C36.3 4.67583 36.58 4.93583 36.86 5.21583C37.9918 6.34877 38.9641 7.63054 39.75 9.02583C41.2278 11.6365 42.0031 14.5859 42 17.5858V23.4358C46.73 25.6858 50 28.5058 50 34.0858Z",fill:"#B891FF"}}),t._v(" "),n("path",{attrs:{d:"M13.91 3.66578C11.9827 5.12507 10.3817 6.97124 9.21002 9.08578C8.37376 9.03084 7.56945 8.74347 6.88771 8.25603C6.20598 7.76859 5.67391 7.10046 5.35145 6.32691C5.02898 5.55336 4.92895 4.70514 5.0626 3.87779C5.19626 3.05045 5.5583 2.27687 6.10793 1.64421C6.65756 1.01155 7.37295 0.544942 8.17349 0.296963C8.97403 0.0489852 9.82792 0.0294883 10.6389 0.240669C11.45 0.45185 12.1859 0.885317 12.7638 1.49223C13.3418 2.09915 13.7387 2.8554 13.91 3.67578V3.66578Z",fill:"#8F66FF"}}),t._v(" "),n("path",{attrs:{d:"M14.5 17.0858C15.8807 17.0858 17 15.9665 17 14.5858C17 13.2051 15.8807 12.0858 14.5 12.0858C13.1193 12.0858 12 13.2051 12 14.5858C12 15.9665 13.1193 17.0858 14.5 17.0858Z",fill:"#5536AA"}}),t._v(" "),n("path",{attrs:{d:"M35.5 17.0858C36.8807 17.0858 38 15.9665 38 14.5858C38 13.2051 36.8807 12.0858 35.5 12.0858C34.1193 12.0858 33 13.2051 33 14.5858C33 15.9665 34.1193 17.0858 35.5 17.0858Z",fill:"#5536AA"}}),t._v(" "),n("path",{attrs:{d:"M45 4.5858C44.9985 5.23894 44.8551 5.88394 44.5798 6.47623C44.3045 7.06851 43.9039 7.59393 43.4056 8.01616C42.9073 8.43838 42.3232 8.74734 41.6938 8.92167C41.0643 9.09599 40.4045 9.13152 39.76 9.0258C38.9741 7.63051 38.0018 6.34873 36.87 5.2158C36.59 4.9358 36.31 4.6758 36.01 4.4158C36.0326 3.22233 36.5283 2.08669 37.3881 1.25872C38.248 0.430746 39.4015 -0.0217397 40.595 0.000803715C41.7885 0.0233471 42.9241 0.519073 43.7521 1.37893C44.5801 2.23878 45.0326 3.39233 45.01 4.5858H45Z",fill:"#8F66FF"}}),t._v(" "),n("path",{attrs:{d:"M18 45.0858V49.0058C18 49.271 17.8946 49.5254 17.7071 49.7129C17.5196 49.9005 17.2652 50.0058 17 50.0058H13C12.7348 50.0058 12.4804 49.9005 12.2929 49.7129C12.1054 49.5254 12 49.271 12 49.0058V46.0058C12.33 46.0058 12.66 46.0058 13 46.0058C14.7092 46.0107 16.4045 45.6988 18 45.0858Z",fill:"#8F66FF"}}),t._v(" "),n("path",{attrs:{d:"M38 46.0858V49.0858C38 49.351 37.8946 49.6054 37.7071 49.7929C37.5196 49.9805 37.2652 50.0858 37 50.0858H33C32.7348 50.0858 32.4804 49.9805 32.2929 49.7929C32.1054 49.6054 32 49.351 32 49.0858V45.1658C33.5955 45.7788 35.2908 46.0908 37 46.0858C37.34 46.0858 37.67 46.0858 38 46.0858Z",fill:"#8F66FF"}}),t._v(" "),n("path",{attrs:{d:"M11.5 37.0858C12.8807 37.0858 14 35.9665 14 34.5858C14 33.2051 12.8807 32.0858 11.5 32.0858C10.1193 32.0858 9 33.2051 9 34.5858C9 35.9665 10.1193 37.0858 11.5 37.0858Z",fill:"white"}}),t._v(" "),n("path",{attrs:{d:"M38.5 37.0858C39.8807 37.0858 41 35.9665 41 34.5858C41 33.2051 39.8807 32.0858 38.5 32.0858C37.1193 32.0858 36 33.2051 36 34.5858C36 35.9665 37.1193 37.0858 38.5 37.0858Z",fill:"white"}}),t._v(" "),n("path",{attrs:{d:"M75.1229 74.8058H89.0909V76.1498H91.2029V74.8058H96.7229V89.4938H91.2029V85.7498H89.0909V87.0938H79.2029C76.5149 87.0938 75.1229 85.7018 75.1229 83.0138V74.8058ZM75.1229 88.2938H80.6429V90.4538C80.6429 91.3178 81.2189 91.8938 82.0829 91.8938H96.9629V96.6938H80.4029C77.2349 96.6938 75.1229 94.5818 75.1229 91.4138V88.2938ZM80.6429 82.0538C80.6429 82.4378 80.9789 82.7738 81.3629 82.7738H83.5709V79.1258H80.6429V82.0538ZM89.0909 80.2298V81.6698H91.2029V80.2298H89.0909Z",fill:"url(#paint0_linear_2003_415)"}}),t._v(" "),n("path",{attrs:{d:"M57.122 92.1338H63.89V96.6938H55.442C52.274 96.6938 50.162 94.5818 50.162 91.4138V74.8058H63.65V79.3658H55.682V83.3018H61.97V87.7178H55.682V90.6938C55.682 91.5578 56.258 92.1338 57.122 92.1338ZM66.242 96.6938V87.7178H63.122V83.3018H66.242V74.8058H71.762V96.6938H66.242Z",fill:"url(#paint1_linear_2003_415)"}}),t._v(" "),n("path",{attrs:{d:"M25.201 74.8058H38.689V96.6938H30.4811C27.3131 96.6938 25.201 94.5818 25.201 91.4138V74.8058ZM40.3211 96.6938V74.8058H45.841V82.7498H48.0011V87.5498H45.841V96.6938H40.3211ZM30.7211 90.4538C30.7211 91.3178 31.297 91.8938 32.161 91.8938H33.169V79.6058H30.7211V90.4538Z",fill:"url(#paint2_linear_2003_415)"}}),t._v(" "),n("path",{attrs:{d:"M0.24 90.3338V87.6458C0.24 83.6858 2.856 81.0458 7.128 81.0458C11.4 81.0458 14.016 83.6858 14.016 87.6458V90.3338C14.016 94.2938 11.4 96.9338 7.128 96.9338C2.856 96.9338 0.24 94.2938 0.24 90.3338ZM15.36 96.6938V74.8058H20.88V83.2298H23.04V88.0298H20.88V96.6938H15.36ZM0 75.7658H4.368V74.0858H9.888V75.7658H14.256V80.5658H0V75.7658ZM7.128 92.6138C7.848 92.6138 8.496 92.1338 8.496 91.2938V86.6858C8.496 85.8458 7.848 85.3658 7.128 85.3658C6.408 85.3658 5.76 85.8458 5.76 86.6858V91.2938C5.76 92.1338 6.408 92.6138 7.128 92.6138Z",fill:"url(#paint3_linear_2003_415)"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_2003_415",x1:"4.98193",y1:"75.5498",x2:"97.9819",y2:"101.55",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#8539FF"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#D51BFF"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear_2003_415",x1:"4.98193",y1:"75.5498",x2:"97.9819",y2:"101.55",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#8539FF"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#D51BFF"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint2_linear_2003_415",x1:"4.98193",y1:"75.5498",x2:"97.9819",y2:"101.55",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#8539FF"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#D51BFF"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint3_linear_2003_415",x1:"4.98193",y1:"75.5498",x2:"97.9819",y2:"101.55",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#8539FF"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#D51BFF"}})],1)],1)])]),t._v(" "),n("div",{staticClass:"line"})]),t._v(" "),n("div",{staticClass:"offcanvas-body"},[n("div",{staticClass:"menu-group"},t._l(t.menuItems,(function(e,o){return n("button",{key:o,staticClass:"animate__animated animate__fadeInRight",style:{animationDelay:"".concat(.1*o,"s")},on:{click:function(n){return t.goLink(e.link)}}},[n("span",[t._v(t._s(e.label))]),t._v(" "),n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"22",height:"22",viewBox:"0 0 22 22",fill:"none"}},[n("path",{attrs:{d:"M12.328 6.46731C12.0338 6.17572 11.5589 6.17784 11.2673 6.47204C10.9757 6.76624 10.9778 7.24111 11.272 7.53269L12.6824 8.93054C13.2573 9.50033 13.6427 9.88386 13.9018 10.2065C13.9137 10.2213 13.9251 10.2358 13.9362 10.25L7 10.25C6.58579 10.25 6.25 10.5858 6.25 11C6.25 11.4142 6.58579 11.75 7 11.75L13.9362 11.75C13.9251 11.7642 13.9137 11.7787 13.9018 11.7935C13.6427 12.1161 13.2573 12.4997 12.6824 13.0695L11.272 14.4673C10.9778 14.7589 10.9757 15.2338 11.2673 15.528C11.5589 15.8222 12.0338 15.8243 12.328 15.5327L13.7691 14.1043C14.3053 13.573 14.7525 13.1298 15.0713 12.7328C15.4057 12.3163 15.6601 11.8787 15.7281 11.3455C15.7427 11.2308 15.75 11.1154 15.75 11C15.75 10.8846 15.7427 10.7692 15.7281 10.6545C15.6601 10.1213 15.4057 9.68367 15.0713 9.26724C14.7525 8.87023 14.3053 8.42705 13.7691 7.89568L12.328 6.46731Z",fill:"#2B2436"}}),t._v(" "),n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M11 0.25C5.06294 0.25 0.25 5.06294 0.25 11C0.25 16.9371 5.06294 21.75 11 21.75C16.9371 21.75 21.75 16.9371 21.75 11C21.75 5.06294 16.9371 0.25 11 0.25ZM1.75 11C1.75 5.89137 5.89137 1.75 11 1.75C16.1086 1.75 20.25 5.89137 20.25 11C20.25 16.1086 16.1086 20.25 11 20.25C5.89137 20.25 1.75 16.1086 1.75 11Z",fill:"#2B2436"}})])])})),0)]),t._v(" "),n("div",{staticClass:"offcanvas-footer"},[n("button",{on:{click:function(n){return t.goLink("/main")}}},[t._v("체험을 시작하세요")])])])])}),[],!1,null,"a727d052",null);n.default=component.exports},326:function(t,n,e){var content=e(344);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(89).default)("09086704",content,!0,{sourceMap:!1})},343:function(t,n,e){"use strict";e(326)},344:function(t,n,e){var o=e(88)((function(i){return i[1]}));o.push([t.i,".mainHeader[data-v-cf99ba30]{justify-content:space-between;left:0;position:sticky;right:0;top:0;width:100%;z-index:998;--tw-bg-opacity:1;background-color:#fff;background-color:rgba(255,255,255,var(--tw-bg-opacity,1));padding:20px 20px 20px 16px}.mainHeader[data-v-cf99ba30],.mainHeader__menu[data-v-cf99ba30]{align-items:center;display:flex}.mainHeader__menu[data-v-cf99ba30]{justify-content:center}",""]),o.locals={},t.exports=o},365:function(t,n,e){"use strict";e.r(n);e(90);var o={components:{AllMenuOffcanvas:e(321).default},data:function(){return{isOffcanvasAni:!1,isMenuOffcanvasOpen:!1}},methods:{openMenuOffcanvas:function(){this.isOffcanvasAni=!0,this.isMenuOffcanvasOpen=!0},closeMenuOffcanvas:function(){var t=this;this.isOffcanvasAni=!1,setTimeout((function(){t.isMenuOffcanvasOpen=!1}),300)}}},r=(e(343),e(49)),component=Object(r.a)(o,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"mainHeader"},[n("div",{staticClass:"mainHeader__title"},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"80",height:"19",viewBox:"0 0 80 19",fill:"none"}},[n("path",{attrs:{d:"M61.9808 0.594055H73.5052V1.70293H75.2477V0.594055H79.802V12.7125H75.2477V9.62346H73.5052V10.7323H65.347C63.1293 10.7323 61.9808 9.58386 61.9808 7.36611V0.594055ZM61.9808 11.7224H66.5351V13.5045C66.5351 14.2174 67.0103 14.6926 67.7232 14.6926H80V18.6529H66.3371C63.7233 18.6529 61.9808 16.9103 61.9808 14.2966V11.7224ZM66.5351 6.57406C66.5351 6.89088 66.8123 7.1681 67.1291 7.1681H68.9509V4.15829H66.5351V6.57406ZM73.5052 5.06916V6.25723H75.2477V5.06916H73.5052Z",fill:"url(#paint0_linear_2003_279)"}}),t._v(" "),n("path",{attrs:{d:"M47.129 14.8906H52.7129V18.6529H45.7429C43.1291 18.6529 41.3866 16.9103 41.3866 14.2966V0.594055H52.5149V4.35631H45.9409V7.60372H51.1288V11.2472H45.9409V13.7025C45.9409 14.4154 46.4161 14.8906 47.129 14.8906ZM54.6535 18.6529V11.2472H52.0793V7.60372H54.6535V0.594055H59.2078V18.6529H54.6535Z",fill:"url(#paint1_linear_2003_279)"}}),t._v(" "),n("path",{attrs:{d:"M20.7923 0.594055H31.9207V18.6529H25.1486C22.5348 18.6529 20.7923 16.9103 20.7923 14.2966V0.594055ZM33.2672 18.6529V0.594055H37.8215V7.14829H39.6036V11.1086H37.8215V18.6529H33.2672ZM25.3466 13.5045C25.3466 14.2174 25.8219 14.6926 26.5347 14.6926H27.3664V4.55432H25.3466V13.5045Z",fill:"url(#paint2_linear_2003_279)"}}),t._v(" "),n("path",{attrs:{d:"M0.198013 13.4055V11.1878C0.198013 7.92053 2.35636 5.74239 5.88099 5.74239C9.40563 5.74239 11.564 7.92053 11.564 11.1878V13.4055C11.564 16.6727 9.40563 18.8509 5.88099 18.8509C2.35636 18.8509 0.198013 16.6727 0.198013 13.4055ZM12.6728 18.6529V0.59404H17.2272V7.54431H19.0093V11.5046H17.2272V18.6529H12.6728ZM0 1.38609H3.60384V0H8.15815V1.38609H11.762V5.34636H0V1.38609ZM5.88099 15.2866C6.47503 15.2866 7.00967 14.8906 7.00967 14.1976V10.3957C7.00967 9.70265 6.47503 9.30662 5.88099 9.30662C5.28695 9.30662 4.75232 9.70265 4.75232 10.3957V14.1976C4.75232 14.8906 5.28695 15.2866 5.88099 15.2866Z",fill:"url(#paint3_linear_2003_279)"}}),t._v(" "),n("defs",[n("linearGradient",{attrs:{id:"paint0_linear_2003_279",x1:"4.11059",y1:"1.20789",x2:"80.8407",y2:"22.6593",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#8539FF"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#D51BFF"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint1_linear_2003_279",x1:"4.11053",y1:"1.20789",x2:"80.8407",y2:"22.6593",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#8539FF"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#D51BFF"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint2_linear_2003_279",x1:"4.11044",y1:"1.20789",x2:"80.8406",y2:"22.6593",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#8539FF"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#D51BFF"}})],1),t._v(" "),n("linearGradient",{attrs:{id:"paint3_linear_2003_279",x1:"4.11037",y1:"1.20788",x2:"80.8405",y2:"22.6593",gradientUnits:"userSpaceOnUse"}},[n("stop",{attrs:{"stop-color":"#8539FF"}}),t._v(" "),n("stop",{attrs:{offset:"1","stop-color":"#D51BFF"}})],1)],1)])]),t._v(" "),n("div",{staticClass:"mainHeader__menu"},[n("button",{on:{click:t.openMenuOffcanvas}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"16",viewBox:"0 0 20 16",fill:"none"}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M0 1.04348C0 0.766734 0.112886 0.501315 0.313814 0.305628C0.514743 0.109941 0.787271 0 1.07143 0H18.9286C19.2127 0 19.4853 0.109941 19.6861 0.305628C19.8871 0.501315 20 0.766734 20 1.04348C20 1.32022 19.8871 1.58564 19.6861 1.78133C19.4853 1.97702 19.2127 2.08696 18.9286 2.08696H1.07143C0.787271 2.08696 0.514743 1.97702 0.313814 1.78133C0.112886 1.58564 0 1.32022 0 1.04348ZM0 8C0 7.72326 0.112886 7.45784 0.313814 7.26215C0.514743 7.06646 0.787271 6.95652 1.07143 6.95652H18.9286C19.2127 6.95652 19.4853 7.06646 19.6861 7.26215C19.8871 7.45784 20 7.72326 20 8C20 8.27674 19.8871 8.54216 19.6861 8.73785C19.4853 8.93354 19.2127 9.04348 18.9286 9.04348H1.07143C0.787271 9.04348 0.514743 8.93354 0.313814 8.73785C0.112886 8.54216 0 8.27674 0 8ZM1.07143 13.913C0.787271 13.913 0.514743 14.023 0.313814 14.2187C0.112886 14.4143 0 14.6798 0 14.9565C0 15.2333 0.112886 15.4987 0.313814 15.6943C0.514743 15.8901 0.787271 16 1.07143 16H18.9286C19.2127 16 19.4853 15.8901 19.6861 15.6943C19.8871 15.4987 20 15.2333 20 14.9565C20 14.6798 19.8871 14.4143 19.6861 14.2187C19.4853 14.023 19.2127 13.913 18.9286 13.913H1.07143Z",fill:"#2B2436"}})])])]),t._v(" "),t.isMenuOffcanvasOpen?n("AllMenuOffcanvas",{attrs:{isOffcanvasAni:t.isOffcanvasAni},on:{"close-menuOffcanvas":t.closeMenuOffcanvas}}):t._e()],1)}),[],!1,null,"cf99ba30",null);n.default=component.exports}}]);