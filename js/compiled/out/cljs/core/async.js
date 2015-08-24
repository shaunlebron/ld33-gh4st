// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async32327 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32327 = (function (fn_handler,f,meta32328){
this.fn_handler = fn_handler;
this.f = f;
this.meta32328 = meta32328;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32329,meta32328__$1){
var self__ = this;
var _32329__$1 = this;
return (new cljs.core.async.t_cljs$core$async32327(self__.fn_handler,self__.f,meta32328__$1));
});

cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32329){
var self__ = this;
var _32329__$1 = this;
return self__.meta32328;
});

cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async32327.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async32327.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta32328","meta32328",-53698599,null)], null);
});

cljs.core.async.t_cljs$core$async32327.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32327.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32327";

cljs.core.async.t_cljs$core$async32327.cljs$lang$ctorPrWriter = (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async32327");
});

cljs.core.async.__GT_t_cljs$core$async32327 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async32327(fn_handler__$1,f__$1,meta32328){
return (new cljs.core.async.t_cljs$core$async32327(fn_handler__$1,f__$1,meta32328));
});

}

return (new cljs.core.async.t_cljs$core$async32327(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args32332 = [];
var len__17567__auto___32335 = arguments.length;
var i__17568__auto___32336 = (0);
while(true){
if((i__17568__auto___32336 < len__17567__auto___32335)){
args32332.push((arguments[i__17568__auto___32336]));

var G__32337 = (i__17568__auto___32336 + (1));
i__17568__auto___32336 = G__32337;
continue;
} else {
}
break;
}

var G__32334 = args32332.length;
switch (G__32334) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32332.length)].join('')));

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
var args32339 = [];
var len__17567__auto___32342 = arguments.length;
var i__17568__auto___32343 = (0);
while(true){
if((i__17568__auto___32343 < len__17567__auto___32342)){
args32339.push((arguments[i__17568__auto___32343]));

var G__32344 = (i__17568__auto___32343 + (1));
i__17568__auto___32343 = G__32344;
continue;
} else {
}
break;
}

var G__32341 = args32339.length;
switch (G__32341) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32339.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_32346 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_32346);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_32346,ret){
return (function (){
return fn1.call(null,val_32346);
});})(val_32346,ret))
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
var args32347 = [];
var len__17567__auto___32350 = arguments.length;
var i__17568__auto___32351 = (0);
while(true){
if((i__17568__auto___32351 < len__17567__auto___32350)){
args32347.push((arguments[i__17568__auto___32351]));

var G__32352 = (i__17568__auto___32351 + (1));
i__17568__auto___32351 = G__32352;
continue;
} else {
}
break;
}

var G__32349 = args32347.length;
switch (G__32349) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32347.length)].join('')));

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
var n__17412__auto___32354 = n;
var x_32355 = (0);
while(true){
if((x_32355 < n__17412__auto___32354)){
(a[x_32355] = (0));

var G__32356 = (x_32355 + (1));
x_32355 = G__32356;
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

var G__32357 = (i + (1));
i = G__32357;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async32361 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32361 = (function (alt_flag,flag,meta32362){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta32362 = meta32362;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32363,meta32362__$1){
var self__ = this;
var _32363__$1 = this;
return (new cljs.core.async.t_cljs$core$async32361(self__.alt_flag,self__.flag,meta32362__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32363){
var self__ = this;
var _32363__$1 = this;
return self__.meta32362;
});})(flag))
;

cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async32361.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async32361.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta32362","meta32362",1454885577,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async32361.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32361.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32361";

cljs.core.async.t_cljs$core$async32361.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async32361");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async32361 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async32361(alt_flag__$1,flag__$1,meta32362){
return (new cljs.core.async.t_cljs$core$async32361(alt_flag__$1,flag__$1,meta32362));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async32361(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async32367 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async32367 = (function (alt_handler,flag,cb,meta32368){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta32368 = meta32368;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32369,meta32368__$1){
var self__ = this;
var _32369__$1 = this;
return (new cljs.core.async.t_cljs$core$async32367(self__.alt_handler,self__.flag,self__.cb,meta32368__$1));
});

cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32369){
var self__ = this;
var _32369__$1 = this;
return self__.meta32368;
});

cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async32367.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async32367.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta32368","meta32368",-98799822,null)], null);
});

cljs.core.async.t_cljs$core$async32367.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async32367.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async32367";

cljs.core.async.t_cljs$core$async32367.cljs$lang$ctorPrWriter = (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async32367");
});

cljs.core.async.__GT_t_cljs$core$async32367 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async32367(alt_handler__$1,flag__$1,cb__$1,meta32368){
return (new cljs.core.async.t_cljs$core$async32367(alt_handler__$1,flag__$1,cb__$1,meta32368));
});

}

