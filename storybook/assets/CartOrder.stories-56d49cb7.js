import{i as t,j as r}from"./styled-components.browser.esm-65bc2296.js";import{a as b,b as E}from"./http-4b3419c1.js";import{c as O}from"./cartItemsState-0ef27d27.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const F=b({key:"cartOrderPriceState",get:({get:n})=>{const e=n(O).filter(s=>!s.unselectedForOrder).reduce((s,o)=>s+o.quantity*o.product.price,0),_=e>0?3e3:0,u={products:e,shippingFee:_};return{...u,total:Object.values(u).reduce((s,o)=>s+o,0)}}}),P=t.form`
  min-width: 440px;
  border: 1px solid #dddddd;
`,w=t.h1`
  padding: 20px 30px;

  font-size: 24px;
  font-weight: 400;
`,S=t.hr`
  height: 3px;
  background-color: #dddddd;
`,k=t.section`
  padding: 30px;
`,z=t.h2`
  font-size: 16px;
  text-align: center;
  color: #444444;
`,d=t.p`
  display: flex;
  margin-bottom: 20px;

  font-size: 20px;
  font-weight: 700;
`,p=t.p``,l=t.p`
  margin-left: auto;

  &::after {
    content: '원';
  }
`,i=t.hr`
  height: 20px;
  background: transparent;
  border: none;
`,D=t.button.attrs({type:"submit"})`
  padding: 24px;
  width: 100%;

  background-color: #333333;

  font-size: 24px;
  font-weight: 400;
  color: white;
`,m=n=>{const{isCartEmpty:x}=n,e=E(F);return r.jsxs(P,{children:[r.jsx(w,{children:"결제예상금액"}),r.jsx(S,{}),r.jsx(k,{children:x?r.jsxs(r.Fragment,{children:[r.jsx(i,{}),r.jsx(z,{children:"주문할 상품을 선택해주세요!"}),r.jsx(i,{})]}):r.jsxs(r.Fragment,{children:[r.jsxs(d,{children:[r.jsx(p,{children:"총 상품가격"}),r.jsx(l,{children:e.products})]}),r.jsxs(d,{children:[r.jsx(p,{children:"총 배송비"}),r.jsx(l,{children:e.shippingFee})]}),r.jsx(i,{}),r.jsxs(d,{children:[r.jsx(p,{children:"총 주문금액"}),r.jsx(l,{children:e.total})]}),r.jsx(i,{}),r.jsx(D,{children:"주문하기"})]})})]})};try{m.displayName="CartOrder",m.__docgenInfo={description:"",displayName:"CartOrder",props:{isCartEmpty:{defaultValue:null,description:"",name:"isCartEmpty",required:!0,type:{name:"boolean"}}}}}catch{}const B={title:"CartOrder",component:m},a={args:{isCartEmpty:!1}},c={args:{isCartEmpty:!0}};var h,g,j;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    isCartEmpty: false
  }
}`,...(j=(g=a.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var f,y,C;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    isCartEmpty: true
  }
}`,...(C=(y=c.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const T=["Default","CartEmpty"];export{c as CartEmpty,a as Default,T as __namedExportsOrder,B as default};
//# sourceMappingURL=CartOrder.stories-56d49cb7.js.map
