(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-03fcb918"],{"02ae":function(e,t,n){"use strict";var a=n("7a23"),o=Object(a["L"])("data-v-497025b7");Object(a["w"])("data-v-497025b7");var c={class:"slot"};Object(a["u"])();var i=o((function(e,t,n,o,i,s){return Object(a["t"])(),Object(a["e"])("div",{class:["footnote",n.type]},[Object(a["i"])("div",c,[Object(a["A"])(e.$slots,"default",{},void 0,!0)]),Object(a["i"])("p",null,Object(a["D"])(n.message),1)],2)})),s={name:"Footnote",props:{type:String,message:String}};n("1c2b");s.render=i,s.__scopeId="data-v-497025b7";t["a"]=s},"189c":function(e,t,n){"use strict";n.r(t);var a=n("7a23"),o=Object(a["L"])("data-v-56f8a9f3");Object(a["w"])("data-v-56f8a9f3");var c={class:"component-communication"},i=Object(a["i"])("h1",null,"Component Communication",-1),s=Object(a["i"])("p",null,"We've seen that components can communicate from Parent to child through props, but what about more complex scenarios?",-1),l={class:"example"},b=Object(a["i"])("h2",null,"Vuex - The Global Store (Robust)",-1),u=Object(a["i"])("p",null,[Object(a["h"])(" Vuex is a separate library that allows you to access your entire application state from anywhere in the app. See the "),Object(a["i"])("code",null,"store"),Object(a["h"])(" folder for configuration examples. ")],-1),r=Object(a["i"])("b",null,"Global Message:",-1),m=Object(a["i"])("b",null,"Get Random Dad Joke from an API:",-1),j=Object(a["i"])("br",null,null,-1),p={class:"example"},O=Object(a["i"])("h2",null,"Child to Parent (Light weight)",-1),d=Object(a["i"])("p",null," If we want to send a mesage from this component to its parent (App.vue), we can emit a message with some data, and then listen for that message in the parent. ",-1),h=Object(a["i"])("p",null,[Object(a["h"])(" In the Child Component: "),Object(a["i"])("code",null," <button @click=\"$emit('myEventName', somePayload) /> ")],-1),f=Object(a["i"])("p",null,[Object(a["h"])(" In the Parent: "),Object(a["i"])("code",null,'<Component @myEventName="methodToHandle($event)"/>')],-1);Object(a["u"])();var g=o((function(e,t,n,o,g,v){var w=Object(a["B"])("Footnote");return Object(a["t"])(),Object(a["e"])("div",c,[i,s,Object(a["i"])("section",l,[b,u,Object(a["i"])("p",null,[r,Object(a["h"])(" "+Object(a["D"])(o.globalMessage),1)]),Object(a["i"])("button",{onClick:t[1]||(t[1]=function(e){return o.changeGlobalMessage("I was changed!")})},"Change message"),Object(a["i"])("p",null,[m,j,Object(a["h"])(" "+Object(a["D"])(o.joke),1)]),Object(a["i"])("button",{onClick:t[2]||(t[2]=function(){return o.getJoke&&o.getJoke.apply(o,arguments)})},"get Joke from API")]),Object(a["i"])("section",p,[O,d,h,f,Object(a["i"])(w,{type:"warning",message:"Your event handler must pass $event as an argument"}),Object(a["i"])("button",{onClick:t[3]||(t[3]=function(t){return e.$emit("myEventName",{message:"Emitted from Comunication Component. Displayed By App.vue"})})},"Emit message to Parent")])])})),v=n("5c40"),w=n("5502"),k=n("02ae"),y={components:{Footnote:k["a"]},setup:function(){var e=Object(w["b"])(),t=Object(v["d"])((function(){return e.state.globalMessage})),n=function(t){return e.commit("changeGlobalMessage",t)},a=function(){return e.dispatch("getJoke")},o=Object(v["d"])((function(){return e.state.joke}));return{globalMessage:t,changeGlobalMessage:n,joke:o,getJoke:a}}};n("c56f");y.render=g,y.__scopeId="data-v-56f8a9f3";t["default"]=y},"1adc":function(e,t,n){},"1c2b":function(e,t,n){"use strict";n("ec1b")},c56f:function(e,t,n){"use strict";n("1adc")},ec1b:function(e,t,n){}}]);
//# sourceMappingURL=chunk-03fcb918.f5033737.js.map