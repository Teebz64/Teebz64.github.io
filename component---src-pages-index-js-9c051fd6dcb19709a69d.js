(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{244:function(e,t,a){"use strict";a.r(t);a(9);var n=a(0),r=a.n(n),i=a(254),l=a(111),o=a(255),c=[{slug:"knowledge-exchange",thumbnail:"/images/knowledge-exchange/feed-in-laptop.png",categories:["Architecture","Design"],title:"Humana:",subtitle:"Knowledge Exchange"},{slug:"champion-windows",thumbnail:"/images/champion-windows/slider.png",categories:["Design"],title:"Champion",subtitle:"Windows"},{slug:"ooh-icon-system",video:"/images/ooh-icon-system/output.export.mp4",categories:["Development","Animation"],title:"Oohology",subtitle:"Icon System"},{slug:"ripple-cube",video:"/images/ripple-cube/ripplebox.export.mp4",categories:["threejs","Experiment"],title:"Ripple Cube"}];t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,{title:"Portfolio"}),r.a.createElement("section",{className:"section section--hero section--index"},r.a.createElement(l.a,{heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"hover-cursor"},"Steven Dana")),text:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"masthead__textline masthead__textline--large -fade-in"},"Selected Projects")),hasBackButton:!1})),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"deck"},r.a.createElement("h2",{className:"deck__heading"},"Hi. I’m a ",r.a.createElement("span",{className:"underline"},"UX Engineer")," & ",r.a.createElement("span",{className:"underline"},"Product Designer")),r.a.createElement("p",{className:"deck__text"},"A creative developer that builds interfaces from architecture, design, and front-end development. When I’m not working on professional projects I’m exploring cellular automata, generative art, and lock-picking."))),r.a.createElement("section",{className:"section"},r.a.createElement("ul",{className:"work"},c.map((function(e,t){return r.a.createElement(i.a,Object.assign({},e,{upNext:c[t>0?t-1:c.length-1],key:t}))})))))}},254:function(e,t,a){"use strict";a(9);var n=a(0),r=a.n(n),i=a(66),l=a(26),o=a(57);var c=function(e){var t,a;function n(){for(var t,a,n,i=arguments.length,o=new Array(i),c=0;c<i;c++)o[c]=arguments[c];return(n=e.call.apply(e,[this].concat(o))||this).state={hasEntered:!1},n.shutters=r.a.createRef(),n.thumbnail=r.a.createRef(),n.figure=r.a.createRef(),n.title=r.a.createRef(),n.listItem=r.a.createRef(),n.text=r.a.createRef(),n.titleScrollConfig={from:"top-bottom",to:"top-middle",timing:"expoOut",direct:!0,props:(t={},t["--title-opacity"]={from:0,to:.99},t["--title-ty"]={from:"-20px",to:"0px"},t["--title-accent-scale"]={from:0,to:1},t["--title-accent-ty"]={from:"20px",to:"0px"},t)},n.listItemScrollConfig={from:"middle-bottom",to:"bottom-top",timing:"expoOut",inside:function(){return n.onEnter()},direct:!0,props:(a={},a["--image-opacity"]={from:.5,to:.99},a["--thumbnail-ty"]={from:"60px",to:"-60px"},a)},n.componentWillUnmount=function(){n.titleScroll.destroy(),n.listItemScroll.destroy()},n.onEnter=function(){n.state.hasEntered||(n.setState({hasEntered:!0}),n.shutters.current&&Object(l.a)({easing:"easeOutExpo",targets:n.shutters.current.children,scaleY:[1,0],duration:1650,delay:l.a.stagger(100)}),Object(l.a)({easing:"easeOutExpo",targets:n.thumbnail.current,opacity:[.01,1],duration:0}),Object(l.a)({easing:"easeOutExpo",targets:n.text.current,opacity:[.01,1],duration:750,delay:750,complete:function(){n.listItem.current&&n.listItem.current.classList.add("work--entered")}}))},n}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.componentDidMount=function(){var e=this;this.titleScroll=o.create(Object.assign({elem:this.title.current},this.titleScrollConfig)),this.listItemScroll=o.create(Object.assign({elem:this.listItem.current},this.listItemScrollConfig)),this.titleScroll.start(),this.listItemScroll.start(),window.addEventListener("resize",(function(){e.titleScroll.calculate(),e.titleScroll.update(),e.listItemScroll.calculate(),e.listItemScroll.update()}))},c.render=function(){var e=this.props,t=e.slug,a=e.thumbnail,n=e.video,l=e.categories,o=e.title,c=e.subtitle;this.state.hasEntered;return r.a.createElement("li",{"data-trigger":t,ref:this.listItem},r.a.createElement(i.Link,{className:"work__main",to:"/"+t+"/",ref:this.figure},r.a.createElement("div",{className:"work__item-container",ref:this.thumbnail},r.a.createElement("ul",{className:"work__shutters",ref:this.shutters},r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null)),r.a.createElement("div",{className:"work__thumbnail-container"},a&&r.a.createElement("img",{className:"\n                                        work__thumbnail\n                                        work__thumbnail--"+t+"\n                                    ",src:a,alt:o}),n&&!a&&r.a.createElement("div",{className:"video work__video"},r.a.createElement("video",{className:"video__video",autoPlay:!0,playsInline:!0,loop:!0,muted:!0,width:"1176",height:" 650",src:n})))),r.a.createElement("div",{className:"work__text",ref:this.text},r.a.createElement("div",{className:"work__category"},l.map((function(e,t){return t+1===l.length?e:e+" • "}))),r.a.createElement("button",{className:"work__title",ref:this.title},r.a.createElement("div",null,o),c&&r.a.createElement("em",null,c)))))},n}(r.a.PureComponent);t.a=c},255:function(e,t,a){"use strict";var n=a(112),r=a(0),i=a.n(r),l=a(113),o=a.n(l);function c(e){var t=e.description,a=e.image,r=e.lang,l=e.meta,c=e.title,s=n.data.site,m=t||s.siteMetadata.description,u=a||s.siteMetadata.image;return i.a.createElement(o.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"image",content:u},{property:"og:image",content:u},{property:"twitter:image",content:u},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(l)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-9c051fd6dcb19709a69d.js.map