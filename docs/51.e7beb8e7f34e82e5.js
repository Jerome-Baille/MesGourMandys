"use strict";(self.webpackChunkmes_gourmandys=self.webpackChunkmes_gourmandys||[]).push([[51],{7051:(wt,h,c)=>{c.r(h),c.d(h,{AdminModule:()=>yt});var l=c(6895),d=c(2517),_=c(801),t=c(8256),m=c(5482),x=c(2805),Z=c(7036),u=c(3868),A=c(3080),a=c(433),g=c(9891);let v=(()=>{class n{constructor(e,i,s){this.formBuilder=e,this.productsService=i,this.toast=s,this.newProduct=new t.vpe}ngOnInit(){this.addItem=this.formBuilder.group({title:[null,a.kI.required],id:[null,a.kI.required],image:[null,a.kI.required],price:[null,a.kI.required],sku:[null,a.kI.required],description:[null,a.kI.required],allergens:[null,a.kI.required],isActive:[!0,a.kI.required]})}onCreateItem(){const{title:e,price:i,sku:s,description:r,allergens:p,isActive:Jt}=this.addItem.value;var Nt=this.addItem.get("image").value;let Ot=s.toUpperCase();i.includes(",")&&i.replace(",",".");const Lt=e.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/&/g,"and").replace(/ - /g,"-").replace(/ /g,"-").replace(/[^\w-]+/g,"");this.productsService.createProduct(e,Lt,Nt,i,Ot,r,p,Jt).subscribe({next:f=>{this.toast.initiate({title:"Success",message:f.message}),this.newProduct.emit({message:"refresh"}),this.addItem.reset({isActive:!0})},error:f=>{this.toast.initiate({title:"Erreur",message:f.message})}})}imageSelected(e){const i=e.target.files[0];this.addItem.get("image").setValue(i),this.addItem.updateValueAndValidity(),(new FileReader).readAsDataURL(i)}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(a.qu),t.Y36(m.s),t.Y36(g.k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-add-item"]],outputs:{newProduct:"newProduct"},decls:34,vars:1,consts:[[1,"addItemForm",3,"formGroup"],[1,"card__container"],[1,"addItemForm__container"],[1,"addItemForm__group"],["for","title"],["type","text","placeholder","Nom du produit","formControlName","title"],["for","price"],["type","file","id","image","placeholder","image",3,"change"],["type","text","placeholder","Prix","formControlName","price"],["type","text","placeholder","SKU","formControlName","sku",1,"addItemForm__sku"],["placeholder","Description","formControlName","description"],["type","text","placeholder","Allerg\xe8nes","formControlName","allergens"],["type","checkbox","formControlName","isActive"],["type","submit",1,"btn","btn--primary",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"form",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"label",4),t._uU(5,"Nom du produit:"),t.qZA(),t._UZ(6,"input",5),t.qZA(),t.TgZ(7,"div",3)(8,"label",6),t._uU(9,"Image:"),t.qZA(),t.TgZ(10,"input",7),t.NdJ("change",function(r){return i.imageSelected(r)}),t.qZA()(),t.TgZ(11,"div",3)(12,"label",6),t._uU(13,"Prix:"),t.qZA(),t._UZ(14,"input",8),t.qZA(),t.TgZ(15,"div",3)(16,"label",6),t._uU(17,"SKU:"),t.qZA(),t._UZ(18,"input",9),t.qZA(),t.TgZ(19,"div",3)(20,"label",6),t._uU(21,"Description:"),t.qZA(),t.TgZ(22,"textarea",10),t._uU(23,"                "),t.qZA()(),t.TgZ(24,"div",3)(25,"label",6),t._uU(26,"Allerg\xe8nes:"),t.qZA(),t._UZ(27,"input",11),t.qZA(),t.TgZ(28,"div",3)(29,"label",6),t._uU(30,"Produit disponible:"),t.qZA(),t._UZ(31,"input",12),t.qZA(),t.TgZ(32,"button",13),t.NdJ("click",function(){return i.onCreateItem()}),t._uU(33," Ajouter un produit "),t.qZA()()()()),2&e&&t.Q6J("formGroup",i.addItem)},dependencies:[a._Y,a.Fj,a.Wl,a.JJ,a.JL,a.sg,a.u]}),n})();var C=c(534),b=c(3726),U=c(3890);function q(n,o){if(1&n&&t._UZ(0,"fa-icon",6),2&n){const e=t.oxw(2);t.Q6J("icon",e.faEye)}}function I(n,o){if(1&n&&t._UZ(0,"fa-icon",6),2&n){const e=t.oxw(2);t.Q6J("icon",e.faEyeSlash)}}function y(n,o){if(1&n&&t._UZ(0,"fa-icon",6),2&n){const e=t.oxw(2);t.Q6J("icon",e.faLightbulbS)}}function J(n,o){if(1&n&&t._UZ(0,"fa-icon",6),2&n){const e=t.oxw(2);t.Q6J("icon",e.faLightbulbReg)}}function N(n,o){if(1&n&&t._UZ(0,"fa-icon",6),2&n){const e=t.oxw(2);t.Q6J("icon",e.faStarS)}}function O(n,o){if(1&n&&t._UZ(0,"fa-icon",6),2&n){const e=t.oxw(2);t.Q6J("icon",e.faStarReg)}}const L=function(n){return["/detail/",n]};function w(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"button",5),t.NdJ("click",function(){const r=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.editProduct(r))}),t._UZ(3,"fa-icon",6),t.qZA()(),t.TgZ(4,"td",7)(5,"div",8)(6,"div",9),t._UZ(7,"img",10),t.qZA(),t.TgZ(8,"div",11),t._UZ(9,"a",12),t.TgZ(10,"h3"),t._uU(11),t.qZA(),t.TgZ(12,"p",13),t._uU(13),t.qZA(),t.TgZ(14,"div",14)(15,"span",15),t._uU(16),t.qZA(),t.TgZ(17,"span")(18,"span",16),t._uU(19,"Allerg\xe8nes : "),t.qZA(),t._uU(20),t.qZA()(),t.TgZ(21,"div",17)(22,"div",18)(23,"div",19)(24,"span"),t._uU(25," Prix : "),t.qZA()(),t.TgZ(26,"div",20)(27,"span"),t._uU(28),t.ALo(29,"currency"),t.qZA()()()()()()(),t.TgZ(30,"td")(31,"button",5),t.NdJ("click",function(){const r=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.updateProductData("isActive",r))}),t.YNc(32,q,1,1,"fa-icon",21),t.YNc(33,I,1,1,"fa-icon",21),t.qZA(),t.TgZ(34,"button",5),t.NdJ("click",function(){const r=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.updateProductData("highlight",r))}),t.YNc(35,y,1,1,"fa-icon",21),t.YNc(36,J,1,1,"fa-icon",21),t.qZA(),t.TgZ(37,"button",22),t.NdJ("click",function(){const r=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.updateProductData("popular",r))}),t.YNc(38,N,1,1,"fa-icon",21),t.YNc(39,O,1,1,"fa-icon",21),t.qZA()(),t.TgZ(40,"td")(41,"button",5),t.NdJ("click",function(){const r=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.deleteProduct(r))}),t._UZ(42,"fa-icon",6),t.qZA()()()}if(2&n){const e=o.$implicit,i=t.oxw();t.xp6(3),t.Q6J("icon",i.faPenSquare),t.xp6(4),t.s9C("alt",e.title),t.Q6J("src",e.image,t.LSH),t.xp6(2),t.Q6J("routerLink",t.VKq(20,L,e.id)),t.xp6(2),t.hij(" ",e.title," "),t.xp6(2),t.hij(" ",e.description," "),t.xp6(3),t.hij(" SKU : ",e.sku," "),t.xp6(4),t.hij(" ",e.allergens," "),t.xp6(8),t.hij(" ",t.xi3(29,17,e.price,"EUR")," "),t.xp6(4),t.Q6J("ngIf",e.isActive),t.xp6(1),t.Q6J("ngIf",!e.isActive),t.xp6(2),t.Q6J("ngIf",e.highlight),t.xp6(1),t.Q6J("ngIf",!e.highlight),t.xp6(1),t.Q6J("disabled",!e.popular&&i.favsCount>=4),t.xp6(1),t.Q6J("ngIf",e.popular),t.xp6(1),t.Q6J("ngIf",!e.popular),t.xp6(3),t.Q6J("icon",i.faTrash)}}const Q=function(n){return{last:n}};function P(n,o){if(1&n&&(t.TgZ(0,"tr",23)(1,"td"),t._UZ(2,"app-card-product",24),t.qZA()()),2&n){const e=o.$implicit;t.Q6J("ngClass",t.VKq(2,Q,o.last)),t.xp6(2),t.Q6J("product",e)}}function S(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-update-product",25),t.NdJ("close",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.triggerEventClose(s))}),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("product",e.updateProduct)}}let M=(()=>{class n{constructor(e,i){this.productsService=e,this.toast=i,this.favsCount=0,this.updateBoolean=!1,this.faPenSquare=_.e0A,this.faStarS=_.Tab,this.faStarReg=C.T,this.faEye=_.Mdf,this.faEyeSlash=_.Aq,this.faLightbulbS=_.X8G,this.faLightbulbReg=C.X8,this.faTrash=_.$aW}ngOnInit(){}editProduct(e){this.updateBoolean=!this.updateBoolean,this.updateProduct=e}triggerEventClose(e){"close popup"===e.message&&(this.updateBoolean=!this.updateBoolean,this.productsService.getProducts(null).subscribe({next:i=>{this.products=i}}))}updateProductData(e,i){switch(e){case"highlight":i.highlight=!i.highlight,this.products.forEach(s=>{s.id!==i.id&&!0===s.highlight&&(s.highlight=!1,this.productsService.updateProduct(s).subscribe({next:r=>{console.log(r)}}))});break;case"popular":i.popular=!i.popular,!0===i.popular?this.favsCount++:this.favsCount--;break;case"isActive":i.isActive=!i.isActive,!0===i.highlight&&(i.highlight=!1),!0===i.popular&&(i.popular=!1)}this.productsService.updateProduct(i).subscribe({next:s=>{console.log(s)}})}deleteProduct(e){this.toast.initiate({title:"Suppression",message:"Etes-vous s\xfbr de vouloir supprimer ce produit?",type:"confirm"}),this.toast.isConfirmed.subscribe({next:i=>{i&&this.productsService.deleteProduct(e._id).subscribe({next:s=>{this.toast.initiate({title:"Success",message:s.message}),this.products=this.products.filter(r=>r._id!==e._id)},error:s=>{this.toast.initiate({title:"Error",message:s.message})}})},error:i=>{this.toast.initiate({title:"Error",message:i.message,type:"error"})}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.s),t.Y36(g.k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-get-items"]],inputs:{products:"products",favsCount:"favsCount"},decls:16,vars:3,consts:[[1,"table","table--md","get-items"],[4,"ngFor","ngForOf"],[1,"table","table--sm","get-items"],[3,"ngClass",4,"ngFor","ngForOf"],[3,"product","close",4,"ngIf"],[1,"btn-socials",3,"click"],[3,"icon"],[1,"hero"],[1,"hero__container"],[1,"hero__container__img"],["width","200","height","200","crossorigin","anonymous",3,"src","alt"],[1,"hero__main","card__content"],[1,"card__link",3,"routerLink"],[1,"card__description"],[1,"card__content__footer"],[1,"card__sku"],[1,"text-accent"],[1,"card__footer"],[1,"card__price"],[1,"card__price__tag"],[1,"card__price__value"],[3,"icon",4,"ngIf"],[1,"btn-socials",3,"disabled","click"],[3,"ngClass"],[3,"product"],[3,"product","close"]],template:function(e,i){1&e&&(t.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Modifi\xe9"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Produit"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Action"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"Supprimer"),t.qZA()()(),t.TgZ(11,"tbody"),t.YNc(12,w,43,22,"tr",1),t.qZA()(),t.TgZ(13,"table",2),t.YNc(14,P,3,4,"tr",3),t.qZA(),t.YNc(15,S,1,1,"app-update-product",4)),2&e&&(t.xp6(12),t.Q6J("ngForOf",i.products),t.xp6(2),t.Q6J("ngForOf",i.products),t.xp6(1),t.Q6J("ngIf",i.updateBoolean))},dependencies:[l.mk,l.sg,l.O5,d.yS,u.BN,b.g,U.q,l.H9]}),n})();function Y(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.address)}}function k(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.city)}}function E(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.postalCode)}}function $(n,o){if(1&n&&(t.TgZ(0,"li"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.AsE(" ",e.quantity," x ",e.title," ")}}const T=function(n){return{color:n}};function G(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"span"),t._uU(5),t.qZA(),t._UZ(6,"br"),t.TgZ(7,"span"),t._uU(8),t.qZA(),t._UZ(9,"br"),t.YNc(10,Y,2,1,"span",3),t._UZ(11,"br"),t.YNc(12,k,2,1,"span",3),t._UZ(13,"br"),t.YNc(14,E,2,1,"span",3),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"td")(19,"ul"),t.YNc(20,$,2,2,"li",1),t.qZA()(),t.TgZ(21,"td"),t._uU(22),t.ALo(23,"currency"),t.qZA(),t.TgZ(24,"td")(25,"select",4),t.NdJ("ngModelChange",function(s){const p=t.CHM(e).$implicit;return t.KtG(p.status=s)})("ngModelChange",function(){const r=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.updateStatus(r))}),t.TgZ(26,"option",5),t._uU(27," Commande enregistr\xe9e "),t.qZA(),t.TgZ(28,"option",6),t._uU(29," En cours de pr\xe9paration "),t.qZA(),t.TgZ(30,"option",7),t._uU(31," Pr\xeat "),t.qZA()()()()}if(2&n){const e=o.$implicit,i=t.oxw();t.xp6(2),t.Oqu(e._id),t.xp6(3),t.AsE("",e.firstName," ",e.lastName,""),t.xp6(3),t.Oqu(e.email),t.xp6(2),t.Q6J("ngIf",e.address),t.xp6(2),t.Q6J("ngIf",e.city),t.xp6(2),t.Q6J("ngIf",e.postalCode),t.xp6(2),t.Oqu(t.xi3(17,12,e.date,"dd/MM/yyyy")),t.xp6(4),t.Q6J("ngForOf",e.products),t.xp6(2),t.Oqu(t.xi3(23,15,e.totalPrice,"EUR")),t.xp6(3),t.Q6J("ngModel",e.status)("ngStyle",t.VKq(18,T,i.statusColors.get(e.status)))}}function F(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.address)}}function B(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.city)}}function D(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Oqu(e.postalCode)}}function j(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=o.$implicit;t.xp6(1),t.AsE(" ",e.quantity," x ",e.title," ")}}function H(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"tr")(1,"td")(2,"div",8)(3,"div")(4,"span")(5,"strong"),t._uU(6,"Commande : "),t.qZA(),t._uU(7),t.qZA()(),t.TgZ(8,"div")(9,"span")(10,"strong"),t._uU(11,"Date : "),t.qZA(),t._uU(12),t.ALo(13,"date"),t.qZA()(),t.TgZ(14,"div",9)(15,"span")(16,"strong"),t._uU(17,"Infos client :"),t.qZA()(),t.TgZ(18,"span"),t._uU(19),t.qZA(),t.TgZ(20,"span"),t._uU(21),t.qZA(),t.YNc(22,F,2,1,"span",3),t.YNc(23,B,2,1,"span",3),t.YNc(24,D,2,1,"span",3),t.qZA(),t.TgZ(25,"div",9)(26,"span")(27,"strong"),t._uU(28,"Produits :"),t.qZA()(),t.YNc(29,j,2,2,"span",1),t.qZA(),t.TgZ(30,"div")(31,"span")(32,"strong"),t._uU(33,"Prix total : "),t.qZA(),t._uU(34),t.ALo(35,"currency"),t.qZA()(),t.TgZ(36,"div")(37,"select",4),t.NdJ("ngModelChange",function(s){const p=t.CHM(e).$implicit;return t.KtG(p.status=s)})("ngModelChange",function(){const r=t.CHM(e).$implicit,p=t.oxw();return t.KtG(p.updateStatus(r))}),t.TgZ(38,"option",5),t._uU(39,"Commande enregistr\xe9e"),t.qZA(),t.TgZ(40,"option",6),t._uU(41,"En cours de pr\xe9paration"),t.qZA(),t.TgZ(42,"option",7),t._uU(43,"Pr\xeat"),t.qZA()()()()()()}if(2&n){const e=o.$implicit,i=t.oxw();t.xp6(7),t.Oqu(e._id),t.xp6(5),t.Oqu(t.xi3(13,12,e.date,"dd/MM/yyyy")),t.xp6(7),t.AsE("",e.firstName," ",e.lastName,""),t.xp6(2),t.Oqu(e.email),t.xp6(1),t.Q6J("ngIf",e.address),t.xp6(1),t.Q6J("ngIf",e.city),t.xp6(1),t.Q6J("ngIf",e.postalCode),t.xp6(5),t.Q6J("ngForOf",e.products),t.xp6(5),t.Oqu(t.xi3(35,15,e.totalPrice,"EUR")),t.xp6(3),t.Q6J("ngModel",e.status)("ngStyle",t.VKq(18,T,i.statusColors.get(e.status)))}}let K=(()=>{class n{constructor(e){this.contactService=e,this.statusColors=new Map([["Commande enregistr\xe9e","#5a3a22"],["En cours de pr\xe9paration","#E58F6C"],["Pr\xeat","green"]])}ngOnInit(){}updateStatus(e){const{_id:i,status:s}=e;this.contactService.updateOrder(i,{status:s}).subscribe({next:r=>console.log(r),error:r=>console.log(r),complete:()=>this.updateStatusNotification(e)})}updateStatusNotification(e){this.contactService.updateNotification(e).subscribe({next:i=>console.log(i),error:i=>console.log(i),complete:()=>console.log("Notification sent")})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(x.y))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-orders-list"]],inputs:{orders:"orders"},decls:20,vars:2,consts:[[1,"table","table--lg","orders-list"],[4,"ngFor","ngForOf"],[1,"table","table--sm","orders-list"],[4,"ngIf"],[3,"ngModel","ngStyle","ngModelChange"],["value","Commande enregistr\xe9e"],["value","En cours de pr\xe9paration"],["value","Pr\xeat"],[1,"table--sm__body"],[1,"flex-col"]],template:function(e,i){1&e&&(t.TgZ(0,"div")(1,"table",0)(2,"thead")(3,"tr")(4,"th"),t._uU(5,"Num\xe9ro de commande"),t.qZA(),t.TgZ(6,"th"),t._uU(7,"Client"),t.qZA(),t.TgZ(8,"th"),t._uU(9,"Date"),t.qZA(),t.TgZ(10,"th"),t._uU(11,"Produits"),t.qZA(),t.TgZ(12,"th"),t._uU(13,"Prix"),t.qZA(),t.TgZ(14,"th"),t._uU(15,"Statut"),t.qZA()()(),t.TgZ(16,"tbody"),t.YNc(17,G,32,20,"tr",1),t.qZA()(),t.TgZ(18,"table",2),t.YNc(19,H,44,20,"tr",1),t.qZA()()),2&e&&(t.xp6(17),t.Q6J("ngForOf",i.orders),t.xp6(2),t.Q6J("ngForOf",i.orders))},dependencies:[l.sg,l.O5,l.PC,a.YN,a.Kr,a.EJ,a.JJ,a.On,l.H9,l.uU]}),n})();function z(n,o){if(1&n&&(t.TgZ(0,"span"),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.hij(" ",e.address," ")}}function R(n,o){if(1&n&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.zipcode," ")}}function V(n,o){if(1&n&&(t.TgZ(0,"span",11),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.city," ")}}function X(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,R,2,1,"span",8),t.YNc(2,V,2,1,"span",9),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",e.zipcode),t.xp6(1),t.Q6J("ngIf",e.city)}}function W(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",12),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,r=t.oxw();return t.KtG(r.deleteUser(s._id))}),t._UZ(1,"fa-icon",13),t.qZA()}if(2&n){const e=t.oxw(2);t.xp6(1),t.Q6J("icon",e.faTrash)}}function tt(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td",3),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"a",4),t._uU(5),t.qZA()(),t.TgZ(6,"td")(7,"div",5),t.YNc(8,z,2,1,"span",6),t.YNc(9,X,3,2,"div",6),t.qZA()(),t.TgZ(10,"td")(11,"a",4),t._uU(12),t.qZA()(),t.TgZ(13,"td"),t.YNc(14,W,2,1,"button",7),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.AsE(" ",e.firstName," ",e.lastName," "),t.xp6(2),t.MGl("href","mailto:",e.email,"",t.LSH),t.xp6(1),t.hij(" ",e.email," "),t.xp6(3),t.Q6J("ngIf",e.address),t.xp6(1),t.Q6J("ngIf",e.zipcode||e.city),t.xp6(2),t.MGl("href","tel:",e.phone,"",t.LSH),t.xp6(1),t.hij(" ",e.phone," "),t.xp6(2),t.Q6J("ngIf",!1===e.isAdmin)}}function et(n,o){if(1&n&&(t.TgZ(0,"h3",3),t._uU(1),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.AsE(" ",e.firstName," ",e.lastName," ")}}function nt(n,o){1&n&&(t.TgZ(0,"div")(1,"label",18),t._uU(2,"E-mail : "),t.qZA()())}function it(n,o){if(1&n&&(t.TgZ(0,"div")(1,"span",19)(2,"a",4),t._uU(3),t.qZA()()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.MGl("href","mailto:",e.email,"",t.LSH),t.xp6(1),t.hij(" ",e.email," ")}}function ot(n,o){1&n&&(t.TgZ(0,"div")(1,"label",20),t._uU(2,"Adresse : "),t.qZA()())}function st(n,o){if(1&n&&(t.TgZ(0,"span",22),t._uU(1),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.hij(" ",e.address," ")}}function rt(n,o){if(1&n&&(t.TgZ(0,"span",10),t._uU(1),t.qZA()),2&n){const e=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",e.zipcode," ")}}function at(n,o){if(1&n&&(t.TgZ(0,"span",11),t._uU(1),t.qZA()),2&n){const e=t.oxw(3).$implicit;t.xp6(1),t.hij(" ",e.city," ")}}function ct(n,o){if(1&n&&(t.TgZ(0,"div"),t.YNc(1,rt,2,1,"span",8),t.YNc(2,at,2,1,"span",9),t.qZA()),2&n){const e=t.oxw(2).$implicit;t.xp6(1),t.Q6J("ngIf",e.zipcode),t.xp6(1),t.Q6J("ngIf",e.city)}}function pt(n,o){if(1&n&&(t.TgZ(0,"div",5),t.YNc(1,st,2,1,"span",21),t.YNc(2,ct,3,2,"div",6),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",e.address),t.xp6(1),t.Q6J("ngIf",e.zipcode||e.city)}}function lt(n,o){1&n&&(t.TgZ(0,"div")(1,"label",23),t._uU(2,"T\xe9l\xe9phone : "),t.qZA()())}function _t(n,o){if(1&n&&(t.TgZ(0,"div")(1,"a",24),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.MGl("href","tel:",e.phone,"",t.LSH),t.xp6(1),t.hij(" ",e.phone," ")}}function ut(n,o){1&n&&(t.TgZ(0,"div")(1,"label",25),t._uU(2,"Date d'anniversaire : "),t.qZA()())}function dt(n,o){if(1&n&&(t.TgZ(0,"div")(1,"span",26),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.birthday," ")}}function mt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",29),t.NdJ("click",function(){t.CHM(e);const s=t.oxw(2).$implicit,r=t.oxw();return t.KtG(r.deleteUser(s._id))}),t._uU(1," Supprimer "),t.qZA()}}function gt(n,o){if(1&n&&(t.TgZ(0,"div",27),t.YNc(1,mt,2,0,"button",28),t.qZA()),2&n){const e=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",!1===e.isAdmin)}}function ft(n,o){if(1&n&&(t.TgZ(0,"tr")(1,"td",14),t.YNc(2,et,2,2,"h3",15),t.YNc(3,nt,3,0,"div",6),t.YNc(4,it,4,2,"div",6),t.YNc(5,ot,3,0,"div",6),t.YNc(6,pt,3,2,"div",16),t.YNc(7,lt,3,0,"div",6),t.YNc(8,_t,3,2,"div",6),t.YNc(9,ut,3,0,"div",6),t.YNc(10,dt,3,1,"div",6),t.YNc(11,gt,2,1,"div",17),t.qZA()()),2&n){const e=o.$implicit;t.xp6(2),t.Q6J("ngIf",e.firstName&&e.lastName),t.xp6(1),t.Q6J("ngIf",e.email),t.xp6(1),t.Q6J("ngIf",e.email),t.xp6(1),t.Q6J("ngIf",e.address),t.xp6(1),t.Q6J("ngIf",e.address||e.zipcode||e.city),t.xp6(1),t.Q6J("ngIf",e.phone),t.xp6(1),t.Q6J("ngIf",e.phone),t.xp6(1),t.Q6J("ngIf",e.birthday),t.xp6(1),t.Q6J("ngIf",e.birthday),t.xp6(1),t.Q6J("ngIf",!1===e.isAdmin)}}let ht=(()=>{class n{constructor(e,i){this.authService=e,this.toast=i,this.faTrash=_.$aW}ngOnInit(){this.users$=this.authService.getAllUsers()}deleteUser(e){this.toast.initiate({title:"Supression",message:"Voulez-vous vraiment supprimer cet utilisateur?",type:"confirm"}),this.toast.isConfirmed.subscribe({next:i=>{i&&this.authService.deleteUser(e).subscribe({next:s=>{this.toast.initiate({title:"Compte supprim\xe9!",message:s.message}),this.users$=this.authService.getAllUsers()},error:s=>{this.toast.initiate({title:"Erreur!",message:s.message})}})},error:i=>{this.toast.initiate({title:"Erreur!",message:i.message,type:"error"})}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(Z.e),t.Y36(g.k))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-users-list"]],decls:19,vars:6,consts:[[1,"table","table--md"],[4,"ngFor","ngForOf"],[1,"table","table--sm","users-list"],[1,"users-list__title"],[3,"href"],[1,"users-list__address"],[4,"ngIf"],["class","btn-socials",3,"click",4,"ngIf"],["class","users-list__zipcode",4,"ngIf"],["class","users-list__city",4,"ngIf"],[1,"users-list__zipcode"],[1,"users-list__city"],[1,"btn-socials",3,"click"],[3,"icon"],[1,"users-list__cell"],["class","users-list__title",4,"ngIf"],["class","users-list__address",4,"ngIf"],["class","users-list__footer",4,"ngIf"],["for","email"],["id","email"],["for","address"],["id","address",4,"ngIf"],["id","address"],["for","phone"],["id","phone",3,"href"],["for","birthday"],["id","birthday"],[1,"users-list__footer"],["class","btn btn--primary",3,"click",4,"ngIf"],[1,"btn","btn--primary",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"table",0)(1,"thead")(2,"tr")(3,"th"),t._uU(4,"Client"),t.qZA(),t.TgZ(5,"th"),t._uU(6,"Adresse e-mail"),t.qZA(),t.TgZ(7,"th"),t._uU(8,"Adresse"),t.qZA(),t.TgZ(9,"th"),t._uU(10,"T\xe9l\xe9phone"),t.qZA(),t.TgZ(11,"th"),t._uU(12,"Supprimer"),t.qZA()()(),t.TgZ(13,"tbody"),t.YNc(14,tt,15,9,"tr",1),t.ALo(15,"async"),t.qZA()(),t.TgZ(16,"table",2),t.YNc(17,ft,12,10,"tr",1),t.ALo(18,"async"),t.qZA()),2&e&&(t.xp6(14),t.Q6J("ngForOf",t.lcZ(15,2,i.users$)),t.xp6(3),t.Q6J("ngForOf",t.lcZ(18,4,i.users$)))},dependencies:[l.sg,l.O5,u.BN,l.Ov],styles:["@media screen and (max-width: 768px){.table--md[_ngcontent-%COMP%]{display:none}}.table--sm[_ngcontent-%COMP%]{display:none}@media screen and (max-width: 768px){.table--sm[_ngcontent-%COMP%]{display:table}}.users-list[_ngcontent-%COMP%]   label[_ngcontent-%COMP%]{font-weight:700}.users-list__title[_ngcontent-%COMP%]{grid-column:span 2;text-align:center!important;font-weight:700;margin-top:0}.users-list__cell[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;text-align:start;row-gap:10px;margin:auto;padding:25px 0;width:-moz-fit-content;width:fit-content}.users-list__cell[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]:last-of-type > .btn[_ngcontent-%COMP%]{margin-top:20px}.users-list__address[_ngcontent-%COMP%]{display:flex;flex-direction:column}.users-list__city[_ngcontent-%COMP%]{font-weight:700;text-transform:uppercase}.users-list__footer[_ngcontent-%COMP%]{grid-column:span 2}.users-list__footer[_ngcontent-%COMP%] > btn[_ngcontent-%COMP%]{margin:auto}"]}),n})();function xt(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"app-add-item",10),t.NdJ("newProduct",function(s){t.CHM(e);const r=t.oxw();return t.KtG(r.triggerRefresh(s))}),t.qZA()}}function Zt(n,o){if(1&n&&t._UZ(0,"app-get-items",11),2&n){const e=t.oxw();t.Q6J("products",e.products)("favsCount",e.favsCount)}}function Ct(n,o){if(1&n&&t._UZ(0,"app-orders-list",12),2&n){const e=t.oxw();t.Q6J("orders",e.orders)}}function Tt(n,o){1&n&&t._UZ(0,"app-users-list")}function At(n,o){1&n&&t._UZ(0,"app-profile")}const vt=[{path:"",component:(()=>{class n{constructor(e,i,s){this.productsService=e,this.contactService=i,this.authService=s,this.addItemBoolean=!1,this.getItemsBoolean=!0,this.getOrdersBoolean=!1,this.navBarTab="get items",this.favsCount=0,this.faPowerOff=_.oTz}ngOnInit(){this.productsService.getProducts(null).subscribe({next:e=>{this.products=e,this.productsService.changeObject(e),this.products.forEach(i=>{!0===i.popular&&this.favsCount++,this.productsService.favsCount.next(this.favsCount)})}})}navBarClick(e){"get orders"===e&&this.contactService.getAllOrders().subscribe({next:i=>{this.orders=i},error:i=>console.log(i)}),this.navBarTab=e}onLogout(){this.authService.logout()}triggerRefresh(e){"refresh"===e.message&&this.productsService.getProducts(null).subscribe({next:i=>{this.products=i}})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(m.s),t.Y36(x.y),t.Y36(Z.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-dashboard"]],decls:21,vars:6,consts:[[1,"dashboard"],[1,"dashboard__header"],[1,"btn","btn--primary",3,"click"],[3,"icon"],[1,"btn__container"],[1,"dashboard__body"],[3,"newProduct",4,"ngIf"],[3,"products","favsCount",4,"ngIf"],[3,"orders",4,"ngIf"],[4,"ngIf"],[3,"newProduct"],[3,"products","favsCount"],[3,"orders"]],template:function(e,i){1&e&&(t.TgZ(0,"section",0)(1,"div",1)(2,"button",2),t.NdJ("click",function(){return i.onLogout()}),t._UZ(3,"fa-icon",3),t.qZA(),t.TgZ(4,"button",2),t.NdJ("click",function(){return i.navBarClick("profile")}),t._uU(5," Voir profil admin "),t.qZA(),t.TgZ(6,"div",4)(7,"button",2),t.NdJ("click",function(){return i.navBarClick("add item")}),t._uU(8," Ajouter un produit "),t.qZA(),t.TgZ(9,"button",2),t.NdJ("click",function(){return i.navBarClick("get items")}),t._uU(10," Voir les produits "),t.qZA(),t.TgZ(11,"button",2),t.NdJ("click",function(){return i.navBarClick("get orders")}),t._uU(12," Voir les commandes "),t.qZA(),t.TgZ(13,"button",2),t.NdJ("click",function(){return i.navBarClick("get users")}),t._uU(14," Voir les utilisateurs "),t.qZA()()(),t.TgZ(15,"div",5),t.YNc(16,xt,1,0,"app-add-item",6),t.YNc(17,Zt,1,2,"app-get-items",7),t.YNc(18,Ct,1,1,"app-orders-list",8),t.YNc(19,Tt,1,0,"app-users-list",9),t.YNc(20,At,1,0,"app-profile",9),t.qZA()()),2&e&&(t.xp6(3),t.Q6J("icon",i.faPowerOff),t.xp6(13),t.Q6J("ngIf","add item"===i.navBarTab),t.xp6(1),t.Q6J("ngIf","get items"===i.navBarTab),t.xp6(1),t.Q6J("ngIf","get orders"===i.navBarTab),t.xp6(1),t.Q6J("ngIf","get users"===i.navBarTab),t.xp6(1),t.Q6J("ngIf","profile"===i.navBarTab))},dependencies:[l.O5,u.BN,A.d,v,M,K,ht],styles:[".btn__container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center}@media screen and (max-width: 768px){.btn__container[_ngcontent-%COMP%]{flex-direction:column;row-gap:20px}}.dashboard[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:2rem}.dashboard__header[_ngcontent-%COMP%]{display:flex;flex-direction:column;row-gap:20px}"]}),n})()}];let bt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[d.Bz.forChild(vt),d.Bz]}),n})();var Ut=c(4466),qt=c(294),It=c(5564);let yt=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[l.ez,bt,a.UX,a.u5,u.uH,qt.I,Ut.m,It.AuthModule]}),n})()}}]);