// Compiled by ClojureScript 1.7.107 {}
goog.provide('ld33_gh4st.core');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('sablono.core');
goog.require('om_tools.core');
goog.require('om.core');
cljs.core.enable_console_print_BANG_.call(null);
ld33_gh4st.core.toggle_tile = (function ld33_gh4st$core$toggle_tile(value){
return cljs.core.get.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"floor","floor",1882041021),new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"wall","wall",-787661558),new cljs.core.Keyword(null,"floor","floor",1882041021)], null),value);
});
ld33_gh4st.core.toggle_actor = (function ld33_gh4st$core$toggle_actor(actor,pos){
if(cljs.core.truth_(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(actor))){
return cljs.core.assoc.call(null,actor,new cljs.core.Keyword(null,"pos","pos",-864607220),null);
} else {
return cljs.core.assoc.call(null,actor,new cljs.core.Keyword(null,"pos","pos",-864607220),pos);
}
});
ld33_gh4st.core.toggle_selected_tile_BANG_ = (function ld33_gh4st$core$toggle_selected_tile_BANG_(){
var temp__4425__auto__ = new cljs.core.Keyword(null,"select-pos","select-pos",1517833709).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.core.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var vec__72904 = temp__4425__auto__;
var x = cljs.core.nth.call(null,vec__72904,(0),null);
var y = cljs.core.nth.call(null,vec__72904,(1),null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.core.app_state));
if(cljs.core.truth_(temp__4423__auto__)){
var actor = temp__4423__auto__;
return cljs.core.swap_BANG_.call(null,ld33_gh4st.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),actor], null),ld33_gh4st.core.toggle_actor,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null));
} else {
return cljs.core.swap_BANG_.call(null,ld33_gh4st.core.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"board","board",-1907017633),y,x], null),ld33_gh4st.core.toggle_tile);
}
} else {
return null;
}
});
ld33_gh4st.core.set_mode_BANG_ = (function ld33_gh4st$core$set_mode_BANG_(mode){
return cljs.core.swap_BANG_.call(null,ld33_gh4st.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060),mode);
});
ld33_gh4st.core.set_select_dir_BANG_ = (function ld33_gh4st$core$set_select_dir_BANG_(dir){
var temp__4425__auto__ = new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.core.app_state));
if(cljs.core.truth_(temp__4425__auto__)){
var actor = temp__4425__auto__;
return cljs.core.swap_BANG_.call(null,ld33_gh4st.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"actors","actors",-1845636398),actor,new cljs.core.Keyword(null,"dir","dir",1734754661)], null),dir);
} else {
return null;
}
});
ld33_gh4st.core.move_selection_BANG_ = (function ld33_gh4st$core$move_selection_BANG_(p__72905){
var vec__72908 = p__72905;
var dx = cljs.core.nth.call(null,vec__72908,(0),null);
var dy = cljs.core.nth.call(null,vec__72908,(1),null);
var temp__4423__auto__ = new cljs.core.Keyword(null,"select-pos","select-pos",1517833709).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.core.app_state));
if(cljs.core.truth_(temp__4423__auto__)){
var vec__72909 = temp__4423__auto__;
var x = cljs.core.nth.call(null,vec__72909,(0),null);
var y = cljs.core.nth.call(null,vec__72909,(1),null);
return cljs.core.swap_BANG_.call(null,ld33_gh4st.core.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select-pos","select-pos",1517833709)], null),ld33_gh4st.core.bound_pos.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null)));
} else {
return cljs.core.swap_BANG_.call(null,ld33_gh4st.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"select-pos","select-pos",1517833709),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0)], null));
}
});
Mousetrap.bind("x",ld33_gh4st.core.toggle_selected_tile_BANG_);
Mousetrap.bind("k",(function (){
return ld33_gh4st.core.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
}));
Mousetrap.bind("j",(function (){
return ld33_gh4st.core.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
}));
Mousetrap.bind("h",(function (){
return ld33_gh4st.core.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
}));
Mousetrap.bind("l",(function (){
return ld33_gh4st.core.move_selection_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
}));
Mousetrap.bind("shift+k",(function (){
return ld33_gh4st.core.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null));
}));
Mousetrap.bind("shift+j",(function (){
return ld33_gh4st.core.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null));
}));
Mousetrap.bind("shift+h",(function (){
return ld33_gh4st.core.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null));
}));
Mousetrap.bind("shift+l",(function (){
return ld33_gh4st.core.set_select_dir_BANG_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null));
}));
Mousetrap.bind("1",(function (){
return ld33_gh4st.core.set_mode_BANG_.call(null,null);
}));
Mousetrap.bind("2",(function (){
return ld33_gh4st.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"pacman","pacman",-818240966));
}));
Mousetrap.bind("3",(function (){
return ld33_gh4st.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"fruit","fruit",33875830));
}));
Mousetrap.bind("q",(function (){
return ld33_gh4st.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"blinky","blinky",1882755167));
}));
Mousetrap.bind("w",(function (){
return ld33_gh4st.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"pinky","pinky",-1607994569));
}));
Mousetrap.bind("e",(function (){
return ld33_gh4st.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"inky","inky",-227406426));
}));
Mousetrap.bind("r",(function (){
return ld33_gh4st.core.set_mode_BANG_.call(null,new cljs.core.Keyword(null,"clyde","clyde",73127145));
}));
Mousetrap.bind("p",(function (){
return cljs.pprint.pprint.call(null,cljs.core.deref.call(null,ld33_gh4st.core.app_state));
}));
ld33_gh4st.core.actor_order = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blinky","blinky",1882755167),new cljs.core.Keyword(null,"pinky","pinky",-1607994569),new cljs.core.Keyword(null,"inky","inky",-227406426),new cljs.core.Keyword(null,"clyde","clyde",73127145),new cljs.core.Keyword(null,"pacman","pacman",-818240966),new cljs.core.Keyword(null,"fruit","fruit",33875830)], null);
ld33_gh4st.core.dir__GT_name = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),"-d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),"-u",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),"-r",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),"-l"], true, false);
ld33_gh4st.core.img_src = (function ld33_gh4st$core$img_src(name_,dir){
if(cljs.core._EQ_.call(null,name_,new cljs.core.Keyword(null,"fruit","fruit",33875830))){
return [cljs.core.str("img/"),cljs.core.str(cljs.core.name.call(null,name_)),cljs.core.str(new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,ld33_gh4st.core.app_state))),cljs.core.str(".png")].join('');
} else {
return [cljs.core.str("img/"),cljs.core.str(cljs.core.name.call(null,name_)),cljs.core.str(ld33_gh4st.core.dir__GT_name.call(null,dir)),cljs.core.str(".png")].join('');
}
});
ld33_gh4st.core.select_cell = (function ld33_gh4st$core$select_cell(pos){
return cljs.core.swap_BANG_.call(null,ld33_gh4st.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"select-pos","select-pos",1517833709),pos);
});
ld33_gh4st.core.actor = (function ld33_gh4st$core$actor(actors,drawpos){
var iter__17280__auto__ = (function ld33_gh4st$core$actor_$_iter__72922(s__72923){
return (new cljs.core.LazySeq(null,(function (){
var s__72923__$1 = s__72923;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__72923__$1);
if(temp__4425__auto__){
var s__72923__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__72923__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__72923__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__72925 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__72924 = (0);
while(true){
if((i__72924 < size__17279__auto__)){
var name_ = cljs.core._nth.call(null,c__17278__auto__,i__72924);
cljs.core.chunk_append.call(null,b__72925,(function (){var map__72930 = cljs.core.get.call(null,actors,name_);
var map__72930__$1 = ((((!((map__72930 == null)))?((((map__72930.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72930.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72930):map__72930);
var pos = cljs.core.get.call(null,map__72930__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var dir = cljs.core.get.call(null,map__72930__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
if(cljs.core._EQ_.call(null,drawpos,pos)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.sprite","img.sprite",1458476211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),ld33_gh4st.core.img_src.call(null,name_,dir),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__72924,map__72930,map__72930__$1,pos,dir,name_,c__17278__auto__,size__17279__auto__,b__72925,s__72923__$2,temp__4425__auto__){
return (function (){
return ld33_gh4st.core.select_cell.call(null,drawpos);
});})(i__72924,map__72930,map__72930__$1,pos,dir,name_,c__17278__auto__,size__17279__auto__,b__72925,s__72923__$2,temp__4425__auto__))
], null)], null);
} else {
return null;
}
})());

var G__72934 = (i__72924 + (1));
i__72924 = G__72934;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__72925),ld33_gh4st$core$actor_$_iter__72922.call(null,cljs.core.chunk_rest.call(null,s__72923__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__72925),null);
}
} else {
var name_ = cljs.core.first.call(null,s__72923__$2);
return cljs.core.cons.call(null,(function (){var map__72932 = cljs.core.get.call(null,actors,name_);
var map__72932__$1 = ((((!((map__72932 == null)))?((((map__72932.cljs$lang$protocol_mask$partition0$ & (64))) || (map__72932.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__72932):map__72932);
var pos = cljs.core.get.call(null,map__72932__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var dir = cljs.core.get.call(null,map__72932__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
if(cljs.core._EQ_.call(null,drawpos,pos)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.sprite","img.sprite",1458476211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),ld33_gh4st.core.img_src.call(null,name_,dir),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__72932,map__72932__$1,pos,dir,name_,s__72923__$2,temp__4425__auto__){
return (function (){
return ld33_gh4st.core.select_cell.call(null,drawpos);
});})(map__72932,map__72932__$1,pos,dir,name_,s__72923__$2,temp__4425__auto__))
], null)], null);
} else {
return null;
}
})(),ld33_gh4st$core$actor_$_iter__72922.call(null,cljs.core.rest.call(null,s__72923__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17280__auto__.call(null,ld33_gh4st.core.actor_order);
});
ld33_gh4st.core.cell = (function ld33_gh4st$core$cell(data,value,p__72935){
var vec__72938 = p__72935;
var x = cljs.core.nth.call(null,vec__72938,(0),null);
var y = cljs.core.nth.call(null,vec__72938,(1),null);
var pos = vec__72938;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__72939 = [cljs.core.str("cell "),cljs.core.str(cljs.core.name.call(null,value))].join('');
var G__72939__$1 = ((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"select-pos","select-pos",1517833709).cljs$core$IFn$_invoke$arity$1(data)))?[cljs.core.str(G__72939),cljs.core.str(" selected-cell")].join(''):G__72939);
var G__72939__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060).cljs$core$IFn$_invoke$arity$1(data))?[cljs.core.str(G__72939__$1),cljs.core.str(" selected-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060).cljs$core$IFn$_invoke$arity$1(data)))].join(''):G__72939__$1);
return G__72939__$2;
})(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__72938,x,y,pos){
return (function (){
return ld33_gh4st.core.select_cell.call(null,pos);
});})(vec__72938,x,y,pos))
], null),ld33_gh4st.core.actor.call(null,new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(data),pos)], null);
});

