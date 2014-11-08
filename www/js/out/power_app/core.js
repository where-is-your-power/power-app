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
power_app.core.error_handler = (function error_handler(p__20909){var map__20911 = p__20909;var map__20911__$1 = ((cljs.core.seq_QMARK_.call(null,map__20911))?cljs.core.apply.call(null,cljs.core.hash_map,map__20911):map__20911);var status_text = cljs.core.get.call(null,map__20911__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__20911__$1,new cljs.core.Keyword(null,"status","status",-1997798413));return console.log(("something bad happened: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)));
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
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__20912_SHARP_){return cljs.core.assoc.call(null,p1__20912_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t20916 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t20916 = (function (opts,owner,root,login_component,meta20917){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta20917 = meta20917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t20916.cljs$lang$type = true;
power_app.core.t20916.cljs$lang$ctorStr = "power-app.core/t20916";
power_app.core.t20916.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t20916");
});
power_app.core.t20916.prototype.om$core$IRenderState$ = true;
power_app.core.t20916.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"value": "Marieke", "placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return power_app.core.login.call(null,name);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t20916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_20918){var self__ = this;
var _20918__$1 = this;return self__.meta20917;
});
power_app.core.t20916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_20918,meta20917__$1){var self__ = this;
var _20918__$1 = this;return (new power_app.core.t20916(self__.opts,self__.owner,self__.root,self__.login_component,meta20917__$1));
});
power_app.core.__GT_t20916 = (function __GT_t20916(opts__$1,owner__$1,root__$1,login_component__$1,meta20917){return (new power_app.core.t20916(opts__$1,owner__$1,root__$1,login_component__$1,meta20917));
});
}
return (new power_app.core.t20916(opts,owner,root,login_component,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__20920){var map__20925 = p__20920;var map__20925__$1 = ((cljs.core.seq_QMARK_.call(null,map__20925))?cljs.core.apply.call(null,cljs.core.hash_map,map__20925):map__20925);var next_state = cljs.core.get.call(null,map__20925__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t20926 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t20926 = (function (next_state,map__20925,p__20920,owner,root,score_component,meta20927){
this.next_state = next_state;
this.map__20925 = map__20925;
this.p__20920 = p__20920;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta20927 = meta20927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t20926.cljs$lang$type = true;
power_app.core.t20926.cljs$lang$ctorStr = "power-app.core/t20926";
power_app.core.t20926.cljs$lang$ctorPrWriter = ((function (map__20925,map__20925__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t20926");
});})(map__20925,map__20925__$1,next_state))
;
power_app.core.t20926.prototype.om$core$IRenderState$ = true;
power_app.core.t20926.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20925,map__20925__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__20925,map__20925__$1,next_state){
return (function (e){e.preventDefault();
console.log("HIERRR");
power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__20925,map__20925__$1,next_state){
return (function (p1__20919_SHARP_){return cljs.core.assoc.call(null,p1__20919_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__20925,map__20925__$1,next_state))
);
});})(___$2,map__20925,map__20925__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))));
});})(map__20925,map__20925__$1,next_state))
;
power_app.core.t20926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20925,map__20925__$1,next_state){
return (function (_20928){var self__ = this;
var _20928__$1 = this;return self__.meta20927;
});})(map__20925,map__20925__$1,next_state))
;
power_app.core.t20926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20925,map__20925__$1,next_state){
return (function (_20928,meta20927__$1){var self__ = this;
var _20928__$1 = this;return (new power_app.core.t20926(self__.next_state,self__.map__20925,self__.p__20920,self__.owner,self__.root,self__.score_component,meta20927__$1));
});})(map__20925,map__20925__$1,next_state))
;
power_app.core.__GT_t20926 = ((function (map__20925,map__20925__$1,next_state){
return (function __GT_t20926(next_state__$1,map__20925__$2,p__20920__$1,owner__$1,root__$1,score_component__$1,meta20927){return (new power_app.core.t20926(next_state__$1,map__20925__$2,p__20920__$1,owner__$1,root__$1,score_component__$1,meta20927));
});})(map__20925,map__20925__$1,next_state))
;
}
return (new power_app.core.t20926(next_state,map__20925__$1,p__20920,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__20931){var map__20958 = p__20931;var map__20958__$1 = ((cljs.core.seq_QMARK_.call(null,map__20958))?cljs.core.apply.call(null,cljs.core.hash_map,map__20958):map__20958);var next_state = cljs.core.get.call(null,map__20958__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t20959 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t20959 = (function (next_state,map__20958,p__20931,owner,root,current_assignment_component,meta20960){
this.next_state = next_state;
this.map__20958 = map__20958;
this.p__20931 = p__20931;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta20960 = meta20960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t20959.cljs$lang$type = true;
power_app.core.t20959.cljs$lang$ctorStr = "power-app.core/t20959";
power_app.core.t20959.cljs$lang$ctorPrWriter = ((function (map__20958,map__20958__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t20959");
});})(map__20958,map__20958__$1,next_state))
;
power_app.core.t20959.prototype.om$core$IRenderState$ = true;
power_app.core.t20959.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20958,map__20958__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__20958,map__20958__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__20958,map__20958__$1,next_state){
return (function (p1__20929_SHARP_){return cljs.core.assoc.call(null,p1__20929_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__20958,map__20958__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__20958,map__20958__$1,next_state){
return (function (p1__20930_SHARP_){return cljs.core.assoc_in.call(null,p1__20930_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"end","end",-268185958)], null),(new Date()));
});})(___$2,map__20958,map__20958__$1,next_state))
);
});})(___$2,map__20958,map__20958__$1,next_state))
, "className": "btn btn-primary"},(function (){var vec__20962 = power_app.core.calculate_duration.call(null,(cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null)) - (new Date()).getTime()));var minutes = cljs.core.nth.call(null,vec__20962,(0),null);var seconds = cljs.core.nth.call(null,vec__20962,(1),null);var ___$3 = cljs.core.nth.call(null,vec__20962,(2),null);return ("Klaar ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,minutes))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,seconds))+")");
})())))));
});})(map__20958,map__20958__$1,next_state))
;
power_app.core.t20959.prototype.om$core$IWillMount$ = true;
power_app.core.t20959.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__20958,map__20958__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__20958,map__20958__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__20958,map__20958__$1,next_state){
return (function (state_20972){var state_val_20973 = (state_20972[(1)]);if((state_val_20973 === (4)))
{var inst_20966 = (state_20972[(2)]);var inst_20967 = om.core.refresh_BANG_.call(null,self__.owner);var state_20972__$1 = (function (){var statearr_20974 = state_20972;(statearr_20974[(7)] = inst_20966);
(statearr_20974[(8)] = inst_20967);
return statearr_20974;
})();var statearr_20975_20984 = state_20972__$1;(statearr_20975_20984[(2)] = null);
(statearr_20975_20984[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20973 === (3)))
{var inst_20970 = (state_20972[(2)]);var state_20972__$1 = state_20972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20972__$1,inst_20970);
} else
{if((state_val_20973 === (2)))
{var inst_20964 = cljs.core.async.timeout.call(null,(500));var state_20972__$1 = state_20972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20972__$1,(4),inst_20964);
} else
{if((state_val_20973 === (1)))
{var state_20972__$1 = state_20972;var statearr_20976_20985 = state_20972__$1;(statearr_20976_20985[(2)] = null);
(statearr_20976_20985[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6480__auto__,___$1,map__20958,map__20958__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__20958,map__20958__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_20980 = [null,null,null,null,null,null,null,null,null];(statearr_20980[(0)] = state_machine__6466__auto__);
(statearr_20980[(1)] = (1));
return statearr_20980;
});
var state_machine__6466__auto____1 = (function (state_20972){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_20972);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e20981){if((e20981 instanceof Object))
{var ex__6469__auto__ = e20981;var statearr_20982_20986 = state_20972;(statearr_20982_20986[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20981;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20987 = state_20972;
state_20972 = G__20987;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_20972){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_20972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__20958,map__20958__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_20983 = f__6481__auto__.call(null);(statearr_20983[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_20983;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__20958,map__20958__$1,next_state))
);
return c__6480__auto__;
});})(map__20958,map__20958__$1,next_state))
;
power_app.core.t20959.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20958,map__20958__$1,next_state){
return (function (_20961){var self__ = this;
var _20961__$1 = this;return self__.meta20960;
});})(map__20958,map__20958__$1,next_state))
;
power_app.core.t20959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20958,map__20958__$1,next_state){
return (function (_20961,meta20960__$1){var self__ = this;
var _20961__$1 = this;return (new power_app.core.t20959(self__.next_state,self__.map__20958,self__.p__20931,self__.owner,self__.root,self__.current_assignment_component,meta20960__$1));
});})(map__20958,map__20958__$1,next_state))
;
power_app.core.__GT_t20959 = ((function (map__20958,map__20958__$1,next_state){
return (function __GT_t20959(next_state__$1,map__20958__$2,p__20931__$1,owner__$1,root__$1,current_assignment_component__$1,meta20960){return (new power_app.core.t20959(next_state__$1,map__20958__$2,p__20931__$1,owner__$1,root__$1,current_assignment_component__$1,meta20960));
});})(map__20958,map__20958__$1,next_state))
;
}
return (new power_app.core.t20959(next_state,map__20958__$1,p__20931,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__20994){var map__20999 = p__20994;var map__20999__$1 = ((cljs.core.seq_QMARK_.call(null,map__20999))?cljs.core.apply.call(null,cljs.core.hash_map,map__20999):map__20999);var next_state = cljs.core.get.call(null,map__20999__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t21000 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21000 = (function (next_state,map__20999,p__20994,owner,root,new_assignment_component,meta21001){
this.next_state = next_state;
this.map__20999 = map__20999;
this.p__20994 = p__20994;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta21001 = meta21001;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21000.cljs$lang$type = true;
power_app.core.t21000.cljs$lang$ctorStr = "power-app.core/t21000";
power_app.core.t21000.cljs$lang$ctorPrWriter = ((function (map__20999,map__20999__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21000");
});})(map__20999,map__20999__$1,next_state))
;
power_app.core.t21000.prototype.om$core$IRenderState$ = true;
power_app.core.t21000.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__20999,map__20999__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var points = (new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1));var open_questions = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"answer","answer",-742633163)),cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"questions","questions",1226225380)], null)));var question = cljs.core.first.call(null,open_questions);var last_QMARK_ = (cljs.core.count.call(null,open_questions) < (2));return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht selectie"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,true,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state){
return (function (p1__20988_SHARP_){return cljs.core.assoc.call(null,p1__20988_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),true);
});})(points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state){
return (function (p1__20989_SHARP_){return cljs.core.assoc.call(null,p1__20989_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state){
return (function (p1__20990_SHARP_){return cljs.core.assoc_in.call(null,p1__20990_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__20990_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,false,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state){
return (function (p1__20991_SHARP_){return cljs.core.assoc.call(null,p1__20991_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),false);
});})(points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state){
return (function (p1__20992_SHARP_){return cljs.core.assoc.call(null,p1__20992_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state){
return (function (p1__20993_SHARP_){return cljs.core.assoc_in.call(null,p1__20993_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__20993_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__20999,map__20999__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__20999,map__20999__$1,next_state))
;
power_app.core.t21000.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20999,map__20999__$1,next_state){
return (function (_21002){var self__ = this;
var _21002__$1 = this;return self__.meta21001;
});})(map__20999,map__20999__$1,next_state))
;
power_app.core.t21000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20999,map__20999__$1,next_state){
return (function (_21002,meta21001__$1){var self__ = this;
var _21002__$1 = this;return (new power_app.core.t21000(self__.next_state,self__.map__20999,self__.p__20994,self__.owner,self__.root,self__.new_assignment_component,meta21001__$1));
});})(map__20999,map__20999__$1,next_state))
;
power_app.core.__GT_t21000 = ((function (map__20999,map__20999__$1,next_state){
return (function __GT_t21000(next_state__$1,map__20999__$2,p__20994__$1,owner__$1,root__$1,new_assignment_component__$1,meta21001){return (new power_app.core.t21000(next_state__$1,map__20999__$2,p__20994__$1,owner__$1,root__$1,new_assignment_component__$1,meta21001));
});})(map__20999,map__20999__$1,next_state))
;
}
return (new power_app.core.t21000(next_state,map__20999__$1,p__20994,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__21006){var map__21056 = p__21006;var map__21056__$1 = ((cljs.core.seq_QMARK_.call(null,map__21056))?cljs.core.apply.call(null,cljs.core.hash_map,map__21056):map__21056);var next_state = cljs.core.get.call(null,map__21056__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t21057 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21057 = (function (next_state,map__21056,p__21006,owner,root,explain_assignment_component,meta21058){
this.next_state = next_state;
this.map__21056 = map__21056;
this.p__21006 = p__21006;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta21058 = meta21058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21057.cljs$lang$type = true;
power_app.core.t21057.cljs$lang$ctorStr = "power-app.core/t21057";
power_app.core.t21057.cljs$lang$ctorPrWriter = ((function (map__21056,map__21056__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21057");
});})(map__21056,map__21056__$1,next_state))
;
power_app.core.t21057.prototype.om$core$IRenderState$ = true;
power_app.core.t21057.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__21056,map__21056__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Resultaat opdracht"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.h1({"style": {"font-size": "175%"}},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null))),React.DOM.p(null,(function (){var result = cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"result","result",1415092211)], null));if((result == null))
{return React.DOM.i({"style": {"font-size": "300%"}, "className": "fa fa-circle-o-notch fa-spin"});
} else
{if(cljs.core.truth_(result))
{return React.DOM.i({"style": {"font-size": "300%"}, "className": "fa fa-check"});
} else
{return React.DOM.i({"style": {"font-size": "300%"}, "className": "fa fa-remove"});
}
}
})()))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.p(null,new cljs.core.Keyword(null,"smallfact","smallfact",1255699368).cljs$core$IFn$_invoke$arity$1(self__.root)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__21056,map__21056__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__21056,map__21056__$1,next_state){
return (function (p1__21005_SHARP_){return cljs.core.assoc.call(null,p1__21005_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__21056,map__21056__$1,next_state))
);
});})(___$2,map__21056,map__21056__$1,next_state))
, "className": "btn btn-primary"},"OK")))));
});})(map__21056,map__21056__$1,next_state))
;
power_app.core.t21057.prototype.om$core$IWillMount$ = true;
power_app.core.t21057.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__21056,map__21056__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__21056,map__21056__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__21056,map__21056__$1,next_state){
return (function (state_21089){var state_val_21090 = (state_21089[(1)]);if((state_val_21090 === (5)))
{var inst_21084 = (state_21089[(2)]);var inst_21085 = cljs.core.deref.call(null,self__.root);var inst_21086 = cljs.core.get.call(null,inst_21085,new cljs.core.Keyword(null,"user","user",1532431356));var inst_21087 = power_app.core.login.call(null,inst_21086);var state_21089__$1 = (function (){var statearr_21091 = state_21089;(statearr_21091[(7)] = inst_21084);
return statearr_21091;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_21089__$1,inst_21087);
} else
{if((state_val_21090 === (4)))
{var inst_21079 = cljs.core.deref.call(null,self__.root);var inst_21080 = cljs.core.get.call(null,inst_21079,new cljs.core.Keyword(null,"user","user",1532431356));var inst_21081 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/fail/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21080));var inst_21082 = ajax.core.GET.call(null,inst_21081);var state_21089__$1 = state_21089;var statearr_21092_21105 = state_21089__$1;(statearr_21092_21105[(2)] = inst_21082);
(statearr_21092_21105[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21090 === (3)))
{var inst_21074 = cljs.core.deref.call(null,self__.root);var inst_21075 = cljs.core.get.call(null,inst_21074,new cljs.core.Keyword(null,"user","user",1532431356));var inst_21076 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/success/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_21075));var inst_21077 = ajax.core.GET.call(null,inst_21076);var state_21089__$1 = state_21089;var statearr_21093_21106 = state_21089__$1;(statearr_21093_21106[(2)] = inst_21077);
(statearr_21093_21106[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21090 === (2)))
{var inst_21068 = (state_21089[(2)]);var inst_21069 = Math.random.call(null);var inst_21070 = (inst_21069 > 0.1);var inst_21071 = (function (){var result = inst_21070;return ((function (result,inst_21068,inst_21069,inst_21070,state_val_21090,c__6480__auto__,___$1,map__21056,map__21056__$1,next_state){
return (function (p1__21004_SHARP_){return cljs.core.assoc_in.call(null,p1__21004_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"result","result",1415092211)], null),result);
});
;})(result,inst_21068,inst_21069,inst_21070,state_val_21090,c__6480__auto__,___$1,map__21056,map__21056__$1,next_state))
})();var inst_21072 = om.core.transact_BANG_.call(null,self__.root,inst_21071);var state_21089__$1 = (function (){var statearr_21094 = state_21089;(statearr_21094[(8)] = inst_21068);
(statearr_21094[(9)] = inst_21072);
return statearr_21094;
})();if(cljs.core.truth_(inst_21070))
{var statearr_21095_21107 = state_21089__$1;(statearr_21095_21107[(1)] = (3));
} else
{var statearr_21096_21108 = state_21089__$1;(statearr_21096_21108[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_21090 === (1)))
{var inst_21060 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/smallfact");var inst_21061 = [new cljs.core.Keyword(null,"handler","handler",-195596612)];var inst_21062 = (function (){return ((function (inst_21060,inst_21061,state_val_21090,c__6480__auto__,___$1,map__21056,map__21056__$1,next_state){
return (function (result){return om.core.transact_BANG_.call(null,self__.root,((function (inst_21060,inst_21061,state_val_21090,c__6480__auto__,___$1,map__21056,map__21056__$1,next_state){
return (function (p1__21003_SHARP_){return cljs.core.assoc.call(null,p1__21003_SHARP_,new cljs.core.Keyword(null,"smallfact","smallfact",1255699368),result);
});})(inst_21060,inst_21061,state_val_21090,c__6480__auto__,___$1,map__21056,map__21056__$1,next_state))
);
});
;})(inst_21060,inst_21061,state_val_21090,c__6480__auto__,___$1,map__21056,map__21056__$1,next_state))
})();var inst_21063 = [inst_21062];var inst_21064 = cljs.core.PersistentHashMap.fromArrays(inst_21061,inst_21063);var inst_21065 = ajax.core.GET.call(null,inst_21060,inst_21064);var inst_21066 = cljs.core.async.timeout.call(null,(2000));var state_21089__$1 = (function (){var statearr_21097 = state_21089;(statearr_21097[(10)] = inst_21065);
return statearr_21097;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_21089__$1,(2),inst_21066);
} else
{return null;
}
}
}
}
}
});})(c__6480__auto__,___$1,map__21056,map__21056__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__21056,map__21056__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_21101 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_21101[(0)] = state_machine__6466__auto__);
(statearr_21101[(1)] = (1));
return statearr_21101;
});
var state_machine__6466__auto____1 = (function (state_21089){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_21089);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e21102){if((e21102 instanceof Object))
{var ex__6469__auto__ = e21102;var statearr_21103_21109 = state_21089;(statearr_21103_21109[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_21089);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21102;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21110 = state_21089;
state_21089 = G__21110;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_21089){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_21089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__21056,map__21056__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_21104 = f__6481__auto__.call(null);(statearr_21104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_21104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__21056,map__21056__$1,next_state))
);
return c__6480__auto__;
});})(map__21056,map__21056__$1,next_state))
;
power_app.core.t21057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21056,map__21056__$1,next_state){
return (function (_21059){var self__ = this;
var _21059__$1 = this;return self__.meta21058;
});})(map__21056,map__21056__$1,next_state))
;
power_app.core.t21057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21056,map__21056__$1,next_state){
return (function (_21059,meta21058__$1){var self__ = this;
var _21059__$1 = this;return (new power_app.core.t21057(self__.next_state,self__.map__21056,self__.p__21006,self__.owner,self__.root,self__.explain_assignment_component,meta21058__$1));
});})(map__21056,map__21056__$1,next_state))
;
power_app.core.__GT_t21057 = ((function (map__21056,map__21056__$1,next_state){
return (function __GT_t21057(next_state__$1,map__21056__$2,p__21006__$1,owner__$1,root__$1,explain_assignment_component__$1,meta21058){return (new power_app.core.t21057(next_state__$1,map__21056__$2,p__21006__$1,owner__$1,root__$1,explain_assignment_component__$1,meta21058));
});})(map__21056,map__21056__$1,next_state))
;
}
return (new power_app.core.t21057(next_state,map__21056__$1,p__21006,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__21111,owner){var map__21112 = p__21111;var map__21112__$1 = ((cljs.core.seq_QMARK_.call(null,map__21112))?cljs.core.apply.call(null,cljs.core.hash_map,map__21112):map__21112);var root = map__21112__$1;var state = cljs.core.get.call(null,map__21112__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var user = cljs.core.get.call(null,map__21112__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(typeof power_app.core.t21113 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t21113 = (function (user,state,root,map__21112,owner,p__21111,meta21114){
this.user = user;
this.state = state;
this.root = root;
this.map__21112 = map__21112;
this.owner = owner;
this.p__21111 = p__21111;
this.meta21114 = meta21114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t21113.cljs$lang$type = true;
power_app.core.t21113.cljs$lang$ctorStr = "power-app.core/t21113";
power_app.core.t21113.cljs$lang$ctorPrWriter = ((function (map__21112,map__21112__$1,root,state,user){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t21113");
});})(map__21112,map__21112__$1,root,state,user))
;
power_app.core.t21113.prototype.om$core$IRender$ = true;
power_app.core.t21113.prototype.om$core$IRender$render$arity$1 = ((function (map__21112,map__21112__$1,root,state,user){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Power-app!"),((cljs.core.not.call(null,self__.user))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))));
});})(map__21112,map__21112__$1,root,state,user))
;
power_app.core.t21113.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__21112,map__21112__$1,root,state,user){
return (function (_21115){var self__ = this;
var _21115__$1 = this;return self__.meta21114;
});})(map__21112,map__21112__$1,root,state,user))
;
power_app.core.t21113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__21112,map__21112__$1,root,state,user){
return (function (_21115,meta21114__$1){var self__ = this;
var _21115__$1 = this;return (new power_app.core.t21113(self__.user,self__.state,self__.root,self__.map__21112,self__.owner,self__.p__21111,meta21114__$1));
});})(map__21112,map__21112__$1,root,state,user))
;
power_app.core.__GT_t21113 = ((function (map__21112,map__21112__$1,root,state,user){
return (function __GT_t21113(user__$1,state__$1,root__$1,map__21112__$2,owner__$1,p__21111__$1,meta21114){return (new power_app.core.t21113(user__$1,state__$1,root__$1,map__21112__$2,owner__$1,p__21111__$1,meta21114));
});})(map__21112,map__21112__$1,root,state,user))
;
}
return (new power_app.core.t21113(user,state,root,map__21112__$1,owner,p__21111,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map