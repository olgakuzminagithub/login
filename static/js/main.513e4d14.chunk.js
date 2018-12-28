(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){e.exports=a(35)},32:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),s=a(16),c=a.n(s),o=a(8),u=a(5),l=a(6),i=a(9),m=a(7),E=a(10),S=(a(30),a(18)),p=a(2);var d="https://flatearth-api.herokuapp.com/api/v1/auth",h={login:function(e,t){var a={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({user:e,password:t})};return fetch("".concat(d,"/login"),a).then(L).then(function(e){return console.log("data",e),e.message.token&&localStorage.setItem("user",JSON.stringify(e.message)),e.message})},logout:g};function g(){localStorage.removeItem("user")}function L(e){return e.text().then(function(t){var a=t&&JSON.parse(t);if(!e.ok){401===e.status&&g();var r=a&&a.message||e.statusText;return Promise.reject(r)}return a})}var f={SUCCESS:"ALERT_SUCCESS",ERROR:"ALERT_ERROR",CLEAR:"ALERT_CLEAR"},O={success:function(e){return{type:f.SUCCESS,message:e}},error:function(e){return{type:f.ERROR,message:e}}};var v={LOGIN_REQUEST:"USERS_LOGIN_REQUEST",LOGIN_SUCCESS:"USERS_LOGIN_SUCCESS",LOGIN_FAILURE:"USERS_LOGIN_FAILURE",LOGOUT:"USERS_LOGOUT",GETALL_REQUEST:"USERS_GETALL_REQUEST",GETALL_SUCCESS:"USERS_GETALL_SUCCESS",GETALL_FAILURE:"USERS_GETALL_FAILURE"},R={login:function(e,t){return function(a){a(function(e){return{type:v.LOGIN_REQUEST,user:e}}({user:e})),h.login(e,t).then(function(e){a(function(e){return{type:v.LOGIN_SUCCESS,user:e}}(e)),a(O.success("ALERT_SUCCESS"))},function(e){a(function(e){return{type:v.LOGIN_FAILURE,error:e}}(e)),a(O.error(e))})}},logout:function(){return h.logout(),{type:v.LOGOUT}}};a(32);var U=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).props.dispatch(R.logout()),a.state={user:"",password:"",submitted:!1},a.handleChange=a.handleChange.bind(Object(p.a)(Object(p.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(p.a)(Object(p.a)(a))),a}return Object(E.a)(t,e),Object(l.a)(t,[{key:"handleChange",value:function(e){var t=e.target,a=t.name,r=t.value;this.setState(Object(S.a)({},a,r))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.setState({submitted:!0});var t=this.state,a=t.user,r=t.password,n=this.props.dispatch;a&&r&&n(R.login(a,r))}},{key:"render",value:function(){var e=this.props.alert,t=this.state,a=t.user,r=t.password,s=t.submitted;return n.a.createElement("div",{className:"Sign-in"},n.a.createElement("span",null,n.a.createElement("b",null,"Bank")," Support Portal"),n.a.createElement("form",{name:"form",onSubmit:this.handleSubmit},n.a.createElement("div",{className:"form-group"+(s&&!a?" has-error":"")},n.a.createElement("input",{type:"text",className:"form-control",name:"user",value:a,placeholder:"Username",onChange:this.handleChange}),s&&!a&&n.a.createElement("div",{className:"help-block"},"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 username"),e.message==="No such User ".concat(this.state.user)&&n.a.createElement("div",{className:"alert ".concat(e.type)},"Invalid username"),"alert-success"===e.type&&n.a.createElement("div",{className:"alert ".concat(e.type)}," ")),n.a.createElement("div",{className:"form-group"+(s&&!r?" has-error":"")},n.a.createElement("input",{type:"password",className:"form-control",name:"password",value:r,placeholder:"Password",onChange:this.handleChange}),s&&!r&&n.a.createElement("div",{className:"help-block"},"\u0412\u0435\u0434\u0438\u0442\u0435 \u043f\u0430\u0440\u043e\u043b\u044c"),"password is incorrect"===e.message&&n.a.createElement("div",{className:"alert ".concat(e.type)},e.message),"alert-success"===e.type&&n.a.createElement("div",{className:"alert ".concat(e.type)}," ")),n.a.createElement("div",{className:"form-group"},n.a.createElement("button",null,"Login"),n.a.createElement("p",{className:"note"},"Forgot your password? ",n.a.createElement("a",{href:"#"},"Reset it here")))))}}]),t}(n.a.Component);var b=Object(o.b)(function(e){return{alert:e.alert}})(U),C=function(e){function t(){return Object(u.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"container"},n.a.createElement("div",{className:"col-4 offset-4"},n.a.createElement(b,null)))}}]),t}(r.Component),N=a(1),_=a(19),y=a(20);var I=JSON.parse(localStorage.getItem("user")),T=I?{loggedIn:!0,user:I}:{};var G=Object(N.c)({alert:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case f.SUCCESS:return{type:"alert-success",message:t.message};case f.ERROR:return{type:"alert-danger",message:t.message};case f.CLEAR:return{};default:return e}},authentication:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.LOGIN_REQUEST:return{loggingIn:!0,user:t.user};case v.LOGIN_SUCCESS:return{loggedIn:!0,user:t.user};case v.LOGIN_FAILURE:case v.LOGOUT:return{};default:return e}},users:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.GETALL_REQUEST:return{loading:!0};case v.GETALL_SUCCESS:return{items:t.users};case v.GETALL_FAILURE:return{error:t.error};default:return e}}}),A=Object(y.createLogger)(),j=Object(N.d)(G,Object(N.a)(_.a,A));c.a.render(n.a.createElement(o.a,{store:j},n.a.createElement(C,null)),document.getElementById("root"))}},[[21,2,1]]]);
//# sourceMappingURL=main.513e4d14.chunk.js.map