var ufv___73036 = schema.utils.use_fn_validation;
var output_schema72941_73037 = schema.core.Any;
var input_schema72942_73038 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker72943_73039 = schema.core.checker.call(null,input_schema72942_73038);
var output_checker72944_73040 = schema.core.checker.call(null,output_schema72941_73037);
/**
 * Inputs: [data owner]
 */
ld33_gh4st.core.board = ((function (ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function ld33_gh4st$core$board(G__72945,G__72946){
var validate__18810__auto__ = ufv___73036.get_cell();
if(cljs.core.truth_(validate__18810__auto__)){
var args__18811__auto___73041 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__72945,G__72946], null);
var temp__4425__auto___73042 = input_checker72943_73039.call(null,args__18811__auto___73041);
if(cljs.core.truth_(temp__4425__auto___73042)){
var error__18812__auto___73043 = temp__4425__auto___73042;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__18812__auto___73043)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema72942_73038,new cljs.core.Keyword(null,"value","value",305978217),args__18811__auto___73041,new cljs.core.Keyword(null,"error","error",-978969032),error__18812__auto___73043], null));
} else {
}
} else {
}

var o__18813__auto__ = (function (){var data = G__72945;
var owner = G__72946;
while(true){
if(typeof ld33_gh4st.core.t_ld33_gh4st$core72990 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
ld33_gh4st.core.t_ld33_gh4st$core72990 = (function (owner,validate__18810__auto__,input_checker72943,data,board,G__72945,output_schema72941,G__72946,output_checker72944,input_schema72942,ufv__,meta72991){
this.owner = owner;
this.validate__18810__auto__ = validate__18810__auto__;
this.input_checker72943 = input_checker72943;
this.data = data;
this.board = board;
this.G__72945 = G__72945;
this.output_schema72941 = output_schema72941;
this.G__72946 = G__72946;
this.output_checker72944 = output_checker72944;
this.input_schema72942 = input_schema72942;
this.ufv__ = ufv__;
this.meta72991 = meta72991;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
ld33_gh4st.core.t_ld33_gh4st$core72990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function (_72992,meta72991__$1){
var self__ = this;
var _72992__$1 = this;
return (new ld33_gh4st.core.t_ld33_gh4st$core72990(self__.owner,self__.validate__18810__auto__,self__.input_checker72943,self__.data,self__.board,self__.G__72945,self__.output_schema72941,self__.G__72946,self__.output_checker72944,self__.input_schema72942,self__.ufv__,meta72991__$1));
});})(validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;

ld33_gh4st.core.t_ld33_gh4st$core72990.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function (_72992){
var self__ = this;
var _72992__$1 = this;
return self__.meta72991;
});})(validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;

ld33_gh4st.core.t_ld33_gh4st$core72990.prototype.om$core$IDisplayName$ = true;

ld33_gh4st.core.t_ld33_gh4st$core72990.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function (_){
var self__ = this;
var ___$1 = this;
return "board";
});})(validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;

ld33_gh4st.core.t_ld33_gh4st$core72990.prototype.om$core$IRender$ = true;

ld33_gh4st.core.t_ld33_gh4st$core72990.prototype.om$core$IRender$render$arity$1 = ((function (validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function (_this){
var self__ = this;
var _this__$1 = this;
return React.createElement("div",{"className": "board"},cljs.core.into_array.call(null,(function (){var iter__17280__auto__ = ((function (_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function ld33_gh4st$core$board_$_iter__72993(s__72994){
return (new cljs.core.LazySeq(null,((function (_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function (){
var s__72994__$1 = s__72994;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__72994__$1);
if(temp__4425__auto__){
var s__72994__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__72994__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__72994__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__72996 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__72995 = (0);
while(true){
if((i__72995 < size__17279__auto__)){
var vec__73015 = cljs.core._nth.call(null,c__17278__auto__,i__72995);
var y = cljs.core.nth.call(null,vec__73015,(0),null);
var row = cljs.core.nth.call(null,vec__73015,(1),null);
cljs.core.chunk_append.call(null,b__72996,React.createElement("div",{"className": "row"},cljs.core.into_array.call(null,(function (){var iter__17280__auto__ = ((function (i__72995,vec__73015,y,row,c__17278__auto__,size__17279__auto__,b__72996,s__72994__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function ld33_gh4st$core$board_$_iter__72993_$_iter__73016(s__73017){
return (new cljs.core.LazySeq(null,((function (i__72995,vec__73015,y,row,c__17278__auto__,size__17279__auto__,b__72996,s__72994__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function (){
var s__73017__$1 = s__73017;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__73017__$1);
if(temp__4425__auto____$1){
var s__73017__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__73017__$2)){
var c__17278__auto____$1 = cljs.core.chunk_first.call(null,s__73017__$2);
var size__17279__auto____$1 = cljs.core.count.call(null,c__17278__auto____$1);
var b__73019 = cljs.core.chunk_buffer.call(null,size__17279__auto____$1);
if((function (){var i__73018 = (0);
while(true){
if((i__73018 < size__17279__auto____$1)){
var vec__73022 = cljs.core._nth.call(null,c__17278__auto____$1,i__73018);
var x = cljs.core.nth.call(null,vec__73022,(0),null);
var value = cljs.core.nth.call(null,vec__73022,(1),null);
cljs.core.chunk_append.call(null,b__73019,sablono.interpreter.interpret.call(null,ld33_gh4st.core.cell.call(null,self__.data,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

var G__73044 = (i__73018 + (1));
i__73018 = G__73044;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73019),ld33_gh4st$core$board_$_iter__72993_$_iter__73016.call(null,cljs.core.chunk_rest.call(null,s__73017__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73019),null);
}
} else {
var vec__73023 = cljs.core.first.call(null,s__73017__$2);
var x = cljs.core.nth.call(null,vec__73023,(0),null);
var value = cljs.core.nth.call(null,vec__73023,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,ld33_gh4st.core.cell.call(null,self__.data,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),ld33_gh4st$core$board_$_iter__72993_$_iter__73016.call(null,cljs.core.rest.call(null,s__73017__$2)));
}
} else {
return null;
}
break;
}
});})(i__72995,vec__73015,y,row,c__17278__auto__,size__17279__auto__,b__72996,s__72994__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
,null,null));
});})(i__72995,vec__73015,y,row,c__17278__auto__,size__17279__auto__,b__72996,s__72994__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;
return iter__17280__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,row));
})())));

var G__73045 = (i__72995 + (1));
i__72995 = G__73045;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__72996),ld33_gh4st$core$board_$_iter__72993.call(null,cljs.core.chunk_rest.call(null,s__72994__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__72996),null);
}
} else {
var vec__73024 = cljs.core.first.call(null,s__72994__$2);
var y = cljs.core.nth.call(null,vec__73024,(0),null);
var row = cljs.core.nth.call(null,vec__73024,(1),null);
return cljs.core.cons.call(null,React.createElement("div",{"className": "row"},cljs.core.into_array.call(null,(function (){var iter__17280__auto__ = ((function (vec__73024,y,row,s__72994__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function ld33_gh4st$core$board_$_iter__72993_$_iter__73025(s__73026){
return (new cljs.core.LazySeq(null,((function (vec__73024,y,row,s__72994__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function (){
var s__73026__$1 = s__73026;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__73026__$1);
if(temp__4425__auto____$1){
var s__73026__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__73026__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__73026__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__73028 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__73027 = (0);
while(true){
if((i__73027 < size__17279__auto__)){
var vec__73031 = cljs.core._nth.call(null,c__17278__auto__,i__73027);
var x = cljs.core.nth.call(null,vec__73031,(0),null);
var value = cljs.core.nth.call(null,vec__73031,(1),null);
cljs.core.chunk_append.call(null,b__73028,sablono.interpreter.interpret.call(null,ld33_gh4st.core.cell.call(null,self__.data,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

var G__73046 = (i__73027 + (1));
i__73027 = G__73046;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73028),ld33_gh4st$core$board_$_iter__72993_$_iter__73025.call(null,cljs.core.chunk_rest.call(null,s__73026__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__73028),null);
}
} else {
var vec__73032 = cljs.core.first.call(null,s__73026__$2);
var x = cljs.core.nth.call(null,vec__73032,(0),null);
var value = cljs.core.nth.call(null,vec__73032,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,ld33_gh4st.core.cell.call(null,self__.data,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),ld33_gh4st$core$board_$_iter__72993_$_iter__73025.call(null,cljs.core.rest.call(null,s__73026__$2)));
}
} else {
return null;
}
break;
}
});})(vec__73024,y,row,s__72994__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
,null,null));
});})(vec__73024,y,row,s__72994__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;
return iter__17280__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,row));
})())),ld33_gh4st$core$board_$_iter__72993.call(null,cljs.core.rest.call(null,s__72994__$2)));
}
} else {
return null;
}
break;
}
});})(_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
,null,null));
});})(_this__$1,validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;
return iter__17280__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data)));
})()));
});})(validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;

ld33_gh4st.core.t_ld33_gh4st$core72990.getBasis = ((function (validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"validate__18810__auto__","validate__18810__auto__",863541828,null),new cljs.core.Symbol(null,"input-checker72943","input-checker72943",-512127356,null),new cljs.core.Symbol(null,"data","data",1407862150,null),cljs.core.with_meta(new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema72941","output-schema72941",2123010923,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema72942","input-schema72942",-1447468707,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__72945","G__72945",1661778983,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema72941","output-schema72941",2123010923,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__72946","G__72946",887184656,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker72944","output-checker72944",-1439758890,null),new cljs.core.Symbol(null,"input-schema72942","input-schema72942",-1447468707,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta72991","meta72991",1402237741,null)], null);
});})(validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;

ld33_gh4st.core.t_ld33_gh4st$core72990.cljs$lang$type = true;

ld33_gh4st.core.t_ld33_gh4st$core72990.cljs$lang$ctorStr = "ld33-gh4st.core/t_ld33_gh4st$core72990";

ld33_gh4st.core.t_ld33_gh4st$core72990.cljs$lang$ctorPrWriter = ((function (validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"ld33-gh4st.core/t_ld33_gh4st$core72990");
});})(validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;

ld33_gh4st.core.__GT_t_ld33_gh4st$core72990 = ((function (validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040){
return (function ld33_gh4st$core$board_$___GT_t_ld33_gh4st$core72990(owner__$1,validate__18810__auto____$1,input_checker72943__$1,data__$1,board__$1,G__72945__$1,output_schema72941__$1,G__72946__$1,output_checker72944__$1,input_schema72942__$1,ufv____$1,meta72991){
return (new ld33_gh4st.core.t_ld33_gh4st$core72990(owner__$1,validate__18810__auto____$1,input_checker72943__$1,data__$1,board__$1,G__72945__$1,output_schema72941__$1,G__72946__$1,output_checker72944__$1,input_schema72942__$1,ufv____$1,meta72991));
});})(validate__18810__auto__,ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;

}

return (new ld33_gh4st.core.t_ld33_gh4st$core72990(owner,validate__18810__auto__,input_checker72943_73039,data,ld33_gh4st$core$board,G__72945,output_schema72941_73037,G__72946,output_checker72944_73040,input_schema72942_73038,ufv___73036,null));
break;
}
})();
if(cljs.core.truth_(validate__18810__auto__)){
var temp__4425__auto___73047 = output_checker72944_73040.call(null,o__18813__auto__);
if(cljs.core.truth_(temp__4425__auto___73047)){
var error__18812__auto___73048 = temp__4425__auto___73047;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"board","board",-266486106,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__18812__auto___73048)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema72941_73037,new cljs.core.Keyword(null,"value","value",305978217),o__18813__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18812__auto___73048], null));
} else {
}
} else {
}

