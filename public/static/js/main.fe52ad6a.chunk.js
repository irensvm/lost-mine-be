(this["webpackJsonplost-mine-fe"]=this["webpackJsonplost-mine-fe"]||[]).push([[0],{112:function(e,t,a){e.exports=a(151)},117:function(e,t,a){},151:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(11),o=a.n(l),c=(a(117),a(7)),i=a(8),s=a(10),u=a(9),m=a(72),h=a(14),d=function(e){var t=e.component,a=e.user,n=Object(m.a)(e,["component","user"]);return r.a.createElement(h.b,Object.assign({},n,{render:function(e){return a?r.a.createElement(t,Object.assign({},e,{loggedInUser:a})):r.a.createElement(h.a,{to:{pathname:"/login",state:{from:e.location}}})}}))},p=a(188),g=a(186),f=a(184),b=(a(29),function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){r.a.Fragment,p.a.Link,p.a.Link;return this.props.user&&(console.log("Hay usuario logueado!",this.props.user),r.a.createElement("li",{className:"nav-item"},r.a.createElement(p.a.Link,{to:"/logout",className:"nav-link"},"Hola ",this.props.user.email))),r.a.createElement("div",null,r.a.createElement(g.a,{className:"navbar",bg:"light",variant:"light",sticky:"top"},r.a.createElement(g.a.Brand,{href:"/"},"Lost&Mine"),r.a.createElement(p.a,{className:"mr-auto"}),r.a.createElement(f.a,{title:"Menu",id:"collasible-nav-dropdown"},r.a.createElement(f.a.Item,{href:"/profile"},"Profile"),r.a.createElement(f.a.Item,{href:"/mybooks"},"My books"),r.a.createElement(f.a.Item,{href:"/logout"},"Logout"))))}}]),a}(n.Component)),E=a(71),v=a(185),k=a(98),y=a(97),O=function(e){return r.a.createElement("div",{className:"search-books"},r.a.createElement(v.a,{onSubmit:e.searchBook,inline:!0},r.a.createElement("h1",null,"Looking for some books?"),r.a.createElement(k.a,{onChange:e.handleSearch,type:"text",placeholder:"",className:"mr-sm-2"}),r.a.createElement(y.a,{type:"submit",variant:"outline-light"},"Search")))},j=a(100),C=a.n(j),w=a(179),N=a(189),S=a(40),A=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).state={faved:!1},e.handleClick=e.handleClick.bind(Object(S.a)(e)),e}return Object(i.a)(a,[{key:"handleClick",value:function(){this.setState({faved:!this.state.faved})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{onClick:this.handleClick,variant:"dark"},r.a.createElement("img",{style:{width:"16px"},alt:"fav",src:"https://image.flaticon.com/icons/svg/1216/1216686.svg"})))}}]),a}(n.Component),x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(y.a,{href:"/createbook",variant:"light"},r.a.createElement("img",{style:{width:"26px"},alt:"add-book",src:"data:image/png;base64,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"})," "))}}]),a}(n.Component);function I(e){return r.a.createElement("div",{className:"card-res",style:{marginTop:20,marginBottom:20,width:900,height:720}},r.a.createElement(w.a,{className:"card m-2 wid"},r.a.createElement(N.a,{bg:"dark",text:"light",border:"light",className:"book-card"},r.a.createElement(N.a.Img,{style:{width:"auto",height:"auto",maxHeight:"90%",maxWidth:"100%"},variant:"top",src:e.image,alt:"book.img"}),r.a.createElement(N.a.Title,{text:"light",className:"card-text"}," ",e.title),r.a.createElement(N.a.Text,{text:"light",className:"card-text",line:1,style:{flex:1,flexWrap:"wrap",margin:10}},e.description),r.a.createElement(N.a.Body,null,r.a.createElement(A,null),r.a.createElement(x,null)),r.a.createElement(N.a.Footer,{text:"light"},r.a.createElement("small",{className:"text-muted"},"Written by: ",e.author)))))}var M=a(58);function D(e){return r.a.createElement("div",{className:"list"},e.books.map((function(e,t){var a=Object(M.get)(e,["volumeInfo","imageLinks","thumbnail"],"https://lh3.googleusercontent.com/yTY8jzY4EUourXuzSJJV_qZuVGHNrI9ewKH-ReKpLxSWkSYBImeXgjfzOn37Z1wMQ04DfJ8=s170"),n=Object(M.get)(e,["volumeInfo","title"],"Title not found"),l=Object(M.get)(e,["volumeInfo","description"],"description not found"),o=Object(M.get)(e,["volumeInfo","author"],"author not found");return console.log(),r.a.createElement(I,{key:t,image:a,title:n,author:o,description:l})})))}var L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).searchBook=function(e){e.preventDefault(),C.a.get("https://www.googleapis.com/books/v1/volumes").query({q:n.state.searchField}).then((function(e){console.log(e),n.setState({books:Object(E.a)(e.body.items)})}))},n.handleSearch=function(e){n.setState({searchField:e.target.value})},n.state={books:[],searchField:""},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"books"},r.a.createElement(O,{searchBook:this.searchBook,handleSearch:this.handleSearch}),r.a.createElement(D,{books:this.state.books}))}}]),a}(n.Component),U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"menu"},r.a.createElement(b,null),r.a.createElement("h1",null),r.a.createElement(L,null))}}]),a}(n.Component),F=a(22),G=a.n(F),R=function e(){var t=this;Object(c.a)(this,e),this.signup=function(e,a){return t.service.post("/signup",{email:e,password:a}).then((function(e){return e.data}))},this.loggedin=function(){return t.service.get("/loggedin").then((function(e){return e.data}))},this.login=function(e,a){return t.service.post("/login",{email:e,password:a}).then((function(e){return e})).catch((function(e){return console.log(e)}))},this.logout=function(){return t.service.post("/logout",{}).then((function(e){return e.data}))};var a=G.a.create({baseURL:"https://lost-mine.herokuapp.com/api",withCredentials:!0});this.service=a},H=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).service=new R,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.service.logout().then((function(t){e.props.callback(null)})).catch((function(e){return console.log(e)})),r.a.createElement(h.a,{to:"/"})}}]),a}(n.Component),B=a(44),P=a(15),T=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.email,a=n.state.password;n.service.signup(t,a).then((function(e){n.setState({email:"",password:""}),n.props.callback(e),n.setState({redirect:!0})})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(B.a)({},a,r))},n.handleRedirect=function(){if(n.state.redirect)return r.a.createElement(h.a,{to:"/profile"})},n.state={email:"",password:""},n.service=new R,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.handleRedirect(),r.a.createElement(b,null),r.a.createElement(v.a,{className:"signup",onSubmit:this.handleFormSubmit},r.a.createElement(v.a.Group,{controlId:"formBasicEmail"},r.a.createElement(v.a.Label,null,"Email address"),r.a.createElement(v.a.Control,{className:"input-form",type:"email",placeholder:"your email",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement(v.a.Text,{className:"text-muted"},"We'll never share your email with anyone else.")),r.a.createElement(v.a.Group,{controlId:"formBasicPassword"},r.a.createElement(v.a.Label,null,"Password"),r.a.createElement(v.a.Control,{className:"input-form",type:"password",placeholder:" password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}})),r.a.createElement(y.a,{variant:"primary",type:"submit"},"Create account")),r.a.createElement("div",{className:"already"},r.a.createElement("p",{className:"m-0 mr-3"},"Already have account?"),r.a.createElement(P.b,{to:"/login"},"Login!")))}}]),a}(n.Component),W=a(191),Y=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){e.preventDefault();var t=n.state.email,a=n.state.password;n.service.login(t,a).then((function(e){n.setState({email:"",password:""}),n.props.callback(e),n.setState({redirect:!0})})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(B.a)({},a,r))},n.handleRedirect=function(){if(n.state.redirect)return r.a.createElement(h.a,{to:"/profile"})},n.state={email:"",password:""},n.service=new R,n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"container-fluid auth"},this.handleRedirect(),r.a.createElement(b,null),r.a.createElement("h2",null,"Login"),r.a.createElement("form",{onSubmit:this.handleFormSubmit,className:"form-div"},r.a.createElement("input",{className:"input-form",type:"text",name:"email",value:this.state.email,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{className:"input-form",type:"password",name:"password",value:this.state.password,onChange:function(t){return e.handleChange(t)}}),r.a.createElement("input",{type:"submit",value:"Login"})),r.a.createElement("div",{className:"return"},r.a.createElement(W.a,{href:"/signup"},"return to sign up!")))}}]),a}(n.Component),K=a(57);a(183),a(190);var V=a(182),z=a(104),q=(n.Component,a(106));function X(e){var t=function(t){e.disabled||m(t)},a=Object(n.useState)(e.rating),l=Object(K.a)(a,2),o=l[0],c=l[1],i=Object(n.useState)(null),s=Object(K.a)(i,2),u=s[0],m=s[1];return r.a.createElement("div",null,Object(E.a)(Array(5)).map((function(a,n){var l=n+1;return r.a.createElement(r.a.Fragment,null,r.a.createElement(q.a,{key:l,className:"star",color:l<=(u||o)?"#ffc107":"#e4e5e9",onMouseEnter:function(){return t(l)},onMouseLeave:function(){return t(null)},onClick:function(){return function(t){e.disabled||(e.onChange(t),c(t))}(l)}}))})))}var J=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleRedirect=function(){if(n.state.redirect)return console.log("reditect:",n.state.editbook),r.a.createElement(h.a,{to:{pathname:"/editbook",state:{editbook:n.state.editbook}}})},n.state={books:[]},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.getAllBooks()}},{key:"getAllBooks",value:function(){var e=this;G.a.get("".concat("https://lost-mine.herokuapp.com/api","/books/")).then((function(t){e.setState({books:t.data})}))}},{key:"handleClick",value:function(e){this.setState({redirect:!0,editbook:e})}},{key:"render",value:function(){var e=this,t=this.state.books.map((function(t){return r.a.createElement("div",{key:t._id},r.a.createElement(w.a,null,r.a.createElement(N.a,{bg:"dark",text:"light",border:"light",className:"book-card"},r.a.createElement(N.a.Title,null,"Title:",t.title),r.a.createElement(N.a.Text,null,"Review:",t.opinion),r.a.createElement(N.a.Text,null,"Lented to:",t.lented),r.a.createElement(N.a.Footer,null,r.a.createElement("small",{className:"text-muted"},"Rating:",r.a.createElement(X,{disabled:"true",rating:t.rating})),r.a.createElement(r.a.Fragment,null),r.a.createElement(A,null),r.a.createElement(y.a,{variant:"dark",text:"light",border:"light",onClick:function(){return e.handleClick(t)}},"Edit")))))}));return r.a.createElement("div",null,this.handleRedirect(),r.a.createElement(b,null),r.a.createElement(x,null),t)}}]),a}(n.Component),Q=a(99),Z=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t={title:n.state.title,opinion:n.state.opinion,lented:n.state.lented,genre:n.state.genre,rating:n.state.rating,owner:n.state.owner};G.a.post("".concat("https://lost-mine.herokuapp.com/api","/books/"),t,{withCredentials:!0}).then((function(e){n.setState({title:"",opinion:"",genre:"",rating:"",lented:"",owner:""}),n.setState({redirect:!0})}))},n.handleChange=function(e){n.setState(Object(B.a)({},e.target.name,e.target.value))},n.handleRedirect=function(){if(n.state.redirect)return r.a.createElement(h.a,{to:"/mybooks"})},n.handleRating=function(e){n.setState({rating:e})},n.state={title:"",opinion:"",genre:"",owner:"",rating:"",lented:"",loggedInUser:n.props.user},console.log(n.state),n.handleChange=n.handleChange.bind(Object(S.a)(n)),n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,this.handleRedirect(),r.a.createElement(b,null),r.a.createElement(v.a,{action:"POST",onSubmit:this.handleSubmit,className:"addbook",noValidate:!0,autoComplete:"off"},r.a.createElement(v.a.Row,null,r.a.createElement(v.a.Group,{as:Q.a,controlId:"formGridTitle"},r.a.createElement(v.a.Label,null,"Title"),r.a.createElement(v.a.Control,{name:"title",label:"Title",defaultValue:this.state.title,onChange:this.handleChange,type:"text"})),r.a.createElement(v.a.Group,{as:Q.a,controlId:"formGridAuthor"},r.a.createElement(v.a.Label,null,"Lented to"),r.a.createElement(v.a.Control,{name:"lented",defaulValue:this.state.lented,onChange:this.handleChange,type:"text"})),r.a.createElement(v.a.Group,{as:Q.a,controlId:"formGridState"},r.a.createElement(v.a.Label,null,"Genre"),r.a.createElement(v.a.Control,{as:"select",defaultValue:this.state.genre,name:"genre",onChange:this.handleChange},r.a.createElement("option",null,"Thriller"),r.a.createElement("option",null,"Fantasy"),r.a.createElement("option",null,"Adventure"),r.a.createElement("option",null,"Romance"),r.a.createElement("option",null,"Contemporary"),r.a.createElement("option",null,"Dystopian"),r.a.createElement("option",null,"Mystery"),r.a.createElement("option",null,"Horror"),r.a.createElement("option",null,"Paranormal"),r.a.createElement("option",null,"Memoir"),r.a.createElement("option",null,"Travel"),r.a.createElement("option",null,"Guide / How to"),r.a.createElement("option",null,"Cooking")))),r.a.createElement(v.a.Group,{controlId:"formGridAddress1"},r.a.createElement(v.a.Label,null,"Review"),r.a.createElement(v.a.Control,{placeholder:"did it like you?",name:"opinion",defaultValue:this.state.opinion,onChange:this.handleChange})),r.a.createElement(v.a.Group,{controlId:"formGridAddress1"},r.a.createElement(v.a.Label,null,"Owner"),r.a.createElement(v.a.Control,{placeholder:"this book belongs to...",name:"owner",onChange:this.handleChange})),r.a.createElement(r.a.Fragment,null),r.a.createElement(X,{onChange:this.handleRating}),r.a.createElement("input",{href:"/mybooks",type:"submit",className:"btn btn-dark",value:"Add book"})))}}]),a}(n.Component),_=(n.Component,function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loggedInUser:n.props.user},n}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement("h1",null,this.state.email),r.a.createElement(y.a,{className:"btn btn-dark",href:"/editprofile"},"Edit profile"),r.a.createElement(y.a,{className:"btn btn-dark",href:"/mybooks"},"My books"))}}]),a}(n.Component)),$=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).handleFormSubmit=function(e){var t=n.state.username,a=n.state.favGenres;e.preventDefault(),G.a.put("".concat("https://lost-mine.herokuapp.com/api","/users/").concat(n.props.theUser._id),{username:t,favGenres:a},{withCredentials:!0}).then((function(){n.props.getTheUser(),n.props.history.push("/profile")})).catch((function(e){return console.log(e)}))},n.handleChange=function(e){n.setState({name:e.target.value})},n.state={username:"",favGenres:""},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v.a,{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username:"),r.a.createElement("textarea",{className:"form-control",name:"username",defaultValue:"we don't know yet",value:this.state.username,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Favourite genres:"),r.a.createElement("textarea",{className:"form-control",defaultValue:"we don't know yet",name:"favGenres",value:this.state.favGenres,onChange:function(t){return e.handleChange(t)}})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Save changes"})))}}]),a}(n.Component),ee=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),console.log(e),(n=t.call(this,e)).handleFormSubmit=function(e){var t=n.state.opinion,a=n.state.rating,r=n.state.owner,l=n.state.lented;e.preventDefault(),G.a.put("".concat("https://lost-mine.herokuapp.com/api","/books/").concat(n.state._id),{lented:l,owner:r,rating:a,opinion:t},{withCredentials:!0}).then((function(){n.props.history.push("/mybooks")})).catch((function(e){return console.log(e)}))},n.handleChangeOpinion=function(e){n.setState({opinion:e.target.value})},n.handleChangeRating=function(e){n.setState({rating:e.target.value})},n.handleChangeOwner=function(e){n.setState({owner:e.target.value})},n.handleChangeLented=function(e){n.setState({lented:e.target.value})},n.handleRating=function(e){n.setState({rating:e})},n.state={_id:n.props.location.state.editbook._id,opinion:n.props.location.state.editbook.opinion,rating:n.props.location.state.editbook.rating,owner:n.props.location.state.editbook.owner,lented:n.props.location.state.editbook.lented},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(v.a,{onSubmit:this.handleFormSubmit},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Opinion:"),r.a.createElement("textarea",{className:"form-control",name:"opinion",placeholder:this.state.opinion,value:this.state.opinion,onChange:function(t){return e.handleChangeOpinion(t)}})),r.a.createElement("div",null,r.a.createElement(X,{onChange:function(t){return e.handleChangeRating(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Owner:"),r.a.createElement("textarea",{className:"form-control",name:"owner",value:this.state.owner,onChange:function(t){return e.handleChangeOwner(t)}})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Lented to:"),r.a.createElement("textarea",{className:"form-control",name:"lented",value:this.state.lented,onChange:function(t){return e.handleChangeLented(t)}})),r.a.createElement("input",{type:"submit",className:"btn btn-primary",value:"Save changes"})))}}]),a}(n.Component),te=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).getTheUser=function(e){n.setState({loggedInUser:e},(function(){localStorage.setItem("loggedInUser",JSON.stringify(n.state.loggedInUser))}))},n.state={loggedInUser:JSON.parse(localStorage.getItem("loggedInUser"))||null},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(h.d,null,r.a.createElement(h.b,{exact:!0,path:"/",render:function(){return r.a.createElement(U,null)}}),r.a.createElement(h.b,{exact:!0,path:"/books",render:function(){return r.a.createElement(L,null)}}),r.a.createElement(h.b,{exact:!0,path:"/signup",render:function(t){return r.a.createElement(T,{callback:e.getTheUser})}}),r.a.createElement(h.b,{exact:!0,path:"/login",render:function(t){return r.a.createElement(Y,Object.assign({},t,{callback:e.getTheUser}))}}),r.a.createElement(h.b,{exact:!0,path:"/logout",render:function(t){return r.a.createElement(H,Object.assign({},t,{callback:e.getTheUser}))}}),r.a.createElement(d,{path:"/profile",user:this.state.loggedInUser,component:_}),r.a.createElement(d,{path:"/mybooks",user:this.state.loggedInUser,component:J}),r.a.createElement(d,{path:"/createbook",user:this.state.loggedInUser,component:Z}),r.a.createElement(d,{path:"/editbook",user:this.state.loggedInUser,component:ee}),r.a.createElement(d,{path:"/editprofile",key:this.state.loggedInUser,user:this.state.loggedInUser,component:$})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(P.a,null,r.a.createElement(te,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[112,1,2]]]);
//# sourceMappingURL=main.fe52ad6a.chunk.js.map