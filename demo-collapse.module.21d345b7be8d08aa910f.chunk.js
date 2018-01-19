webpackJsonp(["demo-collapse.module"],{Sran:function(l,n){l.exports='<button type="button" class="btn btn-primary"\n        (click)="isCollapsed = !isCollapsed">Toggle collapse\n</button>\n<hr>\n<div (collapsed)="collapsed($event)"\n     (expanded)="expanded($event)"\n     [collapse]="isCollapsed"\n     class="card card-block card-header">\n  <div class="well well-lg">Some content</div>\n</div>\n'},Zn6S:function(l,n){l.exports="// RECOMMENDED (doesn't work with system.js)\nimport { CollapseModule } from 'ngx-bootstrap/collapse';\n// or\nimport { CollapseModule } from 'ngx-bootstrap';\n\n@NgModule({\n  imports: [CollapseModule.forRoot(),...]\n})\nexport class AppModule(){}\n"},gApU:function(l,n){l.exports="import { Component } from '@angular/core';\n\n@Component({\n  selector: 'collapse-demo',\n  templateUrl: './collapse-demo.component.html'\n})\nexport class CollapseDemoComponent {\n  isCollapsed: boolean = false;\n\n  collapsed(event: any): void {\n    console.log(event);\n  }\n\n  expanded(event: any): void {\n    console.log(event);\n  }\n}\n"},u0FR:function(l,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=e("/oeL"),t=function(){return function(){}}(),a=e("urbl"),u=e("QUTT"),s=e("PJTy"),c=e("v1cn"),p=e("qEIf"),r=e("rNzy"),i=e("Jggs"),d=e("c+jj"),_=e("LfeD"),m=e("lgdf"),f=function(){function l(){this.isCollapsed=!1}return l.prototype.collapsed=function(l){console.log(l)},l.prototype.expanded=function(l){console.log(l)},l}(),b=e("SY0Y"),g=e("EWuz"),v=e("bZLq"),C=e("vN/N"),h=[{name:"Usage",anchor:"usage",outlet:b.a,content:{doc:e("Zn6S")}},{name:"Examples",anchor:"examples",outlet:g.a,content:[{title:"Basic",anchor:"basic",component:e("gApU"),html:e("Sran"),outlet:f}]},{name:"API Reference",anchor:"api-reference",outlet:v.a,content:[{title:"CollapseDirective",anchor:"collapse-directive",outlet:C.b}]}],x=function(){return function(){this.name="Collapse",this.src="https://github.com/valor-software/ngx-bootstrap/tree/development/src/collapse",this.componentContent=h}}(),y=o._19({encapsulation:2,styles:[],data:{}});function w(l){return o._45(2,[(l()(),o._22(0,null,null,14,"demo-section",[],null,null,null,i.b,i.a)),o._20(49152,null,0,d.a,[],{name:[0,"name"],src:[1,"src"],componentContent:[2,"componentContent"]},null),(l()(),o._43(0,["\n  "])),(l()(),o._22(0,null,0,7,"p",[],null,null,null,null,null)),(l()(),o._43(null,["Collapse component allows you to toggle content on your pages with a bit of JavaScript and some\n  classes. Flexible component that utilizes a handful of classes (from the "])),(l()(),o._22(0,null,null,1,"strong",[],null,null,null,null,null)),(l()(),o._43(null,["required transitions\n  component"])),(l()(),o._43(null,["("])),(l()(),o._22(0,null,null,1,"em",[],null,null,null,null,null)),(l()(),o._43(null,["not yet implemented"])),(l()(),o._43(null,[")) for easy toggle behavior."])),(l()(),o._43(0,["\n\n  "])),(l()(),o._22(0,null,0,1,"docs-section",[],null,null,null,_.b,_.a)),o._20(49152,null,0,m.a,[o.y],{content:[0,"content"]},null),(l()(),o._43(0,["\n"])),(l()(),o._43(null,["\n"]))],function(l,n){var e=n.component;l(n,1,0,e.name,e.src,e.componentContent),l(n,13,0,e.componentContent)},null)}var k=o._17("collapse-section",x,function(l){return o._45(0,[(l()(),o._22(0,null,null,1,"collapse-section",[],null,null,null,w,y)),o._20(49152,null,0,x,[],null,null)],null,null)},{},{},[]),E=e("C2HG"),M=o._19({encapsulation:2,styles:[],data:{}});function N(l){return o._45(0,[(l()(),o._22(0,null,null,1,"button",[["class","btn btn-primary"],["type","button"]],null,[[null,"click"]],function(l,n,e){var o=!0,t=l.component;"click"===n&&(o=!1!=(t.isCollapsed=!t.isCollapsed)&&o);return o},null,null)),(l()(),o._43(null,["Toggle collapse\n"])),(l()(),o._43(null,["\n"])),(l()(),o._22(0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),o._43(null,["\n"])),(l()(),o._22(0,null,null,5,"div",[["class","card card-block card-header"]],[[2,"collapse",null],[4,"display",null],[2,"in",null],[2,"show",null],[1,"aria-expanded",0],[1,"aria-hidden",0],[2,"collapsing",null]],[[null,"collapsed"],[null,"expanded"]],function(l,n,e){var o=!0,t=l.component;"collapsed"===n&&(o=!1!==t.collapsed(e)&&o);"expanded"===n&&(o=!1!==t.expanded(e)&&o);return o},null,null)),o._20(16384,null,0,E.a,[o.p,o.Q],{collapse:[0,"collapse"]},{collapsed:"collapsed",expanded:"expanded"}),(l()(),o._43(null,["\n  "])),(l()(),o._22(0,null,null,1,"div",[["class","well well-lg"]],null,null,null,null,null)),(l()(),o._43(null,["Some content"])),(l()(),o._43(null,["\n"])),(l()(),o._43(null,["\n"]))],function(l,n){l(n,6,0,n.component.isCollapsed)},function(l,n){l(n,5,0,o._35(n,6).isCollapse,o._35(n,6).display,o._35(n,6).isExpanded,o._35(n,6).isExpanded,o._35(n,6).isExpanded,o._35(n,6).isCollapsed,o._35(n,6).isCollapsing)})}var S=o._17("collapse-demo",f,function(l){return o._45(0,[(l()(),o._22(0,null,null,1,"collapse-demo",[],null,null,null,N,M)),o._20(49152,null,0,f,[],null,null)],null,null)},{},{},[]),q=e("qbdv"),D=e("bm2B"),z=e("zNK2"),U=e("BkNc"),R=e("5bcs"),T=e("W6cK"),j=e("x/Up"),A=e("yroR"),J=e("XH7w"),L=e("bqLD");e.d(n,"DemoCollapseModuleNgFactory",function(){return B});var B=o._18(t,[],function(l){return o._32([o._33(512,o.m,o._14,[[8,[a.a,u.a,s.a,c.a,p.a,r.a,k,S]],[3,o.m],o.G]),o._33(4608,q.p,q.o,[o.C]),o._33(4608,D.z,D.z,[]),o._33(4608,z.a,z.a,[q.i,U.n]),o._33(4608,R.a,R.a,[]),o._33(4608,T.a,T.a,[]),o._33(512,j.a,j.a,[]),o._33(512,q.c,q.c,[]),o._33(512,D.w,D.w,[]),o._33(512,D.k,D.k,[]),o._33(512,A.a,A.a,[]),o._33(512,C.d,C.d,[]),o._33(512,U.q,U.q,[[2,U.v],[2,U.n]]),o._33(512,g.b,g.b,[]),o._33(512,v.b,v.b,[]),o._33(512,b.b,b.b,[]),o._33(512,J.a,J.a,[]),o._33(512,L.a,L.a,[]),o._33(512,t,t,[]),o._33(1024,U.l,function(){return[[{path:"",component:x}]]},[])])})}});