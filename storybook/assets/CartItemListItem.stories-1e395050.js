import{u,E as x}from"./useCartActions-78c65941.js";import{i as e,j as t}from"./styled-components.browser.esm-65bc2296.js";import{S as g}from"./Stepper-74058370.js";import"./http-4b3419c1.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./cartItemsState-0ef27d27.js";const f=""+new URL("delete-3475d2bd.svg",import.meta.url).href,h=e.div`
  display: flex;
  gap: 20px;

  width: 100%;
`,y=e.img`
  width: 140px;
  height: 140px;

  background: gray;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`,I=e.h1`
  flex: 1;

  font-size: 20px;
  font-weight: 400;
  color: #333333;
`,C=e.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`,j=e.h2`
  &::after {
    content: '원';
  }
`,_=e.button``,a=n=>{const{quantity:i,product:r}=n,{setQuantity:s}=u(),d=l=>{s(r,Math.max(1,l))};return t.jsxs(h,{children:[t.jsx(y,{src:r.imageUrl}),t.jsx(I,{children:r.name}),t.jsxs(C,{children:[t.jsx(_,{onClick:()=>s(r,0),children:t.jsx("img",{src:f,alt:"삭제"})}),t.jsx(g,{variant:"large",value:i,onChange:d}),t.jsx(j,{children:(r.price*i).toLocaleString("ko")})]})]})};try{a.displayName="CartItemListItem",a.__docgenInfo={description:"",displayName:"CartItemListItem",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}}}}}catch{}const E={title:"CartItemListItem",component:a},o={args:{product:{id:1,imageUrl:x,name:"ASUS Vivobook Pro 16x",price:1299e3},quantity:1}};var c,m,p;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    product: {
      id: 1,
      imageUrl: ExampleProduct,
      name: 'ASUS Vivobook Pro 16x',
      price: 1299000
    },
    quantity: 1
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const w=["Default"];export{o as Default,w as __namedExportsOrder,E as default};
//# sourceMappingURL=CartItemListItem.stories-1e395050.js.map
