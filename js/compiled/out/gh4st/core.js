// Compiled by ClojureScript 1.7.107 {}
goog.provide('gh4st.core');
goog.require('cljs.core');
goog.require('gh4st.img');
goog.require('om_tools.core');
goog.require('gh4st.game');
goog.require('cljs.core.async');
goog.require('sablono.core');
goog.require('gh4st.state');
goog.require('om.core');
goog.require('gh4st.texts');
goog.require('gh4st.ui');
cljs.core.enable_console_print_BANG_.call(null);
gh4st.core.actor = (function gh4st$core$actor(actors,drawpos){
var iter__17280__auto__ = (function gh4st$core$actor_$_iter__53230(s__53231){
return (new cljs.core.LazySeq(null,(function (){
var s__53231__$1 = s__53231;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53231__$1);
if(temp__4425__auto__){
var s__53231__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53231__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__53231__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__53233 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__53232 = (0);
while(true){
if((i__53232 < size__17279__auto__)){
var name_ = cljs.core._nth.call(null,c__17278__auto__,i__53232);
cljs.core.chunk_append.call(null,b__53233,(function (){var map__53238 = cljs.core.get.call(null,actors,name_);
var map__53238__$1 = ((((!((map__53238 == null)))?((((map__53238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53238):map__53238);
var pos = cljs.core.get.call(null,map__53238__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var dir = cljs.core.get.call(null,map__53238__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
if(cljs.core._EQ_.call(null,drawpos,pos)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.sprite","img.sprite",1458476211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),gh4st.img.img_src.call(null,name_,dir),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__53232,map__53238,map__53238__$1,pos,dir,name_,c__17278__auto__,size__17279__auto__,b__53233,s__53231__$2,temp__4425__auto__){
return (function (){
return gh4st.ui.select_cell_BANG_.call(null,drawpos);
});})(i__53232,map__53238,map__53238__$1,pos,dir,name_,c__17278__auto__,size__17279__auto__,b__53233,s__53231__$2,temp__4425__auto__))
], null)], null);
} else {
return null;
}
})());

var G__53242 = (i__53232 + (1));
i__53232 = G__53242;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53233),gh4st$core$actor_$_iter__53230.call(null,cljs.core.chunk_rest.call(null,s__53231__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53233),null);
}
} else {
var name_ = cljs.core.first.call(null,s__53231__$2);
return cljs.core.cons.call(null,(function (){var map__53240 = cljs.core.get.call(null,actors,name_);
var map__53240__$1 = ((((!((map__53240 == null)))?((((map__53240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__53240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__53240):map__53240);
var pos = cljs.core.get.call(null,map__53240__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var dir = cljs.core.get.call(null,map__53240__$1,new cljs.core.Keyword(null,"dir","dir",1734754661));
if(cljs.core._EQ_.call(null,drawpos,pos)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.sprite","img.sprite",1458476211),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),gh4st.img.img_src.call(null,name_,dir),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (map__53240,map__53240__$1,pos,dir,name_,s__53231__$2,temp__4425__auto__){
return (function (){
return gh4st.ui.select_cell_BANG_.call(null,drawpos);
});})(map__53240,map__53240__$1,pos,dir,name_,s__53231__$2,temp__4425__auto__))
], null)], null);
} else {
return null;
}
})(),gh4st$core$actor_$_iter__53230.call(null,cljs.core.rest.call(null,s__53231__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17280__auto__.call(null,gh4st.img.actor_order);
});
gh4st.core.normalize_end = (function gh4st$core$normalize_end(end){
if(cljs.core._EQ_.call(null,end,new cljs.core.Keyword(null,"defeat-allowed","defeat-allowed",1004662183))){
return new cljs.core.Keyword(null,"defeat","defeat",1823225713);
} else {
return end;
}
});
gh4st.core.cell = (function gh4st$core$cell(data,value,p__53243){
var vec__53246 = p__53243;
var x = cljs.core.nth.call(null,vec__53246,(0),null);
var y = cljs.core.nth.call(null,vec__53246,(1),null);
var pos = vec__53246;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__53247 = [cljs.core.str("cell "),cljs.core.str(cljs.core.name.call(null,value))].join('');
var G__53247__$1 = ((cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null),new cljs.core.Keyword(null,"select-pos","select-pos",1517833709).cljs$core$IFn$_invoke$arity$1(data)))?[cljs.core.str(G__53247),cljs.core.str(" selected-cell")].join(''):G__53247);
var G__53247__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(data))?[cljs.core.str(G__53247__$1),cljs.core.str(" "),cljs.core.str(cljs.core.name.call(null,gh4st.core.normalize_end.call(null,new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(data))))].join(''):G__53247__$1);
var G__53247__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060).cljs$core$IFn$_invoke$arity$1(data))?[cljs.core.str(G__53247__$2),cljs.core.str(" selected-"),cljs.core.str(cljs.core.name.call(null,new cljs.core.Keyword(null,"select-actor","select-actor",-1727153060).cljs$core$IFn$_invoke$arity$1(data)))].join(''):G__53247__$2);
return G__53247__$3;
})()], null),gh4st.core.actor.call(null,new cljs.core.Keyword(null,"actors","actors",-1845636398).cljs$core$IFn$_invoke$arity$1(data),pos)], null);
});

var ufv___53352 = schema.utils.use_fn_validation;
var output_schema53249_53353 = schema.core.Any;
var input_schema53250_53354 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker53251_53355 = schema.core.checker.call(null,input_schema53250_53354);
var output_checker53252_53356 = schema.core.checker.call(null,output_schema53249_53353);
/**
 * Inputs: [data owner]
 */
