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
power_app.core.error_handler = (function error_handler(p__18741){var map__18743 = p__18741;var map__18743__$1 = ((cljs.core.seq_QMARK_.call(null,map__18743))?cljs.core.apply.call(null,cljs.core.hash_map,map__18743):map__18743);var status_text = cljs.core.get.call(null,map__18743__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__18743__$1,new cljs.core.Keyword(null,"status","status",-1997798413));return console.log(("something bad happened: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)));
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
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__18744_SHARP_){return cljs.core.assoc.call(null,p1__18744_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t18748 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t18748 = (function (opts,owner,root,login_component,meta18749){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta18749 = meta18749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t18748.cljs$lang$type = true;
power_app.core.t18748.cljs$lang$ctorStr = "power-app.core/t18748";
power_app.core.t18748.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t18748");
});
power_app.core.t18748.prototype.om$core$IRenderState$ = true;
power_app.core.t18748.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.legend(null,"Login"),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"value": "Marieke", "placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return power_app.core.login.call(null,name);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t18748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18750){var self__ = this;
var _18750__$1 = this;return self__.meta18749;
});
power_app.core.t18748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18750,meta18749__$1){var self__ = this;
var _18750__$1 = this;return (new power_app.core.t18748(self__.opts,self__.owner,self__.root,self__.login_component,meta18749__$1));
});
power_app.core.__GT_t18748 = (function __GT_t18748(opts__$1,owner__$1,root__$1,login_component__$1,meta18749){return (new power_app.core.t18748(opts__$1,owner__$1,root__$1,login_component__$1,meta18749));
});
}
return (new power_app.core.t18748(opts,owner,root,login_component,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__18752){var map__18757 = p__18752;var map__18757__$1 = ((cljs.core.seq_QMARK_.call(null,map__18757))?cljs.core.apply.call(null,cljs.core.hash_map,map__18757):map__18757);var next_state = cljs.core.get.call(null,map__18757__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t18758 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t18758 = (function (next_state,map__18757,p__18752,owner,root,score_component,meta18759){
this.next_state = next_state;
this.map__18757 = map__18757;
this.p__18752 = p__18752;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta18759 = meta18759;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t18758.cljs$lang$type = true;
power_app.core.t18758.cljs$lang$ctorStr = "power-app.core/t18758";
power_app.core.t18758.cljs$lang$ctorPrWriter = ((function (map__18757,map__18757__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t18758");
});})(map__18757,map__18757__$1,next_state))
;
power_app.core.t18758.prototype.om$core$IRenderState$ = true;
power_app.core.t18758.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__18757,map__18757__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__18757,map__18757__$1,next_state){
return (function (e){e.preventDefault();
console.log("HIERRR");
power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__18757,map__18757__$1,next_state){
return (function (p1__18751_SHARP_){return cljs.core.assoc.call(null,p1__18751_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__18757,map__18757__$1,next_state))
);
});})(___$2,map__18757,map__18757__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))));
});})(map__18757,map__18757__$1,next_state))
;
power_app.core.t18758.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18757,map__18757__$1,next_state){
return (function (_18760){var self__ = this;
var _18760__$1 = this;return self__.meta18759;
});})(map__18757,map__18757__$1,next_state))
;
power_app.core.t18758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18757,map__18757__$1,next_state){
return (function (_18760,meta18759__$1){var self__ = this;
var _18760__$1 = this;return (new power_app.core.t18758(self__.next_state,self__.map__18757,self__.p__18752,self__.owner,self__.root,self__.score_component,meta18759__$1));
});})(map__18757,map__18757__$1,next_state))
;
power_app.core.__GT_t18758 = ((function (map__18757,map__18757__$1,next_state){
return (function __GT_t18758(next_state__$1,map__18757__$2,p__18752__$1,owner__$1,root__$1,score_component__$1,meta18759){return (new power_app.core.t18758(next_state__$1,map__18757__$2,p__18752__$1,owner__$1,root__$1,score_component__$1,meta18759));
});})(map__18757,map__18757__$1,next_state))
;
}
return (new power_app.core.t18758(next_state,map__18757__$1,p__18752,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__18763){var map__18790 = p__18763;var map__18790__$1 = ((cljs.core.seq_QMARK_.call(null,map__18790))?cljs.core.apply.call(null,cljs.core.hash_map,map__18790):map__18790);var next_state = cljs.core.get.call(null,map__18790__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t18791 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t18791 = (function (next_state,map__18790,p__18763,owner,root,current_assignment_component,meta18792){
this.next_state = next_state;
this.map__18790 = map__18790;
this.p__18763 = p__18763;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta18792 = meta18792;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t18791.cljs$lang$type = true;
power_app.core.t18791.cljs$lang$ctorStr = "power-app.core/t18791";
power_app.core.t18791.cljs$lang$ctorPrWriter = ((function (map__18790,map__18790__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t18791");
});})(map__18790,map__18790__$1,next_state))
;
power_app.core.t18791.prototype.om$core$IRenderState$ = true;
power_app.core.t18791.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__18790,map__18790__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"description","description",-1428560544)], null)))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__18790,map__18790__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__18790,map__18790__$1,next_state){
return (function (p1__18761_SHARP_){return cljs.core.assoc.call(null,p1__18761_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__18790,map__18790__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__18790,map__18790__$1,next_state){
return (function (p1__18762_SHARP_){return cljs.core.assoc_in.call(null,p1__18762_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"end","end",-268185958)], null),(new Date()));
});})(___$2,map__18790,map__18790__$1,next_state))
);
});})(___$2,map__18790,map__18790__$1,next_state))
, "className": "btn btn-primary"},(function (){var vec__18794 = power_app.core.calculate_duration.call(null,(cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null)) - (new Date()).getTime()));var minutes = cljs.core.nth.call(null,vec__18794,(0),null);var seconds = cljs.core.nth.call(null,vec__18794,(1),null);var ___$3 = cljs.core.nth.call(null,vec__18794,(2),null);return ("Klaar ("+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,minutes))+":"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.format_number.call(null,seconds))+")");
})())))));
});})(map__18790,map__18790__$1,next_state))
;
power_app.core.t18791.prototype.om$core$IWillMount$ = true;
power_app.core.t18791.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__18790,map__18790__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__18790,map__18790__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__18790,map__18790__$1,next_state){
return (function (state_18804){var state_val_18805 = (state_18804[(1)]);if((state_val_18805 === (4)))
{var inst_18798 = (state_18804[(2)]);var inst_18799 = om.core.refresh_BANG_.call(null,self__.owner);var state_18804__$1 = (function (){var statearr_18806 = state_18804;(statearr_18806[(7)] = inst_18798);
(statearr_18806[(8)] = inst_18799);
return statearr_18806;
})();var statearr_18807_18816 = state_18804__$1;(statearr_18807_18816[(2)] = null);
(statearr_18807_18816[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18805 === (3)))
{var inst_18802 = (state_18804[(2)]);var state_18804__$1 = state_18804;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18804__$1,inst_18802);
} else
{if((state_val_18805 === (2)))
{var inst_18796 = cljs.core.async.timeout.call(null,(500));var state_18804__$1 = state_18804;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18804__$1,(4),inst_18796);
} else
{if((state_val_18805 === (1)))
{var state_18804__$1 = state_18804;var statearr_18808_18817 = state_18804__$1;(statearr_18808_18817[(2)] = null);
(statearr_18808_18817[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
});})(c__6480__auto__,___$1,map__18790,map__18790__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__18790,map__18790__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_18812 = [null,null,null,null,null,null,null,null,null];(statearr_18812[(0)] = state_machine__6466__auto__);
(statearr_18812[(1)] = (1));
return statearr_18812;
});
var state_machine__6466__auto____1 = (function (state_18804){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_18804);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e18813){if((e18813 instanceof Object))
{var ex__6469__auto__ = e18813;var statearr_18814_18818 = state_18804;(statearr_18814_18818[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18804);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18813;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18819 = state_18804;
state_18804 = G__18819;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_18804){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_18804);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__18790,map__18790__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_18815 = f__6481__auto__.call(null);(statearr_18815[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_18815;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__18790,map__18790__$1,next_state))
);
return c__6480__auto__;
});})(map__18790,map__18790__$1,next_state))
;
power_app.core.t18791.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18790,map__18790__$1,next_state){
return (function (_18793){var self__ = this;
var _18793__$1 = this;return self__.meta18792;
});})(map__18790,map__18790__$1,next_state))
;
power_app.core.t18791.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18790,map__18790__$1,next_state){
return (function (_18793,meta18792__$1){var self__ = this;
var _18793__$1 = this;return (new power_app.core.t18791(self__.next_state,self__.map__18790,self__.p__18763,self__.owner,self__.root,self__.current_assignment_component,meta18792__$1));
});})(map__18790,map__18790__$1,next_state))
;
power_app.core.__GT_t18791 = ((function (map__18790,map__18790__$1,next_state){
return (function __GT_t18791(next_state__$1,map__18790__$2,p__18763__$1,owner__$1,root__$1,current_assignment_component__$1,meta18792){return (new power_app.core.t18791(next_state__$1,map__18790__$2,p__18763__$1,owner__$1,root__$1,current_assignment_component__$1,meta18792));
});})(map__18790,map__18790__$1,next_state))
;
}
return (new power_app.core.t18791(next_state,map__18790__$1,p__18763,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__18826){var map__18831 = p__18826;var map__18831__$1 = ((cljs.core.seq_QMARK_.call(null,map__18831))?cljs.core.apply.call(null,cljs.core.hash_map,map__18831):map__18831);var next_state = cljs.core.get.call(null,map__18831__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t18832 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t18832 = (function (next_state,map__18831,p__18826,owner,root,new_assignment_component,meta18833){
this.next_state = next_state;
this.map__18831 = map__18831;
this.p__18826 = p__18826;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta18833 = meta18833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t18832.cljs$lang$type = true;
power_app.core.t18832.cljs$lang$ctorStr = "power-app.core/t18832";
power_app.core.t18832.cljs$lang$ctorPrWriter = ((function (map__18831,map__18831__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t18832");
});})(map__18831,map__18831__$1,next_state))
;
power_app.core.t18832.prototype.om$core$IRenderState$ = true;
power_app.core.t18832.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__18831,map__18831__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var points = (new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1));var open_questions = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"answer","answer",-742633163)),cljs.core.get_in.call(null,self__.root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"questions","questions",1226225380)], null)));var question = cljs.core.first.call(null,open_questions);var last_QMARK_ = (cljs.core.count.call(null,open_questions) < (2));return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht selectie"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,true,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state){
return (function (p1__18820_SHARP_){return cljs.core.assoc.call(null,p1__18820_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),true);
});})(points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state){
return (function (p1__18821_SHARP_){return cljs.core.assoc.call(null,p1__18821_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state){
return (function (p1__18822_SHARP_){return cljs.core.assoc_in.call(null,p1__18822_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__18822_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state){
return (function (e){e.preventDefault();
if(cljs.core.not_EQ_.call(null,false,new cljs.core.Keyword(null,"requiredAnswer","requiredAnswer",-153658698).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,question))))
{return power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
} else
{om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state){
return (function (p1__18823_SHARP_){return cljs.core.assoc.call(null,p1__18823_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),false);
});})(points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state))
);
if(last_QMARK_)
{om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state){
return (function (p1__18824_SHARP_){return cljs.core.assoc.call(null,p1__18824_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state))
);
return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state){
return (function (p1__18825_SHARP_){return cljs.core.assoc_in.call(null,p1__18825_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"finish-before","finish-before",-1993042116)], null),((new Date()).getTime() + ((1000) * cljs.core.get_in.call(null,p1__18825_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"allowedTime","allowedTime",980733319)], null)))));
});})(points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state))
);
} else
{return null;
}
}
});})(points,open_questions,question,last_QMARK_,___$2,map__18831,map__18831__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__18831,map__18831__$1,next_state))
;
power_app.core.t18832.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18831,map__18831__$1,next_state){
return (function (_18834){var self__ = this;
var _18834__$1 = this;return self__.meta18833;
});})(map__18831,map__18831__$1,next_state))
;
power_app.core.t18832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18831,map__18831__$1,next_state){
return (function (_18834,meta18833__$1){var self__ = this;
var _18834__$1 = this;return (new power_app.core.t18832(self__.next_state,self__.map__18831,self__.p__18826,self__.owner,self__.root,self__.new_assignment_component,meta18833__$1));
});})(map__18831,map__18831__$1,next_state))
;
power_app.core.__GT_t18832 = ((function (map__18831,map__18831__$1,next_state){
return (function __GT_t18832(next_state__$1,map__18831__$2,p__18826__$1,owner__$1,root__$1,new_assignment_component__$1,meta18833){return (new power_app.core.t18832(next_state__$1,map__18831__$2,p__18826__$1,owner__$1,root__$1,new_assignment_component__$1,meta18833));
});})(map__18831,map__18831__$1,next_state))
;
}
return (new power_app.core.t18832(next_state,map__18831__$1,p__18826,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__18837){var map__18865 = p__18837;var map__18865__$1 = ((cljs.core.seq_QMARK_.call(null,map__18865))?cljs.core.apply.call(null,cljs.core.hash_map,map__18865):map__18865);var next_state = cljs.core.get.call(null,map__18865__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t18866 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t18866 = (function (next_state,map__18865,p__18837,owner,root,explain_assignment_component,meta18867){
this.next_state = next_state;
this.map__18865 = map__18865;
this.p__18837 = p__18837;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta18867 = meta18867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t18866.cljs$lang$type = true;
power_app.core.t18866.cljs$lang$ctorStr = "power-app.core/t18866";
power_app.core.t18866.cljs$lang$ctorPrWriter = ((function (map__18865,map__18865__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t18866");
});})(map__18865,map__18865__$1,next_state))
;
power_app.core.t18866.prototype.om$core$IRenderState$ = true;
power_app.core.t18866.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__18865,map__18865__$1,next_state){
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
})()))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__18865,map__18865__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__18865,map__18865__$1,next_state){
return (function (p1__18836_SHARP_){return cljs.core.assoc.call(null,p1__18836_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__18865,map__18865__$1,next_state))
);
});})(___$2,map__18865,map__18865__$1,next_state))
, "className": "btn btn-primary"},"Nieuwe opdracht")))));
});})(map__18865,map__18865__$1,next_state))
;
power_app.core.t18866.prototype.om$core$IWillMount$ = true;
power_app.core.t18866.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (map__18865,map__18865__$1,next_state){
return (function (_){var self__ = this;
var ___$1 = this;var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,___$1,map__18865,map__18865__$1,next_state){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,___$1,map__18865,map__18865__$1,next_state){
return (function (state_18882){var state_val_18883 = (state_18882[(1)]);if((state_val_18883 === (2)))
{var inst_18871 = (state_18882[(2)]);var inst_18872 = (function (){return ((function (inst_18871,state_val_18883,c__6480__auto__,___$1,map__18865,map__18865__$1,next_state){
return (function (p1__18835_SHARP_){return cljs.core.assoc_in.call(null,p1__18835_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.Keyword(null,"result","result",1415092211)], null),true);
});
;})(inst_18871,state_val_18883,c__6480__auto__,___$1,map__18865,map__18865__$1,next_state))
})();var inst_18873 = om.core.transact_BANG_.call(null,self__.root,inst_18872);var inst_18874 = cljs.core.deref.call(null,self__.root);var inst_18875 = cljs.core.get.call(null,inst_18874,new cljs.core.Keyword(null,"user","user",1532431356));var inst_18876 = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/success/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_18875));var inst_18877 = ajax.core.GET.call(null,inst_18876);var inst_18878 = cljs.core.deref.call(null,self__.root);var inst_18879 = cljs.core.get.call(null,inst_18878,new cljs.core.Keyword(null,"user","user",1532431356));var inst_18880 = power_app.core.login.call(null,inst_18879);var state_18882__$1 = (function (){var statearr_18884 = state_18882;(statearr_18884[(7)] = inst_18871);
(statearr_18884[(8)] = inst_18873);
(statearr_18884[(9)] = inst_18877);
return statearr_18884;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18882__$1,inst_18880);
} else
{if((state_val_18883 === (1)))
{var inst_18869 = cljs.core.async.timeout.call(null,(2000));var state_18882__$1 = state_18882;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18882__$1,(2),inst_18869);
} else
{return null;
}
}
});})(c__6480__auto__,___$1,map__18865,map__18865__$1,next_state))
;return ((function (switch__6465__auto__,c__6480__auto__,___$1,map__18865,map__18865__$1,next_state){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_18888 = [null,null,null,null,null,null,null,null,null,null];(statearr_18888[(0)] = state_machine__6466__auto__);
(statearr_18888[(1)] = (1));
return statearr_18888;
});
var state_machine__6466__auto____1 = (function (state_18882){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_18882);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e18889){if((e18889 instanceof Object))
{var ex__6469__auto__ = e18889;var statearr_18890_18892 = state_18882;(statearr_18890_18892[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18882);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18889;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18893 = state_18882;
state_18882 = G__18893;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_18882){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_18882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,___$1,map__18865,map__18865__$1,next_state))
})();var state__6482__auto__ = (function (){var statearr_18891 = f__6481__auto__.call(null);(statearr_18891[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_18891;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,___$1,map__18865,map__18865__$1,next_state))
);
return c__6480__auto__;
});})(map__18865,map__18865__$1,next_state))
;
power_app.core.t18866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18865,map__18865__$1,next_state){
return (function (_18868){var self__ = this;
var _18868__$1 = this;return self__.meta18867;
});})(map__18865,map__18865__$1,next_state))
;
power_app.core.t18866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18865,map__18865__$1,next_state){
return (function (_18868,meta18867__$1){var self__ = this;
var _18868__$1 = this;return (new power_app.core.t18866(self__.next_state,self__.map__18865,self__.p__18837,self__.owner,self__.root,self__.explain_assignment_component,meta18867__$1));
});})(map__18865,map__18865__$1,next_state))
;
power_app.core.__GT_t18866 = ((function (map__18865,map__18865__$1,next_state){
return (function __GT_t18866(next_state__$1,map__18865__$2,p__18837__$1,owner__$1,root__$1,explain_assignment_component__$1,meta18867){return (new power_app.core.t18866(next_state__$1,map__18865__$2,p__18837__$1,owner__$1,root__$1,explain_assignment_component__$1,meta18867));
});})(map__18865,map__18865__$1,next_state))
;
}
return (new power_app.core.t18866(next_state,map__18865__$1,p__18837,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__18894,owner){var map__18895 = p__18894;var map__18895__$1 = ((cljs.core.seq_QMARK_.call(null,map__18895))?cljs.core.apply.call(null,cljs.core.hash_map,map__18895):map__18895);var root = map__18895__$1;var state = cljs.core.get.call(null,map__18895__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var user = cljs.core.get.call(null,map__18895__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(typeof power_app.core.t18896 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t18896 = (function (user,state,root,map__18895,owner,p__18894,meta18897){
this.user = user;
this.state = state;
this.root = root;
this.map__18895 = map__18895;
this.owner = owner;
this.p__18894 = p__18894;
this.meta18897 = meta18897;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t18896.cljs$lang$type = true;
power_app.core.t18896.cljs$lang$ctorStr = "power-app.core/t18896";
power_app.core.t18896.cljs$lang$ctorPrWriter = ((function (map__18895,map__18895__$1,root,state,user){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t18896");
});})(map__18895,map__18895__$1,root,state,user))
;
power_app.core.t18896.prototype.om$core$IRender$ = true;
power_app.core.t18896.prototype.om$core$IRender$render$arity$1 = ((function (map__18895,map__18895__$1,root,state,user){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Power-app!"),((cljs.core.not.call(null,self__.user))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.hr(null),cljs.core.pr_str.call(null,self__.root))));
});})(map__18895,map__18895__$1,root,state,user))
;
power_app.core.t18896.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__18895,map__18895__$1,root,state,user){
return (function (_18898){var self__ = this;
var _18898__$1 = this;return self__.meta18897;
});})(map__18895,map__18895__$1,root,state,user))
;
power_app.core.t18896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__18895,map__18895__$1,root,state,user){
return (function (_18898,meta18897__$1){var self__ = this;
var _18898__$1 = this;return (new power_app.core.t18896(self__.user,self__.state,self__.root,self__.map__18895,self__.owner,self__.p__18894,meta18897__$1));
});})(map__18895,map__18895__$1,root,state,user))
;
power_app.core.__GT_t18896 = ((function (map__18895,map__18895__$1,root,state,user){
return (function __GT_t18896(user__$1,state__$1,root__$1,map__18895__$2,owner__$1,p__18894__$1,meta18897){return (new power_app.core.t18896(user__$1,state__$1,root__$1,map__18895__$2,owner__$1,p__18894__$1,meta18897));
});})(map__18895,map__18895__$1,root,state,user))
;
}
return (new power_app.core.t18896(user,state,root,map__18895__$1,owner,p__18894,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map