return o__18813__auto__;
});})(ufv___73036,output_schema72941_73037,input_schema72942_73038,input_checker72943_73039,output_checker72944_73040))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,ld33_gh4st.core.board),schema.core.make_fn_schema.call(null,output_schema72941_73037,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema72942_73038], null)));

ld33_gh4st.core.__GT_board = (function ld33_gh4st$core$__GT_board(var_args){
var args73033 = [];
var len__17566__auto___73049 = arguments.length;
var i__17567__auto___73050 = (0);
while(true){
if((i__17567__auto___73050 < len__17566__auto___73049)){
args73033.push((arguments[i__17567__auto___73050]));

var G__73051 = (i__17567__auto___73050 + (1));
i__17567__auto___73050 = G__73051;
continue;
} else {
}
break;
}

var G__73035 = args73033.length;
switch (G__73035) {
case 1:
return ld33_gh4st.core.__GT_board.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ld33_gh4st.core.__GT_board.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73033.length)].join('')));

}
});

ld33_gh4st.core.__GT_board.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21678__auto__){
return om.core.build.call(null,ld33_gh4st.core.board,cursor__21678__auto__);
});

ld33_gh4st.core.__GT_board.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21678__auto__,m72940){
return om.core.build.call(null,ld33_gh4st.core.board,cursor__21678__auto__,m72940);
});