gh4st.core.game = ((function (ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function gh4st$core$game(G__53253,G__53254){
var validate__18810__auto__ = ufv___53352.get_cell();
if(cljs.core.truth_(validate__18810__auto__)){
var args__18811__auto___53357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53253,G__53254], null);
var temp__4425__auto___53358 = input_checker53251_53355.call(null,args__18811__auto___53357);
if(cljs.core.truth_(temp__4425__auto___53358)){
var error__18812__auto___53359 = temp__4425__auto___53358;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__18812__auto___53359)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53250_53354,new cljs.core.Keyword(null,"value","value",305978217),args__18811__auto___53357,new cljs.core.Keyword(null,"error","error",-978969032),error__18812__auto___53359], null));
} else {
}
} else {
}

var o__18813__auto__ = (function (){var data = G__53253;
var owner = G__53254;
while(true){
if(typeof gh4st.core.t_gh4st$core53302 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
gh4st.core.t_gh4st$core53302 = (function (output_schema53249,G__53253,owner,validate__18810__auto__,data,input_checker53251,input_schema53250,game,G__53254,output_checker53252,ufv__,meta53303){
this.output_schema53249 = output_schema53249;
this.G__53253 = G__53253;
this.owner = owner;
this.validate__18810__auto__ = validate__18810__auto__;
this.data = data;
this.input_checker53251 = input_checker53251;
this.input_schema53250 = input_schema53250;
this.game = game;
this.G__53254 = G__53254;
this.output_checker53252 = output_checker53252;
this.ufv__ = ufv__;
this.meta53303 = meta53303;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
gh4st.core.t_gh4st$core53302.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function (_53304,meta53303__$1){
var self__ = this;
var _53304__$1 = this;
return (new gh4st.core.t_gh4st$core53302(self__.output_schema53249,self__.G__53253,self__.owner,self__.validate__18810__auto__,self__.data,self__.input_checker53251,self__.input_schema53250,self__.game,self__.G__53254,self__.output_checker53252,self__.ufv__,meta53303__$1));
});})(validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;

gh4st.core.t_gh4st$core53302.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function (_53304){
var self__ = this;
var _53304__$1 = this;
return self__.meta53303;
});})(validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;

gh4st.core.t_gh4st$core53302.prototype.om$core$IDisplayName$ = true;

gh4st.core.t_gh4st$core53302.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function (_){
var self__ = this;
var ___$1 = this;
return "game";
});})(validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;

gh4st.core.t_gh4st$core53302.prototype.om$core$IRender$ = true;

gh4st.core.t_gh4st$core53302.prototype.om$core$IRender$render$arity$1 = ((function (validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function (_this){
var self__ = this;
var _this__$1 = this;
return React.createElement("div",{"className": "game"},(function (){var attrs53305 = new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level-text","level-text",-1224166220).cljs$core$IFn$_invoke$arity$1(self__.data));
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs53305))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["title"], null)], null),attrs53305)):{"className": "title"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53305))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53305)], null))));
})(),(function (){var attrs53306 = (function (){var end = new cljs.core.Keyword(null,"end","end",-268185958).cljs$core$IFn$_invoke$arity$1(self__.data);
if(cljs.core._EQ_.call(null,end,new cljs.core.Keyword(null,"victory","victory",782027403))){
return gh4st.texts.victory_text;
} else {
if(cljs.core._EQ_.call(null,end,new cljs.core.Keyword(null,"defeat","defeat",1823225713))){
return gh4st.texts.defeat_text;
} else {
if(cljs.core._EQ_.call(null,end,new cljs.core.Keyword(null,"defeat-allowed","defeat-allowed",1004662183))){
return gh4st.texts.allow_defeat_text;
} else {
return new cljs.core.Keyword(null,"desc","desc",2093485764).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"level-text","level-text",-1224166220).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,self__.data)));

}
}
}
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs53306))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["desc"], null)], null),attrs53306)):{"className": "desc"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53306))?cljs.core.PersistentVector.EMPTY:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53306)], null))));
})(),React.createElement("div",{"className": "board"},cljs.core.into_array.call(null,(function (){var iter__17280__auto__ = ((function (_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function gh4st$core$game_$_iter__53309(s__53310){
return (new cljs.core.LazySeq(null,((function (_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function (){
var s__53310__$1 = s__53310;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__53310__$1);
if(temp__4425__auto__){
var s__53310__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53310__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__53310__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__53312 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__53311 = (0);
while(true){
if((i__53311 < size__17279__auto__)){
var vec__53331 = cljs.core._nth.call(null,c__17278__auto__,i__53311);
var y = cljs.core.nth.call(null,vec__53331,(0),null);
var row = cljs.core.nth.call(null,vec__53331,(1),null);
cljs.core.chunk_append.call(null,b__53312,React.createElement("div",{"className": "row"},cljs.core.into_array.call(null,(function (){var iter__17280__auto__ = ((function (i__53311,vec__53331,y,row,c__17278__auto__,size__17279__auto__,b__53312,s__53310__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function gh4st$core$game_$_iter__53309_$_iter__53332(s__53333){
return (new cljs.core.LazySeq(null,((function (i__53311,vec__53331,y,row,c__17278__auto__,size__17279__auto__,b__53312,s__53310__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function (){
var s__53333__$1 = s__53333;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__53333__$1);
if(temp__4425__auto____$1){
var s__53333__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53333__$2)){
var c__17278__auto____$1 = cljs.core.chunk_first.call(null,s__53333__$2);
var size__17279__auto____$1 = cljs.core.count.call(null,c__17278__auto____$1);
var b__53335 = cljs.core.chunk_buffer.call(null,size__17279__auto____$1);
if((function (){var i__53334 = (0);
while(true){
if((i__53334 < size__17279__auto____$1)){
var vec__53338 = cljs.core._nth.call(null,c__17278__auto____$1,i__53334);
var x = cljs.core.nth.call(null,vec__53338,(0),null);
var value = cljs.core.nth.call(null,vec__53338,(1),null);
cljs.core.chunk_append.call(null,b__53335,sablono.interpreter.interpret.call(null,gh4st.core.cell.call(null,self__.data,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

var G__53360 = (i__53334 + (1));
i__53334 = G__53360;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53335),gh4st$core$game_$_iter__53309_$_iter__53332.call(null,cljs.core.chunk_rest.call(null,s__53333__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53335),null);
}
} else {
var vec__53339 = cljs.core.first.call(null,s__53333__$2);
var x = cljs.core.nth.call(null,vec__53339,(0),null);
var value = cljs.core.nth.call(null,vec__53339,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,gh4st.core.cell.call(null,self__.data,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),gh4st$core$game_$_iter__53309_$_iter__53332.call(null,cljs.core.rest.call(null,s__53333__$2)));
}
} else {
return null;
}
break;
}
});})(i__53311,vec__53331,y,row,c__17278__auto__,size__17279__auto__,b__53312,s__53310__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
,null,null));
});})(i__53311,vec__53331,y,row,c__17278__auto__,size__17279__auto__,b__53312,s__53310__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;
return iter__17280__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,row));
})())));

var G__53361 = (i__53311 + (1));
i__53311 = G__53361;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53312),gh4st$core$game_$_iter__53309.call(null,cljs.core.chunk_rest.call(null,s__53310__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53312),null);
}
} else {
var vec__53340 = cljs.core.first.call(null,s__53310__$2);
var y = cljs.core.nth.call(null,vec__53340,(0),null);
var row = cljs.core.nth.call(null,vec__53340,(1),null);
return cljs.core.cons.call(null,React.createElement("div",{"className": "row"},cljs.core.into_array.call(null,(function (){var iter__17280__auto__ = ((function (vec__53340,y,row,s__53310__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function gh4st$core$game_$_iter__53309_$_iter__53341(s__53342){
return (new cljs.core.LazySeq(null,((function (vec__53340,y,row,s__53310__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function (){
var s__53342__$1 = s__53342;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__53342__$1);
if(temp__4425__auto____$1){
var s__53342__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__53342__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__53342__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__53344 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__53343 = (0);
while(true){
if((i__53343 < size__17279__auto__)){
var vec__53347 = cljs.core._nth.call(null,c__17278__auto__,i__53343);
var x = cljs.core.nth.call(null,vec__53347,(0),null);
var value = cljs.core.nth.call(null,vec__53347,(1),null);
cljs.core.chunk_append.call(null,b__53344,sablono.interpreter.interpret.call(null,gh4st.core.cell.call(null,self__.data,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))));

var G__53362 = (i__53343 + (1));
i__53343 = G__53362;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53344),gh4st$core$game_$_iter__53309_$_iter__53341.call(null,cljs.core.chunk_rest.call(null,s__53342__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__53344),null);
}
} else {
var vec__53348 = cljs.core.first.call(null,s__53342__$2);
var x = cljs.core.nth.call(null,vec__53348,(0),null);
var value = cljs.core.nth.call(null,vec__53348,(1),null);
return cljs.core.cons.call(null,sablono.interpreter.interpret.call(null,gh4st.core.cell.call(null,self__.data,value,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y], null))),gh4st$core$game_$_iter__53309_$_iter__53341.call(null,cljs.core.rest.call(null,s__53342__$2)));
}
} else {
return null;
}
break;
}
});})(vec__53340,y,row,s__53310__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
,null,null));
});})(vec__53340,y,row,s__53310__$2,temp__4425__auto__,_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;
return iter__17280__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,row));
})())),gh4st$core$game_$_iter__53309.call(null,cljs.core.rest.call(null,s__53310__$2)));
}
} else {
return null;
}
break;
}
});})(_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
,null,null));
});})(_this__$1,validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;
return iter__17280__auto__.call(null,cljs.core.map_indexed.call(null,cljs.core.vector,new cljs.core.Keyword(null,"board","board",-1907017633).cljs$core$IFn$_invoke$arity$1(self__.data)));
})())),React.createElement("div",{"className": "controls"}));
});})(validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;

gh4st.core.t_gh4st$core53302.getBasis = ((function (validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-schema53249","output-schema53249",-1197260288,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__53253","G__53253",-160229020,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"validate__18810__auto__","validate__18810__auto__",863541828,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"input-checker53251","input-checker53251",-816929242,null),new cljs.core.Symbol(null,"input-schema53250","input-schema53250",1127808902,null),cljs.core.with_meta(new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema53249","output-schema53249",-1197260288,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema53250","input-schema53250",1127808902,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__53254","G__53254",2016693583,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-checker53252","output-checker53252",167144219,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta53303","meta53303",-1572843753,null)], null);
});})(validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;

gh4st.core.t_gh4st$core53302.cljs$lang$type = true;

gh4st.core.t_gh4st$core53302.cljs$lang$ctorStr = "gh4st.core/t_gh4st$core53302";

gh4st.core.t_gh4st$core53302.cljs$lang$ctorPrWriter = ((function (validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"gh4st.core/t_gh4st$core53302");
});})(validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;

gh4st.core.__GT_t_gh4st$core53302 = ((function (validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356){
return (function gh4st$core$game_$___GT_t_gh4st$core53302(output_schema53249__$1,G__53253__$1,owner__$1,validate__18810__auto____$1,data__$1,input_checker53251__$1,input_schema53250__$1,game__$1,G__53254__$1,output_checker53252__$1,ufv____$1,meta53303){
return (new gh4st.core.t_gh4st$core53302(output_schema53249__$1,G__53253__$1,owner__$1,validate__18810__auto____$1,data__$1,input_checker53251__$1,input_schema53250__$1,game__$1,G__53254__$1,output_checker53252__$1,ufv____$1,meta53303));
});})(validate__18810__auto__,ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;

}

return (new gh4st.core.t_gh4st$core53302(output_schema53249_53353,G__53253,owner,validate__18810__auto__,data,input_checker53251_53355,input_schema53250_53354,gh4st$core$game,G__53254,output_checker53252_53356,ufv___53352,null));
break;
}
})();
if(cljs.core.truth_(validate__18810__auto__)){
var temp__4425__auto___53363 = output_checker53252_53356.call(null,o__18813__auto__);
if(cljs.core.truth_(temp__4425__auto___53363)){
var error__18812__auto___53364 = temp__4425__auto___53363;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"game","game",1199007694,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__18812__auto___53364)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53249_53353,new cljs.core.Keyword(null,"value","value",305978217),o__18813__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18812__auto___53364], null));
} else {
}
} else {
}

