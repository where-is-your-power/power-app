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
power_app.core.error_handler = (function error_handler(p__10763){var map__10765 = p__10763;var map__10765__$1 = ((cljs.core.seq_QMARK_.call(null,map__10765))?cljs.core.apply.call(null,cljs.core.hash_map,map__10765):map__10765);var status_text = cljs.core.get.call(null,map__10765__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__10765__$1,new cljs.core.Keyword(null,"status","status",-1997798413));return console.log(("something bad happened: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)));
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
power_app.core.calculate_duration = (function calculate_duration(ms){var minutes = Math.floor.call(null,(ms / ((1000) * (60))));var seconds = Math.floor.call(null,((ms - ((minutes * (1000)) * (60))) / (1000)));var milli_seconds = ((ms - ((minutes * (1000)) * (60))) - (seconds * (1000)));return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [minutes,seconds,milli_seconds], null);
});
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__10766_SHARP_){return cljs.core.assoc.call(null,p1__10766_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t10770 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t10770 = (function (opts,owner,root,login_component,meta10771){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta10771 = meta10771;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t10770.cljs$lang$type = true;
power_app.core.t10770.cljs$lang$ctorStr = "power-app.core/t10770";
power_app.core.t10770.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t10770");
});
power_app.core.t10770.prototype.om$core$IRenderState$ = true;
power_app.core.t10770.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.legend(null,"Login"),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"value": "Marieke", "placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return power_app.core.login.call(null,name);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t10770.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10772){var self__ = this;
var _10772__$1 = this;return self__.meta10771;
});
power_app.core.t10770.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10772,meta10771__$1){var self__ = this;
var _10772__$1 = this;return (new power_app.core.t10770(self__.opts,self__.owner,self__.root,self__.login_component,meta10771__$1));
});
power_app.core.__GT_t10770 = (function __GT_t10770(opts__$1,owner__$1,root__$1,login_component__$1,meta10771){return (new power_app.core.t10770(opts__$1,owner__$1,root__$1,login_component__$1,meta10771));
});
}
return (new power_app.core.t10770(opts,owner,root,login_component,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__10774){var map__10779 = p__10774;var map__10779__$1 = ((cljs.core.seq_QMARK_.call(null,map__10779))?cljs.core.apply.call(null,cljs.core.hash_map,map__10779):map__10779);var next_state = cljs.core.get.call(null,map__10779__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t10780 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t10780 = (function (next_state,map__10779,p__10774,owner,root,score_component,meta10781){
this.next_state = next_state;
this.map__10779 = map__10779;
this.p__10774 = p__10774;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta10781 = meta10781;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t10780.cljs$lang$type = true;
power_app.core.t10780.cljs$lang$ctorStr = "power-app.core/t10780";
power_app.core.t10780.cljs$lang$ctorPrWriter = ((function (map__10779,map__10779__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t10780");
});})(map__10779,map__10779__$1,next_state))
;
power_app.core.t10780.prototype.om$core$IRenderState$ = true;
power_app.core.t10780.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10779,map__10779__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__10779,map__10779__$1,next_state){
return (function (e){e.preventDefault();
console.log("HIERRR");
power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__10779,map__10779__$1,next_state){
return (function (p1__10773_SHARP_){return cljs.core.assoc.call(null,p1__10773_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__10779,map__10779__$1,next_state))
);
});})(___$2,map__10779,map__10779__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))));
});})(map__10779,map__10779__$1,next_state))
;
power_app.core.t10780.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10779,map__10779__$1,next_state){
return (function (_10782){var self__ = this;
var _10782__$1 = this;return self__.meta10781;
});})(map__10779,map__10779__$1,next_state))
;
power_app.core.t10780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10779,map__10779__$1,next_state){
return (function (_10782,meta10781__$1){var self__ = this;
var _10782__$1 = this;return (new power_app.core.t10780(self__.next_state,self__.map__10779,self__.p__10774,self__.owner,self__.root,self__.score_component,meta10781__$1));
});})(map__10779,map__10779__$1,next_state))
;
power_app.core.__GT_t10780 = ((function (map__10779,map__10779__$1,next_state){
return (function __GT_t10780(next_state__$1,map__10779__$2,p__10774__$1,owner__$1,root__$1,score_component__$1,meta10781){return (new power_app.core.t10780(next_state__$1,map__10779__$2,p__10774__$1,owner__$1,root__$1,score_component__$1,meta10781));
});})(map__10779,map__10779__$1,next_state))
;
}
return (new power_app.core.t10780(next_state,map__10779__$1,p__10774,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__10785){var map__10812 = p__10785;var map__10812__$1 = ((cljs.core.seq_QMARK_.call(null,map__10812))?cljs.core.apply.call(null,cljs.core.hash_map,map__10812):map__10812);var next_state = cljs.core.get.call(null,map__10812__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t10813 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t10813 = (function (next_state,map__10812,p__10785,owner,root,current_assignment_component,meta10814){
this.next_state = next_state;
this.map__10812 = map__10812;
this.p__10785 = p__10785;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta10814 = meta10814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t10813.cljs$lang$type = true;
power_app.core.t10813.cljs$lang$ctorStr = "power-app.core/t10813";
power_app.core.t10813.cljs$lang$ctorPrWriter = ((function (map__10812,map__10812__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t10813");
});})(map__10812,map__10812__$1,next_state))
;
power_app.core.t10813.prototype.om$core$IRenderState$ = true;
power_app.core.t10813.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10812,map__10812__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1)))))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__10812,map__10812__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__10812,map__10812__$1,next_state){
return (function (p1__10783_SHARP_){return cljs.core.assoc.call(null,p1__10783_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__10812,map__10812__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__10812,map__10812__$1,next_state){
return (function (p1__10784_SHARP_){return cljs.core.assoc_in.call(null,p1__10784_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"end","end",-268185958)], null),(new Date()));
});})(___$2,map__10812,map__10812__$1,next_state))
);
});})(___$2,map__10812,map__10812__$1,next_state))
, "className": "btn btn-primary"},(function (){var vec__10816 = power_app.core.calculate_duration.call(null,(cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null)) - (new Date()).getTime()));var minutes = cljs.core.nth.call(null,vec__10816,(0),null);var seconds = cljs.core.nth.call(null,vec__10816,(1),null);var ___$3 = cljs.core.nth.call(null,vec__10816,(2),null);return ("Klaar ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,minutes))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,seconds))+")");
})())))));
});})(map__10812,map__10812__$1,next_state))
;
power_app.core.t10813.prototype.om$core$IWillMount$ = true;
power_app.core.t10813.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__10812,map__10812__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__10812,map__10812__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__10812,map__10812__$1,next_state){
return (function (state_10826){var state_val_10827 = (state_10826[(1)]);if((state_val_10827 === (4)))
{var inst_10820 = (state_10826[(2)]);var inst_10821 = om.core.refresh_BANG_.call(null,self__.owner);var state_10826__$1 = (function (){var statearr_10828 = state_10826;(statearr_10828[(7)] = inst_10820);
(statearr_10828[(8)] = inst_10821);
return statearr_10828;
})();var statearr_10829_10838 = state_10826__$1;(statearr_10829_10838[(2)] = null);
(statearr_10829_10838[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10827 === (3)))
{var inst_10824 = (state_10826[(2)]);var state_10826__$1 = state_10826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10826__$1,inst_10824);
} else
{if((state_val_10827 === (2)))
{var inst_10818 = cljs.core.async.timeout.call(null,(500));var state_10826__$1 = state_10826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10826__$1,(4),inst_10818);
} else
{if((state_val_10827 === (1)))
{var state_10826__$1 = state_10826;var statearr_10830_10839 = state_10826__$1;(statearr_10830_10839[(2)] = null);
(statearr_10830_10839[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6480__auto__,___$1,map__10812,map__10812__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__10812,map__10812__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_10834 = [null,null,null,null,null,null,null,null,null];(statearr_10834[(0)] = state_machine__6466__auto__);
(statearr_10834[(1)] = (1));
return statearr_10834;
});
var state_machine__6466__auto____1 = (function (state_10826){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_10826);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e10835){if((e10835 instanceof Object))
{var ex__6469__auto__ = e10835;var statearr_10836_10840 = state_10826;(statearr_10836_10840[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10826);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10835;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10841 = state_10826;
state_10826 = G__10841;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_10826){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_10826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__10812,map__10812__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_10837 = f__6481__auto__.call(null);(statearr_10837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_10837;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__10812,map__10812__$1,next_state))
);
return c__6480__auto__;
});})(map__10812,map__10812__$1,next_state))
;
power_app.core.t10813.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10812,map__10812__$1,next_state){
return (function (_10815){var self__ = this;
var _10815__$1 = this;return self__.meta10814;
});})(map__10812,map__10812__$1,next_state))
;
power_app.core.t10813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10812,map__10812__$1,next_state){
return (function (_10815,meta10814__$1){var self__ = this;
var _10815__$1 = this;return (new power_app.core.t10813(self__.next_state,self__.map__10812,self__.p__10785,self__.owner,self__.root,self__.current_assignment_component,meta10814__$1));
});})(map__10812,map__10812__$1,next_state))
;
power_app.core.__GT_t10813 = ((function (map__10812,map__10812__$1,next_state){
return (function __GT_t10813(next_state__$1,map__10812__$2,p__10785__$1,owner__$1,root__$1,current_assignment_component__$1,meta10814){return (new power_app.core.t10813(next_state__$1,map__10812__$2,p__10785__$1,owner__$1,root__$1,current_assignment_component__$1,meta10814));
});})(map__10812,map__10812__$1,next_state))
;
}
return (new power_app.core.t10813(next_state,map__10812__$1,p__10785,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__10848){var map__10853 = p__10848;var map__10853__$1 = ((cljs.core.seq_QMARK_.call(null,map__10853))?cljs.core.apply.call(null,cljs.core.hash_map,map__10853):map__10853);var next_state = cljs.core.get.call(null,map__10853__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t10854 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t10854 = (function (next_state,map__10853,p__10848,owner,root,new_assignment_component,meta10855){
this.next_state = next_state;
this.map__10853 = map__10853;
this.p__10848 = p__10848;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta10855 = meta10855;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t10854.cljs$lang$type = true;
power_app.core.t10854.cljs$lang$ctorStr = "power-app.core/t10854";
power_app.core.t10854.cljs$lang$ctorPrWriter = ((function (map__10853,map__10853__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t10854");
});})(map__10853,map__10853__$1,next_state))
;
power_app.core.t10854.prototype.om$core$IRenderState$ = true;
power_app.core.t10854.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10853,map__10853__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var points = (new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1));var open_questions = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"answer","answer",-742633163)),cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"questions","questions",1226225380)], null)));var question = cljs.core.first.call(null,open_questions);var last_QMARK_ = (cljs.core.count.call(null,open_questions) < (2));return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(points)+" selectie"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,true,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state){
return (function (p1__10842_SHARP_){return cljs.core.assoc.call(null,p1__10842_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),true);
});})(points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state){
return (function (p1__10843_SHARP_){return cljs.core.assoc.call(null,p1__10843_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state){
return (function (p1__10844_SHARP_){return cljs.core.assoc_in.call(null,p1__10844_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__10844_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,false,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state){
return (function (p1__10845_SHARP_){return cljs.core.assoc.call(null,p1__10845_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),false);
});})(points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state){
return (function (p1__10846_SHARP_){return cljs.core.assoc.call(null,p1__10846_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state){
return (function (p1__10847_SHARP_){return cljs.core.assoc_in.call(null,p1__10847_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__10847_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__10853,map__10853__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__10853,map__10853__$1,next_state))
;
power_app.core.t10854.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10853,map__10853__$1,next_state){
return (function (_10856){var self__ = this;
var _10856__$1 = this;return self__.meta10855;
});})(map__10853,map__10853__$1,next_state))
;
power_app.core.t10854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10853,map__10853__$1,next_state){
return (function (_10856,meta10855__$1){var self__ = this;
var _10856__$1 = this;return (new power_app.core.t10854(self__.next_state,self__.map__10853,self__.p__10848,self__.owner,self__.root,self__.new_assignment_component,meta10855__$1));
});})(map__10853,map__10853__$1,next_state))
;
power_app.core.__GT_t10854 = ((function (map__10853,map__10853__$1,next_state){
return (function __GT_t10854(next_state__$1,map__10853__$2,p__10848__$1,owner__$1,root__$1,new_assignment_component__$1,meta10855){return (new power_app.core.t10854(next_state__$1,map__10853__$2,p__10848__$1,owner__$1,root__$1,new_assignment_component__$1,meta10855));
});})(map__10853,map__10853__$1,next_state))
;
}
return (new power_app.core.t10854(next_state,map__10853__$1,p__10848,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__10858){var map__10863 = p__10858;var map__10863__$1 = ((cljs.core.seq_QMARK_.call(null,map__10863))?cljs.core.apply.call(null,cljs.core.hash_map,map__10863):map__10863);var next_state = cljs.core.get.call(null,map__10863__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t10864 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t10864 = (function (next_state,map__10863,p__10858,owner,root,explain_assignment_component,meta10865){
this.next_state = next_state;
this.map__10863 = map__10863;
this.p__10858 = p__10858;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta10865 = meta10865;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t10864.cljs$lang$type = true;
power_app.core.t10864.cljs$lang$ctorStr = "power-app.core/t10864";
power_app.core.t10864.cljs$lang$ctorPrWriter = ((function (map__10863,map__10863__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t10864");
});})(map__10863,map__10863__$1,next_state))
;
power_app.core.t10864.prototype.om$core$IRenderState$ = true;
power_app.core.t10864.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__10863,map__10863__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Uitleg opdracht "+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1)))))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.h1({"style": {"font-size": "175%"}},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null))),React.DOM.p(null,""))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__10863,map__10863__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__10863,map__10863__$1,next_state){
return (function (p1__10857_SHARP_){return cljs.core.assoc.call(null,p1__10857_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__10863,map__10863__$1,next_state))
);
});})(___$2,map__10863,map__10863__$1,next_state))
, "className": "btn btn-primary"},"Nieuwe opdracht")))));
});})(map__10863,map__10863__$1,next_state))
;
power_app.core.t10864.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10863,map__10863__$1,next_state){
return (function (_10866){var self__ = this;
var _10866__$1 = this;return self__.meta10865;
});})(map__10863,map__10863__$1,next_state))
;
power_app.core.t10864.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10863,map__10863__$1,next_state){
return (function (_10866,meta10865__$1){var self__ = this;
var _10866__$1 = this;return (new power_app.core.t10864(self__.next_state,self__.map__10863,self__.p__10858,self__.owner,self__.root,self__.explain_assignment_component,meta10865__$1));
});})(map__10863,map__10863__$1,next_state))
;
power_app.core.__GT_t10864 = ((function (map__10863,map__10863__$1,next_state){
return (function __GT_t10864(next_state__$1,map__10863__$2,p__10858__$1,owner__$1,root__$1,explain_assignment_component__$1,meta10865){return (new power_app.core.t10864(next_state__$1,map__10863__$2,p__10858__$1,owner__$1,root__$1,explain_assignment_component__$1,meta10865));
});})(map__10863,map__10863__$1,next_state))
;
}
return (new power_app.core.t10864(next_state,map__10863__$1,p__10858,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__10867,owner){var map__10868 = p__10867;var map__10868__$1 = ((cljs.core.seq_QMARK_.call(null,map__10868))?cljs.core.apply.call(null,cljs.core.hash_map,map__10868):map__10868);var root = map__10868__$1;var state = cljs.core.get.call(null,map__10868__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var user = cljs.core.get.call(null,map__10868__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(typeof power_app.core.t10869 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t10869 = (function (user,state,root,map__10868,owner,p__10867,meta10870){
this.user = user;
this.state = state;
this.root = root;
this.map__10868 = map__10868;
this.owner = owner;
this.p__10867 = p__10867;
this.meta10870 = meta10870;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t10869.cljs$lang$type = true;
power_app.core.t10869.cljs$lang$ctorStr = "power-app.core/t10869";
power_app.core.t10869.cljs$lang$ctorPrWriter = ((function (map__10868,map__10868__$1,root,state,user){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t10869");
});})(map__10868,map__10868__$1,root,state,user))
;
power_app.core.t10869.prototype.om$core$IRender$ = true;
power_app.core.t10869.prototype.om$core$IRender$render$arity$1 = ((function (map__10868,map__10868__$1,root,state,user){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Power-app!"),((cljs.core.not.call(null,self__.user))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.hr(null),cljs.core.pr_str.call(null,self__.root))));
});})(map__10868,map__10868__$1,root,state,user))
;
power_app.core.t10869.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__10868,map__10868__$1,root,state,user){
return (function (_10871){var self__ = this;
var _10871__$1 = this;return self__.meta10870;
});})(map__10868,map__10868__$1,root,state,user))
;
power_app.core.t10869.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__10868,map__10868__$1,root,state,user){
return (function (_10871,meta10870__$1){var self__ = this;
var _10871__$1 = this;return (new power_app.core.t10869(self__.user,self__.state,self__.root,self__.map__10868,self__.owner,self__.p__10867,meta10870__$1));
});})(map__10868,map__10868__$1,root,state,user))
;
power_app.core.__GT_t10869 = ((function (map__10868,map__10868__$1,root,state,user){
return (function __GT_t10869(user__$1,state__$1,root__$1,map__10868__$2,owner__$1,p__10867__$1,meta10870){return (new power_app.core.t10869(user__$1,state__$1,root__$1,map__10868__$2,owner__$1,p__10867__$1,meta10870));
});})(map__10868,map__10868__$1,root,state,user))
;
}
return (new power_app.core.t10869(user,state,root,map__10868__$1,owner,p__10867,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map