ld33_gh4st.core.__GT_board.cljs$lang$maxFixedArity = 2;

var ufv___73069 = schema.utils.use_fn_validation;
var output_schema73054_73070 = schema.core.Any;
var input_schema73055_73071 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker73056_73072 = schema.core.checker.call(null,input_schema73055_73071);
var output_checker73057_73073 = schema.core.checker.call(null,output_schema73054_73070);
/**
 * Inputs: [data owner]
 */
ld33_gh4st.core.root = ((function (ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073){
return (function ld33_gh4st$core$root(G__73058,G__73059){
var validate__18810__auto__ = ufv___73069.get_cell();
if(cljs.core.truth_(validate__18810__auto__)){
var args__18811__auto___73074 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__73058,G__73059], null);
var temp__4425__auto___73075 = input_checker73056_73072.call(null,args__18811__auto___73074);
if(cljs.core.truth_(temp__4425__auto___73075)){
var error__18812__auto___73076 = temp__4425__auto___73075;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__18812__auto___73076)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema73055_73071,new cljs.core.Keyword(null,"value","value",305978217),args__18811__auto___73074,new cljs.core.Keyword(null,"error","error",-978969032),error__18812__auto___73076], null));
} else {
}
} else {
}

var o__18813__auto__ = (function (){var data = G__73058;
var owner = G__73059;
while(true){
if(typeof ld33_gh4st.core.t_ld33_gh4st$core73063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
ld33_gh4st.core.t_ld33_gh4st$core73063 = (function (output_schema73054,owner,validate__18810__auto__,G__73058,data,input_schema73055,input_checker73056,output_checker73057,G__73059,root,ufv__,meta73064){
this.output_schema73054 = output_schema73054;
this.owner = owner;
this.validate__18810__auto__ = validate__18810__auto__;
this.G__73058 = G__73058;
this.data = data;
this.input_schema73055 = input_schema73055;
this.input_checker73056 = input_checker73056;
this.output_checker73057 = output_checker73057;
this.G__73059 = G__73059;
this.root = root;
this.ufv__ = ufv__;
this.meta73064 = meta73064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
ld33_gh4st.core.t_ld33_gh4st$core73063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073){
return (function (_73065,meta73064__$1){
var self__ = this;
var _73065__$1 = this;
return (new ld33_gh4st.core.t_ld33_gh4st$core73063(self__.output_schema73054,self__.owner,self__.validate__18810__auto__,self__.G__73058,self__.data,self__.input_schema73055,self__.input_checker73056,self__.output_checker73057,self__.G__73059,self__.root,self__.ufv__,meta73064__$1));
});})(validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073))
;

ld33_gh4st.core.t_ld33_gh4st$core73063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073){
return (function (_73065){
var self__ = this;
var _73065__$1 = this;
return self__.meta73064;
});})(validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073))
;