return o__18813__auto__;
});})(ufv___53352,output_schema53249_53353,input_schema53250_53354,input_checker53251_53355,output_checker53252_53356))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,gh4st.core.game),schema.core.make_fn_schema.call(null,output_schema53249_53353,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53250_53354], null)));

gh4st.core.__GT_game = (function gh4st$core$__GT_game(var_args){
var args53349 = [];
var len__17566__auto___53365 = arguments.length;
var i__17567__auto___53366 = (0);
while(true){
if((i__17567__auto___53366 < len__17566__auto___53365)){
args53349.push((arguments[i__17567__auto___53366]));

var G__53367 = (i__17567__auto___53366 + (1));
i__17567__auto___53366 = G__53367;
continue;
} else {
}
break;
}

var G__53351 = args53349.length;
switch (G__53351) {
case 1:
return gh4st.core.__GT_game.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gh4st.core.__GT_game.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53349.length)].join('')));

}
});

gh4st.core.__GT_game.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22775__auto__){
return om.core.build.call(null,gh4st.core.game,cursor__22775__auto__);
});

gh4st.core.__GT_game.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22775__auto__,m53248){
return om.core.build.call(null,gh4st.core.game,cursor__22775__auto__,m53248);
});

gh4st.core.__GT_game.cljs$lang$maxFixedArity = 2;
gh4st.core.stop_welcome_anim = null;
gh4st.core.next_home_actor = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pacman","pacman",-818240966),new cljs.core.Keyword(null,"blinky","blinky",1882755167),new cljs.core.Keyword(null,"blinky","blinky",1882755167),new cljs.core.Keyword(null,"pinky","pinky",-1607994569),new cljs.core.Keyword(null,"pinky","pinky",-1607994569),new cljs.core.Keyword(null,"inky","inky",-227406426),new cljs.core.Keyword(null,"inky","inky",-227406426),new cljs.core.Keyword(null,"clyde","clyde",73127145),new cljs.core.Keyword(null,"clyde","clyde",73127145),new cljs.core.Keyword(null,"pacman","pacman",-818240966)], null);

