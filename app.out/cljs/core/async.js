// Compiled by ClojureScript 1.7.145 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async14374 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14374 = (function (fn_handler,f,meta14375){
this.fn_handler = fn_handler;
this.f = f;
this.meta14375 = meta14375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14376,meta14375__$1){
var self__ = this;
var _14376__$1 = this;
return (new cljs.core.async.t_cljs$core$async14374(self__.fn_handler,self__.f,meta14375__$1));
});

cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14376){
var self__ = this;
var _14376__$1 = this;
return self__.meta14375;
});

cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14374.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14374.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta14375","meta14375",-1945410088,null)], null);
});

cljs.core.async.t_cljs$core$async14374.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14374.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14374";

cljs.core.async.t_cljs$core$async14374.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async14374");
});

cljs.core.async.__GT_t_cljs$core$async14374 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async14374(fn_handler__$1,f__$1,meta14375){
return (new cljs.core.async.t_cljs$core$async14374(fn_handler__$1,f__$1,meta14375));
});

}

return (new cljs.core.async.t_cljs$core$async14374(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14379 = [];
var len__6152__auto___14382 = arguments.length;
var i__6153__auto___14383 = (0);
while(true){
if((i__6153__auto___14383 < len__6152__auto___14382)){
args14379.push((arguments[i__6153__auto___14383]));

var G__14384 = (i__6153__auto___14383 + (1));
i__6153__auto___14383 = G__14384;
continue;
} else {
}
break;
}

var G__14381 = args14379.length;
switch (G__14381) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14379.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14386 = [];
var len__6152__auto___14389 = arguments.length;
var i__6153__auto___14390 = (0);
while(true){
if((i__6153__auto___14390 < len__6152__auto___14389)){
args14386.push((arguments[i__6153__auto___14390]));

var G__14391 = (i__6153__auto___14390 + (1));
i__6153__auto___14390 = G__14391;
continue;
} else {
}
break;
}

var G__14388 = args14386.length;
switch (G__14388) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14386.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14393 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14393);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14393,ret){
return (function (){
return fn1.call(null,val_14393);
});})(val_14393,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14394 = [];
var len__6152__auto___14397 = arguments.length;
var i__6153__auto___14398 = (0);
while(true){
if((i__6153__auto___14398 < len__6152__auto___14397)){
args14394.push((arguments[i__6153__auto___14398]));

var G__14399 = (i__6153__auto___14398 + (1));
i__6153__auto___14398 = G__14399;
continue;
} else {
}
break;
}

var G__14396 = args14394.length;
switch (G__14396) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14394.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5997__auto___14401 = n;
var x_14402 = (0);
while(true){
if((x_14402 < n__5997__auto___14401)){
(a[x_14402] = (0));

var G__14403 = (x_14402 + (1));
x_14402 = G__14403;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__14404 = (i + (1));
i = G__14404;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async14408 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14408 = (function (alt_flag,flag,meta14409){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14409 = meta14409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14410,meta14409__$1){
var self__ = this;
var _14410__$1 = this;
return (new cljs.core.async.t_cljs$core$async14408(self__.alt_flag,self__.flag,meta14409__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14410){
var self__ = this;
var _14410__$1 = this;
return self__.meta14409;
});})(flag))
;

cljs.core.async.t_cljs$core$async14408.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14408.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14408.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14408.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14409","meta14409",-545068260,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14408.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14408.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14408";

cljs.core.async.t_cljs$core$async14408.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async14408");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14408 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14408(alt_flag__$1,flag__$1,meta14409){
return (new cljs.core.async.t_cljs$core$async14408(alt_flag__$1,flag__$1,meta14409));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14408(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14414 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14414 = (function (alt_handler,flag,cb,meta14415){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14415 = meta14415;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14416,meta14415__$1){
var self__ = this;
var _14416__$1 = this;
return (new cljs.core.async.t_cljs$core$async14414(self__.alt_handler,self__.flag,self__.cb,meta14415__$1));
});

cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14416){
var self__ = this;
var _14416__$1 = this;
return self__.meta14415;
});

cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14414.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14414.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14415","meta14415",-217206662,null)], null);
});

cljs.core.async.t_cljs$core$async14414.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14414.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14414";

cljs.core.async.t_cljs$core$async14414.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async14414");
});

cljs.core.async.__GT_t_cljs$core$async14414 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14414(alt_handler__$1,flag__$1,cb__$1,meta14415){
return (new cljs.core.async.t_cljs$core$async14414(alt_handler__$1,flag__$1,cb__$1,meta14415));
});

}

