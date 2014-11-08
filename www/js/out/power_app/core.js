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
{power_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"user","user",1532431356),null,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),false,new cljs.core.Keyword(null,"state","state",-1988618099),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"points","points",-1486596883),(0),new cljs.core.Keyword(null,"questions","questions",1226225380),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"assignment","assignment",1330426519),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Zet alle lampen in de woonkamer aan",new cljs.core.Keyword(null,"description","description",-1428560544),"Lorem ipsum dolor sit amet,\n                      consectetur adipiscing elit. Nullam mi leo, varius\n                      cursus ipsum eu, vehicula tincidunt massa. Nulla\n                      et erat vel tellus porttitor malesuada quis quis\n                      magna. Curabitur et pellentesque urna. Aliquam\n                      tristique dolor erat, quis feugiat mauris rhoncus\n                      non. Quisque tincidunt euismod enim, id luctus\n                      arcu. Aliquam erat volutpat. Nulla egestas purus\n                      ligula, id luctus velit mollis sollicitudin. Sed\n                      suscipit et nisl quis ullamcorper. Proin convallis\n                      auctor iaculis. Donec nec ligula rutrum, vehicula\n                      erat vel, fermentum lorem. "], null),new cljs.core.Keyword(null,"settings","settings",1556144875),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"period","period",-352129191),new cljs.core.Keyword(null,"short","short",1928760516),new cljs.core.Keyword(null,"difficulty","difficulty",755680807),new cljs.core.Keyword(null,"easy","easy",315769928)], null)], null));
}
if(typeof power_app.core.server_address !== 'undefined')
{} else
{power_app.core.server_address = "http://localhost:8000";
}
power_app.core.error_handler = (function error_handler(p__8937){var map__8939 = p__8937;var map__8939__$1 = ((cljs.core.seq_QMARK_.call(null,map__8939))?cljs.core.apply.call(null,cljs.core.hash_map,map__8939):map__8939);var status_text = cljs.core.get.call(null,map__8939__$1,new cljs.core.Keyword(null,"status-text","status-text",-1834235478));var status = cljs.core.get.call(null,map__8939__$1,new cljs.core.Keyword(null,"status","status",-1997798413));return console.log(("something bad happened: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status)+" "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(status_text)));
});
power_app.core.login = (function login(username){return ajax.core.GET.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/user/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,clojure.string.trim.call(null,username)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (result){var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));var v = cognitect.transit.read.call(null,r,result);console.log("TESSTT");
return cljs.core.swap_BANG_.call(null,power_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"user","user",1532431356)),new cljs.core.Keyword(null,"points","points",-1486596883),cljs.core.get.call(null,v,new cljs.core.Keyword(null,"points","points",-1486596883)));
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),power_app.core.error_handler], null));
});
power_app.core.get_questions = (function get_questions(username){console.log("FOFOFOFOF");
return ajax.core.GET.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(power_app.core.server_address)+"/assignment/questions?username="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case.call(null,clojure.string.trim.call(null,username)))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"handler","handler",-195596612),(function (result){var r = cognitect.transit.reader.call(null,new cljs.core.Keyword(null,"json","json",1279968570));var v = cognitect.transit.read.call(null,r,result);console.log(cljs.core.prn_str.call(null,v));
return cljs.core.swap_BANG_.call(null,power_app.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"questions","questions",1226225380),v);
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),power_app.core.error_handler], null));
});
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__8940_SHARP_){return cljs.core.assoc.call(null,p1__8940_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.login_component = (function login_component(root,owner,opts){if(typeof power_app.core.t8944 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t8944 = (function (opts,owner,root,login_component,meta8945){
this.opts = opts;
this.owner = owner;
this.root = root;
this.login_component = login_component;
this.meta8945 = meta8945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t8944.cljs$lang$type = true;
power_app.core.t8944.cljs$lang$ctorStr = "power-app.core/t8944";
power_app.core.t8944.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t8944");
});
power_app.core.t8944.prototype.om$core$IRenderState$ = true;
power_app.core.t8944.prototype.om$core$IRenderState$render_state$arity$2 = (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.form({"className": "form-horizontal"},React.DOM.fieldset(null,React.DOM.legend(null,"Login"),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},om.dom.input.call(null,{"placeholder": "Naam", "className": "form-control", "ref": "name"}))),React.DOM.div({"className": "form-group"},React.DOM.div({"className": "col-xs-12"},React.DOM.button({"onClick": ((function (___$2){
return (function (e){var name = om.core.get_node.call(null,self__.owner,"name").value;e.preventDefault();
return power_app.core.login.call(null,name);
});})(___$2))
, "className": "btn btn-primary", "type": "submit"},"Inloggen"))))));
});
power_app.core.t8944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8946){var self__ = this;
var _8946__$1 = this;return self__.meta8945;
});
power_app.core.t8944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8946,meta8945__$1){var self__ = this;
var _8946__$1 = this;return (new power_app.core.t8944(self__.opts,self__.owner,self__.root,self__.login_component,meta8945__$1));
});
power_app.core.__GT_t8944 = (function __GT_t8944(opts__$1,owner__$1,root__$1,login_component__$1,meta8945){return (new power_app.core.t8944(opts__$1,owner__$1,root__$1,login_component__$1,meta8945));
});
}
return (new power_app.core.t8944(opts,owner,root,login_component,null));
});
power_app.core.handler = (function handler(response){return console.log((''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(response)));
});
power_app.core.score_component = (function score_component(root,owner,p__8948){var map__8953 = p__8948;var map__8953__$1 = ((cljs.core.seq_QMARK_.call(null,map__8953))?cljs.core.apply.call(null,cljs.core.hash_map,map__8953):map__8953);var next_state = cljs.core.get.call(null,map__8953__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t8954 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t8954 = (function (next_state,map__8953,p__8948,owner,root,score_component,meta8955){
this.next_state = next_state;
this.map__8953 = map__8953;
this.p__8948 = p__8948;
this.owner = owner;
this.root = root;
this.score_component = score_component;
this.meta8955 = meta8955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t8954.cljs$lang$type = true;
power_app.core.t8954.cljs$lang$ctorStr = "power-app.core/t8954";
power_app.core.t8954.cljs$lang$ctorPrWriter = ((function (map__8953,map__8953__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t8954");
});})(map__8953,map__8953__$1,next_state))
;
power_app.core.t8954.prototype.om$core$IRenderState$ = true;
power_app.core.t8954.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__8953,map__8953__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "1200%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__8953,map__8953__$1,next_state){
return (function (e){e.preventDefault();
console.log("HIERRR");
power_app.core.get_questions.call(null,new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.root)));
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__8953,map__8953__$1,next_state){
return (function (p1__8947_SHARP_){return cljs.core.assoc.call(null,p1__8947_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__8953,map__8953__$1,next_state))
);
});})(___$2,map__8953,map__8953__$1,next_state))
, "className": "btn btn-primary"},"Volgende opdracht")))));
});})(map__8953,map__8953__$1,next_state))
;
power_app.core.t8954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__8953,map__8953__$1,next_state){
return (function (_8956){var self__ = this;
var _8956__$1 = this;return self__.meta8955;
});})(map__8953,map__8953__$1,next_state))
;
power_app.core.t8954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__8953,map__8953__$1,next_state){
return (function (_8956,meta8955__$1){var self__ = this;
var _8956__$1 = this;return (new power_app.core.t8954(self__.next_state,self__.map__8953,self__.p__8948,self__.owner,self__.root,self__.score_component,meta8955__$1));
});})(map__8953,map__8953__$1,next_state))
;
power_app.core.__GT_t8954 = ((function (map__8953,map__8953__$1,next_state){
return (function __GT_t8954(next_state__$1,map__8953__$2,p__8948__$1,owner__$1,root__$1,score_component__$1,meta8955){return (new power_app.core.t8954(next_state__$1,map__8953__$2,p__8948__$1,owner__$1,root__$1,score_component__$1,meta8955));
});})(map__8953,map__8953__$1,next_state))
;
}
return (new power_app.core.t8954(next_state,map__8953__$1,p__8948,owner,root,score_component,null));
});
power_app.core.current_assignment_component = (function current_assignment_component(root,owner,p__8958){var map__8963 = p__8958;var map__8963__$1 = ((cljs.core.seq_QMARK_.call(null,map__8963))?cljs.core.apply.call(null,cljs.core.hash_map,map__8963):map__8963);var next_state = cljs.core.get.call(null,map__8963__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t8964 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t8964 = (function (next_state,map__8963,p__8958,owner,root,current_assignment_component,meta8965){
this.next_state = next_state;
this.map__8963 = map__8963;
this.p__8958 = p__8958;
this.owner = owner;
this.root = root;
this.current_assignment_component = current_assignment_component;
this.meta8965 = meta8965;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t8964.cljs$lang$type = true;
power_app.core.t8964.cljs$lang$ctorStr = "power-app.core/t8964";
power_app.core.t8964.cljs$lang$ctorPrWriter = ((function (map__8963,map__8963__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t8964");
});})(map__8963,map__8963__$1,next_state))
;
power_app.core.t8964.prototype.om$core$IRenderState$ = true;
power_app.core.t8964.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__8963,map__8963__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},"Opdracht 51")),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},"Zet alle lampen in de woonkamer aan.")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__8963,map__8963__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__8963,map__8963__$1,next_state){
return (function (p1__8957_SHARP_){return cljs.core.assoc.call(null,p1__8957_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__8963,map__8963__$1,next_state))
);
});})(___$2,map__8963,map__8963__$1,next_state))
, "className": "btn btn-primary"},"Klaar (15:12)")))));
});})(map__8963,map__8963__$1,next_state))
;
power_app.core.t8964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__8963,map__8963__$1,next_state){
return (function (_8966){var self__ = this;
var _8966__$1 = this;return self__.meta8965;
});})(map__8963,map__8963__$1,next_state))
;
power_app.core.t8964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__8963,map__8963__$1,next_state){
return (function (_8966,meta8965__$1){var self__ = this;
var _8966__$1 = this;return (new power_app.core.t8964(self__.next_state,self__.map__8963,self__.p__8958,self__.owner,self__.root,self__.current_assignment_component,meta8965__$1));
});})(map__8963,map__8963__$1,next_state))
;
power_app.core.__GT_t8964 = ((function (map__8963,map__8963__$1,next_state){
return (function __GT_t8964(next_state__$1,map__8963__$2,p__8958__$1,owner__$1,root__$1,current_assignment_component__$1,meta8965){return (new power_app.core.t8964(next_state__$1,map__8963__$2,p__8958__$1,owner__$1,root__$1,current_assignment_component__$1,meta8965));
});})(map__8963,map__8963__$1,next_state))
;
}
return (new power_app.core.t8964(next_state,map__8963__$1,p__8958,owner,root,current_assignment_component,null));
});
power_app.core.new_assignment_component = (function new_assignment_component(root,owner,p__8971){var map__8976 = p__8971;var map__8976__$1 = ((cljs.core.seq_QMARK_.call(null,map__8976))?cljs.core.apply.call(null,cljs.core.hash_map,map__8976):map__8976);var next_state = cljs.core.get.call(null,map__8976__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t8977 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t8977 = (function (next_state,map__8976,p__8971,owner,root,new_assignment_component,meta8978){
this.next_state = next_state;
this.map__8976 = map__8976;
this.p__8971 = p__8971;
this.owner = owner;
this.root = root;
this.new_assignment_component = new_assignment_component;
this.meta8978 = meta8978;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t8977.cljs$lang$type = true;
power_app.core.t8977.cljs$lang$ctorStr = "power-app.core/t8977";
power_app.core.t8977.cljs$lang$ctorPrWriter = ((function (map__8976,map__8976__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t8977");
});})(map__8976,map__8976__$1,next_state))
;
power_app.core.t8977.prototype.om$core$IRenderState$ = true;
power_app.core.t8977.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__8976,map__8976__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;var points = (new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(self__.root) + (1));var open_questions = cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.nil_QMARK_,new cljs.core.Keyword(null,"answer","answer",-742633163)),new cljs.core.Keyword(null,"questions","questions",1226225380).cljs$core$IFn$_invoke$arity$1(self__.root));var question = cljs.core.first.call(null,open_questions);var last_QMARK_ = (cljs.core.count.call(null,open_questions) < (2));return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},("Opdracht "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(points)+" selectie"))),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "250%"}, "className": "col-xs-12"},new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state){
return (function (p1__8967_SHARP_){return cljs.core.assoc.call(null,p1__8967_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),true);
});})(points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state))
);
if(last_QMARK_)
{return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state){
return (function (p1__8968_SHARP_){return cljs.core.assoc.call(null,p1__8968_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state))
);
} else
{return null;
}
});})(points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state))
, "className": "btn btn-primary"},"Ja"),React.DOM.a({"onClick": ((function (points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state){
return (function (e){e.preventDefault();
om.core.transact_BANG_.call(null,question,((function (points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state){
return (function (p1__8969_SHARP_){return cljs.core.assoc.call(null,p1__8969_SHARP_,new cljs.core.Keyword(null,"answer","answer",-742633163),false);
});})(points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state))
);
if(last_QMARK_)
{return om.core.transact_BANG_.call(null,self__.root,((function (points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state){
return (function (p1__8970_SHARP_){return cljs.core.assoc.call(null,p1__8970_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state))
);
} else
{return null;
}
});})(points,open_questions,question,last_QMARK_,___$2,map__8976,map__8976__$1,next_state))
, "className": "btn btn-primary"},"Nee")))));
});})(map__8976,map__8976__$1,next_state))
;
power_app.core.t8977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__8976,map__8976__$1,next_state){
return (function (_8979){var self__ = this;
var _8979__$1 = this;return self__.meta8978;
});})(map__8976,map__8976__$1,next_state))
;
power_app.core.t8977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__8976,map__8976__$1,next_state){
return (function (_8979,meta8978__$1){var self__ = this;
var _8979__$1 = this;return (new power_app.core.t8977(self__.next_state,self__.map__8976,self__.p__8971,self__.owner,self__.root,self__.new_assignment_component,meta8978__$1));
});})(map__8976,map__8976__$1,next_state))
;
power_app.core.__GT_t8977 = ((function (map__8976,map__8976__$1,next_state){
return (function __GT_t8977(next_state__$1,map__8976__$2,p__8971__$1,owner__$1,root__$1,new_assignment_component__$1,meta8978){return (new power_app.core.t8977(next_state__$1,map__8976__$2,p__8971__$1,owner__$1,root__$1,new_assignment_component__$1,meta8978));
});})(map__8976,map__8976__$1,next_state))
;
}
return (new power_app.core.t8977(next_state,map__8976__$1,p__8971,owner,root,new_assignment_component,null));
});
power_app.core.explain_assignment_component = (function explain_assignment_component(root,owner,p__8981){var map__8986 = p__8981;var map__8986__$1 = ((cljs.core.seq_QMARK_.call(null,map__8986))?cljs.core.apply.call(null,cljs.core.hash_map,map__8986):map__8986);var next_state = cljs.core.get.call(null,map__8986__$1,new cljs.core.Keyword(null,"next-state","next-state",-1428728252));if(typeof power_app.core.t8987 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t8987 = (function (next_state,map__8986,p__8981,owner,root,explain_assignment_component,meta8988){
this.next_state = next_state;
this.map__8986 = map__8986;
this.p__8981 = p__8981;
this.owner = owner;
this.root = root;
this.explain_assignment_component = explain_assignment_component;
this.meta8988 = meta8988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t8987.cljs$lang$type = true;
power_app.core.t8987.cljs$lang$ctorStr = "power-app.core/t8987";
power_app.core.t8987.cljs$lang$ctorPrWriter = ((function (map__8986,map__8986__$1,next_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t8987");
});})(map__8986,map__8986__$1,next_state))
;
power_app.core.t8987.prototype.om$core$IRenderState$ = true;
power_app.core.t8987.prototype.om$core$IRenderState$render_state$arity$2 = ((function (map__8986,map__8986__$1,next_state){
return (function (_,___$1){var self__ = this;
var ___$2 = this;return React.DOM.div(null,React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.h1({"style": {"font-size": "200%"}, "className": "col-xs-12"},"Uitleg opdracht 51")),React.DOM.div({"style": {"text-align": "center", "width": "100%"}, "className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.h1({"style": {"font-size": "175%"}},"Zet alle lampen in de woonkamer aan."),React.DOM.p(null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam mi leo, varius cursus ipsum eu, vehicula tincidunt massa. Nulla et erat vel tellus porttitor malesuada quis quis magna. Curabitur et pellentesque urna. Aliquam tristique dolor erat, quis feugiat mauris rhoncus non. Quisque tincidunt euismod enim, id luctus arcu. Aliquam erat volutpat. Nulla egestas purus ligula, id luctus velit mollis sollicitudin. Sed suscipit et nisl quis ullamcorper. Proin convallis auctor iaculis. Donec nec ligula rutrum, vehicula erat vel, fermentum lorem. "))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.div({"className": "btn-group btn-group-justified"},React.DOM.a({"onClick": ((function (___$2,map__8986,map__8986__$1,next_state){
return (function (e){e.preventDefault();
return om.core.transact_BANG_.call(null,self__.root,((function (___$2,map__8986,map__8986__$1,next_state){
return (function (p1__8980_SHARP_){return cljs.core.assoc.call(null,p1__8980_SHARP_,new cljs.core.Keyword(null,"state","state",-1988618099),self__.next_state);
});})(___$2,map__8986,map__8986__$1,next_state))
);
});})(___$2,map__8986,map__8986__$1,next_state))
, "className": "btn btn-primary"},"Nieuwe opdracht")))));
});})(map__8986,map__8986__$1,next_state))
;
power_app.core.t8987.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__8986,map__8986__$1,next_state){
return (function (_8989){var self__ = this;
var _8989__$1 = this;return self__.meta8988;
});})(map__8986,map__8986__$1,next_state))
;
power_app.core.t8987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__8986,map__8986__$1,next_state){
return (function (_8989,meta8988__$1){var self__ = this;
var _8989__$1 = this;return (new power_app.core.t8987(self__.next_state,self__.map__8986,self__.p__8981,self__.owner,self__.root,self__.explain_assignment_component,meta8988__$1));
});})(map__8986,map__8986__$1,next_state))
;
power_app.core.__GT_t8987 = ((function (map__8986,map__8986__$1,next_state){
return (function __GT_t8987(next_state__$1,map__8986__$2,p__8981__$1,owner__$1,root__$1,explain_assignment_component__$1,meta8988){return (new power_app.core.t8987(next_state__$1,map__8986__$2,p__8981__$1,owner__$1,root__$1,explain_assignment_component__$1,meta8988));
});})(map__8986,map__8986__$1,next_state))
;
}
return (new power_app.core.t8987(next_state,map__8986__$1,p__8981,owner,root,explain_assignment_component,null));
});
power_app.core.state_machine = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.score_component], null),new cljs.core.Keyword(null,"new-assignment","new-assignment",-210323510),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.new_assignment_component], null),new cljs.core.Keyword(null,"current-assignment","current-assignment",1630905830),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.current_assignment_component], null),new cljs.core.Keyword(null,"explain-assignment","explain-assignment",1135712141),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"score","score",-1963588780),new cljs.core.Keyword(null,"component","component",1555936782),power_app.core.explain_assignment_component], null)], null);
om.core.root.call(null,(function (p__8990,owner){var map__8991 = p__8990;var map__8991__$1 = ((cljs.core.seq_QMARK_.call(null,map__8991))?cljs.core.apply.call(null,cljs.core.hash_map,map__8991):map__8991);var root = map__8991__$1;var state = cljs.core.get.call(null,map__8991__$1,new cljs.core.Keyword(null,"state","state",-1988618099));var user = cljs.core.get.call(null,map__8991__$1,new cljs.core.Keyword(null,"user","user",1532431356));if(typeof power_app.core.t8992 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t8992 = (function (user,state,root,map__8991,owner,p__8990,meta8993){
this.user = user;
this.state = state;
this.root = root;
this.map__8991 = map__8991;
this.owner = owner;
this.p__8990 = p__8990;
this.meta8993 = meta8993;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t8992.cljs$lang$type = true;
power_app.core.t8992.cljs$lang$ctorStr = "power-app.core/t8992";
power_app.core.t8992.cljs$lang$ctorPrWriter = ((function (map__8991,map__8991__$1,root,state,user){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t8992");
});})(map__8991,map__8991__$1,root,state,user))
;
power_app.core.t8992.prototype.om$core$IRender$ = true;
power_app.core.t8992.prototype.om$core$IRender$render$arity$1 = ((function (map__8991,map__8991__$1,root,state,user){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.h2(null,React.DOM.i({"className": "fa fa-bolt"})," ","Power-app!"),((cljs.core.not.call(null,self__.user))?om.core.build.call(null,power_app.core.login_component,self__.root):om.core.build.call(null,new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state)),self__.root,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"next-state","next-state",-1428728252),new cljs.core.Keyword(null,"next-state","next-state",-1428728252).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,power_app.core.state_machine,self__.state))], null)], null))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.hr(null),cljs.core.pr_str.call(null,self__.root))));
});})(map__8991,map__8991__$1,root,state,user))
;
power_app.core.t8992.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__8991,map__8991__$1,root,state,user){
return (function (_8994){var self__ = this;
var _8994__$1 = this;return self__.meta8993;
});})(map__8991,map__8991__$1,root,state,user))
;
power_app.core.t8992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__8991,map__8991__$1,root,state,user){
return (function (_8994,meta8993__$1){var self__ = this;
var _8994__$1 = this;return (new power_app.core.t8992(self__.user,self__.state,self__.root,self__.map__8991,self__.owner,self__.p__8990,meta8993__$1));
});})(map__8991,map__8991__$1,root,state,user))
;
power_app.core.__GT_t8992 = ((function (map__8991,map__8991__$1,root,state,user){
return (function __GT_t8992(user__$1,state__$1,root__$1,map__8991__$2,owner__$1,p__8990__$1,meta8993){return (new power_app.core.t8992(user__$1,state__$1,root__$1,map__8991__$2,owner__$1,p__8990__$1,meta8993));
});})(map__8991,map__8991__$1,root,state,user))
;
}
return (new power_app.core.t8992(user,state,root,map__8991__$1,owner,p__8990,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map