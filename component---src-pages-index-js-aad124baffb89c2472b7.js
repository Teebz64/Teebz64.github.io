(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{259:function(e,t,a){"use strict";a.r(t);var l=a(0),i=a.n(l),n=a(66),s=a(32),r=a(64);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class c extends i.a.PureComponent{constructor(...e){super(...e),o(this,"state",{hasEntered:!1}),o(this,"shutters",i.a.createRef()),o(this,"thumbnail",i.a.createRef()),o(this,"figure",i.a.createRef()),o(this,"title",i.a.createRef()),o(this,"listItem",i.a.createRef()),o(this,"text",i.a.createRef()),o(this,"titleScrollConfig",{from:"top-bottom",to:"top-middle",timing:"expoOut",direct:!0,inside:()=>this.onEnter(),props:{"--title-opacity":{from:0,to:.99},"--title-ty":{from:"-20px",to:"0px"},"--title-accent-scale":{from:0,to:1},"--title-accent-ty":{from:"20px",to:"0px"}}}),o(this,"listItemScrollConfig",{from:"top-bottom",to:"bottom-top",timing:"expoOut",direct:!0,props:{"--image-opacity":{from:0,to:.99},"--thumbnail-ty":{from:"60px",to:"-60px"}}}),o(this,"onEnter",()=>{this.state.hasEntered||(this.setState({hasEntered:!0}),Object(s.a)({easing:"easeOutExpo",targets:this.figure.current,translateY:[100,0],duration:3500}),this.shutters.current&&Object(s.a)({easing:"easeOutExpo",targets:this.shutters.current.children,scaleY:[1,0],duration:1650,delay:s.a.stagger(100)}),Object(s.a)({easing:"easeOutExpo",targets:this.thumbnail.current,opacity:[.01,1],duration:0}),Object(s.a)({easing:"easeOutExpo",targets:this.text.current,opacity:[.01,1],rotateX:[-20,0],translateZ:1,duration:750,delay:750,complete:()=>{this.listItem.current&&this.listItem.current.classList.add("work--entered")}}))})}componentDidMount(){this.titleScroll=r.create({elem:this.title.current,...this.titleScrollConfig}),this.listItemScroll=r.create({elem:this.listItem.current,...this.listItemScrollConfig}),this.titleScroll.start(),this.listItemScroll.start(),window.addEventListener("resize",()=>{this.titleScroll.calculate(),this.titleScroll.update(),this.listItemScroll.calculate(),this.listItemScroll.update()})}render(){const{slug:e,thumbnail:t,video:a,categories:l,title:s,subtitle:r}=this.props,{hasEntered:o}=this.state;return i.a.createElement("li",{"data-trigger":e,ref:this.listItem},i.a.createElement(n.Link,{className:"work__main",to:`/${e}/`,ref:this.figure},i.a.createElement("div",{className:"work__item-container",ref:this.thumbnail},i.a.createElement("ul",{className:"work__shutters",ref:this.shutters},i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null)),i.a.createElement("ul",{className:"work__crosshairs"},i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null),i.a.createElement("li",null)),i.a.createElement("div",{className:"work__thumbnail-container"},i.a.createElement("div",{className:"work__gradient"}),t&&i.a.createElement("img",{className:`\n                                        work__thumbnail\n                                        work__thumbnail--${e}\n                                    `,src:t,alt:s}),a&&!t&&i.a.createElement("div",{className:"video work__video"},i.a.createElement("video",{className:"video__video",autoPlay:!0,loop:!0,muted:!0,width:"1176",height:" 650",src:a})))),i.a.createElement("div",{className:"work__text",ref:this.text},i.a.createElement("div",{className:"work__category"},l.map((e,t)=>t+1===l.length?e:`${e} • `)),i.a.createElement("button",{className:"work__title",ref:this.title},s,r&&i.a.createElement("em",null,r)))))}}var m=c,u=a(251);function h(){return(h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e}).apply(this,arguments)}const d=[{slug:"transcend",thumbnail:"/images/logos/transcend-logo.svg",categories:["Logo Design","Branding"],title:"Transcend"},{slug:"knowledge-exchange",thumbnail:"/images/knowledge-exchange/feed-in-laptop.png",categories:["Architecture","Design"],title:"Humana:",subtitle:"Knowledge Exchange"},{slug:"two-bards",thumbnail:"/images/two-bards/two-bards-seal--purple.svg",categories:["Logo Design","Branding"],title:"Two Bards"},{slug:"ooh-icon-system",video:"/images/ooh-icon-system/output.export.mp4",categories:["Development","Animation"],title:"Oohology",subtitle:"Icon System"},{slug:"champion-windows",thumbnail:"/images/champion-windows/slider.png",categories:["Design"],title:"Champion",subtitle:"Windows"}];t.default=()=>i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"section section--hero section--index"},i.a.createElement("div",{className:"section__indicator section__indicator--x-margin-bottom"},"01"),i.a.createElement(u.a,{pill:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",null,"ポートフォリオ"),i.a.createElement("div",{className:"masthead__timespan"},"'18–'19")),heading:i.a.createElement(i.a.Fragment,null,"St",i.a.createElement("em",null,"e"),"v",i.a.createElement("em",null,"e"),"n D",i.a.createElement("em",null,"a"),"n",i.a.createElement("em",null,"a")),text:i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"masthead__textline masthead__textline--large"},"Design & Development"),i.a.createElement("div",{className:"masthead__textline masthead__textline--medium"},"Selected Work")),hasBackButton:!1})),i.a.createElement("section",{className:"section"},i.a.createElement("div",{className:"section__indicator"},"02"),i.a.createElement("ul",{className:"work"},d.map((e,t)=>i.a.createElement(m,h({},e,{upNext:d[t>0?t-1:d.length-1],key:t}))))))}}]);
//# sourceMappingURL=component---src-pages-index-js-aad124baffb89c2472b7.js.map