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
if(typeof cljs.core.async.t_cljs$core$async13489 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13489 = (function (fn_handler,f,meta13490){
this.fn_handler = fn_handler;
this.f = f;
this.meta13490 = meta13490;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13489.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13491,meta13490__$1){
var self__ = this;
var _13491__$1 = this;
return (new cljs.core.async.t_cljs$core$async13489(self__.fn_handler,self__.f,meta13490__$1));
});

cljs.core.async.t_cljs$core$async13489.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13491){
var self__ = this;
var _13491__$1 = this;
return self__.meta13490;
});

cljs.core.async.t_cljs$core$async13489.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13489.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13489.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13489.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta13490","meta13490",1678476345,null)], null);
});

cljs.core.async.t_cljs$core$async13489.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13489.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13489";

cljs.core.async.t_cljs$core$async13489.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async13489");
});

cljs.core.async.__GT_t_cljs$core$async13489 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async13489(fn_handler__$1,f__$1,meta13490){
return (new cljs.core.async.t_cljs$core$async13489(fn_handler__$1,f__$1,meta13490));
});

}

return (new cljs.core.async.t_cljs$core$async13489(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args13494 = [];
var len__6152__auto___13497 = arguments.length;
var i__6153__auto___13498 = (0);
while(true){
if((i__6153__auto___13498 < len__6152__auto___13497)){
args13494.push((arguments[i__6153__auto___13498]));

var G__13499 = (i__6153__auto___13498 + (1));
i__6153__auto___13498 = G__13499;
continue;
} else {
}
break;
}

var G__13496 = args13494.length;
switch (G__13496) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13494.length)].join('')));

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
var args13501 = [];
var len__6152__auto___13504 = arguments.length;
var i__6153__auto___13505 = (0);
while(true){
if((i__6153__auto___13505 < len__6152__auto___13504)){
args13501.push((arguments[i__6153__auto___13505]));

var G__13506 = (i__6153__auto___13505 + (1));
i__6153__auto___13505 = G__13506;
continue;
} else {
}
break;
}

var G__13503 = args13501.length;
switch (G__13503) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13501.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13508 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13508);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13508,ret){
return (function (){
return fn1.call(null,val_13508);
});})(val_13508,ret))
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
var args13509 = [];
var len__6152__auto___13512 = arguments.length;
var i__6153__auto___13513 = (0);
while(true){
if((i__6153__auto___13513 < len__6152__auto___13512)){
args13509.push((arguments[i__6153__auto___13513]));

var G__13514 = (i__6153__auto___13513 + (1));
i__6153__auto___13513 = G__13514;
continue;
} else {
}
break;
}

var G__13511 = args13509.length;
switch (G__13511) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13509.length)].join('')));

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
var n__5997__auto___13516 = n;
var x_13517 = (0);
while(true){
if((x_13517 < n__5997__auto___13516)){
(a[x_13517] = (0));

var G__13518 = (x_13517 + (1));
x_13517 = G__13518;
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

var G__13519 = (i + (1));
i = G__13519;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13523 = (function (alt_flag,flag,meta13524){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13524 = meta13524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13525,meta13524__$1){
var self__ = this;
var _13525__$1 = this;
return (new cljs.core.async.t_cljs$core$async13523(self__.alt_flag,self__.flag,meta13524__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13523.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13525){
var self__ = this;
var _13525__$1 = this;
return self__.meta13524;
});})(flag))
;

cljs.core.async.t_cljs$core$async13523.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13523.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13524","meta13524",1087413902,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13523";

cljs.core.async.t_cljs$core$async13523.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async13523");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13523 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13523(alt_flag__$1,flag__$1,meta13524){
return (new cljs.core.async.t_cljs$core$async13523(alt_flag__$1,flag__$1,meta13524));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13523(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13529 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13529 = (function (alt_handler,flag,cb,meta13530){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13530 = meta13530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13531,meta13530__$1){
var self__ = this;
var _13531__$1 = this;
return (new cljs.core.async.t_cljs$core$async13529(self__.alt_handler,self__.flag,self__.cb,meta13530__$1));
});

cljs.core.async.t_cljs$core$async13529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13531){
var self__ = this;
var _13531__$1 = this;
return self__.meta13530;
});

cljs.core.async.t_cljs$core$async13529.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13529.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13529.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13530","meta13530",2042628971,null)], null);
});

cljs.core.async.t_cljs$core$async13529.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13529";

cljs.core.async.t_cljs$core$async13529.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async13529");
});

cljs.core.async.__GT_t_cljs$core$async13529 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13529(alt_handler__$1,flag__$1,cb__$1,meta13530){
return (new cljs.core.async.t_cljs$core$async13529(alt_handler__$1,flag__$1,cb__$1,meta13530));
});

}

