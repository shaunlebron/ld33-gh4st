// Compiled by ClojureScript 1.7.107 {}
goog.provide('gh4st.game');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('gh4st.state');
goog.require('gh4st.ai');
goog.require('gh4st.board');
goog.require('gh4st.levels');
goog.require('gh4st.texts');
gh4st.game.advancing_QMARK_;
if(typeof gh4st.game.max_level !== 'undefined'){
} else {
gh4st.game.max_level = cljs.core.atom.call(null,(0));
}
if(typeof gh4st.game.history_index !== 'undefined'){
} else {
gh4st.game.history_index = cljs.core.atom.call(null,(0));
}
if(typeof gh4st.game.history_stack !== 'undefined'){
} else {
gh4st.game.history_stack = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
gh4st.game.undo_BANG_ = (function gh4st$game$undo_BANG_(curr_state){
if(cljs.core.truth_(cljs.core.deref.call(null,gh4st.game.advancing_QMARK_))){
return null;
} else {
if((cljs.core.deref.call(null,gh4st.game.history_index) > (0))){
if(cljs.core.truth_(cljs.core.get.call(null,cljs.core.deref.call(null,gh4st.game.history_stack),cljs.core.deref.call(null,gh4st.game.history_index)))){
} else {
cljs.core.swap_BANG_.call(null,gh4st.game.history_stack,cljs.core.conj,curr_state);
}

cljs.core.swap_BANG_.call(null,gh4st.game.history_index,cljs.core.dec);

return cljs.core.reset_BANG_.call(null,gh4st.state.app_state,cljs.core.get.call(null,cljs.core.deref.call(null,gh4st.game.history_stack),cljs.core.deref.call(null,gh4st.game.history_index)));
} else {
return null;
}
}
});
gh4st.game.redo_BANG_ = (function gh4st$game$redo_BANG_(){
if(cljs.core.truth_(cljs.core.deref.call(null,gh4st.game.advancing_QMARK_))){
return null;
} else {
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,gh4st.game.history_stack),(cljs.core.deref.call(null,gh4st.game.history_index) + (1)));
if(cljs.core.truth_(temp__4425__auto__)){
var state = temp__4425__auto__;
cljs.core.reset_BANG_.call(null,gh4st.state.app_state,state);

return cljs.core.swap_BANG_.call(null,gh4st.game.history_index,cljs.core.inc);
} else {
return null;
}
}
});
gh4st.game.remember_BANG_ = (function gh4st$game$remember_BANG_(curr_state){
cljs.core.swap_BANG_.call(null,gh4st.game.history_stack,cljs.core.subvec,(0),cljs.core.deref.call(null,gh4st.game.history_index));

cljs.core.swap_BANG_.call(null,gh4st.game.history_stack,cljs.core.conj,curr_state);

return cljs.core.swap_BANG_.call(null,gh4st.game.history_index,cljs.core.inc);
});
gh4st.game.flush_history_BANG_ = (function gh4st$game$flush_history_BANG_(){
cljs.core.reset_BANG_.call(null,gh4st.game.history_index,(0));

return cljs.core.swap_BANG_.call(null,gh4st.game.history_stack,cljs.core.empty);
});
gh4st.game.advancing_QMARK_ = cljs.core.atom.call(null,false);
gh4st.game.steer_all_BANG_;
gh4st.game.check_game_over_BANG_ = (function gh4st$game$check_game_over_BANG_(){
var actors = new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state));
var on_ghost_QMARK_ = cljs.core.set.call(null,gh4st.board.ghost_positions.call(null,actors));
var pacman_pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"pacman","pacman",-818240966).cljs$core$IFn$_invoke$arity$1(actors));
var fruit_pos = new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fruit","fruit",33875830).cljs$core$IFn$_invoke$arity$1(actors));
if(cljs.core.truth_(on_ghost_QMARK_.call(null,pacman_pos))){
cljs.core.swap_BANG_.call(null,gh4st.game.max_level,cljs.core.max,(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state)) + (1)));

return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"victory","victory",782027403));
} else {
if(cljs.core._EQ_.call(null,fruit_pos,pacman_pos)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"allow-defeat","allow-defeat",-979360839).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state)))){
cljs.core.swap_BANG_.call(null,gh4st.game.max_level,cljs.core.max,(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state)) + (1)));

return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"defeat-allowed","defeat-allowed",1004662183));
} else {
return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"defeat","defeat",1823225713));
}
} else {
return null;

}
}
});
gh4st.game.move_actor_BANG_ = (function gh4st$game$move_actor_BANG_(name_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state)))){
return null;
} else {
var pos_45182 = cljs.core.get_in.call(null,cljs.core.deref.call(null,gh4st.state.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),name_,new cljs.core.Keyword(null,"pos","pos",-864607220)], null));
cljs.core.swap_BANG_.call(null,gh4st.state.app_state,((function (pos_45182){
return (function (p1__45180_SHARP_){
return cljs.core.assoc_in.call(null,p1__45180_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),name_,new cljs.core.Keyword(null,"pos","pos",-864607220)], null),gh4st.ai.move_actor.call(null,name_,p1__45180_SHARP_));
});})(pos_45182))
);

