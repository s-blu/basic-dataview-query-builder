import{u as b,D}from"./dqb-dataviewQuery.4d958651.js";import{m as $,_ as m,r as _,o as c,c as i,a as s,b as r,w,t as u,p as g,d as y,e as q,n as S,F as x,f as k,D as Q}from"./index.d24e4d71.js";const N={computed:{...$(b,["questionsLength"]),next(){const e=Number(this.$route.params.id);return e<this.questionsLength?`/question/${e+1}`:"/result"},previous(){const e=Number(this.$route.params.id);return e===1?"":`/question/${e-1}`}}};const v=e=>(g("data-v-c4392530"),e=e(),y(),e),A={class:"navigation columns"},I={class:"column is-2"},C=v(()=>s("span",{class:"icon"},[s("i",{class:"fa-solid fa-arrow-left"})],-1)),V=v(()=>s("span",null,"Previous",-1)),B={class:"questionprogress column is-centered"},F={class:"column is-2"},L=v(()=>s("span",{class:"icon"},[s("i",{class:"fa-solid fa-arrow-right"})],-1));function M(e,o,a,p,h,t){const n=_("router-link");return c(),i("nav",A,[s("div",I,[r(n,{to:t.previous,class:"button"},{default:w(()=>[C,V]),_:1},8,["to"])]),s("div",B," Question "+u(Number(e.$route.params.id))+" / "+u(e.questionsLength),1),s("div",F,[r(n,{to:t.next,class:"button is-pulled-right"},{default:w(()=>[s("span",null,u(t.next==="/result"?"Show result":"Next"),1),L]),_:1},8,["to"])])])}const j=m(N,[["render",M],["__scopeId","data-v-c4392530"]]),z={props:{answer:Object,index:Number,isSelected:Boolean,isMultiselect:Boolean},methods:{selectAnswer(){this.$emit("selected",this.index)}}};const E={class:"answer"},O={key:0,class:"fa-solid fa-check"},P=["href"],G=s("span",{class:"icon"},[s("i",{class:"fa-regular fa-circle-question"})],-1),H=[G];function J(e,o,a,p,h,t){return c(),i("div",E,[s("span",{onClick:o[0]||(o[0]=(...n)=>t.selectAnswer&&t.selectAnswer(...n)),class:S(["icon answer-select",{multi:a.isMultiselect}])},[a.isSelected?(c(),i("i",O)):q("",!0)],2),s("span",{onClick:o[1]||(o[1]=(...n)=>t.selectAnswer&&t.selectAnswer(...n)),class:"answerlabel"},u(a.answer.label),1),a.answer.readmore?(c(),i("a",{key:0,class:"button is-ghost readmore-btn",title:"Visit documentation",href:a.answer.readmore,target:"_blank"},H,8,P)):q("",!0)])}const K=m(z,[["render",J]]),R={components:{DqbAnsweroption:K},computed:{...$(b,["questions"]),question(){return this.questions[this.$route.params.id-1]}},methods:{selectAnswer(e,o){this.question.selected={index:o,dataview:e.dataview}}}};const T=e=>(g("data-v-23a8292f"),e=e(),y(),e),U={class:"columns"},W={class:"questionblock column is-half"},X=T(()=>s("div",{class:"header"},"Question",-1)),Y={class:"question"},Z={class:"answerblock column is-half"},ee={class:"header"};function se(e,o,a,p,h,t){const n=_("DqbAnsweroption");return c(),i("div",U,[s("div",W,[X,s("div",Y,u(t.question.question),1)]),s("div",Z,[s("div",ee,u(t.question.multiselect?"Choose one or multiple":"Choose one"),1),(c(!0),i(x,null,k(t.question.answers,(d,l)=>(c(),i("div",{class:"answers",key:l},[r(n,{answer:d,index:l,isSelected:t.question.selected.index===l,isMultiselect:t.question.multiselect,onSelected:f=>t.selectAnswer(d,l)},null,8,["answer","index","isSelected","isMultiselect","onSelected"])]))),128))])])}const te=m(R,[["render",se],["__scopeId","data-v-23a8292f"]]),ne={components:{Navigation:j,Question:te,DataviewQuery:D,DqbFooter:Q}};function oe(e,o,a,p,h,t){const n=_("Navigation"),d=_("Question"),l=_("DataviewQuery"),f=_("DqbFooter");return c(),i(x,null,[s("main",null,[r(n),r(d,{class:"question"}),r(l,{class:"dataviewquery"})]),r(f)],64)}const ie=m(ne,[["render",oe],["__scopeId","data-v-382f0248"]]);export{ie as default};