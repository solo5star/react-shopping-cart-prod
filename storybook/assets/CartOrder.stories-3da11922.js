import{j as e}from"./jsx-runtime-94f6e698.js";import{r as u}from"./index-8db94870.js";import{b as k,c as I,a as p,d as D}from"./environment-47b79d9e.js";import{i as c}from"./styled-components.browser.esm-10889fc4.js";import{c as w,r as Q,a as G}from"./cartItemsState-a1a9cd9c.js";import{p as H,u as J}from"./userProfileState-26f81e3d.js";import{u as W}from"./userCartItemsRepository-4c55b0a6.js";import{B as X}from"./Button-5d8eb78c.js";import{P as x}from"./PriceFormat-fdd6ee7a.js";import{S as N}from"./Spinner-e4c9f8eb.js";import{h as Y}from"./index-d9c88573.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const Z=t=>{const[r,s]=u.useState({}),i=()=>s({});return u.useMemo(()=>{if(t===null)return{isLoading:!1,isFulfilled:!1,isError:!1};try{return{isLoading:!1,isFulfilled:!0,isError:!1,data:t.unwrap()}}catch(n){return n instanceof Promise?(n.then(i).catch(i),{isLoading:!0,isError:!1,isFulfilled:!1}):{isLoading:!1,isFulfilled:!1,isError:!0,error:n}}},[t,r])},ee=k({key:"ordersQuery",get:({client:t})=>()=>t.get("/orders")}),A=I({key:"userRemoteCartItemsState",get:({get:t})=>{const r=t(w);return t(Q(r))}}),g=Symbol("NotExists");class te{constructor(r){this.fn=r,this.data=g,this.error=g,this.promise=this.fn(),this.promise.then(s=>{this.data=s}).catch(s=>{this.error=s,console.error(s)})}toPromise(){return this.promise}unwrap(){if(this.error!==g)throw this.error;if(this.data===g)throw this.promise;return this.data}}const re=t=>{const[r,s]=u.useState(null);return{future:r,mutate:(...o)=>{const n=new te(()=>t(...o));return s(n),n.toPromise()}}},se=()=>{const t=p(w),{cartItems:r}=p(A),{doDownstreamSync:s}=p(W),i=D(H({client:t})),o=D(ee({client:t})),n=()=>{i(),o(),s()},{mutate:l,..._}=re(({usedPoints:E})=>t.post("/orders",{usedPoints:E,cartItems:r.filter(d=>d.checked).map(d=>({id:d.id,productId:d.product.id,quantity:d.quantity}))}).then(d=>Number(d.acceptOrThrow(201).headers.location.split("/").pop())).finally(n));return{order:l,..._}},ne=k({key:"cartOrderPriceState",get:t=>({get:r})=>{const o={products:r(G(t)).filter(n=>n.checked).reduce((n,l)=>n+l.quantity*l.product.price,0)};return{...o,total:Object.values(o).reduce((n,l)=>n+l,0)}}}),oe=I({key:"userCartOrderPriceState",get:({get:t})=>{const r=t(w);return t(ne(r))}}),ae=k({key:"cartPointsQuery",get:({client:t})=>({get:r})=>(r(Q(t)),t.get("/cart-points"))}),ie=I({key:"userCartPointsState",get:({get:t})=>{const r=t(w);return t(ae({client:r})).acceptOrThrow(200).data}}),ce=t=>{const{state:r,children:s}=t,i=p(r);return s==null?void 0:s(i)},b=t=>{const{loadingElement:r,state:s,children:i}=t,o=u.useMemo(()=>Date.now(),[s]);return e.jsx(u.Suspense,{fallback:r,children:s&&e.jsx(ce,{state:s,children:i})},o)};try{b.displayName="AwaitRecoilState",b.__docgenInfo={description:"",displayName:"AwaitRecoilState",props:{state:{defaultValue:null,description:"",name:"state",required:!1,type:{name:"RecoilValueReadOnly<T>"}},loadingElement:{defaultValue:null,description:"",name:"loadingElement",required:!1,type:{name:"ReactNode"}}}}}catch{}const de=c.form`
  min-width: 440px;
  border: 1px solid #dddddd;
`,le=c.h1`
  padding: 20px 30px;

  font-size: 24px;
  font-weight: 400;
`,ue=c.hr`
  height: 3px;
  background-color: #dddddd;
