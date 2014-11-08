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
{power_app.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),false,new cljs.core.Keyword(null,"text","text",-1790561697),"Hello Chestnut!"], null));
}
document.addEventListener("deviceready",(function (){return cljs.core.swap_BANG_.call(null,power_app.core.app_state,(function (p1__7554_SHARP_){return cljs.core.assoc.call(null,p1__7554_SHARP_,new cljs.core.Keyword(null,"deviceready","deviceready",1662000431),true);
}));
}));
power_app.core.main = (function main(){console.log("starting CLJS...");
return om.core.root.call(null,(function (app,owner){if(typeof power_app.core.t7558 !== 'undefined')
{} else
{
/**
* @constructor
*/
power_app.core.t7558 = (function (owner,app,main,meta7559){
this.owner = owner;
this.app = app;
this.main = main;
this.meta7559 = meta7559;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
power_app.core.t7558.cljs$lang$type = true;
power_app.core.t7558.cljs$lang$ctorStr = "power-app.core/t7558";
power_app.core.t7558.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"power-app.core/t7558");
});
power_app.core.t7558.prototype.om$core$IRender$ = true;
power_app.core.t7558.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.button({"className": "btn btn-primary"},"Test knop"),React.DOM.h1(null,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(self__.app)),cljs.core.pr_str.call(null,self__.app));
});
power_app.core.t7558.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7560){var self__ = this;
var _7560__$1 = this;return self__.meta7559;
});
power_app.core.t7558.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7560,meta7559__$1){var self__ = this;
var _7560__$1 = this;return (new power_app.core.t7558(self__.owner,self__.app,self__.main,meta7559__$1));
});
power_app.core.__GT_t7558 = (function __GT_t7558(owner__$1,app__$1,main__$1,meta7559){return (new power_app.core.t7558(owner__$1,app__$1,main__$1,meta7559));
});
}
return (new power_app.core.t7558(owner,app,main,null));
}),power_app.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
});
power_app.core.main.call(null);

//# sourceMappingURL=core.js.map