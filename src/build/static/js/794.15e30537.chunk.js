"use strict";(self.webpackChunkglumydevfrontend=self.webpackChunkglumydevfrontend||[]).push([[794],{8794:function(e,n,t){t.r(n),t.d(n,{default:function(){return Z}});var s=t(9439),a=t(2791),r=t(9140),o=t(3360),i=t(2677),l=t(9743),c=t(5316),d=(t(5521),t(3855)),u=t(184);var h=function(e){var n=e.show,t=e.onHide,r=e.onUpdate,h=e.upUserId,m=e.username,x=e.firstName,p=e.lastName,f=e.email,Z=e.phone,j=e.highestQualification,b=e.courseStudied,v=e.batchDetails,N=e.placementStatus,g=e.companyName,y=e.userType,C=e.created_date,S=(0,a.useState)(m),T=(0,s.Z)(S,2),E=T[0],w=T[1],k=(0,a.useState)(x),I=(0,s.Z)(k,2),D=I[0],A=I[1],P=(0,a.useState)(p),F=(0,s.Z)(P,2),H=F[0],L=F[1],U=(0,a.useState)(f),O=(0,s.Z)(U,2),R=O[0],_=O[1],G=(0,a.useState)(Z),M=(0,s.Z)(G,2),B=M[0],K=M[1],Q=(0,a.useState)(j),z=(0,s.Z)(Q,2),J=z[0],W=z[1],q=(0,a.useState)(b),V=(0,s.Z)(q,2),X=V[0],Y=V[1],$=(0,a.useState)(v),ee=(0,s.Z)($,2),ne=ee[0],te=ee[1],se=(0,a.useState)(N),ae=(0,s.Z)(se,2),re=ae[0],oe=ae[1],ie=(0,a.useState)(g),le=(0,s.Z)(ie,2),ce=le[0],de=le[1],ue=(0,a.useState)(y),he=(0,s.Z)(ue,2),me=he[0],xe=he[1];return(0,u.jsxs)(c.Z,{show:n,onHide:t,children:[(0,u.jsx)(c.Z.Header,{closeButton:!0,children:(0,u.jsx)(c.Z.Title,{children:"Update Job Listing"})}),(0,u.jsx)(c.Z.Body,{className:"p-4",children:(0,u.jsxs)(d.Z,{onSubmit:function(e){e.preventDefault();var n={_id:h,username:E,firstName:D,lastName:H,email:R,phone:B,highestQualification:J,courseStudied:X,batchDetails:ne,placementStatus:re,companyName:ce,userType:me,created_date:C,version:a.version};fetch("http://localhost:4000/user",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){if(!e.ok)throw new Error("Network response was not ok");return e.json()})).then((function(e){console.log(e),r(e),t()})).catch((function(e){console.error("There was an error!",e)}))},children:[(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(i.Z,{md:6,children:(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"User Name"}),(0,u.jsx)(d.Z.Control,{type:"text",value:E,onChange:function(e){return w(e.target.value)},style:{border:"2px solid #ced4da"}})]})}),(0,u.jsx)(i.Z,{md:6,children:(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"User Type"}),(0,u.jsxs)("select",{name:"",className:"form-select",value:me,onChange:function(e){return xe(e.target.value)},style:{border:"2px solid #ced4da"},children:[(0,u.jsx)("option",{selected:!0,disabled:!0,hidden:!0,children:" User Type"}),(0,u.jsx)("option",{children:"Select One"}),(0,u.jsx)("option",{children:"Alumni"}),(0,u.jsx)("option",{children:"Employer"})]})]})})]}),(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(i.Z,{md:6,children:(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"Fristname"}),(0,u.jsx)(d.Z.Control,{type:"text",value:D,onChange:function(e){return A(e.target.value)},style:{border:"2px solid #ced4da"}})]})}),(0,u.jsx)(i.Z,{md:6,children:(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"Lastname"}),(0,u.jsx)(d.Z.Control,{type:"text",value:H,onChange:function(e){return L(e.target.value)},style:{border:"2px solid #ced4da"}})]})})]}),(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"Email"}),(0,u.jsx)(d.Z.Control,{type:"email",value:R,onChange:function(e){return _(e.target.value)},style:{border:"2px solid #ced4da"}})]}),(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(i.Z,{md:6,children:(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"Phone No:"}),(0,u.jsx)(d.Z.Control,{type:"number",value:B,onChange:function(e){return K(e.target.value)},style:{border:"2px solid #ced4da"}})]})}),(0,u.jsx)(i.Z,{md:6,children:(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"Highest Qualification"}),(0,u.jsxs)("select",{name:"",className:"form-select",value:J,onChange:function(e){return W(e.target.value)},style:{border:"2px solid #ced4da"},children:[(0,u.jsx)("option",{selected:!0,disabled:!0,hidden:!0,children:" HIGHEST QUALIFICATION"}),(0,u.jsx)("option",{children:"Select One"}),(0,u.jsx)("option",{children:"High School"}),(0,u.jsx)("option",{children:"Diploma"}),(0,u.jsx)("option",{children:"Bachelor"}),(0,u.jsx)("option",{children:"Master"}),(0,u.jsx)("option",{children:"PhD"})]})]})}),(0,u.jsx)(i.Z,{md:6,children:(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"Course Studied"}),(0,u.jsxs)("select",{name:"",className:"form-select",value:X,onChange:function(e){return Y(e.target.value)},style:{border:"2px solid #ced4da"},children:[(0,u.jsx)("option",{selected:!0,disabled:!0,hidden:!0,children:" HIGHEST QUALIFICATION"}),(0,u.jsx)("option",{children:"Select One"}),(0,u.jsx)("option",{value:"FSD",children:"FSD"}),(0,u.jsx)("option",{value:"DSA",children:"DSA"}),(0,u.jsx)("option",{value:"ML-AI",children:"ML-AI"}),(0,u.jsx)("option",{value:"RPA",children:"RPA"}),(0,u.jsx)("option",{value:"ST",children:"ST"}),(0,u.jsx)("option",{value:"CSA",children:"CSA"})]})]})}),(0,u.jsx)(i.Z,{md:6,children:(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"Batch Details"}),(0,u.jsxs)("select",{name:"",className:"form-select",value:ne,onChange:function(e){return te(e.target.value)},style:{border:"2px solid #ced4da"},children:[(0,u.jsx)("option",{selected:!0,disabled:!0,hidden:!0,children:" HIGHEST QUALIFICATION"}),(0,u.jsx)("option",{children:"Select One"}),(0,u.jsx)("option",{value:"KKEM",children:"KKEM"}),(0,u.jsx)("option",{value:"NORKA",children:"NORKA"}),(0,u.jsx)("option",{value:"KDISC",children:"KDISC"})]})]})})]}),(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(i.Z,{md:6,children:(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"Placement Status"}),(0,u.jsxs)("select",{name:"",className:"form-select",value:re,onChange:function(e){return oe(e.target.value)},style:{border:"2px solid #ced4da"},children:[(0,u.jsx)("option",{selected:!0,disabled:!0,hidden:!0,children:" HIGHEST QUALIFICATION"}),(0,u.jsx)("option",{children:"Select One"}),(0,u.jsx)("option",{value:"Placed",children:"Placed"}),(0,u.jsx)("option",{value:"Job-Seeking",children:"Job-Seeking"})]})]})}),(0,u.jsx)(i.Z,{md:6,children:(0,u.jsxs)(d.Z.Group,{className:"p-2",children:[(0,u.jsx)(d.Z.Label,{children:"Company Name"}),(0,u.jsx)(d.Z.Control,{type:"text",value:ce,onChange:function(e){return de(e.target.value)},style:{border:"2px solid #ced4da"}})]})})]}),(0,u.jsx)(l.Z,{}),(0,u.jsxs)(c.Z.Footer,{children:[(0,u.jsx)(o.Z,{type:"submit",variant:"danger",onClick:t,children:"Update User"}),(0,u.jsx)(o.Z,{type:"submit",onClick:t,children:"Cancel"})]})]})})]})};var m=function(e){var n=e.username,t=e.firstName,d=e.lastName,m=e.email,x=e.phone,p=e.highestQualification,f=e.courseStudied,Z=e.batchDetails,j=e.placementStatus,b=e.companyName,v=e.userType,N=e.created_date,g=e.version,y=e.jobId,C=e.onDelete,S=e.upUserId,T=(0,a.useState)(!1),E=(0,s.Z)(T,2),w=E[0],k=E[1],I=(0,a.useState)(!1),D=(0,s.Z)(I,2),A=D[0],P=D[1],F=(0,a.useState)(!1),H=(0,s.Z)(F,2),L=H[0],U=H[1];return(0,u.jsxs)(i.Z,{xs:12,md:6,lg:6,xl:4,xxl:3,children:[(0,u.jsx)("div",{style:{padding:"10px"},children:(0,u.jsx)(r.Z,{style:{border:"3px dashed rgba(44, 41, 41, 0.400"},className:w?"job-card hovered":"job-card",onMouseEnter:function(){return k(!0)},onMouseLeave:function(){return k(!1)},children:(0,u.jsxs)(r.Z.Body,{className:"jobCard",children:[(0,u.jsx)(r.Z.Text,{className:"mb-2 text-center",children:"Username:"}),(0,u.jsx)(r.Z.Title,{className:"text-primary text-center",children:n}),(0,u.jsx)("br",{}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["First Name: ",t]}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["Last Name: ",d]}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["Email: ",m]}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["Phone no: ",x]}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["Highest Qualification: ",p]}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["Course Studied: ",f]}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["Batch Details Location: ",Z]}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["Placement Status: ",j]}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["Course Studied: ",f]}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["Company Name: ",b]}),(0,u.jsxs)(r.Z.Text,{className:"mb-2",children:["User Name: ",v]}),(0,u.jsxs)(r.Z.Text,{className:"smalltext text-muted",children:["User Profile created at: ",N]}),(0,u.jsxs)(l.Z,{children:[(0,u.jsx)(i.Z,{xs:6,sm:6,children:(0,u.jsx)(o.Z,{variant:"dark",size:"sm",block:!0,onClick:function(){U(!0)},children:"Update"})}),(0,u.jsx)(i.Z,{xs:6,sm:6,children:(0,u.jsx)(o.Z,{variant:"outline-danger",size:"sm",block:!0,onClick:function(){return P(!0)},children:"Delete"})})]})]})})}),(0,u.jsxs)(c.Z,{show:A,onHide:function(){return P(!1)},children:[(0,u.jsx)(c.Z.Header,{closeButton:!0,children:(0,u.jsx)(c.Z.Title,{children:"Confirm Deletion"})}),(0,u.jsx)(c.Z.Body,{className:"smalltext",children:"Are you sure you want to delete this job listing?"}),(0,u.jsxs)(c.Z.Footer,{children:[(0,u.jsx)(o.Z,{variant:"secondary",size:"sm",onClick:function(){return P(!1)},children:"Cancel"}),(0,u.jsx)(o.Z,{variant:"danger",size:"sm",onClick:function(){C(y),P(!1)},children:"Delete"})]})]}),(0,u.jsx)(h,{show:L,onHide:function(){U(!1)},upUserId:S,username:n,firstName:t,lastName:d,email:m,phone:x,highestQualification:p,courseStudied:f,batchDetails:Z,placementStatus:j,companyName:b,userType:v,created_date:N,version:g})]})},x=t(7022),p=t(3555),f=t(217),Z=function(){var e=(0,a.useState)([]),n=(0,s.Z)(e,2),t=n[0],r=n[1];(0,a.useEffect)((function(){var e=function(){fetch("http://localhost:4000/user").then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))},n=setInterval((function(){e()}),1500);return e(),function(){return clearInterval(n)}}),[]);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(p.Z,{}),(0,u.jsxs)(x.Z,{children:[(0,u.jsxs)("div",{children:[(0,u.jsx)("br",{}),(0,u.jsx)("h2",{className:"text-center",children:"Admin Dashboard: Manage Users"}),(0,u.jsx)("br",{})]}),(0,u.jsx)(l.Z,{children:Array.isArray(t)&&t.length>0?t.map((function(e){return(0,u.jsx)(m,{username:e.username,firstName:e.firstName,lastName:e.lastName,email:e.email,phone:e.phone,highestQualification:e.highestQualification,courseStudied:e.courseStudied,batchDetails:e.batchDetails,placementStatus:e.placementStatus,companyName:e.companyName,userType:e.userType,created_date:e.created_date,__v:a.version,onDelete:function(){return n=e._id,void fetch("http://localhost:4000/user/".concat(n),{method:"DELETE"}).then((function(e){return e.json()})).then((function(e){r((function(e){return e.filter((function(e){return e._id!==n}))})),console.log(e.message)})).catch((function(e){return console.log(e)}));var n},upUserId:e._id},e._id)})):(0,u.jsx)("p",{children:"No users available."})})]}),(0,u.jsx)(f.Z,{})]})}},9140:function(e,n,t){t.d(n,{Z:function(){return I}});var s=t(1413),a=t(5987),r=t(1694),o=t.n(r),i=t(2791),l=t(162),c=t(6543),d=t(7472),u=t(184),h=["bsPrefix","className","variant","as"],m=i.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.variant,c=e.as,d=void 0===c?"img":c,m=(0,a.Z)(e,h),x=(0,l.vE)(t,"card-img");return(0,u.jsx)(d,(0,s.Z)({ref:n,className:o()(i?"".concat(x,"-").concat(i):x,r)},m))}));m.displayName="CardImg";var x=m,p=t(6040),f=["bsPrefix","className","as"],Z=i.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,c=e.as,d=void 0===c?"div":c,h=(0,a.Z)(e,f),m=(0,l.vE)(t,"card-header"),x=(0,i.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,u.jsx)(p.Z.Provider,{value:x,children:(0,u.jsx)(d,(0,s.Z)((0,s.Z)({ref:n},h),{},{className:o()(r,m)}))})}));Z.displayName="CardHeader";var j=Z,b=["bsPrefix","className","bg","text","border","body","children","as"],v=(0,d.Z)("h5"),N=(0,d.Z)("h6"),g=(0,c.Z)("card-body"),y=(0,c.Z)("card-title",{Component:v}),C=(0,c.Z)("card-subtitle",{Component:N}),S=(0,c.Z)("card-link",{Component:"a"}),T=(0,c.Z)("card-text",{Component:"p"}),E=(0,c.Z)("card-footer"),w=(0,c.Z)("card-img-overlay"),k=i.forwardRef((function(e,n){var t=e.bsPrefix,r=e.className,i=e.bg,c=e.text,d=e.border,h=e.body,m=e.children,x=e.as,p=void 0===x?"div":x,f=(0,a.Z)(e,b),Z=(0,l.vE)(t,"card");return(0,u.jsx)(p,(0,s.Z)((0,s.Z)({ref:n},f),{},{className:o()(r,Z,i&&"bg-".concat(i),c&&"text-".concat(c),d&&"border-".concat(d)),children:h?(0,u.jsx)(g,{children:m}):m}))}));k.displayName="Card",k.defaultProps={body:!1};var I=Object.assign(k,{Img:x,Title:y,Subtitle:C,Body:g,Link:S,Text:T,Header:j,Footer:E,ImgOverlay:w})},5316:function(e,n,t){t.d(n,{Z:function(){return B}});var s,a=t(9439),r=t(5987),o=t(1413),i=t(1694),l=t.n(i),c=t(3070),d=t(7357),u=t(8376),h=t(6382);function m(e){if((!s&&0!==s||e)&&d.Z){var n=document.createElement("div");n.style.position="absolute",n.style.top="-9999px",n.style.width="50px",n.style.height="50px",n.style.overflow="scroll",document.body.appendChild(n),s=n.offsetWidth-n.clientWidth,document.body.removeChild(n)}return s}var x=t(8633),p=t(9007),f=t(3201),Z=t(1683),j=t(3690),b=t(2791),v=t(1889),N=t(4382),g=t(2709),y=t(6543),C=(0,y.Z)("modal-body"),S=t(9820),T=t(162),E=t(184),w=["bsPrefix","className","contentClassName","centered","size","fullscreen","children","scrollable"],k=b.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,a=e.contentClassName,i=e.centered,c=e.size,d=e.fullscreen,u=e.children,h=e.scrollable,m=(0,r.Z)(e,w);t=(0,T.vE)(t,"modal");var x="".concat(t,"-dialog"),p="string"===typeof d?"".concat(t,"-fullscreen-").concat(d):"".concat(t,"-fullscreen");return(0,E.jsx)("div",(0,o.Z)((0,o.Z)({},m),{},{ref:n,className:l()(x,s,c&&"".concat(t,"-").concat(c),i&&"".concat(x,"-centered"),h&&"".concat(x,"-scrollable"),d&&p),children:(0,E.jsx)("div",{className:l()("".concat(t,"-content"),a),children:u})}))}));k.displayName="ModalDialog";var I=k,D=(0,y.Z)("modal-footer"),A=t(2086),P=["bsPrefix","className"],F=b.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,a=(0,r.Z)(e,P);return t=(0,T.vE)(t,"modal-header"),(0,E.jsx)(A.Z,(0,o.Z)((0,o.Z)({ref:n},a),{},{className:l()(s,t)}))}));F.displayName="ModalHeader",F.defaultProps={closeLabel:"Close",closeButton:!1};var H=F,L=(0,t(7472).Z)("h4"),U=(0,y.Z)("modal-title",{Component:L}),O=["bsPrefix","className","style","dialogClassName","contentClassName","children","dialogAs","aria-labelledby","aria-describedby","aria-label","show","animation","backdrop","keyboard","onEscapeKeyDown","onShow","onHide","container","autoFocus","enforceFocus","restoreFocus","restoreFocusOptions","onEntered","onExit","onExiting","onEnter","onEntering","onExited","backdropClassName","manager"],R={show:!1,backdrop:!0,keyboard:!0,autoFocus:!0,enforceFocus:!0,restoreFocus:!0,animation:!0,dialogAs:I};function _(e){return(0,E.jsx)(g.Z,(0,o.Z)((0,o.Z)({},e),{},{timeout:null}))}function G(e){return(0,E.jsx)(g.Z,(0,o.Z)((0,o.Z)({},e),{},{timeout:null}))}var M=b.forwardRef((function(e,n){var t=e.bsPrefix,s=e.className,i=e.style,g=e.dialogClassName,y=e.contentClassName,C=e.children,w=e.dialogAs,k=e["aria-labelledby"],I=e["aria-describedby"],D=e["aria-label"],A=e.show,P=e.animation,F=e.backdrop,H=e.keyboard,L=e.onEscapeKeyDown,U=e.onShow,R=e.onHide,M=e.container,B=e.autoFocus,K=e.enforceFocus,Q=e.restoreFocus,z=e.restoreFocusOptions,J=e.onEntered,W=e.onExit,q=e.onExiting,V=e.onEnter,X=e.onEntering,Y=e.onExited,$=e.backdropClassName,ee=e.manager,ne=(0,r.Z)(e,O),te=(0,b.useState)({}),se=(0,a.Z)(te,2),ae=se[0],re=se[1],oe=(0,b.useState)(!1),ie=(0,a.Z)(oe,2),le=ie[0],ce=ie[1],de=(0,b.useRef)(!1),ue=(0,b.useRef)(!1),he=(0,b.useRef)(null),me=(0,x.Z)(),xe=(0,a.Z)(me,2),pe=xe[0],fe=xe[1],Ze=(0,f.Z)(n,fe),je=(0,p.Z)(R),be=(0,T.SC)();t=(0,T.vE)(t,"modal");var ve=(0,b.useMemo)((function(){return{onHide:je}}),[je]);function Ne(){return ee||(0,N.t)({isRTL:be})}function ge(e){if(d.Z){var n=Ne().getScrollbarWidth()>0,t=e.scrollHeight>(0,u.Z)(e).documentElement.clientHeight;re({paddingRight:n&&!t?m():void 0,paddingLeft:!n&&t?m():void 0})}}var ye=(0,p.Z)((function(){pe&&ge(pe.dialog)}));(0,Z.Z)((function(){(0,h.Z)(window,"resize",ye),null==he.current||he.current()}));var Ce=function(){de.current=!0},Se=function(e){de.current&&pe&&e.target===pe.dialog&&(ue.current=!0),de.current=!1},Te=function(){ce(!0),he.current=(0,j.Z)(pe.dialog,(function(){ce(!1)}))},Ee=function(e){"static"!==F?ue.current||e.target!==e.currentTarget?ue.current=!1:null==R||R():function(e){e.target===e.currentTarget&&Te()}(e)},we=(0,b.useCallback)((function(e){return(0,E.jsx)("div",(0,o.Z)((0,o.Z)({},e),{},{className:l()("".concat(t,"-backdrop"),$,!P&&"show")}))}),[P,$,t]),ke=(0,o.Z)((0,o.Z)({},i),ae);ke.display="block";return(0,E.jsx)(S.Z.Provider,{value:ve,children:(0,E.jsx)(v.Z,{show:A,ref:Ze,backdrop:F,container:M,keyboard:!0,autoFocus:B,enforceFocus:K,restoreFocus:Q,restoreFocusOptions:z,onEscapeKeyDown:function(e){H?null==L||L(e):(e.preventDefault(),"static"===F&&Te())},onShow:U,onHide:R,onEnter:function(e,n){e&&ge(e),null==V||V(e,n)},onEntering:function(e,n){null==X||X(e,n),(0,c.ZP)(window,"resize",ye)},onEntered:J,onExit:function(e){null==he.current||he.current(),null==W||W(e)},onExiting:q,onExited:function(e){e&&(e.style.display=""),null==Y||Y(e),(0,h.Z)(window,"resize",ye)},manager:Ne(),transition:P?_:void 0,backdropTransition:P?G:void 0,renderBackdrop:we,renderDialog:function(e){return(0,E.jsx)("div",(0,o.Z)((0,o.Z)({role:"dialog"},e),{},{style:ke,className:l()(s,t,le&&"".concat(t,"-static"),!P&&"show"),onClick:F?Ee:void 0,onMouseUp:Se,"aria-label":D,"aria-labelledby":k,"aria-describedby":I,children:(0,E.jsx)(w,(0,o.Z)((0,o.Z)({},ne),{},{onMouseDown:Ce,className:g,contentClassName:y,children:C}))}))}})})}));M.displayName="Modal",M.defaultProps=R;var B=Object.assign(M,{Body:C,Header:H,Title:U,Footer:D,Dialog:I,TRANSITION_DURATION:300,BACKDROP_TRANSITION_DURATION:150})},5521:function(){}}]);
//# sourceMappingURL=794.15e30537.chunk.js.map