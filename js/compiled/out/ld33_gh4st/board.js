// Compiled by ClojureScript 1.7.107 {}
goog.provide('ld33_gh4st.board');
goog.require('cljs.core');
/**
 * create initial empty board
 */
ld33_gh4st.board.empty_board = (function ld33_gh4st$board$empty_board(w,h){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,h,cljs.core.vec.call(null,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"wall","wall",-787661558)))));
});
ld33_gh4st.board.bound = (function ld33_gh4st$board$bound(x0,x,x1){
if((x < x0)){
return x0;
} else {
if((x > x1)){
return x1;
} else {
return x;

}
}
});
ld33_gh4st.board.bound_pos = (function ld33_gh4st$board$bound_pos(p__72898){
var vec__72900 = p__72898;
var x = cljs.core.nth.call(null,vec__72900,(0),null);
var y = cljs.core.nth.call(null,vec__72900,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ld33_gh4st.board.bound.call(null,(0),x,(cljs.core.count.call(null,cljs.core.first.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.board.app_state)))) - (1))),ld33_gh4st.board.bound.call(null,(0),y,(cljs.core.count.call(null,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.board.app_state))) - (1)))], null);
});

//# sourceMappingURL=board.js.map?rel=1440282062920