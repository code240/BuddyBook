(this["webpackJsonpbuddy-book"]=this["webpackJsonpbuddy-book"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},23:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);n(1);var s=n(16),a=n.n(s),c=n(2),r=(n(23),n(0)),i=function(e){var t=Object(c.f)(),n=e.active;return setTimeout((function(){document.getElementById(n).classList.add("active")}),100),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("header",{className:"head",children:[Object(r.jsxs)("div",{className:"left-div-for-logo",children:[Object(r.jsxs)("span",{className:"logo",children:[Object(r.jsx)("b",{className:"firstS",children:"B"}),Object(r.jsx)("i",{children:"uddies"}),Object(r.jsx)("b",{className:"firstB",children:"B"}),Object(r.jsx)("i",{children:"ook"})]}),Object(r.jsx)("span",{className:"bars",id:"btn-shower",onClick:function(){return o()},children:Object(r.jsx)("i",{className:"fas fa-stream"})}),Object(r.jsx)("span",{className:"bars",id:"btn-hider",onClick:function(){return l()},children:Object(r.jsx)("i",{className:"fas fa-stream"})})]}),Object(r.jsxs)("div",{className:"right-div-for-btns",id:"buttonbar",children:[Object(r.jsx)("button",{className:"btn btn-header",id:"i1",onClick:function(){return t.push("/")},children:"Home"}),Object(r.jsx)("button",{className:"btn btn-header",id:"i2",children:"Questions"}),Object(r.jsx)("button",{className:"btn btn-header",id:"i3",onClick:function(){return t.push("/create")},children:"Create"}),Object(r.jsx)("button",{className:"btn btn-header",id:"i4",children:"About"}),Object(r.jsx)("button",{className:"btn btn-header",id:"i5",children:"Contact"}),Object(r.jsx)("button",{className:"btn btn-header btn-try",onClick:function(){return t.push("/create")},id:"i6",children:"Try"})]})]})})},o=function(){document.getElementById("buttonbar").style.display="block",document.getElementById("btn-shower").style.display="none",document.getElementById("btn-hider").style.display="block"},l=function(){document.getElementById("buttonbar").style.display="none",document.getElementById("btn-shower").style.display="block",document.getElementById("btn-hider").style.display="none"};i.defaultProps={active:"i1"};var j=i,u=(n(14),function(){var e=Object(c.f)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container-fluid face-main",children:[Object(r.jsxs)("h1",{className:"main-face-heading",children:["What Your ",Object(r.jsx)("span",{className:"r",children:"F"}),"riends Think About ",Object(r.jsx)("span",{className:"r",children:"Y"}),"ou?"]}),Object(r.jsx)("div",{className:"container-fluid background-image"}),Object(r.jsxs)("span",{className:"text-create",children:["Create Your ",Object(r.jsx)("span",{className:"r",children:"Q"}),"uestion ",Object(r.jsx)("span",{className:"r",children:"B"}),"ook"]}),Object(r.jsx)("span",{className:"text-create text-infoo",children:"Your Friends Will Give Answers Of Intersting Questions About You"}),Object(r.jsx)("button",{className:"create-btn btn btn-primary",onClick:function(){return e.push("/create")},children:"Create Now"})]})})}),d=(n(30),function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("footer",{className:"container-fluid foot",children:[Object(r.jsx)("hr",{className:"hr-line"}),Object(r.jsx)("span",{className:"follow-us-here",children:"Follow us here :"}),Object(r.jsx)("a",{href:"https://www.instagram.com/sttar_vipin_rao/",rel:"noreferrer",target:"_blank",children:Object(r.jsx)("span",{className:"icon icon-1",children:Object(r.jsx)("i",{className:"fab fa-instagram-square"})})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/vipin-rao-8a443a1b1",rel:"noreferrer",target:"_blank",children:Object(r.jsx)("span",{className:"icon icon-1",children:Object(r.jsx)("i",{className:"fab fa-linkedin"})})}),Object(r.jsx)("a",{href:"https://twitter.com/rao_sttar",rel:"noreferrer",target:"_blank",children:Object(r.jsx)("span",{className:"icon icon-1",children:Object(r.jsx)("i",{className:"fab fa-twitter-square"})})})]})})}),b=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i1"}),Object(r.jsx)(u,{}),Object(r.jsx)(d,{})]})},m=(n(15),function(){var e=Object(c.f)();return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container-fluid main-in-create",children:Object(r.jsxs)("div",{className:"container-fluid div-for-form",children:[Object(r.jsxs)("span",{className:"red-user",children:[Object(r.jsx)("i",{className:"fas fa-user-alt"})," "]}),Object(r.jsx)("span",{className:"enter-name-heading",children:"Enter your name to play the game"}),Object(r.jsx)("input",{type:"text",placeholder:"Enter Your Name",title:"3 to 20 characters",id:"gamer",autoComplete:"off",className:"container-fluid input-create"}),Object(r.jsx)("button",{className:"btn btn-danger btn-create",onClick:function(){return function(){var t=document.getElementById("gamer").value;if(""===t)return alert("Enter your Name"),!1;var n=t.length;if(n<3||n>20)return alert("3 to 20 charactres only"),!1;sessionStorage.setItem("Player",t),e.push("/share")}()},children:"Create"}),Object(r.jsxs)("b",{className:"btn btn-back-home",onClick:function(){return e.push("/")},children:[Object(r.jsx)("i",{className:"fas fa-undo back-sign"})," Back home"]})]})})})});var h=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i3"}),Object(r.jsx)(m,{}),Object(r.jsx)(d,{})]})};var x=function(){var e=Object(c.f)(),t=sessionStorage.getItem("Player");null==t&&e.push("/");var n=document.location.href,s=(n=(n=n.replace("share","play/")).replace("Share","play/"))+t,a="whatsapp://send?text="+(s=s.replace(" ","%20"));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)("div",{className:"container-fluid main-in-create",children:Object(r.jsxs)("div",{className:"container-fluid div-for-form",children:[Object(r.jsx)("span",{className:"red-user",children:Object(r.jsx)("i",{className:"fas fa-link"})}),Object(r.jsx)("span",{className:"enter-name-heading",children:"Copy this link and share with your friends"}),Object(r.jsx)("div",{className:"container-fluid input-create show-url text-truncate",id:"a",children:s}),Object(r.jsx)("button",{className:"btn btn-danger btn-create",onClick:function(){return function(){var e=document.createRange();e.selectNode(document.getElementById("a")),window.getSelection().removeAllRanges(),window.getSelection().addRange(e),document.execCommand("copy"),document.getElementById("notification-copy").style.display="block",setTimeout((function(){document.getElementById("notification-copy").style.display="none"}),1e3)}()},children:"Copy"}),Object(r.jsxs)("a",{className:"btn btn-back-home",href:a,children:[Object(r.jsx)("i",{className:"fab fa-whatsapp"})," Share to whatsapp"]})]})}),Object(r.jsx)("span",{className:"copied",id:"notification-copy",children:"Copoied!"})]})};var O=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i3"}),Object(r.jsx)(x,{}),Object(r.jsx)(d,{})]})};var f=function(e){var t=Object(c.f)();return sessionStorage.setItem("mainPlayer",e.player),Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("div",{className:"container-fluid face-main",children:[Object(r.jsxs)("h1",{className:"main-face-heading",children:[Object(r.jsx)("span",{className:"r",children:"W"}),"hat You ",Object(r.jsx)("span",{className:"r",children:"T"}),"hink About ",Object(r.jsx)("span",{className:"r player-name",children:e.player}),"?"]}),Object(r.jsx)("div",{className:"container-fluid background-image"}),Object(r.jsxs)("span",{className:"text-create",children:["Answer These ",Object(r.jsx)("span",{className:"r",children:"9"})," Questions for ",Object(r.jsx)("span",{className:"r",children:e.player})]}),Object(r.jsxs)("span",{className:"text-create text-infoo",children:["After answering, Don't forget to share screenshot to ",e.player,"."]}),Object(r.jsx)("button",{className:"play-btn btn ",onClick:function(){return t.push("/Entry")},children:"Play Now"}),Object(r.jsx)("span",{className:"text-create text-infoo text-ask-for-play",children:"Do you want to create your Question book?"}),Object(r.jsx)("button",{className:"create-btn btn btn-success create-btn-on-play-page",onClick:function(){return t.push("/Create")},children:"Create Now"})]})})},p=function(e){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(f,{player:e.match.params.name}),Object(r.jsx)(d,{})]})},g=function(){var e=Object(c.f)();if(null==sessionStorage.getItem("mainPlayer"))return e.push("/"),!1;return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container-fluid main-in-create",children:Object(r.jsxs)("div",{className:"container-fluid div-for-form entry-face-form-div",children:[Object(r.jsxs)("span",{className:"red-user",children:[Object(r.jsx)("i",{className:"fas fa-user-alt"})," "]}),Object(r.jsx)("span",{className:"enter-name-heading",children:"Please enter your name before playing"}),Object(r.jsx)("input",{type:"text",placeholder:"Enter Your Name",title:"3 to 20 characters",id:"gamer",autoComplete:"off",className:"container-fluid input-create"}),Object(r.jsx)("button",{className:"btn btn-danger btn-create",onClick:function(){return function(){var t=document.getElementById("gamer").value;if(""===(t=t.trim()))return alert("Enter your Name"),!1;var n=t.length;if(n<3||n>20)return alert("3 to 20 charactres only"),!1;sessionStorage.setItem("Player",t),e.push("/ask1")}()},children:"Start"})]})})})},N=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(g,{}),Object(r.jsx)(d,{})]})},y=function(){return Object(c.f)().push("/"),Object(r.jsx)("div",{children:Object(r.jsx)("h1",{children:"Page Not Found"})})},v=(n(31),sessionStorage.getItem("mainPlayer")),q=[{questionNumber:"q1",question:"Any nickname for ".concat(v),questionImage:"media/q01.png",next:"ask2"},{questionNumber:"q2",question:"Colour which suits on ".concat(v),questionImage:"media/q02.png",next:"/ask3"},{questionNumber:"q3",question:"One Thing You Like in ".concat(v),questionImage:"media/q03.png",next:"/ask4"},{questionNumber:"q4",question:"One Thing You Dislike in ".concat(v),questionImage:"media/q04.png",next:"/ask5"},{questionNumber:"q5",question:"Things that are similar in You and ".concat(v),questionImage:"media/q05.png",next:"/ask6"},{questionNumber:"q6",question:"Any sweet memories with ".concat(v),questionImage:"media/q06.png",next:"/ask7"},{questionNumber:"q7",question:"Your relationship with ".concat(v),questionImage:"media/q07.png",next:"/ask8"},{questionNumber:"q8",question:"Any song dedicated for ".concat(v),questionImage:"media/q08.png",next:"/ask9"},{questionNumber:"q9",question:"Can I post Your Answers in story",questionImage:"media/q09.png",next:"/result"}],k=function(e){console.log(e.data.questionText);var t=Object(c.f)(),n=sessionStorage.getItem("mainPlayer"),s=sessionStorage.getItem("Player");if(null==n)return t.push("/"),!1;if(null==s)return t.push("/"),!1;var a=function(){if(function(){var e=document.getElementById("answer").value;if(""===(e=e.trim()))return alert("Enter your Answer"),!1;var t=e.length;return!(t<1||t>1e3)||(alert("1 to 1000 charactres only"),!1)}()){var n=document.getElementById("qno").value,s=document.getElementById("answer").value;sessionStorage.setItem(n,s),t.push(e.data.next)}};return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("div",{className:"container-fluid gameStart-Body",children:Object(r.jsx)("div",{className:"container-fluid main-question-div",children:Object(r.jsxs)("div",{className:"container-fluid question-div",children:[Object(r.jsx)("div",{className:"container-fluid for-image",children:Object(r.jsx)("img",{src:e.data.questionImage,alt:"buddy-book question",className:"question-image"})}),Object(r.jsxs)("h1",{className:"my-question",id:"hh",children:[e.data.question,"?"]}),Object(r.jsx)("input",{type:"text",autoComplete:"off",title:"Answer must be between 1 to 1000 characters",id:"answer",className:"input-answer",placeholder:"Answer here..."}),Object(r.jsx)("input",{type:"hidden",value:e.data.questionNumber,id:"qno"}),Object(r.jsx)("button",{className:"btn btn-next",onClick:function(){return a()},children:"Next"})]})})})})},I=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(k,{data:q[0]})]})},w=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(k,{data:q[1]})]})},C=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(k,{data:q[2]})]})},S=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(k,{data:q[3]})]})},F=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(k,{data:q[4]})]})},E=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(k,{data:q[5]})]})},B=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(k,{data:q[6]})]})},P=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(k,{data:q[7]})]})},A=function(){return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(j,{active:"i6"}),Object(r.jsx)(k,{data:q[8]})]})};n(32);var T=function(e){var t=Object(c.f)(),n=sessionStorage.getItem("q1"),s=sessionStorage.getItem("q2"),a=sessionStorage.getItem("q3"),i=sessionStorage.getItem("q4"),o=sessionStorage.getItem("q5"),l=sessionStorage.getItem("q6"),j=sessionStorage.getItem("q7"),u=sessionStorage.getItem("q8"),d=sessionStorage.getItem("q9"),b=sessionStorage.getItem("mainPlayer"),m=sessionStorage.getItem("Player");return null!==n&&null!==s&&null!==a&&null!==i&&null!==o&&null!==l&&null!==j&&null!==u&&null!==d&&null!==m&&null!==b||t.push("/"),Object(r.jsxs)(r.Fragment,{children:[Object(r.jsxs)("div",{className:"result-body",children:[Object(r.jsx)("span",{className:"screenshot-sign",children:Object(r.jsx)("i",{className:"fas fa-camera"})}),Object(r.jsxs)("span",{className:"take-ss-text",children:["Now, Send Screenshot To"," ",Object(r.jsx)("span",{className:"mainPlayer",children:b})]}),Object(r.jsxs)("span",{className:"take-ss-text given-by",children:["Answer given by ",Object(r.jsx)("span",{className:"mainPlayer",children:m})]}),Object(r.jsx)("div",{className:"container-fluid main-result-show",children:e.data.map((function(e){return Object(r.jsxs)("div",{className:"container-fluid result",children:[Object(r.jsx)("div",{className:"for-image-left",children:Object(r.jsx)("img",{src:e.questionImage,alt:"buddy-book question-images",className:"question-image-mini"})}),Object(r.jsxs)("div",{className:"for-content-right",children:[Object(r.jsxs)("span",{className:"question-text-mini",children:[e.question,"?"]}),Object(r.jsx)("span",{className:"ans-text",children:"Ans :"}),Object(r.jsx)("span",{className:"user-answer",children:sessionStorage.getItem(e.questionNumber)})]})]})}))}),Object(r.jsxs)("span",{className:"take-ss-text given-by",children:["These answer given by ",Object(r.jsx)("span",{className:"mainPlayer",children:m})]}),Object(r.jsx)("h3",{className:"your-turn",children:"Now its your turn"}),Object(r.jsx)("button",{className:"btn create-your-btn",onClick:function(){return t.push("/create")},children:"Create your question book"})]}),Object(r.jsx)("div",{className:"black-screen",id:"myalert",children:Object(r.jsxs)("div",{className:"container-fluid alert-box",children:[Object(r.jsxs)("h6",{className:"alert-heading-ss",children:["Now Take a Screenshot and send it to ",Object(r.jsx)("span",{className:"mainPlayer-alert",children:sessionStorage.getItem("mainPlayer")})]}),Object(r.jsx)("button",{className:"btn btn-primary Okay-btn",onClick:function(){document.getElementById("myalert").style.display="none"},children:"Okay"})]})})]})},Y=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(T,{data:q})})},_=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)(c.c,{children:[Object(r.jsx)(c.a,{exact:!0,path:"/",component:b}),Object(r.jsx)(c.a,{exact:!0,path:"/create",component:h}),Object(r.jsx)(c.a,{exact:!0,path:"/share",component:O}),Object(r.jsx)(c.a,{path:"/play/:name",component:p}),Object(r.jsx)(c.a,{exact:!0,path:"/entry",component:N}),Object(r.jsx)(c.a,{exact:!0,path:"/ask1",component:I}),Object(r.jsx)(c.a,{exact:!0,path:"/ask2",component:w}),Object(r.jsx)(c.a,{exact:!0,path:"/ask3",component:C}),Object(r.jsx)(c.a,{exact:!0,path:"/ask4",component:S}),Object(r.jsx)(c.a,{exact:!0,path:"/ask5",component:F}),Object(r.jsx)(c.a,{exact:!0,path:"/ask6",component:E}),Object(r.jsx)(c.a,{exact:!0,path:"/ask7",component:B}),Object(r.jsx)(c.a,{exact:!0,path:"/ask8",component:P}),Object(r.jsx)(c.a,{exact:!0,path:"/ask9",component:A}),Object(r.jsx)(c.a,{exact:!0,path:"/result",component:Y}),Object(r.jsx)(c.a,{component:y})]})})},Q=n(7);a.a.render(Object(r.jsx)(Q.a,{children:Object(r.jsx)(_,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.0ea508b9.chunk.js.map