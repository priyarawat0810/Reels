(this.webpackJsonpreels=this.webpackJsonpreels||[]).push([[0],{38:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){"use strict";n.r(t);var c=n(2),s=n(31),a=n.n(s),o=(n(38),n(5)),r=n(17);n(52),n(40),n(51);r.a.initializeApp({apiKey:"AIzaSyDOCWnz-ym8-JlbHbn43YnTDQm_gap_DI8",authDomain:"reels-fdb44.firebaseapp.com",projectId:"reels-fdb44",storageBucket:"reels-fdb44.appspot.com",messagingSenderId:"960511242951",appId:"1:960511242951:web:ae3fb1159915e313ad44e2"});var i=r.a.firestore(),l=r.a.auth(),u=r.a.storage(),j=new r.a.auth.GoogleAuthProvider,b=function(){return l.signInWithPopup(j)},d=(r.a,n(14)),p=n.n(d),m=n(19),O=n(12),f=n(1),h=Object(c.createContext)(),x=function(e){var t=e.children,n=Object(c.useState)(null),s=Object(O.a)(n,2),a=s[0],o=s[1],r=Object(c.useState)(!0),u=Object(O.a)(r,2),j=u[0],b=u[1];return Object(c.useEffect)((function(){var e=l.onAuthStateChanged(function(){var e=Object(m.a)(p.a.mark((function e(t){var n,c,s,a,r;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=10;break}return n=t.displayName,c=t.email,s=t.uid,a=t.photoURL,r=i.collection("users").doc(s),e.next=5,r.get();case 5:e.sent.exists||r.set({displayName:n,email:c,photoURL:a}),o({displayName:n,email:c,uid:s,photoURL:a}),e.next=11;break;case 10:o(t);case 11:b(!1);case 12:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){e()}}),[]),Object(f.jsx)(h.Provider,{value:a,children:!j&&t})},g=function(){var e=Object(c.useContext)(h);return Object(f.jsxs)("div",{children:[e?Object(f.jsx)(o.a,{to:"/home"}):"",Object(f.jsx)("button",{type:"submit",className:"btn btn-primary m-4",onClick:b,children:"Login in with Google"})]})},v=n(20),N=n(18),y=(n(48),n(33)),k=function(e){var t=Object(c.useState)(!1),n=Object(O.a)(t,2),s=n[0],a=n[1],o=Object(c.useState)(!1),r=Object(O.a)(o,2),l=r[0],u=r[1],j=Object(c.useState)(""),b=Object(O.a)(j,2),d=b[0],x=b[1],g=Object(c.useState)([]),N=Object(O.a)(g,2),k=N[0],C=N[1],w=Object(c.useContext)(h);return Object(c.useEffect)((function(){(function(){var t=Object(m.a)(p.a.mark((function t(){var n,c,s,a,o,r;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=e.post.comments,c=[],s=0;case 3:if(!(s<n.length)){t.next=13;break}return a=n[s],t.next=7,i.collection("comments").doc(a).get();case 7:o=t.sent,r=Object(v.a)(Object(v.a)({},o.data()),{},{id:o.id}),c.push(r);case 10:s++,t.next=3;break;case 13:C(c);case 14:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[e]),Object(f.jsxs)("div",{className:"video-card",children:[Object(f.jsx)("video",{onClick:function(e){l?(u(!1),e.currentTarget.pause()):(u(!0),e.currentTarget.play())},src:e.post.url}),Object(f.jsx)("span",{className:"material-icons-outlined like",children:"favorite_border"}),Object(f.jsx)("span",{className:"material-icons-outlined comment",onClick:function(){a(!s)},children:"comment"}),Object(f.jsx)("p",{className:"username",children:Object(f.jsx)("b",{children:e.post.username})}),Object(f.jsxs)("p",{className:"song",children:[Object(f.jsx)("span",{className:"material-icons-outlined",children:"audiotrack"}),Object(f.jsx)("marquee",{children:"song name"})]}),s?Object(f.jsxs)("div",{className:"comment-box",children:[Object(f.jsx)("button",{className:"comment-box-close-btn",onClick:function(){a(!1)},children:"Close"}),Object(f.jsx)("div",{className:"all-comments",children:k.map((function(e,t){return Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:e.pic}),Object(f.jsxs)("div",{children:[Object(f.jsx)("p",{children:Object(f.jsx)("b",{children:e.username})}),Object(f.jsx)("p",{className:"inner-comment",children:e.comment})]})]},t)}))}),Object(f.jsxs)("div",{className:"comment-form",children:[Object(f.jsx)("input",{type:"text",value:d,onChange:function(e){x(e.currentTarget.value)}}),Object(f.jsx)("button",{onClick:function(){var t=i.collection("comments").add({comment:d,username:w.displayName,pic:w.photoURL});x(""),t.then((function(e){return e.get()})).then((function(t){i.collection("posts").doc(e.post.id).update({comments:[].concat(Object(y.a)(e.post.comments),[t.id])})}))},children:"Post"})]})]}):""]})},C=function(){var e=Object(c.useContext)(h),t=Object(c.useState)([]),n=Object(O.a)(t,2),s=n[0],a=n[1];return Object(c.useEffect)((function(){var e=i.collection("posts").onSnapshot((function(e){a(e.docs.map((function(e){return Object(v.a)(Object(v.a)({},e.data()),{},{id:e.id})})))}));return function(){e()}}),[]),Object(f.jsx)("div",{children:e?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:"posts-container",children:s.map((function(e,t){return Object(f.jsx)(k,{post:e},t)}))}),Object(f.jsx)("button",{className:"logout-btn",onClick:function(){l.signOut()},children:"Logout"}),Object(f.jsx)(N.b,{to:"/profile",children:Object(f.jsx)("button",{id:"profile",children:"Profile"})}),Object(f.jsx)("input",{onClick:function(e){e.target.value=null},onChange:function(t){if(t.target.files[0]){var n=t.target.files[0],c=n.name,s=n.size,a=n.type,o=t.target.files[0];if(s/=1e6,"video"==(a=a.split("/")[0]))if(s>10)alert("File is too big!");else{var r=u.ref("/posts/".concat(e.uid,"/").concat(c)).put(o);r.on("state_changed",(function(e){console.log(e.bytesTransferred),console.log(e.totalBytes)}),(function(e){console.log(e)}),(function(){r.snapshot.ref.getDownloadURL().then((function(t){i.collection("posts").add({username:e.displayName,url:t,like:0,comments:[]})}))}))}else alert("Please upload a video")}},className:"upload-btn",type:"file"}),"Upload"]}):Object(f.jsx)(o.a,{to:"/"})})},w=(n(49),function(){var e=Object(c.useContext)(h),t=Object(c.useState)(0),n=Object(O.a)(t,2),s=n[0],a=n[1];return console.log(e),Object(c.useEffect)((function(){(function(){var t=Object(m.a)(p.a.mark((function t(){var n;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,i.collection("posts").where("username","==",e.displayName).get();case 2:n=t.sent,a(n.size);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}})()()}),[]),Object(f.jsx)(f.Fragment,{children:e?Object(f.jsxs)("div",{children:[Object(f.jsx)("img",{src:e.photoURL}),Object(f.jsx)("p",{className:"username-profile",children:e.displayName}),Object(f.jsxs)("p",{className:"ttpost",children:["Total Posts: ",s]})]}):Object(f.jsx)(o.a,{to:"/login"})})});var S=function(){return Object(f.jsx)(f.Fragment,{children:Object(f.jsx)(N.a,{children:Object(f.jsx)(x,{children:Object(f.jsxs)(o.d,{children:[Object(f.jsx)(o.b,{path:"/home",children:Object(f.jsx)(C,{})}),Object(f.jsx)(o.b,{path:"/profile",children:Object(f.jsx)(w,{})}),Object(f.jsx)(o.b,{path:"/",children:Object(f.jsx)(g,{})})]})})})})};a.a.render(Object(f.jsx)(S,{}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.f4d5c9c2.chunk.js.map