return (new cljs.core.async.t_cljs$core$async14414(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14417_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14417_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14418_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14418_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__5094__auto__ = wport;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14419 = (i + (1));
i = G__14419;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5094__auto__ = ret;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__5082__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__5082__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__6159__auto__ = [];
var len__6152__auto___14425 = arguments.length;
var i__6153__auto___14426 = (0);
while(true){
if((i__6153__auto___14426 < len__6152__auto___14425)){
args__6159__auto__.push((arguments[i__6153__auto___14426]));

var G__14427 = (i__6153__auto___14426 + (1));
i__6153__auto___14426 = G__14427;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14422){
var map__14423 = p__14422;
var map__14423__$1 = ((((!((map__14423 == null)))?((((map__14423.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14423.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14423):map__14423);
var opts = map__14423__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14420){
var G__14421 = cljs.core.first.call(null,seq14420);
var seq14420__$1 = cljs.core.next.call(null,seq14420);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14421,seq14420__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14428 = [];
var len__6152__auto___14478 = arguments.length;
var i__6153__auto___14479 = (0);
while(true){
if((i__6153__auto___14479 < len__6152__auto___14478)){
args14428.push((arguments[i__6153__auto___14479]));

var G__14480 = (i__6153__auto___14479 + (1));
i__6153__auto___14479 = G__14480;
continue;
} else {
}
break;
}

var G__14430 = args14428.length;
switch (G__14430) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14428.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8543__auto___14482 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14482){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14482){
return (function (state_14454){
var state_val_14455 = (state_14454[(1)]);
if((state_val_14455 === (7))){
var inst_14450 = (state_14454[(2)]);
var state_14454__$1 = state_14454;
var statearr_14456_14483 = state_14454__$1;
(statearr_14456_14483[(2)] = inst_14450);

(statearr_14456_14483[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14455 === (1))){
var state_14454__$1 = state_14454;
var statearr_14457_14484 = state_14454__$1;
(statearr_14457_14484[(2)] = null);

(statearr_14457_14484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14455 === (4))){
var inst_14433 = (state_14454[(7)]);
var inst_14433__$1 = (state_14454[(2)]);
var inst_14434 = (inst_14433__$1 == null);
var state_14454__$1 = (function (){var statearr_14458 = state_14454;
(statearr_14458[(7)] = inst_14433__$1);

return statearr_14458;
})();
if(cljs.core.truth_(inst_14434)){
var statearr_14459_14485 = state_14454__$1;
(statearr_14459_14485[(1)] = (5));

} else {
var statearr_14460_14486 = state_14454__$1;
(statearr_14460_14486[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14455 === (13))){
var state_14454__$1 = state_14454;
var statearr_14461_14487 = state_14454__$1;
(statearr_14461_14487[(2)] = null);

(statearr_14461_14487[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14455 === (6))){
var inst_14433 = (state_14454[(7)]);
var state_14454__$1 = state_14454;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14454__$1,(11),to,inst_14433);
} else {
if((state_val_14455 === (3))){
var inst_14452 = (state_14454[(2)]);
var state_14454__$1 = state_14454;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14454__$1,inst_14452);
} else {
if((state_val_14455 === (12))){
var state_14454__$1 = state_14454;
var statearr_14462_14488 = state_14454__$1;
(statearr_14462_14488[(2)] = null);

(statearr_14462_14488[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14455 === (2))){
var state_14454__$1 = state_14454;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14454__$1,(4),from);
} else {
if((state_val_14455 === (11))){
var inst_14443 = (state_14454[(2)]);
var state_14454__$1 = state_14454;
if(cljs.core.truth_(inst_14443)){
var statearr_14463_14489 = state_14454__$1;
(statearr_14463_14489[(1)] = (12));

} else {
var statearr_14464_14490 = state_14454__$1;
(statearr_14464_14490[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14455 === (9))){
var state_14454__$1 = state_14454;
var statearr_14465_14491 = state_14454__$1;
(statearr_14465_14491[(2)] = null);

(statearr_14465_14491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14455 === (5))){
var state_14454__$1 = state_14454;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14466_14492 = state_14454__$1;
(statearr_14466_14492[(1)] = (8));

} else {
var statearr_14467_14493 = state_14454__$1;
(statearr_14467_14493[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14455 === (14))){
var inst_14448 = (state_14454[(2)]);
var state_14454__$1 = state_14454;
var statearr_14468_14494 = state_14454__$1;
(statearr_14468_14494[(2)] = inst_14448);

(statearr_14468_14494[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14455 === (10))){
var inst_14440 = (state_14454[(2)]);
var state_14454__$1 = state_14454;
var statearr_14469_14495 = state_14454__$1;
(statearr_14469_14495[(2)] = inst_14440);

(statearr_14469_14495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14455 === (8))){
var inst_14437 = cljs.core.async.close_BANG_.call(null,to);
var state_14454__$1 = state_14454;
var statearr_14470_14496 = state_14454__$1;
(statearr_14470_14496[(2)] = inst_14437);

(statearr_14470_14496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto___14482))
;
return ((function (switch__8478__auto__,c__8543__auto___14482){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_14474 = [null,null,null,null,null,null,null,null];
(statearr_14474[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_14474[(1)] = (1));

return statearr_14474;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_14454){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14454);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14475){if((e14475 instanceof Object)){
var ex__8482__auto__ = e14475;
var statearr_14476_14497 = state_14454;
(statearr_14476_14497[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14454);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14475;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14498 = state_14454;
state_14454 = G__14498;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_14454){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_14454);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14482))
})();
var state__8545__auto__ = (function (){var statearr_14477 = f__8544__auto__.call(null);
(statearr_14477[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14482);

return statearr_14477;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14482))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14682){
var vec__14683 = p__14682;
var v = cljs.core.nth.call(null,vec__14683,(0),null);
var p = cljs.core.nth.call(null,vec__14683,(1),null);
var job = vec__14683;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8543__auto___14865 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14865,res,vec__14683,v,p,job,jobs,results){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14865,res,vec__14683,v,p,job,jobs,results){
return (function (state_14688){
var state_val_14689 = (state_14688[(1)]);
if((state_val_14689 === (1))){
var state_14688__$1 = state_14688;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14688__$1,(2),res,v);
} else {
if((state_val_14689 === (2))){
var inst_14685 = (state_14688[(2)]);
var inst_14686 = cljs.core.async.close_BANG_.call(null,res);
var state_14688__$1 = (function (){var statearr_14690 = state_14688;
(statearr_14690[(7)] = inst_14685);

return statearr_14690;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14688__$1,inst_14686);
} else {
return null;
}
}
});})(c__8543__auto___14865,res,vec__14683,v,p,job,jobs,results))
;
return ((function (switch__8478__auto__,c__8543__auto___14865,res,vec__14683,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_14694 = [null,null,null,null,null,null,null,null];
(statearr_14694[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_14694[(1)] = (1));

return statearr_14694;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_14688){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14688);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14695){if((e14695 instanceof Object)){
var ex__8482__auto__ = e14695;
var statearr_14696_14866 = state_14688;
(statearr_14696_14866[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14688);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14695;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14867 = state_14688;
state_14688 = G__14867;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_14688){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_14688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14865,res,vec__14683,v,p,job,jobs,results))
})();
var state__8545__auto__ = (function (){var statearr_14697 = f__8544__auto__.call(null);
(statearr_14697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14865);

return statearr_14697;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14865,res,vec__14683,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14698){
var vec__14699 = p__14698;
var v = cljs.core.nth.call(null,vec__14699,(0),null);
var p = cljs.core.nth.call(null,vec__14699,(1),null);
var job = vec__14699;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5997__auto___14868 = n;
var __14869 = (0);
while(true){
if((__14869 < n__5997__auto___14868)){
var G__14700_14870 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14700_14870) {
case "compute":
var c__8543__auto___14872 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14869,c__8543__auto___14872,G__14700_14870,n__5997__auto___14868,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (__14869,c__8543__auto___14872,G__14700_14870,n__5997__auto___14868,jobs,results,process,async){
return (function (state_14713){
var state_val_14714 = (state_14713[(1)]);
if((state_val_14714 === (1))){
var state_14713__$1 = state_14713;
var statearr_14715_14873 = state_14713__$1;
(statearr_14715_14873[(2)] = null);

(statearr_14715_14873[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (2))){
var state_14713__$1 = state_14713;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14713__$1,(4),jobs);
} else {
if((state_val_14714 === (3))){
var inst_14711 = (state_14713[(2)]);
var state_14713__$1 = state_14713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14713__$1,inst_14711);
} else {
if((state_val_14714 === (4))){
var inst_14703 = (state_14713[(2)]);
var inst_14704 = process.call(null,inst_14703);
var state_14713__$1 = state_14713;
if(cljs.core.truth_(inst_14704)){
var statearr_14716_14874 = state_14713__$1;
(statearr_14716_14874[(1)] = (5));

} else {
var statearr_14717_14875 = state_14713__$1;
(statearr_14717_14875[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (5))){
var state_14713__$1 = state_14713;
var statearr_14718_14876 = state_14713__$1;
(statearr_14718_14876[(2)] = null);

(statearr_14718_14876[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (6))){
var state_14713__$1 = state_14713;
var statearr_14719_14877 = state_14713__$1;
(statearr_14719_14877[(2)] = null);

(statearr_14719_14877[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14714 === (7))){
var inst_14709 = (state_14713[(2)]);
var state_14713__$1 = state_14713;
var statearr_14720_14878 = state_14713__$1;
(statearr_14720_14878[(2)] = inst_14709);

(statearr_14720_14878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14869,c__8543__auto___14872,G__14700_14870,n__5997__auto___14868,jobs,results,process,async))
;
return ((function (__14869,switch__8478__auto__,c__8543__auto___14872,G__14700_14870,n__5997__auto___14868,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_14724 = [null,null,null,null,null,null,null];
(statearr_14724[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_14724[(1)] = (1));

return statearr_14724;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_14713){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14725){if((e14725 instanceof Object)){
var ex__8482__auto__ = e14725;
var statearr_14726_14879 = state_14713;
(statearr_14726_14879[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14880 = state_14713;
state_14713 = G__14880;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_14713){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_14713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(__14869,switch__8478__auto__,c__8543__auto___14872,G__14700_14870,n__5997__auto___14868,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_14727 = f__8544__auto__.call(null);
(statearr_14727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14872);

return statearr_14727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(__14869,c__8543__auto___14872,G__14700_14870,n__5997__auto___14868,jobs,results,process,async))
);


break;
case "async":
var c__8543__auto___14881 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14869,c__8543__auto___14881,G__14700_14870,n__5997__auto___14868,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (__14869,c__8543__auto___14881,G__14700_14870,n__5997__auto___14868,jobs,results,process,async){
return (function (state_14740){
var state_val_14741 = (state_14740[(1)]);
if((state_val_14741 === (1))){
var state_14740__$1 = state_14740;
var statearr_14742_14882 = state_14740__$1;
(statearr_14742_14882[(2)] = null);

(statearr_14742_14882[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (2))){
var state_14740__$1 = state_14740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14740__$1,(4),jobs);
} else {
if((state_val_14741 === (3))){
var inst_14738 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14740__$1,inst_14738);
} else {
if((state_val_14741 === (4))){
var inst_14730 = (state_14740[(2)]);
var inst_14731 = async.call(null,inst_14730);
var state_14740__$1 = state_14740;
if(cljs.core.truth_(inst_14731)){
var statearr_14743_14883 = state_14740__$1;
(statearr_14743_14883[(1)] = (5));

} else {
var statearr_14744_14884 = state_14740__$1;
(statearr_14744_14884[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (5))){
var state_14740__$1 = state_14740;
var statearr_14745_14885 = state_14740__$1;
(statearr_14745_14885[(2)] = null);

(statearr_14745_14885[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (6))){
var state_14740__$1 = state_14740;
var statearr_14746_14886 = state_14740__$1;
(statearr_14746_14886[(2)] = null);

(statearr_14746_14886[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14741 === (7))){
var inst_14736 = (state_14740[(2)]);
var state_14740__$1 = state_14740;
var statearr_14747_14887 = state_14740__$1;
(statearr_14747_14887[(2)] = inst_14736);

(statearr_14747_14887[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14869,c__8543__auto___14881,G__14700_14870,n__5997__auto___14868,jobs,results,process,async))
;
return ((function (__14869,switch__8478__auto__,c__8543__auto___14881,G__14700_14870,n__5997__auto___14868,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_14751 = [null,null,null,null,null,null,null];
(statearr_14751[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_14751[(1)] = (1));

return statearr_14751;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_14740){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14752){if((e14752 instanceof Object)){
var ex__8482__auto__ = e14752;
var statearr_14753_14888 = state_14740;
(statearr_14753_14888[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14752;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14889 = state_14740;
state_14740 = G__14889;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_14740){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_14740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(__14869,switch__8478__auto__,c__8543__auto___14881,G__14700_14870,n__5997__auto___14868,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_14754 = f__8544__auto__.call(null);
(statearr_14754[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14881);

return statearr_14754;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(__14869,c__8543__auto___14881,G__14700_14870,n__5997__auto___14868,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14890 = (__14869 + (1));
__14869 = G__14890;
continue;
} else {
}
break;
}

var c__8543__auto___14891 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14891,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14891,jobs,results,process,async){
return (function (state_14776){
var state_val_14777 = (state_14776[(1)]);
if((state_val_14777 === (1))){
var state_14776__$1 = state_14776;
var statearr_14778_14892 = state_14776__$1;
(statearr_14778_14892[(2)] = null);

(statearr_14778_14892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (2))){
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14776__$1,(4),from);
} else {
if((state_val_14777 === (3))){
var inst_14774 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14776__$1,inst_14774);
} else {
if((state_val_14777 === (4))){
var inst_14757 = (state_14776[(7)]);
var inst_14757__$1 = (state_14776[(2)]);
var inst_14758 = (inst_14757__$1 == null);
var state_14776__$1 = (function (){var statearr_14779 = state_14776;
(statearr_14779[(7)] = inst_14757__$1);

return statearr_14779;
})();
if(cljs.core.truth_(inst_14758)){
var statearr_14780_14893 = state_14776__$1;
(statearr_14780_14893[(1)] = (5));

} else {
var statearr_14781_14894 = state_14776__$1;
(statearr_14781_14894[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (5))){
var inst_14760 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14776__$1 = state_14776;
var statearr_14782_14895 = state_14776__$1;
(statearr_14782_14895[(2)] = inst_14760);

(statearr_14782_14895[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (6))){
var inst_14762 = (state_14776[(8)]);
var inst_14757 = (state_14776[(7)]);
var inst_14762__$1 = cljs.core.async.chan.call(null,(1));
var inst_14763 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14764 = [inst_14757,inst_14762__$1];
var inst_14765 = (new cljs.core.PersistentVector(null,2,(5),inst_14763,inst_14764,null));
var state_14776__$1 = (function (){var statearr_14783 = state_14776;
(statearr_14783[(8)] = inst_14762__$1);

return statearr_14783;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14776__$1,(8),jobs,inst_14765);
} else {
if((state_val_14777 === (7))){
var inst_14772 = (state_14776[(2)]);
var state_14776__$1 = state_14776;
var statearr_14784_14896 = state_14776__$1;
(statearr_14784_14896[(2)] = inst_14772);

(statearr_14784_14896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14777 === (8))){
var inst_14762 = (state_14776[(8)]);
var inst_14767 = (state_14776[(2)]);
var state_14776__$1 = (function (){var statearr_14785 = state_14776;
(statearr_14785[(9)] = inst_14767);

return statearr_14785;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14776__$1,(9),results,inst_14762);
} else {
if((state_val_14777 === (9))){
var inst_14769 = (state_14776[(2)]);
var state_14776__$1 = (function (){var statearr_14786 = state_14776;
(statearr_14786[(10)] = inst_14769);

return statearr_14786;
})();
var statearr_14787_14897 = state_14776__$1;
(statearr_14787_14897[(2)] = null);

(statearr_14787_14897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__8543__auto___14891,jobs,results,process,async))
;
return ((function (switch__8478__auto__,c__8543__auto___14891,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_14791 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14791[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_14791[(1)] = (1));

return statearr_14791;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_14776){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14776);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14792){if((e14792 instanceof Object)){
var ex__8482__auto__ = e14792;
var statearr_14793_14898 = state_14776;
(statearr_14793_14898[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14776);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14792;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14899 = state_14776;
state_14776 = G__14899;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_14776){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_14776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14891,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_14794 = f__8544__auto__.call(null);
(statearr_14794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14891);

return statearr_14794;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14891,jobs,results,process,async))
);


var c__8543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto__,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto__,jobs,results,process,async){
return (function (state_14832){
var state_val_14833 = (state_14832[(1)]);
if((state_val_14833 === (7))){
var inst_14828 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14834_14900 = state_14832__$1;
(statearr_14834_14900[(2)] = inst_14828);

(statearr_14834_14900[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (20))){
var state_14832__$1 = state_14832;
var statearr_14835_14901 = state_14832__$1;
(statearr_14835_14901[(2)] = null);

(statearr_14835_14901[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (1))){
var state_14832__$1 = state_14832;
var statearr_14836_14902 = state_14832__$1;
(statearr_14836_14902[(2)] = null);

(statearr_14836_14902[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (4))){
var inst_14797 = (state_14832[(7)]);
var inst_14797__$1 = (state_14832[(2)]);
var inst_14798 = (inst_14797__$1 == null);
var state_14832__$1 = (function (){var statearr_14837 = state_14832;
(statearr_14837[(7)] = inst_14797__$1);

return statearr_14837;
})();
if(cljs.core.truth_(inst_14798)){
var statearr_14838_14903 = state_14832__$1;
(statearr_14838_14903[(1)] = (5));

} else {
var statearr_14839_14904 = state_14832__$1;
(statearr_14839_14904[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (15))){
var inst_14810 = (state_14832[(8)]);
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14832__$1,(18),to,inst_14810);
} else {
if((state_val_14833 === (21))){
var inst_14823 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14840_14905 = state_14832__$1;
(statearr_14840_14905[(2)] = inst_14823);

(statearr_14840_14905[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (13))){
var inst_14825 = (state_14832[(2)]);
var state_14832__$1 = (function (){var statearr_14841 = state_14832;
(statearr_14841[(9)] = inst_14825);

return statearr_14841;
})();
var statearr_14842_14906 = state_14832__$1;
(statearr_14842_14906[(2)] = null);

(statearr_14842_14906[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (6))){
var inst_14797 = (state_14832[(7)]);
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14832__$1,(11),inst_14797);
} else {
if((state_val_14833 === (17))){
var inst_14818 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
if(cljs.core.truth_(inst_14818)){
var statearr_14843_14907 = state_14832__$1;
(statearr_14843_14907[(1)] = (19));

} else {
var statearr_14844_14908 = state_14832__$1;
(statearr_14844_14908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (3))){
var inst_14830 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14832__$1,inst_14830);
} else {
if((state_val_14833 === (12))){
var inst_14807 = (state_14832[(10)]);
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14832__$1,(14),inst_14807);
} else {
if((state_val_14833 === (2))){
var state_14832__$1 = state_14832;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14832__$1,(4),results);
} else {
if((state_val_14833 === (19))){
var state_14832__$1 = state_14832;
var statearr_14845_14909 = state_14832__$1;
(statearr_14845_14909[(2)] = null);

(statearr_14845_14909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (11))){
var inst_14807 = (state_14832[(2)]);
var state_14832__$1 = (function (){var statearr_14846 = state_14832;
(statearr_14846[(10)] = inst_14807);

return statearr_14846;
})();
var statearr_14847_14910 = state_14832__$1;
(statearr_14847_14910[(2)] = null);

(statearr_14847_14910[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (9))){
var state_14832__$1 = state_14832;
var statearr_14848_14911 = state_14832__$1;
(statearr_14848_14911[(2)] = null);

(statearr_14848_14911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (5))){
var state_14832__$1 = state_14832;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14849_14912 = state_14832__$1;
(statearr_14849_14912[(1)] = (8));

} else {
var statearr_14850_14913 = state_14832__$1;
(statearr_14850_14913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (14))){
var inst_14812 = (state_14832[(11)]);
var inst_14810 = (state_14832[(8)]);
var inst_14810__$1 = (state_14832[(2)]);
var inst_14811 = (inst_14810__$1 == null);
var inst_14812__$1 = cljs.core.not.call(null,inst_14811);
var state_14832__$1 = (function (){var statearr_14851 = state_14832;
(statearr_14851[(11)] = inst_14812__$1);

(statearr_14851[(8)] = inst_14810__$1);

return statearr_14851;
})();
if(inst_14812__$1){
var statearr_14852_14914 = state_14832__$1;
(statearr_14852_14914[(1)] = (15));

} else {
var statearr_14853_14915 = state_14832__$1;
(statearr_14853_14915[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (16))){
var inst_14812 = (state_14832[(11)]);
var state_14832__$1 = state_14832;
var statearr_14854_14916 = state_14832__$1;
(statearr_14854_14916[(2)] = inst_14812);

(statearr_14854_14916[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (10))){
var inst_14804 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14855_14917 = state_14832__$1;
(statearr_14855_14917[(2)] = inst_14804);

(statearr_14855_14917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (18))){
var inst_14815 = (state_14832[(2)]);
var state_14832__$1 = state_14832;
var statearr_14856_14918 = state_14832__$1;
(statearr_14856_14918[(2)] = inst_14815);

(statearr_14856_14918[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14833 === (8))){
var inst_14801 = cljs.core.async.close_BANG_.call(null,to);
var state_14832__$1 = state_14832;
var statearr_14857_14919 = state_14832__$1;
(statearr_14857_14919[(2)] = inst_14801);

(statearr_14857_14919[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto__,jobs,results,process,async))
;
return ((function (switch__8478__auto__,c__8543__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_14861 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14861[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_14861[(1)] = (1));

return statearr_14861;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_14832){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14832);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14862){if((e14862 instanceof Object)){
var ex__8482__auto__ = e14862;
var statearr_14863_14920 = state_14832;
(statearr_14863_14920[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14832);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14862;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14921 = state_14832;
state_14832 = G__14921;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_14832){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_14832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_14864 = f__8544__auto__.call(null);
(statearr_14864[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_14864;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto__,jobs,results,process,async))
);

return c__8543__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14922 = [];
var len__6152__auto___14925 = arguments.length;
var i__6153__auto___14926 = (0);
while(true){
if((i__6153__auto___14926 < len__6152__auto___14925)){
args14922.push((arguments[i__6153__auto___14926]));

var G__14927 = (i__6153__auto___14926 + (1));
i__6153__auto___14926 = G__14927;
continue;
} else {
}
break;
}

var G__14924 = args14922.length;
switch (G__14924) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14922.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14929 = [];
var len__6152__auto___14932 = arguments.length;
var i__6153__auto___14933 = (0);
while(true){
if((i__6153__auto___14933 < len__6152__auto___14932)){
args14929.push((arguments[i__6153__auto___14933]));

var G__14934 = (i__6153__auto___14933 + (1));
i__6153__auto___14933 = G__14934;
continue;
} else {
}
break;
}

var G__14931 = args14929.length;
switch (G__14931) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14929.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14936 = [];
var len__6152__auto___14989 = arguments.length;
var i__6153__auto___14990 = (0);
while(true){
if((i__6153__auto___14990 < len__6152__auto___14989)){
args14936.push((arguments[i__6153__auto___14990]));

var G__14991 = (i__6153__auto___14990 + (1));
i__6153__auto___14990 = G__14991;
continue;
} else {
}
break;
}

var G__14938 = args14936.length;
switch (G__14938) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14936.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8543__auto___14993 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14993,tc,fc){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14993,tc,fc){
return (function (state_14964){
var state_val_14965 = (state_14964[(1)]);
if((state_val_14965 === (7))){
var inst_14960 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
var statearr_14966_14994 = state_14964__$1;
(statearr_14966_14994[(2)] = inst_14960);

(statearr_14966_14994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (1))){
var state_14964__$1 = state_14964;
var statearr_14967_14995 = state_14964__$1;
(statearr_14967_14995[(2)] = null);

(statearr_14967_14995[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (4))){
var inst_14941 = (state_14964[(7)]);
var inst_14941__$1 = (state_14964[(2)]);
var inst_14942 = (inst_14941__$1 == null);
var state_14964__$1 = (function (){var statearr_14968 = state_14964;
(statearr_14968[(7)] = inst_14941__$1);

return statearr_14968;
})();
if(cljs.core.truth_(inst_14942)){
var statearr_14969_14996 = state_14964__$1;
(statearr_14969_14996[(1)] = (5));

} else {
var statearr_14970_14997 = state_14964__$1;
(statearr_14970_14997[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (13))){
var state_14964__$1 = state_14964;
var statearr_14971_14998 = state_14964__$1;
(statearr_14971_14998[(2)] = null);

(statearr_14971_14998[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (6))){
var inst_14941 = (state_14964[(7)]);
var inst_14947 = p.call(null,inst_14941);
var state_14964__$1 = state_14964;
if(cljs.core.truth_(inst_14947)){
var statearr_14972_14999 = state_14964__$1;
(statearr_14972_14999[(1)] = (9));

} else {
var statearr_14973_15000 = state_14964__$1;
(statearr_14973_15000[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (3))){
var inst_14962 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14964__$1,inst_14962);
} else {
if((state_val_14965 === (12))){
var state_14964__$1 = state_14964;
var statearr_14974_15001 = state_14964__$1;
(statearr_14974_15001[(2)] = null);

(statearr_14974_15001[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (2))){
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14964__$1,(4),ch);
} else {
if((state_val_14965 === (11))){
var inst_14941 = (state_14964[(7)]);
var inst_14951 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14964__$1,(8),inst_14951,inst_14941);
} else {
if((state_val_14965 === (9))){
var state_14964__$1 = state_14964;
var statearr_14975_15002 = state_14964__$1;
(statearr_14975_15002[(2)] = tc);

(statearr_14975_15002[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (5))){
var inst_14944 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14945 = cljs.core.async.close_BANG_.call(null,fc);
var state_14964__$1 = (function (){var statearr_14976 = state_14964;
(statearr_14976[(8)] = inst_14944);

return statearr_14976;
})();
var statearr_14977_15003 = state_14964__$1;
(statearr_14977_15003[(2)] = inst_14945);

(statearr_14977_15003[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (14))){
var inst_14958 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
var statearr_14978_15004 = state_14964__$1;
(statearr_14978_15004[(2)] = inst_14958);

(statearr_14978_15004[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (10))){
var state_14964__$1 = state_14964;
var statearr_14979_15005 = state_14964__$1;
(statearr_14979_15005[(2)] = fc);

(statearr_14979_15005[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14965 === (8))){
var inst_14953 = (state_14964[(2)]);
var state_14964__$1 = state_14964;
if(cljs.core.truth_(inst_14953)){
var statearr_14980_15006 = state_14964__$1;
(statearr_14980_15006[(1)] = (12));

} else {
var statearr_14981_15007 = state_14964__$1;
(statearr_14981_15007[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto___14993,tc,fc))
;
return ((function (switch__8478__auto__,c__8543__auto___14993,tc,fc){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_14985 = [null,null,null,null,null,null,null,null,null];
(statearr_14985[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_14985[(1)] = (1));

return statearr_14985;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_14964){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14964);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14986){if((e14986 instanceof Object)){
var ex__8482__auto__ = e14986;
var statearr_14987_15008 = state_14964;
(statearr_14987_15008[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14964);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15009 = state_14964;
state_14964 = G__15009;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_14964){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_14964);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14993,tc,fc))
})();
var state__8545__auto__ = (function (){var statearr_14988 = f__8544__auto__.call(null);
(statearr_14988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14993);

return statearr_14988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14993,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__8543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto__){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto__){
return (function (state_15056){
var state_val_15057 = (state_15056[(1)]);
if((state_val_15057 === (1))){
var inst_15042 = init;
var state_15056__$1 = (function (){var statearr_15058 = state_15056;
(statearr_15058[(7)] = inst_15042);

return statearr_15058;
})();
var statearr_15059_15074 = state_15056__$1;
(statearr_15059_15074[(2)] = null);

(statearr_15059_15074[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (2))){
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15056__$1,(4),ch);
} else {
if((state_val_15057 === (3))){
var inst_15054 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15056__$1,inst_15054);
} else {
if((state_val_15057 === (4))){
var inst_15045 = (state_15056[(8)]);
var inst_15045__$1 = (state_15056[(2)]);
var inst_15046 = (inst_15045__$1 == null);
var state_15056__$1 = (function (){var statearr_15060 = state_15056;
(statearr_15060[(8)] = inst_15045__$1);

return statearr_15060;
})();
if(cljs.core.truth_(inst_15046)){
var statearr_15061_15075 = state_15056__$1;
(statearr_15061_15075[(1)] = (5));

} else {
var statearr_15062_15076 = state_15056__$1;
(statearr_15062_15076[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (5))){
var inst_15042 = (state_15056[(7)]);
var state_15056__$1 = state_15056;
var statearr_15063_15077 = state_15056__$1;
(statearr_15063_15077[(2)] = inst_15042);

(statearr_15063_15077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (6))){
var inst_15045 = (state_15056[(8)]);
var inst_15042 = (state_15056[(7)]);
var inst_15049 = f.call(null,inst_15042,inst_15045);
var inst_15042__$1 = inst_15049;
var state_15056__$1 = (function (){var statearr_15064 = state_15056;
(statearr_15064[(7)] = inst_15042__$1);

return statearr_15064;
})();
var statearr_15065_15078 = state_15056__$1;
(statearr_15065_15078[(2)] = null);

(statearr_15065_15078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15057 === (7))){
var inst_15052 = (state_15056[(2)]);
var state_15056__$1 = state_15056;
var statearr_15066_15079 = state_15056__$1;
(statearr_15066_15079[(2)] = inst_15052);

(statearr_15066_15079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__8543__auto__))
;
return ((function (switch__8478__auto__,c__8543__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__8479__auto__ = null;
var cljs$core$async$reduce_$_state_machine__8479__auto____0 = (function (){
var statearr_15070 = [null,null,null,null,null,null,null,null,null];
(statearr_15070[(0)] = cljs$core$async$reduce_$_state_machine__8479__auto__);

(statearr_15070[(1)] = (1));

return statearr_15070;
});
var cljs$core$async$reduce_$_state_machine__8479__auto____1 = (function (state_15056){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15056);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15071){if((e15071 instanceof Object)){
var ex__8482__auto__ = e15071;
var statearr_15072_15080 = state_15056;
(statearr_15072_15080[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15056);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15081 = state_15056;
state_15056 = G__15081;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8479__auto__ = function(state_15056){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8479__auto____1.call(this,state_15056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8479__auto____0;
cljs$core$async$reduce_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8479__auto____1;
return cljs$core$async$reduce_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__))
})();
var state__8545__auto__ = (function (){var statearr_15073 = f__8544__auto__.call(null);
(statearr_15073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_15073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto__))
);

return c__8543__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args15082 = [];
var len__6152__auto___15134 = arguments.length;
var i__6153__auto___15135 = (0);
while(true){
if((i__6153__auto___15135 < len__6152__auto___15134)){
args15082.push((arguments[i__6153__auto___15135]));

var G__15136 = (i__6153__auto___15135 + (1));
i__6153__auto___15135 = G__15136;
continue;
} else {
}
break;
}

var G__15084 = args15082.length;
switch (G__15084) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15082.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__8543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto__){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto__){
return (function (state_15109){
var state_val_15110 = (state_15109[(1)]);
if((state_val_15110 === (7))){
var inst_15091 = (state_15109[(2)]);
var state_15109__$1 = state_15109;
var statearr_15111_15138 = state_15109__$1;
(statearr_15111_15138[(2)] = inst_15091);

(statearr_15111_15138[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (1))){
var inst_15085 = cljs.core.seq.call(null,coll);
var inst_15086 = inst_15085;
var state_15109__$1 = (function (){var statearr_15112 = state_15109;
(statearr_15112[(7)] = inst_15086);

return statearr_15112;
})();
var statearr_15113_15139 = state_15109__$1;
(statearr_15113_15139[(2)] = null);

(statearr_15113_15139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (4))){
var inst_15086 = (state_15109[(7)]);
var inst_15089 = cljs.core.first.call(null,inst_15086);
var state_15109__$1 = state_15109;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15109__$1,(7),ch,inst_15089);
} else {
if((state_val_15110 === (13))){
var inst_15103 = (state_15109[(2)]);
var state_15109__$1 = state_15109;
var statearr_15114_15140 = state_15109__$1;
(statearr_15114_15140[(2)] = inst_15103);

(statearr_15114_15140[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (6))){
var inst_15094 = (state_15109[(2)]);
var state_15109__$1 = state_15109;
if(cljs.core.truth_(inst_15094)){
var statearr_15115_15141 = state_15109__$1;
(statearr_15115_15141[(1)] = (8));

} else {
var statearr_15116_15142 = state_15109__$1;
(statearr_15116_15142[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (3))){
var inst_15107 = (state_15109[(2)]);
var state_15109__$1 = state_15109;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15109__$1,inst_15107);
} else {
if((state_val_15110 === (12))){
var state_15109__$1 = state_15109;
var statearr_15117_15143 = state_15109__$1;
(statearr_15117_15143[(2)] = null);

(statearr_15117_15143[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (2))){
var inst_15086 = (state_15109[(7)]);
var state_15109__$1 = state_15109;
if(cljs.core.truth_(inst_15086)){
var statearr_15118_15144 = state_15109__$1;
(statearr_15118_15144[(1)] = (4));

} else {
var statearr_15119_15145 = state_15109__$1;
(statearr_15119_15145[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (11))){
var inst_15100 = cljs.core.async.close_BANG_.call(null,ch);
var state_15109__$1 = state_15109;
var statearr_15120_15146 = state_15109__$1;
(statearr_15120_15146[(2)] = inst_15100);

(statearr_15120_15146[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (9))){
var state_15109__$1 = state_15109;
if(cljs.core.truth_(close_QMARK_)){
var statearr_15121_15147 = state_15109__$1;
(statearr_15121_15147[(1)] = (11));

} else {
var statearr_15122_15148 = state_15109__$1;
(statearr_15122_15148[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (5))){
var inst_15086 = (state_15109[(7)]);
var state_15109__$1 = state_15109;
var statearr_15123_15149 = state_15109__$1;
(statearr_15123_15149[(2)] = inst_15086);

(statearr_15123_15149[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (10))){
var inst_15105 = (state_15109[(2)]);
var state_15109__$1 = state_15109;
var statearr_15124_15150 = state_15109__$1;
(statearr_15124_15150[(2)] = inst_15105);

(statearr_15124_15150[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15110 === (8))){
var inst_15086 = (state_15109[(7)]);
var inst_15096 = cljs.core.next.call(null,inst_15086);
var inst_15086__$1 = inst_15096;
var state_15109__$1 = (function (){var statearr_15125 = state_15109;
(statearr_15125[(7)] = inst_15086__$1);

return statearr_15125;
})();
var statearr_15126_15151 = state_15109__$1;
(statearr_15126_15151[(2)] = null);

(statearr_15126_15151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto__))
;
return ((function (switch__8478__auto__,c__8543__auto__){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15130 = [null,null,null,null,null,null,null,null];
(statearr_15130[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15130[(1)] = (1));

return statearr_15130;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15109){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15109);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15131){if((e15131 instanceof Object)){
var ex__8482__auto__ = e15131;
var statearr_15132_15152 = state_15109;
(statearr_15132_15152[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15109);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15153 = state_15109;
state_15109 = G__15153;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15109){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__))
})();
var state__8545__auto__ = (function (){var statearr_15133 = f__8544__auto__.call(null);
(statearr_15133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_15133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto__))
);

return c__8543__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5749__auto__ = (((_ == null))?null:_);
var m__5750__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,_);
} else {
var m__5750__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5750__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m);
} else {
var m__5750__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15375 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15375 = (function (mult,ch,cs,meta15376){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15376 = meta15376;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15375.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15377,meta15376__$1){
var self__ = this;
var _15377__$1 = this;
return (new cljs.core.async.t_cljs$core$async15375(self__.mult,self__.ch,self__.cs,meta15376__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15375.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15377){
var self__ = this;
var _15377__$1 = this;
return self__.meta15376;
});})(cs))
;

cljs.core.async.t_cljs$core$async15375.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15375.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15375.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15375.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15375.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15375.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15375.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15376","meta15376",1424202276,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15375.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15375.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15375";

cljs.core.async.t_cljs$core$async15375.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15375");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15375 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15375(mult__$1,ch__$1,cs__$1,meta15376){
return (new cljs.core.async.t_cljs$core$async15375(mult__$1,ch__$1,cs__$1,meta15376));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15375(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__8543__auto___15596 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15596,cs,m,dchan,dctr,done){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15596,cs,m,dchan,dctr,done){
return (function (state_15508){
var state_val_15509 = (state_15508[(1)]);
if((state_val_15509 === (7))){
var inst_15504 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15510_15597 = state_15508__$1;
(statearr_15510_15597[(2)] = inst_15504);

(statearr_15510_15597[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (20))){
var inst_15409 = (state_15508[(7)]);
var inst_15419 = cljs.core.first.call(null,inst_15409);
var inst_15420 = cljs.core.nth.call(null,inst_15419,(0),null);
var inst_15421 = cljs.core.nth.call(null,inst_15419,(1),null);
var state_15508__$1 = (function (){var statearr_15511 = state_15508;
(statearr_15511[(8)] = inst_15420);

return statearr_15511;
})();
if(cljs.core.truth_(inst_15421)){
var statearr_15512_15598 = state_15508__$1;
(statearr_15512_15598[(1)] = (22));

} else {
var statearr_15513_15599 = state_15508__$1;
(statearr_15513_15599[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (27))){
var inst_15451 = (state_15508[(9)]);
var inst_15380 = (state_15508[(10)]);
var inst_15449 = (state_15508[(11)]);
var inst_15456 = (state_15508[(12)]);
var inst_15456__$1 = cljs.core._nth.call(null,inst_15449,inst_15451);
var inst_15457 = cljs.core.async.put_BANG_.call(null,inst_15456__$1,inst_15380,done);
var state_15508__$1 = (function (){var statearr_15514 = state_15508;
(statearr_15514[(12)] = inst_15456__$1);

return statearr_15514;
})();
if(cljs.core.truth_(inst_15457)){
var statearr_15515_15600 = state_15508__$1;
(statearr_15515_15600[(1)] = (30));

} else {
var statearr_15516_15601 = state_15508__$1;
(statearr_15516_15601[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (1))){
var state_15508__$1 = state_15508;
var statearr_15517_15602 = state_15508__$1;
(statearr_15517_15602[(2)] = null);

(statearr_15517_15602[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (24))){
var inst_15409 = (state_15508[(7)]);
var inst_15426 = (state_15508[(2)]);
var inst_15427 = cljs.core.next.call(null,inst_15409);
var inst_15389 = inst_15427;
var inst_15390 = null;
var inst_15391 = (0);
var inst_15392 = (0);
var state_15508__$1 = (function (){var statearr_15518 = state_15508;
(statearr_15518[(13)] = inst_15392);

(statearr_15518[(14)] = inst_15389);

(statearr_15518[(15)] = inst_15426);

(statearr_15518[(16)] = inst_15390);

(statearr_15518[(17)] = inst_15391);

return statearr_15518;
})();
var statearr_15519_15603 = state_15508__$1;
(statearr_15519_15603[(2)] = null);

(statearr_15519_15603[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (39))){
var state_15508__$1 = state_15508;
var statearr_15523_15604 = state_15508__$1;
(statearr_15523_15604[(2)] = null);

(statearr_15523_15604[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (4))){
var inst_15380 = (state_15508[(10)]);
var inst_15380__$1 = (state_15508[(2)]);
var inst_15381 = (inst_15380__$1 == null);
var state_15508__$1 = (function (){var statearr_15524 = state_15508;
(statearr_15524[(10)] = inst_15380__$1);

return statearr_15524;
})();
if(cljs.core.truth_(inst_15381)){
var statearr_15525_15605 = state_15508__$1;
(statearr_15525_15605[(1)] = (5));

} else {
var statearr_15526_15606 = state_15508__$1;
(statearr_15526_15606[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (15))){
var inst_15392 = (state_15508[(13)]);
var inst_15389 = (state_15508[(14)]);
var inst_15390 = (state_15508[(16)]);
var inst_15391 = (state_15508[(17)]);
var inst_15405 = (state_15508[(2)]);
var inst_15406 = (inst_15392 + (1));
var tmp15520 = inst_15389;
var tmp15521 = inst_15390;
var tmp15522 = inst_15391;
var inst_15389__$1 = tmp15520;
var inst_15390__$1 = tmp15521;
var inst_15391__$1 = tmp15522;
var inst_15392__$1 = inst_15406;
var state_15508__$1 = (function (){var statearr_15527 = state_15508;
(statearr_15527[(13)] = inst_15392__$1);

(statearr_15527[(14)] = inst_15389__$1);

(statearr_15527[(16)] = inst_15390__$1);

(statearr_15527[(17)] = inst_15391__$1);

(statearr_15527[(18)] = inst_15405);

return statearr_15527;
})();
var statearr_15528_15607 = state_15508__$1;
(statearr_15528_15607[(2)] = null);

(statearr_15528_15607[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (21))){
var inst_15430 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15532_15608 = state_15508__$1;
(statearr_15532_15608[(2)] = inst_15430);

(statearr_15532_15608[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (31))){
var inst_15456 = (state_15508[(12)]);
var inst_15460 = done.call(null,null);
var inst_15461 = cljs.core.async.untap_STAR_.call(null,m,inst_15456);
var state_15508__$1 = (function (){var statearr_15533 = state_15508;
(statearr_15533[(19)] = inst_15460);

return statearr_15533;
})();
var statearr_15534_15609 = state_15508__$1;
(statearr_15534_15609[(2)] = inst_15461);

(statearr_15534_15609[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (32))){
var inst_15451 = (state_15508[(9)]);
var inst_15449 = (state_15508[(11)]);
var inst_15448 = (state_15508[(20)]);
var inst_15450 = (state_15508[(21)]);
var inst_15463 = (state_15508[(2)]);
var inst_15464 = (inst_15451 + (1));
var tmp15529 = inst_15449;
var tmp15530 = inst_15448;
var tmp15531 = inst_15450;
var inst_15448__$1 = tmp15530;
var inst_15449__$1 = tmp15529;
var inst_15450__$1 = tmp15531;
var inst_15451__$1 = inst_15464;
var state_15508__$1 = (function (){var statearr_15535 = state_15508;
(statearr_15535[(9)] = inst_15451__$1);

(statearr_15535[(11)] = inst_15449__$1);

(statearr_15535[(20)] = inst_15448__$1);

(statearr_15535[(21)] = inst_15450__$1);

(statearr_15535[(22)] = inst_15463);

return statearr_15535;
})();
var statearr_15536_15610 = state_15508__$1;
(statearr_15536_15610[(2)] = null);

(statearr_15536_15610[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (40))){
var inst_15476 = (state_15508[(23)]);
var inst_15480 = done.call(null,null);
var inst_15481 = cljs.core.async.untap_STAR_.call(null,m,inst_15476);
var state_15508__$1 = (function (){var statearr_15537 = state_15508;
(statearr_15537[(24)] = inst_15480);

return statearr_15537;
})();
var statearr_15538_15611 = state_15508__$1;
(statearr_15538_15611[(2)] = inst_15481);

(statearr_15538_15611[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (33))){
var inst_15467 = (state_15508[(25)]);
var inst_15469 = cljs.core.chunked_seq_QMARK_.call(null,inst_15467);
var state_15508__$1 = state_15508;
if(inst_15469){
var statearr_15539_15612 = state_15508__$1;
(statearr_15539_15612[(1)] = (36));

} else {
var statearr_15540_15613 = state_15508__$1;
(statearr_15540_15613[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (13))){
var inst_15399 = (state_15508[(26)]);
var inst_15402 = cljs.core.async.close_BANG_.call(null,inst_15399);
var state_15508__$1 = state_15508;
var statearr_15541_15614 = state_15508__$1;
(statearr_15541_15614[(2)] = inst_15402);

(statearr_15541_15614[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (22))){
var inst_15420 = (state_15508[(8)]);
var inst_15423 = cljs.core.async.close_BANG_.call(null,inst_15420);
var state_15508__$1 = state_15508;
var statearr_15542_15615 = state_15508__$1;
(statearr_15542_15615[(2)] = inst_15423);

(statearr_15542_15615[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (36))){
var inst_15467 = (state_15508[(25)]);
var inst_15471 = cljs.core.chunk_first.call(null,inst_15467);
var inst_15472 = cljs.core.chunk_rest.call(null,inst_15467);
var inst_15473 = cljs.core.count.call(null,inst_15471);
var inst_15448 = inst_15472;
var inst_15449 = inst_15471;
var inst_15450 = inst_15473;
var inst_15451 = (0);
var state_15508__$1 = (function (){var statearr_15543 = state_15508;
(statearr_15543[(9)] = inst_15451);

(statearr_15543[(11)] = inst_15449);

(statearr_15543[(20)] = inst_15448);

(statearr_15543[(21)] = inst_15450);

return statearr_15543;
})();
var statearr_15544_15616 = state_15508__$1;
(statearr_15544_15616[(2)] = null);

(statearr_15544_15616[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (41))){
var inst_15467 = (state_15508[(25)]);
var inst_15483 = (state_15508[(2)]);
var inst_15484 = cljs.core.next.call(null,inst_15467);
var inst_15448 = inst_15484;
var inst_15449 = null;
var inst_15450 = (0);
var inst_15451 = (0);
var state_15508__$1 = (function (){var statearr_15545 = state_15508;
(statearr_15545[(9)] = inst_15451);

(statearr_15545[(11)] = inst_15449);

(statearr_15545[(20)] = inst_15448);

(statearr_15545[(27)] = inst_15483);

(statearr_15545[(21)] = inst_15450);

return statearr_15545;
})();
var statearr_15546_15617 = state_15508__$1;
(statearr_15546_15617[(2)] = null);

(statearr_15546_15617[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (43))){
var state_15508__$1 = state_15508;
var statearr_15547_15618 = state_15508__$1;
(statearr_15547_15618[(2)] = null);

(statearr_15547_15618[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (29))){
var inst_15492 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15548_15619 = state_15508__$1;
(statearr_15548_15619[(2)] = inst_15492);

(statearr_15548_15619[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (44))){
var inst_15501 = (state_15508[(2)]);
var state_15508__$1 = (function (){var statearr_15549 = state_15508;
(statearr_15549[(28)] = inst_15501);

return statearr_15549;
})();
var statearr_15550_15620 = state_15508__$1;
(statearr_15550_15620[(2)] = null);

(statearr_15550_15620[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (6))){
var inst_15440 = (state_15508[(29)]);
var inst_15439 = cljs.core.deref.call(null,cs);
var inst_15440__$1 = cljs.core.keys.call(null,inst_15439);
var inst_15441 = cljs.core.count.call(null,inst_15440__$1);
var inst_15442 = cljs.core.reset_BANG_.call(null,dctr,inst_15441);
var inst_15447 = cljs.core.seq.call(null,inst_15440__$1);
var inst_15448 = inst_15447;
var inst_15449 = null;
var inst_15450 = (0);
var inst_15451 = (0);
var state_15508__$1 = (function (){var statearr_15551 = state_15508;
(statearr_15551[(30)] = inst_15442);

(statearr_15551[(9)] = inst_15451);

(statearr_15551[(11)] = inst_15449);

(statearr_15551[(20)] = inst_15448);

(statearr_15551[(21)] = inst_15450);

(statearr_15551[(29)] = inst_15440__$1);

return statearr_15551;
})();
var statearr_15552_15621 = state_15508__$1;
(statearr_15552_15621[(2)] = null);

(statearr_15552_15621[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (28))){
var inst_15467 = (state_15508[(25)]);
var inst_15448 = (state_15508[(20)]);
var inst_15467__$1 = cljs.core.seq.call(null,inst_15448);
var state_15508__$1 = (function (){var statearr_15553 = state_15508;
(statearr_15553[(25)] = inst_15467__$1);

return statearr_15553;
})();
if(inst_15467__$1){
var statearr_15554_15622 = state_15508__$1;
(statearr_15554_15622[(1)] = (33));

} else {
var statearr_15555_15623 = state_15508__$1;
(statearr_15555_15623[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (25))){
var inst_15451 = (state_15508[(9)]);
var inst_15450 = (state_15508[(21)]);
var inst_15453 = (inst_15451 < inst_15450);
var inst_15454 = inst_15453;
var state_15508__$1 = state_15508;
if(cljs.core.truth_(inst_15454)){
var statearr_15556_15624 = state_15508__$1;
(statearr_15556_15624[(1)] = (27));

} else {
var statearr_15557_15625 = state_15508__$1;
(statearr_15557_15625[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (34))){
var state_15508__$1 = state_15508;
var statearr_15558_15626 = state_15508__$1;
(statearr_15558_15626[(2)] = null);

(statearr_15558_15626[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (17))){
var state_15508__$1 = state_15508;
var statearr_15559_15627 = state_15508__$1;
(statearr_15559_15627[(2)] = null);

(statearr_15559_15627[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (3))){
var inst_15506 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15508__$1,inst_15506);
} else {
if((state_val_15509 === (12))){
var inst_15435 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15560_15628 = state_15508__$1;
(statearr_15560_15628[(2)] = inst_15435);

(statearr_15560_15628[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (2))){
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15508__$1,(4),ch);
} else {
if((state_val_15509 === (23))){
var state_15508__$1 = state_15508;
var statearr_15561_15629 = state_15508__$1;
(statearr_15561_15629[(2)] = null);

(statearr_15561_15629[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (35))){
var inst_15490 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15562_15630 = state_15508__$1;
(statearr_15562_15630[(2)] = inst_15490);

(statearr_15562_15630[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (19))){
var inst_15409 = (state_15508[(7)]);
var inst_15413 = cljs.core.chunk_first.call(null,inst_15409);
var inst_15414 = cljs.core.chunk_rest.call(null,inst_15409);
var inst_15415 = cljs.core.count.call(null,inst_15413);
var inst_15389 = inst_15414;
var inst_15390 = inst_15413;
var inst_15391 = inst_15415;
var inst_15392 = (0);
var state_15508__$1 = (function (){var statearr_15563 = state_15508;
(statearr_15563[(13)] = inst_15392);

(statearr_15563[(14)] = inst_15389);

(statearr_15563[(16)] = inst_15390);

(statearr_15563[(17)] = inst_15391);

return statearr_15563;
})();
var statearr_15564_15631 = state_15508__$1;
(statearr_15564_15631[(2)] = null);

(statearr_15564_15631[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (11))){
var inst_15409 = (state_15508[(7)]);
var inst_15389 = (state_15508[(14)]);
var inst_15409__$1 = cljs.core.seq.call(null,inst_15389);
var state_15508__$1 = (function (){var statearr_15565 = state_15508;
(statearr_15565[(7)] = inst_15409__$1);

return statearr_15565;
})();
if(inst_15409__$1){
var statearr_15566_15632 = state_15508__$1;
(statearr_15566_15632[(1)] = (16));

} else {
var statearr_15567_15633 = state_15508__$1;
(statearr_15567_15633[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (9))){
var inst_15437 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15568_15634 = state_15508__$1;
(statearr_15568_15634[(2)] = inst_15437);

(statearr_15568_15634[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (5))){
var inst_15387 = cljs.core.deref.call(null,cs);
var inst_15388 = cljs.core.seq.call(null,inst_15387);
var inst_15389 = inst_15388;
var inst_15390 = null;
var inst_15391 = (0);
var inst_15392 = (0);
var state_15508__$1 = (function (){var statearr_15569 = state_15508;
(statearr_15569[(13)] = inst_15392);

(statearr_15569[(14)] = inst_15389);

(statearr_15569[(16)] = inst_15390);

(statearr_15569[(17)] = inst_15391);

return statearr_15569;
})();
var statearr_15570_15635 = state_15508__$1;
(statearr_15570_15635[(2)] = null);

(statearr_15570_15635[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (14))){
var state_15508__$1 = state_15508;
var statearr_15571_15636 = state_15508__$1;
(statearr_15571_15636[(2)] = null);

(statearr_15571_15636[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (45))){
var inst_15498 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15572_15637 = state_15508__$1;
(statearr_15572_15637[(2)] = inst_15498);

(statearr_15572_15637[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (26))){
var inst_15440 = (state_15508[(29)]);
var inst_15494 = (state_15508[(2)]);
var inst_15495 = cljs.core.seq.call(null,inst_15440);
var state_15508__$1 = (function (){var statearr_15573 = state_15508;
(statearr_15573[(31)] = inst_15494);

return statearr_15573;
})();
if(inst_15495){
var statearr_15574_15638 = state_15508__$1;
(statearr_15574_15638[(1)] = (42));

} else {
var statearr_15575_15639 = state_15508__$1;
(statearr_15575_15639[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (16))){
var inst_15409 = (state_15508[(7)]);
var inst_15411 = cljs.core.chunked_seq_QMARK_.call(null,inst_15409);
var state_15508__$1 = state_15508;
if(inst_15411){
var statearr_15576_15640 = state_15508__$1;
(statearr_15576_15640[(1)] = (19));

} else {
var statearr_15577_15641 = state_15508__$1;
(statearr_15577_15641[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (38))){
var inst_15487 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15578_15642 = state_15508__$1;
(statearr_15578_15642[(2)] = inst_15487);

(statearr_15578_15642[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (30))){
var state_15508__$1 = state_15508;
var statearr_15579_15643 = state_15508__$1;
(statearr_15579_15643[(2)] = null);

(statearr_15579_15643[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (10))){
var inst_15392 = (state_15508[(13)]);
var inst_15390 = (state_15508[(16)]);
var inst_15398 = cljs.core._nth.call(null,inst_15390,inst_15392);
var inst_15399 = cljs.core.nth.call(null,inst_15398,(0),null);
var inst_15400 = cljs.core.nth.call(null,inst_15398,(1),null);
var state_15508__$1 = (function (){var statearr_15580 = state_15508;
(statearr_15580[(26)] = inst_15399);

return statearr_15580;
})();
if(cljs.core.truth_(inst_15400)){
var statearr_15581_15644 = state_15508__$1;
(statearr_15581_15644[(1)] = (13));

} else {
var statearr_15582_15645 = state_15508__$1;
(statearr_15582_15645[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (18))){
var inst_15433 = (state_15508[(2)]);
var state_15508__$1 = state_15508;
var statearr_15583_15646 = state_15508__$1;
(statearr_15583_15646[(2)] = inst_15433);

(statearr_15583_15646[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (42))){
var state_15508__$1 = state_15508;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15508__$1,(45),dchan);
} else {
if((state_val_15509 === (37))){
var inst_15380 = (state_15508[(10)]);
var inst_15467 = (state_15508[(25)]);
var inst_15476 = (state_15508[(23)]);
var inst_15476__$1 = cljs.core.first.call(null,inst_15467);
var inst_15477 = cljs.core.async.put_BANG_.call(null,inst_15476__$1,inst_15380,done);
var state_15508__$1 = (function (){var statearr_15584 = state_15508;
(statearr_15584[(23)] = inst_15476__$1);

return statearr_15584;
})();
if(cljs.core.truth_(inst_15477)){
var statearr_15585_15647 = state_15508__$1;
(statearr_15585_15647[(1)] = (39));

} else {
var statearr_15586_15648 = state_15508__$1;
(statearr_15586_15648[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15509 === (8))){
var inst_15392 = (state_15508[(13)]);
var inst_15391 = (state_15508[(17)]);
var inst_15394 = (inst_15392 < inst_15391);
var inst_15395 = inst_15394;
var state_15508__$1 = state_15508;
if(cljs.core.truth_(inst_15395)){
var statearr_15587_15649 = state_15508__$1;
(statearr_15587_15649[(1)] = (10));

} else {
var statearr_15588_15650 = state_15508__$1;
(statearr_15588_15650[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto___15596,cs,m,dchan,dctr,done))
;
return ((function (switch__8478__auto__,c__8543__auto___15596,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8479__auto__ = null;
var cljs$core$async$mult_$_state_machine__8479__auto____0 = (function (){
var statearr_15592 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15592[(0)] = cljs$core$async$mult_$_state_machine__8479__auto__);

(statearr_15592[(1)] = (1));

return statearr_15592;
});
var cljs$core$async$mult_$_state_machine__8479__auto____1 = (function (state_15508){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15508);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15593){if((e15593 instanceof Object)){
var ex__8482__auto__ = e15593;
var statearr_15594_15651 = state_15508;
(statearr_15594_15651[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15508);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15593;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15652 = state_15508;
state_15508 = G__15652;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8479__auto__ = function(state_15508){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8479__auto____1.call(this,state_15508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8479__auto____0;
cljs$core$async$mult_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8479__auto____1;
return cljs$core$async$mult_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15596,cs,m,dchan,dctr,done))
})();
var state__8545__auto__ = (function (){var statearr_15595 = f__8544__auto__.call(null);
(statearr_15595[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15596);

return statearr_15595;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15596,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15653 = [];
var len__6152__auto___15656 = arguments.length;
var i__6153__auto___15657 = (0);
while(true){
if((i__6153__auto___15657 < len__6152__auto___15656)){
args15653.push((arguments[i__6153__auto___15657]));

var G__15658 = (i__6153__auto___15657 + (1));
i__6153__auto___15657 = G__15658;
continue;
} else {
}
break;
}

var G__15655 = args15653.length;
switch (G__15655) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15653.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m);
} else {
var m__5750__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,state_map);
} else {
var m__5750__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5749__auto__ = (((m == null))?null:m);
var m__5750__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,m,mode);
} else {
var m__5750__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__6159__auto__ = [];
var len__6152__auto___15670 = arguments.length;
var i__6153__auto___15671 = (0);
while(true){
if((i__6153__auto___15671 < len__6152__auto___15670)){
args__6159__auto__.push((arguments[i__6153__auto___15671]));

var G__15672 = (i__6153__auto___15671 + (1));
i__6153__auto___15671 = G__15672;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15664){
var map__15665 = p__15664;
var map__15665__$1 = ((((!((map__15665 == null)))?((((map__15665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15665):map__15665);
var opts = map__15665__$1;
var statearr_15667_15673 = state;
(statearr_15667_15673[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__15665,map__15665__$1,opts){
return (function (val){
var statearr_15668_15674 = state;
(statearr_15668_15674[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15665,map__15665__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_15669_15675 = state;
(statearr_15669_15675[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15660){
var G__15661 = cljs.core.first.call(null,seq15660);
var seq15660__$1 = cljs.core.next.call(null,seq15660);
var G__15662 = cljs.core.first.call(null,seq15660__$1);
var seq15660__$2 = cljs.core.next.call(null,seq15660__$1);
var G__15663 = cljs.core.first.call(null,seq15660__$2);
var seq15660__$3 = cljs.core.next.call(null,seq15660__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15661,G__15662,G__15663,seq15660__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15839 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15839 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15840){
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
this.meta15840 = meta15840;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15841,meta15840__$1){
var self__ = this;
var _15841__$1 = this;
return (new cljs.core.async.t_cljs$core$async15839(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15840__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15841){
var self__ = this;
var _15841__$1 = this;
return self__.meta15840;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15839.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15839.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15840","meta15840",-1400317739,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15839.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15839.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15839";

cljs.core.async.t_cljs$core$async15839.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15839");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15839 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15839(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15840){
return (new cljs.core.async.t_cljs$core$async15839(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15840));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15839(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8543__auto___16002 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15939){
var state_val_15940 = (state_15939[(1)]);
if((state_val_15940 === (7))){
var inst_15857 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
var statearr_15941_16003 = state_15939__$1;
(statearr_15941_16003[(2)] = inst_15857);

(statearr_15941_16003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (20))){
var inst_15869 = (state_15939[(7)]);
var state_15939__$1 = state_15939;
var statearr_15942_16004 = state_15939__$1;
(statearr_15942_16004[(2)] = inst_15869);

(statearr_15942_16004[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (27))){
var state_15939__$1 = state_15939;
var statearr_15943_16005 = state_15939__$1;
(statearr_15943_16005[(2)] = null);

(statearr_15943_16005[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (1))){
var inst_15845 = (state_15939[(8)]);
var inst_15845__$1 = calc_state.call(null);
var inst_15847 = (inst_15845__$1 == null);
var inst_15848 = cljs.core.not.call(null,inst_15847);
var state_15939__$1 = (function (){var statearr_15944 = state_15939;
(statearr_15944[(8)] = inst_15845__$1);

return statearr_15944;
})();
if(inst_15848){
var statearr_15945_16006 = state_15939__$1;
(statearr_15945_16006[(1)] = (2));

} else {
var statearr_15946_16007 = state_15939__$1;
(statearr_15946_16007[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (24))){
var inst_15913 = (state_15939[(9)]);
var inst_15892 = (state_15939[(10)]);
var inst_15899 = (state_15939[(11)]);
var inst_15913__$1 = inst_15892.call(null,inst_15899);
var state_15939__$1 = (function (){var statearr_15947 = state_15939;
(statearr_15947[(9)] = inst_15913__$1);

return statearr_15947;
})();
if(cljs.core.truth_(inst_15913__$1)){
var statearr_15948_16008 = state_15939__$1;
(statearr_15948_16008[(1)] = (29));

} else {
var statearr_15949_16009 = state_15939__$1;
(statearr_15949_16009[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (4))){
var inst_15860 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
if(cljs.core.truth_(inst_15860)){
var statearr_15950_16010 = state_15939__$1;
(statearr_15950_16010[(1)] = (8));

} else {
var statearr_15951_16011 = state_15939__$1;
(statearr_15951_16011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (15))){
var inst_15886 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
if(cljs.core.truth_(inst_15886)){
var statearr_15952_16012 = state_15939__$1;
(statearr_15952_16012[(1)] = (19));

} else {
var statearr_15953_16013 = state_15939__$1;
(statearr_15953_16013[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (21))){
var inst_15891 = (state_15939[(12)]);
var inst_15891__$1 = (state_15939[(2)]);
var inst_15892 = cljs.core.get.call(null,inst_15891__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15893 = cljs.core.get.call(null,inst_15891__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15894 = cljs.core.get.call(null,inst_15891__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15939__$1 = (function (){var statearr_15954 = state_15939;
(statearr_15954[(13)] = inst_15893);

(statearr_15954[(10)] = inst_15892);

(statearr_15954[(12)] = inst_15891__$1);

return statearr_15954;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15939__$1,(22),inst_15894);
} else {
if((state_val_15940 === (31))){
var inst_15921 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
if(cljs.core.truth_(inst_15921)){
var statearr_15955_16014 = state_15939__$1;
(statearr_15955_16014[(1)] = (32));

} else {
var statearr_15956_16015 = state_15939__$1;
(statearr_15956_16015[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (32))){
var inst_15898 = (state_15939[(14)]);
var state_15939__$1 = state_15939;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15939__$1,(35),out,inst_15898);
} else {
if((state_val_15940 === (33))){
var inst_15891 = (state_15939[(12)]);
var inst_15869 = inst_15891;
var state_15939__$1 = (function (){var statearr_15957 = state_15939;
(statearr_15957[(7)] = inst_15869);

return statearr_15957;
})();
var statearr_15958_16016 = state_15939__$1;
(statearr_15958_16016[(2)] = null);

(statearr_15958_16016[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (13))){
var inst_15869 = (state_15939[(7)]);
var inst_15876 = inst_15869.cljs$lang$protocol_mask$partition0$;
var inst_15877 = (inst_15876 & (64));
var inst_15878 = inst_15869.cljs$core$ISeq$;
var inst_15879 = (inst_15877) || (inst_15878);
var state_15939__$1 = state_15939;
if(cljs.core.truth_(inst_15879)){
var statearr_15959_16017 = state_15939__$1;
(statearr_15959_16017[(1)] = (16));

} else {
var statearr_15960_16018 = state_15939__$1;
(statearr_15960_16018[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (22))){
var inst_15899 = (state_15939[(11)]);
var inst_15898 = (state_15939[(14)]);
var inst_15897 = (state_15939[(2)]);
var inst_15898__$1 = cljs.core.nth.call(null,inst_15897,(0),null);
var inst_15899__$1 = cljs.core.nth.call(null,inst_15897,(1),null);
var inst_15900 = (inst_15898__$1 == null);
var inst_15901 = cljs.core._EQ_.call(null,inst_15899__$1,change);
var inst_15902 = (inst_15900) || (inst_15901);
var state_15939__$1 = (function (){var statearr_15961 = state_15939;
(statearr_15961[(11)] = inst_15899__$1);

(statearr_15961[(14)] = inst_15898__$1);

return statearr_15961;
})();
if(cljs.core.truth_(inst_15902)){
var statearr_15962_16019 = state_15939__$1;
(statearr_15962_16019[(1)] = (23));

} else {
var statearr_15963_16020 = state_15939__$1;
(statearr_15963_16020[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (36))){
var inst_15891 = (state_15939[(12)]);
var inst_15869 = inst_15891;
var state_15939__$1 = (function (){var statearr_15964 = state_15939;
(statearr_15964[(7)] = inst_15869);

return statearr_15964;
})();
var statearr_15965_16021 = state_15939__$1;
(statearr_15965_16021[(2)] = null);

(statearr_15965_16021[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (29))){
var inst_15913 = (state_15939[(9)]);
var state_15939__$1 = state_15939;
var statearr_15966_16022 = state_15939__$1;
(statearr_15966_16022[(2)] = inst_15913);

(statearr_15966_16022[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (6))){
var state_15939__$1 = state_15939;
var statearr_15967_16023 = state_15939__$1;
(statearr_15967_16023[(2)] = false);

(statearr_15967_16023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (28))){
var inst_15909 = (state_15939[(2)]);
var inst_15910 = calc_state.call(null);
var inst_15869 = inst_15910;
var state_15939__$1 = (function (){var statearr_15968 = state_15939;
(statearr_15968[(15)] = inst_15909);

(statearr_15968[(7)] = inst_15869);

return statearr_15968;
})();
var statearr_15969_16024 = state_15939__$1;
(statearr_15969_16024[(2)] = null);

(statearr_15969_16024[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (25))){
var inst_15935 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
var statearr_15970_16025 = state_15939__$1;
(statearr_15970_16025[(2)] = inst_15935);

(statearr_15970_16025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (34))){
var inst_15933 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
var statearr_15971_16026 = state_15939__$1;
(statearr_15971_16026[(2)] = inst_15933);

(statearr_15971_16026[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (17))){
var state_15939__$1 = state_15939;
var statearr_15972_16027 = state_15939__$1;
(statearr_15972_16027[(2)] = false);

(statearr_15972_16027[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (3))){
var state_15939__$1 = state_15939;
var statearr_15973_16028 = state_15939__$1;
(statearr_15973_16028[(2)] = false);

(statearr_15973_16028[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (12))){
var inst_15937 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15939__$1,inst_15937);
} else {
if((state_val_15940 === (2))){
var inst_15845 = (state_15939[(8)]);
var inst_15850 = inst_15845.cljs$lang$protocol_mask$partition0$;
var inst_15851 = (inst_15850 & (64));
var inst_15852 = inst_15845.cljs$core$ISeq$;
var inst_15853 = (inst_15851) || (inst_15852);
var state_15939__$1 = state_15939;
if(cljs.core.truth_(inst_15853)){
var statearr_15974_16029 = state_15939__$1;
(statearr_15974_16029[(1)] = (5));

} else {
var statearr_15975_16030 = state_15939__$1;
(statearr_15975_16030[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (23))){
var inst_15898 = (state_15939[(14)]);
var inst_15904 = (inst_15898 == null);
var state_15939__$1 = state_15939;
if(cljs.core.truth_(inst_15904)){
var statearr_15976_16031 = state_15939__$1;
(statearr_15976_16031[(1)] = (26));

} else {
var statearr_15977_16032 = state_15939__$1;
(statearr_15977_16032[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (35))){
var inst_15924 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
if(cljs.core.truth_(inst_15924)){
var statearr_15978_16033 = state_15939__$1;
(statearr_15978_16033[(1)] = (36));

} else {
var statearr_15979_16034 = state_15939__$1;
(statearr_15979_16034[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (19))){
var inst_15869 = (state_15939[(7)]);
var inst_15888 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15869);
var state_15939__$1 = state_15939;
var statearr_15980_16035 = state_15939__$1;
(statearr_15980_16035[(2)] = inst_15888);

(statearr_15980_16035[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (11))){
var inst_15869 = (state_15939[(7)]);
var inst_15873 = (inst_15869 == null);
var inst_15874 = cljs.core.not.call(null,inst_15873);
var state_15939__$1 = state_15939;
if(inst_15874){
var statearr_15981_16036 = state_15939__$1;
(statearr_15981_16036[(1)] = (13));

} else {
var statearr_15982_16037 = state_15939__$1;
(statearr_15982_16037[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (9))){
var inst_15845 = (state_15939[(8)]);
var state_15939__$1 = state_15939;
var statearr_15983_16038 = state_15939__$1;
(statearr_15983_16038[(2)] = inst_15845);

(statearr_15983_16038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (5))){
var state_15939__$1 = state_15939;
var statearr_15984_16039 = state_15939__$1;
(statearr_15984_16039[(2)] = true);

(statearr_15984_16039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (14))){
var state_15939__$1 = state_15939;
var statearr_15985_16040 = state_15939__$1;
(statearr_15985_16040[(2)] = false);

(statearr_15985_16040[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (26))){
var inst_15899 = (state_15939[(11)]);
var inst_15906 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15899);
var state_15939__$1 = state_15939;
var statearr_15986_16041 = state_15939__$1;
(statearr_15986_16041[(2)] = inst_15906);

(statearr_15986_16041[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (16))){
var state_15939__$1 = state_15939;
var statearr_15987_16042 = state_15939__$1;
(statearr_15987_16042[(2)] = true);

(statearr_15987_16042[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (38))){
var inst_15929 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
var statearr_15988_16043 = state_15939__$1;
(statearr_15988_16043[(2)] = inst_15929);

(statearr_15988_16043[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (30))){
var inst_15893 = (state_15939[(13)]);
var inst_15892 = (state_15939[(10)]);
var inst_15899 = (state_15939[(11)]);
var inst_15916 = cljs.core.empty_QMARK_.call(null,inst_15892);
var inst_15917 = inst_15893.call(null,inst_15899);
var inst_15918 = cljs.core.not.call(null,inst_15917);
var inst_15919 = (inst_15916) && (inst_15918);
var state_15939__$1 = state_15939;
var statearr_15989_16044 = state_15939__$1;
(statearr_15989_16044[(2)] = inst_15919);

(statearr_15989_16044[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (10))){
var inst_15845 = (state_15939[(8)]);
var inst_15865 = (state_15939[(2)]);
var inst_15866 = cljs.core.get.call(null,inst_15865,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15867 = cljs.core.get.call(null,inst_15865,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15868 = cljs.core.get.call(null,inst_15865,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15869 = inst_15845;
var state_15939__$1 = (function (){var statearr_15990 = state_15939;
(statearr_15990[(16)] = inst_15866);

(statearr_15990[(17)] = inst_15867);

(statearr_15990[(7)] = inst_15869);

(statearr_15990[(18)] = inst_15868);

return statearr_15990;
})();
var statearr_15991_16045 = state_15939__$1;
(statearr_15991_16045[(2)] = null);

(statearr_15991_16045[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (18))){
var inst_15883 = (state_15939[(2)]);
var state_15939__$1 = state_15939;
var statearr_15992_16046 = state_15939__$1;
(statearr_15992_16046[(2)] = inst_15883);

(statearr_15992_16046[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (37))){
var state_15939__$1 = state_15939;
var statearr_15993_16047 = state_15939__$1;
(statearr_15993_16047[(2)] = null);

(statearr_15993_16047[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15940 === (8))){
var inst_15845 = (state_15939[(8)]);
var inst_15862 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15845);
var state_15939__$1 = state_15939;
var statearr_15994_16048 = state_15939__$1;
(statearr_15994_16048[(2)] = inst_15862);

(statearr_15994_16048[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto___16002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8478__auto__,c__8543__auto___16002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8479__auto__ = null;
var cljs$core$async$mix_$_state_machine__8479__auto____0 = (function (){
var statearr_15998 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15998[(0)] = cljs$core$async$mix_$_state_machine__8479__auto__);

(statearr_15998[(1)] = (1));

return statearr_15998;
});
var cljs$core$async$mix_$_state_machine__8479__auto____1 = (function (state_15939){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15939);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15999){if((e15999 instanceof Object)){
var ex__8482__auto__ = e15999;
var statearr_16000_16049 = state_15939;
(statearr_16000_16049[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15939);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15999;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16050 = state_15939;
state_15939 = G__16050;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8479__auto__ = function(state_15939){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8479__auto____1.call(this,state_15939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8479__auto____0;
cljs$core$async$mix_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8479__auto____1;
return cljs$core$async$mix_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8545__auto__ = (function (){var statearr_16001 = f__8544__auto__.call(null);
(statearr_16001[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16002);

return statearr_16001;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16002,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5750__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,p,v,ch);
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args16051 = [];
var len__6152__auto___16054 = arguments.length;
var i__6153__auto___16055 = (0);
while(true){
if((i__6153__auto___16055 < len__6152__auto___16054)){
args16051.push((arguments[i__6153__auto___16055]));

var G__16056 = (i__6153__auto___16055 + (1));
i__6153__auto___16055 = G__16056;
continue;
} else {
}
break;
}

var G__16053 = args16051.length;
switch (G__16053) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16051.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,p);
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5749__auto__ = (((p == null))?null:p);
var m__5750__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,p,v);
} else {
var m__5750__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args16059 = [];
var len__6152__auto___16184 = arguments.length;
var i__6153__auto___16185 = (0);
while(true){
if((i__6153__auto___16185 < len__6152__auto___16184)){
args16059.push((arguments[i__6153__auto___16185]));

var G__16186 = (i__6153__auto___16185 + (1));
i__6153__auto___16185 = G__16186;
continue;
} else {
}
break;
}

var G__16061 = args16059.length;
switch (G__16061) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16059.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__5094__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__5094__auto__,mults){
return (function (p1__16058_SHARP_){
if(cljs.core.truth_(p1__16058_SHARP_.call(null,topic))){
return p1__16058_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__16058_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async16062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16062 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta16063){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta16063 = meta16063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16064,meta16063__$1){
var self__ = this;
var _16064__$1 = this;
return (new cljs.core.async.t_cljs$core$async16062(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta16063__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16062.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16064){
var self__ = this;
var _16064__$1 = this;
return self__.meta16063;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16062.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async16062.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16062.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async16062.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16062.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16062.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16062.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta16063","meta16063",-157343994,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async16062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16062";

cljs.core.async.t_cljs$core$async16062.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async16062");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async16062 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async16062(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16063){
return (new cljs.core.async.t_cljs$core$async16062(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta16063));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async16062(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8543__auto___16188 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16188,mults,ensure_mult,p){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16188,mults,ensure_mult,p){
return (function (state_16136){
var state_val_16137 = (state_16136[(1)]);
if((state_val_16137 === (7))){
var inst_16132 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16138_16189 = state_16136__$1;
(statearr_16138_16189[(2)] = inst_16132);

(statearr_16138_16189[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (20))){
var state_16136__$1 = state_16136;
var statearr_16139_16190 = state_16136__$1;
(statearr_16139_16190[(2)] = null);

(statearr_16139_16190[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (1))){
var state_16136__$1 = state_16136;
var statearr_16140_16191 = state_16136__$1;
(statearr_16140_16191[(2)] = null);

(statearr_16140_16191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (24))){
var inst_16115 = (state_16136[(7)]);
var inst_16124 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16115);
var state_16136__$1 = state_16136;
var statearr_16141_16192 = state_16136__$1;
(statearr_16141_16192[(2)] = inst_16124);

(statearr_16141_16192[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (4))){
var inst_16067 = (state_16136[(8)]);
var inst_16067__$1 = (state_16136[(2)]);
var inst_16068 = (inst_16067__$1 == null);
var state_16136__$1 = (function (){var statearr_16142 = state_16136;
(statearr_16142[(8)] = inst_16067__$1);

return statearr_16142;
})();
if(cljs.core.truth_(inst_16068)){
var statearr_16143_16193 = state_16136__$1;
(statearr_16143_16193[(1)] = (5));

} else {
var statearr_16144_16194 = state_16136__$1;
(statearr_16144_16194[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (15))){
var inst_16109 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16145_16195 = state_16136__$1;
(statearr_16145_16195[(2)] = inst_16109);

(statearr_16145_16195[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (21))){
var inst_16129 = (state_16136[(2)]);
var state_16136__$1 = (function (){var statearr_16146 = state_16136;
(statearr_16146[(9)] = inst_16129);

return statearr_16146;
})();
var statearr_16147_16196 = state_16136__$1;
(statearr_16147_16196[(2)] = null);

(statearr_16147_16196[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (13))){
var inst_16091 = (state_16136[(10)]);
var inst_16093 = cljs.core.chunked_seq_QMARK_.call(null,inst_16091);
var state_16136__$1 = state_16136;
if(inst_16093){
var statearr_16148_16197 = state_16136__$1;
(statearr_16148_16197[(1)] = (16));

} else {
var statearr_16149_16198 = state_16136__$1;
(statearr_16149_16198[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (22))){
var inst_16121 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
if(cljs.core.truth_(inst_16121)){
var statearr_16150_16199 = state_16136__$1;
(statearr_16150_16199[(1)] = (23));

} else {
var statearr_16151_16200 = state_16136__$1;
(statearr_16151_16200[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (6))){
var inst_16117 = (state_16136[(11)]);
var inst_16115 = (state_16136[(7)]);
var inst_16067 = (state_16136[(8)]);
var inst_16115__$1 = topic_fn.call(null,inst_16067);
var inst_16116 = cljs.core.deref.call(null,mults);
var inst_16117__$1 = cljs.core.get.call(null,inst_16116,inst_16115__$1);
var state_16136__$1 = (function (){var statearr_16152 = state_16136;
(statearr_16152[(11)] = inst_16117__$1);

(statearr_16152[(7)] = inst_16115__$1);

return statearr_16152;
})();
if(cljs.core.truth_(inst_16117__$1)){
var statearr_16153_16201 = state_16136__$1;
(statearr_16153_16201[(1)] = (19));

} else {
var statearr_16154_16202 = state_16136__$1;
(statearr_16154_16202[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (25))){
var inst_16126 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16155_16203 = state_16136__$1;
(statearr_16155_16203[(2)] = inst_16126);

(statearr_16155_16203[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (17))){
var inst_16091 = (state_16136[(10)]);
var inst_16100 = cljs.core.first.call(null,inst_16091);
var inst_16101 = cljs.core.async.muxch_STAR_.call(null,inst_16100);
var inst_16102 = cljs.core.async.close_BANG_.call(null,inst_16101);
var inst_16103 = cljs.core.next.call(null,inst_16091);
var inst_16077 = inst_16103;
var inst_16078 = null;
var inst_16079 = (0);
var inst_16080 = (0);
var state_16136__$1 = (function (){var statearr_16156 = state_16136;
(statearr_16156[(12)] = inst_16077);

(statearr_16156[(13)] = inst_16079);

(statearr_16156[(14)] = inst_16102);

(statearr_16156[(15)] = inst_16080);

(statearr_16156[(16)] = inst_16078);

return statearr_16156;
})();
var statearr_16157_16204 = state_16136__$1;
(statearr_16157_16204[(2)] = null);

(statearr_16157_16204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (3))){
var inst_16134 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16136__$1,inst_16134);
} else {
if((state_val_16137 === (12))){
var inst_16111 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16158_16205 = state_16136__$1;
(statearr_16158_16205[(2)] = inst_16111);

(statearr_16158_16205[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (2))){
var state_16136__$1 = state_16136;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16136__$1,(4),ch);
} else {
if((state_val_16137 === (23))){
var state_16136__$1 = state_16136;
var statearr_16159_16206 = state_16136__$1;
(statearr_16159_16206[(2)] = null);

(statearr_16159_16206[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (19))){
var inst_16117 = (state_16136[(11)]);
var inst_16067 = (state_16136[(8)]);
var inst_16119 = cljs.core.async.muxch_STAR_.call(null,inst_16117);
var state_16136__$1 = state_16136;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16136__$1,(22),inst_16119,inst_16067);
} else {
if((state_val_16137 === (11))){
var inst_16077 = (state_16136[(12)]);
var inst_16091 = (state_16136[(10)]);
var inst_16091__$1 = cljs.core.seq.call(null,inst_16077);
var state_16136__$1 = (function (){var statearr_16160 = state_16136;
(statearr_16160[(10)] = inst_16091__$1);

return statearr_16160;
})();
if(inst_16091__$1){
var statearr_16161_16207 = state_16136__$1;
(statearr_16161_16207[(1)] = (13));

} else {
var statearr_16162_16208 = state_16136__$1;
(statearr_16162_16208[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (9))){
var inst_16113 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16163_16209 = state_16136__$1;
(statearr_16163_16209[(2)] = inst_16113);

(statearr_16163_16209[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (5))){
var inst_16074 = cljs.core.deref.call(null,mults);
var inst_16075 = cljs.core.vals.call(null,inst_16074);
var inst_16076 = cljs.core.seq.call(null,inst_16075);
var inst_16077 = inst_16076;
var inst_16078 = null;
var inst_16079 = (0);
var inst_16080 = (0);
var state_16136__$1 = (function (){var statearr_16164 = state_16136;
(statearr_16164[(12)] = inst_16077);

(statearr_16164[(13)] = inst_16079);

(statearr_16164[(15)] = inst_16080);

(statearr_16164[(16)] = inst_16078);

return statearr_16164;
})();
var statearr_16165_16210 = state_16136__$1;
(statearr_16165_16210[(2)] = null);

(statearr_16165_16210[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (14))){
var state_16136__$1 = state_16136;
var statearr_16169_16211 = state_16136__$1;
(statearr_16169_16211[(2)] = null);

(statearr_16169_16211[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (16))){
var inst_16091 = (state_16136[(10)]);
var inst_16095 = cljs.core.chunk_first.call(null,inst_16091);
var inst_16096 = cljs.core.chunk_rest.call(null,inst_16091);
var inst_16097 = cljs.core.count.call(null,inst_16095);
var inst_16077 = inst_16096;
var inst_16078 = inst_16095;
var inst_16079 = inst_16097;
var inst_16080 = (0);
var state_16136__$1 = (function (){var statearr_16170 = state_16136;
(statearr_16170[(12)] = inst_16077);

(statearr_16170[(13)] = inst_16079);

(statearr_16170[(15)] = inst_16080);

(statearr_16170[(16)] = inst_16078);

return statearr_16170;
})();
var statearr_16171_16212 = state_16136__$1;
(statearr_16171_16212[(2)] = null);

(statearr_16171_16212[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (10))){
var inst_16077 = (state_16136[(12)]);
var inst_16079 = (state_16136[(13)]);
var inst_16080 = (state_16136[(15)]);
var inst_16078 = (state_16136[(16)]);
var inst_16085 = cljs.core._nth.call(null,inst_16078,inst_16080);
var inst_16086 = cljs.core.async.muxch_STAR_.call(null,inst_16085);
var inst_16087 = cljs.core.async.close_BANG_.call(null,inst_16086);
var inst_16088 = (inst_16080 + (1));
var tmp16166 = inst_16077;
var tmp16167 = inst_16079;
var tmp16168 = inst_16078;
var inst_16077__$1 = tmp16166;
var inst_16078__$1 = tmp16168;
var inst_16079__$1 = tmp16167;
var inst_16080__$1 = inst_16088;
var state_16136__$1 = (function (){var statearr_16172 = state_16136;
(statearr_16172[(12)] = inst_16077__$1);

(statearr_16172[(13)] = inst_16079__$1);

(statearr_16172[(17)] = inst_16087);

(statearr_16172[(15)] = inst_16080__$1);

(statearr_16172[(16)] = inst_16078__$1);

return statearr_16172;
})();
var statearr_16173_16213 = state_16136__$1;
(statearr_16173_16213[(2)] = null);

(statearr_16173_16213[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (18))){
var inst_16106 = (state_16136[(2)]);
var state_16136__$1 = state_16136;
var statearr_16174_16214 = state_16136__$1;
(statearr_16174_16214[(2)] = inst_16106);

(statearr_16174_16214[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16137 === (8))){
var inst_16079 = (state_16136[(13)]);
var inst_16080 = (state_16136[(15)]);
var inst_16082 = (inst_16080 < inst_16079);
var inst_16083 = inst_16082;
var state_16136__$1 = state_16136;
if(cljs.core.truth_(inst_16083)){
var statearr_16175_16215 = state_16136__$1;
(statearr_16175_16215[(1)] = (10));

} else {
var statearr_16176_16216 = state_16136__$1;
(statearr_16176_16216[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto___16188,mults,ensure_mult,p))
;
return ((function (switch__8478__auto__,c__8543__auto___16188,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16180[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16180[(1)] = (1));

return statearr_16180;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16136){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16136);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16181){if((e16181 instanceof Object)){
var ex__8482__auto__ = e16181;
var statearr_16182_16217 = state_16136;
(statearr_16182_16217[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16136);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16181;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16218 = state_16136;
state_16136 = G__16218;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16136){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16188,mults,ensure_mult,p))
})();
var state__8545__auto__ = (function (){var statearr_16183 = f__8544__auto__.call(null);
(statearr_16183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16188);

return statearr_16183;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16188,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args16219 = [];
var len__6152__auto___16222 = arguments.length;
var i__6153__auto___16223 = (0);
while(true){
if((i__6153__auto___16223 < len__6152__auto___16222)){
args16219.push((arguments[i__6153__auto___16223]));

var G__16224 = (i__6153__auto___16223 + (1));
i__6153__auto___16223 = G__16224;
continue;
} else {
}
break;
}

var G__16221 = args16219.length;
switch (G__16221) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16219.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16226 = [];
var len__6152__auto___16229 = arguments.length;
var i__6153__auto___16230 = (0);
while(true){
if((i__6153__auto___16230 < len__6152__auto___16229)){
args16226.push((arguments[i__6153__auto___16230]));

var G__16231 = (i__6153__auto___16230 + (1));
i__6153__auto___16230 = G__16231;
continue;
} else {
}
break;
}

var G__16228 = args16226.length;
switch (G__16228) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16226.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16233 = [];
var len__6152__auto___16304 = arguments.length;
var i__6153__auto___16305 = (0);
while(true){
if((i__6153__auto___16305 < len__6152__auto___16304)){
args16233.push((arguments[i__6153__auto___16305]));

var G__16306 = (i__6153__auto___16305 + (1));
i__6153__auto___16305 = G__16306;
continue;
} else {
}
break;
}

var G__16235 = args16233.length;
switch (G__16235) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16233.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__8543__auto___16308 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16308,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16308,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16274){
var state_val_16275 = (state_16274[(1)]);
if((state_val_16275 === (7))){
var state_16274__$1 = state_16274;
var statearr_16276_16309 = state_16274__$1;
(statearr_16276_16309[(2)] = null);

(statearr_16276_16309[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (1))){
var state_16274__$1 = state_16274;
var statearr_16277_16310 = state_16274__$1;
(statearr_16277_16310[(2)] = null);

(statearr_16277_16310[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (4))){
var inst_16238 = (state_16274[(7)]);
var inst_16240 = (inst_16238 < cnt);
var state_16274__$1 = state_16274;
if(cljs.core.truth_(inst_16240)){
var statearr_16278_16311 = state_16274__$1;
(statearr_16278_16311[(1)] = (6));

} else {
var statearr_16279_16312 = state_16274__$1;
(statearr_16279_16312[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (15))){
var inst_16270 = (state_16274[(2)]);
var state_16274__$1 = state_16274;
var statearr_16280_16313 = state_16274__$1;
(statearr_16280_16313[(2)] = inst_16270);

(statearr_16280_16313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (13))){
var inst_16263 = cljs.core.async.close_BANG_.call(null,out);
var state_16274__$1 = state_16274;
var statearr_16281_16314 = state_16274__$1;
(statearr_16281_16314[(2)] = inst_16263);

(statearr_16281_16314[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (6))){
var state_16274__$1 = state_16274;
var statearr_16282_16315 = state_16274__$1;
(statearr_16282_16315[(2)] = null);

(statearr_16282_16315[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (3))){
var inst_16272 = (state_16274[(2)]);
var state_16274__$1 = state_16274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16274__$1,inst_16272);
} else {
if((state_val_16275 === (12))){
var inst_16260 = (state_16274[(8)]);
var inst_16260__$1 = (state_16274[(2)]);
var inst_16261 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16260__$1);
var state_16274__$1 = (function (){var statearr_16283 = state_16274;
(statearr_16283[(8)] = inst_16260__$1);

return statearr_16283;
})();
if(cljs.core.truth_(inst_16261)){
var statearr_16284_16316 = state_16274__$1;
(statearr_16284_16316[(1)] = (13));

} else {
var statearr_16285_16317 = state_16274__$1;
(statearr_16285_16317[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (2))){
var inst_16237 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16238 = (0);
var state_16274__$1 = (function (){var statearr_16286 = state_16274;
(statearr_16286[(9)] = inst_16237);

(statearr_16286[(7)] = inst_16238);

return statearr_16286;
})();
var statearr_16287_16318 = state_16274__$1;
(statearr_16287_16318[(2)] = null);

(statearr_16287_16318[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (11))){
var inst_16238 = (state_16274[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16274,(10),Object,null,(9));
var inst_16247 = chs__$1.call(null,inst_16238);
var inst_16248 = done.call(null,inst_16238);
var inst_16249 = cljs.core.async.take_BANG_.call(null,inst_16247,inst_16248);
var state_16274__$1 = state_16274;
var statearr_16288_16319 = state_16274__$1;
(statearr_16288_16319[(2)] = inst_16249);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16274__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (9))){
var inst_16238 = (state_16274[(7)]);
var inst_16251 = (state_16274[(2)]);
var inst_16252 = (inst_16238 + (1));
var inst_16238__$1 = inst_16252;
var state_16274__$1 = (function (){var statearr_16289 = state_16274;
(statearr_16289[(7)] = inst_16238__$1);

(statearr_16289[(10)] = inst_16251);

return statearr_16289;
})();
var statearr_16290_16320 = state_16274__$1;
(statearr_16290_16320[(2)] = null);

(statearr_16290_16320[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (5))){
var inst_16258 = (state_16274[(2)]);
var state_16274__$1 = (function (){var statearr_16291 = state_16274;
(statearr_16291[(11)] = inst_16258);

return statearr_16291;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16274__$1,(12),dchan);
} else {
if((state_val_16275 === (14))){
var inst_16260 = (state_16274[(8)]);
var inst_16265 = cljs.core.apply.call(null,f,inst_16260);
var state_16274__$1 = state_16274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16274__$1,(16),out,inst_16265);
} else {
if((state_val_16275 === (16))){
var inst_16267 = (state_16274[(2)]);
var state_16274__$1 = (function (){var statearr_16292 = state_16274;
(statearr_16292[(12)] = inst_16267);

return statearr_16292;
})();
var statearr_16293_16321 = state_16274__$1;
(statearr_16293_16321[(2)] = null);

(statearr_16293_16321[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (10))){
var inst_16242 = (state_16274[(2)]);
var inst_16243 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16274__$1 = (function (){var statearr_16294 = state_16274;
(statearr_16294[(13)] = inst_16242);

return statearr_16294;
})();
var statearr_16295_16322 = state_16274__$1;
(statearr_16295_16322[(2)] = inst_16243);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16274__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16275 === (8))){
var inst_16256 = (state_16274[(2)]);
var state_16274__$1 = state_16274;
var statearr_16296_16323 = state_16274__$1;
(statearr_16296_16323[(2)] = inst_16256);

(statearr_16296_16323[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto___16308,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8478__auto__,c__8543__auto___16308,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16300[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16300[(1)] = (1));

return statearr_16300;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16274){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16301){if((e16301 instanceof Object)){
var ex__8482__auto__ = e16301;
var statearr_16302_16324 = state_16274;
(statearr_16302_16324[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16301;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16325 = state_16274;
state_16274 = G__16325;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16308,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8545__auto__ = (function (){var statearr_16303 = f__8544__auto__.call(null);
(statearr_16303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16308);

return statearr_16303;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16308,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16327 = [];
var len__6152__auto___16383 = arguments.length;
var i__6153__auto___16384 = (0);
while(true){
if((i__6153__auto___16384 < len__6152__auto___16383)){
args16327.push((arguments[i__6153__auto___16384]));

var G__16385 = (i__6153__auto___16384 + (1));
i__6153__auto___16384 = G__16385;
continue;
} else {
}
break;
}

var G__16329 = args16327.length;
switch (G__16329) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16327.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___16387 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16387,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16387,out){
return (function (state_16359){
var state_val_16360 = (state_16359[(1)]);
if((state_val_16360 === (7))){
var inst_16338 = (state_16359[(7)]);
var inst_16339 = (state_16359[(8)]);
var inst_16338__$1 = (state_16359[(2)]);
var inst_16339__$1 = cljs.core.nth.call(null,inst_16338__$1,(0),null);
var inst_16340 = cljs.core.nth.call(null,inst_16338__$1,(1),null);
var inst_16341 = (inst_16339__$1 == null);
var state_16359__$1 = (function (){var statearr_16361 = state_16359;
(statearr_16361[(7)] = inst_16338__$1);

(statearr_16361[(9)] = inst_16340);

(statearr_16361[(8)] = inst_16339__$1);

return statearr_16361;
})();
if(cljs.core.truth_(inst_16341)){
var statearr_16362_16388 = state_16359__$1;
(statearr_16362_16388[(1)] = (8));

} else {
var statearr_16363_16389 = state_16359__$1;
(statearr_16363_16389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16360 === (1))){
var inst_16330 = cljs.core.vec.call(null,chs);
var inst_16331 = inst_16330;
var state_16359__$1 = (function (){var statearr_16364 = state_16359;
(statearr_16364[(10)] = inst_16331);

return statearr_16364;
})();
var statearr_16365_16390 = state_16359__$1;
(statearr_16365_16390[(2)] = null);

(statearr_16365_16390[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16360 === (4))){
var inst_16331 = (state_16359[(10)]);
var state_16359__$1 = state_16359;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16359__$1,(7),inst_16331);
} else {
if((state_val_16360 === (6))){
var inst_16355 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16366_16391 = state_16359__$1;
(statearr_16366_16391[(2)] = inst_16355);

(statearr_16366_16391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16360 === (3))){
var inst_16357 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16359__$1,inst_16357);
} else {
if((state_val_16360 === (2))){
var inst_16331 = (state_16359[(10)]);
var inst_16333 = cljs.core.count.call(null,inst_16331);
var inst_16334 = (inst_16333 > (0));
var state_16359__$1 = state_16359;
if(cljs.core.truth_(inst_16334)){
var statearr_16368_16392 = state_16359__$1;
(statearr_16368_16392[(1)] = (4));

} else {
var statearr_16369_16393 = state_16359__$1;
(statearr_16369_16393[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16360 === (11))){
var inst_16331 = (state_16359[(10)]);
var inst_16348 = (state_16359[(2)]);
var tmp16367 = inst_16331;
var inst_16331__$1 = tmp16367;
var state_16359__$1 = (function (){var statearr_16370 = state_16359;
(statearr_16370[(10)] = inst_16331__$1);

(statearr_16370[(11)] = inst_16348);

return statearr_16370;
})();
var statearr_16371_16394 = state_16359__$1;
(statearr_16371_16394[(2)] = null);

(statearr_16371_16394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16360 === (9))){
var inst_16339 = (state_16359[(8)]);
var state_16359__$1 = state_16359;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16359__$1,(11),out,inst_16339);
} else {
if((state_val_16360 === (5))){
var inst_16353 = cljs.core.async.close_BANG_.call(null,out);
var state_16359__$1 = state_16359;
var statearr_16372_16395 = state_16359__$1;
(statearr_16372_16395[(2)] = inst_16353);

(statearr_16372_16395[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16360 === (10))){
var inst_16351 = (state_16359[(2)]);
var state_16359__$1 = state_16359;
var statearr_16373_16396 = state_16359__$1;
(statearr_16373_16396[(2)] = inst_16351);

(statearr_16373_16396[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16360 === (8))){
var inst_16338 = (state_16359[(7)]);
var inst_16331 = (state_16359[(10)]);
var inst_16340 = (state_16359[(9)]);
var inst_16339 = (state_16359[(8)]);
var inst_16343 = (function (){var cs = inst_16331;
var vec__16336 = inst_16338;
var v = inst_16339;
var c = inst_16340;
return ((function (cs,vec__16336,v,c,inst_16338,inst_16331,inst_16340,inst_16339,state_val_16360,c__8543__auto___16387,out){
return (function (p1__16326_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16326_SHARP_);
});
;})(cs,vec__16336,v,c,inst_16338,inst_16331,inst_16340,inst_16339,state_val_16360,c__8543__auto___16387,out))
})();
var inst_16344 = cljs.core.filterv.call(null,inst_16343,inst_16331);
var inst_16331__$1 = inst_16344;
var state_16359__$1 = (function (){var statearr_16374 = state_16359;
(statearr_16374[(10)] = inst_16331__$1);

return statearr_16374;
})();
var statearr_16375_16397 = state_16359__$1;
(statearr_16375_16397[(2)] = null);

(statearr_16375_16397[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto___16387,out))
;
return ((function (switch__8478__auto__,c__8543__auto___16387,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16379 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16379[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16379[(1)] = (1));

return statearr_16379;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16359){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16380){if((e16380 instanceof Object)){
var ex__8482__auto__ = e16380;
var statearr_16381_16398 = state_16359;
(statearr_16381_16398[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16380;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16399 = state_16359;
state_16359 = G__16399;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16359){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16387,out))
})();
var state__8545__auto__ = (function (){var statearr_16382 = f__8544__auto__.call(null);
(statearr_16382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16387);

return statearr_16382;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16387,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args16400 = [];
var len__6152__auto___16449 = arguments.length;
var i__6153__auto___16450 = (0);
while(true){
if((i__6153__auto___16450 < len__6152__auto___16449)){
args16400.push((arguments[i__6153__auto___16450]));

var G__16451 = (i__6153__auto___16450 + (1));
i__6153__auto___16450 = G__16451;
continue;
} else {
}
break;
}

var G__16402 = args16400.length;
switch (G__16402) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16400.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___16453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16453,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16453,out){
return (function (state_16426){
var state_val_16427 = (state_16426[(1)]);
if((state_val_16427 === (7))){
var inst_16408 = (state_16426[(7)]);
var inst_16408__$1 = (state_16426[(2)]);
var inst_16409 = (inst_16408__$1 == null);
var inst_16410 = cljs.core.not.call(null,inst_16409);
var state_16426__$1 = (function (){var statearr_16428 = state_16426;
(statearr_16428[(7)] = inst_16408__$1);

return statearr_16428;
})();
if(inst_16410){
var statearr_16429_16454 = state_16426__$1;
(statearr_16429_16454[(1)] = (8));

} else {
var statearr_16430_16455 = state_16426__$1;
(statearr_16430_16455[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (1))){
var inst_16403 = (0);
var state_16426__$1 = (function (){var statearr_16431 = state_16426;
(statearr_16431[(8)] = inst_16403);

return statearr_16431;
})();
var statearr_16432_16456 = state_16426__$1;
(statearr_16432_16456[(2)] = null);

(statearr_16432_16456[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (4))){
var state_16426__$1 = state_16426;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16426__$1,(7),ch);
} else {
if((state_val_16427 === (6))){
var inst_16421 = (state_16426[(2)]);
var state_16426__$1 = state_16426;
var statearr_16433_16457 = state_16426__$1;
(statearr_16433_16457[(2)] = inst_16421);

(statearr_16433_16457[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (3))){
var inst_16423 = (state_16426[(2)]);
var inst_16424 = cljs.core.async.close_BANG_.call(null,out);
var state_16426__$1 = (function (){var statearr_16434 = state_16426;
(statearr_16434[(9)] = inst_16423);

return statearr_16434;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16426__$1,inst_16424);
} else {
if((state_val_16427 === (2))){
var inst_16403 = (state_16426[(8)]);
var inst_16405 = (inst_16403 < n);
var state_16426__$1 = state_16426;
if(cljs.core.truth_(inst_16405)){
var statearr_16435_16458 = state_16426__$1;
(statearr_16435_16458[(1)] = (4));

} else {
var statearr_16436_16459 = state_16426__$1;
(statearr_16436_16459[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (11))){
var inst_16403 = (state_16426[(8)]);
var inst_16413 = (state_16426[(2)]);
var inst_16414 = (inst_16403 + (1));
var inst_16403__$1 = inst_16414;
var state_16426__$1 = (function (){var statearr_16437 = state_16426;
(statearr_16437[(8)] = inst_16403__$1);

(statearr_16437[(10)] = inst_16413);

return statearr_16437;
})();
var statearr_16438_16460 = state_16426__$1;
(statearr_16438_16460[(2)] = null);

(statearr_16438_16460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (9))){
var state_16426__$1 = state_16426;
var statearr_16439_16461 = state_16426__$1;
(statearr_16439_16461[(2)] = null);

(statearr_16439_16461[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (5))){
var state_16426__$1 = state_16426;
var statearr_16440_16462 = state_16426__$1;
(statearr_16440_16462[(2)] = null);

(statearr_16440_16462[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (10))){
var inst_16418 = (state_16426[(2)]);
var state_16426__$1 = state_16426;
var statearr_16441_16463 = state_16426__$1;
(statearr_16441_16463[(2)] = inst_16418);

(statearr_16441_16463[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16427 === (8))){
var inst_16408 = (state_16426[(7)]);
var state_16426__$1 = state_16426;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16426__$1,(11),out,inst_16408);
} else {
return null;
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
});})(c__8543__auto___16453,out))
;
return ((function (switch__8478__auto__,c__8543__auto___16453,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16445 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16445[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16445[(1)] = (1));

return statearr_16445;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16426){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16426);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16446){if((e16446 instanceof Object)){
var ex__8482__auto__ = e16446;
var statearr_16447_16464 = state_16426;
(statearr_16447_16464[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16426);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16465 = state_16426;
state_16426 = G__16465;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16426){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16453,out))
})();
var state__8545__auto__ = (function (){var statearr_16448 = f__8544__auto__.call(null);
(statearr_16448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16453);

return statearr_16448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16453,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16473 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16473 = (function (map_LT_,f,ch,meta16474){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16474 = meta16474;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16475,meta16474__$1){
var self__ = this;
var _16475__$1 = this;
return (new cljs.core.async.t_cljs$core$async16473(self__.map_LT_,self__.f,self__.ch,meta16474__$1));
});

cljs.core.async.t_cljs$core$async16473.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16475){
var self__ = this;
var _16475__$1 = this;
return self__.meta16474;
});

cljs.core.async.t_cljs$core$async16473.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16473.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16473.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16473.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16473.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16476 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16476 = (function (map_LT_,f,ch,meta16474,_,fn1,meta16477){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16474 = meta16474;
this._ = _;
this.fn1 = fn1;
this.meta16477 = meta16477;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16478,meta16477__$1){
var self__ = this;
var _16478__$1 = this;
return (new cljs.core.async.t_cljs$core$async16476(self__.map_LT_,self__.f,self__.ch,self__.meta16474,self__._,self__.fn1,meta16477__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16478){
var self__ = this;
var _16478__$1 = this;
return self__.meta16477;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16476.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16466_SHARP_){
return f1.call(null,(((p1__16466_SHARP_ == null))?null:self__.f.call(null,p1__16466_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16476.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16474","meta16474",1790375794,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16473","cljs.core.async/t_cljs$core$async16473",898473243,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16477","meta16477",-484267583,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16476.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16476.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16476";

cljs.core.async.t_cljs$core$async16476.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async16476");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16476 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16476(map_LT___$1,f__$1,ch__$1,meta16474__$1,___$2,fn1__$1,meta16477){
return (new cljs.core.async.t_cljs$core$async16476(map_LT___$1,f__$1,ch__$1,meta16474__$1,___$2,fn1__$1,meta16477));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16476(self__.map_LT_,self__.f,self__.ch,self__.meta16474,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__5082__auto__ = ret;
if(cljs.core.truth_(and__5082__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__5082__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16473.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16473.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16473.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16474","meta16474",1790375794,null)], null);
});

cljs.core.async.t_cljs$core$async16473.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16473.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16473";

cljs.core.async.t_cljs$core$async16473.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async16473");
});

cljs.core.async.__GT_t_cljs$core$async16473 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16473(map_LT___$1,f__$1,ch__$1,meta16474){
return (new cljs.core.async.t_cljs$core$async16473(map_LT___$1,f__$1,ch__$1,meta16474));
});

}

return (new cljs.core.async.t_cljs$core$async16473(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16482 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16482 = (function (map_GT_,f,ch,meta16483){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16483 = meta16483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16484,meta16483__$1){
var self__ = this;
var _16484__$1 = this;
return (new cljs.core.async.t_cljs$core$async16482(self__.map_GT_,self__.f,self__.ch,meta16483__$1));
});

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16484){
var self__ = this;
var _16484__$1 = this;
return self__.meta16483;
});

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16482.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16482.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16483","meta16483",-1449818167,null)], null);
});

cljs.core.async.t_cljs$core$async16482.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16482.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16482";

cljs.core.async.t_cljs$core$async16482.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async16482");
});

cljs.core.async.__GT_t_cljs$core$async16482 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16482(map_GT___$1,f__$1,ch__$1,meta16483){
return (new cljs.core.async.t_cljs$core$async16482(map_GT___$1,f__$1,ch__$1,meta16483));
});

}

return (new cljs.core.async.t_cljs$core$async16482(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16488 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16488 = (function (filter_GT_,p,ch,meta16489){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16489 = meta16489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16490,meta16489__$1){
var self__ = this;
var _16490__$1 = this;
return (new cljs.core.async.t_cljs$core$async16488(self__.filter_GT_,self__.p,self__.ch,meta16489__$1));
});

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16490){
var self__ = this;
var _16490__$1 = this;
return self__.meta16489;
});

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16488.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16488.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16489","meta16489",1434741665,null)], null);
});

cljs.core.async.t_cljs$core$async16488.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16488.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16488";

cljs.core.async.t_cljs$core$async16488.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async16488");
});

cljs.core.async.__GT_t_cljs$core$async16488 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16488(filter_GT___$1,p__$1,ch__$1,meta16489){
return (new cljs.core.async.t_cljs$core$async16488(filter_GT___$1,p__$1,ch__$1,meta16489));
});

}

return (new cljs.core.async.t_cljs$core$async16488(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16491 = [];
var len__6152__auto___16535 = arguments.length;
var i__6153__auto___16536 = (0);
while(true){
if((i__6153__auto___16536 < len__6152__auto___16535)){
args16491.push((arguments[i__6153__auto___16536]));

var G__16537 = (i__6153__auto___16536 + (1));
i__6153__auto___16536 = G__16537;
continue;
} else {
}
break;
}

var G__16493 = args16491.length;
switch (G__16493) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16491.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___16539 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16539,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16539,out){
return (function (state_16514){
var state_val_16515 = (state_16514[(1)]);
if((state_val_16515 === (7))){
var inst_16510 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16516_16540 = state_16514__$1;
(statearr_16516_16540[(2)] = inst_16510);

(statearr_16516_16540[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (1))){
var state_16514__$1 = state_16514;
var statearr_16517_16541 = state_16514__$1;
(statearr_16517_16541[(2)] = null);

(statearr_16517_16541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (4))){
var inst_16496 = (state_16514[(7)]);
var inst_16496__$1 = (state_16514[(2)]);
var inst_16497 = (inst_16496__$1 == null);
var state_16514__$1 = (function (){var statearr_16518 = state_16514;
(statearr_16518[(7)] = inst_16496__$1);

return statearr_16518;
})();
if(cljs.core.truth_(inst_16497)){
var statearr_16519_16542 = state_16514__$1;
(statearr_16519_16542[(1)] = (5));

} else {
var statearr_16520_16543 = state_16514__$1;
(statearr_16520_16543[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (6))){
var inst_16496 = (state_16514[(7)]);
var inst_16501 = p.call(null,inst_16496);
var state_16514__$1 = state_16514;
if(cljs.core.truth_(inst_16501)){
var statearr_16521_16544 = state_16514__$1;
(statearr_16521_16544[(1)] = (8));

} else {
var statearr_16522_16545 = state_16514__$1;
(statearr_16522_16545[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (3))){
var inst_16512 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16514__$1,inst_16512);
} else {
if((state_val_16515 === (2))){
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16514__$1,(4),ch);
} else {
if((state_val_16515 === (11))){
var inst_16504 = (state_16514[(2)]);
var state_16514__$1 = state_16514;
var statearr_16523_16546 = state_16514__$1;
(statearr_16523_16546[(2)] = inst_16504);

(statearr_16523_16546[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (9))){
var state_16514__$1 = state_16514;
var statearr_16524_16547 = state_16514__$1;
(statearr_16524_16547[(2)] = null);

(statearr_16524_16547[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (5))){
var inst_16499 = cljs.core.async.close_BANG_.call(null,out);
var state_16514__$1 = state_16514;
var statearr_16525_16548 = state_16514__$1;
(statearr_16525_16548[(2)] = inst_16499);

(statearr_16525_16548[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (10))){
var inst_16507 = (state_16514[(2)]);
var state_16514__$1 = (function (){var statearr_16526 = state_16514;
(statearr_16526[(8)] = inst_16507);

return statearr_16526;
})();
var statearr_16527_16549 = state_16514__$1;
(statearr_16527_16549[(2)] = null);

(statearr_16527_16549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16515 === (8))){
var inst_16496 = (state_16514[(7)]);
var state_16514__$1 = state_16514;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16514__$1,(11),out,inst_16496);
} else {
return null;
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
});})(c__8543__auto___16539,out))
;
return ((function (switch__8478__auto__,c__8543__auto___16539,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16531 = [null,null,null,null,null,null,null,null,null];
(statearr_16531[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16531[(1)] = (1));

return statearr_16531;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16514){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16532){if((e16532 instanceof Object)){
var ex__8482__auto__ = e16532;
var statearr_16533_16550 = state_16514;
(statearr_16533_16550[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16532;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16551 = state_16514;
state_16514 = G__16551;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16514){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16539,out))
})();
var state__8545__auto__ = (function (){var statearr_16534 = f__8544__auto__.call(null);
(statearr_16534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16539);

return statearr_16534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16539,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16552 = [];
var len__6152__auto___16555 = arguments.length;
var i__6153__auto___16556 = (0);
while(true){
if((i__6153__auto___16556 < len__6152__auto___16555)){
args16552.push((arguments[i__6153__auto___16556]));

var G__16557 = (i__6153__auto___16556 + (1));
i__6153__auto___16556 = G__16557;
continue;
} else {
}
break;
}

var G__16554 = args16552.length;
switch (G__16554) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16552.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__8543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto__){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto__){
return (function (state_16724){
var state_val_16725 = (state_16724[(1)]);
if((state_val_16725 === (7))){
var inst_16720 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16726_16767 = state_16724__$1;
(statearr_16726_16767[(2)] = inst_16720);

(statearr_16726_16767[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (20))){
var inst_16690 = (state_16724[(7)]);
var inst_16701 = (state_16724[(2)]);
var inst_16702 = cljs.core.next.call(null,inst_16690);
var inst_16676 = inst_16702;
var inst_16677 = null;
var inst_16678 = (0);
var inst_16679 = (0);
var state_16724__$1 = (function (){var statearr_16727 = state_16724;
(statearr_16727[(8)] = inst_16676);

(statearr_16727[(9)] = inst_16701);

(statearr_16727[(10)] = inst_16678);

(statearr_16727[(11)] = inst_16679);

(statearr_16727[(12)] = inst_16677);

return statearr_16727;
})();
var statearr_16728_16768 = state_16724__$1;
(statearr_16728_16768[(2)] = null);

(statearr_16728_16768[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (1))){
var state_16724__$1 = state_16724;
var statearr_16729_16769 = state_16724__$1;
(statearr_16729_16769[(2)] = null);

(statearr_16729_16769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (4))){
var inst_16665 = (state_16724[(13)]);
var inst_16665__$1 = (state_16724[(2)]);
var inst_16666 = (inst_16665__$1 == null);
var state_16724__$1 = (function (){var statearr_16730 = state_16724;
(statearr_16730[(13)] = inst_16665__$1);

return statearr_16730;
})();
if(cljs.core.truth_(inst_16666)){
var statearr_16731_16770 = state_16724__$1;
(statearr_16731_16770[(1)] = (5));

} else {
var statearr_16732_16771 = state_16724__$1;
(statearr_16732_16771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (15))){
var state_16724__$1 = state_16724;
var statearr_16736_16772 = state_16724__$1;
(statearr_16736_16772[(2)] = null);

(statearr_16736_16772[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (21))){
var state_16724__$1 = state_16724;
var statearr_16737_16773 = state_16724__$1;
(statearr_16737_16773[(2)] = null);

(statearr_16737_16773[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (13))){
var inst_16676 = (state_16724[(8)]);
var inst_16678 = (state_16724[(10)]);
var inst_16679 = (state_16724[(11)]);
var inst_16677 = (state_16724[(12)]);
var inst_16686 = (state_16724[(2)]);
var inst_16687 = (inst_16679 + (1));
var tmp16733 = inst_16676;
var tmp16734 = inst_16678;
var tmp16735 = inst_16677;
var inst_16676__$1 = tmp16733;
var inst_16677__$1 = tmp16735;
var inst_16678__$1 = tmp16734;
var inst_16679__$1 = inst_16687;
var state_16724__$1 = (function (){var statearr_16738 = state_16724;
(statearr_16738[(8)] = inst_16676__$1);

(statearr_16738[(10)] = inst_16678__$1);

(statearr_16738[(11)] = inst_16679__$1);

(statearr_16738[(14)] = inst_16686);

(statearr_16738[(12)] = inst_16677__$1);

return statearr_16738;
})();
var statearr_16739_16774 = state_16724__$1;
(statearr_16739_16774[(2)] = null);

(statearr_16739_16774[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (22))){
var state_16724__$1 = state_16724;
var statearr_16740_16775 = state_16724__$1;
(statearr_16740_16775[(2)] = null);

(statearr_16740_16775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (6))){
var inst_16665 = (state_16724[(13)]);
var inst_16674 = f.call(null,inst_16665);
var inst_16675 = cljs.core.seq.call(null,inst_16674);
var inst_16676 = inst_16675;
var inst_16677 = null;
var inst_16678 = (0);
var inst_16679 = (0);
var state_16724__$1 = (function (){var statearr_16741 = state_16724;
(statearr_16741[(8)] = inst_16676);

(statearr_16741[(10)] = inst_16678);

(statearr_16741[(11)] = inst_16679);

(statearr_16741[(12)] = inst_16677);

return statearr_16741;
})();
var statearr_16742_16776 = state_16724__$1;
(statearr_16742_16776[(2)] = null);

(statearr_16742_16776[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (17))){
var inst_16690 = (state_16724[(7)]);
var inst_16694 = cljs.core.chunk_first.call(null,inst_16690);
var inst_16695 = cljs.core.chunk_rest.call(null,inst_16690);
var inst_16696 = cljs.core.count.call(null,inst_16694);
var inst_16676 = inst_16695;
var inst_16677 = inst_16694;
var inst_16678 = inst_16696;
var inst_16679 = (0);
var state_16724__$1 = (function (){var statearr_16743 = state_16724;
(statearr_16743[(8)] = inst_16676);

(statearr_16743[(10)] = inst_16678);

(statearr_16743[(11)] = inst_16679);

(statearr_16743[(12)] = inst_16677);

return statearr_16743;
})();
var statearr_16744_16777 = state_16724__$1;
(statearr_16744_16777[(2)] = null);

(statearr_16744_16777[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (3))){
var inst_16722 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16724__$1,inst_16722);
} else {
if((state_val_16725 === (12))){
var inst_16710 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16745_16778 = state_16724__$1;
(statearr_16745_16778[(2)] = inst_16710);

(statearr_16745_16778[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (2))){
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16724__$1,(4),in$);
} else {
if((state_val_16725 === (23))){
var inst_16718 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16746_16779 = state_16724__$1;
(statearr_16746_16779[(2)] = inst_16718);

(statearr_16746_16779[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (19))){
var inst_16705 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16747_16780 = state_16724__$1;
(statearr_16747_16780[(2)] = inst_16705);

(statearr_16747_16780[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (11))){
var inst_16676 = (state_16724[(8)]);
var inst_16690 = (state_16724[(7)]);
var inst_16690__$1 = cljs.core.seq.call(null,inst_16676);
var state_16724__$1 = (function (){var statearr_16748 = state_16724;
(statearr_16748[(7)] = inst_16690__$1);

return statearr_16748;
})();
if(inst_16690__$1){
var statearr_16749_16781 = state_16724__$1;
(statearr_16749_16781[(1)] = (14));

} else {
var statearr_16750_16782 = state_16724__$1;
(statearr_16750_16782[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (9))){
var inst_16712 = (state_16724[(2)]);
var inst_16713 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16724__$1 = (function (){var statearr_16751 = state_16724;
(statearr_16751[(15)] = inst_16712);

return statearr_16751;
})();
if(cljs.core.truth_(inst_16713)){
var statearr_16752_16783 = state_16724__$1;
(statearr_16752_16783[(1)] = (21));

} else {
var statearr_16753_16784 = state_16724__$1;
(statearr_16753_16784[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (5))){
var inst_16668 = cljs.core.async.close_BANG_.call(null,out);
var state_16724__$1 = state_16724;
var statearr_16754_16785 = state_16724__$1;
(statearr_16754_16785[(2)] = inst_16668);

(statearr_16754_16785[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (14))){
var inst_16690 = (state_16724[(7)]);
var inst_16692 = cljs.core.chunked_seq_QMARK_.call(null,inst_16690);
var state_16724__$1 = state_16724;
if(inst_16692){
var statearr_16755_16786 = state_16724__$1;
(statearr_16755_16786[(1)] = (17));

} else {
var statearr_16756_16787 = state_16724__$1;
(statearr_16756_16787[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (16))){
var inst_16708 = (state_16724[(2)]);
var state_16724__$1 = state_16724;
var statearr_16757_16788 = state_16724__$1;
(statearr_16757_16788[(2)] = inst_16708);

(statearr_16757_16788[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16725 === (10))){
var inst_16679 = (state_16724[(11)]);
var inst_16677 = (state_16724[(12)]);
var inst_16684 = cljs.core._nth.call(null,inst_16677,inst_16679);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16724__$1,(13),out,inst_16684);
} else {
if((state_val_16725 === (18))){
var inst_16690 = (state_16724[(7)]);
var inst_16699 = cljs.core.first.call(null,inst_16690);
var state_16724__$1 = state_16724;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16724__$1,(20),out,inst_16699);
} else {
if((state_val_16725 === (8))){
var inst_16678 = (state_16724[(10)]);
var inst_16679 = (state_16724[(11)]);
var inst_16681 = (inst_16679 < inst_16678);
var inst_16682 = inst_16681;
var state_16724__$1 = state_16724;
if(cljs.core.truth_(inst_16682)){
var statearr_16758_16789 = state_16724__$1;
(statearr_16758_16789[(1)] = (10));

} else {
var statearr_16759_16790 = state_16724__$1;
(statearr_16759_16790[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto__))
;
return ((function (switch__8478__auto__,c__8543__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_16763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16763[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__);

(statearr_16763[(1)] = (1));

return statearr_16763;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____1 = (function (state_16724){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16724);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16764){if((e16764 instanceof Object)){
var ex__8482__auto__ = e16764;
var statearr_16765_16791 = state_16724;
(statearr_16765_16791[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16724);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16764;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16792 = state_16724;
state_16724 = G__16792;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__ = function(state_16724){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____1.call(this,state_16724);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__))
})();
var state__8545__auto__ = (function (){var statearr_16766 = f__8544__auto__.call(null);
(statearr_16766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_16766;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto__))
);

return c__8543__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16793 = [];
var len__6152__auto___16796 = arguments.length;
var i__6153__auto___16797 = (0);
while(true){
if((i__6153__auto___16797 < len__6152__auto___16796)){
args16793.push((arguments[i__6153__auto___16797]));

var G__16798 = (i__6153__auto___16797 + (1));
i__6153__auto___16797 = G__16798;
continue;
} else {
}
break;
}

var G__16795 = args16793.length;
switch (G__16795) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16793.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16800 = [];
var len__6152__auto___16803 = arguments.length;
var i__6153__auto___16804 = (0);
while(true){
if((i__6153__auto___16804 < len__6152__auto___16803)){
args16800.push((arguments[i__6153__auto___16804]));

var G__16805 = (i__6153__auto___16804 + (1));
i__6153__auto___16804 = G__16805;
continue;
} else {
}
break;
}

var G__16802 = args16800.length;
switch (G__16802) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16800.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16807 = [];
var len__6152__auto___16858 = arguments.length;
var i__6153__auto___16859 = (0);
while(true){
if((i__6153__auto___16859 < len__6152__auto___16858)){
args16807.push((arguments[i__6153__auto___16859]));

var G__16860 = (i__6153__auto___16859 + (1));
i__6153__auto___16859 = G__16860;
continue;
} else {
}
break;
}

var G__16809 = args16807.length;
switch (G__16809) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16807.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___16862 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16862,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16862,out){
return (function (state_16833){
var state_val_16834 = (state_16833[(1)]);
if((state_val_16834 === (7))){
var inst_16828 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16835_16863 = state_16833__$1;
(statearr_16835_16863[(2)] = inst_16828);

(statearr_16835_16863[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16834 === (1))){
var inst_16810 = null;
var state_16833__$1 = (function (){var statearr_16836 = state_16833;
(statearr_16836[(7)] = inst_16810);

return statearr_16836;
})();
var statearr_16837_16864 = state_16833__$1;
(statearr_16837_16864[(2)] = null);

(statearr_16837_16864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16834 === (4))){
var inst_16813 = (state_16833[(8)]);
var inst_16813__$1 = (state_16833[(2)]);
var inst_16814 = (inst_16813__$1 == null);
var inst_16815 = cljs.core.not.call(null,inst_16814);
var state_16833__$1 = (function (){var statearr_16838 = state_16833;
(statearr_16838[(8)] = inst_16813__$1);

return statearr_16838;
})();
if(inst_16815){
var statearr_16839_16865 = state_16833__$1;
(statearr_16839_16865[(1)] = (5));

} else {
var statearr_16840_16866 = state_16833__$1;
(statearr_16840_16866[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16834 === (6))){
var state_16833__$1 = state_16833;
var statearr_16841_16867 = state_16833__$1;
(statearr_16841_16867[(2)] = null);

(statearr_16841_16867[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16834 === (3))){
var inst_16830 = (state_16833[(2)]);
var inst_16831 = cljs.core.async.close_BANG_.call(null,out);
var state_16833__$1 = (function (){var statearr_16842 = state_16833;
(statearr_16842[(9)] = inst_16830);

return statearr_16842;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16833__$1,inst_16831);
} else {
if((state_val_16834 === (2))){
var state_16833__$1 = state_16833;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16833__$1,(4),ch);
} else {
if((state_val_16834 === (11))){
var inst_16813 = (state_16833[(8)]);
var inst_16822 = (state_16833[(2)]);
var inst_16810 = inst_16813;
var state_16833__$1 = (function (){var statearr_16843 = state_16833;
(statearr_16843[(10)] = inst_16822);

(statearr_16843[(7)] = inst_16810);

return statearr_16843;
})();
var statearr_16844_16868 = state_16833__$1;
(statearr_16844_16868[(2)] = null);

(statearr_16844_16868[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16834 === (9))){
var inst_16813 = (state_16833[(8)]);
var state_16833__$1 = state_16833;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16833__$1,(11),out,inst_16813);
} else {
if((state_val_16834 === (5))){
var inst_16810 = (state_16833[(7)]);
var inst_16813 = (state_16833[(8)]);
var inst_16817 = cljs.core._EQ_.call(null,inst_16813,inst_16810);
var state_16833__$1 = state_16833;
if(inst_16817){
var statearr_16846_16869 = state_16833__$1;
(statearr_16846_16869[(1)] = (8));

} else {
var statearr_16847_16870 = state_16833__$1;
(statearr_16847_16870[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16834 === (10))){
var inst_16825 = (state_16833[(2)]);
var state_16833__$1 = state_16833;
var statearr_16848_16871 = state_16833__$1;
(statearr_16848_16871[(2)] = inst_16825);

(statearr_16848_16871[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16834 === (8))){
var inst_16810 = (state_16833[(7)]);
var tmp16845 = inst_16810;
var inst_16810__$1 = tmp16845;
var state_16833__$1 = (function (){var statearr_16849 = state_16833;
(statearr_16849[(7)] = inst_16810__$1);

return statearr_16849;
})();
var statearr_16850_16872 = state_16833__$1;
(statearr_16850_16872[(2)] = null);

(statearr_16850_16872[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto___16862,out))
;
return ((function (switch__8478__auto__,c__8543__auto___16862,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16854 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16854[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16854[(1)] = (1));

return statearr_16854;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16833){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16833);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16855){if((e16855 instanceof Object)){
var ex__8482__auto__ = e16855;
var statearr_16856_16873 = state_16833;
(statearr_16856_16873[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16833);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16855;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16874 = state_16833;
state_16833 = G__16874;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16833){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16862,out))
})();
var state__8545__auto__ = (function (){var statearr_16857 = f__8544__auto__.call(null);
(statearr_16857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16862);

return statearr_16857;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16862,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16875 = [];
var len__6152__auto___16945 = arguments.length;
var i__6153__auto___16946 = (0);
while(true){
if((i__6153__auto___16946 < len__6152__auto___16945)){
args16875.push((arguments[i__6153__auto___16946]));

var G__16947 = (i__6153__auto___16946 + (1));
i__6153__auto___16946 = G__16947;
continue;
} else {
}
break;
}

var G__16877 = args16875.length;
switch (G__16877) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16875.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___16949 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16949,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16949,out){
return (function (state_16915){
var state_val_16916 = (state_16915[(1)]);
if((state_val_16916 === (7))){
var inst_16911 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
var statearr_16917_16950 = state_16915__$1;
(statearr_16917_16950[(2)] = inst_16911);

(statearr_16917_16950[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (1))){
var inst_16878 = (new Array(n));
var inst_16879 = inst_16878;
var inst_16880 = (0);
var state_16915__$1 = (function (){var statearr_16918 = state_16915;
(statearr_16918[(7)] = inst_16879);

(statearr_16918[(8)] = inst_16880);

return statearr_16918;
})();
var statearr_16919_16951 = state_16915__$1;
(statearr_16919_16951[(2)] = null);

(statearr_16919_16951[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (4))){
var inst_16883 = (state_16915[(9)]);
var inst_16883__$1 = (state_16915[(2)]);
var inst_16884 = (inst_16883__$1 == null);
var inst_16885 = cljs.core.not.call(null,inst_16884);
var state_16915__$1 = (function (){var statearr_16920 = state_16915;
(statearr_16920[(9)] = inst_16883__$1);

return statearr_16920;
})();
if(inst_16885){
var statearr_16921_16952 = state_16915__$1;
(statearr_16921_16952[(1)] = (5));

} else {
var statearr_16922_16953 = state_16915__$1;
(statearr_16922_16953[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (15))){
var inst_16905 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
var statearr_16923_16954 = state_16915__$1;
(statearr_16923_16954[(2)] = inst_16905);

(statearr_16923_16954[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (13))){
var state_16915__$1 = state_16915;
var statearr_16924_16955 = state_16915__$1;
(statearr_16924_16955[(2)] = null);

(statearr_16924_16955[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (6))){
var inst_16880 = (state_16915[(8)]);
var inst_16901 = (inst_16880 > (0));
var state_16915__$1 = state_16915;
if(cljs.core.truth_(inst_16901)){
var statearr_16925_16956 = state_16915__$1;
(statearr_16925_16956[(1)] = (12));

} else {
var statearr_16926_16957 = state_16915__$1;
(statearr_16926_16957[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (3))){
var inst_16913 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16915__$1,inst_16913);
} else {
if((state_val_16916 === (12))){
var inst_16879 = (state_16915[(7)]);
var inst_16903 = cljs.core.vec.call(null,inst_16879);
var state_16915__$1 = state_16915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16915__$1,(15),out,inst_16903);
} else {
if((state_val_16916 === (2))){
var state_16915__$1 = state_16915;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16915__$1,(4),ch);
} else {
if((state_val_16916 === (11))){
var inst_16895 = (state_16915[(2)]);
var inst_16896 = (new Array(n));
var inst_16879 = inst_16896;
var inst_16880 = (0);
var state_16915__$1 = (function (){var statearr_16927 = state_16915;
(statearr_16927[(7)] = inst_16879);

(statearr_16927[(10)] = inst_16895);

(statearr_16927[(8)] = inst_16880);

return statearr_16927;
})();
var statearr_16928_16958 = state_16915__$1;
(statearr_16928_16958[(2)] = null);

(statearr_16928_16958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (9))){
var inst_16879 = (state_16915[(7)]);
var inst_16893 = cljs.core.vec.call(null,inst_16879);
var state_16915__$1 = state_16915;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16915__$1,(11),out,inst_16893);
} else {
if((state_val_16916 === (5))){
var inst_16879 = (state_16915[(7)]);
var inst_16883 = (state_16915[(9)]);
var inst_16888 = (state_16915[(11)]);
var inst_16880 = (state_16915[(8)]);
var inst_16887 = (inst_16879[inst_16880] = inst_16883);
var inst_16888__$1 = (inst_16880 + (1));
var inst_16889 = (inst_16888__$1 < n);
var state_16915__$1 = (function (){var statearr_16929 = state_16915;
(statearr_16929[(12)] = inst_16887);

(statearr_16929[(11)] = inst_16888__$1);

return statearr_16929;
})();
if(cljs.core.truth_(inst_16889)){
var statearr_16930_16959 = state_16915__$1;
(statearr_16930_16959[(1)] = (8));

} else {
var statearr_16931_16960 = state_16915__$1;
(statearr_16931_16960[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (14))){
var inst_16908 = (state_16915[(2)]);
var inst_16909 = cljs.core.async.close_BANG_.call(null,out);
var state_16915__$1 = (function (){var statearr_16933 = state_16915;
(statearr_16933[(13)] = inst_16908);

return statearr_16933;
})();
var statearr_16934_16961 = state_16915__$1;
(statearr_16934_16961[(2)] = inst_16909);

(statearr_16934_16961[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (10))){
var inst_16899 = (state_16915[(2)]);
var state_16915__$1 = state_16915;
var statearr_16935_16962 = state_16915__$1;
(statearr_16935_16962[(2)] = inst_16899);

(statearr_16935_16962[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16916 === (8))){
var inst_16879 = (state_16915[(7)]);
var inst_16888 = (state_16915[(11)]);
var tmp16932 = inst_16879;
var inst_16879__$1 = tmp16932;
var inst_16880 = inst_16888;
var state_16915__$1 = (function (){var statearr_16936 = state_16915;
(statearr_16936[(7)] = inst_16879__$1);

(statearr_16936[(8)] = inst_16880);

return statearr_16936;
})();
var statearr_16937_16963 = state_16915__$1;
(statearr_16937_16963[(2)] = null);

(statearr_16937_16963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto___16949,out))
;
return ((function (switch__8478__auto__,c__8543__auto___16949,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16941 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16941[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16941[(1)] = (1));

return statearr_16941;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16915){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16915);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16942){if((e16942 instanceof Object)){
var ex__8482__auto__ = e16942;
var statearr_16943_16964 = state_16915;
(statearr_16943_16964[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16915);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16942;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16965 = state_16915;
state_16915 = G__16965;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16915){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16915);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16949,out))
})();
var state__8545__auto__ = (function (){var statearr_16944 = f__8544__auto__.call(null);
(statearr_16944[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16949);

return statearr_16944;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16949,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16966 = [];
var len__6152__auto___17040 = arguments.length;
var i__6153__auto___17041 = (0);
while(true){
if((i__6153__auto___17041 < len__6152__auto___17040)){
args16966.push((arguments[i__6153__auto___17041]));

var G__17042 = (i__6153__auto___17041 + (1));
i__6153__auto___17041 = G__17042;
continue;
} else {
}
break;
}

var G__16968 = args16966.length;
switch (G__16968) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16966.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___17044 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___17044,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___17044,out){
return (function (state_17010){
var state_val_17011 = (state_17010[(1)]);
if((state_val_17011 === (7))){
var inst_17006 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
var statearr_17012_17045 = state_17010__$1;
(statearr_17012_17045[(2)] = inst_17006);

(statearr_17012_17045[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (1))){
var inst_16969 = [];
var inst_16970 = inst_16969;
var inst_16971 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_17010__$1 = (function (){var statearr_17013 = state_17010;
(statearr_17013[(7)] = inst_16970);

(statearr_17013[(8)] = inst_16971);

return statearr_17013;
})();
var statearr_17014_17046 = state_17010__$1;
(statearr_17014_17046[(2)] = null);

(statearr_17014_17046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (4))){
var inst_16974 = (state_17010[(9)]);
var inst_16974__$1 = (state_17010[(2)]);
var inst_16975 = (inst_16974__$1 == null);
var inst_16976 = cljs.core.not.call(null,inst_16975);
var state_17010__$1 = (function (){var statearr_17015 = state_17010;
(statearr_17015[(9)] = inst_16974__$1);

return statearr_17015;
})();
if(inst_16976){
var statearr_17016_17047 = state_17010__$1;
(statearr_17016_17047[(1)] = (5));

} else {
var statearr_17017_17048 = state_17010__$1;
(statearr_17017_17048[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (15))){
var inst_17000 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
var statearr_17018_17049 = state_17010__$1;
(statearr_17018_17049[(2)] = inst_17000);

(statearr_17018_17049[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (13))){
var state_17010__$1 = state_17010;
var statearr_17019_17050 = state_17010__$1;
(statearr_17019_17050[(2)] = null);

(statearr_17019_17050[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (6))){
var inst_16970 = (state_17010[(7)]);
var inst_16995 = inst_16970.length;
var inst_16996 = (inst_16995 > (0));
var state_17010__$1 = state_17010;
if(cljs.core.truth_(inst_16996)){
var statearr_17020_17051 = state_17010__$1;
(statearr_17020_17051[(1)] = (12));

} else {
var statearr_17021_17052 = state_17010__$1;
(statearr_17021_17052[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (3))){
var inst_17008 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17010__$1,inst_17008);
} else {
if((state_val_17011 === (12))){
var inst_16970 = (state_17010[(7)]);
var inst_16998 = cljs.core.vec.call(null,inst_16970);
var state_17010__$1 = state_17010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17010__$1,(15),out,inst_16998);
} else {
if((state_val_17011 === (2))){
var state_17010__$1 = state_17010;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17010__$1,(4),ch);
} else {
if((state_val_17011 === (11))){
var inst_16978 = (state_17010[(10)]);
var inst_16974 = (state_17010[(9)]);
var inst_16988 = (state_17010[(2)]);
var inst_16989 = [];
var inst_16990 = inst_16989.push(inst_16974);
var inst_16970 = inst_16989;
var inst_16971 = inst_16978;
var state_17010__$1 = (function (){var statearr_17022 = state_17010;
(statearr_17022[(7)] = inst_16970);

(statearr_17022[(8)] = inst_16971);

(statearr_17022[(11)] = inst_16988);

(statearr_17022[(12)] = inst_16990);

return statearr_17022;
})();
var statearr_17023_17053 = state_17010__$1;
(statearr_17023_17053[(2)] = null);

(statearr_17023_17053[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (9))){
var inst_16970 = (state_17010[(7)]);
var inst_16986 = cljs.core.vec.call(null,inst_16970);
var state_17010__$1 = state_17010;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17010__$1,(11),out,inst_16986);
} else {
if((state_val_17011 === (5))){
var inst_16978 = (state_17010[(10)]);
var inst_16971 = (state_17010[(8)]);
var inst_16974 = (state_17010[(9)]);
var inst_16978__$1 = f.call(null,inst_16974);
var inst_16979 = cljs.core._EQ_.call(null,inst_16978__$1,inst_16971);
var inst_16980 = cljs.core.keyword_identical_QMARK_.call(null,inst_16971,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16981 = (inst_16979) || (inst_16980);
var state_17010__$1 = (function (){var statearr_17024 = state_17010;
(statearr_17024[(10)] = inst_16978__$1);

return statearr_17024;
})();
if(cljs.core.truth_(inst_16981)){
var statearr_17025_17054 = state_17010__$1;
(statearr_17025_17054[(1)] = (8));

} else {
var statearr_17026_17055 = state_17010__$1;
(statearr_17026_17055[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (14))){
var inst_17003 = (state_17010[(2)]);
var inst_17004 = cljs.core.async.close_BANG_.call(null,out);
var state_17010__$1 = (function (){var statearr_17028 = state_17010;
(statearr_17028[(13)] = inst_17003);

return statearr_17028;
})();
var statearr_17029_17056 = state_17010__$1;
(statearr_17029_17056[(2)] = inst_17004);

(statearr_17029_17056[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (10))){
var inst_16993 = (state_17010[(2)]);
var state_17010__$1 = state_17010;
var statearr_17030_17057 = state_17010__$1;
(statearr_17030_17057[(2)] = inst_16993);

(statearr_17030_17057[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17011 === (8))){
var inst_16978 = (state_17010[(10)]);
var inst_16970 = (state_17010[(7)]);
var inst_16974 = (state_17010[(9)]);
var inst_16983 = inst_16970.push(inst_16974);
var tmp17027 = inst_16970;
var inst_16970__$1 = tmp17027;
var inst_16971 = inst_16978;
var state_17010__$1 = (function (){var statearr_17031 = state_17010;
(statearr_17031[(7)] = inst_16970__$1);

(statearr_17031[(8)] = inst_16971);

(statearr_17031[(14)] = inst_16983);

return statearr_17031;
})();
var statearr_17032_17058 = state_17010__$1;
(statearr_17032_17058[(2)] = null);

(statearr_17032_17058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
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
});})(c__8543__auto___17044,out))
;
return ((function (switch__8478__auto__,c__8543__auto___17044,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_17036 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17036[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_17036[(1)] = (1));

return statearr_17036;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_17010){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_17010);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e17037){if((e17037 instanceof Object)){
var ex__8482__auto__ = e17037;
var statearr_17038_17059 = state_17010;
(statearr_17038_17059[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17010);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17037;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17060 = state_17010;
state_17010 = G__17060;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_17010){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_17010);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___17044,out))
})();
var state__8545__auto__ = (function (){var statearr_17039 = f__8544__auto__.call(null);
(statearr_17039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___17044);

return statearr_17039;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___17044,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map