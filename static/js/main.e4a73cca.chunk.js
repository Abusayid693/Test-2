(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(11),o=c.n(n),i=(c(40),c(6)),r=(c(41),c.p+"static/media/f.5731034b.jpg"),l=c(27),u=c(30),b=(c(48),c(2)),j=Object(u.a)("563492ad6f91700001000001563c3ddfa43143b3882bb052a2b7abbc"),d={position:"absolute",color:"black"},O={position:"absolute",width:"60%",top:"14%",left:"8%",color:"black"},f={backgroundColor:"black",color:"white"},m=s.a.createContext({images:[],setImages:function(){}}),h=s.a.createContext({loading:!1,setLoading:function(){}});function g(e){var t=Object(a.useState)("boy"),c=Object(i.a)(t,2),s=c[0],n=c[1],o=Object(a.useState)(e.numOfImages),r=Object(i.a)(o,2),u=r[0],g=r[1],p=Object(a.useState)(d),x=Object(i.a)(p,2),v=x[0],y=x[1],k=Object(a.useState)("3.3rem"),w=Object(i.a)(k,2),S=w[0],C=w[1],N=Object(a.useState)(),I=Object(i.a)(N,2),E=I[0],L=I[1],B=Object(a.useContext)(m),A=(B.padding,B.setImages),H=Object(a.useContext)(h),z=(H.loading,H.setLoading);Object(a.useEffect)((function(){P(),T(),window.addEventListener("scroll",F)}),[]),Object(a.useEffect)((function(){return J(e.numOfImages)}),[e.numOfImages]);var F=function(e){window.scrollY>500?(y(O),C("3rem"),L(f)):(y(d),C("3.3rem"),L())},J=function(e){g(e+9),P()},P=function(){z("rgb(245, 241, 241)");var e=s;console.log(e),j.photos.search({query:e,per_page:u}).then((function(e){A(e.photos),console.log(e.photos),z(!1)}))},T=function(){document.addEventListener("keypress",(function(e){13===e.which&&(P(),e.preventDefault())}))};return Object(b.jsxs)("div",{className:"my-bar",style:v,children:[Object(b.jsx)("div",{className:"box",children:Object(b.jsx)(l.a,{inputBoxHeight:S,className:"box-t",inputBoxFontSize:"1.2rem",inputBoxBorderColor:"black",placeholder:"Search for images",data:[{key:"Car",value:"Car"},{key:"Lion",value:"Lion"},{key:"Harry potter",value:"Harry potter"},{key:"Avengers",value:"Avengers"},{key:"Bike",value:"Bike"}],onSelect:function(e){return console.log(e)},onFocus:function(){console.log("This function is called when is focussed")},onChange:function(e){return n(e)},fuseConfigs:{threshold:.05},value:s})}),Object(b.jsx)("button",{onClick:P,style:Object.assign({height:S},E),children:Object(b.jsx)("i",{className:"fa-2x fas fa-search"})})]})}var p=c(69),x=c(72),v=Object(p.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function y(){var e=v();return Object(b.jsx)("div",{className:e.root,children:Object(b.jsx)(x.a,{color:"secondary"})})}var k={backgroundColor:"white",height:"10vh",width:"100%",position:"fixed",color:"white",zIndex:"100",top:"0",transition:"0s"};function w(e){var t=Object(a.useState)(),c=Object(i.a)(t,2),s=c[0],n=c[1],o=Object(a.useState)(),l=Object(i.a)(o,2),u=l[0],j=l[1];Object(a.useEffect)((function(){window.addEventListener("scroll",d)}),[]);var d=function(e){window.scrollY>500?(n(k),j("none")):(n(),j())};return Object(b.jsxs)("div",{className:"search-bar",style:s,children:[Object(b.jsxs)("div",{className:"content",style:{display:u},children:[Object(b.jsx)("h1",{children:"Search from 1000+ images"}),Object(b.jsx)("p",{children:"Image are loaded with pixel api"})]}),Object(b.jsx)(g,{numOfImages:e.numOfImages}),Object(b.jsx)("div",{className:"position-bar",children:e.loading&&Object(b.jsx)(y,{})}),Object(b.jsx)("img",{src:r,style:{display:u}})]})}c(50);function S(e){var t=Object(a.useState)("rgb(185, 185, 185)"),c=Object(i.a)(t,2),s=c[0],n=c[1],o=Object(a.useState)(!1),r=Object(i.a)(o,2),l=r[0],u=r[1],j=Object(a.useState)("300px"),d=Object(i.a)(j,2),O=d[0],f=d[1];Object(a.useEffect)((function(){f(m(e.data.height))}),[]);var m=function(e){return 300*((e-200)/9800)+300+"px"};return Object(b.jsxs)("div",{className:"image-block",style:{backgroundColor:e.loading,height:O},children:[Object(b.jsx)("img",{src:e.data.src.medium}),Object(b.jsx)("button",{className:"btn1",style:{color:s},onClick:function(){l?(n("rgb(185, 185, 185)"),u(!1)):(n("rgb(238, 28, 109)"),u(!0))},children:Object(b.jsx)("i",{className:"fas fa-2x fa-heart"})}),Object(b.jsx)("button",{className:"btn2",style:{color:"black"},onClick:function(){alert(e.data.src.large)},children:Object(b.jsx)("i",{className:"fas fa-2x fa-download"})})]})}var C=c(71);c(51);var N=function(){var e=Object(a.useState)([{src:{medium:"https://images.pexels.com/photos/4473405/pexels-photo-4473405.jpeg"}},{src:{medium:"https://images.pexels.com/photos/4473405/pexels-photo-4473405.jpeg"}},{src:{medium:"https://images.pexels.com/photos/4473405/pexels-photo-4473405.jpeg"}}]),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),o=Object(i.a)(n,2),r=o[0],l=o[1],u=Object(a.useState)(12),j=Object(i.a)(u,2),d=j[0],O=j[1],f={loading:r,setLoading:l},g={images:c,setImages:s};return Object(b.jsx)("div",{className:"App",onscroll:"scrolled(this)",children:Object(b.jsx)(h.Provider,{value:f,children:Object(b.jsxs)(m.Provider,{value:g,children:[Object(b.jsx)(w,{loading:r,numOfImages:d}),Object(b.jsx)("div",{className:"images",children:c.map((function(e){return Object(b.jsx)(S,{data:e,loading:r,numOfImages:d})}))}),Object(b.jsx)(C.a,{className:"btn",variant:"contained",color:"secondary",onClick:function(){O(d+3)},children:"more"})]})})})};o.a.render(Object(b.jsx)(N,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.e4a73cca.chunk.js.map