var ufv___53513 = schema.utils.use_fn_validation;
var output_schema53370_53514 = schema.core.Any;
var input_schema53371_53515 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker53372_53516 = schema.core.checker.call(null,input_schema53371_53515);
var output_checker53373_53517 = schema.core.checker.call(null,output_schema53370_53514);
/**
 * Inputs: [data owner]
 */
gh4st.core.welcome = ((function (ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function gh4st$core$welcome(G__53374,G__53375){
var validate__18810__auto__ = ufv___53513.get_cell();
if(cljs.core.truth_(validate__18810__auto__)){
var args__18811__auto___53518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53374,G__53375], null);
var temp__4425__auto___53519 = input_checker53372_53516.call(null,args__18811__auto___53518);
if(cljs.core.truth_(temp__4425__auto___53519)){
var error__18812__auto___53520 = temp__4425__auto___53519;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"welcome","welcome",1062379404,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__18812__auto___53520)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53371_53515,new cljs.core.Keyword(null,"value","value",305978217),args__18811__auto___53518,new cljs.core.Keyword(null,"error","error",-978969032),error__18812__auto___53520], null));
} else {
}
} else {
}

var o__18813__auto__ = (function (){var data = G__53374;
var owner = G__53375;
while(true){
if(typeof gh4st.core.t_gh4st$core53443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IWillUnmount}
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {om.core.IWillMount}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
gh4st.core.t_gh4st$core53443 = (function (G__53375,owner,validate__18810__auto__,data,output_checker53373,input_checker53372,welcome,G__53374,output_schema53370,input_schema53371,ufv__,meta53444){
this.G__53375 = G__53375;
this.owner = owner;
this.validate__18810__auto__ = validate__18810__auto__;
this.data = data;
this.output_checker53373 = output_checker53373;
this.input_checker53372 = input_checker53372;
this.welcome = welcome;
this.G__53374 = G__53374;
this.output_schema53370 = output_schema53370;
this.input_schema53371 = input_schema53371;
this.ufv__ = ufv__;
this.meta53444 = meta53444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
gh4st.core.t_gh4st$core53443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (_53445,meta53444__$1){
var self__ = this;
var _53445__$1 = this;
return (new gh4st.core.t_gh4st$core53443(self__.G__53375,self__.owner,self__.validate__18810__auto__,self__.data,self__.output_checker53373,self__.input_checker53372,self__.welcome,self__.G__53374,self__.output_schema53370,self__.input_schema53371,self__.ufv__,meta53444__$1));
});})(validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;

gh4st.core.t_gh4st$core53443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (_53445){
var self__ = this;
var _53445__$1 = this;
return self__.meta53444;
});})(validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;

gh4st.core.t_gh4st$core53443.prototype.om$core$IDisplayName$ = true;

gh4st.core.t_gh4st$core53443.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (_){
var self__ = this;
var ___$1 = this;
return "welcome";
});})(validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;

gh4st.core.t_gh4st$core53443.prototype.om$core$IWillMount$ = true;

gh4st.core.t_gh4st$core53443.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (_this){
var self__ = this;
var _this__$1 = this;
gh4st.core.stop_welcome_anim = cljs.core.async.chan.call(null);

var c__22124__auto___53521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__22124__auto___53521,_this__$1,validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (){
var f__22125__auto__ = (function (){var switch__22103__auto__ = ((function (c__22124__auto___53521,_this__$1,validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (state_53474){
var state_val_53475 = (state_53474[(1)]);
if((state_val_53475 === (1))){
var state_53474__$1 = state_53474;
var statearr_53476_53522 = state_53474__$1;
(statearr_53476_53522[(2)] = null);

(statearr_53476_53522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53475 === (2))){
var inst_53448 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53449 = cljs.core.async.timeout.call(null,(400));
var inst_53450 = [inst_53449,gh4st.core.stop_welcome_anim];
var inst_53451 = (new cljs.core.PersistentVector(null,2,(5),inst_53448,inst_53450,null));
var state_53474__$1 = state_53474;
return cljs.core.async.ioc_alts_BANG_.call(null,state_53474__$1,(4),inst_53451);
} else {
if((state_val_53475 === (3))){
var inst_53472 = (state_53474[(2)]);
var state_53474__$1 = state_53474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53474__$1,inst_53472);
} else {
if((state_val_53475 === (4))){
var inst_53453 = (state_53474[(2)]);
var inst_53454 = cljs.core.nth.call(null,inst_53453,(0),null);
var inst_53455 = cljs.core.nth.call(null,inst_53453,(1),null);
var inst_53456 = cljs.core._EQ_.call(null,inst_53454,gh4st.core.stop_welcome_anim);
var state_53474__$1 = (function (){var statearr_53477 = state_53474;
(statearr_53477[(7)] = inst_53455);

return statearr_53477;
})();
if(inst_53456){
var statearr_53478_53523 = state_53474__$1;
(statearr_53478_53523[(1)] = (5));

} else {
var statearr_53479_53524 = state_53474__$1;
(statearr_53479_53524[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53475 === (5))){
var state_53474__$1 = state_53474;
var statearr_53480_53525 = state_53474__$1;
(statearr_53480_53525[(2)] = null);

(statearr_53480_53525[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53475 === (6))){
var inst_53459 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53460 = [new cljs.core.Keyword(null,"home-actor","home-actor",-1430527186)];
var inst_53461 = (new cljs.core.PersistentVector(null,1,(5),inst_53459,inst_53460,null));
var inst_53462 = cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.update_in,inst_53461,gh4st.core.next_home_actor);
var inst_53463 = cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"home-bump","home-bump",-2015019266),true);
var inst_53464 = cljs.core.async.timeout.call(null,(20));
var state_53474__$1 = (function (){var statearr_53481 = state_53474;
(statearr_53481[(8)] = inst_53462);

(statearr_53481[(9)] = inst_53463);

return statearr_53481;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53474__$1,(8),inst_53464);
} else {
if((state_val_53475 === (7))){
var inst_53470 = (state_53474[(2)]);
var state_53474__$1 = state_53474;
var statearr_53482_53526 = state_53474__$1;
(statearr_53482_53526[(2)] = inst_53470);

(statearr_53482_53526[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53475 === (8))){
var inst_53466 = (state_53474[(2)]);
var inst_53467 = cljs.core.swap_BANG_.call(null,gh4st.state.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"home-bump","home-bump",-2015019266),false);
var state_53474__$1 = (function (){var statearr_53483 = state_53474;
(statearr_53483[(10)] = inst_53467);

(statearr_53483[(11)] = inst_53466);

return statearr_53483;
})();
var statearr_53484_53527 = state_53474__$1;
(statearr_53484_53527[(2)] = null);

(statearr_53484_53527[(1)] = (2));


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
});})(c__22124__auto___53521,_this__$1,validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;
return ((function (switch__22103__auto__,c__22124__auto___53521,_this__$1,validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function() {
var gh4st$core$welcome_$_state_machine__22104__auto__ = null;
var gh4st$core$welcome_$_state_machine__22104__auto____0 = (function (){
var statearr_53488 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53488[(0)] = gh4st$core$welcome_$_state_machine__22104__auto__);

(statearr_53488[(1)] = (1));

return statearr_53488;
});
var gh4st$core$welcome_$_state_machine__22104__auto____1 = (function (state_53474){
while(true){
var ret_value__22105__auto__ = (function (){try{while(true){
var result__22106__auto__ = switch__22103__auto__.call(null,state_53474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__22106__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__22106__auto__;
}
break;
}
}catch (e53489){if((e53489 instanceof Object)){
var ex__22107__auto__ = e53489;
var statearr_53490_53528 = state_53474;
(statearr_53490_53528[(5)] = ex__22107__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53489;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__22105__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53529 = state_53474;
state_53474 = G__53529;
continue;
} else {
return ret_value__22105__auto__;
}
break;
}
});
gh4st$core$welcome_$_state_machine__22104__auto__ = function(state_53474){
switch(arguments.length){
case 0:
return gh4st$core$welcome_$_state_machine__22104__auto____0.call(this);
case 1:
return gh4st$core$welcome_$_state_machine__22104__auto____1.call(this,state_53474);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
gh4st$core$welcome_$_state_machine__22104__auto__.cljs$core$IFn$_invoke$arity$0 = gh4st$core$welcome_$_state_machine__22104__auto____0;
gh4st$core$welcome_$_state_machine__22104__auto__.cljs$core$IFn$_invoke$arity$1 = gh4st$core$welcome_$_state_machine__22104__auto____1;
return gh4st$core$welcome_$_state_machine__22104__auto__;
})()
;})(switch__22103__auto__,c__22124__auto___53521,_this__$1,validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
})();
var state__22126__auto__ = (function (){var statearr_53491 = f__22125__auto__.call(null);
(statearr_53491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__22124__auto___53521);

return statearr_53491;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__22126__auto__);
});})(c__22124__auto___53521,_this__$1,validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
);


return Mousetrap.bind("enter",((function (_this__$1,validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (){
return gh4st.game.start_game_BANG_.call(null);
});})(_this__$1,validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
);
});})(validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;

gh4st.core.t_gh4st$core53443.prototype.om$core$IWillUnmount$ = true;

gh4st.core.t_gh4st$core53443.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (_this){
var self__ = this;
var _this__$1 = this;
return cljs.core.async.close_BANG_.call(null,gh4st.core.stop_welcome_anim);
});})(validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;

gh4st.core.t_gh4st$core53443.prototype.om$core$IRender$ = true;

gh4st.core.t_gh4st$core53443.prototype.om$core$IRender$render$arity$1 = ((function (validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (_this){
var self__ = this;
var _this__$1 = this;
var attrs53492 = (function (){var name_ = new cljs.core.Keyword(null,"home-actor","home-actor",-1430527186).cljs$core$IFn$_invoke$arity$1(self__.data);
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),(function (){var G__53509 = [cljs.core.str(cljs.core.name.call(null,name_))].join('');
var G__53509__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"home-bump","home-bump",-2015019266).cljs$core$IFn$_invoke$arity$1(self__.data))?[cljs.core.str(G__53509),cljs.core.str(" bump")].join(''):G__53509);
return G__53509__$1;
})()], null),"GH",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img.ghost","img.ghost",1991976431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),gh4st.img.img_src.call(null,name_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null))], null)], null),"ST"], null);
})();
return cljs.core.apply.call(null,React.createElement,"div",((cljs.core.map_QMARK_.call(null,attrs53492))?sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["home"], null)], null),attrs53492)):{"className": "home"}),cljs.core.remove.call(null,cljs.core.nil_QMARK_,((cljs.core.map_QMARK_.call(null,attrs53492))?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [React.createElement("p",{"className": "instruct"},React.createElement("em",null,"PRESS ENTER")),React.createElement("p",{"className": "author"},"by ",React.createElement("a",{"href": "http://twitter.com/shaunlebron"},"@shaunlebron")),React.createElement("p",{"className": "details"},"Based on the ",React.createElement("a",{"href": "http://pacman.shaunew.com/"},"original ghost AI")," from the Pac-Man arcade."),React.createElement("a",{"href": "http://github.com/shaunlebron/ld33-gh4st"},React.createElement("p",{"className": "cljs"},"Made in",React.createElement("img",{"src": "img/cljs.svg"}),"ClojureScript"))], null):new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [sablono.interpreter.interpret.call(null,attrs53492),React.createElement("p",{"className": "instruct"},React.createElement("em",null,"PRESS ENTER")),React.createElement("p",{"className": "author"},"by ",React.createElement("a",{"href": "http://twitter.com/shaunlebron"},"@shaunlebron")),React.createElement("p",{"className": "details"},"Based on the ",React.createElement("a",{"href": "http://pacman.shaunew.com/"},"original ghost AI")," from the Pac-Man arcade."),React.createElement("a",{"href": "http://github.com/shaunlebron/ld33-gh4st"},React.createElement("p",{"className": "cljs"},"Made in",React.createElement("img",{"src": "img/cljs.svg"}),"ClojureScript"))], null))));
});})(validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;

gh4st.core.t_gh4st$core53443.getBasis = ((function (validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"G__53375","G__53375",-694937021,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"validate__18810__auto__","validate__18810__auto__",863541828,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"output-checker53373","output-checker53373",-1509780058,null),new cljs.core.Symbol(null,"input-checker53372","input-checker53372",-1282420376,null),cljs.core.with_meta(new cljs.core.Symbol(null,"welcome","welcome",1062379404,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema53370","output-schema53370",-215961517,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema53371","input-schema53371",1141778394,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"G__53374","G__53374",1552606034,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"output-schema53370","output-schema53370",-215961517,null),new cljs.core.Symbol(null,"input-schema53371","input-schema53371",1141778394,null),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta53444","meta53444",678280171,null)], null);
});})(validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;

gh4st.core.t_gh4st$core53443.cljs$lang$type = true;

gh4st.core.t_gh4st$core53443.cljs$lang$ctorStr = "gh4st.core/t_gh4st$core53443";

gh4st.core.t_gh4st$core53443.cljs$lang$ctorPrWriter = ((function (validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"gh4st.core/t_gh4st$core53443");
});})(validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;

gh4st.core.__GT_t_gh4st$core53443 = ((function (validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517){
return (function gh4st$core$welcome_$___GT_t_gh4st$core53443(G__53375__$1,owner__$1,validate__18810__auto____$1,data__$1,output_checker53373__$1,input_checker53372__$1,welcome__$1,G__53374__$1,output_schema53370__$1,input_schema53371__$1,ufv____$1,meta53444){
return (new gh4st.core.t_gh4st$core53443(G__53375__$1,owner__$1,validate__18810__auto____$1,data__$1,output_checker53373__$1,input_checker53372__$1,welcome__$1,G__53374__$1,output_schema53370__$1,input_schema53371__$1,ufv____$1,meta53444));
});})(validate__18810__auto__,ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;

}

return (new gh4st.core.t_gh4st$core53443(G__53375,owner,validate__18810__auto__,data,output_checker53373_53517,input_checker53372_53516,gh4st$core$welcome,G__53374,output_schema53370_53514,input_schema53371_53515,ufv___53513,null));
break;
}
})();
if(cljs.core.truth_(validate__18810__auto__)){
var temp__4425__auto___53530 = output_checker53373_53517.call(null,o__18813__auto__);
if(cljs.core.truth_(temp__4425__auto___53530)){
var error__18812__auto___53531 = temp__4425__auto___53530;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"welcome","welcome",1062379404,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__18812__auto___53531)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53370_53514,new cljs.core.Keyword(null,"value","value",305978217),o__18813__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18812__auto___53531], null));
} else {
}
} else {
}

