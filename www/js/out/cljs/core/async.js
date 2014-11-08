// Compiled by ClojureScript 0.0-2371
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12427 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12427 = (function (f,fn_handler,meta12428){
this.f = f;
this.fn_handler = fn_handler;
this.meta12428 = meta12428;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12427.cljs$lang$type = true;
cljs.core.async.t12427.cljs$lang$ctorStr = "cljs.core.async/t12427";
cljs.core.async.t12427.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12427");
});
cljs.core.async.t12427.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12427.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12427.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12427.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12429){var self__ = this;
var _12429__$1 = this;return self__.meta12428;
});
cljs.core.async.t12427.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12429,meta12428__$1){var self__ = this;
var _12429__$1 = this;return (new cljs.core.async.t12427(self__.f,self__.fn_handler,meta12428__$1));
});
cljs.core.async.__GT_t12427 = (function __GT_t12427(f__$1,fn_handler__$1,meta12428){return (new cljs.core.async.t12427(f__$1,fn_handler__$1,meta12428));
});
}
return (new cljs.core.async.t12427(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12431 = buff;if(G__12431)
{var bit__4304__auto__ = null;if(cljs.core.truth_((function (){var or__3640__auto__ = bit__4304__auto__;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return G__12431.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12431.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12431);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12431);
}
});
/**
* Creates a channel with an optional buffer, an optional transducer (like (map f),
* (filter p) etc or a composition thereof), and an optional exception handler.
* If buf-or-n is a number, will create and use a fixed buffer of that size. If a
* transducer is supplied a buffer must be specified. ex-handler must be a
* fn of one argument - if an exception occurs during transformation it will be called
* with the thrown value as an argument, and any non-nil return value will be placed
* in the channel.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){return chan.call(null,buf_or_n,null,null);
});
var chan__2 = (function (buf_or_n,xform){return chan.call(null,buf_or_n,xform,null);
});
var chan__3 = (function (buf_or_n,xform,ex_handler){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);if(cljs.core.truth_(xform))
{if(cljs.core.truth_(buf_or_n__$1))
{} else
{throw (new Error(("Assert failed: buffer must be supplied when transducer is\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null))))));
}
} else
{}
return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});
chan = function(buf_or_n,xform,ex_handler){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
case 2:
return chan__2.call(this,buf_or_n,xform);
case 3:
return chan__3.call(this,buf_or_n,xform,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
chan.cljs$core$IFn$_invoke$arity$2 = chan__2;
chan.cljs$core$IFn$_invoke$arity$3 = chan__3;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_12432 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12432);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_12432,ret){
return (function (){return fn1.call(null,val_12432);
});})(val_12432,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4510__auto___12433 = n;var x_12434 = (0);while(true){
if((x_12434 < n__4510__auto___12433))
{(a[x_12434] = (0));
{
var G__12435 = (x_12434 + (1));
x_12434 = G__12435;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__12436 = (i + (1));
i = G__12436;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12440 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12440 = (function (flag,alt_flag,meta12441){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12441 = meta12441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12440.cljs$lang$type = true;
cljs.core.async.t12440.cljs$lang$ctorStr = "cljs.core.async/t12440";
cljs.core.async.t12440.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12440");
});})(flag))
;
cljs.core.async.t12440.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12440.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t12440.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t12440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_12442){var self__ = this;
var _12442__$1 = this;return self__.meta12441;
});})(flag))
;
cljs.core.async.t12440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_12442,meta12441__$1){var self__ = this;
var _12442__$1 = this;return (new cljs.core.async.t12440(self__.flag,self__.alt_flag,meta12441__$1));
});})(flag))
;
cljs.core.async.__GT_t12440 = ((function (flag){
return (function __GT_t12440(flag__$1,alt_flag__$1,meta12441){return (new cljs.core.async.t12440(flag__$1,alt_flag__$1,meta12441));
});})(flag))
;
}
return (new cljs.core.async.t12440(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12446 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12446 = (function (cb,flag,alt_handler,meta12447){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12447 = meta12447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12446.cljs$lang$type = true;
cljs.core.async.t12446.cljs$lang$ctorStr = "cljs.core.async/t12446";
cljs.core.async.t12446.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t12446");
});
cljs.core.async.t12446.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12446.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12446.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12448){var self__ = this;
var _12448__$1 = this;return self__.meta12447;
});
cljs.core.async.t12446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12448,meta12447__$1){var self__ = this;
var _12448__$1 = this;return (new cljs.core.async.t12446(self__.cb,self__.flag,self__.alt_handler,meta12447__$1));
});
cljs.core.async.__GT_t12446 = (function __GT_t12446(cb__$1,flag__$1,alt_handler__$1,meta12447){return (new cljs.core.async.t12446(cb__$1,flag__$1,alt_handler__$1,meta12447));
});
}
return (new cljs.core.async.t12446(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12449_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12449_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__12450_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12450_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3640__auto__ = wport;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__12451 = (i + (1));
i = G__12451;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3640__auto__ = ret;if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3628__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3628__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3628__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__12452){var map__12454 = p__12452;var map__12454__$1 = ((cljs.core.seq_QMARK_.call(null,map__12454))?cljs.core.apply.call(null,cljs.core.hash_map,map__12454):map__12454);var opts = map__12454__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__12452 = null;if (arguments.length > 1) {
  p__12452 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12452);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12455){
var ports = cljs.core.first(arglist__12455);
var p__12452 = cljs.core.rest(arglist__12455);
return alts_BANG___delegate(ports,p__12452);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6480__auto___12550 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___12550){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___12550){
return (function (state_12526){var state_val_12527 = (state_12526[(1)]);if((state_val_12527 === (7)))
{var inst_12522 = (state_12526[(2)]);var state_12526__$1 = state_12526;var statearr_12528_12551 = state_12526__$1;(statearr_12528_12551[(2)] = inst_12522);
(statearr_12528_12551[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12527 === (1)))
{var state_12526__$1 = state_12526;var statearr_12529_12552 = state_12526__$1;(statearr_12529_12552[(2)] = null);
(statearr_12529_12552[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12527 === (4)))
{var inst_12505 = (state_12526[(7)]);var inst_12505__$1 = (state_12526[(2)]);var inst_12506 = (inst_12505__$1 == null);var state_12526__$1 = (function (){var statearr_12530 = state_12526;(statearr_12530[(7)] = inst_12505__$1);
return statearr_12530;
})();if(cljs.core.truth_(inst_12506))
{var statearr_12531_12553 = state_12526__$1;(statearr_12531_12553[(1)] = (5));
} else
{var statearr_12532_12554 = state_12526__$1;(statearr_12532_12554[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12527 === (13)))
{var state_12526__$1 = state_12526;var statearr_12533_12555 = state_12526__$1;(statearr_12533_12555[(2)] = null);
(statearr_12533_12555[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12527 === (6)))
{var inst_12505 = (state_12526[(7)]);var state_12526__$1 = state_12526;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12526__$1,(11),to,inst_12505);
} else
{if((state_val_12527 === (3)))
{var inst_12524 = (state_12526[(2)]);var state_12526__$1 = state_12526;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12526__$1,inst_12524);
} else
{if((state_val_12527 === (12)))
{var state_12526__$1 = state_12526;var statearr_12534_12556 = state_12526__$1;(statearr_12534_12556[(2)] = null);
(statearr_12534_12556[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12527 === (2)))
{var state_12526__$1 = state_12526;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12526__$1,(4),from);
} else
{if((state_val_12527 === (11)))
{var inst_12515 = (state_12526[(2)]);var state_12526__$1 = state_12526;if(cljs.core.truth_(inst_12515))
{var statearr_12535_12557 = state_12526__$1;(statearr_12535_12557[(1)] = (12));
} else
{var statearr_12536_12558 = state_12526__$1;(statearr_12536_12558[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12527 === (9)))
{var state_12526__$1 = state_12526;var statearr_12537_12559 = state_12526__$1;(statearr_12537_12559[(2)] = null);
(statearr_12537_12559[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12527 === (5)))
{var state_12526__$1 = state_12526;if(cljs.core.truth_(close_QMARK_))
{var statearr_12538_12560 = state_12526__$1;(statearr_12538_12560[(1)] = (8));
} else
{var statearr_12539_12561 = state_12526__$1;(statearr_12539_12561[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12527 === (14)))
{var inst_12520 = (state_12526[(2)]);var state_12526__$1 = state_12526;var statearr_12540_12562 = state_12526__$1;(statearr_12540_12562[(2)] = inst_12520);
(statearr_12540_12562[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12527 === (10)))
{var inst_12512 = (state_12526[(2)]);var state_12526__$1 = state_12526;var statearr_12541_12563 = state_12526__$1;(statearr_12541_12563[(2)] = inst_12512);
(statearr_12541_12563[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12527 === (8)))
{var inst_12509 = cljs.core.async.close_BANG_.call(null,to);var state_12526__$1 = state_12526;var statearr_12542_12564 = state_12526__$1;(statearr_12542_12564[(2)] = inst_12509);
(statearr_12542_12564[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___12550))
;return ((function (switch__6465__auto__,c__6480__auto___12550){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_12546 = [null,null,null,null,null,null,null,null];(statearr_12546[(0)] = state_machine__6466__auto__);
(statearr_12546[(1)] = (1));
return statearr_12546;
});
var state_machine__6466__auto____1 = (function (state_12526){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12526);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e12547){if((e12547 instanceof Object))
{var ex__6469__auto__ = e12547;var statearr_12548_12565 = state_12526;(statearr_12548_12565[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12526);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12547;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12566 = state_12526;
state_12526 = G__12566;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12526){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12526);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___12550))
})();var state__6482__auto__ = (function (){var statearr_12549 = f__6481__auto__.call(null);(statearr_12549[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___12550);
return statearr_12549;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___12550))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
cljs.core.async.pipeline_STAR_ = (function pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){if((n > (0)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null)))))));
}
var jobs = cljs.core.async.chan.call(null,n);var results = cljs.core.async.chan.call(null,n);var process = ((function (jobs,results){
return (function (p__12750){var vec__12751 = p__12750;var v = cljs.core.nth.call(null,vec__12751,(0),null);var p = cljs.core.nth.call(null,vec__12751,(1),null);var job = vec__12751;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);var c__6480__auto___12933 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___12933,res,vec__12751,v,p,job,jobs,results){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___12933,res,vec__12751,v,p,job,jobs,results){
return (function (state_12756){var state_val_12757 = (state_12756[(1)]);if((state_val_12757 === (2)))
{var inst_12753 = (state_12756[(2)]);var inst_12754 = cljs.core.async.close_BANG_.call(null,res);var state_12756__$1 = (function (){var statearr_12758 = state_12756;(statearr_12758[(7)] = inst_12753);
return statearr_12758;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12756__$1,inst_12754);
} else
{if((state_val_12757 === (1)))
{var state_12756__$1 = state_12756;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12756__$1,(2),res,v);
} else
{return null;
}
}
});})(c__6480__auto___12933,res,vec__12751,v,p,job,jobs,results))
;return ((function (switch__6465__auto__,c__6480__auto___12933,res,vec__12751,v,p,job,jobs,results){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_12762 = [null,null,null,null,null,null,null,null];(statearr_12762[(0)] = state_machine__6466__auto__);
(statearr_12762[(1)] = (1));
return statearr_12762;
});
var state_machine__6466__auto____1 = (function (state_12756){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12756);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e12763){if((e12763 instanceof Object))
{var ex__6469__auto__ = e12763;var statearr_12764_12934 = state_12756;(statearr_12764_12934[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12756);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12763;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12935 = state_12756;
state_12756 = G__12935;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12756){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12756);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___12933,res,vec__12751,v,p,job,jobs,results))
})();var state__6482__auto__ = (function (){var statearr_12765 = f__6481__auto__.call(null);(statearr_12765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___12933);
return statearr_12765;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___12933,res,vec__12751,v,p,job,jobs,results))
);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results))
;var async = ((function (jobs,results,process){
return (function (p__12766){var vec__12767 = p__12766;var v = cljs.core.nth.call(null,vec__12767,(0),null);var p = cljs.core.nth.call(null,vec__12767,(1),null);var job = vec__12767;if((job == null))
{cljs.core.async.close_BANG_.call(null,results);
return null;
} else
{var res = cljs.core.async.chan.call(null,(1));xf.call(null,v,res);
cljs.core.async.put_BANG_.call(null,p,res);
return true;
}
});})(jobs,results,process))
;var n__4510__auto___12936 = n;var __12937 = (0);while(true){
if((__12937 < n__4510__auto___12936))
{var G__12768_12938 = (((type instanceof cljs.core.Keyword))?type.fqn:null);switch (G__12768_12938) {
case "async":
var c__6480__auto___12940 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12937,c__6480__auto___12940,G__12768_12938,n__4510__auto___12936,jobs,results,process,async){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (__12937,c__6480__auto___12940,G__12768_12938,n__4510__auto___12936,jobs,results,process,async){
return (function (state_12781){var state_val_12782 = (state_12781[(1)]);if((state_val_12782 === (7)))
{var inst_12777 = (state_12781[(2)]);var state_12781__$1 = state_12781;var statearr_12783_12941 = state_12781__$1;(statearr_12783_12941[(2)] = inst_12777);
(statearr_12783_12941[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12782 === (6)))
{var state_12781__$1 = state_12781;var statearr_12784_12942 = state_12781__$1;(statearr_12784_12942[(2)] = null);
(statearr_12784_12942[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12782 === (5)))
{var state_12781__$1 = state_12781;var statearr_12785_12943 = state_12781__$1;(statearr_12785_12943[(2)] = null);
(statearr_12785_12943[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12782 === (4)))
{var inst_12771 = (state_12781[(2)]);var inst_12772 = async.call(null,inst_12771);var state_12781__$1 = state_12781;if(cljs.core.truth_(inst_12772))
{var statearr_12786_12944 = state_12781__$1;(statearr_12786_12944[(1)] = (5));
} else
{var statearr_12787_12945 = state_12781__$1;(statearr_12787_12945[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12782 === (3)))
{var inst_12779 = (state_12781[(2)]);var state_12781__$1 = state_12781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12781__$1,inst_12779);
} else
{if((state_val_12782 === (2)))
{var state_12781__$1 = state_12781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12781__$1,(4),jobs);
} else
{if((state_val_12782 === (1)))
{var state_12781__$1 = state_12781;var statearr_12788_12946 = state_12781__$1;(statearr_12788_12946[(2)] = null);
(statearr_12788_12946[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12937,c__6480__auto___12940,G__12768_12938,n__4510__auto___12936,jobs,results,process,async))
;return ((function (__12937,switch__6465__auto__,c__6480__auto___12940,G__12768_12938,n__4510__auto___12936,jobs,results,process,async){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_12792 = [null,null,null,null,null,null,null];(statearr_12792[(0)] = state_machine__6466__auto__);
(statearr_12792[(1)] = (1));
return statearr_12792;
});
var state_machine__6466__auto____1 = (function (state_12781){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12781);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e12793){if((e12793 instanceof Object))
{var ex__6469__auto__ = e12793;var statearr_12794_12947 = state_12781;(statearr_12794_12947[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12781);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12793;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12948 = state_12781;
state_12781 = G__12948;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12781){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(__12937,switch__6465__auto__,c__6480__auto___12940,G__12768_12938,n__4510__auto___12936,jobs,results,process,async))
})();var state__6482__auto__ = (function (){var statearr_12795 = f__6481__auto__.call(null);(statearr_12795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___12940);
return statearr_12795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(__12937,c__6480__auto___12940,G__12768_12938,n__4510__auto___12936,jobs,results,process,async))
);

break;
case "compute":
var c__6480__auto___12949 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (__12937,c__6480__auto___12949,G__12768_12938,n__4510__auto___12936,jobs,results,process,async){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (__12937,c__6480__auto___12949,G__12768_12938,n__4510__auto___12936,jobs,results,process,async){
return (function (state_12808){var state_val_12809 = (state_12808[(1)]);if((state_val_12809 === (7)))
{var inst_12804 = (state_12808[(2)]);var state_12808__$1 = state_12808;var statearr_12810_12950 = state_12808__$1;(statearr_12810_12950[(2)] = inst_12804);
(statearr_12810_12950[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (6)))
{var state_12808__$1 = state_12808;var statearr_12811_12951 = state_12808__$1;(statearr_12811_12951[(2)] = null);
(statearr_12811_12951[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (5)))
{var state_12808__$1 = state_12808;var statearr_12812_12952 = state_12808__$1;(statearr_12812_12952[(2)] = null);
(statearr_12812_12952[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (4)))
{var inst_12798 = (state_12808[(2)]);var inst_12799 = process.call(null,inst_12798);var state_12808__$1 = state_12808;if(cljs.core.truth_(inst_12799))
{var statearr_12813_12953 = state_12808__$1;(statearr_12813_12953[(1)] = (5));
} else
{var statearr_12814_12954 = state_12808__$1;(statearr_12814_12954[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12809 === (3)))
{var inst_12806 = (state_12808[(2)]);var state_12808__$1 = state_12808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12808__$1,inst_12806);
} else
{if((state_val_12809 === (2)))
{var state_12808__$1 = state_12808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12808__$1,(4),jobs);
} else
{if((state_val_12809 === (1)))
{var state_12808__$1 = state_12808;var statearr_12815_12955 = state_12808__$1;(statearr_12815_12955[(2)] = null);
(statearr_12815_12955[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(__12937,c__6480__auto___12949,G__12768_12938,n__4510__auto___12936,jobs,results,process,async))
;return ((function (__12937,switch__6465__auto__,c__6480__auto___12949,G__12768_12938,n__4510__auto___12936,jobs,results,process,async){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_12819 = [null,null,null,null,null,null,null];(statearr_12819[(0)] = state_machine__6466__auto__);
(statearr_12819[(1)] = (1));
return statearr_12819;
});
var state_machine__6466__auto____1 = (function (state_12808){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12808);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e12820){if((e12820 instanceof Object))
{var ex__6469__auto__ = e12820;var statearr_12821_12956 = state_12808;(statearr_12821_12956[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12808);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12820;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12957 = state_12808;
state_12808 = G__12957;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12808){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(__12937,switch__6465__auto__,c__6480__auto___12949,G__12768_12938,n__4510__auto___12936,jobs,results,process,async))
})();var state__6482__auto__ = (function (){var statearr_12822 = f__6481__auto__.call(null);(statearr_12822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___12949);
return statearr_12822;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(__12937,c__6480__auto___12949,G__12768_12938,n__4510__auto___12936,jobs,results,process,async))
);

break;
default:
throw (new Error(("No matching clause: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type))));

}
{
var G__12958 = (__12937 + (1));
__12937 = G__12958;
continue;
}
} else
{}
break;
}
var c__6480__auto___12959 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___12959,jobs,results,process,async){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___12959,jobs,results,process,async){
return (function (state_12844){var state_val_12845 = (state_12844[(1)]);if((state_val_12845 === (9)))
{var inst_12837 = (state_12844[(2)]);var state_12844__$1 = (function (){var statearr_12846 = state_12844;(statearr_12846[(7)] = inst_12837);
return statearr_12846;
})();var statearr_12847_12960 = state_12844__$1;(statearr_12847_12960[(2)] = null);
(statearr_12847_12960[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12845 === (8)))
{var inst_12830 = (state_12844[(8)]);var inst_12835 = (state_12844[(2)]);var state_12844__$1 = (function (){var statearr_12848 = state_12844;(statearr_12848[(9)] = inst_12835);
return statearr_12848;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12844__$1,(9),results,inst_12830);
} else
{if((state_val_12845 === (7)))
{var inst_12840 = (state_12844[(2)]);var state_12844__$1 = state_12844;var statearr_12849_12961 = state_12844__$1;(statearr_12849_12961[(2)] = inst_12840);
(statearr_12849_12961[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12845 === (6)))
{var inst_12825 = (state_12844[(10)]);var inst_12830 = (state_12844[(8)]);var inst_12830__$1 = cljs.core.async.chan.call(null,(1));var inst_12831 = cljs.core.PersistentVector.EMPTY_NODE;var inst_12832 = [inst_12825,inst_12830__$1];var inst_12833 = (new cljs.core.PersistentVector(null,2,(5),inst_12831,inst_12832,null));var state_12844__$1 = (function (){var statearr_12850 = state_12844;(statearr_12850[(8)] = inst_12830__$1);
return statearr_12850;
})();return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12844__$1,(8),jobs,inst_12833);
} else
{if((state_val_12845 === (5)))
{var inst_12828 = cljs.core.async.close_BANG_.call(null,jobs);var state_12844__$1 = state_12844;var statearr_12851_12962 = state_12844__$1;(statearr_12851_12962[(2)] = inst_12828);
(statearr_12851_12962[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12845 === (4)))
{var inst_12825 = (state_12844[(10)]);var inst_12825__$1 = (state_12844[(2)]);var inst_12826 = (inst_12825__$1 == null);var state_12844__$1 = (function (){var statearr_12852 = state_12844;(statearr_12852[(10)] = inst_12825__$1);
return statearr_12852;
})();if(cljs.core.truth_(inst_12826))
{var statearr_12853_12963 = state_12844__$1;(statearr_12853_12963[(1)] = (5));
} else
{var statearr_12854_12964 = state_12844__$1;(statearr_12854_12964[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12845 === (3)))
{var inst_12842 = (state_12844[(2)]);var state_12844__$1 = state_12844;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12844__$1,inst_12842);
} else
{if((state_val_12845 === (2)))
{var state_12844__$1 = state_12844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12844__$1,(4),from);
} else
{if((state_val_12845 === (1)))
{var state_12844__$1 = state_12844;var statearr_12855_12965 = state_12844__$1;(statearr_12855_12965[(2)] = null);
(statearr_12855_12965[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___12959,jobs,results,process,async))
;return ((function (switch__6465__auto__,c__6480__auto___12959,jobs,results,process,async){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_12859 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12859[(0)] = state_machine__6466__auto__);
(statearr_12859[(1)] = (1));
return statearr_12859;
});
var state_machine__6466__auto____1 = (function (state_12844){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12844);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e12860){if((e12860 instanceof Object))
{var ex__6469__auto__ = e12860;var statearr_12861_12966 = state_12844;(statearr_12861_12966[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12844);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12860;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12967 = state_12844;
state_12844 = G__12967;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12844){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___12959,jobs,results,process,async))
})();var state__6482__auto__ = (function (){var statearr_12862 = f__6481__auto__.call(null);(statearr_12862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___12959);
return statearr_12862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___12959,jobs,results,process,async))
);
var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__,jobs,results,process,async){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__,jobs,results,process,async){
return (function (state_12900){var state_val_12901 = (state_12900[(1)]);if((state_val_12901 === (7)))
{var inst_12896 = (state_12900[(2)]);var state_12900__$1 = state_12900;var statearr_12902_12968 = state_12900__$1;(statearr_12902_12968[(2)] = inst_12896);
(statearr_12902_12968[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (20)))
{var state_12900__$1 = state_12900;var statearr_12903_12969 = state_12900__$1;(statearr_12903_12969[(2)] = null);
(statearr_12903_12969[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (1)))
{var state_12900__$1 = state_12900;var statearr_12904_12970 = state_12900__$1;(statearr_12904_12970[(2)] = null);
(statearr_12904_12970[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (4)))
{var inst_12865 = (state_12900[(7)]);var inst_12865__$1 = (state_12900[(2)]);var inst_12866 = (inst_12865__$1 == null);var state_12900__$1 = (function (){var statearr_12905 = state_12900;(statearr_12905[(7)] = inst_12865__$1);
return statearr_12905;
})();if(cljs.core.truth_(inst_12866))
{var statearr_12906_12971 = state_12900__$1;(statearr_12906_12971[(1)] = (5));
} else
{var statearr_12907_12972 = state_12900__$1;(statearr_12907_12972[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (15)))
{var inst_12878 = (state_12900[(8)]);var state_12900__$1 = state_12900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12900__$1,(18),to,inst_12878);
} else
{if((state_val_12901 === (21)))
{var inst_12891 = (state_12900[(2)]);var state_12900__$1 = state_12900;var statearr_12908_12973 = state_12900__$1;(statearr_12908_12973[(2)] = inst_12891);
(statearr_12908_12973[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (13)))
{var inst_12893 = (state_12900[(2)]);var state_12900__$1 = (function (){var statearr_12909 = state_12900;(statearr_12909[(9)] = inst_12893);
return statearr_12909;
})();var statearr_12910_12974 = state_12900__$1;(statearr_12910_12974[(2)] = null);
(statearr_12910_12974[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (6)))
{var inst_12865 = (state_12900[(7)]);var state_12900__$1 = state_12900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12900__$1,(11),inst_12865);
} else
{if((state_val_12901 === (17)))
{var inst_12886 = (state_12900[(2)]);var state_12900__$1 = state_12900;if(cljs.core.truth_(inst_12886))
{var statearr_12911_12975 = state_12900__$1;(statearr_12911_12975[(1)] = (19));
} else
{var statearr_12912_12976 = state_12900__$1;(statearr_12912_12976[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (3)))
{var inst_12898 = (state_12900[(2)]);var state_12900__$1 = state_12900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12900__$1,inst_12898);
} else
{if((state_val_12901 === (12)))
{var inst_12875 = (state_12900[(10)]);var state_12900__$1 = state_12900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12900__$1,(14),inst_12875);
} else
{if((state_val_12901 === (2)))
{var state_12900__$1 = state_12900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12900__$1,(4),results);
} else
{if((state_val_12901 === (19)))
{var state_12900__$1 = state_12900;var statearr_12913_12977 = state_12900__$1;(statearr_12913_12977[(2)] = null);
(statearr_12913_12977[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (11)))
{var inst_12875 = (state_12900[(2)]);var state_12900__$1 = (function (){var statearr_12914 = state_12900;(statearr_12914[(10)] = inst_12875);
return statearr_12914;
})();var statearr_12915_12978 = state_12900__$1;(statearr_12915_12978[(2)] = null);
(statearr_12915_12978[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (9)))
{var state_12900__$1 = state_12900;var statearr_12916_12979 = state_12900__$1;(statearr_12916_12979[(2)] = null);
(statearr_12916_12979[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (5)))
{var state_12900__$1 = state_12900;if(cljs.core.truth_(close_QMARK_))
{var statearr_12917_12980 = state_12900__$1;(statearr_12917_12980[(1)] = (8));
} else
{var statearr_12918_12981 = state_12900__$1;(statearr_12918_12981[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (14)))
{var inst_12880 = (state_12900[(11)]);var inst_12878 = (state_12900[(8)]);var inst_12878__$1 = (state_12900[(2)]);var inst_12879 = (inst_12878__$1 == null);var inst_12880__$1 = cljs.core.not.call(null,inst_12879);var state_12900__$1 = (function (){var statearr_12919 = state_12900;(statearr_12919[(11)] = inst_12880__$1);
(statearr_12919[(8)] = inst_12878__$1);
return statearr_12919;
})();if(inst_12880__$1)
{var statearr_12920_12982 = state_12900__$1;(statearr_12920_12982[(1)] = (15));
} else
{var statearr_12921_12983 = state_12900__$1;(statearr_12921_12983[(1)] = (16));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (16)))
{var inst_12880 = (state_12900[(11)]);var state_12900__$1 = state_12900;var statearr_12922_12984 = state_12900__$1;(statearr_12922_12984[(2)] = inst_12880);
(statearr_12922_12984[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (10)))
{var inst_12872 = (state_12900[(2)]);var state_12900__$1 = state_12900;var statearr_12923_12985 = state_12900__$1;(statearr_12923_12985[(2)] = inst_12872);
(statearr_12923_12985[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (18)))
{var inst_12883 = (state_12900[(2)]);var state_12900__$1 = state_12900;var statearr_12924_12986 = state_12900__$1;(statearr_12924_12986[(2)] = inst_12883);
(statearr_12924_12986[(1)] = (17));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12901 === (8)))
{var inst_12869 = cljs.core.async.close_BANG_.call(null,to);var state_12900__$1 = state_12900;var statearr_12925_12987 = state_12900__$1;(statearr_12925_12987[(2)] = inst_12869);
(statearr_12925_12987[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto__,jobs,results,process,async))
;return ((function (switch__6465__auto__,c__6480__auto__,jobs,results,process,async){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_12929 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12929[(0)] = state_machine__6466__auto__);
(statearr_12929[(1)] = (1));
return statearr_12929;
});
var state_machine__6466__auto____1 = (function (state_12900){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_12900);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e12930){if((e12930 instanceof Object))
{var ex__6469__auto__ = e12930;var statearr_12931_12988 = state_12900;(statearr_12931_12988[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12930;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12989 = state_12900;
state_12900 = G__12989;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_12900){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_12900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__,jobs,results,process,async))
})();var state__6482__auto__ = (function (){var statearr_12932 = f__6481__auto__.call(null);(statearr_12932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_12932;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__,jobs,results,process,async))
);
return c__6480__auto__;
});
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the async function af, with parallelism n. af
* must be a function of two arguments, the first an input value and
* the second a channel on which to place the result(s). af must close!
* the channel before returning.  The presumption is that af will
* return immediately, having launched some asynchronous operation
* whose completion/callback will manipulate the result channel. Outputs
* will be returned in order relative to  the inputs. By default, the to
* channel will be closed when the from channel closes, but can be
* determined by the close?  parameter. Will stop consuming the from
* channel if the to channel closes.
*/
cljs.core.async.pipeline_async = (function() {
var pipeline_async = null;
var pipeline_async__4 = (function (n,to,af,from){return pipeline_async.call(null,n,to,af,from,true);
});
var pipeline_async__5 = (function (n,to,af,from,close_QMARK_){return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});
pipeline_async = function(n,to,af,from,close_QMARK_){
switch(arguments.length){
case 4:
return pipeline_async__4.call(this,n,to,af,from);
case 5:
return pipeline_async__5.call(this,n,to,af,from,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline_async.cljs$core$IFn$_invoke$arity$4 = pipeline_async__4;
pipeline_async.cljs$core$IFn$_invoke$arity$5 = pipeline_async__5;
return pipeline_async;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel, subject to the transducer xf, with parallelism n. Because
* it is parallel, the transducer will be applied independently to each
* element, not across elements, and may produce zero or more outputs
* per input.  Outputs will be returned in order relative to the
* inputs. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes.
* 
* Note this is supplied for API compatibility with the Clojure version.
* Values of N > 1 will not result in actual concurrency in a
* single-threaded runtime.
*/
cljs.core.async.pipeline = (function() {
var pipeline = null;
var pipeline__4 = (function (n,to,xf,from){return pipeline.call(null,n,to,xf,from,true);
});
var pipeline__5 = (function (n,to,xf,from,close_QMARK_){return pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});
var pipeline__6 = (function (n,to,xf,from,close_QMARK_,ex_handler){return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});
pipeline = function(n,to,xf,from,close_QMARK_,ex_handler){
switch(arguments.length){
case 4:
return pipeline__4.call(this,n,to,xf,from);
case 5:
return pipeline__5.call(this,n,to,xf,from,close_QMARK_);
case 6:
return pipeline__6.call(this,n,to,xf,from,close_QMARK_,ex_handler);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipeline.cljs$core$IFn$_invoke$arity$4 = pipeline__4;
pipeline.cljs$core$IFn$_invoke$arity$5 = pipeline__5;
pipeline.cljs$core$IFn$_invoke$arity$6 = pipeline__6;
return pipeline;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6480__auto___13090 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___13090,tc,fc){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___13090,tc,fc){
return (function (state_13065){var state_val_13066 = (state_13065[(1)]);if((state_val_13066 === (7)))
{var inst_13061 = (state_13065[(2)]);var state_13065__$1 = state_13065;var statearr_13067_13091 = state_13065__$1;(statearr_13067_13091[(2)] = inst_13061);
(statearr_13067_13091[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (1)))
{var state_13065__$1 = state_13065;var statearr_13068_13092 = state_13065__$1;(statearr_13068_13092[(2)] = null);
(statearr_13068_13092[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (4)))
{var inst_13042 = (state_13065[(7)]);var inst_13042__$1 = (state_13065[(2)]);var inst_13043 = (inst_13042__$1 == null);var state_13065__$1 = (function (){var statearr_13069 = state_13065;(statearr_13069[(7)] = inst_13042__$1);
return statearr_13069;
})();if(cljs.core.truth_(inst_13043))
{var statearr_13070_13093 = state_13065__$1;(statearr_13070_13093[(1)] = (5));
} else
{var statearr_13071_13094 = state_13065__$1;(statearr_13071_13094[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (13)))
{var state_13065__$1 = state_13065;var statearr_13072_13095 = state_13065__$1;(statearr_13072_13095[(2)] = null);
(statearr_13072_13095[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (6)))
{var inst_13042 = (state_13065[(7)]);var inst_13048 = p.call(null,inst_13042);var state_13065__$1 = state_13065;if(cljs.core.truth_(inst_13048))
{var statearr_13073_13096 = state_13065__$1;(statearr_13073_13096[(1)] = (9));
} else
{var statearr_13074_13097 = state_13065__$1;(statearr_13074_13097[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (3)))
{var inst_13063 = (state_13065[(2)]);var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13065__$1,inst_13063);
} else
{if((state_val_13066 === (12)))
{var state_13065__$1 = state_13065;var statearr_13075_13098 = state_13065__$1;(statearr_13075_13098[(2)] = null);
(statearr_13075_13098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (2)))
{var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13065__$1,(4),ch);
} else
{if((state_val_13066 === (11)))
{var inst_13042 = (state_13065[(7)]);var inst_13052 = (state_13065[(2)]);var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13065__$1,(8),inst_13052,inst_13042);
} else
{if((state_val_13066 === (9)))
{var state_13065__$1 = state_13065;var statearr_13076_13099 = state_13065__$1;(statearr_13076_13099[(2)] = tc);
(statearr_13076_13099[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (5)))
{var inst_13045 = cljs.core.async.close_BANG_.call(null,tc);var inst_13046 = cljs.core.async.close_BANG_.call(null,fc);var state_13065__$1 = (function (){var statearr_13077 = state_13065;(statearr_13077[(8)] = inst_13045);
return statearr_13077;
})();var statearr_13078_13100 = state_13065__$1;(statearr_13078_13100[(2)] = inst_13046);
(statearr_13078_13100[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (14)))
{var inst_13059 = (state_13065[(2)]);var state_13065__$1 = state_13065;var statearr_13079_13101 = state_13065__$1;(statearr_13079_13101[(2)] = inst_13059);
(statearr_13079_13101[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (10)))
{var state_13065__$1 = state_13065;var statearr_13080_13102 = state_13065__$1;(statearr_13080_13102[(2)] = fc);
(statearr_13080_13102[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13066 === (8)))
{var inst_13054 = (state_13065[(2)]);var state_13065__$1 = state_13065;if(cljs.core.truth_(inst_13054))
{var statearr_13081_13103 = state_13065__$1;(statearr_13081_13103[(1)] = (12));
} else
{var statearr_13082_13104 = state_13065__$1;(statearr_13082_13104[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___13090,tc,fc))
;return ((function (switch__6465__auto__,c__6480__auto___13090,tc,fc){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_13086 = [null,null,null,null,null,null,null,null,null];(statearr_13086[(0)] = state_machine__6466__auto__);
(statearr_13086[(1)] = (1));
return statearr_13086;
});
var state_machine__6466__auto____1 = (function (state_13065){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_13065);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e13087){if((e13087 instanceof Object))
{var ex__6469__auto__ = e13087;var statearr_13088_13105 = state_13065;(statearr_13088_13105[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13065);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13087;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13106 = state_13065;
state_13065 = G__13106;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_13065){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_13065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___13090,tc,fc))
})();var state__6482__auto__ = (function (){var statearr_13089 = f__6481__auto__.call(null);(statearr_13089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___13090);
return statearr_13089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___13090,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__){
return (function (state_13153){var state_val_13154 = (state_13153[(1)]);if((state_val_13154 === (7)))
{var inst_13149 = (state_13153[(2)]);var state_13153__$1 = state_13153;var statearr_13155_13171 = state_13153__$1;(statearr_13155_13171[(2)] = inst_13149);
(statearr_13155_13171[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13154 === (6)))
{var inst_13139 = (state_13153[(7)]);var inst_13142 = (state_13153[(8)]);var inst_13146 = f.call(null,inst_13139,inst_13142);var inst_13139__$1 = inst_13146;var state_13153__$1 = (function (){var statearr_13156 = state_13153;(statearr_13156[(7)] = inst_13139__$1);
return statearr_13156;
})();var statearr_13157_13172 = state_13153__$1;(statearr_13157_13172[(2)] = null);
(statearr_13157_13172[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13154 === (5)))
{var inst_13139 = (state_13153[(7)]);var state_13153__$1 = state_13153;var statearr_13158_13173 = state_13153__$1;(statearr_13158_13173[(2)] = inst_13139);
(statearr_13158_13173[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13154 === (4)))
{var inst_13142 = (state_13153[(8)]);var inst_13142__$1 = (state_13153[(2)]);var inst_13143 = (inst_13142__$1 == null);var state_13153__$1 = (function (){var statearr_13159 = state_13153;(statearr_13159[(8)] = inst_13142__$1);
return statearr_13159;
})();if(cljs.core.truth_(inst_13143))
{var statearr_13160_13174 = state_13153__$1;(statearr_13160_13174[(1)] = (5));
} else
{var statearr_13161_13175 = state_13153__$1;(statearr_13161_13175[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13154 === (3)))
{var inst_13151 = (state_13153[(2)]);var state_13153__$1 = state_13153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13153__$1,inst_13151);
} else
{if((state_val_13154 === (2)))
{var state_13153__$1 = state_13153;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13153__$1,(4),ch);
} else
{if((state_val_13154 === (1)))
{var inst_13139 = init;var state_13153__$1 = (function (){var statearr_13162 = state_13153;(statearr_13162[(7)] = inst_13139);
return statearr_13162;
})();var statearr_13163_13176 = state_13153__$1;(statearr_13163_13176[(2)] = null);
(statearr_13163_13176[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__6480__auto__))
;return ((function (switch__6465__auto__,c__6480__auto__){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_13167 = [null,null,null,null,null,null,null,null,null];(statearr_13167[(0)] = state_machine__6466__auto__);
(statearr_13167[(1)] = (1));
return statearr_13167;
});
var state_machine__6466__auto____1 = (function (state_13153){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_13153);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e13168){if((e13168 instanceof Object))
{var ex__6469__auto__ = e13168;var statearr_13169_13177 = state_13153;(statearr_13169_13177[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13153);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13168;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13178 = state_13153;
state_13153 = G__13178;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_13153){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_13153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__))
})();var state__6482__auto__ = (function (){var statearr_13170 = f__6481__auto__.call(null);(statearr_13170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_13170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__))
);
return c__6480__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__){
return (function (state_13252){var state_val_13253 = (state_13252[(1)]);if((state_val_13253 === (7)))
{var inst_13234 = (state_13252[(2)]);var state_13252__$1 = state_13252;var statearr_13254_13277 = state_13252__$1;(statearr_13254_13277[(2)] = inst_13234);
(statearr_13254_13277[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13253 === (1)))
{var inst_13228 = cljs.core.seq.call(null,coll);var inst_13229 = inst_13228;var state_13252__$1 = (function (){var statearr_13255 = state_13252;(statearr_13255[(7)] = inst_13229);
return statearr_13255;
})();var statearr_13256_13278 = state_13252__$1;(statearr_13256_13278[(2)] = null);
(statearr_13256_13278[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13253 === (4)))
{var inst_13229 = (state_13252[(7)]);var inst_13232 = cljs.core.first.call(null,inst_13229);var state_13252__$1 = state_13252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13252__$1,(7),ch,inst_13232);
} else
{if((state_val_13253 === (13)))
{var inst_13246 = (state_13252[(2)]);var state_13252__$1 = state_13252;var statearr_13257_13279 = state_13252__$1;(statearr_13257_13279[(2)] = inst_13246);
(statearr_13257_13279[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13253 === (6)))
{var inst_13237 = (state_13252[(2)]);var state_13252__$1 = state_13252;if(cljs.core.truth_(inst_13237))
{var statearr_13258_13280 = state_13252__$1;(statearr_13258_13280[(1)] = (8));
} else
{var statearr_13259_13281 = state_13252__$1;(statearr_13259_13281[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13253 === (3)))
{var inst_13250 = (state_13252[(2)]);var state_13252__$1 = state_13252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13252__$1,inst_13250);
} else
{if((state_val_13253 === (12)))
{var state_13252__$1 = state_13252;var statearr_13260_13282 = state_13252__$1;(statearr_13260_13282[(2)] = null);
(statearr_13260_13282[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13253 === (2)))
{var inst_13229 = (state_13252[(7)]);var state_13252__$1 = state_13252;if(cljs.core.truth_(inst_13229))
{var statearr_13261_13283 = state_13252__$1;(statearr_13261_13283[(1)] = (4));
} else
{var statearr_13262_13284 = state_13252__$1;(statearr_13262_13284[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13253 === (11)))
{var inst_13243 = cljs.core.async.close_BANG_.call(null,ch);var state_13252__$1 = state_13252;var statearr_13263_13285 = state_13252__$1;(statearr_13263_13285[(2)] = inst_13243);
(statearr_13263_13285[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13253 === (9)))
{var state_13252__$1 = state_13252;if(cljs.core.truth_(close_QMARK_))
{var statearr_13264_13286 = state_13252__$1;(statearr_13264_13286[(1)] = (11));
} else
{var statearr_13265_13287 = state_13252__$1;(statearr_13265_13287[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13253 === (5)))
{var inst_13229 = (state_13252[(7)]);var state_13252__$1 = state_13252;var statearr_13266_13288 = state_13252__$1;(statearr_13266_13288[(2)] = inst_13229);
(statearr_13266_13288[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13253 === (10)))
{var inst_13248 = (state_13252[(2)]);var state_13252__$1 = state_13252;var statearr_13267_13289 = state_13252__$1;(statearr_13267_13289[(2)] = inst_13248);
(statearr_13267_13289[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13253 === (8)))
{var inst_13229 = (state_13252[(7)]);var inst_13239 = cljs.core.next.call(null,inst_13229);var inst_13229__$1 = inst_13239;var state_13252__$1 = (function (){var statearr_13268 = state_13252;(statearr_13268[(7)] = inst_13229__$1);
return statearr_13268;
})();var statearr_13269_13290 = state_13252__$1;(statearr_13269_13290[(2)] = null);
(statearr_13269_13290[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto__))
;return ((function (switch__6465__auto__,c__6480__auto__){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_13273 = [null,null,null,null,null,null,null,null];(statearr_13273[(0)] = state_machine__6466__auto__);
(statearr_13273[(1)] = (1));
return statearr_13273;
});
var state_machine__6466__auto____1 = (function (state_13252){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_13252);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e13274){if((e13274 instanceof Object))
{var ex__6469__auto__ = e13274;var statearr_13275_13291 = state_13252;(statearr_13275_13291[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13252);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13274;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13292 = state_13252;
state_13252 = G__13292;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_13252){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_13252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__))
})();var state__6482__auto__ = (function (){var statearr_13276 = f__6481__auto__.call(null);(statearr_13276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_13276;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__))
);
return c__6480__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj13294 = {};return obj13294;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3628__auto__ = _;if(and__3628__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4277__auto__ = (((_ == null))?null:_);return (function (){var or__3640__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj13296 = {};return obj13296;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13518 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13518 = (function (cs,ch,mult,meta13519){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13519 = meta13519;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13518.cljs$lang$type = true;
cljs.core.async.t13518.cljs$lang$ctorStr = "cljs.core.async/t13518";
cljs.core.async.t13518.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13518");
});})(cs))
;
cljs.core.async.t13518.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13518.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13518.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13518.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13518.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13518.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13518.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13520){var self__ = this;
var _13520__$1 = this;return self__.meta13519;
});})(cs))
;
cljs.core.async.t13518.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13520,meta13519__$1){var self__ = this;
var _13520__$1 = this;return (new cljs.core.async.t13518(self__.cs,self__.ch,self__.mult,meta13519__$1));
});})(cs))
;
cljs.core.async.__GT_t13518 = ((function (cs){
return (function __GT_t13518(cs__$1,ch__$1,mult__$1,meta13519){return (new cljs.core.async.t13518(cs__$1,ch__$1,mult__$1,meta13519));
});})(cs))
;
}
return (new cljs.core.async.t13518(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6480__auto___13739 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___13739,cs,m,dchan,dctr,done){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___13739,cs,m,dchan,dctr,done){
return (function (state_13651){var state_val_13652 = (state_13651[(1)]);if((state_val_13652 === (7)))
{var inst_13647 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13653_13740 = state_13651__$1;(statearr_13653_13740[(2)] = inst_13647);
(statearr_13653_13740[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (20)))
{var inst_13552 = (state_13651[(7)]);var inst_13562 = cljs.core.first.call(null,inst_13552);var inst_13563 = cljs.core.nth.call(null,inst_13562,(0),null);var inst_13564 = cljs.core.nth.call(null,inst_13562,(1),null);var state_13651__$1 = (function (){var statearr_13654 = state_13651;(statearr_13654[(8)] = inst_13563);
return statearr_13654;
})();if(cljs.core.truth_(inst_13564))
{var statearr_13655_13741 = state_13651__$1;(statearr_13655_13741[(1)] = (22));
} else
{var statearr_13656_13742 = state_13651__$1;(statearr_13656_13742[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (27)))
{var inst_13523 = (state_13651[(9)]);var inst_13599 = (state_13651[(10)]);var inst_13592 = (state_13651[(11)]);var inst_13594 = (state_13651[(12)]);var inst_13599__$1 = cljs.core._nth.call(null,inst_13592,inst_13594);var inst_13600 = cljs.core.async.put_BANG_.call(null,inst_13599__$1,inst_13523,done);var state_13651__$1 = (function (){var statearr_13657 = state_13651;(statearr_13657[(10)] = inst_13599__$1);
return statearr_13657;
})();if(cljs.core.truth_(inst_13600))
{var statearr_13658_13743 = state_13651__$1;(statearr_13658_13743[(1)] = (30));
} else
{var statearr_13659_13744 = state_13651__$1;(statearr_13659_13744[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (1)))
{var state_13651__$1 = state_13651;var statearr_13660_13745 = state_13651__$1;(statearr_13660_13745[(2)] = null);
(statearr_13660_13745[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (24)))
{var inst_13552 = (state_13651[(7)]);var inst_13569 = (state_13651[(2)]);var inst_13570 = cljs.core.next.call(null,inst_13552);var inst_13532 = inst_13570;var inst_13533 = null;var inst_13534 = (0);var inst_13535 = (0);var state_13651__$1 = (function (){var statearr_13661 = state_13651;(statearr_13661[(13)] = inst_13569);
(statearr_13661[(14)] = inst_13535);
(statearr_13661[(15)] = inst_13532);
(statearr_13661[(16)] = inst_13534);
(statearr_13661[(17)] = inst_13533);
return statearr_13661;
})();var statearr_13662_13746 = state_13651__$1;(statearr_13662_13746[(2)] = null);
(statearr_13662_13746[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (39)))
{var state_13651__$1 = state_13651;var statearr_13666_13747 = state_13651__$1;(statearr_13666_13747[(2)] = null);
(statearr_13666_13747[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (4)))
{var inst_13523 = (state_13651[(9)]);var inst_13523__$1 = (state_13651[(2)]);var inst_13524 = (inst_13523__$1 == null);var state_13651__$1 = (function (){var statearr_13667 = state_13651;(statearr_13667[(9)] = inst_13523__$1);
return statearr_13667;
})();if(cljs.core.truth_(inst_13524))
{var statearr_13668_13748 = state_13651__$1;(statearr_13668_13748[(1)] = (5));
} else
{var statearr_13669_13749 = state_13651__$1;(statearr_13669_13749[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (15)))
{var inst_13535 = (state_13651[(14)]);var inst_13532 = (state_13651[(15)]);var inst_13534 = (state_13651[(16)]);var inst_13533 = (state_13651[(17)]);var inst_13548 = (state_13651[(2)]);var inst_13549 = (inst_13535 + (1));var tmp13663 = inst_13532;var tmp13664 = inst_13534;var tmp13665 = inst_13533;var inst_13532__$1 = tmp13663;var inst_13533__$1 = tmp13665;var inst_13534__$1 = tmp13664;var inst_13535__$1 = inst_13549;var state_13651__$1 = (function (){var statearr_13670 = state_13651;(statearr_13670[(14)] = inst_13535__$1);
(statearr_13670[(15)] = inst_13532__$1);
(statearr_13670[(16)] = inst_13534__$1);
(statearr_13670[(17)] = inst_13533__$1);
(statearr_13670[(18)] = inst_13548);
return statearr_13670;
})();var statearr_13671_13750 = state_13651__$1;(statearr_13671_13750[(2)] = null);
(statearr_13671_13750[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (21)))
{var inst_13573 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13675_13751 = state_13651__$1;(statearr_13675_13751[(2)] = inst_13573);
(statearr_13675_13751[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (31)))
{var inst_13599 = (state_13651[(10)]);var inst_13603 = done.call(null,null);var inst_13604 = cljs.core.async.untap_STAR_.call(null,m,inst_13599);var state_13651__$1 = (function (){var statearr_13676 = state_13651;(statearr_13676[(19)] = inst_13603);
return statearr_13676;
})();var statearr_13677_13752 = state_13651__$1;(statearr_13677_13752[(2)] = inst_13604);
(statearr_13677_13752[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (32)))
{var inst_13593 = (state_13651[(20)]);var inst_13592 = (state_13651[(11)]);var inst_13591 = (state_13651[(21)]);var inst_13594 = (state_13651[(12)]);var inst_13606 = (state_13651[(2)]);var inst_13607 = (inst_13594 + (1));var tmp13672 = inst_13593;var tmp13673 = inst_13592;var tmp13674 = inst_13591;var inst_13591__$1 = tmp13674;var inst_13592__$1 = tmp13673;var inst_13593__$1 = tmp13672;var inst_13594__$1 = inst_13607;var state_13651__$1 = (function (){var statearr_13678 = state_13651;(statearr_13678[(22)] = inst_13606);
(statearr_13678[(20)] = inst_13593__$1);
(statearr_13678[(11)] = inst_13592__$1);
(statearr_13678[(21)] = inst_13591__$1);
(statearr_13678[(12)] = inst_13594__$1);
return statearr_13678;
})();var statearr_13679_13753 = state_13651__$1;(statearr_13679_13753[(2)] = null);
(statearr_13679_13753[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (40)))
{var inst_13619 = (state_13651[(23)]);var inst_13623 = done.call(null,null);var inst_13624 = cljs.core.async.untap_STAR_.call(null,m,inst_13619);var state_13651__$1 = (function (){var statearr_13680 = state_13651;(statearr_13680[(24)] = inst_13623);
return statearr_13680;
})();var statearr_13681_13754 = state_13651__$1;(statearr_13681_13754[(2)] = inst_13624);
(statearr_13681_13754[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (33)))
{var inst_13610 = (state_13651[(25)]);var inst_13612 = cljs.core.chunked_seq_QMARK_.call(null,inst_13610);var state_13651__$1 = state_13651;if(inst_13612)
{var statearr_13682_13755 = state_13651__$1;(statearr_13682_13755[(1)] = (36));
} else
{var statearr_13683_13756 = state_13651__$1;(statearr_13683_13756[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (13)))
{var inst_13542 = (state_13651[(26)]);var inst_13545 = cljs.core.async.close_BANG_.call(null,inst_13542);var state_13651__$1 = state_13651;var statearr_13684_13757 = state_13651__$1;(statearr_13684_13757[(2)] = inst_13545);
(statearr_13684_13757[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (22)))
{var inst_13563 = (state_13651[(8)]);var inst_13566 = cljs.core.async.close_BANG_.call(null,inst_13563);var state_13651__$1 = state_13651;var statearr_13685_13758 = state_13651__$1;(statearr_13685_13758[(2)] = inst_13566);
(statearr_13685_13758[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (36)))
{var inst_13610 = (state_13651[(25)]);var inst_13614 = cljs.core.chunk_first.call(null,inst_13610);var inst_13615 = cljs.core.chunk_rest.call(null,inst_13610);var inst_13616 = cljs.core.count.call(null,inst_13614);var inst_13591 = inst_13615;var inst_13592 = inst_13614;var inst_13593 = inst_13616;var inst_13594 = (0);var state_13651__$1 = (function (){var statearr_13686 = state_13651;(statearr_13686[(20)] = inst_13593);
(statearr_13686[(11)] = inst_13592);
(statearr_13686[(21)] = inst_13591);
(statearr_13686[(12)] = inst_13594);
return statearr_13686;
})();var statearr_13687_13759 = state_13651__$1;(statearr_13687_13759[(2)] = null);
(statearr_13687_13759[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (41)))
{var inst_13610 = (state_13651[(25)]);var inst_13626 = (state_13651[(2)]);var inst_13627 = cljs.core.next.call(null,inst_13610);var inst_13591 = inst_13627;var inst_13592 = null;var inst_13593 = (0);var inst_13594 = (0);var state_13651__$1 = (function (){var statearr_13688 = state_13651;(statearr_13688[(20)] = inst_13593);
(statearr_13688[(27)] = inst_13626);
(statearr_13688[(11)] = inst_13592);
(statearr_13688[(21)] = inst_13591);
(statearr_13688[(12)] = inst_13594);
return statearr_13688;
})();var statearr_13689_13760 = state_13651__$1;(statearr_13689_13760[(2)] = null);
(statearr_13689_13760[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (43)))
{var state_13651__$1 = state_13651;var statearr_13690_13761 = state_13651__$1;(statearr_13690_13761[(2)] = null);
(statearr_13690_13761[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (29)))
{var inst_13635 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13691_13762 = state_13651__$1;(statearr_13691_13762[(2)] = inst_13635);
(statearr_13691_13762[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (44)))
{var inst_13644 = (state_13651[(2)]);var state_13651__$1 = (function (){var statearr_13692 = state_13651;(statearr_13692[(28)] = inst_13644);
return statearr_13692;
})();var statearr_13693_13763 = state_13651__$1;(statearr_13693_13763[(2)] = null);
(statearr_13693_13763[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (6)))
{var inst_13583 = (state_13651[(29)]);var inst_13582 = cljs.core.deref.call(null,cs);var inst_13583__$1 = cljs.core.keys.call(null,inst_13582);var inst_13584 = cljs.core.count.call(null,inst_13583__$1);var inst_13585 = cljs.core.reset_BANG_.call(null,dctr,inst_13584);var inst_13590 = cljs.core.seq.call(null,inst_13583__$1);var inst_13591 = inst_13590;var inst_13592 = null;var inst_13593 = (0);var inst_13594 = (0);var state_13651__$1 = (function (){var statearr_13694 = state_13651;(statearr_13694[(20)] = inst_13593);
(statearr_13694[(29)] = inst_13583__$1);
(statearr_13694[(30)] = inst_13585);
(statearr_13694[(11)] = inst_13592);
(statearr_13694[(21)] = inst_13591);
(statearr_13694[(12)] = inst_13594);
return statearr_13694;
})();var statearr_13695_13764 = state_13651__$1;(statearr_13695_13764[(2)] = null);
(statearr_13695_13764[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (28)))
{var inst_13610 = (state_13651[(25)]);var inst_13591 = (state_13651[(21)]);var inst_13610__$1 = cljs.core.seq.call(null,inst_13591);var state_13651__$1 = (function (){var statearr_13696 = state_13651;(statearr_13696[(25)] = inst_13610__$1);
return statearr_13696;
})();if(inst_13610__$1)
{var statearr_13697_13765 = state_13651__$1;(statearr_13697_13765[(1)] = (33));
} else
{var statearr_13698_13766 = state_13651__$1;(statearr_13698_13766[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (25)))
{var inst_13593 = (state_13651[(20)]);var inst_13594 = (state_13651[(12)]);var inst_13596 = (inst_13594 < inst_13593);var inst_13597 = inst_13596;var state_13651__$1 = state_13651;if(cljs.core.truth_(inst_13597))
{var statearr_13699_13767 = state_13651__$1;(statearr_13699_13767[(1)] = (27));
} else
{var statearr_13700_13768 = state_13651__$1;(statearr_13700_13768[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (34)))
{var state_13651__$1 = state_13651;var statearr_13701_13769 = state_13651__$1;(statearr_13701_13769[(2)] = null);
(statearr_13701_13769[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (17)))
{var state_13651__$1 = state_13651;var statearr_13702_13770 = state_13651__$1;(statearr_13702_13770[(2)] = null);
(statearr_13702_13770[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (3)))
{var inst_13649 = (state_13651[(2)]);var state_13651__$1 = state_13651;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13651__$1,inst_13649);
} else
{if((state_val_13652 === (12)))
{var inst_13578 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13703_13771 = state_13651__$1;(statearr_13703_13771[(2)] = inst_13578);
(statearr_13703_13771[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (2)))
{var state_13651__$1 = state_13651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13651__$1,(4),ch);
} else
{if((state_val_13652 === (23)))
{var state_13651__$1 = state_13651;var statearr_13704_13772 = state_13651__$1;(statearr_13704_13772[(2)] = null);
(statearr_13704_13772[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (35)))
{var inst_13633 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13705_13773 = state_13651__$1;(statearr_13705_13773[(2)] = inst_13633);
(statearr_13705_13773[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (19)))
{var inst_13552 = (state_13651[(7)]);var inst_13556 = cljs.core.chunk_first.call(null,inst_13552);var inst_13557 = cljs.core.chunk_rest.call(null,inst_13552);var inst_13558 = cljs.core.count.call(null,inst_13556);var inst_13532 = inst_13557;var inst_13533 = inst_13556;var inst_13534 = inst_13558;var inst_13535 = (0);var state_13651__$1 = (function (){var statearr_13706 = state_13651;(statearr_13706[(14)] = inst_13535);
(statearr_13706[(15)] = inst_13532);
(statearr_13706[(16)] = inst_13534);
(statearr_13706[(17)] = inst_13533);
return statearr_13706;
})();var statearr_13707_13774 = state_13651__$1;(statearr_13707_13774[(2)] = null);
(statearr_13707_13774[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (11)))
{var inst_13532 = (state_13651[(15)]);var inst_13552 = (state_13651[(7)]);var inst_13552__$1 = cljs.core.seq.call(null,inst_13532);var state_13651__$1 = (function (){var statearr_13708 = state_13651;(statearr_13708[(7)] = inst_13552__$1);
return statearr_13708;
})();if(inst_13552__$1)
{var statearr_13709_13775 = state_13651__$1;(statearr_13709_13775[(1)] = (16));
} else
{var statearr_13710_13776 = state_13651__$1;(statearr_13710_13776[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (9)))
{var inst_13580 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13711_13777 = state_13651__$1;(statearr_13711_13777[(2)] = inst_13580);
(statearr_13711_13777[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (5)))
{var inst_13530 = cljs.core.deref.call(null,cs);var inst_13531 = cljs.core.seq.call(null,inst_13530);var inst_13532 = inst_13531;var inst_13533 = null;var inst_13534 = (0);var inst_13535 = (0);var state_13651__$1 = (function (){var statearr_13712 = state_13651;(statearr_13712[(14)] = inst_13535);
(statearr_13712[(15)] = inst_13532);
(statearr_13712[(16)] = inst_13534);
(statearr_13712[(17)] = inst_13533);
return statearr_13712;
})();var statearr_13713_13778 = state_13651__$1;(statearr_13713_13778[(2)] = null);
(statearr_13713_13778[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (14)))
{var state_13651__$1 = state_13651;var statearr_13714_13779 = state_13651__$1;(statearr_13714_13779[(2)] = null);
(statearr_13714_13779[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (45)))
{var inst_13641 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13715_13780 = state_13651__$1;(statearr_13715_13780[(2)] = inst_13641);
(statearr_13715_13780[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (26)))
{var inst_13583 = (state_13651[(29)]);var inst_13637 = (state_13651[(2)]);var inst_13638 = cljs.core.seq.call(null,inst_13583);var state_13651__$1 = (function (){var statearr_13716 = state_13651;(statearr_13716[(31)] = inst_13637);
return statearr_13716;
})();if(inst_13638)
{var statearr_13717_13781 = state_13651__$1;(statearr_13717_13781[(1)] = (42));
} else
{var statearr_13718_13782 = state_13651__$1;(statearr_13718_13782[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (16)))
{var inst_13552 = (state_13651[(7)]);var inst_13554 = cljs.core.chunked_seq_QMARK_.call(null,inst_13552);var state_13651__$1 = state_13651;if(inst_13554)
{var statearr_13719_13783 = state_13651__$1;(statearr_13719_13783[(1)] = (19));
} else
{var statearr_13720_13784 = state_13651__$1;(statearr_13720_13784[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (38)))
{var inst_13630 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13721_13785 = state_13651__$1;(statearr_13721_13785[(2)] = inst_13630);
(statearr_13721_13785[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (30)))
{var state_13651__$1 = state_13651;var statearr_13722_13786 = state_13651__$1;(statearr_13722_13786[(2)] = null);
(statearr_13722_13786[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (10)))
{var inst_13535 = (state_13651[(14)]);var inst_13533 = (state_13651[(17)]);var inst_13541 = cljs.core._nth.call(null,inst_13533,inst_13535);var inst_13542 = cljs.core.nth.call(null,inst_13541,(0),null);var inst_13543 = cljs.core.nth.call(null,inst_13541,(1),null);var state_13651__$1 = (function (){var statearr_13723 = state_13651;(statearr_13723[(26)] = inst_13542);
return statearr_13723;
})();if(cljs.core.truth_(inst_13543))
{var statearr_13724_13787 = state_13651__$1;(statearr_13724_13787[(1)] = (13));
} else
{var statearr_13725_13788 = state_13651__$1;(statearr_13725_13788[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (18)))
{var inst_13576 = (state_13651[(2)]);var state_13651__$1 = state_13651;var statearr_13726_13789 = state_13651__$1;(statearr_13726_13789[(2)] = inst_13576);
(statearr_13726_13789[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (42)))
{var state_13651__$1 = state_13651;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13651__$1,(45),dchan);
} else
{if((state_val_13652 === (37)))
{var inst_13619 = (state_13651[(23)]);var inst_13610 = (state_13651[(25)]);var inst_13523 = (state_13651[(9)]);var inst_13619__$1 = cljs.core.first.call(null,inst_13610);var inst_13620 = cljs.core.async.put_BANG_.call(null,inst_13619__$1,inst_13523,done);var state_13651__$1 = (function (){var statearr_13727 = state_13651;(statearr_13727[(23)] = inst_13619__$1);
return statearr_13727;
})();if(cljs.core.truth_(inst_13620))
{var statearr_13728_13790 = state_13651__$1;(statearr_13728_13790[(1)] = (39));
} else
{var statearr_13729_13791 = state_13651__$1;(statearr_13729_13791[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13652 === (8)))
{var inst_13535 = (state_13651[(14)]);var inst_13534 = (state_13651[(16)]);var inst_13537 = (inst_13535 < inst_13534);var inst_13538 = inst_13537;var state_13651__$1 = state_13651;if(cljs.core.truth_(inst_13538))
{var statearr_13730_13792 = state_13651__$1;(statearr_13730_13792[(1)] = (10));
} else
{var statearr_13731_13793 = state_13651__$1;(statearr_13731_13793[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___13739,cs,m,dchan,dctr,done))
;return ((function (switch__6465__auto__,c__6480__auto___13739,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_13735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13735[(0)] = state_machine__6466__auto__);
(statearr_13735[(1)] = (1));
return statearr_13735;
});
var state_machine__6466__auto____1 = (function (state_13651){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_13651);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e13736){if((e13736 instanceof Object))
{var ex__6469__auto__ = e13736;var statearr_13737_13794 = state_13651;(statearr_13737_13794[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13651);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13736;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13795 = state_13651;
state_13651 = G__13795;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_13651){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_13651);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___13739,cs,m,dchan,dctr,done))
})();var state__6482__auto__ = (function (){var statearr_13738 = f__6481__auto__.call(null);(statearr_13738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___13739);
return statearr_13738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___13739,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj13797 = {};return obj13797;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3628__auto__ = m;if(and__3628__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4277__auto__ = (((m == null))?null:m);return (function (){var or__3640__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__13798){var map__13803 = p__13798;var map__13803__$1 = ((cljs.core.seq_QMARK_.call(null,map__13803))?cljs.core.apply.call(null,cljs.core.hash_map,map__13803):map__13803);var opts = map__13803__$1;var statearr_13804_13807 = state;(statearr_13804_13807[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts.call(null,((function (map__13803,map__13803__$1,opts){
return (function (val){var statearr_13805_13808 = state;(statearr_13805_13808[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__13803,map__13803__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_13806_13809 = state;(statearr_13806_13809[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__13798 = null;if (arguments.length > 3) {
  p__13798 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__13798);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__13810){
var state = cljs.core.first(arglist__13810);
arglist__13810 = cljs.core.next(arglist__13810);
var cont_block = cljs.core.first(arglist__13810);
arglist__13810 = cljs.core.next(arglist__13810);
var ports = cljs.core.first(arglist__13810);
var p__13798 = cljs.core.rest(arglist__13810);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__13798);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t13930 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13930 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta13931){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta13931 = meta13931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13930.cljs$lang$type = true;
cljs.core.async.t13930.cljs$lang$ctorStr = "cljs.core.async/t13930";
cljs.core.async.t13930.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t13930");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13930.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13930.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13930.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13930.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13930.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13930.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13930.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13932){var self__ = this;
var _13932__$1 = this;return self__.meta13931;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13932,meta13931__$1){var self__ = this;
var _13932__$1 = this;return (new cljs.core.async.t13930(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta13931__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13930 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13930(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13931){return (new cljs.core.async.t13930(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta13931));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13930(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6480__auto___14049 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___14049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___14049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_14002){var state_val_14003 = (state_14002[(1)]);if((state_val_14003 === (7)))
{var inst_13946 = (state_14002[(7)]);var inst_13951 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13946);var state_14002__$1 = state_14002;var statearr_14004_14050 = state_14002__$1;(statearr_14004_14050[(2)] = inst_13951);
(statearr_14004_14050[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (20)))
{var inst_13961 = (state_14002[(8)]);var state_14002__$1 = state_14002;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14002__$1,(23),out,inst_13961);
} else
{if((state_val_14003 === (1)))
{var inst_13936 = (state_14002[(9)]);var inst_13936__$1 = calc_state.call(null);var inst_13937 = cljs.core.seq_QMARK_.call(null,inst_13936__$1);var state_14002__$1 = (function (){var statearr_14005 = state_14002;(statearr_14005[(9)] = inst_13936__$1);
return statearr_14005;
})();if(inst_13937)
{var statearr_14006_14051 = state_14002__$1;(statearr_14006_14051[(1)] = (2));
} else
{var statearr_14007_14052 = state_14002__$1;(statearr_14007_14052[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (24)))
{var inst_13954 = (state_14002[(10)]);var inst_13946 = inst_13954;var state_14002__$1 = (function (){var statearr_14008 = state_14002;(statearr_14008[(7)] = inst_13946);
return statearr_14008;
})();var statearr_14009_14053 = state_14002__$1;(statearr_14009_14053[(2)] = null);
(statearr_14009_14053[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (4)))
{var inst_13936 = (state_14002[(9)]);var inst_13942 = (state_14002[(2)]);var inst_13943 = cljs.core.get.call(null,inst_13942,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13944 = cljs.core.get.call(null,inst_13942,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13945 = cljs.core.get.call(null,inst_13942,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_13946 = inst_13936;var state_14002__$1 = (function (){var statearr_14010 = state_14002;(statearr_14010[(7)] = inst_13946);
(statearr_14010[(11)] = inst_13944);
(statearr_14010[(12)] = inst_13945);
(statearr_14010[(13)] = inst_13943);
return statearr_14010;
})();var statearr_14011_14054 = state_14002__$1;(statearr_14011_14054[(2)] = null);
(statearr_14011_14054[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (15)))
{var state_14002__$1 = state_14002;var statearr_14012_14055 = state_14002__$1;(statearr_14012_14055[(2)] = null);
(statearr_14012_14055[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (21)))
{var inst_13954 = (state_14002[(10)]);var inst_13946 = inst_13954;var state_14002__$1 = (function (){var statearr_14013 = state_14002;(statearr_14013[(7)] = inst_13946);
return statearr_14013;
})();var statearr_14014_14056 = state_14002__$1;(statearr_14014_14056[(2)] = null);
(statearr_14014_14056[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (13)))
{var inst_13998 = (state_14002[(2)]);var state_14002__$1 = state_14002;var statearr_14015_14057 = state_14002__$1;(statearr_14015_14057[(2)] = inst_13998);
(statearr_14015_14057[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (22)))
{var inst_13996 = (state_14002[(2)]);var state_14002__$1 = state_14002;var statearr_14016_14058 = state_14002__$1;(statearr_14016_14058[(2)] = inst_13996);
(statearr_14016_14058[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (6)))
{var inst_14000 = (state_14002[(2)]);var state_14002__$1 = state_14002;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14002__$1,inst_14000);
} else
{if((state_val_14003 === (25)))
{var state_14002__$1 = state_14002;var statearr_14017_14059 = state_14002__$1;(statearr_14017_14059[(2)] = null);
(statearr_14017_14059[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (17)))
{var inst_13976 = (state_14002[(14)]);var state_14002__$1 = state_14002;var statearr_14018_14060 = state_14002__$1;(statearr_14018_14060[(2)] = inst_13976);
(statearr_14018_14060[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (3)))
{var inst_13936 = (state_14002[(9)]);var state_14002__$1 = state_14002;var statearr_14019_14061 = state_14002__$1;(statearr_14019_14061[(2)] = inst_13936);
(statearr_14019_14061[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (12)))
{var inst_13957 = (state_14002[(15)]);var inst_13976 = (state_14002[(14)]);var inst_13962 = (state_14002[(16)]);var inst_13976__$1 = inst_13957.call(null,inst_13962);var state_14002__$1 = (function (){var statearr_14020 = state_14002;(statearr_14020[(14)] = inst_13976__$1);
return statearr_14020;
})();if(cljs.core.truth_(inst_13976__$1))
{var statearr_14021_14062 = state_14002__$1;(statearr_14021_14062[(1)] = (17));
} else
{var statearr_14022_14063 = state_14002__$1;(statearr_14022_14063[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (2)))
{var inst_13936 = (state_14002[(9)]);var inst_13939 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13936);var state_14002__$1 = state_14002;var statearr_14023_14064 = state_14002__$1;(statearr_14023_14064[(2)] = inst_13939);
(statearr_14023_14064[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (23)))
{var inst_13987 = (state_14002[(2)]);var state_14002__$1 = state_14002;if(cljs.core.truth_(inst_13987))
{var statearr_14024_14065 = state_14002__$1;(statearr_14024_14065[(1)] = (24));
} else
{var statearr_14025_14066 = state_14002__$1;(statearr_14025_14066[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (19)))
{var inst_13984 = (state_14002[(2)]);var state_14002__$1 = state_14002;if(cljs.core.truth_(inst_13984))
{var statearr_14026_14067 = state_14002__$1;(statearr_14026_14067[(1)] = (20));
} else
{var statearr_14027_14068 = state_14002__$1;(statearr_14027_14068[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (11)))
{var inst_13961 = (state_14002[(8)]);var inst_13967 = (inst_13961 == null);var state_14002__$1 = state_14002;if(cljs.core.truth_(inst_13967))
{var statearr_14028_14069 = state_14002__$1;(statearr_14028_14069[(1)] = (14));
} else
{var statearr_14029_14070 = state_14002__$1;(statearr_14029_14070[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (9)))
{var inst_13954 = (state_14002[(10)]);var inst_13954__$1 = (state_14002[(2)]);var inst_13955 = cljs.core.get.call(null,inst_13954__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_13956 = cljs.core.get.call(null,inst_13954__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_13957 = cljs.core.get.call(null,inst_13954__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_14002__$1 = (function (){var statearr_14030 = state_14002;(statearr_14030[(15)] = inst_13957);
(statearr_14030[(10)] = inst_13954__$1);
(statearr_14030[(17)] = inst_13956);
return statearr_14030;
})();return cljs.core.async.ioc_alts_BANG_.call(null,state_14002__$1,(10),inst_13955);
} else
{if((state_val_14003 === (5)))
{var inst_13946 = (state_14002[(7)]);var inst_13949 = cljs.core.seq_QMARK_.call(null,inst_13946);var state_14002__$1 = state_14002;if(inst_13949)
{var statearr_14031_14071 = state_14002__$1;(statearr_14031_14071[(1)] = (7));
} else
{var statearr_14032_14072 = state_14002__$1;(statearr_14032_14072[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (14)))
{var inst_13962 = (state_14002[(16)]);var inst_13969 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13962);var state_14002__$1 = state_14002;var statearr_14033_14073 = state_14002__$1;(statearr_14033_14073[(2)] = inst_13969);
(statearr_14033_14073[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (26)))
{var inst_13992 = (state_14002[(2)]);var state_14002__$1 = state_14002;var statearr_14034_14074 = state_14002__$1;(statearr_14034_14074[(2)] = inst_13992);
(statearr_14034_14074[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (16)))
{var inst_13972 = (state_14002[(2)]);var inst_13973 = calc_state.call(null);var inst_13946 = inst_13973;var state_14002__$1 = (function (){var statearr_14035 = state_14002;(statearr_14035[(7)] = inst_13946);
(statearr_14035[(18)] = inst_13972);
return statearr_14035;
})();var statearr_14036_14075 = state_14002__$1;(statearr_14036_14075[(2)] = null);
(statearr_14036_14075[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (10)))
{var inst_13962 = (state_14002[(16)]);var inst_13961 = (state_14002[(8)]);var inst_13960 = (state_14002[(2)]);var inst_13961__$1 = cljs.core.nth.call(null,inst_13960,(0),null);var inst_13962__$1 = cljs.core.nth.call(null,inst_13960,(1),null);var inst_13963 = (inst_13961__$1 == null);var inst_13964 = cljs.core._EQ_.call(null,inst_13962__$1,change);var inst_13965 = (inst_13963) || (inst_13964);var state_14002__$1 = (function (){var statearr_14037 = state_14002;(statearr_14037[(16)] = inst_13962__$1);
(statearr_14037[(8)] = inst_13961__$1);
return statearr_14037;
})();if(cljs.core.truth_(inst_13965))
{var statearr_14038_14076 = state_14002__$1;(statearr_14038_14076[(1)] = (11));
} else
{var statearr_14039_14077 = state_14002__$1;(statearr_14039_14077[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (18)))
{var inst_13957 = (state_14002[(15)]);var inst_13956 = (state_14002[(17)]);var inst_13962 = (state_14002[(16)]);var inst_13979 = cljs.core.empty_QMARK_.call(null,inst_13957);var inst_13980 = inst_13956.call(null,inst_13962);var inst_13981 = cljs.core.not.call(null,inst_13980);var inst_13982 = (inst_13979) && (inst_13981);var state_14002__$1 = state_14002;var statearr_14040_14078 = state_14002__$1;(statearr_14040_14078[(2)] = inst_13982);
(statearr_14040_14078[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14003 === (8)))
{var inst_13946 = (state_14002[(7)]);var state_14002__$1 = state_14002;var statearr_14041_14079 = state_14002__$1;(statearr_14041_14079[(2)] = inst_13946);
(statearr_14041_14079[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___14049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6465__auto__,c__6480__auto___14049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_14045 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14045[(0)] = state_machine__6466__auto__);
(statearr_14045[(1)] = (1));
return statearr_14045;
});
var state_machine__6466__auto____1 = (function (state_14002){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_14002);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e14046){if((e14046 instanceof Object))
{var ex__6469__auto__ = e14046;var statearr_14047_14080 = state_14002;(statearr_14047_14080[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14002);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14046;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14081 = state_14002;
state_14002 = G__14081;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_14002){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_14002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___14049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6482__auto__ = (function (){var statearr_14048 = f__6481__auto__.call(null);(statearr_14048[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___14049);
return statearr_14048;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___14049,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj14083 = {};return obj14083;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3628__auto__ = p;if(and__3628__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3628__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4277__auto__ = (((p == null))?null:p);return (function (){var or__3640__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4277__auto__)]);if(or__3640__auto__)
{return or__3640__auto__;
} else
{var or__3640__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3640__auto____$1)
{return or__3640__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3640__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3640__auto__))
{return or__3640__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3640__auto__,mults){
return (function (p1__14084_SHARP_){if(cljs.core.truth_(p1__14084_SHARP_.call(null,topic)))
{return p1__14084_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14084_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3640__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14207 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14207 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14208){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14208 = meta14208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14207.cljs$lang$type = true;
cljs.core.async.t14207.cljs$lang$ctorStr = "cljs.core.async/t14207";
cljs.core.async.t14207.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14207");
});})(mults,ensure_mult))
;
cljs.core.async.t14207.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14207.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14207.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14207.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14207.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14207.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14207.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14207.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14209){var self__ = this;
var _14209__$1 = this;return self__.meta14208;
});})(mults,ensure_mult))
;
cljs.core.async.t14207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14209,meta14208__$1){var self__ = this;
var _14209__$1 = this;return (new cljs.core.async.t14207(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14208__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14207 = ((function (mults,ensure_mult){
return (function __GT_t14207(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14208){return (new cljs.core.async.t14207(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14208));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14207(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6480__auto___14329 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___14329,mults,ensure_mult,p){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___14329,mults,ensure_mult,p){
return (function (state_14281){var state_val_14282 = (state_14281[(1)]);if((state_val_14282 === (7)))
{var inst_14277 = (state_14281[(2)]);var state_14281__$1 = state_14281;var statearr_14283_14330 = state_14281__$1;(statearr_14283_14330[(2)] = inst_14277);
(statearr_14283_14330[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (20)))
{var state_14281__$1 = state_14281;var statearr_14284_14331 = state_14281__$1;(statearr_14284_14331[(2)] = null);
(statearr_14284_14331[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (1)))
{var state_14281__$1 = state_14281;var statearr_14285_14332 = state_14281__$1;(statearr_14285_14332[(2)] = null);
(statearr_14285_14332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (24)))
{var inst_14260 = (state_14281[(7)]);var inst_14269 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14260);var state_14281__$1 = state_14281;var statearr_14286_14333 = state_14281__$1;(statearr_14286_14333[(2)] = inst_14269);
(statearr_14286_14333[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (4)))
{var inst_14212 = (state_14281[(8)]);var inst_14212__$1 = (state_14281[(2)]);var inst_14213 = (inst_14212__$1 == null);var state_14281__$1 = (function (){var statearr_14287 = state_14281;(statearr_14287[(8)] = inst_14212__$1);
return statearr_14287;
})();if(cljs.core.truth_(inst_14213))
{var statearr_14288_14334 = state_14281__$1;(statearr_14288_14334[(1)] = (5));
} else
{var statearr_14289_14335 = state_14281__$1;(statearr_14289_14335[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (15)))
{var inst_14254 = (state_14281[(2)]);var state_14281__$1 = state_14281;var statearr_14290_14336 = state_14281__$1;(statearr_14290_14336[(2)] = inst_14254);
(statearr_14290_14336[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (21)))
{var inst_14274 = (state_14281[(2)]);var state_14281__$1 = (function (){var statearr_14291 = state_14281;(statearr_14291[(9)] = inst_14274);
return statearr_14291;
})();var statearr_14292_14337 = state_14281__$1;(statearr_14292_14337[(2)] = null);
(statearr_14292_14337[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (13)))
{var inst_14236 = (state_14281[(10)]);var inst_14238 = cljs.core.chunked_seq_QMARK_.call(null,inst_14236);var state_14281__$1 = state_14281;if(inst_14238)
{var statearr_14293_14338 = state_14281__$1;(statearr_14293_14338[(1)] = (16));
} else
{var statearr_14294_14339 = state_14281__$1;(statearr_14294_14339[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (22)))
{var inst_14266 = (state_14281[(2)]);var state_14281__$1 = state_14281;if(cljs.core.truth_(inst_14266))
{var statearr_14295_14340 = state_14281__$1;(statearr_14295_14340[(1)] = (23));
} else
{var statearr_14296_14341 = state_14281__$1;(statearr_14296_14341[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (6)))
{var inst_14260 = (state_14281[(7)]);var inst_14212 = (state_14281[(8)]);var inst_14262 = (state_14281[(11)]);var inst_14260__$1 = topic_fn.call(null,inst_14212);var inst_14261 = cljs.core.deref.call(null,mults);var inst_14262__$1 = cljs.core.get.call(null,inst_14261,inst_14260__$1);var state_14281__$1 = (function (){var statearr_14297 = state_14281;(statearr_14297[(7)] = inst_14260__$1);
(statearr_14297[(11)] = inst_14262__$1);
return statearr_14297;
})();if(cljs.core.truth_(inst_14262__$1))
{var statearr_14298_14342 = state_14281__$1;(statearr_14298_14342[(1)] = (19));
} else
{var statearr_14299_14343 = state_14281__$1;(statearr_14299_14343[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (25)))
{var inst_14271 = (state_14281[(2)]);var state_14281__$1 = state_14281;var statearr_14300_14344 = state_14281__$1;(statearr_14300_14344[(2)] = inst_14271);
(statearr_14300_14344[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (17)))
{var inst_14236 = (state_14281[(10)]);var inst_14245 = cljs.core.first.call(null,inst_14236);var inst_14246 = cljs.core.async.muxch_STAR_.call(null,inst_14245);var inst_14247 = cljs.core.async.close_BANG_.call(null,inst_14246);var inst_14248 = cljs.core.next.call(null,inst_14236);var inst_14222 = inst_14248;var inst_14223 = null;var inst_14224 = (0);var inst_14225 = (0);var state_14281__$1 = (function (){var statearr_14301 = state_14281;(statearr_14301[(12)] = inst_14225);
(statearr_14301[(13)] = inst_14224);
(statearr_14301[(14)] = inst_14223);
(statearr_14301[(15)] = inst_14222);
(statearr_14301[(16)] = inst_14247);
return statearr_14301;
})();var statearr_14302_14345 = state_14281__$1;(statearr_14302_14345[(2)] = null);
(statearr_14302_14345[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (3)))
{var inst_14279 = (state_14281[(2)]);var state_14281__$1 = state_14281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14281__$1,inst_14279);
} else
{if((state_val_14282 === (12)))
{var inst_14256 = (state_14281[(2)]);var state_14281__$1 = state_14281;var statearr_14303_14346 = state_14281__$1;(statearr_14303_14346[(2)] = inst_14256);
(statearr_14303_14346[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (2)))
{var state_14281__$1 = state_14281;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14281__$1,(4),ch);
} else
{if((state_val_14282 === (23)))
{var state_14281__$1 = state_14281;var statearr_14304_14347 = state_14281__$1;(statearr_14304_14347[(2)] = null);
(statearr_14304_14347[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (19)))
{var inst_14212 = (state_14281[(8)]);var inst_14262 = (state_14281[(11)]);var inst_14264 = cljs.core.async.muxch_STAR_.call(null,inst_14262);var state_14281__$1 = state_14281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14281__$1,(22),inst_14264,inst_14212);
} else
{if((state_val_14282 === (11)))
{var inst_14222 = (state_14281[(15)]);var inst_14236 = (state_14281[(10)]);var inst_14236__$1 = cljs.core.seq.call(null,inst_14222);var state_14281__$1 = (function (){var statearr_14305 = state_14281;(statearr_14305[(10)] = inst_14236__$1);
return statearr_14305;
})();if(inst_14236__$1)
{var statearr_14306_14348 = state_14281__$1;(statearr_14306_14348[(1)] = (13));
} else
{var statearr_14307_14349 = state_14281__$1;(statearr_14307_14349[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (9)))
{var inst_14258 = (state_14281[(2)]);var state_14281__$1 = state_14281;var statearr_14308_14350 = state_14281__$1;(statearr_14308_14350[(2)] = inst_14258);
(statearr_14308_14350[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (5)))
{var inst_14219 = cljs.core.deref.call(null,mults);var inst_14220 = cljs.core.vals.call(null,inst_14219);var inst_14221 = cljs.core.seq.call(null,inst_14220);var inst_14222 = inst_14221;var inst_14223 = null;var inst_14224 = (0);var inst_14225 = (0);var state_14281__$1 = (function (){var statearr_14309 = state_14281;(statearr_14309[(12)] = inst_14225);
(statearr_14309[(13)] = inst_14224);
(statearr_14309[(14)] = inst_14223);
(statearr_14309[(15)] = inst_14222);
return statearr_14309;
})();var statearr_14310_14351 = state_14281__$1;(statearr_14310_14351[(2)] = null);
(statearr_14310_14351[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (14)))
{var state_14281__$1 = state_14281;var statearr_14314_14352 = state_14281__$1;(statearr_14314_14352[(2)] = null);
(statearr_14314_14352[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (16)))
{var inst_14236 = (state_14281[(10)]);var inst_14240 = cljs.core.chunk_first.call(null,inst_14236);var inst_14241 = cljs.core.chunk_rest.call(null,inst_14236);var inst_14242 = cljs.core.count.call(null,inst_14240);var inst_14222 = inst_14241;var inst_14223 = inst_14240;var inst_14224 = inst_14242;var inst_14225 = (0);var state_14281__$1 = (function (){var statearr_14315 = state_14281;(statearr_14315[(12)] = inst_14225);
(statearr_14315[(13)] = inst_14224);
(statearr_14315[(14)] = inst_14223);
(statearr_14315[(15)] = inst_14222);
return statearr_14315;
})();var statearr_14316_14353 = state_14281__$1;(statearr_14316_14353[(2)] = null);
(statearr_14316_14353[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (10)))
{var inst_14225 = (state_14281[(12)]);var inst_14224 = (state_14281[(13)]);var inst_14223 = (state_14281[(14)]);var inst_14222 = (state_14281[(15)]);var inst_14230 = cljs.core._nth.call(null,inst_14223,inst_14225);var inst_14231 = cljs.core.async.muxch_STAR_.call(null,inst_14230);var inst_14232 = cljs.core.async.close_BANG_.call(null,inst_14231);var inst_14233 = (inst_14225 + (1));var tmp14311 = inst_14224;var tmp14312 = inst_14223;var tmp14313 = inst_14222;var inst_14222__$1 = tmp14313;var inst_14223__$1 = tmp14312;var inst_14224__$1 = tmp14311;var inst_14225__$1 = inst_14233;var state_14281__$1 = (function (){var statearr_14317 = state_14281;(statearr_14317[(17)] = inst_14232);
(statearr_14317[(12)] = inst_14225__$1);
(statearr_14317[(13)] = inst_14224__$1);
(statearr_14317[(14)] = inst_14223__$1);
(statearr_14317[(15)] = inst_14222__$1);
return statearr_14317;
})();var statearr_14318_14354 = state_14281__$1;(statearr_14318_14354[(2)] = null);
(statearr_14318_14354[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (18)))
{var inst_14251 = (state_14281[(2)]);var state_14281__$1 = state_14281;var statearr_14319_14355 = state_14281__$1;(statearr_14319_14355[(2)] = inst_14251);
(statearr_14319_14355[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14282 === (8)))
{var inst_14225 = (state_14281[(12)]);var inst_14224 = (state_14281[(13)]);var inst_14227 = (inst_14225 < inst_14224);var inst_14228 = inst_14227;var state_14281__$1 = state_14281;if(cljs.core.truth_(inst_14228))
{var statearr_14320_14356 = state_14281__$1;(statearr_14320_14356[(1)] = (10));
} else
{var statearr_14321_14357 = state_14281__$1;(statearr_14321_14357[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___14329,mults,ensure_mult,p))
;return ((function (switch__6465__auto__,c__6480__auto___14329,mults,ensure_mult,p){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_14325 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14325[(0)] = state_machine__6466__auto__);
(statearr_14325[(1)] = (1));
return statearr_14325;
});
var state_machine__6466__auto____1 = (function (state_14281){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_14281);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e14326){if((e14326 instanceof Object))
{var ex__6469__auto__ = e14326;var statearr_14327_14358 = state_14281;(statearr_14327_14358[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14281);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14326;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14359 = state_14281;
state_14281 = G__14359;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_14281){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_14281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___14329,mults,ensure_mult,p))
})();var state__6482__auto__ = (function (){var statearr_14328 = f__6481__auto__.call(null);(statearr_14328[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___14329);
return statearr_14328;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___14329,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6480__auto___14496 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___14496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___14496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_14466){var state_val_14467 = (state_14466[(1)]);if((state_val_14467 === (7)))
{var state_14466__$1 = state_14466;var statearr_14468_14497 = state_14466__$1;(statearr_14468_14497[(2)] = null);
(statearr_14468_14497[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (1)))
{var state_14466__$1 = state_14466;var statearr_14469_14498 = state_14466__$1;(statearr_14469_14498[(2)] = null);
(statearr_14469_14498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (4)))
{var inst_14430 = (state_14466[(7)]);var inst_14432 = (inst_14430 < cnt);var state_14466__$1 = state_14466;if(cljs.core.truth_(inst_14432))
{var statearr_14470_14499 = state_14466__$1;(statearr_14470_14499[(1)] = (6));
} else
{var statearr_14471_14500 = state_14466__$1;(statearr_14471_14500[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (15)))
{var inst_14462 = (state_14466[(2)]);var state_14466__$1 = state_14466;var statearr_14472_14501 = state_14466__$1;(statearr_14472_14501[(2)] = inst_14462);
(statearr_14472_14501[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (13)))
{var inst_14455 = cljs.core.async.close_BANG_.call(null,out);var state_14466__$1 = state_14466;var statearr_14473_14502 = state_14466__$1;(statearr_14473_14502[(2)] = inst_14455);
(statearr_14473_14502[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (6)))
{var state_14466__$1 = state_14466;var statearr_14474_14503 = state_14466__$1;(statearr_14474_14503[(2)] = null);
(statearr_14474_14503[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (3)))
{var inst_14464 = (state_14466[(2)]);var state_14466__$1 = state_14466;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14466__$1,inst_14464);
} else
{if((state_val_14467 === (12)))
{var inst_14452 = (state_14466[(8)]);var inst_14452__$1 = (state_14466[(2)]);var inst_14453 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14452__$1);var state_14466__$1 = (function (){var statearr_14475 = state_14466;(statearr_14475[(8)] = inst_14452__$1);
return statearr_14475;
})();if(cljs.core.truth_(inst_14453))
{var statearr_14476_14504 = state_14466__$1;(statearr_14476_14504[(1)] = (13));
} else
{var statearr_14477_14505 = state_14466__$1;(statearr_14477_14505[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (2)))
{var inst_14429 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14430 = (0);var state_14466__$1 = (function (){var statearr_14478 = state_14466;(statearr_14478[(7)] = inst_14430);
(statearr_14478[(9)] = inst_14429);
return statearr_14478;
})();var statearr_14479_14506 = state_14466__$1;(statearr_14479_14506[(2)] = null);
(statearr_14479_14506[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (11)))
{var inst_14430 = (state_14466[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14466,(10),Object,null,(9));var inst_14439 = chs__$1.call(null,inst_14430);var inst_14440 = done.call(null,inst_14430);var inst_14441 = cljs.core.async.take_BANG_.call(null,inst_14439,inst_14440);var state_14466__$1 = state_14466;var statearr_14480_14507 = state_14466__$1;(statearr_14480_14507[(2)] = inst_14441);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14466__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (9)))
{var inst_14430 = (state_14466[(7)]);var inst_14443 = (state_14466[(2)]);var inst_14444 = (inst_14430 + (1));var inst_14430__$1 = inst_14444;var state_14466__$1 = (function (){var statearr_14481 = state_14466;(statearr_14481[(7)] = inst_14430__$1);
(statearr_14481[(10)] = inst_14443);
return statearr_14481;
})();var statearr_14482_14508 = state_14466__$1;(statearr_14482_14508[(2)] = null);
(statearr_14482_14508[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (5)))
{var inst_14450 = (state_14466[(2)]);var state_14466__$1 = (function (){var statearr_14483 = state_14466;(statearr_14483[(11)] = inst_14450);
return statearr_14483;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14466__$1,(12),dchan);
} else
{if((state_val_14467 === (14)))
{var inst_14452 = (state_14466[(8)]);var inst_14457 = cljs.core.apply.call(null,f,inst_14452);var state_14466__$1 = state_14466;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14466__$1,(16),out,inst_14457);
} else
{if((state_val_14467 === (16)))
{var inst_14459 = (state_14466[(2)]);var state_14466__$1 = (function (){var statearr_14484 = state_14466;(statearr_14484[(12)] = inst_14459);
return statearr_14484;
})();var statearr_14485_14509 = state_14466__$1;(statearr_14485_14509[(2)] = null);
(statearr_14485_14509[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (10)))
{var inst_14434 = (state_14466[(2)]);var inst_14435 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14466__$1 = (function (){var statearr_14486 = state_14466;(statearr_14486[(13)] = inst_14434);
return statearr_14486;
})();var statearr_14487_14510 = state_14466__$1;(statearr_14487_14510[(2)] = inst_14435);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14466__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14467 === (8)))
{var inst_14448 = (state_14466[(2)]);var state_14466__$1 = state_14466;var statearr_14488_14511 = state_14466__$1;(statearr_14488_14511[(2)] = inst_14448);
(statearr_14488_14511[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___14496,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6465__auto__,c__6480__auto___14496,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_14492 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14492[(0)] = state_machine__6466__auto__);
(statearr_14492[(1)] = (1));
return statearr_14492;
});
var state_machine__6466__auto____1 = (function (state_14466){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_14466);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e14493){if((e14493 instanceof Object))
{var ex__6469__auto__ = e14493;var statearr_14494_14512 = state_14466;(statearr_14494_14512[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14466);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14493;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14513 = state_14466;
state_14466 = G__14513;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_14466){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_14466);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___14496,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6482__auto__ = (function (){var statearr_14495 = f__6481__auto__.call(null);(statearr_14495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___14496);
return statearr_14495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___14496,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___14621 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___14621,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___14621,out){
return (function (state_14597){var state_val_14598 = (state_14597[(1)]);if((state_val_14598 === (7)))
{var inst_14577 = (state_14597[(7)]);var inst_14576 = (state_14597[(8)]);var inst_14576__$1 = (state_14597[(2)]);var inst_14577__$1 = cljs.core.nth.call(null,inst_14576__$1,(0),null);var inst_14578 = cljs.core.nth.call(null,inst_14576__$1,(1),null);var inst_14579 = (inst_14577__$1 == null);var state_14597__$1 = (function (){var statearr_14599 = state_14597;(statearr_14599[(7)] = inst_14577__$1);
(statearr_14599[(9)] = inst_14578);
(statearr_14599[(8)] = inst_14576__$1);
return statearr_14599;
})();if(cljs.core.truth_(inst_14579))
{var statearr_14600_14622 = state_14597__$1;(statearr_14600_14622[(1)] = (8));
} else
{var statearr_14601_14623 = state_14597__$1;(statearr_14601_14623[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (1)))
{var inst_14568 = cljs.core.vec.call(null,chs);var inst_14569 = inst_14568;var state_14597__$1 = (function (){var statearr_14602 = state_14597;(statearr_14602[(10)] = inst_14569);
return statearr_14602;
})();var statearr_14603_14624 = state_14597__$1;(statearr_14603_14624[(2)] = null);
(statearr_14603_14624[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (4)))
{var inst_14569 = (state_14597[(10)]);var state_14597__$1 = state_14597;return cljs.core.async.ioc_alts_BANG_.call(null,state_14597__$1,(7),inst_14569);
} else
{if((state_val_14598 === (6)))
{var inst_14593 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14604_14625 = state_14597__$1;(statearr_14604_14625[(2)] = inst_14593);
(statearr_14604_14625[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (3)))
{var inst_14595 = (state_14597[(2)]);var state_14597__$1 = state_14597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14597__$1,inst_14595);
} else
{if((state_val_14598 === (2)))
{var inst_14569 = (state_14597[(10)]);var inst_14571 = cljs.core.count.call(null,inst_14569);var inst_14572 = (inst_14571 > (0));var state_14597__$1 = state_14597;if(cljs.core.truth_(inst_14572))
{var statearr_14606_14626 = state_14597__$1;(statearr_14606_14626[(1)] = (4));
} else
{var statearr_14607_14627 = state_14597__$1;(statearr_14607_14627[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (11)))
{var inst_14569 = (state_14597[(10)]);var inst_14586 = (state_14597[(2)]);var tmp14605 = inst_14569;var inst_14569__$1 = tmp14605;var state_14597__$1 = (function (){var statearr_14608 = state_14597;(statearr_14608[(10)] = inst_14569__$1);
(statearr_14608[(11)] = inst_14586);
return statearr_14608;
})();var statearr_14609_14628 = state_14597__$1;(statearr_14609_14628[(2)] = null);
(statearr_14609_14628[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (9)))
{var inst_14577 = (state_14597[(7)]);var state_14597__$1 = state_14597;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14597__$1,(11),out,inst_14577);
} else
{if((state_val_14598 === (5)))
{var inst_14591 = cljs.core.async.close_BANG_.call(null,out);var state_14597__$1 = state_14597;var statearr_14610_14629 = state_14597__$1;(statearr_14610_14629[(2)] = inst_14591);
(statearr_14610_14629[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (10)))
{var inst_14589 = (state_14597[(2)]);var state_14597__$1 = state_14597;var statearr_14611_14630 = state_14597__$1;(statearr_14611_14630[(2)] = inst_14589);
(statearr_14611_14630[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14598 === (8)))
{var inst_14577 = (state_14597[(7)]);var inst_14578 = (state_14597[(9)]);var inst_14576 = (state_14597[(8)]);var inst_14569 = (state_14597[(10)]);var inst_14581 = (function (){var c = inst_14578;var v = inst_14577;var vec__14574 = inst_14576;var cs = inst_14569;return ((function (c,v,vec__14574,cs,inst_14577,inst_14578,inst_14576,inst_14569,state_val_14598,c__6480__auto___14621,out){
return (function (p1__14514_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14514_SHARP_);
});
;})(c,v,vec__14574,cs,inst_14577,inst_14578,inst_14576,inst_14569,state_val_14598,c__6480__auto___14621,out))
})();var inst_14582 = cljs.core.filterv.call(null,inst_14581,inst_14569);var inst_14569__$1 = inst_14582;var state_14597__$1 = (function (){var statearr_14612 = state_14597;(statearr_14612[(10)] = inst_14569__$1);
return statearr_14612;
})();var statearr_14613_14631 = state_14597__$1;(statearr_14613_14631[(2)] = null);
(statearr_14613_14631[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___14621,out))
;return ((function (switch__6465__auto__,c__6480__auto___14621,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_14617 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14617[(0)] = state_machine__6466__auto__);
(statearr_14617[(1)] = (1));
return statearr_14617;
});
var state_machine__6466__auto____1 = (function (state_14597){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_14597);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e14618){if((e14618 instanceof Object))
{var ex__6469__auto__ = e14618;var statearr_14619_14632 = state_14597;(statearr_14619_14632[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14597);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14618;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14633 = state_14597;
state_14597 = G__14633;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_14597){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_14597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___14621,out))
})();var state__6482__auto__ = (function (){var statearr_14620 = f__6481__auto__.call(null);(statearr_14620[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___14621);
return statearr_14620;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___14621,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___14726 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___14726,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___14726,out){
return (function (state_14703){var state_val_14704 = (state_14703[(1)]);if((state_val_14704 === (7)))
{var inst_14685 = (state_14703[(7)]);var inst_14685__$1 = (state_14703[(2)]);var inst_14686 = (inst_14685__$1 == null);var inst_14687 = cljs.core.not.call(null,inst_14686);var state_14703__$1 = (function (){var statearr_14705 = state_14703;(statearr_14705[(7)] = inst_14685__$1);
return statearr_14705;
})();if(inst_14687)
{var statearr_14706_14727 = state_14703__$1;(statearr_14706_14727[(1)] = (8));
} else
{var statearr_14707_14728 = state_14703__$1;(statearr_14707_14728[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14704 === (1)))
{var inst_14680 = (0);var state_14703__$1 = (function (){var statearr_14708 = state_14703;(statearr_14708[(8)] = inst_14680);
return statearr_14708;
})();var statearr_14709_14729 = state_14703__$1;(statearr_14709_14729[(2)] = null);
(statearr_14709_14729[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14704 === (4)))
{var state_14703__$1 = state_14703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14703__$1,(7),ch);
} else
{if((state_val_14704 === (6)))
{var inst_14698 = (state_14703[(2)]);var state_14703__$1 = state_14703;var statearr_14710_14730 = state_14703__$1;(statearr_14710_14730[(2)] = inst_14698);
(statearr_14710_14730[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14704 === (3)))
{var inst_14700 = (state_14703[(2)]);var inst_14701 = cljs.core.async.close_BANG_.call(null,out);var state_14703__$1 = (function (){var statearr_14711 = state_14703;(statearr_14711[(9)] = inst_14700);
return statearr_14711;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14703__$1,inst_14701);
} else
{if((state_val_14704 === (2)))
{var inst_14680 = (state_14703[(8)]);var inst_14682 = (inst_14680 < n);var state_14703__$1 = state_14703;if(cljs.core.truth_(inst_14682))
{var statearr_14712_14731 = state_14703__$1;(statearr_14712_14731[(1)] = (4));
} else
{var statearr_14713_14732 = state_14703__$1;(statearr_14713_14732[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14704 === (11)))
{var inst_14680 = (state_14703[(8)]);var inst_14690 = (state_14703[(2)]);var inst_14691 = (inst_14680 + (1));var inst_14680__$1 = inst_14691;var state_14703__$1 = (function (){var statearr_14714 = state_14703;(statearr_14714[(8)] = inst_14680__$1);
(statearr_14714[(10)] = inst_14690);
return statearr_14714;
})();var statearr_14715_14733 = state_14703__$1;(statearr_14715_14733[(2)] = null);
(statearr_14715_14733[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14704 === (9)))
{var state_14703__$1 = state_14703;var statearr_14716_14734 = state_14703__$1;(statearr_14716_14734[(2)] = null);
(statearr_14716_14734[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14704 === (5)))
{var state_14703__$1 = state_14703;var statearr_14717_14735 = state_14703__$1;(statearr_14717_14735[(2)] = null);
(statearr_14717_14735[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14704 === (10)))
{var inst_14695 = (state_14703[(2)]);var state_14703__$1 = state_14703;var statearr_14718_14736 = state_14703__$1;(statearr_14718_14736[(2)] = inst_14695);
(statearr_14718_14736[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14704 === (8)))
{var inst_14685 = (state_14703[(7)]);var state_14703__$1 = state_14703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14703__$1,(11),out,inst_14685);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___14726,out))
;return ((function (switch__6465__auto__,c__6480__auto___14726,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_14722 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14722[(0)] = state_machine__6466__auto__);
(statearr_14722[(1)] = (1));
return statearr_14722;
});
var state_machine__6466__auto____1 = (function (state_14703){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_14703);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e14723){if((e14723 instanceof Object))
{var ex__6469__auto__ = e14723;var statearr_14724_14737 = state_14703;(statearr_14724_14737[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14703);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14723;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14738 = state_14703;
state_14703 = G__14738;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_14703){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_14703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___14726,out))
})();var state__6482__auto__ = (function (){var statearr_14725 = f__6481__auto__.call(null);(statearr_14725[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___14726);
return statearr_14725;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___14726,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14746 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14746 = (function (ch,f,map_LT_,meta14747){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14747 = meta14747;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14746.cljs$lang$type = true;
cljs.core.async.t14746.cljs$lang$ctorStr = "cljs.core.async/t14746";
cljs.core.async.t14746.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14746");
});
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14749 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14749 = (function (fn1,_,meta14747,ch,f,map_LT_,meta14750){
this.fn1 = fn1;
this._ = _;
this.meta14747 = meta14747;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14750 = meta14750;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14749.cljs$lang$type = true;
cljs.core.async.t14749.cljs$lang$ctorStr = "cljs.core.async/t14749";
cljs.core.async.t14749.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14749");
});})(___$1))
;
cljs.core.async.t14749.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14749.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14749.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14739_SHARP_){return f1.call(null,(((p1__14739_SHARP_ == null))?null:self__.f.call(null,p1__14739_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14749.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_14751){var self__ = this;
var _14751__$1 = this;return self__.meta14750;
});})(___$1))
;
cljs.core.async.t14749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_14751,meta14750__$1){var self__ = this;
var _14751__$1 = this;return (new cljs.core.async.t14749(self__.fn1,self__._,self__.meta14747,self__.ch,self__.f,self__.map_LT_,meta14750__$1));
});})(___$1))
;
cljs.core.async.__GT_t14749 = ((function (___$1){
return (function __GT_t14749(fn1__$1,___$2,meta14747__$1,ch__$2,f__$2,map_LT___$2,meta14750){return (new cljs.core.async.t14749(fn1__$1,___$2,meta14747__$1,ch__$2,f__$2,map_LT___$2,meta14750));
});})(___$1))
;
}
return (new cljs.core.async.t14749(fn1,___$1,self__.meta14747,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3628__auto__ = ret;if(cljs.core.truth_(and__3628__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3628__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14746.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14746.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14748){var self__ = this;
var _14748__$1 = this;return self__.meta14747;
});
cljs.core.async.t14746.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14748,meta14747__$1){var self__ = this;
var _14748__$1 = this;return (new cljs.core.async.t14746(self__.ch,self__.f,self__.map_LT_,meta14747__$1));
});
cljs.core.async.__GT_t14746 = (function __GT_t14746(ch__$1,f__$1,map_LT___$1,meta14747){return (new cljs.core.async.t14746(ch__$1,f__$1,map_LT___$1,meta14747));
});
}
return (new cljs.core.async.t14746(ch,f,map_LT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14755 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14755 = (function (ch,f,map_GT_,meta14756){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14756 = meta14756;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14755.cljs$lang$type = true;
cljs.core.async.t14755.cljs$lang$ctorStr = "cljs.core.async/t14755";
cljs.core.async.t14755.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14755");
});
cljs.core.async.t14755.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14755.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t14755.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14755.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14755.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14755.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14755.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14757){var self__ = this;
var _14757__$1 = this;return self__.meta14756;
});
cljs.core.async.t14755.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14757,meta14756__$1){var self__ = this;
var _14757__$1 = this;return (new cljs.core.async.t14755(self__.ch,self__.f,self__.map_GT_,meta14756__$1));
});
cljs.core.async.__GT_t14755 = (function __GT_t14755(ch__$1,f__$1,map_GT___$1,meta14756){return (new cljs.core.async.t14755(ch__$1,f__$1,map_GT___$1,meta14756));
});
}
return (new cljs.core.async.t14755(ch,f,map_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14761 = (function (ch,p,filter_GT_,meta14762){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14762 = meta14762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14761.cljs$lang$type = true;
cljs.core.async.t14761.cljs$lang$ctorStr = "cljs.core.async/t14761";
cljs.core.async.t14761.cljs$lang$ctorPrWriter = (function (this__4217__auto__,writer__4218__auto__,opt__4219__auto__){return cljs.core._write.call(null,writer__4218__auto__,"cljs.core.async/t14761");
});
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14761.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t14761.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14763){var self__ = this;
var _14763__$1 = this;return self__.meta14762;
});
cljs.core.async.t14761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14763,meta14762__$1){var self__ = this;
var _14763__$1 = this;return (new cljs.core.async.t14761(self__.ch,self__.p,self__.filter_GT_,meta14762__$1));
});
cljs.core.async.__GT_t14761 = (function __GT_t14761(ch__$1,p__$1,filter_GT___$1,meta14762){return (new cljs.core.async.t14761(ch__$1,p__$1,filter_GT___$1,meta14762));
});
}
return (new cljs.core.async.t14761(ch,p,filter_GT_,null));
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___14846 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___14846,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___14846,out){
return (function (state_14825){var state_val_14826 = (state_14825[(1)]);if((state_val_14826 === (7)))
{var inst_14821 = (state_14825[(2)]);var state_14825__$1 = state_14825;var statearr_14827_14847 = state_14825__$1;(statearr_14827_14847[(2)] = inst_14821);
(statearr_14827_14847[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14826 === (1)))
{var state_14825__$1 = state_14825;var statearr_14828_14848 = state_14825__$1;(statearr_14828_14848[(2)] = null);
(statearr_14828_14848[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14826 === (4)))
{var inst_14807 = (state_14825[(7)]);var inst_14807__$1 = (state_14825[(2)]);var inst_14808 = (inst_14807__$1 == null);var state_14825__$1 = (function (){var statearr_14829 = state_14825;(statearr_14829[(7)] = inst_14807__$1);
return statearr_14829;
})();if(cljs.core.truth_(inst_14808))
{var statearr_14830_14849 = state_14825__$1;(statearr_14830_14849[(1)] = (5));
} else
{var statearr_14831_14850 = state_14825__$1;(statearr_14831_14850[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14826 === (6)))
{var inst_14807 = (state_14825[(7)]);var inst_14812 = p.call(null,inst_14807);var state_14825__$1 = state_14825;if(cljs.core.truth_(inst_14812))
{var statearr_14832_14851 = state_14825__$1;(statearr_14832_14851[(1)] = (8));
} else
{var statearr_14833_14852 = state_14825__$1;(statearr_14833_14852[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14826 === (3)))
{var inst_14823 = (state_14825[(2)]);var state_14825__$1 = state_14825;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14825__$1,inst_14823);
} else
{if((state_val_14826 === (2)))
{var state_14825__$1 = state_14825;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14825__$1,(4),ch);
} else
{if((state_val_14826 === (11)))
{var inst_14815 = (state_14825[(2)]);var state_14825__$1 = state_14825;var statearr_14834_14853 = state_14825__$1;(statearr_14834_14853[(2)] = inst_14815);
(statearr_14834_14853[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14826 === (9)))
{var state_14825__$1 = state_14825;var statearr_14835_14854 = state_14825__$1;(statearr_14835_14854[(2)] = null);
(statearr_14835_14854[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14826 === (5)))
{var inst_14810 = cljs.core.async.close_BANG_.call(null,out);var state_14825__$1 = state_14825;var statearr_14836_14855 = state_14825__$1;(statearr_14836_14855[(2)] = inst_14810);
(statearr_14836_14855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14826 === (10)))
{var inst_14818 = (state_14825[(2)]);var state_14825__$1 = (function (){var statearr_14837 = state_14825;(statearr_14837[(8)] = inst_14818);
return statearr_14837;
})();var statearr_14838_14856 = state_14825__$1;(statearr_14838_14856[(2)] = null);
(statearr_14838_14856[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14826 === (8)))
{var inst_14807 = (state_14825[(7)]);var state_14825__$1 = state_14825;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14825__$1,(11),out,inst_14807);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___14846,out))
;return ((function (switch__6465__auto__,c__6480__auto___14846,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_14842 = [null,null,null,null,null,null,null,null,null];(statearr_14842[(0)] = state_machine__6466__auto__);
(statearr_14842[(1)] = (1));
return statearr_14842;
});
var state_machine__6466__auto____1 = (function (state_14825){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_14825);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e14843){if((e14843 instanceof Object))
{var ex__6469__auto__ = e14843;var statearr_14844_14857 = state_14825;(statearr_14844_14857[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14825);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14843;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14858 = state_14825;
state_14825 = G__14858;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_14825){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_14825);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___14846,out))
})();var state__6482__auto__ = (function (){var statearr_14845 = f__6481__auto__.call(null);(statearr_14845[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___14846);
return statearr_14845;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___14846,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6480__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto__){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto__){
return (function (state_15024){var state_val_15025 = (state_15024[(1)]);if((state_val_15025 === (7)))
{var inst_15020 = (state_15024[(2)]);var state_15024__$1 = state_15024;var statearr_15026_15067 = state_15024__$1;(statearr_15026_15067[(2)] = inst_15020);
(statearr_15026_15067[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (20)))
{var inst_14990 = (state_15024[(7)]);var inst_15001 = (state_15024[(2)]);var inst_15002 = cljs.core.next.call(null,inst_14990);var inst_14976 = inst_15002;var inst_14977 = null;var inst_14978 = (0);var inst_14979 = (0);var state_15024__$1 = (function (){var statearr_15027 = state_15024;(statearr_15027[(8)] = inst_14976);
(statearr_15027[(9)] = inst_14977);
(statearr_15027[(10)] = inst_14979);
(statearr_15027[(11)] = inst_14978);
(statearr_15027[(12)] = inst_15001);
return statearr_15027;
})();var statearr_15028_15068 = state_15024__$1;(statearr_15028_15068[(2)] = null);
(statearr_15028_15068[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (1)))
{var state_15024__$1 = state_15024;var statearr_15029_15069 = state_15024__$1;(statearr_15029_15069[(2)] = null);
(statearr_15029_15069[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (4)))
{var inst_14965 = (state_15024[(13)]);var inst_14965__$1 = (state_15024[(2)]);var inst_14966 = (inst_14965__$1 == null);var state_15024__$1 = (function (){var statearr_15030 = state_15024;(statearr_15030[(13)] = inst_14965__$1);
return statearr_15030;
})();if(cljs.core.truth_(inst_14966))
{var statearr_15031_15070 = state_15024__$1;(statearr_15031_15070[(1)] = (5));
} else
{var statearr_15032_15071 = state_15024__$1;(statearr_15032_15071[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (15)))
{var state_15024__$1 = state_15024;var statearr_15036_15072 = state_15024__$1;(statearr_15036_15072[(2)] = null);
(statearr_15036_15072[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (21)))
{var state_15024__$1 = state_15024;var statearr_15037_15073 = state_15024__$1;(statearr_15037_15073[(2)] = null);
(statearr_15037_15073[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (13)))
{var inst_14976 = (state_15024[(8)]);var inst_14977 = (state_15024[(9)]);var inst_14979 = (state_15024[(10)]);var inst_14978 = (state_15024[(11)]);var inst_14986 = (state_15024[(2)]);var inst_14987 = (inst_14979 + (1));var tmp15033 = inst_14976;var tmp15034 = inst_14977;var tmp15035 = inst_14978;var inst_14976__$1 = tmp15033;var inst_14977__$1 = tmp15034;var inst_14978__$1 = tmp15035;var inst_14979__$1 = inst_14987;var state_15024__$1 = (function (){var statearr_15038 = state_15024;(statearr_15038[(8)] = inst_14976__$1);
(statearr_15038[(9)] = inst_14977__$1);
(statearr_15038[(10)] = inst_14979__$1);
(statearr_15038[(11)] = inst_14978__$1);
(statearr_15038[(14)] = inst_14986);
return statearr_15038;
})();var statearr_15039_15074 = state_15024__$1;(statearr_15039_15074[(2)] = null);
(statearr_15039_15074[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (22)))
{var state_15024__$1 = state_15024;var statearr_15040_15075 = state_15024__$1;(statearr_15040_15075[(2)] = null);
(statearr_15040_15075[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (6)))
{var inst_14965 = (state_15024[(13)]);var inst_14974 = f.call(null,inst_14965);var inst_14975 = cljs.core.seq.call(null,inst_14974);var inst_14976 = inst_14975;var inst_14977 = null;var inst_14978 = (0);var inst_14979 = (0);var state_15024__$1 = (function (){var statearr_15041 = state_15024;(statearr_15041[(8)] = inst_14976);
(statearr_15041[(9)] = inst_14977);
(statearr_15041[(10)] = inst_14979);
(statearr_15041[(11)] = inst_14978);
return statearr_15041;
})();var statearr_15042_15076 = state_15024__$1;(statearr_15042_15076[(2)] = null);
(statearr_15042_15076[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (17)))
{var inst_14990 = (state_15024[(7)]);var inst_14994 = cljs.core.chunk_first.call(null,inst_14990);var inst_14995 = cljs.core.chunk_rest.call(null,inst_14990);var inst_14996 = cljs.core.count.call(null,inst_14994);var inst_14976 = inst_14995;var inst_14977 = inst_14994;var inst_14978 = inst_14996;var inst_14979 = (0);var state_15024__$1 = (function (){var statearr_15043 = state_15024;(statearr_15043[(8)] = inst_14976);
(statearr_15043[(9)] = inst_14977);
(statearr_15043[(10)] = inst_14979);
(statearr_15043[(11)] = inst_14978);
return statearr_15043;
})();var statearr_15044_15077 = state_15024__$1;(statearr_15044_15077[(2)] = null);
(statearr_15044_15077[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (3)))
{var inst_15022 = (state_15024[(2)]);var state_15024__$1 = state_15024;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15024__$1,inst_15022);
} else
{if((state_val_15025 === (12)))
{var inst_15010 = (state_15024[(2)]);var state_15024__$1 = state_15024;var statearr_15045_15078 = state_15024__$1;(statearr_15045_15078[(2)] = inst_15010);
(statearr_15045_15078[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (2)))
{var state_15024__$1 = state_15024;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15024__$1,(4),in$);
} else
{if((state_val_15025 === (23)))
{var inst_15018 = (state_15024[(2)]);var state_15024__$1 = state_15024;var statearr_15046_15079 = state_15024__$1;(statearr_15046_15079[(2)] = inst_15018);
(statearr_15046_15079[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (19)))
{var inst_15005 = (state_15024[(2)]);var state_15024__$1 = state_15024;var statearr_15047_15080 = state_15024__$1;(statearr_15047_15080[(2)] = inst_15005);
(statearr_15047_15080[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (11)))
{var inst_14976 = (state_15024[(8)]);var inst_14990 = (state_15024[(7)]);var inst_14990__$1 = cljs.core.seq.call(null,inst_14976);var state_15024__$1 = (function (){var statearr_15048 = state_15024;(statearr_15048[(7)] = inst_14990__$1);
return statearr_15048;
})();if(inst_14990__$1)
{var statearr_15049_15081 = state_15024__$1;(statearr_15049_15081[(1)] = (14));
} else
{var statearr_15050_15082 = state_15024__$1;(statearr_15050_15082[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (9)))
{var inst_15012 = (state_15024[(2)]);var inst_15013 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_15024__$1 = (function (){var statearr_15051 = state_15024;(statearr_15051[(15)] = inst_15012);
return statearr_15051;
})();if(cljs.core.truth_(inst_15013))
{var statearr_15052_15083 = state_15024__$1;(statearr_15052_15083[(1)] = (21));
} else
{var statearr_15053_15084 = state_15024__$1;(statearr_15053_15084[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (5)))
{var inst_14968 = cljs.core.async.close_BANG_.call(null,out);var state_15024__$1 = state_15024;var statearr_15054_15085 = state_15024__$1;(statearr_15054_15085[(2)] = inst_14968);
(statearr_15054_15085[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (14)))
{var inst_14990 = (state_15024[(7)]);var inst_14992 = cljs.core.chunked_seq_QMARK_.call(null,inst_14990);var state_15024__$1 = state_15024;if(inst_14992)
{var statearr_15055_15086 = state_15024__$1;(statearr_15055_15086[(1)] = (17));
} else
{var statearr_15056_15087 = state_15024__$1;(statearr_15056_15087[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (16)))
{var inst_15008 = (state_15024[(2)]);var state_15024__$1 = state_15024;var statearr_15057_15088 = state_15024__$1;(statearr_15057_15088[(2)] = inst_15008);
(statearr_15057_15088[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15025 === (10)))
{var inst_14977 = (state_15024[(9)]);var inst_14979 = (state_15024[(10)]);var inst_14984 = cljs.core._nth.call(null,inst_14977,inst_14979);var state_15024__$1 = state_15024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15024__$1,(13),out,inst_14984);
} else
{if((state_val_15025 === (18)))
{var inst_14990 = (state_15024[(7)]);var inst_14999 = cljs.core.first.call(null,inst_14990);var state_15024__$1 = state_15024;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15024__$1,(20),out,inst_14999);
} else
{if((state_val_15025 === (8)))
{var inst_14979 = (state_15024[(10)]);var inst_14978 = (state_15024[(11)]);var inst_14981 = (inst_14979 < inst_14978);var inst_14982 = inst_14981;var state_15024__$1 = state_15024;if(cljs.core.truth_(inst_14982))
{var statearr_15058_15089 = state_15024__$1;(statearr_15058_15089[(1)] = (10));
} else
{var statearr_15059_15090 = state_15024__$1;(statearr_15059_15090[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto__))
;return ((function (switch__6465__auto__,c__6480__auto__){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_15063 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15063[(0)] = state_machine__6466__auto__);
(statearr_15063[(1)] = (1));
return statearr_15063;
});
var state_machine__6466__auto____1 = (function (state_15024){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_15024);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e15064){if((e15064 instanceof Object))
{var ex__6469__auto__ = e15064;var statearr_15065_15091 = state_15024;(statearr_15065_15091[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15024);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15064;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15092 = state_15024;
state_15024 = G__15092;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_15024){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_15024);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto__))
})();var state__6482__auto__ = (function (){var statearr_15066 = f__6481__auto__.call(null);(statearr_15066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto__);
return statearr_15066;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto__))
);
return c__6480__auto__;
});
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___15189 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___15189,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___15189,out){
return (function (state_15164){var state_val_15165 = (state_15164[(1)]);if((state_val_15165 === (7)))
{var inst_15159 = (state_15164[(2)]);var state_15164__$1 = state_15164;var statearr_15166_15190 = state_15164__$1;(statearr_15166_15190[(2)] = inst_15159);
(statearr_15166_15190[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15165 === (1)))
{var inst_15141 = null;var state_15164__$1 = (function (){var statearr_15167 = state_15164;(statearr_15167[(7)] = inst_15141);
return statearr_15167;
})();var statearr_15168_15191 = state_15164__$1;(statearr_15168_15191[(2)] = null);
(statearr_15168_15191[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15165 === (4)))
{var inst_15144 = (state_15164[(8)]);var inst_15144__$1 = (state_15164[(2)]);var inst_15145 = (inst_15144__$1 == null);var inst_15146 = cljs.core.not.call(null,inst_15145);var state_15164__$1 = (function (){var statearr_15169 = state_15164;(statearr_15169[(8)] = inst_15144__$1);
return statearr_15169;
})();if(inst_15146)
{var statearr_15170_15192 = state_15164__$1;(statearr_15170_15192[(1)] = (5));
} else
{var statearr_15171_15193 = state_15164__$1;(statearr_15171_15193[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15165 === (6)))
{var state_15164__$1 = state_15164;var statearr_15172_15194 = state_15164__$1;(statearr_15172_15194[(2)] = null);
(statearr_15172_15194[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15165 === (3)))
{var inst_15161 = (state_15164[(2)]);var inst_15162 = cljs.core.async.close_BANG_.call(null,out);var state_15164__$1 = (function (){var statearr_15173 = state_15164;(statearr_15173[(9)] = inst_15161);
return statearr_15173;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15164__$1,inst_15162);
} else
{if((state_val_15165 === (2)))
{var state_15164__$1 = state_15164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15164__$1,(4),ch);
} else
{if((state_val_15165 === (11)))
{var inst_15144 = (state_15164[(8)]);var inst_15153 = (state_15164[(2)]);var inst_15141 = inst_15144;var state_15164__$1 = (function (){var statearr_15174 = state_15164;(statearr_15174[(7)] = inst_15141);
(statearr_15174[(10)] = inst_15153);
return statearr_15174;
})();var statearr_15175_15195 = state_15164__$1;(statearr_15175_15195[(2)] = null);
(statearr_15175_15195[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15165 === (9)))
{var inst_15144 = (state_15164[(8)]);var state_15164__$1 = state_15164;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15164__$1,(11),out,inst_15144);
} else
{if((state_val_15165 === (5)))
{var inst_15141 = (state_15164[(7)]);var inst_15144 = (state_15164[(8)]);var inst_15148 = cljs.core._EQ_.call(null,inst_15144,inst_15141);var state_15164__$1 = state_15164;if(inst_15148)
{var statearr_15177_15196 = state_15164__$1;(statearr_15177_15196[(1)] = (8));
} else
{var statearr_15178_15197 = state_15164__$1;(statearr_15178_15197[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15165 === (10)))
{var inst_15156 = (state_15164[(2)]);var state_15164__$1 = state_15164;var statearr_15179_15198 = state_15164__$1;(statearr_15179_15198[(2)] = inst_15156);
(statearr_15179_15198[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15165 === (8)))
{var inst_15141 = (state_15164[(7)]);var tmp15176 = inst_15141;var inst_15141__$1 = tmp15176;var state_15164__$1 = (function (){var statearr_15180 = state_15164;(statearr_15180[(7)] = inst_15141__$1);
return statearr_15180;
})();var statearr_15181_15199 = state_15164__$1;(statearr_15181_15199[(2)] = null);
(statearr_15181_15199[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___15189,out))
;return ((function (switch__6465__auto__,c__6480__auto___15189,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_15185 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15185[(0)] = state_machine__6466__auto__);
(statearr_15185[(1)] = (1));
return statearr_15185;
});
var state_machine__6466__auto____1 = (function (state_15164){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_15164);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e15186){if((e15186 instanceof Object))
{var ex__6469__auto__ = e15186;var statearr_15187_15200 = state_15164;(statearr_15187_15200[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15164);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15186;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15201 = state_15164;
state_15164 = G__15201;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_15164){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_15164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___15189,out))
})();var state__6482__auto__ = (function (){var statearr_15188 = f__6481__auto__.call(null);(statearr_15188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___15189);
return statearr_15188;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___15189,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___15336 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___15336,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___15336,out){
return (function (state_15306){var state_val_15307 = (state_15306[(1)]);if((state_val_15307 === (7)))
{var inst_15302 = (state_15306[(2)]);var state_15306__$1 = state_15306;var statearr_15308_15337 = state_15306__$1;(statearr_15308_15337[(2)] = inst_15302);
(statearr_15308_15337[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15307 === (1)))
{var inst_15269 = (new Array(n));var inst_15270 = inst_15269;var inst_15271 = (0);var state_15306__$1 = (function (){var statearr_15309 = state_15306;(statearr_15309[(7)] = inst_15271);
(statearr_15309[(8)] = inst_15270);
return statearr_15309;
})();var statearr_15310_15338 = state_15306__$1;(statearr_15310_15338[(2)] = null);
(statearr_15310_15338[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15307 === (4)))
{var inst_15274 = (state_15306[(9)]);var inst_15274__$1 = (state_15306[(2)]);var inst_15275 = (inst_15274__$1 == null);var inst_15276 = cljs.core.not.call(null,inst_15275);var state_15306__$1 = (function (){var statearr_15311 = state_15306;(statearr_15311[(9)] = inst_15274__$1);
return statearr_15311;
})();if(inst_15276)
{var statearr_15312_15339 = state_15306__$1;(statearr_15312_15339[(1)] = (5));
} else
{var statearr_15313_15340 = state_15306__$1;(statearr_15313_15340[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15307 === (15)))
{var inst_15296 = (state_15306[(2)]);var state_15306__$1 = state_15306;var statearr_15314_15341 = state_15306__$1;(statearr_15314_15341[(2)] = inst_15296);
(statearr_15314_15341[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15307 === (13)))
{var state_15306__$1 = state_15306;var statearr_15315_15342 = state_15306__$1;(statearr_15315_15342[(2)] = null);
(statearr_15315_15342[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15307 === (6)))
{var inst_15271 = (state_15306[(7)]);var inst_15292 = (inst_15271 > (0));var state_15306__$1 = state_15306;if(cljs.core.truth_(inst_15292))
{var statearr_15316_15343 = state_15306__$1;(statearr_15316_15343[(1)] = (12));
} else
{var statearr_15317_15344 = state_15306__$1;(statearr_15317_15344[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15307 === (3)))
{var inst_15304 = (state_15306[(2)]);var state_15306__$1 = state_15306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15306__$1,inst_15304);
} else
{if((state_val_15307 === (12)))
{var inst_15270 = (state_15306[(8)]);var inst_15294 = cljs.core.vec.call(null,inst_15270);var state_15306__$1 = state_15306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15306__$1,(15),out,inst_15294);
} else
{if((state_val_15307 === (2)))
{var state_15306__$1 = state_15306;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15306__$1,(4),ch);
} else
{if((state_val_15307 === (11)))
{var inst_15286 = (state_15306[(2)]);var inst_15287 = (new Array(n));var inst_15270 = inst_15287;var inst_15271 = (0);var state_15306__$1 = (function (){var statearr_15318 = state_15306;(statearr_15318[(10)] = inst_15286);
(statearr_15318[(7)] = inst_15271);
(statearr_15318[(8)] = inst_15270);
return statearr_15318;
})();var statearr_15319_15345 = state_15306__$1;(statearr_15319_15345[(2)] = null);
(statearr_15319_15345[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15307 === (9)))
{var inst_15270 = (state_15306[(8)]);var inst_15284 = cljs.core.vec.call(null,inst_15270);var state_15306__$1 = state_15306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15306__$1,(11),out,inst_15284);
} else
{if((state_val_15307 === (5)))
{var inst_15271 = (state_15306[(7)]);var inst_15274 = (state_15306[(9)]);var inst_15270 = (state_15306[(8)]);var inst_15279 = (state_15306[(11)]);var inst_15278 = (inst_15270[inst_15271] = inst_15274);var inst_15279__$1 = (inst_15271 + (1));var inst_15280 = (inst_15279__$1 < n);var state_15306__$1 = (function (){var statearr_15320 = state_15306;(statearr_15320[(12)] = inst_15278);
(statearr_15320[(11)] = inst_15279__$1);
return statearr_15320;
})();if(cljs.core.truth_(inst_15280))
{var statearr_15321_15346 = state_15306__$1;(statearr_15321_15346[(1)] = (8));
} else
{var statearr_15322_15347 = state_15306__$1;(statearr_15322_15347[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15307 === (14)))
{var inst_15299 = (state_15306[(2)]);var inst_15300 = cljs.core.async.close_BANG_.call(null,out);var state_15306__$1 = (function (){var statearr_15324 = state_15306;(statearr_15324[(13)] = inst_15299);
return statearr_15324;
})();var statearr_15325_15348 = state_15306__$1;(statearr_15325_15348[(2)] = inst_15300);
(statearr_15325_15348[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15307 === (10)))
{var inst_15290 = (state_15306[(2)]);var state_15306__$1 = state_15306;var statearr_15326_15349 = state_15306__$1;(statearr_15326_15349[(2)] = inst_15290);
(statearr_15326_15349[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15307 === (8)))
{var inst_15270 = (state_15306[(8)]);var inst_15279 = (state_15306[(11)]);var tmp15323 = inst_15270;var inst_15270__$1 = tmp15323;var inst_15271 = inst_15279;var state_15306__$1 = (function (){var statearr_15327 = state_15306;(statearr_15327[(7)] = inst_15271);
(statearr_15327[(8)] = inst_15270__$1);
return statearr_15327;
})();var statearr_15328_15350 = state_15306__$1;(statearr_15328_15350[(2)] = null);
(statearr_15328_15350[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___15336,out))
;return ((function (switch__6465__auto__,c__6480__auto___15336,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_15332 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15332[(0)] = state_machine__6466__auto__);
(statearr_15332[(1)] = (1));
return statearr_15332;
});
var state_machine__6466__auto____1 = (function (state_15306){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_15306);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e15333){if((e15333 instanceof Object))
{var ex__6469__auto__ = e15333;var statearr_15334_15351 = state_15306;(statearr_15334_15351[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15333;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15352 = state_15306;
state_15306 = G__15352;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_15306){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_15306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___15336,out))
})();var state__6482__auto__ = (function (){var statearr_15335 = f__6481__auto__.call(null);(statearr_15335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___15336);
return statearr_15335;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___15336,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Deprecated - this function will be removed. Use transducer instead
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6480__auto___15495 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6480__auto___15495,out){
return (function (){var f__6481__auto__ = (function (){var switch__6465__auto__ = ((function (c__6480__auto___15495,out){
return (function (state_15465){var state_val_15466 = (state_15465[(1)]);if((state_val_15466 === (7)))
{var inst_15461 = (state_15465[(2)]);var state_15465__$1 = state_15465;var statearr_15467_15496 = state_15465__$1;(statearr_15467_15496[(2)] = inst_15461);
(statearr_15467_15496[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15466 === (1)))
{var inst_15424 = [];var inst_15425 = inst_15424;var inst_15426 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_15465__$1 = (function (){var statearr_15468 = state_15465;(statearr_15468[(7)] = inst_15426);
(statearr_15468[(8)] = inst_15425);
return statearr_15468;
})();var statearr_15469_15497 = state_15465__$1;(statearr_15469_15497[(2)] = null);
(statearr_15469_15497[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15466 === (4)))
{var inst_15429 = (state_15465[(9)]);var inst_15429__$1 = (state_15465[(2)]);var inst_15430 = (inst_15429__$1 == null);var inst_15431 = cljs.core.not.call(null,inst_15430);var state_15465__$1 = (function (){var statearr_15470 = state_15465;(statearr_15470[(9)] = inst_15429__$1);
return statearr_15470;
})();if(inst_15431)
{var statearr_15471_15498 = state_15465__$1;(statearr_15471_15498[(1)] = (5));
} else
{var statearr_15472_15499 = state_15465__$1;(statearr_15472_15499[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15466 === (15)))
{var inst_15455 = (state_15465[(2)]);var state_15465__$1 = state_15465;var statearr_15473_15500 = state_15465__$1;(statearr_15473_15500[(2)] = inst_15455);
(statearr_15473_15500[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15466 === (13)))
{var state_15465__$1 = state_15465;var statearr_15474_15501 = state_15465__$1;(statearr_15474_15501[(2)] = null);
(statearr_15474_15501[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15466 === (6)))
{var inst_15425 = (state_15465[(8)]);var inst_15450 = inst_15425.length;var inst_15451 = (inst_15450 > (0));var state_15465__$1 = state_15465;if(cljs.core.truth_(inst_15451))
{var statearr_15475_15502 = state_15465__$1;(statearr_15475_15502[(1)] = (12));
} else
{var statearr_15476_15503 = state_15465__$1;(statearr_15476_15503[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15466 === (3)))
{var inst_15463 = (state_15465[(2)]);var state_15465__$1 = state_15465;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15465__$1,inst_15463);
} else
{if((state_val_15466 === (12)))
{var inst_15425 = (state_15465[(8)]);var inst_15453 = cljs.core.vec.call(null,inst_15425);var state_15465__$1 = state_15465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15465__$1,(15),out,inst_15453);
} else
{if((state_val_15466 === (2)))
{var state_15465__$1 = state_15465;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15465__$1,(4),ch);
} else
{if((state_val_15466 === (11)))
{var inst_15429 = (state_15465[(9)]);var inst_15433 = (state_15465[(10)]);var inst_15443 = (state_15465[(2)]);var inst_15444 = [];var inst_15445 = inst_15444.push(inst_15429);var inst_15425 = inst_15444;var inst_15426 = inst_15433;var state_15465__$1 = (function (){var statearr_15477 = state_15465;(statearr_15477[(11)] = inst_15445);
(statearr_15477[(7)] = inst_15426);
(statearr_15477[(8)] = inst_15425);
(statearr_15477[(12)] = inst_15443);
return statearr_15477;
})();var statearr_15478_15504 = state_15465__$1;(statearr_15478_15504[(2)] = null);
(statearr_15478_15504[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15466 === (9)))
{var inst_15425 = (state_15465[(8)]);var inst_15441 = cljs.core.vec.call(null,inst_15425);var state_15465__$1 = state_15465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15465__$1,(11),out,inst_15441);
} else
{if((state_val_15466 === (5)))
{var inst_15429 = (state_15465[(9)]);var inst_15426 = (state_15465[(7)]);var inst_15433 = (state_15465[(10)]);var inst_15433__$1 = f.call(null,inst_15429);var inst_15434 = cljs.core._EQ_.call(null,inst_15433__$1,inst_15426);var inst_15435 = cljs.core.keyword_identical_QMARK_.call(null,inst_15426,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_15436 = (inst_15434) || (inst_15435);var state_15465__$1 = (function (){var statearr_15479 = state_15465;(statearr_15479[(10)] = inst_15433__$1);
return statearr_15479;
})();if(cljs.core.truth_(inst_15436))
{var statearr_15480_15505 = state_15465__$1;(statearr_15480_15505[(1)] = (8));
} else
{var statearr_15481_15506 = state_15465__$1;(statearr_15481_15506[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15466 === (14)))
{var inst_15458 = (state_15465[(2)]);var inst_15459 = cljs.core.async.close_BANG_.call(null,out);var state_15465__$1 = (function (){var statearr_15483 = state_15465;(statearr_15483[(13)] = inst_15458);
return statearr_15483;
})();var statearr_15484_15507 = state_15465__$1;(statearr_15484_15507[(2)] = inst_15459);
(statearr_15484_15507[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15466 === (10)))
{var inst_15448 = (state_15465[(2)]);var state_15465__$1 = state_15465;var statearr_15485_15508 = state_15465__$1;(statearr_15485_15508[(2)] = inst_15448);
(statearr_15485_15508[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15466 === (8)))
{var inst_15429 = (state_15465[(9)]);var inst_15425 = (state_15465[(8)]);var inst_15433 = (state_15465[(10)]);var inst_15438 = inst_15425.push(inst_15429);var tmp15482 = inst_15425;var inst_15425__$1 = tmp15482;var inst_15426 = inst_15433;var state_15465__$1 = (function (){var statearr_15486 = state_15465;(statearr_15486[(14)] = inst_15438);
(statearr_15486[(7)] = inst_15426);
(statearr_15486[(8)] = inst_15425__$1);
return statearr_15486;
})();var statearr_15487_15509 = state_15465__$1;(statearr_15487_15509[(2)] = null);
(statearr_15487_15509[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6480__auto___15495,out))
;return ((function (switch__6465__auto__,c__6480__auto___15495,out){
return (function() {
var state_machine__6466__auto__ = null;
var state_machine__6466__auto____0 = (function (){var statearr_15491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15491[(0)] = state_machine__6466__auto__);
(statearr_15491[(1)] = (1));
return statearr_15491;
});
var state_machine__6466__auto____1 = (function (state_15465){while(true){
var ret_value__6467__auto__ = (function (){try{while(true){
var result__6468__auto__ = switch__6465__auto__.call(null,state_15465);if(cljs.core.keyword_identical_QMARK_.call(null,result__6468__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6468__auto__;
}
break;
}
}catch (e15492){if((e15492 instanceof Object))
{var ex__6469__auto__ = e15492;var statearr_15493_15510 = state_15465;(statearr_15493_15510[(5)] = ex__6469__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15465);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e15492;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6467__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15511 = state_15465;
state_15465 = G__15511;
continue;
}
} else
{return ret_value__6467__auto__;
}
break;
}
});
state_machine__6466__auto__ = function(state_15465){
switch(arguments.length){
case 0:
return state_machine__6466__auto____0.call(this);
case 1:
return state_machine__6466__auto____1.call(this,state_15465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6466__auto____0;
state_machine__6466__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6466__auto____1;
return state_machine__6466__auto__;
})()
;})(switch__6465__auto__,c__6480__auto___15495,out))
})();var state__6482__auto__ = (function (){var statearr_15494 = f__6481__auto__.call(null);(statearr_15494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6480__auto___15495);
return statearr_15494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6482__auto__);
});})(c__6480__auto___15495,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map