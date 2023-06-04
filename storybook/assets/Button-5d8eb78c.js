import{j as l}from"./jsx-runtime-94f6e698.js";import{r as t,i as d}from"./styled-components.browser.esm-10889fc4.js";const u={small:t`
    padding: 16px 32px;
    font-size: 16px;
  `,medium:t`
    padding: 24px 48px;
    font-size: 24px;
  `},c={contained:t`
    background: #333333;
    color: white;

    &[disabled] {
      background: #666666;
    }
  `,text:t`
    background: transparent;
    color: black;
  `},p=d.button`
  ${e=>u[e.$size]}
  ${e=>c[e.$variant]}

  &[disabled] {
    cursor: not-allowed;
  }
`,a=e=>{const{children:n,size:i="medium",variant:o="contained",disabled:r=!1,...s}=e;return l.jsx(p,{$size:i,$variant:o,disabled:r,...s,children:n})};try{a.displayName="Button",a.__docgenInfo={description:"",displayName:"Button",props:{size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'}]}}}}}catch{}export{a as B};
//# sourceMappingURL=Button-5d8eb78c.js.map
