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
if(typeof cljs.core.async.t_cljs$core$async13512 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13512 = (function (fn_handler,f,meta13513){
this.fn_handler = fn_handler;
this.f = f;
this.meta13513 = meta13513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13514,meta13513__$1){
var self__ = this;
var _13514__$1 = this;
return (new cljs.core.async.t_cljs$core$async13512(self__.fn_handler,self__.f,meta13513__$1));
});

cljs.core.async.t_cljs$core$async13512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13514){
var self__ = this;
var _13514__$1 = this;
return self__.meta13513;
});

cljs.core.async.t_cljs$core$async13512.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13512.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async13512.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async13512.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta13513","meta13513",221235965,null)], null);
});

cljs.core.async.t_cljs$core$async13512.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13512.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13512";

cljs.core.async.t_cljs$core$async13512.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async13512");
});

cljs.core.async.__GT_t_cljs$core$async13512 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async13512(fn_handler__$1,f__$1,meta13513){
return (new cljs.core.async.t_cljs$core$async13512(fn_handler__$1,f__$1,meta13513));
});

}

return (new cljs.core.async.t_cljs$core$async13512(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args13517 = [];
var len__6152__auto___13520 = arguments.length;
var i__6153__auto___13521 = (0);
while(true){
if((i__6153__auto___13521 < len__6152__auto___13520)){
args13517.push((arguments[i__6153__auto___13521]));

var G__13522 = (i__6153__auto___13521 + (1));
i__6153__auto___13521 = G__13522;
continue;
} else {
}
break;
}

var G__13519 = args13517.length;
switch (G__13519) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13517.length)].join('')));

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
var args13524 = [];
var len__6152__auto___13527 = arguments.length;
var i__6153__auto___13528 = (0);
while(true){
if((i__6153__auto___13528 < len__6152__auto___13527)){
args13524.push((arguments[i__6153__auto___13528]));

var G__13529 = (i__6153__auto___13528 + (1));
i__6153__auto___13528 = G__13529;
continue;
} else {
}
break;
}

var G__13526 = args13524.length;
switch (G__13526) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13524.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_13531 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_13531);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_13531,ret){
return (function (){
return fn1.call(null,val_13531);
});})(val_13531,ret))
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
var args13532 = [];
var len__6152__auto___13535 = arguments.length;
var i__6153__auto___13536 = (0);
while(true){
if((i__6153__auto___13536 < len__6152__auto___13535)){
args13532.push((arguments[i__6153__auto___13536]));

var G__13537 = (i__6153__auto___13536 + (1));
i__6153__auto___13536 = G__13537;
continue;
} else {
}
break;
}

var G__13534 = args13532.length;
switch (G__13534) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13532.length)].join('')));

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
var n__5997__auto___13539 = n;
var x_13540 = (0);
while(true){
if((x_13540 < n__5997__auto___13539)){
(a[x_13540] = (0));

var G__13541 = (x_13540 + (1));
x_13540 = G__13541;
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

var G__13542 = (i + (1));
i = G__13542;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async13546 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13546 = (function (alt_flag,flag,meta13547){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta13547 = meta13547;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_13548,meta13547__$1){
var self__ = this;
var _13548__$1 = this;
return (new cljs.core.async.t_cljs$core$async13546(self__.alt_flag,self__.flag,meta13547__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async13546.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_13548){
var self__ = this;
var _13548__$1 = this;
return self__.meta13547;
});})(flag))
;

cljs.core.async.t_cljs$core$async13546.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async13546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async13546.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta13547","meta13547",-522493341,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async13546.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13546.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13546";

cljs.core.async.t_cljs$core$async13546.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async13546");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async13546 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async13546(alt_flag__$1,flag__$1,meta13547){
return (new cljs.core.async.t_cljs$core$async13546(alt_flag__$1,flag__$1,meta13547));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async13546(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async13552 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async13552 = (function (alt_handler,flag,cb,meta13553){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta13553 = meta13553;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async13552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13554,meta13553__$1){
var self__ = this;
var _13554__$1 = this;
return (new cljs.core.async.t_cljs$core$async13552(self__.alt_handler,self__.flag,self__.cb,meta13553__$1));
});

cljs.core.async.t_cljs$core$async13552.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13554){
var self__ = this;
var _13554__$1 = this;
return self__.meta13553;
});

cljs.core.async.t_cljs$core$async13552.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async13552.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async13552.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async13552.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta13553","meta13553",858615303,null)], null);
});

cljs.core.async.t_cljs$core$async13552.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async13552.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async13552";

cljs.core.async.t_cljs$core$async13552.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async13552");
});

cljs.core.async.__GT_t_cljs$core$async13552 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async13552(alt_handler__$1,flag__$1,cb__$1,meta13553){
return (new cljs.core.async.t_cljs$core$async13552(alt_handler__$1,flag__$1,cb__$1,meta13553));
});

}

