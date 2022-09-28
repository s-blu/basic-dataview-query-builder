import{f as d,m as r,_ as u,o as a,c as s,F as c,e as w,t as v,p as h,d as y,a as o}from"./index.d6cdb432.js";const m=[{question:"In which form you want to see the results of your query?",answers:[{label:"I want to have a LIST of file links matching my query",dataview:"LIST"},{label:"I want to have a TABLE that presents my result file links and additional data for each hit",dataview:"TABLE"},{label:"I want to search and find TASKs",dataview:"TASK"},{type:"input",label:"I want to see a CALENDAR which indicates each hit with a dot",dataview:"CALENDAR {{datefield}}",inputs:[{label:"Each of your pages need to have a date field, otherwise the CALENDAR won't render. Which date field should be used?",varname:"datefield",preset:"file.ctime"}]}],selected:{dataview:""}},{question:"Do you want to query all notes in your vault or only some? What does these 'some' have in common?",answers:[{label:"I want to query all notes",dataview:""},{label:"I want to query some notes which have a tag",dataview:"FROM #{{tagName}}"},{label:"I want to query notes in a folder on root",dataview:'FROM "{{folderName}}"'},{label:"I want to query notes in a subfolder",dataview:'FROM "{{path/to/folderName}}"'},{label:"I want to query notes that are linking to my current note",dataview:"FROM [[]]"},{label:"I want to query notes my current note is linking to",dataview:"FROM outgoing([[]])"}],selected:{dataview:""}},{question:"Do you want to filter your notes further based on meta data?",answers:[{label:"No, I want to see all notes my FROM is giving me",dataview:""},{label:"I want to see only notes that have a meta data set",dataview:"WHERE {{nameOfMetadata}}"},{label:"I want to see only notes where my (single value) meta data has a certain value",dataview:"WHERE {{nameOfMetadata}} = {{value}}"},{label:"I want to see only notes where my (multi value) meta data contains a certain value",dataview:"WHERE contains({{nameOfMetadata}}, {{value}})"}],selected:{dataview:""}}],p=d("questionsStore",{state:()=>({questions:m}),getters:{queryParts:e=>e.questions.filter(t=>t.selected).map(t=>t.selected.dataview),lastQuestionIndex:e=>e.questions.length-1},actions:{updateQuestion(e,t){this.questions[e]=t}}}),f={computed:{...r(p,["queryParts"])}};const n=e=>(h("data-v-d6208d12"),e=e(),y(),e),_={class:"dataview-query"},q=n(()=>o("div",null,"```dataview",-1)),I=n(()=>o("div",null,"```",-1));function b(e,t,g,E,R,S){return a(),s("div",_,[q,(a(!0),s(c,null,w(e.queryParts,(i,l)=>(a(),s("div",{class:"querypart",key:l},v(i),1))),128)),I])}const D=u(f,[["render",b],["__scopeId","data-v-d6208d12"]]);export{D,p as u};