// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__30472__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30472 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30473__i = 0, G__30473__a = new Array(arguments.length -  0);
while (G__30473__i < G__30473__a.length) {G__30473__a[G__30473__i] = arguments[G__30473__i + 0]; ++G__30473__i;}
  args = new cljs.core.IndexedSeq(G__30473__a,0);
} 
return G__30472__delegate.call(this,args);};
G__30472.cljs$lang$maxFixedArity = 0;
G__30472.cljs$lang$applyTo = (function (arglist__30474){
var args = cljs.core.seq(arglist__30474);
return G__30472__delegate(args);
});
G__30472.cljs$core$IFn$_invoke$arity$variadic = G__30472__delegate;
return G__30472;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__30475){
var map__30478 = p__30475;
var map__30478__$1 = ((((!((map__30478 == null)))?((((map__30478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30478):map__30478);
var message = cljs.core.get.call(null,map__30478__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__30478__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16508__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16496__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16496__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16496__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__24095__auto___30608 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___30608,ch){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___30608,ch){
return (function (state_30582){
var state_val_30583 = (state_30582[(1)]);
if((state_val_30583 === (7))){
var inst_30578 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30584_30609 = state_30582__$1;
(statearr_30584_30609[(2)] = inst_30578);

(statearr_30584_30609[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (1))){
var state_30582__$1 = state_30582;
var statearr_30585_30610 = state_30582__$1;
(statearr_30585_30610[(2)] = null);

(statearr_30585_30610[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (4))){
var inst_30546 = (state_30582[(7)]);
var inst_30546__$1 = (state_30582[(2)]);
var state_30582__$1 = (function (){var statearr_30586 = state_30582;
(statearr_30586[(7)] = inst_30546__$1);

return statearr_30586;
})();
if(cljs.core.truth_(inst_30546__$1)){
var statearr_30587_30611 = state_30582__$1;
(statearr_30587_30611[(1)] = (5));

} else {
var statearr_30588_30612 = state_30582__$1;
(statearr_30588_30612[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (13))){
var state_30582__$1 = state_30582;
var statearr_30589_30613 = state_30582__$1;
(statearr_30589_30613[(2)] = null);

(statearr_30589_30613[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (6))){
var state_30582__$1 = state_30582;
var statearr_30590_30614 = state_30582__$1;
(statearr_30590_30614[(2)] = null);

(statearr_30590_30614[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (3))){
var inst_30580 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30582__$1,inst_30580);
} else {
if((state_val_30583 === (12))){
var inst_30553 = (state_30582[(8)]);
var inst_30566 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_30553);
var inst_30567 = cljs.core.first.call(null,inst_30566);
var inst_30568 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_30567);
var inst_30569 = console.warn("Figwheel: Not loading code with warnings - ",inst_30568);
var state_30582__$1 = state_30582;
var statearr_30591_30615 = state_30582__$1;
(statearr_30591_30615[(2)] = inst_30569);

(statearr_30591_30615[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (2))){
var state_30582__$1 = state_30582;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30582__$1,(4),ch);
} else {
if((state_val_30583 === (11))){
var inst_30562 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30592_30616 = state_30582__$1;
(statearr_30592_30616[(2)] = inst_30562);

(statearr_30592_30616[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (9))){
var inst_30552 = (state_30582[(9)]);
var inst_30564 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_30552,opts);
var state_30582__$1 = state_30582;
if(cljs.core.truth_(inst_30564)){
var statearr_30593_30617 = state_30582__$1;
(statearr_30593_30617[(1)] = (12));

} else {
var statearr_30594_30618 = state_30582__$1;
(statearr_30594_30618[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (5))){
var inst_30546 = (state_30582[(7)]);
var inst_30552 = (state_30582[(9)]);
var inst_30548 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_30549 = (new cljs.core.PersistentArrayMap(null,2,inst_30548,null));
var inst_30550 = (new cljs.core.PersistentHashSet(null,inst_30549,null));
var inst_30551 = figwheel.client.focus_msgs.call(null,inst_30550,inst_30546);
var inst_30552__$1 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_30551);
var inst_30553 = cljs.core.first.call(null,inst_30551);
var inst_30554 = figwheel.client.reload_file_state_QMARK_.call(null,inst_30552__$1,opts);
var state_30582__$1 = (function (){var statearr_30595 = state_30582;
(statearr_30595[(8)] = inst_30553);

(statearr_30595[(9)] = inst_30552__$1);

return statearr_30595;
})();
if(cljs.core.truth_(inst_30554)){
var statearr_30596_30619 = state_30582__$1;
(statearr_30596_30619[(1)] = (8));

} else {
var statearr_30597_30620 = state_30582__$1;
(statearr_30597_30620[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (14))){
var inst_30572 = (state_30582[(2)]);
var state_30582__$1 = state_30582;
var statearr_30598_30621 = state_30582__$1;
(statearr_30598_30621[(2)] = inst_30572);

(statearr_30598_30621[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (10))){
var inst_30574 = (state_30582[(2)]);
var state_30582__$1 = (function (){var statearr_30599 = state_30582;
(statearr_30599[(10)] = inst_30574);

return statearr_30599;
})();
var statearr_30600_30622 = state_30582__$1;
(statearr_30600_30622[(2)] = null);

(statearr_30600_30622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30583 === (8))){
var inst_30553 = (state_30582[(8)]);
var inst_30556 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_30557 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_30553);
var inst_30558 = cljs.core.async.timeout.call(null,(1000));
var inst_30559 = [inst_30557,inst_30558];
var inst_30560 = (new cljs.core.PersistentVector(null,2,(5),inst_30556,inst_30559,null));
var state_30582__$1 = state_30582;
return cljs.core.async.ioc_alts_BANG_.call(null,state_30582__$1,(11),inst_30560);
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
});})(c__24095__auto___30608,ch))
;
return ((function (switch__24030__auto__,c__24095__auto___30608,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__24031__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__24031__auto____0 = (function (){
var statearr_30604 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30604[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__24031__auto__);

(statearr_30604[(1)] = (1));

return statearr_30604;
});
var figwheel$client$file_reloader_plugin_$_state_machine__24031__auto____1 = (function (state_30582){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_30582);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e30605){if((e30605 instanceof Object)){
var ex__24034__auto__ = e30605;
var statearr_30606_30623 = state_30582;
(statearr_30606_30623[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30582);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30605;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30624 = state_30582;
state_30582 = G__30624;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__24031__auto__ = function(state_30582){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__24031__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__24031__auto____1.call(this,state_30582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__24031__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__24031__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___30608,ch))
})();
var state__24097__auto__ = (function (){var statearr_30607 = f__24096__auto__.call(null);
(statearr_30607[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___30608);

return statearr_30607;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___30608,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__30625_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__30625_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
var base_path_30632 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_30632){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_30630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_30631 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_30630,_STAR_print_newline_STAR_30631,base_path_30632){
return (function() { 
var G__30633__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__30633 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30634__i = 0, G__30634__a = new Array(arguments.length -  0);
while (G__30634__i < G__30634__a.length) {G__30634__a[G__30634__i] = arguments[G__30634__i + 0]; ++G__30634__i;}
  args = new cljs.core.IndexedSeq(G__30634__a,0);
} 
return G__30633__delegate.call(this,args);};
G__30633.cljs$lang$maxFixedArity = 0;
G__30633.cljs$lang$applyTo = (function (arglist__30635){
var args = cljs.core.seq(arglist__30635);
return G__30633__delegate(args);
});
G__30633.cljs$core$IFn$_invoke$arity$variadic = G__30633__delegate;
return G__30633;
})()
;})(_STAR_print_fn_STAR_30630,_STAR_print_newline_STAR_30631,base_path_30632))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_30631;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_30630;
}}catch (e30629){if((e30629 instanceof Error)){
var e = e30629;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_30632], null));
} else {
var e = e30629;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_30632))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__30636){
var map__30643 = p__30636;
var map__30643__$1 = ((((!((map__30643 == null)))?((((map__30643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30643):map__30643);
var opts = map__30643__$1;
var build_id = cljs.core.get.call(null,map__30643__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__30643,map__30643__$1,opts,build_id){
return (function (p__30645){
var vec__30646 = p__30645;
var map__30647 = cljs.core.nth.call(null,vec__30646,(0),null);
var map__30647__$1 = ((((!((map__30647 == null)))?((((map__30647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30647):map__30647);
var msg = map__30647__$1;
var msg_name = cljs.core.get.call(null,map__30647__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30646,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__30646,map__30647,map__30647__$1,msg,msg_name,_,map__30643,map__30643__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__30646,map__30647,map__30647__$1,msg,msg_name,_,map__30643,map__30643__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__30643,map__30643__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__30653){
var vec__30654 = p__30653;
var map__30655 = cljs.core.nth.call(null,vec__30654,(0),null);
var map__30655__$1 = ((((!((map__30655 == null)))?((((map__30655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30655):map__30655);
var msg = map__30655__$1;
var msg_name = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30654,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__30657){
var map__30667 = p__30657;
var map__30667__$1 = ((((!((map__30667 == null)))?((((map__30667.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30667.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30667):map__30667);
var on_compile_warning = cljs.core.get.call(null,map__30667__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__30667__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__30667,map__30667__$1,on_compile_warning,on_compile_fail){
return (function (p__30669){
var vec__30670 = p__30669;
var map__30671 = cljs.core.nth.call(null,vec__30670,(0),null);
var map__30671__$1 = ((((!((map__30671 == null)))?((((map__30671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30671):map__30671);
var msg = map__30671__$1;
var msg_name = cljs.core.get.call(null,map__30671__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__30670,(1));
var pred__30673 = cljs.core._EQ_;
var expr__30674 = msg_name;
if(cljs.core.truth_(pred__30673.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30674))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30673.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30674))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__30667,map__30667__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__,msg_hist,msg_names,msg){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__,msg_hist,msg_names,msg){
return (function (state_30875){
var state_val_30876 = (state_30875[(1)]);
if((state_val_30876 === (7))){
var inst_30809 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30877_30918 = state_30875__$1;
(statearr_30877_30918[(2)] = inst_30809);

(statearr_30877_30918[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (20))){
var inst_30837 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30837)){
var statearr_30878_30919 = state_30875__$1;
(statearr_30878_30919[(1)] = (22));

} else {
var statearr_30879_30920 = state_30875__$1;
(statearr_30879_30920[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (27))){
var inst_30849 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30850 = figwheel.client.heads_up.display_warning.call(null,inst_30849);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(30),inst_30850);
} else {
if((state_val_30876 === (1))){
var inst_30797 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30797)){
var statearr_30880_30921 = state_30875__$1;
(statearr_30880_30921[(1)] = (2));

} else {
var statearr_30881_30922 = state_30875__$1;
(statearr_30881_30922[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (24))){
var inst_30865 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30882_30923 = state_30875__$1;
(statearr_30882_30923[(2)] = inst_30865);

(statearr_30882_30923[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (4))){
var inst_30873 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30875__$1,inst_30873);
} else {
if((state_val_30876 === (15))){
var inst_30825 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30826 = figwheel.client.format_messages.call(null,inst_30825);
var inst_30827 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30828 = figwheel.client.heads_up.display_error.call(null,inst_30826,inst_30827);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(18),inst_30828);
} else {
if((state_val_30876 === (21))){
var inst_30867 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30883_30924 = state_30875__$1;
(statearr_30883_30924[(2)] = inst_30867);

(statearr_30883_30924[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (31))){
var inst_30856 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(34),inst_30856);
} else {
if((state_val_30876 === (32))){
var state_30875__$1 = state_30875;
var statearr_30884_30925 = state_30875__$1;
(statearr_30884_30925[(2)] = null);

(statearr_30884_30925[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (33))){
var inst_30861 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30885_30926 = state_30875__$1;
(statearr_30885_30926[(2)] = inst_30861);

(statearr_30885_30926[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (13))){
var inst_30815 = (state_30875[(2)]);
var inst_30816 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30817 = figwheel.client.format_messages.call(null,inst_30816);
var inst_30818 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30819 = figwheel.client.heads_up.display_error.call(null,inst_30817,inst_30818);
var state_30875__$1 = (function (){var statearr_30886 = state_30875;
(statearr_30886[(7)] = inst_30815);

return statearr_30886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(14),inst_30819);
} else {
if((state_val_30876 === (22))){
var inst_30839 = figwheel.client.heads_up.clear.call(null);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(25),inst_30839);
} else {
if((state_val_30876 === (29))){
var inst_30863 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30887_30927 = state_30875__$1;
(statearr_30887_30927[(2)] = inst_30863);

(statearr_30887_30927[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (6))){
var inst_30805 = figwheel.client.heads_up.clear.call(null);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(9),inst_30805);
} else {
if((state_val_30876 === (28))){
var inst_30854 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30854)){
var statearr_30888_30928 = state_30875__$1;
(statearr_30888_30928[(1)] = (31));

} else {
var statearr_30889_30929 = state_30875__$1;
(statearr_30889_30929[(1)] = (32));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (25))){
var inst_30841 = (state_30875[(2)]);
var inst_30842 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30843 = figwheel.client.heads_up.display_warning.call(null,inst_30842);
var state_30875__$1 = (function (){var statearr_30890 = state_30875;
(statearr_30890[(8)] = inst_30841);

return statearr_30890;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(26),inst_30843);
} else {
if((state_val_30876 === (34))){
var inst_30858 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30891_30930 = state_30875__$1;
(statearr_30891_30930[(2)] = inst_30858);

(statearr_30891_30930[(1)] = (33));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (17))){
var inst_30869 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30892_30931 = state_30875__$1;
(statearr_30892_30931[(2)] = inst_30869);

(statearr_30892_30931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (3))){
var inst_30811 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30811)){
var statearr_30893_30932 = state_30875__$1;
(statearr_30893_30932[(1)] = (10));

} else {
var statearr_30894_30933 = state_30875__$1;
(statearr_30894_30933[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (12))){
var inst_30871 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30895_30934 = state_30875__$1;
(statearr_30895_30934[(2)] = inst_30871);

(statearr_30895_30934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (2))){
var inst_30799 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30799)){
var statearr_30896_30935 = state_30875__$1;
(statearr_30896_30935[(1)] = (5));

} else {
var statearr_30897_30936 = state_30875__$1;
(statearr_30897_30936[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (23))){
var inst_30847 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30847)){
var statearr_30898_30937 = state_30875__$1;
(statearr_30898_30937[(1)] = (27));

} else {
var statearr_30899_30938 = state_30875__$1;
(statearr_30899_30938[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (19))){
var inst_30834 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30835 = figwheel.client.heads_up.append_message.call(null,inst_30834);
var state_30875__$1 = state_30875;
var statearr_30900_30939 = state_30875__$1;
(statearr_30900_30939[(2)] = inst_30835);

(statearr_30900_30939[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (11))){
var inst_30823 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30823)){
var statearr_30901_30940 = state_30875__$1;
(statearr_30901_30940[(1)] = (15));

} else {
var statearr_30902_30941 = state_30875__$1;
(statearr_30902_30941[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (9))){
var inst_30807 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30903_30942 = state_30875__$1;
(statearr_30903_30942[(2)] = inst_30807);

(statearr_30903_30942[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (5))){
var inst_30801 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(8),inst_30801);
} else {
if((state_val_30876 === (14))){
var inst_30821 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30904_30943 = state_30875__$1;
(statearr_30904_30943[(2)] = inst_30821);

(statearr_30904_30943[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (26))){
var inst_30845 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30905_30944 = state_30875__$1;
(statearr_30905_30944[(2)] = inst_30845);

(statearr_30905_30944[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (16))){
var inst_30832 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30875__$1 = state_30875;
if(cljs.core.truth_(inst_30832)){
var statearr_30906_30945 = state_30875__$1;
(statearr_30906_30945[(1)] = (19));

} else {
var statearr_30907_30946 = state_30875__$1;
(statearr_30907_30946[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (30))){
var inst_30852 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30908_30947 = state_30875__$1;
(statearr_30908_30947[(2)] = inst_30852);

(statearr_30908_30947[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (10))){
var inst_30813 = figwheel.client.heads_up.clear.call(null);
var state_30875__$1 = state_30875;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30875__$1,(13),inst_30813);
} else {
if((state_val_30876 === (18))){
var inst_30830 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30909_30948 = state_30875__$1;
(statearr_30909_30948[(2)] = inst_30830);

(statearr_30909_30948[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30876 === (8))){
var inst_30803 = (state_30875[(2)]);
var state_30875__$1 = state_30875;
var statearr_30910_30949 = state_30875__$1;
(statearr_30910_30949[(2)] = inst_30803);

(statearr_30910_30949[(1)] = (7));


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
});})(c__24095__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__24030__auto__,c__24095__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto____0 = (function (){
var statearr_30914 = [null,null,null,null,null,null,null,null,null];
(statearr_30914[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto__);

(statearr_30914[(1)] = (1));

return statearr_30914;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto____1 = (function (state_30875){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_30875);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e30915){if((e30915 instanceof Object)){
var ex__24034__auto__ = e30915;
var statearr_30916_30950 = state_30875;
(statearr_30916_30950[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30875);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30951 = state_30875;
state_30875 = G__30951;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto__ = function(state_30875){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto____1.call(this,state_30875);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__,msg_hist,msg_names,msg))
})();
var state__24097__auto__ = (function (){var statearr_30917 = f__24096__auto__.call(null);
(statearr_30917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_30917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__,msg_hist,msg_names,msg))
);

return c__24095__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__24095__auto___31014 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___31014,ch){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___31014,ch){
return (function (state_30997){
var state_val_30998 = (state_30997[(1)]);
if((state_val_30998 === (1))){
var state_30997__$1 = state_30997;
var statearr_30999_31015 = state_30997__$1;
(statearr_30999_31015[(2)] = null);

(statearr_30999_31015[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (2))){
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30997__$1,(4),ch);
} else {
if((state_val_30998 === (3))){
var inst_30995 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30997__$1,inst_30995);
} else {
if((state_val_30998 === (4))){
var inst_30985 = (state_30997[(7)]);
var inst_30985__$1 = (state_30997[(2)]);
var state_30997__$1 = (function (){var statearr_31000 = state_30997;
(statearr_31000[(7)] = inst_30985__$1);

return statearr_31000;
})();
if(cljs.core.truth_(inst_30985__$1)){
var statearr_31001_31016 = state_30997__$1;
(statearr_31001_31016[(1)] = (5));

} else {
var statearr_31002_31017 = state_30997__$1;
(statearr_31002_31017[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (5))){
var inst_30985 = (state_30997[(7)]);
var inst_30987 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30985);
var state_30997__$1 = state_30997;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30997__$1,(8),inst_30987);
} else {
if((state_val_30998 === (6))){
var state_30997__$1 = state_30997;
var statearr_31003_31018 = state_30997__$1;
(statearr_31003_31018[(2)] = null);

(statearr_31003_31018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (7))){
var inst_30993 = (state_30997[(2)]);
var state_30997__$1 = state_30997;
var statearr_31004_31019 = state_30997__$1;
(statearr_31004_31019[(2)] = inst_30993);

(statearr_31004_31019[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30998 === (8))){
var inst_30989 = (state_30997[(2)]);
var state_30997__$1 = (function (){var statearr_31005 = state_30997;
(statearr_31005[(8)] = inst_30989);

return statearr_31005;
})();
var statearr_31006_31020 = state_30997__$1;
(statearr_31006_31020[(2)] = null);

(statearr_31006_31020[(1)] = (2));


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
});})(c__24095__auto___31014,ch))
;
return ((function (switch__24030__auto__,c__24095__auto___31014,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__24031__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__24031__auto____0 = (function (){
var statearr_31010 = [null,null,null,null,null,null,null,null,null];
(statearr_31010[(0)] = figwheel$client$heads_up_plugin_$_state_machine__24031__auto__);

(statearr_31010[(1)] = (1));

return statearr_31010;
});
var figwheel$client$heads_up_plugin_$_state_machine__24031__auto____1 = (function (state_30997){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_30997);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e31011){if((e31011 instanceof Object)){
var ex__24034__auto__ = e31011;
var statearr_31012_31021 = state_30997;
(statearr_31012_31021[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30997);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31011;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31022 = state_30997;
state_30997 = G__31022;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__24031__auto__ = function(state_30997){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__24031__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__24031__auto____1.call(this,state_30997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__24031__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__24031__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___31014,ch))
})();
var state__24097__auto__ = (function (){var statearr_31013 = f__24096__auto__.call(null);
(statearr_31013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___31014);

return statearr_31013;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___31014,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__){
return (function (state_31043){
var state_val_31044 = (state_31043[(1)]);
if((state_val_31044 === (1))){
var inst_31038 = cljs.core.async.timeout.call(null,(3000));
var state_31043__$1 = state_31043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31043__$1,(2),inst_31038);
} else {
if((state_val_31044 === (2))){
var inst_31040 = (state_31043[(2)]);
var inst_31041 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_31043__$1 = (function (){var statearr_31045 = state_31043;
(statearr_31045[(7)] = inst_31040);

return statearr_31045;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31043__$1,inst_31041);
} else {
return null;
}
}
});})(c__24095__auto__))
;
return ((function (switch__24030__auto__,c__24095__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__24031__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__24031__auto____0 = (function (){
var statearr_31049 = [null,null,null,null,null,null,null,null];
(statearr_31049[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__24031__auto__);

(statearr_31049[(1)] = (1));

return statearr_31049;
});
var figwheel$client$enforce_project_plugin_$_state_machine__24031__auto____1 = (function (state_31043){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_31043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e31050){if((e31050 instanceof Object)){
var ex__24034__auto__ = e31050;
var statearr_31051_31053 = state_31043;
(statearr_31051_31053[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31050;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31054 = state_31043;
state_31043 = G__31054;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__24031__auto__ = function(state_31043){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__24031__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__24031__auto____1.call(this,state_31043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__24031__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__24031__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__))
})();
var state__24097__auto__ = (function (){var statearr_31052 = f__24096__auto__.call(null);
(statearr_31052[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_31052;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__))
);

return c__24095__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__31055){
var map__31062 = p__31055;
var map__31062__$1 = ((((!((map__31062 == null)))?((((map__31062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31062):map__31062);
var ed = map__31062__$1;
var formatted_exception = cljs.core.get.call(null,map__31062__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__31062__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__31062__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__31064_31068 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__31065_31069 = null;
var count__31066_31070 = (0);
var i__31067_31071 = (0);
while(true){
if((i__31067_31071 < count__31066_31070)){
var msg_31072 = cljs.core._nth.call(null,chunk__31065_31069,i__31067_31071);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31072);

var G__31073 = seq__31064_31068;
var G__31074 = chunk__31065_31069;
var G__31075 = count__31066_31070;
var G__31076 = (i__31067_31071 + (1));
seq__31064_31068 = G__31073;
chunk__31065_31069 = G__31074;
count__31066_31070 = G__31075;
i__31067_31071 = G__31076;
continue;
} else {
var temp__4425__auto___31077 = cljs.core.seq.call(null,seq__31064_31068);
if(temp__4425__auto___31077){
var seq__31064_31078__$1 = temp__4425__auto___31077;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31064_31078__$1)){
var c__17311__auto___31079 = cljs.core.chunk_first.call(null,seq__31064_31078__$1);
var G__31080 = cljs.core.chunk_rest.call(null,seq__31064_31078__$1);
var G__31081 = c__17311__auto___31079;
var G__31082 = cljs.core.count.call(null,c__17311__auto___31079);
var G__31083 = (0);
seq__31064_31068 = G__31080;
chunk__31065_31069 = G__31081;
count__31066_31070 = G__31082;
i__31067_31071 = G__31083;
continue;
} else {
var msg_31084 = cljs.core.first.call(null,seq__31064_31078__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_31084);

var G__31085 = cljs.core.next.call(null,seq__31064_31078__$1);
var G__31086 = null;
var G__31087 = (0);
var G__31088 = (0);
seq__31064_31068 = G__31085;
chunk__31065_31069 = G__31086;
count__31066_31070 = G__31087;
i__31067_31071 = G__31088;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__31089){
var map__31092 = p__31089;
var map__31092__$1 = ((((!((map__31092 == null)))?((((map__31092.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31092.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31092):map__31092);
var w = map__31092__$1;
var message = cljs.core.get.call(null,map__31092__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704),new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[true,figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,false,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16496__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16496__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16496__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__31100 = cljs.core.seq.call(null,plugins);
var chunk__31101 = null;
var count__31102 = (0);
var i__31103 = (0);
while(true){
if((i__31103 < count__31102)){
var vec__31104 = cljs.core._nth.call(null,chunk__31101,i__31103);
var k = cljs.core.nth.call(null,vec__31104,(0),null);
var plugin = cljs.core.nth.call(null,vec__31104,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31106 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31100,chunk__31101,count__31102,i__31103,pl_31106,vec__31104,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_31106.call(null,msg_hist);
});})(seq__31100,chunk__31101,count__31102,i__31103,pl_31106,vec__31104,k,plugin))
);
} else {
}

var G__31107 = seq__31100;
var G__31108 = chunk__31101;
var G__31109 = count__31102;
var G__31110 = (i__31103 + (1));
seq__31100 = G__31107;
chunk__31101 = G__31108;
count__31102 = G__31109;
i__31103 = G__31110;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31100);
if(temp__4425__auto__){
var seq__31100__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31100__$1)){
var c__17311__auto__ = cljs.core.chunk_first.call(null,seq__31100__$1);
var G__31111 = cljs.core.chunk_rest.call(null,seq__31100__$1);
var G__31112 = c__17311__auto__;
var G__31113 = cljs.core.count.call(null,c__17311__auto__);
var G__31114 = (0);
seq__31100 = G__31111;
chunk__31101 = G__31112;
count__31102 = G__31113;
i__31103 = G__31114;
continue;
} else {
var vec__31105 = cljs.core.first.call(null,seq__31100__$1);
var k = cljs.core.nth.call(null,vec__31105,(0),null);
var plugin = cljs.core.nth.call(null,vec__31105,(1),null);
if(cljs.core.truth_(plugin)){
var pl_31115 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__31100,chunk__31101,count__31102,i__31103,pl_31115,vec__31105,k,plugin,seq__31100__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_31115.call(null,msg_hist);
});})(seq__31100,chunk__31101,count__31102,i__31103,pl_31115,vec__31105,k,plugin,seq__31100__$1,temp__4425__auto__))
);
} else {
}

var G__31116 = cljs.core.next.call(null,seq__31100__$1);
var G__31117 = null;
var G__31118 = (0);
var G__31119 = (0);
seq__31100 = G__31116;
chunk__31101 = G__31117;
count__31102 = G__31118;
i__31103 = G__31119;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args31120 = [];
var len__17567__auto___31123 = arguments.length;
var i__17568__auto___31124 = (0);
while(true){
if((i__17568__auto___31124 < len__17567__auto___31123)){
args31120.push((arguments[i__17568__auto___31124]));

var G__31125 = (i__17568__auto___31124 + (1));
i__17568__auto___31124 = G__31125;
continue;
} else {
}
break;
}

var G__31122 = args31120.length;
switch (G__31122) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31120.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17574__auto__ = [];
var len__17567__auto___31131 = arguments.length;
var i__17568__auto___31132 = (0);
while(true){
if((i__17568__auto___31132 < len__17567__auto___31131)){
args__17574__auto__.push((arguments[i__17568__auto___31132]));

var G__31133 = (i__17568__auto___31132 + (1));
i__17568__auto___31132 = G__31133;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((0) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17575__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__31128){
var map__31129 = p__31128;
var map__31129__$1 = ((((!((map__31129 == null)))?((((map__31129.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31129.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31129):map__31129);
var opts = map__31129__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq31127){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq31127));
});

//# sourceMappingURL=client.js.map?rel=1440252246925