return o__18813__auto__;
});})(ufv___53513,output_schema53370_53514,input_schema53371_53515,input_checker53372_53516,output_checker53373_53517))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,gh4st.core.welcome),schema.core.make_fn_schema.call(null,output_schema53370_53514,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53371_53515], null)));

gh4st.core.__GT_welcome = (function gh4st$core$__GT_welcome(var_args){
var args53510 = [];
var len__17566__auto___53532 = arguments.length;
var i__17567__auto___53533 = (0);
while(true){
if((i__17567__auto___53533 < len__17566__auto___53532)){
args53510.push((arguments[i__17567__auto___53533]));

var G__53534 = (i__17567__auto___53533 + (1));
i__17567__auto___53533 = G__53534;
continue;
} else {
}
break;
}

var G__53512 = args53510.length;
switch (G__53512) {
case 1:
return gh4st.core.__GT_welcome.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gh4st.core.__GT_welcome.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53510.length)].join('')));

}
});

gh4st.core.__GT_welcome.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22775__auto__){
return om.core.build.call(null,gh4st.core.welcome,cursor__22775__auto__);
});

gh4st.core.__GT_welcome.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22775__auto__,m53369){
return om.core.build.call(null,gh4st.core.welcome,cursor__22775__auto__,m53369);
});

