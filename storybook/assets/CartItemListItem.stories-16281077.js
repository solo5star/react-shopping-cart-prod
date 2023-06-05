import{E as u}from"./example-product-150a69f6.js";import{j as t}from"./jsx-runtime-94f6e698.js";import{a as x}from"./environment-47b79d9e.js";import{i as r}from"./styled-components.browser.esm-10889fc4.js";import{u as f}from"./userCartItemsRepository-4c55b0a6.js";import{P as g}from"./PriceFormat-fdd6ee7a.js";import{S as h}from"./Stepper-05b74335.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";import"./cartItemsState-a1a9cd9c.js";const y=""+new URL("delete-3475d2bd.svg",import.meta.url).href,I=r.div`
  display: flex;
  gap: 20px;

  width: 100%;
`,C=r.img`
  width: 140px;
  height: 140px;

  background: gray;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`,_=r.h1`
  flex: 1;

  font-size: 20px;
  font-weight: 400;
  color: #333333;
`,j=r.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 20px;
`,P=r.button``,a=i=>{const{quantity:n,product:e}=i,{setQuantity:s}=x(f),d=l=>{s(e,Math.max(1,l))};return t.jsxs(I,{children:[t.jsx(C,{src:e.imageUrl}),t.jsx(_,{children:e.name}),t.jsxs(j,{children:[t.jsx(P,{onClick:()=>s(e,0),children:t.jsx("img",{src:y,alt:"삭제"})}),t.jsx(h,{variant:"large",value:n,onChange:d}),t.jsx(g,{price:e.price*n})]})]})};try{a.displayName="CartItemListItem",a.__docgenInfo={description:"",displayName:"CartItemListItem",props:{quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}}}}}catch{}const V={title:"CartItemListItem",component:a},o={args:{product:{id:1,imageUrl:u,name:"ASUS Vivobook Pro 16x",price:1299e3},quantity:1}};var m,c,p;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    product: {
      id: 1,
      imageUrl: ExampleProduct,
      name: 'ASUS Vivobook Pro 16x',
      price: 1299000
    },
    quantity: 1
  }
}`,...(p=(c=o.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const N=["Default"];export{o as Default,N as __namedExportsOrder,V as default};
//# sourceMappingURL=CartItemListItem.stories-16281077.js.map
