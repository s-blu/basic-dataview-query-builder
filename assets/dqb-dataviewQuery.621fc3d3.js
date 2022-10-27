import{k as y,m as b,_ as g,r as w,o as u,b as m,e as d,F as v,j as k,c as q,w as x,n as I,t as O,g as T,p as A,h as R}from"./index.dc3a27a5.js";const B=[{question:"In which form you want to see the results of your query?",subtitle:"Query Type",answers:[{label:"I want to have a LIST of file links matching my query",dataview:"LIST",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#list-queries"},{label:"I want to have a TABLE that presents my results as file links with additional data for each hit",dataview:"TABLE {{tablecolumns}}",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#table-queries",extras:[{type:"hint",message:"Please give a comma separated list of meta data you would like to see in your table alongside the file link of your hit (or the group key, if you later decide to group). "},{type:"hint",title:"Meta data keys with spaces",message:"If your meta data key contain spaces, you cannot use it as-is. It won't get recognized. Please replace all spaces with dashes and write it lower case, i.e. if your key is 'Todays Good Deeds', use 'todays-good-deeds' in dataview queries."},{type:"input",label:"Table columns (comma separated)",varname:"tablecolumns"}]},{label:"I want to have an interactive TASK list that summarises my tasks",dataview:"TASK",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#task-queries"},{type:"input",label:"I want to see a CALENDAR which shows each hit as a dot",dataview:"CALENDAR {{datefield}}",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#calendar-queries",extras:[{type:"hint",message:"Each page that should be displayed with a CALENDAR view needs a valid date meta data field. Otherwise, the query won't render. Good picks are i.e. file.ctime or file.mtime. The date meta data field determines on which day the note gets displayed."},{type:"input",label:"Which date field should be used?",variabletype:"metadata",varname:"datefield"}]}]},{question:"Do you want to include all notes in your vault or only those from a particular folder/tag/link?",subtitle:"Page sources",answers:[{label:"I want to query all notes",dataview:""},{label:"I only want to query notes that have a particular tag",dataview:"FROM #{{tagName}}",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#from",extras:[{type:"input",label:"Name of the tag: #",varname:"tagName"}]},{label:"I only want to query notes inside a specific root-level folder (and its subfolders)",dataview:'FROM "{{folderName}}"',readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#from",extras:[{type:"input",label:"Name of the folder",varname:"folderName"}]},{label:"I only want to query notes inside a specific subfolder",dataview:'FROM "{{path/to/folderName}}"',readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#from",extras:[{type:"hint",message:"Give the path starting from and exclusive your vault folder, separated by slashes (/)"},{type:"input",label:"Path to folder from vault root",varname:"path/to/folderName"}]},{label:"I only want to query notes that link to my current note",dataview:"FROM [[]]",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#from"},{label:"I only want to query notes that my current note links to",dataview:"FROM outgoing([[]])",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#from"},{label:"I only want to query notes that link to a specific note",dataview:"FROM [[{{NoteName}}]]",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#from",extras:[{type:"input",label:"Name of note",varname:"NoteName"}]},{label:"I only want to query notes that are linked to from a specific note",dataview:"FROM outgoing([[{{NoteName}}]])",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#from",extras:[{type:"input",label:"Name of note",varname:"NoteName"}]}]},{question:"Do you want to filter your results further based on one of your metadata fields?",subtitle:"Filter pages",answers:[{label:"No, I want to see all notes returned by my FROM statement",dataview:""},{label:"I only want to see notes where a particular field exists",dataview:"WHERE {{nameOfField}}",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#where",extras:[{type:"input",label:"Name of field",varname:"nameOfField"}]},{label:"I only want to see notes where a particular field equals a certain value (number, string, date, etc)",dataview:"WHERE {{nameOfField}} =",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#where",extras:[{type:"input",label:"Name of field",variabletype:"metadata",varname:"nameOfField"}]},{label:"I only want to see notes where a particular field contains certain value (inside an array, or as part of a string)",dataview:'WHERE contains({{nameOfMetadata}}, "{{value}}")',readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/functions/#containsobjectliststring-value",extras:[{type:"hint",message:"Using the contains function allows you to either search for a substring in texts, i.e. it'll find 'Lorem ipsum' if you search for 'Lor' or to search a multi-value field for one element. Hit the ? on the answer to read more about contains()."},{type:"input",label:"Name of field",variabletype:"metadata",varname:"nameOfMetadata"},{type:"input",label:"Value to check for",varname:"value"}]}]},{question:"Against which value type you want to compare?",subtitle:"Field Type Compare",condition:"WHERE =",appendix:".-1",answers:[{label:"I want to compare to a number",dataview:"{{value}}",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/literals/",extras:[{type:"input",label:"Number to check against",varname:"value"}]},{label:"I want to compare to a text value",dataview:'"{{value}}"',readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/literals/",extras:[{type:"input",label:"Text to check against",varname:"value"}]},{label:"I want to compare to a date",dataview:'date("{{value}}")',readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/literals/#dates",extras:[{type:"hint",message:"Specify the date you want to compare against in ISO format, i.e. 2020-05-30 or 2020-12-24T18:00. Click the ? icon on the answer option to see more input possibilities."},{type:"input",label:"Date to check against",varname:"value"}]},{label:"I want to compare to a note link",dataview:"[[{{value}}]]",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/literals/",extras:[{type:"input",label:"Name of file to check against",varname:"value"}]}]},{question:"How do you want the results sorted?",subtitle:"Sorting",answers:[{label:"Ascending after file path or group key, if I choose to group next (default behaviour)",dataview:""},{label:"Based on the note name",dataview:"SORT file.name",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#sort"},{label:"Based on the note's creation date",dataview:"SORT file.ctime",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#sort"},{label:"Based on my own metadata field",dataview:"SORT {{nameOfField}}",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/functions/#sort",extras:[{type:"input",label:"Field name to sort after",variabletype:"metadata",varname:"nameOfField"}]},{label:"Based on my own metadata field, in descending order",dataview:"SORT {{nameOfField}} desc",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/functions/#sort",extras:[{type:"input",label:"Field name to sort after",variabletype:"metadata",varname:"nameOfField"}]}]},{question:"In which direction you want your results sorted?",subtitle:"Sort Direction",condition:"SORT",appendix:".-1",answers:[{label:"Ascending (A-Z, 0-9, oldest to newest)",dataview:"ASC",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#sort"},{label:"Descending (Z-A, 9-0, newest to oldest)",dataview:"DESC",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#sort"}]},{question:"Do you want similar results grouped together based on one of their metadata values?",subtitle:"Grouping",condition:"-TASK",answers:[{label:"No, I want one result line per note",dataview:""},{label:"Group based on the folder they belong to.",dataview:"GROUP BY file.folder",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group",extras:[{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."}]},{label:"Group based on the tags they have.",dataview:"FLATTEN file.etags AS tags GROUP BY tags",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group",extras:[{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."},{type:"hint",message:"The tags of a file are a multivalue field. When grouping after a multivalue field, you need to FLATTEN it first, so that every single value of the multivalue field becomes its own group."}]},{label:"Group based on the month they were created.",dataview:'GROUP BY dateformat(file.ctime, "yyyy-MM")',readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group",extras:[{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."}]},{label:"Group based on my own single value metadata field",dataview:"GROUP BY {{nameOfField}}",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/functions/#group",extras:[{type:"input",label:"Field name to group after",variabletype:"metadata",varname:"nameOfField"},{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."}]},{label:"Group based on my own multi value metadata field",dataview:"FLATTEN {{nameOfField}} AS groups GROUP BY groups",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group",extras:[{type:"input",label:"Field name to group after",variabletype:"metadata",varname:"nameOfField"},{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."},{type:"hint",message:"When grouping after a multivalue field, you need to FLATTEN it first, so that every single value of the multivalue field becomes its own group."}]}]},{question:"Do you want similar results grouped together based on one of their metadata values?",subtitle:"Grouping",condition:"TASK",answers:[{label:"No, I want one result line per note",dataview:""},{label:"Yes, based on the file they came from",dataview:"GROUP BY file.link",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group",extras:[{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."}]},{label:"Group based on the folder they belong to.",dataview:"GROUP BY file.folder",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group",extras:[{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."}]},{label:"Group based on the tags they have.",dataview:"FLATTEN file.etags AS tags GROUP BY tags",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group",extras:[{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."},{type:"hint",message:"The tags of a file are a multivalue field. When grouping after a multivalue field, you need to FLATTEN it first, so that every single value of the multivalue field becomes its own group."}]},{label:"Group based on the month they were created.",dataview:'GROUP BY dateformat(file.ctime, "yyyy-MM")',readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group",extras:[{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."}]},{label:"Group based on my own single value metadata field",dataview:"GROUP BY {{nameOfField}}",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/functions/#group",extras:[{type:"input",label:"Field name to group after",variabletype:"metadata",varname:"nameOfField"},{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."}]},{label:"Group based on my own multi value metadata field",dataview:"FLATTEN {{nameOfField}} AS groups GROUP BY groups",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group",extras:[{type:"input",label:"Field name to group after",variabletype:"metadata",varname:"nameOfField"},{type:"hint",message:"After grouping, you need to prepend a 'rows.' to all fields you want to have as output and all data commands that come after GROUP BY. The Query Builder does take care of that for you."},{type:"hint",message:"When grouping after a multivalue field, you need to FLATTEN it first, so that every single value of the multivalue field becomes its own group."}]}]},{question:"Do you want every result, or just the first few matches?",subtitle:"Set a limit",answers:[{label:"Show me everything",dataview:""},{label:"Just the first few matching results",dataview:"LIMIT {{numberOfResults}}",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#limit",extras:[{type:"input",label:"Limit count",varname:"numberOfResults"}]}]},{question:"Do you want to see an additional information alongside your file links on your LIST?",condition:"LIST -GROUP",appendix:"0",subtitle:"Additional List Field",answers:[{label:"No, I only want to see my file links",dataview:"",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#list-queries"},{label:"Show a meta data value alongside the file links",dataview:"{{listfield}}",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#list-queries",extras:[{type:"input",variabletype:"metadata",label:"Meta data to output",varname:"listfield"}]}]},{question:"Do you want to see an additional information alongside your groups on your LIST?",condition:"LIST GROUP",appendix:"0",subtitle:"Additional List Field",answers:[{label:"No, I only want to see my groups",dataview:"",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group"},{label:"I want to see all note links belonging to this group",dataview:"file.link",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group"},{label:"I want to see all note names belonging to this group",dataview:"file.name",readmore:"https://blacksmithgu.github.io/obsidian-dataview/query/queries/#group"}]}];function F(e){const a={mandatory:[],forbidden:[]};return!e||e.trim()===""||e.split(" ").forEach(i=>{let r="mandatory";i=i.trim(),i.startsWith("-")&&(r="forbidden",i=i.substring(1));const o=i.includes("~")?i.split("~"):i;a[r].push(o)}),a}function h(e,a){if(!a)return!0;const t=F(a),i=e.reduce((o,n)=>`${o} ${n}`,"");for(let o=0;o<t.forbidden.length;o++)if(r(t.forbidden[o]))return!1;for(let o=0;o<t.mandatory.length;o++)r(t.mandatory[o])&&(t.mandatory.splice(o,1),o--);return t.mandatory.length===0;function r(o){let n=!1;return Array.isArray(o)?n=o.some(s=>i.includes(s)):n=i.includes(o),n}}function c(e,a=!0){if(!e.selected)return e;if(e.appendix&&a)return e.selected.dataview="",e;if(e.selected.dataview=e.selected.rawDataview,!e.selected.variables)return e;const t=e.selected.dataview.matchAll(/{{([^}]+)?}}/g);for(const i of t){const r=e.selected.variables[i[1]];r&&(e.selected.dataview=e.selected.dataview.replace(i[0],r))}return e}function Q(e){return!e.selected||!e.selected.appendixDataviews||e.selected.appendixDataviews&&e.selected.appendixDataviews.forEach(a=>{e.selected.dataview+=" "+a}),e}function P(e,a){!e||e.forEach((t,i)=>{var o;if(!t.appendix||!t.selected)return;const r=f(t,i);if(t.condition&&!h(a,t.condition)){(o=e[r].selected)!=null&&o.appendixDataviews&&(e[r].selected.appendixDataviews[i]=null);return}c(t,!1),e[r].selected&&(e[r].selected.appendixDataviews||(e[r].selected.appendixDataviews=[]),e[r].selected.appendixDataviews[i]=t.selected.dataview)})}function f(e,a){if(!(e!=null&&e.appendix))return a;let t;if(e.appendix.startsWith(".")){const i=Number(e.appendix.substring(1));t=a+i}else t=Number(e.appendix);return t}function N(e){let a;if(e.forEach((i,r)=>{var o;(o=i.selected)!=null&&o.dataview.includes("GROUP BY")&&(a=r)}),!a)return;t(e[0]);for(let i=a+1;i<e.length;i++)t(e[i]);function t(i){if(!i.selected)return;const r=i.selected.dataview.split(","),o=r[0].split(" ")[0];if(r[0]=r[0].replace(o,""),o==="LIMIT")return;const n=[];for(let s=0;s<r.length;s++){r[s]=r[s].trim();const l=r[s]&&!r[s].startsWith("rows.")?"rows.":"";n.push(l+r[s])}i.selected.dataview=o+n.reduce((s,l)=>`${s}${s?",":""} ${l}`,"")}}const G=y("questionsStore",{state:()=>({questions:B,currentQuestionIndex:0}),getters:{currentQuestion:e=>e.questions[e.currentQuestionIndex],queryParts:e=>e.questions.filter(a=>{var t;return(t=a.selected)==null?void 0:t.dataview}).map(a=>{var t;return(t=a.selected)==null?void 0:t.dataview}),questionsLength:e=>e.questions.length,isLastQuestion:e=>{var t;if(!e.questions)return!1;if(e.currentQuestionIndex+1===e.questionsLength)return!0;let a=e.currentQuestionIndex;for(;a<e.questionsLength-1&&!h(e.queryParts,(t=e.questions[a])==null?void 0:t.condition);)a++;return a+1===e.questionsLength},computedQueryParts:e=>{P(e.questions,e.queryParts);const a=e.questions.map(t=>c(t)).map(t=>Q(t));return N(a),a.map(t=>{var i;return((i=t.selected)==null?void 0:i.dataview)||""})},computedQuery:e=>e.computedQueryParts.reduce((a,t)=>t?`${a}${a?`
`:""}${t}`:a,"")},actions:{moveForward(){var a;let e=this.currentQuestionIndex+1;for(;!h(this.queryParts,(a=this.questions[e])==null?void 0:a.condition);)e++;return e<this.questionsLength?(this.currentQuestionIndex=e,!0):!1},moveBack(){if(this.currentQuestionIndex===0)return;let e=this.currentQuestionIndex-1;for(;!h(this.queryParts,this.questions[e].condition);)e--;this.currentQuestionIndex=e},resetAppState(){this.questions.forEach(e=>e.selected=void 0),this.currentQuestionIndex=0},setSelected(e,a,t){e.selected={index:a,answer:t,dataview:t.dataview,rawDataview:t.dataview}},updateAnswerVariableMap(e,a,t){var i;e.selected||console.error("Cannot update variable map for non existing selected answer",e),(i=e.selected)!=null&&i.variables||(e.selected.variables={}),e.selected.variables[a]=t}}}),S={props:{showHighlight:String},computed:{...b(G,["queryParts","computedQuery","computedQueryParts","currentQuestionIndex","currentQuestion"]),queryString(){return`\`\`\`dataview
${this.computedQuery.trim()}
\`\`\``},queryParts(){return this.showHighlight?this.computedQueryParts:this.computedQueryParts.filter(e=>e)},activeIndex(){return f(this.currentQuestion,this.currentQuestionIndex)}},methods:{copyQuery(){navigator.clipboard.writeText(this.queryString)}}};const p=e=>(A("data-v-e8374c66"),e=e(),R(),e),L={class:"dataview-query"},_=p(()=>d("span",{class:"icon"},[d("i",{class:"fa-regular fa-copy"})],-1)),D=[_],E=p(()=>d("p",null,"```dataview",-1)),U=p(()=>d("p",null,"```",-1));function Y(e,a,t,i,r,o){const n=w("container");return u(),m("div",L,[d("button",{class:"button is-ghost copybtn",title:"Copy Query",onClick:a[0]||(a[0]=s=>o.copyQuery())},D),E,(u(!0),m(v,null,k(o.queryParts,(s,l)=>(u(),q(n,{key:l},{default:x(()=>[s?(u(),m("p",{key:0,class:I({active:o.activeIndex===l&&t.showHighlight})},O(s),3)):T("",!0)]),_:2},1024))),128)),U])}const C=g(S,[["render",Y],["__scopeId","data-v-e8374c66"]]);export{C as D,G as u};
