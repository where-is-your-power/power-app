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
power_app.core.assignment_type_enum = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"target","target",253001721),"Doel",new cljs.core.Keyword(null,"challenge","challenge",1302148691),"Opdracht"], null);
power_app.core.assignment_state_enum = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"propose","propose",-1884570868),"Voorstelen",new cljs.core.Keyword(null,"started","started",585705024),"Bezig",new cljs.core.Keyword(null,"failed","failed",-1397425762),"Mislukt",new cljs.core.Keyword(null,"completed","completed",-486056503),"Gelukt"], null);
if(typeof power_app.core.app_state !== 'undefined')
{} else
{power_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"userid","userid",1974246085),null,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),false,new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"challenge","challenge",1302148691),new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"propose","propose",-1884570868),new cljs.core.Keyword(null,"title","title",636505583),"Test",new cljs.core.Keyword(null,"description","description",-1428560544),"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi leo, varius cursus ipsum eu, vehicula tincidunt massa. Nulla et erat vel tellus porttitor malesuada quis quis magna. Curabitur et pellentesque urna. Aliquam tristique dolor erat, quis feugiat mauris rhoncus non. Quisque tincidunt euismod enim, id luctus arcu. Aliquam erat volutpat. Nulla egestas purus ligula, id luctus velit mollis sollicitudin. Sed suscipit et nisl quis ullamcorper. Proin convallis auctor iaculis. Donec nec ligula rutrum, vehicula erat vel, fermentum lorem. ",new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),(78)], null)], null),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null));
}
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__8072_SHARP_){return cljs.core.assoc.call(null,p1__8072_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.create_settings_button = (function create_settings_button(root,enum$,path){return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group btn-group-justified"},cljs.core.map.call(null,(function (p__8076){var vec__8077 = p__8076;var k = cljs.core.nth.call(null,vec__8077,(0),null);var v = cljs.core.nth.call(null,vec__8077,(1),null);return React.DOM.a({"onClick": ((function (vec__8077,k,v){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,root,((function (vec__8077,k,v){
return (function (p1__8073_SHARP_){return cljs.core.assoc_in.call(null,p1__8073_SHARP_,path,k);
});})(vec__8077,k,v))
);
});})(vec__8077,k,v))
, "className": ("btn btn-default"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,root,path),k))?" active":null)))},v);
}),enum$))));
});
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t8082 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t8082 = (function (opts,owner,root,login_component,meta8083){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta8083 = meta8083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t8082.cljs$lang$type = true;
power_app.core.t8082.cljs$lang$ctorStr = "power-app.core/t8082";
power_app.core.t8082.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t8082");
});
power_app.core.t8082.prototype.om$core$IRenderState$ = true;
power_app.core.t8082.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.legend(null,"Login"),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (name,___$2){
return (function (p1__8078_SHARP_){return cljs.core.assoc.call(null,p1__8078_SHARP_,new cljs.core.Keyword(null,"userid","userid",1974246085),"test",new cljs.core.Keyword(null,"name","name",1843675177),name);
});})(name,___$2))
);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t8082.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8084){var self__ = this;
var _8084__$1 = this;return self__.meta8083;
});
power_app.core.t8082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8084,meta8083__$1){var self__ = this;
var _8084__$1 = this;return (new power_app.core.t8082(self__.opts,self__.owner,self__.root,self__.login_component,meta8083__$1));
});
power_app.core.__GT_t8082 = (function __GT_t8082(opts__$1,owner__$1,root__$1,login_component__$1,meta8083){return (new power_app.core.t8082(opts__$1,owner__$1,root__$1,login_component__$1,meta8083));
});
}
return (new power_app.core.t8082(opts,owner,root,login_component,null));
});
power_app.core.assignment_component = (function assignment_component(p__8088,owner,opts){var map__8094 = p__8088;var map__8094__$1 = ((cljs.core.seq_QMARK_.call(null,map__8094))?cljs.core.apply.call(null,cljs.core.hash_map,map__8094):map__8094);var root = map__8094__$1;var assignment = cljs.core.get.call(null,map__8094__$1,new cljs.core.Keyword(null,"assignment","assignment",1330426519));var map__8095 = cljs.core.get.call(null,map__8094__$1,new cljs.core.Keyword(null,"assignment","assignment",1330426519));var map__8095__$1 = ((cljs.core.seq_QMARK_.call(null,map__8095))?cljs.core.apply.call(null,cljs.core.hash_map,map__8095):map__8095);var data = cljs.core.get.call(null,map__8095__$1,new cljs.core.Keyword(null,"data","data",-232669377));var description = cljs.core.get.call(null,map__8095__$1,new cljs.core.Keyword(null,"description","description",-1428560544));var title = cljs.core.get.call(null,map__8095__$1,new cljs.core.Keyword(null,"title","title",636505583));var type = cljs.core.get.call(null,map__8095__$1,new cljs.core.Keyword(null,"type","type",1174270348));var state = cljs.core.get.call(null,map__8095__$1,new cljs.core.Keyword(null,"state","state",-1988618099));if(typeof power_app.core.t8096 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t8096 = (function (p__8088,map__8095,owner,data,map__8094,description,type,state,title,assignment_component,root,opts,assignment,meta8097){
this.p__8088 = p__8088;
this.map__8095 = map__8095;
this.owner = owner;
this.data = data;
this.map__8094 = map__8094;
this.description = description;
this.type = type;
this.state = state;
this.title = title;
this.assignment_component = assignment_component;
this.root = root;
this.opts = opts;
this.assignment = assignment;
this.meta8097 = meta8097;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t8096.cljs$lang$type = true;
power_app.core.t8096.cljs$lang$ctorStr = "power-app.core/t8096";
power_app.core.t8096.cljs$lang$ctorPrWriter = ((function (map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t8096");
});})(map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
;
power_app.core.t8096.prototype.om$core$IRenderState$ = true;
power_app.core.t8096.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var proposing_QMARK_ = cljs.core._EQ_.call(null,self__.state,new cljs.core.Keyword(null,"propose","propose",-1884570868));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.h2(null,self__.title)], null),((proposing_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,self__.description)], null):null),((!(proposing_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.data)," KwH")], null):null),(((proposing_QMARK_) && (cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"challenge","challenge",1302148691))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_app.core.create_settings_button.call(null,self__.root,power_app.core.period_enum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"period","period",-352129191)], null)),power_app.core.create_settings_button.call(null,self__.root,power_app.core.difficulty_enum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"difficulty","difficulty",755680807)], null))], null):null),((proposing_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.assignment,((function (proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function (p1__8085_SHARP_){return cljs.core.assoc.call(null,p1__8085_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"started","started",585705024));
});})(proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
);
});})(proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
, "className": "btn btn-primary"},"Accepteren!"),React.DOM.a({"onClick": ((function (proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.assignment,((function (proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function (p1__8086_SHARP_){return cljs.core.assoc.call(null,p1__8086_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__8086_SHARP_),new cljs.core.Keyword(null,"target","target",253001721)))?new cljs.core.Keyword(null,"challenge","challenge",1302148691):new cljs.core.Keyword(null,"target","target",253001721)));
});})(proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
);
});})(proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
, "className": "btn btn-default"},"Doe toch maar iets anders"))))], null):null),((!(proposing_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.assignment,((function (proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function (p1__8087_SHARP_){return cljs.core.assoc.call(null,p1__8087_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"propose","propose",-1884570868));
});})(proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
);
});})(proposing_QMARK_,___$2,map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
, "className": "btn btn-primary"},"Annuleren"))))], null):null)));
});})(map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
;
power_app.core.t8096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function (_8098){var self__ = this;
var _8098__$1 = this;return self__.meta8097;
});})(map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
;
power_app.core.t8096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function (_8098,meta8097__$1){var self__ = this;
var _8098__$1 = this;return (new power_app.core.t8096(self__.p__8088,self__.map__8095,self__.owner,self__.data,self__.map__8094,self__.description,self__.type,self__.state,self__.title,self__.assignment_component,self__.root,self__.opts,self__.assignment,meta8097__$1));
});})(map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
;
power_app.core.__GT_t8096 = ((function (map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state){
return (function __GT_t8096(p__8088__$1,map__8095__$2,owner__$1,data__$1,map__8094__$2,description__$1,type__$1,state__$1,title__$1,assignment_component__$1,root__$1,opts__$1,assignment__$1,meta8097){return (new power_app.core.t8096(p__8088__$1,map__8095__$2,owner__$1,data__$1,map__8094__$2,description__$1,type__$1,state__$1,title__$1,assignment_component__$1,root__$1,opts__$1,assignment__$1,meta8097));
});})(map__8094,map__8094__$1,root,assignment,map__8095,map__8095__$1,data,description,title,type,state))
;
}
return (new power_app.core.t8096(p__8088,map__8095__$1,owner,data,map__8094__$1,description,type,state,title,assignment_component,root,opts,assignment,null));
});
om.core.root.call(null,(function (p__8099,owner){var map__8100 = p__8099;var map__8100__$1 = ((cljs.core.seq_QMARK_.call(null,map__8100))?cljs.core.apply.call(null,cljs.core.hash_map,map__8100):map__8100);var root = map__8100__$1;var userid = cljs.core.get.call(null,map__8100__$1,new cljs.core.Keyword(null,"userid","userid",1974246085));if(typeof power_app.core.t8101 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t8101 = (function (userid,root,map__8100,owner,p__8099,meta8102){
this.userid = userid;
this.root = root;
this.map__8100 = map__8100;
this.owner = owner;
this.p__8099 = p__8099;
this.meta8102 = meta8102;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t8101.cljs$lang$type = true;
power_app.core.t8101.cljs$lang$ctorStr = "power-app.core/t8101";
power_app.core.t8101.cljs$lang$ctorPrWriter = ((function (map__8100,map__8100__$1,root,userid){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t8101");
});})(map__8100,map__8100__$1,root,userid))
;
power_app.core.t8101.prototype.om$core$IRender$ = true;
power_app.core.t8101.prototype.om$core$IRender$render$arity$1 = ((function (map__8100,map__8100__$1,root,userid){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h1(null,React.DOM.i({"className": "fa fa-bolt"})," ","Where is my power!"),((cljs.core.not.call(null,self__.userid))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,power_app.core.assignment_component,self__.root)),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.hr(null),cljs.core.pr_str.call(null,self__.root))));
});})(map__8100,map__8100__$1,root,userid))
;
power_app.core.t8101.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__8100,map__8100__$1,root,userid){
return (function (_8103){var self__ = this;
var _8103__$1 = this;return self__.meta8102;
});})(map__8100,map__8100__$1,root,userid))
;
power_app.core.t8101.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__8100,map__8100__$1,root,userid){
return (function (_8103,meta8102__$1){var self__ = this;
var _8103__$1 = this;return (new power_app.core.t8101(self__.userid,self__.root,self__.map__8100,self__.owner,self__.p__8099,meta8102__$1));
});})(map__8100,map__8100__$1,root,userid))
;
power_app.core.__GT_t8101 = ((function (map__8100,map__8100__$1,root,userid){
return (function __GT_t8101(userid__$1,root__$1,map__8100__$2,owner__$1,p__8099__$1,meta8102){return (new power_app.core.t8101(userid__$1,root__$1,map__8100__$2,owner__$1,p__8099__$1,meta8102));
});})(map__8100,map__8100__$1,root,userid))
;
}
return (new power_app.core.t8101(userid,root,map__8100__$1,owner,p__8099,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map