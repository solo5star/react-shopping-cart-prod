import{j as e}from"./jsx-runtime-94f6e698.js";import{b as P,c as q,d as T,e as I,a as m,f as w}from"./environment-eafc0253.js";import{i as d}from"./styled-components.browser.esm-10889fc4.js";import{r as O}from"./index-8db94870.js";import{c as M,r as V,a as _,b as A}from"./cartItemsState-5a52d14c.js";import{p as B,A as K}from"./AwaitRecoilState-14029da1.js";import{u as $}from"./userCartItemsRepository-7d34f255.js";import{B as G}from"./Button-5d8eb78c.js";import{P as f}from"./PriceFormat-fdd6ee7a.js";import{S as F}from"./Spinner-e4c9f8eb.js";import{h as H}from"./index-d9c88573.js";import"./index-8ce4a492.js";import"./_commonjsHelpers-042e6b4d.js";const J=t=>{const[r,o]=O.useState({}),a=()=>o({});return O.useMemo(()=>{if(t===null)return{isLoading:!1,isFulfilled:!1,isError:!1};try{return{isLoading:!1,isFulfilled:!0,isError:!1,data:t.unwrap()}}catch(s){return s instanceof Promise?(s.then(a).catch(a),{isLoading:!0,isError:!1,isFulfilled:!1}):{isLoading:!1,isFulfilled:!1,isError:!0,error:s}}},[t,r])},U=P({key:"ordersQuery",get:({client:t})=>()=>t.get("/orders")}),N=q({key:"remoteCartItemsState",default:P({key:"remoteCartItemsState/default",get:t=>({get:r})=>({isSynchronizing:!1,cartItems:r(M({client:t})).acceptOrThrow(200).data})}),effects:t=>[({setSelf:r,getPromise:o})=>{o(V(t)).then(n=>{n.doDownstreamSync(),n.onSync(s=>{r(i=>i instanceof T?s.isSynchronizing?i:{cartItems:s.cartItems,isSynchronizing:s.isSynchronizing}:{cartItems:i.cartItems,...s}),console.log(s.isSynchronizing?"synchronizing ...":"synchronized")})})}]}),L=I({key:"userRemoteCartItemsState",get:({get:t})=>{const r=t(_);return t(N(r))}}),x=Symbol("NotExists");class W{constructor(r){this.fn=r,this.data=x,this.error=x,this.promise=this.fn(),this.promise.then(o=>{this.data=o}).catch(o=>{this.error=o,console.error(o)})}toPromise(){return this.promise}unwrap(){if(this.error!==x)throw this.error;if(this.data===x)throw this.promise;return this.data}}const X=t=>{const[r,o]=O.useState(null);return{future:r,mutate:(...n)=>{const s=new W(()=>t(...n));return o(s),s.toPromise()}}},Y=()=>{const t=m(_),{cartItems:r}=m(L),{doDownstreamSync:o}=m($),a=w(B({client:t})),n=w(U({client:t})),s=()=>{a(),n(),o()},{mutate:i,...l}=X(({usedPoints:h})=>t.post("/orders",{usedPoints:h,cartItems:r.filter(c=>c.checked).map(c=>({id:c.id,productId:c.product.id,quantity:c.quantity}))}).then(c=>Number(c.acceptOrThrow(201).headers.location.split("/").pop())).finally(s));return{order:i,...l}},Z=P({key:"cartOrderPriceState",get:t=>({get:r})=>{const a=r(A(t)).filter(i=>i.checked).reduce((i,l)=>i+l.quantity*l.product.price,0),n=a>0?3e3:0,s={products:a,shippingFee:n};return{...s,total:Object.values(s).reduce((i,l)=>i+l,0)}}}),ee=I({key:"userCartOrderPriceState",get:({get:t})=>{const r=t(_);return t(Z(r))}}),te=P({key:"cartPointsQuery",get:({client:t})=>({get:r})=>(r(N(t)),t.get("/cart-points"))}),re=I({key:"userCartPointsState",get:({get:t})=>{const r=t(_);return t(te({client:r})).acceptOrThrow(200).data}}),se=d.form`
  min-width: 440px;
  border: 1px solid #dddddd;
`,oe=d.h1`
  padding: 20px 30px;

  font-size: 24px;
  font-weight: 400;
`,ne=d.hr`
  height: 3px;
  background-color: #dddddd;
`,ie=d.section`
  display: flex;
  flex-direction: column;

  padding: 30px;
`,ae=d.h2`
  font-size: 16px;
  text-align: center;
  color: #444444;
`,g=d.p`
  display: flex;
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 700;
`,y=d.p``,j=d.p`
  margin-left: auto;
`,p=d.hr`
  height: 20px;
  background: transparent;
  border: none;
`,E=t=>{const r=H(),{isCartEmpty:o,onOrderDone:a=u=>r(`/orders/${u}/done`)}=t,n=m(ee),{isSynchronizing:s}=m(L),{order:i,future:l}=Y(),h=J(l),c=async u=>{u.preventDefault();const Q=await i({usedPoints:0});a(Q)};return e.jsxs(se,{onSubmit:c,children:[e.jsx(oe,{children:"결제예상금액"}),e.jsx(ne,{}),e.jsx(ie,{children:o?e.jsxs(e.Fragment,{children:[e.jsx(p,{}),e.jsx(ae,{children:"주문할 상품을 선택해주세요!"}),e.jsx(p,{})]}):e.jsxs(e.Fragment,{children:[e.jsxs(g,{children:[e.jsx(y,{children:"총 상품가격"}),e.jsx(j,{children:e.jsx(f,{price:n.products})})]}),e.jsxs(g,{children:[e.jsx(y,{children:"총 배송비"}),e.jsx(j,{children:e.jsx(f,{price:n.shippingFee})})]}),e.jsx(p,{}),e.jsxs(g,{children:[e.jsx(y,{children:"적립 포인트"}),e.jsx(j,{children:e.jsx(K,{state:re,loadingElement:e.jsx(F,{}),children:u=>e.jsxs(e.Fragment,{children:[e.jsx(f,{price:u.expectedSavePoints,unit:"P"})," (",u.savingRate,"%)"]})})})]}),e.jsx(p,{}),e.jsxs(g,{children:[e.jsx(y,{children:"총 주문금액"}),e.jsx(j,{children:e.jsx(f,{price:n.total})})]}),e.jsx(p,{}),e.jsx(G,{disabled:h.isLoading||s,children:h.isLoading?e.jsx(F,{}):"주문하기"})]})})]})};try{E.displayName="CartOrder",E.__docgenInfo={description:"",displayName:"CartOrder",props:{isCartEmpty:{defaultValue:null,description:"",name:"isCartEmpty",required:!0,type:{name:"boolean"}},onOrderDone:{defaultValue:null,description:"",name:"onOrderDone",required:!1,type:{name:"((orderId: number) => void)"}}}}}catch{}const Ce={title:"CartOrder",component:E},S={args:{isCartEmpty:!1}},C={args:{isCartEmpty:!0}};var b,R,k;S.parameters={...S.parameters,docs:{...(b=S.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    isCartEmpty: false
  }
}`,...(k=(R=S.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var z,D,v;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    isCartEmpty: true
  }
}`,...(v=(D=C.parameters)==null?void 0:D.docs)==null?void 0:v.source}}};const Pe=["Default","CartEmpty"];export{C as CartEmpty,S as Default,Pe as __namedExportsOrder,Ce as default};
//# sourceMappingURL=CartOrder.stories-5ae822dd.js.map
