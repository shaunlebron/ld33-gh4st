// Compiled by ClojureScript 1.7.107 {}
goog.provide('gh4st.ui');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('gh4st.state');
goog.require('gh4st.board');
gh4st.ui.select_cell_BANG_ = (function gh4st$ui$select_cell_BANG_(pos){
return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"select-pos","select-pos",1517833709),pos);
});
gh4st.ui.toggle_tile = (function gh4st$ui$toggle_tile(value){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"floor","floor",1882041021)], null),value);
});
gh4st.ui.toggle_actor = (function gh4st$ui$toggle_actor(actor,pos){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(actor))){
return cljs.core.assoc.call(null,actor,new cljs.core.Keyword(null,"pos","pos",-864607220),null);
} else {
return cljs.core.assoc.call(null,actor,new cljs.core.Keyword(null,"pos","pos",-864607220),pos);
}
});
gh4st.ui.toggle_selected_tile_BANG_ = (function gh4st$ui$toggle_selected_tile_BANG_(){
var temp__4425__auto__ = new cljs.core.Keyword(null,"select-pos","select-pos",1517833709).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__33450 = temp__4425__auto__;
var x = cljs.core.nth.call(null,vec__33450,(0),null);
var y = cljs.core.nth.call(null,vec__33450,(1),null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state));
if(cljs.core.truth_(temp__4423__auto__)){
var actor = temp__4423__auto__;
return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),actor], null),gh4st.ui.toggle_actor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),y,x], null),gh4st.ui.toggle_tile);
}
} else {
return null;
}
});
gh4st.ui.set_mode_BANG_ = (function gh4st$ui$set_mode_BANG_(mode){
return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060),mode);
});
gh4st.ui.set_select_dir_BANG_ = (function gh4st$ui$set_select_dir_BANG_(dir){
var temp__4425__auto__ = new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var actor = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),actor,new cljs.core.Keyword(null,"dir","dir",1734754661)], null),dir);
} else {
return null;
}
});
gh4st.ui.move_selection_BANG_ = (function gh4st$ui$move_selection_BANG_(p__33451){
var vec__33454 = p__33451;
var dx = cljs.core.nth.call(null,vec__33454,(0),null);
var dy = cljs.core.nth.call(null,vec__33454,(1),null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"select-pos","select-pos",1517833709).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__33455 = temp__4423__auto__;
var x = cljs.core.nth.call(null,vec__33455,(0),null);
var y = cljs.core.nth.call(null,vec__33455,(1),null);
return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-pos","select-pos",1517833709)], null),gh4st.board.bound_pos.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null),new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state))));
} else {
return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"select-pos","select-pos",1517833709),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}
});
gh4st.ui.disable_select_BANG_ = (function gh4st$ui$disable_select_BANG_(){
return cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"select-pos","select-pos",1517833709),null);
});
Mousetrap.bind("shift+x",gh4st.ui.toggle_selected_tile_BANG_);
Mousetrap.bind("ctrl+x",(function (){
return gh4st.ui.disable_select_BANG_.call(null);
}));
Mousetrap.bind("shift+k",(function (){
return gh4st.ui.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
}));
Mousetrap.bind("shift+j",(function (){
return gh4st.ui.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
}));
Mousetrap.bind("shift+h",(function (){
return gh4st.ui.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
}));
Mousetrap.bind("shift+l",(function (){
return gh4st.ui.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
}));
Mousetrap.bind("ctrl+k",(function (){
return gh4st.ui.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
}));
Mousetrap.bind("ctrl+j",(function (){
return gh4st.ui.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
}));
Mousetrap.bind("ctrl+h",(function (){
return gh4st.ui.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
}));
Mousetrap.bind("ctrl+l",(function (){
return gh4st.ui.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
}));
Mousetrap.bind("shift+1",(function (){
return gh4st.ui.set_mode_BANG_.call(null,null);
}));
Mousetrap.bind("shift+2",(function (){
return gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"pacman","pacman",-818240966));
}));
Mousetrap.bind("shift+3",(function (){
return gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"fruit","fruit",33875830));
}));
Mousetrap.bind("shift+q",(function (){
return gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"blinky","blinky",1882755167));
}));
Mousetrap.bind("shift+w",(function (){
return gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"pinky","pinky",-1607994569));
}));
Mousetrap.bind("shift+e",(function (){
return gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"inky","inky",-227406426));
}));
Mousetrap.bind("shift+r",(function (){
return gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"clyde","clyde",73127145));
}));
Mousetrap.bind("shift+p",(function (){
return cljs.pprint.pprint.call(null,cljs.core.deref.call(null,gh4st.state.app_state));
}));

//# sourceMappingURL=ui.js.map?rel=1440368634611