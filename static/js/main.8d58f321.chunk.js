(this.webpackJsonptest1=this.webpackJsonptest1||[]).push([[0],{40:function(e,t,c){},41:function(e,t,c){},48:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},52:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c.n(a),n=c(11),o=c.n(n),i=(c(40),c(9)),r=(c(41),c.p+"static/media/f.5731034b.jpg"),l=c(27),u=c(30),j=(c(48),c(2)),b=Object(u.a)("563492ad6f917000010000011ffb610fd92b41f28bd21dd826ae5947"),d=s.a.createContext({images:[],setImages:function(){}}),f=s.a.createContext({loading:!1,setLoading:function(){}});function m(e){var t=Object(a.useState)("boy"),c=Object(i.a)(t,2),s=c[0],n=c[1],o=Object(a.useState)(e.numOfImages),r=Object(i.a)(o,2),u=r[0],m=r[1],O=Object(a.useContext)(d),g=(O.padding,O.setImages),h=Object(a.useContext)(f),p=(h.loading,h.setLoading);Object(a.useEffect)((function(){v(),k()}),[]),Object(a.useEffect)((function(){return x(e.numOfImages)}),[e.numOfImages]);var x=function(e){m(e+9),v()},v=function(){p("rgb(245, 241, 241)");var e=s;console.log(e),b.photos.search({query:e,per_page:u}).then((function(e){g(e.photos),console.log(e.photos),p(!1)}))},k=function(){document.addEventListener("keypress",(function(e){13===e.which&&(v(),e.preventDefault())}))};return Object(j.jsxs)("div",{className:"my-bar",children:[Object(j.jsx)("div",{className:"box",children:Object(j.jsx)(l.a,{className:"box-t",placeholder:"Search for images",data:[{key:"Car",value:"Car"},{key:"Lion",value:"Lion"},{key:"Harry potter",value:"Harry potter"},{key:"Avengers",value:"Avengers"},{key:"Bike",value:"Bike"}],onSelect:function(e){return console.log(e)},onFocus:function(){console.log("This function is called when is focussed")},onChange:function(e){return n(e)},fuseConfigs:{threshold:.05},value:s})}),Object(j.jsx)("button",{onClick:v,children:Object(j.jsx)("i",{className:"fa-2x fas fa-search"})})]})}var O=c(69),g=c(72),h=Object(O.a)((function(e){return{root:{width:"100%","& > * + *":{marginTop:e.spacing(2)}}}}));function p(){var e=h();return Object(j.jsx)("div",{className:e.root,children:Object(j.jsx)(g.a,{color:"secondary"})})}function x(e){return Object(j.jsxs)("div",{className:"search-bar",children:[Object(j.jsxs)("div",{className:"content",children:[Object(j.jsx)("h1",{children:"Search from 1000+ images"}),Object(j.jsx)("p",{children:"Image are loaded with pixel api"})]}),Object(j.jsx)(m,{numOfImages:e.numOfImages}),Object(j.jsx)("div",{className:"position-bar",children:e.loading&&Object(j.jsx)(p,{})}),Object(j.jsx)("img",{src:r})]})}c(50);function v(e){var t=Object(a.useState)("black"),c=Object(i.a)(t,2),s=c[0],n=c[1],o=Object(a.useState)(!1),r=Object(i.a)(o,2),l=r[0],u=r[1],b=Object(a.useState)("300px"),d=Object(i.a)(b,2),f=d[0],m=d[1];Object(a.useEffect)((function(){m(O(e.data.height))}),[]);var O=function(e){return 300*((e-200)/9800)+300+"px"};return Object(j.jsxs)("div",{className:"image-block",style:{backgroundColor:e.loading,height:f},children:[Object(j.jsx)("img",{src:e.data.src.medium}),Object(j.jsx)("button",{className:"btn1",style:{color:s},onClick:function(){l?(n("black"),u(!1)):(n("rgb(238, 28, 109)"),u(!0))},children:Object(j.jsx)("i",{className:"fas fa-2x fa-heart"})}),Object(j.jsx)("button",{className:"btn2",style:{color:"black"},onClick:function(){alert(e.data.src.large)},children:Object(j.jsx)("i",{className:"fas fa-2x fa-download"})})]})}var k=c(71);c(51);var y=function(){var e=Object(a.useState)([{src:{medium:"https://images.pexels.com/photos/4473405/pexels-photo-4473405.jpeg"}},{src:{medium:"https://images.pexels.com/photos/4473405/pexels-photo-4473405.jpeg"}},{src:{medium:"https://images.pexels.com/photos/4473405/pexels-photo-4473405.jpeg"}}]),t=Object(i.a)(e,2),c=t[0],s=t[1],n=Object(a.useState)(!1),o=Object(i.a)(n,2),r=o[0],l=o[1],u=Object(a.useState)(12),b=Object(i.a)(u,2),m=b[0],O=b[1],g={loading:r,setLoading:l},h={images:c,setImages:s};return Object(j.jsx)("div",{className:"App",onscroll:"scrolled(this)",children:Object(j.jsx)(f.Provider,{value:g,children:Object(j.jsxs)(d.Provider,{value:h,children:[Object(j.jsx)(x,{loading:r,numOfImages:m}),Object(j.jsx)("div",{className:"images",children:c.map((function(e){return Object(j.jsx)(v,{data:e,loading:r,numOfImages:m})}))}),Object(j.jsx)(k.a,{className:"btn",variant:"contained",color:"secondary",onClick:function(){O(m+3)},children:"more"})]})})})};o.a.render(Object(j.jsx)(y,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.8d58f321.chunk.js.map