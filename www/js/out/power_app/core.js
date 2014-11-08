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
power_app.core.error_handler = (function error_handler(p__16218){var map__16220 = p__16218;var map__16220__$1 = ((cljs.core.seq_QMARK_.call(null,map__16220))?cljs.core.apply.call(null,cljs.core.hash_map,map__16220):map__16220);var status_text = cljs.core.get.call(null,map__16220__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__16220__$1,new cljs.core.Keyword(null,"status","status",-1997798413));return console.log(("something bad happened: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)));
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
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__16221_SHARP_){return cljs.core.assoc.call(null,p1__16221_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t16225 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t16225 = (function (opts,owner,root,login_component,meta16226){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta16226 = meta16226;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t16225.cljs$lang$type = true;
power_app.core.t16225.cljs$lang$ctorStr = "power-app.core/t16225";
power_app.core.t16225.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t16225");
});
power_app.core.t16225.prototype.om$core$IRenderState$ = true;
power_app.core.t16225.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.legend(null,"Login"),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"value": "Marieke", "placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return power_app.core.login.call(null,name);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t16225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16227){var self__ = this;
var _16227__$1 = this;return self__.meta16226;
});
power_app.core.t16225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16227,meta16226__$1){var self__ = this;
var _16227__$1 = this;return (new power_app.core.t16225(self__.opts,self__.owner,self__.root,self__.login_component,meta16226__$1));
});
power_app.core.__GT_t16225 = (function __GT_t16225(opts__$1,owner__$1,root__$1,login_component__$1,meta16226){return (new power_app.core.t16225(opts__$1,owner__$1,root__$1,login_component__$1,meta16226));
});
}
return (new power_app.core.t16225(opts,owner,root,login_component,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__16229){var map__16234 = p__16229;var map__16234__$1 = ((cljs.core.seq_QMARK_.call(null,map__16234))?cljs.core.apply.call(null,cljs.core.hash_map,map__16234):map__16234);var next_state = cljs.core.get.call(null,map__16234__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t16235 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t16235 = (function (next_state,map__16234,p__16229,owner,root,score_component,meta16236){
this.next_state = next_state;
this.map__16234 = map__16234;
this.p__16229 = p__16229;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta16236 = meta16236;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t16235.cljs$lang$type = true;
power_app.core.t16235.cljs$lang$ctorStr = "power-app.core/t16235";
power_app.core.t16235.cljs$lang$ctorPrWriter = ((function (map__16234,map__16234__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t16235");
});})(map__16234,map__16234__$1,next_state))
;
power_app.core.t16235.prototype.om$core$IRenderState$ = true;
power_app.core.t16235.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16234,map__16234__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__16234,map__16234__$1,next_state){
return (function (e){e.preventDefault();
console.log("HIERRR");
power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__16234,map__16234__$1,next_state){
return (function (p1__16228_SHARP_){return cljs.core.assoc.call(null,p1__16228_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__16234,map__16234__$1,next_state))
);
});})(___$2,map__16234,map__16234__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))));
});})(map__16234,map__16234__$1,next_state))
;
power_app.core.t16235.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16234,map__16234__$1,next_state){
return (function (_16237){var self__ = this;
var _16237__$1 = this;return self__.meta16236;
});})(map__16234,map__16234__$1,next_state))
;
power_app.core.t16235.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16234,map__16234__$1,next_state){
return (function (_16237,meta16236__$1){var self__ = this;
var _16237__$1 = this;return (new power_app.core.t16235(self__.next_state,self__.map__16234,self__.p__16229,self__.owner,self__.root,self__.score_component,meta16236__$1));
});})(map__16234,map__16234__$1,next_state))
;
power_app.core.__GT_t16235 = ((function (map__16234,map__16234__$1,next_state){
return (function __GT_t16235(next_state__$1,map__16234__$2,p__16229__$1,owner__$1,root__$1,score_component__$1,meta16236){return (new power_app.core.t16235(next_state__$1,map__16234__$2,p__16229__$1,owner__$1,root__$1,score_component__$1,meta16236));
});})(map__16234,map__16234__$1,next_state))
;
}
return (new power_app.core.t16235(next_state,map__16234__$1,p__16229,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__16240){var map__16267 = p__16240;var map__16267__$1 = ((cljs.core.seq_QMARK_.call(null,map__16267))?cljs.core.apply.call(null,cljs.core.hash_map,map__16267):map__16267);var next_state = cljs.core.get.call(null,map__16267__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t16268 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t16268 = (function (next_state,map__16267,p__16240,owner,root,current_assignment_component,meta16269){
this.next_state = next_state;
this.map__16267 = map__16267;
this.p__16240 = p__16240;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta16269 = meta16269;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t16268.cljs$lang$type = true;
power_app.core.t16268.cljs$lang$ctorStr = "power-app.core/t16268";
power_app.core.t16268.cljs$lang$ctorPrWriter = ((function (map__16267,map__16267__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t16268");
});})(map__16267,map__16267__$1,next_state))
;
power_app.core.t16268.prototype.om$core$IRenderState$ = true;
power_app.core.t16268.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16267,map__16267__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1)))))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__16267,map__16267__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__16267,map__16267__$1,next_state){
return (function (p1__16238_SHARP_){return cljs.core.assoc.call(null,p1__16238_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__16267,map__16267__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__16267,map__16267__$1,next_state){
return (function (p1__16239_SHARP_){return cljs.core.assoc_in.call(null,p1__16239_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"end","end",-268185958)], null),(new Date()));
});})(___$2,map__16267,map__16267__$1,next_state))
);
});})(___$2,map__16267,map__16267__$1,next_state))
, "className": "btn btn-primary"},(function (){var vec__16271 = power_app.core.calculate_duration.call(null,(cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null)) - (new Date()).getTime()));var minutes = cljs.core.nth.call(null,vec__16271,(0),null);var seconds = cljs.core.nth.call(null,vec__16271,(1),null);var ___$3 = cljs.core.nth.call(null,vec__16271,(2),null);return ("Klaar ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,minutes))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,seconds))+")");
})())))));
});})(map__16267,map__16267__$1,next_state))
;
power_app.core.t16268.prototype.om$core$IWillMount$ = true;
power_app.core.t16268.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__16267,map__16267__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__16267,map__16267__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__16267,map__16267__$1,next_state){
return (function (state_16281){var state_val_16282 = (state_16281[(1)]);if((state_val_16282 === (4)))
{var inst_16275 = (state_16281[(2)]);var inst_16276 = om.core.refresh_BANG_.call(null,self__.owner);var state_16281__$1 = (function (){var statearr_16283 = state_16281;(statearr_16283[(7)] = inst_16276);
(statearr_16283[(8)] = inst_16275);
return statearr_16283;
})();var statearr_16284_16293 = state_16281__$1;(statearr_16284_16293[(2)] = null);
(statearr_16284_16293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16282 === (3)))
{var inst_16279 = (state_16281[(2)]);var state_16281__$1 = state_16281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16281__$1,inst_16279);
} else
{if((state_val_16282 === (2)))
{var inst_16273 = cljs.core.async.timeout.call(null,(500));var state_16281__$1 = state_16281;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16281__$1,(4),inst_16273);
} else
{if((state_val_16282 === (1)))
{var state_16281__$1 = state_16281;var statearr_16285_16294 = state_16281__$1;(statearr_16285_16294[(2)] = null);
(statearr_16285_16294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6480__auto__,___$1,map__16267,map__16267__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__16267,map__16267__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_16289 = [null,null,null,null,null,null,null,null,null];(statearr_16289[(0)] = state_machine__6466__auto__);
(statearr_16289[(1)] = (1));
return statearr_16289;
});
var state_machine__6466__auto____1 = (function (state_16281){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_16281);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e16290){if((e16290 instanceof Object))
{var ex__6469__auto__ = e16290;var statearr_16291_16295 = state_16281;(statearr_16291_16295[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16281);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16290;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16296 = state_16281;
state_16281 = G__16296;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_16281){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_16281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__16267,map__16267__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_16292 = f__6481__auto__.call(null);(statearr_16292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_16292;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__16267,map__16267__$1,next_state))
);
return c__6480__auto__;
});})(map__16267,map__16267__$1,next_state))
;
power_app.core.t16268.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16267,map__16267__$1,next_state){
return (function (_16270){var self__ = this;
var _16270__$1 = this;return self__.meta16269;
});})(map__16267,map__16267__$1,next_state))
;
power_app.core.t16268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16267,map__16267__$1,next_state){
return (function (_16270,meta16269__$1){var self__ = this;
var _16270__$1 = this;return (new power_app.core.t16268(self__.next_state,self__.map__16267,self__.p__16240,self__.owner,self__.root,self__.current_assignment_component,meta16269__$1));
});})(map__16267,map__16267__$1,next_state))
;
power_app.core.__GT_t16268 = ((function (map__16267,map__16267__$1,next_state){
return (function __GT_t16268(next_state__$1,map__16267__$2,p__16240__$1,owner__$1,root__$1,current_assignment_component__$1,meta16269){return (new power_app.core.t16268(next_state__$1,map__16267__$2,p__16240__$1,owner__$1,root__$1,current_assignment_component__$1,meta16269));
});})(map__16267,map__16267__$1,next_state))
;
}
return (new power_app.core.t16268(next_state,map__16267__$1,p__16240,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__16303){var map__16308 = p__16303;var map__16308__$1 = ((cljs.core.seq_QMARK_.call(null,map__16308))?cljs.core.apply.call(null,cljs.core.hash_map,map__16308):map__16308);var next_state = cljs.core.get.call(null,map__16308__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t16309 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t16309 = (function (next_state,map__16308,p__16303,owner,root,new_assignment_component,meta16310){
this.next_state = next_state;
this.map__16308 = map__16308;
this.p__16303 = p__16303;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta16310 = meta16310;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t16309.cljs$lang$type = true;
power_app.core.t16309.cljs$lang$ctorStr = "power-app.core/t16309";
power_app.core.t16309.cljs$lang$ctorPrWriter = ((function (map__16308,map__16308__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t16309");
});})(map__16308,map__16308__$1,next_state))
;
power_app.core.t16309.prototype.om$core$IRenderState$ = true;
power_app.core.t16309.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16308,map__16308__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var points = (new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1));var open_questions = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"answer","answer",-742633163)),cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"questions","questions",1226225380)], null)));var question = cljs.core.first.call(null,open_questions);var last_QMARK_ = (cljs.core.count.call(null,open_questions) < (2));return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(points)+" selectie"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,true,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state){
return (function (p1__16297_SHARP_){return cljs.core.assoc.call(null,p1__16297_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),true);
});})(points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state){
return (function (p1__16298_SHARP_){return cljs.core.assoc.call(null,p1__16298_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state){
return (function (p1__16299_SHARP_){return cljs.core.assoc_in.call(null,p1__16299_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__16299_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,false,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state){
return (function (p1__16300_SHARP_){return cljs.core.assoc.call(null,p1__16300_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),false);
});})(points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state){
return (function (p1__16301_SHARP_){return cljs.core.assoc.call(null,p1__16301_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state){
return (function (p1__16302_SHARP_){return cljs.core.assoc_in.call(null,p1__16302_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__16302_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__16308,map__16308__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__16308,map__16308__$1,next_state))
;
power_app.core.t16309.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16308,map__16308__$1,next_state){
return (function (_16311){var self__ = this;
var _16311__$1 = this;return self__.meta16310;
});})(map__16308,map__16308__$1,next_state))
;
power_app.core.t16309.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16308,map__16308__$1,next_state){
return (function (_16311,meta16310__$1){var self__ = this;
var _16311__$1 = this;return (new power_app.core.t16309(self__.next_state,self__.map__16308,self__.p__16303,self__.owner,self__.root,self__.new_assignment_component,meta16310__$1));
});})(map__16308,map__16308__$1,next_state))
;
power_app.core.__GT_t16309 = ((function (map__16308,map__16308__$1,next_state){
return (function __GT_t16309(next_state__$1,map__16308__$2,p__16303__$1,owner__$1,root__$1,new_assignment_component__$1,meta16310){return (new power_app.core.t16309(next_state__$1,map__16308__$2,p__16303__$1,owner__$1,root__$1,new_assignment_component__$1,meta16310));
});})(map__16308,map__16308__$1,next_state))
;
}
return (new power_app.core.t16309(next_state,map__16308__$1,p__16303,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__16313){var map__16318 = p__16313;var map__16318__$1 = ((cljs.core.seq_QMARK_.call(null,map__16318))?cljs.core.apply.call(null,cljs.core.hash_map,map__16318):map__16318);var next_state = cljs.core.get.call(null,map__16318__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t16319 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t16319 = (function (next_state,map__16318,p__16313,owner,root,explain_assignment_component,meta16320){
this.next_state = next_state;
this.map__16318 = map__16318;
this.p__16313 = p__16313;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta16320 = meta16320;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t16319.cljs$lang$type = true;
power_app.core.t16319.cljs$lang$ctorStr = "power-app.core/t16319";
power_app.core.t16319.cljs$lang$ctorPrWriter = ((function (map__16318,map__16318__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t16319");
});})(map__16318,map__16318__$1,next_state))
;
power_app.core.t16319.prototype.om$core$IRenderState$ = true;
power_app.core.t16319.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__16318,map__16318__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Uitleg opdracht "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1)))))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.h1({"style": {"font-size": "175%"}},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null))),React.DOM.p(null,""))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__16318,map__16318__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__16318,map__16318__$1,next_state){
return (function (p1__16312_SHARP_){return cljs.core.assoc.call(null,p1__16312_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__16318,map__16318__$1,next_state))
);
});})(___$2,map__16318,map__16318__$1,next_state))
, "className": "btn btn-primary"},"Nieuwe opdracht")))));
});})(map__16318,map__16318__$1,next_state))
;
power_app.core.t16319.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16318,map__16318__$1,next_state){
return (function (_16321){var self__ = this;
var _16321__$1 = this;return self__.meta16320;
});})(map__16318,map__16318__$1,next_state))
;
power_app.core.t16319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16318,map__16318__$1,next_state){
return (function (_16321,meta16320__$1){var self__ = this;
var _16321__$1 = this;return (new power_app.core.t16319(self__.next_state,self__.map__16318,self__.p__16313,self__.owner,self__.root,self__.explain_assignment_component,meta16320__$1));
});})(map__16318,map__16318__$1,next_state))
;
power_app.core.__GT_t16319 = ((function (map__16318,map__16318__$1,next_state){
return (function __GT_t16319(next_state__$1,map__16318__$2,p__16313__$1,owner__$1,root__$1,explain_assignment_component__$1,meta16320){return (new power_app.core.t16319(next_state__$1,map__16318__$2,p__16313__$1,owner__$1,root__$1,explain_assignment_component__$1,meta16320));
});})(map__16318,map__16318__$1,next_state))
;
}
return (new power_app.core.t16319(next_state,map__16318__$1,p__16313,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__16322,owner){var map__16323 = p__16322;var map__16323__$1 = ((cljs.core.seq_QMARK_.call(null,map__16323))?cljs.core.apply.call(null,cljs.core.hash_map,map__16323):map__16323);var root = map__16323__$1;var state = cljs.core.get.call(null,map__16323__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var user = cljs.core.get.call(null,map__16323__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(typeof power_app.core.t16324 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t16324 = (function (user,state,root,map__16323,owner,p__16322,meta16325){
this.user = user;
this.state = state;
this.root = root;
this.map__16323 = map__16323;
this.owner = owner;
this.p__16322 = p__16322;
this.meta16325 = meta16325;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t16324.cljs$lang$type = true;
power_app.core.t16324.cljs$lang$ctorStr = "power-app.core/t16324";
power_app.core.t16324.cljs$lang$ctorPrWriter = ((function (map__16323,map__16323__$1,root,state,user){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t16324");
});})(map__16323,map__16323__$1,root,state,user))
;
power_app.core.t16324.prototype.om$core$IRender$ = true;
power_app.core.t16324.prototype.om$core$IRender$render$arity$1 = ((function (map__16323,map__16323__$1,root,state,user){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Power-app!"),((cljs.core.not.call(null,self__.user))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.hr(null),cljs.core.pr_str.call(null,self__.root))));
});})(map__16323,map__16323__$1,root,state,user))
;
power_app.core.t16324.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__16323,map__16323__$1,root,state,user){
return (function (_16326){var self__ = this;
var _16326__$1 = this;return self__.meta16325;
});})(map__16323,map__16323__$1,root,state,user))
;
power_app.core.t16324.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__16323,map__16323__$1,root,state,user){
return (function (_16326,meta16325__$1){var self__ = this;
var _16326__$1 = this;return (new power_app.core.t16324(self__.user,self__.state,self__.root,self__.map__16323,self__.owner,self__.p__16322,meta16325__$1));
});})(map__16323,map__16323__$1,root,state,user))
;
power_app.core.__GT_t16324 = ((function (map__16323,map__16323__$1,root,state,user){
return (function __GT_t16324(user__$1,state__$1,root__$1,map__16323__$2,owner__$1,p__16322__$1,meta16325){return (new power_app.core.t16324(user__$1,state__$1,root__$1,map__16323__$2,owner__$1,p__16322__$1,meta16325));
});})(map__16323,map__16323__$1,root,state,user))
;
}
return (new power_app.core.t16324(user,state,root,map__16323__$1,owner,p__16322,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map