gh4st.core.__GT_welcome.cljs$lang$maxFixedArity = 2;

var ufv___53554 = schema.utils.use_fn_validation;
var output_schema53537_53555 = schema.core.Any;
var input_schema53538_53556 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))),schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker53539_53557 = schema.core.checker.call(null,input_schema53538_53556);
var output_checker53540_53558 = schema.core.checker.call(null,output_schema53537_53555);
/**
 * Inputs: [data owner]
 */
gh4st.core.root = ((function (ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558){
return (function gh4st$core$root(G__53541,G__53542){
var validate__18810__auto__ = ufv___53554.get_cell();
if(cljs.core.truth_(validate__18810__auto__)){
var args__18811__auto___53559 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__53541,G__53542], null);
var temp__4425__auto___53560 = input_checker53539_53557.call(null,args__18811__auto___53559);
if(cljs.core.truth_(temp__4425__auto___53560)){
var error__18812__auto___53561 = temp__4425__auto___53560;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__18812__auto___53561)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema53538_53556,new cljs.core.Keyword(null,"value","value",305978217),args__18811__auto___53559,new cljs.core.Keyword(null,"error","error",-978969032),error__18812__auto___53561], null));
} else {
}
} else {
}

var o__18813__auto__ = (function (){var data = G__53541;
var owner = G__53542;
while(true){
if(typeof gh4st.core.t_gh4st$core53547 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {om.core.IRender}
 * @implements {om.core.IDisplayName}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
gh4st.core.t_gh4st$core53547 = (function (output_checker53540,owner,validate__18810__auto__,data,output_schema53537,G__53542,input_checker53539,input_schema53538,G__53541,root,ufv__,meta53548){
this.output_checker53540 = output_checker53540;
this.owner = owner;
this.validate__18810__auto__ = validate__18810__auto__;
this.data = data;
this.output_schema53537 = output_schema53537;
this.G__53542 = G__53542;
this.input_checker53539 = input_checker53539;
this.input_schema53538 = input_schema53538;
this.G__53541 = G__53541;
this.root = root;
this.ufv__ = ufv__;
this.meta53548 = meta53548;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
gh4st.core.t_gh4st$core53547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558){
return (function (_53549,meta53548__$1){
var self__ = this;
var _53549__$1 = this;
return (new gh4st.core.t_gh4st$core53547(self__.output_checker53540,self__.owner,self__.validate__18810__auto__,self__.data,self__.output_schema53537,self__.G__53542,self__.input_checker53539,self__.input_schema53538,self__.G__53541,self__.root,self__.ufv__,meta53548__$1));
});})(validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558))
;

gh4st.core.t_gh4st$core53547.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558){
return (function (_53549){
var self__ = this;
var _53549__$1 = this;
return self__.meta53548;
});})(validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558))
;

