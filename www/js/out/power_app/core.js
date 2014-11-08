// Compiled by ClojureScript 0.0-2371
goog.provide('power_app.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('cognitect.transit');
goog.require('cognitect.transit');
goog.require('ajax.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof power_app.core.app_state !== 'undefined')
{} else
{power_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),false,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"questions","questions",1226225380),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"assignment","assignment",1330426519),cljs.core.PersistentArrayMap.EMPTY], null));
}
if(typeof power_app.core.server_address !== 'undefined')
{} else
{power_app.core.server_address = "http://131.211.252.61:8080";
}
power_app.core.error_handler = (function error_handler(p__21323){var map__21325 = p__21323;var map__21325__$1 = ((cljs.core.seq_QMARK_.call(null,map__21325))?cljs.core.apply.call(null,cljs.core.hash_map,map__21325):map__21325);var status_text = cljs.core.get.call(null,map__21325__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__21325__$1,new cljs.core.Keyword(null,"status","status",-1997798413));return console.log(("something bad happened: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)));
});
power_app.core.login = (function login(username){var trimmed = clojure.string.lower_case.call(null,clojure.string.trim.call(null,username));return ajax.core.GET.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/user/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trimmed)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (trimmed){
return (function (result){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),trimmed,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,result,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.get.call(null,result,new cljs.core.Keyword(null,"points","points",-1486596883)));
});})(trimmed))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),power_app.core.error_handler], null));
});
power_app.core.get_questions = (function get_questions(username){console.log("FOFOFOFOF");
return ajax.core.GET.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/new/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(username)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (result){console.log(cljs.core.prn_str.call(null,result));
cljs.core.swap_BANG_.call(null,power_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"assignment","assignment",1330426519),result);
return cljs.core.swap_BANG_.call(null,power_app.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"begin","begin",-319034319)], null),(new Date()));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),power_app.core.error_handler], null));
});
power_app.core.format_number = (function format_number(s){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1((((cljs.core.count.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s))) <= (1)))?"0":null))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(s));
});
power_app.core.calculate_duration = (function calculate_duration(ms){if(((0) > ms))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0)], null);
} else
{var minutes = Math.floor.call(null,(ms / ((1000) * (60))));var seconds = Math.floor.call(null,((ms - ((minutes * (1000)) * (60))) / (1000)));var milli_seconds = ((ms - ((minutes * (1000)) * (60))) - (seconds * (1000)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minutes,seconds,milli_seconds], null);
}
});
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__21326_SHARP_){return cljs.core.assoc.call(null,p1__21326_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t21330 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21330 = (function (opts,owner,root,login_component,meta21331){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta21331 = meta21331;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21330.cljs$lang$type = true;
power_app.core.t21330.cljs$lang$ctorStr = "power-app.core/t21330";
power_app.core.t21330.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21330");
});
power_app.core.t21330.prototype.om$core$IRenderState$ = true;
power_app.core.t21330.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"value": "Marieke", "placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return power_app.core.login.call(null,name);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t21330.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21332){var self__ = this;
var _21332__$1 = this;return self__.meta21331;
});
power_app.core.t21330.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21332,meta21331__$1){var self__ = this;
var _21332__$1 = this;return (new power_app.core.t21330(self__.opts,self__.owner,self__.root,self__.login_component,meta21331__$1));
});
power_app.core.__GT_t21330 = (function __GT_t21330(opts__$1,owner__$1,root__$1,login_component__$1,meta21331){return (new power_app.core.t21330(opts__$1,owner__$1,root__$1,login_component__$1,meta21331));
});
}
return (new power_app.core.t21330(opts,owner,root,login_component,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__21334){var map__21339 = p__21334;var map__21339__$1 = ((cljs.core.seq_QMARK_.call(null,map__21339))?cljs.core.apply.call(null,cljs.core.hash_map,map__21339):map__21339);var next_state = cljs.core.get.call(null,map__21339__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t21340 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21340 = (function (next_state,map__21339,p__21334,owner,root,score_component,meta21341){
this.next_state = next_state;
this.map__21339 = map__21339;
this.p__21334 = p__21334;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta21341 = meta21341;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21340.cljs$lang$type = true;
power_app.core.t21340.cljs$lang$ctorStr = "power-app.core/t21340";
power_app.core.t21340.cljs$lang$ctorPrWriter = ((function (map__21339,map__21339__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21340");
});})(map__21339,map__21339__$1,next_state))
;
power_app.core.t21340.prototype.om$core$IRenderState$ = true;
power_app.core.t21340.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21339,map__21339__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__21339,map__21339__$1,next_state){
return (function (e){e.preventDefault();
console.log("HIERRR");
power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__21339,map__21339__$1,next_state){
return (function (p1__21333_SHARP_){return cljs.core.assoc.call(null,p1__21333_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__21339,map__21339__$1,next_state))
);
});})(___$2,map__21339,map__21339__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))));
});})(map__21339,map__21339__$1,next_state))
;
power_app.core.t21340.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21339,map__21339__$1,next_state){
return (function (_21342){var self__ = this;
var _21342__$1 = this;return self__.meta21341;
});})(map__21339,map__21339__$1,next_state))
;
power_app.core.t21340.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21339,map__21339__$1,next_state){
return (function (_21342,meta21341__$1){var self__ = this;
var _21342__$1 = this;return (new power_app.core.t21340(self__.next_state,self__.map__21339,self__.p__21334,self__.owner,self__.root,self__.score_component,meta21341__$1));
});})(map__21339,map__21339__$1,next_state))
;
power_app.core.__GT_t21340 = ((function (map__21339,map__21339__$1,next_state){
return (function __GT_t21340(next_state__$1,map__21339__$2,p__21334__$1,owner__$1,root__$1,score_component__$1,meta21341){return (new power_app.core.t21340(next_state__$1,map__21339__$2,p__21334__$1,owner__$1,root__$1,score_component__$1,meta21341));
});})(map__21339,map__21339__$1,next_state))
;
}
return (new power_app.core.t21340(next_state,map__21339__$1,p__21334,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__21345){var map__21372 = p__21345;var map__21372__$1 = ((cljs.core.seq_QMARK_.call(null,map__21372))?cljs.core.apply.call(null,cljs.core.hash_map,map__21372):map__21372);var next_state = cljs.core.get.call(null,map__21372__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t21373 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21373 = (function (next_state,map__21372,p__21345,owner,root,current_assignment_component,meta21374){
this.next_state = next_state;
this.map__21372 = map__21372;
this.p__21345 = p__21345;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta21374 = meta21374;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21373.cljs$lang$type = true;
power_app.core.t21373.cljs$lang$ctorStr = "power-app.core/t21373";
power_app.core.t21373.cljs$lang$ctorPrWriter = ((function (map__21372,map__21372__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21373");
});})(map__21372,map__21372__$1,next_state))
;
power_app.core.t21373.prototype.om$core$IRenderState$ = true;
power_app.core.t21373.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21372,map__21372__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"assignment","assignment",1330426519)], null)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.p(null,cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null))))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__21372,map__21372__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__21372,map__21372__$1,next_state){
return (function (p1__21343_SHARP_){return cljs.core.assoc.call(null,p1__21343_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__21372,map__21372__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__21372,map__21372__$1,next_state){
return (function (p1__21344_SHARP_){return cljs.core.assoc_in.call(null,p1__21344_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"end","end",-268185958)], null),(new Date()));
});})(___$2,map__21372,map__21372__$1,next_state))
);
});})(___$2,map__21372,map__21372__$1,next_state))
, "className": "btn btn-primary"},(function (){var vec__21376 = power_app.core.calculate_duration.call(null,(cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null)) - (new Date()).getTime()));var minutes = cljs.core.nth.call(null,vec__21376,(0),null);var seconds = cljs.core.nth.call(null,vec__21376,(1),null);var ___$3 = cljs.core.nth.call(null,vec__21376,(2),null);return ("Klaar ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,minutes))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,seconds))+")");
})())))));
});})(map__21372,map__21372__$1,next_state))
;
power_app.core.t21373.prototype.om$core$IWillMount$ = true;
power_app.core.t21373.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__21372,map__21372__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__21372,map__21372__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__21372,map__21372__$1,next_state){
return (function (state_21386){var state_val_21387 = (state_21386[(1)]);if((state_val_21387 === (4)))
{var inst_21380 = (state_21386[(2)]);var inst_21381 = om.core.refresh_BANG_.call(null,self__.owner);var state_21386__$1 = (function (){var statearr_21388 = state_21386;(statearr_21388[(7)] = inst_21380);
(statearr_21388[(8)] = inst_21381);
return statearr_21388;
})();var statearr_21389_21398 = state_21386__$1;(statearr_21389_21398[(2)] = null);
(statearr_21389_21398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21387 === (3)))
{var inst_21384 = (state_21386[(2)]);var state_21386__$1 = state_21386;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21386__$1,inst_21384);
} else
{if((state_val_21387 === (2)))
{var inst_21378 = cljs.core.async.timeout.call(null,(500));var state_21386__$1 = state_21386;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21386__$1,(4),inst_21378);
} else
{if((state_val_21387 === (1)))
{var state_21386__$1 = state_21386;var statearr_21390_21399 = state_21386__$1;(statearr_21390_21399[(2)] = null);
(statearr_21390_21399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6480__auto__,___$1,map__21372,map__21372__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__21372,map__21372__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_21394 = [null,null,null,null,null,null,null,null,null];(statearr_21394[(0)] = state_machine__6466__auto__);
(statearr_21394[(1)] = (1));
return statearr_21394;
});
var state_machine__6466__auto____1 = (function (state_21386){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_21386);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e21395){if((e21395 instanceof Object))
{var ex__6469__auto__ = e21395;var statearr_21396_21400 = state_21386;(statearr_21396_21400[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21386);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21395;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21401 = state_21386;
state_21386 = G__21401;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_21386){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_21386);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__21372,map__21372__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_21397 = f__6481__auto__.call(null);(statearr_21397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_21397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__21372,map__21372__$1,next_state))
);
return c__6480__auto__;
});})(map__21372,map__21372__$1,next_state))
;
power_app.core.t21373.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21372,map__21372__$1,next_state){
return (function (_21375){var self__ = this;
var _21375__$1 = this;return self__.meta21374;
});})(map__21372,map__21372__$1,next_state))
;
power_app.core.t21373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21372,map__21372__$1,next_state){
return (function (_21375,meta21374__$1){var self__ = this;
var _21375__$1 = this;return (new power_app.core.t21373(self__.next_state,self__.map__21372,self__.p__21345,self__.owner,self__.root,self__.current_assignment_component,meta21374__$1));
});})(map__21372,map__21372__$1,next_state))
;
power_app.core.__GT_t21373 = ((function (map__21372,map__21372__$1,next_state){
return (function __GT_t21373(next_state__$1,map__21372__$2,p__21345__$1,owner__$1,root__$1,current_assignment_component__$1,meta21374){return (new power_app.core.t21373(next_state__$1,map__21372__$2,p__21345__$1,owner__$1,root__$1,current_assignment_component__$1,meta21374));
});})(map__21372,map__21372__$1,next_state))
;
}
return (new power_app.core.t21373(next_state,map__21372__$1,p__21345,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__21408){var map__21413 = p__21408;var map__21413__$1 = ((cljs.core.seq_QMARK_.call(null,map__21413))?cljs.core.apply.call(null,cljs.core.hash_map,map__21413):map__21413);var next_state = cljs.core.get.call(null,map__21413__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t21414 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21414 = (function (next_state,map__21413,p__21408,owner,root,new_assignment_component,meta21415){
this.next_state = next_state;
this.map__21413 = map__21413;
this.p__21408 = p__21408;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta21415 = meta21415;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21414.cljs$lang$type = true;
power_app.core.t21414.cljs$lang$ctorStr = "power-app.core/t21414";
power_app.core.t21414.cljs$lang$ctorPrWriter = ((function (map__21413,map__21413__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21414");
});})(map__21413,map__21413__$1,next_state))
;
power_app.core.t21414.prototype.om$core$IRenderState$ = true;
power_app.core.t21414.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21413,map__21413__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var points = (new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1));var open_questions = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"answer","answer",-742633163)),cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"questions","questions",1226225380)], null)));var question = cljs.core.first.call(null,open_questions);var last_QMARK_ = (cljs.core.count.call(null,open_questions) < (2));return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht selectie"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,true,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state){
return (function (p1__21402_SHARP_){return cljs.core.assoc.call(null,p1__21402_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),true);
});})(points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state){
return (function (p1__21403_SHARP_){return cljs.core.assoc.call(null,p1__21403_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state){
return (function (p1__21404_SHARP_){return cljs.core.assoc_in.call(null,p1__21404_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__21404_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,false,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state){
return (function (p1__21405_SHARP_){return cljs.core.assoc.call(null,p1__21405_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),false);
});})(points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state){
return (function (p1__21406_SHARP_){return cljs.core.assoc.call(null,p1__21406_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state){
return (function (p1__21407_SHARP_){return cljs.core.assoc_in.call(null,p1__21407_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__21407_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__21413,map__21413__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__21413,map__21413__$1,next_state))
;
power_app.core.t21414.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21413,map__21413__$1,next_state){
return (function (_21416){var self__ = this;
var _21416__$1 = this;return self__.meta21415;
});})(map__21413,map__21413__$1,next_state))
;
power_app.core.t21414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21413,map__21413__$1,next_state){
return (function (_21416,meta21415__$1){var self__ = this;
var _21416__$1 = this;return (new power_app.core.t21414(self__.next_state,self__.map__21413,self__.p__21408,self__.owner,self__.root,self__.new_assignment_component,meta21415__$1));
});})(map__21413,map__21413__$1,next_state))
;
power_app.core.__GT_t21414 = ((function (map__21413,map__21413__$1,next_state){
return (function __GT_t21414(next_state__$1,map__21413__$2,p__21408__$1,owner__$1,root__$1,new_assignment_component__$1,meta21415){return (new power_app.core.t21414(next_state__$1,map__21413__$2,p__21408__$1,owner__$1,root__$1,new_assignment_component__$1,meta21415));
});})(map__21413,map__21413__$1,next_state))
;
}
return (new power_app.core.t21414(next_state,map__21413__$1,p__21408,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__21420){var map__21470 = p__21420;var map__21470__$1 = ((cljs.core.seq_QMARK_.call(null,map__21470))?cljs.core.apply.call(null,cljs.core.hash_map,map__21470):map__21470);var next_state = cljs.core.get.call(null,map__21470__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t21471 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21471 = (function (next_state,map__21470,p__21420,owner,root,explain_assignment_component,meta21472){
this.next_state = next_state;
this.map__21470 = map__21470;
this.p__21420 = p__21420;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta21472 = meta21472;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21471.cljs$lang$type = true;
power_app.core.t21471.cljs$lang$ctorStr = "power-app.core/t21471";
power_app.core.t21471.cljs$lang$ctorPrWriter = ((function (map__21470,map__21470__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21471");
});})(map__21470,map__21470__$1,next_state))
;
power_app.core.t21471.prototype.om$core$IRenderState$ = true;
power_app.core.t21471.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21470,map__21470__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Resultaat opdracht"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.h1({"style": {"font-size": "175%"}},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"assignment","assignment",1330426519)], null))),React.DOM.p(null,(function (){var result = cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"result","result",1415092211)], null));if((result == null))
{return React.DOM.i({"style": {"font-size": "300%"}, "className": "fa fa-circle-o-notch fa-spin"});
} else
{if(cljs.core.truth_(result))
{return React.DOM.i({"style": {"font-size": "300%"}, "className": "fa fa-check"});
} else
{return React.DOM.i({"style": {"font-size": "300%"}, "className": "fa fa-remove"});
}
}
})()))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.p(null,new cljs.core.Keyword(null,"smallfact","smallfact",1255699368).cljs$core$IFn$_invoke$arity$1(self__.root)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__21470,map__21470__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__21470,map__21470__$1,next_state){
return (function (p1__21419_SHARP_){return cljs.core.assoc.call(null,p1__21419_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__21470,map__21470__$1,next_state))
);
});})(___$2,map__21470,map__21470__$1,next_state))
, "className": "btn btn-primary"},"OK")))));
});})(map__21470,map__21470__$1,next_state))
;
power_app.core.t21471.prototype.om$core$IWillMount$ = true;
power_app.core.t21471.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__21470,map__21470__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__21470,map__21470__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__21470,map__21470__$1,next_state){
return (function (state_21503){var state_val_21504 = (state_21503[(1)]);if((state_val_21504 === (5)))
{var inst_21498 = (state_21503[(2)]);var inst_21499 = cljs.core.deref.call(null,self__.root);var inst_21500 = cljs.core.get.call(null,inst_21499,new cljs.core.Keyword(null,"user","user",1532431356));var inst_21501 = power_app.core.login.call(null,inst_21500);var state_21503__$1 = (function (){var statearr_21505 = state_21503;(statearr_21505[(7)] = inst_21498);
return statearr_21505;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21503__$1,inst_21501);
} else
{if((state_val_21504 === (4)))
{var inst_21493 = cljs.core.deref.call(null,self__.root);var inst_21494 = cljs.core.get.call(null,inst_21493,new cljs.core.Keyword(null,"user","user",1532431356));var inst_21495 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/fail/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21494));var inst_21496 = ajax.core.GET.call(null,inst_21495);var state_21503__$1 = state_21503;var statearr_21506_21519 = state_21503__$1;(statearr_21506_21519[(2)] = inst_21496);
(statearr_21506_21519[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21504 === (3)))
{var inst_21488 = cljs.core.deref.call(null,self__.root);var inst_21489 = cljs.core.get.call(null,inst_21488,new cljs.core.Keyword(null,"user","user",1532431356));var inst_21490 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/success/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21489));var inst_21491 = ajax.core.GET.call(null,inst_21490);var state_21503__$1 = state_21503;var statearr_21507_21520 = state_21503__$1;(statearr_21507_21520[(2)] = inst_21491);
(statearr_21507_21520[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21504 === (2)))
{var inst_21482 = (state_21503[(2)]);var inst_21483 = Math.random.call(null);var inst_21484 = (inst_21483 > 0.1);var inst_21485 = (function (){var result = inst_21484;return ((function (result,inst_21482,inst_21483,inst_21484,state_val_21504,c__6480__auto__,___$1,map__21470,map__21470__$1,next_state){
return (function (p1__21418_SHARP_){return cljs.core.assoc_in.call(null,p1__21418_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"result","result",1415092211)], null),result);
});
;})(result,inst_21482,inst_21483,inst_21484,state_val_21504,c__6480__auto__,___$1,map__21470,map__21470__$1,next_state))
})();var inst_21486 = om.core.transact_BANG_.call(null,self__.root,inst_21485);var state_21503__$1 = (function (){var statearr_21508 = state_21503;(statearr_21508[(8)] = inst_21486);
(statearr_21508[(9)] = inst_21482);
return statearr_21508;
})();if(cljs.core.truth_(inst_21484))
{var statearr_21509_21521 = state_21503__$1;(statearr_21509_21521[(1)] = (3));
} else
{var statearr_21510_21522 = state_21503__$1;(statearr_21510_21522[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21504 === (1)))
{var inst_21474 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/smallfact");var inst_21475 = [new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_21476 = (function (){return ((function (inst_21474,inst_21475,state_val_21504,c__6480__auto__,___$1,map__21470,map__21470__$1,next_state){
return (function (result){return om.core.transact_BANG_.call(null,self__.root,((function (inst_21474,inst_21475,state_val_21504,c__6480__auto__,___$1,map__21470,map__21470__$1,next_state){
return (function (p1__21417_SHARP_){return cljs.core.assoc.call(null,p1__21417_SHARP_,new cljs.core.Keyword(null,"smallfact","smallfact",1255699368),result);
});})(inst_21474,inst_21475,state_val_21504,c__6480__auto__,___$1,map__21470,map__21470__$1,next_state))
);
});
;})(inst_21474,inst_21475,state_val_21504,c__6480__auto__,___$1,map__21470,map__21470__$1,next_state))
})();var inst_21477 = [inst_21476];var inst_21478 = cljs.core.PersistentHashMap.fromArrays(inst_21475,inst_21477);var inst_21479 = ajax.core.GET.call(null,inst_21474,inst_21478);var inst_21480 = cljs.core.async.timeout.call(null,(2000));var state_21503__$1 = (function (){var statearr_21511 = state_21503;(statearr_21511[(10)] = inst_21479);
return statearr_21511;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21503__$1,(2),inst_21480);
} else
{return null;
}
}
}
}
}
});})(c__6480__auto__,___$1,map__21470,map__21470__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__21470,map__21470__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_21515 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21515[(0)] = state_machine__6466__auto__);
(statearr_21515[(1)] = (1));
return statearr_21515;
});
var state_machine__6466__auto____1 = (function (state_21503){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_21503);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e21516){if((e21516 instanceof Object))
{var ex__6469__auto__ = e21516;var statearr_21517_21523 = state_21503;(statearr_21517_21523[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21503);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21516;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21524 = state_21503;
state_21503 = G__21524;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_21503){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_21503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__21470,map__21470__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_21518 = f__6481__auto__.call(null);(statearr_21518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_21518;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__21470,map__21470__$1,next_state))
);
return c__6480__auto__;
});})(map__21470,map__21470__$1,next_state))
;
power_app.core.t21471.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21470,map__21470__$1,next_state){
return (function (_21473){var self__ = this;
var _21473__$1 = this;return self__.meta21472;
});})(map__21470,map__21470__$1,next_state))
;
power_app.core.t21471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21470,map__21470__$1,next_state){
return (function (_21473,meta21472__$1){var self__ = this;
var _21473__$1 = this;return (new power_app.core.t21471(self__.next_state,self__.map__21470,self__.p__21420,self__.owner,self__.root,self__.explain_assignment_component,meta21472__$1));
});})(map__21470,map__21470__$1,next_state))
;
power_app.core.__GT_t21471 = ((function (map__21470,map__21470__$1,next_state){
return (function __GT_t21471(next_state__$1,map__21470__$2,p__21420__$1,owner__$1,root__$1,explain_assignment_component__$1,meta21472){return (new power_app.core.t21471(next_state__$1,map__21470__$2,p__21420__$1,owner__$1,root__$1,explain_assignment_component__$1,meta21472));
});})(map__21470,map__21470__$1,next_state))
;
}
return (new power_app.core.t21471(next_state,map__21470__$1,p__21420,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__21525,owner){var map__21526 = p__21525;var map__21526__$1 = ((cljs.core.seq_QMARK_.call(null,map__21526))?cljs.core.apply.call(null,cljs.core.hash_map,map__21526):map__21526);var root = map__21526__$1;var state = cljs.core.get.call(null,map__21526__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var user = cljs.core.get.call(null,map__21526__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(typeof power_app.core.t21527 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21527 = (function (user,state,root,map__21526,owner,p__21525,meta21528){
this.user = user;
this.state = state;
this.root = root;
this.map__21526 = map__21526;
this.owner = owner;
this.p__21525 = p__21525;
this.meta21528 = meta21528;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21527.cljs$lang$type = true;
power_app.core.t21527.cljs$lang$ctorStr = "power-app.core/t21527";
power_app.core.t21527.cljs$lang$ctorPrWriter = ((function (map__21526,map__21526__$1,root,state,user){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21527");
});})(map__21526,map__21526__$1,root,state,user))
;
power_app.core.t21527.prototype.om$core$IRender$ = true;
power_app.core.t21527.prototype.om$core$IRender$render$arity$1 = ((function (map__21526,map__21526__$1,root,state,user){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Power-app!"),((cljs.core.not.call(null,self__.user))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))));
});})(map__21526,map__21526__$1,root,state,user))
;
power_app.core.t21527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21526,map__21526__$1,root,state,user){
return (function (_21529){var self__ = this;
var _21529__$1 = this;return self__.meta21528;
});})(map__21526,map__21526__$1,root,state,user))
;
power_app.core.t21527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21526,map__21526__$1,root,state,user){
return (function (_21529,meta21528__$1){var self__ = this;
var _21529__$1 = this;return (new power_app.core.t21527(self__.user,self__.state,self__.root,self__.map__21526,self__.owner,self__.p__21525,meta21528__$1));
});})(map__21526,map__21526__$1,root,state,user))
;
power_app.core.__GT_t21527 = ((function (map__21526,map__21526__$1,root,state,user){
return (function __GT_t21527(user__$1,state__$1,root__$1,map__21526__$2,owner__$1,p__21525__$1,meta21528){return (new power_app.core.t21527(user__$1,state__$1,root__$1,map__21526__$2,owner__$1,p__21525__$1,meta21528));
});})(map__21526,map__21526__$1,root,state,user))
;
}
return (new power_app.core.t21527(user,state,root,map__21526__$1,owner,p__21525,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map