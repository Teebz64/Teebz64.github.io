(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{249:function(e,t,a){"use strict";a.r(t);a(10);var n=a(0),r=a.n(n),i=a(260),o=a(111),l=a(263),c=[{slug:"knowledge-exchange",thumbnail:"/images/knowledge-exchange/feed-in-laptop.png",categories:["Architecture","Design"],title:"Humana:",subtitle:"Knowledge Exchange"},{slug:"champion-windows",thumbnail:"/images/champion-windows/slider.png",categories:["Design"],title:"Champion",subtitle:"Windows"},{slug:"ooh-icon-system",video:"/images/ooh-icon-system/output.export.mp4",categories:["Development","Animation"],title:"Oohology",subtitle:"Icon System"},{slug:"ripple-cube",video:"/images/ripple-cube/ripplebox.export.mp4",categories:["threejs","experiment"],title:"Ripple Cube"},{slug:"barton-malow",thumbnail:"/images/barton-malow/laptop-homepage.png",categories:["Design","Development"],title:"Barton Malow"}];t.default=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:"Portfolio"}),r.a.createElement("section",{className:"section section--hero section--index"},r.a.createElement(o.a,{heading:r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{class:"hover-cursor"},"Steven Dana")),text:r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"masthead__textline masthead__textline--large"},"Design & Development"),r.a.createElement("div",{className:"masthead__textline masthead__textline--medium"},"Selected Work")),hasBackButton:!1})),r.a.createElement("section",{className:"section"},r.a.createElement("div",{className:"deck"},r.a.createElement("h2",{className:"deck__heading"},"Hi. I’m a UX Engineer & Product Designer"),r.a.createElement("p",{className:"deck__text"},"I make memorable interfaces that are fun to use. When I’m not working on professional projects I’m exploring cellular automata, generative art, and lock-picking."))),r.a.createElement("section",{className:"section"},r.a.createElement("ul",{className:"work"},c.map((function(e,t){return r.a.createElement(i.a,Object.assign({},e,{upNext:c[t>0?t-1:c.length-1],key:t}))})))))}},260:function(e,t,a){"use strict";a(261),a(262),a(10);var n=a(0),r=a.n(n),i=a(64),o=a(29),l=a(56);var c=function(e){var t,a;function n(){for(var t,a,n,i=arguments.length,l=new Array(i),c=0;c<i;c++)l[c]=arguments[c];return(n=e.call.apply(e,[this].concat(l))||this).state={hasEntered:!1},n.shutters=r.a.createRef(),n.thumbnail=r.a.createRef(),n.figure=r.a.createRef(),n.title=r.a.createRef(),n.listItem=r.a.createRef(),n.text=r.a.createRef(),n.titleScrollConfig={from:"top-bottom",to:"top-middle",timing:"expoOut",direct:!0,inside:function(){return n.onEnter()},props:(t={},t["--title-opacity"]={from:0,to:.99},t["--title-ty"]={from:"-20px",to:"0px"},t["--title-accent-scale"]={from:0,to:1},t["--title-accent-ty"]={from:"20px",to:"0px"},t)},n.listItemScrollConfig={from:"top-bottom",to:"bottom-top",timing:"expoOut",direct:!0,props:(a={},a["--image-opacity"]={from:.5,to:.99},a["--thumbnail-ty"]={from:"60px",to:"-60px"},a)},n.componentWillUnmount=function(){n.titleScroll.destroy(),n.listItemScroll.destroy()},n.onEnter=function(){n.state.hasEntered||(n.setState({hasEntered:!0}),n.shutters.current&&Object(o.a)({easing:"easeOutExpo",targets:n.shutters.current.children,scaleY:[1,0],duration:1650,delay:o.a.stagger(100)}),Object(o.a)({easing:"easeOutExpo",targets:n.thumbnail.current,opacity:[.01,1],duration:0}),Object(o.a)({easing:"easeOutExpo",targets:n.text.current,opacity:[.01,1],duration:750,delay:750,complete:function(){n.listItem.current&&n.listItem.current.classList.add("work--entered")}}))},n}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var c=n.prototype;return c.componentDidMount=function(){var e=this;this.titleScroll=l.create(Object.assign({elem:this.title.current},this.titleScrollConfig)),this.listItemScroll=l.create(Object.assign({elem:this.listItem.current},this.listItemScrollConfig)),this.titleScroll.start(),this.listItemScroll.start(),window.addEventListener("resize",(function(){e.titleScroll.calculate(),e.titleScroll.update(),e.listItemScroll.calculate(),e.listItemScroll.update()}))},c.render=function(){var e=this.props,t=e.slug,a=e.thumbnail,n=e.video,o=e.categories,l=e.title,c=e.subtitle;this.state.hasEntered;return r.a.createElement("li",{"data-trigger":t,ref:this.listItem},r.a.createElement(i.Link,{className:"work__main",to:"/"+t+"/",ref:this.figure},r.a.createElement("div",{className:"work__item-container",ref:this.thumbnail},r.a.createElement("ul",{className:"work__shutters",ref:this.shutters},r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null),r.a.createElement("li",null)),r.a.createElement("div",{className:"work__thumbnail-container"},a&&r.a.createElement("img",{className:"\n                                        work__thumbnail\n                                        work__thumbnail--"+t+"\n                                    ",src:a,alt:l}),n&&!a&&r.a.createElement("div",{className:"video work__video"},r.a.createElement("video",{className:"video__video",autoPlay:!0,playsInline:!0,loop:!0,muted:!0,width:"1176",height:" 650",src:n})))),r.a.createElement("div",{className:"work__text",ref:this.text},r.a.createElement("div",{className:"work__category"},o.map((function(e,t){return t+1===o.length?e:e+" • "}))),r.a.createElement("button",{className:"work__title",ref:this.title},r.a.createElement("div",null,l),c&&r.a.createElement("em",null,c)))))},n}(r.a.PureComponent);t.a=c},261:function(e,t,a){var n=a(1);n(n.S,"Object",{create:a(59)})},262:function(e,t,a){"use strict";var n=a(1),r=a(67)(1);n(n.P+n.F*!a(154)([].map,!0),"Array",{map:function(e){return r(this,e,arguments[1])}})},263:function(e,t,a){"use strict";var n=a(112),r=a(0),i=a.n(r),o=a(113),l=a.n(o);function c(e){var t=e.description,a=e.image,r=e.lang,o=e.meta,c=e.title,s=n.data.site,m=t||s.siteMetadata.description,u=a||s.siteMetadata.image;return i.a.createElement(l.a,{htmlAttributes:{lang:r},title:c,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:m},{property:"og:title",content:c},{property:"image",content:u},{property:"og:image",content:u},{property:"twitter:image",content:u},{property:"og:description",content:m},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:s.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:m}].concat(o)})}c.defaultProps={lang:"en",meta:[],description:""},t.a=c}}]);
//# sourceMappingURL=component---src-pages-index-js-4f433df5db8f1d223d4a.js.map