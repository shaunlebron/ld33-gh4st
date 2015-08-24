// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.clojure_symbol_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__17574__auto__ = [];
var len__17567__auto___31271 = arguments.length;
var i__17568__auto___31272 = (0);
while(true){
if((i__17568__auto___31272 < len__17567__auto___31271)){
args__17574__auto__.push((arguments[i__17568__auto___31272]));

var G__31273 = (i__17568__auto___31272 + (1));
i__17568__auto___31272 = G__31273;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((2) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17575__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__31263_31274 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__31264_31275 = null;
var count__31265_31276 = (0);
var i__31266_31277 = (0);
while(true){
if((i__31266_31277 < count__31265_31276)){
var k_31278 = cljs.core._nth.call(null,chunk__31264_31275,i__31266_31277);
e.setAttribute(cljs.core.name.call(null,k_31278),cljs.core.get.call(null,attrs,k_31278));

var G__31279 = seq__31263_31274;
var G__31280 = chunk__31264_31275;
var G__31281 = count__31265_31276;
var G__31282 = (i__31266_31277 + (1));
seq__31263_31274 = G__31279;
chunk__31264_31275 = G__31280;
count__31265_31276 = G__31281;
i__31266_31277 = G__31282;
continue;
} else {
var temp__4425__auto___31283 = cljs.core.seq.call(null,seq__31263_31274);
if(temp__4425__auto___31283){
var seq__31263_31284__$1 = temp__4425__auto___31283;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31263_31284__$1)){
var c__17311__auto___31285 = cljs.core.chunk_first.call(null,seq__31263_31284__$1);
var G__31286 = cljs.core.chunk_rest.call(null,seq__31263_31284__$1);
var G__31287 = c__17311__auto___31285;
var G__31288 = cljs.core.count.call(null,c__17311__auto___31285);
var G__31289 = (0);
seq__31263_31274 = G__31286;
chunk__31264_31275 = G__31287;
count__31265_31276 = G__31288;
i__31266_31277 = G__31289;
continue;
} else {
var k_31290 = cljs.core.first.call(null,seq__31263_31284__$1);
e.setAttribute(cljs.core.name.call(null,k_31290),cljs.core.get.call(null,attrs,k_31290));

var G__31291 = cljs.core.next.call(null,seq__31263_31284__$1);
var G__31292 = null;
var G__31293 = (0);
var G__31294 = (0);
seq__31263_31274 = G__31291;
chunk__31264_31275 = G__31292;
count__31265_31276 = G__31293;
i__31266_31277 = G__31294;
continue;
}
} else {
}
}
break;
}

var seq__31267_31295 = cljs.core.seq.call(null,children);
var chunk__31268_31296 = null;
var count__31269_31297 = (0);
var i__31270_31298 = (0);
while(true){
if((i__31270_31298 < count__31269_31297)){
var ch_31299 = cljs.core._nth.call(null,chunk__31268_31296,i__31270_31298);
e.appendChild(ch_31299);

var G__31300 = seq__31267_31295;
var G__31301 = chunk__31268_31296;
var G__31302 = count__31269_31297;
var G__31303 = (i__31270_31298 + (1));
seq__31267_31295 = G__31300;
chunk__31268_31296 = G__31301;
count__31269_31297 = G__31302;
i__31270_31298 = G__31303;
continue;
} else {
var temp__4425__auto___31304 = cljs.core.seq.call(null,seq__31267_31295);
if(temp__4425__auto___31304){
var seq__31267_31305__$1 = temp__4425__auto___31304;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31267_31305__$1)){
var c__17311__auto___31306 = cljs.core.chunk_first.call(null,seq__31267_31305__$1);
var G__31307 = cljs.core.chunk_rest.call(null,seq__31267_31305__$1);
var G__31308 = c__17311__auto___31306;
var G__31309 = cljs.core.count.call(null,c__17311__auto___31306);
var G__31310 = (0);
seq__31267_31295 = G__31307;
chunk__31268_31296 = G__31308;
count__31269_31297 = G__31309;
i__31270_31298 = G__31310;
continue;
} else {
var ch_31311 = cljs.core.first.call(null,seq__31267_31305__$1);
e.appendChild(ch_31311);

var G__31312 = cljs.core.next.call(null,seq__31267_31305__$1);
var G__31313 = null;
var G__31314 = (0);
var G__31315 = (0);
seq__31267_31295 = G__31312;
chunk__31268_31296 = G__31313;
count__31269_31297 = G__31314;
i__31270_31298 = G__31315;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq31260){
var G__31261 = cljs.core.first.call(null,seq31260);
var seq31260__$1 = cljs.core.next.call(null,seq31260);
var G__31262 = cljs.core.first.call(null,seq31260__$1);
var seq31260__$2 = cljs.core.next.call(null,seq31260__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__31261,G__31262,seq31260__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__17422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17425__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17426__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__17422__auto__,prefer_table__17423__auto__,method_cache__17424__auto__,cached_hierarchy__17425__auto__,hierarchy__17426__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__17422__auto__,prefer_table__17423__auto__,method_cache__17424__auto__,cached_hierarchy__17425__auto__,hierarchy__17426__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17426__auto__,method_table__17422__auto__,prefer_table__17423__auto__,method_cache__17424__auto__,cached_hierarchy__17425__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_31316 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_31316.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_31316.innerHTML = [cljs.core.str(figwheel.client.heads_up.clojure_symbol_svg)].join('');

el_31316.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_31316);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__31317,st_map){
var map__31322 = p__31317;
var map__31322__$1 = ((((!((map__31322 == null)))?((((map__31322.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31322.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31322):map__31322);
var container_el = cljs.core.get.call(null,map__31322__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__31322,map__31322__$1,container_el){
return (function (p__31324){
var vec__31325 = p__31324;
var k = cljs.core.nth.call(null,vec__31325,(0),null);
var v = cljs.core.nth.call(null,vec__31325,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__31322,map__31322__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__31326,dom_str){
var map__31329 = p__31326;
var map__31329__$1 = ((((!((map__31329 == null)))?((((map__31329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31329):map__31329);
var c = map__31329__$1;
var content_area_el = cljs.core.get.call(null,map__31329__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__31331){
var map__31334 = p__31331;
var map__31334__$1 = ((((!((map__31334 == null)))?((((map__31334.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31334.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31334):map__31334);
var content_area_el = cljs.core.get.call(null,map__31334__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__){
return (function (state_31377){
var state_val_31378 = (state_31377[(1)]);
if((state_val_31378 === (1))){
var inst_31362 = (state_31377[(7)]);
var inst_31362__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31363 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31364 = ["10px","10px","100%","68px","1.0"];
var inst_31365 = cljs.core.PersistentHashMap.fromArrays(inst_31363,inst_31364);
var inst_31366 = cljs.core.merge.call(null,inst_31365,style);
var inst_31367 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31362__$1,inst_31366);
var inst_31368 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31362__$1,msg);
var inst_31369 = cljs.core.async.timeout.call(null,(300));
var state_31377__$1 = (function (){var statearr_31379 = state_31377;
(statearr_31379[(7)] = inst_31362__$1);

(statearr_31379[(8)] = inst_31367);

(statearr_31379[(9)] = inst_31368);

return statearr_31379;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31377__$1,(2),inst_31369);
} else {
if((state_val_31378 === (2))){
var inst_31362 = (state_31377[(7)]);
var inst_31371 = (state_31377[(2)]);
var inst_31372 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_31373 = ["auto"];
var inst_31374 = cljs.core.PersistentHashMap.fromArrays(inst_31372,inst_31373);
var inst_31375 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31362,inst_31374);
var state_31377__$1 = (function (){var statearr_31380 = state_31377;
(statearr_31380[(10)] = inst_31371);

return statearr_31380;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31377__$1,inst_31375);
} else {
return null;
}
}
});})(c__24095__auto__))
;
return ((function (switch__24030__auto__,c__24095__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto____0 = (function (){
var statearr_31384 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31384[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto__);

(statearr_31384[(1)] = (1));

return statearr_31384;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto____1 = (function (state_31377){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_31377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e31385){if((e31385 instanceof Object)){
var ex__24034__auto__ = e31385;
var statearr_31386_31388 = state_31377;
(statearr_31386_31388[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31385;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31389 = state_31377;
state_31377 = G__31389;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto__ = function(state_31377){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto____1.call(this,state_31377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__))
})();
var state__24097__auto__ = (function (){var statearr_31387 = f__24096__auto__.call(null);
(statearr_31387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_31387;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__))
);

return c__24095__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__31391 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__31391,(0),null);
var ln = cljs.core.nth.call(null,vec__31391,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__31394 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__31394,(0),null);
var file_line = cljs.core.nth.call(null,vec__31394,(1),null);
var file_column = cljs.core.nth.call(null,vec__31394,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__31394,file_name,file_line,file_column){
return (function (p1__31392_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__31392_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__31394,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__16508__auto__ = file_line;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
var and__16496__auto__ = cause;
if(cljs.core.truth_(and__16496__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__16496__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__31397 = figwheel.client.heads_up.ensure_container.call(null);
var map__31397__$1 = ((((!((map__31397 == null)))?((((map__31397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31397):map__31397);
var content_area_el = cljs.core.get.call(null,map__31397__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__){
return (function (state_31445){
var state_val_31446 = (state_31445[(1)]);
if((state_val_31446 === (1))){
var inst_31428 = (state_31445[(7)]);
var inst_31428__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_31429 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_31430 = ["0.0"];
var inst_31431 = cljs.core.PersistentHashMap.fromArrays(inst_31429,inst_31430);
var inst_31432 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31428__$1,inst_31431);
var inst_31433 = cljs.core.async.timeout.call(null,(300));
var state_31445__$1 = (function (){var statearr_31447 = state_31445;
(statearr_31447[(8)] = inst_31432);

(statearr_31447[(7)] = inst_31428__$1);

return statearr_31447;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31445__$1,(2),inst_31433);
} else {
if((state_val_31446 === (2))){
var inst_31428 = (state_31445[(7)]);
var inst_31435 = (state_31445[(2)]);
var inst_31436 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_31437 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_31438 = cljs.core.PersistentHashMap.fromArrays(inst_31436,inst_31437);
var inst_31439 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_31428,inst_31438);
var inst_31440 = cljs.core.async.timeout.call(null,(200));
var state_31445__$1 = (function (){var statearr_31448 = state_31445;
(statearr_31448[(9)] = inst_31435);

(statearr_31448[(10)] = inst_31439);

return statearr_31448;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31445__$1,(3),inst_31440);
} else {
if((state_val_31446 === (3))){
var inst_31428 = (state_31445[(7)]);
var inst_31442 = (state_31445[(2)]);
var inst_31443 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_31428,"");
var state_31445__$1 = (function (){var statearr_31449 = state_31445;
(statearr_31449[(11)] = inst_31442);

return statearr_31449;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31445__$1,inst_31443);
} else {
return null;
}
}
}
});})(c__24095__auto__))
;
return ((function (switch__24030__auto__,c__24095__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__24031__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__24031__auto____0 = (function (){
var statearr_31453 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31453[(0)] = figwheel$client$heads_up$clear_$_state_machine__24031__auto__);

(statearr_31453[(1)] = (1));

return statearr_31453;
});
var figwheel$client$heads_up$clear_$_state_machine__24031__auto____1 = (function (state_31445){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_31445);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e31454){if((e31454 instanceof Object)){
var ex__24034__auto__ = e31454;
var statearr_31455_31457 = state_31445;
(statearr_31455_31457[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31445);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31458 = state_31445;
state_31445 = G__31458;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__24031__auto__ = function(state_31445){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__24031__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__24031__auto____1.call(this,state_31445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__24031__auto____0;
figwheel$client$heads_up$clear_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__24031__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__))
})();
var state__24097__auto__ = (function (){var statearr_31456 = f__24096__auto__.call(null);
(statearr_31456[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_31456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__))
);

return c__24095__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__){
return (function (state_31490){
var state_val_31491 = (state_31490[(1)]);
if((state_val_31491 === (1))){
var inst_31480 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31490__$1,(2),inst_31480);
} else {
if((state_val_31491 === (2))){
var inst_31482 = (state_31490[(2)]);
var inst_31483 = cljs.core.async.timeout.call(null,(400));
var state_31490__$1 = (function (){var statearr_31492 = state_31490;
(statearr_31492[(7)] = inst_31482);

return statearr_31492;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31490__$1,(3),inst_31483);
} else {
if((state_val_31491 === (3))){
var inst_31485 = (state_31490[(2)]);
var inst_31486 = figwheel.client.heads_up.clear.call(null);
var state_31490__$1 = (function (){var statearr_31493 = state_31490;
(statearr_31493[(8)] = inst_31485);

return statearr_31493;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31490__$1,(4),inst_31486);
} else {
if((state_val_31491 === (4))){
var inst_31488 = (state_31490[(2)]);
var state_31490__$1 = state_31490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31490__$1,inst_31488);
} else {
return null;
}
}
}
}
});})(c__24095__auto__))
;
return ((function (switch__24030__auto__,c__24095__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto____0 = (function (){
var statearr_31497 = [null,null,null,null,null,null,null,null,null];
(statearr_31497[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto__);

(statearr_31497[(1)] = (1));

return statearr_31497;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto____1 = (function (state_31490){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_31490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e31498){if((e31498 instanceof Object)){
var ex__24034__auto__ = e31498;
var statearr_31499_31501 = state_31490;
(statearr_31499_31501[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31498;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31502 = state_31490;
state_31490 = G__31502;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto__ = function(state_31490){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto____1.call(this,state_31490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__))
})();
var state__24097__auto__ = (function (){var statearr_31500 = f__24096__auto__.call(null);
(statearr_31500[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_31500;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__))
);

return c__24095__auto__;
});
figwheel.client.heads_up.clojure_symbol_svg = "<?xml version='1.0' encoding='UTF-8' ?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' viewBox='0 0 100 99' version='1.1' xmlns='http://www.w3.org/2000/svg' style='position:absolute; top:9px; left: 10px;'>\n<circle fill='rgba(255,255,255,0.5)' cx='49.75' cy='49.5' r='48.5'/>\n<path fill='#5881d8' d=' M 39.30 6.22 C 51.71 3.11 65.45 5.64 75.83 13.16 C 88.68 22.10 96.12 38.22 94.43 53.80 C 93.66 60.11 89.40 66.01 83.37 68.24 C 79.21 69.97 74.64 69.78 70.23 69.80 C 80.77 59.67 81.41 41.33 71.45 30.60 C 63.60 21.32 49.75 18.52 38.65 23.16 C 31.27 18.80 21.83 18.68 14.27 22.69 C 20.65 14.79 29.32 8.56 39.30 6.22 Z' />\n<path fill='#90b4fe' d=' M 42.93 26.99 C 48.49 25.50 54.55 25.62 59.79 28.14 C 68.71 32.19 74.61 42.14 73.41 51.94 C 72.85 58.64 68.92 64.53 63.81 68.69 C 59.57 66.71 57.53 62.30 55.66 58.30 C 50.76 48.12 50.23 36.02 42.93 26.99 Z' />\n<path fill='#63b132' d=' M 12.30 33.30 C 17.11 28.49 24.33 26.90 30.91 28.06 C 25.22 33.49 21.44 41.03 21.46 48.99 C 21.11 58.97 26.58 68.76 35.08 73.92 C 43.28 79.06 53.95 79.28 62.66 75.29 C 70.37 77.57 78.52 77.36 86.31 75.57 C 80.05 84.00 70.94 90.35 60.69 92.84 C 48.02 96.03 34.00 93.24 23.56 85.37 C 12.16 77.09 5.12 63.11 5.44 49.00 C 5.15 43.06 8.22 37.42 12.30 33.30 Z' />\n<path fill='#91dc47' d=' M 26.94 54.00 C 24.97 45.06 29.20 35.59 36.45 30.24 C 41.99 33.71 44.23 40.14 46.55 45.91 C 43.00 53.40 38.44 60.46 35.94 68.42 C 31.50 64.74 27.96 59.77 26.94 54.00 Z' />\n<path fill='#91dc47' d=' M 41.97 71.80 C 41.46 64.27 45.31 57.52 48.11 50.80 C 50.40 58.13 51.84 66.19 57.18 72.06 C 52.17 73.37 46.93 73.26 41.97 71.80 Z' />\n</svg>";

//# sourceMappingURL=heads_up.js.map?rel=1440252247377