return (new cljs.core.async.t_cljs$core$async13529(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13532_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13532_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13533_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13533_SHARP_,port], null));
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
var G__13534 = (i + (1));
i = G__13534;
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
var len__6152__auto___13540 = arguments.length;
var i__6153__auto___13541 = (0);
while(true){
if((i__6153__auto___13541 < len__6152__auto___13540)){
args__6159__auto__.push((arguments[i__6153__auto___13541]));

var G__13542 = (i__6153__auto___13541 + (1));
i__6153__auto___13541 = G__13542;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13537){
var map__13538 = p__13537;
var map__13538__$1 = ((((!((map__13538 == null)))?((((map__13538.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13538.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13538):map__13538);
var opts = map__13538__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13535){
var G__13536 = cljs.core.first.call(null,seq13535);
var seq13535__$1 = cljs.core.next.call(null,seq13535);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13536,seq13535__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13543 = [];
var len__6152__auto___13593 = arguments.length;
var i__6153__auto___13594 = (0);
while(true){
if((i__6153__auto___13594 < len__6152__auto___13593)){
args13543.push((arguments[i__6153__auto___13594]));

var G__13595 = (i__6153__auto___13594 + (1));
i__6153__auto___13594 = G__13595;
continue;
} else {
}
break;
}

var G__13545 = args13543.length;
switch (G__13545) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13543.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8543__auto___13597 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___13597){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___13597){
return (function (state_13569){
var state_val_13570 = (state_13569[(1)]);
if((state_val_13570 === (7))){
var inst_13565 = (state_13569[(2)]);
var state_13569__$1 = state_13569;
var statearr_13571_13598 = state_13569__$1;
(statearr_13571_13598[(2)] = inst_13565);

(statearr_13571_13598[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (1))){
var state_13569__$1 = state_13569;
var statearr_13572_13599 = state_13569__$1;
(statearr_13572_13599[(2)] = null);

(statearr_13572_13599[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (4))){
var inst_13548 = (state_13569[(7)]);
var inst_13548__$1 = (state_13569[(2)]);
var inst_13549 = (inst_13548__$1 == null);
var state_13569__$1 = (function (){var statearr_13573 = state_13569;
(statearr_13573[(7)] = inst_13548__$1);

return statearr_13573;
})();
if(cljs.core.truth_(inst_13549)){
var statearr_13574_13600 = state_13569__$1;
(statearr_13574_13600[(1)] = (5));

} else {
var statearr_13575_13601 = state_13569__$1;
(statearr_13575_13601[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (13))){
var state_13569__$1 = state_13569;
var statearr_13576_13602 = state_13569__$1;
(statearr_13576_13602[(2)] = null);

(statearr_13576_13602[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (6))){
var inst_13548 = (state_13569[(7)]);
var state_13569__$1 = state_13569;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13569__$1,(11),to,inst_13548);
} else {
if((state_val_13570 === (3))){
var inst_13567 = (state_13569[(2)]);
var state_13569__$1 = state_13569;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13569__$1,inst_13567);
} else {
if((state_val_13570 === (12))){
var state_13569__$1 = state_13569;
var statearr_13577_13603 = state_13569__$1;
(statearr_13577_13603[(2)] = null);

(statearr_13577_13603[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (2))){
var state_13569__$1 = state_13569;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13569__$1,(4),from);
} else {
if((state_val_13570 === (11))){
var inst_13558 = (state_13569[(2)]);
var state_13569__$1 = state_13569;
if(cljs.core.truth_(inst_13558)){
var statearr_13578_13604 = state_13569__$1;
(statearr_13578_13604[(1)] = (12));

} else {
var statearr_13579_13605 = state_13569__$1;
(statearr_13579_13605[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (9))){
var state_13569__$1 = state_13569;
var statearr_13580_13606 = state_13569__$1;
(statearr_13580_13606[(2)] = null);

(statearr_13580_13606[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (5))){
var state_13569__$1 = state_13569;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13581_13607 = state_13569__$1;
(statearr_13581_13607[(1)] = (8));

} else {
var statearr_13582_13608 = state_13569__$1;
(statearr_13582_13608[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (14))){
var inst_13563 = (state_13569[(2)]);
var state_13569__$1 = state_13569;
var statearr_13583_13609 = state_13569__$1;
(statearr_13583_13609[(2)] = inst_13563);

(statearr_13583_13609[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (10))){
var inst_13555 = (state_13569[(2)]);
var state_13569__$1 = state_13569;
var statearr_13584_13610 = state_13569__$1;
(statearr_13584_13610[(2)] = inst_13555);

(statearr_13584_13610[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13570 === (8))){
var inst_13552 = cljs.core.async.close_BANG_.call(null,to);
var state_13569__$1 = state_13569;
var statearr_13585_13611 = state_13569__$1;
(statearr_13585_13611[(2)] = inst_13552);

(statearr_13585_13611[(1)] = (10));


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
});})(c__8543__auto___13597))
;
return ((function (switch__8478__auto__,c__8543__auto___13597){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_13589 = [null,null,null,null,null,null,null,null];
(statearr_13589[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_13589[(1)] = (1));

return statearr_13589;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_13569){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13569);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13590){if((e13590 instanceof Object)){
var ex__8482__auto__ = e13590;
var statearr_13591_13612 = state_13569;
(statearr_13591_13612[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13569);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13590;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13613 = state_13569;
state_13569 = G__13613;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_13569){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_13569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___13597))
})();
var state__8545__auto__ = (function (){var statearr_13592 = f__8544__auto__.call(null);
(statearr_13592[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___13597);

return statearr_13592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___13597))
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
return (function (p__13797){
var vec__13798 = p__13797;
var v = cljs.core.nth.call(null,vec__13798,(0),null);
var p = cljs.core.nth.call(null,vec__13798,(1),null);
var job = vec__13798;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8543__auto___13980 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___13980,res,vec__13798,v,p,job,jobs,results){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___13980,res,vec__13798,v,p,job,jobs,results){
return (function (state_13803){
var state_val_13804 = (state_13803[(1)]);
if((state_val_13804 === (1))){
var state_13803__$1 = state_13803;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13803__$1,(2),res,v);
} else {
if((state_val_13804 === (2))){
var inst_13800 = (state_13803[(2)]);
var inst_13801 = cljs.core.async.close_BANG_.call(null,res);
var state_13803__$1 = (function (){var statearr_13805 = state_13803;
(statearr_13805[(7)] = inst_13800);

return statearr_13805;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13803__$1,inst_13801);
} else {
return null;
}
}
});})(c__8543__auto___13980,res,vec__13798,v,p,job,jobs,results))
;
return ((function (switch__8478__auto__,c__8543__auto___13980,res,vec__13798,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_13809 = [null,null,null,null,null,null,null,null];
(statearr_13809[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_13809[(1)] = (1));

return statearr_13809;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_13803){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13803);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13810){if((e13810 instanceof Object)){
var ex__8482__auto__ = e13810;
var statearr_13811_13981 = state_13803;
(statearr_13811_13981[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13803);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13982 = state_13803;
state_13803 = G__13982;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_13803){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_13803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___13980,res,vec__13798,v,p,job,jobs,results))
})();
var state__8545__auto__ = (function (){var statearr_13812 = f__8544__auto__.call(null);
(statearr_13812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___13980);

return statearr_13812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___13980,res,vec__13798,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13813){
var vec__13814 = p__13813;
var v = cljs.core.nth.call(null,vec__13814,(0),null);
var p = cljs.core.nth.call(null,vec__13814,(1),null);
var job = vec__13814;
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
var n__5997__auto___13983 = n;
var __13984 = (0);
while(true){
if((__13984 < n__5997__auto___13983)){
var G__13815_13985 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13815_13985) {
case "compute":
var c__8543__auto___13987 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13984,c__8543__auto___13987,G__13815_13985,n__5997__auto___13983,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (__13984,c__8543__auto___13987,G__13815_13985,n__5997__auto___13983,jobs,results,process,async){
return (function (state_13828){
var state_val_13829 = (state_13828[(1)]);
if((state_val_13829 === (1))){
var state_13828__$1 = state_13828;
var statearr_13830_13988 = state_13828__$1;
(statearr_13830_13988[(2)] = null);

(statearr_13830_13988[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (2))){
var state_13828__$1 = state_13828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13828__$1,(4),jobs);
} else {
if((state_val_13829 === (3))){
var inst_13826 = (state_13828[(2)]);
var state_13828__$1 = state_13828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13828__$1,inst_13826);
} else {
if((state_val_13829 === (4))){
var inst_13818 = (state_13828[(2)]);
var inst_13819 = process.call(null,inst_13818);
var state_13828__$1 = state_13828;
if(cljs.core.truth_(inst_13819)){
var statearr_13831_13989 = state_13828__$1;
(statearr_13831_13989[(1)] = (5));

} else {
var statearr_13832_13990 = state_13828__$1;
(statearr_13832_13990[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (5))){
var state_13828__$1 = state_13828;
var statearr_13833_13991 = state_13828__$1;
(statearr_13833_13991[(2)] = null);

(statearr_13833_13991[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (6))){
var state_13828__$1 = state_13828;
var statearr_13834_13992 = state_13828__$1;
(statearr_13834_13992[(2)] = null);

(statearr_13834_13992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13829 === (7))){
var inst_13824 = (state_13828[(2)]);
var state_13828__$1 = state_13828;
var statearr_13835_13993 = state_13828__$1;
(statearr_13835_13993[(2)] = inst_13824);

(statearr_13835_13993[(1)] = (3));


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
});})(__13984,c__8543__auto___13987,G__13815_13985,n__5997__auto___13983,jobs,results,process,async))
;
return ((function (__13984,switch__8478__auto__,c__8543__auto___13987,G__13815_13985,n__5997__auto___13983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_13839 = [null,null,null,null,null,null,null];
(statearr_13839[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_13839[(1)] = (1));

return statearr_13839;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_13828){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13840){if((e13840 instanceof Object)){
var ex__8482__auto__ = e13840;
var statearr_13841_13994 = state_13828;
(statearr_13841_13994[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13840;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13995 = state_13828;
state_13828 = G__13995;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_13828){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_13828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(__13984,switch__8478__auto__,c__8543__auto___13987,G__13815_13985,n__5997__auto___13983,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_13842 = f__8544__auto__.call(null);
(statearr_13842[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___13987);

return statearr_13842;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(__13984,c__8543__auto___13987,G__13815_13985,n__5997__auto___13983,jobs,results,process,async))
);


break;
case "async":
var c__8543__auto___13996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__13984,c__8543__auto___13996,G__13815_13985,n__5997__auto___13983,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (__13984,c__8543__auto___13996,G__13815_13985,n__5997__auto___13983,jobs,results,process,async){
return (function (state_13855){
var state_val_13856 = (state_13855[(1)]);
if((state_val_13856 === (1))){
var state_13855__$1 = state_13855;
var statearr_13857_13997 = state_13855__$1;
(statearr_13857_13997[(2)] = null);

(statearr_13857_13997[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13856 === (2))){
var state_13855__$1 = state_13855;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13855__$1,(4),jobs);
} else {
if((state_val_13856 === (3))){
var inst_13853 = (state_13855[(2)]);
var state_13855__$1 = state_13855;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13855__$1,inst_13853);
} else {
if((state_val_13856 === (4))){
var inst_13845 = (state_13855[(2)]);
var inst_13846 = async.call(null,inst_13845);
var state_13855__$1 = state_13855;
if(cljs.core.truth_(inst_13846)){
var statearr_13858_13998 = state_13855__$1;
(statearr_13858_13998[(1)] = (5));

} else {
var statearr_13859_13999 = state_13855__$1;
(statearr_13859_13999[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13856 === (5))){
var state_13855__$1 = state_13855;
var statearr_13860_14000 = state_13855__$1;
(statearr_13860_14000[(2)] = null);

(statearr_13860_14000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13856 === (6))){
var state_13855__$1 = state_13855;
var statearr_13861_14001 = state_13855__$1;
(statearr_13861_14001[(2)] = null);

(statearr_13861_14001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13856 === (7))){
var inst_13851 = (state_13855[(2)]);
var state_13855__$1 = state_13855;
var statearr_13862_14002 = state_13855__$1;
(statearr_13862_14002[(2)] = inst_13851);

(statearr_13862_14002[(1)] = (3));


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
});})(__13984,c__8543__auto___13996,G__13815_13985,n__5997__auto___13983,jobs,results,process,async))
;
return ((function (__13984,switch__8478__auto__,c__8543__auto___13996,G__13815_13985,n__5997__auto___13983,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_13866 = [null,null,null,null,null,null,null];
(statearr_13866[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_13866[(1)] = (1));

return statearr_13866;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_13855){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13855);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13867){if((e13867 instanceof Object)){
var ex__8482__auto__ = e13867;
var statearr_13868_14003 = state_13855;
(statearr_13868_14003[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13855);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13867;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14004 = state_13855;
state_13855 = G__14004;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_13855){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_13855);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(__13984,switch__8478__auto__,c__8543__auto___13996,G__13815_13985,n__5997__auto___13983,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_13869 = f__8544__auto__.call(null);
(statearr_13869[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___13996);

return statearr_13869;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(__13984,c__8543__auto___13996,G__13815_13985,n__5997__auto___13983,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14005 = (__13984 + (1));
__13984 = G__14005;
continue;
} else {
}
break;
}

var c__8543__auto___14006 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14006,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14006,jobs,results,process,async){
return (function (state_13891){
var state_val_13892 = (state_13891[(1)]);
if((state_val_13892 === (1))){
var state_13891__$1 = state_13891;
var statearr_13893_14007 = state_13891__$1;
(statearr_13893_14007[(2)] = null);

(statearr_13893_14007[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13892 === (2))){
var state_13891__$1 = state_13891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13891__$1,(4),from);
} else {
if((state_val_13892 === (3))){
var inst_13889 = (state_13891[(2)]);
var state_13891__$1 = state_13891;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13891__$1,inst_13889);
} else {
if((state_val_13892 === (4))){
var inst_13872 = (state_13891[(7)]);
var inst_13872__$1 = (state_13891[(2)]);
var inst_13873 = (inst_13872__$1 == null);
var state_13891__$1 = (function (){var statearr_13894 = state_13891;
(statearr_13894[(7)] = inst_13872__$1);

return statearr_13894;
})();
if(cljs.core.truth_(inst_13873)){
var statearr_13895_14008 = state_13891__$1;
(statearr_13895_14008[(1)] = (5));

} else {
var statearr_13896_14009 = state_13891__$1;
(statearr_13896_14009[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13892 === (5))){
var inst_13875 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13891__$1 = state_13891;
var statearr_13897_14010 = state_13891__$1;
(statearr_13897_14010[(2)] = inst_13875);

(statearr_13897_14010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13892 === (6))){
var inst_13872 = (state_13891[(7)]);
var inst_13877 = (state_13891[(8)]);
var inst_13877__$1 = cljs.core.async.chan.call(null,(1));
var inst_13878 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13879 = [inst_13872,inst_13877__$1];
var inst_13880 = (new cljs.core.PersistentVector(null,2,(5),inst_13878,inst_13879,null));
var state_13891__$1 = (function (){var statearr_13898 = state_13891;
(statearr_13898[(8)] = inst_13877__$1);

return statearr_13898;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13891__$1,(8),jobs,inst_13880);
} else {
if((state_val_13892 === (7))){
var inst_13887 = (state_13891[(2)]);
var state_13891__$1 = state_13891;
var statearr_13899_14011 = state_13891__$1;
(statearr_13899_14011[(2)] = inst_13887);

(statearr_13899_14011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13892 === (8))){
var inst_13877 = (state_13891[(8)]);
var inst_13882 = (state_13891[(2)]);
var state_13891__$1 = (function (){var statearr_13900 = state_13891;
(statearr_13900[(9)] = inst_13882);

return statearr_13900;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13891__$1,(9),results,inst_13877);
} else {
if((state_val_13892 === (9))){
var inst_13884 = (state_13891[(2)]);
var state_13891__$1 = (function (){var statearr_13901 = state_13891;
(statearr_13901[(10)] = inst_13884);

return statearr_13901;
})();
var statearr_13902_14012 = state_13891__$1;
(statearr_13902_14012[(2)] = null);

(statearr_13902_14012[(1)] = (2));


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
});})(c__8543__auto___14006,jobs,results,process,async))
;
return ((function (switch__8478__auto__,c__8543__auto___14006,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_13906 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13906[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_13906[(1)] = (1));

return statearr_13906;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_13891){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13907){if((e13907 instanceof Object)){
var ex__8482__auto__ = e13907;
var statearr_13908_14013 = state_13891;
(statearr_13908_14013[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13907;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14014 = state_13891;
state_13891 = G__14014;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_13891){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_13891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14006,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_13909 = f__8544__auto__.call(null);
(statearr_13909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14006);

return statearr_13909;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14006,jobs,results,process,async))
);


var c__8543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto__,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto__,jobs,results,process,async){
return (function (state_13947){
var state_val_13948 = (state_13947[(1)]);
if((state_val_13948 === (7))){
var inst_13943 = (state_13947[(2)]);
var state_13947__$1 = state_13947;
var statearr_13949_14015 = state_13947__$1;
(statearr_13949_14015[(2)] = inst_13943);

(statearr_13949_14015[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (20))){
var state_13947__$1 = state_13947;
var statearr_13950_14016 = state_13947__$1;
(statearr_13950_14016[(2)] = null);

(statearr_13950_14016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (1))){
var state_13947__$1 = state_13947;
var statearr_13951_14017 = state_13947__$1;
(statearr_13951_14017[(2)] = null);

(statearr_13951_14017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (4))){
var inst_13912 = (state_13947[(7)]);
var inst_13912__$1 = (state_13947[(2)]);
var inst_13913 = (inst_13912__$1 == null);
var state_13947__$1 = (function (){var statearr_13952 = state_13947;
(statearr_13952[(7)] = inst_13912__$1);

return statearr_13952;
})();
if(cljs.core.truth_(inst_13913)){
var statearr_13953_14018 = state_13947__$1;
(statearr_13953_14018[(1)] = (5));

} else {
var statearr_13954_14019 = state_13947__$1;
(statearr_13954_14019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (15))){
var inst_13925 = (state_13947[(8)]);
var state_13947__$1 = state_13947;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13947__$1,(18),to,inst_13925);
} else {
if((state_val_13948 === (21))){
var inst_13938 = (state_13947[(2)]);
var state_13947__$1 = state_13947;
var statearr_13955_14020 = state_13947__$1;
(statearr_13955_14020[(2)] = inst_13938);

(statearr_13955_14020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (13))){
var inst_13940 = (state_13947[(2)]);
var state_13947__$1 = (function (){var statearr_13956 = state_13947;
(statearr_13956[(9)] = inst_13940);

return statearr_13956;
})();
var statearr_13957_14021 = state_13947__$1;
(statearr_13957_14021[(2)] = null);

(statearr_13957_14021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (6))){
var inst_13912 = (state_13947[(7)]);
var state_13947__$1 = state_13947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13947__$1,(11),inst_13912);
} else {
if((state_val_13948 === (17))){
var inst_13933 = (state_13947[(2)]);
var state_13947__$1 = state_13947;
if(cljs.core.truth_(inst_13933)){
var statearr_13958_14022 = state_13947__$1;
(statearr_13958_14022[(1)] = (19));

} else {
var statearr_13959_14023 = state_13947__$1;
(statearr_13959_14023[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (3))){
var inst_13945 = (state_13947[(2)]);
var state_13947__$1 = state_13947;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13947__$1,inst_13945);
} else {
if((state_val_13948 === (12))){
var inst_13922 = (state_13947[(10)]);
var state_13947__$1 = state_13947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13947__$1,(14),inst_13922);
} else {
if((state_val_13948 === (2))){
var state_13947__$1 = state_13947;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13947__$1,(4),results);
} else {
if((state_val_13948 === (19))){
var state_13947__$1 = state_13947;
var statearr_13960_14024 = state_13947__$1;
(statearr_13960_14024[(2)] = null);

(statearr_13960_14024[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (11))){
var inst_13922 = (state_13947[(2)]);
var state_13947__$1 = (function (){var statearr_13961 = state_13947;
(statearr_13961[(10)] = inst_13922);

return statearr_13961;
})();
var statearr_13962_14025 = state_13947__$1;
(statearr_13962_14025[(2)] = null);

(statearr_13962_14025[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (9))){
var state_13947__$1 = state_13947;
var statearr_13963_14026 = state_13947__$1;
(statearr_13963_14026[(2)] = null);

(statearr_13963_14026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (5))){
var state_13947__$1 = state_13947;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13964_14027 = state_13947__$1;
(statearr_13964_14027[(1)] = (8));

} else {
var statearr_13965_14028 = state_13947__$1;
(statearr_13965_14028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (14))){
var inst_13925 = (state_13947[(8)]);
var inst_13927 = (state_13947[(11)]);
var inst_13925__$1 = (state_13947[(2)]);
var inst_13926 = (inst_13925__$1 == null);
var inst_13927__$1 = cljs.core.not.call(null,inst_13926);
var state_13947__$1 = (function (){var statearr_13966 = state_13947;
(statearr_13966[(8)] = inst_13925__$1);

(statearr_13966[(11)] = inst_13927__$1);

return statearr_13966;
})();
if(inst_13927__$1){
var statearr_13967_14029 = state_13947__$1;
(statearr_13967_14029[(1)] = (15));

} else {
var statearr_13968_14030 = state_13947__$1;
(statearr_13968_14030[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (16))){
var inst_13927 = (state_13947[(11)]);
var state_13947__$1 = state_13947;
var statearr_13969_14031 = state_13947__$1;
(statearr_13969_14031[(2)] = inst_13927);

(statearr_13969_14031[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (10))){
var inst_13919 = (state_13947[(2)]);
var state_13947__$1 = state_13947;
var statearr_13970_14032 = state_13947__$1;
(statearr_13970_14032[(2)] = inst_13919);

(statearr_13970_14032[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (18))){
var inst_13930 = (state_13947[(2)]);
var state_13947__$1 = state_13947;
var statearr_13971_14033 = state_13947__$1;
(statearr_13971_14033[(2)] = inst_13930);

(statearr_13971_14033[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13948 === (8))){
var inst_13916 = cljs.core.async.close_BANG_.call(null,to);
var state_13947__$1 = state_13947;
var statearr_13972_14034 = state_13947__$1;
(statearr_13972_14034[(2)] = inst_13916);

(statearr_13972_14034[(1)] = (10));


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
var statearr_13976 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13976[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_13976[(1)] = (1));

return statearr_13976;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_13947){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13947);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13977){if((e13977 instanceof Object)){
var ex__8482__auto__ = e13977;
var statearr_13978_14035 = state_13947;
(statearr_13978_14035[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13947);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14036 = state_13947;
state_13947 = G__14036;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_13947){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_13947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_13979 = f__8544__auto__.call(null);
(statearr_13979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_13979;
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
var args14037 = [];
var len__6152__auto___14040 = arguments.length;
var i__6153__auto___14041 = (0);
while(true){
if((i__6153__auto___14041 < len__6152__auto___14040)){
args14037.push((arguments[i__6153__auto___14041]));

var G__14042 = (i__6153__auto___14041 + (1));
i__6153__auto___14041 = G__14042;
continue;
} else {
}
break;
}

var G__14039 = args14037.length;
switch (G__14039) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14037.length)].join('')));

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
var args14044 = [];
var len__6152__auto___14047 = arguments.length;
var i__6153__auto___14048 = (0);
while(true){
if((i__6153__auto___14048 < len__6152__auto___14047)){
args14044.push((arguments[i__6153__auto___14048]));

var G__14049 = (i__6153__auto___14048 + (1));
i__6153__auto___14048 = G__14049;
continue;
} else {
}
break;
}

var G__14046 = args14044.length;
switch (G__14046) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14044.length)].join('')));

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
var args14051 = [];
var len__6152__auto___14104 = arguments.length;
var i__6153__auto___14105 = (0);
while(true){
if((i__6153__auto___14105 < len__6152__auto___14104)){
args14051.push((arguments[i__6153__auto___14105]));

var G__14106 = (i__6153__auto___14105 + (1));
i__6153__auto___14105 = G__14106;
continue;
} else {
}
break;
}

var G__14053 = args14051.length;
switch (G__14053) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14051.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8543__auto___14108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14108,tc,fc){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14108,tc,fc){
return (function (state_14079){
var state_val_14080 = (state_14079[(1)]);
if((state_val_14080 === (7))){
var inst_14075 = (state_14079[(2)]);
var state_14079__$1 = state_14079;
var statearr_14081_14109 = state_14079__$1;
(statearr_14081_14109[(2)] = inst_14075);

(statearr_14081_14109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (1))){
var state_14079__$1 = state_14079;
var statearr_14082_14110 = state_14079__$1;
(statearr_14082_14110[(2)] = null);

(statearr_14082_14110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (4))){
var inst_14056 = (state_14079[(7)]);
var inst_14056__$1 = (state_14079[(2)]);
var inst_14057 = (inst_14056__$1 == null);
var state_14079__$1 = (function (){var statearr_14083 = state_14079;
(statearr_14083[(7)] = inst_14056__$1);

return statearr_14083;
})();
if(cljs.core.truth_(inst_14057)){
var statearr_14084_14111 = state_14079__$1;
(statearr_14084_14111[(1)] = (5));

} else {
var statearr_14085_14112 = state_14079__$1;
(statearr_14085_14112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (13))){
var state_14079__$1 = state_14079;
var statearr_14086_14113 = state_14079__$1;
(statearr_14086_14113[(2)] = null);

(statearr_14086_14113[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (6))){
var inst_14056 = (state_14079[(7)]);
var inst_14062 = p.call(null,inst_14056);
var state_14079__$1 = state_14079;
if(cljs.core.truth_(inst_14062)){
var statearr_14087_14114 = state_14079__$1;
(statearr_14087_14114[(1)] = (9));

} else {
var statearr_14088_14115 = state_14079__$1;
(statearr_14088_14115[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (3))){
var inst_14077 = (state_14079[(2)]);
var state_14079__$1 = state_14079;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14079__$1,inst_14077);
} else {
if((state_val_14080 === (12))){
var state_14079__$1 = state_14079;
var statearr_14089_14116 = state_14079__$1;
(statearr_14089_14116[(2)] = null);

(statearr_14089_14116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (2))){
var state_14079__$1 = state_14079;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14079__$1,(4),ch);
} else {
if((state_val_14080 === (11))){
var inst_14056 = (state_14079[(7)]);
var inst_14066 = (state_14079[(2)]);
var state_14079__$1 = state_14079;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14079__$1,(8),inst_14066,inst_14056);
} else {
if((state_val_14080 === (9))){
var state_14079__$1 = state_14079;
var statearr_14090_14117 = state_14079__$1;
(statearr_14090_14117[(2)] = tc);

(statearr_14090_14117[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (5))){
var inst_14059 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14060 = cljs.core.async.close_BANG_.call(null,fc);
var state_14079__$1 = (function (){var statearr_14091 = state_14079;
(statearr_14091[(8)] = inst_14059);

return statearr_14091;
})();
var statearr_14092_14118 = state_14079__$1;
(statearr_14092_14118[(2)] = inst_14060);

(statearr_14092_14118[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (14))){
var inst_14073 = (state_14079[(2)]);
var state_14079__$1 = state_14079;
var statearr_14093_14119 = state_14079__$1;
(statearr_14093_14119[(2)] = inst_14073);

(statearr_14093_14119[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (10))){
var state_14079__$1 = state_14079;
var statearr_14094_14120 = state_14079__$1;
(statearr_14094_14120[(2)] = fc);

(statearr_14094_14120[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14080 === (8))){
var inst_14068 = (state_14079[(2)]);
var state_14079__$1 = state_14079;
if(cljs.core.truth_(inst_14068)){
var statearr_14095_14121 = state_14079__$1;
(statearr_14095_14121[(1)] = (12));

} else {
var statearr_14096_14122 = state_14079__$1;
(statearr_14096_14122[(1)] = (13));

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
});})(c__8543__auto___14108,tc,fc))
;
return ((function (switch__8478__auto__,c__8543__auto___14108,tc,fc){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_14100 = [null,null,null,null,null,null,null,null,null];
(statearr_14100[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_14100[(1)] = (1));

return statearr_14100;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_14079){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14079);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14101){if((e14101 instanceof Object)){
var ex__8482__auto__ = e14101;
var statearr_14102_14123 = state_14079;
(statearr_14102_14123[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14079);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14101;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14124 = state_14079;
state_14079 = G__14124;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_14079){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_14079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14108,tc,fc))
})();
var state__8545__auto__ = (function (){var statearr_14103 = f__8544__auto__.call(null);
(statearr_14103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14108);

return statearr_14103;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14108,tc,fc))
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
return (function (state_14171){
var state_val_14172 = (state_14171[(1)]);
if((state_val_14172 === (1))){
var inst_14157 = init;
var state_14171__$1 = (function (){var statearr_14173 = state_14171;
(statearr_14173[(7)] = inst_14157);

return statearr_14173;
})();
var statearr_14174_14189 = state_14171__$1;
(statearr_14174_14189[(2)] = null);

(statearr_14174_14189[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14172 === (2))){
var state_14171__$1 = state_14171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14171__$1,(4),ch);
} else {
if((state_val_14172 === (3))){
var inst_14169 = (state_14171[(2)]);
var state_14171__$1 = state_14171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14171__$1,inst_14169);
} else {
if((state_val_14172 === (4))){
var inst_14160 = (state_14171[(8)]);
var inst_14160__$1 = (state_14171[(2)]);
var inst_14161 = (inst_14160__$1 == null);
var state_14171__$1 = (function (){var statearr_14175 = state_14171;
(statearr_14175[(8)] = inst_14160__$1);

return statearr_14175;
})();
if(cljs.core.truth_(inst_14161)){
var statearr_14176_14190 = state_14171__$1;
(statearr_14176_14190[(1)] = (5));

} else {
var statearr_14177_14191 = state_14171__$1;
(statearr_14177_14191[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14172 === (5))){
var inst_14157 = (state_14171[(7)]);
var state_14171__$1 = state_14171;
var statearr_14178_14192 = state_14171__$1;
(statearr_14178_14192[(2)] = inst_14157);

(statearr_14178_14192[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14172 === (6))){
var inst_14160 = (state_14171[(8)]);
var inst_14157 = (state_14171[(7)]);
var inst_14164 = f.call(null,inst_14157,inst_14160);
var inst_14157__$1 = inst_14164;
var state_14171__$1 = (function (){var statearr_14179 = state_14171;
(statearr_14179[(7)] = inst_14157__$1);

return statearr_14179;
})();
var statearr_14180_14193 = state_14171__$1;
(statearr_14180_14193[(2)] = null);

(statearr_14180_14193[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14172 === (7))){
var inst_14167 = (state_14171[(2)]);
var state_14171__$1 = state_14171;
var statearr_14181_14194 = state_14171__$1;
(statearr_14181_14194[(2)] = inst_14167);

(statearr_14181_14194[(1)] = (3));


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
var statearr_14185 = [null,null,null,null,null,null,null,null,null];
(statearr_14185[(0)] = cljs$core$async$reduce_$_state_machine__8479__auto__);

(statearr_14185[(1)] = (1));

return statearr_14185;
});
var cljs$core$async$reduce_$_state_machine__8479__auto____1 = (function (state_14171){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14186){if((e14186 instanceof Object)){
var ex__8482__auto__ = e14186;
var statearr_14187_14195 = state_14171;
(statearr_14187_14195[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14186;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14196 = state_14171;
state_14171 = G__14196;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8479__auto__ = function(state_14171){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8479__auto____1.call(this,state_14171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8479__auto____0;
cljs$core$async$reduce_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8479__auto____1;
return cljs$core$async$reduce_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__))
})();
var state__8545__auto__ = (function (){var statearr_14188 = f__8544__auto__.call(null);
(statearr_14188[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_14188;
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
var args14197 = [];
var len__6152__auto___14249 = arguments.length;
var i__6153__auto___14250 = (0);
while(true){
if((i__6153__auto___14250 < len__6152__auto___14249)){
args14197.push((arguments[i__6153__auto___14250]));

var G__14251 = (i__6153__auto___14250 + (1));
i__6153__auto___14250 = G__14251;
continue;
} else {
}
break;
}

var G__14199 = args14197.length;
switch (G__14199) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14197.length)].join('')));

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
return (function (state_14224){
var state_val_14225 = (state_14224[(1)]);
if((state_val_14225 === (7))){
var inst_14206 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14226_14253 = state_14224__$1;
(statearr_14226_14253[(2)] = inst_14206);

(statearr_14226_14253[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (1))){
var inst_14200 = cljs.core.seq.call(null,coll);
var inst_14201 = inst_14200;
var state_14224__$1 = (function (){var statearr_14227 = state_14224;
(statearr_14227[(7)] = inst_14201);

return statearr_14227;
})();
var statearr_14228_14254 = state_14224__$1;
(statearr_14228_14254[(2)] = null);

(statearr_14228_14254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (4))){
var inst_14201 = (state_14224[(7)]);
var inst_14204 = cljs.core.first.call(null,inst_14201);
var state_14224__$1 = state_14224;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14224__$1,(7),ch,inst_14204);
} else {
if((state_val_14225 === (13))){
var inst_14218 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14229_14255 = state_14224__$1;
(statearr_14229_14255[(2)] = inst_14218);

(statearr_14229_14255[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (6))){
var inst_14209 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
if(cljs.core.truth_(inst_14209)){
var statearr_14230_14256 = state_14224__$1;
(statearr_14230_14256[(1)] = (8));

} else {
var statearr_14231_14257 = state_14224__$1;
(statearr_14231_14257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (3))){
var inst_14222 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14224__$1,inst_14222);
} else {
if((state_val_14225 === (12))){
var state_14224__$1 = state_14224;
var statearr_14232_14258 = state_14224__$1;
(statearr_14232_14258[(2)] = null);

(statearr_14232_14258[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (2))){
var inst_14201 = (state_14224[(7)]);
var state_14224__$1 = state_14224;
if(cljs.core.truth_(inst_14201)){
var statearr_14233_14259 = state_14224__$1;
(statearr_14233_14259[(1)] = (4));

} else {
var statearr_14234_14260 = state_14224__$1;
(statearr_14234_14260[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (11))){
var inst_14215 = cljs.core.async.close_BANG_.call(null,ch);
var state_14224__$1 = state_14224;
var statearr_14235_14261 = state_14224__$1;
(statearr_14235_14261[(2)] = inst_14215);

(statearr_14235_14261[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (9))){
var state_14224__$1 = state_14224;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14236_14262 = state_14224__$1;
(statearr_14236_14262[(1)] = (11));

} else {
var statearr_14237_14263 = state_14224__$1;
(statearr_14237_14263[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (5))){
var inst_14201 = (state_14224[(7)]);
var state_14224__$1 = state_14224;
var statearr_14238_14264 = state_14224__$1;
(statearr_14238_14264[(2)] = inst_14201);

(statearr_14238_14264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (10))){
var inst_14220 = (state_14224[(2)]);
var state_14224__$1 = state_14224;
var statearr_14239_14265 = state_14224__$1;
(statearr_14239_14265[(2)] = inst_14220);

(statearr_14239_14265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14225 === (8))){
var inst_14201 = (state_14224[(7)]);
var inst_14211 = cljs.core.next.call(null,inst_14201);
var inst_14201__$1 = inst_14211;
var state_14224__$1 = (function (){var statearr_14240 = state_14224;
(statearr_14240[(7)] = inst_14201__$1);

return statearr_14240;
})();
var statearr_14241_14266 = state_14224__$1;
(statearr_14241_14266[(2)] = null);

(statearr_14241_14266[(1)] = (2));


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
var statearr_14245 = [null,null,null,null,null,null,null,null];
(statearr_14245[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_14245[(1)] = (1));

return statearr_14245;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_14224){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14224);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14246){if((e14246 instanceof Object)){
var ex__8482__auto__ = e14246;
var statearr_14247_14267 = state_14224;
(statearr_14247_14267[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14224);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14246;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14268 = state_14224;
state_14224 = G__14268;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_14224){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_14224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__))
})();
var state__8545__auto__ = (function (){var statearr_14248 = f__8544__auto__.call(null);
(statearr_14248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_14248;
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
if(typeof cljs.core.async.t_cljs$core$async14490 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14490 = (function (mult,ch,cs,meta14491){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14491 = meta14491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14492,meta14491__$1){
var self__ = this;
var _14492__$1 = this;
return (new cljs.core.async.t_cljs$core$async14490(self__.mult,self__.ch,self__.cs,meta14491__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14492){
var self__ = this;
var _14492__$1 = this;
return self__.meta14491;
});})(cs))
;

cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14490.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14490.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14491","meta14491",984102047,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14490.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14490.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14490";

cljs.core.async.t_cljs$core$async14490.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async14490");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14490 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14490(mult__$1,ch__$1,cs__$1,meta14491){
return (new cljs.core.async.t_cljs$core$async14490(mult__$1,ch__$1,cs__$1,meta14491));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14490(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8543__auto___14711 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14711,cs,m,dchan,dctr,done){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14711,cs,m,dchan,dctr,done){
return (function (state_14623){
var state_val_14624 = (state_14623[(1)]);
if((state_val_14624 === (7))){
var inst_14619 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14625_14712 = state_14623__$1;
(statearr_14625_14712[(2)] = inst_14619);

(statearr_14625_14712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (20))){
var inst_14524 = (state_14623[(7)]);
var inst_14534 = cljs.core.first.call(null,inst_14524);
var inst_14535 = cljs.core.nth.call(null,inst_14534,(0),null);
var inst_14536 = cljs.core.nth.call(null,inst_14534,(1),null);
var state_14623__$1 = (function (){var statearr_14626 = state_14623;
(statearr_14626[(8)] = inst_14535);

return statearr_14626;
})();
if(cljs.core.truth_(inst_14536)){
var statearr_14627_14713 = state_14623__$1;
(statearr_14627_14713[(1)] = (22));

} else {
var statearr_14628_14714 = state_14623__$1;
(statearr_14628_14714[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (27))){
var inst_14564 = (state_14623[(9)]);
var inst_14571 = (state_14623[(10)]);
var inst_14495 = (state_14623[(11)]);
var inst_14566 = (state_14623[(12)]);
var inst_14571__$1 = cljs.core._nth.call(null,inst_14564,inst_14566);
var inst_14572 = cljs.core.async.put_BANG_.call(null,inst_14571__$1,inst_14495,done);
var state_14623__$1 = (function (){var statearr_14629 = state_14623;
(statearr_14629[(10)] = inst_14571__$1);

return statearr_14629;
})();
if(cljs.core.truth_(inst_14572)){
var statearr_14630_14715 = state_14623__$1;
(statearr_14630_14715[(1)] = (30));

} else {
var statearr_14631_14716 = state_14623__$1;
(statearr_14631_14716[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (1))){
var state_14623__$1 = state_14623;
var statearr_14632_14717 = state_14623__$1;
(statearr_14632_14717[(2)] = null);

(statearr_14632_14717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (24))){
var inst_14524 = (state_14623[(7)]);
var inst_14541 = (state_14623[(2)]);
var inst_14542 = cljs.core.next.call(null,inst_14524);
var inst_14504 = inst_14542;
var inst_14505 = null;
var inst_14506 = (0);
var inst_14507 = (0);
var state_14623__$1 = (function (){var statearr_14633 = state_14623;
(statearr_14633[(13)] = inst_14506);

(statearr_14633[(14)] = inst_14507);

(statearr_14633[(15)] = inst_14505);

(statearr_14633[(16)] = inst_14504);

(statearr_14633[(17)] = inst_14541);

return statearr_14633;
})();
var statearr_14634_14718 = state_14623__$1;
(statearr_14634_14718[(2)] = null);

(statearr_14634_14718[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (39))){
var state_14623__$1 = state_14623;
var statearr_14638_14719 = state_14623__$1;
(statearr_14638_14719[(2)] = null);

(statearr_14638_14719[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (4))){
var inst_14495 = (state_14623[(11)]);
var inst_14495__$1 = (state_14623[(2)]);
var inst_14496 = (inst_14495__$1 == null);
var state_14623__$1 = (function (){var statearr_14639 = state_14623;
(statearr_14639[(11)] = inst_14495__$1);

return statearr_14639;
})();
if(cljs.core.truth_(inst_14496)){
var statearr_14640_14720 = state_14623__$1;
(statearr_14640_14720[(1)] = (5));

} else {
var statearr_14641_14721 = state_14623__$1;
(statearr_14641_14721[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (15))){
var inst_14506 = (state_14623[(13)]);
var inst_14507 = (state_14623[(14)]);
var inst_14505 = (state_14623[(15)]);
var inst_14504 = (state_14623[(16)]);
var inst_14520 = (state_14623[(2)]);
var inst_14521 = (inst_14507 + (1));
var tmp14635 = inst_14506;
var tmp14636 = inst_14505;
var tmp14637 = inst_14504;
var inst_14504__$1 = tmp14637;
var inst_14505__$1 = tmp14636;
var inst_14506__$1 = tmp14635;
var inst_14507__$1 = inst_14521;
var state_14623__$1 = (function (){var statearr_14642 = state_14623;
(statearr_14642[(13)] = inst_14506__$1);

(statearr_14642[(14)] = inst_14507__$1);

(statearr_14642[(15)] = inst_14505__$1);

(statearr_14642[(18)] = inst_14520);

(statearr_14642[(16)] = inst_14504__$1);

return statearr_14642;
})();
var statearr_14643_14722 = state_14623__$1;
(statearr_14643_14722[(2)] = null);

(statearr_14643_14722[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (21))){
var inst_14545 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14647_14723 = state_14623__$1;
(statearr_14647_14723[(2)] = inst_14545);

(statearr_14647_14723[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (31))){
var inst_14571 = (state_14623[(10)]);
var inst_14575 = done.call(null,null);
var inst_14576 = cljs.core.async.untap_STAR_.call(null,m,inst_14571);
var state_14623__$1 = (function (){var statearr_14648 = state_14623;
(statearr_14648[(19)] = inst_14575);

return statearr_14648;
})();
var statearr_14649_14724 = state_14623__$1;
(statearr_14649_14724[(2)] = inst_14576);

(statearr_14649_14724[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (32))){
var inst_14565 = (state_14623[(20)]);
var inst_14564 = (state_14623[(9)]);
var inst_14563 = (state_14623[(21)]);
var inst_14566 = (state_14623[(12)]);
var inst_14578 = (state_14623[(2)]);
var inst_14579 = (inst_14566 + (1));
var tmp14644 = inst_14565;
var tmp14645 = inst_14564;
var tmp14646 = inst_14563;
var inst_14563__$1 = tmp14646;
var inst_14564__$1 = tmp14645;
var inst_14565__$1 = tmp14644;
var inst_14566__$1 = inst_14579;
var state_14623__$1 = (function (){var statearr_14650 = state_14623;
(statearr_14650[(20)] = inst_14565__$1);

(statearr_14650[(9)] = inst_14564__$1);

(statearr_14650[(21)] = inst_14563__$1);

(statearr_14650[(22)] = inst_14578);

(statearr_14650[(12)] = inst_14566__$1);

return statearr_14650;
})();
var statearr_14651_14725 = state_14623__$1;
(statearr_14651_14725[(2)] = null);

(statearr_14651_14725[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (40))){
var inst_14591 = (state_14623[(23)]);
var inst_14595 = done.call(null,null);
var inst_14596 = cljs.core.async.untap_STAR_.call(null,m,inst_14591);
var state_14623__$1 = (function (){var statearr_14652 = state_14623;
(statearr_14652[(24)] = inst_14595);

return statearr_14652;
})();
var statearr_14653_14726 = state_14623__$1;
(statearr_14653_14726[(2)] = inst_14596);

(statearr_14653_14726[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (33))){
var inst_14582 = (state_14623[(25)]);
var inst_14584 = cljs.core.chunked_seq_QMARK_.call(null,inst_14582);
var state_14623__$1 = state_14623;
if(inst_14584){
var statearr_14654_14727 = state_14623__$1;
(statearr_14654_14727[(1)] = (36));

} else {
var statearr_14655_14728 = state_14623__$1;
(statearr_14655_14728[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (13))){
var inst_14514 = (state_14623[(26)]);
var inst_14517 = cljs.core.async.close_BANG_.call(null,inst_14514);
var state_14623__$1 = state_14623;
var statearr_14656_14729 = state_14623__$1;
(statearr_14656_14729[(2)] = inst_14517);

(statearr_14656_14729[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (22))){
var inst_14535 = (state_14623[(8)]);
var inst_14538 = cljs.core.async.close_BANG_.call(null,inst_14535);
var state_14623__$1 = state_14623;
var statearr_14657_14730 = state_14623__$1;
(statearr_14657_14730[(2)] = inst_14538);

(statearr_14657_14730[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (36))){
var inst_14582 = (state_14623[(25)]);
var inst_14586 = cljs.core.chunk_first.call(null,inst_14582);
var inst_14587 = cljs.core.chunk_rest.call(null,inst_14582);
var inst_14588 = cljs.core.count.call(null,inst_14586);
var inst_14563 = inst_14587;
var inst_14564 = inst_14586;
var inst_14565 = inst_14588;
var inst_14566 = (0);
var state_14623__$1 = (function (){var statearr_14658 = state_14623;
(statearr_14658[(20)] = inst_14565);

(statearr_14658[(9)] = inst_14564);

(statearr_14658[(21)] = inst_14563);

(statearr_14658[(12)] = inst_14566);

return statearr_14658;
})();
var statearr_14659_14731 = state_14623__$1;
(statearr_14659_14731[(2)] = null);

(statearr_14659_14731[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (41))){
var inst_14582 = (state_14623[(25)]);
var inst_14598 = (state_14623[(2)]);
var inst_14599 = cljs.core.next.call(null,inst_14582);
var inst_14563 = inst_14599;
var inst_14564 = null;
var inst_14565 = (0);
var inst_14566 = (0);
var state_14623__$1 = (function (){var statearr_14660 = state_14623;
(statearr_14660[(20)] = inst_14565);

(statearr_14660[(9)] = inst_14564);

(statearr_14660[(21)] = inst_14563);

(statearr_14660[(27)] = inst_14598);

(statearr_14660[(12)] = inst_14566);

return statearr_14660;
})();
var statearr_14661_14732 = state_14623__$1;
(statearr_14661_14732[(2)] = null);

(statearr_14661_14732[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (43))){
var state_14623__$1 = state_14623;
var statearr_14662_14733 = state_14623__$1;
(statearr_14662_14733[(2)] = null);

(statearr_14662_14733[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (29))){
var inst_14607 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14663_14734 = state_14623__$1;
(statearr_14663_14734[(2)] = inst_14607);

(statearr_14663_14734[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (44))){
var inst_14616 = (state_14623[(2)]);
var state_14623__$1 = (function (){var statearr_14664 = state_14623;
(statearr_14664[(28)] = inst_14616);

return statearr_14664;
})();
var statearr_14665_14735 = state_14623__$1;
(statearr_14665_14735[(2)] = null);

(statearr_14665_14735[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (6))){
var inst_14555 = (state_14623[(29)]);
var inst_14554 = cljs.core.deref.call(null,cs);
var inst_14555__$1 = cljs.core.keys.call(null,inst_14554);
var inst_14556 = cljs.core.count.call(null,inst_14555__$1);
var inst_14557 = cljs.core.reset_BANG_.call(null,dctr,inst_14556);
var inst_14562 = cljs.core.seq.call(null,inst_14555__$1);
var inst_14563 = inst_14562;
var inst_14564 = null;
var inst_14565 = (0);
var inst_14566 = (0);
var state_14623__$1 = (function (){var statearr_14666 = state_14623;
(statearr_14666[(20)] = inst_14565);

(statearr_14666[(30)] = inst_14557);

(statearr_14666[(9)] = inst_14564);

(statearr_14666[(21)] = inst_14563);

(statearr_14666[(29)] = inst_14555__$1);

(statearr_14666[(12)] = inst_14566);

return statearr_14666;
})();
var statearr_14667_14736 = state_14623__$1;
(statearr_14667_14736[(2)] = null);

(statearr_14667_14736[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (28))){
var inst_14563 = (state_14623[(21)]);
var inst_14582 = (state_14623[(25)]);
var inst_14582__$1 = cljs.core.seq.call(null,inst_14563);
var state_14623__$1 = (function (){var statearr_14668 = state_14623;
(statearr_14668[(25)] = inst_14582__$1);

return statearr_14668;
})();
if(inst_14582__$1){
var statearr_14669_14737 = state_14623__$1;
(statearr_14669_14737[(1)] = (33));

} else {
var statearr_14670_14738 = state_14623__$1;
(statearr_14670_14738[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (25))){
var inst_14565 = (state_14623[(20)]);
var inst_14566 = (state_14623[(12)]);
var inst_14568 = (inst_14566 < inst_14565);
var inst_14569 = inst_14568;
var state_14623__$1 = state_14623;
if(cljs.core.truth_(inst_14569)){
var statearr_14671_14739 = state_14623__$1;
(statearr_14671_14739[(1)] = (27));

} else {
var statearr_14672_14740 = state_14623__$1;
(statearr_14672_14740[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (34))){
var state_14623__$1 = state_14623;
var statearr_14673_14741 = state_14623__$1;
(statearr_14673_14741[(2)] = null);

(statearr_14673_14741[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (17))){
var state_14623__$1 = state_14623;
var statearr_14674_14742 = state_14623__$1;
(statearr_14674_14742[(2)] = null);

(statearr_14674_14742[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (3))){
var inst_14621 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14623__$1,inst_14621);
} else {
if((state_val_14624 === (12))){
var inst_14550 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14675_14743 = state_14623__$1;
(statearr_14675_14743[(2)] = inst_14550);

(statearr_14675_14743[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (2))){
var state_14623__$1 = state_14623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14623__$1,(4),ch);
} else {
if((state_val_14624 === (23))){
var state_14623__$1 = state_14623;
var statearr_14676_14744 = state_14623__$1;
(statearr_14676_14744[(2)] = null);

(statearr_14676_14744[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (35))){
var inst_14605 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14677_14745 = state_14623__$1;
(statearr_14677_14745[(2)] = inst_14605);

(statearr_14677_14745[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (19))){
var inst_14524 = (state_14623[(7)]);
var inst_14528 = cljs.core.chunk_first.call(null,inst_14524);
var inst_14529 = cljs.core.chunk_rest.call(null,inst_14524);
var inst_14530 = cljs.core.count.call(null,inst_14528);
var inst_14504 = inst_14529;
var inst_14505 = inst_14528;
var inst_14506 = inst_14530;
var inst_14507 = (0);
var state_14623__$1 = (function (){var statearr_14678 = state_14623;
(statearr_14678[(13)] = inst_14506);

(statearr_14678[(14)] = inst_14507);

(statearr_14678[(15)] = inst_14505);

(statearr_14678[(16)] = inst_14504);

return statearr_14678;
})();
var statearr_14679_14746 = state_14623__$1;
(statearr_14679_14746[(2)] = null);

(statearr_14679_14746[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (11))){
var inst_14524 = (state_14623[(7)]);
var inst_14504 = (state_14623[(16)]);
var inst_14524__$1 = cljs.core.seq.call(null,inst_14504);
var state_14623__$1 = (function (){var statearr_14680 = state_14623;
(statearr_14680[(7)] = inst_14524__$1);

return statearr_14680;
})();
if(inst_14524__$1){
var statearr_14681_14747 = state_14623__$1;
(statearr_14681_14747[(1)] = (16));

} else {
var statearr_14682_14748 = state_14623__$1;
(statearr_14682_14748[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (9))){
var inst_14552 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14683_14749 = state_14623__$1;
(statearr_14683_14749[(2)] = inst_14552);

(statearr_14683_14749[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (5))){
var inst_14502 = cljs.core.deref.call(null,cs);
var inst_14503 = cljs.core.seq.call(null,inst_14502);
var inst_14504 = inst_14503;
var inst_14505 = null;
var inst_14506 = (0);
var inst_14507 = (0);
var state_14623__$1 = (function (){var statearr_14684 = state_14623;
(statearr_14684[(13)] = inst_14506);

(statearr_14684[(14)] = inst_14507);

(statearr_14684[(15)] = inst_14505);

(statearr_14684[(16)] = inst_14504);

return statearr_14684;
})();
var statearr_14685_14750 = state_14623__$1;
(statearr_14685_14750[(2)] = null);

(statearr_14685_14750[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (14))){
var state_14623__$1 = state_14623;
var statearr_14686_14751 = state_14623__$1;
(statearr_14686_14751[(2)] = null);

(statearr_14686_14751[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (45))){
var inst_14613 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14687_14752 = state_14623__$1;
(statearr_14687_14752[(2)] = inst_14613);

(statearr_14687_14752[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (26))){
var inst_14555 = (state_14623[(29)]);
var inst_14609 = (state_14623[(2)]);
var inst_14610 = cljs.core.seq.call(null,inst_14555);
var state_14623__$1 = (function (){var statearr_14688 = state_14623;
(statearr_14688[(31)] = inst_14609);

return statearr_14688;
})();
if(inst_14610){
var statearr_14689_14753 = state_14623__$1;
(statearr_14689_14753[(1)] = (42));

} else {
var statearr_14690_14754 = state_14623__$1;
(statearr_14690_14754[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (16))){
var inst_14524 = (state_14623[(7)]);
var inst_14526 = cljs.core.chunked_seq_QMARK_.call(null,inst_14524);
var state_14623__$1 = state_14623;
if(inst_14526){
var statearr_14691_14755 = state_14623__$1;
(statearr_14691_14755[(1)] = (19));

} else {
var statearr_14692_14756 = state_14623__$1;
(statearr_14692_14756[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (38))){
var inst_14602 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14693_14757 = state_14623__$1;
(statearr_14693_14757[(2)] = inst_14602);

(statearr_14693_14757[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (30))){
var state_14623__$1 = state_14623;
var statearr_14694_14758 = state_14623__$1;
(statearr_14694_14758[(2)] = null);

(statearr_14694_14758[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (10))){
var inst_14507 = (state_14623[(14)]);
var inst_14505 = (state_14623[(15)]);
var inst_14513 = cljs.core._nth.call(null,inst_14505,inst_14507);
var inst_14514 = cljs.core.nth.call(null,inst_14513,(0),null);
var inst_14515 = cljs.core.nth.call(null,inst_14513,(1),null);
var state_14623__$1 = (function (){var statearr_14695 = state_14623;
(statearr_14695[(26)] = inst_14514);

return statearr_14695;
})();
if(cljs.core.truth_(inst_14515)){
var statearr_14696_14759 = state_14623__$1;
(statearr_14696_14759[(1)] = (13));

} else {
var statearr_14697_14760 = state_14623__$1;
(statearr_14697_14760[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (18))){
var inst_14548 = (state_14623[(2)]);
var state_14623__$1 = state_14623;
var statearr_14698_14761 = state_14623__$1;
(statearr_14698_14761[(2)] = inst_14548);

(statearr_14698_14761[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (42))){
var state_14623__$1 = state_14623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14623__$1,(45),dchan);
} else {
if((state_val_14624 === (37))){
var inst_14591 = (state_14623[(23)]);
var inst_14495 = (state_14623[(11)]);
var inst_14582 = (state_14623[(25)]);
var inst_14591__$1 = cljs.core.first.call(null,inst_14582);
var inst_14592 = cljs.core.async.put_BANG_.call(null,inst_14591__$1,inst_14495,done);
var state_14623__$1 = (function (){var statearr_14699 = state_14623;
(statearr_14699[(23)] = inst_14591__$1);

return statearr_14699;
})();
if(cljs.core.truth_(inst_14592)){
var statearr_14700_14762 = state_14623__$1;
(statearr_14700_14762[(1)] = (39));

} else {
var statearr_14701_14763 = state_14623__$1;
(statearr_14701_14763[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14624 === (8))){
var inst_14506 = (state_14623[(13)]);
var inst_14507 = (state_14623[(14)]);
var inst_14509 = (inst_14507 < inst_14506);
var inst_14510 = inst_14509;
var state_14623__$1 = state_14623;
if(cljs.core.truth_(inst_14510)){
var statearr_14702_14764 = state_14623__$1;
(statearr_14702_14764[(1)] = (10));

} else {
var statearr_14703_14765 = state_14623__$1;
(statearr_14703_14765[(1)] = (11));

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
});})(c__8543__auto___14711,cs,m,dchan,dctr,done))
;
return ((function (switch__8478__auto__,c__8543__auto___14711,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8479__auto__ = null;
var cljs$core$async$mult_$_state_machine__8479__auto____0 = (function (){
var statearr_14707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14707[(0)] = cljs$core$async$mult_$_state_machine__8479__auto__);

(statearr_14707[(1)] = (1));

return statearr_14707;
});
var cljs$core$async$mult_$_state_machine__8479__auto____1 = (function (state_14623){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14708){if((e14708 instanceof Object)){
var ex__8482__auto__ = e14708;
var statearr_14709_14766 = state_14623;
(statearr_14709_14766[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14708;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14767 = state_14623;
state_14623 = G__14767;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8479__auto__ = function(state_14623){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8479__auto____1.call(this,state_14623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8479__auto____0;
cljs$core$async$mult_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8479__auto____1;
return cljs$core$async$mult_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14711,cs,m,dchan,dctr,done))
})();
var state__8545__auto__ = (function (){var statearr_14710 = f__8544__auto__.call(null);
(statearr_14710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14711);

return statearr_14710;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14711,cs,m,dchan,dctr,done))
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
var args14768 = [];
var len__6152__auto___14771 = arguments.length;
var i__6153__auto___14772 = (0);
while(true){
if((i__6153__auto___14772 < len__6152__auto___14771)){
args14768.push((arguments[i__6153__auto___14772]));

var G__14773 = (i__6153__auto___14772 + (1));
i__6153__auto___14772 = G__14773;
continue;
} else {
}
break;
}

var G__14770 = args14768.length;
switch (G__14770) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14768.length)].join('')));

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
var len__6152__auto___14785 = arguments.length;
var i__6153__auto___14786 = (0);
while(true){
if((i__6153__auto___14786 < len__6152__auto___14785)){
args__6159__auto__.push((arguments[i__6153__auto___14786]));

var G__14787 = (i__6153__auto___14786 + (1));
i__6153__auto___14786 = G__14787;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14779){
var map__14780 = p__14779;
var map__14780__$1 = ((((!((map__14780 == null)))?((((map__14780.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14780.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14780):map__14780);
var opts = map__14780__$1;
var statearr_14782_14788 = state;
(statearr_14782_14788[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__14780,map__14780__$1,opts){
return (function (val){
var statearr_14783_14789 = state;
(statearr_14783_14789[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14780,map__14780__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14784_14790 = state;
(statearr_14784_14790[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14775){
var G__14776 = cljs.core.first.call(null,seq14775);
var seq14775__$1 = cljs.core.next.call(null,seq14775);
var G__14777 = cljs.core.first.call(null,seq14775__$1);
var seq14775__$2 = cljs.core.next.call(null,seq14775__$1);
var G__14778 = cljs.core.first.call(null,seq14775__$2);
var seq14775__$3 = cljs.core.next.call(null,seq14775__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14776,G__14777,G__14778,seq14775__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14954 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14954 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14955){
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
this.meta14955 = meta14955;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14956,meta14955__$1){
var self__ = this;
var _14956__$1 = this;
return (new cljs.core.async.t_cljs$core$async14954(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14955__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14956){
var self__ = this;
var _14956__$1 = this;
return self__.meta14955;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14954.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14954.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14955","meta14955",-907983719,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14954.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14954.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14954";

cljs.core.async.t_cljs$core$async14954.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async14954");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14954 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14955){
return (new cljs.core.async.t_cljs$core$async14954(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14955));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14954(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8543__auto___15117 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15054){
var state_val_15055 = (state_15054[(1)]);
if((state_val_15055 === (7))){
var inst_14972 = (state_15054[(2)]);
var state_15054__$1 = state_15054;
var statearr_15056_15118 = state_15054__$1;
(statearr_15056_15118[(2)] = inst_14972);

(statearr_15056_15118[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (20))){
var inst_14984 = (state_15054[(7)]);
var state_15054__$1 = state_15054;
var statearr_15057_15119 = state_15054__$1;
(statearr_15057_15119[(2)] = inst_14984);

(statearr_15057_15119[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (27))){
var state_15054__$1 = state_15054;
var statearr_15058_15120 = state_15054__$1;
(statearr_15058_15120[(2)] = null);

(statearr_15058_15120[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (1))){
var inst_14960 = (state_15054[(8)]);
var inst_14960__$1 = calc_state.call(null);
var inst_14962 = (inst_14960__$1 == null);
var inst_14963 = cljs.core.not.call(null,inst_14962);
var state_15054__$1 = (function (){var statearr_15059 = state_15054;
(statearr_15059[(8)] = inst_14960__$1);

return statearr_15059;
})();
if(inst_14963){
var statearr_15060_15121 = state_15054__$1;
(statearr_15060_15121[(1)] = (2));

} else {
var statearr_15061_15122 = state_15054__$1;
(statearr_15061_15122[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (24))){
var inst_15014 = (state_15054[(9)]);
var inst_15028 = (state_15054[(10)]);
var inst_15007 = (state_15054[(11)]);
var inst_15028__$1 = inst_15007.call(null,inst_15014);
var state_15054__$1 = (function (){var statearr_15062 = state_15054;
(statearr_15062[(10)] = inst_15028__$1);

return statearr_15062;
})();
if(cljs.core.truth_(inst_15028__$1)){
var statearr_15063_15123 = state_15054__$1;
(statearr_15063_15123[(1)] = (29));

} else {
var statearr_15064_15124 = state_15054__$1;
(statearr_15064_15124[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (4))){
var inst_14975 = (state_15054[(2)]);
var state_15054__$1 = state_15054;
if(cljs.core.truth_(inst_14975)){
var statearr_15065_15125 = state_15054__$1;
(statearr_15065_15125[(1)] = (8));

} else {
var statearr_15066_15126 = state_15054__$1;
(statearr_15066_15126[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (15))){
var inst_15001 = (state_15054[(2)]);
var state_15054__$1 = state_15054;
if(cljs.core.truth_(inst_15001)){
var statearr_15067_15127 = state_15054__$1;
(statearr_15067_15127[(1)] = (19));

} else {
var statearr_15068_15128 = state_15054__$1;
(statearr_15068_15128[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (21))){
var inst_15006 = (state_15054[(12)]);
var inst_15006__$1 = (state_15054[(2)]);
var inst_15007 = cljs.core.get.call(null,inst_15006__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15008 = cljs.core.get.call(null,inst_15006__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15009 = cljs.core.get.call(null,inst_15006__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15054__$1 = (function (){var statearr_15069 = state_15054;
(statearr_15069[(11)] = inst_15007);

(statearr_15069[(12)] = inst_15006__$1);

(statearr_15069[(13)] = inst_15008);

return statearr_15069;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15054__$1,(22),inst_15009);
} else {
if((state_val_15055 === (31))){
var inst_15036 = (state_15054[(2)]);
var state_15054__$1 = state_15054;
if(cljs.core.truth_(inst_15036)){
var statearr_15070_15129 = state_15054__$1;
(statearr_15070_15129[(1)] = (32));

} else {
var statearr_15071_15130 = state_15054__$1;
(statearr_15071_15130[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (32))){
var inst_15013 = (state_15054[(14)]);
var state_15054__$1 = state_15054;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15054__$1,(35),out,inst_15013);
} else {
if((state_val_15055 === (33))){
var inst_15006 = (state_15054[(12)]);
var inst_14984 = inst_15006;
var state_15054__$1 = (function (){var statearr_15072 = state_15054;
(statearr_15072[(7)] = inst_14984);

return statearr_15072;
})();
var statearr_15073_15131 = state_15054__$1;
(statearr_15073_15131[(2)] = null);

(statearr_15073_15131[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (13))){
var inst_14984 = (state_15054[(7)]);
var inst_14991 = inst_14984.cljs$lang$protocol_mask$partition0$;
var inst_14992 = (inst_14991 & (64));
var inst_14993 = inst_14984.cljs$core$ISeq$;
var inst_14994 = (inst_14992) || (inst_14993);
var state_15054__$1 = state_15054;
if(cljs.core.truth_(inst_14994)){
var statearr_15074_15132 = state_15054__$1;
(statearr_15074_15132[(1)] = (16));

} else {
var statearr_15075_15133 = state_15054__$1;
(statearr_15075_15133[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (22))){
var inst_15014 = (state_15054[(9)]);
var inst_15013 = (state_15054[(14)]);
var inst_15012 = (state_15054[(2)]);
var inst_15013__$1 = cljs.core.nth.call(null,inst_15012,(0),null);
var inst_15014__$1 = cljs.core.nth.call(null,inst_15012,(1),null);
var inst_15015 = (inst_15013__$1 == null);
var inst_15016 = cljs.core._EQ_.call(null,inst_15014__$1,change);
var inst_15017 = (inst_15015) || (inst_15016);
var state_15054__$1 = (function (){var statearr_15076 = state_15054;
(statearr_15076[(9)] = inst_15014__$1);

(statearr_15076[(14)] = inst_15013__$1);

return statearr_15076;
})();
if(cljs.core.truth_(inst_15017)){
var statearr_15077_15134 = state_15054__$1;
(statearr_15077_15134[(1)] = (23));

} else {
var statearr_15078_15135 = state_15054__$1;
(statearr_15078_15135[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (36))){
var inst_15006 = (state_15054[(12)]);
var inst_14984 = inst_15006;
var state_15054__$1 = (function (){var statearr_15079 = state_15054;
(statearr_15079[(7)] = inst_14984);

return statearr_15079;
})();
var statearr_15080_15136 = state_15054__$1;
(statearr_15080_15136[(2)] = null);

(statearr_15080_15136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (29))){
var inst_15028 = (state_15054[(10)]);
var state_15054__$1 = state_15054;
var statearr_15081_15137 = state_15054__$1;
(statearr_15081_15137[(2)] = inst_15028);

(statearr_15081_15137[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (6))){
var state_15054__$1 = state_15054;
var statearr_15082_15138 = state_15054__$1;
(statearr_15082_15138[(2)] = false);

(statearr_15082_15138[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (28))){
var inst_15024 = (state_15054[(2)]);
var inst_15025 = calc_state.call(null);
var inst_14984 = inst_15025;
var state_15054__$1 = (function (){var statearr_15083 = state_15054;
(statearr_15083[(15)] = inst_15024);

(statearr_15083[(7)] = inst_14984);

return statearr_15083;
})();
var statearr_15084_15139 = state_15054__$1;
(statearr_15084_15139[(2)] = null);

(statearr_15084_15139[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (25))){
var inst_15050 = (state_15054[(2)]);
var state_15054__$1 = state_15054;
var statearr_15085_15140 = state_15054__$1;
(statearr_15085_15140[(2)] = inst_15050);

(statearr_15085_15140[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (34))){
var inst_15048 = (state_15054[(2)]);
var state_15054__$1 = state_15054;
var statearr_15086_15141 = state_15054__$1;
(statearr_15086_15141[(2)] = inst_15048);

(statearr_15086_15141[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (17))){
var state_15054__$1 = state_15054;
var statearr_15087_15142 = state_15054__$1;
(statearr_15087_15142[(2)] = false);

(statearr_15087_15142[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (3))){
var state_15054__$1 = state_15054;
var statearr_15088_15143 = state_15054__$1;
(statearr_15088_15143[(2)] = false);

(statearr_15088_15143[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (12))){
var inst_15052 = (state_15054[(2)]);
var state_15054__$1 = state_15054;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15054__$1,inst_15052);
} else {
if((state_val_15055 === (2))){
var inst_14960 = (state_15054[(8)]);
var inst_14965 = inst_14960.cljs$lang$protocol_mask$partition0$;
var inst_14966 = (inst_14965 & (64));
var inst_14967 = inst_14960.cljs$core$ISeq$;
var inst_14968 = (inst_14966) || (inst_14967);
var state_15054__$1 = state_15054;
if(cljs.core.truth_(inst_14968)){
var statearr_15089_15144 = state_15054__$1;
(statearr_15089_15144[(1)] = (5));

} else {
var statearr_15090_15145 = state_15054__$1;
(statearr_15090_15145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (23))){
var inst_15013 = (state_15054[(14)]);
var inst_15019 = (inst_15013 == null);
var state_15054__$1 = state_15054;
if(cljs.core.truth_(inst_15019)){
var statearr_15091_15146 = state_15054__$1;
(statearr_15091_15146[(1)] = (26));

} else {
var statearr_15092_15147 = state_15054__$1;
(statearr_15092_15147[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (35))){
var inst_15039 = (state_15054[(2)]);
var state_15054__$1 = state_15054;
if(cljs.core.truth_(inst_15039)){
var statearr_15093_15148 = state_15054__$1;
(statearr_15093_15148[(1)] = (36));

} else {
var statearr_15094_15149 = state_15054__$1;
(statearr_15094_15149[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (19))){
var inst_14984 = (state_15054[(7)]);
var inst_15003 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14984);
var state_15054__$1 = state_15054;
var statearr_15095_15150 = state_15054__$1;
(statearr_15095_15150[(2)] = inst_15003);

(statearr_15095_15150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (11))){
var inst_14984 = (state_15054[(7)]);
var inst_14988 = (inst_14984 == null);
var inst_14989 = cljs.core.not.call(null,inst_14988);
var state_15054__$1 = state_15054;
if(inst_14989){
var statearr_15096_15151 = state_15054__$1;
(statearr_15096_15151[(1)] = (13));

} else {
var statearr_15097_15152 = state_15054__$1;
(statearr_15097_15152[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (9))){
var inst_14960 = (state_15054[(8)]);
var state_15054__$1 = state_15054;
var statearr_15098_15153 = state_15054__$1;
(statearr_15098_15153[(2)] = inst_14960);

(statearr_15098_15153[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (5))){
var state_15054__$1 = state_15054;
var statearr_15099_15154 = state_15054__$1;
(statearr_15099_15154[(2)] = true);

(statearr_15099_15154[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (14))){
var state_15054__$1 = state_15054;
var statearr_15100_15155 = state_15054__$1;
(statearr_15100_15155[(2)] = false);

(statearr_15100_15155[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (26))){
var inst_15014 = (state_15054[(9)]);
var inst_15021 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15014);
var state_15054__$1 = state_15054;
var statearr_15101_15156 = state_15054__$1;
(statearr_15101_15156[(2)] = inst_15021);

(statearr_15101_15156[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (16))){
var state_15054__$1 = state_15054;
var statearr_15102_15157 = state_15054__$1;
(statearr_15102_15157[(2)] = true);

(statearr_15102_15157[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (38))){
var inst_15044 = (state_15054[(2)]);
var state_15054__$1 = state_15054;
var statearr_15103_15158 = state_15054__$1;
(statearr_15103_15158[(2)] = inst_15044);

(statearr_15103_15158[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (30))){
var inst_15014 = (state_15054[(9)]);
var inst_15007 = (state_15054[(11)]);
var inst_15008 = (state_15054[(13)]);
var inst_15031 = cljs.core.empty_QMARK_.call(null,inst_15007);
var inst_15032 = inst_15008.call(null,inst_15014);
var inst_15033 = cljs.core.not.call(null,inst_15032);
var inst_15034 = (inst_15031) && (inst_15033);
var state_15054__$1 = state_15054;
var statearr_15104_15159 = state_15054__$1;
(statearr_15104_15159[(2)] = inst_15034);

(statearr_15104_15159[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (10))){
var inst_14960 = (state_15054[(8)]);
var inst_14980 = (state_15054[(2)]);
var inst_14981 = cljs.core.get.call(null,inst_14980,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_14982 = cljs.core.get.call(null,inst_14980,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_14983 = cljs.core.get.call(null,inst_14980,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_14984 = inst_14960;
var state_15054__$1 = (function (){var statearr_15105 = state_15054;
(statearr_15105[(16)] = inst_14983);

(statearr_15105[(17)] = inst_14982);

(statearr_15105[(7)] = inst_14984);

(statearr_15105[(18)] = inst_14981);

return statearr_15105;
})();
var statearr_15106_15160 = state_15054__$1;
(statearr_15106_15160[(2)] = null);

(statearr_15106_15160[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (18))){
var inst_14998 = (state_15054[(2)]);
var state_15054__$1 = state_15054;
var statearr_15107_15161 = state_15054__$1;
(statearr_15107_15161[(2)] = inst_14998);

(statearr_15107_15161[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (37))){
var state_15054__$1 = state_15054;
var statearr_15108_15162 = state_15054__$1;
(statearr_15108_15162[(2)] = null);

(statearr_15108_15162[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15055 === (8))){
var inst_14960 = (state_15054[(8)]);
var inst_14977 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14960);
var state_15054__$1 = state_15054;
var statearr_15109_15163 = state_15054__$1;
(statearr_15109_15163[(2)] = inst_14977);

(statearr_15109_15163[(1)] = (10));


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
});})(c__8543__auto___15117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8478__auto__,c__8543__auto___15117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8479__auto__ = null;
var cljs$core$async$mix_$_state_machine__8479__auto____0 = (function (){
var statearr_15113 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15113[(0)] = cljs$core$async$mix_$_state_machine__8479__auto__);

(statearr_15113[(1)] = (1));

return statearr_15113;
});
var cljs$core$async$mix_$_state_machine__8479__auto____1 = (function (state_15054){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15054);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15114){if((e15114 instanceof Object)){
var ex__8482__auto__ = e15114;
var statearr_15115_15164 = state_15054;
(statearr_15115_15164[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15054);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15114;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15165 = state_15054;
state_15054 = G__15165;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8479__auto__ = function(state_15054){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8479__auto____1.call(this,state_15054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8479__auto____0;
cljs$core$async$mix_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8479__auto____1;
return cljs$core$async$mix_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8545__auto__ = (function (){var statearr_15116 = f__8544__auto__.call(null);
(statearr_15116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15117);

return statearr_15116;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15117,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args15166 = [];
var len__6152__auto___15169 = arguments.length;
var i__6153__auto___15170 = (0);
while(true){
if((i__6153__auto___15170 < len__6152__auto___15169)){
args15166.push((arguments[i__6153__auto___15170]));

var G__15171 = (i__6153__auto___15170 + (1));
i__6153__auto___15170 = G__15171;
continue;
} else {
}
break;
}

var G__15168 = args15166.length;
switch (G__15168) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15166.length)].join('')));

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
var args15174 = [];
var len__6152__auto___15299 = arguments.length;
var i__6153__auto___15300 = (0);
while(true){
if((i__6153__auto___15300 < len__6152__auto___15299)){
args15174.push((arguments[i__6153__auto___15300]));

var G__15301 = (i__6153__auto___15300 + (1));
i__6153__auto___15300 = G__15301;
continue;
} else {
}
break;
}

var G__15176 = args15174.length;
switch (G__15176) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15174.length)].join('')));

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
return (function (p1__15173_SHARP_){
if(cljs.core.truth_(p1__15173_SHARP_.call(null,topic))){
return p1__15173_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15173_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15177 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15177 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15178){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15178 = meta15178;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15177.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15179,meta15178__$1){
var self__ = this;
var _15179__$1 = this;
return (new cljs.core.async.t_cljs$core$async15177(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15178__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15177.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15179){
var self__ = this;
var _15179__$1 = this;
return self__.meta15178;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15177.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15177.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15177.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15177.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15177.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async15177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15177.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15177.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15178","meta15178",494343643,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15177.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15177.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15177";

cljs.core.async.t_cljs$core$async15177.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15177");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15177 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15178){
return (new cljs.core.async.t_cljs$core$async15177(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15178));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15177(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8543__auto___15303 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15303,mults,ensure_mult,p){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15303,mults,ensure_mult,p){
return (function (state_15251){
var state_val_15252 = (state_15251[(1)]);
if((state_val_15252 === (7))){
var inst_15247 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15253_15304 = state_15251__$1;
(statearr_15253_15304[(2)] = inst_15247);

(statearr_15253_15304[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (20))){
var state_15251__$1 = state_15251;
var statearr_15254_15305 = state_15251__$1;
(statearr_15254_15305[(2)] = null);

(statearr_15254_15305[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (1))){
var state_15251__$1 = state_15251;
var statearr_15255_15306 = state_15251__$1;
(statearr_15255_15306[(2)] = null);

(statearr_15255_15306[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (24))){
var inst_15230 = (state_15251[(7)]);
var inst_15239 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15230);
var state_15251__$1 = state_15251;
var statearr_15256_15307 = state_15251__$1;
(statearr_15256_15307[(2)] = inst_15239);

(statearr_15256_15307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (4))){
var inst_15182 = (state_15251[(8)]);
var inst_15182__$1 = (state_15251[(2)]);
var inst_15183 = (inst_15182__$1 == null);
var state_15251__$1 = (function (){var statearr_15257 = state_15251;
(statearr_15257[(8)] = inst_15182__$1);

return statearr_15257;
})();
if(cljs.core.truth_(inst_15183)){
var statearr_15258_15308 = state_15251__$1;
(statearr_15258_15308[(1)] = (5));

} else {
var statearr_15259_15309 = state_15251__$1;
(statearr_15259_15309[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (15))){
var inst_15224 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15260_15310 = state_15251__$1;
(statearr_15260_15310[(2)] = inst_15224);

(statearr_15260_15310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (21))){
var inst_15244 = (state_15251[(2)]);
var state_15251__$1 = (function (){var statearr_15261 = state_15251;
(statearr_15261[(9)] = inst_15244);

return statearr_15261;
})();
var statearr_15262_15311 = state_15251__$1;
(statearr_15262_15311[(2)] = null);

(statearr_15262_15311[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (13))){
var inst_15206 = (state_15251[(10)]);
var inst_15208 = cljs.core.chunked_seq_QMARK_.call(null,inst_15206);
var state_15251__$1 = state_15251;
if(inst_15208){
var statearr_15263_15312 = state_15251__$1;
(statearr_15263_15312[(1)] = (16));

} else {
var statearr_15264_15313 = state_15251__$1;
(statearr_15264_15313[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (22))){
var inst_15236 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
if(cljs.core.truth_(inst_15236)){
var statearr_15265_15314 = state_15251__$1;
(statearr_15265_15314[(1)] = (23));

} else {
var statearr_15266_15315 = state_15251__$1;
(statearr_15266_15315[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (6))){
var inst_15182 = (state_15251[(8)]);
var inst_15230 = (state_15251[(7)]);
var inst_15232 = (state_15251[(11)]);
var inst_15230__$1 = topic_fn.call(null,inst_15182);
var inst_15231 = cljs.core.deref.call(null,mults);
var inst_15232__$1 = cljs.core.get.call(null,inst_15231,inst_15230__$1);
var state_15251__$1 = (function (){var statearr_15267 = state_15251;
(statearr_15267[(7)] = inst_15230__$1);

(statearr_15267[(11)] = inst_15232__$1);

return statearr_15267;
})();
if(cljs.core.truth_(inst_15232__$1)){
var statearr_15268_15316 = state_15251__$1;
(statearr_15268_15316[(1)] = (19));

} else {
var statearr_15269_15317 = state_15251__$1;
(statearr_15269_15317[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (25))){
var inst_15241 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15270_15318 = state_15251__$1;
(statearr_15270_15318[(2)] = inst_15241);

(statearr_15270_15318[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (17))){
var inst_15206 = (state_15251[(10)]);
var inst_15215 = cljs.core.first.call(null,inst_15206);
var inst_15216 = cljs.core.async.muxch_STAR_.call(null,inst_15215);
var inst_15217 = cljs.core.async.close_BANG_.call(null,inst_15216);
var inst_15218 = cljs.core.next.call(null,inst_15206);
var inst_15192 = inst_15218;
var inst_15193 = null;
var inst_15194 = (0);
var inst_15195 = (0);
var state_15251__$1 = (function (){var statearr_15271 = state_15251;
(statearr_15271[(12)] = inst_15195);

(statearr_15271[(13)] = inst_15192);

(statearr_15271[(14)] = inst_15217);

(statearr_15271[(15)] = inst_15194);

(statearr_15271[(16)] = inst_15193);

return statearr_15271;
})();
var statearr_15272_15319 = state_15251__$1;
(statearr_15272_15319[(2)] = null);

(statearr_15272_15319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (3))){
var inst_15249 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15251__$1,inst_15249);
} else {
if((state_val_15252 === (12))){
var inst_15226 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15273_15320 = state_15251__$1;
(statearr_15273_15320[(2)] = inst_15226);

(statearr_15273_15320[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (2))){
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15251__$1,(4),ch);
} else {
if((state_val_15252 === (23))){
var state_15251__$1 = state_15251;
var statearr_15274_15321 = state_15251__$1;
(statearr_15274_15321[(2)] = null);

(statearr_15274_15321[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (19))){
var inst_15182 = (state_15251[(8)]);
var inst_15232 = (state_15251[(11)]);
var inst_15234 = cljs.core.async.muxch_STAR_.call(null,inst_15232);
var state_15251__$1 = state_15251;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15251__$1,(22),inst_15234,inst_15182);
} else {
if((state_val_15252 === (11))){
var inst_15192 = (state_15251[(13)]);
var inst_15206 = (state_15251[(10)]);
var inst_15206__$1 = cljs.core.seq.call(null,inst_15192);
var state_15251__$1 = (function (){var statearr_15275 = state_15251;
(statearr_15275[(10)] = inst_15206__$1);

return statearr_15275;
})();
if(inst_15206__$1){
var statearr_15276_15322 = state_15251__$1;
(statearr_15276_15322[(1)] = (13));

} else {
var statearr_15277_15323 = state_15251__$1;
(statearr_15277_15323[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (9))){
var inst_15228 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15278_15324 = state_15251__$1;
(statearr_15278_15324[(2)] = inst_15228);

(statearr_15278_15324[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (5))){
var inst_15189 = cljs.core.deref.call(null,mults);
var inst_15190 = cljs.core.vals.call(null,inst_15189);
var inst_15191 = cljs.core.seq.call(null,inst_15190);
var inst_15192 = inst_15191;
var inst_15193 = null;
var inst_15194 = (0);
var inst_15195 = (0);
var state_15251__$1 = (function (){var statearr_15279 = state_15251;
(statearr_15279[(12)] = inst_15195);

(statearr_15279[(13)] = inst_15192);

(statearr_15279[(15)] = inst_15194);

(statearr_15279[(16)] = inst_15193);

return statearr_15279;
})();
var statearr_15280_15325 = state_15251__$1;
(statearr_15280_15325[(2)] = null);

(statearr_15280_15325[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (14))){
var state_15251__$1 = state_15251;
var statearr_15284_15326 = state_15251__$1;
(statearr_15284_15326[(2)] = null);

(statearr_15284_15326[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (16))){
var inst_15206 = (state_15251[(10)]);
var inst_15210 = cljs.core.chunk_first.call(null,inst_15206);
var inst_15211 = cljs.core.chunk_rest.call(null,inst_15206);
var inst_15212 = cljs.core.count.call(null,inst_15210);
var inst_15192 = inst_15211;
var inst_15193 = inst_15210;
var inst_15194 = inst_15212;
var inst_15195 = (0);
var state_15251__$1 = (function (){var statearr_15285 = state_15251;
(statearr_15285[(12)] = inst_15195);

(statearr_15285[(13)] = inst_15192);

(statearr_15285[(15)] = inst_15194);

(statearr_15285[(16)] = inst_15193);

return statearr_15285;
})();
var statearr_15286_15327 = state_15251__$1;
(statearr_15286_15327[(2)] = null);

(statearr_15286_15327[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (10))){
var inst_15195 = (state_15251[(12)]);
var inst_15192 = (state_15251[(13)]);
var inst_15194 = (state_15251[(15)]);
var inst_15193 = (state_15251[(16)]);
var inst_15200 = cljs.core._nth.call(null,inst_15193,inst_15195);
var inst_15201 = cljs.core.async.muxch_STAR_.call(null,inst_15200);
var inst_15202 = cljs.core.async.close_BANG_.call(null,inst_15201);
var inst_15203 = (inst_15195 + (1));
var tmp15281 = inst_15192;
var tmp15282 = inst_15194;
var tmp15283 = inst_15193;
var inst_15192__$1 = tmp15281;
var inst_15193__$1 = tmp15283;
var inst_15194__$1 = tmp15282;
var inst_15195__$1 = inst_15203;
var state_15251__$1 = (function (){var statearr_15287 = state_15251;
(statearr_15287[(12)] = inst_15195__$1);

(statearr_15287[(13)] = inst_15192__$1);

(statearr_15287[(17)] = inst_15202);

(statearr_15287[(15)] = inst_15194__$1);

(statearr_15287[(16)] = inst_15193__$1);

return statearr_15287;
})();
var statearr_15288_15328 = state_15251__$1;
(statearr_15288_15328[(2)] = null);

(statearr_15288_15328[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (18))){
var inst_15221 = (state_15251[(2)]);
var state_15251__$1 = state_15251;
var statearr_15289_15329 = state_15251__$1;
(statearr_15289_15329[(2)] = inst_15221);

(statearr_15289_15329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15252 === (8))){
var inst_15195 = (state_15251[(12)]);
var inst_15194 = (state_15251[(15)]);
var inst_15197 = (inst_15195 < inst_15194);
var inst_15198 = inst_15197;
var state_15251__$1 = state_15251;
if(cljs.core.truth_(inst_15198)){
var statearr_15290_15330 = state_15251__$1;
(statearr_15290_15330[(1)] = (10));

} else {
var statearr_15291_15331 = state_15251__$1;
(statearr_15291_15331[(1)] = (11));

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
});})(c__8543__auto___15303,mults,ensure_mult,p))
;
return ((function (switch__8478__auto__,c__8543__auto___15303,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15295 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15295[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15295[(1)] = (1));

return statearr_15295;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15251){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15296){if((e15296 instanceof Object)){
var ex__8482__auto__ = e15296;
var statearr_15297_15332 = state_15251;
(statearr_15297_15332[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15333 = state_15251;
state_15251 = G__15333;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15303,mults,ensure_mult,p))
})();
var state__8545__auto__ = (function (){var statearr_15298 = f__8544__auto__.call(null);
(statearr_15298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15303);

return statearr_15298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15303,mults,ensure_mult,p))
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
var args15334 = [];
var len__6152__auto___15337 = arguments.length;
var i__6153__auto___15338 = (0);
while(true){
if((i__6153__auto___15338 < len__6152__auto___15337)){
args15334.push((arguments[i__6153__auto___15338]));

var G__15339 = (i__6153__auto___15338 + (1));
i__6153__auto___15338 = G__15339;
continue;
} else {
}
break;
}

var G__15336 = args15334.length;
switch (G__15336) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15334.length)].join('')));

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
var args15341 = [];
var len__6152__auto___15344 = arguments.length;
var i__6153__auto___15345 = (0);
while(true){
if((i__6153__auto___15345 < len__6152__auto___15344)){
args15341.push((arguments[i__6153__auto___15345]));

var G__15346 = (i__6153__auto___15345 + (1));
i__6153__auto___15345 = G__15346;
continue;
} else {
}
break;
}

var G__15343 = args15341.length;
switch (G__15343) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15341.length)].join('')));

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
var args15348 = [];
var len__6152__auto___15419 = arguments.length;
var i__6153__auto___15420 = (0);
while(true){
if((i__6153__auto___15420 < len__6152__auto___15419)){
args15348.push((arguments[i__6153__auto___15420]));

var G__15421 = (i__6153__auto___15420 + (1));
i__6153__auto___15420 = G__15421;
continue;
} else {
}
break;
}

var G__15350 = args15348.length;
switch (G__15350) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15348.length)].join('')));

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
var c__8543__auto___15423 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15389){
var state_val_15390 = (state_15389[(1)]);
if((state_val_15390 === (7))){
var state_15389__$1 = state_15389;
var statearr_15391_15424 = state_15389__$1;
(statearr_15391_15424[(2)] = null);

(statearr_15391_15424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (1))){
var state_15389__$1 = state_15389;
var statearr_15392_15425 = state_15389__$1;
(statearr_15392_15425[(2)] = null);

(statearr_15392_15425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (4))){
var inst_15353 = (state_15389[(7)]);
var inst_15355 = (inst_15353 < cnt);
var state_15389__$1 = state_15389;
if(cljs.core.truth_(inst_15355)){
var statearr_15393_15426 = state_15389__$1;
(statearr_15393_15426[(1)] = (6));

} else {
var statearr_15394_15427 = state_15389__$1;
(statearr_15394_15427[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (15))){
var inst_15385 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
var statearr_15395_15428 = state_15389__$1;
(statearr_15395_15428[(2)] = inst_15385);

(statearr_15395_15428[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (13))){
var inst_15378 = cljs.core.async.close_BANG_.call(null,out);
var state_15389__$1 = state_15389;
var statearr_15396_15429 = state_15389__$1;
(statearr_15396_15429[(2)] = inst_15378);

(statearr_15396_15429[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (6))){
var state_15389__$1 = state_15389;
var statearr_15397_15430 = state_15389__$1;
(statearr_15397_15430[(2)] = null);

(statearr_15397_15430[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (3))){
var inst_15387 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15389__$1,inst_15387);
} else {
if((state_val_15390 === (12))){
var inst_15375 = (state_15389[(8)]);
var inst_15375__$1 = (state_15389[(2)]);
var inst_15376 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15375__$1);
var state_15389__$1 = (function (){var statearr_15398 = state_15389;
(statearr_15398[(8)] = inst_15375__$1);

return statearr_15398;
})();
if(cljs.core.truth_(inst_15376)){
var statearr_15399_15431 = state_15389__$1;
(statearr_15399_15431[(1)] = (13));

} else {
var statearr_15400_15432 = state_15389__$1;
(statearr_15400_15432[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (2))){
var inst_15352 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15353 = (0);
var state_15389__$1 = (function (){var statearr_15401 = state_15389;
(statearr_15401[(7)] = inst_15353);

(statearr_15401[(9)] = inst_15352);

return statearr_15401;
})();
var statearr_15402_15433 = state_15389__$1;
(statearr_15402_15433[(2)] = null);

(statearr_15402_15433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (11))){
var inst_15353 = (state_15389[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15389,(10),Object,null,(9));
var inst_15362 = chs__$1.call(null,inst_15353);
var inst_15363 = done.call(null,inst_15353);
var inst_15364 = cljs.core.async.take_BANG_.call(null,inst_15362,inst_15363);
var state_15389__$1 = state_15389;
var statearr_15403_15434 = state_15389__$1;
(statearr_15403_15434[(2)] = inst_15364);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15389__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (9))){
var inst_15353 = (state_15389[(7)]);
var inst_15366 = (state_15389[(2)]);
var inst_15367 = (inst_15353 + (1));
var inst_15353__$1 = inst_15367;
var state_15389__$1 = (function (){var statearr_15404 = state_15389;
(statearr_15404[(7)] = inst_15353__$1);

(statearr_15404[(10)] = inst_15366);

return statearr_15404;
})();
var statearr_15405_15435 = state_15389__$1;
(statearr_15405_15435[(2)] = null);

(statearr_15405_15435[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (5))){
var inst_15373 = (state_15389[(2)]);
var state_15389__$1 = (function (){var statearr_15406 = state_15389;
(statearr_15406[(11)] = inst_15373);

return statearr_15406;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15389__$1,(12),dchan);
} else {
if((state_val_15390 === (14))){
var inst_15375 = (state_15389[(8)]);
var inst_15380 = cljs.core.apply.call(null,f,inst_15375);
var state_15389__$1 = state_15389;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15389__$1,(16),out,inst_15380);
} else {
if((state_val_15390 === (16))){
var inst_15382 = (state_15389[(2)]);
var state_15389__$1 = (function (){var statearr_15407 = state_15389;
(statearr_15407[(12)] = inst_15382);

return statearr_15407;
})();
var statearr_15408_15436 = state_15389__$1;
(statearr_15408_15436[(2)] = null);

(statearr_15408_15436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (10))){
var inst_15357 = (state_15389[(2)]);
var inst_15358 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15389__$1 = (function (){var statearr_15409 = state_15389;
(statearr_15409[(13)] = inst_15357);

return statearr_15409;
})();
var statearr_15410_15437 = state_15389__$1;
(statearr_15410_15437[(2)] = inst_15358);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15389__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15390 === (8))){
var inst_15371 = (state_15389[(2)]);
var state_15389__$1 = state_15389;
var statearr_15411_15438 = state_15389__$1;
(statearr_15411_15438[(2)] = inst_15371);

(statearr_15411_15438[(1)] = (5));


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
});})(c__8543__auto___15423,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8478__auto__,c__8543__auto___15423,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15415 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15415[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15415[(1)] = (1));

return statearr_15415;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15389){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15389);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15416){if((e15416 instanceof Object)){
var ex__8482__auto__ = e15416;
var statearr_15417_15439 = state_15389;
(statearr_15417_15439[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15389);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15416;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15440 = state_15389;
state_15389 = G__15440;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15389){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15389);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15423,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8545__auto__ = (function (){var statearr_15418 = f__8544__auto__.call(null);
(statearr_15418[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15423);

return statearr_15418;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15423,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args15442 = [];
var len__6152__auto___15498 = arguments.length;
var i__6153__auto___15499 = (0);
while(true){
if((i__6153__auto___15499 < len__6152__auto___15498)){
args15442.push((arguments[i__6153__auto___15499]));

var G__15500 = (i__6153__auto___15499 + (1));
i__6153__auto___15499 = G__15500;
continue;
} else {
}
break;
}

var G__15444 = args15442.length;
switch (G__15444) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15442.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___15502 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15502,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15502,out){
return (function (state_15474){
var state_val_15475 = (state_15474[(1)]);
if((state_val_15475 === (7))){
var inst_15453 = (state_15474[(7)]);
var inst_15454 = (state_15474[(8)]);
var inst_15453__$1 = (state_15474[(2)]);
var inst_15454__$1 = cljs.core.nth.call(null,inst_15453__$1,(0),null);
var inst_15455 = cljs.core.nth.call(null,inst_15453__$1,(1),null);
var inst_15456 = (inst_15454__$1 == null);
var state_15474__$1 = (function (){var statearr_15476 = state_15474;
(statearr_15476[(7)] = inst_15453__$1);

(statearr_15476[(8)] = inst_15454__$1);

(statearr_15476[(9)] = inst_15455);

return statearr_15476;
})();
if(cljs.core.truth_(inst_15456)){
var statearr_15477_15503 = state_15474__$1;
(statearr_15477_15503[(1)] = (8));

} else {
var statearr_15478_15504 = state_15474__$1;
(statearr_15478_15504[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15475 === (1))){
var inst_15445 = cljs.core.vec.call(null,chs);
var inst_15446 = inst_15445;
var state_15474__$1 = (function (){var statearr_15479 = state_15474;
(statearr_15479[(10)] = inst_15446);

return statearr_15479;
})();
var statearr_15480_15505 = state_15474__$1;
(statearr_15480_15505[(2)] = null);

(statearr_15480_15505[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15475 === (4))){
var inst_15446 = (state_15474[(10)]);
var state_15474__$1 = state_15474;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15474__$1,(7),inst_15446);
} else {
if((state_val_15475 === (6))){
var inst_15470 = (state_15474[(2)]);
var state_15474__$1 = state_15474;
var statearr_15481_15506 = state_15474__$1;
(statearr_15481_15506[(2)] = inst_15470);

(statearr_15481_15506[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15475 === (3))){
var inst_15472 = (state_15474[(2)]);
var state_15474__$1 = state_15474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15474__$1,inst_15472);
} else {
if((state_val_15475 === (2))){
var inst_15446 = (state_15474[(10)]);
var inst_15448 = cljs.core.count.call(null,inst_15446);
var inst_15449 = (inst_15448 > (0));
var state_15474__$1 = state_15474;
if(cljs.core.truth_(inst_15449)){
var statearr_15483_15507 = state_15474__$1;
(statearr_15483_15507[(1)] = (4));

} else {
var statearr_15484_15508 = state_15474__$1;
(statearr_15484_15508[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15475 === (11))){
var inst_15446 = (state_15474[(10)]);
var inst_15463 = (state_15474[(2)]);
var tmp15482 = inst_15446;
var inst_15446__$1 = tmp15482;
var state_15474__$1 = (function (){var statearr_15485 = state_15474;
(statearr_15485[(10)] = inst_15446__$1);

(statearr_15485[(11)] = inst_15463);

return statearr_15485;
})();
var statearr_15486_15509 = state_15474__$1;
(statearr_15486_15509[(2)] = null);

(statearr_15486_15509[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15475 === (9))){
var inst_15454 = (state_15474[(8)]);
var state_15474__$1 = state_15474;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15474__$1,(11),out,inst_15454);
} else {
if((state_val_15475 === (5))){
var inst_15468 = cljs.core.async.close_BANG_.call(null,out);
var state_15474__$1 = state_15474;
var statearr_15487_15510 = state_15474__$1;
(statearr_15487_15510[(2)] = inst_15468);

(statearr_15487_15510[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15475 === (10))){
var inst_15466 = (state_15474[(2)]);
var state_15474__$1 = state_15474;
var statearr_15488_15511 = state_15474__$1;
(statearr_15488_15511[(2)] = inst_15466);

(statearr_15488_15511[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15475 === (8))){
var inst_15453 = (state_15474[(7)]);
var inst_15454 = (state_15474[(8)]);
var inst_15446 = (state_15474[(10)]);
var inst_15455 = (state_15474[(9)]);
var inst_15458 = (function (){var cs = inst_15446;
var vec__15451 = inst_15453;
var v = inst_15454;
var c = inst_15455;
return ((function (cs,vec__15451,v,c,inst_15453,inst_15454,inst_15446,inst_15455,state_val_15475,c__8543__auto___15502,out){
return (function (p1__15441_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15441_SHARP_);
});
;})(cs,vec__15451,v,c,inst_15453,inst_15454,inst_15446,inst_15455,state_val_15475,c__8543__auto___15502,out))
})();
var inst_15459 = cljs.core.filterv.call(null,inst_15458,inst_15446);
var inst_15446__$1 = inst_15459;
var state_15474__$1 = (function (){var statearr_15489 = state_15474;
(statearr_15489[(10)] = inst_15446__$1);

return statearr_15489;
})();
var statearr_15490_15512 = state_15474__$1;
(statearr_15490_15512[(2)] = null);

(statearr_15490_15512[(1)] = (2));


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
});})(c__8543__auto___15502,out))
;
return ((function (switch__8478__auto__,c__8543__auto___15502,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15494 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15494[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15494[(1)] = (1));

return statearr_15494;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15474){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15495){if((e15495 instanceof Object)){
var ex__8482__auto__ = e15495;
var statearr_15496_15513 = state_15474;
(statearr_15496_15513[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15495;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15514 = state_15474;
state_15474 = G__15514;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15474){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15502,out))
})();
var state__8545__auto__ = (function (){var statearr_15497 = f__8544__auto__.call(null);
(statearr_15497[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15502);

return statearr_15497;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15502,out))
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
var args15515 = [];
var len__6152__auto___15564 = arguments.length;
var i__6153__auto___15565 = (0);
while(true){
if((i__6153__auto___15565 < len__6152__auto___15564)){
args15515.push((arguments[i__6153__auto___15565]));

var G__15566 = (i__6153__auto___15565 + (1));
i__6153__auto___15565 = G__15566;
continue;
} else {
}
break;
}

var G__15517 = args15515.length;
switch (G__15517) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15515.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___15568 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15568,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15568,out){
return (function (state_15541){
var state_val_15542 = (state_15541[(1)]);
if((state_val_15542 === (7))){
var inst_15523 = (state_15541[(7)]);
var inst_15523__$1 = (state_15541[(2)]);
var inst_15524 = (inst_15523__$1 == null);
var inst_15525 = cljs.core.not.call(null,inst_15524);
var state_15541__$1 = (function (){var statearr_15543 = state_15541;
(statearr_15543[(7)] = inst_15523__$1);

return statearr_15543;
})();
if(inst_15525){
var statearr_15544_15569 = state_15541__$1;
(statearr_15544_15569[(1)] = (8));

} else {
var statearr_15545_15570 = state_15541__$1;
(statearr_15545_15570[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (1))){
var inst_15518 = (0);
var state_15541__$1 = (function (){var statearr_15546 = state_15541;
(statearr_15546[(8)] = inst_15518);

return statearr_15546;
})();
var statearr_15547_15571 = state_15541__$1;
(statearr_15547_15571[(2)] = null);

(statearr_15547_15571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (4))){
var state_15541__$1 = state_15541;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15541__$1,(7),ch);
} else {
if((state_val_15542 === (6))){
var inst_15536 = (state_15541[(2)]);
var state_15541__$1 = state_15541;
var statearr_15548_15572 = state_15541__$1;
(statearr_15548_15572[(2)] = inst_15536);

(statearr_15548_15572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (3))){
var inst_15538 = (state_15541[(2)]);
var inst_15539 = cljs.core.async.close_BANG_.call(null,out);
var state_15541__$1 = (function (){var statearr_15549 = state_15541;
(statearr_15549[(9)] = inst_15538);

return statearr_15549;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15541__$1,inst_15539);
} else {
if((state_val_15542 === (2))){
var inst_15518 = (state_15541[(8)]);
var inst_15520 = (inst_15518 < n);
var state_15541__$1 = state_15541;
if(cljs.core.truth_(inst_15520)){
var statearr_15550_15573 = state_15541__$1;
(statearr_15550_15573[(1)] = (4));

} else {
var statearr_15551_15574 = state_15541__$1;
(statearr_15551_15574[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (11))){
var inst_15518 = (state_15541[(8)]);
var inst_15528 = (state_15541[(2)]);
var inst_15529 = (inst_15518 + (1));
var inst_15518__$1 = inst_15529;
var state_15541__$1 = (function (){var statearr_15552 = state_15541;
(statearr_15552[(10)] = inst_15528);

(statearr_15552[(8)] = inst_15518__$1);

return statearr_15552;
})();
var statearr_15553_15575 = state_15541__$1;
(statearr_15553_15575[(2)] = null);

(statearr_15553_15575[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (9))){
var state_15541__$1 = state_15541;
var statearr_15554_15576 = state_15541__$1;
(statearr_15554_15576[(2)] = null);

(statearr_15554_15576[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (5))){
var state_15541__$1 = state_15541;
var statearr_15555_15577 = state_15541__$1;
(statearr_15555_15577[(2)] = null);

(statearr_15555_15577[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (10))){
var inst_15533 = (state_15541[(2)]);
var state_15541__$1 = state_15541;
var statearr_15556_15578 = state_15541__$1;
(statearr_15556_15578[(2)] = inst_15533);

(statearr_15556_15578[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15542 === (8))){
var inst_15523 = (state_15541[(7)]);
var state_15541__$1 = state_15541;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15541__$1,(11),out,inst_15523);
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
});})(c__8543__auto___15568,out))
;
return ((function (switch__8478__auto__,c__8543__auto___15568,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15560 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15560[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15560[(1)] = (1));

return statearr_15560;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15541){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15541);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15561){if((e15561 instanceof Object)){
var ex__8482__auto__ = e15561;
var statearr_15562_15579 = state_15541;
(statearr_15562_15579[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15541);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15580 = state_15541;
state_15541 = G__15580;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15541){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15568,out))
})();
var state__8545__auto__ = (function (){var statearr_15563 = f__8544__auto__.call(null);
(statearr_15563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15568);

return statearr_15563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15568,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15588 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15588 = (function (map_LT_,f,ch,meta15589){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15589 = meta15589;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15590,meta15589__$1){
var self__ = this;
var _15590__$1 = this;
return (new cljs.core.async.t_cljs$core$async15588(self__.map_LT_,self__.f,self__.ch,meta15589__$1));
});

cljs.core.async.t_cljs$core$async15588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15590){
var self__ = this;
var _15590__$1 = this;
return self__.meta15589;
});

cljs.core.async.t_cljs$core$async15588.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15588.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15588.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15591 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15591 = (function (map_LT_,f,ch,meta15589,_,fn1,meta15592){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15589 = meta15589;
this._ = _;
this.fn1 = fn1;
this.meta15592 = meta15592;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15591.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15593,meta15592__$1){
var self__ = this;
var _15593__$1 = this;
return (new cljs.core.async.t_cljs$core$async15591(self__.map_LT_,self__.f,self__.ch,self__.meta15589,self__._,self__.fn1,meta15592__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15591.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15593){
var self__ = this;
var _15593__$1 = this;
return self__.meta15592;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15591.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15591.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15591.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15581_SHARP_){
return f1.call(null,(((p1__15581_SHARP_ == null))?null:self__.f.call(null,p1__15581_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15591.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15589","meta15589",1721802630,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15588","cljs.core.async/t_cljs$core$async15588",-2069461227,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15592","meta15592",-1464703068,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15591.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15591.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15591";

cljs.core.async.t_cljs$core$async15591.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15591");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15591 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15591(map_LT___$1,f__$1,ch__$1,meta15589__$1,___$2,fn1__$1,meta15592){
return (new cljs.core.async.t_cljs$core$async15591(map_LT___$1,f__$1,ch__$1,meta15589__$1,___$2,fn1__$1,meta15592));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15591(self__.map_LT_,self__.f,self__.ch,self__.meta15589,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async15588.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15588.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15589","meta15589",1721802630,null)], null);
});

cljs.core.async.t_cljs$core$async15588.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15588.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15588";

cljs.core.async.t_cljs$core$async15588.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15588");
});

cljs.core.async.__GT_t_cljs$core$async15588 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15588(map_LT___$1,f__$1,ch__$1,meta15589){
return (new cljs.core.async.t_cljs$core$async15588(map_LT___$1,f__$1,ch__$1,meta15589));
});

}

return (new cljs.core.async.t_cljs$core$async15588(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15597 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15597 = (function (map_GT_,f,ch,meta15598){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15598 = meta15598;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15599,meta15598__$1){
var self__ = this;
var _15599__$1 = this;
return (new cljs.core.async.t_cljs$core$async15597(self__.map_GT_,self__.f,self__.ch,meta15598__$1));
});

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15599){
var self__ = this;
var _15599__$1 = this;
return self__.meta15598;
});

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15597.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15597.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15598","meta15598",730081630,null)], null);
});

cljs.core.async.t_cljs$core$async15597.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15597.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15597";

cljs.core.async.t_cljs$core$async15597.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15597");
});

cljs.core.async.__GT_t_cljs$core$async15597 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15597(map_GT___$1,f__$1,ch__$1,meta15598){
return (new cljs.core.async.t_cljs$core$async15597(map_GT___$1,f__$1,ch__$1,meta15598));
});

}

return (new cljs.core.async.t_cljs$core$async15597(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15603 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15603 = (function (filter_GT_,p,ch,meta15604){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15604 = meta15604;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15605,meta15604__$1){
var self__ = this;
var _15605__$1 = this;
return (new cljs.core.async.t_cljs$core$async15603(self__.filter_GT_,self__.p,self__.ch,meta15604__$1));
});

cljs.core.async.t_cljs$core$async15603.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15605){
var self__ = this;
var _15605__$1 = this;
return self__.meta15604;
});

cljs.core.async.t_cljs$core$async15603.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15603.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15603.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15603.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15603.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15603.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15603.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15603.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15604","meta15604",1191288758,null)], null);
});

cljs.core.async.t_cljs$core$async15603.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15603.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15603";

cljs.core.async.t_cljs$core$async15603.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15603");
});

cljs.core.async.__GT_t_cljs$core$async15603 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15603(filter_GT___$1,p__$1,ch__$1,meta15604){
return (new cljs.core.async.t_cljs$core$async15603(filter_GT___$1,p__$1,ch__$1,meta15604));
});

}

return (new cljs.core.async.t_cljs$core$async15603(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args15606 = [];
var len__6152__auto___15650 = arguments.length;
var i__6153__auto___15651 = (0);
while(true){
if((i__6153__auto___15651 < len__6152__auto___15650)){
args15606.push((arguments[i__6153__auto___15651]));

var G__15652 = (i__6153__auto___15651 + (1));
i__6153__auto___15651 = G__15652;
continue;
} else {
}
break;
}

var G__15608 = args15606.length;
switch (G__15608) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15606.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___15654 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15654,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15654,out){
return (function (state_15629){
var state_val_15630 = (state_15629[(1)]);
if((state_val_15630 === (7))){
var inst_15625 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
var statearr_15631_15655 = state_15629__$1;
(statearr_15631_15655[(2)] = inst_15625);

(statearr_15631_15655[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (1))){
var state_15629__$1 = state_15629;
var statearr_15632_15656 = state_15629__$1;
(statearr_15632_15656[(2)] = null);

(statearr_15632_15656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (4))){
var inst_15611 = (state_15629[(7)]);
var inst_15611__$1 = (state_15629[(2)]);
var inst_15612 = (inst_15611__$1 == null);
var state_15629__$1 = (function (){var statearr_15633 = state_15629;
(statearr_15633[(7)] = inst_15611__$1);

return statearr_15633;
})();
if(cljs.core.truth_(inst_15612)){
var statearr_15634_15657 = state_15629__$1;
(statearr_15634_15657[(1)] = (5));

} else {
var statearr_15635_15658 = state_15629__$1;
(statearr_15635_15658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (6))){
var inst_15611 = (state_15629[(7)]);
var inst_15616 = p.call(null,inst_15611);
var state_15629__$1 = state_15629;
if(cljs.core.truth_(inst_15616)){
var statearr_15636_15659 = state_15629__$1;
(statearr_15636_15659[(1)] = (8));

} else {
var statearr_15637_15660 = state_15629__$1;
(statearr_15637_15660[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (3))){
var inst_15627 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15629__$1,inst_15627);
} else {
if((state_val_15630 === (2))){
var state_15629__$1 = state_15629;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15629__$1,(4),ch);
} else {
if((state_val_15630 === (11))){
var inst_15619 = (state_15629[(2)]);
var state_15629__$1 = state_15629;
var statearr_15638_15661 = state_15629__$1;
(statearr_15638_15661[(2)] = inst_15619);

(statearr_15638_15661[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (9))){
var state_15629__$1 = state_15629;
var statearr_15639_15662 = state_15629__$1;
(statearr_15639_15662[(2)] = null);

(statearr_15639_15662[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (5))){
var inst_15614 = cljs.core.async.close_BANG_.call(null,out);
var state_15629__$1 = state_15629;
var statearr_15640_15663 = state_15629__$1;
(statearr_15640_15663[(2)] = inst_15614);

(statearr_15640_15663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (10))){
var inst_15622 = (state_15629[(2)]);
var state_15629__$1 = (function (){var statearr_15641 = state_15629;
(statearr_15641[(8)] = inst_15622);

return statearr_15641;
})();
var statearr_15642_15664 = state_15629__$1;
(statearr_15642_15664[(2)] = null);

(statearr_15642_15664[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15630 === (8))){
var inst_15611 = (state_15629[(7)]);
var state_15629__$1 = state_15629;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15629__$1,(11),out,inst_15611);
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
});})(c__8543__auto___15654,out))
;
return ((function (switch__8478__auto__,c__8543__auto___15654,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15646 = [null,null,null,null,null,null,null,null,null];
(statearr_15646[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15646[(1)] = (1));

return statearr_15646;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15629){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15629);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15647){if((e15647 instanceof Object)){
var ex__8482__auto__ = e15647;
var statearr_15648_15665 = state_15629;
(statearr_15648_15665[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15629);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15666 = state_15629;
state_15629 = G__15666;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15629){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15654,out))
})();
var state__8545__auto__ = (function (){var statearr_15649 = f__8544__auto__.call(null);
(statearr_15649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15654);

return statearr_15649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15654,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15667 = [];
var len__6152__auto___15670 = arguments.length;
var i__6153__auto___15671 = (0);
while(true){
if((i__6153__auto___15671 < len__6152__auto___15670)){
args15667.push((arguments[i__6153__auto___15671]));

var G__15672 = (i__6153__auto___15671 + (1));
i__6153__auto___15671 = G__15672;
continue;
} else {
}
break;
}

var G__15669 = args15667.length;
switch (G__15669) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15667.length)].join('')));

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
return (function (state_15839){
var state_val_15840 = (state_15839[(1)]);
if((state_val_15840 === (7))){
var inst_15835 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
var statearr_15841_15882 = state_15839__$1;
(statearr_15841_15882[(2)] = inst_15835);

(statearr_15841_15882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (20))){
var inst_15805 = (state_15839[(7)]);
var inst_15816 = (state_15839[(2)]);
var inst_15817 = cljs.core.next.call(null,inst_15805);
var inst_15791 = inst_15817;
var inst_15792 = null;
var inst_15793 = (0);
var inst_15794 = (0);
var state_15839__$1 = (function (){var statearr_15842 = state_15839;
(statearr_15842[(8)] = inst_15816);

(statearr_15842[(9)] = inst_15792);

(statearr_15842[(10)] = inst_15791);

(statearr_15842[(11)] = inst_15793);

(statearr_15842[(12)] = inst_15794);

return statearr_15842;
})();
var statearr_15843_15883 = state_15839__$1;
(statearr_15843_15883[(2)] = null);

(statearr_15843_15883[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (1))){
var state_15839__$1 = state_15839;
var statearr_15844_15884 = state_15839__$1;
(statearr_15844_15884[(2)] = null);

(statearr_15844_15884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (4))){
var inst_15780 = (state_15839[(13)]);
var inst_15780__$1 = (state_15839[(2)]);
var inst_15781 = (inst_15780__$1 == null);
var state_15839__$1 = (function (){var statearr_15845 = state_15839;
(statearr_15845[(13)] = inst_15780__$1);

return statearr_15845;
})();
if(cljs.core.truth_(inst_15781)){
var statearr_15846_15885 = state_15839__$1;
(statearr_15846_15885[(1)] = (5));

} else {
var statearr_15847_15886 = state_15839__$1;
(statearr_15847_15886[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (15))){
var state_15839__$1 = state_15839;
var statearr_15851_15887 = state_15839__$1;
(statearr_15851_15887[(2)] = null);

(statearr_15851_15887[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (21))){
var state_15839__$1 = state_15839;
var statearr_15852_15888 = state_15839__$1;
(statearr_15852_15888[(2)] = null);

(statearr_15852_15888[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (13))){
var inst_15792 = (state_15839[(9)]);
var inst_15791 = (state_15839[(10)]);
var inst_15793 = (state_15839[(11)]);
var inst_15794 = (state_15839[(12)]);
var inst_15801 = (state_15839[(2)]);
var inst_15802 = (inst_15794 + (1));
var tmp15848 = inst_15792;
var tmp15849 = inst_15791;
var tmp15850 = inst_15793;
var inst_15791__$1 = tmp15849;
var inst_15792__$1 = tmp15848;
var inst_15793__$1 = tmp15850;
var inst_15794__$1 = inst_15802;
var state_15839__$1 = (function (){var statearr_15853 = state_15839;
(statearr_15853[(9)] = inst_15792__$1);

(statearr_15853[(10)] = inst_15791__$1);

(statearr_15853[(11)] = inst_15793__$1);

(statearr_15853[(12)] = inst_15794__$1);

(statearr_15853[(14)] = inst_15801);

return statearr_15853;
})();
var statearr_15854_15889 = state_15839__$1;
(statearr_15854_15889[(2)] = null);

(statearr_15854_15889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (22))){
var state_15839__$1 = state_15839;
var statearr_15855_15890 = state_15839__$1;
(statearr_15855_15890[(2)] = null);

(statearr_15855_15890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (6))){
var inst_15780 = (state_15839[(13)]);
var inst_15789 = f.call(null,inst_15780);
var inst_15790 = cljs.core.seq.call(null,inst_15789);
var inst_15791 = inst_15790;
var inst_15792 = null;
var inst_15793 = (0);
var inst_15794 = (0);
var state_15839__$1 = (function (){var statearr_15856 = state_15839;
(statearr_15856[(9)] = inst_15792);

(statearr_15856[(10)] = inst_15791);

(statearr_15856[(11)] = inst_15793);

(statearr_15856[(12)] = inst_15794);

return statearr_15856;
})();
var statearr_15857_15891 = state_15839__$1;
(statearr_15857_15891[(2)] = null);

(statearr_15857_15891[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (17))){
var inst_15805 = (state_15839[(7)]);
var inst_15809 = cljs.core.chunk_first.call(null,inst_15805);
var inst_15810 = cljs.core.chunk_rest.call(null,inst_15805);
var inst_15811 = cljs.core.count.call(null,inst_15809);
var inst_15791 = inst_15810;
var inst_15792 = inst_15809;
var inst_15793 = inst_15811;
var inst_15794 = (0);
var state_15839__$1 = (function (){var statearr_15858 = state_15839;
(statearr_15858[(9)] = inst_15792);

(statearr_15858[(10)] = inst_15791);

(statearr_15858[(11)] = inst_15793);

(statearr_15858[(12)] = inst_15794);

return statearr_15858;
})();
var statearr_15859_15892 = state_15839__$1;
(statearr_15859_15892[(2)] = null);

(statearr_15859_15892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (3))){
var inst_15837 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15839__$1,inst_15837);
} else {
if((state_val_15840 === (12))){
var inst_15825 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
var statearr_15860_15893 = state_15839__$1;
(statearr_15860_15893[(2)] = inst_15825);

(statearr_15860_15893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (2))){
var state_15839__$1 = state_15839;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15839__$1,(4),in$);
} else {
if((state_val_15840 === (23))){
var inst_15833 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
var statearr_15861_15894 = state_15839__$1;
(statearr_15861_15894[(2)] = inst_15833);

(statearr_15861_15894[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (19))){
var inst_15820 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
var statearr_15862_15895 = state_15839__$1;
(statearr_15862_15895[(2)] = inst_15820);

(statearr_15862_15895[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (11))){
var inst_15791 = (state_15839[(10)]);
var inst_15805 = (state_15839[(7)]);
var inst_15805__$1 = cljs.core.seq.call(null,inst_15791);
var state_15839__$1 = (function (){var statearr_15863 = state_15839;
(statearr_15863[(7)] = inst_15805__$1);

return statearr_15863;
})();
if(inst_15805__$1){
var statearr_15864_15896 = state_15839__$1;
(statearr_15864_15896[(1)] = (14));

} else {
var statearr_15865_15897 = state_15839__$1;
(statearr_15865_15897[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (9))){
var inst_15827 = (state_15839[(2)]);
var inst_15828 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15839__$1 = (function (){var statearr_15866 = state_15839;
(statearr_15866[(15)] = inst_15827);

return statearr_15866;
})();
if(cljs.core.truth_(inst_15828)){
var statearr_15867_15898 = state_15839__$1;
(statearr_15867_15898[(1)] = (21));

} else {
var statearr_15868_15899 = state_15839__$1;
(statearr_15868_15899[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (5))){
var inst_15783 = cljs.core.async.close_BANG_.call(null,out);
var state_15839__$1 = state_15839;
var statearr_15869_15900 = state_15839__$1;
(statearr_15869_15900[(2)] = inst_15783);

(statearr_15869_15900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (14))){
var inst_15805 = (state_15839[(7)]);
var inst_15807 = cljs.core.chunked_seq_QMARK_.call(null,inst_15805);
var state_15839__$1 = state_15839;
if(inst_15807){
var statearr_15870_15901 = state_15839__$1;
(statearr_15870_15901[(1)] = (17));

} else {
var statearr_15871_15902 = state_15839__$1;
(statearr_15871_15902[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (16))){
var inst_15823 = (state_15839[(2)]);
var state_15839__$1 = state_15839;
var statearr_15872_15903 = state_15839__$1;
(statearr_15872_15903[(2)] = inst_15823);

(statearr_15872_15903[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15840 === (10))){
var inst_15792 = (state_15839[(9)]);
var inst_15794 = (state_15839[(12)]);
var inst_15799 = cljs.core._nth.call(null,inst_15792,inst_15794);
var state_15839__$1 = state_15839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15839__$1,(13),out,inst_15799);
} else {
if((state_val_15840 === (18))){
var inst_15805 = (state_15839[(7)]);
var inst_15814 = cljs.core.first.call(null,inst_15805);
var state_15839__$1 = state_15839;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15839__$1,(20),out,inst_15814);
} else {
if((state_val_15840 === (8))){
var inst_15793 = (state_15839[(11)]);
var inst_15794 = (state_15839[(12)]);
var inst_15796 = (inst_15794 < inst_15793);
var inst_15797 = inst_15796;
var state_15839__$1 = state_15839;
if(cljs.core.truth_(inst_15797)){
var statearr_15873_15904 = state_15839__$1;
(statearr_15873_15904[(1)] = (10));

} else {
var statearr_15874_15905 = state_15839__$1;
(statearr_15874_15905[(1)] = (11));

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
var statearr_15878 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15878[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__);

(statearr_15878[(1)] = (1));

return statearr_15878;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____1 = (function (state_15839){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15839);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15879){if((e15879 instanceof Object)){
var ex__8482__auto__ = e15879;
var statearr_15880_15906 = state_15839;
(statearr_15880_15906[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15839);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15879;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15907 = state_15839;
state_15839 = G__15907;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__ = function(state_15839){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____1.call(this,state_15839);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__))
})();
var state__8545__auto__ = (function (){var statearr_15881 = f__8544__auto__.call(null);
(statearr_15881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_15881;
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
var args15908 = [];
var len__6152__auto___15911 = arguments.length;
var i__6153__auto___15912 = (0);
while(true){
if((i__6153__auto___15912 < len__6152__auto___15911)){
args15908.push((arguments[i__6153__auto___15912]));

var G__15913 = (i__6153__auto___15912 + (1));
i__6153__auto___15912 = G__15913;
continue;
} else {
}
break;
}

var G__15910 = args15908.length;
switch (G__15910) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15908.length)].join('')));

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
var args15915 = [];
var len__6152__auto___15918 = arguments.length;
var i__6153__auto___15919 = (0);
while(true){
if((i__6153__auto___15919 < len__6152__auto___15918)){
args15915.push((arguments[i__6153__auto___15919]));

var G__15920 = (i__6153__auto___15919 + (1));
i__6153__auto___15919 = G__15920;
continue;
} else {
}
break;
}

var G__15917 = args15915.length;
switch (G__15917) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15915.length)].join('')));

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
var args15922 = [];
var len__6152__auto___15973 = arguments.length;
var i__6153__auto___15974 = (0);
while(true){
if((i__6153__auto___15974 < len__6152__auto___15973)){
args15922.push((arguments[i__6153__auto___15974]));

var G__15975 = (i__6153__auto___15974 + (1));
i__6153__auto___15974 = G__15975;
continue;
} else {
}
break;
}

var G__15924 = args15922.length;
switch (G__15924) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15922.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___15977 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15977,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15977,out){
return (function (state_15948){
var state_val_15949 = (state_15948[(1)]);
if((state_val_15949 === (7))){
var inst_15943 = (state_15948[(2)]);
var state_15948__$1 = state_15948;
var statearr_15950_15978 = state_15948__$1;
(statearr_15950_15978[(2)] = inst_15943);

(statearr_15950_15978[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (1))){
var inst_15925 = null;
var state_15948__$1 = (function (){var statearr_15951 = state_15948;
(statearr_15951[(7)] = inst_15925);

return statearr_15951;
})();
var statearr_15952_15979 = state_15948__$1;
(statearr_15952_15979[(2)] = null);

(statearr_15952_15979[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (4))){
var inst_15928 = (state_15948[(8)]);
var inst_15928__$1 = (state_15948[(2)]);
var inst_15929 = (inst_15928__$1 == null);
var inst_15930 = cljs.core.not.call(null,inst_15929);
var state_15948__$1 = (function (){var statearr_15953 = state_15948;
(statearr_15953[(8)] = inst_15928__$1);

return statearr_15953;
})();
if(inst_15930){
var statearr_15954_15980 = state_15948__$1;
(statearr_15954_15980[(1)] = (5));

} else {
var statearr_15955_15981 = state_15948__$1;
(statearr_15955_15981[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (6))){
var state_15948__$1 = state_15948;
var statearr_15956_15982 = state_15948__$1;
(statearr_15956_15982[(2)] = null);

(statearr_15956_15982[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (3))){
var inst_15945 = (state_15948[(2)]);
var inst_15946 = cljs.core.async.close_BANG_.call(null,out);
var state_15948__$1 = (function (){var statearr_15957 = state_15948;
(statearr_15957[(9)] = inst_15945);

return statearr_15957;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15948__$1,inst_15946);
} else {
if((state_val_15949 === (2))){
var state_15948__$1 = state_15948;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15948__$1,(4),ch);
} else {
if((state_val_15949 === (11))){
var inst_15928 = (state_15948[(8)]);
var inst_15937 = (state_15948[(2)]);
var inst_15925 = inst_15928;
var state_15948__$1 = (function (){var statearr_15958 = state_15948;
(statearr_15958[(7)] = inst_15925);

(statearr_15958[(10)] = inst_15937);

return statearr_15958;
})();
var statearr_15959_15983 = state_15948__$1;
(statearr_15959_15983[(2)] = null);

(statearr_15959_15983[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (9))){
var inst_15928 = (state_15948[(8)]);
var state_15948__$1 = state_15948;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15948__$1,(11),out,inst_15928);
} else {
if((state_val_15949 === (5))){
var inst_15928 = (state_15948[(8)]);
var inst_15925 = (state_15948[(7)]);
var inst_15932 = cljs.core._EQ_.call(null,inst_15928,inst_15925);
var state_15948__$1 = state_15948;
if(inst_15932){
var statearr_15961_15984 = state_15948__$1;
(statearr_15961_15984[(1)] = (8));

} else {
var statearr_15962_15985 = state_15948__$1;
(statearr_15962_15985[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (10))){
var inst_15940 = (state_15948[(2)]);
var state_15948__$1 = state_15948;
var statearr_15963_15986 = state_15948__$1;
(statearr_15963_15986[(2)] = inst_15940);

(statearr_15963_15986[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15949 === (8))){
var inst_15925 = (state_15948[(7)]);
var tmp15960 = inst_15925;
var inst_15925__$1 = tmp15960;
var state_15948__$1 = (function (){var statearr_15964 = state_15948;
(statearr_15964[(7)] = inst_15925__$1);

return statearr_15964;
})();
var statearr_15965_15987 = state_15948__$1;
(statearr_15965_15987[(2)] = null);

(statearr_15965_15987[(1)] = (2));


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
});})(c__8543__auto___15977,out))
;
return ((function (switch__8478__auto__,c__8543__auto___15977,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15969 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15969[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15969[(1)] = (1));

return statearr_15969;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15948){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15948);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15970){if((e15970 instanceof Object)){
var ex__8482__auto__ = e15970;
var statearr_15971_15988 = state_15948;
(statearr_15971_15988[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15948);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15970;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15989 = state_15948;
state_15948 = G__15989;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15948){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15977,out))
})();
var state__8545__auto__ = (function (){var statearr_15972 = f__8544__auto__.call(null);
(statearr_15972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15977);

return statearr_15972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15977,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args15990 = [];
var len__6152__auto___16060 = arguments.length;
var i__6153__auto___16061 = (0);
while(true){
if((i__6153__auto___16061 < len__6152__auto___16060)){
args15990.push((arguments[i__6153__auto___16061]));

var G__16062 = (i__6153__auto___16061 + (1));
i__6153__auto___16061 = G__16062;
continue;
} else {
}
break;
}

var G__15992 = args15990.length;
switch (G__15992) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15990.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___16064 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16064,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16064,out){
return (function (state_16030){
var state_val_16031 = (state_16030[(1)]);
if((state_val_16031 === (7))){
var inst_16026 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
var statearr_16032_16065 = state_16030__$1;
(statearr_16032_16065[(2)] = inst_16026);

(statearr_16032_16065[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (1))){
var inst_15993 = (new Array(n));
var inst_15994 = inst_15993;
var inst_15995 = (0);
var state_16030__$1 = (function (){var statearr_16033 = state_16030;
(statearr_16033[(7)] = inst_15994);

(statearr_16033[(8)] = inst_15995);

return statearr_16033;
})();
var statearr_16034_16066 = state_16030__$1;
(statearr_16034_16066[(2)] = null);

(statearr_16034_16066[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (4))){
var inst_15998 = (state_16030[(9)]);
var inst_15998__$1 = (state_16030[(2)]);
var inst_15999 = (inst_15998__$1 == null);
var inst_16000 = cljs.core.not.call(null,inst_15999);
var state_16030__$1 = (function (){var statearr_16035 = state_16030;
(statearr_16035[(9)] = inst_15998__$1);

return statearr_16035;
})();
if(inst_16000){
var statearr_16036_16067 = state_16030__$1;
(statearr_16036_16067[(1)] = (5));

} else {
var statearr_16037_16068 = state_16030__$1;
(statearr_16037_16068[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (15))){
var inst_16020 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
var statearr_16038_16069 = state_16030__$1;
(statearr_16038_16069[(2)] = inst_16020);

(statearr_16038_16069[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (13))){
var state_16030__$1 = state_16030;
var statearr_16039_16070 = state_16030__$1;
(statearr_16039_16070[(2)] = null);

(statearr_16039_16070[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (6))){
var inst_15995 = (state_16030[(8)]);
var inst_16016 = (inst_15995 > (0));
var state_16030__$1 = state_16030;
if(cljs.core.truth_(inst_16016)){
var statearr_16040_16071 = state_16030__$1;
(statearr_16040_16071[(1)] = (12));

} else {
var statearr_16041_16072 = state_16030__$1;
(statearr_16041_16072[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (3))){
var inst_16028 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16030__$1,inst_16028);
} else {
if((state_val_16031 === (12))){
var inst_15994 = (state_16030[(7)]);
var inst_16018 = cljs.core.vec.call(null,inst_15994);
var state_16030__$1 = state_16030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16030__$1,(15),out,inst_16018);
} else {
if((state_val_16031 === (2))){
var state_16030__$1 = state_16030;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16030__$1,(4),ch);
} else {
if((state_val_16031 === (11))){
var inst_16010 = (state_16030[(2)]);
var inst_16011 = (new Array(n));
var inst_15994 = inst_16011;
var inst_15995 = (0);
var state_16030__$1 = (function (){var statearr_16042 = state_16030;
(statearr_16042[(7)] = inst_15994);

(statearr_16042[(8)] = inst_15995);

(statearr_16042[(10)] = inst_16010);

return statearr_16042;
})();
var statearr_16043_16073 = state_16030__$1;
(statearr_16043_16073[(2)] = null);

(statearr_16043_16073[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (9))){
var inst_15994 = (state_16030[(7)]);
var inst_16008 = cljs.core.vec.call(null,inst_15994);
var state_16030__$1 = state_16030;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16030__$1,(11),out,inst_16008);
} else {
if((state_val_16031 === (5))){
var inst_15994 = (state_16030[(7)]);
var inst_15995 = (state_16030[(8)]);
var inst_16003 = (state_16030[(11)]);
var inst_15998 = (state_16030[(9)]);
var inst_16002 = (inst_15994[inst_15995] = inst_15998);
var inst_16003__$1 = (inst_15995 + (1));
var inst_16004 = (inst_16003__$1 < n);
var state_16030__$1 = (function (){var statearr_16044 = state_16030;
(statearr_16044[(12)] = inst_16002);

(statearr_16044[(11)] = inst_16003__$1);

return statearr_16044;
})();
if(cljs.core.truth_(inst_16004)){
var statearr_16045_16074 = state_16030__$1;
(statearr_16045_16074[(1)] = (8));

} else {
var statearr_16046_16075 = state_16030__$1;
(statearr_16046_16075[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (14))){
var inst_16023 = (state_16030[(2)]);
var inst_16024 = cljs.core.async.close_BANG_.call(null,out);
var state_16030__$1 = (function (){var statearr_16048 = state_16030;
(statearr_16048[(13)] = inst_16023);

return statearr_16048;
})();
var statearr_16049_16076 = state_16030__$1;
(statearr_16049_16076[(2)] = inst_16024);

(statearr_16049_16076[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (10))){
var inst_16014 = (state_16030[(2)]);
var state_16030__$1 = state_16030;
var statearr_16050_16077 = state_16030__$1;
(statearr_16050_16077[(2)] = inst_16014);

(statearr_16050_16077[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16031 === (8))){
var inst_15994 = (state_16030[(7)]);
var inst_16003 = (state_16030[(11)]);
var tmp16047 = inst_15994;
var inst_15994__$1 = tmp16047;
var inst_15995 = inst_16003;
var state_16030__$1 = (function (){var statearr_16051 = state_16030;
(statearr_16051[(7)] = inst_15994__$1);

(statearr_16051[(8)] = inst_15995);

return statearr_16051;
})();
var statearr_16052_16078 = state_16030__$1;
(statearr_16052_16078[(2)] = null);

(statearr_16052_16078[(1)] = (2));


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
});})(c__8543__auto___16064,out))
;
return ((function (switch__8478__auto__,c__8543__auto___16064,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16056 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16056[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16056[(1)] = (1));

return statearr_16056;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16030){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16030);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16057){if((e16057 instanceof Object)){
var ex__8482__auto__ = e16057;
var statearr_16058_16079 = state_16030;
(statearr_16058_16079[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16030);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16057;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16080 = state_16030;
state_16030 = G__16080;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16030){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16064,out))
})();
var state__8545__auto__ = (function (){var statearr_16059 = f__8544__auto__.call(null);
(statearr_16059[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16064);

return statearr_16059;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16064,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16081 = [];
var len__6152__auto___16155 = arguments.length;
var i__6153__auto___16156 = (0);
while(true){
if((i__6153__auto___16156 < len__6152__auto___16155)){
args16081.push((arguments[i__6153__auto___16156]));

var G__16157 = (i__6153__auto___16156 + (1));
i__6153__auto___16156 = G__16157;
continue;
} else {
}
break;
}

var G__16083 = args16081.length;
switch (G__16083) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16081.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___16159 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16159,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16159,out){
return (function (state_16125){
var state_val_16126 = (state_16125[(1)]);
if((state_val_16126 === (7))){
var inst_16121 = (state_16125[(2)]);
var state_16125__$1 = state_16125;
var statearr_16127_16160 = state_16125__$1;
(statearr_16127_16160[(2)] = inst_16121);

(statearr_16127_16160[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (1))){
var inst_16084 = [];
var inst_16085 = inst_16084;
var inst_16086 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16125__$1 = (function (){var statearr_16128 = state_16125;
(statearr_16128[(7)] = inst_16086);

(statearr_16128[(8)] = inst_16085);

return statearr_16128;
})();
var statearr_16129_16161 = state_16125__$1;
(statearr_16129_16161[(2)] = null);

(statearr_16129_16161[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (4))){
var inst_16089 = (state_16125[(9)]);
var inst_16089__$1 = (state_16125[(2)]);
var inst_16090 = (inst_16089__$1 == null);
var inst_16091 = cljs.core.not.call(null,inst_16090);
var state_16125__$1 = (function (){var statearr_16130 = state_16125;
(statearr_16130[(9)] = inst_16089__$1);

return statearr_16130;
})();
if(inst_16091){
var statearr_16131_16162 = state_16125__$1;
(statearr_16131_16162[(1)] = (5));

} else {
var statearr_16132_16163 = state_16125__$1;
(statearr_16132_16163[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (15))){
var inst_16115 = (state_16125[(2)]);
var state_16125__$1 = state_16125;
var statearr_16133_16164 = state_16125__$1;
(statearr_16133_16164[(2)] = inst_16115);

(statearr_16133_16164[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (13))){
var state_16125__$1 = state_16125;
var statearr_16134_16165 = state_16125__$1;
(statearr_16134_16165[(2)] = null);

(statearr_16134_16165[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (6))){
var inst_16085 = (state_16125[(8)]);
var inst_16110 = inst_16085.length;
var inst_16111 = (inst_16110 > (0));
var state_16125__$1 = state_16125;
if(cljs.core.truth_(inst_16111)){
var statearr_16135_16166 = state_16125__$1;
(statearr_16135_16166[(1)] = (12));

} else {
var statearr_16136_16167 = state_16125__$1;
(statearr_16136_16167[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (3))){
var inst_16123 = (state_16125[(2)]);
var state_16125__$1 = state_16125;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16125__$1,inst_16123);
} else {
if((state_val_16126 === (12))){
var inst_16085 = (state_16125[(8)]);
var inst_16113 = cljs.core.vec.call(null,inst_16085);
var state_16125__$1 = state_16125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16125__$1,(15),out,inst_16113);
} else {
if((state_val_16126 === (2))){
var state_16125__$1 = state_16125;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16125__$1,(4),ch);
} else {
if((state_val_16126 === (11))){
var inst_16093 = (state_16125[(10)]);
var inst_16089 = (state_16125[(9)]);
var inst_16103 = (state_16125[(2)]);
var inst_16104 = [];
var inst_16105 = inst_16104.push(inst_16089);
var inst_16085 = inst_16104;
var inst_16086 = inst_16093;
var state_16125__$1 = (function (){var statearr_16137 = state_16125;
(statearr_16137[(7)] = inst_16086);

(statearr_16137[(11)] = inst_16103);

(statearr_16137[(8)] = inst_16085);

(statearr_16137[(12)] = inst_16105);

return statearr_16137;
})();
var statearr_16138_16168 = state_16125__$1;
(statearr_16138_16168[(2)] = null);

(statearr_16138_16168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (9))){
var inst_16085 = (state_16125[(8)]);
var inst_16101 = cljs.core.vec.call(null,inst_16085);
var state_16125__$1 = state_16125;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16125__$1,(11),out,inst_16101);
} else {
if((state_val_16126 === (5))){
var inst_16093 = (state_16125[(10)]);
var inst_16086 = (state_16125[(7)]);
var inst_16089 = (state_16125[(9)]);
var inst_16093__$1 = f.call(null,inst_16089);
var inst_16094 = cljs.core._EQ_.call(null,inst_16093__$1,inst_16086);
var inst_16095 = cljs.core.keyword_identical_QMARK_.call(null,inst_16086,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16096 = (inst_16094) || (inst_16095);
var state_16125__$1 = (function (){var statearr_16139 = state_16125;
(statearr_16139[(10)] = inst_16093__$1);

return statearr_16139;
})();
if(cljs.core.truth_(inst_16096)){
var statearr_16140_16169 = state_16125__$1;
(statearr_16140_16169[(1)] = (8));

} else {
var statearr_16141_16170 = state_16125__$1;
(statearr_16141_16170[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (14))){
var inst_16118 = (state_16125[(2)]);
var inst_16119 = cljs.core.async.close_BANG_.call(null,out);
var state_16125__$1 = (function (){var statearr_16143 = state_16125;
(statearr_16143[(13)] = inst_16118);

return statearr_16143;
})();
var statearr_16144_16171 = state_16125__$1;
(statearr_16144_16171[(2)] = inst_16119);

(statearr_16144_16171[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (10))){
var inst_16108 = (state_16125[(2)]);
var state_16125__$1 = state_16125;
var statearr_16145_16172 = state_16125__$1;
(statearr_16145_16172[(2)] = inst_16108);

(statearr_16145_16172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16126 === (8))){
var inst_16093 = (state_16125[(10)]);
var inst_16089 = (state_16125[(9)]);
var inst_16085 = (state_16125[(8)]);
var inst_16098 = inst_16085.push(inst_16089);
var tmp16142 = inst_16085;
var inst_16085__$1 = tmp16142;
var inst_16086 = inst_16093;
var state_16125__$1 = (function (){var statearr_16146 = state_16125;
(statearr_16146[(7)] = inst_16086);

(statearr_16146[(8)] = inst_16085__$1);

(statearr_16146[(14)] = inst_16098);

return statearr_16146;
})();
var statearr_16147_16173 = state_16125__$1;
(statearr_16147_16173[(2)] = null);

(statearr_16147_16173[(1)] = (2));


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
});})(c__8543__auto___16159,out))
;
return ((function (switch__8478__auto__,c__8543__auto___16159,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16151[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16151[(1)] = (1));

return statearr_16151;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16125){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16125);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16152){if((e16152 instanceof Object)){
var ex__8482__auto__ = e16152;
var statearr_16153_16174 = state_16125;
(statearr_16153_16174[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16125);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16152;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16175 = state_16125;
state_16125 = G__16175;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16125){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16159,out))
})();
var state__8545__auto__ = (function (){var statearr_16154 = f__8544__auto__.call(null);
(statearr_16154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16159);

return statearr_16154;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16159,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map