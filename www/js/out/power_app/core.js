// Compiled by ClojureScript 0.0-2371
goog.provide('power_app.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('ajax.core');
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
{power_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"userid","userid",1974246085),null,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),false,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Zet alle lampen in de woonkamer aan",new cljs.core.Keyword(null,"description","description",-1428560544),"Lorem ipsum dolor sit amet,\n                      consectetur adipiscing elit. Nullam mi leo, varius\n                      cursus ipsum eu, vehicula tincidunt massa. Nulla\n                      et erat vel tellus porttitor malesuada quis quis\n                      magna. Curabitur et pellentesque urna. Aliquam\n                      tristique dolor erat, quis feugiat mauris rhoncus\n                      non. Quisque tincidunt euismod enim, id luctus\n                      arcu. Aliquam erat volutpat. Nulla egestas purus\n                      ligula, id luctus velit mollis sollicitudin. Sed\n                      suscipit et nisl quis ullamcorper. Proin convallis\n                      auctor iaculis. Donec nec ligula rutrum, vehicula\n                      erat vel, fermentum lorem. "], null),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null));
}
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__13092_SHARP_){return cljs.core.assoc.call(null,p1__13092_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.create_settings_button = (function create_settings_button(root,enum$,path){return React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},cljs.core.apply.call(null,om.dom.div,{"className": "btn-group btn-group-justified"},cljs.core.map.call(null,(function (p__13096){var vec__13097 = p__13096;var k = cljs.core.nth.call(null,vec__13097,(0),null);var v = cljs.core.nth.call(null,vec__13097,(1),null);return React.DOM.a({"onClick": ((function (vec__13097,k,v){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,root,((function (vec__13097,k,v){
return (function (p1__13093_SHARP_){return cljs.core.assoc_in.call(null,p1__13093_SHARP_,path,k);
});})(vec__13097,k,v))
);
return ajax.core.GET.call(null,"https://live.mpare.net/users.json");
});})(vec__13097,k,v))
, "className": ("btn btn-default"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.call(null,cljs.core.get_in.call(null,root,path),k))?" active":null)))},v);
}),enum$))));
});
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t13102 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t13102 = (function (opts,owner,root,login_component,meta13103){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta13103 = meta13103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t13102.cljs$lang$type = true;
power_app.core.t13102.cljs$lang$ctorStr = "power-app.core/t13102";
power_app.core.t13102.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t13102");
});
power_app.core.t13102.prototype.om$core$IRenderState$ = true;
power_app.core.t13102.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.legend(null,"Login"),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (name,___$2){
return (function (p1__13098_SHARP_){return cljs.core.assoc.call(null,p1__13098_SHARP_,new cljs.core.Keyword(null,"userid","userid",1974246085),"test",new cljs.core.Keyword(null,"name","name",1843675177),name);
});})(name,___$2))
);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t13102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13104){var self__ = this;
var _13104__$1 = this;return self__.meta13103;
});
power_app.core.t13102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13104,meta13103__$1){var self__ = this;
var _13104__$1 = this;return (new power_app.core.t13102(self__.opts,self__.owner,self__.root,self__.login_component,meta13103__$1));
});
power_app.core.__GT_t13102 = (function __GT_t13102(opts__$1,owner__$1,root__$1,login_component__$1,meta13103){return (new power_app.core.t13102(opts__$1,owner__$1,root__$1,login_component__$1,meta13103));
});
}
return (new power_app.core.t13102(opts,owner,root,login_component,null));
});
power_app.core.assignment_component = (function assignment_component(p__13108,owner,opts){var map__13114 = p__13108;var map__13114__$1 = ((cljs.core.seq_QMARK_.call(null,map__13114))?cljs.core.apply.call(null,cljs.core.hash_map,map__13114):map__13114);var root = map__13114__$1;var assignment = cljs.core.get.call(null,map__13114__$1,new cljs.core.Keyword(null,"assignment","assignment",1330426519));var map__13115 = cljs.core.get.call(null,map__13114__$1,new cljs.core.Keyword(null,"assignment","assignment",1330426519));var map__13115__$1 = ((cljs.core.seq_QMARK_.call(null,map__13115))?cljs.core.apply.call(null,cljs.core.hash_map,map__13115):map__13115);var data = cljs.core.get.call(null,map__13115__$1,new cljs.core.Keyword(null,"data","data",-232669377));var description = cljs.core.get.call(null,map__13115__$1,new cljs.core.Keyword(null,"description","description",-1428560544));var title = cljs.core.get.call(null,map__13115__$1,new cljs.core.Keyword(null,"title","title",636505583));var type = cljs.core.get.call(null,map__13115__$1,new cljs.core.Keyword(null,"type","type",1174270348));var state = cljs.core.get.call(null,map__13115__$1,new cljs.core.Keyword(null,"state","state",-1988618099));if(typeof power_app.core.t13116 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t13116 = (function (owner,data,p__13108,map__13115,description,map__13114,type,state,title,assignment_component,root,opts,assignment,meta13117){
this.owner = owner;
this.data = data;
this.p__13108 = p__13108;
this.map__13115 = map__13115;
this.description = description;
this.map__13114 = map__13114;
this.type = type;
this.state = state;
this.title = title;
this.assignment_component = assignment_component;
this.root = root;
this.opts = opts;
this.assignment = assignment;
this.meta13117 = meta13117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t13116.cljs$lang$type = true;
power_app.core.t13116.cljs$lang$ctorStr = "power-app.core/t13116";
power_app.core.t13116.cljs$lang$ctorPrWriter = ((function (map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t13116");
});})(map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
;
power_app.core.t13116.prototype.om$core$IRenderState$ = true;
power_app.core.t13116.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var proposing_QMARK_ = cljs.core._EQ_.call(null,self__.state,new cljs.core.Keyword(null,"propose","propose",-1884570868));return cljs.core.apply.call(null,om.dom.div,null,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.h2(null,self__.title)], null),((proposing_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,self__.description)], null):null),((!(proposing_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.p(null,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(self__.data)," KwH")], null):null),(((proposing_QMARK_) && (cljs.core._EQ_.call(null,self__.type,new cljs.core.Keyword(null,"challenge","challenge",1302148691))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [power_app.core.create_settings_button.call(null,self__.root,power_app.core.period_enum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"period","period",-352129191)], null)),power_app.core.create_settings_button.call(null,self__.root,power_app.core.difficulty_enum,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.Keyword(null,"difficulty","difficulty",755680807)], null))], null):null),((proposing_QMARK_)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.assignment,((function (proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function (p1__13105_SHARP_){return cljs.core.assoc.call(null,p1__13105_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"started","started",585705024));
});})(proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
);
});})(proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
, "className": "btn btn-primary"},"Accepteren!"),React.DOM.a({"onClick": ((function (proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.assignment,((function (proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function (p1__13106_SHARP_){return cljs.core.assoc.call(null,p1__13106_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__13106_SHARP_),new cljs.core.Keyword(null,"target","target",253001721)))?new cljs.core.Keyword(null,"challenge","challenge",1302148691):new cljs.core.Keyword(null,"target","target",253001721)));
});})(proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
);
});})(proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
, "className": "btn btn-default"},"Doe toch maar iets anders"))))], null):null),((!(proposing_QMARK_))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.assignment,((function (proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function (p1__13107_SHARP_){return cljs.core.assoc.call(null,p1__13107_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"propose","propose",-1884570868));
});})(proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
);
});})(proposing_QMARK_,___$2,map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
, "className": "btn btn-primary"},"Annuleren"))))], null):null)));
});})(map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
;
power_app.core.t13116.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function (_13118){var self__ = this;
var _13118__$1 = this;return self__.meta13117;
});})(map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
;
power_app.core.t13116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function (_13118,meta13117__$1){var self__ = this;
var _13118__$1 = this;return (new power_app.core.t13116(self__.owner,self__.data,self__.p__13108,self__.map__13115,self__.description,self__.map__13114,self__.type,self__.state,self__.title,self__.assignment_component,self__.root,self__.opts,self__.assignment,meta13117__$1));
});})(map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
;
power_app.core.__GT_t13116 = ((function (map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state){
return (function __GT_t13116(owner__$1,data__$1,p__13108__$1,map__13115__$2,description__$1,map__13114__$2,type__$1,state__$1,title__$1,assignment_component__$1,root__$1,opts__$1,assignment__$1,meta13117){return (new power_app.core.t13116(owner__$1,data__$1,p__13108__$1,map__13115__$2,description__$1,map__13114__$2,type__$1,state__$1,title__$1,assignment_component__$1,root__$1,opts__$1,assignment__$1,meta13117));
});})(map__13114,map__13114__$1,root,assignment,map__13115,map__13115__$1,data,description,title,type,state))
;
}
return (new power_app.core.t13116(owner,data,p__13108,map__13115__$1,description,map__13114__$1,type,state,title,assignment_component,root,opts,assignment,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__13120){var map__13125 = p__13120;var map__13125__$1 = ((cljs.core.seq_QMARK_.call(null,map__13125))?cljs.core.apply.call(null,cljs.core.hash_map,map__13125):map__13125);var next_state = cljs.core.get.call(null,map__13125__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t13126 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t13126 = (function (next_state,map__13125,p__13120,owner,root,score_component,meta13127){
this.next_state = next_state;
this.map__13125 = map__13125;
this.p__13120 = p__13120;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta13127 = meta13127;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t13126.cljs$lang$type = true;
power_app.core.t13126.cljs$lang$ctorStr = "power-app.core/t13126";
power_app.core.t13126.cljs$lang$ctorPrWriter = ((function (map__13125,map__13125__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t13126");
});})(map__13125,map__13125__$1,next_state))
;
power_app.core.t13126.prototype.om$core$IRenderState$ = true;
power_app.core.t13126.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13125,map__13125__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},(50))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__13125,map__13125__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__13125,map__13125__$1,next_state){
return (function (p1__13119_SHARP_){return cljs.core.assoc.call(null,p1__13119_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__13125,map__13125__$1,next_state))
);
return ajax.core.GET.call(null,"https://live.mpare.net/users.json",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),power_app.core.handler], null));
});})(___$2,map__13125,map__13125__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))));
});})(map__13125,map__13125__$1,next_state))
;
power_app.core.t13126.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13125,map__13125__$1,next_state){
return (function (_13128){var self__ = this;
var _13128__$1 = this;return self__.meta13127;
});})(map__13125,map__13125__$1,next_state))
;
power_app.core.t13126.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13125,map__13125__$1,next_state){
return (function (_13128,meta13127__$1){var self__ = this;
var _13128__$1 = this;return (new power_app.core.t13126(self__.next_state,self__.map__13125,self__.p__13120,self__.owner,self__.root,self__.score_component,meta13127__$1));
});})(map__13125,map__13125__$1,next_state))
;
power_app.core.__GT_t13126 = ((function (map__13125,map__13125__$1,next_state){
return (function __GT_t13126(next_state__$1,map__13125__$2,p__13120__$1,owner__$1,root__$1,score_component__$1,meta13127){return (new power_app.core.t13126(next_state__$1,map__13125__$2,p__13120__$1,owner__$1,root__$1,score_component__$1,meta13127));
});})(map__13125,map__13125__$1,next_state))
;
}
return (new power_app.core.t13126(next_state,map__13125__$1,p__13120,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__13130){var map__13135 = p__13130;var map__13135__$1 = ((cljs.core.seq_QMARK_.call(null,map__13135))?cljs.core.apply.call(null,cljs.core.hash_map,map__13135):map__13135);var next_state = cljs.core.get.call(null,map__13135__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t13136 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t13136 = (function (next_state,map__13135,p__13130,owner,root,current_assignment_component,meta13137){
this.next_state = next_state;
this.map__13135 = map__13135;
this.p__13130 = p__13130;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta13137 = meta13137;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t13136.cljs$lang$type = true;
power_app.core.t13136.cljs$lang$ctorStr = "power-app.core/t13136";
power_app.core.t13136.cljs$lang$ctorPrWriter = ((function (map__13135,map__13135__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t13136");
});})(map__13135,map__13135__$1,next_state))
;
power_app.core.t13136.prototype.om$core$IRenderState$ = true;
power_app.core.t13136.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13135,map__13135__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},"Opdracht 51")),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},"Zet alle lampen in de woonkamer aan.")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__13135,map__13135__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__13135,map__13135__$1,next_state){
return (function (p1__13129_SHARP_){return cljs.core.assoc.call(null,p1__13129_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__13135,map__13135__$1,next_state))
);
});})(___$2,map__13135,map__13135__$1,next_state))
, "className": "btn btn-primary"},"Klaar (15:12)")))));
});})(map__13135,map__13135__$1,next_state))
;
power_app.core.t13136.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13135,map__13135__$1,next_state){
return (function (_13138){var self__ = this;
var _13138__$1 = this;return self__.meta13137;
});})(map__13135,map__13135__$1,next_state))
;
power_app.core.t13136.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13135,map__13135__$1,next_state){
return (function (_13138,meta13137__$1){var self__ = this;
var _13138__$1 = this;return (new power_app.core.t13136(self__.next_state,self__.map__13135,self__.p__13130,self__.owner,self__.root,self__.current_assignment_component,meta13137__$1));
});})(map__13135,map__13135__$1,next_state))
;
power_app.core.__GT_t13136 = ((function (map__13135,map__13135__$1,next_state){
return (function __GT_t13136(next_state__$1,map__13135__$2,p__13130__$1,owner__$1,root__$1,current_assignment_component__$1,meta13137){return (new power_app.core.t13136(next_state__$1,map__13135__$2,p__13130__$1,owner__$1,root__$1,current_assignment_component__$1,meta13137));
});})(map__13135,map__13135__$1,next_state))
;
}
return (new power_app.core.t13136(next_state,map__13135__$1,p__13130,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__13141){var map__13146 = p__13141;var map__13146__$1 = ((cljs.core.seq_QMARK_.call(null,map__13146))?cljs.core.apply.call(null,cljs.core.hash_map,map__13146):map__13146);var next_state = cljs.core.get.call(null,map__13146__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t13147 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t13147 = (function (next_state,map__13146,p__13141,owner,root,new_assignment_component,meta13148){
this.next_state = next_state;
this.map__13146 = map__13146;
this.p__13141 = p__13141;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta13148 = meta13148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t13147.cljs$lang$type = true;
power_app.core.t13147.cljs$lang$ctorStr = "power-app.core/t13147";
power_app.core.t13147.cljs$lang$ctorPrWriter = ((function (map__13146,map__13146__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t13147");
});})(map__13146,map__13146__$1,next_state))
;
power_app.core.t13147.prototype.om$core$IRenderState$ = true;
power_app.core.t13147.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13146,map__13146__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},"Opdracht 51 selectie")),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},"Ben je thuis?")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__13146,map__13146__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__13146,map__13146__$1,next_state){
return (function (p1__13139_SHARP_){return cljs.core.assoc.call(null,p1__13139_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__13146,map__13146__$1,next_state))
);
});})(___$2,map__13146,map__13146__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (___$2,map__13146,map__13146__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__13146,map__13146__$1,next_state){
return (function (p1__13140_SHARP_){return cljs.core.assoc.call(null,p1__13140_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__13146,map__13146__$1,next_state))
);
});})(___$2,map__13146,map__13146__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__13146,map__13146__$1,next_state))
;
power_app.core.t13147.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13146,map__13146__$1,next_state){
return (function (_13149){var self__ = this;
var _13149__$1 = this;return self__.meta13148;
});})(map__13146,map__13146__$1,next_state))
;
power_app.core.t13147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13146,map__13146__$1,next_state){
return (function (_13149,meta13148__$1){var self__ = this;
var _13149__$1 = this;return (new power_app.core.t13147(self__.next_state,self__.map__13146,self__.p__13141,self__.owner,self__.root,self__.new_assignment_component,meta13148__$1));
});})(map__13146,map__13146__$1,next_state))
;
power_app.core.__GT_t13147 = ((function (map__13146,map__13146__$1,next_state){
return (function __GT_t13147(next_state__$1,map__13146__$2,p__13141__$1,owner__$1,root__$1,new_assignment_component__$1,meta13148){return (new power_app.core.t13147(next_state__$1,map__13146__$2,p__13141__$1,owner__$1,root__$1,new_assignment_component__$1,meta13148));
});})(map__13146,map__13146__$1,next_state))
;
}
return (new power_app.core.t13147(next_state,map__13146__$1,p__13141,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__13151){var map__13156 = p__13151;var map__13156__$1 = ((cljs.core.seq_QMARK_.call(null,map__13156))?cljs.core.apply.call(null,cljs.core.hash_map,map__13156):map__13156);var next_state = cljs.core.get.call(null,map__13156__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t13157 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t13157 = (function (next_state,map__13156,p__13151,owner,root,explain_assignment_component,meta13158){
this.next_state = next_state;
this.map__13156 = map__13156;
this.p__13151 = p__13151;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta13158 = meta13158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t13157.cljs$lang$type = true;
power_app.core.t13157.cljs$lang$ctorStr = "power-app.core/t13157";
power_app.core.t13157.cljs$lang$ctorPrWriter = ((function (map__13156,map__13156__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t13157");
});})(map__13156,map__13156__$1,next_state))
;
power_app.core.t13157.prototype.om$core$IRenderState$ = true;
power_app.core.t13157.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__13156,map__13156__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},"Uitleg opdracht 51")),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.h1({"style": {"font-size": "175%"}},"Zet alle lampen in de woonkamer aan."),React.DOM.p(null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi leo, varius cursus ipsum eu, vehicula tincidunt massa. Nulla et erat vel tellus porttitor malesuada quis quis magna. Curabitur et pellentesque urna. Aliquam tristique dolor erat, quis feugiat mauris rhoncus non. Quisque tincidunt euismod enim, id luctus arcu. Aliquam erat volutpat. Nulla egestas purus ligula, id luctus velit mollis sollicitudin. Sed suscipit et nisl quis ullamcorper. Proin convallis auctor iaculis. Donec nec ligula rutrum, vehicula erat vel, fermentum lorem. "))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__13156,map__13156__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__13156,map__13156__$1,next_state){
return (function (p1__13150_SHARP_){return cljs.core.assoc.call(null,p1__13150_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__13156,map__13156__$1,next_state))
);
});})(___$2,map__13156,map__13156__$1,next_state))
, "className": "btn btn-primary"},"Nieuwe opdracht")))));
});})(map__13156,map__13156__$1,next_state))
;
power_app.core.t13157.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13156,map__13156__$1,next_state){
return (function (_13159){var self__ = this;
var _13159__$1 = this;return self__.meta13158;
});})(map__13156,map__13156__$1,next_state))
;
power_app.core.t13157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13156,map__13156__$1,next_state){
return (function (_13159,meta13158__$1){var self__ = this;
var _13159__$1 = this;return (new power_app.core.t13157(self__.next_state,self__.map__13156,self__.p__13151,self__.owner,self__.root,self__.explain_assignment_component,meta13158__$1));
});})(map__13156,map__13156__$1,next_state))
;
power_app.core.__GT_t13157 = ((function (map__13156,map__13156__$1,next_state){
return (function __GT_t13157(next_state__$1,map__13156__$2,p__13151__$1,owner__$1,root__$1,explain_assignment_component__$1,meta13158){return (new power_app.core.t13157(next_state__$1,map__13156__$2,p__13151__$1,owner__$1,root__$1,explain_assignment_component__$1,meta13158));
});})(map__13156,map__13156__$1,next_state))
;
}
return (new power_app.core.t13157(next_state,map__13156__$1,p__13151,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__13160,owner){var map__13161 = p__13160;var map__13161__$1 = ((cljs.core.seq_QMARK_.call(null,map__13161))?cljs.core.apply.call(null,cljs.core.hash_map,map__13161):map__13161);var root = map__13161__$1;var state = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var userid = cljs.core.get.call(null,map__13161__$1,new cljs.core.Keyword(null,"userid","userid",1974246085));if(typeof power_app.core.t13162 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t13162 = (function (userid,state,root,map__13161,owner,p__13160,meta13163){
this.userid = userid;
this.state = state;
this.root = root;
this.map__13161 = map__13161;
this.owner = owner;
this.p__13160 = p__13160;
this.meta13163 = meta13163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t13162.cljs$lang$type = true;
power_app.core.t13162.cljs$lang$ctorStr = "power-app.core/t13162";
power_app.core.t13162.cljs$lang$ctorPrWriter = ((function (map__13161,map__13161__$1,root,state,userid){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t13162");
});})(map__13161,map__13161__$1,root,state,userid))
;
power_app.core.t13162.prototype.om$core$IRender$ = true;
power_app.core.t13162.prototype.om$core$IRender$render$arity$1 = ((function (map__13161,map__13161__$1,root,state,userid){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Where is my power!"),((cljs.core.not.call(null,self__.userid))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.hr(null),cljs.core.pr_str.call(null,self__.root))));
});})(map__13161,map__13161__$1,root,state,userid))
;
power_app.core.t13162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__13161,map__13161__$1,root,state,userid){
return (function (_13164){var self__ = this;
var _13164__$1 = this;return self__.meta13163;
});})(map__13161,map__13161__$1,root,state,userid))
;
power_app.core.t13162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__13161,map__13161__$1,root,state,userid){
return (function (_13164,meta13163__$1){var self__ = this;
var _13164__$1 = this;return (new power_app.core.t13162(self__.userid,self__.state,self__.root,self__.map__13161,self__.owner,self__.p__13160,meta13163__$1));
});})(map__13161,map__13161__$1,root,state,userid))
;
power_app.core.__GT_t13162 = ((function (map__13161,map__13161__$1,root,state,userid){
return (function __GT_t13162(userid__$1,state__$1,root__$1,map__13161__$2,owner__$1,p__13160__$1,meta13163){return (new power_app.core.t13162(userid__$1,state__$1,root__$1,map__13161__$2,owner__$1,p__13160__$1,meta13163));
});})(map__13161,map__13161__$1,root,state,userid))
;
}
return (new power_app.core.t13162(userid,state,root,map__13161__$1,owner,p__13160,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map