import{j as e}from"./jsx-runtime-94f6e698.js";import{i as t}from"./styled-components.browser.esm-10889fc4.js";import{E as i}from"./example-product-150a69f6.js";import{P as h}from"./PriceFormat-fdd6ee7a.js";import{S as P}from"./Stepper-05b74335.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";const j=""+new URL("cart-c412e74f.svg",import.meta.url).href,y=t.div`
  display: flex;
  flex-direction: column;
`,C=t.div`
  flex: 1;
  padding: 18px 8px;
  padding-bottom: 0;
`,_=t.img`
  background: gray;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`,v=t.div`
  display: flex;
  flex: 1;

  & > *:last-child {
    margin-left: auto;
  }
`,q=t.p`
  font-size: 16px;
`,U=t.p`
  font-size: 20px;
`,E=t.div`
  padding: 18px 0px;
`,b=t.button`
  padding: 0 10px 10px 10px;
`,s=a=>{const{product:n,cartItem:d,showCartItem:g=!0,onChangeQuantity:r}=a;return e.jsxs(y,{children:[e.jsx(_,{src:n.imageUrl,alt:n.name}),e.jsxs(v,{children:[e.jsxs(C,{children:[e.jsx(q,{children:n.name}),e.jsx(U,{children:e.jsx(h,{price:n.price})})]}),e.jsx(E,{children:g&&(d?e.jsx(P,{min:0,value:d.quantity,onChange:I=>r==null?void 0:r(I)}):e.jsx(b,{onClick:()=>r==null?void 0:r(1),children:e.jsx("img",{alt:"카트",src:j})}))})]})]})};try{s.displayName="ProductListItem",s.__docgenInfo={description:"",displayName:"ProductListItem",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}},cartItem:{defaultValue:null,description:"",name:"cartItem",required:!1,type:{name:"CartItem | null"}},showCartItem:{defaultValue:null,description:"",name:"showCartItem",required:!1,type:{name:"boolean"}},onChangeQuantity:{defaultValue:null,description:"",name:"onChangeQuantity",required:!1,type:{name:"((quantity: number) => void)"}}}}}catch{}const L=t.div`
  width: 300px;
`,R={title:"ProductListItem",component:s,decorators:[a=>e.jsx(L,{children:e.jsx(a,{})})]},o={args:{product:{id:1,name:"아이크",imageUrl:i,price:1e3}}},c={args:{product:{id:1,name:"아이크",imageUrl:i,price:1e3},cartItem:{checked:!1,product:{id:1,name:"아이크",imageUrl:i,price:1e3},quantity:3}}};var m,p,l;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    product: {
      id: 1,
      name: '아이크',
      imageUrl: ExampleProduct,
      price: 1000
    }
  }
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var u,x,f;c.parameters={...c.parameters,docs:{...(u=c.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    product: {
      id: 1,
      name: '아이크',
      imageUrl: ExampleProduct,
      price: 1000
    },
    cartItem: {
      checked: false,
      product: {
        id: 1,
        name: '아이크',
        imageUrl: ExampleProduct,
        price: 1000
      },
      quantity: 3
    }
  }
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const W=["Default","WithCartItem"];export{o as Default,c as WithCartItem,W as __namedExportsOrder,R as default};
//# sourceMappingURL=ProductListItem.stories-38518612.js.map
