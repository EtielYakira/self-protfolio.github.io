(this["webpackJsonpstudent-react"]=this["webpackJsonpstudent-react"]||[]).push([[0],{78:function(e,t,n){},79:function(e,t,n){},88:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),c=n(29),s=n.n(c),i=(n(78),n(79),n(80),n(26)),o=n(12),l=n(42),j=n(14),d=n(2);function u(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(l.a,{className:"text-center mt-5 mainTitle",id:"HomeContainer",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{className:"",children:"My Projects"}),Object(d.jsx)("h3",{className:"my-1 componentTitle",style:{fontSize:"100px"},children:"veni vidi vici"}),Object(d.jsx)(j.a,{className:"my-4",variant:"info",href:"https://www.linkedin.com/in/itiel-yakira/",target:"_blank",children:"   Learn More About Me "})]})})})}var h=n(10),b=[{quote:"\u201cBe yourself; everyone else is already taken.\u201d",maker:"Oscar Wilde"},{quote:"\u201cTwo things are infinite: the universe and human stupidity; and Im not sure about the universe.\u201d ",maker:"Albert Einstein"},{quote:"\u201cSo many books, so little time.\u201d",maker:" Frank Zappa"},{quote:"\u201cA room without books is like a body without a soul.\u201d",maker:" Marcus Tullius Cicero"}],m=["#FFAEBC","#A0E7E5","yellow","#B4F8C8","#FBE7C6","#EEEDE7","#E08955"],x=n(16);var O=function(e){var t=e.currQuote,n=e.currImg;return Object(d.jsxs)(x.a,{className:"w-25",children:[Object(d.jsx)(x.a.Header,{children:"Quote"}),Object(d.jsx)(x.a.Body,{style:{backgroundColor:"".concat(n)},children:Object(d.jsxs)("blockquote",{className:"blockquote mb-0",children:[Object(d.jsxs)("p",{children:[" ",t.quote," "]}),Object(d.jsxs)("footer",{className:"blockquote-footer",children:[t.maker," ",Object(d.jsxs)("cite",{title:"Source Title",children:[Math.floor(2021*Math.random()),"bc"]})]})]})})]})};var g=function(){var e=function(e){return Math.floor(Math.random()*e)},t=Object(r.useState)({currImg:m[e(m.length)],currQuote:b[e(b.length)]}),n=Object(h.a)(t,2),a=n[0],c=n[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"text-center mainTitle",children:"Students Center"}),Object(d.jsxs)("div",{className:"d-flex justify-content-center align-items-center flex-column my-4",children:[Object(d.jsx)(O,{currImg:a.currImg,currQuote:a.currQuote}),Object(d.jsx)(j.a,{className:"mx-auto my-4",onClick:function(){c({currImg:m[e(m.length)],currQuote:b[e(b.length)]})},children:"Change Quote"})]})]})},f=n(22),p=n(60),v=[{name:"batman",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.XxRrkxXPB7iGoYFlKZHp7AHaHa%26pid%3DApi&f=1",votes:0,comments:[]},{name:"superman",img:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.HH6UujJZqKzBfZU5u-jcQgHaHa%26pid%3DApi&f=1",votes:0,comments:[]},{name:"spiderman",img:"https://i.pinimg.com/originals/32/04/6c/32046c6fb666d7b3c2525190e4fc4575.jpg",votes:0,comments:[]}],N=n(9),k=n(46),w=n(65),C=n(54),y=n(55);var S=function(e){var t=e.item,n=e.currComment,r=e.changeVoteCount,a=e.addComment,c=e.changeCurrComment,s=e.index;return Object(d.jsxs)(x.a,{className:"text-center",style:{width:"20rem"},children:[Object(d.jsx)(x.a.Img,{variant:"top",src:"".concat(t.img)}),Object(d.jsx)(x.a.Header,{children:Object(d.jsxs)("strong",{children:["Vote count: ",t.votes]})}),Object(d.jsxs)(x.a.Body,{children:[Object(d.jsx)(x.a.Title,{children:t.name}),Object(d.jsxs)(x.a.Title,{children:[Object(d.jsx)(C.c,{}),s+1,Object(d.jsx)("span",{children:0===s?Object(d.jsx)(y.a,{style:{color:"gold"}}):1===s?Object(d.jsx)(y.a,{style:{color:"silver"}}):2===s?Object(d.jsx)(y.a,{style:{color:"brown"}}):""})]}),Object(d.jsx)(j.a,{className:"mx-1",value:"\ud83d\udc4d",variant:"info",onClick:function(e){return r(t.name,e.target.value)},children:Object(d.jsx)(C.b,{})}),Object(d.jsx)(j.a,{className:"mx-1",value:"\ud83d\udc4e",variant:"info",onClick:function(e){return r(t.name,e.target.value)},children:Object(d.jsx)(C.a,{})}),Object(d.jsxs)(N.a,{className:"my-3",children:[Object(d.jsx)(k.a,{placeholder:"Comment Here","aria-label":"Comment",defaultValue:"",onBlur:function(e){return c(e.target.value)}}),Object(d.jsx)(N.a.Append,{children:Object(d.jsx)(j.a,{variant:"outline-secondary",onClick:function(){return a(t.name,n)},children:"Add Comment"})})]}),Object(d.jsx)(w.a,{children:t.comments.map((function(e,t){return Object(d.jsx)(w.a.Item,{children:e},t)}))})]})]})};var F=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(""),s=Object(h.a)(c,2),i=s[0],o=s[1];return Object(r.useEffect)((function(){a(v)}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"mx-auto text-center mainTitle",children:"Voting App"}),Object(d.jsx)("h4",{className:"text-white text-center",children:" Choose Your Favorite Hero"}),Object(d.jsx)(l.a,{children:Object(d.jsx)(p.a,{children:n.sort((function(e,t){return e.votes-t.votes})).reverse().map((function(e,t){return Object(d.jsx)(f.a,{children:Object(d.jsx)(S,{index:t,item:e,currComment:i,changeCurrComment:function(e){return function(e){o(e)}(e)},addComment:function(e,t){return function(e,t){n=n.map((function(n){return n.name===e&&t&&(n.comments.push(t),o("")),n})),a(n)}(e,t)},changeVoteCount:function(e,t){return function(e,t){n=n.map((function(n){return n.name===e&&("\ud83d\udc4d"===t?n.votes+=1:"\ud83d\udc4e"===t&&(n.votes-=1)),n})),a(n)}(e,t)}})})}))})})]})},T=n(64),A=n(32),M=n(34),B=n(31),E=n(8);var H=function(e){var t=e.onParameters,n=e.parameters,r=e.isOkToShow;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(E.a,{className:"container my-4 col-4",children:[Object.keys(n).map((function(e){return Object(d.jsxs)(E.a.Group,{children:[Object(d.jsx)(E.a.Label,{style:{fontSize:"43px"},children:e}),Object(d.jsx)(E.a.Control,{className:"",onBlur:function(e){return t(e.target.name,e.target.value)},name:e,type:"number",placeholder:"Enter ".concat(e)})]})})),Object(d.jsx)(j.a,{variant:"info",type:"button",onClick:function(){return r()},children:"Submit"})]})})},P=function(e,t){return(e/Math.pow(t/100,2)).toFixed(1)};var q=function(e){var t=e.parameters;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(x.a,{className:"border border-black",style:{width:"18rem"},children:[Object(d.jsx)(x.a.Img,{variant:"top",src:"https://img.pixers.pics/pho_wat(s3:700/FO/43/94/40/16/700_FO43944016_8afb689febd6d5a6abd6f6be2239e52a.jpg,700,580,cms:2018/10/5bd1b6b8d04b8_220x50-watermark.png,over,480,530,jpg)/stickers-fat-boy-with-burger-and-hot-dog.jpg.jpg"}),Object(d.jsxs)(x.a.Body,{children:[Object(d.jsx)(x.a.Title,{children:"You Are fat"}),Object(d.jsxs)(x.a.Text,{children:[Object(d.jsxs)("h3",{children:["Your BMI IS: ",P(t.weight,t.height)]}),"you are in danger pleace checkj our diet menu."]}),Object(d.jsx)(j.a,{variant:"primary",children:Object(d.jsx)("a",{className:"text-white",target:"_blank",rel:"noreferrer",href:"https://cdn.vox-cdn.com/thumbor/-460i09zo22nGbnFWXWPU3NK32g=/0x0:800x727/1200x0/filters:focal(0x0:800x727)/cdn.vox-cdn.com/uploads/chorus_asset/file/6751989/menuv.0.jpg",children:"diet menu"})})]})]})})};var I=function(){var e=Object(r.useState)({weight:0,height:0}),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(!1),s=Object(h.a)(c,2),i=s[0],o=s[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"mx-auto text-center mainTitle",style:{fontSize:"100px"},children:"Your BMI"}),Object(d.jsxs)("div",{className:"d-flex container",children:[Object(d.jsx)(H,{onParameters:function(e,t){t&&a(Object(B.a)(Object(B.a)({},n),{},Object(M.a)({},e,t)))},parameters:n,isOkToShow:function(){o(0!==n.weight&&0!==n.height)}}),i&&Object(d.jsx)(q,{parameters:n})]})]})},L=n(73),J=n(63),Q=n(68),V=n(69),G=n(56),W=n(67);var z=function(e){return e.errors.map((function(e,t){return Object(d.jsx)("small",{className:"form-text text-mute",children:e},t)}))};var D=function(e){var t=e.addStudent,n=e.handleClose,a=Object(r.useState)(""),c=Object(h.a)(a,2),s=c[0],i=c[1],o=Object(r.useState)({email:{value:"",errors:[],valid:!1,validations:{required:!0,pattern:/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/}},username:{value:"",errors:[],valid:!1,validations:{required:!0,pattern:/^[a-zA-Z0-9]{2,}$/}},address:{value:"",errors:[],valid:!1,validations:{required:!0,pattern:/^[a-zA-Z0-9\s,.'-]{10,}$/}},course:{value:"",errors:[],valid:!1,validations:{required:!0}},gender:{value:"",valid:!1,errors:[],validations:{required:!0}}}),l=Object(h.a)(o,2),u=l[0],b=l[1],m=function(e){var t=e.target,n=t.value,r=t.name,a=[],c=u[r].validations;c.required&&!n&&a.push("".concat(r," is required")),c.pattern&&!c.pattern.test(n)&&("username"===r?a.push("User name need to be 2 or more char"):"address"===r?a.push("User name need to be 10 or more char"):a.push("Invalid ".concat(r," value"))),"gender"===r&&i(n),"Choose Course"===n&&a.push("".concat(r," is required")),b((function(e){return Object(B.a)(Object(B.a)({},e),{},Object(M.a)({},r,Object(B.a)(Object(B.a)({},e[r]),{},{valid:0===a.length,value:n,errors:a})))}))};return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(E.a,{onSubmit:function(e){e.preventDefault()},className:"container p-4",style:{backgroundColor:"rgba(44, 100, 50, 0.7)"},children:[Object(d.jsx)("h2",{className:"text-center text-white",children:Object(d.jsx)("u",{children:Object(d.jsx)("strong",{children:"Student Details"})})}),Object(d.jsx)("h5",{className:"text-center text-white ",children:"Hello student! Please fill your details"}),Object(d.jsx)("hr",{}),Object(d.jsxs)(E.a.Row,{children:[Object(d.jsxs)(E.a.Group,{as:f.a,className:"mr-5",children:[Object(d.jsx)(E.a.Label,{className:"text-white",children:Object(d.jsx)("u",{children:"Username"})}),Object(d.jsxs)(N.a,{children:[Object(d.jsx)(N.a.Prepend,{children:Object(d.jsx)(N.a.Text,{children:Object(d.jsx)(G.c,{})})}),Object(d.jsx)(E.a.Control,{name:"username",type:"text",placeholder:"Enter Username",className:u.username.errors.length?"is-invalid alert-danger":"",onBlur:m})]}),Object(d.jsx)(z,{errors:u.username.errors})]}),Object(d.jsxs)(E.a.Group,{as:f.a,children:[Object(d.jsx)(E.a.Label,{className:"text-white",children:Object(d.jsx)("u",{children:"Email"})}),Object(d.jsxs)(N.a,{children:[Object(d.jsx)(N.a.Prepend,{children:Object(d.jsx)(N.a.Text,{children:Object(d.jsx)(G.b,{})})}),Object(d.jsx)(E.a.Control,{name:"email",type:"email",placeholder:"Enter Email",className:u.email.errors.length?"is-invalid alert-danger":"",onBlur:m})]}),Object(d.jsx)(z,{errors:u.email.errors})]})]}),Object(d.jsx)(E.a.Row,{children:Object(d.jsxs)(E.a.Group,{as:f.a,children:[Object(d.jsx)(E.a.Label,{className:"text-white",children:Object(d.jsx)("u",{children:"Adress"})}),Object(d.jsxs)(N.a,{children:[Object(d.jsx)(N.a.Prepend,{children:Object(d.jsx)(N.a.Text,{children:Object(d.jsx)(G.a,{})})}),Object(d.jsx)(E.a.Control,{name:"address",as:"textarea",rows:3,className:u.address.errors.length?"is-invalid alert-danger":"",onBlur:m,placeholder:"Street, Number, City, Zip "})]}),Object(d.jsx)(z,{errors:u.address.errors})]})}),Object(d.jsxs)(E.a.Row,{children:[Object(d.jsxs)(E.a.Group,{className:"col mr-5",children:[Object(d.jsx)(E.a.Label,{className:"text-white",children:Object(d.jsx)("u",{children:"Choose"})}),Object(d.jsxs)(N.a,{children:[Object(d.jsx)(N.a.Prepend,{children:Object(d.jsx)(N.a.Text,{children:Object(d.jsx)(W.a,{})})}),Object(d.jsxs)(E.a.Control,{as:"select",name:"course",defaultValue:"",onChange:m,className:u.course.errors.length?"is-invalid alert-danger":"",children:[Object(d.jsx)("option",{children:"Choose Course"}),Object(d.jsx)("option",{children:"JAVA"}),Object(d.jsx)("option",{children:"PYTHON"}),Object(d.jsx)("option",{children:"HTML"}),Object(d.jsx)("option",{children:"REACT"})]})]}),Object(d.jsx)(z,{errors:u.course.errors})]}),Object(d.jsxs)(E.a.Group,{className:"col",children:[Object(d.jsx)(E.a.Label,{className:"text-white",children:Object(d.jsx)("u",{children:"Gender"})}),Object(d.jsx)(N.a,{children:Object(d.jsx)(Q.a,{toggle:!0,children:[{name:"Male",value:"Male"},{name:"Female",value:"Female"},{name:"Other",value:"Other"}].map((function(e,t){return Object(d.jsx)(V.a,{type:"radio",className:u.gender.errors.length?"is-invalid alert-danger":"",variant:"secondary",name:"gender",value:e.value,checked:s===e.value,onChange:m,children:e.name},t)}))})}),Object(d.jsx)(z,{errors:u.gender.errors})]})]}),Object(d.jsx)(E.a.Row,{children:Object(d.jsx)(j.a,{as:f.a,type:"submit",variant:"dark",onClick:function(e){var r=0,a={};for(var c in u){var s=u[c].value||"",i=c;s?a[i]=s:(r++,m({target:{value:s,name:i}}))}0===r&&(t(a),n())},children:"Submit"})})]})})};function R(e){var t,n,a=e.students,c=e.addStudent,s=e.onPikingStudent,i=e.studentToShow,o=Object(r.useState)(!1),l=Object(h.a)(o,2),u=l[0],b=l[1],m=function(){return b(!1)},x=Object(r.useState)(!1),O=Object(h.a)(x,2),g=O[0],f=O[1];return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"text-center font-weight-bolder",style:{fontFamily:'"Playfair Display", serif',fontSize:"10vh"},children:"Students Center"}),Object(d.jsx)("div",{className:"container",children:Object(d.jsxs)("div",{className:"row justify-content-center mt-4",children:[Object(d.jsxs)("ol",{className:" m-3 col-3 list-group list-group-numbered",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)(j.a,{variant:"secondary",onClick:function(){return b(!0)},className:"mt-4 mx-1",children:"Add Student"}),g?Object(d.jsx)(j.a,{variant:"warning",onClick:function(){return f(!1)},className:"mt-4 mx-1",children:"Stop Sorting"}):Object(d.jsx)(j.a,{variant:"warning",onClick:function(){return f(!0)},className:"mt-4 mx-1",children:"Sort by Name"})]}),(g?a=a.sort((function(e,t){return e.username<t.username?-1:e.username>t.username?1:0})):a).map((function(e,t){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("li",{onClick:function(){return s(t)},className:"mt-2 list-group-item text-center rounded list-group-item-action",children:e.username},t)})})),Object(d.jsxs)(J.a,{show:u,onHide:m,className:"",children:[Object(d.jsx)(J.a.Header,{closeButton:!0,className:"position-absolute border-0"}),Object(d.jsx)(D,{addStudent:c,handleClose:m})]})]}),-1===i?"":Object(d.jsxs)("div",{class:"st m-5 col-4 align-self-start",children:[Object(d.jsxs)("div",{class:"avatar-flip",children:[Object(d.jsx)("img",{className:"student",src:"https://randomuser.me/api/portraits/".concat("Male"===a[i].gender?"men":"women","/").concat((t=99,n=10,n=Math.ceil(n),t=Math.floor(t),Math.floor(Math.random()*(t-n+1))+n),".jpg"),height:"150",width:"150"}),Object(d.jsx)("img",{className:"student",src:"https://raw.githubusercontent.com/laudep/code-gif-generator/master/docs/img/generating.gif",height:"150",width:"150"})]}),Object(d.jsx)("h1",{className:"student",children:a[i].username}),Object(d.jsxs)("div",{className:"d-flex flex-column text-left",children:[Object(d.jsxs)("p",{className:"student",children:[Object(d.jsx)("strong",{children:"Course:\xa0"})," ",a[i].course]}),Object(d.jsxs)("p",{className:"student",children:[Object(d.jsx)("strong",{children:"address:\xa0"})," ",a[i].address]}),Object(d.jsxs)("p",{className:"student",children:[Object(d.jsx)("strong",{children:"gender:\xa0"})," ",a[i].gender]}),Object(d.jsxs)("p",{className:"student",children:[Object(d.jsx)("strong",{children:"email:\xa0"})," ",a[i].email]})]})]})]})})]})}var U=[{username:"brik",email:"Arik@gmail.com",course:"Jsx",gender:"Male",address:"Chiago 9 st"},{username:"drik",email:"Arik@gmail.com",course:"Jsx",gender:"Male",address:"Chiago 9 st"},{username:"arik",email:"Arik@gmail.com",course:"Jsx",gender:"Male",address:"Chiago 9 st"},{username:"crik",email:"Arik@gmail.com",course:"Jsx",gender:"Male",address:"Chiago 9 st"}];var Z=function(){var e=Object(r.useState)(U),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)(-1),s=Object(h.a)(c,2),i=s[0],o=s[1];return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(R,{students:n,addStudent:function(e){a([].concat(Object(L.a)(n),[e]))},onPikingStudent:function(e){o(e)},studentToShow:i})})};var _=function(e){var t=Object(r.useState)(""),n=Object(h.a)(t,2),a=n[0],c=n[1];return Object(r.useEffect)((function(){fetch("http://api.icndb.com/jokes/random").then((function(e){return e.json()})).then((function(e){c(e.value.joke)}))}),[]),Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{className:"text-warning",children:"RandomJokeBox"}),Object(d.jsx)("p",{children:a})]})})};var Y=function(e){var t=e.categoryList,n=e.name,r=e.onChoosingCategory;return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)("div",{className:"container",children:[Object(d.jsx)("h2",{children:"Joke Category"}),Object(d.jsxs)("div",{className:"",children:[Object(d.jsx)(E.a.Group,{className:"col m-5",children:Object(d.jsx)(N.a,{children:Object(d.jsxs)(E.a.Control,{as:"select",name:n,defaultValue:"",onChange:r,children:[Object(d.jsxs)("option",{children:["Choose ",n]}),t.map((function(e){return Object(d.jsx)("option",{children:e})}))]})})}),";"]})]})})},K=n(70);var X=function(e){var t=e.onChangeSearchWord;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"col-3",children:Object(d.jsxs)(N.a,{className:"mb-3",children:[Object(d.jsx)(N.a.Prepend,{children:Object(d.jsx)(N.a.Text,{id:"basic-addon1",children:Object(d.jsx)(K.a,{})})}),Object(d.jsx)(E.a.Control,{placeholder:"search","aria-label":"search","aria-describedby":"basic-addon1",onChange:t})]})})})},$=n(71),ee=n.n($);var te=function(e){var t=e.dataToShow,n=e.searchWord;return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(N.a,{className:"col",children:Object(d.jsx)("div",{className:"overflow-auto m-5 border border-5 bg-white",style:{width:"100vh",height:"50vh"},children:Object(d.jsx)("ul",{children:n?t.filter((function(e){return e.includes(n)})).map((function(e){return Object(d.jsx)("li",{children:Object(d.jsx)(ee.a,{searchWords:[n],textToHighlight:e,autoEscape:!0,highlightClassName:"bg-warning"})})})):t.map((function(e){return Object(d.jsx)("li",{children:e})}))})})})})};var ne=function(){var e=Object(r.useState)([]),t=Object(h.a)(e,2),n=t[0],a=t[1],c=Object(r.useState)([]),s=Object(h.a)(c,2),i=s[0],o=s[1],l=Object(r.useState)([]),j=Object(h.a)(l,2),u=j[0],b=j[1],m=Object(r.useState)(""),x=Object(h.a)(m,2),O=x[0],g=x[1];return Object(r.useEffect)((function(){fetch("http://api.icndb.com/jokes/?limitTo=".concat(i)).then((function(e){return e.json()})).then((function(e){var t=e.value.map((function(e){return e.joke}));b(t),console.log("a")}))}),[i]),Object(r.useEffect)((function(){fetch("http://api.icndb.com/categories").then((function(e){return e.json()})).then((function(e){a(e.value)}))}),[]),Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("h1",{className:"mainTitle text-center",children:"Norris Jokes"}),Object(d.jsx)("p",{className:"container",children:"A warm welcome message works like a charm in any situation, be it the recruitment of a new employee or having returning ones back, or meeting friends after a long time! Welcome messages are also appreciated in more formal settings like welcoming a guest or customer. Whatever the arrangement is, these notes convey your excitement and happiness towards the other parties and help them settle in more comfortably. So if you have a new party to meet and greet them cordially, pass along a sweet, meaningful welcome message while offering them a genuine smile! Perfect welcome messages can be hard to find, so help yourselves with a compilation of unique welcoming messages and notes below!"}),Object(d.jsx)(_,{}),Object(d.jsx)(Y,{categoryList:n,name:"category",onChoosingCategory:function(e){var t=e.target.value;o([t])}}),Object(d.jsxs)("div",{className:"d-flex",children:[Object(d.jsx)(X,{onChangeSearchWord:function(e){var t=e.target.value;g(t)}}),Object(d.jsx)(te,{dataToShow:u,searchWord:O})]})]})};var re=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsxs)(i.a,{basename:"/protfolio",children:[Object(d.jsxs)(T.a,{id:"navbar",children:[Object(d.jsx)(T.a.Brand,{className:"text-white",children:Object(d.jsx)(i.b,{to:"/",className:"text-white text-decoration-none",children:"My Projects"})}),Object(d.jsxs)(A.a,{className:"mr-auto",children:[Object(d.jsx)(A.a.Link,{children:Object(d.jsx)(i.b,{to:"/",children:"Home"})}),Object(d.jsx)(A.a.Link,{children:Object(d.jsx)(i.b,{to:"/Voting",children:"Voting"})}),Object(d.jsx)(A.a.Link,{children:Object(d.jsx)(i.b,{to:"/Quotes",children:"Quotes"})}),Object(d.jsx)(A.a.Link,{children:Object(d.jsx)(i.b,{to:"/Students",children:"Students"})}),Object(d.jsx)(A.a.Link,{children:Object(d.jsx)(i.b,{to:"/Bmi",children:"Bmi"})}),Object(d.jsx)(A.a.Link,{children:Object(d.jsx)(i.b,{to:"/Chuck",children:"Chuck"})})]})]}),Object(d.jsxs)(o.c,{children:[Object(d.jsx)(o.a,{path:"/Voting",children:Object(d.jsx)(F,{})}),Object(d.jsx)(o.a,{path:"/Quotes",children:Object(d.jsx)(g,{})}),Object(d.jsx)(o.a,{path:"/Students",children:Object(d.jsx)(Z,{})}),Object(d.jsx)(o.a,{path:"/Bmi",children:Object(d.jsx)(I,{})}),Object(d.jsx)(o.a,{path:"/Chuck",children:Object(d.jsx)(ne,{})}),Object(d.jsx)(o.a,{path:"/",children:Object(d.jsx)(u,{})})]})]})})};var ae=function(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(re,{})})};s.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(ae,{})}),document.getElementById("root"))}},[[88,1,2]]]);
//# sourceMappingURL=main.6e66b750.chunk.js.map