(this.webpackJsonpbooking=this.webpackJsonpbooking||[]).push([[0],{168:function(e,t,n){},183:function(e,t,n){},266:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),a=n(23),i=n.n(a),s=(n(168),n(133),n(273)),o=n(271),j=n(82),l=n(49),u=n(279),d=n(115),b=n(272),m=n(275),h=n(6);function p(){var e={width:"100%",color:"#fff",background:"#364d79"},t={width:"100%",height:"560px",objectFit:"cover",backgroundSize:"cover"};return Object(h.jsxs)(m.a,{autoplay:!0,className:"carousel",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{style:e}),Object(h.jsx)("img",{alt:"Food menu carousel",style:t,src:"/imgs/1.jpg"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{style:e}),Object(h.jsx)("img",{alt:"Food menu carousel",style:t,src:"/imgs/6.jpg"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{style:e}),Object(h.jsx)("img",{alt:"Food menu carousel",style:t,src:"/imgs/4.jpg"})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{style:e}),Object(h.jsx)("img",{alt:"Food menu carousel",style:t,src:"/imgs/5.jpg"})]})]})}var O=n(34);function x(){var e={marginTop:"100px",marginBottom:"100px"},t=s.a.Title,n=s.a.Paragraph,c=o.a.Meta;return Object(h.jsxs)("div",{style:{innerHeight:"100vh"},children:[Object(h.jsx)(p,{}),Object(h.jsx)(t,{style:{marginTop:"50px",marginBottom:"50px"},children:"Food For You"}),Object(h.jsxs)(j.a,{style:e,children:[Object(h.jsx)(l.a,{span:6,push:4,children:Object(h.jsx)(O.b,{to:"/menus/Breakfast",children:Object(h.jsx)(o.a,{hoverable:!0,style:{width:240},cover:Object(h.jsx)("img",{alt:"example",src:"/imgs/m1.jpg"}),children:Object(h.jsx)(c,{title:"Breakfast"})})})}),Object(h.jsx)(l.a,{span:6,push:4,children:Object(h.jsx)(O.b,{to:"/menus/Lunch",children:Object(h.jsx)(o.a,{hoverable:!0,style:{width:240},cover:Object(h.jsx)("img",{alt:"example",src:"/imgs/m2.jpg"}),children:Object(h.jsx)(c,{title:"Lunch"})})})}),Object(h.jsx)(l.a,{span:6,push:4,children:Object(h.jsx)(O.b,{to:"/menus/Dinner",children:Object(h.jsx)(o.a,{hoverable:!0,style:{width:240},cover:Object(h.jsx)("img",{alt:"example",src:"/imgs/m3.jpg"}),children:Object(h.jsx)(c,{title:"Dinner"})})})})]}),Object(h.jsxs)(j.a,{style:e,children:[Object(h.jsx)(l.a,{span:8,push:10,children:Object(h.jsxs)(u.b,{direction:"vertical",children:[Object(h.jsx)(t,{children:"We Love Food"}),Object(h.jsx)(n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"}),Object(h.jsx)(n,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate"}),Object(h.jsx)(d.a,{type:"primary",style:{background:"black",borderColor:"black"},children:"Learn more"})]})}),Object(h.jsx)(l.a,{span:16,pull:10,children:Object(h.jsx)(b.a,{alt:"Restaurant Image",width:400,preview:!1,src:"/imgs/r-1.jpg"})})]}),Object(h.jsx)("div",{style:{background:"#2d3436",height:"30vh",paddingTop:"100px"}})]})}n(183);var g=n(277),f=n(280),v=g.a.SubMenu;function y(){var e="dark",t="1";return Object(h.jsx)("div",{children:Object(h.jsxs)(g.a,{theme:e,selectedKeys:[t],mode:"horizontal",children:[Object(h.jsx)(v,{icon:Object(h.jsx)(f.a,{}),title:"THEONEAMIN"},"logo"),Object(h.jsx)(g.a.Item,{style:{float:"right"},children:Object(h.jsx)(O.b,{to:"/about",children:"About"})},"about"),Object(h.jsx)(g.a.Item,{style:{float:"right"},children:Object(h.jsx)(O.b,{to:"/booking",children:"Booking"})},"booking"),Object(h.jsxs)(v,{style:{float:"right"},title:"Food Menu",children:[Object(h.jsx)(g.a.Item,{children:Object(h.jsx)(O.b,{to:"/menus/Breakfast",children:"Breakfast"})},"breakfast"),Object(h.jsx)(g.a.Item,{children:Object(h.jsx)(O.b,{to:"/menus/Lunch",children:"Lunch"})},"lunch"),Object(h.jsx)(g.a.Item,{children:Object(h.jsx)(O.b,{to:"/menus/Dinner",children:"Dinner"})},"dinner")]},"foodmenu"),Object(h.jsx)(g.a.Item,{style:{float:"right"},children:Object(h.jsx)(O.b,{to:"/",children:"Home"})},"home")]})})}var k=n(26),_=n(54),E=n.n(_),w=n(76),T=n(65),D=n.n(T),I=n(47),L="SET_MENUS",S="SELECTED_MENU",N="REMOVE_SELECTED_MENU",F="GET_BOOKINGS",H=function(e){return{type:L,payload:e}},B=function(e){return{type:F,payload:e}},M=o.a.Meta,q=function(){var e=Object(k.f)().category,t=Object(I.c)((function(e){return e.menus.menus})),n=Object(I.b)(),r=function(){var t=Object(w.a)(E.a.mark((function t(){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("https://restaurant-amin.herokuapp.com/api/menus/category/".concat(e)).catch((function(e){console.log(e)}));case 2:c=t.sent,n(H(c.data));case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){r()}),[e]),console.log(t);var a=t.map((function(e){return Object(h.jsx)(l.a,{className:"gutter-row",span:6,children:Object(h.jsx)(O.b,{to:"/menu/".concat(e.id),children:Object(h.jsxs)(o.a,{loading:0===Object.keys(t).length,hoverable:!0,style:{width:300,margin:"20px"},cover:Object(h.jsx)("img",{alt:"example",src:e.image}),children:[Object(h.jsx)(M,{title:e.title}),Object(h.jsxs)("h3",{children:["\xa3",e.price]})]})})},e.id)}));return Object(h.jsx)("div",{children:Object(h.jsx)(j.a,{gutter:16,style:{margin:"50px"},children:a})})},C=function(){return Object(h.jsx)("div",{children:Object(h.jsx)(q,{})})};function A(){return Object(h.jsx)("div",{children:Object(h.jsx)("h1",{children:"About page"})})}var U=n(159),R=n(270),Y=n(274),z=n(276),P=n(278),V=n(36),X=n.n(V),G=R.a.RangePicker;function J(){var e=[],t=[],n=r.a.createRef(),a=Object(I.c)((function(e){return e.menus.bookings})),i=Object(I.b)(),o=function(){var e=Object(w.a)(E.a.mark((function e(){var t;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D.a.get("https://restaurant-amin.herokuapp.com/api/booking").catch((function(e){console.log(e)}));case 2:t=e.sent,i(B(t.data));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(c.useEffect)((function(){o()}),[]);var j=s.a.Title;function l(e,t){for(var n=[],c=e;c<=t;c++)n.push(c);return n}function u(e){return e.reduce((function(e,t){return e.concat(Array.isArray(t)?u(t):t)}),[])}var b=Object(c.useState)(!1),m=Object(U.a)(b,2),p=m[0],O=m[1];return Object(h.jsxs)("div",{children:[Object(h.jsxs)(Y.a,{initialValues:{remember:!0},onFinish:function(e){t.email=e.email,t.start_time=t.date+t.s_time,t.end_time=t.date+t.e_time,null!=t&&(!function(){var e=new FormData;e.append("email",t.email),e.append("start_time",t.start_time),e.append("end_time",t.end_time),e.append("headers",{"Content-Type":"multipart/form-data"}),D.a.post("https://restaurant-amin.herokuapp.com/api/booking",e).catch((function(e){console.log(e)}))}(),n.current.resetFields(),O(!0))},ref:n,children:[Object(h.jsx)(j,{style:{marginTop:"50px",marginBottom:"50px"},children:"Pick the day and time"}),Object(h.jsx)(Y.a.Item,{wrapperCol:{span:5,push:9},name:"email",rules:[{required:!0,type:"email",message:"The input is not valid E-mail!"}],children:Object(h.jsx)(z.a,{size:"large",placeholder:"Enter your email",style:{marginLeft:"20px"}})}),Object(h.jsxs)(Y.a.Item,{rules:[{required:!0,message:"The input is not valid!"}],children:[Object(h.jsx)(R.a,{size:"large",onChange:function(n,c){e=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=[],c=[];if(""!==t){for(var r=0;r<a.length;r++)X()(a[r].start_time).format("YYYY-MM-DD")==t&&(n.push(X()(a[r].start_time).format("HH")),c.push(l(X()(a[r].start_time).format("HH"),X()(a[r].end_time).format("HH"))));n=n.join(",");var i=u(c);return e=i.slice(",").map((function(e){return parseInt(e,10)})),console.log("DISABLED_HOURS_ON_SELECTED_DAY",e),e}return[]}(c),t.date=c,console.log(c)},disabledDate:function(e){return e&&e<X()().endOf("day")}}),Object(h.jsx)(G,{picker:"time",onChange:function(e,n){t.s_time=n[0],t.e_time=n[1]},format:" HH:mm",size:"large",showTime:!0,disabledHours:function(){return e}})]}),Object(h.jsx)(Y.a.Item,{wrapperCol:{span:5,push:9},style:{marginLeft:"30px"},children:Object(h.jsx)(d.a,{type:"primary",htmlType:"submit",style:{margin:"20px 0",float:"left"},children:"Book"})})]}),p?Object(h.jsx)(P.a,{message:"Thank you. Your reservation has been created.",type:"success",closable:!0,style:{width:"450px",margin:"auto"},afterClose:function(){O(!1)}}):null]})}var K=n(269),W=s.a.Title,Q=s.a.Paragraph,Z=function(){var e=Object(k.f)().id,t=Object(I.c)((function(e){return e.menus.menuItem})),n=Object(I.b)(),r=function(){var t=Object(w.a)(E.a.mark((function t(){var c;return E.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D.a.get("https://restaurant-amin.herokuapp.com/api/menus/".concat(e)).catch((function(e){console.log(e)}));case 2:c=t.sent,n((r=c.data,{type:S,payload:r}));case 4:case"end":return t.stop()}var r}),t)})));return function(){return t.apply(this,arguments)}}();Object(c.useEffect)((function(){r()}),[e]),console.log("selected item: ",t);return Object(h.jsx)("div",{children:Object(h.jsx)(K.a,{children:Object(h.jsxs)(j.a,{style:{margin:"50px",height:"80vh"},children:[Object(h.jsx)(l.a,{span:10,children:Object(h.jsx)(b.a,{width:"100%",preview:!1,src:t.image})}),Object(h.jsx)(l.a,{span:12,style:{margin:"0 auto",textAlign:"left"},children:Object(h.jsxs)(u.b,{direction:"vertical",children:[Object(h.jsxs)(W,{children:["Title: ",t.title]}),Object(h.jsxs)("h3",{children:["Price: \xa3",t.price]}),Object(h.jsx)("h3",{children:"Description:"}),Object(h.jsx)(Q,{children:t.description})]})})]})})})};var $=function(){return Object(h.jsx)(O.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("header",{children:Object(h.jsx)(y,{})}),Object(h.jsxs)(k.c,{children:[Object(h.jsx)(k.a,{exact:!0,path:"/",children:Object(h.jsx)(x,{})}),Object(h.jsx)(k.a,{exact:!0,path:"/menus/:category",children:Object(h.jsx)(C,{})}),Object(h.jsx)(k.a,{exact:!0,path:"/menu/:id",children:Object(h.jsx)(Z,{})}),Object(h.jsx)(k.a,{exact:!0,path:"/booking",children:Object(h.jsx)(J,{})}),Object(h.jsx)(k.a,{exact:!0,path:"/about",children:Object(h.jsx)(A,{})})]})]})})},ee=n(114),te=n(70),ne={menus:[],menuItem:[],bookings:[]},ce=Object(ee.a)({menus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0,n=t.type,c=t.payload;switch(n){case L:return Object(te.a)(Object(te.a)({},e),{},{menus:c});case F:return Object(te.a)(Object(te.a)({},e),{},{bookings:c});case S:return Object(te.a)(Object(te.a)({},e),{},{menuItem:c});case N:return{};default:return e}}}),re=Object(ee.b)(ce,{},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(I.a,{store:re,children:Object(h.jsx)($,{})})}),document.getElementById("root"))}},[[266,1,2]]]);
//# sourceMappingURL=main.2bd05a93.chunk.js.map