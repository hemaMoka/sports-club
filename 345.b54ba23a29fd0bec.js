"use strict";(self.webpackChunksports_club=self.webpackChunksports_club||[]).push([[345],{8345:(L,h,s)=>{s.r(h),s.d(h,{CochesModule:()=>H});var p=s(6814),l=s(95),u=s(7163),e=s(4769),v=s(9862);let _=(()=>{class t{constructor(o){this._HttpClient=o}getCochesByCategory(o){return this._HttpClient.get(`https://sports-talents.onrender.com/${o}`)}getSpacificCoch(o){return this._HttpClient.get(`https://sports-talents.onrender.com/Allcoches/${o}`)}static#e=this.\u0275fac=function(i){return new(i||t)(e.LFG(v.eN))};static#t=this.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();const C=function(t){return["../spacific-coch",t]};function T(t,r){if(1&t&&(e.TgZ(0,"div",5)(1,"div",6),e._UZ(2,"img",7),e.qZA(),e.TgZ(3,"div",8)(4,"h2"),e._uU(5),e.qZA(),e.TgZ(6,"h4"),e._uU(7),e.qZA(),e.TgZ(8,"p")(9,"span",9),e._uU(10,"About"),e.qZA(),e._uU(11," : "),e._UZ(12,"br"),e._uU(13),e.qZA(),e.TgZ(14,"a",10),e._uU(15,"Read More"),e.qZA()()()),2&t){const o=r.$implicit;e.xp6(2),e.Q6J("src",o.img,e.LSH),e.xp6(3),e.hij("Name : ",o.name,""),e.xp6(2),e.hij("Category : ",o.category,""),e.xp6(6),e.hij(" ",o["f-sec"].split(" ").slice(0,15).join(" ")," ...."),e.xp6(1),e.Q6J("routerLink",e.VKq(5,C,o.id))}}let q=(()=>{class t{constructor(o){this._TrainersServiceService=o,this.cat="",this.coches=[]}ngOnChanges(o){this._TrainersServiceService.getCochesByCategory(o.cat.currentValue).subscribe({next:i=>{this.coches=i}})}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(_))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-trainer"]],inputs:{cat:"cat"},features:[e.TTD],decls:6,vars:2,consts:[[1,"py-5"],[1,"container","w-75"],[1,"head","py-3"],[1,"titles"],["class","row rounded-3 sec-color p-3 mb-4",4,"ngFor","ngForOf"],[1,"row","rounded-3","sec-color","p-3","mb-4"],[1,"image","col-md-3"],["width","200","height","200","alt","",1,"rounded-circle",3,"src"],[1,"content","col-md-8"],[1,"h5"],[1,"btn","btn-dark","fw-bolder",3,"routerLink"]],template:function(i,n){1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"h1",3),e._uU(4),e.qZA()(),e.YNc(5,T,16,7,"div",4),e.qZA()()),2&i&&(e.xp6(4),e.Oqu(n.cat),e.xp6(1),e.Q6J("ngForOf",n.coches))},dependencies:[p.sg,u.rH]})}return t})(),A=(()=>{class t{constructor(){this.filterValue="Allcoches"}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-fillter"]],decls:22,vars:5,consts:[[1,"py-5"],[1,"container","w-75"],[1,"row","sec-color","p-2","rounded-2"],[1,"col-md-2"],["id","all","type","radio","name","cat","value","Allcoches",3,"ngModel","ngModelChange"],["for","all",1,"ms-2","fw-bold"],["id","foot","type","radio","name","cat","value","footballcoches",3,"ngModel","ngModelChange"],["for","foot",1,"ms-2","fw-bold"],[1,"col-md-3"],["id","swim","type","radio","name","cat","value","swimmingcoches",3,"ngModel","ngModelChange"],["for","swim",1,"ms-2","fw-bold"],["id","basket","type","radio","name","cat","value","basketballcoches",3,"ngModel","ngModelChange"],["for","basket",1,"ms-2","fw-bold"],[3,"cat"]],template:function(i,n){1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"h3"),e._uU(3,"Fillter Coches "),e.qZA(),e.TgZ(4,"div",2)(5,"div",3)(6,"input",4),e.NdJ("ngModelChange",function(c){return n.filterValue=c}),e.qZA(),e.TgZ(7,"label",5),e._uU(8,"All coches"),e.qZA()(),e.TgZ(9,"div",3)(10,"input",6),e.NdJ("ngModelChange",function(c){return n.filterValue=c}),e.qZA(),e.TgZ(11,"label",7),e._uU(12,"football coches"),e.qZA()(),e.TgZ(13,"div",8)(14,"input",9),e.NdJ("ngModelChange",function(c){return n.filterValue=c}),e.qZA(),e.TgZ(15,"label",10),e._uU(16,"swimming coches"),e.qZA()(),e.TgZ(17,"div",8)(18,"input",11),e.NdJ("ngModelChange",function(c){return n.filterValue=c}),e.qZA(),e.TgZ(19,"label",12),e._uU(20,"basketball coches"),e.qZA()()()()(),e._UZ(21,"app-trainer",13)),2&i&&(e.xp6(6),e.Q6J("ngModel",n.filterValue),e.xp6(4),e.Q6J("ngModel",n.filterValue),e.xp6(4),e.Q6J("ngModel",n.filterValue),e.xp6(4),e.Q6J("ngModel",n.filterValue),e.xp6(3),e.Q6J("cat",n.filterValue))},dependencies:[l.Fj,l._,l.JJ,l.On,q]})}return t})(),F=(()=>{class t{constructor(){this.cat=""}static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-trainers"]],inputs:{cat:"cat"},decls:1,vars:0,template:function(i,n){1&i&&e._UZ(0,"app-fillter")},dependencies:[A]})}return t})();var Z=s(2425),f=s(756);function b(t,r){if(1&t&&(e.TgZ(0,"div",29),e._UZ(1,"img",30),e.TgZ(2,"div",31)(3,"h5"),e._uU(4),e.qZA(),e.TgZ(5,"h6"),e._uU(6),e.qZA()()()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("src",o.image,e.LSH),e.xp6(3),e.Oqu(o.name),e.xp6(2),e.Oqu(o.club)}}function U(t,r){1&t&&e.YNc(0,b,7,3,"ng-template",28)}function w(t,r){if(1&t&&(e.TgZ(0,"div",29),e._UZ(1,"img",30),e.TgZ(2,"div",31)(3,"h5"),e._uU(4),e.qZA(),e.TgZ(5,"h6"),e._uU(6),e.qZA()()()),2&t){const o=e.oxw().$implicit;e.xp6(1),e.Q6J("src",o.image,e.LSH),e.xp6(3),e.Oqu(o.name),e.xp6(2),e.Oqu(o.club)}}function y(t,r){1&t&&e.YNc(0,w,7,3,"ng-template",28)}function k(t,r){1&t&&(e.TgZ(0,"p",34),e._uU(1,"This is Faild Is Required"),e.qZA())}function S(t,r){if(1&t&&(e.TgZ(0,"div",32),e.YNc(1,k,2,0,"p",33),e.qZA()),2&t){const o=e.oxw();let i;e.xp6(1),e.Q6J("ngIf",null==(i=o.askForm.get("name"))?null:i.getError("required"))}}function x(t,r){1&t&&(e.TgZ(0,"p",34),e._uU(1,"This is Faild Is Required"),e.qZA())}function J(t,r){1&t&&(e.TgZ(0,"p",34),e._uU(1,"InVaild E-mail"),e.qZA())}function N(t,r){if(1&t&&(e.TgZ(0,"div",32),e.YNc(1,x,2,0,"p",33),e.YNc(2,J,2,0,"p",33),e.qZA()),2&t){const o=e.oxw();let i,n;e.xp6(1),e.Q6J("ngIf",null==(i=o.askForm.get("email"))?null:i.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=o.askForm.get("email"))?null:n.getError("email"))}}function I(t,r){1&t&&(e.TgZ(0,"p",34),e._uU(1,"This is Faild Is Required"),e.qZA())}function Q(t,r){if(1&t&&(e.TgZ(0,"div",32),e.YNc(1,I,2,0,"p",33),e.qZA()),2&t){const o=e.oxw();let i;e.xp6(1),e.Q6J("ngIf",null==(i=o.askForm.get("cv"))?null:i.getError("required"))}}function M(t,r){1&t&&(e.TgZ(0,"p",34),e._uU(1,"This is Faild Is Required"),e.qZA())}function Y(t,r){1&t&&(e.TgZ(0,"p",34),e._uU(1,"Please Enter Egyption Number"),e.qZA())}function O(t,r){if(1&t&&(e.TgZ(0,"div",32),e.YNc(1,M,2,0,"p",33),e.YNc(2,Y,2,0,"p",33),e.qZA()),2&t){const o=e.oxw();let i,n;e.xp6(1),e.Q6J("ngIf",null==(i=o.askForm.get("phone"))?null:i.getError("required")),e.xp6(1),e.Q6J("ngIf",null==(n=o.askForm.get("phone"))?null:n.getError("pattern"))}}function R(t,r){1&t&&(e.TgZ(0,"p",34),e._uU(1,"This is Faild Is Required"),e.qZA())}function V(t,r){if(1&t&&(e.TgZ(0,"div",32),e.YNc(1,R,2,0,"p",33),e.qZA()),2&t){const o=e.oxw();let i;e.xp6(1),e.Q6J("ngIf",null==(i=o.askForm.get("message"))?null:i.getError("required"))}}const j=[{path:"",redirectTo:"trainers",pathMatch:"full"},{path:"trainers",component:F},{path:"spacific-coch/:id",component:(()=>{class t{constructor(o,i,n){this._ToastrService=o,this._ActivatedRoute=i,this._TrainersServiceService=n,this.customOptions={loop:!0,mouseDrag:!0,touchDrag:!0,pullDrag:!1,dots:!1,navSpeed:700,navText:["",""],responsive:{0:{items:1},400:{items:1},740:{items:1},940:{items:1}},nav:!0},this.id=0,this.askForm=new l.cw({name:new l.NI(null,[l.kI.required]),email:new l.NI(null,[l.kI.required]),cv:new l.NI(null,[l.kI.required]),phone:new l.NI(null,[l.kI.required,l.kI.pattern(/^01[1 2 0 5][0-9]{8}$/)]),message:new l.NI(null,[l.kI.required])})}ngOnInit(){this._ActivatedRoute.params.subscribe({next:o=>{this.id=o.id}}),this._TrainersServiceService.getSpacificCoch(this.id).subscribe({next:o=>{this.myCoch=o}})}handleContact(o){this.askForm.reset(),this._ToastrService.success("Your Requist Is Recived","Success")}static#e=this.\u0275fac=function(i){return new(i||t)(e.Y36(Z._W),e.Y36(u.gz),e.Y36(_))};static#t=this.\u0275cmp=e.Xpm({type:t,selectors:[["app-spacific-coch"]],decls:65,vars:19,consts:[[1,"py-5"],[1,"container","w-75","sec-color","p-3","rounded-3"],[1,"row","align-items-center","justify-content-center"],[1,"col-md-4"],[1,"img"],["width","300","height","300","alt","",3,"src"],[1,"titles","fs-1"],[1,"col-md-7"],[1,"titles","fs-2"],[1,"lead","fw-bold"],[1,"container","w-75","sec-color","p-"],[1,"head","text-center"],[1,"titles","fs-1","fw-bolder"],[1,"w-50","mx-auto"],[3,"options"],[4,"ngFor","ngForOf"],[1,"container","w-75","sec-color","p-3"],[1,"titles","fs-1","text-center"],[1,"w-50","mx-auto",3,"formGroup","ngSubmit"],[1,"form-group","mb-4"],["for","",1,"fw-bold","mb-2"],["type","text","formControlName","name",1,"form-control"],["class","text-bg-danger mt-2 rounded-3",4,"ngIf"],["type","email","formControlName","email",1,"form-control"],["type","file","formControlName","cv",1,"form-control"],["type","tel","formControlName","phone",1,"form-control"],["name","","id","","formControlName","message","cols","30","rows","10",1,"form-control"],[1,"btn","btn-dark","fw-bold",3,"disabled"],["carouselSlide",""],[1,"position-relative"],["width","100%","height","300","alt","",3,"src"],[1,"text-bg-dark","p-3","text-center","position-absolute","bottom-0","start-0","end-0"],[1,"text-bg-danger","mt-2","rounded-3"],["class","p-1",4,"ngIf"],[1,"p-1"]],template:function(i,n){if(1&i&&(e.TgZ(0,"section",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e._UZ(5,"img",5),e.qZA(),e.TgZ(6,"h2",6),e._uU(7),e.qZA()(),e.TgZ(8,"div",7)(9,"h2",8),e._uU(10),e.qZA(),e.TgZ(11,"p",9),e._uU(12),e.qZA()()()()(),e.TgZ(13,"section",0)(14,"div",10)(15,"div",11)(16,"h2",12),e._uU(17),e.qZA(),e.TgZ(18,"p",9),e._uU(19),e.qZA()(),e.TgZ(20,"div",13)(21,"owl-carousel-o",14),e.YNc(22,U,1,0,null,15),e.qZA()()()(),e.TgZ(23,"section",0)(24,"div",10)(25,"div",11)(26,"h2",12),e._uU(27),e.qZA(),e.TgZ(28,"p",9),e._uU(29),e.qZA()(),e.TgZ(30,"div",13)(31,"owl-carousel-o",14),e.YNc(32,y,1,0,null,15),e.qZA()()()(),e.TgZ(33,"section",0)(34,"div",16)(35,"h3",17),e._uU(36,"Ask For Training Or Discover"),e.qZA(),e.TgZ(37,"form",18),e.NdJ("ngSubmit",function(){return n.handleContact(n.askForm)}),e.TgZ(38,"div",19)(39,"label",20),e._uU(40,"Name"),e.qZA(),e._UZ(41,"input",21),e.YNc(42,S,2,1,"div",22),e.qZA(),e.TgZ(43,"div",19)(44,"label",20),e._uU(45,"E-mail"),e.qZA(),e._UZ(46,"input",23),e.YNc(47,N,3,2,"div",22),e.qZA(),e.TgZ(48,"div",19)(49,"label",20),e._uU(50,"Cv"),e.qZA(),e._UZ(51,"input",24),e.YNc(52,Q,2,1,"div",22),e.qZA(),e.TgZ(53,"div",19)(54,"label",20),e._uU(55,"Phone"),e.qZA(),e._UZ(56,"input",25),e.YNc(57,O,3,2,"div",22),e.qZA(),e.TgZ(58,"div",19)(59,"label",20),e._uU(60,"Message"),e.qZA(),e._UZ(61,"textarea",26),e.YNc(62,V,2,1,"div",22),e.qZA(),e.TgZ(63,"button",27),e._uU(64,"Send Request"),e.qZA()()()()),2&i){let a,c,m,d,g;e.xp6(5),e.Q6J("src",n.myCoch.img,e.LSH),e.xp6(2),e.Oqu(n.myCoch.name),e.xp6(3),e.Oqu(n.myCoch["tf-sec"]),e.xp6(2),e.hij(" ",n.myCoch["f-sec"]," "),e.xp6(5),e.Oqu(n.myCoch["ts-sec"]),e.xp6(2),e.hij(" ",n.myCoch["s-sce"]," "),e.xp6(2),e.Q6J("options",n.customOptions),e.xp6(1),e.Q6J("ngForOf",n.myCoch.trainer),e.xp6(5),e.Oqu(n.myCoch["tt-sec"]),e.xp6(2),e.hij(" ",n.myCoch["t-sec"]," "),e.xp6(2),e.Q6J("options",n.customOptions),e.xp6(1),e.Q6J("ngForOf",n.myCoch.discover),e.xp6(5),e.Q6J("formGroup",n.askForm),e.xp6(5),e.Q6J("ngIf",(null==n.askForm||null==(a=n.askForm.get("name"))?null:a.errors)&&(null==n.askForm||null==(a=n.askForm.get("name"))?null:a.touched)),e.xp6(5),e.Q6J("ngIf",(null==n.askForm||null==(c=n.askForm.get("email"))?null:c.errors)&&(null==n.askForm||null==(c=n.askForm.get("email"))?null:c.touched)),e.xp6(5),e.Q6J("ngIf",(null==n.askForm||null==(m=n.askForm.get("cv"))?null:m.errors)&&(null==n.askForm||null==(m=n.askForm.get("cv"))?null:m.touched)),e.xp6(5),e.Q6J("ngIf",(null==n.askForm||null==(d=n.askForm.get("phone"))?null:d.errors)&&(null==n.askForm||null==(d=n.askForm.get("phone"))?null:d.touched)),e.xp6(5),e.Q6J("ngIf",(null==n.askForm||null==(g=n.askForm.get("message"))?null:g.errors)&&(null==n.askForm||null==(g=n.askForm.get("message"))?null:g.touched)),e.xp6(1),e.Q6J("disabled",n.askForm.invalid)}},dependencies:[p.sg,p.O5,l._Y,l.Fj,l.JJ,l.JL,f.Fy,f.Mp,l.sg,l.u]})}return t})()}];let E=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[u.Bz.forChild(j),u.Bz]})}return t})(),H=(()=>{class t{static#e=this.\u0275fac=function(i){return new(i||t)};static#t=this.\u0275mod=e.oAB({type:t});static#n=this.\u0275inj=e.cJS({imports:[p.ez,E,l.u5,f.bB,l.UX,Z.Rh.forRoot()]})}return t})()}}]);