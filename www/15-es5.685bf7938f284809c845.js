(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{aBKi:function(l,n,u){"use strict";u.r(n);var a=u("CcnG"),t=function(){return function(){}}(),o=u("pMnS"),i=u("oBZk"),b=u("ZZ/e"),e=u("l7fU"),r=function(){function l(l,n){this.router=l,this.dao=n}return l.prototype.ngOnInit=function(){this.pagador=this.router.getCurrentNavigation().extras.state.pagador,this.tabela=this.dao.tabela,this.pagador.valorFaixaIsento=0,this.pagador.valorFaixa075=0,this.pagador.valorFaixa150=0,this.pagador.valorFaixa225=0,this.pagador.valorFaixa275=0,this.pagador.totalAPagar=0,this.tabela.calcularIRPF(this.pagador),this.dao.commit()},l.prototype.tetoFaixa075=function(){return(this.tabela.faixaIsento+this.tabela.faixa075).toFixed(2)},l.prototype.tetoFaixa150=function(){return(this.tabela.faixaIsento+this.tabela.faixa075+this.tabela.faixa150).toFixed(2)},l.prototype.tetoFaixa225=function(){return(this.tabela.faixaIsento+this.tabela.faixa075+this.tabela.faixa150+this.tabela.faixa225).toFixed(2)},l}(),s=u("ZYCi"),d=a.rb({encapsulation:0,styles:[[""]],data:{}});function c(l){return a.Kb(0,[(l()(),a.tb(0,0,null,null,11,"ion-header",[],null,null,null,i.L,i.l)),a.sb(1,49152,null,0,b.z,[a.h,a.k,a.z],null,null),(l()(),a.tb(2,0,null,0,9,"ion-toolbar",[["color","dark"]],null,null,null,i.Z,i.z)),a.sb(3,49152,null,0,b.Ab,[a.h,a.k,a.z],{color:[0,"color"]},null),(l()(),a.tb(4,0,null,0,4,"ion-buttons",[["slot","start"]],null,null,null,i.D,i.d)),a.sb(5,49152,null,0,b.j,[a.h,a.k,a.z],null,null),(l()(),a.tb(6,0,null,0,2,"ion-back-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==a.Eb(l,8).onClick(u)&&t),t}),i.B,i.b)),a.sb(7,49152,null,0,b.e,[a.h,a.k,a.z],null,null),a.sb(8,16384,null,0,b.f,[[2,b.gb],b.Fb],null,null),(l()(),a.tb(9,0,null,0,2,"ion-title",[],null,null,null,i.Y,i.y)),a.sb(10,49152,null,0,b.yb,[a.h,a.k,a.z],null,null),(l()(),a.Jb(-1,0,["Resultado"])),(l()(),a.tb(12,0,null,null,63,"ion-content",[],null,null,null,i.J,i.j)),a.sb(13,49152,null,0,b.s,[a.h,a.k,a.z],null,null),(l()(),a.tb(14,0,null,0,11,"ion-card",[],null,null,null,i.I,i.e)),a.sb(15,49152,null,0,b.k,[a.h,a.k,a.z],null,null),(l()(),a.tb(16,0,null,0,5,"ion-card-header",[],null,null,null,i.F,i.g)),a.sb(17,49152,null,0,b.m,[a.h,a.k,a.z],null,null),(l()(),a.tb(18,0,null,0,3,"ion-card-subtitle",[],null,null,null,i.G,i.h)),a.sb(19,49152,null,0,b.n,[a.h,a.k,a.z],null,null),(l()(),a.tb(20,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),a.Jb(-1,null,["Total de Imposto a Pagar"])),(l()(),a.tb(22,0,null,0,3,"ion-card-content",[],null,null,null,i.E,i.f)),a.sb(23,49152,null,0,b.l,[a.h,a.k,a.z],null,null),(l()(),a.tb(24,0,null,0,1,"b",[],null,null,null,null,null)),(l()(),a.Jb(25,null,["R$ ",""])),(l()(),a.tb(26,0,null,0,9,"ion-card",[],null,null,null,i.I,i.e)),a.sb(27,49152,null,0,b.k,[a.h,a.k,a.z],null,null),(l()(),a.tb(28,0,null,0,4,"ion-card-header",[],null,null,null,i.F,i.g)),a.sb(29,49152,null,0,b.m,[a.h,a.k,a.z],null,null),(l()(),a.tb(30,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.G,i.h)),a.sb(31,49152,null,0,b.n,[a.h,a.k,a.z],null,null),(l()(),a.Jb(32,0,["Faixa at\xe9 R$ "," (Isento)"])),(l()(),a.tb(33,0,null,0,2,"ion-card-content",[],null,null,null,i.E,i.f)),a.sb(34,49152,null,0,b.l,[a.h,a.k,a.z],null,null),(l()(),a.Jb(35,0,[" R$ "," * 0% = R$ 0.00 "])),(l()(),a.tb(36,0,null,0,9,"ion-card",[],null,null,null,i.I,i.e)),a.sb(37,49152,null,0,b.k,[a.h,a.k,a.z],null,null),(l()(),a.tb(38,0,null,0,4,"ion-card-header",[],null,null,null,i.F,i.g)),a.sb(39,49152,null,0,b.m,[a.h,a.k,a.z],null,null),(l()(),a.tb(40,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.G,i.h)),a.sb(41,49152,null,0,b.n,[a.h,a.k,a.z],null,null),(l()(),a.Jb(42,0,[" Faixa entre R$ "," e R$ "," "])),(l()(),a.tb(43,0,null,0,2,"ion-card-content",[],null,null,null,i.E,i.f)),a.sb(44,49152,null,0,b.l,[a.h,a.k,a.z],null,null),(l()(),a.Jb(45,0,[" R$ "," * 7.5% = R$ "," "])),(l()(),a.tb(46,0,null,0,9,"ion-card",[],null,null,null,i.I,i.e)),a.sb(47,49152,null,0,b.k,[a.h,a.k,a.z],null,null),(l()(),a.tb(48,0,null,0,4,"ion-card-header",[],null,null,null,i.F,i.g)),a.sb(49,49152,null,0,b.m,[a.h,a.k,a.z],null,null),(l()(),a.tb(50,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.G,i.h)),a.sb(51,49152,null,0,b.n,[a.h,a.k,a.z],null,null),(l()(),a.Jb(52,0,[" Faixa entre R$ "," e R$ "," "])),(l()(),a.tb(53,0,null,0,2,"ion-card-content",[],null,null,null,i.E,i.f)),a.sb(54,49152,null,0,b.l,[a.h,a.k,a.z],null,null),(l()(),a.Jb(55,0,[" R$ "," * 15% = R$ "," "])),(l()(),a.tb(56,0,null,0,9,"ion-card",[],null,null,null,i.I,i.e)),a.sb(57,49152,null,0,b.k,[a.h,a.k,a.z],null,null),(l()(),a.tb(58,0,null,0,4,"ion-card-header",[],null,null,null,i.F,i.g)),a.sb(59,49152,null,0,b.m,[a.h,a.k,a.z],null,null),(l()(),a.tb(60,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.G,i.h)),a.sb(61,49152,null,0,b.n,[a.h,a.k,a.z],null,null),(l()(),a.Jb(62,0,[" Faixa entre R$ "," e R$ "," "])),(l()(),a.tb(63,0,null,0,2,"ion-card-content",[],null,null,null,i.E,i.f)),a.sb(64,49152,null,0,b.l,[a.h,a.k,a.z],null,null),(l()(),a.Jb(65,0,[" R$ "," * 22.5% = R$ "," "])),(l()(),a.tb(66,0,null,0,9,"ion-card",[],null,null,null,i.I,i.e)),a.sb(67,49152,null,0,b.k,[a.h,a.k,a.z],null,null),(l()(),a.tb(68,0,null,0,4,"ion-card-header",[],null,null,null,i.F,i.g)),a.sb(69,49152,null,0,b.m,[a.h,a.k,a.z],null,null),(l()(),a.tb(70,0,null,0,2,"ion-card-subtitle",[],null,null,null,i.G,i.h)),a.sb(71,49152,null,0,b.n,[a.h,a.k,a.z],null,null),(l()(),a.Jb(72,0,[" Faixa acima de R$ "," "])),(l()(),a.tb(73,0,null,0,2,"ion-card-content",[],null,null,null,i.E,i.f)),a.sb(74,49152,null,0,b.l,[a.h,a.k,a.z],null,null),(l()(),a.Jb(75,0,[" R$ "," * 27.5% = R$ "," "]))],(function(l,n){l(n,3,0,"dark")}),(function(l,n){var u=n.component;l(n,25,0,u.pagador.totalAPagar.toFixed(2)),l(n,32,0,u.tabela.faixaIsento),l(n,35,0,u.pagador.valorFaixaIsento),l(n,42,0,u.tabela.faixaIsento.toFixed(2),u.tetoFaixa075()),l(n,45,0,u.pagador.valorFaixa075.toFixed(2),(.075*u.pagador.valorFaixa075).toFixed(2)),l(n,52,0,u.tetoFaixa075(),u.tetoFaixa150()),l(n,55,0,u.pagador.valorFaixa150.toFixed(2),(.15*u.pagador.valorFaixa150).toFixed(2)),l(n,62,0,u.tetoFaixa150(),u.tetoFaixa225()),l(n,65,0,u.pagador.valorFaixa225.toFixed(2),(.225*u.pagador.valorFaixa225).toFixed(2)),l(n,72,0,u.tetoFaixa225()),l(n,75,0,u.pagador.valorFaixa275.toFixed(2),(.275*u.pagador.valorFaixa275).toFixed(2))}))}function h(l){return a.Kb(0,[(l()(),a.tb(0,0,null,null,1,"app-result",[],null,null,null,c,d)),a.sb(1,114688,null,0,r,[s.m,e.a],null,null)],(function(l,n){l(n,1,0)}),null)}var x=a.pb("app-result",r,h,{},{},[]),F=u("Ip0R"),k=u("gIcY");u.d(n,"ResultPageModuleNgFactory",(function(){return p}));var p=a.qb(t,[],(function(l){return a.Bb([a.Cb(512,a.j,a.bb,[[8,[o.a,x]],[3,a.j],a.x]),a.Cb(4608,F.j,F.i,[a.u,[2,F.q]]),a.Cb(4608,k.i,k.i,[]),a.Cb(4608,b.a,b.a,[a.z,a.g]),a.Cb(4608,b.Eb,b.Eb,[b.a,a.j,a.q]),a.Cb(4608,b.Ib,b.Ib,[b.a,a.j,a.q]),a.Cb(1073742336,F.b,F.b,[]),a.Cb(1073742336,k.h,k.h,[]),a.Cb(1073742336,k.a,k.a,[]),a.Cb(1073742336,b.Cb,b.Cb,[]),a.Cb(1073742336,s.o,s.o,[[2,s.t],[2,s.m]]),a.Cb(1073742336,t,t,[]),a.Cb(1024,s.k,(function(){return[[{path:"",component:r}]]}),[])])}))}}]);