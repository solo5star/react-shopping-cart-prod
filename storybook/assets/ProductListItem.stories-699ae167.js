import{i as r,j as t}from"./styled-components.browser.esm-65bc2296.js";import{u,E as x}from"./useCartActions-78c65941.js";import{b as f}from"./http-4b3419c1.js";import{c as g}from"./cartItemsState-0ef27d27.js";import{S as j}from"./Stepper-74058370.js";import"./index-8db94870.js";import"./_commonjsHelpers-042e6b4d.js";import"./index-8ce4a492.js";const P=""+new URL("cart-c412e74f.svg",import.meta.url).href,h=r.div`
  display: flex;
  flex-direction: column;
`,I=r.div`
  flex: 1;
  padding: 18px 8px;
  padding-bottom: 0;
`,_=r.img`
  background: gray;
  aspect-ratio: 1 / 1;
  object-fit: cover;
`,y=r.div`
  display: flex;
  flex: 1;

  & > *:last-child {
    margin-left: auto;
  }
`,C=r.p`
  font-size: 16px;
`,v=r.p`
  font-size: 20px;

  &::after {
    content: '원';
    padding-left: 8px;
  }
`,L=r.div`
  padding: 18px 0px;
`,S=r.button`
  padding: 0 10px 10px 10px;
`,a=o=>{const{product:e}=o,l=f(g),{setQuantity:i}=u(),s=l.find(c=>c.product.id===e.id)??null;return t.jsxs(h,{children:[t.jsx(_,{src:e.imageUrl,alt:e.name}),t.jsxs(y,{children:[t.jsxs(I,{children:[t.jsx(C,{children:e.name}),t.jsx(v,{children:e.price.toLocaleString("ko-KR")})]}),t.jsx(L,{children:s===null?t.jsx(S,{onClick:()=>i(e,1),children:t.jsx("img",{alt:"카트",src:P})}):t.jsx(j,{min:0,value:s.quantity,onChange:c=>i(e,c)})})]})]})};try{a.displayName="ProductListItem",a.__docgenInfo={description:"",displayName:"ProductListItem",props:{product:{defaultValue:null,description:"",name:"product",required:!0,type:{name:"Product"}}}}}catch{}const b=r.div`
  width: 300px;
`,A={title:"ProductItem",component:a,decorators:[o=>t.jsx(b,{children:t.jsx(o,{})})]},n={args:{product:{id:1,name:"아이크",imageUrl:x,price:1e3}}};var d,p,m;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    product: {
      id: 1,
      name: '아이크',
      imageUrl: ExampleProduct,
      price: 1000
    }
  }
}`,...(m=(p=n.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const D=["Default"];export{n as Default,D as __namedExportsOrder,A as default};
//# sourceMappingURL=ProductListItem.stories-699ae167.js.map
