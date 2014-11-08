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
{power_app.core.server_address = "http://power-app.0x7be.com:8080";
}
power_app.core.error_handler = (function error_handler(p__21530){var map__21532 = p__21530;var map__21532__$1 = ((cljs.core.seq_QMARK_.call(null,map__21532))?cljs.core.apply.call(null,cljs.core.hash_map,map__21532):map__21532);var status_text = cljs.core.get.call(null,map__21532__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__21532__$1,new cljs.core.Keyword(null,"status","status",-1997798413));return console.log(("something bad happened: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)));
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
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__21533_SHARP_){return cljs.core.assoc.call(null,p1__21533_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t21537 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21537 = (function (opts,owner,root,login_component,meta21538){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta21538 = meta21538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21537.cljs$lang$type = true;
power_app.core.t21537.cljs$lang$ctorStr = "power-app.core/t21537";
power_app.core.t21537.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21537");
});
power_app.core.t21537.prototype.om$core$IRenderState$ = true;
power_app.core.t21537.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"value": "Marieke", "placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return power_app.core.login.call(null,name);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t21537.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21539){var self__ = this;
var _21539__$1 = this;return self__.meta21538;
});
power_app.core.t21537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21539,meta21538__$1){var self__ = this;
var _21539__$1 = this;return (new power_app.core.t21537(self__.opts,self__.owner,self__.root,self__.login_component,meta21538__$1));
});
power_app.core.__GT_t21537 = (function __GT_t21537(opts__$1,owner__$1,root__$1,login_component__$1,meta21538){return (new power_app.core.t21537(opts__$1,owner__$1,root__$1,login_component__$1,meta21538));
});
}
return (new power_app.core.t21537(opts,owner,root,login_component,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__21541){var map__21546 = p__21541;var map__21546__$1 = ((cljs.core.seq_QMARK_.call(null,map__21546))?cljs.core.apply.call(null,cljs.core.hash_map,map__21546):map__21546);var next_state = cljs.core.get.call(null,map__21546__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t21547 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21547 = (function (next_state,map__21546,p__21541,owner,root,score_component,meta21548){
this.next_state = next_state;
this.map__21546 = map__21546;
this.p__21541 = p__21541;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta21548 = meta21548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21547.cljs$lang$type = true;
power_app.core.t21547.cljs$lang$ctorStr = "power-app.core/t21547";
power_app.core.t21547.cljs$lang$ctorPrWriter = ((function (map__21546,map__21546__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21547");
});})(map__21546,map__21546__$1,next_state))
;
power_app.core.t21547.prototype.om$core$IRenderState$ = true;
power_app.core.t21547.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21546,map__21546__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__21546,map__21546__$1,next_state){
return (function (e){e.preventDefault();
console.log("HIERRR");
power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__21546,map__21546__$1,next_state){
return (function (p1__21540_SHARP_){return cljs.core.assoc.call(null,p1__21540_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__21546,map__21546__$1,next_state))
);
});})(___$2,map__21546,map__21546__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))));
});})(map__21546,map__21546__$1,next_state))
;
power_app.core.t21547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21546,map__21546__$1,next_state){
return (function (_21549){var self__ = this;
var _21549__$1 = this;return self__.meta21548;
});})(map__21546,map__21546__$1,next_state))
;
power_app.core.t21547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21546,map__21546__$1,next_state){
return (function (_21549,meta21548__$1){var self__ = this;
var _21549__$1 = this;return (new power_app.core.t21547(self__.next_state,self__.map__21546,self__.p__21541,self__.owner,self__.root,self__.score_component,meta21548__$1));
});})(map__21546,map__21546__$1,next_state))
;
power_app.core.__GT_t21547 = ((function (map__21546,map__21546__$1,next_state){
return (function __GT_t21547(next_state__$1,map__21546__$2,p__21541__$1,owner__$1,root__$1,score_component__$1,meta21548){return (new power_app.core.t21547(next_state__$1,map__21546__$2,p__21541__$1,owner__$1,root__$1,score_component__$1,meta21548));
});})(map__21546,map__21546__$1,next_state))
;
}
return (new power_app.core.t21547(next_state,map__21546__$1,p__21541,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__21552){var map__21579 = p__21552;var map__21579__$1 = ((cljs.core.seq_QMARK_.call(null,map__21579))?cljs.core.apply.call(null,cljs.core.hash_map,map__21579):map__21579);var next_state = cljs.core.get.call(null,map__21579__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t21580 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21580 = (function (next_state,map__21579,p__21552,owner,root,current_assignment_component,meta21581){
this.next_state = next_state;
this.map__21579 = map__21579;
this.p__21552 = p__21552;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta21581 = meta21581;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21580.cljs$lang$type = true;
power_app.core.t21580.cljs$lang$ctorStr = "power-app.core/t21580";
power_app.core.t21580.cljs$lang$ctorPrWriter = ((function (map__21579,map__21579__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21580");
});})(map__21579,map__21579__$1,next_state))
;
power_app.core.t21580.prototype.om$core$IRenderState$ = true;
power_app.core.t21580.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21579,map__21579__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"assignment","assignment",1330426519)], null)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.p(null,cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null))))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__21579,map__21579__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__21579,map__21579__$1,next_state){
return (function (p1__21550_SHARP_){return cljs.core.assoc.call(null,p1__21550_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__21579,map__21579__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__21579,map__21579__$1,next_state){
return (function (p1__21551_SHARP_){return cljs.core.assoc_in.call(null,p1__21551_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"end","end",-268185958)], null),(new Date()));
});})(___$2,map__21579,map__21579__$1,next_state))
);
});})(___$2,map__21579,map__21579__$1,next_state))
, "className": "btn btn-primary"},(function (){var vec__21583 = power_app.core.calculate_duration.call(null,(cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null)) - (new Date()).getTime()));var minutes = cljs.core.nth.call(null,vec__21583,(0),null);var seconds = cljs.core.nth.call(null,vec__21583,(1),null);var ___$3 = cljs.core.nth.call(null,vec__21583,(2),null);return ("Klaar ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,minutes))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,seconds))+")");
})())))));
});})(map__21579,map__21579__$1,next_state))
;
power_app.core.t21580.prototype.om$core$IWillMount$ = true;
power_app.core.t21580.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__21579,map__21579__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__21579,map__21579__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__21579,map__21579__$1,next_state){
return (function (state_21593){var state_val_21594 = (state_21593[(1)]);if((state_val_21594 === (4)))
{var inst_21587 = (state_21593[(2)]);var inst_21588 = om.core.refresh_BANG_.call(null,self__.owner);var state_21593__$1 = (function (){var statearr_21595 = state_21593;(statearr_21595[(7)] = inst_21587);
(statearr_21595[(8)] = inst_21588);
return statearr_21595;
})();var statearr_21596_21605 = state_21593__$1;(statearr_21596_21605[(2)] = null);
(statearr_21596_21605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21594 === (3)))
{var inst_21591 = (state_21593[(2)]);var state_21593__$1 = state_21593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21593__$1,inst_21591);
} else
{if((state_val_21594 === (2)))
{var inst_21585 = cljs.core.async.timeout.call(null,(500));var state_21593__$1 = state_21593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21593__$1,(4),inst_21585);
} else
{if((state_val_21594 === (1)))
{var state_21593__$1 = state_21593;var statearr_21597_21606 = state_21593__$1;(statearr_21597_21606[(2)] = null);
(statearr_21597_21606[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6480__auto__,___$1,map__21579,map__21579__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__21579,map__21579__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_21601 = [null,null,null,null,null,null,null,null,null];(statearr_21601[(0)] = state_machine__6466__auto__);
(statearr_21601[(1)] = (1));
return statearr_21601;
});
var state_machine__6466__auto____1 = (function (state_21593){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_21593);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e21602){if((e21602 instanceof Object))
{var ex__6469__auto__ = e21602;var statearr_21603_21607 = state_21593;(statearr_21603_21607[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21593);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21602;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21608 = state_21593;
state_21593 = G__21608;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_21593){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_21593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__21579,map__21579__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_21604 = f__6481__auto__.call(null);(statearr_21604[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_21604;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__21579,map__21579__$1,next_state))
);
return c__6480__auto__;
});})(map__21579,map__21579__$1,next_state))
;
power_app.core.t21580.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21579,map__21579__$1,next_state){
return (function (_21582){var self__ = this;
var _21582__$1 = this;return self__.meta21581;
});})(map__21579,map__21579__$1,next_state))
;
power_app.core.t21580.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21579,map__21579__$1,next_state){
return (function (_21582,meta21581__$1){var self__ = this;
var _21582__$1 = this;return (new power_app.core.t21580(self__.next_state,self__.map__21579,self__.p__21552,self__.owner,self__.root,self__.current_assignment_component,meta21581__$1));
});})(map__21579,map__21579__$1,next_state))
;
power_app.core.__GT_t21580 = ((function (map__21579,map__21579__$1,next_state){
return (function __GT_t21580(next_state__$1,map__21579__$2,p__21552__$1,owner__$1,root__$1,current_assignment_component__$1,meta21581){return (new power_app.core.t21580(next_state__$1,map__21579__$2,p__21552__$1,owner__$1,root__$1,current_assignment_component__$1,meta21581));
});})(map__21579,map__21579__$1,next_state))
;
}
return (new power_app.core.t21580(next_state,map__21579__$1,p__21552,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__21615){var map__21620 = p__21615;var map__21620__$1 = ((cljs.core.seq_QMARK_.call(null,map__21620))?cljs.core.apply.call(null,cljs.core.hash_map,map__21620):map__21620);var next_state = cljs.core.get.call(null,map__21620__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t21621 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21621 = (function (next_state,map__21620,p__21615,owner,root,new_assignment_component,meta21622){
this.next_state = next_state;
this.map__21620 = map__21620;
this.p__21615 = p__21615;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta21622 = meta21622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21621.cljs$lang$type = true;
power_app.core.t21621.cljs$lang$ctorStr = "power-app.core/t21621";
power_app.core.t21621.cljs$lang$ctorPrWriter = ((function (map__21620,map__21620__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21621");
});})(map__21620,map__21620__$1,next_state))
;
power_app.core.t21621.prototype.om$core$IRenderState$ = true;
power_app.core.t21621.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21620,map__21620__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var points = (new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1));var open_questions = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"answer","answer",-742633163)),cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"questions","questions",1226225380)], null)));var question = cljs.core.first.call(null,open_questions);var last_QMARK_ = (cljs.core.count.call(null,open_questions) < (2));return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht selectie"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,true,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state){
return (function (p1__21609_SHARP_){return cljs.core.assoc.call(null,p1__21609_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),true);
});})(points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state){
return (function (p1__21610_SHARP_){return cljs.core.assoc.call(null,p1__21610_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state){
return (function (p1__21611_SHARP_){return cljs.core.assoc_in.call(null,p1__21611_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__21611_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,false,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state){
return (function (p1__21612_SHARP_){return cljs.core.assoc.call(null,p1__21612_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),false);
});})(points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state){
return (function (p1__21613_SHARP_){return cljs.core.assoc.call(null,p1__21613_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state){
return (function (p1__21614_SHARP_){return cljs.core.assoc_in.call(null,p1__21614_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__21614_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__21620,map__21620__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__21620,map__21620__$1,next_state))
;
power_app.core.t21621.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21620,map__21620__$1,next_state){
return (function (_21623){var self__ = this;
var _21623__$1 = this;return self__.meta21622;
});})(map__21620,map__21620__$1,next_state))
;
power_app.core.t21621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21620,map__21620__$1,next_state){
return (function (_21623,meta21622__$1){var self__ = this;
var _21623__$1 = this;return (new power_app.core.t21621(self__.next_state,self__.map__21620,self__.p__21615,self__.owner,self__.root,self__.new_assignment_component,meta21622__$1));
});})(map__21620,map__21620__$1,next_state))
;
power_app.core.__GT_t21621 = ((function (map__21620,map__21620__$1,next_state){
return (function __GT_t21621(next_state__$1,map__21620__$2,p__21615__$1,owner__$1,root__$1,new_assignment_component__$1,meta21622){return (new power_app.core.t21621(next_state__$1,map__21620__$2,p__21615__$1,owner__$1,root__$1,new_assignment_component__$1,meta21622));
});})(map__21620,map__21620__$1,next_state))
;
}
return (new power_app.core.t21621(next_state,map__21620__$1,p__21615,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__21627){var map__21677 = p__21627;var map__21677__$1 = ((cljs.core.seq_QMARK_.call(null,map__21677))?cljs.core.apply.call(null,cljs.core.hash_map,map__21677):map__21677);var next_state = cljs.core.get.call(null,map__21677__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t21678 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21678 = (function (next_state,map__21677,p__21627,owner,root,explain_assignment_component,meta21679){
this.next_state = next_state;
this.map__21677 = map__21677;
this.p__21627 = p__21627;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta21679 = meta21679;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21678.cljs$lang$type = true;
power_app.core.t21678.cljs$lang$ctorStr = "power-app.core/t21678";
power_app.core.t21678.cljs$lang$ctorPrWriter = ((function (map__21677,map__21677__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21678");
});})(map__21677,map__21677__$1,next_state))
;
power_app.core.t21678.prototype.om$core$IRenderState$ = true;
power_app.core.t21678.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21677,map__21677__$1,next_state){
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
})()))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.p(null,new cljs.core.Keyword(null,"smallfact","smallfact",1255699368).cljs$core$IFn$_invoke$arity$1(self__.root)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__21677,map__21677__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__21677,map__21677__$1,next_state){
return (function (p1__21626_SHARP_){return cljs.core.assoc.call(null,p1__21626_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__21677,map__21677__$1,next_state))
);
});})(___$2,map__21677,map__21677__$1,next_state))
, "className": "btn btn-primary"},"OK")))));
});})(map__21677,map__21677__$1,next_state))
;
power_app.core.t21678.prototype.om$core$IWillMount$ = true;
power_app.core.t21678.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__21677,map__21677__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__21677,map__21677__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__21677,map__21677__$1,next_state){
return (function (state_21710){var state_val_21711 = (state_21710[(1)]);if((state_val_21711 === (5)))
{var inst_21705 = (state_21710[(2)]);var inst_21706 = cljs.core.deref.call(null,self__.root);var inst_21707 = cljs.core.get.call(null,inst_21706,new cljs.core.Keyword(null,"user","user",1532431356));var inst_21708 = power_app.core.login.call(null,inst_21707);var state_21710__$1 = (function (){var statearr_21712 = state_21710;(statearr_21712[(7)] = inst_21705);
return statearr_21712;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21710__$1,inst_21708);
} else
{if((state_val_21711 === (4)))
{var inst_21700 = cljs.core.deref.call(null,self__.root);var inst_21701 = cljs.core.get.call(null,inst_21700,new cljs.core.Keyword(null,"user","user",1532431356));var inst_21702 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/fail/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21701));var inst_21703 = ajax.core.GET.call(null,inst_21702);var state_21710__$1 = state_21710;var statearr_21713_21726 = state_21710__$1;(statearr_21713_21726[(2)] = inst_21703);
(statearr_21713_21726[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (3)))
{var inst_21695 = cljs.core.deref.call(null,self__.root);var inst_21696 = cljs.core.get.call(null,inst_21695,new cljs.core.Keyword(null,"user","user",1532431356));var inst_21697 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/success/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21696));var inst_21698 = ajax.core.GET.call(null,inst_21697);var state_21710__$1 = state_21710;var statearr_21714_21727 = state_21710__$1;(statearr_21714_21727[(2)] = inst_21698);
(statearr_21714_21727[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (2)))
{var inst_21689 = (state_21710[(2)]);var inst_21690 = Math.random.call(null);var inst_21691 = (inst_21690 > 0.1);var inst_21692 = (function (){var result = inst_21691;return ((function (result,inst_21689,inst_21690,inst_21691,state_val_21711,c__6480__auto__,___$1,map__21677,map__21677__$1,next_state){
return (function (p1__21625_SHARP_){return cljs.core.assoc_in.call(null,p1__21625_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"result","result",1415092211)], null),result);
});
;})(result,inst_21689,inst_21690,inst_21691,state_val_21711,c__6480__auto__,___$1,map__21677,map__21677__$1,next_state))
})();var inst_21693 = om.core.transact_BANG_.call(null,self__.root,inst_21692);var state_21710__$1 = (function (){var statearr_21715 = state_21710;(statearr_21715[(8)] = inst_21693);
(statearr_21715[(9)] = inst_21689);
return statearr_21715;
})();if(cljs.core.truth_(inst_21691))
{var statearr_21716_21728 = state_21710__$1;(statearr_21716_21728[(1)] = (3));
} else
{var statearr_21717_21729 = state_21710__$1;(statearr_21717_21729[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21711 === (1)))
{var inst_21681 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/smallfact");var inst_21682 = [new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_21683 = (function (){return ((function (inst_21681,inst_21682,state_val_21711,c__6480__auto__,___$1,map__21677,map__21677__$1,next_state){
return (function (result){return om.core.transact_BANG_.call(null,self__.root,((function (inst_21681,inst_21682,state_val_21711,c__6480__auto__,___$1,map__21677,map__21677__$1,next_state){
return (function (p1__21624_SHARP_){return cljs.core.assoc.call(null,p1__21624_SHARP_,new cljs.core.Keyword(null,"smallfact","smallfact",1255699368),result);
});})(inst_21681,inst_21682,state_val_21711,c__6480__auto__,___$1,map__21677,map__21677__$1,next_state))
);
});
;})(inst_21681,inst_21682,state_val_21711,c__6480__auto__,___$1,map__21677,map__21677__$1,next_state))
})();var inst_21684 = [inst_21683];var inst_21685 = cljs.core.PersistentHashMap.fromArrays(inst_21682,inst_21684);var inst_21686 = ajax.core.GET.call(null,inst_21681,inst_21685);var inst_21687 = cljs.core.async.timeout.call(null,(2000));var state_21710__$1 = (function (){var statearr_21718 = state_21710;(statearr_21718[(10)] = inst_21686);
return statearr_21718;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21710__$1,(2),inst_21687);
} else
{return null;
}
}
}
}
}
});})(c__6480__auto__,___$1,map__21677,map__21677__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__21677,map__21677__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_21722 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21722[(0)] = state_machine__6466__auto__);
(statearr_21722[(1)] = (1));
return statearr_21722;
});
var state_machine__6466__auto____1 = (function (state_21710){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_21710);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e21723){if((e21723 instanceof Object))
{var ex__6469__auto__ = e21723;var statearr_21724_21730 = state_21710;(statearr_21724_21730[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21710);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21723;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21731 = state_21710;
state_21710 = G__21731;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_21710){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_21710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__21677,map__21677__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_21725 = f__6481__auto__.call(null);(statearr_21725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_21725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__21677,map__21677__$1,next_state))
);
return c__6480__auto__;
});})(map__21677,map__21677__$1,next_state))
;
power_app.core.t21678.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21677,map__21677__$1,next_state){
return (function (_21680){var self__ = this;
var _21680__$1 = this;return self__.meta21679;
});})(map__21677,map__21677__$1,next_state))
;
power_app.core.t21678.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21677,map__21677__$1,next_state){
return (function (_21680,meta21679__$1){var self__ = this;
var _21680__$1 = this;return (new power_app.core.t21678(self__.next_state,self__.map__21677,self__.p__21627,self__.owner,self__.root,self__.explain_assignment_component,meta21679__$1));
});})(map__21677,map__21677__$1,next_state))
;
power_app.core.__GT_t21678 = ((function (map__21677,map__21677__$1,next_state){
return (function __GT_t21678(next_state__$1,map__21677__$2,p__21627__$1,owner__$1,root__$1,explain_assignment_component__$1,meta21679){return (new power_app.core.t21678(next_state__$1,map__21677__$2,p__21627__$1,owner__$1,root__$1,explain_assignment_component__$1,meta21679));
});})(map__21677,map__21677__$1,next_state))
;
}
return (new power_app.core.t21678(next_state,map__21677__$1,p__21627,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__21732,owner){var map__21733 = p__21732;var map__21733__$1 = ((cljs.core.seq_QMARK_.call(null,map__21733))?cljs.core.apply.call(null,cljs.core.hash_map,map__21733):map__21733);var root = map__21733__$1;var state = cljs.core.get.call(null,map__21733__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var user = cljs.core.get.call(null,map__21733__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(typeof power_app.core.t21734 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21734 = (function (user,state,root,map__21733,owner,p__21732,meta21735){
this.user = user;
this.state = state;
this.root = root;
this.map__21733 = map__21733;
this.owner = owner;
this.p__21732 = p__21732;
this.meta21735 = meta21735;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21734.cljs$lang$type = true;
power_app.core.t21734.cljs$lang$ctorStr = "power-app.core/t21734";
power_app.core.t21734.cljs$lang$ctorPrWriter = ((function (map__21733,map__21733__$1,root,state,user){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21734");
});})(map__21733,map__21733__$1,root,state,user))
;
power_app.core.t21734.prototype.om$core$IRender$ = true;
power_app.core.t21734.prototype.om$core$IRender$render$arity$1 = ((function (map__21733,map__21733__$1,root,state,user){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Power-app!"),((cljs.core.not.call(null,self__.user))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))));
});})(map__21733,map__21733__$1,root,state,user))
;
power_app.core.t21734.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21733,map__21733__$1,root,state,user){
return (function (_21736){var self__ = this;
var _21736__$1 = this;return self__.meta21735;
});})(map__21733,map__21733__$1,root,state,user))
;
power_app.core.t21734.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21733,map__21733__$1,root,state,user){
return (function (_21736,meta21735__$1){var self__ = this;
var _21736__$1 = this;return (new power_app.core.t21734(self__.user,self__.state,self__.root,self__.map__21733,self__.owner,self__.p__21732,meta21735__$1));
});})(map__21733,map__21733__$1,root,state,user))
;
power_app.core.__GT_t21734 = ((function (map__21733,map__21733__$1,root,state,user){
return (function __GT_t21734(user__$1,state__$1,root__$1,map__21733__$2,owner__$1,p__21732__$1,meta21735){return (new power_app.core.t21734(user__$1,state__$1,root__$1,map__21733__$2,owner__$1,p__21732__$1,meta21735));
});})(map__21733,map__21733__$1,root,state,user))
;
}
return (new power_app.core.t21734(user,state,root,map__21733__$1,owner,p__21732,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map