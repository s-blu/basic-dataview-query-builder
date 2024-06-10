import{u as f,D as I}from"./dqb-dataviewQuery-B512czBr.js";import{_ as p,c as $,w as Q,a as r,r as k,b as u,o,m as D,d as q,e as t,f as b,t as _,g as v,p as A,h as y,n as B,i as C,v as N,F as g,j as E}from"./index-Cr05IzbM.js";const j={props:{disabled:Boolean,to:String,disabledBecause:String},methods:{clicked(){this.$emit("clicked")}}},F=["title"];function L(e,n,s,h,c,i){const a=u("router-link");return!s.disabled&&s.to?(o(),$(a,{key:0,to:s.to||"",class:"button"},{default:Q(()=>[k(e.$slots,"default")]),_:3},8,["to"])):s.disabled?(o(),r("button",{key:2,class:"button",disabled:"true",title:s.disabledBecause},[k(e.$slots,"default")],8,F)):(o(),r("button",{key:1,class:"button",onClick:n[0]||(n[0]=(...l)=>i.clicked&&i.clicked(...l))},[k(e.$slots,"default")]))}const O=p(j,[["render",L]]),V={props:["hideSubtitle"],computed:{...D(f,["questionsLength","questions","currentQuestionIndex","currentQuestion","isLastQuestion"]),isFirstQuestion(){return this.currentQuestionIndex===0},currentAnswer(){return this.currentQuestion.selected||{}}},methods:{...q(f,["moveForward","moveBack"]),next(){this.isLastQuestion?this.$router.push("/result"):this.moveForward()||this.$router.push("/result")}},components:{DqbRouterButton:O}},x=e=>(A("data-v-52bddeb3"),e=e(),y(),e),M={class:"navigation columns is-mobile"},H={class:"column"},U=x(()=>t("span",{class:"icon"},[t("i",{class:"fa-solid fa-arrow-left"})],-1)),z=x(()=>t("span",null,"Previous",-1)),P={class:"questionprogress column is-centered is-hidden-touch"},R={key:0},T={class:"column"},G=x(()=>t("span",{class:"icon"},[t("i",{class:"fa-solid fa-arrow-right"})],-1));function J(e,n,s,h,c,i){const a=u("dqb-router-button");return o(),r("nav",M,[t("div",H,[b(a,{onClicked:n[0]||(n[0]=l=>e.moveBack()),disabled:i.isFirstQuestion,disabledBecause:"No previous questions available"},{default:Q(()=>[U,z]),_:1},8,["disabled"])]),t("div",P,[s.hideSubtitle?v("",!0):(o(),r("span",R,_(e.currentQuestion.subtitle),1))]),t("div",T,[b(a,{onClicked:n[1]||(n[1]=l=>i.next()),disabled:i.currentAnswer.dataview===void 0,disabledBecause:"Please select an answer first!",class:"is-pulled-right"},{default:Q(()=>[t("span",null,_(e.isLastQuestion?"Show result":"Next"),1),G]),_:1},8,["disabled"])])])}const K=p(V,[["render",J],["__scopeId","data-v-52bddeb3"]]),W={props:{answer:Object,index:Number,isSelected:Boolean,isMultiselect:Boolean},methods:{selectAnswer(){this.$emit("selected",this.index)}}},X=e=>(A("data-v-8be4d8f9"),e=e(),y(),e),Y={class:"answer"},Z={key:0,class:"fa-solid fa-check"},ee=["href"],te=X(()=>t("span",{class:"icon"},[t("i",{class:"fa-regular fa-circle-question"})],-1)),se=[te];function ne(e,n,s,h,c,i){return o(),r("div",Y,[t("span",{onClick:n[0]||(n[0]=(...a)=>i.selectAnswer&&i.selectAnswer(...a)),class:B(["icon answer-select",{multi:s.isMultiselect}])},[s.isSelected?(o(),r("i",Z)):v("",!0)],2),t("span",{onClick:n[1]||(n[1]=(...a)=>i.selectAnswer&&i.selectAnswer(...a)),class:"answerlabel"},_(s.answer.label),1),s.answer.readmore?(o(),r("a",{key:0,class:"button is-ghost readmore-btn",title:"Visit documentation",href:s.answer.readmore,target:"_blank"},se,8,ee)):v("",!0)])}const oe=p(W,[["render",ne],["__scopeId","data-v-8be4d8f9"]]),ie={props:{input:Object,variablemap:Object},data(){return{inputval:this.variablemap?this.variablemap[this.input.varname]??"":""}},methods:{inputChange(){this.$emit("selected",this.index)}},watch:{inputval(e,n){this.input.variabletype==="metadata"&&e.matchAll(/\s/g)&&(e=e.replace(/\s+/g,"-").toLowerCase()),this.$emit("updateExtra",this.input.varname,e)}}},ae={class:"field is-horizontal"},re={class:"field-label"},ce={class:"label"},le={class:"field-body"},de={class:"field"},ue={class:"control"},_e=["placeholder"];function pe(e,n,s,h,c,i){return o(),r("div",ae,[t("div",re,[t("label",ce,_(s.input.label),1)]),t("div",le,[t("div",de,[t("p",ue,[C(t("input",{class:"input","onUpdate:modelValue":n[0]||(n[0]=a=>c.inputval=a),placeholder:s.input.varname},null,8,_e),[[N,c.inputval,void 0,{trim:!0}]])])])])])}const he=p(ie,[["render",pe]]),me={props:{input:Object}},be={class:"answer-extra-hint message"},ve={key:0,class:"message-header"},fe={class:"message-body"};function we(e,n,s,h,c,i){return o(),r("div",be,[s.input.title?(o(),r("div",ve,[t("span",null,_(s.input.title),1)])):v("",!0),t("div",fe,_(s.input.message),1)])}const $e=p(me,[["render",we]]),ke={props:{question:Object,answer:Object},methods:{...q(f,["updateAnswerVariableMap"]),updateExtra(e,n){this.updateAnswerVariableMap(this.question,e,n)}},components:{AnswerExtraInput:he,AnswerExtraHint:$e}},Qe={class:"answeroption-extras"};function ge(e,n,s,h,c,i){const a=u("AnswerExtraInput"),l=u("AnswerExtraHint");return o(),r("div",Qe,[(o(!0),r(g,null,E(s.answer.extras,(d,w)=>{var m;return o(),r("div",{key:w,class:"extras"},[d.type==="input"?(o(),$(a,{key:0,input:d,variablemap:(m=s.question.selected)==null?void 0:m.variables,onUpdateExtra:i.updateExtra},null,8,["input","variablemap","onUpdateExtra"])):v("",!0),d.type==="hint"?(o(),$(l,{key:1,input:d},null,8,["input"])):v("",!0)])}),128))])}const qe=p(ke,[["render",ge],["__scopeId","data-v-b05062e1"]]),Ae={components:{DqbAnsweroption:oe,DqbAnsweroptionExtras:qe},computed:{...D(f,["questions","currentQuestion"])},methods:{...q(f,["setSelected"]),selectAnswer(e,n){this.setSelected(this.currentQuestion,n,e)}}},ye=e=>(A("data-v-56b6a1af"),e=e(),y(),e),xe={class:"columns is-multiline"},Se={class:"column is-full"},De={class:"questionblock"},Ee=ye(()=>t("div",{class:"header"},"Question",-1)),Ie={class:"question"},Be={class:"answerblock column is-full"},Ce={class:"header"},Ne={class:"columns"},je={class:"answeroption-extras column is-full"};function Fe(e,n,s,h,c,i){var d;const a=u("DqbAnsweroption"),l=u("DqbAnsweroptionExtras");return o(),r(g,null,[t("div",xe,[t("div",Se,[t("div",De,[Ee,t("div",Ie,_(e.currentQuestion.question),1)])]),t("div",Be,[t("div",Ce,_(e.currentQuestion.multiselect?"Choose one or multiple":"Choose one"),1),(o(!0),r(g,null,E(e.currentQuestion.answers,(w,m)=>{var S;return o(),r("div",{class:"answers",key:m},[b(a,{answer:w,index:m,isSelected:((S=e.currentQuestion.selected)==null?void 0:S.index)===m,onSelected:Me=>i.selectAnswer(w,m)},null,8,["answer","index","isSelected","onSelected"])])}),128))])]),t("div",Ne,[t("div",je,[e.currentQuestion.selected?(o(),$(l,{key:0,question:e.currentQuestion,answer:e.currentQuestion.answers[(d=e.currentQuestion.selected)==null?void 0:d.index]},null,8,["question","answer"])):v("",!0)])])],64)}const Le=p(Ae,[["render",Fe],["__scopeId","data-v-56b6a1af"]]),Oe={components:{Navigation:K,Question:Le,DataviewQuery:I}};function Ve(e,n,s,h,c,i){const a=u("Navigation"),l=u("Question"),d=u("DataviewQuery");return o(),r("main",null,[b(a),b(l),b(a,{"hide-subtitle":"true"}),b(d,{showHighlight:"true",class:"dataviewquery"})])}const ze=p(Oe,[["render",Ve],["__scopeId","data-v-19d721cf"]]);export{ze as default};