gh4st.core.t_gh4st$core53547.prototype.om$core$IDisplayName$ = true;

gh4st.core.t_gh4st$core53547.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558){
return (function (_){
var self__ = this;
var ___$1 = this;
return "root";
});})(validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558))
;

gh4st.core.t_gh4st$core53547.prototype.om$core$IRender$ = true;

gh4st.core.t_gh4st$core53547.prototype.om$core$IRender$render$arity$1 = ((function (validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558){
return (function (_this){
var self__ = this;
var _this__$1 = this;
return sablono.interpreter.interpret.call(null,(function (){var G__53550 = (((new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(self__.data) instanceof cljs.core.Keyword))?new cljs.core.Keyword(null,"screen","screen",1990059748).cljs$core$IFn$_invoke$arity$1(self__.data).fqn:null);
switch (G__53550) {
case "home":
return om.core.build.call(null,gh4st.core.welcome,self__.data);

break;
case "game":
return om.core.build.call(null,gh4st.core.game,self__.data);

break;
default:
return null;

}
})());
});})(validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558))
;

gh4st.core.t_gh4st$core53547.getBasis = ((function (validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558){
return (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"output-checker53540","output-checker53540",978606721,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"validate__18810__auto__","validate__18810__auto__",863541828,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"output-schema53537","output-schema53537",-223052820,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__53542","G__53542",-567244723,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),new cljs.core.Symbol(null,"input-checker53539","input-checker53539",1446662414,null),new cljs.core.Symbol(null,"input-schema53538","input-schema53538",2081549011,null),cljs.core.with_meta(new cljs.core.Symbol(null,"G__53541","G__53541",384981110,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null))], null))),new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("schema.core","make-fn-schema","schema.core/make-fn-schema",152735578,null),new cljs.core.Symbol(null,"output-schema53537","output-schema53537",-223052820,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"input-schema53538","input-schema53538",2081549011,null)], null)),new cljs.core.Keyword(null,"doc","doc",1913296891),"Inputs: [data owner]",new cljs.core.Keyword(null,"raw-arglists","raw-arglists",-1511012109),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null)], null)))], null)),new cljs.core.Symbol(null,"ufv__","ufv__",-2046207459,null),new cljs.core.Symbol(null,"meta53548","meta53548",-442523108,null)], null);
});})(validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558))
;

