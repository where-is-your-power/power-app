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
{power_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),"Hello Chestnut!"], null));
}
power_app.core.main = (function main(){console.log("starting CLJS...");
return om.core.root.call(null,(function (app,owner){if(typeof power_app.core.t7502 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t7502 = (function (owner,app,main,meta7503){
this.owner = owner;
this.app = app;
this.main = main;
this.meta7503 = meta7503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t7502.cljs$lang$type = true;
power_app.core.t7502.cljs$lang$ctorStr = "power-app.core/t7502";
power_app.core.t7502.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t7502");
});
power_app.core.t7502.prototype.om$core$IRender$ = true;
power_app.core.t7502.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.app));
});
power_app.core.t7502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7504){var self__ = this;
var _7504__$1 = this;return self__.meta7503;
});
power_app.core.t7502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7504,meta7503__$1){var self__ = this;
var _7504__$1 = this;return (new power_app.core.t7502(self__.owner,self__.app,self__.main,meta7503__$1));
});
power_app.core.__GT_t7502 = (function __GT_t7502(owner__$1,app__$1,main__$1,meta7503){return (new power_app.core.t7502(owner__$1,app__$1,main__$1,meta7503));
});
}
return (new power_app.core.t7502(owner,app,main,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});
power_app.core.main.call(null);

//# sourceMappingURL=core.js.map