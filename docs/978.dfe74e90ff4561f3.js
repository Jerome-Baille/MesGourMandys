"use strict";(self.webpackChunkmes_gourmandys=self.webpackChunkmes_gourmandys||[]).push([[978],{4978:(K4,C,s)=>{s.r(C),s.d(C,{AdminModule:()=>D4});var f=s(6895),v=s(1387),m=s(801),c=s(8256),p=s(5482),_=s(2805),g=s(263),h=s(3868),H=s(3080),o=s(433),d=s(9891),z=s(5845);let V=(()=>{class a{constructor(e,t,n){this.formBuilder=e,this.productsService=t,this.toast=n,this.newProduct=new c.vpe}ngOnInit(){this.addItem=this.formBuilder.group({title:[null,o.kI.required],id:[null,o.kI.required],image:[null,o.kI.required],price:[null,o.kI.required],sku:[null,o.kI.required],description:[null,o.kI.required],allergens:[null,o.kI.required],isActive:[!0,o.kI.required]})}onCreateItem(){const{title:e,price:t,sku:n,description:r,allergens:l,isActive:Y4}=this.addItem.value;var R4=this.addItem.get("image").value;let j4=n.toUpperCase();const W4=e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/&/g,"and").replace(/ - /g,"-").replace(/ /g,"-").replace(/[^\w-]+/g,"");this.productsService.createProduct(e,W4,R4,t,j4,r,l,Y4).subscribe({next:u=>{this.toast.initiate({title:"Success",message:u.message}),this.newProduct.emit({message:"refresh"}),this.addItem.reset({isActive:!0})},error:u=>{this.toast.initiate({title:"Erreur",message:u.message})}})}imageSelected(e){const t=e.target.files[0];this.addItem.get("image").setValue(t),this.addItem.updateValueAndValidity(),(new FileReader).readAsDataURL(t)}}return a.\u0275fac=function(e){return new(e||a)(c.Y36(o.qu),c.Y36(p.s),c.Y36(d.k))},a.\u0275cmp=c.Xpm({type:a,selectors:[["app-add-item"]],outputs:{newProduct:"newProduct"},decls:34,vars:1,consts:[[1,"addItemForm",3,"formGroup"],[1,"addItemForm__right"],[1,"addItemForm__group"],["for","title"],["type","text","placeholder","Nom du produit","formControlName","title"],["for","price"],["type","file","id","image","placeholder","image",3,"change"],["type","text","placeholder","Prix","formControlName","price"],["type","text","placeholder","SKU","formControlName","sku",1,"addItemForm__sku"],["placeholder","Description","formControlName","description"],["type","text","placeholder","Allerg\xe8nes","formControlName","allergens"],["type","checkbox","formControlName","isActive"],["type","submit",1,"btn-action",3,"click"]],template:function(e,t){1&e&&(c.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"label",3),c._uU(4,"Nom du produit:"),c.qZA(),c._UZ(5,"input",4),c.qZA(),c.TgZ(6,"div",2)(7,"label",5),c._uU(8,"Image:"),c.qZA(),c.TgZ(9,"input",6),c.NdJ("change",function(r){return t.imageSelected(r)}),c.qZA()(),c.TgZ(10,"div",2)(11,"label",5),c._uU(12,"Prix:"),c.qZA(),c._UZ(13,"input",7),c.qZA(),c.TgZ(14,"div",2)(15,"label",5),c._uU(16,"SKU:"),c.qZA(),c._UZ(17,"input",8),c.qZA(),c.TgZ(18,"div",2)(19,"label",5),c._uU(20,"Description:"),c.qZA(),c.TgZ(21,"textarea",9),c._uU(22,"            "),c.qZA()(),c.TgZ(23,"div",2)(24,"label",5),c._uU(25,"Allerg\xe8nes:"),c.qZA(),c._UZ(26,"input",10),c.qZA(),c.TgZ(27,"div",2)(28,"label",5),c._uU(29,"Produit disponible:"),c.qZA(),c._UZ(30,"input",11),c.qZA(),c.TgZ(31,"button",12),c.NdJ("click",function(){return t.onCreateItem()}),c._uU(32," Ajouter un produit "),c.qZA()()(),c._UZ(33,"app-toast")),2&e&&c.Q6J("formGroup",t.addItem)},dependencies:[o._Y,o.Fj,o.Wl,o.JJ,o.JL,o.sg,o.u,z.q],styles:[".addItemForm[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:flex-start;padding:0 60px}@media screen and (max-width: 768px){.addItemForm[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}.addItemForm__left[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center}.addItemForm__right[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;text-align:center;padding-top:10px}.addItemForm__right[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:350px;height:40px;padding:10px;border:1px solid #E58F6C;border-radius:8px;margin-bottom:10px}.addItemForm__right[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]{width:350px;height:125px;padding:10px;border:1px solid #E58F6C;border-radius:8px;margin-bottom:10px}.addItemForm__group[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;row-gap:10px}.addItemForm__title[_ngcontent-%COMP%]{font-size:2.5rem;margin:0 20px 20px}.addItemForm__text[_ngcontent-%COMP%]{text-align:center;line-height:3rem}.addItemForm__sku[_ngcontent-%COMP%]{text-transform:uppercase}"]}),a})();var M={prefix:"far",iconName:"lightbulb",icon:[352,512,[],"f0eb","M176 80c-52.94 0-96 43.06-96 96 0 8.84 7.16 16 16 16s16-7.16 16-16c0-35.3 28.72-64 64-64 8.84 0 16-7.16 16-16s-7.16-16-16-16zM96.06 459.17c0 3.15.93 6.22 2.68 8.84l24.51 36.84c2.97 4.46 7.97 7.14 13.32 7.14h78.85c5.36 0 10.36-2.68 13.32-7.14l24.51-36.84c1.74-2.62 2.67-5.7 2.68-8.84l.05-43.18H96.02l.04 43.18zM176 0C73.72 0 0 82.97 0 176c0 44.37 16.45 84.85 43.56 115.78 16.64 18.99 42.74 58.8 52.42 92.16v.06h48v-.12c-.01-4.77-.72-9.51-2.15-14.07-5.59-17.81-22.82-64.77-62.17-109.67-20.54-23.43-31.52-53.15-31.61-84.14-.2-73.64 59.67-128 127.95-128 70.58 0 128 57.42 128 128 0 30.97-11.24 60.85-31.65 84.14-39.11 44.61-56.42 91.47-62.1 109.46a47.507 47.507 0 0 0-2.22 14.3v.1h48v-.05c9.68-33.37 35.78-73.18 52.42-92.16C335.55 260.85 352 220.37 352 176 352 78.8 273.2 0 176 0z"]},x={prefix:"far",iconName:"star",icon:[576,512,[],"f005","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]},v4=s(4674),p4=s(3726);function d4(a,i){1&a&&c._UZ(0,"app-loading-spinner")}function z4(a,i){if(1&a&&c._UZ(0,"fa-icon",5),2&a){const e=c.oxw(3);c.Q6J("icon",e.faEye)}}function u4(a,i){if(1&a&&c._UZ(0,"fa-icon",5),2&a){const e=c.oxw(3);c.Q6J("icon",e.faEyeSlash)}}function C4(a,i){if(1&a&&c._UZ(0,"fa-icon",5),2&a){const e=c.oxw(3);c.Q6J("icon",e.faLightbulbS)}}function _4(a,i){if(1&a&&c._UZ(0,"fa-icon",5),2&a){const e=c.oxw(3);c.Q6J("icon",e.faLightbulbReg)}}function g4(a,i){if(1&a&&c._UZ(0,"fa-icon",5),2&a){const e=c.oxw(3);c.Q6J("icon",e.faStarS)}}function M4(a,i){if(1&a&&c._UZ(0,"fa-icon",5),2&a){const e=c.oxw(3);c.Q6J("icon",e.faStarReg)}}const x4=function(a){return["/detail/",a]};function H4(a,i){if(1&a){const e=c.EpF();c.TgZ(0,"tr")(1,"td")(2,"button",4),c.NdJ("click",function(){const r=c.CHM(e).$implicit,l=c.oxw(2);return c.KtG(l.editProduct(r))}),c._UZ(3,"fa-icon",5),c.qZA()(),c.TgZ(4,"td",6)(5,"div",7),c._UZ(6,"button",8),c.TgZ(7,"div",9),c._UZ(8,"img",10),c.qZA(),c.TgZ(9,"div",11)(10,"div",12)(11,"span"),c._uU(12),c.qZA(),c.TgZ(13,"span",13),c._uU(14),c.ALo(15,"currency"),c.qZA()(),c.TgZ(16,"h1",14),c._uU(17),c.qZA(),c.TgZ(18,"p",15),c._uU(19),c.qZA(),c.TgZ(20,"p")(21,"span",16),c._uU(22,"Allerg\xe8nes : "),c.qZA(),c.TgZ(23,"span"),c._uU(24),c.qZA()()()()(),c.TgZ(25,"td")(26,"button",4),c.NdJ("click",function(){const r=c.CHM(e).$implicit,l=c.oxw(2);return c.KtG(l.updateProductData("isActive",r))}),c.YNc(27,z4,1,1,"fa-icon",17),c.YNc(28,u4,1,1,"fa-icon",17),c.qZA(),c.TgZ(29,"button",4),c.NdJ("click",function(){const r=c.CHM(e).$implicit,l=c.oxw(2);return c.KtG(l.updateProductData("highlight",r))}),c.YNc(30,C4,1,1,"fa-icon",17),c.YNc(31,_4,1,1,"fa-icon",17),c.qZA(),c.TgZ(32,"button",18),c.NdJ("click",function(){const r=c.CHM(e).$implicit,l=c.oxw(2);return c.KtG(l.updateProductData("popular",r))}),c.YNc(33,g4,1,1,"fa-icon",17),c.YNc(34,M4,1,1,"fa-icon",17),c.qZA()(),c.TgZ(35,"td")(36,"button",4),c.NdJ("click",function(){const r=c.CHM(e).$implicit,l=c.oxw(2);return c.KtG(l.deleteProduct(r))}),c._UZ(37,"fa-icon",5),c.qZA()()()}if(2&a){const e=i.$implicit,t=c.oxw(2);c.xp6(3),c.Q6J("icon",t.faPenSquare),c.xp6(3),c.Q6J("routerLink",c.VKq(20,x4,e.id)),c.xp6(2),c.s9C("alt",e.title),c.Q6J("src",e.thumbImage,c.LSH),c.xp6(4),c.hij("SKU : ",e.sku,""),c.xp6(2),c.Oqu(c.xi3(15,17,e.price,"EUR")),c.xp6(3),c.hij(" ",e.title," "),c.xp6(2),c.hij(" ",e.description," "),c.xp6(5),c.Oqu(e.allergens),c.xp6(3),c.Q6J("ngIf",e.isActive),c.xp6(1),c.Q6J("ngIf",!e.isActive),c.xp6(2),c.Q6J("ngIf",e.highlight),c.xp6(1),c.Q6J("ngIf",!e.highlight),c.xp6(1),c.Q6J("disabled",!e.popular&&t.favsCount>=4),c.xp6(1),c.Q6J("ngIf",e.popular),c.xp6(1),c.Q6J("ngIf",!e.popular),c.xp6(3),c.Q6J("icon",t.faTrash)}}function V4(a,i){if(1&a){const e=c.EpF();c.TgZ(0,"app-update-product",19),c.NdJ("close",function(n){c.CHM(e);const r=c.oxw(2);return c.KtG(r.triggerEventClose(n))}),c.qZA()}if(2&a){const e=c.oxw(2);c.Q6J("product",e.updateProduct)}}function S4(a,i){if(1&a&&(c.TgZ(0,"table")(1,"tr")(2,"th"),c._uU(3,"Modifi\xe9"),c.qZA(),c.TgZ(4,"th"),c._uU(5,"Produit"),c.qZA(),c.TgZ(6,"th"),c._uU(7,"Action"),c.qZA(),c.TgZ(8,"th"),c._uU(9,"Supprimer"),c.qZA()(),c.YNc(10,H4,38,22,"tr",2),c.qZA(),c.YNc(11,V4,1,1,"app-update-product",3)),2&a){const e=c.oxw();c.xp6(10),c.Q6J("ngForOf",e.products),c.xp6(1),c.Q6J("ngIf",e.updateBoolean)}}let N4=(()=>{class a{constructor(e,t){this.productsService=e,this.toast=t,this.favsCount=0,this.updateBoolean=!1,this.isLoaded=!0,this.faCheckCircle=m.f8k,this.faPenSquare=m.e0A,this.faMedal=m._su,this.faStarS=m.Tab,this.faStarReg=x,this.faEye=m.Mdf,this.faEyeSlash=m.Aq,this.faLightbulbS=m.X8G,this.faLightbulbReg=M,this.faTrash=m.$aW}ngOnInit(){}editProduct(e){this.updateBoolean=!this.updateBoolean,this.updateProduct=e}triggerEventClose(e){"close popup"===e.message&&(this.updateBoolean=!this.updateBoolean,this.productsService.getProducts(null).subscribe({next:t=>{this.products=t}}))}updateProductData(e,t){switch(e){case"highlight":t.highlight=!t.highlight,this.products.forEach(n=>{n.id!==t.id&&!0===n.highlight&&(n.highlight=!1,this.productsService.updateProduct(n).subscribe({next:r=>{console.log(r)}}))});break;case"popular":t.popular=!t.popular,!0===t.popular?this.favsCount++:this.favsCount--;break;case"isActive":t.isActive=!t.isActive}this.productsService.updateProduct(t).subscribe({next:n=>{console.log(n)}})}deleteProduct(e){confirm("Etes-vous s\xfbr de vouloir supprimer ce produit?")&&this.productsService.deleteProduct(e._id).subscribe({next:t=>{this.toast.initiate({title:"Success",message:t.message}),this.products=this.products.filter(n=>n._id!==e._id)},error:t=>{this.toast.initiate({title:"Error",message:t.message})}})}}return a.\u0275fac=function(e){return new(e||a)(c.Y36(p.s),c.Y36(d.k))},a.\u0275cmp=c.Xpm({type:a,selectors:[["app-get-items"]],inputs:{products:"products",favsCount:"favsCount"},decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["loaded",""],[4,"ngFor","ngForOf"],[3,"product","close",4,"ngIf"],[1,"btn-socials",3,"click"],[3,"icon"],[1,"hero"],[1,"hero__container"],[1,"hero__btn",3,"routerLink"],[1,"hero__container__img"],["width","200","height","200","crossorigin","anonymous",3,"src","alt"],[1,"hero__main"],[1,"hero__sku"],[1,"hero__price"],[1,"hero__title"],[1,"hero__description"],[1,"text-accent"],[3,"icon",4,"ngIf"],[1,"btn-socials",3,"disabled","click"],[3,"product","close"]],template:function(e,t){if(1&e&&(c.YNc(0,d4,1,0,"app-loading-spinner",0),c.YNc(1,S4,12,2,"ng-template",null,1,c.W1O),c._UZ(3,"app-toast")),2&e){const n=c.MAs(2);c.Q6J("ngIf",!t.isLoaded)("ngIfElse",n)}},dependencies:[f.sg,f.O5,v.rH,h.BN,v4.g,z.q,p4.g,f.H9],styles:[".btn-socials[_ngcontent-%COMP%]:disabled{opacity:.5;color:#5a3a22;cursor:not-allowed}table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #5a3a22;padding:8px;text-align:center}table[_ngcontent-%COMP%]   .hero__container[_ngcontent-%COMP%]{display:flex;column-gap:10px;justify-content:space-between;position:relative}table[_ngcontent-%COMP%]   .hero__container__img[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}table[_ngcontent-%COMP%]   .hero__btn[_ngcontent-%COMP%]{position:absolute;inset:0;width:100%;height:100%;background-color:transparent;border:none;cursor:pointer}table[_ngcontent-%COMP%]   .hero__sku[_ngcontent-%COMP%]{font-style:italic;display:flex;justify-content:space-between;align-items:center}table[_ngcontent-%COMP%]   .hero__description[_ngcontent-%COMP%]{white-space:pre-line}table[_ngcontent-%COMP%]   .hero__title[_ngcontent-%COMP%]{color:#5a3a22;display:flex;align-items:center;justify-content:center;text-transform:capitalize}table[_ngcontent-%COMP%]   .hero__main[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;margin:auto;padding:0 10px;width:100%}table[_ngcontent-%COMP%]   .hero__price[_ngcontent-%COMP%]{font-size:1rem;color:#e58f6c;font-weight:700}"]}),a})();function b4(a,i){if(1&a&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&a){const e=c.oxw().$implicit;c.xp6(1),c.Oqu(e.address)}}function A4(a,i){if(1&a&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&a){const e=c.oxw().$implicit;c.xp6(1),c.Oqu(e.city)}}function L4(a,i){if(1&a&&(c.TgZ(0,"span"),c._uU(1),c.qZA()),2&a){const e=c.oxw().$implicit;c.xp6(1),c.Oqu(e.postalCode)}}function Z4(a,i){if(1&a&&(c.TgZ(0,"li"),c._uU(1),c.qZA()),2&a){const e=i.$implicit;c.xp6(1),c.AsE(" ",e.quantity," x ",e.title," ")}}function T4(a,i){if(1&a){const e=c.EpF();c.TgZ(0,"tr")(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td")(4,"span"),c._uU(5),c.qZA(),c._UZ(6,"br"),c.TgZ(7,"span"),c._uU(8),c.qZA(),c._UZ(9,"br"),c.YNc(10,b4,2,1,"span",1),c._UZ(11,"br"),c.YNc(12,A4,2,1,"span",1),c._UZ(13,"br"),c.YNc(14,L4,2,1,"span",1),c.qZA(),c.TgZ(15,"td"),c._uU(16),c.ALo(17,"date"),c.qZA(),c.TgZ(18,"td")(19,"ul"),c.YNc(20,Z4,2,2,"li",0),c.qZA()(),c.TgZ(21,"td"),c._uU(22),c.ALo(23,"currency"),c.qZA(),c.TgZ(24,"td")(25,"select",2),c.NdJ("ngModelChange",function(n){const l=c.CHM(e).$implicit;return c.KtG(l.status=n)})("ngModelChange",function(){const r=c.CHM(e).$implicit,l=c.oxw();return c.KtG(l.updateStatus(r))}),c.TgZ(26,"option",3),c._uU(27,"Commande enregistr\xe9e"),c.qZA(),c.TgZ(28,"option",4),c._uU(29,"En cours de pr\xe9paration"),c.qZA(),c.TgZ(30,"option",5),c._uU(31,"Pr\xeat"),c.qZA()()()()}if(2&a){const e=i.$implicit;c.xp6(2),c.Oqu(e._id),c.xp6(3),c.AsE("",e.firstName," ",e.lastName,""),c.xp6(3),c.Oqu(e.email),c.xp6(2),c.Q6J("ngIf",e.address),c.xp6(2),c.Q6J("ngIf",e.city),c.xp6(2),c.Q6J("ngIf",e.postalCode),c.xp6(2),c.Oqu(c.xi3(17,11,e.date,"dd/MM/yyyy")),c.xp6(4),c.Q6J("ngForOf",e.products),c.xp6(2),c.Oqu(c.xi3(23,14,e.totalPrice,"EUR")),c.xp6(3),c.Q6J("ngModel",e.status)}}let q4=(()=>{class a{constructor(e){this.contactService=e}ngOnInit(){}updateStatus(e){const{_id:t,status:n}=e;this.contactService.updateOrder(t,{status:n}).subscribe({next:r=>console.log(r),error:r=>console.log(r),complete:()=>this.updateStatusNotification(e)})}updateStatusNotification(e){this.contactService.updateNotification(e).subscribe({next:t=>console.log(t),error:t=>console.log(t),complete:()=>console.log("Notification sent")})}}return a.\u0275fac=function(e){return new(e||a)(c.Y36(_.y))},a.\u0275cmp=c.Xpm({type:a,selectors:[["app-orders-list"]],inputs:{orders:"orders"},decls:16,vars:1,consts:[[4,"ngFor","ngForOf"],[4,"ngIf"],[3,"ngModel","ngModelChange"],["value","Commande enregistr\xe9e"],["value","En cours de pr\xe9paration"],["value","Pr\xeat"]],template:function(e,t){1&e&&(c.TgZ(0,"div")(1,"table")(2,"tr")(3,"th"),c._uU(4,"Num\xe9ro de commande"),c.qZA(),c.TgZ(5,"th"),c._uU(6,"Client"),c.qZA(),c.TgZ(7,"th"),c._uU(8,"Date"),c.qZA(),c.TgZ(9,"th"),c._uU(10,"Produits"),c.qZA(),c.TgZ(11,"th"),c._uU(12,"Prix"),c.qZA(),c.TgZ(13,"th"),c._uU(14,"Statut"),c.qZA()(),c.YNc(15,T4,32,17,"tr",0),c.qZA()()),2&e&&(c.xp6(15),c.Q6J("ngForOf",t.orders))},dependencies:[f.sg,f.O5,o.YN,o.Kr,o.EJ,o.JJ,o.On,f.H9,f.uU],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #5a3a22;padding:8px;text-align:center}"]}),a})();function w4(a,i){if(1&a){const e=c.EpF();c.TgZ(0,"button",2),c.NdJ("click",function(){c.CHM(e);const n=c.oxw().$implicit,r=c.oxw();return c.KtG(r.deleteUser(n._id))}),c._UZ(1,"fa-icon",3),c.qZA()}if(2&a){const e=c.oxw(2);c.xp6(1),c.Q6J("icon",e.faTrash)}}function P4(a,i){if(1&a&&(c.TgZ(0,"tr")(1,"td"),c._uU(2),c.qZA(),c.TgZ(3,"td"),c._uU(4),c.qZA(),c.TgZ(5,"td"),c._uU(6),c.qZA(),c.TgZ(7,"td"),c.YNc(8,w4,2,1,"button",1),c.qZA()()),2&a){const e=i.$implicit;c.xp6(2),c.Oqu(e.lastName),c.xp6(2),c.Oqu(e.firstName),c.xp6(2),c.Oqu(e.email),c.xp6(2),c.Q6J("ngIf",!1===e.isAdmin)}}let U4=(()=>{class a{constructor(e,t){this.authService=e,this.toast=t,this.faTrash=m.$aW}ngOnInit(){this.users$=this.authService.getAllUsers()}deleteUser(e){confirm("Voulez-vous vraiment supprimer cet utilisateur?")&&this.authService.deleteUser(e).subscribe({next:t=>{this.toast.initiate({title:"Compte supprim\xe9!",message:t.message}),this.users$=this.authService.getAllUsers()},error:t=>{this.toast.initiate({title:"Erreur!",message:t.error.message})}})}}return a.\u0275fac=function(e){return new(e||a)(c.Y36(g.e),c.Y36(d.k))},a.\u0275cmp=c.Xpm({type:a,selectors:[["app-users-list"]],decls:13,vars:3,consts:[[4,"ngFor","ngForOf"],["class","btn-socials",3,"click",4,"ngIf"],[1,"btn-socials",3,"click"],[3,"icon"]],template:function(e,t){1&e&&(c.TgZ(0,"table")(1,"tr")(2,"th"),c._uU(3,"Nom"),c.qZA(),c.TgZ(4,"th"),c._uU(5,"Pr\xe9nom"),c.qZA(),c.TgZ(6,"th"),c._uU(7,"Adresse e-mail"),c.qZA(),c.TgZ(8,"th"),c._uU(9,"Supprimer"),c.qZA()(),c.YNc(10,P4,9,4,"tr",0),c.ALo(11,"async"),c.qZA(),c._UZ(12,"app-toast")),2&e&&(c.xp6(10),c.Q6J("ngForOf",c.lcZ(11,1,t.users$)))},dependencies:[f.sg,f.O5,h.BN,z.q,f.Ov],styles:["table[_ngcontent-%COMP%]{width:100%;border-collapse:collapse}table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{border:1px solid #5a3a22;padding:8px;text-align:center}"]}),a})();function k4(a,i){if(1&a){const e=c.EpF();c.TgZ(0,"app-add-item",10),c.NdJ("newProduct",function(n){c.CHM(e);const r=c.oxw();return c.KtG(r.triggerRefresh(n))}),c.qZA()}}function y4(a,i){if(1&a&&c._UZ(0,"app-get-items",11),2&a){const e=c.oxw();c.Q6J("products",e.products)("favsCount",e.favsCount)}}function I4(a,i){if(1&a&&c._UZ(0,"app-orders-list",12),2&a){const e=c.oxw();c.Q6J("orders",e.orders)}}function O4(a,i){1&a&&c._UZ(0,"app-users-list")}function F4(a,i){1&a&&c._UZ(0,"app-profile")}const G4=[{path:"",component:(()=>{class a{constructor(e,t,n){this.productsService=e,this.contactService=t,this.authService=n,this.addItemBoolean=!1,this.getItemsBoolean=!0,this.getOrdersBoolean=!1,this.navBarTab="get items",this.favsCount=0,this.faPowerOff=m.oTz}ngOnInit(){this.productsService.getProducts(null).subscribe({next:e=>{this.products=e,this.products.forEach(t=>{!0===t.popular&&this.favsCount++})}})}navBarClick(e){"get orders"===e&&this.contactService.getAllOrders().subscribe({next:t=>{this.orders=t}}),this.navBarTab=e}onLogout(){this.authService.logout()}triggerRefresh(e){"refresh"===e.message&&this.productsService.getProducts(null).subscribe({next:t=>{this.products=t}})}}return a.\u0275fac=function(e){return new(e||a)(c.Y36(p.s),c.Y36(_.y),c.Y36(g.e))},a.\u0275cmp=c.Xpm({type:a,selectors:[["app-dashboard"]],decls:21,vars:6,consts:[[1,"dashboard"],[1,"dashboard__header"],[1,"btn-action",3,"click"],[3,"icon"],[1,"btn__container"],[1,"dashboard__body"],[3,"newProduct",4,"ngIf"],[3,"products","favsCount",4,"ngIf"],[3,"orders",4,"ngIf"],[4,"ngIf"],[3,"newProduct"],[3,"products","favsCount"],[3,"orders"]],template:function(e,t){1&e&&(c.TgZ(0,"section",0)(1,"div",1)(2,"button",2),c.NdJ("click",function(){return t.onLogout()}),c._UZ(3,"fa-icon",3),c.qZA(),c.TgZ(4,"button",2),c.NdJ("click",function(){return t.navBarClick("profile")}),c._uU(5," Voir profil admin "),c.qZA(),c.TgZ(6,"div",4)(7,"button",2),c.NdJ("click",function(){return t.navBarClick("add item")}),c._uU(8," Ajouter un produit "),c.qZA(),c.TgZ(9,"button",2),c.NdJ("click",function(){return t.navBarClick("get items")}),c._uU(10," Voir les produits "),c.qZA(),c.TgZ(11,"button",2),c.NdJ("click",function(){return t.navBarClick("get orders")}),c._uU(12," Voir les commandes "),c.qZA(),c.TgZ(13,"button",2),c.NdJ("click",function(){return t.navBarClick("get users")}),c._uU(14," Voir les utilisateurs "),c.qZA()()(),c.TgZ(15,"div",5),c.YNc(16,k4,1,0,"app-add-item",6),c.YNc(17,y4,1,2,"app-get-items",7),c.YNc(18,I4,1,1,"app-orders-list",8),c.YNc(19,O4,1,0,"app-users-list",9),c.YNc(20,F4,1,0,"app-profile",9),c.qZA()()),2&e&&(c.xp6(3),c.Q6J("icon",t.faPowerOff),c.xp6(13),c.Q6J("ngIf","add item"===t.navBarTab),c.xp6(1),c.Q6J("ngIf","get items"===t.navBarTab),c.xp6(1),c.Q6J("ngIf","get orders"===t.navBarTab),c.xp6(1),c.Q6J("ngIf","get users"===t.navBarTab),c.xp6(1),c.Q6J("ngIf","profile"===t.navBarTab))},dependencies:[f.O5,h.BN,H.d,V,N4,q4,U4],styles:[".btn__container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}@media screen and (max-width: 768px){.btn__container[_ngcontent-%COMP%]{flex-direction:column;row-gap:20px}}.dashboard[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:2rem}.dashboard__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:20px}"]}),a})()}];let J4=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[v.Bz.forChild(G4),v.Bz]}),a})();var B4=s(4466),E4=s(294),Q4=s(5564);let D4=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=c.oAB({type:a}),a.\u0275inj=c.cJS({imports:[f.ez,J4,o.UX,o.u5,h.uH,E4.I,B4.m,Q4.AuthModule]}),a})()}}]);