gh4st.core.t_gh4st$core53547.cljs$lang$type = true;

gh4st.core.t_gh4st$core53547.cljs$lang$ctorStr = "gh4st.core/t_gh4st$core53547";

gh4st.core.t_gh4st$core53547.cljs$lang$ctorPrWriter = ((function (validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558){
return (function (this__17106__auto__,writer__17107__auto__,opt__17108__auto__){
return cljs.core._write.call(null,writer__17107__auto__,"gh4st.core/t_gh4st$core53547");
});})(validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558))
;

gh4st.core.__GT_t_gh4st$core53547 = ((function (validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558){
return (function gh4st$core$root_$___GT_t_gh4st$core53547(output_checker53540__$1,owner__$1,validate__18810__auto____$1,data__$1,output_schema53537__$1,G__53542__$1,input_checker53539__$1,input_schema53538__$1,G__53541__$1,root__$1,ufv____$1,meta53548){
return (new gh4st.core.t_gh4st$core53547(output_checker53540__$1,owner__$1,validate__18810__auto____$1,data__$1,output_schema53537__$1,G__53542__$1,input_checker53539__$1,input_schema53538__$1,G__53541__$1,root__$1,ufv____$1,meta53548));
});})(validate__18810__auto__,ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558))
;

}

return (new gh4st.core.t_gh4st$core53547(output_checker53540_53558,owner,validate__18810__auto__,data,output_schema53537_53555,G__53542,input_checker53539_53557,input_schema53538_53556,G__53541,gh4st$core$root,ufv___53554,null));
break;
}
})();
if(cljs.core.truth_(validate__18810__auto__)){
var temp__4425__auto___53563 = output_checker53540_53558.call(null,o__18813__auto__);
if(cljs.core.truth_(temp__4425__auto___53563)){
var error__18812__auto___53564 = temp__4425__auto___53563;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"root","root",1191874074,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)),cljs.core.pr_str.call(null,error__18812__auto___53564)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema53537_53555,new cljs.core.Keyword(null,"value","value",305978217),o__18813__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18812__auto___53564], null));
} else {
}
} else {
}

return o__18813__auto__;
});})(ufv___53554,output_schema53537_53555,input_schema53538_53556,input_checker53539_53557,output_checker53540_53558))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,gh4st.core.root),schema.core.make_fn_schema.call(null,output_schema53537_53555,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema53538_53556], null)));

gh4st.core.__GT_root = (function gh4st$core$__GT_root(var_args){
var args53551 = [];
var len__17566__auto___53565 = arguments.length;
var i__17567__auto___53566 = (0);
while(true){
if((i__17567__auto___53566 < len__17566__auto___53565)){
args53551.push((arguments[i__17567__auto___53566]));

var G__53567 = (i__17567__auto___53566 + (1));
i__17567__auto___53566 = G__53567;
continue;
} else {
}
break;
}

var G__53553 = args53551.length;
switch (G__53553) {
case 1:
return gh4st.core.__GT_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return gh4st.core.__GT_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args53551.length)].join('')));

}
});

gh4st.core.__GT_root.cljs$core$IFn$_invoke$arity$1 = (function (cursor__22775__auto__){
return om.core.build.call(null,gh4st.core.root,cursor__22775__auto__);
});

gh4st.core.__GT_root.cljs$core$IFn$_invoke$arity$2 = (function (cursor__22775__auto__,m53536){
return om.core.build.call(null,gh4st.core.root,cursor__22775__auto__,m53536);
});

gh4st.core.__GT_root.cljs$lang$maxFixedArity = 2;
om.core.root.call(null,gh4st.core.root,gh4st.state.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("app")], null));
gh4st.core.on_js_reload = (function gh4st$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1440380312062