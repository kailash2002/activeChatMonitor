(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{210:function(e,t,n){},211:function(e,t,n){},229:function(e,t,n){},230:function(e,t,n){"use strict";n.r(t);var c=n(4),s=n(1),a=n.n(s),r=n(43),i=n.n(r),o=n(51),l=n(13),j=n(5),u=a.a.createContext(),b=function(e){var t=e.children,n=Object(s.useState)(""),a=Object(j.a)(n,2),r=a[0],i=a[1],o=Object(s.useState)(""),l=Object(j.a)(o,2),b=l[0],m=l[1];return Object(c.jsx)(u.Provider,{value:{name:r,room:b,setName:i,setRoom:m},children:t})},m=n(137),d=n.n(m),x=a.a.createContext(),h=function(e){var t=e.children,n=d()("https://still-tundra-73032.herokuapp.com/",{transports:["websocket","polling"]});return Object(c.jsx)(x.Provider,{value:n,children:t})},O=n(246),f=n(247),p=n(253),g=n(248),v=n(75),C=n(252),N=a.a.createContext(),S=function(e){var t=e.children,n=Object(s.useState)([]),a=Object(j.a)(n,2),r=a[0],i=a[1];return Object(c.jsx)(N.Provider,{value:{users:r,setUsers:i},children:t})},y=function(){var e=Object(s.useContext)(x),t=Object(s.useContext)(u),n=t.name,a=t.setName,r=t.room,i=t.setRoom,o=Object(l.f)(),j=Object(C.a)(),b=Object(s.useContext)(N).setUsers;Object(s.useEffect)((function(){e.on("users",(function(e){b(e)}))}));return Object(c.jsxs)(O.a,{className:"login",flexDirection:"column",mb:"8",children:[Object(c.jsx)(f.a,{as:"h1",size:"4xl",textAlign:"center",mb:"8",fontFamily:"DM Sans",fontWeight:"600",letterSpacing:"-2px",children:"CREATE/JOIN ROOM's"}),Object(c.jsxs)(O.a,{className:"form",gap:"1rem",flexDirection:{base:"column",md:"row"},children:[Object(c.jsx)(p.a,{variant:"filled",mr:{base:"0",md:"4"},mb:{base:"4",md:"0"},type:"text",placeholder:"User Name",value:n,onChange:function(e){return a(e.target.value)}}),Object(c.jsx)(p.a,{variant:"filled",mr:{base:"0",md:"4"},mb:{base:"4",md:"0"},type:"text",placeholder:"Room Name",value:r,onChange:function(e){return i(e.target.value)}}),Object(c.jsx)(g.a,{colorScheme:"cyan",isRound:"true",icon:Object(c.jsx)(v.a,{}),onClick:function(){e.emit("login",{name:n,room:r},(function(e){return e?(console.log(e),j({position:"top",title:"Error",description:e,status:"error",duration:5e3,isClosable:!0})):(o.push("/chat"),j({position:"top",title:"Hey there",description:"Welcome to ".concat(r),status:"success",duration:5e3,isClosable:!0}))}))}})]})]})},w=n(10),R=n(251),E=n(249),k=n(250),z=n(145),A=n(143),D=n(76),I=n(142),U=n.n(I),_=(n(210),function(){var e=Object(s.useContext)(u),t=e.name,n=e.room,a=e.setName,r=e.setRoom,i=Object(s.useContext)(x),o=Object(s.useState)(""),b=Object(j.a)(o,2),m=b[0],d=b[1],h=Object(s.useState)([]),p=Object(j.a)(h,2),S=p[0],y=p[1],I=Object(s.useContext)(N).users,_=Object(l.f)(),M=Object(C.a)();window.onpopstate=function(e){return J()},Object(s.useEffect)((function(){if(!t)return _.push("/")}),[_,t]),Object(s.useEffect)((function(){i.on("message",(function(e){y((function(t){return[].concat(Object(w.a)(t),[e])}))})),i.on("notification",(function(e){M({position:"top",title:null===e||void 0===e?void 0:e.title,description:null===e||void 0===e?void 0:e.description,status:"success",duration:5e3,isClosable:!0})}))}),[i,M]);var W=function(e){e.preventDefault(),i.emit("sendMessage",m,(function(){return d("")})),d("")},J=function(){a(""),r(""),_.push("/"),_.go(0)};return Object(c.jsxs)(O.a,{className:"room",flexDirection:"column",width:{base:"100%",sm:"575px"},height:{base:"100%",sm:"auto"},children:[Object(c.jsx)(f.a,{className:"heading",as:"h4",bg:"white",p:"1rem 1.5rem",borderRadius:"10px 10px 0 0",children:Object(c.jsxs)(O.a,{alignItems:"center",justifyContent:"space-between",children:[Object(c.jsxs)(R.a,{children:[Object(c.jsx)(R.b,{as:g.a,icon:Object(c.jsx)(A.a,{}),isRound:"true",bg:"blue.300",color:"white"}),Object(c.jsx)(R.d,{children:I&&I.map((function(e){return Object(c.jsx)(R.c,{minH:"40px",children:Object(c.jsx)(E.a,{fontSize:"sm",children:e.name})},e.id)}))})]}),Object(c.jsxs)(O.a,{alignItems:"center",flexDirection:"column",flex:{base:"1",sm:"auto"},children:[Object(c.jsxs)(f.a,{fontSize:"lg",children:[" ",n.slice(0,1).toUpperCase()+n.slice(1)]}),Object(c.jsxs)(O.a,{alignItems:"center",children:[Object(c.jsx)(E.a,{mr:"1",fontWeight:"400",fontSize:"md",opacity:".7",letterSpacing:"0",children:t}),Object(c.jsx)(k.a,{h:2,w:2,borderRadius:"100px",bg:"green.300"})]})]}),Object(c.jsx)(z.a,{color:"gray.500",fontSize:"sm",onClick:J,children:"Logout"})]})}),Object(c.jsx)(U.a,{className:"messages",debug:!1,children:S.length>0?S.map((function(e,n){return Object(c.jsxs)(k.a,{className:"message ".concat(e.user===t?"my-message":""),m:".2rem 0",children:[Object(c.jsx)(E.a,{fontSize:"xs",opacity:".7",ml:"5px",className:"user",children:e.user}),Object(c.jsx)(E.a,{fontSize:"sm",className:"msg",p:".4rem .8rem",bg:"white",borderRadius:"15px",color:"white",children:e.text})]},n)})):Object(c.jsxs)(O.a,{alignItems:"center",justifyContent:"center",mt:".5rem",bg:"#EAEAEA",opacity:".2",w:"100%",children:[Object(c.jsx)(k.a,{mr:"2",children:"-----"}),Object(c.jsx)(D.b,{fontSize:"1rem"}),Object(c.jsx)(E.a,{ml:"1",fontWeight:"400",children:"No messages"}),Object(c.jsx)(k.a,{ml:"2",children:"-----"})]})}),Object(c.jsx)("div",{className:"form",children:Object(c.jsxs)("form",{onSubmit:W,children:[Object(c.jsx)("input",{type:"text",placeholder:"Enter Message",value:m,onChange:function(e){return d(e.target.value)}}),Object(c.jsx)(g.a,{colorScheme:"green",isRound:"true",icon:Object(c.jsx)(v.b,{}),onClick:W,disabled:""===m,children:"Send"})]})})]})}),M=(n(211),n(144)),W=n.n(M);var J=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),n=t[0],a=t[1];return Object(s.useEffect)((function(){W.a.get("http://localhost:5000/allrooms").then((function(e){a(e.data),console.log(n)}))}),[]),Object(c.jsxs)("div",{className:"admin",children:[Object(c.jsx)("div",{className:"admin__sec1",children:Object(c.jsx)("h2",{children:"All Current Users's"})}),Object(c.jsx)("div",{className:"admin__sec2",children:n.map((function(e,t){return Object(c.jsxs)("div",{className:"admin__block",children:[Object(c.jsxs)("h3",{children:["Room name : ",Object(c.jsx)("span",{children:e.room})]}),Object(c.jsxs)("p",{children:["User Name : ",Object(c.jsx)("span",{children:e.name})]})]},t)}))})]})},P=(n(229),n(254));var H=function(){return Object(c.jsx)(P.a,{children:Object(c.jsx)(b,{children:Object(c.jsx)(S,{children:Object(c.jsx)(h,{children:Object(c.jsx)(O.a,{className:"App",align:"center",justifyContent:"center",children:Object(c.jsx)(o.a,{children:Object(c.jsxs)(l.c,{children:[Object(c.jsx)(l.a,{exact:!0,path:"/",component:y}),Object(c.jsx)(l.a,{exact:!0,path:"/chat",component:_}),Object(c.jsx)(l.a,{exact:!0,path:"/admin",component:J})]})})})})})})})};i.a.render(Object(c.jsx)(a.a.StrictMode,{children:Object(c.jsx)(H,{})}),document.getElementById("root"))}},[[230,1,2]]]);
//# sourceMappingURL=main.24a88a97.chunk.js.map