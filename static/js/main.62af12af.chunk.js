(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e){e.exports=[{id:1,name:"Picture1",image:"./images/1.png",answered:!1},{id:2,name:"Picture2",image:"./images/2.jpg",answered:!1},{id:3,name:"Picture3",image:"./images/3.jpg",answered:!1},{id:4,name:"Picture4",image:"./images/4.jpg",answered:!1},{id:5,name:"Picture5",image:"./images/5.jpg",answered:!1},{id:6,name:"Picture6",image:"./images/6.jpg",answered:!1},{id:7,name:"Picture7",image:"./images/7.jpg",answered:!1},{id:8,name:"Picture8",image:"./images/8.jpg",answered:!1},{id:9,name:"Picture9",image:"./images/9.jpg",answered:!1},{id:10,name:"Picture10",image:"./images/10.jpg",answered:!1},{id:11,name:"Picture11",image:"./images/11.jpg",answered:!1},{id:12,name:"Picture12",image:"./images/12.jpg",answered:!1},{id:13,name:"Picture13",image:"./images/13.jpg",answered:!1},{id:14,name:"Picture14",image:"./images/14.png",answered:!1},{id:15,name:"Picture15",image:"./images/15.jpg",answered:!1}]},,,,,,,,,function(e,t,n){e.exports=n(23)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.495d93cc.svg"},function(e,t,n){},function(e,t,n){},function(e,t,n){},,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),c=n(4),r=n.n(c),o=(n(15),n(5)),s=n(6),l=n(8),u=n(7),m=n(9);n(16),n(17);var d=function(e){return e.counter,i.a.createElement("div",{class:"text-center"},i.a.createElement("nav",{class:"navv"},i.a.createElement("h1",{className:"title"},"PICKLERICK!!")),i.a.createElement("br",null),i.a.createElement("h3",{className:"counter"},"Counter: ",e.count),i.a.createElement("div",{className:"instructions"},i.a.createElement("h3",null,"Instructions: In this game you must click all the pictures without clicking any repeats to win the game!")))};n(18);var g=function(e){var t={display:"".concat(e.show)};return i.a.createElement("div",{id:"congratsModal",className:"modal",style:t},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h2",null,"Congratulations!"),i.a.createElement("span",{className:"close",onClick:e.onHide},"\xd7")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("p",null,"Well done! You clicked all of them!"),i.a.createElement("p",null,"Would you like to restart the game?"),i.a.createElement("button",{className:"yes",onClick:e.restart},"Sure"))))};n(19);var h=function(e){"".concat(e.showInput);var t=e.pictures.map(function(t){return i.a.createElement("div",{className:"card",key:t.id},i.a.createElement("img",{className:"picture card-img-top",alt:t.name,src:t.image,onClick:function(){return e.handleIncrement(t.id)}}))});return i.a.createElement("div",{className:"imgArea"},t)},p=n(1),w=n(2),f=n.n(w),v=(n(22),function(e){function t(){var e,n;Object(o.a)(this,t);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(n=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={count:0,pictures:p,alreadyClicked:[],showModal:"none",showInput:"none",counter:"fixed",input:"",numberCorrect:0},n.handleIncrement=function(e){n.state.alreadyClicked.includes(p[e-1])?n.setState({count:0,pictures:f.a.shuffle(p),alreadyClicked:[]}):n.state.count<14?(n.state.alreadyClicked.push(p[e-1]),n.setState({count:n.state.count+1,pictures:f.a.shuffle(p)})):n.state.count>13&&n.setState({showModal:"block",counter:"absolute",count:15})},n.closeModal=function(){n.setState({showModal:"none"})},n.restart=function(){n.setState({count:0,pictures:p,alreadyClicked:[],showModal:"none",showInput:"none",counter:"fixed",input:"",numberCorrect:0})},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement(d,{count:this.state.count,counter:this.state.counter}),i.a.createElement(h,{pictures:this.state.pictures,handleIncrement:this.handleIncrement,showInput:this.state.showInput}),i.a.createElement(g,{show:this.state.showModal,onHide:this.closeModal,restart:this.restart}))}}]),t}(a.Component)),E=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}r.a.render(i.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/Picklerick",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/Picklerick","/service-worker.js");E?function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):k(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e):k(e)})}}()}],[[10,1,2]]]);
//# sourceMappingURL=main.62af12af.chunk.js.map