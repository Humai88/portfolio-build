(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{103:function(e,t,a){e.exports={wrapper:"Header_wrapper__1ssxg"}},118:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a.n(c),i=a(42),n=a.n(i),r=(a(118),a(64)),l=a.n(r),o=a(3),j=a(28),b=a.n(j),d=a(29),m=a(1),p=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],i=function(){s(!1)};return Object(m.jsxs)("div",{className:b.a.wrapper,children:[Object(m.jsx)("input",{type:"checkbox",className:b.a.toggler,checked:a,onChange:function(){s(!a)}}),Object(m.jsx)("div",{className:b.a.hamburger,children:Object(m.jsx)("div",{})}),Object(m.jsx)("div",{className:b.a.menu,children:Object(m.jsx)("div",{children:Object(m.jsx)("div",{children:Object(m.jsxs)("ul",{children:[Object(m.jsx)(d.Link,{onClick:i,activeClass:"active",to:"home",spy:!0,smooth:!0,offset:0,duration:1100,children:"Home"}),Object(m.jsx)(d.Link,{onClick:i,activeClass:"active",to:"skills",spy:!0,smooth:!0,offset:0,duration:800,children:"Skills"}),Object(m.jsx)(d.Link,{onClick:i,activeClass:"active",to:"works",spy:!0,smooth:!0,offset:0,duration:800,children:"Works"}),Object(m.jsx)(d.Link,{onClick:i,activeClass:"active",to:"contacts",spy:!0,smooth:!0,offset:0,duration:1100,children:"Contacts"})]})})})})]})},u=a(103),h=a.n(u),x=function(){return Object(m.jsx)("div",{className:h.a.wrapper,children:Object(m.jsx)(p,{})})},_=a(46),O=a.n(_),g=function(){return Object(m.jsx)("div",{className:O.a.wrapper,children:Object(m.jsxs)("div",{className:O.a.container,children:[Object(m.jsx)("h3",{children:"Gumay"}),Object(m.jsxs)("div",{className:O.a.links,children:[Object(m.jsx)("a",{href:"https://www.linkedin.com/in/gumay-vierdiyeva-296949215/",target:"_blank",rel:"noreferrer",children:"Linkedin"}),Object(m.jsx)("a",{href:"https://www.instagram.com/gumay88/?hl=en",target:"_blank",rel:"noreferrer",children:"Instagram"}),Object(m.jsx)("a",{href:"https://www.codewars.com/users/Gumay88",target:"_blank",rel:"noreferrer",children:"Codewars"})]}),Object(m.jsx)("p",{children:"Copyright"})]})})},f=a(6),v=a.n(f),N=a.p+"static/media/photo_2021-08-31_00-35-04.4b6dd8d0.webp",k=a(7),w=50,S=160,y=function(e){var t=e.messages,a=Object(c.useState)({text:"",message:"",isDeleting:!1,loopNum:0,typingSpeed:S}),s=Object(o.a)(a,2),i=s[0],n=s[1];function r(e){return e.isDeleting?e.message.substring(0,e.text.length-1):e.message.substring(0,e.text.length+1)}function l(e,t){return t[Number(e.loopNum)%Number(t.length)]}function j(e){return e.isDeleting?S:w}return Object(c.useEffect)((function(){var e;return function t(){n((function(e){return Object(k.a)(Object(k.a)({},e),{},{text:r(e),typingSpeed:j(e)})})),e=setTimeout(t,i.typingSpeed)}(),function(){return clearTimeout(e)}}),[i.isDeleting]),Object(c.useEffect)((function(){i.isDeleting||i.text!==i.message?i.isDeleting&&""===i.text&&n((function(e){return Object(k.a)(Object(k.a)({},e),{},{isDeleting:!1,loopNum:e.loopNum+1,message:l(e,t)})})):setTimeout((function(){n((function(e){return Object(k.a)(Object(k.a)({},e),{},{isDeleting:!0})}))}),500)}),[i.text,i.message,i.isDeleting,t]),Object(m.jsx)("span",{className:v.a.typewriter,children:i.text})};var M=a(104),T=a(22),R=function(){var e=function(e,t){var a=Object(c.useState)((function(){var a=window.localStorage.getItem(t);return null!==a?JSON.parse(a):e})),i=Object(o.a)(a,2),n=i[0],r=i[1];return s.a.useEffect((function(){window.localStorage.setItem(t,JSON.stringify(n))}),[t,n]),[n,r]}("#ff6b6b","theme"),t=Object(o.a)(e,2),a=t[0],i=t[1],n=Object(c.useState)(!1),r=Object(o.a)(n,2),l=r[0],j=r[1];return document.documentElement.style.setProperty("--toggle-color",a),Object(m.jsxs)("div",{id:"home",className:v.a.wrapper,children:[Object(m.jsx)("div",{className:v.a.sidebarToggler,onClick:function(){j(!l)},children:Object(m.jsx)(M.a,{})}),l?Object(m.jsxs)("div",{className:v.a.sidebar,children:[Object(m.jsx)("div",{className:v.a.yellow,onClick:function(){i("#ddb247"),j(!1)},children:Object(m.jsx)(T.a,{})}),Object(m.jsx)("div",{className:v.a.blue,onClick:function(){i("#2978B5"),j(!1)},children:Object(m.jsx)(T.a,{})}),Object(m.jsx)("div",{className:v.a.teal,onClick:function(){i("#368B85"),j(!1)},children:Object(m.jsx)(T.a,{})}),Object(m.jsx)("div",{className:v.a.purple,onClick:function(){i("#7952B3"),j(!1)},children:Object(m.jsx)(T.a,{})}),Object(m.jsx)("div",{className:v.a.peach,onClick:function(){i("#ff6b6b"),j(!1)},children:Object(m.jsx)(T.a,{})})]}):null,Object(m.jsxs)("ul",{className:v.a.circles,onClick:function(){j(!1)},children:[Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{}),Object(m.jsx)("li",{})]}),Object(m.jsxs)("div",{className:v.a.container,children:[Object(m.jsxs)("div",{className:v.a.descrWrapper,children:[Object(m.jsx)("p",{className:v.a.subheader,children:"Hi there"}),Object(m.jsx)("h1",{children:"I am Gumay"}),Object(m.jsx)("div",{className:v.a.underline}),Object(m.jsx)(y,{messages:["A React Developer.","This is my website.","I am at your service."]})]}),Object(m.jsx)("div",{className:v.a.wrapImage,children:Object(m.jsx)("div",{className:v.a.imgHover,children:Object(m.jsx)("img",{src:N,className:v.a.img,alt:"myPhoto"})})})]})]})},C=a(30),A=a.n(C),W=function(e){var t=e.title,a=e.img;return Object(m.jsxs)("div",{className:A.a.wrapper,children:[Object(m.jsxs)("div",{className:A.a.iconWrapper,children:[Object(m.jsx)("div",{className:A.a.img}),a]}),Object(m.jsx)("h3",{className:A.a.header,children:t})]})},L=a(5),F=a.n(L),I=a(10),H=a(27),D=a(21),B=function(){return Object(m.jsxs)("div",{id:"skills",className:F.a.wrapper,children:[Object(m.jsx)("h2",{children:"My skills"}),Object(m.jsx)("div",{className:F.a.line}),Object(m.jsx)("div",{className:F.a.container,children:Object(m.jsxs)(D.a,{duration:1500,children:[Object(m.jsx)(W,{img:Object(m.jsx)(I.d,{style:{color:"#FFC93C"},className:F.a.icon})}),Object(m.jsx)(W,{img:Object(m.jsx)(I.i,{style:{color:"#2978B5"},className:F.a.icon})}),Object(m.jsx)(W,{img:Object(m.jsx)(I.c,{style:{color:"#FF4C29"},className:F.a.icon})}),Object(m.jsx)(W,{img:Object(m.jsx)(I.a,{style:{color:"#3DB2FF"},className:F.a.icon})}),Object(m.jsx)(W,{img:Object(m.jsx)(I.f,{style:{color:"#3EDBF0"},className:F.a.icon})}),Object(m.jsx)(W,{img:Object(m.jsx)(I.g,{style:{color:"#7952B3"},className:F.a.icon})}),Object(m.jsx)(W,{img:Object(m.jsx)(I.b,{style:{color:"#DD2C00"},className:F.a.icon})}),Object(m.jsx)(W,{img:Object(m.jsx)(H.b,{style:{color:"#E36BAE"},className:F.a.icon})})]})}),Object(m.jsx)("h2",{className:F.a.tools,children:"Tools I Use"}),Object(m.jsx)("div",{className:F.a.line}),Object(m.jsx)("div",{className:"".concat(F.a.container," ").concat(F.a.toolsWrapper),children:Object(m.jsxs)(D.a,{duration:2300,children:[Object(m.jsx)(W,{img:Object(m.jsx)(I.j,{style:{color:"#2978B5"},className:F.a.icon})}),Object(m.jsx)(W,{img:Object(m.jsx)(I.e,{style:{color:"#FF5722"},className:F.a.icon})}),Object(m.jsx)(W,{img:Object(m.jsx)(I.h,{style:{color:"#FD6F96"},className:F.a.icon})}),Object(m.jsx)(W,{img:Object(m.jsx)(H.c,{style:{color:"#548CA8"},className:F.a.icon})})]})})]})},E=a(9),J=a.n(E),q=a(106),G=function(e){var t=e.title,a=e.text,c=e.imgSrc,s=e.ghLink,i=e.webLink;return Object(m.jsxs)("div",{className:J.a.card,children:[Object(m.jsx)("div",{className:"".concat(J.a.face," ").concat(J.a.face1),children:Object(m.jsxs)("div",{className:J.a.content,children:[Object(m.jsx)("img",{className:J.a.img,src:c,alt:"projectPicture"}),Object(m.jsx)("h3",{children:t})]})}),Object(m.jsx)("div",{className:"".concat(J.a.face," ").concat(J.a.face2),children:Object(m.jsxs)("div",{className:J.a.content,children:[Object(m.jsx)("p",{children:a}),Object(m.jsxs)("div",{className:J.a.linksWrapper,children:[Object(m.jsxs)("a",{href:s,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)(q.a,{className:J.a.icon}),"GitHub"]}),Object(m.jsxs)("a",{className:J.a.btn,href:i,target:"_blank",rel:"noreferrer",children:[Object(m.jsx)(H.a,{})," Visit the Site"]})]})]})})]})},P=a(31),K=a.n(P),V=a.p+"static/media/2021-11-03-23_47_19-Todolist.093db3ef.webp",z=a.p+"static/media/2021-09-15-11_25_49-on-les.7f52867d.webp",U=a.p+"static/media/2021-11-17-18_52_50-Shop.f2d3fca3.webp",Q=a.p+"static/media/2021-10-17-19_04_17-React-App.f6fae54b.webp",Y=a.p+"static/media/2021-10-06-21_25_48-React-App.a5b195f5.webp",X=a.p+"static/media/reading.5507a5b0.webp",Z=function(){return Object(m.jsxs)("div",{id:"works",className:K.a.wrapper,children:[Object(m.jsx)("h2",{children:"Projects"}),Object(m.jsx)("div",{className:K.a.line}),Object(m.jsx)("div",{className:K.a.container,children:Object(m.jsxs)(D.a,{duration:2e3,children:[Object(m.jsx)(G,{title:"Todolist",text:"A website for creating a tasks-list. I implemented there React (functional components, Hooks), Redux (Redux Thunk), REST Api (fetching, displaying and posting data),TypeScript, Axios, SASS, Storybook and Material UI. ",imgSrc:V,ghLink:"https://github.com/Humai88/todolist",webLink:"https://humai88.github.io/todolist/"}),Object(m.jsx)(G,{title:"Online Store",text:"E-commerce website I built using React (class components), Redux (Redux Thunk), React-Redux, GraphQL (fetching and displaying data) and TypeScript. ",imgSrc:U,ghLink:"https://github.com/Humai88/online-store",webLink:"https://Humai88.github.io/online-store"}),Object(m.jsx)(G,{title:"Weather App",text:"A site that shows current weather conditions and 5-day weather forecast. I built it using React, TypeScript, REST Api (fetching, displaying and posting data) and Axios.",imgSrc:Q,ghLink:"https://github.com/Humai88/weather-app",webLink:"https://humai88.github.io/weather-app/"})]})}),Object(m.jsx)("div",{className:K.a.container,style:{marginTop:"-2rem"},children:Object(m.jsxs)(D.a,{duration:2e3,children:[Object(m.jsx)(G,{title:"Anki Cards",text:"A website for study of selected subject via flashcards. I built it using React (functional components, Hooks), Redux (Redux Thunk), React-Redux, REST Api (fetching, displaying and posting data), Axios, and Typescript. ",imgSrc:Y,ghLink:"https://github.com/Humai88/friday",webLink:"https://humai88.github.io/friday"}),Object(m.jsx)(G,{title:"Reading Simulator",text:"A small project I created using React and TypeScript. This programme allows to train children's reading skills. You can make words from letters, also you can add some notes/marks as it has a drawing mode. For PC screens only (not for mobiles/touch screens)",imgSrc:X,ghLink:"https://github.com/Humai88/reading-trainer",webLink:"https://humai88.github.io/reading-trainer/"}),Object(m.jsx)(G,{title:"Blog",text:"A primary school teacher's blog (Standalone server) that I first built using vanilla JS but after a while migrated it to React. I implemented CSS Modules approach and SASS for styling. For displaying data I used fetching data from a local JSON.",imgSrc:z,ghLink:"https://github.com/Humai88/on-les",webLink:"https://www.on-les.com/"})]})})]})},$=a(113),ee=a(47),te=a.n(ee),ae=function(e){var t=e.red,a=e.className,c=Object($.a)(e,["red","className"]),s="".concat(t?te.a.red:te.a.default," ").concat(a);return Object(m.jsxs)("div",{children:[Object(m.jsx)("button",Object(k.a)({className:s},c)),Object(m.jsx)("div",{className:te.a.after})]})},ce=a(48),se=a.n(ce),ie=function(){return Object(m.jsxs)("div",{className:se.a.wrapper,children:[Object(m.jsx)("h3",{children:"I Am Available For Remote Job"}),Object(m.jsx)("div",{className:se.a.line}),Object(m.jsx)("a",{href:"https://www.linkedin.com/in/gumay-vierdiyeva-296949215/",target:"_blank",rel:"noreferrer",children:Object(m.jsx)(ae,{className:se.a.btn,children:"hire me"})})]})},ne=a(19),re=a(32),le=a(49),oe=a.n(le),je=a(66),be=a.n(je),de=function(e){var t=Object(ne.c)(e),a=Object(o.a)(t,2),c=a[0],s=a[1],i=(e.label,e.className);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("input",Object(k.a)(Object(k.a)({className:"".concat(be.a.input," ").concat(i)},c),e)),s.touched&&s.error?Object(m.jsx)("div",{className:be.a.error,children:s.error}):null]})},me=a(67),pe=a.n(me),ue=function(e){var t=Object(ne.c)(e),a=Object(o.a)(t,2),c=a[0],s=a[1],i=(e.label,e.className);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("textarea",Object(k.a)(Object(k.a)({className:"".concat(pe.a.textarea," ").concat(i)},c),e)),s.touched&&s.error?Object(m.jsx)("div",{className:pe.a.error,children:s.error}):null]})},he=a(112),xe=a.n(he),_e=function(){var e=Object(c.useState)(!1),t=Object(o.a)(e,2),a=t[0],s=t[1],i=Object(c.useState)(!1),n=Object(o.a)(i,2),r=n[0],l=n[1];return Object(m.jsx)(m.Fragment,{children:Object(m.jsx)(ne.b,{initialValues:{name:"",email:"",message:""},validationSchema:re.a({name:re.b().min(2,"Must be at least 2 characters").max(30,"Must be less then 30 characters").required("Required!"),email:re.b().email("Must be a valid email!").required("Required!"),message:re.b().min(30,"Must be at least 30 characters")}),onSubmit:function(e,t){var a=t.setSubmitting;(0,t.resetForm)(),s(!0),a(!1),xe.a.post("https://smtp-server-gumay.herokuapp.com/sendMessage",e).then((function(){s(!1),l(!0),setTimeout((function(){l(!1)}),2500)})).catch((function(e){console.log(e)}))},children:function(e){return Object(m.jsxs)(ne.a,{className:oe.a.form,children:[Object(m.jsx)(de,{type:"text",name:"name",placeholder:"Name"}),Object(m.jsx)(de,{type:"text",name:"email",placeholder:"E-mail"}),Object(m.jsx)(ue,{name:"message",placeholder:"Your message"}),r?Object(m.jsx)("div",{className:oe.a.msg,children:"Message has been sent "}):null,Object(m.jsx)(ae,{disabled:a,className:oe.a.btn,type:"submit",children:e.isSubmitting?"Loading...":"send message"})]})}})})},Oe=a(68),ge=a.n(Oe),fe=function(){return Object(m.jsxs)("div",{id:"contacts",className:ge.a.wrapper,children:[Object(m.jsx)("h2",{children:"Contact"}),Object(m.jsx)("div",{className:ge.a.line}),Object(m.jsx)(_e,{})]})};var ve=function(){return Object(m.jsxs)("div",{className:l.a.wrapper,children:[Object(m.jsx)(x,{}),Object(m.jsxs)("div",{className:l.a.content,children:[Object(m.jsx)(R,{}),Object(m.jsx)(B,{}),Object(m.jsx)(Z,{}),Object(m.jsx)(ie,{}),Object(m.jsx)(fe,{})]}),Object(m.jsx)(g,{})]})};n.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(ve,{})}),document.getElementById("root"))},28:function(e,t,a){e.exports={wrapper:"Navigation_wrapper__2K07U",linksWrapper:"Navigation_linksWrapper__2FArr",toggler:"Navigation_toggler__NDJVe",hamburger:"Navigation_hamburger__3hddS",menu:"Navigation_menu__2nb9Y"}},30:function(e,t,a){e.exports={wrapper:"Skill_wrapper__V4jVY",iconWrapper:"Skill_iconWrapper__1lzNK",img:"Skill_img__17S4q",header:"Skill_header__3nA9K",descr:"Skill_descr__3N_cz"}},31:function(e,t,a){e.exports={wrapper:"WorksSection_wrapper__2TK_L",container:"WorksSection_container__3jp2M",line:"WorksSection_line__35Iu9"}},46:function(e,t,a){e.exports={wrapper:"Footer_wrapper__30CW4",container:"Footer_container__1ksQ3",links:"Footer_links__1Iw-L"}},47:function(e,t,a){e.exports={default:"Button_default__3et6r",after:"Button_after__vLGLe"}},48:function(e,t,a){e.exports={wrapper:"RemoteJob_wrapper__PaykM",btn:"RemoteJob_btn__3Aww5",line:"RemoteJob_line__35I-8"}},49:function(e,t,a){e.exports={form:"Form_form__3bz6i",btn:"Form_btn__9quah",msg:"Form_msg__3hdii"}},5:function(e,t,a){e.exports={wrapper:"SkillsSection_wrapper__uQJoy",container:"SkillsSection_container__hInvT",line:"SkillsSection_line__311mb",icon:"SkillsSection_icon__1TpfN",tools:"SkillsSection_tools__1xefG",toolsWrapper:"SkillsSection_toolsWrapper__11rmW"}},6:function(e,t,a){e.exports={wrapper:"Main_wrapper__1Ajgt",container:"Main_container__3WpME",subheader:"Main_subheader__162Tc",typewriter:"Main_typewriter__3jSkf","blink-caret":"Main_blink-caret__1Wme8",underline:"Main_underline__KlH4e",imgHover:"Main_imgHover__5jy5z",img:"Main_img__1KL3c",wrapImage:"Main_wrapImage__29xiX",sidebarToggler:"Main_sidebarToggler__Fa_H8",sidebar:"Main_sidebar__23-tr",yellow:"Main_yellow__3a5GS",blue:"Main_blue__1w8qn",purple:"Main_purple__1YHP8",teal:"Main_teal__2TG6M",peach:"Main_peach__3-H3Q",circles:"Main_circles__3pBxP",animate:"Main_animate__13-Dq",typing:"Main_typing__v0Lta"}},64:function(e,t,a){e.exports={wrapper:"App_wrapper__3VsLU",content:"App_content__1dgm5"}},66:function(e,t,a){},67:function(e,t,a){e.exports={textarea:"Textarea_textarea__AgwFO"}},68:function(e,t,a){e.exports={wrapper:"Contacts_wrapper__RTc82",line:"Contacts_line__2tKRt"}},9:function(e,t,a){e.exports={card:"Work_card__3pU5z",img:"Work_img__bhkUS",face:"Work_face__3TkgR",face1:"Work_face1__2_1qb",content:"Work_content__21oeg",face2:"Work_face2__3MeVw",linksWrapper:"Work_linksWrapper__2gdMz",icon:"Work_icon__3feTQ"}}},[[248,1,2]]]);
//# sourceMappingURL=main.5946f166.chunk.js.map