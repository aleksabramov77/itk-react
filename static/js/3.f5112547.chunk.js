(this["webpackJsonpreact-kabzda-1"]=this["webpackJsonpreact-kabzda-1"]||[]).push([[3],{106:function(e,s,t){"use strict";t.r(s);var a=t(59),n=t(22),c=t.n(n),i=t(13),r=t(98),o=t.n(r),u=t(0),b=function(e){var s="/messenger/"+e.id;return Object(u.jsx)("div",{className:o.a.dialog,children:Object(u.jsx)(i.b,{to:s,activeClassName:o.a.active,children:e.name})})},m=t(99),d=t.n(m),j=function(e){return Object(u.jsx)("div",{className:d.a.message,children:e.message})},g=t(1),l=t.n(g),O=t(17),h=t(6),x=t(20),f=function(e){return Object(u.jsx)(O.b,{onSubmit:e.onSubmit,render:function(e){var s=e.handleSubmit,t=(e.form,e.submitting);e.pristine,e.values;return Object(u.jsxs)("form",{onSubmit:s,children:[Object(u.jsx)(O.a,{component:x.b,name:"newMessageText",placeholder:"Enter your message",validate:Object(h.a)(h.d,Object(h.b)(25),Object(h.c)(5))}),Object(u.jsx)("div",{className:c.a.buttonBlock,children:Object(u.jsx)("button",{type:"submit",disabled:t,children:"Send message"})})]})}})},v=function(e){var s=e.dialogs.map((function(e){return Object(u.jsx)(b,{id:e.id,name:e.name},e.id)})),t=e.messages.map((function(e){return Object(u.jsx)(j,{message:e.message},e.id)}));return Object(u.jsxs)("div",{className:c.a.dialogs,children:[Object(u.jsx)("div",{className:c.a.dialogsItems,children:s}),Object(u.jsx)("div",{className:c.a.messagesItems,children:t}),Object(u.jsx)("div",{className:c.a.newMessage,children:Object(u.jsx)(f,{onSubmit:function(s){return e.addMessage(s.newMessageText)}})})]})},p=t(16),_=t(2),w=t(23),M=t(25),N=t(24),A=t(5),I=t(21);s.default=Object(I.c)(Object(p.b)((function(e){return{dialogs:e.messengerPage.dialogsData,messages:e.messengerPage.messagesData,newMessageText:e.messengerPage.newMessageText,isAuth:e.auth.isAuth}}),{addMessage:a.a}),(function(e){var s=function(s){Object(M.a)(a,s);var t=Object(N.a)(a);function a(){var s;Object(w.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(s=t.call.apply(t,[this].concat(c))).render=function(){return s.props.isAuth?Object(u.jsx)(e,Object(_.a)({},s.props)):Object(u.jsx)(A.a,{to:"/login"})},s}return a}(l.a.Component);return Object(p.b)((function(e){return{isAuth:e.auth.isAuth}}))(s)}))(v)},98:function(e,s,t){e.exports={dialog:"DialogItem_dialog__2ChCf",active:"DialogItem_active__9glsg"}},99:function(e,s,t){e.exports={messagesItems:"Message_messagesItems__1Lnga"}}}]);
//# sourceMappingURL=3.f5112547.chunk.js.map