return (new cljs.core.async.t_cljs$core$async13552(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__13555_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13555_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__13556_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13556_SHARP_,port], null));
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
var G__13557 = (i + (1));
i = G__13557;
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
var len__6152__auto___13563 = arguments.length;
var i__6153__auto___13564 = (0);
while(true){
if((i__6153__auto___13564 < len__6152__auto___13563)){
args__6159__auto__.push((arguments[i__6153__auto___13564]));

var G__13565 = (i__6153__auto___13564 + (1));
i__6153__auto___13564 = G__13565;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((1) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6160__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__13560){
var map__13561 = p__13560;
var map__13561__$1 = ((((!((map__13561 == null)))?((((map__13561.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13561.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13561):map__13561);
var opts = map__13561__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq13558){
var G__13559 = cljs.core.first.call(null,seq13558);
var seq13558__$1 = cljs.core.next.call(null,seq13558);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13559,seq13558__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args13566 = [];
var len__6152__auto___13616 = arguments.length;
var i__6153__auto___13617 = (0);
while(true){
if((i__6153__auto___13617 < len__6152__auto___13616)){
args13566.push((arguments[i__6153__auto___13617]));

var G__13618 = (i__6153__auto___13617 + (1));
i__6153__auto___13617 = G__13618;
continue;
} else {
}
break;
}

var G__13568 = args13566.length;
switch (G__13568) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13566.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__8543__auto___13620 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___13620){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___13620){
return (function (state_13592){
var state_val_13593 = (state_13592[(1)]);
if((state_val_13593 === (7))){
var inst_13588 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
var statearr_13594_13621 = state_13592__$1;
(statearr_13594_13621[(2)] = inst_13588);

(statearr_13594_13621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (1))){
var state_13592__$1 = state_13592;
var statearr_13595_13622 = state_13592__$1;
(statearr_13595_13622[(2)] = null);

(statearr_13595_13622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (4))){
var inst_13571 = (state_13592[(7)]);
var inst_13571__$1 = (state_13592[(2)]);
var inst_13572 = (inst_13571__$1 == null);
var state_13592__$1 = (function (){var statearr_13596 = state_13592;
(statearr_13596[(7)] = inst_13571__$1);

return statearr_13596;
})();
if(cljs.core.truth_(inst_13572)){
var statearr_13597_13623 = state_13592__$1;
(statearr_13597_13623[(1)] = (5));

} else {
var statearr_13598_13624 = state_13592__$1;
(statearr_13598_13624[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (13))){
var state_13592__$1 = state_13592;
var statearr_13599_13625 = state_13592__$1;
(statearr_13599_13625[(2)] = null);

(statearr_13599_13625[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (6))){
var inst_13571 = (state_13592[(7)]);
var state_13592__$1 = state_13592;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13592__$1,(11),to,inst_13571);
} else {
if((state_val_13593 === (3))){
var inst_13590 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13592__$1,inst_13590);
} else {
if((state_val_13593 === (12))){
var state_13592__$1 = state_13592;
var statearr_13600_13626 = state_13592__$1;
(statearr_13600_13626[(2)] = null);

(statearr_13600_13626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (2))){
var state_13592__$1 = state_13592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13592__$1,(4),from);
} else {
if((state_val_13593 === (11))){
var inst_13581 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
if(cljs.core.truth_(inst_13581)){
var statearr_13601_13627 = state_13592__$1;
(statearr_13601_13627[(1)] = (12));

} else {
var statearr_13602_13628 = state_13592__$1;
(statearr_13602_13628[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (9))){
var state_13592__$1 = state_13592;
var statearr_13603_13629 = state_13592__$1;
(statearr_13603_13629[(2)] = null);

(statearr_13603_13629[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (5))){
var state_13592__$1 = state_13592;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13604_13630 = state_13592__$1;
(statearr_13604_13630[(1)] = (8));

} else {
var statearr_13605_13631 = state_13592__$1;
(statearr_13605_13631[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (14))){
var inst_13586 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
var statearr_13606_13632 = state_13592__$1;
(statearr_13606_13632[(2)] = inst_13586);

(statearr_13606_13632[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (10))){
var inst_13578 = (state_13592[(2)]);
var state_13592__$1 = state_13592;
var statearr_13607_13633 = state_13592__$1;
(statearr_13607_13633[(2)] = inst_13578);

(statearr_13607_13633[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13593 === (8))){
var inst_13575 = cljs.core.async.close_BANG_.call(null,to);
var state_13592__$1 = state_13592;
var statearr_13608_13634 = state_13592__$1;
(statearr_13608_13634[(2)] = inst_13575);

(statearr_13608_13634[(1)] = (10));


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
});})(c__8543__auto___13620))
;
return ((function (switch__8478__auto__,c__8543__auto___13620){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_13612 = [null,null,null,null,null,null,null,null];
(statearr_13612[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_13612[(1)] = (1));

return statearr_13612;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_13592){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13613){if((e13613 instanceof Object)){
var ex__8482__auto__ = e13613;
var statearr_13614_13635 = state_13592;
(statearr_13614_13635[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13613;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13636 = state_13592;
state_13592 = G__13636;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_13592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_13592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___13620))
})();
var state__8545__auto__ = (function (){var statearr_13615 = f__8544__auto__.call(null);
(statearr_13615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___13620);

return statearr_13615;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___13620))
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
return (function (p__13820){
var vec__13821 = p__13820;
var v = cljs.core.nth.call(null,vec__13821,(0),null);
var p = cljs.core.nth.call(null,vec__13821,(1),null);
var job = vec__13821;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__8543__auto___14003 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14003,res,vec__13821,v,p,job,jobs,results){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14003,res,vec__13821,v,p,job,jobs,results){
return (function (state_13826){
var state_val_13827 = (state_13826[(1)]);
if((state_val_13827 === (1))){
var state_13826__$1 = state_13826;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13826__$1,(2),res,v);
} else {
if((state_val_13827 === (2))){
var inst_13823 = (state_13826[(2)]);
var inst_13824 = cljs.core.async.close_BANG_.call(null,res);
var state_13826__$1 = (function (){var statearr_13828 = state_13826;
(statearr_13828[(7)] = inst_13823);

return statearr_13828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13826__$1,inst_13824);
} else {
return null;
}
}
});})(c__8543__auto___14003,res,vec__13821,v,p,job,jobs,results))
;
return ((function (switch__8478__auto__,c__8543__auto___14003,res,vec__13821,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_13832 = [null,null,null,null,null,null,null,null];
(statearr_13832[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_13832[(1)] = (1));

return statearr_13832;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_13826){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13826);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13833){if((e13833 instanceof Object)){
var ex__8482__auto__ = e13833;
var statearr_13834_14004 = state_13826;
(statearr_13834_14004[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13833;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14005 = state_13826;
state_13826 = G__14005;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_13826){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_13826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14003,res,vec__13821,v,p,job,jobs,results))
})();
var state__8545__auto__ = (function (){var statearr_13835 = f__8544__auto__.call(null);
(statearr_13835[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14003);

return statearr_13835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14003,res,vec__13821,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__13836){
var vec__13837 = p__13836;
var v = cljs.core.nth.call(null,vec__13837,(0),null);
var p = cljs.core.nth.call(null,vec__13837,(1),null);
var job = vec__13837;
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
var n__5997__auto___14006 = n;
var __14007 = (0);
while(true){
if((__14007 < n__5997__auto___14006)){
var G__13838_14008 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__13838_14008) {
case "compute":
var c__8543__auto___14010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14007,c__8543__auto___14010,G__13838_14008,n__5997__auto___14006,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (__14007,c__8543__auto___14010,G__13838_14008,n__5997__auto___14006,jobs,results,process,async){
return (function (state_13851){
var state_val_13852 = (state_13851[(1)]);
if((state_val_13852 === (1))){
var state_13851__$1 = state_13851;
var statearr_13853_14011 = state_13851__$1;
(statearr_13853_14011[(2)] = null);

(statearr_13853_14011[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (2))){
var state_13851__$1 = state_13851;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13851__$1,(4),jobs);
} else {
if((state_val_13852 === (3))){
var inst_13849 = (state_13851[(2)]);
var state_13851__$1 = state_13851;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13851__$1,inst_13849);
} else {
if((state_val_13852 === (4))){
var inst_13841 = (state_13851[(2)]);
var inst_13842 = process.call(null,inst_13841);
var state_13851__$1 = state_13851;
if(cljs.core.truth_(inst_13842)){
var statearr_13854_14012 = state_13851__$1;
(statearr_13854_14012[(1)] = (5));

} else {
var statearr_13855_14013 = state_13851__$1;
(statearr_13855_14013[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (5))){
var state_13851__$1 = state_13851;
var statearr_13856_14014 = state_13851__$1;
(statearr_13856_14014[(2)] = null);

(statearr_13856_14014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (6))){
var state_13851__$1 = state_13851;
var statearr_13857_14015 = state_13851__$1;
(statearr_13857_14015[(2)] = null);

(statearr_13857_14015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13852 === (7))){
var inst_13847 = (state_13851[(2)]);
var state_13851__$1 = state_13851;
var statearr_13858_14016 = state_13851__$1;
(statearr_13858_14016[(2)] = inst_13847);

(statearr_13858_14016[(1)] = (3));


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
});})(__14007,c__8543__auto___14010,G__13838_14008,n__5997__auto___14006,jobs,results,process,async))
;
return ((function (__14007,switch__8478__auto__,c__8543__auto___14010,G__13838_14008,n__5997__auto___14006,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_13862 = [null,null,null,null,null,null,null];
(statearr_13862[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_13862[(1)] = (1));

return statearr_13862;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_13851){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13851);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13863){if((e13863 instanceof Object)){
var ex__8482__auto__ = e13863;
var statearr_13864_14017 = state_13851;
(statearr_13864_14017[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13851);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13863;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14018 = state_13851;
state_13851 = G__14018;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_13851){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_13851);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(__14007,switch__8478__auto__,c__8543__auto___14010,G__13838_14008,n__5997__auto___14006,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_13865 = f__8544__auto__.call(null);
(statearr_13865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14010);

return statearr_13865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(__14007,c__8543__auto___14010,G__13838_14008,n__5997__auto___14006,jobs,results,process,async))
);


break;
case "async":
var c__8543__auto___14019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14007,c__8543__auto___14019,G__13838_14008,n__5997__auto___14006,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (__14007,c__8543__auto___14019,G__13838_14008,n__5997__auto___14006,jobs,results,process,async){
return (function (state_13878){
var state_val_13879 = (state_13878[(1)]);
if((state_val_13879 === (1))){
var state_13878__$1 = state_13878;
var statearr_13880_14020 = state_13878__$1;
(statearr_13880_14020[(2)] = null);

(statearr_13880_14020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13879 === (2))){
var state_13878__$1 = state_13878;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13878__$1,(4),jobs);
} else {
if((state_val_13879 === (3))){
var inst_13876 = (state_13878[(2)]);
var state_13878__$1 = state_13878;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13878__$1,inst_13876);
} else {
if((state_val_13879 === (4))){
var inst_13868 = (state_13878[(2)]);
var inst_13869 = async.call(null,inst_13868);
var state_13878__$1 = state_13878;
if(cljs.core.truth_(inst_13869)){
var statearr_13881_14021 = state_13878__$1;
(statearr_13881_14021[(1)] = (5));

} else {
var statearr_13882_14022 = state_13878__$1;
(statearr_13882_14022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13879 === (5))){
var state_13878__$1 = state_13878;
var statearr_13883_14023 = state_13878__$1;
(statearr_13883_14023[(2)] = null);

(statearr_13883_14023[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13879 === (6))){
var state_13878__$1 = state_13878;
var statearr_13884_14024 = state_13878__$1;
(statearr_13884_14024[(2)] = null);

(statearr_13884_14024[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13879 === (7))){
var inst_13874 = (state_13878[(2)]);
var state_13878__$1 = state_13878;
var statearr_13885_14025 = state_13878__$1;
(statearr_13885_14025[(2)] = inst_13874);

(statearr_13885_14025[(1)] = (3));


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
});})(__14007,c__8543__auto___14019,G__13838_14008,n__5997__auto___14006,jobs,results,process,async))
;
return ((function (__14007,switch__8478__auto__,c__8543__auto___14019,G__13838_14008,n__5997__auto___14006,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_13889 = [null,null,null,null,null,null,null];
(statearr_13889[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_13889[(1)] = (1));

return statearr_13889;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_13878){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13878);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13890){if((e13890 instanceof Object)){
var ex__8482__auto__ = e13890;
var statearr_13891_14026 = state_13878;
(statearr_13891_14026[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13878);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14027 = state_13878;
state_13878 = G__14027;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_13878){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_13878);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(__14007,switch__8478__auto__,c__8543__auto___14019,G__13838_14008,n__5997__auto___14006,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_13892 = f__8544__auto__.call(null);
(statearr_13892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14019);

return statearr_13892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(__14007,c__8543__auto___14019,G__13838_14008,n__5997__auto___14006,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14028 = (__14007 + (1));
__14007 = G__14028;
continue;
} else {
}
break;
}

var c__8543__auto___14029 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14029,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14029,jobs,results,process,async){
return (function (state_13914){
var state_val_13915 = (state_13914[(1)]);
if((state_val_13915 === (1))){
var state_13914__$1 = state_13914;
var statearr_13916_14030 = state_13914__$1;
(statearr_13916_14030[(2)] = null);

(statearr_13916_14030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13915 === (2))){
var state_13914__$1 = state_13914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13914__$1,(4),from);
} else {
if((state_val_13915 === (3))){
var inst_13912 = (state_13914[(2)]);
var state_13914__$1 = state_13914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13914__$1,inst_13912);
} else {
if((state_val_13915 === (4))){
var inst_13895 = (state_13914[(7)]);
var inst_13895__$1 = (state_13914[(2)]);
var inst_13896 = (inst_13895__$1 == null);
var state_13914__$1 = (function (){var statearr_13917 = state_13914;
(statearr_13917[(7)] = inst_13895__$1);

return statearr_13917;
})();
if(cljs.core.truth_(inst_13896)){
var statearr_13918_14031 = state_13914__$1;
(statearr_13918_14031[(1)] = (5));

} else {
var statearr_13919_14032 = state_13914__$1;
(statearr_13919_14032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13915 === (5))){
var inst_13898 = cljs.core.async.close_BANG_.call(null,jobs);
var state_13914__$1 = state_13914;
var statearr_13920_14033 = state_13914__$1;
(statearr_13920_14033[(2)] = inst_13898);

(statearr_13920_14033[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13915 === (6))){
var inst_13900 = (state_13914[(8)]);
var inst_13895 = (state_13914[(7)]);
var inst_13900__$1 = cljs.core.async.chan.call(null,(1));
var inst_13901 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_13902 = [inst_13895,inst_13900__$1];
var inst_13903 = (new cljs.core.PersistentVector(null,2,(5),inst_13901,inst_13902,null));
var state_13914__$1 = (function (){var statearr_13921 = state_13914;
(statearr_13921[(8)] = inst_13900__$1);

return statearr_13921;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13914__$1,(8),jobs,inst_13903);
} else {
if((state_val_13915 === (7))){
var inst_13910 = (state_13914[(2)]);
var state_13914__$1 = state_13914;
var statearr_13922_14034 = state_13914__$1;
(statearr_13922_14034[(2)] = inst_13910);

(statearr_13922_14034[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13915 === (8))){
var inst_13900 = (state_13914[(8)]);
var inst_13905 = (state_13914[(2)]);
var state_13914__$1 = (function (){var statearr_13923 = state_13914;
(statearr_13923[(9)] = inst_13905);

return statearr_13923;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13914__$1,(9),results,inst_13900);
} else {
if((state_val_13915 === (9))){
var inst_13907 = (state_13914[(2)]);
var state_13914__$1 = (function (){var statearr_13924 = state_13914;
(statearr_13924[(10)] = inst_13907);

return statearr_13924;
})();
var statearr_13925_14035 = state_13914__$1;
(statearr_13925_14035[(2)] = null);

(statearr_13925_14035[(1)] = (2));


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
});})(c__8543__auto___14029,jobs,results,process,async))
;
return ((function (switch__8478__auto__,c__8543__auto___14029,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0 = (function (){
var statearr_13929 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_13929[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_13929[(1)] = (1));

return statearr_13929;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_13914){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e13930){if((e13930 instanceof Object)){
var ex__8482__auto__ = e13930;
var statearr_13931_14036 = state_13914;
(statearr_13931_14036[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13930;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14037 = state_13914;
state_13914 = G__14037;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_13914){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_13914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14029,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_13932 = f__8544__auto__.call(null);
(statearr_13932[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14029);

return statearr_13932;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14029,jobs,results,process,async))
);


var c__8543__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto__,jobs,results,process,async){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto__,jobs,results,process,async){
return (function (state_13970){
var state_val_13971 = (state_13970[(1)]);
if((state_val_13971 === (7))){
var inst_13966 = (state_13970[(2)]);
var state_13970__$1 = state_13970;
var statearr_13972_14038 = state_13970__$1;
(statearr_13972_14038[(2)] = inst_13966);

(statearr_13972_14038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (20))){
var state_13970__$1 = state_13970;
var statearr_13973_14039 = state_13970__$1;
(statearr_13973_14039[(2)] = null);

(statearr_13973_14039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (1))){
var state_13970__$1 = state_13970;
var statearr_13974_14040 = state_13970__$1;
(statearr_13974_14040[(2)] = null);

(statearr_13974_14040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (4))){
var inst_13935 = (state_13970[(7)]);
var inst_13935__$1 = (state_13970[(2)]);
var inst_13936 = (inst_13935__$1 == null);
var state_13970__$1 = (function (){var statearr_13975 = state_13970;
(statearr_13975[(7)] = inst_13935__$1);

return statearr_13975;
})();
if(cljs.core.truth_(inst_13936)){
var statearr_13976_14041 = state_13970__$1;
(statearr_13976_14041[(1)] = (5));

} else {
var statearr_13977_14042 = state_13970__$1;
(statearr_13977_14042[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (15))){
var inst_13948 = (state_13970[(8)]);
var state_13970__$1 = state_13970;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13970__$1,(18),to,inst_13948);
} else {
if((state_val_13971 === (21))){
var inst_13961 = (state_13970[(2)]);
var state_13970__$1 = state_13970;
var statearr_13978_14043 = state_13970__$1;
(statearr_13978_14043[(2)] = inst_13961);

(statearr_13978_14043[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (13))){
var inst_13963 = (state_13970[(2)]);
var state_13970__$1 = (function (){var statearr_13979 = state_13970;
(statearr_13979[(9)] = inst_13963);

return statearr_13979;
})();
var statearr_13980_14044 = state_13970__$1;
(statearr_13980_14044[(2)] = null);

(statearr_13980_14044[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (6))){
var inst_13935 = (state_13970[(7)]);
var state_13970__$1 = state_13970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13970__$1,(11),inst_13935);
} else {
if((state_val_13971 === (17))){
var inst_13956 = (state_13970[(2)]);
var state_13970__$1 = state_13970;
if(cljs.core.truth_(inst_13956)){
var statearr_13981_14045 = state_13970__$1;
(statearr_13981_14045[(1)] = (19));

} else {
var statearr_13982_14046 = state_13970__$1;
(statearr_13982_14046[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (3))){
var inst_13968 = (state_13970[(2)]);
var state_13970__$1 = state_13970;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13970__$1,inst_13968);
} else {
if((state_val_13971 === (12))){
var inst_13945 = (state_13970[(10)]);
var state_13970__$1 = state_13970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13970__$1,(14),inst_13945);
} else {
if((state_val_13971 === (2))){
var state_13970__$1 = state_13970;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13970__$1,(4),results);
} else {
if((state_val_13971 === (19))){
var state_13970__$1 = state_13970;
var statearr_13983_14047 = state_13970__$1;
(statearr_13983_14047[(2)] = null);

(statearr_13983_14047[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (11))){
var inst_13945 = (state_13970[(2)]);
var state_13970__$1 = (function (){var statearr_13984 = state_13970;
(statearr_13984[(10)] = inst_13945);

return statearr_13984;
})();
var statearr_13985_14048 = state_13970__$1;
(statearr_13985_14048[(2)] = null);

(statearr_13985_14048[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (9))){
var state_13970__$1 = state_13970;
var statearr_13986_14049 = state_13970__$1;
(statearr_13986_14049[(2)] = null);

(statearr_13986_14049[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (5))){
var state_13970__$1 = state_13970;
if(cljs.core.truth_(close_QMARK_)){
var statearr_13987_14050 = state_13970__$1;
(statearr_13987_14050[(1)] = (8));

} else {
var statearr_13988_14051 = state_13970__$1;
(statearr_13988_14051[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (14))){
var inst_13948 = (state_13970[(8)]);
var inst_13950 = (state_13970[(11)]);
var inst_13948__$1 = (state_13970[(2)]);
var inst_13949 = (inst_13948__$1 == null);
var inst_13950__$1 = cljs.core.not.call(null,inst_13949);
var state_13970__$1 = (function (){var statearr_13989 = state_13970;
(statearr_13989[(8)] = inst_13948__$1);

(statearr_13989[(11)] = inst_13950__$1);

return statearr_13989;
})();
if(inst_13950__$1){
var statearr_13990_14052 = state_13970__$1;
(statearr_13990_14052[(1)] = (15));

} else {
var statearr_13991_14053 = state_13970__$1;
(statearr_13991_14053[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (16))){
var inst_13950 = (state_13970[(11)]);
var state_13970__$1 = state_13970;
var statearr_13992_14054 = state_13970__$1;
(statearr_13992_14054[(2)] = inst_13950);

(statearr_13992_14054[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (10))){
var inst_13942 = (state_13970[(2)]);
var state_13970__$1 = state_13970;
var statearr_13993_14055 = state_13970__$1;
(statearr_13993_14055[(2)] = inst_13942);

(statearr_13993_14055[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (18))){
var inst_13953 = (state_13970[(2)]);
var state_13970__$1 = state_13970;
var statearr_13994_14056 = state_13970__$1;
(statearr_13994_14056[(2)] = inst_13953);

(statearr_13994_14056[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13971 === (8))){
var inst_13939 = cljs.core.async.close_BANG_.call(null,to);
var state_13970__$1 = state_13970;
var statearr_13995_14057 = state_13970__$1;
(statearr_13995_14057[(2)] = inst_13939);

(statearr_13995_14057[(1)] = (10));


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
var statearr_13999 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13999[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__);

(statearr_13999[(1)] = (1));

return statearr_13999;
});
var cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1 = (function (state_13970){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_13970);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14000){if((e14000 instanceof Object)){
var ex__8482__auto__ = e14000;
var statearr_14001_14058 = state_13970;
(statearr_14001_14058[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13970);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14000;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14059 = state_13970;
state_13970 = G__14059;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__ = function(state_13970){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1.call(this,state_13970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__,jobs,results,process,async))
})();
var state__8545__auto__ = (function (){var statearr_14002 = f__8544__auto__.call(null);
(statearr_14002[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_14002;
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
var args14060 = [];
var len__6152__auto___14063 = arguments.length;
var i__6153__auto___14064 = (0);
while(true){
if((i__6153__auto___14064 < len__6152__auto___14063)){
args14060.push((arguments[i__6153__auto___14064]));

var G__14065 = (i__6153__auto___14064 + (1));
i__6153__auto___14064 = G__14065;
continue;
} else {
}
break;
}

var G__14062 = args14060.length;
switch (G__14062) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14060.length)].join('')));

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
var args14067 = [];
var len__6152__auto___14070 = arguments.length;
var i__6153__auto___14071 = (0);
while(true){
if((i__6153__auto___14071 < len__6152__auto___14070)){
args14067.push((arguments[i__6153__auto___14071]));

var G__14072 = (i__6153__auto___14071 + (1));
i__6153__auto___14071 = G__14072;
continue;
} else {
}
break;
}

var G__14069 = args14067.length;
switch (G__14069) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14067.length)].join('')));

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
var args14074 = [];
var len__6152__auto___14127 = arguments.length;
var i__6153__auto___14128 = (0);
while(true){
if((i__6153__auto___14128 < len__6152__auto___14127)){
args14074.push((arguments[i__6153__auto___14128]));

var G__14129 = (i__6153__auto___14128 + (1));
i__6153__auto___14128 = G__14129;
continue;
} else {
}
break;
}

var G__14076 = args14074.length;
switch (G__14076) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14074.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__8543__auto___14131 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14131,tc,fc){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14131,tc,fc){
return (function (state_14102){
var state_val_14103 = (state_14102[(1)]);
if((state_val_14103 === (7))){
var inst_14098 = (state_14102[(2)]);
var state_14102__$1 = state_14102;
var statearr_14104_14132 = state_14102__$1;
(statearr_14104_14132[(2)] = inst_14098);

(statearr_14104_14132[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (1))){
var state_14102__$1 = state_14102;
var statearr_14105_14133 = state_14102__$1;
(statearr_14105_14133[(2)] = null);

(statearr_14105_14133[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (4))){
var inst_14079 = (state_14102[(7)]);
var inst_14079__$1 = (state_14102[(2)]);
var inst_14080 = (inst_14079__$1 == null);
var state_14102__$1 = (function (){var statearr_14106 = state_14102;
(statearr_14106[(7)] = inst_14079__$1);

return statearr_14106;
})();
if(cljs.core.truth_(inst_14080)){
var statearr_14107_14134 = state_14102__$1;
(statearr_14107_14134[(1)] = (5));

} else {
var statearr_14108_14135 = state_14102__$1;
(statearr_14108_14135[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (13))){
var state_14102__$1 = state_14102;
var statearr_14109_14136 = state_14102__$1;
(statearr_14109_14136[(2)] = null);

(statearr_14109_14136[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (6))){
var inst_14079 = (state_14102[(7)]);
var inst_14085 = p.call(null,inst_14079);
var state_14102__$1 = state_14102;
if(cljs.core.truth_(inst_14085)){
var statearr_14110_14137 = state_14102__$1;
(statearr_14110_14137[(1)] = (9));

} else {
var statearr_14111_14138 = state_14102__$1;
(statearr_14111_14138[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (3))){
var inst_14100 = (state_14102[(2)]);
var state_14102__$1 = state_14102;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14102__$1,inst_14100);
} else {
if((state_val_14103 === (12))){
var state_14102__$1 = state_14102;
var statearr_14112_14139 = state_14102__$1;
(statearr_14112_14139[(2)] = null);

(statearr_14112_14139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (2))){
var state_14102__$1 = state_14102;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14102__$1,(4),ch);
} else {
if((state_val_14103 === (11))){
var inst_14079 = (state_14102[(7)]);
var inst_14089 = (state_14102[(2)]);
var state_14102__$1 = state_14102;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14102__$1,(8),inst_14089,inst_14079);
} else {
if((state_val_14103 === (9))){
var state_14102__$1 = state_14102;
var statearr_14113_14140 = state_14102__$1;
(statearr_14113_14140[(2)] = tc);

(statearr_14113_14140[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (5))){
var inst_14082 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14083 = cljs.core.async.close_BANG_.call(null,fc);
var state_14102__$1 = (function (){var statearr_14114 = state_14102;
(statearr_14114[(8)] = inst_14082);

return statearr_14114;
})();
var statearr_14115_14141 = state_14102__$1;
(statearr_14115_14141[(2)] = inst_14083);

(statearr_14115_14141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (14))){
var inst_14096 = (state_14102[(2)]);
var state_14102__$1 = state_14102;
var statearr_14116_14142 = state_14102__$1;
(statearr_14116_14142[(2)] = inst_14096);

(statearr_14116_14142[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (10))){
var state_14102__$1 = state_14102;
var statearr_14117_14143 = state_14102__$1;
(statearr_14117_14143[(2)] = fc);

(statearr_14117_14143[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14103 === (8))){
var inst_14091 = (state_14102[(2)]);
var state_14102__$1 = state_14102;
if(cljs.core.truth_(inst_14091)){
var statearr_14118_14144 = state_14102__$1;
(statearr_14118_14144[(1)] = (12));

} else {
var statearr_14119_14145 = state_14102__$1;
(statearr_14119_14145[(1)] = (13));

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
});})(c__8543__auto___14131,tc,fc))
;
return ((function (switch__8478__auto__,c__8543__auto___14131,tc,fc){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_14123 = [null,null,null,null,null,null,null,null,null];
(statearr_14123[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_14123[(1)] = (1));

return statearr_14123;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_14102){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14102);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14124){if((e14124 instanceof Object)){
var ex__8482__auto__ = e14124;
var statearr_14125_14146 = state_14102;
(statearr_14125_14146[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14102);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14124;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14147 = state_14102;
state_14102 = G__14147;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_14102){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_14102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14131,tc,fc))
})();
var state__8545__auto__ = (function (){var statearr_14126 = f__8544__auto__.call(null);
(statearr_14126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14131);

return statearr_14126;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14131,tc,fc))
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
return (function (state_14194){
var state_val_14195 = (state_14194[(1)]);
if((state_val_14195 === (1))){
var inst_14180 = init;
var state_14194__$1 = (function (){var statearr_14196 = state_14194;
(statearr_14196[(7)] = inst_14180);

return statearr_14196;
})();
var statearr_14197_14212 = state_14194__$1;
(statearr_14197_14212[(2)] = null);

(statearr_14197_14212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (2))){
var state_14194__$1 = state_14194;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14194__$1,(4),ch);
} else {
if((state_val_14195 === (3))){
var inst_14192 = (state_14194[(2)]);
var state_14194__$1 = state_14194;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14194__$1,inst_14192);
} else {
if((state_val_14195 === (4))){
var inst_14183 = (state_14194[(8)]);
var inst_14183__$1 = (state_14194[(2)]);
var inst_14184 = (inst_14183__$1 == null);
var state_14194__$1 = (function (){var statearr_14198 = state_14194;
(statearr_14198[(8)] = inst_14183__$1);

return statearr_14198;
})();
if(cljs.core.truth_(inst_14184)){
var statearr_14199_14213 = state_14194__$1;
(statearr_14199_14213[(1)] = (5));

} else {
var statearr_14200_14214 = state_14194__$1;
(statearr_14200_14214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (5))){
var inst_14180 = (state_14194[(7)]);
var state_14194__$1 = state_14194;
var statearr_14201_14215 = state_14194__$1;
(statearr_14201_14215[(2)] = inst_14180);

(statearr_14201_14215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (6))){
var inst_14180 = (state_14194[(7)]);
var inst_14183 = (state_14194[(8)]);
var inst_14187 = f.call(null,inst_14180,inst_14183);
var inst_14180__$1 = inst_14187;
var state_14194__$1 = (function (){var statearr_14202 = state_14194;
(statearr_14202[(7)] = inst_14180__$1);

return statearr_14202;
})();
var statearr_14203_14216 = state_14194__$1;
(statearr_14203_14216[(2)] = null);

(statearr_14203_14216[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14195 === (7))){
var inst_14190 = (state_14194[(2)]);
var state_14194__$1 = state_14194;
var statearr_14204_14217 = state_14194__$1;
(statearr_14204_14217[(2)] = inst_14190);

(statearr_14204_14217[(1)] = (3));


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
var statearr_14208 = [null,null,null,null,null,null,null,null,null];
(statearr_14208[(0)] = cljs$core$async$reduce_$_state_machine__8479__auto__);

(statearr_14208[(1)] = (1));

return statearr_14208;
});
var cljs$core$async$reduce_$_state_machine__8479__auto____1 = (function (state_14194){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14194);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14209){if((e14209 instanceof Object)){
var ex__8482__auto__ = e14209;
var statearr_14210_14218 = state_14194;
(statearr_14210_14218[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14194);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14209;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14219 = state_14194;
state_14194 = G__14219;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__8479__auto__ = function(state_14194){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__8479__auto____1.call(this,state_14194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__8479__auto____0;
cljs$core$async$reduce_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__8479__auto____1;
return cljs$core$async$reduce_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__))
})();
var state__8545__auto__ = (function (){var statearr_14211 = f__8544__auto__.call(null);
(statearr_14211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_14211;
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
var args14220 = [];
var len__6152__auto___14272 = arguments.length;
var i__6153__auto___14273 = (0);
while(true){
if((i__6153__auto___14273 < len__6152__auto___14272)){
args14220.push((arguments[i__6153__auto___14273]));

var G__14274 = (i__6153__auto___14273 + (1));
i__6153__auto___14273 = G__14274;
continue;
} else {
}
break;
}

var G__14222 = args14220.length;
switch (G__14222) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14220.length)].join('')));

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
return (function (state_14247){
var state_val_14248 = (state_14247[(1)]);
if((state_val_14248 === (7))){
var inst_14229 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14249_14276 = state_14247__$1;
(statearr_14249_14276[(2)] = inst_14229);

(statearr_14249_14276[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (1))){
var inst_14223 = cljs.core.seq.call(null,coll);
var inst_14224 = inst_14223;
var state_14247__$1 = (function (){var statearr_14250 = state_14247;
(statearr_14250[(7)] = inst_14224);

return statearr_14250;
})();
var statearr_14251_14277 = state_14247__$1;
(statearr_14251_14277[(2)] = null);

(statearr_14251_14277[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (4))){
var inst_14224 = (state_14247[(7)]);
var inst_14227 = cljs.core.first.call(null,inst_14224);
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14247__$1,(7),ch,inst_14227);
} else {
if((state_val_14248 === (13))){
var inst_14241 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14252_14278 = state_14247__$1;
(statearr_14252_14278[(2)] = inst_14241);

(statearr_14252_14278[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (6))){
var inst_14232 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14232)){
var statearr_14253_14279 = state_14247__$1;
(statearr_14253_14279[(1)] = (8));

} else {
var statearr_14254_14280 = state_14247__$1;
(statearr_14254_14280[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (3))){
var inst_14245 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14247__$1,inst_14245);
} else {
if((state_val_14248 === (12))){
var state_14247__$1 = state_14247;
var statearr_14255_14281 = state_14247__$1;
(statearr_14255_14281[(2)] = null);

(statearr_14255_14281[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (2))){
var inst_14224 = (state_14247[(7)]);
var state_14247__$1 = state_14247;
if(cljs.core.truth_(inst_14224)){
var statearr_14256_14282 = state_14247__$1;
(statearr_14256_14282[(1)] = (4));

} else {
var statearr_14257_14283 = state_14247__$1;
(statearr_14257_14283[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (11))){
var inst_14238 = cljs.core.async.close_BANG_.call(null,ch);
var state_14247__$1 = state_14247;
var statearr_14258_14284 = state_14247__$1;
(statearr_14258_14284[(2)] = inst_14238);

(statearr_14258_14284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (9))){
var state_14247__$1 = state_14247;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14259_14285 = state_14247__$1;
(statearr_14259_14285[(1)] = (11));

} else {
var statearr_14260_14286 = state_14247__$1;
(statearr_14260_14286[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (5))){
var inst_14224 = (state_14247[(7)]);
var state_14247__$1 = state_14247;
var statearr_14261_14287 = state_14247__$1;
(statearr_14261_14287[(2)] = inst_14224);

(statearr_14261_14287[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (10))){
var inst_14243 = (state_14247[(2)]);
var state_14247__$1 = state_14247;
var statearr_14262_14288 = state_14247__$1;
(statearr_14262_14288[(2)] = inst_14243);

(statearr_14262_14288[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14248 === (8))){
var inst_14224 = (state_14247[(7)]);
var inst_14234 = cljs.core.next.call(null,inst_14224);
var inst_14224__$1 = inst_14234;
var state_14247__$1 = (function (){var statearr_14263 = state_14247;
(statearr_14263[(7)] = inst_14224__$1);

return statearr_14263;
})();
var statearr_14264_14289 = state_14247__$1;
(statearr_14264_14289[(2)] = null);

(statearr_14264_14289[(1)] = (2));


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
var statearr_14268 = [null,null,null,null,null,null,null,null];
(statearr_14268[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_14268[(1)] = (1));

return statearr_14268;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_14247){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14247);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14269){if((e14269 instanceof Object)){
var ex__8482__auto__ = e14269;
var statearr_14270_14290 = state_14247;
(statearr_14270_14290[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14291 = state_14247;
state_14247 = G__14291;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_14247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_14247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__))
})();
var state__8545__auto__ = (function (){var statearr_14271 = f__8544__auto__.call(null);
(statearr_14271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_14271;
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
if(typeof cljs.core.async.t_cljs$core$async14513 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14513 = (function (mult,ch,cs,meta14514){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta14514 = meta14514;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14515,meta14514__$1){
var self__ = this;
var _14515__$1 = this;
return (new cljs.core.async.t_cljs$core$async14513(self__.mult,self__.ch,self__.cs,meta14514__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14515){
var self__ = this;
var _14515__$1 = this;
return self__.meta14514;
});})(cs))
;

cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14513.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async14513.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta14514","meta14514",-521660204,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async14513.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14513.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14513";

cljs.core.async.t_cljs$core$async14513.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async14513");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async14513 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async14513(mult__$1,ch__$1,cs__$1,meta14514){
return (new cljs.core.async.t_cljs$core$async14513(mult__$1,ch__$1,cs__$1,meta14514));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async14513(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__8543__auto___14734 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___14734,cs,m,dchan,dctr,done){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___14734,cs,m,dchan,dctr,done){
return (function (state_14646){
var state_val_14647 = (state_14646[(1)]);
if((state_val_14647 === (7))){
var inst_14642 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14648_14735 = state_14646__$1;
(statearr_14648_14735[(2)] = inst_14642);

(statearr_14648_14735[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (20))){
var inst_14547 = (state_14646[(7)]);
var inst_14557 = cljs.core.first.call(null,inst_14547);
var inst_14558 = cljs.core.nth.call(null,inst_14557,(0),null);
var inst_14559 = cljs.core.nth.call(null,inst_14557,(1),null);
var state_14646__$1 = (function (){var statearr_14649 = state_14646;
(statearr_14649[(8)] = inst_14558);

return statearr_14649;
})();
if(cljs.core.truth_(inst_14559)){
var statearr_14650_14736 = state_14646__$1;
(statearr_14650_14736[(1)] = (22));

} else {
var statearr_14651_14737 = state_14646__$1;
(statearr_14651_14737[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (27))){
var inst_14589 = (state_14646[(9)]);
var inst_14518 = (state_14646[(10)]);
var inst_14587 = (state_14646[(11)]);
var inst_14594 = (state_14646[(12)]);
var inst_14594__$1 = cljs.core._nth.call(null,inst_14587,inst_14589);
var inst_14595 = cljs.core.async.put_BANG_.call(null,inst_14594__$1,inst_14518,done);
var state_14646__$1 = (function (){var statearr_14652 = state_14646;
(statearr_14652[(12)] = inst_14594__$1);

return statearr_14652;
})();
if(cljs.core.truth_(inst_14595)){
var statearr_14653_14738 = state_14646__$1;
(statearr_14653_14738[(1)] = (30));

} else {
var statearr_14654_14739 = state_14646__$1;
(statearr_14654_14739[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (1))){
var state_14646__$1 = state_14646;
var statearr_14655_14740 = state_14646__$1;
(statearr_14655_14740[(2)] = null);

(statearr_14655_14740[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (24))){
var inst_14547 = (state_14646[(7)]);
var inst_14564 = (state_14646[(2)]);
var inst_14565 = cljs.core.next.call(null,inst_14547);
var inst_14527 = inst_14565;
var inst_14528 = null;
var inst_14529 = (0);
var inst_14530 = (0);
var state_14646__$1 = (function (){var statearr_14656 = state_14646;
(statearr_14656[(13)] = inst_14529);

(statearr_14656[(14)] = inst_14528);

(statearr_14656[(15)] = inst_14564);

(statearr_14656[(16)] = inst_14527);

(statearr_14656[(17)] = inst_14530);

return statearr_14656;
})();
var statearr_14657_14741 = state_14646__$1;
(statearr_14657_14741[(2)] = null);

(statearr_14657_14741[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (39))){
var state_14646__$1 = state_14646;
var statearr_14661_14742 = state_14646__$1;
(statearr_14661_14742[(2)] = null);

(statearr_14661_14742[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (4))){
var inst_14518 = (state_14646[(10)]);
var inst_14518__$1 = (state_14646[(2)]);
var inst_14519 = (inst_14518__$1 == null);
var state_14646__$1 = (function (){var statearr_14662 = state_14646;
(statearr_14662[(10)] = inst_14518__$1);

return statearr_14662;
})();
if(cljs.core.truth_(inst_14519)){
var statearr_14663_14743 = state_14646__$1;
(statearr_14663_14743[(1)] = (5));

} else {
var statearr_14664_14744 = state_14646__$1;
(statearr_14664_14744[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (15))){
var inst_14529 = (state_14646[(13)]);
var inst_14528 = (state_14646[(14)]);
var inst_14527 = (state_14646[(16)]);
var inst_14530 = (state_14646[(17)]);
var inst_14543 = (state_14646[(2)]);
var inst_14544 = (inst_14530 + (1));
var tmp14658 = inst_14529;
var tmp14659 = inst_14528;
var tmp14660 = inst_14527;
var inst_14527__$1 = tmp14660;
var inst_14528__$1 = tmp14659;
var inst_14529__$1 = tmp14658;
var inst_14530__$1 = inst_14544;
var state_14646__$1 = (function (){var statearr_14665 = state_14646;
(statearr_14665[(13)] = inst_14529__$1);

(statearr_14665[(14)] = inst_14528__$1);

(statearr_14665[(18)] = inst_14543);

(statearr_14665[(16)] = inst_14527__$1);

(statearr_14665[(17)] = inst_14530__$1);

return statearr_14665;
})();
var statearr_14666_14745 = state_14646__$1;
(statearr_14666_14745[(2)] = null);

(statearr_14666_14745[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (21))){
var inst_14568 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14670_14746 = state_14646__$1;
(statearr_14670_14746[(2)] = inst_14568);

(statearr_14670_14746[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (31))){
var inst_14594 = (state_14646[(12)]);
var inst_14598 = done.call(null,null);
var inst_14599 = cljs.core.async.untap_STAR_.call(null,m,inst_14594);
var state_14646__$1 = (function (){var statearr_14671 = state_14646;
(statearr_14671[(19)] = inst_14598);

return statearr_14671;
})();
var statearr_14672_14747 = state_14646__$1;
(statearr_14672_14747[(2)] = inst_14599);

(statearr_14672_14747[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (32))){
var inst_14589 = (state_14646[(9)]);
var inst_14588 = (state_14646[(20)]);
var inst_14587 = (state_14646[(11)]);
var inst_14586 = (state_14646[(21)]);
var inst_14601 = (state_14646[(2)]);
var inst_14602 = (inst_14589 + (1));
var tmp14667 = inst_14588;
var tmp14668 = inst_14587;
var tmp14669 = inst_14586;
var inst_14586__$1 = tmp14669;
var inst_14587__$1 = tmp14668;
var inst_14588__$1 = tmp14667;
var inst_14589__$1 = inst_14602;
var state_14646__$1 = (function (){var statearr_14673 = state_14646;
(statearr_14673[(9)] = inst_14589__$1);

(statearr_14673[(20)] = inst_14588__$1);

(statearr_14673[(22)] = inst_14601);

(statearr_14673[(11)] = inst_14587__$1);

(statearr_14673[(21)] = inst_14586__$1);

return statearr_14673;
})();
var statearr_14674_14748 = state_14646__$1;
(statearr_14674_14748[(2)] = null);

(statearr_14674_14748[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (40))){
var inst_14614 = (state_14646[(23)]);
var inst_14618 = done.call(null,null);
var inst_14619 = cljs.core.async.untap_STAR_.call(null,m,inst_14614);
var state_14646__$1 = (function (){var statearr_14675 = state_14646;
(statearr_14675[(24)] = inst_14618);

return statearr_14675;
})();
var statearr_14676_14749 = state_14646__$1;
(statearr_14676_14749[(2)] = inst_14619);

(statearr_14676_14749[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (33))){
var inst_14605 = (state_14646[(25)]);
var inst_14607 = cljs.core.chunked_seq_QMARK_.call(null,inst_14605);
var state_14646__$1 = state_14646;
if(inst_14607){
var statearr_14677_14750 = state_14646__$1;
(statearr_14677_14750[(1)] = (36));

} else {
var statearr_14678_14751 = state_14646__$1;
(statearr_14678_14751[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (13))){
var inst_14537 = (state_14646[(26)]);
var inst_14540 = cljs.core.async.close_BANG_.call(null,inst_14537);
var state_14646__$1 = state_14646;
var statearr_14679_14752 = state_14646__$1;
(statearr_14679_14752[(2)] = inst_14540);

(statearr_14679_14752[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (22))){
var inst_14558 = (state_14646[(8)]);
var inst_14561 = cljs.core.async.close_BANG_.call(null,inst_14558);
var state_14646__$1 = state_14646;
var statearr_14680_14753 = state_14646__$1;
(statearr_14680_14753[(2)] = inst_14561);

(statearr_14680_14753[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (36))){
var inst_14605 = (state_14646[(25)]);
var inst_14609 = cljs.core.chunk_first.call(null,inst_14605);
var inst_14610 = cljs.core.chunk_rest.call(null,inst_14605);
var inst_14611 = cljs.core.count.call(null,inst_14609);
var inst_14586 = inst_14610;
var inst_14587 = inst_14609;
var inst_14588 = inst_14611;
var inst_14589 = (0);
var state_14646__$1 = (function (){var statearr_14681 = state_14646;
(statearr_14681[(9)] = inst_14589);

(statearr_14681[(20)] = inst_14588);

(statearr_14681[(11)] = inst_14587);

(statearr_14681[(21)] = inst_14586);

return statearr_14681;
})();
var statearr_14682_14754 = state_14646__$1;
(statearr_14682_14754[(2)] = null);

(statearr_14682_14754[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (41))){
var inst_14605 = (state_14646[(25)]);
var inst_14621 = (state_14646[(2)]);
var inst_14622 = cljs.core.next.call(null,inst_14605);
var inst_14586 = inst_14622;
var inst_14587 = null;
var inst_14588 = (0);
var inst_14589 = (0);
var state_14646__$1 = (function (){var statearr_14683 = state_14646;
(statearr_14683[(9)] = inst_14589);

(statearr_14683[(20)] = inst_14588);

(statearr_14683[(11)] = inst_14587);

(statearr_14683[(27)] = inst_14621);

(statearr_14683[(21)] = inst_14586);

return statearr_14683;
})();
var statearr_14684_14755 = state_14646__$1;
(statearr_14684_14755[(2)] = null);

(statearr_14684_14755[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (43))){
var state_14646__$1 = state_14646;
var statearr_14685_14756 = state_14646__$1;
(statearr_14685_14756[(2)] = null);

(statearr_14685_14756[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (29))){
var inst_14630 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14686_14757 = state_14646__$1;
(statearr_14686_14757[(2)] = inst_14630);

(statearr_14686_14757[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (44))){
var inst_14639 = (state_14646[(2)]);
var state_14646__$1 = (function (){var statearr_14687 = state_14646;
(statearr_14687[(28)] = inst_14639);

return statearr_14687;
})();
var statearr_14688_14758 = state_14646__$1;
(statearr_14688_14758[(2)] = null);

(statearr_14688_14758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (6))){
var inst_14578 = (state_14646[(29)]);
var inst_14577 = cljs.core.deref.call(null,cs);
var inst_14578__$1 = cljs.core.keys.call(null,inst_14577);
var inst_14579 = cljs.core.count.call(null,inst_14578__$1);
var inst_14580 = cljs.core.reset_BANG_.call(null,dctr,inst_14579);
var inst_14585 = cljs.core.seq.call(null,inst_14578__$1);
var inst_14586 = inst_14585;
var inst_14587 = null;
var inst_14588 = (0);
var inst_14589 = (0);
var state_14646__$1 = (function (){var statearr_14689 = state_14646;
(statearr_14689[(9)] = inst_14589);

(statearr_14689[(20)] = inst_14588);

(statearr_14689[(11)] = inst_14587);

(statearr_14689[(29)] = inst_14578__$1);

(statearr_14689[(30)] = inst_14580);

(statearr_14689[(21)] = inst_14586);

return statearr_14689;
})();
var statearr_14690_14759 = state_14646__$1;
(statearr_14690_14759[(2)] = null);

(statearr_14690_14759[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (28))){
var inst_14605 = (state_14646[(25)]);
var inst_14586 = (state_14646[(21)]);
var inst_14605__$1 = cljs.core.seq.call(null,inst_14586);
var state_14646__$1 = (function (){var statearr_14691 = state_14646;
(statearr_14691[(25)] = inst_14605__$1);

return statearr_14691;
})();
if(inst_14605__$1){
var statearr_14692_14760 = state_14646__$1;
(statearr_14692_14760[(1)] = (33));

} else {
var statearr_14693_14761 = state_14646__$1;
(statearr_14693_14761[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (25))){
var inst_14589 = (state_14646[(9)]);
var inst_14588 = (state_14646[(20)]);
var inst_14591 = (inst_14589 < inst_14588);
var inst_14592 = inst_14591;
var state_14646__$1 = state_14646;
if(cljs.core.truth_(inst_14592)){
var statearr_14694_14762 = state_14646__$1;
(statearr_14694_14762[(1)] = (27));

} else {
var statearr_14695_14763 = state_14646__$1;
(statearr_14695_14763[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (34))){
var state_14646__$1 = state_14646;
var statearr_14696_14764 = state_14646__$1;
(statearr_14696_14764[(2)] = null);

(statearr_14696_14764[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (17))){
var state_14646__$1 = state_14646;
var statearr_14697_14765 = state_14646__$1;
(statearr_14697_14765[(2)] = null);

(statearr_14697_14765[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (3))){
var inst_14644 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14646__$1,inst_14644);
} else {
if((state_val_14647 === (12))){
var inst_14573 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14698_14766 = state_14646__$1;
(statearr_14698_14766[(2)] = inst_14573);

(statearr_14698_14766[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (2))){
var state_14646__$1 = state_14646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14646__$1,(4),ch);
} else {
if((state_val_14647 === (23))){
var state_14646__$1 = state_14646;
var statearr_14699_14767 = state_14646__$1;
(statearr_14699_14767[(2)] = null);

(statearr_14699_14767[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (35))){
var inst_14628 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14700_14768 = state_14646__$1;
(statearr_14700_14768[(2)] = inst_14628);

(statearr_14700_14768[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (19))){
var inst_14547 = (state_14646[(7)]);
var inst_14551 = cljs.core.chunk_first.call(null,inst_14547);
var inst_14552 = cljs.core.chunk_rest.call(null,inst_14547);
var inst_14553 = cljs.core.count.call(null,inst_14551);
var inst_14527 = inst_14552;
var inst_14528 = inst_14551;
var inst_14529 = inst_14553;
var inst_14530 = (0);
var state_14646__$1 = (function (){var statearr_14701 = state_14646;
(statearr_14701[(13)] = inst_14529);

(statearr_14701[(14)] = inst_14528);

(statearr_14701[(16)] = inst_14527);

(statearr_14701[(17)] = inst_14530);

return statearr_14701;
})();
var statearr_14702_14769 = state_14646__$1;
(statearr_14702_14769[(2)] = null);

(statearr_14702_14769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (11))){
var inst_14527 = (state_14646[(16)]);
var inst_14547 = (state_14646[(7)]);
var inst_14547__$1 = cljs.core.seq.call(null,inst_14527);
var state_14646__$1 = (function (){var statearr_14703 = state_14646;
(statearr_14703[(7)] = inst_14547__$1);

return statearr_14703;
})();
if(inst_14547__$1){
var statearr_14704_14770 = state_14646__$1;
(statearr_14704_14770[(1)] = (16));

} else {
var statearr_14705_14771 = state_14646__$1;
(statearr_14705_14771[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (9))){
var inst_14575 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14706_14772 = state_14646__$1;
(statearr_14706_14772[(2)] = inst_14575);

(statearr_14706_14772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (5))){
var inst_14525 = cljs.core.deref.call(null,cs);
var inst_14526 = cljs.core.seq.call(null,inst_14525);
var inst_14527 = inst_14526;
var inst_14528 = null;
var inst_14529 = (0);
var inst_14530 = (0);
var state_14646__$1 = (function (){var statearr_14707 = state_14646;
(statearr_14707[(13)] = inst_14529);

(statearr_14707[(14)] = inst_14528);

(statearr_14707[(16)] = inst_14527);

(statearr_14707[(17)] = inst_14530);

return statearr_14707;
})();
var statearr_14708_14773 = state_14646__$1;
(statearr_14708_14773[(2)] = null);

(statearr_14708_14773[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (14))){
var state_14646__$1 = state_14646;
var statearr_14709_14774 = state_14646__$1;
(statearr_14709_14774[(2)] = null);

(statearr_14709_14774[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (45))){
var inst_14636 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14710_14775 = state_14646__$1;
(statearr_14710_14775[(2)] = inst_14636);

(statearr_14710_14775[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (26))){
var inst_14578 = (state_14646[(29)]);
var inst_14632 = (state_14646[(2)]);
var inst_14633 = cljs.core.seq.call(null,inst_14578);
var state_14646__$1 = (function (){var statearr_14711 = state_14646;
(statearr_14711[(31)] = inst_14632);

return statearr_14711;
})();
if(inst_14633){
var statearr_14712_14776 = state_14646__$1;
(statearr_14712_14776[(1)] = (42));

} else {
var statearr_14713_14777 = state_14646__$1;
(statearr_14713_14777[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (16))){
var inst_14547 = (state_14646[(7)]);
var inst_14549 = cljs.core.chunked_seq_QMARK_.call(null,inst_14547);
var state_14646__$1 = state_14646;
if(inst_14549){
var statearr_14714_14778 = state_14646__$1;
(statearr_14714_14778[(1)] = (19));

} else {
var statearr_14715_14779 = state_14646__$1;
(statearr_14715_14779[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (38))){
var inst_14625 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14716_14780 = state_14646__$1;
(statearr_14716_14780[(2)] = inst_14625);

(statearr_14716_14780[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (30))){
var state_14646__$1 = state_14646;
var statearr_14717_14781 = state_14646__$1;
(statearr_14717_14781[(2)] = null);

(statearr_14717_14781[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (10))){
var inst_14528 = (state_14646[(14)]);
var inst_14530 = (state_14646[(17)]);
var inst_14536 = cljs.core._nth.call(null,inst_14528,inst_14530);
var inst_14537 = cljs.core.nth.call(null,inst_14536,(0),null);
var inst_14538 = cljs.core.nth.call(null,inst_14536,(1),null);
var state_14646__$1 = (function (){var statearr_14718 = state_14646;
(statearr_14718[(26)] = inst_14537);

return statearr_14718;
})();
if(cljs.core.truth_(inst_14538)){
var statearr_14719_14782 = state_14646__$1;
(statearr_14719_14782[(1)] = (13));

} else {
var statearr_14720_14783 = state_14646__$1;
(statearr_14720_14783[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (18))){
var inst_14571 = (state_14646[(2)]);
var state_14646__$1 = state_14646;
var statearr_14721_14784 = state_14646__$1;
(statearr_14721_14784[(2)] = inst_14571);

(statearr_14721_14784[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (42))){
var state_14646__$1 = state_14646;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14646__$1,(45),dchan);
} else {
if((state_val_14647 === (37))){
var inst_14614 = (state_14646[(23)]);
var inst_14518 = (state_14646[(10)]);
var inst_14605 = (state_14646[(25)]);
var inst_14614__$1 = cljs.core.first.call(null,inst_14605);
var inst_14615 = cljs.core.async.put_BANG_.call(null,inst_14614__$1,inst_14518,done);
var state_14646__$1 = (function (){var statearr_14722 = state_14646;
(statearr_14722[(23)] = inst_14614__$1);

return statearr_14722;
})();
if(cljs.core.truth_(inst_14615)){
var statearr_14723_14785 = state_14646__$1;
(statearr_14723_14785[(1)] = (39));

} else {
var statearr_14724_14786 = state_14646__$1;
(statearr_14724_14786[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14647 === (8))){
var inst_14529 = (state_14646[(13)]);
var inst_14530 = (state_14646[(17)]);
var inst_14532 = (inst_14530 < inst_14529);
var inst_14533 = inst_14532;
var state_14646__$1 = state_14646;
if(cljs.core.truth_(inst_14533)){
var statearr_14725_14787 = state_14646__$1;
(statearr_14725_14787[(1)] = (10));

} else {
var statearr_14726_14788 = state_14646__$1;
(statearr_14726_14788[(1)] = (11));

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
});})(c__8543__auto___14734,cs,m,dchan,dctr,done))
;
return ((function (switch__8478__auto__,c__8543__auto___14734,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__8479__auto__ = null;
var cljs$core$async$mult_$_state_machine__8479__auto____0 = (function (){
var statearr_14730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14730[(0)] = cljs$core$async$mult_$_state_machine__8479__auto__);

(statearr_14730[(1)] = (1));

return statearr_14730;
});
var cljs$core$async$mult_$_state_machine__8479__auto____1 = (function (state_14646){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_14646);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e14731){if((e14731 instanceof Object)){
var ex__8482__auto__ = e14731;
var statearr_14732_14789 = state_14646;
(statearr_14732_14789[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14646);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14731;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14790 = state_14646;
state_14646 = G__14790;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__8479__auto__ = function(state_14646){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__8479__auto____1.call(this,state_14646);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__8479__auto____0;
cljs$core$async$mult_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__8479__auto____1;
return cljs$core$async$mult_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___14734,cs,m,dchan,dctr,done))
})();
var state__8545__auto__ = (function (){var statearr_14733 = f__8544__auto__.call(null);
(statearr_14733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___14734);

return statearr_14733;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___14734,cs,m,dchan,dctr,done))
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
var args14791 = [];
var len__6152__auto___14794 = arguments.length;
var i__6153__auto___14795 = (0);
while(true){
if((i__6153__auto___14795 < len__6152__auto___14794)){
args14791.push((arguments[i__6153__auto___14795]));

var G__14796 = (i__6153__auto___14795 + (1));
i__6153__auto___14795 = G__14796;
continue;
} else {
}
break;
}

var G__14793 = args14791.length;
switch (G__14793) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14791.length)].join('')));

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
var len__6152__auto___14808 = arguments.length;
var i__6153__auto___14809 = (0);
while(true){
if((i__6153__auto___14809 < len__6152__auto___14808)){
args__6159__auto__.push((arguments[i__6153__auto___14809]));

var G__14810 = (i__6153__auto___14809 + (1));
i__6153__auto___14809 = G__14810;
continue;
} else {
}
break;
}

var argseq__6160__auto__ = ((((3) < args__6159__auto__.length))?(new cljs.core.IndexedSeq(args__6159__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__6160__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__14802){
var map__14803 = p__14802;
var map__14803__$1 = ((((!((map__14803 == null)))?((((map__14803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14803):map__14803);
var opts = map__14803__$1;
var statearr_14805_14811 = state;
(statearr_14805_14811[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__14803,map__14803__$1,opts){
return (function (val){
var statearr_14806_14812 = state;
(statearr_14806_14812[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__14803,map__14803__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_14807_14813 = state;
(statearr_14807_14813[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq14798){
var G__14799 = cljs.core.first.call(null,seq14798);
var seq14798__$1 = cljs.core.next.call(null,seq14798);
var G__14800 = cljs.core.first.call(null,seq14798__$1);
var seq14798__$2 = cljs.core.next.call(null,seq14798__$1);
var G__14801 = cljs.core.first.call(null,seq14798__$2);
var seq14798__$3 = cljs.core.next.call(null,seq14798__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14799,G__14800,G__14801,seq14798__$3);
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
if(typeof cljs.core.async.t_cljs$core$async14977 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14977 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta14978){
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
this.meta14978 = meta14978;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14977.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14979,meta14978__$1){
var self__ = this;
var _14979__$1 = this;
return (new cljs.core.async.t_cljs$core$async14977(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta14978__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14977.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14979){
var self__ = this;
var _14979__$1 = this;
return self__.meta14978;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14977.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async14977.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14977.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async14977.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14977.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14977.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14977.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14977.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async14977.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta14978","meta14978",-1702268449,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async14977.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14977.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14977";

cljs.core.async.t_cljs$core$async14977.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async14977");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async14977 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async14977(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14978){
return (new cljs.core.async.t_cljs$core$async14977(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta14978));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async14977(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8543__auto___15140 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15077){
var state_val_15078 = (state_15077[(1)]);
if((state_val_15078 === (7))){
var inst_14995 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15079_15141 = state_15077__$1;
(statearr_15079_15141[(2)] = inst_14995);

(statearr_15079_15141[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (20))){
var inst_15007 = (state_15077[(7)]);
var state_15077__$1 = state_15077;
var statearr_15080_15142 = state_15077__$1;
(statearr_15080_15142[(2)] = inst_15007);

(statearr_15080_15142[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (27))){
var state_15077__$1 = state_15077;
var statearr_15081_15143 = state_15077__$1;
(statearr_15081_15143[(2)] = null);

(statearr_15081_15143[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (1))){
var inst_14983 = (state_15077[(8)]);
var inst_14983__$1 = calc_state.call(null);
var inst_14985 = (inst_14983__$1 == null);
var inst_14986 = cljs.core.not.call(null,inst_14985);
var state_15077__$1 = (function (){var statearr_15082 = state_15077;
(statearr_15082[(8)] = inst_14983__$1);

return statearr_15082;
})();
if(inst_14986){
var statearr_15083_15144 = state_15077__$1;
(statearr_15083_15144[(1)] = (2));

} else {
var statearr_15084_15145 = state_15077__$1;
(statearr_15084_15145[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (24))){
var inst_15030 = (state_15077[(9)]);
var inst_15037 = (state_15077[(10)]);
var inst_15051 = (state_15077[(11)]);
var inst_15051__$1 = inst_15030.call(null,inst_15037);
var state_15077__$1 = (function (){var statearr_15085 = state_15077;
(statearr_15085[(11)] = inst_15051__$1);

return statearr_15085;
})();
if(cljs.core.truth_(inst_15051__$1)){
var statearr_15086_15146 = state_15077__$1;
(statearr_15086_15146[(1)] = (29));

} else {
var statearr_15087_15147 = state_15077__$1;
(statearr_15087_15147[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (4))){
var inst_14998 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
if(cljs.core.truth_(inst_14998)){
var statearr_15088_15148 = state_15077__$1;
(statearr_15088_15148[(1)] = (8));

} else {
var statearr_15089_15149 = state_15077__$1;
(statearr_15089_15149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (15))){
var inst_15024 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
if(cljs.core.truth_(inst_15024)){
var statearr_15090_15150 = state_15077__$1;
(statearr_15090_15150[(1)] = (19));

} else {
var statearr_15091_15151 = state_15077__$1;
(statearr_15091_15151[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (21))){
var inst_15029 = (state_15077[(12)]);
var inst_15029__$1 = (state_15077[(2)]);
var inst_15030 = cljs.core.get.call(null,inst_15029__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15031 = cljs.core.get.call(null,inst_15029__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15032 = cljs.core.get.call(null,inst_15029__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15077__$1 = (function (){var statearr_15092 = state_15077;
(statearr_15092[(9)] = inst_15030);

(statearr_15092[(12)] = inst_15029__$1);

(statearr_15092[(13)] = inst_15031);

return statearr_15092;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15077__$1,(22),inst_15032);
} else {
if((state_val_15078 === (31))){
var inst_15059 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
if(cljs.core.truth_(inst_15059)){
var statearr_15093_15152 = state_15077__$1;
(statearr_15093_15152[(1)] = (32));

} else {
var statearr_15094_15153 = state_15077__$1;
(statearr_15094_15153[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (32))){
var inst_15036 = (state_15077[(14)]);
var state_15077__$1 = state_15077;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15077__$1,(35),out,inst_15036);
} else {
if((state_val_15078 === (33))){
var inst_15029 = (state_15077[(12)]);
var inst_15007 = inst_15029;
var state_15077__$1 = (function (){var statearr_15095 = state_15077;
(statearr_15095[(7)] = inst_15007);

return statearr_15095;
})();
var statearr_15096_15154 = state_15077__$1;
(statearr_15096_15154[(2)] = null);

(statearr_15096_15154[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (13))){
var inst_15007 = (state_15077[(7)]);
var inst_15014 = inst_15007.cljs$lang$protocol_mask$partition0$;
var inst_15015 = (inst_15014 & (64));
var inst_15016 = inst_15007.cljs$core$ISeq$;
var inst_15017 = (inst_15015) || (inst_15016);
var state_15077__$1 = state_15077;
if(cljs.core.truth_(inst_15017)){
var statearr_15097_15155 = state_15077__$1;
(statearr_15097_15155[(1)] = (16));

} else {
var statearr_15098_15156 = state_15077__$1;
(statearr_15098_15156[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (22))){
var inst_15037 = (state_15077[(10)]);
var inst_15036 = (state_15077[(14)]);
var inst_15035 = (state_15077[(2)]);
var inst_15036__$1 = cljs.core.nth.call(null,inst_15035,(0),null);
var inst_15037__$1 = cljs.core.nth.call(null,inst_15035,(1),null);
var inst_15038 = (inst_15036__$1 == null);
var inst_15039 = cljs.core._EQ_.call(null,inst_15037__$1,change);
var inst_15040 = (inst_15038) || (inst_15039);
var state_15077__$1 = (function (){var statearr_15099 = state_15077;
(statearr_15099[(10)] = inst_15037__$1);

(statearr_15099[(14)] = inst_15036__$1);

return statearr_15099;
})();
if(cljs.core.truth_(inst_15040)){
var statearr_15100_15157 = state_15077__$1;
(statearr_15100_15157[(1)] = (23));

} else {
var statearr_15101_15158 = state_15077__$1;
(statearr_15101_15158[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (36))){
var inst_15029 = (state_15077[(12)]);
var inst_15007 = inst_15029;
var state_15077__$1 = (function (){var statearr_15102 = state_15077;
(statearr_15102[(7)] = inst_15007);

return statearr_15102;
})();
var statearr_15103_15159 = state_15077__$1;
(statearr_15103_15159[(2)] = null);

(statearr_15103_15159[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (29))){
var inst_15051 = (state_15077[(11)]);
var state_15077__$1 = state_15077;
var statearr_15104_15160 = state_15077__$1;
(statearr_15104_15160[(2)] = inst_15051);

(statearr_15104_15160[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (6))){
var state_15077__$1 = state_15077;
var statearr_15105_15161 = state_15077__$1;
(statearr_15105_15161[(2)] = false);

(statearr_15105_15161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (28))){
var inst_15047 = (state_15077[(2)]);
var inst_15048 = calc_state.call(null);
var inst_15007 = inst_15048;
var state_15077__$1 = (function (){var statearr_15106 = state_15077;
(statearr_15106[(15)] = inst_15047);

(statearr_15106[(7)] = inst_15007);

return statearr_15106;
})();
var statearr_15107_15162 = state_15077__$1;
(statearr_15107_15162[(2)] = null);

(statearr_15107_15162[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (25))){
var inst_15073 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15108_15163 = state_15077__$1;
(statearr_15108_15163[(2)] = inst_15073);

(statearr_15108_15163[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (34))){
var inst_15071 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15109_15164 = state_15077__$1;
(statearr_15109_15164[(2)] = inst_15071);

(statearr_15109_15164[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (17))){
var state_15077__$1 = state_15077;
var statearr_15110_15165 = state_15077__$1;
(statearr_15110_15165[(2)] = false);

(statearr_15110_15165[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (3))){
var state_15077__$1 = state_15077;
var statearr_15111_15166 = state_15077__$1;
(statearr_15111_15166[(2)] = false);

(statearr_15111_15166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (12))){
var inst_15075 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15077__$1,inst_15075);
} else {
if((state_val_15078 === (2))){
var inst_14983 = (state_15077[(8)]);
var inst_14988 = inst_14983.cljs$lang$protocol_mask$partition0$;
var inst_14989 = (inst_14988 & (64));
var inst_14990 = inst_14983.cljs$core$ISeq$;
var inst_14991 = (inst_14989) || (inst_14990);
var state_15077__$1 = state_15077;
if(cljs.core.truth_(inst_14991)){
var statearr_15112_15167 = state_15077__$1;
(statearr_15112_15167[(1)] = (5));

} else {
var statearr_15113_15168 = state_15077__$1;
(statearr_15113_15168[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (23))){
var inst_15036 = (state_15077[(14)]);
var inst_15042 = (inst_15036 == null);
var state_15077__$1 = state_15077;
if(cljs.core.truth_(inst_15042)){
var statearr_15114_15169 = state_15077__$1;
(statearr_15114_15169[(1)] = (26));

} else {
var statearr_15115_15170 = state_15077__$1;
(statearr_15115_15170[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (35))){
var inst_15062 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
if(cljs.core.truth_(inst_15062)){
var statearr_15116_15171 = state_15077__$1;
(statearr_15116_15171[(1)] = (36));

} else {
var statearr_15117_15172 = state_15077__$1;
(statearr_15117_15172[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (19))){
var inst_15007 = (state_15077[(7)]);
var inst_15026 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15007);
var state_15077__$1 = state_15077;
var statearr_15118_15173 = state_15077__$1;
(statearr_15118_15173[(2)] = inst_15026);

(statearr_15118_15173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (11))){
var inst_15007 = (state_15077[(7)]);
var inst_15011 = (inst_15007 == null);
var inst_15012 = cljs.core.not.call(null,inst_15011);
var state_15077__$1 = state_15077;
if(inst_15012){
var statearr_15119_15174 = state_15077__$1;
(statearr_15119_15174[(1)] = (13));

} else {
var statearr_15120_15175 = state_15077__$1;
(statearr_15120_15175[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (9))){
var inst_14983 = (state_15077[(8)]);
var state_15077__$1 = state_15077;
var statearr_15121_15176 = state_15077__$1;
(statearr_15121_15176[(2)] = inst_14983);

(statearr_15121_15176[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (5))){
var state_15077__$1 = state_15077;
var statearr_15122_15177 = state_15077__$1;
(statearr_15122_15177[(2)] = true);

(statearr_15122_15177[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (14))){
var state_15077__$1 = state_15077;
var statearr_15123_15178 = state_15077__$1;
(statearr_15123_15178[(2)] = false);

(statearr_15123_15178[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (26))){
var inst_15037 = (state_15077[(10)]);
var inst_15044 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15037);
var state_15077__$1 = state_15077;
var statearr_15124_15179 = state_15077__$1;
(statearr_15124_15179[(2)] = inst_15044);

(statearr_15124_15179[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (16))){
var state_15077__$1 = state_15077;
var statearr_15125_15180 = state_15077__$1;
(statearr_15125_15180[(2)] = true);

(statearr_15125_15180[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (38))){
var inst_15067 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15126_15181 = state_15077__$1;
(statearr_15126_15181[(2)] = inst_15067);

(statearr_15126_15181[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (30))){
var inst_15030 = (state_15077[(9)]);
var inst_15037 = (state_15077[(10)]);
var inst_15031 = (state_15077[(13)]);
var inst_15054 = cljs.core.empty_QMARK_.call(null,inst_15030);
var inst_15055 = inst_15031.call(null,inst_15037);
var inst_15056 = cljs.core.not.call(null,inst_15055);
var inst_15057 = (inst_15054) && (inst_15056);
var state_15077__$1 = state_15077;
var statearr_15127_15182 = state_15077__$1;
(statearr_15127_15182[(2)] = inst_15057);

(statearr_15127_15182[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (10))){
var inst_14983 = (state_15077[(8)]);
var inst_15003 = (state_15077[(2)]);
var inst_15004 = cljs.core.get.call(null,inst_15003,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15005 = cljs.core.get.call(null,inst_15003,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15006 = cljs.core.get.call(null,inst_15003,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15007 = inst_14983;
var state_15077__$1 = (function (){var statearr_15128 = state_15077;
(statearr_15128[(16)] = inst_15004);

(statearr_15128[(17)] = inst_15005);

(statearr_15128[(7)] = inst_15007);

(statearr_15128[(18)] = inst_15006);

return statearr_15128;
})();
var statearr_15129_15183 = state_15077__$1;
(statearr_15129_15183[(2)] = null);

(statearr_15129_15183[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (18))){
var inst_15021 = (state_15077[(2)]);
var state_15077__$1 = state_15077;
var statearr_15130_15184 = state_15077__$1;
(statearr_15130_15184[(2)] = inst_15021);

(statearr_15130_15184[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (37))){
var state_15077__$1 = state_15077;
var statearr_15131_15185 = state_15077__$1;
(statearr_15131_15185[(2)] = null);

(statearr_15131_15185[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15078 === (8))){
var inst_14983 = (state_15077[(8)]);
var inst_15000 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14983);
var state_15077__$1 = state_15077;
var statearr_15132_15186 = state_15077__$1;
(statearr_15132_15186[(2)] = inst_15000);

(statearr_15132_15186[(1)] = (10));


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
});})(c__8543__auto___15140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__8478__auto__,c__8543__auto___15140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__8479__auto__ = null;
var cljs$core$async$mix_$_state_machine__8479__auto____0 = (function (){
var statearr_15136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15136[(0)] = cljs$core$async$mix_$_state_machine__8479__auto__);

(statearr_15136[(1)] = (1));

return statearr_15136;
});
var cljs$core$async$mix_$_state_machine__8479__auto____1 = (function (state_15077){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15137){if((e15137 instanceof Object)){
var ex__8482__auto__ = e15137;
var statearr_15138_15187 = state_15077;
(statearr_15138_15187[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15137;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15188 = state_15077;
state_15077 = G__15188;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__8479__auto__ = function(state_15077){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__8479__auto____1.call(this,state_15077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__8479__auto____0;
cljs$core$async$mix_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__8479__auto____1;
return cljs$core$async$mix_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__8545__auto__ = (function (){var statearr_15139 = f__8544__auto__.call(null);
(statearr_15139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15140);

return statearr_15139;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15140,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args15189 = [];
var len__6152__auto___15192 = arguments.length;
var i__6153__auto___15193 = (0);
while(true){
if((i__6153__auto___15193 < len__6152__auto___15192)){
args15189.push((arguments[i__6153__auto___15193]));

var G__15194 = (i__6153__auto___15193 + (1));
i__6153__auto___15193 = G__15194;
continue;
} else {
}
break;
}

var G__15191 = args15189.length;
switch (G__15191) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15189.length)].join('')));

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
var args15197 = [];
var len__6152__auto___15322 = arguments.length;
var i__6153__auto___15323 = (0);
while(true){
if((i__6153__auto___15323 < len__6152__auto___15322)){
args15197.push((arguments[i__6153__auto___15323]));

var G__15324 = (i__6153__auto___15323 + (1));
i__6153__auto___15323 = G__15324;
continue;
} else {
}
break;
}

var G__15199 = args15197.length;
switch (G__15199) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15197.length)].join('')));

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
return (function (p1__15196_SHARP_){
if(cljs.core.truth_(p1__15196_SHARP_.call(null,topic))){
return p1__15196_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15196_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__5094__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15200 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15200 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15201){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15201 = meta15201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15202,meta15201__$1){
var self__ = this;
var _15202__$1 = this;
return (new cljs.core.async.t_cljs$core$async15200(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15201__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15200.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15202){
var self__ = this;
var _15202__$1 = this;
return self__.meta15201;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15200.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15200.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15200.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15200.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15200.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async15200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15200.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15200.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15201","meta15201",-1905186082,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15200.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15200.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15200";

cljs.core.async.t_cljs$core$async15200.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15200");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15200 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15200(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15201){
return (new cljs.core.async.t_cljs$core$async15200(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15201));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15200(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__8543__auto___15326 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15326,mults,ensure_mult,p){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15326,mults,ensure_mult,p){
return (function (state_15274){
var state_val_15275 = (state_15274[(1)]);
if((state_val_15275 === (7))){
var inst_15270 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
var statearr_15276_15327 = state_15274__$1;
(statearr_15276_15327[(2)] = inst_15270);

(statearr_15276_15327[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (20))){
var state_15274__$1 = state_15274;
var statearr_15277_15328 = state_15274__$1;
(statearr_15277_15328[(2)] = null);

(statearr_15277_15328[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (1))){
var state_15274__$1 = state_15274;
var statearr_15278_15329 = state_15274__$1;
(statearr_15278_15329[(2)] = null);

(statearr_15278_15329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (24))){
var inst_15253 = (state_15274[(7)]);
var inst_15262 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15253);
var state_15274__$1 = state_15274;
var statearr_15279_15330 = state_15274__$1;
(statearr_15279_15330[(2)] = inst_15262);

(statearr_15279_15330[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (4))){
var inst_15205 = (state_15274[(8)]);
var inst_15205__$1 = (state_15274[(2)]);
var inst_15206 = (inst_15205__$1 == null);
var state_15274__$1 = (function (){var statearr_15280 = state_15274;
(statearr_15280[(8)] = inst_15205__$1);

return statearr_15280;
})();
if(cljs.core.truth_(inst_15206)){
var statearr_15281_15331 = state_15274__$1;
(statearr_15281_15331[(1)] = (5));

} else {
var statearr_15282_15332 = state_15274__$1;
(statearr_15282_15332[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (15))){
var inst_15247 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
var statearr_15283_15333 = state_15274__$1;
(statearr_15283_15333[(2)] = inst_15247);

(statearr_15283_15333[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (21))){
var inst_15267 = (state_15274[(2)]);
var state_15274__$1 = (function (){var statearr_15284 = state_15274;
(statearr_15284[(9)] = inst_15267);

return statearr_15284;
})();
var statearr_15285_15334 = state_15274__$1;
(statearr_15285_15334[(2)] = null);

(statearr_15285_15334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (13))){
var inst_15229 = (state_15274[(10)]);
var inst_15231 = cljs.core.chunked_seq_QMARK_.call(null,inst_15229);
var state_15274__$1 = state_15274;
if(inst_15231){
var statearr_15286_15335 = state_15274__$1;
(statearr_15286_15335[(1)] = (16));

} else {
var statearr_15287_15336 = state_15274__$1;
(statearr_15287_15336[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (22))){
var inst_15259 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
if(cljs.core.truth_(inst_15259)){
var statearr_15288_15337 = state_15274__$1;
(statearr_15288_15337[(1)] = (23));

} else {
var statearr_15289_15338 = state_15274__$1;
(statearr_15289_15338[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (6))){
var inst_15205 = (state_15274[(8)]);
var inst_15255 = (state_15274[(11)]);
var inst_15253 = (state_15274[(7)]);
var inst_15253__$1 = topic_fn.call(null,inst_15205);
var inst_15254 = cljs.core.deref.call(null,mults);
var inst_15255__$1 = cljs.core.get.call(null,inst_15254,inst_15253__$1);
var state_15274__$1 = (function (){var statearr_15290 = state_15274;
(statearr_15290[(11)] = inst_15255__$1);

(statearr_15290[(7)] = inst_15253__$1);

return statearr_15290;
})();
if(cljs.core.truth_(inst_15255__$1)){
var statearr_15291_15339 = state_15274__$1;
(statearr_15291_15339[(1)] = (19));

} else {
var statearr_15292_15340 = state_15274__$1;
(statearr_15292_15340[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (25))){
var inst_15264 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
var statearr_15293_15341 = state_15274__$1;
(statearr_15293_15341[(2)] = inst_15264);

(statearr_15293_15341[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (17))){
var inst_15229 = (state_15274[(10)]);
var inst_15238 = cljs.core.first.call(null,inst_15229);
var inst_15239 = cljs.core.async.muxch_STAR_.call(null,inst_15238);
var inst_15240 = cljs.core.async.close_BANG_.call(null,inst_15239);
var inst_15241 = cljs.core.next.call(null,inst_15229);
var inst_15215 = inst_15241;
var inst_15216 = null;
var inst_15217 = (0);
var inst_15218 = (0);
var state_15274__$1 = (function (){var statearr_15294 = state_15274;
(statearr_15294[(12)] = inst_15216);

(statearr_15294[(13)] = inst_15215);

(statearr_15294[(14)] = inst_15218);

(statearr_15294[(15)] = inst_15240);

(statearr_15294[(16)] = inst_15217);

return statearr_15294;
})();
var statearr_15295_15342 = state_15274__$1;
(statearr_15295_15342[(2)] = null);

(statearr_15295_15342[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (3))){
var inst_15272 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15274__$1,inst_15272);
} else {
if((state_val_15275 === (12))){
var inst_15249 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
var statearr_15296_15343 = state_15274__$1;
(statearr_15296_15343[(2)] = inst_15249);

(statearr_15296_15343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (2))){
var state_15274__$1 = state_15274;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15274__$1,(4),ch);
} else {
if((state_val_15275 === (23))){
var state_15274__$1 = state_15274;
var statearr_15297_15344 = state_15274__$1;
(statearr_15297_15344[(2)] = null);

(statearr_15297_15344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (19))){
var inst_15205 = (state_15274[(8)]);
var inst_15255 = (state_15274[(11)]);
var inst_15257 = cljs.core.async.muxch_STAR_.call(null,inst_15255);
var state_15274__$1 = state_15274;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15274__$1,(22),inst_15257,inst_15205);
} else {
if((state_val_15275 === (11))){
var inst_15229 = (state_15274[(10)]);
var inst_15215 = (state_15274[(13)]);
var inst_15229__$1 = cljs.core.seq.call(null,inst_15215);
var state_15274__$1 = (function (){var statearr_15298 = state_15274;
(statearr_15298[(10)] = inst_15229__$1);

return statearr_15298;
})();
if(inst_15229__$1){
var statearr_15299_15345 = state_15274__$1;
(statearr_15299_15345[(1)] = (13));

} else {
var statearr_15300_15346 = state_15274__$1;
(statearr_15300_15346[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (9))){
var inst_15251 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
var statearr_15301_15347 = state_15274__$1;
(statearr_15301_15347[(2)] = inst_15251);

(statearr_15301_15347[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (5))){
var inst_15212 = cljs.core.deref.call(null,mults);
var inst_15213 = cljs.core.vals.call(null,inst_15212);
var inst_15214 = cljs.core.seq.call(null,inst_15213);
var inst_15215 = inst_15214;
var inst_15216 = null;
var inst_15217 = (0);
var inst_15218 = (0);
var state_15274__$1 = (function (){var statearr_15302 = state_15274;
(statearr_15302[(12)] = inst_15216);

(statearr_15302[(13)] = inst_15215);

(statearr_15302[(14)] = inst_15218);

(statearr_15302[(16)] = inst_15217);

return statearr_15302;
})();
var statearr_15303_15348 = state_15274__$1;
(statearr_15303_15348[(2)] = null);

(statearr_15303_15348[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (14))){
var state_15274__$1 = state_15274;
var statearr_15307_15349 = state_15274__$1;
(statearr_15307_15349[(2)] = null);

(statearr_15307_15349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (16))){
var inst_15229 = (state_15274[(10)]);
var inst_15233 = cljs.core.chunk_first.call(null,inst_15229);
var inst_15234 = cljs.core.chunk_rest.call(null,inst_15229);
var inst_15235 = cljs.core.count.call(null,inst_15233);
var inst_15215 = inst_15234;
var inst_15216 = inst_15233;
var inst_15217 = inst_15235;
var inst_15218 = (0);
var state_15274__$1 = (function (){var statearr_15308 = state_15274;
(statearr_15308[(12)] = inst_15216);

(statearr_15308[(13)] = inst_15215);

(statearr_15308[(14)] = inst_15218);

(statearr_15308[(16)] = inst_15217);

return statearr_15308;
})();
var statearr_15309_15350 = state_15274__$1;
(statearr_15309_15350[(2)] = null);

(statearr_15309_15350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (10))){
var inst_15216 = (state_15274[(12)]);
var inst_15215 = (state_15274[(13)]);
var inst_15218 = (state_15274[(14)]);
var inst_15217 = (state_15274[(16)]);
var inst_15223 = cljs.core._nth.call(null,inst_15216,inst_15218);
var inst_15224 = cljs.core.async.muxch_STAR_.call(null,inst_15223);
var inst_15225 = cljs.core.async.close_BANG_.call(null,inst_15224);
var inst_15226 = (inst_15218 + (1));
var tmp15304 = inst_15216;
var tmp15305 = inst_15215;
var tmp15306 = inst_15217;
var inst_15215__$1 = tmp15305;
var inst_15216__$1 = tmp15304;
var inst_15217__$1 = tmp15306;
var inst_15218__$1 = inst_15226;
var state_15274__$1 = (function (){var statearr_15310 = state_15274;
(statearr_15310[(17)] = inst_15225);

(statearr_15310[(12)] = inst_15216__$1);

(statearr_15310[(13)] = inst_15215__$1);

(statearr_15310[(14)] = inst_15218__$1);

(statearr_15310[(16)] = inst_15217__$1);

return statearr_15310;
})();
var statearr_15311_15351 = state_15274__$1;
(statearr_15311_15351[(2)] = null);

(statearr_15311_15351[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (18))){
var inst_15244 = (state_15274[(2)]);
var state_15274__$1 = state_15274;
var statearr_15312_15352 = state_15274__$1;
(statearr_15312_15352[(2)] = inst_15244);

(statearr_15312_15352[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15275 === (8))){
var inst_15218 = (state_15274[(14)]);
var inst_15217 = (state_15274[(16)]);
var inst_15220 = (inst_15218 < inst_15217);
var inst_15221 = inst_15220;
var state_15274__$1 = state_15274;
if(cljs.core.truth_(inst_15221)){
var statearr_15313_15353 = state_15274__$1;
(statearr_15313_15353[(1)] = (10));

} else {
var statearr_15314_15354 = state_15274__$1;
(statearr_15314_15354[(1)] = (11));

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
});})(c__8543__auto___15326,mults,ensure_mult,p))
;
return ((function (switch__8478__auto__,c__8543__auto___15326,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15318[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15318[(1)] = (1));

return statearr_15318;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15274){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15274);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15319){if((e15319 instanceof Object)){
var ex__8482__auto__ = e15319;
var statearr_15320_15355 = state_15274;
(statearr_15320_15355[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15274);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15319;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15356 = state_15274;
state_15274 = G__15356;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15274){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15326,mults,ensure_mult,p))
})();
var state__8545__auto__ = (function (){var statearr_15321 = f__8544__auto__.call(null);
(statearr_15321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15326);

return statearr_15321;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15326,mults,ensure_mult,p))
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
var args15357 = [];
var len__6152__auto___15360 = arguments.length;
var i__6153__auto___15361 = (0);
while(true){
if((i__6153__auto___15361 < len__6152__auto___15360)){
args15357.push((arguments[i__6153__auto___15361]));

var G__15362 = (i__6153__auto___15361 + (1));
i__6153__auto___15361 = G__15362;
continue;
} else {
}
break;
}

var G__15359 = args15357.length;
switch (G__15359) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15357.length)].join('')));

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
var args15364 = [];
var len__6152__auto___15367 = arguments.length;
var i__6153__auto___15368 = (0);
while(true){
if((i__6153__auto___15368 < len__6152__auto___15367)){
args15364.push((arguments[i__6153__auto___15368]));

var G__15369 = (i__6153__auto___15368 + (1));
i__6153__auto___15368 = G__15369;
continue;
} else {
}
break;
}

var G__15366 = args15364.length;
switch (G__15366) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15364.length)].join('')));

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
var args15371 = [];
var len__6152__auto___15442 = arguments.length;
var i__6153__auto___15443 = (0);
while(true){
if((i__6153__auto___15443 < len__6152__auto___15442)){
args15371.push((arguments[i__6153__auto___15443]));

var G__15444 = (i__6153__auto___15443 + (1));
i__6153__auto___15443 = G__15444;
continue;
} else {
}
break;
}

var G__15373 = args15371.length;
switch (G__15373) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15371.length)].join('')));

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
var c__8543__auto___15446 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15446,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15446,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_15412){
var state_val_15413 = (state_15412[(1)]);
if((state_val_15413 === (7))){
var state_15412__$1 = state_15412;
var statearr_15414_15447 = state_15412__$1;
(statearr_15414_15447[(2)] = null);

(statearr_15414_15447[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (1))){
var state_15412__$1 = state_15412;
var statearr_15415_15448 = state_15412__$1;
(statearr_15415_15448[(2)] = null);

(statearr_15415_15448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (4))){
var inst_15376 = (state_15412[(7)]);
var inst_15378 = (inst_15376 < cnt);
var state_15412__$1 = state_15412;
if(cljs.core.truth_(inst_15378)){
var statearr_15416_15449 = state_15412__$1;
(statearr_15416_15449[(1)] = (6));

} else {
var statearr_15417_15450 = state_15412__$1;
(statearr_15417_15450[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (15))){
var inst_15408 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15418_15451 = state_15412__$1;
(statearr_15418_15451[(2)] = inst_15408);

(statearr_15418_15451[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (13))){
var inst_15401 = cljs.core.async.close_BANG_.call(null,out);
var state_15412__$1 = state_15412;
var statearr_15419_15452 = state_15412__$1;
(statearr_15419_15452[(2)] = inst_15401);

(statearr_15419_15452[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (6))){
var state_15412__$1 = state_15412;
var statearr_15420_15453 = state_15412__$1;
(statearr_15420_15453[(2)] = null);

(statearr_15420_15453[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (3))){
var inst_15410 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15412__$1,inst_15410);
} else {
if((state_val_15413 === (12))){
var inst_15398 = (state_15412[(8)]);
var inst_15398__$1 = (state_15412[(2)]);
var inst_15399 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15398__$1);
var state_15412__$1 = (function (){var statearr_15421 = state_15412;
(statearr_15421[(8)] = inst_15398__$1);

return statearr_15421;
})();
if(cljs.core.truth_(inst_15399)){
var statearr_15422_15454 = state_15412__$1;
(statearr_15422_15454[(1)] = (13));

} else {
var statearr_15423_15455 = state_15412__$1;
(statearr_15423_15455[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (2))){
var inst_15375 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_15376 = (0);
var state_15412__$1 = (function (){var statearr_15424 = state_15412;
(statearr_15424[(9)] = inst_15375);

(statearr_15424[(7)] = inst_15376);

return statearr_15424;
})();
var statearr_15425_15456 = state_15412__$1;
(statearr_15425_15456[(2)] = null);

(statearr_15425_15456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (11))){
var inst_15376 = (state_15412[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15412,(10),Object,null,(9));
var inst_15385 = chs__$1.call(null,inst_15376);
var inst_15386 = done.call(null,inst_15376);
var inst_15387 = cljs.core.async.take_BANG_.call(null,inst_15385,inst_15386);
var state_15412__$1 = state_15412;
var statearr_15426_15457 = state_15412__$1;
(statearr_15426_15457[(2)] = inst_15387);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15412__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (9))){
var inst_15376 = (state_15412[(7)]);
var inst_15389 = (state_15412[(2)]);
var inst_15390 = (inst_15376 + (1));
var inst_15376__$1 = inst_15390;
var state_15412__$1 = (function (){var statearr_15427 = state_15412;
(statearr_15427[(10)] = inst_15389);

(statearr_15427[(7)] = inst_15376__$1);

return statearr_15427;
})();
var statearr_15428_15458 = state_15412__$1;
(statearr_15428_15458[(2)] = null);

(statearr_15428_15458[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (5))){
var inst_15396 = (state_15412[(2)]);
var state_15412__$1 = (function (){var statearr_15429 = state_15412;
(statearr_15429[(11)] = inst_15396);

return statearr_15429;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15412__$1,(12),dchan);
} else {
if((state_val_15413 === (14))){
var inst_15398 = (state_15412[(8)]);
var inst_15403 = cljs.core.apply.call(null,f,inst_15398);
var state_15412__$1 = state_15412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15412__$1,(16),out,inst_15403);
} else {
if((state_val_15413 === (16))){
var inst_15405 = (state_15412[(2)]);
var state_15412__$1 = (function (){var statearr_15430 = state_15412;
(statearr_15430[(12)] = inst_15405);

return statearr_15430;
})();
var statearr_15431_15459 = state_15412__$1;
(statearr_15431_15459[(2)] = null);

(statearr_15431_15459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (10))){
var inst_15380 = (state_15412[(2)]);
var inst_15381 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_15412__$1 = (function (){var statearr_15432 = state_15412;
(statearr_15432[(13)] = inst_15380);

return statearr_15432;
})();
var statearr_15433_15460 = state_15412__$1;
(statearr_15433_15460[(2)] = inst_15381);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15412__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15413 === (8))){
var inst_15394 = (state_15412[(2)]);
var state_15412__$1 = state_15412;
var statearr_15434_15461 = state_15412__$1;
(statearr_15434_15461[(2)] = inst_15394);

(statearr_15434_15461[(1)] = (5));


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
});})(c__8543__auto___15446,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__8478__auto__,c__8543__auto___15446,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15438[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15438[(1)] = (1));

return statearr_15438;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15412){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15439){if((e15439 instanceof Object)){
var ex__8482__auto__ = e15439;
var statearr_15440_15462 = state_15412;
(statearr_15440_15462[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15463 = state_15412;
state_15412 = G__15463;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15412){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15446,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__8545__auto__ = (function (){var statearr_15441 = f__8544__auto__.call(null);
(statearr_15441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15446);

return statearr_15441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15446,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args15465 = [];
var len__6152__auto___15521 = arguments.length;
var i__6153__auto___15522 = (0);
while(true){
if((i__6153__auto___15522 < len__6152__auto___15521)){
args15465.push((arguments[i__6153__auto___15522]));

var G__15523 = (i__6153__auto___15522 + (1));
i__6153__auto___15522 = G__15523;
continue;
} else {
}
break;
}

var G__15467 = args15465.length;
switch (G__15467) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15465.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___15525 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15525,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15525,out){
return (function (state_15497){
var state_val_15498 = (state_15497[(1)]);
if((state_val_15498 === (7))){
var inst_15476 = (state_15497[(7)]);
var inst_15477 = (state_15497[(8)]);
var inst_15476__$1 = (state_15497[(2)]);
var inst_15477__$1 = cljs.core.nth.call(null,inst_15476__$1,(0),null);
var inst_15478 = cljs.core.nth.call(null,inst_15476__$1,(1),null);
var inst_15479 = (inst_15477__$1 == null);
var state_15497__$1 = (function (){var statearr_15499 = state_15497;
(statearr_15499[(9)] = inst_15478);

(statearr_15499[(7)] = inst_15476__$1);

(statearr_15499[(8)] = inst_15477__$1);

return statearr_15499;
})();
if(cljs.core.truth_(inst_15479)){
var statearr_15500_15526 = state_15497__$1;
(statearr_15500_15526[(1)] = (8));

} else {
var statearr_15501_15527 = state_15497__$1;
(statearr_15501_15527[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15498 === (1))){
var inst_15468 = cljs.core.vec.call(null,chs);
var inst_15469 = inst_15468;
var state_15497__$1 = (function (){var statearr_15502 = state_15497;
(statearr_15502[(10)] = inst_15469);

return statearr_15502;
})();
var statearr_15503_15528 = state_15497__$1;
(statearr_15503_15528[(2)] = null);

(statearr_15503_15528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15498 === (4))){
var inst_15469 = (state_15497[(10)]);
var state_15497__$1 = state_15497;
return cljs.core.async.ioc_alts_BANG_.call(null,state_15497__$1,(7),inst_15469);
} else {
if((state_val_15498 === (6))){
var inst_15493 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
var statearr_15504_15529 = state_15497__$1;
(statearr_15504_15529[(2)] = inst_15493);

(statearr_15504_15529[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15498 === (3))){
var inst_15495 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15497__$1,inst_15495);
} else {
if((state_val_15498 === (2))){
var inst_15469 = (state_15497[(10)]);
var inst_15471 = cljs.core.count.call(null,inst_15469);
var inst_15472 = (inst_15471 > (0));
var state_15497__$1 = state_15497;
if(cljs.core.truth_(inst_15472)){
var statearr_15506_15530 = state_15497__$1;
(statearr_15506_15530[(1)] = (4));

} else {
var statearr_15507_15531 = state_15497__$1;
(statearr_15507_15531[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15498 === (11))){
var inst_15469 = (state_15497[(10)]);
var inst_15486 = (state_15497[(2)]);
var tmp15505 = inst_15469;
var inst_15469__$1 = tmp15505;
var state_15497__$1 = (function (){var statearr_15508 = state_15497;
(statearr_15508[(11)] = inst_15486);

(statearr_15508[(10)] = inst_15469__$1);

return statearr_15508;
})();
var statearr_15509_15532 = state_15497__$1;
(statearr_15509_15532[(2)] = null);

(statearr_15509_15532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15498 === (9))){
var inst_15477 = (state_15497[(8)]);
var state_15497__$1 = state_15497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15497__$1,(11),out,inst_15477);
} else {
if((state_val_15498 === (5))){
var inst_15491 = cljs.core.async.close_BANG_.call(null,out);
var state_15497__$1 = state_15497;
var statearr_15510_15533 = state_15497__$1;
(statearr_15510_15533[(2)] = inst_15491);

(statearr_15510_15533[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15498 === (10))){
var inst_15489 = (state_15497[(2)]);
var state_15497__$1 = state_15497;
var statearr_15511_15534 = state_15497__$1;
(statearr_15511_15534[(2)] = inst_15489);

(statearr_15511_15534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15498 === (8))){
var inst_15478 = (state_15497[(9)]);
var inst_15476 = (state_15497[(7)]);
var inst_15469 = (state_15497[(10)]);
var inst_15477 = (state_15497[(8)]);
var inst_15481 = (function (){var cs = inst_15469;
var vec__15474 = inst_15476;
var v = inst_15477;
var c = inst_15478;
return ((function (cs,vec__15474,v,c,inst_15478,inst_15476,inst_15469,inst_15477,state_val_15498,c__8543__auto___15525,out){
return (function (p1__15464_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__15464_SHARP_);
});
;})(cs,vec__15474,v,c,inst_15478,inst_15476,inst_15469,inst_15477,state_val_15498,c__8543__auto___15525,out))
})();
var inst_15482 = cljs.core.filterv.call(null,inst_15481,inst_15469);
var inst_15469__$1 = inst_15482;
var state_15497__$1 = (function (){var statearr_15512 = state_15497;
(statearr_15512[(10)] = inst_15469__$1);

return statearr_15512;
})();
var statearr_15513_15535 = state_15497__$1;
(statearr_15513_15535[(2)] = null);

(statearr_15513_15535[(1)] = (2));


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
});})(c__8543__auto___15525,out))
;
return ((function (switch__8478__auto__,c__8543__auto___15525,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15517[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15517[(1)] = (1));

return statearr_15517;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15497){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15518){if((e15518 instanceof Object)){
var ex__8482__auto__ = e15518;
var statearr_15519_15536 = state_15497;
(statearr_15519_15536[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15537 = state_15497;
state_15497 = G__15537;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15525,out))
})();
var state__8545__auto__ = (function (){var statearr_15520 = f__8544__auto__.call(null);
(statearr_15520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15525);

return statearr_15520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15525,out))
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
var args15538 = [];
var len__6152__auto___15587 = arguments.length;
var i__6153__auto___15588 = (0);
while(true){
if((i__6153__auto___15588 < len__6152__auto___15587)){
args15538.push((arguments[i__6153__auto___15588]));

var G__15589 = (i__6153__auto___15588 + (1));
i__6153__auto___15588 = G__15589;
continue;
} else {
}
break;
}

var G__15540 = args15538.length;
switch (G__15540) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15538.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___15591 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15591,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15591,out){
return (function (state_15564){
var state_val_15565 = (state_15564[(1)]);
if((state_val_15565 === (7))){
var inst_15546 = (state_15564[(7)]);
var inst_15546__$1 = (state_15564[(2)]);
var inst_15547 = (inst_15546__$1 == null);
var inst_15548 = cljs.core.not.call(null,inst_15547);
var state_15564__$1 = (function (){var statearr_15566 = state_15564;
(statearr_15566[(7)] = inst_15546__$1);

return statearr_15566;
})();
if(inst_15548){
var statearr_15567_15592 = state_15564__$1;
(statearr_15567_15592[(1)] = (8));

} else {
var statearr_15568_15593 = state_15564__$1;
(statearr_15568_15593[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15565 === (1))){
var inst_15541 = (0);
var state_15564__$1 = (function (){var statearr_15569 = state_15564;
(statearr_15569[(8)] = inst_15541);

return statearr_15569;
})();
var statearr_15570_15594 = state_15564__$1;
(statearr_15570_15594[(2)] = null);

(statearr_15570_15594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15565 === (4))){
var state_15564__$1 = state_15564;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15564__$1,(7),ch);
} else {
if((state_val_15565 === (6))){
var inst_15559 = (state_15564[(2)]);
var state_15564__$1 = state_15564;
var statearr_15571_15595 = state_15564__$1;
(statearr_15571_15595[(2)] = inst_15559);

(statearr_15571_15595[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15565 === (3))){
var inst_15561 = (state_15564[(2)]);
var inst_15562 = cljs.core.async.close_BANG_.call(null,out);
var state_15564__$1 = (function (){var statearr_15572 = state_15564;
(statearr_15572[(9)] = inst_15561);

return statearr_15572;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15564__$1,inst_15562);
} else {
if((state_val_15565 === (2))){
var inst_15541 = (state_15564[(8)]);
var inst_15543 = (inst_15541 < n);
var state_15564__$1 = state_15564;
if(cljs.core.truth_(inst_15543)){
var statearr_15573_15596 = state_15564__$1;
(statearr_15573_15596[(1)] = (4));

} else {
var statearr_15574_15597 = state_15564__$1;
(statearr_15574_15597[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15565 === (11))){
var inst_15541 = (state_15564[(8)]);
var inst_15551 = (state_15564[(2)]);
var inst_15552 = (inst_15541 + (1));
var inst_15541__$1 = inst_15552;
var state_15564__$1 = (function (){var statearr_15575 = state_15564;
(statearr_15575[(8)] = inst_15541__$1);

(statearr_15575[(10)] = inst_15551);

return statearr_15575;
})();
var statearr_15576_15598 = state_15564__$1;
(statearr_15576_15598[(2)] = null);

(statearr_15576_15598[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15565 === (9))){
var state_15564__$1 = state_15564;
var statearr_15577_15599 = state_15564__$1;
(statearr_15577_15599[(2)] = null);

(statearr_15577_15599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15565 === (5))){
var state_15564__$1 = state_15564;
var statearr_15578_15600 = state_15564__$1;
(statearr_15578_15600[(2)] = null);

(statearr_15578_15600[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15565 === (10))){
var inst_15556 = (state_15564[(2)]);
var state_15564__$1 = state_15564;
var statearr_15579_15601 = state_15564__$1;
(statearr_15579_15601[(2)] = inst_15556);

(statearr_15579_15601[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15565 === (8))){
var inst_15546 = (state_15564[(7)]);
var state_15564__$1 = state_15564;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15564__$1,(11),out,inst_15546);
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
});})(c__8543__auto___15591,out))
;
return ((function (switch__8478__auto__,c__8543__auto___15591,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15583 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15583[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15583[(1)] = (1));

return statearr_15583;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15564){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15564);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15584){if((e15584 instanceof Object)){
var ex__8482__auto__ = e15584;
var statearr_15585_15602 = state_15564;
(statearr_15585_15602[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15564);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15584;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15603 = state_15564;
state_15564 = G__15603;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15564){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15564);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15591,out))
})();
var state__8545__auto__ = (function (){var statearr_15586 = f__8544__auto__.call(null);
(statearr_15586[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15591);

return statearr_15586;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15591,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15611 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15611 = (function (map_LT_,f,ch,meta15612){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15612 = meta15612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15613,meta15612__$1){
var self__ = this;
var _15613__$1 = this;
return (new cljs.core.async.t_cljs$core$async15611(self__.map_LT_,self__.f,self__.ch,meta15612__$1));
});

cljs.core.async.t_cljs$core$async15611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15613){
var self__ = this;
var _15613__$1 = this;
return self__.meta15612;
});

cljs.core.async.t_cljs$core$async15611.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15611.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15611.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15611.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15611.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async15614 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15614 = (function (map_LT_,f,ch,meta15612,_,fn1,meta15615){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta15612 = meta15612;
this._ = _;
this.fn1 = fn1;
this.meta15615 = meta15615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15616,meta15615__$1){
var self__ = this;
var _15616__$1 = this;
return (new cljs.core.async.t_cljs$core$async15614(self__.map_LT_,self__.f,self__.ch,self__.meta15612,self__._,self__.fn1,meta15615__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async15614.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15616){
var self__ = this;
var _15616__$1 = this;
return self__.meta15615;
});})(___$1))
;

cljs.core.async.t_cljs$core$async15614.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async15614.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15614.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__15604_SHARP_){
return f1.call(null,(((p1__15604_SHARP_ == null))?null:self__.f.call(null,p1__15604_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async15614.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15612","meta15612",1449632974,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async15611","cljs.core.async/t_cljs$core$async15611",-385454621,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta15615","meta15615",1922313400,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async15614.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15614";

cljs.core.async.t_cljs$core$async15614.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15614");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async15614 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15614(map_LT___$1,f__$1,ch__$1,meta15612__$1,___$2,fn1__$1,meta15615){
return (new cljs.core.async.t_cljs$core$async15614(map_LT___$1,f__$1,ch__$1,meta15612__$1,___$2,fn1__$1,meta15615));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async15614(self__.map_LT_,self__.f,self__.ch,self__.meta15612,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async15611.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15611.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async15611.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15612","meta15612",1449632974,null)], null);
});

cljs.core.async.t_cljs$core$async15611.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15611.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15611";

cljs.core.async.t_cljs$core$async15611.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15611");
});

cljs.core.async.__GT_t_cljs$core$async15611 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async15611(map_LT___$1,f__$1,ch__$1,meta15612){
return (new cljs.core.async.t_cljs$core$async15611(map_LT___$1,f__$1,ch__$1,meta15612));
});

}

return (new cljs.core.async.t_cljs$core$async15611(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async15620 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15620 = (function (map_GT_,f,ch,meta15621){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta15621 = meta15621;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15620.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15622,meta15621__$1){
var self__ = this;
var _15622__$1 = this;
return (new cljs.core.async.t_cljs$core$async15620(self__.map_GT_,self__.f,self__.ch,meta15621__$1));
});

cljs.core.async.t_cljs$core$async15620.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15622){
var self__ = this;
var _15622__$1 = this;
return self__.meta15621;
});

cljs.core.async.t_cljs$core$async15620.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15620.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15620.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15620.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15620.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15620.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async15620.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15621","meta15621",-674322729,null)], null);
});

cljs.core.async.t_cljs$core$async15620.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15620.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15620";

cljs.core.async.t_cljs$core$async15620.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15620");
});

cljs.core.async.__GT_t_cljs$core$async15620 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async15620(map_GT___$1,f__$1,ch__$1,meta15621){
return (new cljs.core.async.t_cljs$core$async15620(map_GT___$1,f__$1,ch__$1,meta15621));
});

}

return (new cljs.core.async.t_cljs$core$async15620(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async15626 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15626 = (function (filter_GT_,p,ch,meta15627){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta15627 = meta15627;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15626.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15628,meta15627__$1){
var self__ = this;
var _15628__$1 = this;
return (new cljs.core.async.t_cljs$core$async15626(self__.filter_GT_,self__.p,self__.ch,meta15627__$1));
});

cljs.core.async.t_cljs$core$async15626.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15628){
var self__ = this;
var _15628__$1 = this;
return self__.meta15627;
});

cljs.core.async.t_cljs$core$async15626.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async15626.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15626.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async15626.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async15626.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async15626.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async15626.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async15626.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta15627","meta15627",1109536306,null)], null);
});

cljs.core.async.t_cljs$core$async15626.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15626.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15626";

cljs.core.async.t_cljs$core$async15626.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"cljs.core.async/t_cljs$core$async15626");
});

cljs.core.async.__GT_t_cljs$core$async15626 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async15626(filter_GT___$1,p__$1,ch__$1,meta15627){
return (new cljs.core.async.t_cljs$core$async15626(filter_GT___$1,p__$1,ch__$1,meta15627));
});

}

return (new cljs.core.async.t_cljs$core$async15626(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args15629 = [];
var len__6152__auto___15673 = arguments.length;
var i__6153__auto___15674 = (0);
while(true){
if((i__6153__auto___15674 < len__6152__auto___15673)){
args15629.push((arguments[i__6153__auto___15674]));

var G__15675 = (i__6153__auto___15674 + (1));
i__6153__auto___15674 = G__15675;
continue;
} else {
}
break;
}

var G__15631 = args15629.length;
switch (G__15631) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15629.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___15677 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___15677,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___15677,out){
return (function (state_15652){
var state_val_15653 = (state_15652[(1)]);
if((state_val_15653 === (7))){
var inst_15648 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15654_15678 = state_15652__$1;
(statearr_15654_15678[(2)] = inst_15648);

(statearr_15654_15678[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (1))){
var state_15652__$1 = state_15652;
var statearr_15655_15679 = state_15652__$1;
(statearr_15655_15679[(2)] = null);

(statearr_15655_15679[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (4))){
var inst_15634 = (state_15652[(7)]);
var inst_15634__$1 = (state_15652[(2)]);
var inst_15635 = (inst_15634__$1 == null);
var state_15652__$1 = (function (){var statearr_15656 = state_15652;
(statearr_15656[(7)] = inst_15634__$1);

return statearr_15656;
})();
if(cljs.core.truth_(inst_15635)){
var statearr_15657_15680 = state_15652__$1;
(statearr_15657_15680[(1)] = (5));

} else {
var statearr_15658_15681 = state_15652__$1;
(statearr_15658_15681[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (6))){
var inst_15634 = (state_15652[(7)]);
var inst_15639 = p.call(null,inst_15634);
var state_15652__$1 = state_15652;
if(cljs.core.truth_(inst_15639)){
var statearr_15659_15682 = state_15652__$1;
(statearr_15659_15682[(1)] = (8));

} else {
var statearr_15660_15683 = state_15652__$1;
(statearr_15660_15683[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (3))){
var inst_15650 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15652__$1,inst_15650);
} else {
if((state_val_15653 === (2))){
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15652__$1,(4),ch);
} else {
if((state_val_15653 === (11))){
var inst_15642 = (state_15652[(2)]);
var state_15652__$1 = state_15652;
var statearr_15661_15684 = state_15652__$1;
(statearr_15661_15684[(2)] = inst_15642);

(statearr_15661_15684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (9))){
var state_15652__$1 = state_15652;
var statearr_15662_15685 = state_15652__$1;
(statearr_15662_15685[(2)] = null);

(statearr_15662_15685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (5))){
var inst_15637 = cljs.core.async.close_BANG_.call(null,out);
var state_15652__$1 = state_15652;
var statearr_15663_15686 = state_15652__$1;
(statearr_15663_15686[(2)] = inst_15637);

(statearr_15663_15686[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (10))){
var inst_15645 = (state_15652[(2)]);
var state_15652__$1 = (function (){var statearr_15664 = state_15652;
(statearr_15664[(8)] = inst_15645);

return statearr_15664;
})();
var statearr_15665_15687 = state_15652__$1;
(statearr_15665_15687[(2)] = null);

(statearr_15665_15687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15653 === (8))){
var inst_15634 = (state_15652[(7)]);
var state_15652__$1 = state_15652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15652__$1,(11),out,inst_15634);
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
});})(c__8543__auto___15677,out))
;
return ((function (switch__8478__auto__,c__8543__auto___15677,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15669 = [null,null,null,null,null,null,null,null,null];
(statearr_15669[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15669[(1)] = (1));

return statearr_15669;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15652){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15670){if((e15670 instanceof Object)){
var ex__8482__auto__ = e15670;
var statearr_15671_15688 = state_15652;
(statearr_15671_15688[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15670;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15689 = state_15652;
state_15652 = G__15689;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___15677,out))
})();
var state__8545__auto__ = (function (){var statearr_15672 = f__8544__auto__.call(null);
(statearr_15672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___15677);

return statearr_15672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___15677,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args15690 = [];
var len__6152__auto___15693 = arguments.length;
var i__6153__auto___15694 = (0);
while(true){
if((i__6153__auto___15694 < len__6152__auto___15693)){
args15690.push((arguments[i__6153__auto___15694]));

var G__15695 = (i__6153__auto___15694 + (1));
i__6153__auto___15694 = G__15695;
continue;
} else {
}
break;
}

var G__15692 = args15690.length;
switch (G__15692) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15690.length)].join('')));

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
return (function (state_15862){
var state_val_15863 = (state_15862[(1)]);
if((state_val_15863 === (7))){
var inst_15858 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15864_15905 = state_15862__$1;
(statearr_15864_15905[(2)] = inst_15858);

(statearr_15864_15905[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (20))){
var inst_15828 = (state_15862[(7)]);
var inst_15839 = (state_15862[(2)]);
var inst_15840 = cljs.core.next.call(null,inst_15828);
var inst_15814 = inst_15840;
var inst_15815 = null;
var inst_15816 = (0);
var inst_15817 = (0);
var state_15862__$1 = (function (){var statearr_15865 = state_15862;
(statearr_15865[(8)] = inst_15816);

(statearr_15865[(9)] = inst_15814);

(statearr_15865[(10)] = inst_15839);

(statearr_15865[(11)] = inst_15817);

(statearr_15865[(12)] = inst_15815);

return statearr_15865;
})();
var statearr_15866_15906 = state_15862__$1;
(statearr_15866_15906[(2)] = null);

(statearr_15866_15906[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (1))){
var state_15862__$1 = state_15862;
var statearr_15867_15907 = state_15862__$1;
(statearr_15867_15907[(2)] = null);

(statearr_15867_15907[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (4))){
var inst_15803 = (state_15862[(13)]);
var inst_15803__$1 = (state_15862[(2)]);
var inst_15804 = (inst_15803__$1 == null);
var state_15862__$1 = (function (){var statearr_15868 = state_15862;
(statearr_15868[(13)] = inst_15803__$1);

return statearr_15868;
})();
if(cljs.core.truth_(inst_15804)){
var statearr_15869_15908 = state_15862__$1;
(statearr_15869_15908[(1)] = (5));

} else {
var statearr_15870_15909 = state_15862__$1;
(statearr_15870_15909[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (15))){
var state_15862__$1 = state_15862;
var statearr_15874_15910 = state_15862__$1;
(statearr_15874_15910[(2)] = null);

(statearr_15874_15910[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (21))){
var state_15862__$1 = state_15862;
var statearr_15875_15911 = state_15862__$1;
(statearr_15875_15911[(2)] = null);

(statearr_15875_15911[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (13))){
var inst_15816 = (state_15862[(8)]);
var inst_15814 = (state_15862[(9)]);
var inst_15817 = (state_15862[(11)]);
var inst_15815 = (state_15862[(12)]);
var inst_15824 = (state_15862[(2)]);
var inst_15825 = (inst_15817 + (1));
var tmp15871 = inst_15816;
var tmp15872 = inst_15814;
var tmp15873 = inst_15815;
var inst_15814__$1 = tmp15872;
var inst_15815__$1 = tmp15873;
var inst_15816__$1 = tmp15871;
var inst_15817__$1 = inst_15825;
var state_15862__$1 = (function (){var statearr_15876 = state_15862;
(statearr_15876[(8)] = inst_15816__$1);

(statearr_15876[(9)] = inst_15814__$1);

(statearr_15876[(11)] = inst_15817__$1);

(statearr_15876[(12)] = inst_15815__$1);

(statearr_15876[(14)] = inst_15824);

return statearr_15876;
})();
var statearr_15877_15912 = state_15862__$1;
(statearr_15877_15912[(2)] = null);

(statearr_15877_15912[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (22))){
var state_15862__$1 = state_15862;
var statearr_15878_15913 = state_15862__$1;
(statearr_15878_15913[(2)] = null);

(statearr_15878_15913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (6))){
var inst_15803 = (state_15862[(13)]);
var inst_15812 = f.call(null,inst_15803);
var inst_15813 = cljs.core.seq.call(null,inst_15812);
var inst_15814 = inst_15813;
var inst_15815 = null;
var inst_15816 = (0);
var inst_15817 = (0);
var state_15862__$1 = (function (){var statearr_15879 = state_15862;
(statearr_15879[(8)] = inst_15816);

(statearr_15879[(9)] = inst_15814);

(statearr_15879[(11)] = inst_15817);

(statearr_15879[(12)] = inst_15815);

return statearr_15879;
})();
var statearr_15880_15914 = state_15862__$1;
(statearr_15880_15914[(2)] = null);

(statearr_15880_15914[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (17))){
var inst_15828 = (state_15862[(7)]);
var inst_15832 = cljs.core.chunk_first.call(null,inst_15828);
var inst_15833 = cljs.core.chunk_rest.call(null,inst_15828);
var inst_15834 = cljs.core.count.call(null,inst_15832);
var inst_15814 = inst_15833;
var inst_15815 = inst_15832;
var inst_15816 = inst_15834;
var inst_15817 = (0);
var state_15862__$1 = (function (){var statearr_15881 = state_15862;
(statearr_15881[(8)] = inst_15816);

(statearr_15881[(9)] = inst_15814);

(statearr_15881[(11)] = inst_15817);

(statearr_15881[(12)] = inst_15815);

return statearr_15881;
})();
var statearr_15882_15915 = state_15862__$1;
(statearr_15882_15915[(2)] = null);

(statearr_15882_15915[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (3))){
var inst_15860 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15862__$1,inst_15860);
} else {
if((state_val_15863 === (12))){
var inst_15848 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15883_15916 = state_15862__$1;
(statearr_15883_15916[(2)] = inst_15848);

(statearr_15883_15916[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (2))){
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15862__$1,(4),in$);
} else {
if((state_val_15863 === (23))){
var inst_15856 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15884_15917 = state_15862__$1;
(statearr_15884_15917[(2)] = inst_15856);

(statearr_15884_15917[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (19))){
var inst_15843 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15885_15918 = state_15862__$1;
(statearr_15885_15918[(2)] = inst_15843);

(statearr_15885_15918[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (11))){
var inst_15828 = (state_15862[(7)]);
var inst_15814 = (state_15862[(9)]);
var inst_15828__$1 = cljs.core.seq.call(null,inst_15814);
var state_15862__$1 = (function (){var statearr_15886 = state_15862;
(statearr_15886[(7)] = inst_15828__$1);

return statearr_15886;
})();
if(inst_15828__$1){
var statearr_15887_15919 = state_15862__$1;
(statearr_15887_15919[(1)] = (14));

} else {
var statearr_15888_15920 = state_15862__$1;
(statearr_15888_15920[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (9))){
var inst_15850 = (state_15862[(2)]);
var inst_15851 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_15862__$1 = (function (){var statearr_15889 = state_15862;
(statearr_15889[(15)] = inst_15850);

return statearr_15889;
})();
if(cljs.core.truth_(inst_15851)){
var statearr_15890_15921 = state_15862__$1;
(statearr_15890_15921[(1)] = (21));

} else {
var statearr_15891_15922 = state_15862__$1;
(statearr_15891_15922[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (5))){
var inst_15806 = cljs.core.async.close_BANG_.call(null,out);
var state_15862__$1 = state_15862;
var statearr_15892_15923 = state_15862__$1;
(statearr_15892_15923[(2)] = inst_15806);

(statearr_15892_15923[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (14))){
var inst_15828 = (state_15862[(7)]);
var inst_15830 = cljs.core.chunked_seq_QMARK_.call(null,inst_15828);
var state_15862__$1 = state_15862;
if(inst_15830){
var statearr_15893_15924 = state_15862__$1;
(statearr_15893_15924[(1)] = (17));

} else {
var statearr_15894_15925 = state_15862__$1;
(statearr_15894_15925[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (16))){
var inst_15846 = (state_15862[(2)]);
var state_15862__$1 = state_15862;
var statearr_15895_15926 = state_15862__$1;
(statearr_15895_15926[(2)] = inst_15846);

(statearr_15895_15926[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15863 === (10))){
var inst_15817 = (state_15862[(11)]);
var inst_15815 = (state_15862[(12)]);
var inst_15822 = cljs.core._nth.call(null,inst_15815,inst_15817);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15862__$1,(13),out,inst_15822);
} else {
if((state_val_15863 === (18))){
var inst_15828 = (state_15862[(7)]);
var inst_15837 = cljs.core.first.call(null,inst_15828);
var state_15862__$1 = state_15862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15862__$1,(20),out,inst_15837);
} else {
if((state_val_15863 === (8))){
var inst_15816 = (state_15862[(8)]);
var inst_15817 = (state_15862[(11)]);
var inst_15819 = (inst_15817 < inst_15816);
var inst_15820 = inst_15819;
var state_15862__$1 = state_15862;
if(cljs.core.truth_(inst_15820)){
var statearr_15896_15927 = state_15862__$1;
(statearr_15896_15927[(1)] = (10));

} else {
var statearr_15897_15928 = state_15862__$1;
(statearr_15897_15928[(1)] = (11));

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
var statearr_15901 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15901[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__);

(statearr_15901[(1)] = (1));

return statearr_15901;
});
var cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____1 = (function (state_15862){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15902){if((e15902 instanceof Object)){
var ex__8482__auto__ = e15902;
var statearr_15903_15929 = state_15862;
(statearr_15903_15929[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15902;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15930 = state_15862;
state_15862 = G__15930;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__ = function(state_15862){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____1.call(this,state_15862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__8479__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto__))
})();
var state__8545__auto__ = (function (){var statearr_15904 = f__8544__auto__.call(null);
(statearr_15904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto__);

return statearr_15904;
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
var args15931 = [];
var len__6152__auto___15934 = arguments.length;
var i__6153__auto___15935 = (0);
while(true){
if((i__6153__auto___15935 < len__6152__auto___15934)){
args15931.push((arguments[i__6153__auto___15935]));

var G__15936 = (i__6153__auto___15935 + (1));
i__6153__auto___15935 = G__15936;
continue;
} else {
}
break;
}

var G__15933 = args15931.length;
switch (G__15933) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15931.length)].join('')));

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
var args15938 = [];
var len__6152__auto___15941 = arguments.length;
var i__6153__auto___15942 = (0);
while(true){
if((i__6153__auto___15942 < len__6152__auto___15941)){
args15938.push((arguments[i__6153__auto___15942]));

var G__15943 = (i__6153__auto___15942 + (1));
i__6153__auto___15942 = G__15943;
continue;
} else {
}
break;
}

var G__15940 = args15938.length;
switch (G__15940) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15938.length)].join('')));

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
var args15945 = [];
var len__6152__auto___15996 = arguments.length;
var i__6153__auto___15997 = (0);
while(true){
if((i__6153__auto___15997 < len__6152__auto___15996)){
args15945.push((arguments[i__6153__auto___15997]));

var G__15998 = (i__6153__auto___15997 + (1));
i__6153__auto___15997 = G__15998;
continue;
} else {
}
break;
}

var G__15947 = args15945.length;
switch (G__15947) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15945.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___16000 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16000,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16000,out){
return (function (state_15971){
var state_val_15972 = (state_15971[(1)]);
if((state_val_15972 === (7))){
var inst_15966 = (state_15971[(2)]);
var state_15971__$1 = state_15971;
var statearr_15973_16001 = state_15971__$1;
(statearr_15973_16001[(2)] = inst_15966);

(statearr_15973_16001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (1))){
var inst_15948 = null;
var state_15971__$1 = (function (){var statearr_15974 = state_15971;
(statearr_15974[(7)] = inst_15948);

return statearr_15974;
})();
var statearr_15975_16002 = state_15971__$1;
(statearr_15975_16002[(2)] = null);

(statearr_15975_16002[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (4))){
var inst_15951 = (state_15971[(8)]);
var inst_15951__$1 = (state_15971[(2)]);
var inst_15952 = (inst_15951__$1 == null);
var inst_15953 = cljs.core.not.call(null,inst_15952);
var state_15971__$1 = (function (){var statearr_15976 = state_15971;
(statearr_15976[(8)] = inst_15951__$1);

return statearr_15976;
})();
if(inst_15953){
var statearr_15977_16003 = state_15971__$1;
(statearr_15977_16003[(1)] = (5));

} else {
var statearr_15978_16004 = state_15971__$1;
(statearr_15978_16004[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (6))){
var state_15971__$1 = state_15971;
var statearr_15979_16005 = state_15971__$1;
(statearr_15979_16005[(2)] = null);

(statearr_15979_16005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (3))){
var inst_15968 = (state_15971[(2)]);
var inst_15969 = cljs.core.async.close_BANG_.call(null,out);
var state_15971__$1 = (function (){var statearr_15980 = state_15971;
(statearr_15980[(9)] = inst_15968);

return statearr_15980;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15971__$1,inst_15969);
} else {
if((state_val_15972 === (2))){
var state_15971__$1 = state_15971;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15971__$1,(4),ch);
} else {
if((state_val_15972 === (11))){
var inst_15951 = (state_15971[(8)]);
var inst_15960 = (state_15971[(2)]);
var inst_15948 = inst_15951;
var state_15971__$1 = (function (){var statearr_15981 = state_15971;
(statearr_15981[(10)] = inst_15960);

(statearr_15981[(7)] = inst_15948);

return statearr_15981;
})();
var statearr_15982_16006 = state_15971__$1;
(statearr_15982_16006[(2)] = null);

(statearr_15982_16006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (9))){
var inst_15951 = (state_15971[(8)]);
var state_15971__$1 = state_15971;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15971__$1,(11),out,inst_15951);
} else {
if((state_val_15972 === (5))){
var inst_15951 = (state_15971[(8)]);
var inst_15948 = (state_15971[(7)]);
var inst_15955 = cljs.core._EQ_.call(null,inst_15951,inst_15948);
var state_15971__$1 = state_15971;
if(inst_15955){
var statearr_15984_16007 = state_15971__$1;
(statearr_15984_16007[(1)] = (8));

} else {
var statearr_15985_16008 = state_15971__$1;
(statearr_15985_16008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (10))){
var inst_15963 = (state_15971[(2)]);
var state_15971__$1 = state_15971;
var statearr_15986_16009 = state_15971__$1;
(statearr_15986_16009[(2)] = inst_15963);

(statearr_15986_16009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15972 === (8))){
var inst_15948 = (state_15971[(7)]);
var tmp15983 = inst_15948;
var inst_15948__$1 = tmp15983;
var state_15971__$1 = (function (){var statearr_15987 = state_15971;
(statearr_15987[(7)] = inst_15948__$1);

return statearr_15987;
})();
var statearr_15988_16010 = state_15971__$1;
(statearr_15988_16010[(2)] = null);

(statearr_15988_16010[(1)] = (2));


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
});})(c__8543__auto___16000,out))
;
return ((function (switch__8478__auto__,c__8543__auto___16000,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_15992 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_15992[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_15992[(1)] = (1));

return statearr_15992;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_15971){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_15971);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e15993){if((e15993 instanceof Object)){
var ex__8482__auto__ = e15993;
var statearr_15994_16011 = state_15971;
(statearr_15994_16011[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15971);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15993;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16012 = state_15971;
state_15971 = G__16012;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_15971){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_15971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16000,out))
})();
var state__8545__auto__ = (function (){var statearr_15995 = f__8544__auto__.call(null);
(statearr_15995[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16000);

return statearr_15995;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16000,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16013 = [];
var len__6152__auto___16083 = arguments.length;
var i__6153__auto___16084 = (0);
while(true){
if((i__6153__auto___16084 < len__6152__auto___16083)){
args16013.push((arguments[i__6153__auto___16084]));

var G__16085 = (i__6153__auto___16084 + (1));
i__6153__auto___16084 = G__16085;
continue;
} else {
}
break;
}

var G__16015 = args16013.length;
switch (G__16015) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16013.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___16087 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16087,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16087,out){
return (function (state_16053){
var state_val_16054 = (state_16053[(1)]);
if((state_val_16054 === (7))){
var inst_16049 = (state_16053[(2)]);
var state_16053__$1 = state_16053;
var statearr_16055_16088 = state_16053__$1;
(statearr_16055_16088[(2)] = inst_16049);

(statearr_16055_16088[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16054 === (1))){
var inst_16016 = (new Array(n));
var inst_16017 = inst_16016;
var inst_16018 = (0);
var state_16053__$1 = (function (){var statearr_16056 = state_16053;
(statearr_16056[(7)] = inst_16017);

(statearr_16056[(8)] = inst_16018);

return statearr_16056;
})();
var statearr_16057_16089 = state_16053__$1;
(statearr_16057_16089[(2)] = null);

(statearr_16057_16089[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16054 === (4))){
var inst_16021 = (state_16053[(9)]);
var inst_16021__$1 = (state_16053[(2)]);
var inst_16022 = (inst_16021__$1 == null);
var inst_16023 = cljs.core.not.call(null,inst_16022);
var state_16053__$1 = (function (){var statearr_16058 = state_16053;
(statearr_16058[(9)] = inst_16021__$1);

return statearr_16058;
})();
if(inst_16023){
var statearr_16059_16090 = state_16053__$1;
(statearr_16059_16090[(1)] = (5));

} else {
var statearr_16060_16091 = state_16053__$1;
(statearr_16060_16091[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16054 === (15))){
var inst_16043 = (state_16053[(2)]);
var state_16053__$1 = state_16053;
var statearr_16061_16092 = state_16053__$1;
(statearr_16061_16092[(2)] = inst_16043);

(statearr_16061_16092[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16054 === (13))){
var state_16053__$1 = state_16053;
var statearr_16062_16093 = state_16053__$1;
(statearr_16062_16093[(2)] = null);

(statearr_16062_16093[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16054 === (6))){
var inst_16018 = (state_16053[(8)]);
var inst_16039 = (inst_16018 > (0));
var state_16053__$1 = state_16053;
if(cljs.core.truth_(inst_16039)){
var statearr_16063_16094 = state_16053__$1;
(statearr_16063_16094[(1)] = (12));

} else {
var statearr_16064_16095 = state_16053__$1;
(statearr_16064_16095[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16054 === (3))){
var inst_16051 = (state_16053[(2)]);
var state_16053__$1 = state_16053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16053__$1,inst_16051);
} else {
if((state_val_16054 === (12))){
var inst_16017 = (state_16053[(7)]);
var inst_16041 = cljs.core.vec.call(null,inst_16017);
var state_16053__$1 = state_16053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16053__$1,(15),out,inst_16041);
} else {
if((state_val_16054 === (2))){
var state_16053__$1 = state_16053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16053__$1,(4),ch);
} else {
if((state_val_16054 === (11))){
var inst_16033 = (state_16053[(2)]);
var inst_16034 = (new Array(n));
var inst_16017 = inst_16034;
var inst_16018 = (0);
var state_16053__$1 = (function (){var statearr_16065 = state_16053;
(statearr_16065[(10)] = inst_16033);

(statearr_16065[(7)] = inst_16017);

(statearr_16065[(8)] = inst_16018);

return statearr_16065;
})();
var statearr_16066_16096 = state_16053__$1;
(statearr_16066_16096[(2)] = null);

(statearr_16066_16096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16054 === (9))){
var inst_16017 = (state_16053[(7)]);
var inst_16031 = cljs.core.vec.call(null,inst_16017);
var state_16053__$1 = state_16053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16053__$1,(11),out,inst_16031);
} else {
if((state_val_16054 === (5))){
var inst_16017 = (state_16053[(7)]);
var inst_16026 = (state_16053[(11)]);
var inst_16018 = (state_16053[(8)]);
var inst_16021 = (state_16053[(9)]);
var inst_16025 = (inst_16017[inst_16018] = inst_16021);
var inst_16026__$1 = (inst_16018 + (1));
var inst_16027 = (inst_16026__$1 < n);
var state_16053__$1 = (function (){var statearr_16067 = state_16053;
(statearr_16067[(12)] = inst_16025);

(statearr_16067[(11)] = inst_16026__$1);

return statearr_16067;
})();
if(cljs.core.truth_(inst_16027)){
var statearr_16068_16097 = state_16053__$1;
(statearr_16068_16097[(1)] = (8));

} else {
var statearr_16069_16098 = state_16053__$1;
(statearr_16069_16098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16054 === (14))){
var inst_16046 = (state_16053[(2)]);
var inst_16047 = cljs.core.async.close_BANG_.call(null,out);
var state_16053__$1 = (function (){var statearr_16071 = state_16053;
(statearr_16071[(13)] = inst_16046);

return statearr_16071;
})();
var statearr_16072_16099 = state_16053__$1;
(statearr_16072_16099[(2)] = inst_16047);

(statearr_16072_16099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16054 === (10))){
var inst_16037 = (state_16053[(2)]);
var state_16053__$1 = state_16053;
var statearr_16073_16100 = state_16053__$1;
(statearr_16073_16100[(2)] = inst_16037);

(statearr_16073_16100[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16054 === (8))){
var inst_16017 = (state_16053[(7)]);
var inst_16026 = (state_16053[(11)]);
var tmp16070 = inst_16017;
var inst_16017__$1 = tmp16070;
var inst_16018 = inst_16026;
var state_16053__$1 = (function (){var statearr_16074 = state_16053;
(statearr_16074[(7)] = inst_16017__$1);

(statearr_16074[(8)] = inst_16018);

return statearr_16074;
})();
var statearr_16075_16101 = state_16053__$1;
(statearr_16075_16101[(2)] = null);

(statearr_16075_16101[(1)] = (2));


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
});})(c__8543__auto___16087,out))
;
return ((function (switch__8478__auto__,c__8543__auto___16087,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16079 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16079[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16079[(1)] = (1));

return statearr_16079;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16053){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16080){if((e16080 instanceof Object)){
var ex__8482__auto__ = e16080;
var statearr_16081_16102 = state_16053;
(statearr_16081_16102[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16103 = state_16053;
state_16053 = G__16103;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16053){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16087,out))
})();
var state__8545__auto__ = (function (){var statearr_16082 = f__8544__auto__.call(null);
(statearr_16082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16087);

return statearr_16082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16087,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16104 = [];
var len__6152__auto___16178 = arguments.length;
var i__6153__auto___16179 = (0);
while(true){
if((i__6153__auto___16179 < len__6152__auto___16178)){
args16104.push((arguments[i__6153__auto___16179]));

var G__16180 = (i__6153__auto___16179 + (1));
i__6153__auto___16179 = G__16180;
continue;
} else {
}
break;
}

var G__16106 = args16104.length;
switch (G__16106) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16104.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__8543__auto___16182 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___16182,out){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___16182,out){
return (function (state_16148){
var state_val_16149 = (state_16148[(1)]);
if((state_val_16149 === (7))){
var inst_16144 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
var statearr_16150_16183 = state_16148__$1;
(statearr_16150_16183[(2)] = inst_16144);

(statearr_16150_16183[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (1))){
var inst_16107 = [];
var inst_16108 = inst_16107;
var inst_16109 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16148__$1 = (function (){var statearr_16151 = state_16148;
(statearr_16151[(7)] = inst_16109);

(statearr_16151[(8)] = inst_16108);

return statearr_16151;
})();
var statearr_16152_16184 = state_16148__$1;
(statearr_16152_16184[(2)] = null);

(statearr_16152_16184[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (4))){
var inst_16112 = (state_16148[(9)]);
var inst_16112__$1 = (state_16148[(2)]);
var inst_16113 = (inst_16112__$1 == null);
var inst_16114 = cljs.core.not.call(null,inst_16113);
var state_16148__$1 = (function (){var statearr_16153 = state_16148;
(statearr_16153[(9)] = inst_16112__$1);

return statearr_16153;
})();
if(inst_16114){
var statearr_16154_16185 = state_16148__$1;
(statearr_16154_16185[(1)] = (5));

} else {
var statearr_16155_16186 = state_16148__$1;
(statearr_16155_16186[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (15))){
var inst_16138 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
var statearr_16156_16187 = state_16148__$1;
(statearr_16156_16187[(2)] = inst_16138);

(statearr_16156_16187[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (13))){
var state_16148__$1 = state_16148;
var statearr_16157_16188 = state_16148__$1;
(statearr_16157_16188[(2)] = null);

(statearr_16157_16188[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (6))){
var inst_16108 = (state_16148[(8)]);
var inst_16133 = inst_16108.length;
var inst_16134 = (inst_16133 > (0));
var state_16148__$1 = state_16148;
if(cljs.core.truth_(inst_16134)){
var statearr_16158_16189 = state_16148__$1;
(statearr_16158_16189[(1)] = (12));

} else {
var statearr_16159_16190 = state_16148__$1;
(statearr_16159_16190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (3))){
var inst_16146 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16148__$1,inst_16146);
} else {
if((state_val_16149 === (12))){
var inst_16108 = (state_16148[(8)]);
var inst_16136 = cljs.core.vec.call(null,inst_16108);
var state_16148__$1 = state_16148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16148__$1,(15),out,inst_16136);
} else {
if((state_val_16149 === (2))){
var state_16148__$1 = state_16148;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16148__$1,(4),ch);
} else {
if((state_val_16149 === (11))){
var inst_16112 = (state_16148[(9)]);
var inst_16116 = (state_16148[(10)]);
var inst_16126 = (state_16148[(2)]);
var inst_16127 = [];
var inst_16128 = inst_16127.push(inst_16112);
var inst_16108 = inst_16127;
var inst_16109 = inst_16116;
var state_16148__$1 = (function (){var statearr_16160 = state_16148;
(statearr_16160[(11)] = inst_16126);

(statearr_16160[(12)] = inst_16128);

(statearr_16160[(7)] = inst_16109);

(statearr_16160[(8)] = inst_16108);

return statearr_16160;
})();
var statearr_16161_16191 = state_16148__$1;
(statearr_16161_16191[(2)] = null);

(statearr_16161_16191[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (9))){
var inst_16108 = (state_16148[(8)]);
var inst_16124 = cljs.core.vec.call(null,inst_16108);
var state_16148__$1 = state_16148;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16148__$1,(11),out,inst_16124);
} else {
if((state_val_16149 === (5))){
var inst_16112 = (state_16148[(9)]);
var inst_16116 = (state_16148[(10)]);
var inst_16109 = (state_16148[(7)]);
var inst_16116__$1 = f.call(null,inst_16112);
var inst_16117 = cljs.core._EQ_.call(null,inst_16116__$1,inst_16109);
var inst_16118 = cljs.core.keyword_identical_QMARK_.call(null,inst_16109,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16119 = (inst_16117) || (inst_16118);
var state_16148__$1 = (function (){var statearr_16162 = state_16148;
(statearr_16162[(10)] = inst_16116__$1);

return statearr_16162;
})();
if(cljs.core.truth_(inst_16119)){
var statearr_16163_16192 = state_16148__$1;
(statearr_16163_16192[(1)] = (8));

} else {
var statearr_16164_16193 = state_16148__$1;
(statearr_16164_16193[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (14))){
var inst_16141 = (state_16148[(2)]);
var inst_16142 = cljs.core.async.close_BANG_.call(null,out);
var state_16148__$1 = (function (){var statearr_16166 = state_16148;
(statearr_16166[(13)] = inst_16141);

return statearr_16166;
})();
var statearr_16167_16194 = state_16148__$1;
(statearr_16167_16194[(2)] = inst_16142);

(statearr_16167_16194[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (10))){
var inst_16131 = (state_16148[(2)]);
var state_16148__$1 = state_16148;
var statearr_16168_16195 = state_16148__$1;
(statearr_16168_16195[(2)] = inst_16131);

(statearr_16168_16195[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16149 === (8))){
var inst_16112 = (state_16148[(9)]);
var inst_16116 = (state_16148[(10)]);
var inst_16108 = (state_16148[(8)]);
var inst_16121 = inst_16108.push(inst_16112);
var tmp16165 = inst_16108;
var inst_16108__$1 = tmp16165;
var inst_16109 = inst_16116;
var state_16148__$1 = (function (){var statearr_16169 = state_16148;
(statearr_16169[(14)] = inst_16121);

(statearr_16169[(7)] = inst_16109);

(statearr_16169[(8)] = inst_16108__$1);

return statearr_16169;
})();
var statearr_16170_16196 = state_16148__$1;
(statearr_16170_16196[(2)] = null);

(statearr_16170_16196[(1)] = (2));


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
});})(c__8543__auto___16182,out))
;
return ((function (switch__8478__auto__,c__8543__auto___16182,out){
return (function() {
var cljs$core$async$state_machine__8479__auto__ = null;
var cljs$core$async$state_machine__8479__auto____0 = (function (){
var statearr_16174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16174[(0)] = cljs$core$async$state_machine__8479__auto__);

(statearr_16174[(1)] = (1));

return statearr_16174;
});
var cljs$core$async$state_machine__8479__auto____1 = (function (state_16148){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_16148);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e16175){if((e16175 instanceof Object)){
var ex__8482__auto__ = e16175;
var statearr_16176_16197 = state_16148;
(statearr_16176_16197[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16148);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16175;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16198 = state_16148;
state_16148 = G__16198;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
cljs$core$async$state_machine__8479__auto__ = function(state_16148){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__8479__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__8479__auto____1.call(this,state_16148);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__8479__auto____0;
cljs$core$async$state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__8479__auto____1;
return cljs$core$async$state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___16182,out))
})();
var state__8545__auto__ = (function (){var statearr_16177 = f__8544__auto__.call(null);
(statearr_16177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___16182);

return statearr_16177;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___16182,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map