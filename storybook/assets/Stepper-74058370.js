import{r as n,i as l,j as e}from"./styled-components.browser.esm-65bc2296.js";const x=""+new URL("arrow-down-0c15572d.svg",import.meta.url).href,h=""+new URL("arrow-up-ad3b06b0.svg",import.meta.url).href,f={small:n({width:"70px",height:"26px",fontSize:"12px"}),large:n({width:"120px",height:"60px",fontSize:"24px"})},v=l.div`
  ${t=>f[t.$variant]}

  display: flex;
  align-items: stretch;
`,g=l.input`
  flex: 1;
  width: 100%;
  border: 1px solid #e5e5e5;
  text-align: center;
  font-size: 1em;

  outline: none;
`,y={small:n({width:"24px","& > img":{width:"5px"}}),large:n({width:"48px","& > img":{width:"8px"}})},d=l.button`
  ${t=>y[t.$variant]}

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50%;
  border: 1px solid #e5e5e5;
  cursor: pointer;
`,c=t=>{const{variant:r="small",min:s,max:o,value:u,onChange:a}=t,p=m=>()=>{const i=u+(m==="increase"?1:-1);s!==void 0&&i<s||o!==void 0&&i>o||a==null||a(i)};return e.jsxs(v,{$variant:r,children:[e.jsx(g,{value:u,readOnly:!0}),e.jsxs("div",{children:[e.jsx(d,{$variant:r,onClick:p("increase"),children:e.jsx("img",{alt:"증가",src:h})}),e.jsx(d,{$variant:r,onClick:p("decrease"),children:e.jsx("img",{alt:"감소",src:x})})]})]})};try{c.displayName="Stepper",c.__docgenInfo={description:"",displayName:"Stepper",props:{variant:{defaultValue:null,description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"large"'}]}},min:{defaultValue:null,description:"",name:"min",required:!1,type:{name:"number"}},max:{defaultValue:null,description:"",name:"max",required:!1,type:{name:"number"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"number"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((value: number) => void)"}}}}}catch{}export{c as S};
//# sourceMappingURL=Stepper-74058370.js.map