ld33_gh4st.core.t_ld33_gh4st$core73063.prototype.om$core$IDisplayName$ = true;

ld33_gh4st.core.t_ld33_gh4st$core73063.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073){
return (function (_){
var self__ = this;
var ___$1 = this;
return "root";
});})(validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073))
;

ld33_gh4st.core.t_ld33_gh4st$core73063.prototype.om$core$IRender$ = true;

ld33_gh4st.core.t_ld33_gh4st$core73063.prototype.om$core$IRender$render$arity$1 = ((function (validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073){
return (function (_this){
var self__ = this;
var _this__$1 = this;
return sablono.interpreter.interpret.call(null,om.core.build.call(null,ld33_gh4st.core.board,self__.data));
});})(validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073))
;

ld33_gh4st.core.t_ld33_gh4st$core73063.getBasis = ((function (validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema73054","output-schema73054",313796000,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"validate__18810__auto__","validate__18810__auto__",863541828,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__73058","G__73058",575072326,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-schema73055","input-schema73055",-2140205269,null),new cljs.core.Symbol(null,"input-checker73056","input-checker73056",243505588,null),new cljs.core.Symbol(null,"output-checker73057","output-checker73057",-1638341196,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__73059","G__73059",-1375352842,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema73054","output-schema73054",313796000,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema73055","input-schema73055",-2140205269,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta73064","meta73064",1019465836,null)], null);
});})(validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073))
;

