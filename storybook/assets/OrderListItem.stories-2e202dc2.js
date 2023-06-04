import{j as r}from"./jsx-runtime-94f6e698.js";import{E as s}from"./example-product-150a69f6.js";import{O as o}from"./OrderCartItem-84ef97cb.js";import{L as y}from"./index-e38f4b4b.js";import{i as e}from"./styled-components.browser.esm-10889fc4.js";import{P as d}from"./PriceFormat-fdd6ee7a.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-d9c88573.js";const v=e.div`
  border: 1px solid #aaaaaa;
`,_=e.div`
  display: flex;
  justify-content: space-between;
  padding: 36px;
  background: #f6f6f6;
  border-bottom: 1px solid #aaaaaa;
`,C=e.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 4px;

  padding: 24px;
  background: #f6f6f6;
  border-top: 1px solid #aaaaaa;
`,u=e.div``,b=e.div`
  & > * {
    height: 220px;
  }

  & > * + * {
    border-top: 1px solid #aaaaaa;
  }
`,q=e.h2`
  font-size: 24px;
  font-weight: 700;
`,L=e.h3`
  font-size: 16px;
`,n=c=>{const{order:t,children:j}=c,p=t.cartItems.reduce((I,m)=>I+m.price*m.quantity,0),O=p*t.savingRate/100;return r.jsxs(v,{children:[r.jsxs(_,{children:[r.jsxs(u,{children:["주문번호: ",t.id]}),r.jsx(u,{children:r.jsx(y,{to:`/orders/${t.id}`,children:"상세보기 ›"})})]}),r.jsx(b,{children:j}),r.jsxs(C,{children:[r.jsx(q,{children:r.jsx(d,{price:p})}),r.jsxs(L,{children:["사용 포인트: ",r.jsx(d,{price:t.usedPoints,unit:"P"})," / 적립 포인트:"," ",r.jsx(d,{price:O,unit:"P"})]})]})]})};try{n.displayName="OrderListItem",n.__docgenInfo={description:"",displayName:"OrderListItem",props:{order:{defaultValue:null,description:"",name:"order",required:!0,type:{name:"Order"}}}}}catch{}const H={title:"OrderListItem",component:n},a={args:{order:{id:13290,cartItems:[],savingRate:10,usedPoints:0}}},i={args:{order:{id:13290,cartItems:[],savingRate:10,usedPoints:0},children:r.jsxs(r.Fragment,{children:[r.jsx(o,{productName:"아이크",imageUrl:s,productPrice:2e3,quantity:3}),r.jsx(o,{productName:"아이크",imageUrl:s,productPrice:2e3,quantity:3}),r.jsx(o,{productName:"아이크",imageUrl:s,productPrice:2e3,quantity:3})]})}};var l,x,g;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    order: {
      id: 13290,
      cartItems: [],
      savingRate: 10,
      usedPoints: 0
    }
  }
}`,...(g=(x=a.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var f,P,h;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    order: {
      id: 13290,
      cartItems: [],
      savingRate: 10,
      usedPoints: 0
    },
    children: <>
        <OrderCartItem productName="아이크" imageUrl={ExampleProduct} productPrice={2000} quantity={3} />
        <OrderCartItem productName="아이크" imageUrl={ExampleProduct} productPrice={2000} quantity={3} />
        <OrderCartItem productName="아이크" imageUrl={ExampleProduct} productPrice={2000} quantity={3} />
      </>
  }
}`,...(h=(P=i.parameters)==null?void 0:P.docs)==null?void 0:h.source}}};const S=["Default","WithOrderCartItem"];export{a as Default,i as WithOrderCartItem,S as __namedExportsOrder,H as default};
//# sourceMappingURL=OrderListItem.stories-2e202dc2.js.map
