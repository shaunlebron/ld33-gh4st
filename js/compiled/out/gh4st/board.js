// Compiled by ClojureScript 1.7.107 {}
goog.provide('gh4st.board');
goog.require('cljs.core');
goog.require('gh4st.math');
gh4st.board.rows = (11);
gh4st.board.cols = (21);
/**
 * create initial empty board
 */
gh4st.board.empty_board = (function gh4st$board$empty_board(var_args){
var args42130 = [];
var len__17566__auto___42133 = arguments.length;
var i__17567__auto___42134 = (0);
while(true){
if((i__17567__auto___42134 < len__17566__auto___42133)){
args42130.push((arguments[i__17567__auto___42134]));

var G__42135 = (i__17567__auto___42134 + (1));
i__17567__auto___42134 = G__42135;
continue;
} else {
}
break;
}

var G__42132 = args42130.length;
switch (G__42132) {
case 0:
return gh4st.board.empty_board.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return gh4st.board.empty_board.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args42130.length)].join('')));

}
});

gh4st.board.empty_board.cljs$core$IFn$_invoke$arity$0 = (function (){
return gh4st.board.empty_board.call(null,gh4st.board.cols,gh4st.board.rows);
});

gh4st.board.empty_board.cljs$core$IFn$_invoke$arity$2 = (function (w,h){
return cljs.core.vec.call(null,cljs.core.repeat.call(null,h,cljs.core.vec.call(null,cljs.core.repeat.call(null,w,new cljs.core.Keyword(null,"wall","wall",-787661558)))));
});

gh4st.board.empty_board.cljs$lang$maxFixedArity = 2;
gh4st.board.bound = (function gh4st$board$bound(x0,x,x1){
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
gh4st.board.board_size = (function gh4st$board$board_size(board){
var w = cljs.core.count.call(null,cljs.core.first.call(null,board));
var h = cljs.core.count.call(null,board);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [w,h], null);
});
gh4st.board.bound_pos = (function gh4st$board$bound_pos(p__42137,board){
var vec__42140 = p__42137;
var x = cljs.core.nth.call(null,vec__42140,(0),null);
var y = cljs.core.nth.call(null,vec__42140,(1),null);
var vec__42141 = gh4st.board.board_size.call(null,board);
var w = cljs.core.nth.call(null,vec__42141,(0),null);
var h = cljs.core.nth.call(null,vec__42141,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [gh4st.board.bound.call(null,(0),x,(w - (1))),gh4st.board.bound.call(null,(0),y,(h - (1)))], null);
});
gh4st.board.can_walk_QMARK_ = (function gh4st$board$can_walk_QMARK_(pos,dir,board){
var vec__42143 = gh4st.math.add_pos.call(null,pos,dir);
var x = cljs.core.nth.call(null,vec__42143,(0),null);
var y = cljs.core.nth.call(null,vec__42143,(1),null);
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"floor","floor",1882041021),cljs.core.get_in.call(null,board,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [y,x], null)));
});
gh4st.board.walkable_tiles = (function gh4st$board$walkable_tiles(pos,board){
return cljs.core.map.call(null,(function (p1__42145_SHARP_){
return gh4st.math.add_pos.call(null,pos,p1__42145_SHARP_);
}),cljs.core.filter.call(null,(function (p1__42144_SHARP_){
return gh4st.board.can_walk_QMARK_.call(null,pos,p1__42144_SHARP_,board);
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null)], null)));
});
gh4st.board.ghost_positions = (function gh4st$board$ghost_positions(actors){
return cljs.core.map.call(null,(function (p1__42146_SHARP_){
return cljs.core.get_in.call(null,actors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__42146_SHARP_,new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blinky","blinky",1882755167),new cljs.core.Keyword(null,"pinky","pinky",-1607994569),new cljs.core.Keyword(null,"inky","inky",-227406426),new cljs.core.Keyword(null,"clyde","clyde",73127145)], null));
});

//# sourceMappingURL=board.js.map?rel=1440374504923