`,pe=c.section`
  display: flex;
  flex-direction: column;

  padding: 30px;
`,me=c.h2`
  font-size: 16px;
  text-align: center;
  color: #444444;
`,y=c.div`
  display: flex;
  gap: 12px;
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 700;
`,j=c.p``,P=c.p`
  margin-left: auto;
`,he=c.input`
  max-width: 120px;
  padding: 8px;
  border: 1px solid #666666;
`,fe=c.div`
  font-size: 12px;
  font-weight: 400;
  white-space: nowrap;
`,f=c.hr`
  height: 20px;
  background: transparent;
  border: none;
`,F=t=>{const r=Y(),{isCartEmpty:s,onOrderDone:i=a=>r(`/orders/${a}/done`)}=t,o=p(oe),{isSynchronizing:n}=p(A),l=p(J),{order:_,future:E}=se(),d=Z(E),[v,O]=u.useState("0"),[T,B]=u.useState(0),R=Math.min(o.total,l.currentPoints),m=Math.max(0,Math.min(R,T));u.useEffect(()=>{O(String(m))},[m,o.total]);const $=a=>{if(!/^\d+$/.test(a)){alert("숫자만 입력 가능합니다.");return}const h=Number(a);if(h<0||R<h){alert(`최소 0부터 ${R}까지 사용 가능합니다.`);return}B(h)},K=async a=>{a.preventDefault();const h=await _({usedPoints:m});i(h)};return e.jsxs(de,{onSubmit:K,children:[e.jsx(le,{children:"결제예상금액"}),e.jsx(ue,{}),e.jsx(pe,{children:s?e.jsxs(e.Fragment,{children:[e.jsx(f,{}),e.jsx(me,{children:"주문할 상품을 선택해주세요!"}),e.jsx(f,{})]}):e.jsxs(e.Fragment,{children:[e.jsxs(y,{children:[e.jsx(j,{children:"총 상품가격"}),e.jsx(P,{children:e.jsx(x,{price:o.products})})]}),e.jsx(f,{}),e.jsxs(y,{children:[e.jsx(j,{children:"적립 포인트"}),e.jsx(P,{children:e.jsx(b,{state:ie,loadingElement:e.jsx(N,{}),children:a=>e.jsxs(e.Fragment,{children:[e.jsx(x,{price:a.expectedSavePoints,unit:"P"})," (",a.savingRate,"%)"]})})})]}),e.jsxs(y,{children:[e.jsxs(j,{children:["사용할 포인트",e.jsxs(fe,{children:["사용가능한 포인트: ",e.jsx(x,{price:l.currentPoints,unit:"P"})]})]}),e.jsxs(P,{children:[e.jsx(he,{value:v,onChange:a=>O(a.target.value),onKeyDown:a=>{a.key==="Enter"&&(a.preventDefault(),$(v))},onBlur:()=>{O(String(m))}})," ","P"]})]}),e.jsx(f,{}),e.jsxs(y,{children:[e.jsx(j,{children:"총 주문금액"}),e.jsx(P,{children:e.jsx(x,{price:o.total-m})})]}),e.jsx(f,{}),e.jsx(X,{disabled:d.isLoading||n,children:d.isLoading?e.jsx(N,{}):"주문하기"})]})})]})};try{F.displayName="CartOrder",F.__docgenInfo={description:"",displayName:"CartOrder",props:{isCartEmpty:{defaultValue:null,description:"",name:"isCartEmpty",required:!0,type:{name:"boolean"}},onOrderDone:{defaultValue:null,description:"",name:"onOrderDone",required:!1,type:{name:"((orderId: number) => void)"}}}}}catch{}const Fe={title:"CartOrder",component:F},S={args:{isCartEmpty:!1}},C={args:{isCartEmpty:!0}};var q,L,M;S.parameters={...S.parameters,docs:{...(q=S.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    isCartEmpty: false
  }
}`,...(M=(L=S.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var U,V,z;C.parameters={...C.parameters,docs:{...(U=C.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    isCartEmpty: true
  }
}`,...(z=(V=C.parameters)==null?void 0:V.docs)==null?void 0:z.source}}};const ke=["Default","CartEmpty"];export{C as CartEmpty,S as Default,ke as __namedExportsOrder,Fe as default};
//# sourceMappingURL=CartOrder.stories-3da11922.js.map
