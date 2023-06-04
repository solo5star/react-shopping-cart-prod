import{j as i}from"./jsx-runtime-94f6e698.js";import{l as a,i as t}from"./styled-components.browser.esm-10889fc4.js";const s=a`
  50% {
    transform: scale(1);
  }

  to {
    transform: scale(2);
  }
`,l=t.div`
  display: inline-flex;
  gap: 0.5em;
  padding: 0 0.5em;
  vertical-align: middle;
`,o=t.div`
  width: 0.4em;
  height: 0.4em;
  background: ${n=>n.$color};
  border-radius: 50%;

  animation: ${s} 0.4s;
  animation-delay: ${n=>n.$index*.15}s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
`,r=n=>{const{color:e="#333333"}=n;return i.jsxs(l,{children:[i.jsx(o,{$index:0,$color:e}),i.jsx(o,{$index:1,$color:e}),i.jsx(o,{$index:2,$color:e})]})};try{r.displayName="Spinner",r.__docgenInfo={description:"",displayName:"Spinner",props:{color:{defaultValue:null,description:"",name:"color",required:!1,type:{name:"string"}}}}}catch{}export{r as S};
//# sourceMappingURL=Spinner-e4c9f8eb.js.map
