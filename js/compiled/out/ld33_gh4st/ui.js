// Compiled by ClojureScript 1.7.107 {}
goog.provide('ld33_gh4st.ui');
goog.require('cljs.core');
ld33_gh4st.ui.toggle_tile = (function ld33_gh4st$ui$toggle_tile(value){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"floor","floor",1882041021)], null),value);
});
ld33_gh4st.ui.toggle_actor = (function ld33_gh4st$ui$toggle_actor(actor,pos){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(actor))){
return cljs.core.assoc.call(null,actor,new cljs.core.Keyword(null,"pos","pos",-864607220),null);
} else {
return cljs.core.assoc.call(null,actor,new cljs.core.Keyword(null,"pos","pos",-864607220),pos);
}
});
ld33_gh4st.ui.toggle_selected_tile_BANG_ = (function ld33_gh4st$ui$toggle_selected_tile_BANG_(){
var temp__4425__auto__ = new cljs.core.Keyword(null,"select-pos","select-pos",1517833709).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.ui.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__73095 = temp__4425__auto__;
var x = cljs.core.nth.call(null,vec__73095,(0),null);
var y = cljs.core.nth.call(null,vec__73095,(1),null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.ui.app_state));
if(cljs.core.truth_(temp__4423__auto__)){
var actor = temp__4423__auto__;
return cljs.core.swap_BANG_.call(null,ld33_gh4st.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),actor], null),ld33_gh4st.ui.toggle_actor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return cljs.core.swap_BANG_.call(null,ld33_gh4st.ui.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),y,x], null),ld33_gh4st.ui.toggle_tile);
}
} else {
return null;
}
});
ld33_gh4st.ui.set_mode_BANG_ = (function ld33_gh4st$ui$set_mode_BANG_(mode){
return cljs.core.swap_BANG_.call(null,ld33_gh4st.ui.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060),mode);
});
ld33_gh4st.ui.set_select_dir_BANG_ = (function ld33_gh4st$ui$set_select_dir_BANG_(dir){
var temp__4425__auto__ = new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.ui.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var actor = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,ld33_gh4st.ui.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),actor,new cljs.core.Keyword(null,"dir","dir",1734754661)], null),dir);
} else {
return null;
}
});
ld33_gh4st.ui.move_selection_BANG_ = (function ld33_gh4st$ui$move_selection_BANG_(p__73096){
var vec__73099 = p__73096;
var dx = cljs.core.nth.call(null,vec__73099,(0),null);
var dy = cljs.core.nth.call(null,vec__73099,(1),null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"select-pos","select-pos",1517833709).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.ui.app_state));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__73100 = temp__4423__auto__;
var x = cljs.core.nth.call(null,vec__73100,(0),null);
var y = cljs.core.nth.call(null,vec__73100,(1),null);
return cljs.core.swap_BANG_.call(null,ld33_gh4st.ui.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-pos","select-pos",1517833709)], null),ld33_gh4st.ui.bound_pos.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null)));
} else {
return cljs.core.swap_BANG_.call(null,ld33_gh4st.ui.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"select-pos","select-pos",1517833709),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}
});
Mousetrap.bind("x",ld33_gh4st.ui.toggle_selected_tile_BANG_);
Mousetrap.bind("k",(function (){
return ld33_gh4st.ui.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
}));
Mousetrap.bind("j",(function (){
return ld33_gh4st.ui.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
}));
Mousetrap.bind("h",(function (){
return ld33_gh4st.ui.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
}));
Mousetrap.bind("l",(function (){
return ld33_gh4st.ui.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
}));
Mousetrap.bind("shift+k",(function (){
return ld33_gh4st.ui.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
}));
Mousetrap.bind("shift+j",(function (){
return ld33_gh4st.ui.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
}));
Mousetrap.bind("shift+h",(function (){
return ld33_gh4st.ui.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
}));
Mousetrap.bind("shift+l",(function (){
return ld33_gh4st.ui.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
}));
Mousetrap.bind("1",(function (){
return ld33_gh4st.ui.set_mode_BANG_.call(null,null);
}));
Mousetrap.bind("2",(function (){
return ld33_gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"pacman","pacman",-818240966));
}));
Mousetrap.bind("3",(function (){
return ld33_gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"fruit","fruit",33875830));
}));
Mousetrap.bind("q",(function (){
return ld33_gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"blinky","blinky",1882755167));
}));
Mousetrap.bind("w",(function (){
return ld33_gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"pinky","pinky",-1607994569));
}));
Mousetrap.bind("e",(function (){
return ld33_gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"inky","inky",-227406426));
}));
Mousetrap.bind("r",(function (){
return ld33_gh4st.ui.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"clyde","clyde",73127145));
}));
Mousetrap.bind("p",(function (){
return ld33_gh4st.ui.pprint.call(null,cljs.core.deref.call(null,ld33_gh4st.ui.app_state));
}));

//# sourceMappingURL=ui.js.map?rel=1440282122097