// Compiled by ClojureScript 0.0-2371
goog.provide('power_app.core');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
if(typeof power_app.core.app_state !== 'undefined')
{} else
{power_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),false,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Keyword(null,"home","home",-74557309)], null));
}
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__5993_SHARP_){return cljs.core.assoc.call(null,p1__5993_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
om.core.root.call(null,(function (app,owner){if(typeof power_app.core.t5994 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t5994 = (function (owner,app,meta5995){
this.owner = owner;
this.app = app;
this.meta5995 = meta5995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t5994.cljs$lang$type = true;
power_app.core.t5994.cljs$lang$ctorStr = "power-app.core/t5994";
power_app.core.t5994.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t5994");
});
power_app.core.t5994.prototype.om$core$IRender$ = true;
power_app.core.t5994.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div({"className": "container"},React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.i({"className": "fa fa-home"}))),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-6"},"Test Links"),React.DOM.div({"className": "col-xs-6"},"Test Rechts")),React.DOM.div({"className": "row"},React.DOM.div({"className": "col-xs-12"},React.DOM.hr(null),cljs.core.pr_str.call(null,self__.app))));
});
power_app.core.t5994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_5996){var self__ = this;
var _5996__$1 = this;return self__.meta5995;
});
power_app.core.t5994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_5996,meta5995__$1){var self__ = this;
var _5996__$1 = this;return (new power_app.core.t5994(self__.owner,self__.app,meta5995__$1));
});
power_app.core.__GT_t5994 = (function __GT_t5994(owner__$1,app__$1,meta5995){return (new power_app.core.t5994(owner__$1,app__$1,meta5995));
});
}
return (new power_app.core.t5994(owner,app,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));

//# sourceMappingURL=core.js.map