return (new cljs.core.async.t_cljs$core$async32367(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__32370_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32370_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__32371_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32371_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16508__auto__ = wport;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32372 = (i + (1));
i = G__32372;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16508__auto__ = ret;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16496__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16496__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16496__auto__;
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
var args__17574__auto__ = [];
var len__17567__auto___32378 = arguments.length;
var i__17568__auto___32379 = (0);
while(true){
if((i__17568__auto___32379 < len__17567__auto___32378)){
args__17574__auto__.push((arguments[i__17568__auto___32379]));

var G__32380 = (i__17568__auto___32379 + (1));
i__17568__auto___32379 = G__32380;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((1) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17575__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__32375){
var map__32376 = p__32375;
var map__32376__$1 = ((((!((map__32376 == null)))?((((map__32376.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32376.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32376):map__32376);
var opts = map__32376__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq32373){
var G__32374 = cljs.core.first.call(null,seq32373);
var seq32373__$1 = cljs.core.next.call(null,seq32373);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__32374,seq32373__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args32381 = [];
var len__17567__auto___32431 = arguments.length;
var i__17568__auto___32432 = (0);
while(true){
if((i__17568__auto___32432 < len__17567__auto___32431)){
args32381.push((arguments[i__17568__auto___32432]));

var G__32433 = (i__17568__auto___32432 + (1));
i__17568__auto___32432 = G__32433;
continue;
} else {
}
break;
}

var G__32383 = args32381.length;
switch (G__32383) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32381.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__24095__auto___32435 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___32435){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___32435){
return (function (state_32407){
var state_val_32408 = (state_32407[(1)]);
if((state_val_32408 === (7))){
var inst_32403 = (state_32407[(2)]);
var state_32407__$1 = state_32407;
var statearr_32409_32436 = state_32407__$1;
(statearr_32409_32436[(2)] = inst_32403);

(statearr_32409_32436[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (1))){
var state_32407__$1 = state_32407;
var statearr_32410_32437 = state_32407__$1;
(statearr_32410_32437[(2)] = null);

(statearr_32410_32437[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (4))){
var inst_32386 = (state_32407[(7)]);
var inst_32386__$1 = (state_32407[(2)]);
var inst_32387 = (inst_32386__$1 == null);
var state_32407__$1 = (function (){var statearr_32411 = state_32407;
(statearr_32411[(7)] = inst_32386__$1);

return statearr_32411;
})();
if(cljs.core.truth_(inst_32387)){
var statearr_32412_32438 = state_32407__$1;
(statearr_32412_32438[(1)] = (5));

} else {
var statearr_32413_32439 = state_32407__$1;
(statearr_32413_32439[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (13))){
var state_32407__$1 = state_32407;
var statearr_32414_32440 = state_32407__$1;
(statearr_32414_32440[(2)] = null);

(statearr_32414_32440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (6))){
var inst_32386 = (state_32407[(7)]);
var state_32407__$1 = state_32407;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32407__$1,(11),to,inst_32386);
} else {
if((state_val_32408 === (3))){
var inst_32405 = (state_32407[(2)]);
var state_32407__$1 = state_32407;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32407__$1,inst_32405);
} else {
if((state_val_32408 === (12))){
var state_32407__$1 = state_32407;
var statearr_32415_32441 = state_32407__$1;
(statearr_32415_32441[(2)] = null);

(statearr_32415_32441[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (2))){
var state_32407__$1 = state_32407;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32407__$1,(4),from);
} else {
if((state_val_32408 === (11))){
var inst_32396 = (state_32407[(2)]);
var state_32407__$1 = state_32407;
if(cljs.core.truth_(inst_32396)){
var statearr_32416_32442 = state_32407__$1;
(statearr_32416_32442[(1)] = (12));

} else {
var statearr_32417_32443 = state_32407__$1;
(statearr_32417_32443[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (9))){
var state_32407__$1 = state_32407;
var statearr_32418_32444 = state_32407__$1;
(statearr_32418_32444[(2)] = null);

(statearr_32418_32444[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (5))){
var state_32407__$1 = state_32407;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32419_32445 = state_32407__$1;
(statearr_32419_32445[(1)] = (8));

} else {
var statearr_32420_32446 = state_32407__$1;
(statearr_32420_32446[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (14))){
var inst_32401 = (state_32407[(2)]);
var state_32407__$1 = state_32407;
var statearr_32421_32447 = state_32407__$1;
(statearr_32421_32447[(2)] = inst_32401);

(statearr_32421_32447[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (10))){
var inst_32393 = (state_32407[(2)]);
var state_32407__$1 = state_32407;
var statearr_32422_32448 = state_32407__$1;
(statearr_32422_32448[(2)] = inst_32393);

(statearr_32422_32448[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32408 === (8))){
var inst_32390 = cljs.core.async.close_BANG_.call(null,to);
var state_32407__$1 = state_32407;
var statearr_32423_32449 = state_32407__$1;
(statearr_32423_32449[(2)] = inst_32390);

(statearr_32423_32449[(1)] = (10));


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
});})(c__24095__auto___32435))
;
return ((function (switch__24030__auto__,c__24095__auto___32435){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_32427 = [null,null,null,null,null,null,null,null];
(statearr_32427[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_32427[(1)] = (1));

return statearr_32427;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_32407){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_32407);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e32428){if((e32428 instanceof Object)){
var ex__24034__auto__ = e32428;
var statearr_32429_32450 = state_32407;
(statearr_32429_32450[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32407);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32428;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32451 = state_32407;
state_32407 = G__32451;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_32407){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_32407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___32435))
})();
var state__24097__auto__ = (function (){var statearr_32430 = f__24096__auto__.call(null);
(statearr_32430[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___32435);

return statearr_32430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___32435))
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
return (function (p__32635){
var vec__32636 = p__32635;
var v = cljs.core.nth.call(null,vec__32636,(0),null);
var p = cljs.core.nth.call(null,vec__32636,(1),null);
var job = vec__32636;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__24095__auto___32818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___32818,res,vec__32636,v,p,job,jobs,results){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___32818,res,vec__32636,v,p,job,jobs,results){
return (function (state_32641){
var state_val_32642 = (state_32641[(1)]);
if((state_val_32642 === (1))){
var state_32641__$1 = state_32641;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32641__$1,(2),res,v);
} else {
if((state_val_32642 === (2))){
var inst_32638 = (state_32641[(2)]);
var inst_32639 = cljs.core.async.close_BANG_.call(null,res);
var state_32641__$1 = (function (){var statearr_32643 = state_32641;
(statearr_32643[(7)] = inst_32638);

return statearr_32643;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32641__$1,inst_32639);
} else {
return null;
}
}
});})(c__24095__auto___32818,res,vec__32636,v,p,job,jobs,results))
;
return ((function (switch__24030__auto__,c__24095__auto___32818,res,vec__32636,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0 = (function (){
var statearr_32647 = [null,null,null,null,null,null,null,null];
(statearr_32647[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__);

(statearr_32647[(1)] = (1));

return statearr_32647;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1 = (function (state_32641){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_32641);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e32648){if((e32648 instanceof Object)){
var ex__24034__auto__ = e32648;
var statearr_32649_32819 = state_32641;
(statearr_32649_32819[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32641);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32648;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32820 = state_32641;
state_32641 = G__32820;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__ = function(state_32641){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1.call(this,state_32641);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___32818,res,vec__32636,v,p,job,jobs,results))
})();
var state__24097__auto__ = (function (){var statearr_32650 = f__24096__auto__.call(null);
(statearr_32650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___32818);

return statearr_32650;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___32818,res,vec__32636,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__32651){
var vec__32652 = p__32651;
var v = cljs.core.nth.call(null,vec__32652,(0),null);
var p = cljs.core.nth.call(null,vec__32652,(1),null);
var job = vec__32652;
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
var n__17412__auto___32821 = n;
var __32822 = (0);
while(true){
if((__32822 < n__17412__auto___32821)){
var G__32653_32823 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__32653_32823) {
case "compute":
var c__24095__auto___32825 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32822,c__24095__auto___32825,G__32653_32823,n__17412__auto___32821,jobs,results,process,async){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (__32822,c__24095__auto___32825,G__32653_32823,n__17412__auto___32821,jobs,results,process,async){
return (function (state_32666){
var state_val_32667 = (state_32666[(1)]);
if((state_val_32667 === (1))){
var state_32666__$1 = state_32666;
var statearr_32668_32826 = state_32666__$1;
(statearr_32668_32826[(2)] = null);

(statearr_32668_32826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (2))){
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32666__$1,(4),jobs);
} else {
if((state_val_32667 === (3))){
var inst_32664 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32666__$1,inst_32664);
} else {
if((state_val_32667 === (4))){
var inst_32656 = (state_32666[(2)]);
var inst_32657 = process.call(null,inst_32656);
var state_32666__$1 = state_32666;
if(cljs.core.truth_(inst_32657)){
var statearr_32669_32827 = state_32666__$1;
(statearr_32669_32827[(1)] = (5));

} else {
var statearr_32670_32828 = state_32666__$1;
(statearr_32670_32828[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (5))){
var state_32666__$1 = state_32666;
var statearr_32671_32829 = state_32666__$1;
(statearr_32671_32829[(2)] = null);

(statearr_32671_32829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (6))){
var state_32666__$1 = state_32666;
var statearr_32672_32830 = state_32666__$1;
(statearr_32672_32830[(2)] = null);

(statearr_32672_32830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32667 === (7))){
var inst_32662 = (state_32666[(2)]);
var state_32666__$1 = state_32666;
var statearr_32673_32831 = state_32666__$1;
(statearr_32673_32831[(2)] = inst_32662);

(statearr_32673_32831[(1)] = (3));


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
});})(__32822,c__24095__auto___32825,G__32653_32823,n__17412__auto___32821,jobs,results,process,async))
;
return ((function (__32822,switch__24030__auto__,c__24095__auto___32825,G__32653_32823,n__17412__auto___32821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0 = (function (){
var statearr_32677 = [null,null,null,null,null,null,null];
(statearr_32677[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__);

(statearr_32677[(1)] = (1));

return statearr_32677;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1 = (function (state_32666){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_32666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e32678){if((e32678 instanceof Object)){
var ex__24034__auto__ = e32678;
var statearr_32679_32832 = state_32666;
(statearr_32679_32832[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32678;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32833 = state_32666;
state_32666 = G__32833;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__ = function(state_32666){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1.call(this,state_32666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__;
})()
;})(__32822,switch__24030__auto__,c__24095__auto___32825,G__32653_32823,n__17412__auto___32821,jobs,results,process,async))
})();
var state__24097__auto__ = (function (){var statearr_32680 = f__24096__auto__.call(null);
(statearr_32680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___32825);

return statearr_32680;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(__32822,c__24095__auto___32825,G__32653_32823,n__17412__auto___32821,jobs,results,process,async))
);


break;
case "async":
var c__24095__auto___32834 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__32822,c__24095__auto___32834,G__32653_32823,n__17412__auto___32821,jobs,results,process,async){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (__32822,c__24095__auto___32834,G__32653_32823,n__17412__auto___32821,jobs,results,process,async){
return (function (state_32693){
var state_val_32694 = (state_32693[(1)]);
if((state_val_32694 === (1))){
var state_32693__$1 = state_32693;
var statearr_32695_32835 = state_32693__$1;
(statearr_32695_32835[(2)] = null);

(statearr_32695_32835[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (2))){
var state_32693__$1 = state_32693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32693__$1,(4),jobs);
} else {
if((state_val_32694 === (3))){
var inst_32691 = (state_32693[(2)]);
var state_32693__$1 = state_32693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32693__$1,inst_32691);
} else {
if((state_val_32694 === (4))){
var inst_32683 = (state_32693[(2)]);
var inst_32684 = async.call(null,inst_32683);
var state_32693__$1 = state_32693;
if(cljs.core.truth_(inst_32684)){
var statearr_32696_32836 = state_32693__$1;
(statearr_32696_32836[(1)] = (5));

} else {
var statearr_32697_32837 = state_32693__$1;
(statearr_32697_32837[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (5))){
var state_32693__$1 = state_32693;
var statearr_32698_32838 = state_32693__$1;
(statearr_32698_32838[(2)] = null);

(statearr_32698_32838[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (6))){
var state_32693__$1 = state_32693;
var statearr_32699_32839 = state_32693__$1;
(statearr_32699_32839[(2)] = null);

(statearr_32699_32839[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32694 === (7))){
var inst_32689 = (state_32693[(2)]);
var state_32693__$1 = state_32693;
var statearr_32700_32840 = state_32693__$1;
(statearr_32700_32840[(2)] = inst_32689);

(statearr_32700_32840[(1)] = (3));


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
});})(__32822,c__24095__auto___32834,G__32653_32823,n__17412__auto___32821,jobs,results,process,async))
;
return ((function (__32822,switch__24030__auto__,c__24095__auto___32834,G__32653_32823,n__17412__auto___32821,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0 = (function (){
var statearr_32704 = [null,null,null,null,null,null,null];
(statearr_32704[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__);

(statearr_32704[(1)] = (1));

return statearr_32704;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1 = (function (state_32693){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_32693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e32705){if((e32705 instanceof Object)){
var ex__24034__auto__ = e32705;
var statearr_32706_32841 = state_32693;
(statearr_32706_32841[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32842 = state_32693;
state_32693 = G__32842;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__ = function(state_32693){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1.call(this,state_32693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__;
})()
;})(__32822,switch__24030__auto__,c__24095__auto___32834,G__32653_32823,n__17412__auto___32821,jobs,results,process,async))
})();
var state__24097__auto__ = (function (){var statearr_32707 = f__24096__auto__.call(null);
(statearr_32707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___32834);

return statearr_32707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(__32822,c__24095__auto___32834,G__32653_32823,n__17412__auto___32821,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__32843 = (__32822 + (1));
__32822 = G__32843;
continue;
} else {
}
break;
}

var c__24095__auto___32844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___32844,jobs,results,process,async){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___32844,jobs,results,process,async){
return (function (state_32729){
var state_val_32730 = (state_32729[(1)]);
if((state_val_32730 === (1))){
var state_32729__$1 = state_32729;
var statearr_32731_32845 = state_32729__$1;
(statearr_32731_32845[(2)] = null);

(statearr_32731_32845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (2))){
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32729__$1,(4),from);
} else {
if((state_val_32730 === (3))){
var inst_32727 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32729__$1,inst_32727);
} else {
if((state_val_32730 === (4))){
var inst_32710 = (state_32729[(7)]);
var inst_32710__$1 = (state_32729[(2)]);
var inst_32711 = (inst_32710__$1 == null);
var state_32729__$1 = (function (){var statearr_32732 = state_32729;
(statearr_32732[(7)] = inst_32710__$1);

return statearr_32732;
})();
if(cljs.core.truth_(inst_32711)){
var statearr_32733_32846 = state_32729__$1;
(statearr_32733_32846[(1)] = (5));

} else {
var statearr_32734_32847 = state_32729__$1;
(statearr_32734_32847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (5))){
var inst_32713 = cljs.core.async.close_BANG_.call(null,jobs);
var state_32729__$1 = state_32729;
var statearr_32735_32848 = state_32729__$1;
(statearr_32735_32848[(2)] = inst_32713);

(statearr_32735_32848[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (6))){
var inst_32715 = (state_32729[(8)]);
var inst_32710 = (state_32729[(7)]);
var inst_32715__$1 = cljs.core.async.chan.call(null,(1));
var inst_32716 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32717 = [inst_32710,inst_32715__$1];
var inst_32718 = (new cljs.core.PersistentVector(null,2,(5),inst_32716,inst_32717,null));
var state_32729__$1 = (function (){var statearr_32736 = state_32729;
(statearr_32736[(8)] = inst_32715__$1);

return statearr_32736;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32729__$1,(8),jobs,inst_32718);
} else {
if((state_val_32730 === (7))){
var inst_32725 = (state_32729[(2)]);
var state_32729__$1 = state_32729;
var statearr_32737_32849 = state_32729__$1;
(statearr_32737_32849[(2)] = inst_32725);

(statearr_32737_32849[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32730 === (8))){
var inst_32715 = (state_32729[(8)]);
var inst_32720 = (state_32729[(2)]);
var state_32729__$1 = (function (){var statearr_32738 = state_32729;
(statearr_32738[(9)] = inst_32720);

return statearr_32738;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32729__$1,(9),results,inst_32715);
} else {
if((state_val_32730 === (9))){
var inst_32722 = (state_32729[(2)]);
var state_32729__$1 = (function (){var statearr_32739 = state_32729;
(statearr_32739[(10)] = inst_32722);

return statearr_32739;
})();
var statearr_32740_32850 = state_32729__$1;
(statearr_32740_32850[(2)] = null);

(statearr_32740_32850[(1)] = (2));


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
});})(c__24095__auto___32844,jobs,results,process,async))
;
return ((function (switch__24030__auto__,c__24095__auto___32844,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0 = (function (){
var statearr_32744 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_32744[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__);

(statearr_32744[(1)] = (1));

return statearr_32744;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1 = (function (state_32729){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_32729);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e32745){if((e32745 instanceof Object)){
var ex__24034__auto__ = e32745;
var statearr_32746_32851 = state_32729;
(statearr_32746_32851[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32852 = state_32729;
state_32729 = G__32852;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__ = function(state_32729){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1.call(this,state_32729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___32844,jobs,results,process,async))
})();
var state__24097__auto__ = (function (){var statearr_32747 = f__24096__auto__.call(null);
(statearr_32747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___32844);

return statearr_32747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___32844,jobs,results,process,async))
);


var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__,jobs,results,process,async){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__,jobs,results,process,async){
return (function (state_32785){
var state_val_32786 = (state_32785[(1)]);
if((state_val_32786 === (7))){
var inst_32781 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32787_32853 = state_32785__$1;
(statearr_32787_32853[(2)] = inst_32781);

(statearr_32787_32853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (20))){
var state_32785__$1 = state_32785;
var statearr_32788_32854 = state_32785__$1;
(statearr_32788_32854[(2)] = null);

(statearr_32788_32854[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (1))){
var state_32785__$1 = state_32785;
var statearr_32789_32855 = state_32785__$1;
(statearr_32789_32855[(2)] = null);

(statearr_32789_32855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (4))){
var inst_32750 = (state_32785[(7)]);
var inst_32750__$1 = (state_32785[(2)]);
var inst_32751 = (inst_32750__$1 == null);
var state_32785__$1 = (function (){var statearr_32790 = state_32785;
(statearr_32790[(7)] = inst_32750__$1);

return statearr_32790;
})();
if(cljs.core.truth_(inst_32751)){
var statearr_32791_32856 = state_32785__$1;
(statearr_32791_32856[(1)] = (5));

} else {
var statearr_32792_32857 = state_32785__$1;
(statearr_32792_32857[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (15))){
var inst_32763 = (state_32785[(8)]);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32785__$1,(18),to,inst_32763);
} else {
if((state_val_32786 === (21))){
var inst_32776 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32793_32858 = state_32785__$1;
(statearr_32793_32858[(2)] = inst_32776);

(statearr_32793_32858[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (13))){
var inst_32778 = (state_32785[(2)]);
var state_32785__$1 = (function (){var statearr_32794 = state_32785;
(statearr_32794[(9)] = inst_32778);

return statearr_32794;
})();
var statearr_32795_32859 = state_32785__$1;
(statearr_32795_32859[(2)] = null);

(statearr_32795_32859[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (6))){
var inst_32750 = (state_32785[(7)]);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32785__$1,(11),inst_32750);
} else {
if((state_val_32786 === (17))){
var inst_32771 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
if(cljs.core.truth_(inst_32771)){
var statearr_32796_32860 = state_32785__$1;
(statearr_32796_32860[(1)] = (19));

} else {
var statearr_32797_32861 = state_32785__$1;
(statearr_32797_32861[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (3))){
var inst_32783 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32785__$1,inst_32783);
} else {
if((state_val_32786 === (12))){
var inst_32760 = (state_32785[(10)]);
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32785__$1,(14),inst_32760);
} else {
if((state_val_32786 === (2))){
var state_32785__$1 = state_32785;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32785__$1,(4),results);
} else {
if((state_val_32786 === (19))){
var state_32785__$1 = state_32785;
var statearr_32798_32862 = state_32785__$1;
(statearr_32798_32862[(2)] = null);

(statearr_32798_32862[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (11))){
var inst_32760 = (state_32785[(2)]);
var state_32785__$1 = (function (){var statearr_32799 = state_32785;
(statearr_32799[(10)] = inst_32760);

return statearr_32799;
})();
var statearr_32800_32863 = state_32785__$1;
(statearr_32800_32863[(2)] = null);

(statearr_32800_32863[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (9))){
var state_32785__$1 = state_32785;
var statearr_32801_32864 = state_32785__$1;
(statearr_32801_32864[(2)] = null);

(statearr_32801_32864[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (5))){
var state_32785__$1 = state_32785;
if(cljs.core.truth_(close_QMARK_)){
var statearr_32802_32865 = state_32785__$1;
(statearr_32802_32865[(1)] = (8));

} else {
var statearr_32803_32866 = state_32785__$1;
(statearr_32803_32866[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (14))){
var inst_32763 = (state_32785[(8)]);
var inst_32765 = (state_32785[(11)]);
var inst_32763__$1 = (state_32785[(2)]);
var inst_32764 = (inst_32763__$1 == null);
var inst_32765__$1 = cljs.core.not.call(null,inst_32764);
var state_32785__$1 = (function (){var statearr_32804 = state_32785;
(statearr_32804[(8)] = inst_32763__$1);

(statearr_32804[(11)] = inst_32765__$1);

return statearr_32804;
})();
if(inst_32765__$1){
var statearr_32805_32867 = state_32785__$1;
(statearr_32805_32867[(1)] = (15));

} else {
var statearr_32806_32868 = state_32785__$1;
(statearr_32806_32868[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (16))){
var inst_32765 = (state_32785[(11)]);
var state_32785__$1 = state_32785;
var statearr_32807_32869 = state_32785__$1;
(statearr_32807_32869[(2)] = inst_32765);

(statearr_32807_32869[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (10))){
var inst_32757 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32808_32870 = state_32785__$1;
(statearr_32808_32870[(2)] = inst_32757);

(statearr_32808_32870[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (18))){
var inst_32768 = (state_32785[(2)]);
var state_32785__$1 = state_32785;
var statearr_32809_32871 = state_32785__$1;
(statearr_32809_32871[(2)] = inst_32768);

(statearr_32809_32871[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32786 === (8))){
var inst_32754 = cljs.core.async.close_BANG_.call(null,to);
var state_32785__$1 = state_32785;
var statearr_32810_32872 = state_32785__$1;
(statearr_32810_32872[(2)] = inst_32754);

(statearr_32810_32872[(1)] = (10));


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
});})(c__24095__auto__,jobs,results,process,async))
;
return ((function (switch__24030__auto__,c__24095__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0 = (function (){
var statearr_32814 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32814[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__);

(statearr_32814[(1)] = (1));

return statearr_32814;
});
var cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1 = (function (state_32785){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_32785);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e32815){if((e32815 instanceof Object)){
var ex__24034__auto__ = e32815;
var statearr_32816_32873 = state_32785;
(statearr_32816_32873[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32785);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32815;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32874 = state_32785;
state_32785 = G__32874;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__ = function(state_32785){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1.call(this,state_32785);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__24031__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__,jobs,results,process,async))
})();
var state__24097__auto__ = (function (){var statearr_32817 = f__24096__auto__.call(null);
(statearr_32817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_32817;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__,jobs,results,process,async))
);

return c__24095__auto__;
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
var args32875 = [];
var len__17567__auto___32878 = arguments.length;
var i__17568__auto___32879 = (0);
while(true){
if((i__17568__auto___32879 < len__17567__auto___32878)){
args32875.push((arguments[i__17568__auto___32879]));

var G__32880 = (i__17568__auto___32879 + (1));
i__17568__auto___32879 = G__32880;
continue;
} else {
}
break;
}

var G__32877 = args32875.length;
switch (G__32877) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32875.length)].join('')));

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
var args32882 = [];
var len__17567__auto___32885 = arguments.length;
var i__17568__auto___32886 = (0);
while(true){
if((i__17568__auto___32886 < len__17567__auto___32885)){
args32882.push((arguments[i__17568__auto___32886]));

var G__32887 = (i__17568__auto___32886 + (1));
i__17568__auto___32886 = G__32887;
continue;
} else {
}
break;
}

var G__32884 = args32882.length;
switch (G__32884) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32882.length)].join('')));

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
var args32889 = [];
var len__17567__auto___32942 = arguments.length;
var i__17568__auto___32943 = (0);
while(true){
if((i__17568__auto___32943 < len__17567__auto___32942)){
args32889.push((arguments[i__17568__auto___32943]));

var G__32944 = (i__17568__auto___32943 + (1));
i__17568__auto___32943 = G__32944;
continue;
} else {
}
break;
}

var G__32891 = args32889.length;
switch (G__32891) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32889.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__24095__auto___32946 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___32946,tc,fc){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___32946,tc,fc){
return (function (state_32917){
var state_val_32918 = (state_32917[(1)]);
if((state_val_32918 === (7))){
var inst_32913 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32919_32947 = state_32917__$1;
(statearr_32919_32947[(2)] = inst_32913);

(statearr_32919_32947[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (1))){
var state_32917__$1 = state_32917;
var statearr_32920_32948 = state_32917__$1;
(statearr_32920_32948[(2)] = null);

(statearr_32920_32948[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (4))){
var inst_32894 = (state_32917[(7)]);
var inst_32894__$1 = (state_32917[(2)]);
var inst_32895 = (inst_32894__$1 == null);
var state_32917__$1 = (function (){var statearr_32921 = state_32917;
(statearr_32921[(7)] = inst_32894__$1);

return statearr_32921;
})();
if(cljs.core.truth_(inst_32895)){
var statearr_32922_32949 = state_32917__$1;
(statearr_32922_32949[(1)] = (5));

} else {
var statearr_32923_32950 = state_32917__$1;
(statearr_32923_32950[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (13))){
var state_32917__$1 = state_32917;
var statearr_32924_32951 = state_32917__$1;
(statearr_32924_32951[(2)] = null);

(statearr_32924_32951[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (6))){
var inst_32894 = (state_32917[(7)]);
var inst_32900 = p.call(null,inst_32894);
var state_32917__$1 = state_32917;
if(cljs.core.truth_(inst_32900)){
var statearr_32925_32952 = state_32917__$1;
(statearr_32925_32952[(1)] = (9));

} else {
var statearr_32926_32953 = state_32917__$1;
(statearr_32926_32953[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (3))){
var inst_32915 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32917__$1,inst_32915);
} else {
if((state_val_32918 === (12))){
var state_32917__$1 = state_32917;
var statearr_32927_32954 = state_32917__$1;
(statearr_32927_32954[(2)] = null);

(statearr_32927_32954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (2))){
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32917__$1,(4),ch);
} else {
if((state_val_32918 === (11))){
var inst_32894 = (state_32917[(7)]);
var inst_32904 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32917__$1,(8),inst_32904,inst_32894);
} else {
if((state_val_32918 === (9))){
var state_32917__$1 = state_32917;
var statearr_32928_32955 = state_32917__$1;
(statearr_32928_32955[(2)] = tc);

(statearr_32928_32955[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (5))){
var inst_32897 = cljs.core.async.close_BANG_.call(null,tc);
var inst_32898 = cljs.core.async.close_BANG_.call(null,fc);
var state_32917__$1 = (function (){var statearr_32929 = state_32917;
(statearr_32929[(8)] = inst_32897);

return statearr_32929;
})();
var statearr_32930_32956 = state_32917__$1;
(statearr_32930_32956[(2)] = inst_32898);

(statearr_32930_32956[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (14))){
var inst_32911 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
var statearr_32931_32957 = state_32917__$1;
(statearr_32931_32957[(2)] = inst_32911);

(statearr_32931_32957[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (10))){
var state_32917__$1 = state_32917;
var statearr_32932_32958 = state_32917__$1;
(statearr_32932_32958[(2)] = fc);

(statearr_32932_32958[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32918 === (8))){
var inst_32906 = (state_32917[(2)]);
var state_32917__$1 = state_32917;
if(cljs.core.truth_(inst_32906)){
var statearr_32933_32959 = state_32917__$1;
(statearr_32933_32959[(1)] = (12));

} else {
var statearr_32934_32960 = state_32917__$1;
(statearr_32934_32960[(1)] = (13));

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
});})(c__24095__auto___32946,tc,fc))
;
return ((function (switch__24030__auto__,c__24095__auto___32946,tc,fc){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_32938 = [null,null,null,null,null,null,null,null,null];
(statearr_32938[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_32938[(1)] = (1));

return statearr_32938;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_32917){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_32917);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e32939){if((e32939 instanceof Object)){
var ex__24034__auto__ = e32939;
var statearr_32940_32961 = state_32917;
(statearr_32940_32961[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32917);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32939;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32962 = state_32917;
state_32917 = G__32962;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_32917){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_32917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___32946,tc,fc))
})();
var state__24097__auto__ = (function (){var statearr_32941 = f__24096__auto__.call(null);
(statearr_32941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___32946);

return statearr_32941;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___32946,tc,fc))
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
var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__){
return (function (state_33009){
var state_val_33010 = (state_33009[(1)]);
if((state_val_33010 === (1))){
var inst_32995 = init;
var state_33009__$1 = (function (){var statearr_33011 = state_33009;
(statearr_33011[(7)] = inst_32995);

return statearr_33011;
})();
var statearr_33012_33027 = state_33009__$1;
(statearr_33012_33027[(2)] = null);

(statearr_33012_33027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (2))){
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33009__$1,(4),ch);
} else {
if((state_val_33010 === (3))){
var inst_33007 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33009__$1,inst_33007);
} else {
if((state_val_33010 === (4))){
var inst_32998 = (state_33009[(8)]);
var inst_32998__$1 = (state_33009[(2)]);
var inst_32999 = (inst_32998__$1 == null);
var state_33009__$1 = (function (){var statearr_33013 = state_33009;
(statearr_33013[(8)] = inst_32998__$1);

return statearr_33013;
})();
if(cljs.core.truth_(inst_32999)){
var statearr_33014_33028 = state_33009__$1;
(statearr_33014_33028[(1)] = (5));

} else {
var statearr_33015_33029 = state_33009__$1;
(statearr_33015_33029[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (5))){
var inst_32995 = (state_33009[(7)]);
var state_33009__$1 = state_33009;
var statearr_33016_33030 = state_33009__$1;
(statearr_33016_33030[(2)] = inst_32995);

(statearr_33016_33030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (6))){
var inst_32995 = (state_33009[(7)]);
var inst_32998 = (state_33009[(8)]);
var inst_33002 = f.call(null,inst_32995,inst_32998);
var inst_32995__$1 = inst_33002;
var state_33009__$1 = (function (){var statearr_33017 = state_33009;
(statearr_33017[(7)] = inst_32995__$1);

return statearr_33017;
})();
var statearr_33018_33031 = state_33009__$1;
(statearr_33018_33031[(2)] = null);

(statearr_33018_33031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33010 === (7))){
var inst_33005 = (state_33009[(2)]);
var state_33009__$1 = state_33009;
var statearr_33019_33032 = state_33009__$1;
(statearr_33019_33032[(2)] = inst_33005);

(statearr_33019_33032[(1)] = (3));


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
});})(c__24095__auto__))
;
return ((function (switch__24030__auto__,c__24095__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__24031__auto__ = null;
var cljs$core$async$reduce_$_state_machine__24031__auto____0 = (function (){
var statearr_33023 = [null,null,null,null,null,null,null,null,null];
(statearr_33023[(0)] = cljs$core$async$reduce_$_state_machine__24031__auto__);

(statearr_33023[(1)] = (1));

return statearr_33023;
});
var cljs$core$async$reduce_$_state_machine__24031__auto____1 = (function (state_33009){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_33009);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e33024){if((e33024 instanceof Object)){
var ex__24034__auto__ = e33024;
var statearr_33025_33033 = state_33009;
(statearr_33025_33033[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33009);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33024;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33034 = state_33009;
state_33009 = G__33034;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__24031__auto__ = function(state_33009){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__24031__auto____1.call(this,state_33009);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__24031__auto____0;
cljs$core$async$reduce_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__24031__auto____1;
return cljs$core$async$reduce_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__))
})();
var state__24097__auto__ = (function (){var statearr_33026 = f__24096__auto__.call(null);
(statearr_33026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_33026;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__))
);

return c__24095__auto__;
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
var args33035 = [];
var len__17567__auto___33087 = arguments.length;
var i__17568__auto___33088 = (0);
while(true){
if((i__17568__auto___33088 < len__17567__auto___33087)){
args33035.push((arguments[i__17568__auto___33088]));

var G__33089 = (i__17568__auto___33088 + (1));
i__17568__auto___33088 = G__33089;
continue;
} else {
}
break;
}

var G__33037 = args33035.length;
switch (G__33037) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33035.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__){
return (function (state_33062){
var state_val_33063 = (state_33062[(1)]);
if((state_val_33063 === (7))){
var inst_33044 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33064_33091 = state_33062__$1;
(statearr_33064_33091[(2)] = inst_33044);

(statearr_33064_33091[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (1))){
var inst_33038 = cljs.core.seq.call(null,coll);
var inst_33039 = inst_33038;
var state_33062__$1 = (function (){var statearr_33065 = state_33062;
(statearr_33065[(7)] = inst_33039);

return statearr_33065;
})();
var statearr_33066_33092 = state_33062__$1;
(statearr_33066_33092[(2)] = null);

(statearr_33066_33092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (4))){
var inst_33039 = (state_33062[(7)]);
var inst_33042 = cljs.core.first.call(null,inst_33039);
var state_33062__$1 = state_33062;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33062__$1,(7),ch,inst_33042);
} else {
if((state_val_33063 === (13))){
var inst_33056 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33067_33093 = state_33062__$1;
(statearr_33067_33093[(2)] = inst_33056);

(statearr_33067_33093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (6))){
var inst_33047 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
if(cljs.core.truth_(inst_33047)){
var statearr_33068_33094 = state_33062__$1;
(statearr_33068_33094[(1)] = (8));

} else {
var statearr_33069_33095 = state_33062__$1;
(statearr_33069_33095[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (3))){
var inst_33060 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33062__$1,inst_33060);
} else {
if((state_val_33063 === (12))){
var state_33062__$1 = state_33062;
var statearr_33070_33096 = state_33062__$1;
(statearr_33070_33096[(2)] = null);

(statearr_33070_33096[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (2))){
var inst_33039 = (state_33062[(7)]);
var state_33062__$1 = state_33062;
if(cljs.core.truth_(inst_33039)){
var statearr_33071_33097 = state_33062__$1;
(statearr_33071_33097[(1)] = (4));

} else {
var statearr_33072_33098 = state_33062__$1;
(statearr_33072_33098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (11))){
var inst_33053 = cljs.core.async.close_BANG_.call(null,ch);
var state_33062__$1 = state_33062;
var statearr_33073_33099 = state_33062__$1;
(statearr_33073_33099[(2)] = inst_33053);

(statearr_33073_33099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (9))){
var state_33062__$1 = state_33062;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33074_33100 = state_33062__$1;
(statearr_33074_33100[(1)] = (11));

} else {
var statearr_33075_33101 = state_33062__$1;
(statearr_33075_33101[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (5))){
var inst_33039 = (state_33062[(7)]);
var state_33062__$1 = state_33062;
var statearr_33076_33102 = state_33062__$1;
(statearr_33076_33102[(2)] = inst_33039);

(statearr_33076_33102[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (10))){
var inst_33058 = (state_33062[(2)]);
var state_33062__$1 = state_33062;
var statearr_33077_33103 = state_33062__$1;
(statearr_33077_33103[(2)] = inst_33058);

(statearr_33077_33103[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33063 === (8))){
var inst_33039 = (state_33062[(7)]);
var inst_33049 = cljs.core.next.call(null,inst_33039);
var inst_33039__$1 = inst_33049;
var state_33062__$1 = (function (){var statearr_33078 = state_33062;
(statearr_33078[(7)] = inst_33039__$1);

return statearr_33078;
})();
var statearr_33079_33104 = state_33062__$1;
(statearr_33079_33104[(2)] = null);

(statearr_33079_33104[(1)] = (2));


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
});})(c__24095__auto__))
;
return ((function (switch__24030__auto__,c__24095__auto__){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_33083 = [null,null,null,null,null,null,null,null];
(statearr_33083[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_33083[(1)] = (1));

return statearr_33083;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_33062){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_33062);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e33084){if((e33084 instanceof Object)){
var ex__24034__auto__ = e33084;
var statearr_33085_33105 = state_33062;
(statearr_33085_33105[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33062);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33084;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33106 = state_33062;
state_33062 = G__33106;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_33062){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_33062);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__))
})();
var state__24097__auto__ = (function (){var statearr_33086 = f__24096__auto__.call(null);
(statearr_33086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_33086;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__))
);

return c__24095__auto__;
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
var x__17163__auto__ = (((_ == null))?null:_);
var m__17164__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,_);
} else {
var m__17164__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,_);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__17164__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,ch,close_QMARK_);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,ch);
} else {
var m__17164__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,ch);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m);
} else {
var m__17164__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m);
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
if(typeof cljs.core.async.t_cljs$core$async33328 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33328 = (function (mult,ch,cs,meta33329){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta33329 = meta33329;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33330,meta33329__$1){
var self__ = this;
var _33330__$1 = this;
return (new cljs.core.async.t_cljs$core$async33328(self__.mult,self__.ch,self__.cs,meta33329__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33330){
var self__ = this;
var _33330__$1 = this;
return self__.meta33329;
});})(cs))
;

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33328.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33328.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33329","meta33329",2037288913,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33328.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33328.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33328";

cljs.core.async.t_cljs$core$async33328.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async33328");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33328 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33328(mult__$1,ch__$1,cs__$1,meta33329){
return (new cljs.core.async.t_cljs$core$async33328(mult__$1,ch__$1,cs__$1,meta33329));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33328(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__24095__auto___33549 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___33549,cs,m,dchan,dctr,done){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___33549,cs,m,dchan,dctr,done){
return (function (state_33461){
var state_val_33462 = (state_33461[(1)]);
if((state_val_33462 === (7))){
var inst_33457 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33463_33550 = state_33461__$1;
(statearr_33463_33550[(2)] = inst_33457);

(statearr_33463_33550[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (20))){
var inst_33362 = (state_33461[(7)]);
var inst_33372 = cljs.core.first.call(null,inst_33362);
var inst_33373 = cljs.core.nth.call(null,inst_33372,(0),null);
var inst_33374 = cljs.core.nth.call(null,inst_33372,(1),null);
var state_33461__$1 = (function (){var statearr_33464 = state_33461;
(statearr_33464[(8)] = inst_33373);

return statearr_33464;
})();
if(cljs.core.truth_(inst_33374)){
var statearr_33465_33551 = state_33461__$1;
(statearr_33465_33551[(1)] = (22));

} else {
var statearr_33466_33552 = state_33461__$1;
(statearr_33466_33552[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (27))){
var inst_33404 = (state_33461[(9)]);
var inst_33409 = (state_33461[(10)]);
var inst_33402 = (state_33461[(11)]);
var inst_33333 = (state_33461[(12)]);
var inst_33409__$1 = cljs.core._nth.call(null,inst_33402,inst_33404);
var inst_33410 = cljs.core.async.put_BANG_.call(null,inst_33409__$1,inst_33333,done);
var state_33461__$1 = (function (){var statearr_33467 = state_33461;
(statearr_33467[(10)] = inst_33409__$1);

return statearr_33467;
})();
if(cljs.core.truth_(inst_33410)){
var statearr_33468_33553 = state_33461__$1;
(statearr_33468_33553[(1)] = (30));

} else {
var statearr_33469_33554 = state_33461__$1;
(statearr_33469_33554[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (1))){
var state_33461__$1 = state_33461;
var statearr_33470_33555 = state_33461__$1;
(statearr_33470_33555[(2)] = null);

(statearr_33470_33555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (24))){
var inst_33362 = (state_33461[(7)]);
var inst_33379 = (state_33461[(2)]);
var inst_33380 = cljs.core.next.call(null,inst_33362);
var inst_33342 = inst_33380;
var inst_33343 = null;
var inst_33344 = (0);
var inst_33345 = (0);
var state_33461__$1 = (function (){var statearr_33471 = state_33461;
(statearr_33471[(13)] = inst_33342);

(statearr_33471[(14)] = inst_33344);

(statearr_33471[(15)] = inst_33379);

(statearr_33471[(16)] = inst_33345);

(statearr_33471[(17)] = inst_33343);

return statearr_33471;
})();
var statearr_33472_33556 = state_33461__$1;
(statearr_33472_33556[(2)] = null);

(statearr_33472_33556[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (39))){
var state_33461__$1 = state_33461;
var statearr_33476_33557 = state_33461__$1;
(statearr_33476_33557[(2)] = null);

(statearr_33476_33557[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (4))){
var inst_33333 = (state_33461[(12)]);
var inst_33333__$1 = (state_33461[(2)]);
var inst_33334 = (inst_33333__$1 == null);
var state_33461__$1 = (function (){var statearr_33477 = state_33461;
(statearr_33477[(12)] = inst_33333__$1);

return statearr_33477;
})();
if(cljs.core.truth_(inst_33334)){
var statearr_33478_33558 = state_33461__$1;
(statearr_33478_33558[(1)] = (5));

} else {
var statearr_33479_33559 = state_33461__$1;
(statearr_33479_33559[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (15))){
var inst_33342 = (state_33461[(13)]);
var inst_33344 = (state_33461[(14)]);
var inst_33345 = (state_33461[(16)]);
var inst_33343 = (state_33461[(17)]);
var inst_33358 = (state_33461[(2)]);
var inst_33359 = (inst_33345 + (1));
var tmp33473 = inst_33342;
var tmp33474 = inst_33344;
var tmp33475 = inst_33343;
var inst_33342__$1 = tmp33473;
var inst_33343__$1 = tmp33475;
var inst_33344__$1 = tmp33474;
var inst_33345__$1 = inst_33359;
var state_33461__$1 = (function (){var statearr_33480 = state_33461;
(statearr_33480[(13)] = inst_33342__$1);

(statearr_33480[(18)] = inst_33358);

(statearr_33480[(14)] = inst_33344__$1);

(statearr_33480[(16)] = inst_33345__$1);

(statearr_33480[(17)] = inst_33343__$1);

return statearr_33480;
})();
var statearr_33481_33560 = state_33461__$1;
(statearr_33481_33560[(2)] = null);

(statearr_33481_33560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (21))){
var inst_33383 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33485_33561 = state_33461__$1;
(statearr_33485_33561[(2)] = inst_33383);

(statearr_33485_33561[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (31))){
var inst_33409 = (state_33461[(10)]);
var inst_33413 = done.call(null,null);
var inst_33414 = cljs.core.async.untap_STAR_.call(null,m,inst_33409);
var state_33461__$1 = (function (){var statearr_33486 = state_33461;
(statearr_33486[(19)] = inst_33413);

return statearr_33486;
})();
var statearr_33487_33562 = state_33461__$1;
(statearr_33487_33562[(2)] = inst_33414);

(statearr_33487_33562[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (32))){
var inst_33404 = (state_33461[(9)]);
var inst_33401 = (state_33461[(20)]);
var inst_33402 = (state_33461[(11)]);
var inst_33403 = (state_33461[(21)]);
var inst_33416 = (state_33461[(2)]);
var inst_33417 = (inst_33404 + (1));
var tmp33482 = inst_33401;
var tmp33483 = inst_33402;
var tmp33484 = inst_33403;
var inst_33401__$1 = tmp33482;
var inst_33402__$1 = tmp33483;
var inst_33403__$1 = tmp33484;
var inst_33404__$1 = inst_33417;
var state_33461__$1 = (function (){var statearr_33488 = state_33461;
(statearr_33488[(9)] = inst_33404__$1);

(statearr_33488[(20)] = inst_33401__$1);

(statearr_33488[(11)] = inst_33402__$1);

(statearr_33488[(21)] = inst_33403__$1);

(statearr_33488[(22)] = inst_33416);

return statearr_33488;
})();
var statearr_33489_33563 = state_33461__$1;
(statearr_33489_33563[(2)] = null);

(statearr_33489_33563[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (40))){
var inst_33429 = (state_33461[(23)]);
var inst_33433 = done.call(null,null);
var inst_33434 = cljs.core.async.untap_STAR_.call(null,m,inst_33429);
var state_33461__$1 = (function (){var statearr_33490 = state_33461;
(statearr_33490[(24)] = inst_33433);

return statearr_33490;
})();
var statearr_33491_33564 = state_33461__$1;
(statearr_33491_33564[(2)] = inst_33434);

(statearr_33491_33564[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (33))){
var inst_33420 = (state_33461[(25)]);
var inst_33422 = cljs.core.chunked_seq_QMARK_.call(null,inst_33420);
var state_33461__$1 = state_33461;
if(inst_33422){
var statearr_33492_33565 = state_33461__$1;
(statearr_33492_33565[(1)] = (36));

} else {
var statearr_33493_33566 = state_33461__$1;
(statearr_33493_33566[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (13))){
var inst_33352 = (state_33461[(26)]);
var inst_33355 = cljs.core.async.close_BANG_.call(null,inst_33352);
var state_33461__$1 = state_33461;
var statearr_33494_33567 = state_33461__$1;
(statearr_33494_33567[(2)] = inst_33355);

(statearr_33494_33567[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (22))){
var inst_33373 = (state_33461[(8)]);
var inst_33376 = cljs.core.async.close_BANG_.call(null,inst_33373);
var state_33461__$1 = state_33461;
var statearr_33495_33568 = state_33461__$1;
(statearr_33495_33568[(2)] = inst_33376);

(statearr_33495_33568[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (36))){
var inst_33420 = (state_33461[(25)]);
var inst_33424 = cljs.core.chunk_first.call(null,inst_33420);
var inst_33425 = cljs.core.chunk_rest.call(null,inst_33420);
var inst_33426 = cljs.core.count.call(null,inst_33424);
var inst_33401 = inst_33425;
var inst_33402 = inst_33424;
var inst_33403 = inst_33426;
var inst_33404 = (0);
var state_33461__$1 = (function (){var statearr_33496 = state_33461;
(statearr_33496[(9)] = inst_33404);

(statearr_33496[(20)] = inst_33401);

(statearr_33496[(11)] = inst_33402);

(statearr_33496[(21)] = inst_33403);

return statearr_33496;
})();
var statearr_33497_33569 = state_33461__$1;
(statearr_33497_33569[(2)] = null);

(statearr_33497_33569[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (41))){
var inst_33420 = (state_33461[(25)]);
var inst_33436 = (state_33461[(2)]);
var inst_33437 = cljs.core.next.call(null,inst_33420);
var inst_33401 = inst_33437;
var inst_33402 = null;
var inst_33403 = (0);
var inst_33404 = (0);
var state_33461__$1 = (function (){var statearr_33498 = state_33461;
(statearr_33498[(27)] = inst_33436);

(statearr_33498[(9)] = inst_33404);

(statearr_33498[(20)] = inst_33401);

(statearr_33498[(11)] = inst_33402);

(statearr_33498[(21)] = inst_33403);

return statearr_33498;
})();
var statearr_33499_33570 = state_33461__$1;
(statearr_33499_33570[(2)] = null);

(statearr_33499_33570[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (43))){
var state_33461__$1 = state_33461;
var statearr_33500_33571 = state_33461__$1;
(statearr_33500_33571[(2)] = null);

(statearr_33500_33571[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (29))){
var inst_33445 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33501_33572 = state_33461__$1;
(statearr_33501_33572[(2)] = inst_33445);

(statearr_33501_33572[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (44))){
var inst_33454 = (state_33461[(2)]);
var state_33461__$1 = (function (){var statearr_33502 = state_33461;
(statearr_33502[(28)] = inst_33454);

return statearr_33502;
})();
var statearr_33503_33573 = state_33461__$1;
(statearr_33503_33573[(2)] = null);

(statearr_33503_33573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (6))){
var inst_33393 = (state_33461[(29)]);
var inst_33392 = cljs.core.deref.call(null,cs);
var inst_33393__$1 = cljs.core.keys.call(null,inst_33392);
var inst_33394 = cljs.core.count.call(null,inst_33393__$1);
var inst_33395 = cljs.core.reset_BANG_.call(null,dctr,inst_33394);
var inst_33400 = cljs.core.seq.call(null,inst_33393__$1);
var inst_33401 = inst_33400;
var inst_33402 = null;
var inst_33403 = (0);
var inst_33404 = (0);
var state_33461__$1 = (function (){var statearr_33504 = state_33461;
(statearr_33504[(9)] = inst_33404);

(statearr_33504[(20)] = inst_33401);

(statearr_33504[(11)] = inst_33402);

(statearr_33504[(30)] = inst_33395);

(statearr_33504[(21)] = inst_33403);

(statearr_33504[(29)] = inst_33393__$1);

return statearr_33504;
})();
var statearr_33505_33574 = state_33461__$1;
(statearr_33505_33574[(2)] = null);

(statearr_33505_33574[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (28))){
var inst_33401 = (state_33461[(20)]);
var inst_33420 = (state_33461[(25)]);
var inst_33420__$1 = cljs.core.seq.call(null,inst_33401);
var state_33461__$1 = (function (){var statearr_33506 = state_33461;
(statearr_33506[(25)] = inst_33420__$1);

return statearr_33506;
})();
if(inst_33420__$1){
var statearr_33507_33575 = state_33461__$1;
(statearr_33507_33575[(1)] = (33));

} else {
var statearr_33508_33576 = state_33461__$1;
(statearr_33508_33576[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (25))){
var inst_33404 = (state_33461[(9)]);
var inst_33403 = (state_33461[(21)]);
var inst_33406 = (inst_33404 < inst_33403);
var inst_33407 = inst_33406;
var state_33461__$1 = state_33461;
if(cljs.core.truth_(inst_33407)){
var statearr_33509_33577 = state_33461__$1;
(statearr_33509_33577[(1)] = (27));

} else {
var statearr_33510_33578 = state_33461__$1;
(statearr_33510_33578[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (34))){
var state_33461__$1 = state_33461;
var statearr_33511_33579 = state_33461__$1;
(statearr_33511_33579[(2)] = null);

(statearr_33511_33579[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (17))){
var state_33461__$1 = state_33461;
var statearr_33512_33580 = state_33461__$1;
(statearr_33512_33580[(2)] = null);

(statearr_33512_33580[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (3))){
var inst_33459 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33461__$1,inst_33459);
} else {
if((state_val_33462 === (12))){
var inst_33388 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33513_33581 = state_33461__$1;
(statearr_33513_33581[(2)] = inst_33388);

(statearr_33513_33581[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (2))){
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33461__$1,(4),ch);
} else {
if((state_val_33462 === (23))){
var state_33461__$1 = state_33461;
var statearr_33514_33582 = state_33461__$1;
(statearr_33514_33582[(2)] = null);

(statearr_33514_33582[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (35))){
var inst_33443 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33515_33583 = state_33461__$1;
(statearr_33515_33583[(2)] = inst_33443);

(statearr_33515_33583[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (19))){
var inst_33362 = (state_33461[(7)]);
var inst_33366 = cljs.core.chunk_first.call(null,inst_33362);
var inst_33367 = cljs.core.chunk_rest.call(null,inst_33362);
var inst_33368 = cljs.core.count.call(null,inst_33366);
var inst_33342 = inst_33367;
var inst_33343 = inst_33366;
var inst_33344 = inst_33368;
var inst_33345 = (0);
var state_33461__$1 = (function (){var statearr_33516 = state_33461;
(statearr_33516[(13)] = inst_33342);

(statearr_33516[(14)] = inst_33344);

(statearr_33516[(16)] = inst_33345);

(statearr_33516[(17)] = inst_33343);

return statearr_33516;
})();
var statearr_33517_33584 = state_33461__$1;
(statearr_33517_33584[(2)] = null);

(statearr_33517_33584[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (11))){
var inst_33342 = (state_33461[(13)]);
var inst_33362 = (state_33461[(7)]);
var inst_33362__$1 = cljs.core.seq.call(null,inst_33342);
var state_33461__$1 = (function (){var statearr_33518 = state_33461;
(statearr_33518[(7)] = inst_33362__$1);

return statearr_33518;
})();
if(inst_33362__$1){
var statearr_33519_33585 = state_33461__$1;
(statearr_33519_33585[(1)] = (16));

} else {
var statearr_33520_33586 = state_33461__$1;
(statearr_33520_33586[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (9))){
var inst_33390 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33521_33587 = state_33461__$1;
(statearr_33521_33587[(2)] = inst_33390);

(statearr_33521_33587[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (5))){
var inst_33340 = cljs.core.deref.call(null,cs);
var inst_33341 = cljs.core.seq.call(null,inst_33340);
var inst_33342 = inst_33341;
var inst_33343 = null;
var inst_33344 = (0);
var inst_33345 = (0);
var state_33461__$1 = (function (){var statearr_33522 = state_33461;
(statearr_33522[(13)] = inst_33342);

(statearr_33522[(14)] = inst_33344);

(statearr_33522[(16)] = inst_33345);

(statearr_33522[(17)] = inst_33343);

return statearr_33522;
})();
var statearr_33523_33588 = state_33461__$1;
(statearr_33523_33588[(2)] = null);

(statearr_33523_33588[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (14))){
var state_33461__$1 = state_33461;
var statearr_33524_33589 = state_33461__$1;
(statearr_33524_33589[(2)] = null);

(statearr_33524_33589[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (45))){
var inst_33451 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33525_33590 = state_33461__$1;
(statearr_33525_33590[(2)] = inst_33451);

(statearr_33525_33590[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (26))){
var inst_33393 = (state_33461[(29)]);
var inst_33447 = (state_33461[(2)]);
var inst_33448 = cljs.core.seq.call(null,inst_33393);
var state_33461__$1 = (function (){var statearr_33526 = state_33461;
(statearr_33526[(31)] = inst_33447);

return statearr_33526;
})();
if(inst_33448){
var statearr_33527_33591 = state_33461__$1;
(statearr_33527_33591[(1)] = (42));

} else {
var statearr_33528_33592 = state_33461__$1;
(statearr_33528_33592[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (16))){
var inst_33362 = (state_33461[(7)]);
var inst_33364 = cljs.core.chunked_seq_QMARK_.call(null,inst_33362);
var state_33461__$1 = state_33461;
if(inst_33364){
var statearr_33529_33593 = state_33461__$1;
(statearr_33529_33593[(1)] = (19));

} else {
var statearr_33530_33594 = state_33461__$1;
(statearr_33530_33594[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (38))){
var inst_33440 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33531_33595 = state_33461__$1;
(statearr_33531_33595[(2)] = inst_33440);

(statearr_33531_33595[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (30))){
var state_33461__$1 = state_33461;
var statearr_33532_33596 = state_33461__$1;
(statearr_33532_33596[(2)] = null);

(statearr_33532_33596[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (10))){
var inst_33345 = (state_33461[(16)]);
var inst_33343 = (state_33461[(17)]);
var inst_33351 = cljs.core._nth.call(null,inst_33343,inst_33345);
var inst_33352 = cljs.core.nth.call(null,inst_33351,(0),null);
var inst_33353 = cljs.core.nth.call(null,inst_33351,(1),null);
var state_33461__$1 = (function (){var statearr_33533 = state_33461;
(statearr_33533[(26)] = inst_33352);

return statearr_33533;
})();
if(cljs.core.truth_(inst_33353)){
var statearr_33534_33597 = state_33461__$1;
(statearr_33534_33597[(1)] = (13));

} else {
var statearr_33535_33598 = state_33461__$1;
(statearr_33535_33598[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (18))){
var inst_33386 = (state_33461[(2)]);
var state_33461__$1 = state_33461;
var statearr_33536_33599 = state_33461__$1;
(statearr_33536_33599[(2)] = inst_33386);

(statearr_33536_33599[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (42))){
var state_33461__$1 = state_33461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33461__$1,(45),dchan);
} else {
if((state_val_33462 === (37))){
var inst_33420 = (state_33461[(25)]);
var inst_33429 = (state_33461[(23)]);
var inst_33333 = (state_33461[(12)]);
var inst_33429__$1 = cljs.core.first.call(null,inst_33420);
var inst_33430 = cljs.core.async.put_BANG_.call(null,inst_33429__$1,inst_33333,done);
var state_33461__$1 = (function (){var statearr_33537 = state_33461;
(statearr_33537[(23)] = inst_33429__$1);

return statearr_33537;
})();
if(cljs.core.truth_(inst_33430)){
var statearr_33538_33600 = state_33461__$1;
(statearr_33538_33600[(1)] = (39));

} else {
var statearr_33539_33601 = state_33461__$1;
(statearr_33539_33601[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33462 === (8))){
var inst_33344 = (state_33461[(14)]);
var inst_33345 = (state_33461[(16)]);
var inst_33347 = (inst_33345 < inst_33344);
var inst_33348 = inst_33347;
var state_33461__$1 = state_33461;
if(cljs.core.truth_(inst_33348)){
var statearr_33540_33602 = state_33461__$1;
(statearr_33540_33602[(1)] = (10));

} else {
var statearr_33541_33603 = state_33461__$1;
(statearr_33541_33603[(1)] = (11));

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
});})(c__24095__auto___33549,cs,m,dchan,dctr,done))
;
return ((function (switch__24030__auto__,c__24095__auto___33549,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__24031__auto__ = null;
var cljs$core$async$mult_$_state_machine__24031__auto____0 = (function (){
var statearr_33545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33545[(0)] = cljs$core$async$mult_$_state_machine__24031__auto__);

(statearr_33545[(1)] = (1));

return statearr_33545;
});
var cljs$core$async$mult_$_state_machine__24031__auto____1 = (function (state_33461){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_33461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e33546){if((e33546 instanceof Object)){
var ex__24034__auto__ = e33546;
var statearr_33547_33604 = state_33461;
(statearr_33547_33604[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33546;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33605 = state_33461;
state_33461 = G__33605;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__24031__auto__ = function(state_33461){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__24031__auto____1.call(this,state_33461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__24031__auto____0;
cljs$core$async$mult_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__24031__auto____1;
return cljs$core$async$mult_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___33549,cs,m,dchan,dctr,done))
})();
var state__24097__auto__ = (function (){var statearr_33548 = f__24096__auto__.call(null);
(statearr_33548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___33549);

return statearr_33548;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___33549,cs,m,dchan,dctr,done))
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
var args33606 = [];
var len__17567__auto___33609 = arguments.length;
var i__17568__auto___33610 = (0);
while(true){
if((i__17568__auto___33610 < len__17567__auto___33609)){
args33606.push((arguments[i__17568__auto___33610]));

var G__33611 = (i__17568__auto___33610 + (1));
i__17568__auto___33610 = G__33611;
continue;
} else {
}
break;
}

var G__33608 = args33606.length;
switch (G__33608) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33606.length)].join('')));

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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,ch);
} else {
var m__17164__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,ch);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,ch);
} else {
var m__17164__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,ch);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m);
} else {
var m__17164__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,state_map);
} else {
var m__17164__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,state_map);
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
var x__17163__auto__ = (((m == null))?null:m);
var m__17164__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,m,mode);
} else {
var m__17164__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17574__auto__ = [];
var len__17567__auto___33623 = arguments.length;
var i__17568__auto___33624 = (0);
while(true){
if((i__17568__auto___33624 < len__17567__auto___33623)){
args__17574__auto__.push((arguments[i__17568__auto___33624]));

var G__33625 = (i__17568__auto___33624 + (1));
i__17568__auto___33624 = G__33625;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((3) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17575__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33617){
var map__33618 = p__33617;
var map__33618__$1 = ((((!((map__33618 == null)))?((((map__33618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33618):map__33618);
var opts = map__33618__$1;
var statearr_33620_33626 = state;
(statearr_33620_33626[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__33618,map__33618__$1,opts){
return (function (val){
var statearr_33621_33627 = state;
(statearr_33621_33627[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33618,map__33618__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_33622_33628 = state;
(statearr_33622_33628[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33613){
var G__33614 = cljs.core.first.call(null,seq33613);
var seq33613__$1 = cljs.core.next.call(null,seq33613);
var G__33615 = cljs.core.first.call(null,seq33613__$1);
var seq33613__$2 = cljs.core.next.call(null,seq33613__$1);
var G__33616 = cljs.core.first.call(null,seq33613__$2);
var seq33613__$3 = cljs.core.next.call(null,seq33613__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33614,G__33615,G__33616,seq33613__$3);
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
if(typeof cljs.core.async.t_cljs$core$async33792 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33792 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33793){
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
this.meta33793 = meta33793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async33792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33794,meta33793__$1){
var self__ = this;
var _33794__$1 = this;
return (new cljs.core.async.t_cljs$core$async33792(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33793__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33792.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33794){
var self__ = this;
var _33794__$1 = this;
return self__.meta33793;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33792.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async33792.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33792.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async33792.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33792.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33792.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33792.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33792.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async33792.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta33793","meta33793",-889932596,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async33792.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33792.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33792";

cljs.core.async.t_cljs$core$async33792.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async33792");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async33792 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async33792(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33793){
return (new cljs.core.async.t_cljs$core$async33792(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33793));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async33792(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24095__auto___33955 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___33955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___33955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33892){
var state_val_33893 = (state_33892[(1)]);
if((state_val_33893 === (7))){
var inst_33810 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33894_33956 = state_33892__$1;
(statearr_33894_33956[(2)] = inst_33810);

(statearr_33894_33956[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (20))){
var inst_33822 = (state_33892[(7)]);
var state_33892__$1 = state_33892;
var statearr_33895_33957 = state_33892__$1;
(statearr_33895_33957[(2)] = inst_33822);

(statearr_33895_33957[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (27))){
var state_33892__$1 = state_33892;
var statearr_33896_33958 = state_33892__$1;
(statearr_33896_33958[(2)] = null);

(statearr_33896_33958[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (1))){
var inst_33798 = (state_33892[(8)]);
var inst_33798__$1 = calc_state.call(null);
var inst_33800 = (inst_33798__$1 == null);
var inst_33801 = cljs.core.not.call(null,inst_33800);
var state_33892__$1 = (function (){var statearr_33897 = state_33892;
(statearr_33897[(8)] = inst_33798__$1);

return statearr_33897;
})();
if(inst_33801){
var statearr_33898_33959 = state_33892__$1;
(statearr_33898_33959[(1)] = (2));

} else {
var statearr_33899_33960 = state_33892__$1;
(statearr_33899_33960[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (24))){
var inst_33852 = (state_33892[(9)]);
var inst_33866 = (state_33892[(10)]);
var inst_33845 = (state_33892[(11)]);
var inst_33866__$1 = inst_33845.call(null,inst_33852);
var state_33892__$1 = (function (){var statearr_33900 = state_33892;
(statearr_33900[(10)] = inst_33866__$1);

return statearr_33900;
})();
if(cljs.core.truth_(inst_33866__$1)){
var statearr_33901_33961 = state_33892__$1;
(statearr_33901_33961[(1)] = (29));

} else {
var statearr_33902_33962 = state_33892__$1;
(statearr_33902_33962[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (4))){
var inst_33813 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33813)){
var statearr_33903_33963 = state_33892__$1;
(statearr_33903_33963[(1)] = (8));

} else {
var statearr_33904_33964 = state_33892__$1;
(statearr_33904_33964[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (15))){
var inst_33839 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33839)){
var statearr_33905_33965 = state_33892__$1;
(statearr_33905_33965[(1)] = (19));

} else {
var statearr_33906_33966 = state_33892__$1;
(statearr_33906_33966[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (21))){
var inst_33844 = (state_33892[(12)]);
var inst_33844__$1 = (state_33892[(2)]);
var inst_33845 = cljs.core.get.call(null,inst_33844__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33846 = cljs.core.get.call(null,inst_33844__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33847 = cljs.core.get.call(null,inst_33844__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_33892__$1 = (function (){var statearr_33907 = state_33892;
(statearr_33907[(13)] = inst_33846);

(statearr_33907[(11)] = inst_33845);

(statearr_33907[(12)] = inst_33844__$1);

return statearr_33907;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_33892__$1,(22),inst_33847);
} else {
if((state_val_33893 === (31))){
var inst_33874 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33874)){
var statearr_33908_33967 = state_33892__$1;
(statearr_33908_33967[(1)] = (32));

} else {
var statearr_33909_33968 = state_33892__$1;
(statearr_33909_33968[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (32))){
var inst_33851 = (state_33892[(14)]);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33892__$1,(35),out,inst_33851);
} else {
if((state_val_33893 === (33))){
var inst_33844 = (state_33892[(12)]);
var inst_33822 = inst_33844;
var state_33892__$1 = (function (){var statearr_33910 = state_33892;
(statearr_33910[(7)] = inst_33822);

return statearr_33910;
})();
var statearr_33911_33969 = state_33892__$1;
(statearr_33911_33969[(2)] = null);

(statearr_33911_33969[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (13))){
var inst_33822 = (state_33892[(7)]);
var inst_33829 = inst_33822.cljs$lang$protocol_mask$partition0$;
var inst_33830 = (inst_33829 & (64));
var inst_33831 = inst_33822.cljs$core$ISeq$;
var inst_33832 = (inst_33830) || (inst_33831);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33832)){
var statearr_33912_33970 = state_33892__$1;
(statearr_33912_33970[(1)] = (16));

} else {
var statearr_33913_33971 = state_33892__$1;
(statearr_33913_33971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (22))){
var inst_33852 = (state_33892[(9)]);
var inst_33851 = (state_33892[(14)]);
var inst_33850 = (state_33892[(2)]);
var inst_33851__$1 = cljs.core.nth.call(null,inst_33850,(0),null);
var inst_33852__$1 = cljs.core.nth.call(null,inst_33850,(1),null);
var inst_33853 = (inst_33851__$1 == null);
var inst_33854 = cljs.core._EQ_.call(null,inst_33852__$1,change);
var inst_33855 = (inst_33853) || (inst_33854);
var state_33892__$1 = (function (){var statearr_33914 = state_33892;
(statearr_33914[(9)] = inst_33852__$1);

(statearr_33914[(14)] = inst_33851__$1);

return statearr_33914;
})();
if(cljs.core.truth_(inst_33855)){
var statearr_33915_33972 = state_33892__$1;
(statearr_33915_33972[(1)] = (23));

} else {
var statearr_33916_33973 = state_33892__$1;
(statearr_33916_33973[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (36))){
var inst_33844 = (state_33892[(12)]);
var inst_33822 = inst_33844;
var state_33892__$1 = (function (){var statearr_33917 = state_33892;
(statearr_33917[(7)] = inst_33822);

return statearr_33917;
})();
var statearr_33918_33974 = state_33892__$1;
(statearr_33918_33974[(2)] = null);

(statearr_33918_33974[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (29))){
var inst_33866 = (state_33892[(10)]);
var state_33892__$1 = state_33892;
var statearr_33919_33975 = state_33892__$1;
(statearr_33919_33975[(2)] = inst_33866);

(statearr_33919_33975[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (6))){
var state_33892__$1 = state_33892;
var statearr_33920_33976 = state_33892__$1;
(statearr_33920_33976[(2)] = false);

(statearr_33920_33976[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (28))){
var inst_33862 = (state_33892[(2)]);
var inst_33863 = calc_state.call(null);
var inst_33822 = inst_33863;
var state_33892__$1 = (function (){var statearr_33921 = state_33892;
(statearr_33921[(15)] = inst_33862);

(statearr_33921[(7)] = inst_33822);

return statearr_33921;
})();
var statearr_33922_33977 = state_33892__$1;
(statearr_33922_33977[(2)] = null);

(statearr_33922_33977[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (25))){
var inst_33888 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33923_33978 = state_33892__$1;
(statearr_33923_33978[(2)] = inst_33888);

(statearr_33923_33978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (34))){
var inst_33886 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33924_33979 = state_33892__$1;
(statearr_33924_33979[(2)] = inst_33886);

(statearr_33924_33979[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (17))){
var state_33892__$1 = state_33892;
var statearr_33925_33980 = state_33892__$1;
(statearr_33925_33980[(2)] = false);

(statearr_33925_33980[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (3))){
var state_33892__$1 = state_33892;
var statearr_33926_33981 = state_33892__$1;
(statearr_33926_33981[(2)] = false);

(statearr_33926_33981[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (12))){
var inst_33890 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33892__$1,inst_33890);
} else {
if((state_val_33893 === (2))){
var inst_33798 = (state_33892[(8)]);
var inst_33803 = inst_33798.cljs$lang$protocol_mask$partition0$;
var inst_33804 = (inst_33803 & (64));
var inst_33805 = inst_33798.cljs$core$ISeq$;
var inst_33806 = (inst_33804) || (inst_33805);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33806)){
var statearr_33927_33982 = state_33892__$1;
(statearr_33927_33982[(1)] = (5));

} else {
var statearr_33928_33983 = state_33892__$1;
(statearr_33928_33983[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (23))){
var inst_33851 = (state_33892[(14)]);
var inst_33857 = (inst_33851 == null);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33857)){
var statearr_33929_33984 = state_33892__$1;
(statearr_33929_33984[(1)] = (26));

} else {
var statearr_33930_33985 = state_33892__$1;
(statearr_33930_33985[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (35))){
var inst_33877 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
if(cljs.core.truth_(inst_33877)){
var statearr_33931_33986 = state_33892__$1;
(statearr_33931_33986[(1)] = (36));

} else {
var statearr_33932_33987 = state_33892__$1;
(statearr_33932_33987[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (19))){
var inst_33822 = (state_33892[(7)]);
var inst_33841 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33822);
var state_33892__$1 = state_33892;
var statearr_33933_33988 = state_33892__$1;
(statearr_33933_33988[(2)] = inst_33841);

(statearr_33933_33988[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (11))){
var inst_33822 = (state_33892[(7)]);
var inst_33826 = (inst_33822 == null);
var inst_33827 = cljs.core.not.call(null,inst_33826);
var state_33892__$1 = state_33892;
if(inst_33827){
var statearr_33934_33989 = state_33892__$1;
(statearr_33934_33989[(1)] = (13));

} else {
var statearr_33935_33990 = state_33892__$1;
(statearr_33935_33990[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (9))){
var inst_33798 = (state_33892[(8)]);
var state_33892__$1 = state_33892;
var statearr_33936_33991 = state_33892__$1;
(statearr_33936_33991[(2)] = inst_33798);

(statearr_33936_33991[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (5))){
var state_33892__$1 = state_33892;
var statearr_33937_33992 = state_33892__$1;
(statearr_33937_33992[(2)] = true);

(statearr_33937_33992[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (14))){
var state_33892__$1 = state_33892;
var statearr_33938_33993 = state_33892__$1;
(statearr_33938_33993[(2)] = false);

(statearr_33938_33993[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (26))){
var inst_33852 = (state_33892[(9)]);
var inst_33859 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33852);
var state_33892__$1 = state_33892;
var statearr_33939_33994 = state_33892__$1;
(statearr_33939_33994[(2)] = inst_33859);

(statearr_33939_33994[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (16))){
var state_33892__$1 = state_33892;
var statearr_33940_33995 = state_33892__$1;
(statearr_33940_33995[(2)] = true);

(statearr_33940_33995[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (38))){
var inst_33882 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33941_33996 = state_33892__$1;
(statearr_33941_33996[(2)] = inst_33882);

(statearr_33941_33996[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (30))){
var inst_33852 = (state_33892[(9)]);
var inst_33846 = (state_33892[(13)]);
var inst_33845 = (state_33892[(11)]);
var inst_33869 = cljs.core.empty_QMARK_.call(null,inst_33845);
var inst_33870 = inst_33846.call(null,inst_33852);
var inst_33871 = cljs.core.not.call(null,inst_33870);
var inst_33872 = (inst_33869) && (inst_33871);
var state_33892__$1 = state_33892;
var statearr_33942_33997 = state_33892__$1;
(statearr_33942_33997[(2)] = inst_33872);

(statearr_33942_33997[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (10))){
var inst_33798 = (state_33892[(8)]);
var inst_33818 = (state_33892[(2)]);
var inst_33819 = cljs.core.get.call(null,inst_33818,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_33820 = cljs.core.get.call(null,inst_33818,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_33821 = cljs.core.get.call(null,inst_33818,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_33822 = inst_33798;
var state_33892__$1 = (function (){var statearr_33943 = state_33892;
(statearr_33943[(16)] = inst_33820);

(statearr_33943[(17)] = inst_33821);

(statearr_33943[(18)] = inst_33819);

(statearr_33943[(7)] = inst_33822);

return statearr_33943;
})();
var statearr_33944_33998 = state_33892__$1;
(statearr_33944_33998[(2)] = null);

(statearr_33944_33998[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (18))){
var inst_33836 = (state_33892[(2)]);
var state_33892__$1 = state_33892;
var statearr_33945_33999 = state_33892__$1;
(statearr_33945_33999[(2)] = inst_33836);

(statearr_33945_33999[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (37))){
var state_33892__$1 = state_33892;
var statearr_33946_34000 = state_33892__$1;
(statearr_33946_34000[(2)] = null);

(statearr_33946_34000[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33893 === (8))){
var inst_33798 = (state_33892[(8)]);
var inst_33815 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33798);
var state_33892__$1 = state_33892;
var statearr_33947_34001 = state_33892__$1;
(statearr_33947_34001[(2)] = inst_33815);

(statearr_33947_34001[(1)] = (10));


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
});})(c__24095__auto___33955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__24030__auto__,c__24095__auto___33955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__24031__auto__ = null;
var cljs$core$async$mix_$_state_machine__24031__auto____0 = (function (){
var statearr_33951 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33951[(0)] = cljs$core$async$mix_$_state_machine__24031__auto__);

(statearr_33951[(1)] = (1));

return statearr_33951;
});
var cljs$core$async$mix_$_state_machine__24031__auto____1 = (function (state_33892){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_33892);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e33952){if((e33952 instanceof Object)){
var ex__24034__auto__ = e33952;
var statearr_33953_34002 = state_33892;
(statearr_33953_34002[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33892);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34003 = state_33892;
state_33892 = G__34003;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__24031__auto__ = function(state_33892){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__24031__auto____1.call(this,state_33892);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__24031__auto____0;
cljs$core$async$mix_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__24031__auto____1;
return cljs$core$async$mix_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___33955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__24097__auto__ = (function (){var statearr_33954 = f__24096__auto__.call(null);
(statearr_33954[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___33955);

return statearr_33954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___33955,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var x__17163__auto__ = (((p == null))?null:p);
var m__17164__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__17164__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,p,v,ch,close_QMARK_);
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
var x__17163__auto__ = (((p == null))?null:p);
var m__17164__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,p,v,ch);
} else {
var m__17164__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args34004 = [];
var len__17567__auto___34007 = arguments.length;
var i__17568__auto___34008 = (0);
while(true){
if((i__17568__auto___34008 < len__17567__auto___34007)){
args34004.push((arguments[i__17568__auto___34008]));

var G__34009 = (i__17568__auto___34008 + (1));
i__17568__auto___34008 = G__34009;
continue;
} else {
}
break;
}

var G__34006 = args34004.length;
switch (G__34006) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34004.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__17163__auto__ = (((p == null))?null:p);
var m__17164__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,p);
} else {
var m__17164__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,p);
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
var x__17163__auto__ = (((p == null))?null:p);
var m__17164__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__17163__auto__)]);
if(!((m__17164__auto__ == null))){
return m__17164__auto__.call(null,p,v);
} else {
var m__17164__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__17164__auto____$1 == null))){
return m__17164__auto____$1.call(null,p,v);
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
var args34012 = [];
var len__17567__auto___34137 = arguments.length;
var i__17568__auto___34138 = (0);
while(true){
if((i__17568__auto___34138 < len__17567__auto___34137)){
args34012.push((arguments[i__17568__auto___34138]));

var G__34139 = (i__17568__auto___34138 + (1));
i__17568__auto___34138 = G__34139;
continue;
} else {
}
break;
}

var G__34014 = args34012.length;
switch (G__34014) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34012.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16508__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16508__auto__,mults){
return (function (p1__34011_SHARP_){
if(cljs.core.truth_(p1__34011_SHARP_.call(null,topic))){
return p1__34011_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34011_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16508__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34015 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34015 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34016){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34016 = meta34016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34017,meta34016__$1){
var self__ = this;
var _34017__$1 = this;
return (new cljs.core.async.t_cljs$core$async34015(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34016__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34017){
var self__ = this;
var _34017__$1 = this;
return self__.meta34016;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34015.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34015.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34016","meta34016",1315538769,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34015.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34015.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34015";

cljs.core.async.t_cljs$core$async34015.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async34015");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34015 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34016){
return (new cljs.core.async.t_cljs$core$async34015(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34016));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34015(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__24095__auto___34141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___34141,mults,ensure_mult,p){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___34141,mults,ensure_mult,p){
return (function (state_34089){
var state_val_34090 = (state_34089[(1)]);
if((state_val_34090 === (7))){
var inst_34085 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34091_34142 = state_34089__$1;
(statearr_34091_34142[(2)] = inst_34085);

(statearr_34091_34142[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (20))){
var state_34089__$1 = state_34089;
var statearr_34092_34143 = state_34089__$1;
(statearr_34092_34143[(2)] = null);

(statearr_34092_34143[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (1))){
var state_34089__$1 = state_34089;
var statearr_34093_34144 = state_34089__$1;
(statearr_34093_34144[(2)] = null);

(statearr_34093_34144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (24))){
var inst_34068 = (state_34089[(7)]);
var inst_34077 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34068);
var state_34089__$1 = state_34089;
var statearr_34094_34145 = state_34089__$1;
(statearr_34094_34145[(2)] = inst_34077);

(statearr_34094_34145[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (4))){
var inst_34020 = (state_34089[(8)]);
var inst_34020__$1 = (state_34089[(2)]);
var inst_34021 = (inst_34020__$1 == null);
var state_34089__$1 = (function (){var statearr_34095 = state_34089;
(statearr_34095[(8)] = inst_34020__$1);

return statearr_34095;
})();
if(cljs.core.truth_(inst_34021)){
var statearr_34096_34146 = state_34089__$1;
(statearr_34096_34146[(1)] = (5));

} else {
var statearr_34097_34147 = state_34089__$1;
(statearr_34097_34147[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (15))){
var inst_34062 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34098_34148 = state_34089__$1;
(statearr_34098_34148[(2)] = inst_34062);

(statearr_34098_34148[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (21))){
var inst_34082 = (state_34089[(2)]);
var state_34089__$1 = (function (){var statearr_34099 = state_34089;
(statearr_34099[(9)] = inst_34082);

return statearr_34099;
})();
var statearr_34100_34149 = state_34089__$1;
(statearr_34100_34149[(2)] = null);

(statearr_34100_34149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (13))){
var inst_34044 = (state_34089[(10)]);
var inst_34046 = cljs.core.chunked_seq_QMARK_.call(null,inst_34044);
var state_34089__$1 = state_34089;
if(inst_34046){
var statearr_34101_34150 = state_34089__$1;
(statearr_34101_34150[(1)] = (16));

} else {
var statearr_34102_34151 = state_34089__$1;
(statearr_34102_34151[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (22))){
var inst_34074 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
if(cljs.core.truth_(inst_34074)){
var statearr_34103_34152 = state_34089__$1;
(statearr_34103_34152[(1)] = (23));

} else {
var statearr_34104_34153 = state_34089__$1;
(statearr_34104_34153[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (6))){
var inst_34020 = (state_34089[(8)]);
var inst_34068 = (state_34089[(7)]);
var inst_34070 = (state_34089[(11)]);
var inst_34068__$1 = topic_fn.call(null,inst_34020);
var inst_34069 = cljs.core.deref.call(null,mults);
var inst_34070__$1 = cljs.core.get.call(null,inst_34069,inst_34068__$1);
var state_34089__$1 = (function (){var statearr_34105 = state_34089;
(statearr_34105[(7)] = inst_34068__$1);

(statearr_34105[(11)] = inst_34070__$1);

return statearr_34105;
})();
if(cljs.core.truth_(inst_34070__$1)){
var statearr_34106_34154 = state_34089__$1;
(statearr_34106_34154[(1)] = (19));

} else {
var statearr_34107_34155 = state_34089__$1;
(statearr_34107_34155[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (25))){
var inst_34079 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34108_34156 = state_34089__$1;
(statearr_34108_34156[(2)] = inst_34079);

(statearr_34108_34156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (17))){
var inst_34044 = (state_34089[(10)]);
var inst_34053 = cljs.core.first.call(null,inst_34044);
var inst_34054 = cljs.core.async.muxch_STAR_.call(null,inst_34053);
var inst_34055 = cljs.core.async.close_BANG_.call(null,inst_34054);
var inst_34056 = cljs.core.next.call(null,inst_34044);
var inst_34030 = inst_34056;
var inst_34031 = null;
var inst_34032 = (0);
var inst_34033 = (0);
var state_34089__$1 = (function (){var statearr_34109 = state_34089;
(statearr_34109[(12)] = inst_34033);

(statearr_34109[(13)] = inst_34032);

(statearr_34109[(14)] = inst_34055);

(statearr_34109[(15)] = inst_34030);

(statearr_34109[(16)] = inst_34031);

return statearr_34109;
})();
var statearr_34110_34157 = state_34089__$1;
(statearr_34110_34157[(2)] = null);

(statearr_34110_34157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (3))){
var inst_34087 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34089__$1,inst_34087);
} else {
if((state_val_34090 === (12))){
var inst_34064 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34111_34158 = state_34089__$1;
(statearr_34111_34158[(2)] = inst_34064);

(statearr_34111_34158[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (2))){
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34089__$1,(4),ch);
} else {
if((state_val_34090 === (23))){
var state_34089__$1 = state_34089;
var statearr_34112_34159 = state_34089__$1;
(statearr_34112_34159[(2)] = null);

(statearr_34112_34159[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (19))){
var inst_34020 = (state_34089[(8)]);
var inst_34070 = (state_34089[(11)]);
var inst_34072 = cljs.core.async.muxch_STAR_.call(null,inst_34070);
var state_34089__$1 = state_34089;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34089__$1,(22),inst_34072,inst_34020);
} else {
if((state_val_34090 === (11))){
var inst_34030 = (state_34089[(15)]);
var inst_34044 = (state_34089[(10)]);
var inst_34044__$1 = cljs.core.seq.call(null,inst_34030);
var state_34089__$1 = (function (){var statearr_34113 = state_34089;
(statearr_34113[(10)] = inst_34044__$1);

return statearr_34113;
})();
if(inst_34044__$1){
var statearr_34114_34160 = state_34089__$1;
(statearr_34114_34160[(1)] = (13));

} else {
var statearr_34115_34161 = state_34089__$1;
(statearr_34115_34161[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (9))){
var inst_34066 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34116_34162 = state_34089__$1;
(statearr_34116_34162[(2)] = inst_34066);

(statearr_34116_34162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (5))){
var inst_34027 = cljs.core.deref.call(null,mults);
var inst_34028 = cljs.core.vals.call(null,inst_34027);
var inst_34029 = cljs.core.seq.call(null,inst_34028);
var inst_34030 = inst_34029;
var inst_34031 = null;
var inst_34032 = (0);
var inst_34033 = (0);
var state_34089__$1 = (function (){var statearr_34117 = state_34089;
(statearr_34117[(12)] = inst_34033);

(statearr_34117[(13)] = inst_34032);

(statearr_34117[(15)] = inst_34030);

(statearr_34117[(16)] = inst_34031);

return statearr_34117;
})();
var statearr_34118_34163 = state_34089__$1;
(statearr_34118_34163[(2)] = null);

(statearr_34118_34163[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (14))){
var state_34089__$1 = state_34089;
var statearr_34122_34164 = state_34089__$1;
(statearr_34122_34164[(2)] = null);

(statearr_34122_34164[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (16))){
var inst_34044 = (state_34089[(10)]);
var inst_34048 = cljs.core.chunk_first.call(null,inst_34044);
var inst_34049 = cljs.core.chunk_rest.call(null,inst_34044);
var inst_34050 = cljs.core.count.call(null,inst_34048);
var inst_34030 = inst_34049;
var inst_34031 = inst_34048;
var inst_34032 = inst_34050;
var inst_34033 = (0);
var state_34089__$1 = (function (){var statearr_34123 = state_34089;
(statearr_34123[(12)] = inst_34033);

(statearr_34123[(13)] = inst_34032);

(statearr_34123[(15)] = inst_34030);

(statearr_34123[(16)] = inst_34031);

return statearr_34123;
})();
var statearr_34124_34165 = state_34089__$1;
(statearr_34124_34165[(2)] = null);

(statearr_34124_34165[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (10))){
var inst_34033 = (state_34089[(12)]);
var inst_34032 = (state_34089[(13)]);
var inst_34030 = (state_34089[(15)]);
var inst_34031 = (state_34089[(16)]);
var inst_34038 = cljs.core._nth.call(null,inst_34031,inst_34033);
var inst_34039 = cljs.core.async.muxch_STAR_.call(null,inst_34038);
var inst_34040 = cljs.core.async.close_BANG_.call(null,inst_34039);
var inst_34041 = (inst_34033 + (1));
var tmp34119 = inst_34032;
var tmp34120 = inst_34030;
var tmp34121 = inst_34031;
var inst_34030__$1 = tmp34120;
var inst_34031__$1 = tmp34121;
var inst_34032__$1 = tmp34119;
var inst_34033__$1 = inst_34041;
var state_34089__$1 = (function (){var statearr_34125 = state_34089;
(statearr_34125[(12)] = inst_34033__$1);

(statearr_34125[(13)] = inst_34032__$1);

(statearr_34125[(15)] = inst_34030__$1);

(statearr_34125[(17)] = inst_34040);

(statearr_34125[(16)] = inst_34031__$1);

return statearr_34125;
})();
var statearr_34126_34166 = state_34089__$1;
(statearr_34126_34166[(2)] = null);

(statearr_34126_34166[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (18))){
var inst_34059 = (state_34089[(2)]);
var state_34089__$1 = state_34089;
var statearr_34127_34167 = state_34089__$1;
(statearr_34127_34167[(2)] = inst_34059);

(statearr_34127_34167[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34090 === (8))){
var inst_34033 = (state_34089[(12)]);
var inst_34032 = (state_34089[(13)]);
var inst_34035 = (inst_34033 < inst_34032);
var inst_34036 = inst_34035;
var state_34089__$1 = state_34089;
if(cljs.core.truth_(inst_34036)){
var statearr_34128_34168 = state_34089__$1;
(statearr_34128_34168[(1)] = (10));

} else {
var statearr_34129_34169 = state_34089__$1;
(statearr_34129_34169[(1)] = (11));

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
});})(c__24095__auto___34141,mults,ensure_mult,p))
;
return ((function (switch__24030__auto__,c__24095__auto___34141,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_34133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34133[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_34133[(1)] = (1));

return statearr_34133;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_34089){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_34089);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e34134){if((e34134 instanceof Object)){
var ex__24034__auto__ = e34134;
var statearr_34135_34170 = state_34089;
(statearr_34135_34170[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34089);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34171 = state_34089;
state_34089 = G__34171;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_34089){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_34089);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___34141,mults,ensure_mult,p))
})();
var state__24097__auto__ = (function (){var statearr_34136 = f__24096__auto__.call(null);
(statearr_34136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___34141);

return statearr_34136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___34141,mults,ensure_mult,p))
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
var args34172 = [];
var len__17567__auto___34175 = arguments.length;
var i__17568__auto___34176 = (0);
while(true){
if((i__17568__auto___34176 < len__17567__auto___34175)){
args34172.push((arguments[i__17568__auto___34176]));

var G__34177 = (i__17568__auto___34176 + (1));
i__17568__auto___34176 = G__34177;
continue;
} else {
}
break;
}

var G__34174 = args34172.length;
switch (G__34174) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34172.length)].join('')));

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
var args34179 = [];
var len__17567__auto___34182 = arguments.length;
var i__17568__auto___34183 = (0);
while(true){
if((i__17568__auto___34183 < len__17567__auto___34182)){
args34179.push((arguments[i__17568__auto___34183]));

var G__34184 = (i__17568__auto___34183 + (1));
i__17568__auto___34183 = G__34184;
continue;
} else {
}
break;
}

var G__34181 = args34179.length;
switch (G__34181) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34179.length)].join('')));

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
var args34186 = [];
var len__17567__auto___34257 = arguments.length;
var i__17568__auto___34258 = (0);
while(true){
if((i__17568__auto___34258 < len__17567__auto___34257)){
args34186.push((arguments[i__17568__auto___34258]));

var G__34259 = (i__17568__auto___34258 + (1));
i__17568__auto___34258 = G__34259;
continue;
} else {
}
break;
}

var G__34188 = args34186.length;
switch (G__34188) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34186.length)].join('')));

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
var c__24095__auto___34261 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___34261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___34261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34227){
var state_val_34228 = (state_34227[(1)]);
if((state_val_34228 === (7))){
var state_34227__$1 = state_34227;
var statearr_34229_34262 = state_34227__$1;
(statearr_34229_34262[(2)] = null);

(statearr_34229_34262[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (1))){
var state_34227__$1 = state_34227;
var statearr_34230_34263 = state_34227__$1;
(statearr_34230_34263[(2)] = null);

(statearr_34230_34263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (4))){
var inst_34191 = (state_34227[(7)]);
var inst_34193 = (inst_34191 < cnt);
var state_34227__$1 = state_34227;
if(cljs.core.truth_(inst_34193)){
var statearr_34231_34264 = state_34227__$1;
(statearr_34231_34264[(1)] = (6));

} else {
var statearr_34232_34265 = state_34227__$1;
(statearr_34232_34265[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (15))){
var inst_34223 = (state_34227[(2)]);
var state_34227__$1 = state_34227;
var statearr_34233_34266 = state_34227__$1;
(statearr_34233_34266[(2)] = inst_34223);

(statearr_34233_34266[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (13))){
var inst_34216 = cljs.core.async.close_BANG_.call(null,out);
var state_34227__$1 = state_34227;
var statearr_34234_34267 = state_34227__$1;
(statearr_34234_34267[(2)] = inst_34216);

(statearr_34234_34267[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (6))){
var state_34227__$1 = state_34227;
var statearr_34235_34268 = state_34227__$1;
(statearr_34235_34268[(2)] = null);

(statearr_34235_34268[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (3))){
var inst_34225 = (state_34227[(2)]);
var state_34227__$1 = state_34227;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34227__$1,inst_34225);
} else {
if((state_val_34228 === (12))){
var inst_34213 = (state_34227[(8)]);
var inst_34213__$1 = (state_34227[(2)]);
var inst_34214 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34213__$1);
var state_34227__$1 = (function (){var statearr_34236 = state_34227;
(statearr_34236[(8)] = inst_34213__$1);

return statearr_34236;
})();
if(cljs.core.truth_(inst_34214)){
var statearr_34237_34269 = state_34227__$1;
(statearr_34237_34269[(1)] = (13));

} else {
var statearr_34238_34270 = state_34227__$1;
(statearr_34238_34270[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (2))){
var inst_34190 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34191 = (0);
var state_34227__$1 = (function (){var statearr_34239 = state_34227;
(statearr_34239[(9)] = inst_34190);

(statearr_34239[(7)] = inst_34191);

return statearr_34239;
})();
var statearr_34240_34271 = state_34227__$1;
(statearr_34240_34271[(2)] = null);

(statearr_34240_34271[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (11))){
var inst_34191 = (state_34227[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34227,(10),Object,null,(9));
var inst_34200 = chs__$1.call(null,inst_34191);
var inst_34201 = done.call(null,inst_34191);
var inst_34202 = cljs.core.async.take_BANG_.call(null,inst_34200,inst_34201);
var state_34227__$1 = state_34227;
var statearr_34241_34272 = state_34227__$1;
(statearr_34241_34272[(2)] = inst_34202);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (9))){
var inst_34191 = (state_34227[(7)]);
var inst_34204 = (state_34227[(2)]);
var inst_34205 = (inst_34191 + (1));
var inst_34191__$1 = inst_34205;
var state_34227__$1 = (function (){var statearr_34242 = state_34227;
(statearr_34242[(10)] = inst_34204);

(statearr_34242[(7)] = inst_34191__$1);

return statearr_34242;
})();
var statearr_34243_34273 = state_34227__$1;
(statearr_34243_34273[(2)] = null);

(statearr_34243_34273[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (5))){
var inst_34211 = (state_34227[(2)]);
var state_34227__$1 = (function (){var statearr_34244 = state_34227;
(statearr_34244[(11)] = inst_34211);

return statearr_34244;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34227__$1,(12),dchan);
} else {
if((state_val_34228 === (14))){
var inst_34213 = (state_34227[(8)]);
var inst_34218 = cljs.core.apply.call(null,f,inst_34213);
var state_34227__$1 = state_34227;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34227__$1,(16),out,inst_34218);
} else {
if((state_val_34228 === (16))){
var inst_34220 = (state_34227[(2)]);
var state_34227__$1 = (function (){var statearr_34245 = state_34227;
(statearr_34245[(12)] = inst_34220);

return statearr_34245;
})();
var statearr_34246_34274 = state_34227__$1;
(statearr_34246_34274[(2)] = null);

(statearr_34246_34274[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (10))){
var inst_34195 = (state_34227[(2)]);
var inst_34196 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34227__$1 = (function (){var statearr_34247 = state_34227;
(statearr_34247[(13)] = inst_34195);

return statearr_34247;
})();
var statearr_34248_34275 = state_34227__$1;
(statearr_34248_34275[(2)] = inst_34196);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34227__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34228 === (8))){
var inst_34209 = (state_34227[(2)]);
var state_34227__$1 = state_34227;
var statearr_34249_34276 = state_34227__$1;
(statearr_34249_34276[(2)] = inst_34209);

(statearr_34249_34276[(1)] = (5));


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
});})(c__24095__auto___34261,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__24030__auto__,c__24095__auto___34261,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_34253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34253[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_34253[(1)] = (1));

return statearr_34253;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_34227){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_34227);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e34254){if((e34254 instanceof Object)){
var ex__24034__auto__ = e34254;
var statearr_34255_34277 = state_34227;
(statearr_34255_34277[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34227);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34254;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34278 = state_34227;
state_34227 = G__34278;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_34227){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_34227);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___34261,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__24097__auto__ = (function (){var statearr_34256 = f__24096__auto__.call(null);
(statearr_34256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___34261);

return statearr_34256;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___34261,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args34280 = [];
var len__17567__auto___34336 = arguments.length;
var i__17568__auto___34337 = (0);
while(true){
if((i__17568__auto___34337 < len__17567__auto___34336)){
args34280.push((arguments[i__17568__auto___34337]));

var G__34338 = (i__17568__auto___34337 + (1));
i__17568__auto___34337 = G__34338;
continue;
} else {
}
break;
}

var G__34282 = args34280.length;
switch (G__34282) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34280.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24095__auto___34340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___34340,out){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___34340,out){
return (function (state_34312){
var state_val_34313 = (state_34312[(1)]);
if((state_val_34313 === (7))){
var inst_34292 = (state_34312[(7)]);
var inst_34291 = (state_34312[(8)]);
var inst_34291__$1 = (state_34312[(2)]);
var inst_34292__$1 = cljs.core.nth.call(null,inst_34291__$1,(0),null);
var inst_34293 = cljs.core.nth.call(null,inst_34291__$1,(1),null);
var inst_34294 = (inst_34292__$1 == null);
var state_34312__$1 = (function (){var statearr_34314 = state_34312;
(statearr_34314[(7)] = inst_34292__$1);

(statearr_34314[(9)] = inst_34293);

(statearr_34314[(8)] = inst_34291__$1);

return statearr_34314;
})();
if(cljs.core.truth_(inst_34294)){
var statearr_34315_34341 = state_34312__$1;
(statearr_34315_34341[(1)] = (8));

} else {
var statearr_34316_34342 = state_34312__$1;
(statearr_34316_34342[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34313 === (1))){
var inst_34283 = cljs.core.vec.call(null,chs);
var inst_34284 = inst_34283;
var state_34312__$1 = (function (){var statearr_34317 = state_34312;
(statearr_34317[(10)] = inst_34284);

return statearr_34317;
})();
var statearr_34318_34343 = state_34312__$1;
(statearr_34318_34343[(2)] = null);

(statearr_34318_34343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34313 === (4))){
var inst_34284 = (state_34312[(10)]);
var state_34312__$1 = state_34312;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34312__$1,(7),inst_34284);
} else {
if((state_val_34313 === (6))){
var inst_34308 = (state_34312[(2)]);
var state_34312__$1 = state_34312;
var statearr_34319_34344 = state_34312__$1;
(statearr_34319_34344[(2)] = inst_34308);

(statearr_34319_34344[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34313 === (3))){
var inst_34310 = (state_34312[(2)]);
var state_34312__$1 = state_34312;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34312__$1,inst_34310);
} else {
if((state_val_34313 === (2))){
var inst_34284 = (state_34312[(10)]);
var inst_34286 = cljs.core.count.call(null,inst_34284);
var inst_34287 = (inst_34286 > (0));
var state_34312__$1 = state_34312;
if(cljs.core.truth_(inst_34287)){
var statearr_34321_34345 = state_34312__$1;
(statearr_34321_34345[(1)] = (4));

} else {
var statearr_34322_34346 = state_34312__$1;
(statearr_34322_34346[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34313 === (11))){
var inst_34284 = (state_34312[(10)]);
var inst_34301 = (state_34312[(2)]);
var tmp34320 = inst_34284;
var inst_34284__$1 = tmp34320;
var state_34312__$1 = (function (){var statearr_34323 = state_34312;
(statearr_34323[(11)] = inst_34301);

(statearr_34323[(10)] = inst_34284__$1);

return statearr_34323;
})();
var statearr_34324_34347 = state_34312__$1;
(statearr_34324_34347[(2)] = null);

(statearr_34324_34347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34313 === (9))){
var inst_34292 = (state_34312[(7)]);
var state_34312__$1 = state_34312;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34312__$1,(11),out,inst_34292);
} else {
if((state_val_34313 === (5))){
var inst_34306 = cljs.core.async.close_BANG_.call(null,out);
var state_34312__$1 = state_34312;
var statearr_34325_34348 = state_34312__$1;
(statearr_34325_34348[(2)] = inst_34306);

(statearr_34325_34348[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34313 === (10))){
var inst_34304 = (state_34312[(2)]);
var state_34312__$1 = state_34312;
var statearr_34326_34349 = state_34312__$1;
(statearr_34326_34349[(2)] = inst_34304);

(statearr_34326_34349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34313 === (8))){
var inst_34292 = (state_34312[(7)]);
var inst_34293 = (state_34312[(9)]);
var inst_34284 = (state_34312[(10)]);
var inst_34291 = (state_34312[(8)]);
var inst_34296 = (function (){var cs = inst_34284;
var vec__34289 = inst_34291;
var v = inst_34292;
var c = inst_34293;
return ((function (cs,vec__34289,v,c,inst_34292,inst_34293,inst_34284,inst_34291,state_val_34313,c__24095__auto___34340,out){
return (function (p1__34279_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34279_SHARP_);
});
;})(cs,vec__34289,v,c,inst_34292,inst_34293,inst_34284,inst_34291,state_val_34313,c__24095__auto___34340,out))
})();
var inst_34297 = cljs.core.filterv.call(null,inst_34296,inst_34284);
var inst_34284__$1 = inst_34297;
var state_34312__$1 = (function (){var statearr_34327 = state_34312;
(statearr_34327[(10)] = inst_34284__$1);

return statearr_34327;
})();
var statearr_34328_34350 = state_34312__$1;
(statearr_34328_34350[(2)] = null);

(statearr_34328_34350[(1)] = (2));


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
});})(c__24095__auto___34340,out))
;
return ((function (switch__24030__auto__,c__24095__auto___34340,out){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_34332 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34332[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_34332[(1)] = (1));

return statearr_34332;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_34312){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_34312);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e34333){if((e34333 instanceof Object)){
var ex__24034__auto__ = e34333;
var statearr_34334_34351 = state_34312;
(statearr_34334_34351[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34312);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34333;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34352 = state_34312;
state_34312 = G__34352;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_34312){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_34312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___34340,out))
})();
var state__24097__auto__ = (function (){var statearr_34335 = f__24096__auto__.call(null);
(statearr_34335[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___34340);

return statearr_34335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___34340,out))
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
var args34353 = [];
var len__17567__auto___34402 = arguments.length;
var i__17568__auto___34403 = (0);
while(true){
if((i__17568__auto___34403 < len__17567__auto___34402)){
args34353.push((arguments[i__17568__auto___34403]));

var G__34404 = (i__17568__auto___34403 + (1));
i__17568__auto___34403 = G__34404;
continue;
} else {
}
break;
}

var G__34355 = args34353.length;
switch (G__34355) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34353.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24095__auto___34406 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___34406,out){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___34406,out){
return (function (state_34379){
var state_val_34380 = (state_34379[(1)]);
if((state_val_34380 === (7))){
var inst_34361 = (state_34379[(7)]);
var inst_34361__$1 = (state_34379[(2)]);
var inst_34362 = (inst_34361__$1 == null);
var inst_34363 = cljs.core.not.call(null,inst_34362);
var state_34379__$1 = (function (){var statearr_34381 = state_34379;
(statearr_34381[(7)] = inst_34361__$1);

return statearr_34381;
})();
if(inst_34363){
var statearr_34382_34407 = state_34379__$1;
(statearr_34382_34407[(1)] = (8));

} else {
var statearr_34383_34408 = state_34379__$1;
(statearr_34383_34408[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (1))){
var inst_34356 = (0);
var state_34379__$1 = (function (){var statearr_34384 = state_34379;
(statearr_34384[(8)] = inst_34356);

return statearr_34384;
})();
var statearr_34385_34409 = state_34379__$1;
(statearr_34385_34409[(2)] = null);

(statearr_34385_34409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (4))){
var state_34379__$1 = state_34379;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34379__$1,(7),ch);
} else {
if((state_val_34380 === (6))){
var inst_34374 = (state_34379[(2)]);
var state_34379__$1 = state_34379;
var statearr_34386_34410 = state_34379__$1;
(statearr_34386_34410[(2)] = inst_34374);

(statearr_34386_34410[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (3))){
var inst_34376 = (state_34379[(2)]);
var inst_34377 = cljs.core.async.close_BANG_.call(null,out);
var state_34379__$1 = (function (){var statearr_34387 = state_34379;
(statearr_34387[(9)] = inst_34376);

return statearr_34387;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34379__$1,inst_34377);
} else {
if((state_val_34380 === (2))){
var inst_34356 = (state_34379[(8)]);
var inst_34358 = (inst_34356 < n);
var state_34379__$1 = state_34379;
if(cljs.core.truth_(inst_34358)){
var statearr_34388_34411 = state_34379__$1;
(statearr_34388_34411[(1)] = (4));

} else {
var statearr_34389_34412 = state_34379__$1;
(statearr_34389_34412[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (11))){
var inst_34356 = (state_34379[(8)]);
var inst_34366 = (state_34379[(2)]);
var inst_34367 = (inst_34356 + (1));
var inst_34356__$1 = inst_34367;
var state_34379__$1 = (function (){var statearr_34390 = state_34379;
(statearr_34390[(8)] = inst_34356__$1);

(statearr_34390[(10)] = inst_34366);

return statearr_34390;
})();
var statearr_34391_34413 = state_34379__$1;
(statearr_34391_34413[(2)] = null);

(statearr_34391_34413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (9))){
var state_34379__$1 = state_34379;
var statearr_34392_34414 = state_34379__$1;
(statearr_34392_34414[(2)] = null);

(statearr_34392_34414[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (5))){
var state_34379__$1 = state_34379;
var statearr_34393_34415 = state_34379__$1;
(statearr_34393_34415[(2)] = null);

(statearr_34393_34415[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (10))){
var inst_34371 = (state_34379[(2)]);
var state_34379__$1 = state_34379;
var statearr_34394_34416 = state_34379__$1;
(statearr_34394_34416[(2)] = inst_34371);

(statearr_34394_34416[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34380 === (8))){
var inst_34361 = (state_34379[(7)]);
var state_34379__$1 = state_34379;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34379__$1,(11),out,inst_34361);
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
});})(c__24095__auto___34406,out))
;
return ((function (switch__24030__auto__,c__24095__auto___34406,out){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_34398 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34398[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_34398[(1)] = (1));

return statearr_34398;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_34379){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_34379);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e34399){if((e34399 instanceof Object)){
var ex__24034__auto__ = e34399;
var statearr_34400_34417 = state_34379;
(statearr_34400_34417[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34399;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34418 = state_34379;
state_34379 = G__34418;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_34379){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_34379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___34406,out))
})();
var state__24097__auto__ = (function (){var statearr_34401 = f__24096__auto__.call(null);
(statearr_34401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___34406);

return statearr_34401;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___34406,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34426 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34426 = (function (map_LT_,f,ch,meta34427){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34427 = meta34427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34428,meta34427__$1){
var self__ = this;
var _34428__$1 = this;
return (new cljs.core.async.t_cljs$core$async34426(self__.map_LT_,self__.f,self__.ch,meta34427__$1));
});

cljs.core.async.t_cljs$core$async34426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34428){
var self__ = this;
var _34428__$1 = this;
return self__.meta34427;
});

cljs.core.async.t_cljs$core$async34426.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34426.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34426.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34426.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34426.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34429 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34429 = (function (map_LT_,f,ch,meta34427,_,fn1,meta34430){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta34427 = meta34427;
this._ = _;
this.fn1 = fn1;
this.meta34430 = meta34430;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34431,meta34430__$1){
var self__ = this;
var _34431__$1 = this;
return (new cljs.core.async.t_cljs$core$async34429(self__.map_LT_,self__.f,self__.ch,self__.meta34427,self__._,self__.fn1,meta34430__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34431){
var self__ = this;
var _34431__$1 = this;
return self__.meta34430;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34429.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34419_SHARP_){
return f1.call(null,(((p1__34419_SHARP_ == null))?null:self__.f.call(null,p1__34419_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34429.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34427","meta34427",-1812758665,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34426","cljs.core.async/t_cljs$core$async34426",-1877139540,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34430","meta34430",721131375,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34429.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34429.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34429";

cljs.core.async.t_cljs$core$async34429.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async34429");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34429 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34429(map_LT___$1,f__$1,ch__$1,meta34427__$1,___$2,fn1__$1,meta34430){
return (new cljs.core.async.t_cljs$core$async34429(map_LT___$1,f__$1,ch__$1,meta34427__$1,___$2,fn1__$1,meta34430));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34429(self__.map_LT_,self__.f,self__.ch,self__.meta34427,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16496__auto__ = ret;
if(cljs.core.truth_(and__16496__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16496__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async34426.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34426.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34426.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34427","meta34427",-1812758665,null)], null);
});

cljs.core.async.t_cljs$core$async34426.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34426.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34426";

cljs.core.async.t_cljs$core$async34426.cljs$lang$ctorPrWriter = (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async34426");
});

cljs.core.async.__GT_t_cljs$core$async34426 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34426(map_LT___$1,f__$1,ch__$1,meta34427){
return (new cljs.core.async.t_cljs$core$async34426(map_LT___$1,f__$1,ch__$1,meta34427));
});

}

return (new cljs.core.async.t_cljs$core$async34426(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34435 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34435 = (function (map_GT_,f,ch,meta34436){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta34436 = meta34436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34437,meta34436__$1){
var self__ = this;
var _34437__$1 = this;
return (new cljs.core.async.t_cljs$core$async34435(self__.map_GT_,self__.f,self__.ch,meta34436__$1));
});

cljs.core.async.t_cljs$core$async34435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34437){
var self__ = this;
var _34437__$1 = this;
return self__.meta34436;
});

cljs.core.async.t_cljs$core$async34435.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34435.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34435.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34435.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34435.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34435.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34436","meta34436",244853425,null)], null);
});

cljs.core.async.t_cljs$core$async34435.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34435.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34435";

cljs.core.async.t_cljs$core$async34435.cljs$lang$ctorPrWriter = (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async34435");
});

cljs.core.async.__GT_t_cljs$core$async34435 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34435(map_GT___$1,f__$1,ch__$1,meta34436){
return (new cljs.core.async.t_cljs$core$async34435(map_GT___$1,f__$1,ch__$1,meta34436));
});

}

return (new cljs.core.async.t_cljs$core$async34435(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34441 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34441 = (function (filter_GT_,p,ch,meta34442){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta34442 = meta34442;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async34441.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34443,meta34442__$1){
var self__ = this;
var _34443__$1 = this;
return (new cljs.core.async.t_cljs$core$async34441(self__.filter_GT_,self__.p,self__.ch,meta34442__$1));
});

cljs.core.async.t_cljs$core$async34441.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34443){
var self__ = this;
var _34443__$1 = this;
return self__.meta34442;
});

cljs.core.async.t_cljs$core$async34441.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async34441.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34441.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34441.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async34441.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34441.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async34441.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34441.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34442","meta34442",-272538761,null)], null);
});

cljs.core.async.t_cljs$core$async34441.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34441.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34441";

cljs.core.async.t_cljs$core$async34441.cljs$lang$ctorPrWriter = (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"cljs.core.async/t_cljs$core$async34441");
});

cljs.core.async.__GT_t_cljs$core$async34441 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34441(filter_GT___$1,p__$1,ch__$1,meta34442){
return (new cljs.core.async.t_cljs$core$async34441(filter_GT___$1,p__$1,ch__$1,meta34442));
});

}

return (new cljs.core.async.t_cljs$core$async34441(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args34444 = [];
var len__17567__auto___34488 = arguments.length;
var i__17568__auto___34489 = (0);
while(true){
if((i__17568__auto___34489 < len__17567__auto___34488)){
args34444.push((arguments[i__17568__auto___34489]));

var G__34490 = (i__17568__auto___34489 + (1));
i__17568__auto___34489 = G__34490;
continue;
} else {
}
break;
}

var G__34446 = args34444.length;
switch (G__34446) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34444.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24095__auto___34492 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___34492,out){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___34492,out){
return (function (state_34467){
var state_val_34468 = (state_34467[(1)]);
if((state_val_34468 === (7))){
var inst_34463 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34469_34493 = state_34467__$1;
(statearr_34469_34493[(2)] = inst_34463);

(statearr_34469_34493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (1))){
var state_34467__$1 = state_34467;
var statearr_34470_34494 = state_34467__$1;
(statearr_34470_34494[(2)] = null);

(statearr_34470_34494[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (4))){
var inst_34449 = (state_34467[(7)]);
var inst_34449__$1 = (state_34467[(2)]);
var inst_34450 = (inst_34449__$1 == null);
var state_34467__$1 = (function (){var statearr_34471 = state_34467;
(statearr_34471[(7)] = inst_34449__$1);

return statearr_34471;
})();
if(cljs.core.truth_(inst_34450)){
var statearr_34472_34495 = state_34467__$1;
(statearr_34472_34495[(1)] = (5));

} else {
var statearr_34473_34496 = state_34467__$1;
(statearr_34473_34496[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (6))){
var inst_34449 = (state_34467[(7)]);
var inst_34454 = p.call(null,inst_34449);
var state_34467__$1 = state_34467;
if(cljs.core.truth_(inst_34454)){
var statearr_34474_34497 = state_34467__$1;
(statearr_34474_34497[(1)] = (8));

} else {
var statearr_34475_34498 = state_34467__$1;
(statearr_34475_34498[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (3))){
var inst_34465 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34467__$1,inst_34465);
} else {
if((state_val_34468 === (2))){
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34467__$1,(4),ch);
} else {
if((state_val_34468 === (11))){
var inst_34457 = (state_34467[(2)]);
var state_34467__$1 = state_34467;
var statearr_34476_34499 = state_34467__$1;
(statearr_34476_34499[(2)] = inst_34457);

(statearr_34476_34499[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (9))){
var state_34467__$1 = state_34467;
var statearr_34477_34500 = state_34467__$1;
(statearr_34477_34500[(2)] = null);

(statearr_34477_34500[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (5))){
var inst_34452 = cljs.core.async.close_BANG_.call(null,out);
var state_34467__$1 = state_34467;
var statearr_34478_34501 = state_34467__$1;
(statearr_34478_34501[(2)] = inst_34452);

(statearr_34478_34501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (10))){
var inst_34460 = (state_34467[(2)]);
var state_34467__$1 = (function (){var statearr_34479 = state_34467;
(statearr_34479[(8)] = inst_34460);

return statearr_34479;
})();
var statearr_34480_34502 = state_34467__$1;
(statearr_34480_34502[(2)] = null);

(statearr_34480_34502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34468 === (8))){
var inst_34449 = (state_34467[(7)]);
var state_34467__$1 = state_34467;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34467__$1,(11),out,inst_34449);
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
});})(c__24095__auto___34492,out))
;
return ((function (switch__24030__auto__,c__24095__auto___34492,out){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_34484 = [null,null,null,null,null,null,null,null,null];
(statearr_34484[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_34484[(1)] = (1));

return statearr_34484;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_34467){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_34467);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e34485){if((e34485 instanceof Object)){
var ex__24034__auto__ = e34485;
var statearr_34486_34503 = state_34467;
(statearr_34486_34503[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34467);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34504 = state_34467;
state_34467 = G__34504;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_34467){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_34467);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___34492,out))
})();
var state__24097__auto__ = (function (){var statearr_34487 = f__24096__auto__.call(null);
(statearr_34487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___34492);

return statearr_34487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___34492,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args34505 = [];
var len__17567__auto___34508 = arguments.length;
var i__17568__auto___34509 = (0);
while(true){
if((i__17568__auto___34509 < len__17567__auto___34508)){
args34505.push((arguments[i__17568__auto___34509]));

var G__34510 = (i__17568__auto___34509 + (1));
i__17568__auto___34509 = G__34510;
continue;
} else {
}
break;
}

var G__34507 = args34505.length;
switch (G__34507) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34505.length)].join('')));

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
var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__){
return (function (state_34677){
var state_val_34678 = (state_34677[(1)]);
if((state_val_34678 === (7))){
var inst_34673 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
var statearr_34679_34720 = state_34677__$1;
(statearr_34679_34720[(2)] = inst_34673);

(statearr_34679_34720[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (20))){
var inst_34643 = (state_34677[(7)]);
var inst_34654 = (state_34677[(2)]);
var inst_34655 = cljs.core.next.call(null,inst_34643);
var inst_34629 = inst_34655;
var inst_34630 = null;
var inst_34631 = (0);
var inst_34632 = (0);
var state_34677__$1 = (function (){var statearr_34680 = state_34677;
(statearr_34680[(8)] = inst_34632);

(statearr_34680[(9)] = inst_34631);

(statearr_34680[(10)] = inst_34654);

(statearr_34680[(11)] = inst_34629);

(statearr_34680[(12)] = inst_34630);

return statearr_34680;
})();
var statearr_34681_34721 = state_34677__$1;
(statearr_34681_34721[(2)] = null);

(statearr_34681_34721[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (1))){
var state_34677__$1 = state_34677;
var statearr_34682_34722 = state_34677__$1;
(statearr_34682_34722[(2)] = null);

(statearr_34682_34722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (4))){
var inst_34618 = (state_34677[(13)]);
var inst_34618__$1 = (state_34677[(2)]);
var inst_34619 = (inst_34618__$1 == null);
var state_34677__$1 = (function (){var statearr_34683 = state_34677;
(statearr_34683[(13)] = inst_34618__$1);

return statearr_34683;
})();
if(cljs.core.truth_(inst_34619)){
var statearr_34684_34723 = state_34677__$1;
(statearr_34684_34723[(1)] = (5));

} else {
var statearr_34685_34724 = state_34677__$1;
(statearr_34685_34724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (15))){
var state_34677__$1 = state_34677;
var statearr_34689_34725 = state_34677__$1;
(statearr_34689_34725[(2)] = null);

(statearr_34689_34725[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (21))){
var state_34677__$1 = state_34677;
var statearr_34690_34726 = state_34677__$1;
(statearr_34690_34726[(2)] = null);

(statearr_34690_34726[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (13))){
var inst_34632 = (state_34677[(8)]);
var inst_34631 = (state_34677[(9)]);
var inst_34629 = (state_34677[(11)]);
var inst_34630 = (state_34677[(12)]);
var inst_34639 = (state_34677[(2)]);
var inst_34640 = (inst_34632 + (1));
var tmp34686 = inst_34631;
var tmp34687 = inst_34629;
var tmp34688 = inst_34630;
var inst_34629__$1 = tmp34687;
var inst_34630__$1 = tmp34688;
var inst_34631__$1 = tmp34686;
var inst_34632__$1 = inst_34640;
var state_34677__$1 = (function (){var statearr_34691 = state_34677;
(statearr_34691[(8)] = inst_34632__$1);

(statearr_34691[(14)] = inst_34639);

(statearr_34691[(9)] = inst_34631__$1);

(statearr_34691[(11)] = inst_34629__$1);

(statearr_34691[(12)] = inst_34630__$1);

return statearr_34691;
})();
var statearr_34692_34727 = state_34677__$1;
(statearr_34692_34727[(2)] = null);

(statearr_34692_34727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (22))){
var state_34677__$1 = state_34677;
var statearr_34693_34728 = state_34677__$1;
(statearr_34693_34728[(2)] = null);

(statearr_34693_34728[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (6))){
var inst_34618 = (state_34677[(13)]);
var inst_34627 = f.call(null,inst_34618);
var inst_34628 = cljs.core.seq.call(null,inst_34627);
var inst_34629 = inst_34628;
var inst_34630 = null;
var inst_34631 = (0);
var inst_34632 = (0);
var state_34677__$1 = (function (){var statearr_34694 = state_34677;
(statearr_34694[(8)] = inst_34632);

(statearr_34694[(9)] = inst_34631);

(statearr_34694[(11)] = inst_34629);

(statearr_34694[(12)] = inst_34630);

return statearr_34694;
})();
var statearr_34695_34729 = state_34677__$1;
(statearr_34695_34729[(2)] = null);

(statearr_34695_34729[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (17))){
var inst_34643 = (state_34677[(7)]);
var inst_34647 = cljs.core.chunk_first.call(null,inst_34643);
var inst_34648 = cljs.core.chunk_rest.call(null,inst_34643);
var inst_34649 = cljs.core.count.call(null,inst_34647);
var inst_34629 = inst_34648;
var inst_34630 = inst_34647;
var inst_34631 = inst_34649;
var inst_34632 = (0);
var state_34677__$1 = (function (){var statearr_34696 = state_34677;
(statearr_34696[(8)] = inst_34632);

(statearr_34696[(9)] = inst_34631);

(statearr_34696[(11)] = inst_34629);

(statearr_34696[(12)] = inst_34630);

return statearr_34696;
})();
var statearr_34697_34730 = state_34677__$1;
(statearr_34697_34730[(2)] = null);

(statearr_34697_34730[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (3))){
var inst_34675 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34677__$1,inst_34675);
} else {
if((state_val_34678 === (12))){
var inst_34663 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
var statearr_34698_34731 = state_34677__$1;
(statearr_34698_34731[(2)] = inst_34663);

(statearr_34698_34731[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (2))){
var state_34677__$1 = state_34677;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34677__$1,(4),in$);
} else {
if((state_val_34678 === (23))){
var inst_34671 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
var statearr_34699_34732 = state_34677__$1;
(statearr_34699_34732[(2)] = inst_34671);

(statearr_34699_34732[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (19))){
var inst_34658 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
var statearr_34700_34733 = state_34677__$1;
(statearr_34700_34733[(2)] = inst_34658);

(statearr_34700_34733[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (11))){
var inst_34643 = (state_34677[(7)]);
var inst_34629 = (state_34677[(11)]);
var inst_34643__$1 = cljs.core.seq.call(null,inst_34629);
var state_34677__$1 = (function (){var statearr_34701 = state_34677;
(statearr_34701[(7)] = inst_34643__$1);

return statearr_34701;
})();
if(inst_34643__$1){
var statearr_34702_34734 = state_34677__$1;
(statearr_34702_34734[(1)] = (14));

} else {
var statearr_34703_34735 = state_34677__$1;
(statearr_34703_34735[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (9))){
var inst_34665 = (state_34677[(2)]);
var inst_34666 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34677__$1 = (function (){var statearr_34704 = state_34677;
(statearr_34704[(15)] = inst_34665);

return statearr_34704;
})();
if(cljs.core.truth_(inst_34666)){
var statearr_34705_34736 = state_34677__$1;
(statearr_34705_34736[(1)] = (21));

} else {
var statearr_34706_34737 = state_34677__$1;
(statearr_34706_34737[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (5))){
var inst_34621 = cljs.core.async.close_BANG_.call(null,out);
var state_34677__$1 = state_34677;
var statearr_34707_34738 = state_34677__$1;
(statearr_34707_34738[(2)] = inst_34621);

(statearr_34707_34738[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (14))){
var inst_34643 = (state_34677[(7)]);
var inst_34645 = cljs.core.chunked_seq_QMARK_.call(null,inst_34643);
var state_34677__$1 = state_34677;
if(inst_34645){
var statearr_34708_34739 = state_34677__$1;
(statearr_34708_34739[(1)] = (17));

} else {
var statearr_34709_34740 = state_34677__$1;
(statearr_34709_34740[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (16))){
var inst_34661 = (state_34677[(2)]);
var state_34677__$1 = state_34677;
var statearr_34710_34741 = state_34677__$1;
(statearr_34710_34741[(2)] = inst_34661);

(statearr_34710_34741[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34678 === (10))){
var inst_34632 = (state_34677[(8)]);
var inst_34630 = (state_34677[(12)]);
var inst_34637 = cljs.core._nth.call(null,inst_34630,inst_34632);
var state_34677__$1 = state_34677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34677__$1,(13),out,inst_34637);
} else {
if((state_val_34678 === (18))){
var inst_34643 = (state_34677[(7)]);
var inst_34652 = cljs.core.first.call(null,inst_34643);
var state_34677__$1 = state_34677;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34677__$1,(20),out,inst_34652);
} else {
if((state_val_34678 === (8))){
var inst_34632 = (state_34677[(8)]);
var inst_34631 = (state_34677[(9)]);
var inst_34634 = (inst_34632 < inst_34631);
var inst_34635 = inst_34634;
var state_34677__$1 = state_34677;
if(cljs.core.truth_(inst_34635)){
var statearr_34711_34742 = state_34677__$1;
(statearr_34711_34742[(1)] = (10));

} else {
var statearr_34712_34743 = state_34677__$1;
(statearr_34712_34743[(1)] = (11));

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
});})(c__24095__auto__))
;
return ((function (switch__24030__auto__,c__24095__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__24031__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__24031__auto____0 = (function (){
var statearr_34716 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34716[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__24031__auto__);

(statearr_34716[(1)] = (1));

return statearr_34716;
});
var cljs$core$async$mapcat_STAR__$_state_machine__24031__auto____1 = (function (state_34677){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_34677);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e34717){if((e34717 instanceof Object)){
var ex__24034__auto__ = e34717;
var statearr_34718_34744 = state_34677;
(statearr_34718_34744[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34677);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34717;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34745 = state_34677;
state_34677 = G__34745;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__24031__auto__ = function(state_34677){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__24031__auto____1.call(this,state_34677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__24031__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__24031__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__))
})();
var state__24097__auto__ = (function (){var statearr_34719 = f__24096__auto__.call(null);
(statearr_34719[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_34719;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__))
);

return c__24095__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args34746 = [];
var len__17567__auto___34749 = arguments.length;
var i__17568__auto___34750 = (0);
while(true){
if((i__17568__auto___34750 < len__17567__auto___34749)){
args34746.push((arguments[i__17568__auto___34750]));

var G__34751 = (i__17568__auto___34750 + (1));
i__17568__auto___34750 = G__34751;
continue;
} else {
}
break;
}

var G__34748 = args34746.length;
switch (G__34748) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34746.length)].join('')));

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
var args34753 = [];
var len__17567__auto___34756 = arguments.length;
var i__17568__auto___34757 = (0);
while(true){
if((i__17568__auto___34757 < len__17567__auto___34756)){
args34753.push((arguments[i__17568__auto___34757]));

var G__34758 = (i__17568__auto___34757 + (1));
i__17568__auto___34757 = G__34758;
continue;
} else {
}
break;
}

var G__34755 = args34753.length;
switch (G__34755) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34753.length)].join('')));

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
var args34760 = [];
var len__17567__auto___34811 = arguments.length;
var i__17568__auto___34812 = (0);
while(true){
if((i__17568__auto___34812 < len__17567__auto___34811)){
args34760.push((arguments[i__17568__auto___34812]));

var G__34813 = (i__17568__auto___34812 + (1));
i__17568__auto___34812 = G__34813;
continue;
} else {
}
break;
}

var G__34762 = args34760.length;
switch (G__34762) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34760.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24095__auto___34815 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___34815,out){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___34815,out){
return (function (state_34786){
var state_val_34787 = (state_34786[(1)]);
if((state_val_34787 === (7))){
var inst_34781 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34788_34816 = state_34786__$1;
(statearr_34788_34816[(2)] = inst_34781);

(statearr_34788_34816[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (1))){
var inst_34763 = null;
var state_34786__$1 = (function (){var statearr_34789 = state_34786;
(statearr_34789[(7)] = inst_34763);

return statearr_34789;
})();
var statearr_34790_34817 = state_34786__$1;
(statearr_34790_34817[(2)] = null);

(statearr_34790_34817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (4))){
var inst_34766 = (state_34786[(8)]);
var inst_34766__$1 = (state_34786[(2)]);
var inst_34767 = (inst_34766__$1 == null);
var inst_34768 = cljs.core.not.call(null,inst_34767);
var state_34786__$1 = (function (){var statearr_34791 = state_34786;
(statearr_34791[(8)] = inst_34766__$1);

return statearr_34791;
})();
if(inst_34768){
var statearr_34792_34818 = state_34786__$1;
(statearr_34792_34818[(1)] = (5));

} else {
var statearr_34793_34819 = state_34786__$1;
(statearr_34793_34819[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (6))){
var state_34786__$1 = state_34786;
var statearr_34794_34820 = state_34786__$1;
(statearr_34794_34820[(2)] = null);

(statearr_34794_34820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (3))){
var inst_34783 = (state_34786[(2)]);
var inst_34784 = cljs.core.async.close_BANG_.call(null,out);
var state_34786__$1 = (function (){var statearr_34795 = state_34786;
(statearr_34795[(9)] = inst_34783);

return statearr_34795;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34786__$1,inst_34784);
} else {
if((state_val_34787 === (2))){
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34786__$1,(4),ch);
} else {
if((state_val_34787 === (11))){
var inst_34766 = (state_34786[(8)]);
var inst_34775 = (state_34786[(2)]);
var inst_34763 = inst_34766;
var state_34786__$1 = (function (){var statearr_34796 = state_34786;
(statearr_34796[(10)] = inst_34775);

(statearr_34796[(7)] = inst_34763);

return statearr_34796;
})();
var statearr_34797_34821 = state_34786__$1;
(statearr_34797_34821[(2)] = null);

(statearr_34797_34821[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (9))){
var inst_34766 = (state_34786[(8)]);
var state_34786__$1 = state_34786;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34786__$1,(11),out,inst_34766);
} else {
if((state_val_34787 === (5))){
var inst_34763 = (state_34786[(7)]);
var inst_34766 = (state_34786[(8)]);
var inst_34770 = cljs.core._EQ_.call(null,inst_34766,inst_34763);
var state_34786__$1 = state_34786;
if(inst_34770){
var statearr_34799_34822 = state_34786__$1;
(statearr_34799_34822[(1)] = (8));

} else {
var statearr_34800_34823 = state_34786__$1;
(statearr_34800_34823[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (10))){
var inst_34778 = (state_34786[(2)]);
var state_34786__$1 = state_34786;
var statearr_34801_34824 = state_34786__$1;
(statearr_34801_34824[(2)] = inst_34778);

(statearr_34801_34824[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34787 === (8))){
var inst_34763 = (state_34786[(7)]);
var tmp34798 = inst_34763;
var inst_34763__$1 = tmp34798;
var state_34786__$1 = (function (){var statearr_34802 = state_34786;
(statearr_34802[(7)] = inst_34763__$1);

return statearr_34802;
})();
var statearr_34803_34825 = state_34786__$1;
(statearr_34803_34825[(2)] = null);

(statearr_34803_34825[(1)] = (2));


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
});})(c__24095__auto___34815,out))
;
return ((function (switch__24030__auto__,c__24095__auto___34815,out){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_34807 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34807[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_34807[(1)] = (1));

return statearr_34807;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_34786){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_34786);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e34808){if((e34808 instanceof Object)){
var ex__24034__auto__ = e34808;
var statearr_34809_34826 = state_34786;
(statearr_34809_34826[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34786);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34827 = state_34786;
state_34786 = G__34827;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_34786){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_34786);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___34815,out))
})();
var state__24097__auto__ = (function (){var statearr_34810 = f__24096__auto__.call(null);
(statearr_34810[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___34815);

return statearr_34810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___34815,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args34828 = [];
var len__17567__auto___34898 = arguments.length;
var i__17568__auto___34899 = (0);
while(true){
if((i__17568__auto___34899 < len__17567__auto___34898)){
args34828.push((arguments[i__17568__auto___34899]));

var G__34900 = (i__17568__auto___34899 + (1));
i__17568__auto___34899 = G__34900;
continue;
} else {
}
break;
}

var G__34830 = args34828.length;
switch (G__34830) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34828.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24095__auto___34902 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___34902,out){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___34902,out){
return (function (state_34868){
var state_val_34869 = (state_34868[(1)]);
if((state_val_34869 === (7))){
var inst_34864 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34870_34903 = state_34868__$1;
(statearr_34870_34903[(2)] = inst_34864);

(statearr_34870_34903[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (1))){
var inst_34831 = (new Array(n));
var inst_34832 = inst_34831;
var inst_34833 = (0);
var state_34868__$1 = (function (){var statearr_34871 = state_34868;
(statearr_34871[(7)] = inst_34833);

(statearr_34871[(8)] = inst_34832);

return statearr_34871;
})();
var statearr_34872_34904 = state_34868__$1;
(statearr_34872_34904[(2)] = null);

(statearr_34872_34904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (4))){
var inst_34836 = (state_34868[(9)]);
var inst_34836__$1 = (state_34868[(2)]);
var inst_34837 = (inst_34836__$1 == null);
var inst_34838 = cljs.core.not.call(null,inst_34837);
var state_34868__$1 = (function (){var statearr_34873 = state_34868;
(statearr_34873[(9)] = inst_34836__$1);

return statearr_34873;
})();
if(inst_34838){
var statearr_34874_34905 = state_34868__$1;
(statearr_34874_34905[(1)] = (5));

} else {
var statearr_34875_34906 = state_34868__$1;
(statearr_34875_34906[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (15))){
var inst_34858 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34876_34907 = state_34868__$1;
(statearr_34876_34907[(2)] = inst_34858);

(statearr_34876_34907[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (13))){
var state_34868__$1 = state_34868;
var statearr_34877_34908 = state_34868__$1;
(statearr_34877_34908[(2)] = null);

(statearr_34877_34908[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (6))){
var inst_34833 = (state_34868[(7)]);
var inst_34854 = (inst_34833 > (0));
var state_34868__$1 = state_34868;
if(cljs.core.truth_(inst_34854)){
var statearr_34878_34909 = state_34868__$1;
(statearr_34878_34909[(1)] = (12));

} else {
var statearr_34879_34910 = state_34868__$1;
(statearr_34879_34910[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (3))){
var inst_34866 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34868__$1,inst_34866);
} else {
if((state_val_34869 === (12))){
var inst_34832 = (state_34868[(8)]);
var inst_34856 = cljs.core.vec.call(null,inst_34832);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34868__$1,(15),out,inst_34856);
} else {
if((state_val_34869 === (2))){
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34868__$1,(4),ch);
} else {
if((state_val_34869 === (11))){
var inst_34848 = (state_34868[(2)]);
var inst_34849 = (new Array(n));
var inst_34832 = inst_34849;
var inst_34833 = (0);
var state_34868__$1 = (function (){var statearr_34880 = state_34868;
(statearr_34880[(10)] = inst_34848);

(statearr_34880[(7)] = inst_34833);

(statearr_34880[(8)] = inst_34832);

return statearr_34880;
})();
var statearr_34881_34911 = state_34868__$1;
(statearr_34881_34911[(2)] = null);

(statearr_34881_34911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (9))){
var inst_34832 = (state_34868[(8)]);
var inst_34846 = cljs.core.vec.call(null,inst_34832);
var state_34868__$1 = state_34868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34868__$1,(11),out,inst_34846);
} else {
if((state_val_34869 === (5))){
var inst_34833 = (state_34868[(7)]);
var inst_34836 = (state_34868[(9)]);
var inst_34841 = (state_34868[(11)]);
var inst_34832 = (state_34868[(8)]);
var inst_34840 = (inst_34832[inst_34833] = inst_34836);
var inst_34841__$1 = (inst_34833 + (1));
var inst_34842 = (inst_34841__$1 < n);
var state_34868__$1 = (function (){var statearr_34882 = state_34868;
(statearr_34882[(12)] = inst_34840);

(statearr_34882[(11)] = inst_34841__$1);

return statearr_34882;
})();
if(cljs.core.truth_(inst_34842)){
var statearr_34883_34912 = state_34868__$1;
(statearr_34883_34912[(1)] = (8));

} else {
var statearr_34884_34913 = state_34868__$1;
(statearr_34884_34913[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (14))){
var inst_34861 = (state_34868[(2)]);
var inst_34862 = cljs.core.async.close_BANG_.call(null,out);
var state_34868__$1 = (function (){var statearr_34886 = state_34868;
(statearr_34886[(13)] = inst_34861);

return statearr_34886;
})();
var statearr_34887_34914 = state_34868__$1;
(statearr_34887_34914[(2)] = inst_34862);

(statearr_34887_34914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (10))){
var inst_34852 = (state_34868[(2)]);
var state_34868__$1 = state_34868;
var statearr_34888_34915 = state_34868__$1;
(statearr_34888_34915[(2)] = inst_34852);

(statearr_34888_34915[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34869 === (8))){
var inst_34841 = (state_34868[(11)]);
var inst_34832 = (state_34868[(8)]);
var tmp34885 = inst_34832;
var inst_34832__$1 = tmp34885;
var inst_34833 = inst_34841;
var state_34868__$1 = (function (){var statearr_34889 = state_34868;
(statearr_34889[(7)] = inst_34833);

(statearr_34889[(8)] = inst_34832__$1);

return statearr_34889;
})();
var statearr_34890_34916 = state_34868__$1;
(statearr_34890_34916[(2)] = null);

(statearr_34890_34916[(1)] = (2));


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
});})(c__24095__auto___34902,out))
;
return ((function (switch__24030__auto__,c__24095__auto___34902,out){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_34894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34894[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_34894[(1)] = (1));

return statearr_34894;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_34868){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_34868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e34895){if((e34895 instanceof Object)){
var ex__24034__auto__ = e34895;
var statearr_34896_34917 = state_34868;
(statearr_34896_34917[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34918 = state_34868;
state_34868 = G__34918;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_34868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_34868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___34902,out))
})();
var state__24097__auto__ = (function (){var statearr_34897 = f__24096__auto__.call(null);
(statearr_34897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___34902);

return statearr_34897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___34902,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args34919 = [];
var len__17567__auto___34993 = arguments.length;
var i__17568__auto___34994 = (0);
while(true){
if((i__17568__auto___34994 < len__17567__auto___34993)){
args34919.push((arguments[i__17568__auto___34994]));

var G__34995 = (i__17568__auto___34994 + (1));
i__17568__auto___34994 = G__34995;
continue;
} else {
}
break;
}

var G__34921 = args34919.length;
switch (G__34921) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args34919.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__24095__auto___34997 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___34997,out){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___34997,out){
return (function (state_34963){
var state_val_34964 = (state_34963[(1)]);
if((state_val_34964 === (7))){
var inst_34959 = (state_34963[(2)]);
var state_34963__$1 = state_34963;
var statearr_34965_34998 = state_34963__$1;
(statearr_34965_34998[(2)] = inst_34959);

(statearr_34965_34998[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (1))){
var inst_34922 = [];
var inst_34923 = inst_34922;
var inst_34924 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34963__$1 = (function (){var statearr_34966 = state_34963;
(statearr_34966[(7)] = inst_34923);

(statearr_34966[(8)] = inst_34924);

return statearr_34966;
})();
var statearr_34967_34999 = state_34963__$1;
(statearr_34967_34999[(2)] = null);

(statearr_34967_34999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (4))){
var inst_34927 = (state_34963[(9)]);
var inst_34927__$1 = (state_34963[(2)]);
var inst_34928 = (inst_34927__$1 == null);
var inst_34929 = cljs.core.not.call(null,inst_34928);
var state_34963__$1 = (function (){var statearr_34968 = state_34963;
(statearr_34968[(9)] = inst_34927__$1);

return statearr_34968;
})();
if(inst_34929){
var statearr_34969_35000 = state_34963__$1;
(statearr_34969_35000[(1)] = (5));

} else {
var statearr_34970_35001 = state_34963__$1;
(statearr_34970_35001[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (15))){
var inst_34953 = (state_34963[(2)]);
var state_34963__$1 = state_34963;
var statearr_34971_35002 = state_34963__$1;
(statearr_34971_35002[(2)] = inst_34953);

(statearr_34971_35002[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (13))){
var state_34963__$1 = state_34963;
var statearr_34972_35003 = state_34963__$1;
(statearr_34972_35003[(2)] = null);

(statearr_34972_35003[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (6))){
var inst_34923 = (state_34963[(7)]);
var inst_34948 = inst_34923.length;
var inst_34949 = (inst_34948 > (0));
var state_34963__$1 = state_34963;
if(cljs.core.truth_(inst_34949)){
var statearr_34973_35004 = state_34963__$1;
(statearr_34973_35004[(1)] = (12));

} else {
var statearr_34974_35005 = state_34963__$1;
(statearr_34974_35005[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (3))){
var inst_34961 = (state_34963[(2)]);
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34963__$1,inst_34961);
} else {
if((state_val_34964 === (12))){
var inst_34923 = (state_34963[(7)]);
var inst_34951 = cljs.core.vec.call(null,inst_34923);
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34963__$1,(15),out,inst_34951);
} else {
if((state_val_34964 === (2))){
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34963__$1,(4),ch);
} else {
if((state_val_34964 === (11))){
var inst_34927 = (state_34963[(9)]);
var inst_34931 = (state_34963[(10)]);
var inst_34941 = (state_34963[(2)]);
var inst_34942 = [];
var inst_34943 = inst_34942.push(inst_34927);
var inst_34923 = inst_34942;
var inst_34924 = inst_34931;
var state_34963__$1 = (function (){var statearr_34975 = state_34963;
(statearr_34975[(7)] = inst_34923);

(statearr_34975[(11)] = inst_34941);

(statearr_34975[(8)] = inst_34924);

(statearr_34975[(12)] = inst_34943);

return statearr_34975;
})();
var statearr_34976_35006 = state_34963__$1;
(statearr_34976_35006[(2)] = null);

(statearr_34976_35006[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (9))){
var inst_34923 = (state_34963[(7)]);
var inst_34939 = cljs.core.vec.call(null,inst_34923);
var state_34963__$1 = state_34963;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34963__$1,(11),out,inst_34939);
} else {
if((state_val_34964 === (5))){
var inst_34927 = (state_34963[(9)]);
var inst_34931 = (state_34963[(10)]);
var inst_34924 = (state_34963[(8)]);
var inst_34931__$1 = f.call(null,inst_34927);
var inst_34932 = cljs.core._EQ_.call(null,inst_34931__$1,inst_34924);
var inst_34933 = cljs.core.keyword_identical_QMARK_.call(null,inst_34924,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34934 = (inst_34932) || (inst_34933);
var state_34963__$1 = (function (){var statearr_34977 = state_34963;
(statearr_34977[(10)] = inst_34931__$1);

return statearr_34977;
})();
if(cljs.core.truth_(inst_34934)){
var statearr_34978_35007 = state_34963__$1;
(statearr_34978_35007[(1)] = (8));

} else {
var statearr_34979_35008 = state_34963__$1;
(statearr_34979_35008[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (14))){
var inst_34956 = (state_34963[(2)]);
var inst_34957 = cljs.core.async.close_BANG_.call(null,out);
var state_34963__$1 = (function (){var statearr_34981 = state_34963;
(statearr_34981[(13)] = inst_34956);

return statearr_34981;
})();
var statearr_34982_35009 = state_34963__$1;
(statearr_34982_35009[(2)] = inst_34957);

(statearr_34982_35009[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (10))){
var inst_34946 = (state_34963[(2)]);
var state_34963__$1 = state_34963;
var statearr_34983_35010 = state_34963__$1;
(statearr_34983_35010[(2)] = inst_34946);

(statearr_34983_35010[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34964 === (8))){
var inst_34927 = (state_34963[(9)]);
var inst_34931 = (state_34963[(10)]);
var inst_34923 = (state_34963[(7)]);
var inst_34936 = inst_34923.push(inst_34927);
var tmp34980 = inst_34923;
var inst_34923__$1 = tmp34980;
var inst_34924 = inst_34931;
var state_34963__$1 = (function (){var statearr_34984 = state_34963;
(statearr_34984[(7)] = inst_34923__$1);

(statearr_34984[(8)] = inst_34924);

(statearr_34984[(14)] = inst_34936);

return statearr_34984;
})();
var statearr_34985_35011 = state_34963__$1;
(statearr_34985_35011[(2)] = null);

(statearr_34985_35011[(1)] = (2));


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
});})(c__24095__auto___34997,out))
;
return ((function (switch__24030__auto__,c__24095__auto___34997,out){
return (function() {
var cljs$core$async$state_machine__24031__auto__ = null;
var cljs$core$async$state_machine__24031__auto____0 = (function (){
var statearr_34989 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34989[(0)] = cljs$core$async$state_machine__24031__auto__);

(statearr_34989[(1)] = (1));

return statearr_34989;
});
var cljs$core$async$state_machine__24031__auto____1 = (function (state_34963){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_34963);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e34990){if((e34990 instanceof Object)){
var ex__24034__auto__ = e34990;
var statearr_34991_35012 = state_34963;
(statearr_34991_35012[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34963);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34990;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35013 = state_34963;
state_34963 = G__35013;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
cljs$core$async$state_machine__24031__auto__ = function(state_34963){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__24031__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__24031__auto____1.call(this,state_34963);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__24031__auto____0;
cljs$core$async$state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__24031__auto____1;
return cljs$core$async$state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___34997,out))
})();
var state__24097__auto__ = (function (){var statearr_34992 = f__24096__auto__.call(null);
(statearr_34992[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___34997);

return statearr_34992;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___34997,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map?rel=1440252249061