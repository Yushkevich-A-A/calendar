(this.webpackJsonpcalendar=this.webpackJsonpcalendar||[]).push([[0],{11:function(e,a,t){},12:function(e,a,t){},15:function(e,a,t){"use strict";t.r(a);var r=t(2),c=t.n(r),n=t(6),i=t.n(n),d=(t(11),t(12),t(1)),s=t.n(d),l=(t(4),t(0));s()().local("ru");var j=function(e){var a=e.date,t=s()(a).format("dddd");t=t.replace(t[0],t[0].toUpperCase());var r=s()(a).format("MMMM");return r=r.replace(r[0],r[0].toUpperCase()),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"ui-datepicker-material-header",children:[Object(l.jsx)("div",{className:"ui-datepicker-material-day",children:t}),Object(l.jsxs)("div",{className:"ui-datepicker-material-date",children:[Object(l.jsx)("div",{className:"ui-datepicker-material-day-num",children:s()(a).format("D")}),Object(l.jsx)("div",{className:"ui-datepicker-material-month",children:s()(a).format("D MMMM").split(" ")[1]}),Object(l.jsx)("div",{className:"ui-datepicker-material-year",children:s()(a).format("YYYY")})]})]}),Object(l.jsx)("div",{className:"ui-datepicker-header",children:Object(l.jsxs)("div",{className:"ui-datepicker-title",children:[Object(l.jsx)("span",{className:"ui-datepicker-month",children:r}),"\xa0",Object(l.jsx)("span",{className:"ui-datepicker-year",children:s()(a).format("YYYY")})]})})]})},o=t(16);var u=function(e){var a=e.arrayDay;return Object(l.jsx)("colgroup",{children:a.map((function(e,a){return a<5?Object(l.jsx)("col",{},Object(o.a)()):Object(l.jsx)("col",{className:"ui-datepicker-week-end"},Object(o.a)())}))})};s()().local("ru");var m=function(e){var a=e.arrayDay;return Object(l.jsx)("tr",{children:a.map((function(e,a){var t=e.replace(e[0],e[0].toUpperCase());return Object(l.jsx)("th",{scope:"col",title:t,children:s()().locale("ru").weekday(a).format("dd")},Object(o.a)())}))})};s()().local("ru");var h=function(e){var a=e.date,t=s.a.weekdays(!0),r=s()(a).month(),c=s()(a).date(),n=s()(a).startOf("month"),i=n.weekday(),d=n.subtract(i,"d"),j=function(e){var a=s()(e).startOf("month"),t=a.daysInMonth(),r=0,c=[];if(0!==a.weekday()){r++;var n=7-a.weekday();r+=(t-n)/7%1===0?(t-n)/7:(t-n)/7+1}else r+=t/7%1===0?t/7:t/7+1;r=Math.floor(r);for(var i=0;i<r;i++)c.push("");return c}(a);return Object(l.jsxs)("table",{className:"ui-datepicker-calendar",children:[Object(l.jsx)(u,{arrayDay:t}),Object(l.jsx)("thead",{children:Object(l.jsx)(m,{arrayDay:t})}),Object(l.jsx)("tbody",{children:j.map((function(){return Object(l.jsx)("tr",{children:t.map((function(){var e=d.clone();return d.add(1,"d"),Object(l.jsx)("td",{className:e.month()!==r?"ui-datepicker-other-month":e.date()===c?"ui-datepicker-today":null,children:e.date()},Object(o.a)())}))},Object(o.a)())}))})]})};var b=function(e){var a=e.date;return a+=2e9,Object(l.jsxs)("div",{className:"ui-datepicker",children:[Object(l.jsx)(j,{date:a}),Object(l.jsx)(h,{date:a})]})},p=Date.now();console.log();var O=function(){return Object(l.jsx)(b,{date:p})},f=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,17)).then((function(a){var t=a.getCLS,r=a.getFID,c=a.getFCP,n=a.getLCP,i=a.getTTFB;t(e),r(e),c(e),n(e),i(e)}))};i.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(O,{})}),document.getElementById("root")),f()}},[[15,1,2]]]);
//# sourceMappingURL=main.66814f02.chunk.js.map