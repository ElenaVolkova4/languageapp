(this.webpackJsonplanguageapp=this.webpackJsonplanguageapp||[]).push([[0],{133:function(e,t,n){},255:function(e,t,n){},525:function(e,t,n){},526:function(e,t,n){},527:function(e,t,n){},536:function(e,t,n){},537:function(e,t,n){},538:function(e,t,n){},539:function(e,t,n){},540:function(e,t,n){},541:function(e,t,n){},542:function(e,t,n){},543:function(e,t,n){},544:function(e,t,n){},545:function(e,t,n){},546:function(e,t,n){},547:function(e,t,n){"use strict";n.r(t);var s=n(30),c=(n(259),n(195),n(324),n(2)),r=n.n(c),i=n(134),a=n.n(i),o=(n(525),n(526),n(527),n.p+"static/media/logo10.6850f908.png"),l=n(46),d=n(1),j=function(){return Object(d.jsxs)("div",{className:"header",children:[Object(d.jsxs)("div",{className:"header_logo",children:[Object(d.jsxs)(l.b,{to:"/",children:[Object(d.jsx)("img",{className:"logo",src:o,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u044f"})," "]}),Object(d.jsx)("p",{className:"header_phrase",children:"\u0427\u0442\u043e\u0431\u044b \u043f\u043e\u043f\u0430\u0441\u0442\u044c \u0432 \u0425\u043e\u0433\u0432\u0430\u0440\u0442\u0441 - \u043d\u0430\u0434\u043e \u0437\u043d\u0430\u0442\u044c \u0430\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439 \u044f\u0437\u044b\u043a!"})]}),Object(d.jsxs)("div",{className:"header_buttons",children:[Object(d.jsx)(l.b,{to:"/",children:Object(d.jsx)("div",{className:"header_button",children:"Home"})}),Object(d.jsx)(l.b,{to:"/game",children:Object(d.jsx)("div",{className:"header_button",children:"Training"})}),Object(d.jsx)(l.b,{to:"/new",children:Object(d.jsx)("div",{className:"header_button",children:"Add new word"})})]})]})},b=n(48),h=(n(536),n(537),function(e){console.log();var t=Object(c.useRef)();return Object(c.useEffect)((function(){return t.current.focus()}),[]),Object(d.jsx)("div",{tabIndex:"0",type:"button",className:"buttonCheck",onClick:e.onClick,ref:t,children:"\u041f\u0440\u043e\u0432\u0435\u0440\u0438\u0442\u044c"})}),u=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),s=n[0],r=n[1],i=function(){r(!s),s?null===e||void 0===e||e.notLearnedCard():null===e||void 0===e||e.learnedCard()};return Object(d.jsxs)("div",{className:"wordCard",children:[Object(d.jsx)("div",{className:"englishWord",children:e.english}),Object(d.jsx)("div",{className:"englishTranscription",children:e.transcription}),s?Object(d.jsxs)("div",{className:"checking",children:[Object(d.jsx)("div",{className:"russianWord",children:e.russian}),Object(d.jsx)("div",{className:"checking_btn",onClick:i,children:"\u0421\u043a\u0440\u044b\u0442\u044c \u043f\u0435\u0440\u0435\u0432\u043e\u0434"})]}):Object(d.jsx)(h,{onClick:i})]})},O=(n(538),n(255),function(e){var t="arrow\n  ".concat(e.disabled?"disabled":" ","\n  ");return Object(d.jsx)("div",{className:t,onClick:e.onClick,disabled:e.disabled,children:"\u227b"})}),x=n(57),v=n.n(x),p=function(e){var t=v()("arrow",{disabled:e.disabled});return Object(d.jsx)("div",{className:t,onClick:e.onClick,disabled:e.disabled,children:"\u227a"})},g=(n(539),n.p+"static/media/error.1b2bf6b7.png"),m=function(){return Object(d.jsxs)("div",{className:"serverError",children:[Object(d.jsxs)("p",{className:"serverError_text",children:["\u0414\u0430\u043d\u043d\u044b\u0435 \u043d\u0435 \u0431\u044b\u043b\u0438 \u0437\u0430\u0433\u0440\u0443\u0436\u0435\u043d\u044b! ",Object(d.jsx)("br",{}),"\u041c\u043e\u0436\u0435\u0442, \u0443 \u0432\u0430\u0441 \u043e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0443?"]}),Object(d.jsx)("img",{className:"errorPic",src:g,alt:"\u041e\u0448\u0438\u0431\u043a\u0430!"})]})},f=n(47),w=Object(f.b)(["wordsStore"])(Object(f.c)((function(e){var t,n,s,r,i=e.wordsStore,a=Object(c.useState)(0),o=Object(b.a)(a,2),l=o[0],j=o[1],h=Object(c.useState)(0),x=Object(b.a)(h,2),v=x[0],g=x[1],f=i.words,w=Object(c.useCallback)((function(){return g(v+1)}),[v]),C=Object(c.useCallback)((function(){return g(v-1)}),[v]);return i.serverError?Object(d.jsx)(m,{}):Object(d.jsxs)("div",{className:"cardsContainer",children:[Object(d.jsxs)("div",{className:"cardsContainer_count",children:["\u0418\u0437\u0443\u0447\u0435\u043d\u043e \u0441\u043b\u043e\u0432 \u0437\u0430 \u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u043a\u0443: ",v]}),Object(d.jsxs)("div",{className:"cardsContainer_cards",children:[Object(d.jsx)(p,{onClick:function(){j((l-1+f.length)%f.length)}}),Object(d.jsx)(u,{english:null===(n=f[l])||void 0===n?void 0:n.english,transcription:null===(s=f[l])||void 0===s?void 0:s.transcription,russian:null===(r=f[l])||void 0===r?void 0:r.russian,learnedCard:w,notLearnedCard:C},null===(t=f[l])||void 0===t?void 0:t.id),Object(d.jsx)(O,{onClick:function(){j((l+1)%f.length)}})]}),Object(d.jsxs)("div",{className:"cardsContainer_count",children:[l+1," / ",f.length]})]})}))),C=(n(540),n(541),function(){return Object(d.jsx)("thead",{className:"table_header",children:Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"English"}),Object(d.jsx)("th",{children:"Transcription"}),Object(d.jsx)("th",{children:"Translate"}),Object(d.jsx)("th",{className:"table_header__actions",children:"Actions"})]})})}),N=n(87),k=(n(542),n(133),function(e){return Object(d.jsx)("div",{className:"buttonEdit button_actions",onClick:e.onClick,title:"\u0440\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c",children:"\ud83d\udd8c"})}),_=function(e){return Object(d.jsx)("div",{className:"buttonDelete button_actions",onClick:e.onClick,title:"\u0443\u0434\u0430\u043b\u0438\u0442\u044c",children:"\u274c"})},S=function(e){var t="buttonSave button_actions\n  ".concat(e.disabled?"disabled_button":" ","\n  ");return Object(d.jsx)("div",{className:t,onClick:e.onClick,title:"\u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",children:"\u2705"})},T=function(e){return Object(d.jsx)("div",{className:"buttonCancel button_actions",onClick:e.onClick,title:"\u043e\u0442\u043c\u0435\u043d\u0438\u0442\u044c",children:"\ud800\udd02"})},E=/^[a-zA-Z-\s]+$/,R=/^[\u0430-\u044f\u0451-\s]+$/i,L=function(e){var t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],i=n[1],a=Object(c.useState)({english:e.english,transcription:e.transcription,russian:e.russian,id:e.id}),o=Object(b.a)(a,2),l=o[0],j=o[1],h=Object(c.useMemo)((function(){return-1===l.english.search(E)||!R.test(l.russian)||""===l.english||""===l.transcription||""===l.russian}),[l.russian,l.english,l.transcription,l.id]),u=v()("",{redInputTableRow:""===l.english||!E.test(l.english)}),O=v()("",{redInputTableRow:""===l.transcription}),x=v()("",{redInputTableRow:""===l.russian||!R.test(l.russian)}),p=function(){return i(!r)},g=function(e){j(Object(s.a)(Object(s.a)({},l),{},Object(N.a)({},e.target.name,e.target.value.toLowerCase())))};return Object(d.jsxs)("tr",{className:"tableRow",children:[Object(d.jsx)("td",{children:r?Object(d.jsx)("input",{className:"inputTableRow ".concat(u),value:l.english,name:"english",onChange:g}):l.english}),Object(d.jsx)("td",{children:r?Object(d.jsx)("input",{className:"inputTableRow ".concat(O),value:l.transcription,name:"transcription",onChange:g}):l.transcription}),Object(d.jsx)("td",{children:r?Object(d.jsx)("input",{className:"inputTableRow ".concat(x),value:l.russian,name:"russian",onChange:g}):l.russian}),r?Object(d.jsxs)("td",{className:"tableRow_actions",children:[Object(d.jsx)(S,{onClick:function(){var t;h?alert("\u041e\u0441\u0442\u0430\u043b\u0438\u0441\u044c \u043d\u0435\u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043d\u044b\u0435 \u043f\u043e\u043b\u044f \u0438\u043b\u0438 \u043f\u043e\u043b\u044f \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442 \u043d\u0435\u0434\u043e\u043f\u0443\u0441\u0442\u0438\u043c\u044b\u0435 \u0437\u043d\u0430\u043a\u0438!"):(t=l,e.saveChanges(t),i(!r))}}),Object(d.jsx)(T,{onClick:p})]}):Object(d.jsxs)("td",{className:"tableRow_actions",children:[Object(d.jsx)(k,{onClick:p}),Object(d.jsx)(_,{onClick:function(){return t=e.id,void e.deleteWord(t);var t}})]})]})},W=(n(543),function(){return Object(d.jsx)("div",{className:"container",children:Object(d.jsx)("div",{className:"spinners-container",children:Object(d.jsx)("div",{className:"spinner-block",children:Object(d.jsxs)("div",{className:"spinner-eff spinner-eff-1",children:[Object(d.jsx)("div",{className:"bar bar-top"}),Object(d.jsx)("div",{className:"bar bar-right"}),Object(d.jsx)("div",{className:"bar bar-bottom"}),Object(d.jsx)("div",{className:"bar bar-left"})]})})})})}),M=Object(f.b)(["wordsStore"])(Object(f.c)((function(e){var t,n=e.wordsStore;return n.serverError?Object(d.jsx)(m,{}):n.isLoading||!n.words.length?Object(d.jsx)(W,{}):Object(d.jsx)("div",{className:"main_table",children:Object(d.jsxs)("table",{className:"table",children:[Object(d.jsx)(C,{}),Object(d.jsx)("tbody",{children:null===(t=n.words)||void 0===t?void 0:t.map((function(e,t){return Object(d.jsx)(L,{english:e.english,transcription:e.transcription,russian:e.russian,id:e.id,deleteWord:n.removeWord,saveChanges:n.saveChanges},e.id)}))})]})})}))),y=(n(544),function(){return Object(d.jsxs)("div",{className:"footer",children:[Object(d.jsx)("div",{className:"foter_copyright",children:"\xa9 2021"}),Object(d.jsx)("div",{className:"footer_text",children:"\u0412\u043e\u043b\u043a\u043e\u0432\u0430 \u0415\u043b\u0435\u043d\u0430"}),Object(d.jsxs)("div",{className:"footer_networks",children:[Object(d.jsxs)("a",{href:"https://github.com/ElenaVolkova4",children:[Object(d.jsxs)("svg",{fill:"#eee0ee",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",children:[" ",Object(d.jsx)("path",{d:"M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"})]})," "]}),Object(d.jsxs)("a",{href:"https://t.me/tigra_v_kletke",children:[Object(d.jsx)("svg",{fill:"#eee0ee",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"30px",height:"30px",children:Object(d.jsx)("path",{d:"M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445\tc-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758\tc0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125\tc0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077\tC47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"})})," "]}),Object(d.jsxs)("a",{href:"https://www.linkedin.cn/mwlite/in/elena-volkova-a65896224",children:[Object(d.jsxs)("svg",{fill:"#eee0ee",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 50 50",width:"30px",height:"30px",children:[" ",Object(d.jsx)("path",{d:"M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"})]})," "]}),Object(d.jsxs)("a",{href:"https://www.instagram.com/tigra_v_kletke/?hl=ru",children:[" ",Object(d.jsxs)("svg",{fill:"#eee0ee",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 30 30",width:"30px",height:"30px",children:[" ",Object(d.jsx)("path",{d:"M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"})]})]})]})]})}),z=(n(545),n.p+"static/media/1.91b91e0a.png"),I=function(){return Object(d.jsxs)("div",{className:"errorPage",children:[Object(d.jsx)("p",{className:"errorPage_text",children:"\u0422\u0430\u043a\u043e\u0433\u043e \u043f\u0443\u0442\u0438 \u0432 \u0425\u043e\u0433\u0432\u0430\u0440\u0442\u0441 \u043d\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442!"}),Object(d.jsxs)(l.b,{to:"/",children:[" ",Object(d.jsx)("img",{className:"errorPic",src:z,alt:"\u041e\u0448\u0438\u0431\u043a\u0430!"})]})]})},A=(n(546),n(19)),P=/^[a-zA-Z-\s]+$/,B=/^[\u0430-\u044f\u0451-\s]+$/i,J=Object(f.b)(["wordsStore"])(Object(f.c)((function(e){var t=e.wordsStore,n=Object(c.useState)({english:"",transcription:"",russian:""}),r=Object(b.a)(n,2),i=r[0],a=r[1],o=Object(A.f)(),l=Object(c.useState)({englishInput:!1,transcriptionInput:!1,russianInput:!1}),j=Object(b.a)(l,2),h=j[0],u=j[1],O=Object(c.useMemo)((function(){return-1===i.english.search(P)||!0!==B.test(i.russian)||""===i.english||""===i.transcription||""===i.russian}),[i.russian,i.english,i.transcription,i.id]),x=v()("",{redInputTableRow:h.english}),p=v()("",{redInputTableRow:h.transcription}),g=v()("",{redInputTableRow:h.russian}),f=function(e){a(Object(s.a)(Object(s.a)({},i),{},Object(N.a)({},e.target.name,e.target.value.toLowerCase()))),"english"===e.target.name&&u(Object(s.a)(Object(s.a)({},h),{},{english:""===e.target.value||!P.test(e.target.value)})),"transcription"===e.target.name&&u(Object(s.a)(Object(s.a)({},h),{},{transcription:""===e.target.value})),"russian"===e.target.name&&u(Object(s.a)(Object(s.a)({},h),{},{russian:""===e.target.value||!B.test(e.target.value)}))};return t.serverError?Object(d.jsx)(m,{}):Object(d.jsxs)("div",{className:"newWord",children:[Object(d.jsx)("h4",{className:"newWord-title",children:"Add new word"}),Object(d.jsx)("label",{htmlFor:"english",children:"english:"})," ",Object(d.jsx)("input",{className:"inputTableRow ".concat(x),value:i.english,name:"english",onChange:f}),Object(d.jsx)("label",{htmlFor:"transcription",children:"transcription:"})," ",Object(d.jsx)("input",{className:"inputTableRow ".concat(p),value:i.transcription,name:"transcription",onChange:f}),Object(d.jsx)("label",{htmlFor:"russian",children:"russian:"})," ",Object(d.jsx)("input",{className:"inputTableRow ".concat(g),value:i.russian,name:"russian",onChange:f}),Object(d.jsx)("button",{className:"buttonCheck",onClick:function(){return function(e){t.addWord(e),o.push("/")}(i)},disabled:O,children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})}))),V=function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)(j,{}),Object(d.jsx)("main",{className:"main",children:Object(d.jsxs)(A.c,{children:[Object(d.jsx)(A.a,{exact:!0,path:"/",component:M}),Object(d.jsx)(A.a,{exact:!0,path:"/game",component:w}),Object(d.jsx)(A.a,{exact:!0,path:"/new",component:J}),Object(d.jsx)(A.a,{component:I})]})}),Object(d.jsx)(y,{})]})},$=n(258),F=n(7),H=function e(){var t=this;Object($.a)(this,e),this.words=[],this.isLoading=!1,this.serverError=!1,this.loadWords=function(){t.isLoading=!0,t.serverError=!1,fetch("/api/words").then((function(e){return e.json()})).then((function(e){t.words=e,t.isLoading=!1})).catch((function(e){console.log(e),t.isLoading=!1,t.serverError=!0}))},this.addWord=function(e){t.serverError=!1,fetch("/api/words/add",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){t.words.push(e)})).catch((function(e){console.log(e),t.serverError=!0}))},this.removeWord=function(e){t.serverError=!1,fetch("/api/words/".concat(e,"/delete"),{method:"POST",body:JSON.stringify(t.words),headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(e){return e.json()})).then((function(n){t.words=t.words.filter((function(t){return t.id!==e}))})).catch((function(e){console.log(e),t.serverError=!0}))},this.saveChanges=function(e){fetch("/api/words/".concat(e,"/update"),{method:"POST",body:JSON.stringify(t.words),headers:{"Content-Type":"application/json; charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){t.words=e})).catch((function(e){console.log(e),t.serverError=!0}))},Object(F.m)(this,{words:F.n,isLoading:F.n,serverError:F.n,loadWords:F.f,addWord:F.f,removeWord:F.f,saveChanges:F.f}),this.loadWords()},Z={wordsStore:new H};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(l.a,{children:Object(d.jsx)(f.a,Object(s.a)(Object(s.a)({},Z),{},{children:Object(d.jsx)(V,{})}))})}),document.getElementById("root"))}},[[547,1,2]]]);
//# sourceMappingURL=main.8abb16de.chunk.js.map