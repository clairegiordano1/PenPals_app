(this.webpackJsonppenpals=this.webpackJsonppenpals||[]).push([[0],{179:function(e,t,a){},198:function(e,t,a){},200:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(44),s=a.n(c),i=a(22),o=a(23),l=a(27),u=a(25),j=a(11),p=a(153),b=a(217),h=a(14),d=a.p+"static/media/logo.46014b6f.png",x=a(2),f=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleLogin=function(){},e.handleSignup=function(){},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(p.a,{src:d,centered:!0,style:{top:100,width:225}}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(b.a,{centered:!0,style:{top:120},children:[Object(x.jsx)(h.b,{to:"/login",children:Object(x.jsx)(b.a.Group,{textAlign:"center",children:Object(x.jsx)(b.a,{fluid:!0,color:"blue",header:"Login"})})}),Object(x.jsx)(h.b,{to:"/signup-1",children:Object(x.jsx)(b.a.Group,{textAlign:"center",children:Object(x.jsx)(b.a,{fluid:!0,color:"green",header:"Signup",style:{top:4}})})})]})]})}}]),a}(r.a.Component),m=a(10),O=a.n(m),v=a(32),g=a(146),k=a(216),y=a(213),I=a(220),w=a(201),C=a(67),S=(a(179),a(111)),E=a(154),P=a(46),L=a.n(P),U="GET_USER",F="REMOVE_USER",A="UPDATE_CURRENT_USER",D="ADD_USER",N={},R=function(e){return{type:U,user:e}};var T="GET_ALL_USERS",G=[];var z=a(148),B=a.n(z),_=a(149),M=a.n(_),q=(a(198),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(g.a)({},t.target.name,t.target.value))},e.handleLogin=Object(v.a)(O.a.mark((function t(){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(t.prev=0,!e.state.email.length||!e.state.password.length){t.next=7;break}return t.next=4,e.props.auth1(e.state.email,e.state.password);case 4:return t.next=6,e.props.me();case 6:e.props.history.push("/profile");case 7:t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])}))),e.state={email:"",password:"",name:"",imgUrl:"",token:""},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this,t=function(){var t=Object(v.a)(O.a.mark((function t(a){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log(a),e.setState({email:a.email,password:a.id,name:a.name,token:a.userID}),console.log(e.state,"<- state"),t.next=5,e.props.getUsersInfo();case 5:n=e.props.users.forEach((function(t){if(t.email===e.state.email&&t.token===e.state.token)return t})),console.log("state,",e.state),n||(e.props.auth2(e.state.name,e.state.email,e.state.password,e.state.token),e.props.history.push("/profile")),n&&(e.props.me(),e.props.history.push("/profile"));case 9:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),a=function(){var t=Object(v.a)(O.a.mark((function t(a){var n;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("SHOULD BE",a.googleId),e.setState({email:a.Hs.nt,password:a.googleId,name:a.Hs.sd,token:a.googleId}),t.next=4,e.props.getUsersInfo();case 4:(n=e.props.users.map((function(t){if(t.email===e.state.email&&t.token===e.state.token)return t})))[1]||(e.props.auth2(e.state.name,e.state.email,e.state.password,e.state.token),e.props.history.push("/profile")),n[1]&&(e.props.me(),e.props.history.push("/profile"));case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(x.jsxs)("div",{children:[Object(x.jsx)(p.a,{src:d,size:"small",centered:!0}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsxs)(b.a,{centered:!0,children:[Object(x.jsxs)(k.a,{onSubmit:this.handleLogin,style:{margin:20},children:[Object(x.jsxs)(k.a.Field,{children:[Object(x.jsx)("br",{}),Object(x.jsx)("label",{children:"Email"}),Object(x.jsx)(y.a,{placeholder:"Email Address",type:"text",value:this.state.email,name:"email",onChange:this.handleChange})]}),Object(x.jsxs)(k.a.Field,{children:[Object(x.jsx)("label",{children:"Password"}),Object(x.jsx)(y.a,{placeholder:"Password",type:"password",value:this.state.password,name:"password",onChange:this.handleChange})]}),Object(x.jsx)(k.a.Field,{children:Object(x.jsx)(I.a,{label:"My information looks correct"})}),Object(x.jsx)(w.a,{fluid:!0,basic:!0,color:"blue",content:"Blue",type:"submit",style:{top:10},children:"Submit"})]}),Object(x.jsx)(B.a,{appId:"480009723012050",fields:"name,email,picture",callback:t,cssClass:"btnFacebook",icon:Object(x.jsx)(C.a,{name:"facebook",size:"large"}),textButton:"\xa0\xa0\xa0\xa0Facebook"}),Object(x.jsx)(M.a,{clientId:"545150694380-spcotq9ehq63horosg1ohsbbo0kqulih.apps.googleusercontent.com",buttonText:"Google",onSuccess:a,onFailure:a,className:"btnGoogle",theme:"light"}),Object(x.jsx)("br",{})]}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{})]})}}]),a}(r.a.Component)),H=Object(S.b)((function(e){return{user:e.user,users:e.users}}),(function(e){return{auth1:function(t,a){return e(function(e,t){return function(){var a=Object(v.a)(O.a.mark((function a(n){var r,c;return O.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,L.a.post("http://localhost:8081/auth/login",{email:e,password:t});case 3:return r=a.sent,c=r.data,a.abrupt("return",n(R(c)));case 8:throw a.prev=8,a.t0=a.catch(0),a.t0;case 11:case"end":return a.stop()}}),a,null,[[0,8]])})));return function(e){return a.apply(this,arguments)}}()}(t,a))},me:function(){return e(function(){var e=Object(v.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("http://localhost:8081/auth/me");case 3:if(!(a=e.sent).data){e.next=8;break}t(R(a.data)),e.next=9;break;case 8:return e.abrupt("return");case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}())},getUserInfo:function(t){return e(function(e){return function(){var t=Object(v.a)(O.a.mark((function t(a){var n,r;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,L.a.get("http://localhost:8081/api/users/".concat(e));case 3:return n=t.sent,r=n.data,t.abrupt("return",a(R(r)));case 8:t.prev=8,t.t0=t.catch(0),console.error(t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}()}(t))},getUsersInfo:function(){return e(function(){var e=Object(v.a)(O.a.mark((function e(t){var a,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,L.a.get("".concat("http://localhost:8081","/api/users"));case 3:a=e.sent,n=a.data,t({type:T,users:n}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}())},auth2:function(t,a,n,r,c,s,i,o,l,u){return e(function(e,t,a,n,r,c,s,i,o,l){return function(){var u=Object(v.a)(O.a.mark((function u(j){var p;return O.a.wrap((function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,u.next=3,L.a.post("http://localhost:8081/auth/signup",{name:e,email:t,password:a,token:n,description:r,imgUrl:c,city:s,state:i,zipCode:o,pushToken:l});case 3:return p=u.sent,u.abrupt("return",j(R(p.data)));case 7:u.prev=7,u.t0=u.catch(0),console.error(u.t0);case 10:case"end":return u.stop()}}),u,null,[[0,7]])})));return function(e){return u.apply(this,arguments)}}()}(t,a,n,r,c,s,i,o,l,u))}}}))(q),J=a(215),V=a(218),W=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleItemClick=function(t,a){var n=a.name;return e.setState({activeItem:n})},e.state={activeItem:"credential"},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return Object(x.jsxs)("div",{children:[Object(x.jsx)(p.a,{src:d,centered:!0,size:"small",style:{top:15}}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(b.a,{center:!0,style:{left:66},children:Object(x.jsxs)(J.a,{pointing:!0,children:[Object(x.jsx)(h.b,{to:"/signup-1",children:Object(x.jsx)(J.a.Item,{name:"Credentials",active:"credential"===e,onClick:this.handleItemClick})}),Object(x.jsx)(h.b,{to:"/signup-2",children:Object(x.jsx)(J.a.Item,{name:"Profile Picture",active:"profile"===e,onClick:this.handleItemClick})}),Object(x.jsx)(h.b,{to:"/signup-3",children:Object(x.jsx)(J.a.Item,{name:"Demographics",active:"demographics"===e,onClick:this.handleItemClick})})]})}),Object(x.jsxs)(b.a,{centered:!0,children:[Object(x.jsx)(V.a,{attached:!0,header:"Welcome to PenPals!",content:"Please fill out the form below "}),Object(x.jsxs)(k.a,{className:"attached fluid segment",children:[Object(x.jsxs)(k.a.Group,{widths:"equal",children:[Object(x.jsx)(k.a.Input,{fluid:!0,label:"First Name",placeholder:"First Name",type:"text"}),Object(x.jsx)(k.a.Input,{fluid:!0,label:"Last Name",placeholder:"Last Name",type:"text"})]}),Object(x.jsx)(k.a.Input,{label:"Email Address",placeholder:"Email Address",type:"text"}),Object(x.jsx)(k.a.Input,{label:"Password",type:"password"}),Object(x.jsx)(k.a.Checkbox,{inline:!0,label:"My Information looks correct"}),Object(x.jsx)(w.a,{color:"blue",children:"Submit"})]}),Object(x.jsxs)(V.a,{attached:"bottom",warning:!0,children:[Object(x.jsx)(C.a,{name:"help"}),"Already signed up?\xa0",Object(x.jsx)(h.b,{to:"/login",children:"Login here"}),"\xa0instead."]})]})]})}}]),a}(r.a.Component),K=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleItemClick=function(t,a){var n=a.name;return e.setState({activeItem:n})},e.state={activeItem:"credential"},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return Object(x.jsxs)("div",{children:[Object(x.jsx)(p.a,{src:d,centered:!0,size:"small",style:{top:15}}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(b.a,{center:!0,style:{left:66},children:Object(x.jsxs)(J.a,{pointing:!0,children:[Object(x.jsx)(h.b,{to:"/signup-1",children:Object(x.jsx)(J.a.Item,{name:"Credentials",active:"credential"===e,onClick:this.handleItemClick})}),Object(x.jsx)(h.b,{to:"/signup-2",children:Object(x.jsx)(J.a.Item,{name:"Profile Picture",active:"profile"===e,onClick:this.handleItemClick})}),Object(x.jsx)(h.b,{to:"/signup-3",children:Object(x.jsx)(J.a.Item,{name:"Demographics",active:"demographics"===e,onClick:this.handleItemClick})})]})})]})}}]),a}(r.a.Component),Y=a(214),Q=[{key:"ny",value:"ny",flag:"us",text:"New York"},{key:"gb",value:"gb",flag:"gb",text:"London"},{key:"nj",value:"nj",flag:"us",text:"New Jersey"},{key:"fr",value:"fr",flag:"fr",text:"France"},{key:"gr",value:"gr",flag:"gr",text:"Greece"},{key:"is",value:"is",flag:"is",text:"Iceland"},{key:"it",value:"it",flag:"it",text:"Italy"},{key:"ma",value:"ma",flag:"us",text:"Massachusetts"},{key:"ct",value:"ct",flag:"us",text:"Connecticut"},{key:"ca",value:"ca",flag:"us",text:"California"},{key:"co",value:"co",flag:"us",text:"Colorado"},{key:"ni",value:"ni",flag:"ni",text:"Netherland"},{key:"no",value:"no",flag:"no",text:"Norway"},{key:"hk",value:"hk",flag:"hk",text:"Hong Kong"},{key:"sg",value:"sg",flag:"sg",text:"Singapore"},{key:"au",value:"au",flag:"au",text:"Australia"},{key:"at",value:"at",flag:"at",text:"Austria"},{key:"es",value:"es",flag:"es",text:"Spain"},{key:"bs",value:"bs",flag:"bs",text:"Bahamas"},{key:"se",value:"se",flag:"se",text:"Sweden"},{key:"be",value:"be",flag:"be",text:"Belgium"},{key:"vi",value:"vi",flag:"vi",text:"Virgin Islands"}],X=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).handleItemClick=function(t,a){var n=a.name;return e.setState({activeItem:n})},e.state={activeItem:"credential"},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.activeItem;return Object(x.jsxs)("div",{children:[Object(x.jsx)(p.a,{src:d,centered:!0,size:"small",style:{top:15}}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(b.a,{center:!0,style:{left:66},children:Object(x.jsxs)(J.a,{pointing:!0,children:[Object(x.jsx)(h.b,{to:"/signup-1",children:Object(x.jsx)(J.a.Item,{name:"Credentials",active:"credential"===e,onClick:this.handleItemClick})}),Object(x.jsx)(h.b,{to:"/signup-2",children:Object(x.jsx)(J.a.Item,{name:"Profile Picture",active:"profile"===e,onClick:this.handleItemClick})}),Object(x.jsx)(h.b,{to:"/signup-3",children:Object(x.jsx)(J.a.Item,{name:"Demographics",active:"demographics"===e,onClick:this.handleItemClick})})]})}),Object(x.jsx)(b.a,{center:!0,style:{left:70},children:Object(x.jsx)(Y.a,{placeholder:"Select Country",fluid:!0,search:!0,selection:!0,options:Q})})]})}}]),a}(r.a.Component),Z=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(i.a)(this,a),(e=t.call(this)).state={activeItem:"credential"},e}return Object(o.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{children:[Object(x.jsx)(p.a,{src:d,centered:!0,size:"small",style:{top:25}}),Object(x.jsx)("br",{}),Object(x.jsx)("br",{}),Object(x.jsx)(b.a,{center:!0,style:{width:"25%",left:"37.5%"},children:Object(x.jsx)("p",{children:"User Profile"})})]})}}]),a}(r.a.Component),$=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(x.jsxs)("div",{id:"main",children:[Object(x.jsx)(j.a,{exact:!0,path:"/login",component:H}),Object(x.jsx)(j.a,{exact:!0,path:"/signup-1",component:W}),Object(x.jsx)(j.a,{exact:!0,path:"/signup-2",component:K}),Object(x.jsx)(j.a,{exact:!0,path:"/signup-3",component:X}),Object(x.jsx)(j.a,{exact:!0,path:"/profile",component:Z}),Object(x.jsx)(j.a,{exact:!0,path:"/",component:f})]})}}]),a}(n.Component),ee=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,221)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,s=t.getTTFB;a(e),n(e),r(e),c(e),s(e)}))},te=a(63),ae=a(150),ne=a(151),re=a(152),ce=Object(te.combineReducers)({user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case U:return t.user;case F:return N;case A:return t.user;case D:return[].concat(Object(E.a)(e),[t.user]);default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return t.users;default:return e}}}),se=Object(re.composeWithDevTools)(Object(te.applyMiddleware)(ne.a,Object(ae.createLogger)({collapsed:!0}))),ie=Object(te.createStore)(ce,se),oe=(a(199),function(){s.a.render(Object(x.jsx)(S.a,{store:ie,children:Object(x.jsx)(h.a,{children:Object(x.jsx)($,{})})}),document.getElementById("root"))});window.cordova?document.addEventListener("deviceready",(function(){oe()}),!1):oe(),ee()}},[[200,1,2]]]);
//# sourceMappingURL=main.f9b5bd85.chunk.js.map