(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{10:function(e,a,c){e.exports={card:"Card_card__2nqQ3",cabecera:"Card_cabecera__3lxg4",cabTitulo:"Card_cabTitulo__3Zwr7",detalle:"Card_detalle__SAcQl",cuerpo:"Card_cuerpo__1eBvj",imagen:"Card_imagen__2nMgB",img_rec:"Card_img_rec__1ydf9",rayaRosa:"Card_rayaRosa__24N2i",rayaPurpura:"Card_rayaPurpura__At1Ky",rayaNaranja:"Card_rayaNaranja__nkHGz",etiqueta:"Card_etiqueta__3CGpS",valor1:"Card_valor1__2wwtd",valor2:"Card_valor2__ieh_D"}},21:function(e,a,c){e.exports={mainContainer:"NavBar_mainContainer__3K-ya",UL:"NavBar_UL__1HmLp",LI:"NavBar_LI__1Gn_J",L:"NavBar_L__1AiUp",active:"NavBar_active__21q6O"}},23:function(e,a,c){e.exports={main:"Paginado_main__1Op4f",navegacion:"Paginado_navegacion__Iea4Z",inputT:"Paginado_inputT__h---x",filtro:"Paginado_filtro__680Ef",spamerror:"Paginado_spamerror__1APNn"}},24:function(e,a,c){e.exports={main:"Home_main__1ZxUK",filtros:"Home_filtros__11uhF",tarjetas:"Home_tarjetas__3Lqph",cabecera:"Home_cabecera__2I4k1",detalle:"Home_detalle__1YeIh"}},37:function(e,a,c){e.exports={titulo:"NoFoundCard_titulo__3867A",detalle:"NoFoundCard_detalle__1w2h7"}},38:function(e,a,c){e.exports={mainContainer:"CardContainer_mainContainer__1jv4j"}},46:function(e,a,c){},47:function(e,a,c){},6:function(e,a,c){e.exports={main:"Detail_main__2xL8O",cabecera:"Detail_cabecera__2f_nJ",titulo:"Detail_titulo__3pVQk",cabTitulo:"Detail_cabTitulo__2-7FW",cabTituloDet:"Detail_cabTituloDet__1yIU7",cuerpo:"Detail_cuerpo__21PYO",cuerpo1:"Detail_cuerpo1__3wj3U",cuerpo2:"Detail_cuerpo2__33Qxj",valor:"Detail_valor__3hHpW",img_rec:"Detail_img_rec__bXyxB",detalle:"Detail_detalle__3YmCP",detalle2:"Detail_detalle2__ubdJj",rayaRosa:"Detail_rayaRosa__1z7pa",rayaPurpura:"Detail_rayaPurpura__1yn2Q",rayaNaranja:"Detail_rayaNaranja__2baTL",cuerpoP1:"Detail_cuerpoP1__3zlu9",cuerpoP2:"Detail_cuerpoP2__2m8Yr",cuerpo3:"Detail_cuerpo3__Gf11g",resumen:"Detail_resumen__1uqc5",detalle1:"Detail_detalle1__1lkzu",subDetalle1:"Detail_subDetalle1__2zMdG",subDetalle2:"Detail_subDetalle2__3_reP",subDetalle3:"Detail_subDetalle3__2mrJA"}},61:function(e,a,c){"use strict";c.r(a);var t=c(2),n=c.n(t),s=c(29),r=c.n(s),i=(c(46),c(47),c(8)),l=c(18),o=c(3),j=c(17),d=c(13),b=c(23),u=c.n(b),m=c(19),h=c(27),O="GET_RECETAS",p="GET_RECETA_BY_ID",x="SET_NEXT_PAGE",_="SET_PREV_PAGE",v="SET_FIRST_PAGE",g="SET_LAST_PAGE",f="SET_MAX_PAGE",N="SET_ERROR",D="GET_DIETAS",P="UPDATE_RECETAS",R=0,k=function(){return function(e){e({type:x})}},C=function(){return function(e){e({type:_})}},y=function(e){return function(a){a({type:P,payload:e})}},A=c(0),w=function(e){var a=Object(d.b)(),c=Object(t.useState)({fRecetas:[],PrevRecetas:[],word:""}),n=Object(j.a)(c,2),s=n[0],r=n[1],i=Object(t.useState)({fRecetas:[],word:""}),b=Object(j.a)(i,2),m=b[0],h=b[1],O=function(){var c;a((c=e.maximo,function(e){e({type:f,payload:c})}))},p=function(e){""===e.word?h(Object(o.a)(Object(o.a)({},m),{},{word:"debe ingresar caracteres de busqueda"})):h(Object(o.a)(Object(o.a)({},m),{},{word:""}))},x=function(c){var t=function(a){var c=[];switch(a){case"cmdAlfAsc":c=e.recetas.sort((function(e,a){return e.nombre>a.nombre}));break;case"cmdAlfDes":c=e.recetas.sort((function(e,a){return e.nombre<a.nombre}));break;case"cmdHSAsc":c=e.recetas.sort((function(e,a){return e.comidaSaludable-a.comidaSaludable}));break;case"cmdHSDes":c=e.recetas.sort((function(e,a){return a.comidaSaludable-e.comidaSaludable}))}return r(Object(o.a)(Object(o.a)({},s),{},{PrevRecetas:e.recetas})),c}(c.target.name);a(y(t)),a(k()),a(C())};return Object(A.jsxs)("div",{className:u.a.main,children:[Object(A.jsxs)("div",{className:u.a.navegacion,children:[Object(A.jsx)("input",{type:"button",onClick:function(){a((function(e){e({type:v})}))},value:"First"}),Object(A.jsx)("button",{onClick:function(){1!==e.pagina&&a(C())},children:" Prev "}),Object(A.jsx)("label",{children:e.pagina})," ",Object(A.jsxs)("p",{children:["de ",e.maximo]}),Object(A.jsx)("button",{onClick:function(){e.maximo!==e.pagina&&a(k())},children:"Next"}),Object(A.jsx)("button",{onClick:function(){O(),a((function(e){e({type:g})}))},children:"Last"})]}),Object(A.jsxs)("div",{className:u.a.filtro,children:[Object(A.jsx)("label",{children:"Filtrar por Palabra"}),Object(A.jsx)("input",{type:"text",id:"txtWord",value:s.word,onChange:function(e){var a=e.target.name,c=e.target.value;p(Object(o.a)(Object(o.a)({},s),{},Object(l.a)({},a,c))),r(Object(o.a)(Object(o.a)({},s),{},Object(l.a)({},a,c)))},name:"word"}),Object(A.jsx)("button",{onClick:function(){if(""===s.word)return alert("Debe Ingresar al menos 1 Caracter");var c=function(a){var c=e.recetas.filter((function(e){return e.nombre.toUpperCase().includes(a.toUpperCase())}));return r(Object(o.a)(Object(o.a)({},s),{},{PrevRecetas:e.recetas})),c}(s.word);a(y(c))},id:"cmdFiltrar",name:"cmdFiltrar",children:"Filtrar "}),Object(A.jsxs)("span",{className:u.a.spamerror,children:[" ",m.word&&m.word,"   "]}),Object(A.jsx)("button",{onClick:function(){0!==s.PrevRecetas.length?(console.log("Limpiamos"),r(Object(o.a)(Object(o.a)({},s),{},{word:""})),a(y(s.PrevRecetas))):alert("Antes debes aplicar una busqueda")},id:"cmdMostrarT",name:"cmdMostrarT",children:"Mostrar Todos "})]}),Object(A.jsxs)("div",{className:u.a.filtro,children:[Object(A.jsx)("label",{children:"Orden   Alfabetico"}),Object(A.jsxs)("div",{children:[Object(A.jsx)("button",{onClick:x,id:"cmdAlfAsc",name:"cmdAlfAsc",children:"Ascendente "}),Object(A.jsx)("button",{onClick:x,id:"cmdAlfDes",name:"cmdAlfDes",children:"Descendente"})]})]}),Object(A.jsxs)("div",{className:u.a.filtro,children:[Object(A.jsx)("label",{children:"Orden   Nivel de Comida Saludable"}),Object(A.jsxs)("div",{children:[Object(A.jsx)("button",{onClick:x,id:"cmdHSAsc",name:"cmdHSAsc",children:"Ascendente "}),Object(A.jsx)("button",{onClick:x,id:"cmdHSDes",name:"cmdHSDes",children:"Descendente"})]})]})]})},E=c(15),M=c(10),L=c.n(M),S=function(e){return Object(A.jsxs)("div",{className:L.a.card,children:[Object(A.jsxs)("div",{className:L.a.cabecera,children:[Object(A.jsxs)("div",{className:L.a.cabTitulo,children:[" ",e.nombre]}),Object(A.jsx)("div",{className:L.a.rayaRosa}),Object(A.jsx)("div",{className:L.a.rayaNaranja})]}),Object(A.jsxs)("div",{className:L.a.detalle,children:[Object(A.jsx)("div",{className:L.a.imagen,children:Object(A.jsx)("img",{className:L.a.img_rec,src:e.imagen,alt:e.nombre})}),Object(A.jsxs)("div",{className:L.a.cuerpo,children:[Object(A.jsxs)("div",{className:L.a.item,children:[Object(A.jsx)("div",{className:L.a.etiqueta,children:Object(A.jsx)("div",{children:Object(A.jsx)("h2",{children:"Comida Saludable"})})}),Object(A.jsx)("div",{className:L.a.valor1,children:Object(A.jsx)("div",{children:Object(A.jsx)("h2",{children:e.comidaSaludable})})})]}),Object(A.jsxs)("div",{className:L.a.item,children:[Object(A.jsx)("div",{className:L.a.etiqueta,children:Object(A.jsx)("div",{children:Object(A.jsx)("h2",{children:"Dietas"})})}),Object(A.jsx)("div",{className:L.a.valor2,children:Object(A.jsx)("span",{children:Object(A.jsx)("h3",{children:!0===e.create?e.tipoDeDieta.map((function(e){return e.nombre})):e.tipoDeDieta.map((function(e){return e}))})})}),Object(A.jsx)("div",{className:L.a.etiqueta,children:Object(A.jsx)(E.b,{to:{pathname:"/detail",state:{idCard:"".concat(e.id)}},children:"  Mostrar Detalle    "})})]})]})]})]})},T=c(37),G=c.n(T),B=function(e){return Object(A.jsxs)("div",{children:[Object(A.jsx)("div",{className:G.a.titulo,children:"ERROR :"}),Object(A.jsx)("div",{className:G.a.detalle,children:e.error.error})]})},H=c(38),F=c.n(H),I=function(e){return"NULL"!==e.error?(console.log("CAPTURANDO ERROR SERVIDOR"),Object(A.jsx)("div",{className:F.a.mainContainer,children:Object(A.jsx)(B,{error:e.error})})):Object(A.jsx)("div",{className:F.a.mainContainer,children:0===e.recetas.length?Object(A.jsx)(B,{error:{error:"No se encontraron Resultados"}}):e.recetas.slice((e.pagina-1)*e.porPagina,(e.pagina-1)*e.porPagina+e.porPagina).map((function(e){return Object(A.jsx)(S,{id:e.id,nombre:e.nombre,resumen:e.resumen,create:e.create,comidaSaludable:e.comidaSaludable,tipoDeDieta:e.tipoDeDieta,imagen:e.imagen},e.id)}))})},U=c(24),Z=c.n(U),Y=function(){var e=Object(d.b)();Object(t.useEffect)((function(){e(function(){var e=Object(h.a)(Object(m.a)().mark((function e(a){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:3001/recipes/").then((function(e){return R=e.status,e.json()})).then((function(e){a(400===R?{type:N,payload:e}:{type:O,payload:e})})).catch((function(e){a({type:N,payload:e.message})})));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}())}),[e]);var a=Object(d.c)((function(e){return e.msgerror})),c=Object(d.c)((function(e){return e.recetas})),n=Object(d.c)((function(e){return e.pagina})),s=Object(d.c)((function(e){return e.porPagina})),r=Math.ceil(c.length/s);return Object(A.jsxs)("div",{className:Z.a.main,children:[Object(A.jsx)("div",{className:Z.a.cabecera,children:Object(A.jsx)("h1",{children:"Recetas"})}),Object(A.jsxs)("div",{className:Z.a.detalle,children:[Object(A.jsx)("div",{className:Z.a.filtros,children:Object(A.jsx)(w,{pagina:n,maximo:r,recetas:c})}),Object(A.jsx)("div",{className:Z.a.tarjetas,children:Object(A.jsx)(I,{recetas:c,porPagina:s,pagina:n,error:a})})]})]})},K=c.p+"static/media/icons8-facebook.ef824524.svg",W=c.p+"static/media/icons8-twitter-cuadrado.7b90f1e7.gif",z=c.p+"static/media/icons8-instagram.7b45b5c6.gif",V=c.p+"static/media/bonbon-four-pointed-star-1.e5995a6d.png",Q=c(7),J=c.n(Q),q=function(){return Object(A.jsxs)("div",{className:!0,children:[Object(A.jsx)("div",{className:J.a.titulo,children:"RECETARIO.COM"}),Object(A.jsxs)("div",{className:J.a.main,children:[Object(A.jsxs)("div",{className:J.a.cabecera,children:[Object(A.jsxs)("div",{className:J.a.redes,children:[Object(A.jsx)("img",{className:J.a.ico,src:K,alt:"algo"}),Object(A.jsx)("img",{className:J.a.ico,src:W,alt:"algo"}),Object(A.jsx)("img",{className:J.a.ico,src:z,alt:"algo"})]}),Object(A.jsxs)("div",{className:J.a.carrusel,children:[Object(A.jsx)("div",{className:J.a.carrusel_f1}),Object(A.jsx)("div",{className:J.a.carrusel_f3}),Object(A.jsx)("div",{className:J.a.carrusel_f2}),Object(A.jsx)("div",{className:J.a.carrusel_f4})]})]}),Object(A.jsxs)("div",{className:J.a.cuerpo,children:[Object(A.jsx)("div",{className:J.a.separ1,children:Object(A.jsx)("h2",{children:"En esta pagina podras encontrar:"})}),Object(A.jsxs)("div",{className:J.a.separ2,children:[Object(A.jsx)("div",{}),Object(A.jsx)("div",{children:Object(A.jsx)("h3",{children:Object(A.jsxs)("div",{className:J.a.tabla,children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("img",{className:J.a.ico2,src:V,alt:"vi\xf1eta"}),"Acceso a cientos de Recetas"]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("img",{className:J.a.ico2,src:V,alt:"vi\xf1eta"}),"Busqueda de recetas por Nombre / ID"]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("img",{className:J.a.ico2,src:V,alt:"vi\xf1eta"}),"Creacion de Nuevas Recetas"]})]})})}),Object(A.jsx)("div",{})]}),Object(A.jsx)("div",{className:J.a.separ3,children:Object(A.jsx)(E.b,{to:"/home",children:Object(A.jsx)("button",{className:J.a.boton,children:"Ingresar"})})})]}),Object(A.jsxs)("div",{className:J.a.pie,children:[Object(A.jsxs)("div",{className:J.a.sepPie1,children:[Object(A.jsx)("div",{}),Object(A.jsx)("div",{children:"Copyright \xa9 2023 Henry"})]}),Object(A.jsxs)("div",{className:J.a.sepPie2,children:[Object(A.jsx)("div",{children:Object(A.jsx)("img",{className:J.a.ico3,src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAkYAAABsCAMAAAC4q40nAAABOFBMVEVHcEz////////y8sv//////////////////////////////////6D9/f3///////////////////8AAAD//////wL//////////////wH//////////wH//////////////wb//////////wL//////////////wP//////wT//wH//////xD//wX//wH//wL//////wL///////8AAAD//wL//wH//wP//wH//////wL//wL//wH//wr//wH///n//////wH//wL//wT//wf//////////////0H//53//7T//0j//wH//////0r//y7//zz//yD//1n//8P//4z//xX//wr//5b///z//2v//6f//83//7D//4D//3P//9f//97//+7///b//2P//7n//3r//57//+dp4Wy5AAAATHRSTlMA4f0CP78VqvgYqLsGK+0iNPOyCwliSWiTwneBz6AQmijG1ITOitxVW0PkHA8x/HDol1E5BqHsTPRteqe6GNtkDa+NOiKnpBflwbvuvBnTXQAAC2JJREFUeNrt3WlD4rwTAPBoUWABBBZRxFsAVVTUx/ta1d39H4BcgigoKML3/wZPwV1PoJM0bRPIvF7Ktv0xk6TTiBKwQB1C5cdxjwOJAUpf5PS2PYBF55MdtDhjA+E5z0xg3zciIdywQb7DHRzreOQxwOeHkGDUMU6ZYPQhLPPmfReWJRfMasLmVeHQJBh1jiB7jF5yh21iBO7IDDxqqP3HhweVP2pDglGX2GKTkZw7EnMTK0BGjkFgovvR5sP/oFNQMhKMusRPRhm93PZfLpijKeABF9sysoGSkWDU7U5ZGWbUHNluQRiNWGBHM7djBKlpW4JR9wiwzUjOl5DSNg4ccnnJapoNCUbdxyAxO+OMEu59ZUa/3bBjbZLVtC3BiGC8wBajRMIzrfh9AcKhoASpaR4kGCmlozn2GSUGHErfN+0kq2rfIWuPW4KRcjjYZ5RwKk7ZJsiq2ndATfMgwUg5ZjhglHCbFL7QGwMd5xdBTXMJRpA7NM0Bo4Rbqa6NwQ5jx65pHiQYQWKCB0aJsMI42x4GHcaHXdNcghHsBkk8MErYFJ7XLoKOMvVhtg+oaR4kGCUIfqGsMurQjvA2zpkHDdbt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",alt:"vi\xf1eta"})}),Object(A.jsx)("div",{children:Object(A.jsx)("a",{href:"https://github.com/Davico84/",children:" GitHub"})})]})]})]})]})},X=c(9),$=c.n(X),ee=c(63),ae=function(){var e=Object(t.useState)({nombre:"",resumen:"",comidaSaludable:"",pasoAPaso:"",TiposdeDieta:[]}),a=Object(j.a)(e,2),c=a[0],n=a[1],s=Object(t.useState)({nombre:"",resumen:"",comidaSaludable:"",pasoAPaso:"",TiposdeDieta:[]}),r=Object(j.a)(s,2),i=r[0],d=r[1],b=Object(t.useState)({chk1:!1,chk2:!1,chk3:!1,chk4:!1,chk5:!1,chk6:!1,chk7:!1,chk8:!1,chk9:!1,chk10:!1,chk11:!1}),u=Object(j.a)(b,2),m=u[0],h=u[1],O=function(e){var a=e.target.name,t=e.target.value;x(Object(o.a)(Object(o.a)({},c),{},Object(l.a)({},a,t))),n(Object(o.a)(Object(o.a)({},c),{},Object(l.a)({},a,t)))},p=function(e){var a=e.target.name,c=e.target.value;h(Object(o.a)(Object(o.a)({},m),{},Object(l.a)({},a,c)))},x=function(e){e.nombre.length<=3?d(Object(o.a)(Object(o.a)({},i),{},{nombre:'Campo "Nombre" Requerido'})):d(Object(o.a)(Object(o.a)({},i),{},{nombre:""})),e.resumen.length<=3?d(Object(o.a)(Object(o.a)({},i),{},{resumen:'Campo "Resumen" Requerido'})):d(Object(o.a)(Object(o.a)({},i),{},{resumen:""}))};return Object(A.jsxs)("div",{className:$.a.main,children:[Object(A.jsx)("div",{className:$.a.titulo,children:Object(A.jsx)("h1",{children:"Creacion de Receta"})}),Object(A.jsxs)("form",{onSubmit:function(e){if(""===c.nombre||""===c.resumen)return alert("debe registrar un nombre y resumen valido para continuar");c.TiposdeDieta=function(){var e=[];for(var a in m)"false"!=="".concat(m[a])&&e.push("".concat(m[a]));return e}(),e.preventDefault(),console.log("que manda form",c),ee.a.post("http://localhost:3001/recipes/",c).then((function(e){alert("El registro fue A\xf1adido"),function(e){for(var a in e)console.log("propiedad",[a]),n(Object(o.a)(Object(o.a)({},[e]),{},Object(l.a)({},a,"")))}(c)})).catch((function(e){return alert("Error:",e)}))},className:$.a.form,children:[Object(A.jsxs)("div",{className:$.a.cajas,children:[Object(A.jsxs)("div",{className:$.a.labels,children:[Object(A.jsx)("p",{children:Object(A.jsx)("label",{htmlFor:"txtnom",children:"Nombre"})}),Object(A.jsx)("p",{children:Object(A.jsx)("label",{htmlFor:"txtrex",children:"Resumen"})}),Object(A.jsx)("p",{children:Object(A.jsx)("label",{htmlFor:"numcom",children:'Nivel de "Comida Saludable" '})}),Object(A.jsx)("p",{children:Object(A.jsx)("label",{htmlFor:"txtpaso",children:"Paso a paso"})})]}),Object(A.jsxs)("div",{className:$.a.inputs,children:[Object(A.jsx)("p",{children:Object(A.jsx)("input",{className:$.a.intex,type:"text",id:"txtnom",value:c.nombre,onChange:O,name:"nombre"})}),Object(A.jsx)("p",{children:Object(A.jsx)("input",{className:$.a.intex,type:"text",id:"txtres",value:c.resumen,onChange:O,name:"resumen"})}),Object(A.jsx)("p",{children:Object(A.jsx)("input",{className:$.a.intex,type:"number",id:"numcom",min:"10",max:"100",value:c.comidaSaludable,onChange:O,name:"comidaSaludable"})}),Object(A.jsx)("p",{children:Object(A.jsx)("textarea",{className:$.a.memo,value:c.pasoAPaso,name:"pasoAPaso",onChange:O,rows:20,cols:40})})]}),Object(A.jsxs)("div",{className:$.a.mainerrors,children:[Object(A.jsx)("p",{children:i.nombre&&Object(A.jsxs)("span",{className:$.a.spamerror,children:[" ",i.nombre," "]})}),Object(A.jsx)("p",{children:i.resumen&&Object(A.jsxs)("span",{className:$.a.spamerror,children:[i.resumen," "]})}),Object(A.jsx)("p",{children:i.comidaSaludable&&Object(A.jsx)("span",{className:$.a.spamerror,children:" error comida  sal "})}),Object(A.jsx)("p",{children:i.pasoAPaso&&Object(A.jsx)("span",{className:$.a.spamerror,children:" error paso a pas"})})]})]}),Object(A.jsxs)("div",{className:$.a.mainchks,children:[Object(A.jsx)("p",{children:"Dietas"}),Object(A.jsxs)("div",{className:$.a.chks,children:[Object(A.jsx)("input",{type:"checkbox",id:"1",name:"chk1",onChange:p,checked:m.chk1,value:"Ketogenic"}),"Ketogenic",Object(A.jsx)("input",{type:"checkbox",id:"2",name:"chk2",onChange:p,checked:m.chk2,value:"Gluten_Free"}),"Gluten Free",Object(A.jsx)("input",{type:"checkbox",id:"3",name:"chk3",onChange:p,checked:m.chk3,value:"Vegetarian"}),"Vegetarian",Object(A.jsx)("input",{type:"checkbox",id:"4",name:"chk4",onChange:p,checked:m.chk4,value:"Lacto-Vegetarian"}),"Lacto-Vegetarian",Object(A.jsx)("input",{type:"checkbox",id:"5",name:"chk5",onChange:p,checked:m.chk5,value:"Ovo-Vegetarian"}),"Ovo-Vegetarian"]}),Object(A.jsxs)("div",{className:$.a.chks,children:[Object(A.jsx)("input",{type:"checkbox",id:"6",name:"chk6",onChange:p,checked:m.chk6,value:"Vegan"}),"Vegan",Object(A.jsx)("input",{type:"checkbox",id:"7",name:"chk7",onChange:p,checked:m.chk7,value:"Paleo"}),"Paleo",Object(A.jsx)("input",{type:"checkbox",id:"8",name:"chk8",onChange:p,checked:m.chk8,value:"Pescetarian"}),"Pescetarian",Object(A.jsx)("input",{type:"checkbox",id:"9",name:"chk9",onChange:p,checked:m.chk9,value:"Primal"}),"Primal",Object(A.jsx)("input",{type:"checkbox",id:"10",name:"chk10",onChange:p,checked:m.chk10,value:"Whole30"}),"Whole30",Object(A.jsx)("input",{type:"checkbox",id:"11",name:"chk11",onChange:p,checked:m.chk11,value:"LowFODMAP"}),"LowFODMAP"]})]}),Object(A.jsx)("button",{className:$.a.bootom,type:"submit",children:"Crear Receta"})]})]})},ce=c(6),te=c.n(ce),ne=function(){var e=Object(i.e)().state.idCard,a=Object(d.b)();Object(t.useEffect)((function(){var c;a((c=e,function(){var e=Object(h.a)(Object(m.a)().mark((function e(a){return Object(m.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("http://localhost:3001/recipes/".concat(c)).then((function(e){return R=e.status,e.json()})).then((function(e){a(400===R?{type:N,payload:e}:{type:p,payload:e})})).catch((function(e){a({type:N,payload:e.message})})));case 1:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()))}),[a,e]);var c,n=(c=Object(d.c)((function(e){return e.receta}))).map((function(e){return!1===c[0].create?{id:e.id,nombre:e.nombre,resumen:e.resumen,comidaSaludable:e.comidaSaludable,pasoAPaso:e.pasoAPaso[0].steps.map((function(e){return e})),create:e.create,tipoDeDieta:e.tipoDeDieta.map((function(e){return e})),imagen:e.imagen}:{id:e.id,nombre:e.nombre,resumen:e.resumen,comidaSaludable:e.comidaSaludable,pasoAPaso:e.pasoAPaso,create:e.create,tipoDeDieta:e.tipoDeDieta.map((function(e){return' "'+e.nombre+'" '})),imagen:e.imagen}})),s=0===n.length?"sin datos":n[0].resumen;return Object(A.jsxs)("div",{className:te.a.main,children:[Object(A.jsx)("div",{className:te.a.titulo,children:Object(A.jsx)("h1",{children:"Detalle de Receta"})}),Object(A.jsx)("div",{className:te.a.cabecera,children:Object(A.jsxs)("div",{className:te.a.cabTitulo,children:[Object(A.jsx)("div",{className:te.a.cabTituloDet,children:0===n.length?"sin datos":n[0].nombre}),Object(A.jsx)("div",{className:te.a.cabTituloDet,children:0===n.length?"sin datos":n[0].id}),Object(A.jsx)("div",{className:te.a.rayaRosa}),Object(A.jsx)("div",{className:te.a.rayaNaranja})]})}),Object(A.jsxs)("div",{className:te.a.cuerpo,children:[Object(A.jsxs)("div",{className:te.a.cuerpoP1,children:[Object(A.jsx)("div",{className:te.a.cuerpo1,children:Object(A.jsx)("img",{className:te.a.img_rec,src:0===n.length?"sin datos":n[0].imagen,alt:0===n.length?"sin datos":n[0].nombre})}),Object(A.jsxs)("div",{className:te.a.cuerpo2,children:[Object(A.jsxs)("div",{children:[Object(A.jsx)("h2",{children:"Comida Saludable"}),Object(A.jsx)("p",{className:te.a.valor,children:0===n.length?"sin datos":n[0].comidaSaludable})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("h2",{children:"Tipos de Dieta"}),Object(A.jsxs)("p",{className:te.a.valor,children:[" ",0===n.length?"sin datos":!0===n[0].create?n[0].tipoDeDieta:n[0].tipoDeDieta.map((function(e){return e}))]})]}),Object(A.jsxs)("div",{children:[Object(A.jsx)("h2",{children:"Data Obtenida por:"}),Object(A.jsx)("p",{className:te.a.valor,children:0===n.length?"sin datos":!1===n[0].create?'"API"':'"Base de Datos Local"'})]})]})]}),Object(A.jsxs)("div",{className:te.a.cuerpoP2,children:[Object(A.jsx)("div",{className:te.a.subtitulos,children:Object(A.jsx)("h3",{children:"Resumen"})}),Object(A.jsx)("div",{dangerouslySetInnerHTML:{__html:s},className:te.a.cuerpo3})]})]}),Object(A.jsx)("div",{className:te.a.detalle,children:Object(A.jsxs)("div",{className:te.a.detalle1,children:[Object(A.jsx)("h3",{children:"Instrucciones:"}),0===n.length?"sin datos":!0===n[0].create?n[0].pasoAPaso:n[0].pasoAPaso.map((function(e){return Object(A.jsxs)("div",{className:te.a.subDetalle1,children:["Paso  ",e.number," : ",e.step,0===e.equipment.length?" ":Object(A.jsxs)("div",{className:te.a.subDetalle2,children:[Object(A.jsx)("h4",{children:"Equipamiento:"})," ",e.equipment.map((function(e,a){return Object(A.jsxs)("p",{className:te.a.subDetalle3,children:["\xa0\xa0 ",a+1," : ",e.name]},e.id)}))]}),0===e.ingredients.length?" ":Object(A.jsxs)("div",{className:te.a.subDetalle2,children:[Object(A.jsx)("h4",{children:"Ingredientes: "}),e.ingredients.map((function(e,a){return Object(A.jsxs)("p",{className:te.a.subDetalle3,children:["\xa0\xa0  ",a+1," : ",e.name]},e.id)}))]})]},e.number)}))]})})]})},se=function(){return Object(A.jsx)("div",{children:"Este es el Formulario de Dietas"})},re=c(21),ie=c.n(re),le=function(){return Object(A.jsx)(A.Fragment,{children:Object(A.jsxs)("ul",{className:ie.a.UL,children:[Object(A.jsxs)("li",{className:ie.a.LI,children:[" ",Object(A.jsx)(E.b,{className:ie.a.active,to:"/home",children:"HOME"})]}),Object(A.jsx)("li",{className:ie.a.LI,children:Object(A.jsx)(E.b,{className:ie.a.L,to:"/create",children:"FORM"})}),Object(A.jsx)("li",{className:ie.a.LI,children:Object(A.jsx)(E.b,{className:ie.a.L,to:"/diets",children:"DIETAS"})})]})})};var oe=function(){var e=Object(i.e)();return Object(A.jsxs)("div",{className:"App",children:["/"!==e.pathname&&Object(A.jsx)(le,{}),Object(A.jsx)(i.a,{exact:!0,path:"/",component:q}),"  ",Object(A.jsx)(i.a,{exact:!0,path:"/detail/:id",component:ne}),Object(A.jsx)(i.a,{exact:!0,path:"/detail",component:ne}),Object(A.jsx)(i.a,{exact:!0,path:"/create",component:ae}),Object(A.jsx)(i.a,{exact:!0,path:"/diets",component:se}),Object(A.jsx)(i.a,{exact:!0,path:"/home",render:function(){return Object(A.jsx)(Y,{unaProp:"valor"})}})]})},je=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(a){var c=a.getCLS,t=a.getFID,n=a.getFCP,s=a.getLCP,r=a.getTTFB;c(e),t(e),n(e),s(e),r(e)}))},de=c(33),be={recetas:[],receta:[],pagina:1,porPagina:9,input:1,maximo:0,msgerror:"NULL",dietas:[]},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case O:return Object(o.a)(Object(o.a)({},e),{},{recetas:a.payload});case p:return Object(o.a)(Object(o.a)({},e),{},{receta:a.payload});case x:return Object(o.a)(Object(o.a)({},e),{},{pagina:e.pagina+1});case _:return Object(o.a)(Object(o.a)({},e),{},{pagina:e.pagina-1});case v:return Object(o.a)(Object(o.a)({},e),{},{pagina:1});case g:return Object(o.a)(Object(o.a)({},e),{},{pagina:e.maximo});case f:return Object(o.a)(Object(o.a)({},e),{},{maximo:a.payload});case N:return Object(o.a)(Object(o.a)({},e),{},{msgerror:a.payload});case D:return Object(o.a)(Object(o.a)({},e),{},{dietas:a.payload});case P:return Object(o.a)(Object(o.a)({},e),{},{recetas:a.payload});default:return Object(o.a)({},e)}},me=c(41),he=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||de.b,Oe=Object(de.c)(ue,he(Object(de.a)(me.a)));r.a.render(Object(A.jsx)(d.a,{store:Oe,children:Object(A.jsx)(E.a,{children:Object(A.jsx)(n.a.StrictMode,{children:Object(A.jsx)(oe,{})})})}),document.getElementById("root")),je()},7:function(e,a,c){e.exports={main:"Landing_main__2HVUy",cabecera:"Landing_cabecera__3Oef-",redes:"Landing_redes__1n-d2",imagen:"Landing_imagen__2WX8V",ico:"Landing_ico__1K9It",ico2:"Landing_ico2__16mBE",ico3:"Landing_ico3__3CeB-",carrusel:"Landing_carrusel__2nB2i",carrusel_f1:"Landing_carrusel_f1__2vFJK",carrusel_f3:"Landing_carrusel_f3__2s8u0",carrusel_f2:"Landing_carrusel_f2__2aWA5",carrusel_f4:"Landing_carrusel_f4__38_vX",carrusel_f5:"Landing_carrusel_f5__Ft5Us",cuerpo:"Landing_cuerpo__nSFFA",separ1:"Landing_separ1__1fg_D",separ2:"Landing_separ2__n550v",separ3:"Landing_separ3__FFDvH",pie:"Landing_pie__rcktC",pieIcono:"Landing_pieIcono__nDeSP",titulo:"Landing_titulo__QSUZN",boton:"Landing_boton__3c_uT","vi\xf1etas":"Landing_vi\xf1etas__cbSB8",tabla:"Landing_tabla__1yOOw",sepPie1:"Landing_sepPie1__3Hsbz",sepPie2:"Landing_sepPie2__10E17"}},9:function(e,a,c){e.exports={main:"Form_main__HdAMT",form:"Form_form__XCFMA",titulo:"Form_titulo__1ffRD",cajas:"Form_cajas__1VnMX",mainchks:"Form_mainchks__1MmqA",chks:"Form_chks__uVPtD",inputs:"Form_inputs__MEE7C",labels:"Form_labels__3p3WE",mainerrors:"Form_mainerrors__3i1iE",spamerror:"Form_spamerror__326BU",intex:"Form_intex__L5e6V",memo:"Form_memo__2gNop",bootom:"Form_bootom__3-zTQ"}}},[[61,1,2]]]);
//# sourceMappingURL=main.6614c031.chunk.js.map