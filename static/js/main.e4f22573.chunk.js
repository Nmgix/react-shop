(this["webpackJsonpshop-project"]=this["webpackJsonpshop-project"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(2),i=n.n(a),r=n(7),s=n.n(r);n(14);function o(){return Object(c.jsx)("div",{children:Object(c.jsx)("nav",{className:"grey darken-3",children:Object(c.jsxs)("div",{className:"nav-wrapper",children:[Object(c.jsx)("a",{href:"!#",className:"brand-logo",children:"React Fortnite Shop"}),Object(c.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(c.jsx)("li",{children:Object(c.jsx)("a",{href:"https://github.com/Nmgix/react-shop",target:"_blank",children:"Repo"})})})]})})})}function d(){return Object(c.jsx)("div",{children:Object(c.jsx)("footer",{className:"page-footer grey darken-2",children:Object(c.jsx)("div",{className:"footer-copyright grey darken-3",children:Object(c.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Nmgix",Object(c.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://vk.com/danyanepali",target:"_blank",children:"VK"})]})})})})}var l=n(8),j=n(1),u=n(3);function b(){return Object(c.jsx)("div",{className:"progress",children:Object(c.jsx)("div",{className:"indeterminate"})})}function O(e){var t=e.id,n=e.name,a=e.description,i=e.price,r=e.full_background,s=e.orderGood,o=void 0===s?Function.prototype:s;return Object(c.jsxs)("div",{className:"card",id:t,children:[Object(c.jsx)("div",{className:"card-image",children:Object(c.jsx)("img",{src:r,alt:n,draggable:"false"})}),Object(c.jsxs)("div",{className:"card-content",children:[Object(c.jsx)("span",{className:"card-title",children:n}),Object(c.jsx)("span",{className:"card-span",children:a})]}),Object(c.jsxs)("div",{className:"card-action",children:[Object(c.jsx)("span",{className:"price",children:i+" \u20bd"}),Object(c.jsx)("button",{className:"btn grey darken-3",onClick:function(){o({name:n,id:t,price:i})},children:"\u041a\u0443\u043f\u0438\u0442\u044c"})]})]})}function m(e){var t=e.goods,n=void 0===t?[]:t,a=e.orderGood,i=void 0===a?Function.prototype:a;return n.length?Object(c.jsx)("div",{className:"goods",children:n.map((function(e){return Object(c.jsx)(O,Object(j.a)(Object(j.a)({},e),{},{orderGood:i}),e.id)}))}):Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(b,{}),Object(c.jsx)("p",{children:"Nothing did load :("})]})}function h(e){var t=e.quantity,n=void 0===t?0:t,a=e.handleBasket,i=void 0===a?Function.prototype:a;return Object(c.jsxs)("div",{className:"cart grey darken-3 white-text",onClick:i,children:[Object(c.jsx)("i",{className:"material-icons",children:"shopping_cart"}),n?Object(c.jsx)("span",{className:"quantity",children:n}):Object(c.jsx)("span",{className:"quantity",children:"0"})]})}function p(e){var t=e.id,n=e.name,a=e.price,i=e.quantity,r=e.removeGood,s=void 0===r?Function.prototype:r,o=e.plusQuantity,d=void 0===o?Function.prototype:o,l=e.minusQuantity,j=void 0===l?Function.prototype:l;return Object(c.jsxs)("li",{className:"collection-item",id:t,children:[n," ",Object(c.jsxs)("button",{className:"btn grey darken-3",onClick:function(){return d({id:t})},children:[" ","+"]})," ",Object(c.jsxs)("button",{className:"btn grey darken-3",onClick:function(){return j({id:t})},children:["-"," "]})," ","x",i," = ",a*i," \u20bd",Object(c.jsx)("span",{className:"secondary-content",children:Object(c.jsx)("i",{className:"material-icons delete",onClick:function(){return s(t)},children:"delete"})})]})}function x(e){var t=e.orders,n=void 0===t?[]:t,a=e.handleBasket,i=void 0===a?Function.prototype:a,r=e.removeGood,s=void 0===r?Function.prototype:r,o=e.plusQuantity,d=void 0===o?Function.prototype:o,l=e.minusQuantity,u=void 0===l?Function.prototype:l,b=n.reduce((function(e,t){return e+t.price*t.quantity}),0);return Object(c.jsxs)("ul",{className:"collection basket-list",children:[Object(c.jsxs)("li",{className:"collection-item grey darken-3 white-text",children:["\u041a\u043e\u0440\u0438\u0437\u043d\u0430",Object(c.jsx)("span",{className:"secondary-content",children:Object(c.jsx)("i",{className:"material-icons close",onClick:i,children:"close"})})]}),n.length?n.map((function(e){return Object(c.jsx)(p,Object(j.a)(Object(j.a)({},e),{},{removeGood:s,plusQuantity:d,minusQuantity:u}),e.id)})):Object(c.jsx)("li",{className:"collection-item",children:"\u041a\u043e\u0440\u0438\u0437\u043d\u0430 \u043f\u0443\u0441\u0442\u0430"}),Object(c.jsxs)("li",{className:"collection-item grey darken-3 white-text",children:["\u041e\u0431\u0449\u0430\u044f \u0441\u0442\u043e\u0438\u043c\u043e\u0441\u0442\u044c: ",b," \u20bd"," ",Object(c.jsx)("button",{className:" btn-small secondary-content grey darken-3 white-text",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u043e\u043f\u043b\u0430\u0442\u0435"})]})]})}function f(e){var t=e.name,n=e.closeAlert,i=void 0===n?Function.prototype:n;return Object(a.useEffect)((function(){var e=setTimeout(i,3e3);return function(){clearTimeout(e)}}),[t]),Object(c.jsx)("div",{className:"toast-container",children:Object(c.jsxs)("div",{className:"toast",children:['\u0422\u043e\u0432\u0430\u0440 "',t,'" \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443']})})}function v(){var e=Object(a.useState)([]),t=Object(u.a)(e,2),n=t[0],i=t[1],r=Object(a.useState)(!0),s=Object(u.a)(r,2),o=s[0],d=s[1],O=Object(a.useState)([]),p=Object(u.a)(O,2),v=p[0],g=p[1],y=Object(a.useState)(!1),N=Object(u.a)(y,2),k=N[0],S=N[1],F=Object(a.useState)(""),q=Object(u.a)(F,2),I=q[0],w=q[1];function G(){S(!k)}return Object(a.useEffect)((function(){var e=localStorage.getItem("orders");console.log(e),g(JSON.parse(localStorage.getItem("orders"))),fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"2fc49c62-f67f5a0d-515238e6-d5f2ef5c"}}).then((function(e){return e.json()})).then((function(e){e.featured&&i(e.featured),d(!1)}))}),[]),Object(c.jsxs)("main",{className:"container content",children:[Object(c.jsx)(h,{quantity:v.length,handleBasket:G}),o?Object(c.jsx)(b,{}):Object(c.jsx)(m,{goods:n,orderGood:function(e){var t=v.findIndex((function(t){return t.id===e.id}));if(t<0){var n=Object(j.a)(Object(j.a)({},e),{},{quantity:1});g([].concat(Object(l.a)(v),[n]))}else{var c=v.map((function(e,n){return n===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));g(c),localStorage.setItem("orders",JSON.stringify(c))}w(e.name)}}),k&&Object(c.jsx)(x,{orders:v,handleBasket:G,removeGood:function(e){var t=v.filter((function(t){return t.id!==e}));g(t),localStorage.setItem("orders",JSON.stringify(t))},plusQuantity:function(e){var t=v.findIndex((function(t){return t.id===e.id})),n=v.map((function(e,n){return n===t?Object(j.a)(Object(j.a)({},e),{},{quantity:e.quantity+1}):e}));g(n),localStorage.setItem("orders",JSON.stringify(n))},minusQuantity:function(e){var t=v.findIndex((function(t){return t.id===e.id})),n=v.map((function(e,n){if(n===t){var c=e.quantity-1;return Object(j.a)(Object(j.a)({},e),{},{quantity:c>=1?e.quantity-1:1})}return e}));g(n),localStorage.setItem("orders",JSON.stringify(n))}}),I&&Object(c.jsx)(f,{name:I,closeAlert:function(){w("")}})]})}var g=function(){return Object(c.jsx)("div",{className:"App",children:Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(o,{}),Object(c.jsx)(v,{}),Object(c.jsx)(d,{})]})})};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.e4f22573.chunk.js.map