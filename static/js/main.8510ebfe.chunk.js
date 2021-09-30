(this.webpackJsonpbooks_tracker=this.webpackJsonpbooks_tracker||[]).push([[0],{22:function(e,t,s){},32:function(e,t,s){"use strict";s.r(t);var a=s(1),o=s.n(a),c=s(14),i=s.n(c),n=(s(22),s(17)),r=s(6),l=s(5),j=s(2),b=s(0);var h=function(e){return Object(b.jsxs)("header",{className:"header",children:[Object(b.jsxs)("div",{className:"header__item",children:[Object(b.jsx)("img",{className:"header__item_logo",src:e.logo,alt:"Logo"}),Object(b.jsx)("h1",{className:"header__item_title",children:"Books Tracker"})]}),Object(b.jsxs)("nav",{className:"header__nav",children:[Object(b.jsx)(l.b,{className:"header__nav_link",to:"/home",children:"Home"}),Object(b.jsx)(l.b,{className:"header__nav_link",to:"/add-new-book",children:"Add new book"}),Object(b.jsx)(l.b,{className:"header__nav_link",to:"/my-list",children:"My list"}),Object(b.jsx)(l.b,{className:"header__nav_link",to:"/search",children:"Search"})]})]})};var d=function(e){return Object(b.jsxs)("div",{className:"home",children:[Object(b.jsx)("img",{className:"homePicture",src:e.homePicture1,alt:"Books"}),Object(b.jsx)("img",{className:"homePicture",src:e.homePicture2,alt:"Books"})]})};var u=function(e){return Object(b.jsxs)("form",{className:"form",children:[Object(b.jsx)("p",{className:"form__item_title",children:"Type information of a book you would like to read:"}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"form__item_text",type:"text",placeholder:"Title",name:"title",value:e.newTitle,onChange:e.onChange}),Object(b.jsx)("br",{}),Object(b.jsx)("input",{className:"form__item_text",type:"text",placeholder:"Author",name:"author",value:e.newAuthor,onChange:e.onChange}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"form__item_button",onClick:e.onAdd,onKeyPress:e.onKeyPress,children:"Add"}),Object(b.jsx)("p",{style:e.displayMessage,className:"form__item_paragraph",children:"Book has been added to your list!"})]})};var m=function(e){return Object(b.jsxs)("div",{className:"bookslist",children:[Object(b.jsx)("h2",{className:"bookslist__item_title",children:"List of books:"}),e.booksList.length>0?Object(b.jsx)("ul",{className:"bookslist__item_list",children:e.booksList.map((function(t){return Object(b.jsxs)("li",{className:"bookslist__item_list_items",children:[Object(b.jsxs)("span",{className:"bookslist__item_list_items_info",children:["Title: ",t.title,Object(b.jsx)("br",{}),"Author: ",t.author]}),Object(b.jsx)("button",{className:"bookslist__item_list_button",onClick:function(){return e.onDelete(t.id)},children:"Delete"})]},t.id)}))}):Object(b.jsx)("p",{className:"bookslist__item_paragraph",children:"No books to show!"})]})};var _=function(e){return Object(b.jsxs)("div",{children:[" ",Object(b.jsx)("input",{className:"bookslist__item_text",type:"text",placeholder:"Search for a book title here...",name:"search",value:e.searchedValue,onChange:e.onChange}),Object(b.jsx)("br",{}),Object(b.jsx)("button",{className:"bookslist__item_button",onClick:e.onSearch,children:"Search"}),e.displayFoundBooks?Object(b.jsx)("ul",{className:"bookslist__item_list",children:e.foundBooks.map((function(e){return Object(b.jsx)("li",{className:"bookslist__item_list_items",children:Object(b.jsxs)("span",{className:"bookslist__item_list_items_info",children:["Title: ",e.title,Object(b.jsx)("br",{}),"Author: ",e.author]})},e.id)}))}):null]})};var O=function(){var e=Object(j.f)();return Object(b.jsxs)("footer",{className:"footer",children:[Object(b.jsx)("button",{className:"footer__button",onClick:function(){return e.goBack()},children:"Back"}),Object(b.jsx)("button",{className:"footer__button",onClick:function(){return e.goForward()},children:"Forward"}),Object(b.jsx)("div",{className:"footer__item",children:Object(b.jsx)("h3",{className:"footer__item_title",children:"2021 Yuliia Rudert"})})]})},x=s.p+"static/media/logo.7dad2827.jpeg",f=s.p+"static/media/home_picture1.4281f608.jpeg",k=s.p+"static/media/home_picture2.946caa34.jpeg";var p=function(){var e=Object(a.useState)([{id:1,title:"Atlas Shrugged",author:"Ayn Rand"},{id:2,title:"Harry Potter: Deathly Hallows",author:"J. K. Rowling"},{id:3,title:"The Why Cafe",author:"John Strelecky"}]),t=Object(r.a)(e,2),s=t[0],o=t[1],c=Object(a.useState)(""),i=Object(r.a)(c,2),p=i[0],N=i[1],g=Object(a.useState)([{}]),v=Object(r.a)(g,2),y=v[0],w=v[1],C=Object(a.useState)(""),S=Object(r.a)(C,2),A=S[0],B=S[1],P=Object(a.useState)(""),T=Object(r.a)(P,2),L=T[0],D=T[1],F=Object(a.useState)({display:"none"}),J=Object(r.a)(F,2),K=J[0],M=J[1],H=Object(a.useState)(!1),R=Object(r.a)(H,2),E=R[0],I=R[1],V=function(e){var t=e.target,s=t.name,a=t.value;"title"===s?B(a):"author"===s?D(a):N(a)},W=function(e){if(e.preventDefault(),""!==A&&""!==L){var t={id:new Date,title:A,author:L};o((function(e){return[].concat(Object(n.a)(e),[t])})),M({display:"block"}),B(""),D("")}else alert("Please fill in title and author information.")};return Object(b.jsxs)(l.a,{className:"App",children:[Object(b.jsx)(h,{logo:x}),Object(b.jsxs)("div",{className:"wrapper",children:[Object(b.jsx)(j.b,{path:"/home",children:Object(b.jsx)(d,{homePicture1:f,homePicture2:k})}),Object(b.jsx)(j.b,{path:"/add-new-book",children:Object(b.jsx)(u,{newTitle:A,newAuthor:L,displayMessage:K,onChange:V,onAdd:W,onKeyPress:function(e){13===e.charCode&&W(e)}})}),Object(b.jsx)(j.b,{path:"/my-list",children:Object(b.jsx)(m,{booksList:s,onChange:V,onDelete:function(e){o((function(){return s.filter((function(t){return t.id!==e?t:null}))}))}})}),Object(b.jsx)(j.b,{path:"/search",children:Object(b.jsx)(_,{foundBooks:y,displayFoundBooks:E,onChange:V,onSearch:function(){p&&(w(s.filter((function(e){return e.title.toLowerCase().includes(p.toLowerCase())}))),I(!0),N(""))}})}),Object(b.jsx)(j.a,{from:"/",to:"/home"})]}),Object(b.jsx)(O,{})]})};i.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(p,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.8510ebfe.chunk.js.map