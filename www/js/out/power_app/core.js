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
{power_app.core.server_address = "http://power-app.0x7be.com";
}
power_app.core.error_handler = (function error_handler(p__22983){var map__22985 = p__22983;var map__22985__$1 = ((cljs.core.seq_QMARK_.call(null,map__22985))?cljs.core.apply.call(null,cljs.core.hash_map,map__22985):map__22985);var status_text = cljs.core.get.call(null,map__22985__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__22985__$1,new cljs.core.Keyword(null,"status","status",-1997798413));return console.log(("something bad happened: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)));
});
power_app.core.login = (function login(username){var trimmed = clojure.string.lower_case.call(null,clojure.string.trim.call(null,username));if(cljs.core.truth_(cljs.core.comp.call(null,cljs.core.not,cljs.core.empty_QMARK_).call(null,trimmed)))
{ajax.core.GET.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/user/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(trimmed)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (trimmed){
return (function (result){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),trimmed,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.call(null,result,new cljs.core.Keyword(null,"name","name",1843675177)),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.get.call(null,result,new cljs.core.Keyword(null,"points","points",-1486596883)));
});})(trimmed))
,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),power_app.core.error_handler], null));
return ajax.core.GET.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/leaderboard/3"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),((function (trimmed){
return (function (result){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"leaderboard","leaderboard",-680240670),result);
});})(trimmed))
], null));
} else
{return null;
}
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
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__22986_SHARP_){return cljs.core.assoc.call(null,p1__22986_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t22990 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t22990 = (function (opts,owner,root,login_component,meta22991){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta22991 = meta22991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t22990.cljs$lang$type = true;
power_app.core.t22990.cljs$lang$ctorStr = "power-app.core/t22990";
power_app.core.t22990.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t22990");
});
power_app.core.t22990.prototype.om$core$IRenderState$ = true;
power_app.core.t22990.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return power_app.core.login.call(null,name);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t22990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22992){var self__ = this;
var _22992__$1 = this;return self__.meta22991;
});
power_app.core.t22990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22992,meta22991__$1){var self__ = this;
var _22992__$1 = this;return (new power_app.core.t22990(self__.opts,self__.owner,self__.root,self__.login_component,meta22991__$1));
});
power_app.core.__GT_t22990 = (function __GT_t22990(opts__$1,owner__$1,root__$1,login_component__$1,meta22991){return (new power_app.core.t22990(opts__$1,owner__$1,root__$1,login_component__$1,meta22991));
});
}
return (new power_app.core.t22990(opts,owner,root,login_component,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__22995){var map__23000 = p__22995;var map__23000__$1 = ((cljs.core.seq_QMARK_.call(null,map__23000))?cljs.core.apply.call(null,cljs.core.hash_map,map__23000):map__23000);var next_state = cljs.core.get.call(null,map__23000__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t23001 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t23001 = (function (next_state,map__23000,p__22995,owner,root,score_component,meta23002){
this.next_state = next_state;
this.map__23000 = map__23000;
this.p__22995 = p__22995;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta23002 = meta23002;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t23001.cljs$lang$type = true;
power_app.core.t23001.cljs$lang$ctorStr = "power-app.core/t23001";
power_app.core.t23001.cljs$lang$ctorPrWriter = ((function (map__23000,map__23000__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t23001");
});})(map__23000,map__23000__$1,next_state))
;
power_app.core.t23001.prototype.om$core$IRenderState$ = true;
power_app.core.t23001.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23000,map__23000__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__23000,map__23000__$1,next_state){
return (function (e){e.preventDefault();
console.log("HIERRR");
power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__23000,map__23000__$1,next_state){
return (function (p1__22993_SHARP_){return cljs.core.assoc.call(null,p1__22993_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__23000,map__23000__$1,next_state))
);
});})(___$2,map__23000,map__23000__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__23000,map__23000__$1,next_state){
return (function (p1__22994_SHARP_){return React.DOM.div({"style": {"text-align": "left", "width": "100%"}, "className": "row"},React.DOM.p({"style": {"font-size": "150%"}, "className": "col-xs-12"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__22994_SHARP_))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p1__22994_SHARP_))+")")));
});})(___$2,map__23000,map__23000__$1,next_state))
,new cljs.core.Keyword(null,"leaderboard","leaderboard",-680240670).cljs$core$IFn$_invoke$arity$1(self__.root))));
});})(map__23000,map__23000__$1,next_state))
;
power_app.core.t23001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23000,map__23000__$1,next_state){
return (function (_23003){var self__ = this;
var _23003__$1 = this;return self__.meta23002;
});})(map__23000,map__23000__$1,next_state))
;
power_app.core.t23001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23000,map__23000__$1,next_state){
return (function (_23003,meta23002__$1){var self__ = this;
var _23003__$1 = this;return (new power_app.core.t23001(self__.next_state,self__.map__23000,self__.p__22995,self__.owner,self__.root,self__.score_component,meta23002__$1));
});})(map__23000,map__23000__$1,next_state))
;
power_app.core.__GT_t23001 = ((function (map__23000,map__23000__$1,next_state){
return (function __GT_t23001(next_state__$1,map__23000__$2,p__22995__$1,owner__$1,root__$1,score_component__$1,meta23002){return (new power_app.core.t23001(next_state__$1,map__23000__$2,p__22995__$1,owner__$1,root__$1,score_component__$1,meta23002));
});})(map__23000,map__23000__$1,next_state))
;
}
return (new power_app.core.t23001(next_state,map__23000__$1,p__22995,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__23006){var map__23033 = p__23006;var map__23033__$1 = ((cljs.core.seq_QMARK_.call(null,map__23033))?cljs.core.apply.call(null,cljs.core.hash_map,map__23033):map__23033);var next_state = cljs.core.get.call(null,map__23033__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t23034 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t23034 = (function (next_state,map__23033,p__23006,owner,root,current_assignment_component,meta23035){
this.next_state = next_state;
this.map__23033 = map__23033;
this.p__23006 = p__23006;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta23035 = meta23035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t23034.cljs$lang$type = true;
power_app.core.t23034.cljs$lang$ctorStr = "power-app.core/t23034";
power_app.core.t23034.cljs$lang$ctorPrWriter = ((function (map__23033,map__23033__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t23034");
});})(map__23033,map__23033__$1,next_state))
;
power_app.core.t23034.prototype.om$core$IRenderState$ = true;
power_app.core.t23034.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23033,map__23033__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"assignment","assignment",1330426519)], null)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.p(null,cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null))))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__23033,map__23033__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__23033,map__23033__$1,next_state){
return (function (p1__23004_SHARP_){return cljs.core.assoc.call(null,p1__23004_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__23033,map__23033__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__23033,map__23033__$1,next_state){
return (function (p1__23005_SHARP_){return cljs.core.assoc_in.call(null,p1__23005_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"end","end",-268185958)], null),(new Date()));
});})(___$2,map__23033,map__23033__$1,next_state))
);
});})(___$2,map__23033,map__23033__$1,next_state))
, "className": "btn btn-primary"},(function (){var vec__23037 = power_app.core.calculate_duration.call(null,(cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null)) - (new Date()).getTime()));var minutes = cljs.core.nth.call(null,vec__23037,(0),null);var seconds = cljs.core.nth.call(null,vec__23037,(1),null);var ___$3 = cljs.core.nth.call(null,vec__23037,(2),null);return ("Klaar ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,minutes))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,seconds))+")");
})())))));
});})(map__23033,map__23033__$1,next_state))
;
power_app.core.t23034.prototype.om$core$IWillMount$ = true;
power_app.core.t23034.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23033,map__23033__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__23033,map__23033__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__23033,map__23033__$1,next_state){
return (function (state_23047){var state_val_23048 = (state_23047[(1)]);if((state_val_23048 === (4)))
{var inst_23041 = (state_23047[(2)]);var inst_23042 = om.core.refresh_BANG_.call(null,self__.owner);var state_23047__$1 = (function (){var statearr_23049 = state_23047;(statearr_23049[(7)] = inst_23041);
(statearr_23049[(8)] = inst_23042);
return statearr_23049;
})();var statearr_23050_23059 = state_23047__$1;(statearr_23050_23059[(2)] = null);
(statearr_23050_23059[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23048 === (3)))
{var inst_23045 = (state_23047[(2)]);var state_23047__$1 = state_23047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23047__$1,inst_23045);
} else
{if((state_val_23048 === (2)))
{var inst_23039 = cljs.core.async.timeout.call(null,(500));var state_23047__$1 = state_23047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23047__$1,(4),inst_23039);
} else
{if((state_val_23048 === (1)))
{var state_23047__$1 = state_23047;var statearr_23051_23060 = state_23047__$1;(statearr_23051_23060[(2)] = null);
(statearr_23051_23060[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6480__auto__,___$1,map__23033,map__23033__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__23033,map__23033__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_23055 = [null,null,null,null,null,null,null,null,null];(statearr_23055[(0)] = state_machine__6466__auto__);
(statearr_23055[(1)] = (1));
return statearr_23055;
});
var state_machine__6466__auto____1 = (function (state_23047){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_23047);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e23056){if((e23056 instanceof Object))
{var ex__6469__auto__ = e23056;var statearr_23057_23061 = state_23047;(statearr_23057_23061[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23056;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23062 = state_23047;
state_23047 = G__23062;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_23047){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_23047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__23033,map__23033__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_23058 = f__6481__auto__.call(null);(statearr_23058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_23058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__23033,map__23033__$1,next_state))
);
return c__6480__auto__;
});})(map__23033,map__23033__$1,next_state))
;
power_app.core.t23034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23033,map__23033__$1,next_state){
return (function (_23036){var self__ = this;
var _23036__$1 = this;return self__.meta23035;
});})(map__23033,map__23033__$1,next_state))
;
power_app.core.t23034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23033,map__23033__$1,next_state){
return (function (_23036,meta23035__$1){var self__ = this;
var _23036__$1 = this;return (new power_app.core.t23034(self__.next_state,self__.map__23033,self__.p__23006,self__.owner,self__.root,self__.current_assignment_component,meta23035__$1));
});})(map__23033,map__23033__$1,next_state))
;
power_app.core.__GT_t23034 = ((function (map__23033,map__23033__$1,next_state){
return (function __GT_t23034(next_state__$1,map__23033__$2,p__23006__$1,owner__$1,root__$1,current_assignment_component__$1,meta23035){return (new power_app.core.t23034(next_state__$1,map__23033__$2,p__23006__$1,owner__$1,root__$1,current_assignment_component__$1,meta23035));
});})(map__23033,map__23033__$1,next_state))
;
}
return (new power_app.core.t23034(next_state,map__23033__$1,p__23006,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__23069){var map__23074 = p__23069;var map__23074__$1 = ((cljs.core.seq_QMARK_.call(null,map__23074))?cljs.core.apply.call(null,cljs.core.hash_map,map__23074):map__23074);var next_state = cljs.core.get.call(null,map__23074__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t23075 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t23075 = (function (next_state,map__23074,p__23069,owner,root,new_assignment_component,meta23076){
this.next_state = next_state;
this.map__23074 = map__23074;
this.p__23069 = p__23069;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta23076 = meta23076;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t23075.cljs$lang$type = true;
power_app.core.t23075.cljs$lang$ctorStr = "power-app.core/t23075";
power_app.core.t23075.cljs$lang$ctorPrWriter = ((function (map__23074,map__23074__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t23075");
});})(map__23074,map__23074__$1,next_state))
;
power_app.core.t23075.prototype.om$core$IRenderState$ = true;
power_app.core.t23075.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23074,map__23074__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var points = (new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1));var open_questions = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"answer","answer",-742633163)),cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"questions","questions",1226225380)], null)));var question = cljs.core.first.call(null,open_questions);var last_QMARK_ = (cljs.core.count.call(null,open_questions) < (2));return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht selectie"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,true,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state){
return (function (p1__23063_SHARP_){return cljs.core.assoc.call(null,p1__23063_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),true);
});})(points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state){
return (function (p1__23064_SHARP_){return cljs.core.assoc.call(null,p1__23064_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state){
return (function (p1__23065_SHARP_){return cljs.core.assoc_in.call(null,p1__23065_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__23065_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,false,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state){
return (function (p1__23066_SHARP_){return cljs.core.assoc.call(null,p1__23066_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),false);
});})(points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state){
return (function (p1__23067_SHARP_){return cljs.core.assoc.call(null,p1__23067_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state){
return (function (p1__23068_SHARP_){return cljs.core.assoc_in.call(null,p1__23068_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__23068_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__23074,map__23074__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__23074,map__23074__$1,next_state))
;
power_app.core.t23075.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23074,map__23074__$1,next_state){
return (function (_23077){var self__ = this;
var _23077__$1 = this;return self__.meta23076;
});})(map__23074,map__23074__$1,next_state))
;
power_app.core.t23075.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23074,map__23074__$1,next_state){
return (function (_23077,meta23076__$1){var self__ = this;
var _23077__$1 = this;return (new power_app.core.t23075(self__.next_state,self__.map__23074,self__.p__23069,self__.owner,self__.root,self__.new_assignment_component,meta23076__$1));
});})(map__23074,map__23074__$1,next_state))
;
power_app.core.__GT_t23075 = ((function (map__23074,map__23074__$1,next_state){
return (function __GT_t23075(next_state__$1,map__23074__$2,p__23069__$1,owner__$1,root__$1,new_assignment_component__$1,meta23076){return (new power_app.core.t23075(next_state__$1,map__23074__$2,p__23069__$1,owner__$1,root__$1,new_assignment_component__$1,meta23076));
});})(map__23074,map__23074__$1,next_state))
;
}
return (new power_app.core.t23075(next_state,map__23074__$1,p__23069,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__23081){var map__23131 = p__23081;var map__23131__$1 = ((cljs.core.seq_QMARK_.call(null,map__23131))?cljs.core.apply.call(null,cljs.core.hash_map,map__23131):map__23131);var next_state = cljs.core.get.call(null,map__23131__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t23132 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t23132 = (function (next_state,map__23131,p__23081,owner,root,explain_assignment_component,meta23133){
this.next_state = next_state;
this.map__23131 = map__23131;
this.p__23081 = p__23081;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta23133 = meta23133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t23132.cljs$lang$type = true;
power_app.core.t23132.cljs$lang$ctorStr = "power-app.core/t23132";
power_app.core.t23132.cljs$lang$ctorPrWriter = ((function (map__23131,map__23131__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t23132");
});})(map__23131,map__23131__$1,next_state))
;
power_app.core.t23132.prototype.om$core$IRenderState$ = true;
power_app.core.t23132.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__23131,map__23131__$1,next_state){
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
})()))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.p(null,new cljs.core.Keyword(null,"smallfact","smallfact",1255699368).cljs$core$IFn$_invoke$arity$1(self__.root)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__23131,map__23131__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__23131,map__23131__$1,next_state){
return (function (p1__23080_SHARP_){return cljs.core.assoc.call(null,p1__23080_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__23131,map__23131__$1,next_state))
);
});})(___$2,map__23131,map__23131__$1,next_state))
, "className": "btn btn-primary"},"OK")))));
});})(map__23131,map__23131__$1,next_state))
;
power_app.core.t23132.prototype.om$core$IWillMount$ = true;
power_app.core.t23132.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__23131,map__23131__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__23131,map__23131__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__23131,map__23131__$1,next_state){
return (function (state_23164){var state_val_23165 = (state_23164[(1)]);if((state_val_23165 === (5)))
{var inst_23159 = (state_23164[(2)]);var inst_23160 = cljs.core.deref.call(null,self__.root);var inst_23161 = cljs.core.get.call(null,inst_23160,new cljs.core.Keyword(null,"user","user",1532431356));var inst_23162 = power_app.core.login.call(null,inst_23161);var state_23164__$1 = (function (){var statearr_23166 = state_23164;(statearr_23166[(7)] = inst_23159);
return statearr_23166;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_23164__$1,inst_23162);
} else
{if((state_val_23165 === (4)))
{var inst_23154 = cljs.core.deref.call(null,self__.root);var inst_23155 = cljs.core.get.call(null,inst_23154,new cljs.core.Keyword(null,"user","user",1532431356));var inst_23156 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/fail/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23155));var inst_23157 = ajax.core.GET.call(null,inst_23156);var state_23164__$1 = state_23164;var statearr_23167_23180 = state_23164__$1;(statearr_23167_23180[(2)] = inst_23157);
(statearr_23167_23180[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23165 === (3)))
{var inst_23149 = cljs.core.deref.call(null,self__.root);var inst_23150 = cljs.core.get.call(null,inst_23149,new cljs.core.Keyword(null,"user","user",1532431356));var inst_23151 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/success/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_23150));var inst_23152 = ajax.core.GET.call(null,inst_23151);var state_23164__$1 = state_23164;var statearr_23168_23181 = state_23164__$1;(statearr_23168_23181[(2)] = inst_23152);
(statearr_23168_23181[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23165 === (2)))
{var inst_23143 = (state_23164[(2)]);var inst_23144 = Math.random.call(null);var inst_23145 = (inst_23144 > 0.1);var inst_23146 = (function (){var result = inst_23145;return ((function (result,inst_23143,inst_23144,inst_23145,state_val_23165,c__6480__auto__,___$1,map__23131,map__23131__$1,next_state){
return (function (p1__23079_SHARP_){return cljs.core.assoc_in.call(null,p1__23079_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"result","result",1415092211)], null),result);
});
;})(result,inst_23143,inst_23144,inst_23145,state_val_23165,c__6480__auto__,___$1,map__23131,map__23131__$1,next_state))
})();var inst_23147 = om.core.transact_BANG_.call(null,self__.root,inst_23146);var state_23164__$1 = (function (){var statearr_23169 = state_23164;(statearr_23169[(8)] = inst_23147);
(statearr_23169[(9)] = inst_23143);
return statearr_23169;
})();if(cljs.core.truth_(inst_23145))
{var statearr_23170_23182 = state_23164__$1;(statearr_23170_23182[(1)] = (3));
} else
{var statearr_23171_23183 = state_23164__$1;(statearr_23171_23183[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_23165 === (1)))
{var inst_23135 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/smallfact");var inst_23136 = [new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_23137 = (function (){return ((function (inst_23135,inst_23136,state_val_23165,c__6480__auto__,___$1,map__23131,map__23131__$1,next_state){
return (function (result){return om.core.transact_BANG_.call(null,self__.root,((function (inst_23135,inst_23136,state_val_23165,c__6480__auto__,___$1,map__23131,map__23131__$1,next_state){
return (function (p1__23078_SHARP_){return cljs.core.assoc.call(null,p1__23078_SHARP_,new cljs.core.Keyword(null,"smallfact","smallfact",1255699368),result);
});})(inst_23135,inst_23136,state_val_23165,c__6480__auto__,___$1,map__23131,map__23131__$1,next_state))
);
});
;})(inst_23135,inst_23136,state_val_23165,c__6480__auto__,___$1,map__23131,map__23131__$1,next_state))
})();var inst_23138 = [inst_23137];var inst_23139 = cljs.core.PersistentHashMap.fromArrays(inst_23136,inst_23138);var inst_23140 = ajax.core.GET.call(null,inst_23135,inst_23139);var inst_23141 = cljs.core.async.timeout.call(null,(2000));var state_23164__$1 = (function (){var statearr_23172 = state_23164;(statearr_23172[(10)] = inst_23140);
return statearr_23172;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_23164__$1,(2),inst_23141);
} else
{return null;
}
}
}
}
}
});})(c__6480__auto__,___$1,map__23131,map__23131__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__23131,map__23131__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_23176 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_23176[(0)] = state_machine__6466__auto__);
(statearr_23176[(1)] = (1));
return statearr_23176;
});
var state_machine__6466__auto____1 = (function (state_23164){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_23164);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e23177){if((e23177 instanceof Object))
{var ex__6469__auto__ = e23177;var statearr_23178_23184 = state_23164;(statearr_23178_23184[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_23164);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e23177;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__23185 = state_23164;
state_23164 = G__23185;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_23164){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_23164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__23131,map__23131__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_23179 = f__6481__auto__.call(null);(statearr_23179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_23179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__23131,map__23131__$1,next_state))
);
return c__6480__auto__;
});})(map__23131,map__23131__$1,next_state))
;
power_app.core.t23132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23131,map__23131__$1,next_state){
return (function (_23134){var self__ = this;
var _23134__$1 = this;return self__.meta23133;
});})(map__23131,map__23131__$1,next_state))
;
power_app.core.t23132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23131,map__23131__$1,next_state){
return (function (_23134,meta23133__$1){var self__ = this;
var _23134__$1 = this;return (new power_app.core.t23132(self__.next_state,self__.map__23131,self__.p__23081,self__.owner,self__.root,self__.explain_assignment_component,meta23133__$1));
});})(map__23131,map__23131__$1,next_state))
;
power_app.core.__GT_t23132 = ((function (map__23131,map__23131__$1,next_state){
return (function __GT_t23132(next_state__$1,map__23131__$2,p__23081__$1,owner__$1,root__$1,explain_assignment_component__$1,meta23133){return (new power_app.core.t23132(next_state__$1,map__23131__$2,p__23081__$1,owner__$1,root__$1,explain_assignment_component__$1,meta23133));
});})(map__23131,map__23131__$1,next_state))
;
}
return (new power_app.core.t23132(next_state,map__23131__$1,p__23081,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__23186,owner){var map__23187 = p__23186;var map__23187__$1 = ((cljs.core.seq_QMARK_.call(null,map__23187))?cljs.core.apply.call(null,cljs.core.hash_map,map__23187):map__23187);var root = map__23187__$1;var state = cljs.core.get.call(null,map__23187__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var user = cljs.core.get.call(null,map__23187__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(typeof power_app.core.t23188 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t23188 = (function (user,state,root,map__23187,owner,p__23186,meta23189){
this.user = user;
this.state = state;
this.root = root;
this.map__23187 = map__23187;
this.owner = owner;
this.p__23186 = p__23186;
this.meta23189 = meta23189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t23188.cljs$lang$type = true;
power_app.core.t23188.cljs$lang$ctorStr = "power-app.core/t23188";
power_app.core.t23188.cljs$lang$ctorPrWriter = ((function (map__23187,map__23187__$1,root,state,user){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t23188");
});})(map__23187,map__23187__$1,root,state,user))
;
power_app.core.t23188.prototype.om$core$IRender$ = true;
power_app.core.t23188.prototype.om$core$IRender$render$arity$1 = ((function (map__23187,map__23187__$1,root,state,user){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Power-app!"),((cljs.core.not.call(null,self__.user))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))));
});})(map__23187,map__23187__$1,root,state,user))
;
power_app.core.t23188.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__23187,map__23187__$1,root,state,user){
return (function (_23190){var self__ = this;
var _23190__$1 = this;return self__.meta23189;
});})(map__23187,map__23187__$1,root,state,user))
;
power_app.core.t23188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__23187,map__23187__$1,root,state,user){
return (function (_23190,meta23189__$1){var self__ = this;
var _23190__$1 = this;return (new power_app.core.t23188(self__.user,self__.state,self__.root,self__.map__23187,self__.owner,self__.p__23186,meta23189__$1));
});})(map__23187,map__23187__$1,root,state,user))
;
power_app.core.__GT_t23188 = ((function (map__23187,map__23187__$1,root,state,user){
return (function __GT_t23188(user__$1,state__$1,root__$1,map__23187__$2,owner__$1,p__23186__$1,meta23189){return (new power_app.core.t23188(user__$1,state__$1,root__$1,map__23187__$2,owner__$1,p__23186__$1,meta23189));
});})(map__23187,map__23187__$1,root,state,user))
;
}
return (new power_app.core.t23188(user,state,root,map__23187__$1,owner,p__23186,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map