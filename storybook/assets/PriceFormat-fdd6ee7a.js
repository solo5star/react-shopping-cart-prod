import{j as n}from"./jsx-runtime-94f6e698.js";import{i as a}from"./styled-components.browser.esm-10889fc4.js";const o=a.span`
  &::after {
    content: '${e=>e.$unit}';
    margin-left: 0.2em;
  }
`,r=e=>{const{price:t,unit:i="원"}=e;return n.jsx(o,{$unit:i,children:t.toLocaleString("kr")})};try{r.displayName="PriceFormat",r.__docgenInfo={description:"",displayName:"PriceFormat",props:{price:{defaultValue:null,description:"",name:"price",required:!0,type:{name:"number"}},unit:{defaultValue:null,description:"",name:"unit",required:!1,type:{name:"string"}}}}}catch{}export{r as P};
//# sourceMappingURL=PriceFormat-fdd6ee7a.js.map
