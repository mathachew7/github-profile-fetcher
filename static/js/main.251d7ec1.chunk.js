(this["webpackJsonpgithub-profile-fetcher"]=this["webpackJsonpgithub-profile-fetcher"]||[]).push([[0],{21:function(e,n,t){},24:function(e,n,t){},25:function(e,n,t){},26:function(e,n,t){"use strict";t.r(n);var r=t(0),c=t(1),i=t.n(c),a=t(8),s=t.n(a),o=(t(21),t(9)),j=t(10),l=t(15),h=t(14),u=t.p+"static/media/octocat.82c54c84.svg",d=t(2),b=t(3);function x(){var e=Object(d.a)(["\npadding:10px;\n  width: 5rem;\n"]);return x=function(){return e},e}function f(){var e=Object(d.a)(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  padding: 10px;\n  text-transform: uppercase;\n  font-size: 2rem;\n  color: #ABA021;\n"]);return f=function(){return e},e}var O=b.a.h1(f()),p=b.a.img(x()),m=function(){return Object(r.jsx)(c.Fragment,{children:Object(r.jsx)("header",{children:Object(r.jsxs)(O,{children:["Github Information Center",Object(r.jsx)(p,{src:u,alt:"GitHub Logo"})]})})})};function g(){var e=Object(d.a)(["\n  border-radius: 20px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.08), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.16), 0 8px 8px rgba(0, 0, 0, 0.2);\n  height: 40px;\n  width: 200px;\n  text-align: center;\n  &:focus {\n    outline: none;\n  }\n"]);return g=function(){return e},e}function v(){var e=Object(d.a)(["\n  padding-bottom: 0.3em;\n"]);return v=function(){return e},e}function y(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: left;\n  align-items: center;\n  font-size: 1rem;\n"]);return y=function(){return e},e}var w=b.a.div(y()),C=b.a.label(v()),N=b.a.input(g()),D=function(e){var n=e.onInputChange;return Object(r.jsx)(c.Fragment,{children:Object(r.jsx)("form",{autoComplete:"off",onSubmit:function(e){e.preventDefault()},children:Object(r.jsxs)(w,{children:[Object(r.jsx)(C,{htmlFor:"user",children:Object(r.jsx)("b",{children:"Search User"})}),Object(r.jsx)(N,{id:"user",type:"search",placeholder:"Enter username",name:"user",onChange:n})]})})})};function F(){var e=Object(d.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: flex-start;\n  font-size: 1em;\n"]);return F=function(){return e},e}function I(){var e=Object(d.a)(["\n  width: 15em;\n  padding-right: 1em;\n"]);return I=function(){return e},e}function _(){var e=Object(d.a)(["\n  \n  display: flex;\n  flex-direction: row;\n  padding-left: 485px;\n  margin-top: 20px;\n\n  \n"]);return _=function(){return e},e}var k=b.a.div(_()),G=b.a.img(I()),S=b.a.div(F()),H=function(e){var n=e.profile;return Object(r.jsxs)(k,{children:[Object(r.jsx)("div",{children:Object(r.jsx)(G,{src:n.avatar_url,alt:n.name})}),Object(r.jsxs)(S,{children:[Object(r.jsx)("div",{children:Object(r.jsxs)("b",{children:["Username: ",n.login]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["Name: ",n.name]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["GitHub Link:"," ",Object(r.jsx)("a",{href:n.html_url,target:"_blank",rel:"noopener noreferrer",children:n.html_url})]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["Email: ",n.Email]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["Website: ",n.blog]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["Location: ",n.location]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["Public Repositories: ",n.public_repos]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["Followers: ",n.followers]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["Following: ",n.following]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["Hireable: ",n.hireable]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["Bio: ",n.bio]})}),Object(r.jsx)("div",{children:Object(r.jsxs)("h5",{children:["Created At: ",n.created_at]})})]})]})},A=(t(24),function(e){e.onInputChange;return Object(r.jsx)(c.Fragment,{children:Object(r.jsxs)("div",{className:"footer",children:[Object(r.jsx)("p",{children:Object(r.jsxs)("b",{children:["Created by ",Object(r.jsx)("a",{href:"https://ysubash.com.np/",target:"_blank",rel:"noreferrer",children:"@mathachew7"})]})}),Object(r.jsx)("p",{children:"No Copyright. Star me On Github"})]})})}),E=(t(25),function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var r;return Object(o.a)(this,t),(r=n.call(this,e)).onInputChange=function(e){r.setState({searchName:e.target.value},(function(){r.getData(r.state.searchName)}))},r.getData=function(e){fetch("https://api.github.com/users/".concat(e)).then((function(e){return e.json()})).then((function(e){return r.setState({userData:e})})).catch((function(e){alert("Oops! Could not reach GitHub"),console.log("Oops! We have an error",e)}))},r.state={searchName:"",userData:""},r}return Object(j.a)(t,[{key:"render",value:function(){return Object(r.jsxs)(c.Fragment,{children:[Object(r.jsx)(m,{}),Object(r.jsx)(D,{onInputChange:this.onInputChange}),this.state.userData.id&&""!==this.state.searchName?Object(r.jsx)(H,{profile:this.state.userData}):Object(r.jsxs)("div",{className:"no-data",children:["Above Username doesn't associated with any GitHub Profile. ",Object(r.jsx)("br",{})]}),Object(r.jsx)(A,{})]})}}]),t}(c.Component));s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(E,{})}),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.251d7ec1.chunk.js.map