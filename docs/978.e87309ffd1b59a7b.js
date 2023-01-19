"use strict";(self.webpackChunkmes_gourmandys=self.webpackChunkmes_gourmandys||[]).push([[978],{4978:(l3,z,l)=>{l.r(z),l.d(z,{AdminModule:()=>n3});var f=l(6895),h=l(1387),m=l(801),c=l(8256),v=l(5482),C=l(2805),g=l(263),p=l(3868),H=l(3080),s=l(433),d=l(9891),u=l(5845);let V=(()=>{class t{constructor(e,a,i){this.formBuilder=e,this.productsService=a,this.toast=i,this.newProduct=new c.vpe}ngOnInit(){this.addItem=this.formBuilder.group({title:[null,s.kI.required],id:[null,s.kI.required],image:[null,s.kI.required],price:[null,s.kI.required],sku:[null,s.kI.required],description:[null,s.kI.required],allergens:[null,s.kI.required],isActive:[!0,s.kI.required]})}onCreateItem(){const{title:e,price:a,sku:i,description:r,allergens:o,isActive:i3}=this.addItem.value;var r3=this.addItem.get("image").value;let o3=i.toUpperCase();const s3=e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/&/g,"and").replace(/ - /g,"-").replace(/ /g,"-").replace(/[^\w-]+/g,"");this.productsService.createProduct(e,s3,r3,a,o3,r,o,i3).subscribe({next:_=>{this.toast.initiate({title:"Success",message:_.message}),this.newProduct.emit({message:"refresh"}),this.addItem.reset({isActive:!0})},error:_=>{this.toast.initiate({title:"Erreur",message:_.message})}})}imageSelected(e){const a=e.target.files[0];this.addItem.get("image").setValue(a),this.addItem.updateValueAndValidity(),(new FileReader).readAsDataURL(a)}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(s.qu),c.Y36(v.s),c.Y36(d.k))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-add-item"]],outputs:{newProduct:"newProduct"},decls:34,vars:1,consts:[[1,"addItemForm",3,"formGroup"],[1,"addItemForm__right"],[1,"addItemForm__group"],["for","title"],["type","text","placeholder","Nom du produit","formControlName","title"],["for","price"],["type","file","id","image","placeholder","image",3,"change"],["type","text","placeholder","Prix","formControlName","price"],["type","text","placeholder","SKU","formControlName","sku",1,"addItemForm__sku"],["placeholder","Description","formControlName","description"],["type","text","placeholder","Allerg\xe8nes","formControlName","allergens"],["type","checkbox","formControlName","isActive"],["type","submit",1,"btn-action",3,"click"]],template:function(e,a){1&e&&(c.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),c._uU(4,"Nom du produit:"),c.qZA(),c._UZ(5,"input",4),c.qZA(),c.TgZ(6,"div",2)(7,"label",5),c._uU(8,"Image:"),c.qZA(),c.TgZ(9,"input",6),c.NdJ("change",function(r){return a.imageSelected(r)}),c.qZA()(),c.TgZ(10,"div",2)(11,"label",5),c._uU(12,"Prix:"),c.qZA(),c._UZ(13,"input",7),c.qZA(),c.TgZ(14,"div",2)(15,"label",5),c._uU(16,"SKU:"),c.qZA(),c._UZ(17,"input",8),c.qZA(),c.TgZ(18,"div",2)(19,"label",5),c._uU(20,"Description:"),c.qZA(),c.TgZ(21,"textarea",9),c._uU(22,"            "),c.qZA()(),c.TgZ(23,"div",2)(24,"label",5),c._uU(25,"Allerg\xe8nes:"),c.qZA(),c._UZ(26,"input",10),c.qZA(),c.TgZ(27,"div",2)(28,"label",5),c._uU(29,"Produit disponible:"),c.qZA(),c._UZ(30,"input",11),c.qZA(),c.TgZ(31,"button",12),c.NdJ("click",function(){return a.onCreateItem()}),c._uU(32," Ajouter un produit "),c.qZA()()(),c._UZ(33,"app-toast")),2&e&&c.Q6J("formGroup",a.addItem)},dependencies:[s._Y,s.Fj,s.Wl,s.JJ,s.JL,s.sg,s.u,u.q],styles:[".addItemForm[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;padding:0 60px}@media screen and (max-width: 768px){.addItemForm[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}.addItemForm__left[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.addItemForm__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding-top:10px}.addItemForm__right[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:350px;height:40px;padding:10px;border:1px solid #E58F6C;border-radius:8px;margin-bottom:10px}.addItemForm__right[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:350px;height:125px;padding:10px;border:1px solid #E58F6C;border-radius:8px;margin-bottom:10px}.addItemForm__group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;row-gap:10px}.addItemForm__title[_ngcontent-%COMP%]{font-size:2.5rem;margin:0 20px 20px}.addItemForm__text[_ngcontent-%COMP%]{text-align:center;line-height:3rem}.addItemForm__sku[_ngcontent-%COMP%]{text-transform:uppercase}"]}),t})();var x={prefix:"far",iconName:"lightbulb",icon:[352,512,[],"f0eb","M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]},M={prefix:"far",iconName:"star",icon:[576,512,[],"f005","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]},h4=l(4674),v4=l(3726);function d4(t,n){1&t&&c._UZ(0,"app-loading-spinner")}function u4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faEye)}}function _4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faEyeSlash)}}function z4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faLightbulbS)}}function C4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faLightbulbReg)}}function g4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faStarS)}}function x4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faStarReg)}}const M4=function(t){return["/detail/",t]};function H4(t,n){if(1&t){const e=c.EpF();c.TgZ(0,"tr")(1,"td")(2,"button",6),c.NdJ("click",function(){const r=c.CHM(e).$implicit,o=c.oxw(2);return c.KtG(o.editProduct(r))}),c._UZ(3,"fa-icon",7),c.qZA()(),c.TgZ(4,"td",8)(5,"div",9),c._UZ(6,"button",10),c.TgZ(7,"div",11),c._UZ(8,"img",12),c.qZA(),c.TgZ(9,"div",13)(10,"div",14)(11,"span"),c._uU(12),c.qZA(),c.TgZ(13,"span",15),c._uU(14),c.ALo(15,"currency"),c.qZA()(),c.TgZ(16,"h1",16),c._uU(17),c.qZA(),c.TgZ(18,"p",17),c._uU(19),c.qZA(),c.TgZ(20,"p")(21,"span",18),c._uU(22,"Allerg\xe8nes : "),c.qZA(),c.TgZ(23,"span"),c._uU(24),c.qZA()()()()(),c.TgZ(25,"td")(26,"button",6),c.NdJ("click",function(){const r=c.CHM(e).$implicit,o=c.oxw(2);return c.KtG(o.updateProductData("isActive",r))}),c.YNc(27,u4,1,1,"fa-icon",19),c.YNc(28,_4,1,1,"fa-icon",19),c.qZA(),c.TgZ(29,"button",6),c.NdJ("click",function(){const r=c.CHM(e).$implicit,o=c.oxw(2);return c.KtG(o.updateProductData("highlight",r))}),c.YNc(30,z4,1,1,"fa-icon",19),c.YNc(31,C4,1,1,"fa-icon",19),c.qZA(),c.TgZ(32,"button",20),c.NdJ("click",function(){const r=c.CHM(e).$implicit,o=c.oxw(2);return c.KtG(o.updateProductData("popular",r))}),c.YNc(33,g4,1,1,"fa-icon",19),c.YNc(34,x4,1,1,"fa-icon",19),c.qZA()(),c.TgZ(35,"td")(36,"button",6),c.NdJ("click",function(){const r=c.CHM(e).$implicit,o=c.oxw(2);return c.KtG(o.deleteProduct(r))}),c._UZ(37,"fa-icon",7),c.qZA()()()}if(2&t){const e=n.$implicit,a=c.oxw(2);c.xp6(3),c.Q6J("icon",a.faPenSquare),c.xp6(3),c.Q6J("routerLink",c.VKq(20,M4,e.id)),c.xp6(2),c.s9C("alt",e.title),c.Q6J("src",e.thumbImage,c.LSH),c.xp6(4),c.hij("SKU : ",e.sku,""),c.xp6(2),c.Oqu(c.xi3(15,17,e.price,"EUR")),c.xp6(3),c.hij(" ",e.title," "),c.xp6(2),c.hij(" ",e.description," "),c.xp6(5),c.Oqu(e.allergens),c.xp6(3),c.Q6J("ngIf",e.isActive),c.xp6(1),c.Q6J("ngIf",!e.isActive),c.xp6(2),c.Q6J("ngIf",e.highlight),c.xp6(1),c.Q6J("ngIf",!e.highlight),c.xp6(1),c.Q6J("disabled",!e.popular&&a.favsCount>=4),c.xp6(1),c.Q6J("ngIf",e.popular),c.xp6(1),c.Q6J("ngIf",!e.popular),c.xp6(3),c.Q6J("icon",a.faTrash)}}function V4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faEye)}}function b4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faEyeSlash)}}function A4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faLightbulbS)}}function Z4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faLightbulbReg)}}function N4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faStarS)}}function S4(t,n){if(1&t&&c._UZ(0,"fa-icon",7),2&t){const e=c.oxw(3);c.Q6J("icon",e.faStarReg)}}function T4(t,n){if(1&t){const e=c.EpF();c.TgZ(0,"tr")(1,"td")(2,"div",9)(3,"div",11),c._UZ(4,"img",12),c.qZA(),c.TgZ(5,"div",21)(6,"div",14)(7,"span"),c._uU(8),c.qZA(),c.TgZ(9,"span",15),c._uU(10),c.ALo(11,"currency"),c.qZA()(),c.TgZ(12,"h1",16),c._uU(13),c.qZA(),c.TgZ(14,"p",17),c._uU(15),c.qZA(),c.TgZ(16,"p")(17,"span",18),c._uU(18,"Allerg\xe8nes : "),c.qZA(),c.TgZ(19,"span"),c._uU(20),c.qZA()()(),c.TgZ(21,"div",22)(22,"button",6),c.NdJ("click",function(){const r=c.CHM(e).$implicit,o=c.oxw(2);return c.KtG(o.editProduct(r))}),c._UZ(23,"fa-icon",7),c.qZA(),c.TgZ(24,"button",6),c.NdJ("click",function(){const r=c.CHM(e).$implicit,o=c.oxw(2);return c.KtG(o.deleteProduct(r))}),c._UZ(25,"fa-icon",7),c.qZA()()()(),c.TgZ(26,"td",23)(27,"div")(28,"button",6),c.NdJ("click",function(){const r=c.CHM(e).$implicit,o=c.oxw(2);return c.KtG(o.updateProductData("isActive",r))}),c.YNc(29,V4,1,1,"fa-icon",19),c.YNc(30,b4,1,1,"fa-icon",19),c.qZA()(),c.TgZ(31,"div")(32,"button",6),c.NdJ("click",function(){const r=c.CHM(e).$implicit,o=c.oxw(2);return c.KtG(o.updateProductData("highlight",r))}),c.YNc(33,A4,1,1,"fa-icon",19),c.YNc(34,Z4,1,1,"fa-icon",19),c.qZA()(),c.TgZ(35,"div")(36,"button",20),c.NdJ("click",function(){const r=c.CHM(e).$implicit,o=c.oxw(2);return c.KtG(o.updateProductData("popular",r))}),c.YNc(37,N4,1,1,"fa-icon",19),c.YNc(38,S4,1,1,"fa-icon",19),c.qZA()()()()}if(2&t){const e=n.$implicit,a=c.oxw(2);c.xp6(4),c.s9C("alt",e.title),c.Q6J("src",e.thumbImage,c.LSH),c.xp6(4),c.hij("SKU : ",e.sku,""),c.xp6(2),c.Oqu(c.xi3(11,16,e.price,"EUR")),c.xp6(3),c.hij(" ",e.title," "),c.xp6(2),c.hij(" ",e.description," "),c.xp6(5),c.Oqu(e.allergens),c.xp6(3),c.Q6J("icon",a.faPenSquare),c.xp6(2),c.Q6J("icon",a.faTrash),c.xp6(4),c.Q6J("ngIf",e.isActive),c.xp6(1),c.Q6J("ngIf",!e.isActive),c.xp6(3),c.Q6J("ngIf",e.highlight),c.xp6(1),c.Q6J("ngIf",!e.highlight),c.xp6(2),c.Q6J("disabled",!e.popular&&a.favsCount>=4),c.xp6(1),c.Q6J("ngIf",e.popular),c.xp6(1),c.Q6J("ngIf",!e.popular)}}function L4(t,n){if(1&t){const e=c.EpF();c.TgZ(0,"app-update-product",24),c.NdJ("close",function(i){c.CHM(e);const r=c.oxw(2);return c.KtG(r.triggerEventClose(i))}),c.qZA()}if(2&t){const e=c.oxw(2);c.Q6J("product",e.updateProduct)}}function q4(t,n){if(1&t&&(c.TgZ(0,"table",2)(1,"tr")(2,"th"),c._uU(3,"Modifi\xe9"),c.qZA(),c.TgZ(4,"th"),c._uU(5,"Produit"),c.qZA(),c.TgZ(6,"th"),c._uU(7,"Action"),c.qZA(),c.TgZ(8,"th"),c._uU(9,"Supprimer"),c.qZA()(),c.YNc(10,H4,38,22,"tr",3),c.qZA(),c.TgZ(11,"table",4)(12,"tr")(13,"th"),c._uU(14,"Produit"),c.qZA(),c.TgZ(15,"th"),c._uU(16,"Action"),c.qZA()(),c.YNc(17,T4,39,19,"tr",3),c.qZA(),c.YNc(18,L4,1,1,"app-update-product",5)),2&t){const e=c.oxw();c.xp6(10),c.Q6J("ngForOf",e.products),c.xp6(7),c.Q6J("ngForOf",e.products),c.xp6(1),c.Q6J("ngIf",e.updateBoolean)}}let U4=(()=>{class t{constructor(e,a){this.productsService=e,this.toast=a,this.favsCount=0,this.updateBoolean=!1,this.isLoaded=!0,this.faCheckCircle=m.f8k,this.faPenSquare=m.e0A,this.faMedal=m._su,this.faStarS=m.Tab,this.faStarReg=M,this.faEye=m.Mdf,this.faEyeSlash=m.Aq,this.faLightbulbS=m.X8G,this.faLightbulbReg=x,this.faTrash=m.$aW}ngOnInit(){}editProduct(e){this.updateBoolean=!this.updateBoolean,this.updateProduct=e}triggerEventClose(e){"close popup"===e.message&&(this.updateBoolean=!this.updateBoolean,this.productsService.getProducts(null).subscribe({next:a=>{this.products=a}}))}updateProductData(e,a){switch(e){case"highlight":a.highlight=!a.highlight,this.products.forEach(i=>{i.id!==a.id&&!0===i.highlight&&(i.highlight=!1,this.productsService.updateProduct(i).subscribe({next:r=>{console.log(r)}}))});break;case"popular":a.popular=!a.popular,!0===a.popular?this.favsCount++:this.favsCount--;break;case"isActive":a.isActive=!a.isActive}this.productsService.updateProduct(a).subscribe({next:i=>{console.log(i)}})}deleteProduct(e){confirm("Etes-vous s\xfbr de vouloir supprimer ce produit?")&&this.productsService.deleteProduct(e._id).subscribe({next:a=>{this.toast.initiate({title:"Success",message:a.message}),this.products=this.products.filter(i=>i._id!==e._id)},error:a=>{this.toast.initiate({title:"Error",message:a.message})}})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(v.s),c.Y36(d.k))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-get-items"]],inputs:{products:"products",favsCount:"favsCount"},decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["loaded",""],[1,"table--md"],[4,"ngFor","ngForOf"],[1,"table--sm"],[3,"product","close",4,"ngIf"],[1,"btn-socials",3,"click"],[3,"icon"],[1,"hero"],[1,"hero__container"],[1,"hero__btn",3,"routerLink"],[1,"hero__container__img"],["width","200","height","200","crossorigin","anonymous",3,"src","alt"],[1,"hero__main"],[1,"hero__sku"],[1,"hero__price"],[1,"hero__title"],[1,"hero__description"],[1,"text-accent"],[3,"icon",4,"ngIf"],[1,"btn-socials",3,"disabled","click"],[1,"hero__main","hero__main--sm"],[1,"hero__actions"],[1,"table--sm__actions"],[3,"product","close"]],template:function(e,a){if(1&e&&(c.YNc(0,d4,1,0,"app-loading-spinner",0),c.YNc(1,q4,19,3,"ng-template",null,1,c.W1O),c._UZ(3,"app-toast")),2&e){const i=c.MAs(2);c.Q6J("ngIf",!a.isLoaded)("ngIfElse",i)}},dependencies:[f.sg,f.O5,h.rH,p.BN,h4.g,u.q,v4.g,f.H9],styles:[".btn-socials[_ngcontent-%COMP%]:disabled{opacity:.5;color:#5a3a22;cursor:not-allowed}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table.table--sm[_ngcontent-%COMP%]   .hero__container[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:10px}table.table--sm[_ngcontent-%COMP%]   .hero__actions[_ngcontent-%COMP%]{display:flex;justify-content:space-between}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #5a3a22;padding:8px;text-align:center}table[_ngcontent-%COMP%]   .hero__container[_ngcontent-%COMP%]{display:flex;column-gap:10px;justify-content:space-between;position:relative}table[_ngcontent-%COMP%]   .hero__container__img[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}table[_ngcontent-%COMP%]   .hero__btn[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;background-color:transparent;border:none;cursor:pointer}table[_ngcontent-%COMP%]   .hero__sku[_ngcontent-%COMP%]{font-style:italic;display:flex;justify-content:space-between;align-items:center}table[_ngcontent-%COMP%]   .hero__description[_ngcontent-%COMP%]{white-space:pre-line}table[_ngcontent-%COMP%]   .hero__title[_ngcontent-%COMP%]{color:#5a3a22;display:flex;align-items:center;justify-content:center;text-transform:capitalize}table[_ngcontent-%COMP%]   .hero__main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;margin:auto;padding:0 10px;width:100%}table[_ngcontent-%COMP%]   .hero__price[_ngcontent-%COMP%]{font-size:1rem;color:#e58f6c;font-weight:700}@media screen and (max-width: 768px){table.table--md[_ngcontent-%COMP%]{display:none}table.table--sm[_ngcontent-%COMP%]{display:block}}@media screen and (min-width: 768px){table.table--md[_ngcontent-%COMP%]{display:block}table.table--sm[_ngcontent-%COMP%]{display:none}}"]}),t})();function P4(t,n){if(1&t&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&t){const e=c.oxw().$implicit;c.xp6(1),c.Oqu(e.address)}}function w4(t,n){if(1&t&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&t){const e=c.oxw().$implicit;c.xp6(1),c.Oqu(e.city)}}function O4(t,n){if(1&t&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&t){const e=c.oxw().$implicit;c.xp6(1),c.Oqu(e.postalCode)}}function y4(t,n){if(1&t&&(c.TgZ(0,"li"),c._uU(1),c.qZA()),2&t){const e=n.$implicit;c.xp6(1),c.AsE(" ",e.quantity," x ",e.title," ")}}function I4(t,n){if(1&t){const e=c.EpF();c.TgZ(0,"tr")(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td")(4,"span"),c._uU(5),c.qZA(),c._UZ(6,"br"),c.TgZ(7,"span"),c._uU(8),c.qZA(),c._UZ(9,"br"),c.YNc(10,P4,2,1,"span",3),c._UZ(11,"br"),c.YNc(12,w4,2,1,"span",3),c._UZ(13,"br"),c.YNc(14,O4,2,1,"span",3),c.qZA(),c.TgZ(15,"td"),c._uU(16),c.ALo(17,"date"),c.qZA(),c.TgZ(18,"td")(19,"ul"),c.YNc(20,y4,2,2,"li",1),c.qZA()(),c.TgZ(21,"td"),c._uU(22),c.ALo(23,"currency"),c.qZA(),c.TgZ(24,"td")(25,"select",4),c.NdJ("ngModelChange",function(i){const o=c.CHM(e).$implicit;return c.KtG(o.status=i)})("ngModelChange",function(){const r=c.CHM(e).$implicit,o=c.oxw();return c.KtG(o.updateStatus(r))}),c.TgZ(26,"option",5),c._uU(27,"Commande enregistr\xe9e"),c.qZA(),c.TgZ(28,"option",6),c._uU(29,"En cours de pr\xe9paration"),c.qZA(),c.TgZ(30,"option",7),c._uU(31,"Pr\xeat"),c.qZA()()()()}if(2&t){const e=n.$implicit;c.xp6(2),c.Oqu(e._id),c.xp6(3),c.AsE("",e.firstName," ",e.lastName,""),c.xp6(3),c.Oqu(e.email),c.xp6(2),c.Q6J("ngIf",e.address),c.xp6(2),c.Q6J("ngIf",e.city),c.xp6(2),c.Q6J("ngIf",e.postalCode),c.xp6(2),c.Oqu(c.xi3(17,11,e.date,"dd/MM/yyyy")),c.xp6(4),c.Q6J("ngForOf",e.products),c.xp6(2),c.Oqu(c.xi3(23,14,e.totalPrice,"EUR")),c.xp6(3),c.Q6J("ngModel",e.status)}}function k4(t,n){if(1&t&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&t){const e=c.oxw().$implicit;c.xp6(1),c.Oqu(e.address)}}function J4(t,n){if(1&t&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&t){const e=c.oxw().$implicit;c.xp6(1),c.Oqu(e.city)}}function F4(t,n){if(1&t&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&t){const e=c.oxw().$implicit;c.xp6(1),c.Oqu(e.postalCode)}}function G4(t,n){if(1&t&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&t){const e=n.$implicit;c.xp6(1),c.AsE(" ",e.quantity," x ",e.title," ")}}function E4(t,n){if(1&t){const e=c.EpF();c.TgZ(0,"tr")(1,"td")(2,"div",8)(3,"div")(4,"span")(5,"strong"),c._uU(6,"Commande : "),c.qZA(),c._uU(7),c.qZA()(),c.TgZ(8,"div")(9,"span")(10,"strong"),c._uU(11,"Date : "),c.qZA(),c._uU(12),c.ALo(13,"date"),c.qZA()(),c.TgZ(14,"div",9)(15,"span")(16,"strong"),c._uU(17,"Infos client :"),c.qZA()(),c.TgZ(18,"span"),c._uU(19),c.qZA(),c.TgZ(20,"span"),c._uU(21),c.qZA(),c.YNc(22,k4,2,1,"span",3),c.YNc(23,J4,2,1,"span",3),c.YNc(24,F4,2,1,"span",3),c.qZA(),c.TgZ(25,"div",9)(26,"span")(27,"strong"),c._uU(28,"Produits :"),c.qZA()(),c.YNc(29,G4,2,2,"span",1),c.qZA(),c.TgZ(30,"div")(31,"span")(32,"strong"),c._uU(33,"Prix total : "),c.qZA(),c._uU(34),c.ALo(35,"currency"),c.qZA()(),c.TgZ(36,"div")(37,"select",4),c.NdJ("ngModelChange",function(i){const o=c.CHM(e).$implicit;return c.KtG(o.status=i)})("ngModelChange",function(){const r=c.CHM(e).$implicit,o=c.oxw();return c.KtG(o.updateStatus(r))}),c.TgZ(38,"option",5),c._uU(39,"Commande enregistr\xe9e"),c.qZA(),c.TgZ(40,"option",6),c._uU(41,"En cours de pr\xe9paration"),c.qZA(),c.TgZ(42,"option",7),c._uU(43,"Pr\xeat"),c.qZA()()()()()()}if(2&t){const e=n.$implicit;c.xp6(7),c.Oqu(e._id),c.xp6(5),c.Oqu(c.xi3(13,11,e.date,"dd/MM/yyyy")),c.xp6(7),c.AsE("",e.firstName," ",e.lastName,""),c.xp6(2),c.Oqu(e.email),c.xp6(1),c.Q6J("ngIf",e.address),c.xp6(1),c.Q6J("ngIf",e.city),c.xp6(1),c.Q6J("ngIf",e.postalCode),c.xp6(5),c.Q6J("ngForOf",e.products),c.xp6(5),c.Oqu(c.xi3(35,14,e.totalPrice,"EUR")),c.xp6(3),c.Q6J("ngModel",e.status)}}let Q4=(()=>{class t{constructor(e){this.contactService=e}ngOnInit(){}updateStatus(e){const{_id:a,status:i}=e;this.contactService.updateOrder(a,{status:i}).subscribe({next:r=>console.log(r),error:r=>console.log(r),complete:()=>this.updateStatusNotification(e)})}updateStatusNotification(e){this.contactService.updateNotification(e).subscribe({next:a=>console.log(a),error:a=>console.log(a),complete:()=>console.log("Notification sent")})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(C.y))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-orders-list"]],inputs:{orders:"orders"},decls:18,vars:2,consts:[[1,"table--lg"],[4,"ngFor","ngForOf"],[1,"table--sm"],[4,"ngIf"],[3,"ngModel","ngModelChange"],["value","Commande enregistr\xe9e"],["value","En cours de pr\xe9paration"],["value","Pr\xeat"],[1,"table--sm__body"],[1,"flex-col"]],template:function(e,a){1&e&&(c.TgZ(0,"div")(1,"table",0)(2,"tr")(3,"th"),c._uU(4,"Num\xe9ro de commande"),c.qZA(),c.TgZ(5,"th"),c._uU(6,"Client"),c.qZA(),c.TgZ(7,"th"),c._uU(8,"Date"),c.qZA(),c.TgZ(9,"th"),c._uU(10,"Produits"),c.qZA(),c.TgZ(11,"th"),c._uU(12,"Prix"),c.qZA(),c.TgZ(13,"th"),c._uU(14,"Statut"),c.qZA()(),c.YNc(15,I4,32,17,"tr",1),c.qZA(),c.TgZ(16,"table",2),c.YNc(17,E4,44,17,"tr",1),c.qZA()()),2&e&&(c.xp6(15),c.Q6J("ngForOf",a.orders),c.xp6(2),c.Q6J("ngForOf",a.orders))},dependencies:[f.sg,f.O5,s.YN,s.Kr,s.EJ,s.JJ,s.On,f.H9,f.uU],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #5a3a22;padding:8px;text-align:center}table[_ngcontent-%COMP%]   .table--sm__body[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;row-gap:10px;padding:20px}table[_ngcontent-%COMP%]   .table--sm__body[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type{margin-top:20px}table[_ngcontent-%COMP%]   .table--sm__body[_ngcontent-%COMP%]   .flex-col[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}@media screen and (max-width: 992px){table.table--lg[_ngcontent-%COMP%]{display:none}table.table--sm[_ngcontent-%COMP%]{display:table}}@media screen and (min-width: 992px){table.table--lg[_ngcontent-%COMP%]{display:table}table.table--sm[_ngcontent-%COMP%]{display:none}}"]}),t})();function B4(t,n){if(1&t){const e=c.EpF();c.TgZ(0,"button",2),c.NdJ("click",function(){c.CHM(e);const i=c.oxw().$implicit,r=c.oxw();return c.KtG(r.deleteUser(i._id))}),c._UZ(1,"fa-icon",3),c.qZA()}if(2&t){const e=c.oxw(2);c.xp6(1),c.Q6J("icon",e.faTrash)}}function Y4(t,n){if(1&t&&(c.TgZ(0,"tr")(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td"),c.YNc(6,B4,2,1,"button",1),c.qZA()()),2&t){const e=n.$implicit;c.xp6(2),c.AsE(" ",e.firstName," ",e.lastName," "),c.xp6(2),c.Oqu(e.email),c.xp6(2),c.Q6J("ngIf",!1===e.isAdmin)}}let D4=(()=>{class t{constructor(e,a){this.authService=e,this.toast=a,this.faTrash=m.$aW}ngOnInit(){this.users$=this.authService.getAllUsers()}deleteUser(e){confirm("Voulez-vous vraiment supprimer cet utilisateur?")&&this.authService.deleteUser(e).subscribe({next:a=>{this.toast.initiate({title:"Compte supprim\xe9!",message:a.message}),this.users$=this.authService.getAllUsers()},error:a=>{this.toast.initiate({title:"Erreur!",message:a.error.message})}})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(g.e),c.Y36(d.k))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-users-list"]],decls:11,vars:3,consts:[[4,"ngFor","ngForOf"],["class","btn-socials",3,"click",4,"ngIf"],[1,"btn-socials",3,"click"],[3,"icon"]],template:function(e,a){1&e&&(c.TgZ(0,"table")(1,"tr")(2,"th"),c._uU(3,"Client"),c.qZA(),c.TgZ(4,"th"),c._uU(5,"Adresse e-mail"),c.qZA(),c.TgZ(6,"th"),c._uU(7,"Supprimer"),c.qZA()(),c.YNc(8,Y4,7,4,"tr",0),c.ALo(9,"async"),c.qZA(),c._UZ(10,"app-toast")),2&e&&(c.xp6(8),c.Q6J("ngForOf",c.lcZ(9,1,a.users$)))},dependencies:[f.sg,f.O5,p.BN,u.q,f.Ov],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #5a3a22;padding:8px;text-align:center}"]}),t})();function R4(t,n){if(1&t){const e=c.EpF();c.TgZ(0,"app-add-item",10),c.NdJ("newProduct",function(i){c.CHM(e);const r=c.oxw();return c.KtG(r.triggerRefresh(i))}),c.qZA()}}function $4(t,n){if(1&t&&c._UZ(0,"app-get-items",11),2&t){const e=c.oxw();c.Q6J("products",e.products)("favsCount",e.favsCount)}}function K4(t,n){if(1&t&&c._UZ(0,"app-orders-list",12),2&t){const e=c.oxw();c.Q6J("orders",e.orders)}}function j4(t,n){1&t&&c._UZ(0,"app-users-list")}function W4(t,n){1&t&&c._UZ(0,"app-profile")}const X4=[{path:"",component:(()=>{class t{constructor(e,a,i){this.productsService=e,this.contactService=a,this.authService=i,this.addItemBoolean=!1,this.getItemsBoolean=!0,this.getOrdersBoolean=!1,this.navBarTab="get items",this.favsCount=0,this.faPowerOff=m.oTz}ngOnInit(){this.productsService.getProducts(null).subscribe({next:e=>{this.products=e,this.products.forEach(a=>{!0===a.popular&&this.favsCount++})}})}navBarClick(e){"get orders"===e&&this.contactService.getAllOrders().subscribe({next:a=>{this.orders=a},error:a=>console.log(a)}),this.navBarTab=e}onLogout(){this.authService.logout()}triggerRefresh(e){"refresh"===e.message&&this.productsService.getProducts(null).subscribe({next:a=>{this.products=a}})}}return t.\u0275fac=function(e){return new(e||t)(c.Y36(v.s),c.Y36(C.y),c.Y36(g.e))},t.\u0275cmp=c.Xpm({type:t,selectors:[["app-dashboard"]],decls:21,vars:6,consts:[[1,"dashboard"],[1,"dashboard__header"],[1,"btn-action",3,"click"],[3,"icon"],[1,"btn__container"],[1,"dashboard__body"],[3,"newProduct",4,"ngIf"],[3,"products","favsCount",4,"ngIf"],[3,"orders",4,"ngIf"],[4,"ngIf"],[3,"newProduct"],[3,"products","favsCount"],[3,"orders"]],template:function(e,a){1&e&&(c.TgZ(0,"section",0)(1,"div",1)(2,"button",2),c.NdJ("click",function(){return a.onLogout()}),c._UZ(3,"fa-icon",3),c.qZA(),c.TgZ(4,"button",2),c.NdJ("click",function(){return a.navBarClick("profile")}),c._uU(5," Voir profil admin "),c.qZA(),c.TgZ(6,"div",4)(7,"button",2),c.NdJ("click",function(){return a.navBarClick("add item")}),c._uU(8," Ajouter un produit "),c.qZA(),c.TgZ(9,"button",2),c.NdJ("click",function(){return a.navBarClick("get items")}),c._uU(10," Voir les produits "),c.qZA(),c.TgZ(11,"button",2),c.NdJ("click",function(){return a.navBarClick("get orders")}),c._uU(12," Voir les commandes "),c.qZA(),c.TgZ(13,"button",2),c.NdJ("click",function(){return a.navBarClick("get users")}),c._uU(14," Voir les utilisateurs "),c.qZA()()(),c.TgZ(15,"div",5),c.YNc(16,R4,1,0,"app-add-item",6),c.YNc(17,$4,1,2,"app-get-items",7),c.YNc(18,K4,1,1,"app-orders-list",8),c.YNc(19,j4,1,0,"app-users-list",9),c.YNc(20,W4,1,0,"app-profile",9),c.qZA()()),2&e&&(c.xp6(3),c.Q6J("icon",a.faPowerOff),c.xp6(13),c.Q6J("ngIf","add item"===a.navBarTab),c.xp6(1),c.Q6J("ngIf","get items"===a.navBarTab),c.xp6(1),c.Q6J("ngIf","get orders"===a.navBarTab),c.xp6(1),c.Q6J("ngIf","get users"===a.navBarTab),c.xp6(1),c.Q6J("ngIf","profile"===a.navBarTab))},dependencies:[f.O5,p.BN,H.d,V,U4,Q4,D4],styles:[".btn__container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}@media screen and (max-width: 768px){.btn__container[_ngcontent-%COMP%]{flex-direction:column;row-gap:20px}}.dashboard[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:2rem}.dashboard__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:20px}"]}),t})()}];let c3=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[h.Bz.forChild(X4),h.Bz]}),t})();var e3=l(4466),t3=l(294),a3=l(5564);let n3=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=c.oAB({type:t}),t.\u0275inj=c.cJS({imports:[f.ez,c3,s.UX,s.u5,p.uH,t3.I,e3.m,a3.AuthModule]}),t})()}}]);