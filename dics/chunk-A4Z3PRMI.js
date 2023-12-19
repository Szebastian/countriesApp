import{A as R,B as q,C as j,D,E as H,F as G,J,L as K,M as Q,N as $,Q as C,S as W,a as E,b as O,c as b,d as k,e as A,f as B,g as L,h as u,i as _,j as P,k as c,l as f,m as p,n as I,o,p as t,q as s,r as g,s as T,t as w,u as a,v as d,w as N,x as z,y as F,z as M}from"./chunk-PXDFY67G.js";var h=(()=>{let e=class e{constructor(r){this.httpClient=r,this.apiUrl="https://restcountries.com/v3.1"}searchCountryByAlphacode(r){let n=`${this.apiUrl}/alpha/${r}`;return this.httpClient.get(n).pipe(O(l=>l.length>0?l[0]:null),b(()=>E(null)))}searchCapital(r){let n=`${this.apiUrl}/capital/${r}`;return this.httpClient.get(n).pipe(b(()=>E([])))}searchCountry(r){let n=`${this.apiUrl}/name/${r}`;return this.httpClient.get(n).pipe(b(()=>E([])))}searchRegion(r){let n=`${this.apiUrl}/region/${r}`;return this.httpClient.get(n).pipe(b(()=>E([])))}};e.\u0275fac=function(n){return new(n||e)(L(G))},e.\u0275prov=A({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function oe(i,e){i&1&&(o(0,"div",2),a(1,` No hay paises que mostrar
`),t())}var ae=i=>["/countries/by",i];function ce(i,e){if(i&1&&(o(0,"tr")(1,"td"),a(2),t(),o(3,"td"),a(4),t(),o(5,"td"),s(6,"img",5),t(),o(7,"td"),a(8),t(),o(9,"td"),a(10),t(),o(11,"td"),a(12),F(13,"number"),t(),o(14,"td")(15,"a",6),a(16,"Ver m\xE1s"),t()()()),i&2){let m=e.$implicit,r=e.index;c(2),d(r+1),c(2),d(m.flag),c(2),p("src",m.flags.png,P)("alt",m.name.common),c(2),d(m.name.common),c(2),d(m.capital),c(2),d(M(13,8,m.population)),c(3),p("routerLink",z(10,ae,m.cca3))}}function me(i,e){if(i&1&&(o(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),t(),o(5,"th"),a(6,"Icon"),t(),o(7,"th"),a(8,"Bandera"),t(),o(9,"th"),a(10,"Nombre"),t(),o(11,"th"),a(12,"Capital"),t(),o(13,"th"),a(14,"Poblaci\xF3n"),t(),s(15,"th"),t()(),o(16,"tbody"),I(17,ce,17,12,"tr",4),t()()),i&2){let m=T();c(17),p("ngForOf",m.countries)}}var x=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=u({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],["table",""],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(n,l){if(n&1&&I(0,oe,2,0,"div",0)(1,me,18,1,"ng-template",null,1,R),n&2){let v=w(2);p("ngIf",l.countries.length===0)("ngIfElse",v)}},dependencies:[q,j,Q,D],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let i=e;return i})();var Y=(()=>{let e=class e{constructor(r){this.CountriesService=r,this.countries=[]}searchByCapital(r){this.CountriesService.searchCapital(r).subscribe(n=>{this.countries=n})}};e.\u0275fac=function(n){return new(n||e)(f(h))},e.\u0275cmp=u({type:e,selectors:[["app-by-capital-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onValue"],[3,"countries"]],template:function(n,l){n&1&&(o(0,"h2"),a(1,"Por Capital"),t(),s(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("onValue",function(S){return l.searchByCapital(S)}),t()()(),o(6,"div",0)(7,"div",1),s(8,"hr")(9,"countries-table",3),t()()),n&2&&(c(9),p("countries",l.countries))},dependencies:[C,x]});let i=e;return i})();var Z=(()=>{let e=class e{constructor(r){this.CountriesService=r,this.countries=[]}searchByCountry(r){this.CountriesService.searchCountry(r).subscribe(n=>{this.countries=n})}};e.\u0275fac=function(n){return new(n||e)(f(h))},e.\u0275cmp=u({type:e,selectors:[["app-by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Pais",3,"onValue"],[3,"countries"]],template:function(n,l){n&1&&(o(0,"h2"),a(1,"Por Pais"),t(),s(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("onValue",function(S){return l.searchByCountry(S)}),t()()(),o(6,"div",0)(7,"div",1),s(8,"hr")(9,"countries-table",3),t()()),n&2&&(c(9),p("countries",l.countries))},dependencies:[C,x]});let i=e;return i})();var ee=(()=>{let e=class e{constructor(r){this.CountriesService=r,this.countries=[]}searchByRegion(r){this.CountriesService.searchRegion(r).subscribe(n=>{this.countries=n})}};e.\u0275fac=function(n){return new(n||e)(f(h))},e.\u0275cmp=u({type:e,selectors:[["app-by-region-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por region",3,"onValue"],[3,"countries"]],template:function(n,l){n&1&&(o(0,"h2"),a(1,"Por Regi\xF3n"),t(),s(2,"hr"),o(3,"div",0)(4,"div",1)(5,"shared-search-box",2),g("onValue",function(S){return l.searchByRegion(S)}),t()()(),o(6,"div",0)(7,"div",1),s(8,"hr")(9,"countries-table",3),t()()),n&2&&(c(9),p("countries",l.countries))},dependencies:[C,x]});let i=e;return i})();function le(i,e){i&1&&(o(0,"div",2),a(1," Espere por favor "),t())}function se(i,e){if(i&1&&(o(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4," Pa\xEDs:"),o(5,"strong"),a(6),t()(),s(7,"hr"),t()(),o(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),t(),s(12,"img",6),t(),o(13,"div",7)(14,"h3"),a(15,"Informaci\xF3n"),t(),o(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblaci\xF3n:"),t(),a(20),F(21,"number"),t(),o(22,"li",9)(23,"strong"),a(24,"C\xF3digo:"),t(),a(25),t()()()(),o(26,"div",10)(27,"div",7)(28,"h3"),a(29,"Traducciones"),t(),o(30,"div",11)(31,"span",12),a(32),t(),o(33,"span",12),a(34),t(),o(35,"span",12),a(36),t(),o(37,"span",12),a(38),t(),o(39,"span",12),a(40),t(),o(41,"span",12),a(42),t()()()()()),i&2){let m=T();c(6),d(m.country.name.common),c(6),p("src",m.country.flags.svg,P)("alt",m.country.name.common),c(8),N("",M(21,11,m.country.population)," "),c(5),N("",m.country.cca3," "),c(7),d(m.country.translations.ara.common),c(2),d(m.country.translations.bre.common),c(2),d(m.country.translations.fin.common),c(2),d(m.country.translations.ces.common),c(2),d(m.country.translations.est.common),c(2),d(m.country.translations.cym.common)}}var te=(()=>{let e=class e{constructor(r,n,l){this.activatedRoute=r,this.countriesService=n,this.router=l}ngOnInit(){this.activatedRoute.params.pipe(k(({id:r})=>this.countriesService.searchCountryByAlphacode(r))).subscribe(r=>r?this.country=r:this.router.navigateByUrl(""))}};e.\u0275fac=function(n){return new(n||e)(f(J),f(h),f(K))},e.\u0275cmp=u({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text-center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],[1,"badge","bg-primary","m-1"]],template:function(n,l){if(n&1&&I(0,le,2,0,"ng-template",null,0,R)(2,se,43,13,"div",1),n&2){let v=w(1);c(2),p("ngIf",l.country)("ngIfElse",v)}},dependencies:[j,D]});let i=e;return i})();var pe=[{path:"by-capital",component:Y},{path:"by-country",component:Z},{path:"by-region",component:ee},{path:"by/:id",component:te},{path:"**",redirectTo:"by-capital"}],ie=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_({type:e}),e.\u0275inj=B({imports:[$.forChild(pe),$]});let i=e;return i})();var Ue=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=_({type:e}),e.\u0275inj=B({imports:[H,ie,W]});let i=e;return i})();export{Ue as CountriesModule};