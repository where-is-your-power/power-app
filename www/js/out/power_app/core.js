// Compiled by ClojureScript 0.0-2371
goog.provide('power_app.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
power_app.core.period_enum = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"short","short",1928760516),"Kort",new cljs.core.Keyword(null,"medium","medium",-1864319384),"Middel",new cljs.core.Keyword(null,"long","long",-171452093),"Lang"], null);
power_app.core.difficulty_enum = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"easy","easy",315769928),"Makkelijk",new cljs.core.Keyword(null,"normal","normal",-1519123858),"Normaal",new cljs.core.Keyword(null,"hard","hard",2068420191),"Moeilijk"], null);
if(typeof power_app.core.app_state !== 'undefined')
{} else
{power_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"userid","userid",1974246085),null,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),false,new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Test"], null),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null));
}
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__6985_SHARP_){return cljs.core.assoc.call(null,p1__6985_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.create_settings_button = (function create_settings_button(root,enum$,path){return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group btn-group-justified"},cljs.core.map.call(null,(function (p__6989){var vec__6990 = p__6989;var k = cljs.core.nth.call(null,vec__6990,(0),null);var v = cljs.core.nth.call(null,vec__6990,(1),null);return React.DOM.a({"onClick": ((function (vec__6990,k,v){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,root,((function (vec__6990,k,v){
return (function (p1__6986_SHARP_){return cljs.core.assoc_in.call(null,p1__6986_SHARP_,path,k);
});})(vec__6990,k,v))
);
});})(vec__6990,k,v))
, "className": ("btn btn-default"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,root,path),k))?" active":null)))},v);
}),enum$))));
});
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t6995 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t6995 = (function (opts,owner,root,login_component,meta6996){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta6996 = meta6996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t6995.cljs$lang$type = true;
power_app.core.t6995.cljs$lang$ctorStr = "power-app.core/t6995";
power_app.core.t6995.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t6995");
});
power_app.core.t6995.prototype.om$core$IRenderState$ = true;
power_app.core.t6995.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.legend(null,"Login"),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (name,___$2){
return (function (p1__6991_SHARP_){return cljs.core.assoc.call(null,p1__6991_SHARP_,new cljs.core.Keyword(null,"userid","userid",1974246085),"test",new cljs.core.Keyword(null,"name","name",1843675177),name);
});})(name,___$2))
);
});})(___$2))
, "className": "btn btn-primary", "type": "button"},"Inloggen"))))));
});
power_app.core.t6995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6997){var self__ = this;
var _6997__$1 = this;return self__.meta6996;
});
power_app.core.t6995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6997,meta6996__$1){var self__ = this;
var _6997__$1 = this;return (new power_app.core.t6995(self__.opts,self__.owner,self__.root,self__.login_component,meta6996__$1));
});
power_app.core.__GT_t6995 = (function __GT_t6995(opts__$1,owner__$1,root__$1,login_component__$1,meta6996){return (new power_app.core.t6995(opts__$1,owner__$1,root__$1,login_component__$1,meta6996));
});
}
return (new power_app.core.t6995(opts,owner,root,login_component,null));
});
power_app.core.assignment_component = (function assignment_component(p__6998,owner,opts){var map__7004 = p__6998;var map__7004__$1 = ((cljs.core.seq_QMARK_.call(null,map__7004))?cljs.core.apply.call(null,cljs.core.hash_map,map__7004):map__7004);var root = map__7004__$1;var map__7005 = cljs.core.get.call(null,map__7004__$1,new cljs.core.Keyword(null,"assignment","assignment",1330426519));var map__7005__$1 = ((cljs.core.seq_QMARK_.call(null,map__7005))?cljs.core.apply.call(null,cljs.core.hash_map,map__7005):map__7005);var title = cljs.core.get.call(null,map__7005__$1,new cljs.core.Keyword(null,"title","title",636505583));if(typeof power_app.core.t7006 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t7006 = (function (title,map__7005,root,map__7004,opts,owner,p__6998,assignment_component,meta7007){
this.title = title;
this.map__7005 = map__7005;
this.root = root;
this.map__7004 = map__7004;
this.opts = opts;
this.owner = owner;
this.p__6998 = p__6998;
this.assignment_component = assignment_component;
this.meta7007 = meta7007;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t7006.cljs$lang$type = true;
power_app.core.t7006.cljs$lang$ctorStr = "power-app.core/t7006";
power_app.core.t7006.cljs$lang$ctorPrWriter = ((function (map__7004,map__7004__$1,root,map__7005,map__7005__$1,title){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t7006");
});})(map__7004,map__7004__$1,root,map__7005,map__7005__$1,title))
;
power_app.core.t7006.prototype.om$core$IRenderState$ = true;
power_app.core.t7006.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__7004,map__7004__$1,root,map__7005,map__7005__$1,title){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.h2(null,self__.title),power_app.core.create_settings_button.call(null,self__.root,power_app.core.period_enum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"period","period",-352129191)], null)),power_app.core.create_settings_button.call(null,self__.root,power_app.core.difficulty_enum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"difficulty","difficulty",755680807)], null)));
});})(map__7004,map__7004__$1,root,map__7005,map__7005__$1,title))
;
power_app.core.t7006.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__7004,map__7004__$1,root,map__7005,map__7005__$1,title){
return (function (_7008){var self__ = this;
var _7008__$1 = this;return self__.meta7007;
});})(map__7004,map__7004__$1,root,map__7005,map__7005__$1,title))
;
power_app.core.t7006.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__7004,map__7004__$1,root,map__7005,map__7005__$1,title){
return (function (_7008,meta7007__$1){var self__ = this;
var _7008__$1 = this;return (new power_app.core.t7006(self__.title,self__.map__7005,self__.root,self__.map__7004,self__.opts,self__.owner,self__.p__6998,self__.assignment_component,meta7007__$1));
});})(map__7004,map__7004__$1,root,map__7005,map__7005__$1,title))
;
power_app.core.__GT_t7006 = ((function (map__7004,map__7004__$1,root,map__7005,map__7005__$1,title){
return (function __GT_t7006(title__$1,map__7005__$2,root__$1,map__7004__$2,opts__$1,owner__$1,p__6998__$1,assignment_component__$1,meta7007){return (new power_app.core.t7006(title__$1,map__7005__$2,root__$1,map__7004__$2,opts__$1,owner__$1,p__6998__$1,assignment_component__$1,meta7007));
});})(map__7004,map__7004__$1,root,map__7005,map__7005__$1,title))
;
}
return (new power_app.core.t7006(title,map__7005__$1,root,map__7004__$1,opts,owner,p__6998,assignment_component,null));
});
om.core.root.call(null,(function (p__7009,owner){var map__7010 = p__7009;var map__7010__$1 = ((cljs.core.seq_QMARK_.call(null,map__7010))?cljs.core.apply.call(null,cljs.core.hash_map,map__7010):map__7010);var root = map__7010__$1;var userid = cljs.core.get.call(null,map__7010__$1,new cljs.core.Keyword(null,"userid","userid",1974246085));if(typeof power_app.core.t7011 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t7011 = (function (userid,root,map__7010,owner,p__7009,meta7012){
this.userid = userid;
this.root = root;
this.map__7010 = map__7010;
this.owner = owner;
this.p__7009 = p__7009;
this.meta7012 = meta7012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t7011.cljs$lang$type = true;
power_app.core.t7011.cljs$lang$ctorStr = "power-app.core/t7011";
power_app.core.t7011.cljs$lang$ctorPrWriter = ((function (map__7010,map__7010__$1,root,userid){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t7011");
});})(map__7010,map__7010__$1,root,userid))
;
power_app.core.t7011.prototype.om$core$IRender$ = true;
power_app.core.t7011.prototype.om$core$IRender$render$arity$1 = ((function (map__7010,map__7010__$1,root,userid){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h1(null,React.DOM.i({"className": "fa fa-bolt"})," ","Where is my power!"),((cljs.core.not.call(null,self__.userid))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,power_app.core.assignment_component,self__.root)),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.hr(null),cljs.core.pr_str.call(null,self__.root))));
});})(map__7010,map__7010__$1,root,userid))
;
power_app.core.t7011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__7010,map__7010__$1,root,userid){
return (function (_7013){var self__ = this;
var _7013__$1 = this;return self__.meta7012;
});})(map__7010,map__7010__$1,root,userid))
;
power_app.core.t7011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__7010,map__7010__$1,root,userid){
return (function (_7013,meta7012__$1){var self__ = this;
var _7013__$1 = this;return (new power_app.core.t7011(self__.userid,self__.root,self__.map__7010,self__.owner,self__.p__7009,meta7012__$1));
});})(map__7010,map__7010__$1,root,userid))
;
power_app.core.__GT_t7011 = ((function (map__7010,map__7010__$1,root,userid){
return (function __GT_t7011(userid__$1,root__$1,map__7010__$2,owner__$1,p__7009__$1,meta7012){return (new power_app.core.t7011(userid__$1,root__$1,map__7010__$2,owner__$1,p__7009__$1,meta7012));
});})(map__7010,map__7010__$1,root,userid))
;
}
return (new power_app.core.t7011(userid,root,map__7010__$1,owner,p__7009,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map