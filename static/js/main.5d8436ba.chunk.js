(this["webpackJsonpred-wine-collection"]=this["webpackJsonpred-wine-collection"]||[]).push([[0],{25:function(e,t,n){},27:function(e,t,n){},28:function(e,t,n){},30:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),i=n(17),a=n.n(i),s=(n(25),n(7)),o=n(8),j=n(3),l=n(10),d=n(0),u=Object(c.createContext)(),b=function(e,t){switch(t.type){case"CHANGE_COLOR":return Object(l.a)(Object(l.a)({},e),{},{color:t.payload});case"CHANGE_MODE":return Object(l.a)(Object(l.a)({},e),{},{mode:t.payload});default:return e}};function O(e){var t=e.children,n=Object(c.useReducer)(b,{color:"#58249c",mode:"dark"}),r=Object(j.a)(n,2),i=r[0],a=r[1];return Object(d.jsx)(u.Provider,{value:Object(l.a)(Object(l.a)({},i),{},{changeColor:function(e){a({type:"CHANGE_COLOR",payload:e})},changeMode:function(e){a({type:"CHANGE_MODE",payload:e})}}),children:t})}var h=function(){var e=Object(c.useContext)(u);if(void 0===e)throw new Error("useTheme is being used out of context scope");return e},x=(n(27),n(28),n(14)),m=n.n(x),p=n(18);function f(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"GET",n=Object(c.useState)(""),r=Object(j.a)(n,2),i=r[0],a=r[1],s=Object(c.useState)(!1),o=Object(j.a)(s,2),l=o[0],d=o[1],u=Object(c.useState)(null),b=Object(j.a)(u,2),O=b[0],h=b[1],x=Object(c.useState)(null),f=Object(j.a)(x,2),v=f[0],g=f[1],y=function(e){g({method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})};return Object(c.useEffect)((function(){var n=function(){var t=Object(p.a)(m.a.mark((function t(){var n,c,r,i=arguments;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=i.length>0&&void 0!==i[0]?i[0]:{},d(!0),t.prev=2,t.next=5,fetch(e,n);case 5:if((c=t.sent).ok){t.next=8;break}throw new Error(c.statusText);case 8:return t.next=10,c.json();case 10:r=t.sent,a(r),d(!1),h(null),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),h(!0);case 19:case"end":return t.stop()}}),t,null,[[2,16]])})));return function(){return t.apply(this,arguments)}}();"GET"===t&&n(),"POST"===t&&v&&n(v)}),[e,v,t]),{data:i,isPending:l,error:O,postData:y}}n(30);function v(e){var t=e.wines,n=h().mode;return 0===t.length?Object(d.jsx)("div",{className:"error",children:Object(d.jsx)("h2",{children:"No Recipes to load..."})}):Object(d.jsx)("div",{className:"wine-list",children:t.map((function(e){return Object(d.jsxs)("div",{className:"card ".concat(n),children:[Object(d.jsx)("h3",{children:e.wine}),Object(d.jsxs)("p",{children:["By ",e.winery]}),Object(d.jsx)(s.b,{to:"/detail/".concat(e.id),children:"More Detail"})]},e.id)}))})}function g(){var e=f("https://my-json-server.typicode.com/jinc1026/red-wine-collection/wines"),t=e.data,n=e.isPending,c=e.error;return Object(d.jsxs)("div",{className:"home",children:[n&&Object(d.jsx)("p",{children:"Loading..."}),c&&Object(d.jsx)("p",{children:"Unable to Load the list"}),t&&Object(d.jsx)(v,{wines:t})]})}n(36);function y(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(c.useState)(""),a=Object(j.a)(i,2),s=a[0],l=a[1],u=Object(c.useState)(""),b=Object(j.a)(u,2),O=b[0],h=b[1],x=Object(c.useState)(""),m=Object(j.a)(x,2),p=m[0],v=m[1],g=f("https://my-json-server.typicode.com/jinc1026/red-wine-collection/wines","POST"),y=g.data,w=(g.isPending,g.error,g.postData),N=Object(o.f)();return Object(c.useEffect)((function(){y&&N.push("/")}),[y]),Object(d.jsx)("div",{className:"create",children:Object(d.jsxs)("form",{onSubmit:function(e){e.preventDefault(),w({wineName:n,wineryName:s,rating:O,numRatings:p})},children:[Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Wine Name:"}),Object(d.jsx)("input",{type:"text",onChange:function(e){r(e.target.value)},value:n,required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Winery Name:"}),Object(d.jsx)("input",{type:"text",onChange:function(e){l(e.target.value)},value:s,required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Rating:"}),Object(d.jsx)("input",{type:"number",max:"5",onChange:function(e){h(e.target.value)},value:O,required:!0})]}),Object(d.jsxs)("label",{children:[Object(d.jsx)("span",{children:"Number of Ratings:"}),Object(d.jsx)("input",{type:"number",max:"9999",value:p,onChange:function(e){v(e.target.value)},required:!0})]}),Object(d.jsx)("button",{type:"submit",children:"Submit"})]})})}n(37);function w(){var e=f("https://my-json-server.typicode.com/jinc1026/red-wine-collection/wines/"+Object(o.h)().id),t=e.data,n=e.isPending,c=e.error,r=h().mode;return Object(d.jsxs)("div",{className:"detail ".concat(r),children:[n&&Object(d.jsx)("p",{children:"Loading..."}),c&&Object(d.jsx)("p",{children:"Unable to show detail"}),t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h2",{className:"page-title",children:t.wine}),Object(d.jsxs)("p",{children:["By ",t.winery]}),Object(d.jsxs)("ul",{children:[Object(d.jsxs)("li",{children:["Rating: ",t.rating.average]}),Object(d.jsxs)("li",{children:["Reviews: ",t.rating.reviews]})]}),Object(d.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae est at tellus lacinia finibus imperdiet at ipsum. Pellentesque sit amet tellus elementum, imperdiet leo nec, eleifend mauris. Aenean porttitor lorem eu nisi porta semper. Vivamus ornare finibus leo, sit amet feugiat arcu finibus sit amet."})]})]})}n(38);function N(){var e=Object(o.g)().search,t=new URLSearchParams(e).get("q"),n=f("https://my-json-server.typicode.com/jinc1026/red-wine-collection/wines?q="+t),c=n.data,r=n.isPending,i=n.error;return Object(d.jsxs)("div",{className:"search",children:[Object(d.jsxs)("h2",{className:"page-title",children:['Recipes including "',t,'"']}),i&&Object(d.jsx)("p",{className:"error",children:i}),r&&Object(d.jsx)("p",{className:"loading",children:"Loading..."}),c&&Object(d.jsx)(v,{wines:c})]})}n(39);function C(){var e=Object(c.useState)(""),t=Object(j.a)(e,2),n=t[0],r=t[1],i=Object(o.f)();return Object(d.jsx)("div",{className:"searchbar",children:Object(d.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),i.push("/search?q=".concat(n)),r("")},children:[Object(d.jsx)("label",{htmlFor:"search",children:"Search:"}),Object(d.jsx)("input",{type:"text",id:"search",onChange:function(e){return r(e.target.value)},value:n,required:!0})]})})}n(40);function S(){var e=h(),t=e.color;e.changeColor;return Object(d.jsx)("div",{className:"navbar",style:{background:t},children:Object(d.jsxs)("nav",{children:[Object(d.jsx)(s.b,{className:"brand",to:"/",children:"Intro to Red Wines"}),Object(d.jsx)(C,{}),Object(d.jsx)(s.b,{to:"/create",children:"Create"})]})})}var k=n.p+"static/media/mode-icon.7cf51468.svg",E=(n(41),["#58249c","#249c6b","#b70233"]);function R(){var e=h(),t=e.changeColor,n=e.changeMode,c=e.mode;return Object(d.jsxs)("div",{className:"theme-selector",children:[Object(d.jsx)("div",{className:"mode-toggle",children:Object(d.jsx)("img",{src:k,onClick:function(){n("dark"===c?"light":"dark")},alt:"mode selector",style:{filter:"dark"===c?"invert(100%)":"invert(80%)"}})}),Object(d.jsx)("div",{className:"theme-buttons",children:E.map((function(e){return Object(d.jsx)("div",{onClick:function(){return t(e)},style:{background:e}},e)}))})]})}var P=function(){var e=h().mode;return Object(d.jsx)("div",{className:"App ".concat(e),children:Object(d.jsxs)(s.a,{children:[Object(d.jsx)(S,{}),Object(d.jsx)(R,{}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{exact:!0,path:"/",children:Object(d.jsx)(g,{})}),Object(d.jsx)(o.a,{path:"/detail/:id",children:Object(d.jsx)(w,{})}),Object(d.jsx)(o.a,{path:"/create",children:Object(d.jsx)(y,{})}),Object(d.jsx)(o.a,{path:"/search",children:Object(d.jsx)(N,{})})]})]})})};a.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(O,{children:Object(d.jsx)(P,{})})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.5d8436ba.chunk.js.map