cljs.core.swap_BANG_.call(null,gh4st.state.app_state,((function (pos_45182){
return (function (p1__45181_SHARP_){
return cljs.core.assoc_in.call(null,p1__45181_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),name_,new cljs.core.Keyword(null,"prev-pos","prev-pos",556177604)], null),pos_45182);
});})(pos_45182))
);

gh4st.game.check_game_over_BANG_.call(null);

return gh4st.game.steer_all_BANG_.call(null);
}
});
gh4st.game.steer_actor_BANG_ = (function gh4st$game$steer_actor_BANG_(name_){
return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,(function (p1__45183_SHARP_){
return cljs.core.assoc_in.call(null,p1__45183_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),name_,new cljs.core.Keyword(null,"dir","dir",1734754661)], null),gh4st.ai.steer_actor.call(null,name_,p1__45183_SHARP_));
}));
});
gh4st.game.steer_all_BANG_ = (function gh4st$game$steer_all_BANG_(){
var seq__45188 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pacman","pacman",-818240966),new cljs.core.Keyword(null,"blinky","blinky",1882755167),new cljs.core.Keyword(null,"pinky","pinky",-1607994569),new cljs.core.Keyword(null,"inky","inky",-227406426),new cljs.core.Keyword(null,"clyde","clyde",73127145)], null));
var chunk__45189 = null;
var count__45190 = (0);
var i__45191 = (0);
while(true){
if((i__45191 < count__45190)){
var name_ = cljs.core._nth.call(null,chunk__45189,i__45191);
gh4st.game.steer_actor_BANG_.call(null,name_);

var G__45192 = seq__45188;
var G__45193 = chunk__45189;
var G__45194 = count__45190;
var G__45195 = (i__45191 + (1));
seq__45188 = G__45192;
chunk__45189 = G__45193;
count__45190 = G__45194;
i__45191 = G__45195;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__45188);
if(temp__4425__auto__){
var seq__45188__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45188__$1)){
var c__17311__auto__ = cljs.core.chunk_first.call(null,seq__45188__$1);
var G__45196 = cljs.core.chunk_rest.call(null,seq__45188__$1);
var G__45197 = c__17311__auto__;
var G__45198 = cljs.core.count.call(null,c__17311__auto__);
var G__45199 = (0);
seq__45188 = G__45196;
chunk__45189 = G__45197;
count__45190 = G__45198;
i__45191 = G__45199;
continue;
} else {
var name_ = cljs.core.first.call(null,seq__45188__$1);
gh4st.game.steer_actor_BANG_.call(null,name_);

var G__45200 = cljs.core.next.call(null,seq__45188__$1);
var G__45201 = null;
var G__45202 = (0);
var G__45203 = (0);
seq__45188 = G__45200;
chunk__45189 = G__45201;
count__45190 = G__45202;
i__45191 = G__45203;
continue;
}
} else {
return null;
}
}
break;
}
});
gh4st.game.advance_BANG_ = (function gh4st$game$advance_BANG_(name_){
if(cljs.core.truth_((function (){var or__16508__auto__ = cljs.core.deref.call(null,gh4st.game.advancing_QMARK_);
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state));
}
})())){
return null;
} else {
if(cljs.core.truth_(cljs.core.get_in.call(null,cljs.core.deref.call(null,gh4st.state.app_state),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),name_,new cljs.core.Keyword(null,"pos","pos",-864607220)], null)))){
cljs.core.reset_BANG_.call(null,gh4st.game.advancing_QMARK_,true);

gh4st.game.remember_BANG_.call(null,cljs.core.deref.call(null,gh4st.state.app_state));

var c__22124__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22124__auto__){
return (function (){
var f__22125__auto__ = (function (){var switch__22103__auto__ = ((function (c__22124__auto__){
return (function (state_45229){
var state_val_45230 = (state_45229[(1)]);
if((state_val_45230 === (1))){
var inst_45222 = gh4st.game.move_actor_BANG_.call(null,name_);
var inst_45223 = cljs.core.async.timeout.call(null,(300));
var state_45229__$1 = (function (){var statearr_45231 = state_45229;
(statearr_45231[(7)] = inst_45222);

return statearr_45231;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45229__$1,(2),inst_45223);
} else {
if((state_val_45230 === (2))){
var inst_45225 = (state_45229[(2)]);
var inst_45226 = gh4st.game.move_actor_BANG_.call(null,new cljs.core.Keyword(null,"pacman","pacman",-818240966));
var inst_45227 = cljs.core.reset_BANG_.call(null,gh4st.game.advancing_QMARK_,false);
var state_45229__$1 = (function (){var statearr_45232 = state_45229;
(statearr_45232[(8)] = inst_45225);

(statearr_45232[(9)] = inst_45226);

return statearr_45232;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45229__$1,inst_45227);
} else {
return null;
}
}
});})(c__22124__auto__))
;
return ((function (switch__22103__auto__,c__22124__auto__){
return (function() {
var gh4st$game$advance_BANG__$_state_machine__22104__auto__ = null;
var gh4st$game$advance_BANG__$_state_machine__22104__auto____0 = (function (){
var statearr_45236 = [null,null,null,null,null,null,null,null,null,null];
(statearr_45236[(0)] = gh4st$game$advance_BANG__$_state_machine__22104__auto__);

(statearr_45236[(1)] = (1));

return statearr_45236;
});
var gh4st$game$advance_BANG__$_state_machine__22104__auto____1 = (function (state_45229){
while(true){
var ret_value__22105__auto__ = (function (){try{while(true){
var result__22106__auto__ = switch__22103__auto__.call(null,state_45229);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22106__auto__;
}
break;
}
}catch (e45237){if((e45237 instanceof Object)){
var ex__22107__auto__ = e45237;
var statearr_45238_45240 = state_45229;
(statearr_45238_45240[(5)] = ex__22107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45229);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45237;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45241 = state_45229;
state_45229 = G__45241;
continue;
} else {
return ret_value__22105__auto__;
}
break;
}
});
gh4st$game$advance_BANG__$_state_machine__22104__auto__ = function(state_45229){
switch(arguments.length){
case 0:
return gh4st$game$advance_BANG__$_state_machine__22104__auto____0.call(this);
case 1:
return gh4st$game$advance_BANG__$_state_machine__22104__auto____1.call(this,state_45229);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gh4st$game$advance_BANG__$_state_machine__22104__auto__.cljs$core$IFn$_invoke$arity$0 = gh4st$game$advance_BANG__$_state_machine__22104__auto____0;
gh4st$game$advance_BANG__$_state_machine__22104__auto__.cljs$core$IFn$_invoke$arity$1 = gh4st$game$advance_BANG__$_state_machine__22104__auto____1;
return gh4st$game$advance_BANG__$_state_machine__22104__auto__;
})()
;})(switch__22103__auto__,c__22124__auto__))
})();
var state__22126__auto__ = (function (){var statearr_45239 = f__22125__auto__.call(null);
(statearr_45239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22124__auto__);

return statearr_45239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22126__auto__);
});})(c__22124__auto__))
);

return c__22124__auto__;
} else {
return null;
}
}
});
Mousetrap.bind("1",(function (){
return gh4st.game.advance_BANG_.call(null,new cljs.core.Keyword(null,"blinky","blinky",1882755167));
}));
Mousetrap.bind("2",(function (){
return gh4st.game.advance_BANG_.call(null,new cljs.core.Keyword(null,"pinky","pinky",-1607994569));
}));
Mousetrap.bind("4",(function (){
return gh4st.game.advance_BANG_.call(null,new cljs.core.Keyword(null,"inky","inky",-227406426));
}));
Mousetrap.bind("3",(function (){
return gh4st.game.advance_BANG_.call(null,new cljs.core.Keyword(null,"clyde","clyde",73127145));
}));
Mousetrap.bind("z",(function (){
return gh4st.game.undo_BANG_.call(null,cljs.core.deref.call(null,gh4st.state.app_state));
}));
Mousetrap.bind("y",gh4st.game.redo_BANG_);
gh4st.game.load_level_BANG_ = (function gh4st$game$load_level_BANG_(n){
var data = cljs.core.get.call(null,gh4st.levels.levels,n);
gh4st.game.flush_history_BANG_.call(null);

cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"level","level",1290497552),n);

