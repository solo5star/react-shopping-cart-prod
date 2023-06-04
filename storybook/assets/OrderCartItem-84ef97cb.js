import{j as e}from"./jsx-runtime-94f6e698.js";import{i as r}from"./styled-components.browser.esm-10889fc4.js";import{P as d}from"./PriceFormat-fdd6ee7a.js";const p=r.div`
  display: flex;
  gap: 32px;
  padding: 40px 26px;
  height: 100%;
`,s=r.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,u=r.img`
  object-fit: cover;
`,l=r.h2`
  font-size: 20px;
  color: #333333;
`,m=r.p`
  font-size: 16px;
  font-weight: 400;
  color: #888888;
`,i=t=>{const{productName:n,productPrice:a,quantity:o,imageUrl:c}=t;return e.jsxs(p,{children:[e.jsx(u,{src:c}),e.jsxs(s,{children:[e.jsx(l,{children:n}),e.jsxs(m,{children:[e.jsx(d,{price:a})," / 수량 : ",o,"개"]})]})]})};try{i.displayName="OrderCartItem",i.__docgenInfo={description:"",displayName:"OrderCartItem",props:{productName:{defaultValue:null,description:"",name:"productName",required:!0,type:{name:"string"}},productPrice:{defaultValue:null,description:"",name:"productPrice",required:!0,type:{name:"number"}},quantity:{defaultValue:null,description:"",name:"quantity",required:!0,type:{name:"number"}},imageUrl:{defaultValue:null,description:"",name:"imageUrl",required:!0,type:{name:"string"}}}}}catch{}export{i as O};
//# sourceMappingURL=OrderCartItem-84ef97cb.js.map
