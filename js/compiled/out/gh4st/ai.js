// Compiled by ClojureScript 1.7.107 {}
goog.provide('gh4st.ai');
goog.require('cljs.core');
goog.require('gh4st.math');
goog.require('gh4st.board');
/**
 * identify the ghosts
 */
gh4st.ai.actor_hierarchy = cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.derive.call(null,cljs.core.make_hierarchy.call(null),new cljs.core.Keyword(null,"blinky","blinky",1882755167),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)),new cljs.core.Keyword(null,"pinky","pinky",-1607994569),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)),new cljs.core.Keyword(null,"inky","inky",-227406426),new cljs.core.Keyword(null,"ghost","ghost",-1531157576)),new cljs.core.Keyword(null,"clyde","clyde",73127145),new cljs.core.Keyword(null,"ghost","ghost",-1531157576));
if(typeof gh4st.ai.move_actor !== 'undefined'){
} else {
/**
 * Determines the next position for the given actor.
 */
gh4st.ai.move_actor = (function (){var method_table__17421__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17425__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return gh4st.ai.actor_hierarchy;},new cljs.core.Symbol("gh4st.ai","actor-hierarchy","gh4st.ai/actor-hierarchy",-462800005,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"gh4st.ai","gh4st.ai",1250679454,null),new cljs.core.Symbol(null,"actor-hierarchy","actor-hierarchy",-1139548611,null),"src/gh4st/ai.cljs",21,1,20,20,cljs.core.List.EMPTY,"identify the ghosts",(cljs.core.truth_(gh4st.ai.actor_hierarchy)?gh4st.ai.actor_hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gh4st.ai","move-actor"),((function (method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__,hierarchy__17425__auto__){
return (function (name_,state){
return name_;
});})(method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__,hierarchy__17425__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17425__auto__,method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__));
})();
}
if(typeof gh4st.ai.steer_actor !== 'undefined'){
} else {
/**
 * Determines the next direction for the given actor.
 */
gh4st.ai.steer_actor = (function (){var method_table__17421__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17425__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return gh4st.ai.actor_hierarchy;},new cljs.core.Symbol("gh4st.ai","actor-hierarchy","gh4st.ai/actor-hierarchy",-462800005,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"gh4st.ai","gh4st.ai",1250679454,null),new cljs.core.Symbol(null,"actor-hierarchy","actor-hierarchy",-1139548611,null),"src/gh4st/ai.cljs",21,1,20,20,cljs.core.List.EMPTY,"identify the ghosts",(cljs.core.truth_(gh4st.ai.actor_hierarchy)?gh4st.ai.actor_hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gh4st.ai","steer-actor"),((function (method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__,hierarchy__17425__auto__){
return (function (name_,state){
return name_;
});})(method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__,hierarchy__17425__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17425__auto__,method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__));
})();
}
if(typeof gh4st.ai.target_to_chase !== 'undefined'){
} else {
/**
 * Determines target tile for the given actor and state of the board.
 */
gh4st.ai.target_to_chase = (function (){var method_table__17421__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17425__auto__ = cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),new cljs.core.Var(function(){return gh4st.ai.actor_hierarchy;},new cljs.core.Symbol("gh4st.ai","actor-hierarchy","gh4st.ai/actor-hierarchy",-462800005,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"gh4st.ai","gh4st.ai",1250679454,null),new cljs.core.Symbol(null,"actor-hierarchy","actor-hierarchy",-1139548611,null),"src/gh4st/ai.cljs",21,1,20,20,cljs.core.List.EMPTY,"identify the ghosts",(cljs.core.truth_(gh4st.ai.actor_hierarchy)?gh4st.ai.actor_hierarchy.cljs$lang$test:null)]))], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"gh4st.ai","target-to-chase"),((function (method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__,hierarchy__17425__auto__){
return (function (name_,state){
return name_;
});})(method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__,hierarchy__17425__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17425__auto__,method_table__17421__auto__,prefer_table__17422__auto__,method_cache__17423__auto__,cached_hierarchy__17424__auto__));
})();
}
/**
 * # of open adjacent tiles -> type
 */
