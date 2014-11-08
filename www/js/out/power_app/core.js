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
power_app.core.error_handler = (function error_handler(p__22775){var map__22777 = p__22775;var map__22777__$1 = ((cljs.core.seq_QMARK_.call(null,map__22777))?cljs.core.apply.call(null,cljs.core.hash_map,map__22777):map__22777);var status_text = cljs.core.get.call(null,map__22777__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__22777__$1,new cljs.core.Keyword(null,"status","status",-1997798413));return console.log(("something bad happened: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)));
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
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__22778_SHARP_){return cljs.core.assoc.call(null,p1__22778_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t22782 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t22782 = (function (opts,owner,root,login_component,meta22783){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta22783 = meta22783;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t22782.cljs$lang$type = true;
power_app.core.t22782.cljs$lang$ctorStr = "power-app.core/t22782";
power_app.core.t22782.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t22782");
});
power_app.core.t22782.prototype.om$core$IRenderState$ = true;
power_app.core.t22782.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return power_app.core.login.call(null,name);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t22782.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22784){var self__ = this;
var _22784__$1 = this;return self__.meta22783;
});
power_app.core.t22782.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22784,meta22783__$1){var self__ = this;
var _22784__$1 = this;return (new power_app.core.t22782(self__.opts,self__.owner,self__.root,self__.login_component,meta22783__$1));
});
power_app.core.__GT_t22782 = (function __GT_t22782(opts__$1,owner__$1,root__$1,login_component__$1,meta22783){return (new power_app.core.t22782(opts__$1,owner__$1,root__$1,login_component__$1,meta22783));
});
}
return (new power_app.core.t22782(opts,owner,root,login_component,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__22787){var map__22792 = p__22787;var map__22792__$1 = ((cljs.core.seq_QMARK_.call(null,map__22792))?cljs.core.apply.call(null,cljs.core.hash_map,map__22792):map__22792);var next_state = cljs.core.get.call(null,map__22792__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t22793 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t22793 = (function (next_state,map__22792,p__22787,owner,root,score_component,meta22794){
this.next_state = next_state;
this.map__22792 = map__22792;
this.p__22787 = p__22787;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta22794 = meta22794;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t22793.cljs$lang$type = true;
power_app.core.t22793.cljs$lang$ctorStr = "power-app.core/t22793";
power_app.core.t22793.cljs$lang$ctorPrWriter = ((function (map__22792,map__22792__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t22793");
});})(map__22792,map__22792__$1,next_state))
;
power_app.core.t22793.prototype.om$core$IRenderState$ = true;
power_app.core.t22793.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22792,map__22792__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__22792,map__22792__$1,next_state){
return (function (e){e.preventDefault();
console.log("HIERRR");
power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__22792,map__22792__$1,next_state){
return (function (p1__22785_SHARP_){return cljs.core.assoc.call(null,p1__22785_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__22792,map__22792__$1,next_state))
);
});})(___$2,map__22792,map__22792__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))),cljs.core.apply.call(null,om.dom.div,null,cljs.core.map.call(null,((function (___$2,map__22792,map__22792__$1,next_state){
return (function (p1__22786_SHARP_){return React.DOM.div({"style": {"text-align": "left", "width": "100%"}, "className": "row"},React.DOM.p({"style": {"font-size": "150%"}, "className": "col-xs-12"},(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__22786_SHARP_))+" ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(p1__22786_SHARP_))+")")));
});})(___$2,map__22792,map__22792__$1,next_state))
,new cljs.core.Keyword(null,"leaderboard","leaderboard",-680240670).cljs$core$IFn$_invoke$arity$1(self__.root))));
});})(map__22792,map__22792__$1,next_state))
;
power_app.core.t22793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22792,map__22792__$1,next_state){
return (function (_22795){var self__ = this;
var _22795__$1 = this;return self__.meta22794;
});})(map__22792,map__22792__$1,next_state))
;
power_app.core.t22793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22792,map__22792__$1,next_state){
return (function (_22795,meta22794__$1){var self__ = this;
var _22795__$1 = this;return (new power_app.core.t22793(self__.next_state,self__.map__22792,self__.p__22787,self__.owner,self__.root,self__.score_component,meta22794__$1));
});})(map__22792,map__22792__$1,next_state))
;
power_app.core.__GT_t22793 = ((function (map__22792,map__22792__$1,next_state){
return (function __GT_t22793(next_state__$1,map__22792__$2,p__22787__$1,owner__$1,root__$1,score_component__$1,meta22794){return (new power_app.core.t22793(next_state__$1,map__22792__$2,p__22787__$1,owner__$1,root__$1,score_component__$1,meta22794));
});})(map__22792,map__22792__$1,next_state))
;
}
return (new power_app.core.t22793(next_state,map__22792__$1,p__22787,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__22798){var map__22825 = p__22798;var map__22825__$1 = ((cljs.core.seq_QMARK_.call(null,map__22825))?cljs.core.apply.call(null,cljs.core.hash_map,map__22825):map__22825);var next_state = cljs.core.get.call(null,map__22825__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t22826 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t22826 = (function (next_state,map__22825,p__22798,owner,root,current_assignment_component,meta22827){
this.next_state = next_state;
this.map__22825 = map__22825;
this.p__22798 = p__22798;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta22827 = meta22827;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t22826.cljs$lang$type = true;
power_app.core.t22826.cljs$lang$ctorStr = "power-app.core/t22826";
power_app.core.t22826.cljs$lang$ctorPrWriter = ((function (map__22825,map__22825__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t22826");
});})(map__22825,map__22825__$1,next_state))
;
power_app.core.t22826.prototype.om$core$IRenderState$ = true;
power_app.core.t22826.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22825,map__22825__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"assignment","assignment",1330426519)], null)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.p(null,cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null))))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__22825,map__22825__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__22825,map__22825__$1,next_state){
return (function (p1__22796_SHARP_){return cljs.core.assoc.call(null,p1__22796_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__22825,map__22825__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__22825,map__22825__$1,next_state){
return (function (p1__22797_SHARP_){return cljs.core.assoc_in.call(null,p1__22797_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"end","end",-268185958)], null),(new Date()));
});})(___$2,map__22825,map__22825__$1,next_state))
);
});})(___$2,map__22825,map__22825__$1,next_state))
, "className": "btn btn-primary"},(function (){var vec__22829 = power_app.core.calculate_duration.call(null,(cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null)) - (new Date()).getTime()));var minutes = cljs.core.nth.call(null,vec__22829,(0),null);var seconds = cljs.core.nth.call(null,vec__22829,(1),null);var ___$3 = cljs.core.nth.call(null,vec__22829,(2),null);return ("Klaar ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,minutes))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,seconds))+")");
})())))));
});})(map__22825,map__22825__$1,next_state))
;
power_app.core.t22826.prototype.om$core$IWillMount$ = true;
power_app.core.t22826.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__22825,map__22825__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__22825,map__22825__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__22825,map__22825__$1,next_state){
return (function (state_22839){var state_val_22840 = (state_22839[(1)]);if((state_val_22840 === (4)))
{var inst_22833 = (state_22839[(2)]);var inst_22834 = om.core.refresh_BANG_.call(null,self__.owner);var state_22839__$1 = (function (){var statearr_22841 = state_22839;(statearr_22841[(7)] = inst_22834);
(statearr_22841[(8)] = inst_22833);
return statearr_22841;
})();var statearr_22842_22851 = state_22839__$1;(statearr_22842_22851[(2)] = null);
(statearr_22842_22851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22840 === (3)))
{var inst_22837 = (state_22839[(2)]);var state_22839__$1 = state_22839;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22839__$1,inst_22837);
} else
{if((state_val_22840 === (2)))
{var inst_22831 = cljs.core.async.timeout.call(null,(500));var state_22839__$1 = state_22839;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22839__$1,(4),inst_22831);
} else
{if((state_val_22840 === (1)))
{var state_22839__$1 = state_22839;var statearr_22843_22852 = state_22839__$1;(statearr_22843_22852[(2)] = null);
(statearr_22843_22852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6480__auto__,___$1,map__22825,map__22825__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__22825,map__22825__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_22847 = [null,null,null,null,null,null,null,null,null];(statearr_22847[(0)] = state_machine__6466__auto__);
(statearr_22847[(1)] = (1));
return statearr_22847;
});
var state_machine__6466__auto____1 = (function (state_22839){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_22839);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e22848){if((e22848 instanceof Object))
{var ex__6469__auto__ = e22848;var statearr_22849_22853 = state_22839;(statearr_22849_22853[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22839);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22848;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22854 = state_22839;
state_22839 = G__22854;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_22839){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_22839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__22825,map__22825__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_22850 = f__6481__auto__.call(null);(statearr_22850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_22850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__22825,map__22825__$1,next_state))
);
return c__6480__auto__;
});})(map__22825,map__22825__$1,next_state))
;
power_app.core.t22826.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22825,map__22825__$1,next_state){
return (function (_22828){var self__ = this;
var _22828__$1 = this;return self__.meta22827;
});})(map__22825,map__22825__$1,next_state))
;
power_app.core.t22826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22825,map__22825__$1,next_state){
return (function (_22828,meta22827__$1){var self__ = this;
var _22828__$1 = this;return (new power_app.core.t22826(self__.next_state,self__.map__22825,self__.p__22798,self__.owner,self__.root,self__.current_assignment_component,meta22827__$1));
});})(map__22825,map__22825__$1,next_state))
;
power_app.core.__GT_t22826 = ((function (map__22825,map__22825__$1,next_state){
return (function __GT_t22826(next_state__$1,map__22825__$2,p__22798__$1,owner__$1,root__$1,current_assignment_component__$1,meta22827){return (new power_app.core.t22826(next_state__$1,map__22825__$2,p__22798__$1,owner__$1,root__$1,current_assignment_component__$1,meta22827));
});})(map__22825,map__22825__$1,next_state))
;
}
return (new power_app.core.t22826(next_state,map__22825__$1,p__22798,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__22861){var map__22866 = p__22861;var map__22866__$1 = ((cljs.core.seq_QMARK_.call(null,map__22866))?cljs.core.apply.call(null,cljs.core.hash_map,map__22866):map__22866);var next_state = cljs.core.get.call(null,map__22866__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t22867 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t22867 = (function (next_state,map__22866,p__22861,owner,root,new_assignment_component,meta22868){
this.next_state = next_state;
this.map__22866 = map__22866;
this.p__22861 = p__22861;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta22868 = meta22868;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t22867.cljs$lang$type = true;
power_app.core.t22867.cljs$lang$ctorStr = "power-app.core/t22867";
power_app.core.t22867.cljs$lang$ctorPrWriter = ((function (map__22866,map__22866__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t22867");
});})(map__22866,map__22866__$1,next_state))
;
power_app.core.t22867.prototype.om$core$IRenderState$ = true;
power_app.core.t22867.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22866,map__22866__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var points = (new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1));var open_questions = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"answer","answer",-742633163)),cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"questions","questions",1226225380)], null)));var question = cljs.core.first.call(null,open_questions);var last_QMARK_ = (cljs.core.count.call(null,open_questions) < (2));return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht selectie"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,true,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state){
return (function (p1__22855_SHARP_){return cljs.core.assoc.call(null,p1__22855_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),true);
});})(points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state){
return (function (p1__22856_SHARP_){return cljs.core.assoc.call(null,p1__22856_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state){
return (function (p1__22857_SHARP_){return cljs.core.assoc_in.call(null,p1__22857_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__22857_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,false,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state){
return (function (p1__22858_SHARP_){return cljs.core.assoc.call(null,p1__22858_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),false);
});})(points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state){
return (function (p1__22859_SHARP_){return cljs.core.assoc.call(null,p1__22859_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state){
return (function (p1__22860_SHARP_){return cljs.core.assoc_in.call(null,p1__22860_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__22860_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__22866,map__22866__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__22866,map__22866__$1,next_state))
;
power_app.core.t22867.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22866,map__22866__$1,next_state){
return (function (_22869){var self__ = this;
var _22869__$1 = this;return self__.meta22868;
});})(map__22866,map__22866__$1,next_state))
;
power_app.core.t22867.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22866,map__22866__$1,next_state){
return (function (_22869,meta22868__$1){var self__ = this;
var _22869__$1 = this;return (new power_app.core.t22867(self__.next_state,self__.map__22866,self__.p__22861,self__.owner,self__.root,self__.new_assignment_component,meta22868__$1));
});})(map__22866,map__22866__$1,next_state))
;
power_app.core.__GT_t22867 = ((function (map__22866,map__22866__$1,next_state){
return (function __GT_t22867(next_state__$1,map__22866__$2,p__22861__$1,owner__$1,root__$1,new_assignment_component__$1,meta22868){return (new power_app.core.t22867(next_state__$1,map__22866__$2,p__22861__$1,owner__$1,root__$1,new_assignment_component__$1,meta22868));
});})(map__22866,map__22866__$1,next_state))
;
}
return (new power_app.core.t22867(next_state,map__22866__$1,p__22861,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__22873){var map__22923 = p__22873;var map__22923__$1 = ((cljs.core.seq_QMARK_.call(null,map__22923))?cljs.core.apply.call(null,cljs.core.hash_map,map__22923):map__22923);var next_state = cljs.core.get.call(null,map__22923__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t22924 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t22924 = (function (next_state,map__22923,p__22873,owner,root,explain_assignment_component,meta22925){
this.next_state = next_state;
this.map__22923 = map__22923;
this.p__22873 = p__22873;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta22925 = meta22925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t22924.cljs$lang$type = true;
power_app.core.t22924.cljs$lang$ctorStr = "power-app.core/t22924";
power_app.core.t22924.cljs$lang$ctorPrWriter = ((function (map__22923,map__22923__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t22924");
});})(map__22923,map__22923__$1,next_state))
;
power_app.core.t22924.prototype.om$core$IRenderState$ = true;
power_app.core.t22924.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__22923,map__22923__$1,next_state){
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
})()))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.p(null,new cljs.core.Keyword(null,"smallfact","smallfact",1255699368).cljs$core$IFn$_invoke$arity$1(self__.root)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__22923,map__22923__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__22923,map__22923__$1,next_state){
return (function (p1__22872_SHARP_){return cljs.core.assoc.call(null,p1__22872_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__22923,map__22923__$1,next_state))
);
});})(___$2,map__22923,map__22923__$1,next_state))
, "className": "btn btn-primary"},"OK")))));
});})(map__22923,map__22923__$1,next_state))
;
power_app.core.t22924.prototype.om$core$IWillMount$ = true;
power_app.core.t22924.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__22923,map__22923__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__22923,map__22923__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__22923,map__22923__$1,next_state){
return (function (state_22956){var state_val_22957 = (state_22956[(1)]);if((state_val_22957 === (5)))
{var inst_22951 = (state_22956[(2)]);var inst_22952 = cljs.core.deref.call(null,self__.root);var inst_22953 = cljs.core.get.call(null,inst_22952,new cljs.core.Keyword(null,"user","user",1532431356));var inst_22954 = power_app.core.login.call(null,inst_22953);var state_22956__$1 = (function (){var statearr_22958 = state_22956;(statearr_22958[(7)] = inst_22951);
return statearr_22958;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22956__$1,inst_22954);
} else
{if((state_val_22957 === (4)))
{var inst_22946 = cljs.core.deref.call(null,self__.root);var inst_22947 = cljs.core.get.call(null,inst_22946,new cljs.core.Keyword(null,"user","user",1532431356));var inst_22948 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/fail/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22947));var inst_22949 = ajax.core.GET.call(null,inst_22948);var state_22956__$1 = state_22956;var statearr_22959_22972 = state_22956__$1;(statearr_22959_22972[(2)] = inst_22949);
(statearr_22959_22972[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22957 === (3)))
{var inst_22941 = cljs.core.deref.call(null,self__.root);var inst_22942 = cljs.core.get.call(null,inst_22941,new cljs.core.Keyword(null,"user","user",1532431356));var inst_22943 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/success/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_22942));var inst_22944 = ajax.core.GET.call(null,inst_22943);var state_22956__$1 = state_22956;var statearr_22960_22973 = state_22956__$1;(statearr_22960_22973[(2)] = inst_22944);
(statearr_22960_22973[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22957 === (2)))
{var inst_22935 = (state_22956[(2)]);var inst_22936 = Math.random.call(null);var inst_22937 = (inst_22936 > 0.1);var inst_22938 = (function (){var result = inst_22937;return ((function (result,inst_22935,inst_22936,inst_22937,state_val_22957,c__6480__auto__,___$1,map__22923,map__22923__$1,next_state){
return (function (p1__22871_SHARP_){return cljs.core.assoc_in.call(null,p1__22871_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"result","result",1415092211)], null),result);
});
;})(result,inst_22935,inst_22936,inst_22937,state_val_22957,c__6480__auto__,___$1,map__22923,map__22923__$1,next_state))
})();var inst_22939 = om.core.transact_BANG_.call(null,self__.root,inst_22938);var state_22956__$1 = (function (){var statearr_22961 = state_22956;(statearr_22961[(8)] = inst_22939);
(statearr_22961[(9)] = inst_22935);
return statearr_22961;
})();if(cljs.core.truth_(inst_22937))
{var statearr_22962_22974 = state_22956__$1;(statearr_22962_22974[(1)] = (3));
} else
{var statearr_22963_22975 = state_22956__$1;(statearr_22963_22975[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_22957 === (1)))
{var inst_22927 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/smallfact");var inst_22928 = [new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_22929 = (function (){return ((function (inst_22927,inst_22928,state_val_22957,c__6480__auto__,___$1,map__22923,map__22923__$1,next_state){
return (function (result){return om.core.transact_BANG_.call(null,self__.root,((function (inst_22927,inst_22928,state_val_22957,c__6480__auto__,___$1,map__22923,map__22923__$1,next_state){
return (function (p1__22870_SHARP_){return cljs.core.assoc.call(null,p1__22870_SHARP_,new cljs.core.Keyword(null,"smallfact","smallfact",1255699368),result);
});})(inst_22927,inst_22928,state_val_22957,c__6480__auto__,___$1,map__22923,map__22923__$1,next_state))
);
});
;})(inst_22927,inst_22928,state_val_22957,c__6480__auto__,___$1,map__22923,map__22923__$1,next_state))
})();var inst_22930 = [inst_22929];var inst_22931 = cljs.core.PersistentHashMap.fromArrays(inst_22928,inst_22930);var inst_22932 = ajax.core.GET.call(null,inst_22927,inst_22931);var inst_22933 = cljs.core.async.timeout.call(null,(2000));var state_22956__$1 = (function (){var statearr_22964 = state_22956;(statearr_22964[(10)] = inst_22932);
return statearr_22964;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22956__$1,(2),inst_22933);
} else
{return null;
}
}
}
}
}
});})(c__6480__auto__,___$1,map__22923,map__22923__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__22923,map__22923__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_22968 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_22968[(0)] = state_machine__6466__auto__);
(statearr_22968[(1)] = (1));
return statearr_22968;
});
var state_machine__6466__auto____1 = (function (state_22956){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_22956);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e22969){if((e22969 instanceof Object))
{var ex__6469__auto__ = e22969;var statearr_22970_22976 = state_22956;(statearr_22970_22976[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22956);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e22969;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__22977 = state_22956;
state_22956 = G__22977;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_22956){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_22956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__22923,map__22923__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_22971 = f__6481__auto__.call(null);(statearr_22971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_22971;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__22923,map__22923__$1,next_state))
);
return c__6480__auto__;
});})(map__22923,map__22923__$1,next_state))
;
power_app.core.t22924.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22923,map__22923__$1,next_state){
return (function (_22926){var self__ = this;
var _22926__$1 = this;return self__.meta22925;
});})(map__22923,map__22923__$1,next_state))
;
power_app.core.t22924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22923,map__22923__$1,next_state){
return (function (_22926,meta22925__$1){var self__ = this;
var _22926__$1 = this;return (new power_app.core.t22924(self__.next_state,self__.map__22923,self__.p__22873,self__.owner,self__.root,self__.explain_assignment_component,meta22925__$1));
});})(map__22923,map__22923__$1,next_state))
;
power_app.core.__GT_t22924 = ((function (map__22923,map__22923__$1,next_state){
return (function __GT_t22924(next_state__$1,map__22923__$2,p__22873__$1,owner__$1,root__$1,explain_assignment_component__$1,meta22925){return (new power_app.core.t22924(next_state__$1,map__22923__$2,p__22873__$1,owner__$1,root__$1,explain_assignment_component__$1,meta22925));
});})(map__22923,map__22923__$1,next_state))
;
}
return (new power_app.core.t22924(next_state,map__22923__$1,p__22873,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__22978,owner){var map__22979 = p__22978;var map__22979__$1 = ((cljs.core.seq_QMARK_.call(null,map__22979))?cljs.core.apply.call(null,cljs.core.hash_map,map__22979):map__22979);var root = map__22979__$1;var state = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var user = cljs.core.get.call(null,map__22979__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(typeof power_app.core.t22980 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t22980 = (function (user,state,root,map__22979,owner,p__22978,meta22981){
this.user = user;
this.state = state;
this.root = root;
this.map__22979 = map__22979;
this.owner = owner;
this.p__22978 = p__22978;
this.meta22981 = meta22981;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t22980.cljs$lang$type = true;
power_app.core.t22980.cljs$lang$ctorStr = "power-app.core/t22980";
power_app.core.t22980.cljs$lang$ctorPrWriter = ((function (map__22979,map__22979__$1,root,state,user){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t22980");
});})(map__22979,map__22979__$1,root,state,user))
;
power_app.core.t22980.prototype.om$core$IRender$ = true;
power_app.core.t22980.prototype.om$core$IRender$render$arity$1 = ((function (map__22979,map__22979__$1,root,state,user){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Power-app!"),((cljs.core.not.call(null,self__.user))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))));
});})(map__22979,map__22979__$1,root,state,user))
;
power_app.core.t22980.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__22979,map__22979__$1,root,state,user){
return (function (_22982){var self__ = this;
var _22982__$1 = this;return self__.meta22981;
});})(map__22979,map__22979__$1,root,state,user))
;
power_app.core.t22980.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__22979,map__22979__$1,root,state,user){
return (function (_22982,meta22981__$1){var self__ = this;
var _22982__$1 = this;return (new power_app.core.t22980(self__.user,self__.state,self__.root,self__.map__22979,self__.owner,self__.p__22978,meta22981__$1));
});})(map__22979,map__22979__$1,root,state,user))
;
power_app.core.__GT_t22980 = ((function (map__22979,map__22979__$1,root,state,user){
return (function __GT_t22980(user__$1,state__$1,root__$1,map__22979__$2,owner__$1,p__22978__$1,meta22981){return (new power_app.core.t22980(user__$1,state__$1,root__$1,map__22979__$2,owner__$1,p__22978__$1,meta22981));
});})(map__22979,map__22979__$1,root,state,user))
;
}
return (new power_app.core.t22980(user,state,root,map__22979__$1,owner,p__22978,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map