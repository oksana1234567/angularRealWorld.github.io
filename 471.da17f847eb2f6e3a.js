"use strict";(self.webpackChunkreal_world=self.webpackChunkreal_world||[]).push([[471],{8471:(C,a,s)=>{s.r(a),s.d(a,{SignInModule:()=>S});var l=s(9808),u=s(7656),o=s(2382),d=s(18),r=s(1223),m=s(3071);function c(n,i){1&n&&(r.TgZ(0,"div",9),r._uU(1,"Email is required."),r.qZA())}function g(n,i){if(1&n&&(r.TgZ(0,"div",9),r._uU(1," Valid Email is required. "),r.YNc(2,c,2,0,"div",6),r.qZA()),2&n){const e=r.oxw();r.xp6(2),r.Q6J("ngIf",null==e.userEmail.errors?null:e.userEmail.errors.required)}}function p(n,i){1&n&&(r.TgZ(0,"div"),r._uU(1," Password is required. "),r.qZA())}function f(n,i){1&n&&(r.TgZ(0,"div"),r._uU(1," Password is required. Password must be at least 8 characters long. "),r.qZA())}function v(n,i){1&n&&(r.TgZ(0,"div"),r._uU(1," Password is not valid. "),r.qZA())}function h(n,i){if(1&n&&(r.TgZ(0,"div",9),r._uU(1," Password must have at least one Lowercase Character, must contain at least one Digit and at least one Special Symbol. "),r.YNc(2,p,2,0,"div",10),r.YNc(3,f,2,0,"div",10),r.YNc(4,v,2,0,"div",10),r.qZA()),2&n){const e=r.oxw();r.xp6(2),r.Q6J("ngIf",null==e.userPassword.errors?null:e.userPassword.errors.required),r.xp6(1),r.Q6J("ngIf",null==e.userPassword.errors?null:e.userPassword.errors.minlength),r.xp6(1),r.Q6J("ngIf",null==e.userPassword.errors?null:e.userPassword.errors.mustBePasswordValidator)}}function I(n,i){if(1&n&&(r.TgZ(0,"div",9)(1,"p"),r._uU(2),r.qZA()()),2&n){const e=r.oxw();r.xp6(2),r.AsE("",e.fieldError,": ",e.problemError,"")}}const w=[{path:"",component:(()=>{class n{constructor(e){this.userService=e}ngOnInit(){this.authForm=new o.cw({email:new o.NI("",[o.kI.email,o.kI.required]),password:new o.NI("",[o.kI.required,o.kI.minLength(8),(0,d.F)(/^(\S)(?=.*[0-9])(?=.*[A-Z])/i)])})}login(){this.newUser=this.authForm.value,this.subscriptionUser$=this.userService.logUser({user:this.newUser}).subscribe({next:()=>{},error:e=>{this.fieldError=e.fieldError,this.problemError=e.problemError}})}get userEmail(){return this.authForm.get("email")}get userPassword(){return this.authForm.get("password")}ngOnDestroy(){this.subscriptionUser$&&this.subscriptionUser$.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(r.Y36(m.K))},n.\u0275cmp=r.Xpm({type:n,selectors:[["app-sign-in"]],decls:16,vars:5,consts:[[1,"form"],["href","/register",1,"ref"],[3,"formGroup"],[1,"containerInput"],[1,"form-group"],["type","email","name","email","required","","formControlName","email","placeholder","Email",1,"form-control"],["class","alert alert-danger",4,"ngIf"],["type","password","name","password","required","","formControlName","password","placeholder","Password","required","",1,"form-control"],["type","submit",1,"btn","btn-primary",3,"disabled","click"],[1,"alert","alert-danger"],[4,"ngIf"]],template:function(e,t){1&e&&(r.TgZ(0,"div",0)(1,"h3"),r._uU(2,"Sign in"),r.qZA(),r.TgZ(3,"a",1),r._uU(4,"Need an account?"),r.qZA(),r.TgZ(5,"form",2)(6,"div",3)(7,"div",4),r._UZ(8,"input",5),r.qZA(),r.YNc(9,g,3,1,"div",6),r.TgZ(10,"div",4),r._UZ(11,"input",7),r.qZA(),r.YNc(12,h,5,3,"div",6),r.YNc(13,I,3,2,"div",6),r.qZA(),r.TgZ(14,"button",8),r.NdJ("click",function(){return t.login()}),r._uU(15,"Sign In"),r.qZA()()()),2&e&&(r.xp6(5),r.Q6J("formGroup",t.authForm),r.xp6(4),r.Q6J("ngIf",t.userEmail.invalid&&(t.userEmail.dirty||t.userEmail.touched)),r.xp6(3),r.Q6J("ngIf",t.userPassword.invalid&&(t.userPassword.dirty||t.userPassword.touched)),r.xp6(1),r.Q6J("ngIf",t.fieldError&&t.problemError),r.xp6(1),r.Q6J("disabled",!t.authForm.valid))},directives:[o._Y,o.JL,o.sg,o.Fj,o.Q7,o.JJ,o.u,l.O5],styles:[".btn-primary[_ngcontent-%COMP%]{background-color:var(--primary-lightBlue-color);color:#fff}.btn-primary[_ngcontent-%COMP%]:hover, .btn-primary[_ngcontent-%COMP%]:focus, .btn-primary[_ngcontent-%COMP%]:visited{background-color:var(--primary-darkBlue-color);color:#fff}.form[_ngcontent-%COMP%]{text-align:center;max-width:60%;margin:auto;margin-top:5rem}.ref[_ngcontent-%COMP%]{color:var(--primary-lightBlue-color)}.containerInput[_ngcontent-%COMP%]{margin-top:2rem}.btn-primary[_ngcontent-%COMP%]{padding-right:2rem;padding-left:2rem}.form-control[_ngcontent-%COMP%]{margin-bottom:1.5rem}"]}),n})()}];let _=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[u.Bz.forChild(w)],u.Bz]}),n})(),S=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=r.oAB({type:n}),n.\u0275inj=r.cJS({imports:[[l.ez,_,o.UX]]}),n})()}}]);