gh4st.ai.tile_type = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"dead-end","dead-end",110893676),(1),new cljs.core.Keyword(null,"dead-end","dead-end",110893676),(2),new cljs.core.Keyword(null,"tunnel","tunnel",1936595477),(3),new cljs.core.Keyword(null,"intersection","intersection",2003891010),(4),new cljs.core.Keyword(null,"intersection","intersection",2003891010)], null);
cljs.core._add_method.call(null,gh4st.ai.steer_actor,new cljs.core.Keyword(null,"default","default",-1987822328),(function (name_,state){
var target = gh4st.ai.target_to_chase.call(null,name_,state);
var map__43545 = name_.call(null,new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state));
var map__43545__$1 = ((((!((map__43545 == null)))?((((map__43545.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43545.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43545):map__43545);
var pos = cljs.core.get.call(null,map__43545__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var dir = cljs.core.get.call(null,map__43545__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var prev_pos = cljs.core.get.call(null,map__43545__$1,new cljs.core.Keyword(null,"prev-pos","prev-pos",556177604));
var prev_pos__$1 = (function (){var or__16508__auto__ = prev_pos;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return gh4st.math.sub_pos.call(null,pos,dir);
}
})();
var opens = gh4st.board.walkable_tiles.call(null,pos,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state));
var choices = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dead-end","dead-end",110893676),gh4st.ai.tile_type.call(null,cljs.core.count.call(null,opens))))?cljs.core.take.call(null,(1),opens):cljs.core.remove.call(null,((function (target,map__43545,map__43545__$1,pos,dir,prev_pos,prev_pos__$1,opens){
return (function (p1__43543_SHARP_){
return cljs.core._EQ_.call(null,prev_pos__$1,p1__43543_SHARP_);
});})(target,map__43545,map__43545__$1,pos,dir,prev_pos,prev_pos__$1,opens))
,opens));
var closest = cljs.core.apply.call(null,cljs.core.min_key,((function (target,map__43545,map__43545__$1,pos,dir,prev_pos,prev_pos__$1,opens,choices){
return (function (p1__43544_SHARP_){
return gh4st.math.dist_sq.call(null,p1__43544_SHARP_,target);
});})(target,map__43545,map__43545__$1,pos,dir,prev_pos,prev_pos__$1,opens,choices))
,cljs.core.reverse.call(null,choices));
var next_dir = gh4st.math.sub_pos.call(null,closest,pos);
return next_dir;
}));
cljs.core._add_method.call(null,gh4st.ai.steer_actor,new cljs.core.Keyword(null,"pacman","pacman",-818240966),(function (name_,state){
var target = gh4st.ai.target_to_chase.call(null,name_,state);
var map__43549 = name_.call(null,new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state));
var map__43549__$1 = ((((!((map__43549 == null)))?((((map__43549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43549):map__43549);
var pos = cljs.core.get.call(null,map__43549__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var dir = cljs.core.get.call(null,map__43549__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var prev_pos = cljs.core.get.call(null,map__43549__$1,new cljs.core.Keyword(null,"prev-pos","prev-pos",556177604));
var prev_pos__$1 = (function (){var or__16508__auto__ = prev_pos;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return gh4st.math.sub_pos.call(null,pos,dir);
}
})();
var ghost_pos_QMARK_ = cljs.core.set.call(null,gh4st.board.ghost_positions.call(null,new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state)));
var opens = cljs.core.remove.call(null,ghost_pos_QMARK_,gh4st.board.walkable_tiles.call(null,pos,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)));
var _ = cljs.core.println.call(null,cljs.core.pr_str.call(null,opens));
var choices = ((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"dead-end","dead-end",110893676),gh4st.ai.tile_type.call(null,cljs.core.count.call(null,opens))))?cljs.core.take.call(null,(1),opens):cljs.core.remove.call(null,((function (target,map__43549,map__43549__$1,pos,dir,prev_pos,prev_pos__$1,ghost_pos_QMARK_,opens,_){
return (function (p1__43547_SHARP_){
return cljs.core._EQ_.call(null,prev_pos__$1,p1__43547_SHARP_);
});})(target,map__43549,map__43549__$1,pos,dir,prev_pos,prev_pos__$1,ghost_pos_QMARK_,opens,_))
,opens));
var closest = cljs.core.apply.call(null,cljs.core.min_key,((function (target,map__43549,map__43549__$1,pos,dir,prev_pos,prev_pos__$1,ghost_pos_QMARK_,opens,_,choices){
return (function (p1__43548_SHARP_){
return gh4st.math.dist_sq.call(null,p1__43548_SHARP_,target);
});})(target,map__43549,map__43549__$1,pos,dir,prev_pos,prev_pos__$1,ghost_pos_QMARK_,opens,_,choices))
,cljs.core.reverse.call(null,choices));
var next_dir = (cljs.core.truth_(closest)?gh4st.math.sub_pos.call(null,closest,pos):dir);
return next_dir;
}));
cljs.core._add_method.call(null,gh4st.ai.move_actor,new cljs.core.Keyword(null,"default","default",-1987822328),(function (name_,state){
var map__43551 = name_.call(null,new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state));
var map__43551__$1 = ((((!((map__43551 == null)))?((((map__43551.cljs$lang$protocol_mask$partition0$ & (64))) || (map__43551.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43551):map__43551);
var actor = map__43551__$1;
var pos = cljs.core.get.call(null,map__43551__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var dir = cljs.core.get.call(null,map__43551__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
var next_pos = (cljs.core.truth_(gh4st.board.can_walk_QMARK_.call(null,pos,dir,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(state)))?gh4st.math.add_pos.call(null,pos,dir):pos);
return next_pos;
}));
cljs.core._add_method.call(null,gh4st.ai.target_to_chase,new cljs.core.Keyword(null,"pacman","pacman",-818240966),(function (_name,state){
return new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fruit","fruit",33875830).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state)));
}));
cljs.core._add_method.call(null,gh4st.ai.target_to_chase,new cljs.core.Keyword(null,"blinky","blinky",1882755167),(function (_name,state){
return new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pacman","pacman",-818240966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state)));
}));
cljs.core._add_method.call(null,gh4st.ai.target_to_chase,new cljs.core.Keyword(null,"pinky","pinky",-1607994569),(function (_name,state){
var pacman = new cljs.core.Keyword(null,"pacman","pacman",-818240966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state));
var target = gh4st.math.add_pos.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(pacman),gh4st.math.scale_dir.call(null,new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(pacman),(3)));
return target;
}));
cljs.core._add_method.call(null,gh4st.ai.target_to_chase,new cljs.core.Keyword(null,"inky","inky",-227406426),(function (_name,state){
var blinky = new cljs.core.Keyword(null,"blinky","blinky",1882755167).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state));
var pacman = new cljs.core.Keyword(null,"pacman","pacman",-818240966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state));
var nose = gh4st.math.add_pos.call(null,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(pacman),new cljs.core.Keyword(null,"dir","dir",1734754661).cljs$core$IFn$_invoke$arity$1(pacman));
var target = gh4st.math.reflect_pos.call(null,nose,new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(blinky));
return target;
}));
cljs.core._add_method.call(null,gh4st.ai.target_to_chase,new cljs.core.Keyword(null,"clyde","clyde",73127145),(function (_name,state){
var pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clyde","clyde",73127145).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state)));
var pacpos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pacman","pacman",-818240966).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(state)));
var r = (2);
var too_close_QMARK_ = (gh4st.math.dist_sq.call(null,pos,pacpos) <= (r * r));
var target = ((too_close_QMARK_)?gh4st.math.reflect_pos.call(null,pos,pacpos):pacpos);
return target;
}));

//# sourceMappingURL=ai.js.map?rel=1440376616547