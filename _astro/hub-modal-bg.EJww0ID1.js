import{j as e}from"./jsx-runtime.CLpGMVip.js";import{r as s}from"./index.BL7xzsR_.js";/* empty css                       */function h(){const[l,n]=s.useState(!0),[o,a]=s.useState(0);function c(){n(!0),document.getElementById("my_modal_3").showModal()}function i(){o==2?a(0):a(o+1)}return s.useEffect(()=>{console.log("starting fetch");async function r(){try{const t=await fetch("https://caas.api.godaddy.com/v1/prompts",{method:"POST",headers:{accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({prompt:"write a poem",provider:"openai_chat",providerOptions:{model:"gpt-3.5-turbo"}})});if(!t.ok)throw new Error(`HTTP error! status: ${t.status}`);const d=await t.json();console.log("Success:",d)}catch(t){console.error("Error during fetch:",t)}}r(),console.log("fetch complete")},[]),e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"flex justify-center items-center h-screen w-full",children:e.jsx("button",{className:"btn rounded-full px-6 font-normal",onClick:c,children:"Ask Airo"})}),l&&e.jsx("dialog",{className:"modal modal-open",id:"my_modal_3",children:e.jsx("div",{className:"modal-box w-11/12 h-11/12 max-h-11/12 max-w-5xl relative p-0 overflow-hidden modal-bg",children:e.jsx("form",{method:"dialog",children:e.jsxs("div",{className:"flex flex-row justify-end items-center fixed p-2 w-full",children:[e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost text-gray-300",onClick:i,children:o==0?"0":o==1?"1":"2"}),e.jsx("button",{className:"btn btn-sm btn-circle btn-ghost",onClick:()=>n(!1),children:"✕"})]})})})})]})}export{h as default};