ld33_gh4st.core.t_ld33_gh4st$core73063.cljs$lang$type = true;

ld33_gh4st.core.t_ld33_gh4st$core73063.cljs$lang$ctorStr = "ld33-gh4st.core/t_ld33_gh4st$core73063";

ld33_gh4st.core.t_ld33_gh4st$core73063.cljs$lang$ctorPrWriter = ((function (validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"ld33-gh4st.core/t_ld33_gh4st$core73063");
});})(validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073))
;

ld33_gh4st.core.__GT_t_ld33_gh4st$core73063 = ((function (validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073){
return (function ld33_gh4st$core$root_$___GT_t_ld33_gh4st$core73063(output_schema73054__$1,owner__$1,validate__18810__auto____$1,G__73058__$1,data__$1,input_schema73055__$1,input_checker73056__$1,output_checker73057__$1,G__73059__$1,root__$1,ufv____$1,meta73064){
return (new ld33_gh4st.core.t_ld33_gh4st$core73063(output_schema73054__$1,owner__$1,validate__18810__auto____$1,G__73058__$1,data__$1,input_schema73055__$1,input_checker73056__$1,output_checker73057__$1,G__73059__$1,root__$1,ufv____$1,meta73064));
});})(validate__18810__auto__,ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073))
;

}

