// Compiled by ClojureScript 0.0-2371
goog.provide('power_app.core');
goog.require('cljs.core');
goog.require('ajax.core');
goog.require('cognitect.transit');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof power_app.core.app_state !== 'undefined')
{} else
{power_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),false,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Zet alle lampen in de woonkamer aan",new cljs.core.Keyword(null,"description","description",-1428560544),"Lorem ipsum dolor sit amet,\n                      consectetur adipiscing elit. Nullam mi leo, varius\n                      cursus ipsum eu, vehicula tincidunt massa. Nulla\n                      et erat vel tellus porttitor malesuada quis quis\n                      magna. Curabitur et pellentesque urna. Aliquam\n                      tristique dolor erat, quis feugiat mauris rhoncus\n                      non. Quisque tincidunt euismod enim, id luctus\n                      arcu. Aliquam erat volutpat. Nulla egestas purus\n                      ligula, id luctus velit mollis sollicitudin. Sed\n                      suscipit et nisl quis ullamcorper. Proin convallis\n                      auctor iaculis. Donec nec ligula rutrum, vehicula\n                      erat vel, fermentum lorem. "], null),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null));
}
if(typeof power_app.core.server_address !== 'undefined')
{} else
{power_app.core.server_address = "http://localhost:8000";
}
power_app.core.login = (function login(username){return ajax.core.GET.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/user/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,clojure.string.trim.call(null,username)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (result){var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));var v = cognitect.transit.read.call(null,r,result);return cljs.core.swap_BANG_.call(null,power_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"user","user",1532431356)),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"points","points",-1486596883)));
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (error){return console.log("ERROR");
})], null));
});
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__14531_SHARP_){return cljs.core.assoc.call(null,p1__14531_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t14535 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t14535 = (function (opts,owner,root,login_component,meta14536){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta14536 = meta14536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t14535.cljs$lang$type = true;
power_app.core.t14535.cljs$lang$ctorStr = "power-app.core/t14535";
power_app.core.t14535.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t14535");
});
power_app.core.t14535.prototype.om$core$IRenderState$ = true;
power_app.core.t14535.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.legend(null,"Login"),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return power_app.core.login.call(null,name);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t14535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14537){var self__ = this;
var _14537__$1 = this;return self__.meta14536;
});
power_app.core.t14535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14537,meta14536__$1){var self__ = this;
var _14537__$1 = this;return (new power_app.core.t14535(self__.opts,self__.owner,self__.root,self__.login_component,meta14536__$1));
});
power_app.core.__GT_t14535 = (function __GT_t14535(opts__$1,owner__$1,root__$1,login_component__$1,meta14536){return (new power_app.core.t14535(opts__$1,owner__$1,root__$1,login_component__$1,meta14536));
});
}
return (new power_app.core.t14535(opts,owner,root,login_component,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__14539){var map__14544 = p__14539;var map__14544__$1 = ((cljs.core.seq_QMARK_.call(null,map__14544))?cljs.core.apply.call(null,cljs.core.hash_map,map__14544):map__14544);var next_state = cljs.core.get.call(null,map__14544__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t14545 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t14545 = (function (next_state,map__14544,p__14539,owner,root,score_component,meta14546){
this.next_state = next_state;
this.map__14544 = map__14544;
this.p__14539 = p__14539;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta14546 = meta14546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t14545.cljs$lang$type = true;
power_app.core.t14545.cljs$lang$ctorStr = "power-app.core/t14545";
power_app.core.t14545.cljs$lang$ctorPrWriter = ((function (map__14544,map__14544__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t14545");
});})(map__14544,map__14544__$1,next_state))
;
power_app.core.t14545.prototype.om$core$IRenderState$ = true;
power_app.core.t14545.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14544,map__14544__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__14544,map__14544__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__14544,map__14544__$1,next_state){
return (function (p1__14538_SHARP_){return cljs.core.assoc.call(null,p1__14538_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__14544,map__14544__$1,next_state))
);
return ajax.core.GET.call(null,"https://live.mpare.net/users.json",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),power_app.core.handler], null));
});})(___$2,map__14544,map__14544__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))));
});})(map__14544,map__14544__$1,next_state))
;
power_app.core.t14545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14544,map__14544__$1,next_state){
return (function (_14547){var self__ = this;
var _14547__$1 = this;return self__.meta14546;
});})(map__14544,map__14544__$1,next_state))
;
power_app.core.t14545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14544,map__14544__$1,next_state){
return (function (_14547,meta14546__$1){var self__ = this;
var _14547__$1 = this;return (new power_app.core.t14545(self__.next_state,self__.map__14544,self__.p__14539,self__.owner,self__.root,self__.score_component,meta14546__$1));
});})(map__14544,map__14544__$1,next_state))
;
power_app.core.__GT_t14545 = ((function (map__14544,map__14544__$1,next_state){
return (function __GT_t14545(next_state__$1,map__14544__$2,p__14539__$1,owner__$1,root__$1,score_component__$1,meta14546){return (new power_app.core.t14545(next_state__$1,map__14544__$2,p__14539__$1,owner__$1,root__$1,score_component__$1,meta14546));
});})(map__14544,map__14544__$1,next_state))
;
}
return (new power_app.core.t14545(next_state,map__14544__$1,p__14539,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__14549){var map__14554 = p__14549;var map__14554__$1 = ((cljs.core.seq_QMARK_.call(null,map__14554))?cljs.core.apply.call(null,cljs.core.hash_map,map__14554):map__14554);var next_state = cljs.core.get.call(null,map__14554__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t14555 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t14555 = (function (next_state,map__14554,p__14549,owner,root,current_assignment_component,meta14556){
this.next_state = next_state;
this.map__14554 = map__14554;
this.p__14549 = p__14549;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta14556 = meta14556;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t14555.cljs$lang$type = true;
power_app.core.t14555.cljs$lang$ctorStr = "power-app.core/t14555";
power_app.core.t14555.cljs$lang$ctorPrWriter = ((function (map__14554,map__14554__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t14555");
});})(map__14554,map__14554__$1,next_state))
;
power_app.core.t14555.prototype.om$core$IRenderState$ = true;
power_app.core.t14555.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14554,map__14554__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},"Opdracht 51")),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},"Zet alle lampen in de woonkamer aan.")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__14554,map__14554__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__14554,map__14554__$1,next_state){
return (function (p1__14548_SHARP_){return cljs.core.assoc.call(null,p1__14548_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__14554,map__14554__$1,next_state))
);
});})(___$2,map__14554,map__14554__$1,next_state))
, "className": "btn btn-primary"},"Klaar (15:12)")))));
});})(map__14554,map__14554__$1,next_state))
;
power_app.core.t14555.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14554,map__14554__$1,next_state){
return (function (_14557){var self__ = this;
var _14557__$1 = this;return self__.meta14556;
});})(map__14554,map__14554__$1,next_state))
;
power_app.core.t14555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14554,map__14554__$1,next_state){
return (function (_14557,meta14556__$1){var self__ = this;
var _14557__$1 = this;return (new power_app.core.t14555(self__.next_state,self__.map__14554,self__.p__14549,self__.owner,self__.root,self__.current_assignment_component,meta14556__$1));
});})(map__14554,map__14554__$1,next_state))
;
power_app.core.__GT_t14555 = ((function (map__14554,map__14554__$1,next_state){
return (function __GT_t14555(next_state__$1,map__14554__$2,p__14549__$1,owner__$1,root__$1,current_assignment_component__$1,meta14556){return (new power_app.core.t14555(next_state__$1,map__14554__$2,p__14549__$1,owner__$1,root__$1,current_assignment_component__$1,meta14556));
});})(map__14554,map__14554__$1,next_state))
;
}
return (new power_app.core.t14555(next_state,map__14554__$1,p__14549,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__14560){var map__14565 = p__14560;var map__14565__$1 = ((cljs.core.seq_QMARK_.call(null,map__14565))?cljs.core.apply.call(null,cljs.core.hash_map,map__14565):map__14565);var next_state = cljs.core.get.call(null,map__14565__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t14566 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t14566 = (function (next_state,map__14565,p__14560,owner,root,new_assignment_component,meta14567){
this.next_state = next_state;
this.map__14565 = map__14565;
this.p__14560 = p__14560;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta14567 = meta14567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t14566.cljs$lang$type = true;
power_app.core.t14566.cljs$lang$ctorStr = "power-app.core/t14566";
power_app.core.t14566.cljs$lang$ctorPrWriter = ((function (map__14565,map__14565__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t14566");
});})(map__14565,map__14565__$1,next_state))
;
power_app.core.t14566.prototype.om$core$IRenderState$ = true;
power_app.core.t14566.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14565,map__14565__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},"Opdracht 51 selectie")),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},"Ben je thuis?")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__14565,map__14565__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__14565,map__14565__$1,next_state){
return (function (p1__14558_SHARP_){return cljs.core.assoc.call(null,p1__14558_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__14565,map__14565__$1,next_state))
);
});})(___$2,map__14565,map__14565__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (___$2,map__14565,map__14565__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__14565,map__14565__$1,next_state){
return (function (p1__14559_SHARP_){return cljs.core.assoc.call(null,p1__14559_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__14565,map__14565__$1,next_state))
);
});})(___$2,map__14565,map__14565__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__14565,map__14565__$1,next_state))
;
power_app.core.t14566.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14565,map__14565__$1,next_state){
return (function (_14568){var self__ = this;
var _14568__$1 = this;return self__.meta14567;
});})(map__14565,map__14565__$1,next_state))
;
power_app.core.t14566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14565,map__14565__$1,next_state){
return (function (_14568,meta14567__$1){var self__ = this;
var _14568__$1 = this;return (new power_app.core.t14566(self__.next_state,self__.map__14565,self__.p__14560,self__.owner,self__.root,self__.new_assignment_component,meta14567__$1));
});})(map__14565,map__14565__$1,next_state))
;
power_app.core.__GT_t14566 = ((function (map__14565,map__14565__$1,next_state){
return (function __GT_t14566(next_state__$1,map__14565__$2,p__14560__$1,owner__$1,root__$1,new_assignment_component__$1,meta14567){return (new power_app.core.t14566(next_state__$1,map__14565__$2,p__14560__$1,owner__$1,root__$1,new_assignment_component__$1,meta14567));
});})(map__14565,map__14565__$1,next_state))
;
}
return (new power_app.core.t14566(next_state,map__14565__$1,p__14560,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__14570){var map__14575 = p__14570;var map__14575__$1 = ((cljs.core.seq_QMARK_.call(null,map__14575))?cljs.core.apply.call(null,cljs.core.hash_map,map__14575):map__14575);var next_state = cljs.core.get.call(null,map__14575__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t14576 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t14576 = (function (next_state,map__14575,p__14570,owner,root,explain_assignment_component,meta14577){
this.next_state = next_state;
this.map__14575 = map__14575;
this.p__14570 = p__14570;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta14577 = meta14577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t14576.cljs$lang$type = true;
power_app.core.t14576.cljs$lang$ctorStr = "power-app.core/t14576";
power_app.core.t14576.cljs$lang$ctorPrWriter = ((function (map__14575,map__14575__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t14576");
});})(map__14575,map__14575__$1,next_state))
;
power_app.core.t14576.prototype.om$core$IRenderState$ = true;
power_app.core.t14576.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__14575,map__14575__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},"Uitleg opdracht 51")),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.h1({"style": {"font-size": "175%"}},"Zet alle lampen in de woonkamer aan."),React.DOM.p(null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi leo, varius cursus ipsum eu, vehicula tincidunt massa. Nulla et erat vel tellus porttitor malesuada quis quis magna. Curabitur et pellentesque urna. Aliquam tristique dolor erat, quis feugiat mauris rhoncus non. Quisque tincidunt euismod enim, id luctus arcu. Aliquam erat volutpat. Nulla egestas purus ligula, id luctus velit mollis sollicitudin. Sed suscipit et nisl quis ullamcorper. Proin convallis auctor iaculis. Donec nec ligula rutrum, vehicula erat vel, fermentum lorem. "))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__14575,map__14575__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__14575,map__14575__$1,next_state){
return (function (p1__14569_SHARP_){return cljs.core.assoc.call(null,p1__14569_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__14575,map__14575__$1,next_state))
);
});})(___$2,map__14575,map__14575__$1,next_state))
, "className": "btn btn-primary"},"Nieuwe opdracht")))));
});})(map__14575,map__14575__$1,next_state))
;
power_app.core.t14576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14575,map__14575__$1,next_state){
return (function (_14578){var self__ = this;
var _14578__$1 = this;return self__.meta14577;
});})(map__14575,map__14575__$1,next_state))
;
power_app.core.t14576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14575,map__14575__$1,next_state){
return (function (_14578,meta14577__$1){var self__ = this;
var _14578__$1 = this;return (new power_app.core.t14576(self__.next_state,self__.map__14575,self__.p__14570,self__.owner,self__.root,self__.explain_assignment_component,meta14577__$1));
});})(map__14575,map__14575__$1,next_state))
;
power_app.core.__GT_t14576 = ((function (map__14575,map__14575__$1,next_state){
return (function __GT_t14576(next_state__$1,map__14575__$2,p__14570__$1,owner__$1,root__$1,explain_assignment_component__$1,meta14577){return (new power_app.core.t14576(next_state__$1,map__14575__$2,p__14570__$1,owner__$1,root__$1,explain_assignment_component__$1,meta14577));
});})(map__14575,map__14575__$1,next_state))
;
}
return (new power_app.core.t14576(next_state,map__14575__$1,p__14570,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__14579,owner){var map__14580 = p__14579;var map__14580__$1 = ((cljs.core.seq_QMARK_.call(null,map__14580))?cljs.core.apply.call(null,cljs.core.hash_map,map__14580):map__14580);var root = map__14580__$1;var state = cljs.core.get.call(null,map__14580__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var user = cljs.core.get.call(null,map__14580__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(typeof power_app.core.t14581 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t14581 = (function (user,state,root,map__14580,owner,p__14579,meta14582){
this.user = user;
this.state = state;
this.root = root;
this.map__14580 = map__14580;
this.owner = owner;
this.p__14579 = p__14579;
this.meta14582 = meta14582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t14581.cljs$lang$type = true;
power_app.core.t14581.cljs$lang$ctorStr = "power-app.core/t14581";
power_app.core.t14581.cljs$lang$ctorPrWriter = ((function (map__14580,map__14580__$1,root,state,user){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t14581");
});})(map__14580,map__14580__$1,root,state,user))
;
power_app.core.t14581.prototype.om$core$IRender$ = true;
power_app.core.t14581.prototype.om$core$IRender$render$arity$1 = ((function (map__14580,map__14580__$1,root,state,user){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Where is my power!"),((cljs.core.not.call(null,self__.user))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.hr(null),cljs.core.pr_str.call(null,self__.root))));
});})(map__14580,map__14580__$1,root,state,user))
;
power_app.core.t14581.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__14580,map__14580__$1,root,state,user){
return (function (_14583){var self__ = this;
var _14583__$1 = this;return self__.meta14582;
});})(map__14580,map__14580__$1,root,state,user))
;
power_app.core.t14581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__14580,map__14580__$1,root,state,user){
return (function (_14583,meta14582__$1){var self__ = this;
var _14583__$1 = this;return (new power_app.core.t14581(self__.user,self__.state,self__.root,self__.map__14580,self__.owner,self__.p__14579,meta14582__$1));
});})(map__14580,map__14580__$1,root,state,user))
;
power_app.core.__GT_t14581 = ((function (map__14580,map__14580__$1,root,state,user){
return (function __GT_t14581(user__$1,state__$1,root__$1,map__14580__$2,owner__$1,p__14579__$1,meta14582){return (new power_app.core.t14581(user__$1,state__$1,root__$1,map__14580__$2,owner__$1,p__14579__$1,meta14582));
});})(map__14580,map__14580__$1,root,state,user))
;
}
return (new power_app.core.t14581(user,state,root,map__14580__$1,owner,p__14579,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map