cljs.core.swap_BANG_.call(null,gh4st.game.max_level,cljs.core.max,n);

cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"end","end",-268185958),null);

cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.merge,data);

return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"level-text","level-text",-1224166220),cljs.core.get.call(null,gh4st.texts.texts,n));
});
gh4st.game.restart_level_BANG_ = (function gh4st$game$restart_level_BANG_(){
return gh4st.game.load_level_BANG_.call(null,new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state)));
});
Mousetrap.bind("r",gh4st.game.restart_level_BANG_);
gh4st.game.try_next_level_BANG_ = (function gh4st$game$try_next_level_BANG_(){
var level = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state));
if((level < cljs.core.deref.call(null,gh4st.game.max_level))){
return gh4st.game.load_level_BANG_.call(null,(level + (1)));
} else {
return null;
}
});
gh4st.game.try_prev_level_BANG_ = (function gh4st$game$try_prev_level_BANG_(){
var level = new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state));
if((level > (0))){
return gh4st.game.load_level_BANG_.call(null,(level - (1)));
} else {
return null;
}
});
Mousetrap.bind("shift+right",gh4st.game.try_next_level_BANG_);
Mousetrap.bind("shift+left",gh4st.game.try_prev_level_BANG_);
gh4st.game.start_game_BANG_ = (function gh4st$game$start_game_BANG_(){
cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"game","game",-441523833));

return gh4st.game.load_level_BANG_.call(null,(0));
});

//# sourceMappingURL=game.js.map?rel=1440378622061