return (new ld33_gh4st.core.t_ld33_gh4st$core73063(output_schema73054_73070,owner,validate__18810__auto__,G__73058,data,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073,G__73059,ld33_gh4st$core$root,ufv___73069,null));
break;
}
})();
if(cljs.core.truth_(validate__18810__auto__)){
var temp__4425__auto___73077 = output_checker73057_73073.call(null,o__18813__auto__);
if(cljs.core.truth_(temp__4425__auto___73077)){
var error__18812__auto___73078 = temp__4425__auto___73077;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__18812__auto___73078)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema73054_73070,new cljs.core.Keyword(null,"value","value",305978217),o__18813__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18812__auto___73078], null));
} else {
}
} else {
}

return o__18813__auto__;
});})(ufv___73069,output_schema73054_73070,input_schema73055_73071,input_checker73056_73072,output_checker73057_73073))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,ld33_gh4st.core.root),schema.core.make_fn_schema.call(null,output_schema73054_73070,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema73055_73071], null)));

ld33_gh4st.core.__GT_root = (function ld33_gh4st$core$__GT_root(var_args){
var args73066 = [];
var len__17566__auto___73079 = arguments.length;
var i__17567__auto___73080 = (0);
while(true){
if((i__17567__auto___73080 < len__17566__auto___73079)){
args73066.push((arguments[i__17567__auto___73080]));

var G__73081 = (i__17567__auto___73080 + (1));
i__17567__auto___73080 = G__73081;
continue;
} else {
}
break;
}

var G__73068 = args73066.length;
switch (G__73068) {
case 1:
return ld33_gh4st.core.__GT_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ld33_gh4st.core.__GT_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args73066.length)].join('')));

}
});

ld33_gh4st.core.__GT_root.cljs$core$IFn$_invoke$arity$1 = (function (cursor__21678__auto__){
return om.core.build.call(null,ld33_gh4st.core.root,cursor__21678__auto__);
});

ld33_gh4st.core.__GT_root.cljs$core$IFn$_invoke$arity$2 = (function (cursor__21678__auto__,m73053){
return om.core.build.call(null,ld33_gh4st.core.root,cursor__21678__auto__,m73053);
});

ld33_gh4st.core.__GT_root.cljs$lang$maxFixedArity = 2;
om.core.root.call(null,ld33_gh4st.core.root,ld33_gh4st.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
ld33_gh4st.core.on_js_reload = (function ld33_gh4st$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1440282066284