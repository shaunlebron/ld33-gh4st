// Compiled by ClojureScript 1.7.107 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.reload_file_STAR_;

figwheel.client.file_reloading.resolve_ns;
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.all_QMARK_ = (function figwheel$client$file_reloading$all_QMARK_(pred,coll){
return cljs.core.reduce.call(null,(function (p1__31569_SHARP_,p2__31570_SHARP_){
var and__16496__auto__ = p1__31569_SHARP_;
if(cljs.core.truth_(and__16496__auto__)){
return p2__31570_SHARP_;
} else {
return and__16496__auto__;
}
}),true,cljs.core.map.call(null,pred,coll));
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16508__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16508__auto__){
return or__16508__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.ns_to_js_file = (function figwheel$client$file_reloading$ns_to_js_file(ns){

return [cljs.core.str(clojure.string.replace.call(null,ns,".","/")),cljs.core.str(".js")].join('');
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){

return [cljs.core.str(figwheel.client.utils.base_url_path.call(null)),cljs.core.str(figwheel.client.file_reloading.ns_to_js_file.call(null,ns))].join('');
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
goog.isProvided = (function (x){
return false;
});

if(((cljs.core._STAR_loaded_libs_STAR_ == null)) || (cljs.core.empty_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_))){
cljs.core._STAR_loaded_libs_STAR_ = (function (){var gntp = goog.dependencies_.nameToPath;
return cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.call(null,((function (gntp){
return (function (name){
return (goog.dependencies_.visited[(gntp[name])]);
});})(gntp))
,cljs.core.js_keys.call(null,gntp)));
})();
} else {
}

goog.require = (function (name,reload){
if(cljs.core.truth_((function (){var or__16508__auto__ = !(cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,name));
if(or__16508__auto__){
return or__16508__auto__;
} else {
return reload;
}
})())){
cljs.core._STAR_loaded_libs_STAR_ = cljs.core.conj.call(null,(function (){var or__16508__auto__ = cljs.core._STAR_loaded_libs_STAR_;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),name);

return figwheel.client.file_reloading.reload_file_STAR_.call(null,figwheel.client.file_reloading.resolve_ns.call(null,name));
} else {
return null;
}
});

goog.provide = goog.exportPath_;

return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.reload_file_STAR_;
});
if(typeof figwheel.client.file_reloading.resolve_url !== 'undefined'){
} else {
figwheel.client.file_reloading.resolve_url = (function (){var method_table__17422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17425__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17426__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","resolve-url"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17426__auto__,method_table__17422__auto__,prefer_table__17423__auto__,method_cache__17424__auto__,cached_hierarchy__17425__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"default","default",-1987822328),(function (p__31571){
var map__31572 = p__31571;
var map__31572__$1 = ((((!((map__31572 == null)))?((((map__31572.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31572.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31572):map__31572);
var file = cljs.core.get.call(null,map__31572__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
return file;
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.resolve_url,new cljs.core.Keyword(null,"namespace","namespace",-377510372),(function (p__31574){
var map__31575 = p__31574;
var map__31575__$1 = ((((!((map__31575 == null)))?((((map__31575.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31575.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31575):map__31575);
var namespace = cljs.core.get.call(null,map__31575__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

return figwheel.client.file_reloading.resolve_ns.call(null,namespace);
}));
if(typeof figwheel.client.file_reloading.reload_base !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_base = (function (){var method_table__17422__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__17423__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__17424__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__17425__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__17426__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.file-reloading","reload-base"),figwheel.client.utils.host_env_QMARK_,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__17426__auto__,method_table__17422__auto__,prefer_table__17423__auto__,method_cache__17424__auto__,cached_hierarchy__17425__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"node","node",581201198),(function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(request_url)].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e31577){if((e31577 instanceof Error)){
var e = e31577;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e31577;

}
}})());
}));
cljs.core._add_method.call(null,figwheel.client.file_reloading.reload_base,new cljs.core.Keyword(null,"html","html",-998796897),(function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
}));
figwheel.client.file_reloading.reload_file_STAR_ = (function figwheel$client$file_reloading$reload_file_STAR_(var_args){
var args31578 = [];
var len__17567__auto___31581 = arguments.length;
var i__17568__auto___31582 = (0);
while(true){
if((i__17568__auto___31582 < len__17567__auto___31581)){
args31578.push((arguments[i__17568__auto___31582]));

var G__31583 = (i__17568__auto___31582 + (1));
i__17568__auto___31582 = G__31583;
continue;
} else {
}
break;
}

var G__31580 = args31578.length;
switch (G__31580) {
case 2:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31578.length)].join('')));

}
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (request_url,callback){
return figwheel.client.file_reloading.reload_base.call(null,request_url,callback);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (request_url){
return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,cljs.core.identity);
});

figwheel.client.file_reloading.reload_file_STAR_.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__31585,callback){
var map__31588 = p__31585;
var map__31588__$1 = ((((!((map__31588 == null)))?((((map__31588.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31588.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31588):map__31588);
var file_msg = map__31588__$1;
var request_url = cljs.core.get.call(null,map__31588__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__31588,map__31588__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfullly loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__31588,map__31588__$1,file_msg,request_url))
);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__31590){
var map__31593 = p__31590;
var map__31593__$1 = ((((!((map__31593 == null)))?((((map__31593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31593):map__31593);
var file_msg = map__31593__$1;
var namespace = cljs.core.get.call(null,map__31593__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,map__31593__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));

var meta_data__$1 = (function (){var or__16508__auto__ = meta_data;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
var and__16496__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_data__$1));
if(and__16496__auto__){
var or__16508__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
var or__16508__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
if(cljs.core.truth_(or__16508__auto____$1)){
return or__16508__auto____$1;
} else {
var and__16496__auto____$1 = cljs.core.contains_QMARK_.call(null,cljs.core._STAR_loaded_libs_STAR_,namespace);
if(and__16496__auto____$1){
var or__16508__auto____$2 = !(cljs.core.contains_QMARK_.call(null,meta_data__$1,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932)));
if(or__16508__auto____$2){
return or__16508__auto____$2;
} else {
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data__$1);
}
} else {
return and__16496__auto____$1;
}
}
}
} else {
return and__16496__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__31595,callback){
var map__31598 = p__31595;
var map__31598__$1 = ((((!((map__31598 == null)))?((((map__31598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31598):map__31598);
var file_msg = map__31598__$1;
var request_url = cljs.core.get.call(null,map__31598__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__31598__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.reload_file.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
setTimeout(((function (out){
return (function (){
return figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
figwheel.client.file_reloading.patch_goog_base.call(null);

cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
});})(out))
,(0));

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__24095__auto___31686 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto___31686,out){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto___31686,out){
return (function (state_31668){
var state_val_31669 = (state_31668[(1)]);
if((state_val_31669 === (1))){
var inst_31646 = cljs.core.nth.call(null,files,(0),null);
var inst_31647 = cljs.core.nthnext.call(null,files,(1));
var inst_31648 = files;
var state_31668__$1 = (function (){var statearr_31670 = state_31668;
(statearr_31670[(7)] = inst_31647);

(statearr_31670[(8)] = inst_31648);

(statearr_31670[(9)] = inst_31646);

return statearr_31670;
})();
var statearr_31671_31687 = state_31668__$1;
(statearr_31671_31687[(2)] = null);

(statearr_31671_31687[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (2))){
var inst_31648 = (state_31668[(8)]);
var inst_31651 = (state_31668[(10)]);
var inst_31651__$1 = cljs.core.nth.call(null,inst_31648,(0),null);
var inst_31652 = cljs.core.nthnext.call(null,inst_31648,(1));
var inst_31653 = (inst_31651__$1 == null);
var inst_31654 = cljs.core.not.call(null,inst_31653);
var state_31668__$1 = (function (){var statearr_31672 = state_31668;
(statearr_31672[(11)] = inst_31652);

(statearr_31672[(10)] = inst_31651__$1);

return statearr_31672;
})();
if(inst_31654){
var statearr_31673_31688 = state_31668__$1;
(statearr_31673_31688[(1)] = (4));

} else {
var statearr_31674_31689 = state_31668__$1;
(statearr_31674_31689[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (3))){
var inst_31666 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31668__$1,inst_31666);
} else {
if((state_val_31669 === (4))){
var inst_31651 = (state_31668[(10)]);
var inst_31656 = figwheel.client.file_reloading.reload_js_file.call(null,inst_31651);
var state_31668__$1 = state_31668;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31668__$1,(7),inst_31656);
} else {
if((state_val_31669 === (5))){
var inst_31662 = cljs.core.async.close_BANG_.call(null,out);
var state_31668__$1 = state_31668;
var statearr_31675_31690 = state_31668__$1;
(statearr_31675_31690[(2)] = inst_31662);

(statearr_31675_31690[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (6))){
var inst_31664 = (state_31668[(2)]);
var state_31668__$1 = state_31668;
var statearr_31676_31691 = state_31668__$1;
(statearr_31676_31691[(2)] = inst_31664);

(statearr_31676_31691[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31669 === (7))){
var inst_31652 = (state_31668[(11)]);
var inst_31658 = (state_31668[(2)]);
var inst_31659 = cljs.core.async.put_BANG_.call(null,out,inst_31658);
var inst_31648 = inst_31652;
var state_31668__$1 = (function (){var statearr_31677 = state_31668;
(statearr_31677[(12)] = inst_31659);

(statearr_31677[(8)] = inst_31648);

return statearr_31677;
})();
var statearr_31678_31692 = state_31668__$1;
(statearr_31678_31692[(2)] = null);

(statearr_31678_31692[(1)] = (2));


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
});})(c__24095__auto___31686,out))
;
return ((function (switch__24030__auto__,c__24095__auto___31686,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto____0 = (function (){
var statearr_31682 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31682[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto__);

(statearr_31682[(1)] = (1));

return statearr_31682;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto____1 = (function (state_31668){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_31668);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e31683){if((e31683 instanceof Object)){
var ex__24034__auto__ = e31683;
var statearr_31684_31693 = state_31668;
(statearr_31684_31693[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31668);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31694 = state_31668;
state_31668 = G__31694;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto__ = function(state_31668){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto____1.call(this,state_31668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto___31686,out))
})();
var state__24097__auto__ = (function (){var statearr_31685 = f__24096__auto__.call(null);
(statearr_31685[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto___31686);

return statearr_31685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto___31686,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.add_request_url = (function figwheel$client$file_reloading$add_request_url(p__31695,p__31696){
var map__31701 = p__31695;
var map__31701__$1 = ((((!((map__31701 == null)))?((((map__31701.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31701.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31701):map__31701);
var opts = map__31701__$1;
var url_rewriter = cljs.core.get.call(null,map__31701__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));
var map__31702 = p__31696;
var map__31702__$1 = ((((!((map__31702 == null)))?((((map__31702.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31702.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31702):map__31702);
var file_msg = map__31702__$1;
var file = cljs.core.get.call(null,map__31702__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var resolved_path = figwheel.client.file_reloading.resolve_url.call(null,file_msg);
return cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"request-url","request-url",2100346596),(cljs.core.truth_(url_rewriter)?url_rewriter.call(null,resolved_path):resolved_path));
});
figwheel.client.file_reloading.add_request_urls = (function figwheel$client$file_reloading$add_request_urls(opts,files){
return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.file_reloading.add_request_url,opts),files);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__31705,opts){
var map__31709 = p__31705;
var map__31709__$1 = ((((!((map__31709 == null)))?((((map__31709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31709):map__31709);
var eval_body__$1 = cljs.core.get.call(null,map__31709__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__31709__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16496__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16496__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16496__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e31711){var e = e31711;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__31716,p__31717){
var map__31945 = p__31716;
var map__31945__$1 = ((((!((map__31945 == null)))?((((map__31945.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31945.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31945):map__31945);
var opts = map__31945__$1;
var before_jsload = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var load_unchanged_files = cljs.core.get.call(null,map__31945__$1,new cljs.core.Keyword(null,"load-unchanged-files","load-unchanged-files",-1561468704));
var map__31946 = p__31717;
var map__31946__$1 = ((((!((map__31946 == null)))?((((map__31946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31946):map__31946);
var msg = map__31946__$1;
var files = cljs.core.get.call(null,map__31946__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files){
return (function (state_32087){
var state_val_32088 = (state_32087[(1)]);
if((state_val_32088 === (7))){
var inst_31963 = (state_32087[(7)]);
var inst_31960 = (state_32087[(8)]);
var inst_31962 = (state_32087[(9)]);
var inst_31961 = (state_32087[(10)]);
var inst_31968 = cljs.core._nth.call(null,inst_31961,inst_31963);
var inst_31969 = figwheel.client.file_reloading.eval_body.call(null,inst_31968,opts);
var inst_31970 = (inst_31963 + (1));
var tmp32089 = inst_31960;
var tmp32090 = inst_31962;
var tmp32091 = inst_31961;
var inst_31960__$1 = tmp32089;
var inst_31961__$1 = tmp32091;
var inst_31962__$1 = tmp32090;
var inst_31963__$1 = inst_31970;
var state_32087__$1 = (function (){var statearr_32092 = state_32087;
(statearr_32092[(7)] = inst_31963__$1);

(statearr_32092[(8)] = inst_31960__$1);

(statearr_32092[(9)] = inst_31962__$1);

(statearr_32092[(11)] = inst_31969);

(statearr_32092[(10)] = inst_31961__$1);

return statearr_32092;
})();
var statearr_32093_32172 = state_32087__$1;
(statearr_32093_32172[(2)] = null);

(statearr_32093_32172[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (20))){
var inst_32009 = (state_32087[(12)]);
var inst_32012 = (state_32087[(13)]);
var inst_32006 = (state_32087[(14)]);
var inst_32010 = (state_32087[(15)]);
var inst_32005 = (state_32087[(16)]);
var inst_32015 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_32017 = (function (){var all_files = inst_32005;
var files_SINGLEQUOTE_ = inst_32006;
var res_SINGLEQUOTE_ = inst_32009;
var res = inst_32010;
var files_not_loaded = inst_32012;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32009,inst_32012,inst_32006,inst_32010,inst_32005,inst_32015,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files){
return (function (p__32016){
var map__32094 = p__32016;
var map__32094__$1 = ((((!((map__32094 == null)))?((((map__32094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32094):map__32094);
var namespace = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__32094__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.ns_to_js_file.call(null,namespace);
} else {
return file;
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32009,inst_32012,inst_32006,inst_32010,inst_32005,inst_32015,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files))
})();
var inst_32018 = cljs.core.map.call(null,inst_32017,inst_32010);
var inst_32019 = cljs.core.pr_str.call(null,inst_32018);
var inst_32020 = figwheel.client.utils.log.call(null,inst_32019);
var inst_32021 = (function (){var all_files = inst_32005;
var files_SINGLEQUOTE_ = inst_32006;
var res_SINGLEQUOTE_ = inst_32009;
var res = inst_32010;
var files_not_loaded = inst_32012;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32009,inst_32012,inst_32006,inst_32010,inst_32005,inst_32015,inst_32017,inst_32018,inst_32019,inst_32020,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32009,inst_32012,inst_32006,inst_32010,inst_32005,inst_32015,inst_32017,inst_32018,inst_32019,inst_32020,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files))
})();
var inst_32022 = setTimeout(inst_32021,(10));
var state_32087__$1 = (function (){var statearr_32096 = state_32087;
(statearr_32096[(17)] = inst_32020);

(statearr_32096[(18)] = inst_32015);

return statearr_32096;
})();
var statearr_32097_32173 = state_32087__$1;
(statearr_32097_32173[(2)] = inst_32022);

(statearr_32097_32173[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (27))){
var state_32087__$1 = state_32087;
var statearr_32098_32174 = state_32087__$1;
(statearr_32098_32174[(2)] = false);

(statearr_32098_32174[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (1))){
var inst_31952 = (state_32087[(19)]);
var inst_31949 = before_jsload.call(null,files);
var inst_31950 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31951 = (function (){return ((function (inst_31952,inst_31949,inst_31950,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files){
return (function (p1__31712_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31712_SHARP_);
});
;})(inst_31952,inst_31949,inst_31950,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files))
})();
var inst_31952__$1 = cljs.core.filter.call(null,inst_31951,files);
var inst_31953 = cljs.core.not_empty.call(null,inst_31952__$1);
var state_32087__$1 = (function (){var statearr_32099 = state_32087;
(statearr_32099[(20)] = inst_31950);

(statearr_32099[(19)] = inst_31952__$1);

(statearr_32099[(21)] = inst_31949);

return statearr_32099;
})();
if(cljs.core.truth_(inst_31953)){
var statearr_32100_32175 = state_32087__$1;
(statearr_32100_32175[(1)] = (2));

} else {
var statearr_32101_32176 = state_32087__$1;
(statearr_32101_32176[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (24))){
var state_32087__$1 = state_32087;
var statearr_32102_32177 = state_32087__$1;
(statearr_32102_32177[(2)] = null);

(statearr_32102_32177[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (39))){
var state_32087__$1 = state_32087;
var statearr_32103_32178 = state_32087__$1;
(statearr_32103_32178[(2)] = null);

(statearr_32103_32178[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (4))){
var inst_31997 = (state_32087[(2)]);
var inst_31998 = (function (){return ((function (inst_31997,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files){
return (function (p1__31713_SHARP_){
var and__16496__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__31713_SHARP_);
if(cljs.core.truth_(and__16496__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__31713_SHARP_));
} else {
return and__16496__auto__;
}
});
;})(inst_31997,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files))
})();
var inst_31999 = cljs.core.filter.call(null,inst_31998,files);
var state_32087__$1 = (function (){var statearr_32104 = state_32087;
(statearr_32104[(22)] = inst_31997);

(statearr_32104[(23)] = inst_31999);

return statearr_32104;
})();
if(cljs.core.truth_(load_unchanged_files)){
var statearr_32105_32179 = state_32087__$1;
(statearr_32105_32179[(1)] = (16));

} else {
var statearr_32106_32180 = state_32087__$1;
(statearr_32106_32180[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (15))){
var inst_31987 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
var statearr_32107_32181 = state_32087__$1;
(statearr_32107_32181[(2)] = inst_31987);

(statearr_32107_32181[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (21))){
var state_32087__$1 = state_32087;
var statearr_32108_32182 = state_32087__$1;
(statearr_32108_32182[(2)] = null);

(statearr_32108_32182[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (31))){
var inst_32044 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
var statearr_32109_32183 = state_32087__$1;
(statearr_32109_32183[(2)] = inst_32044);

(statearr_32109_32183[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (32))){
var inst_32032 = (state_32087[(24)]);
var inst_32049 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32032);
var state_32087__$1 = state_32087;
var statearr_32110_32184 = state_32087__$1;
(statearr_32110_32184[(2)] = inst_32049);

(statearr_32110_32184[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (40))){
var inst_32055 = (state_32087[(25)]);
var inst_32073 = (state_32087[(2)]);
var inst_32074 = cljs.core.not_empty.call(null,inst_32055);
var state_32087__$1 = (function (){var statearr_32111 = state_32087;
(statearr_32111[(26)] = inst_32073);

return statearr_32111;
})();
if(cljs.core.truth_(inst_32074)){
var statearr_32112_32185 = state_32087__$1;
(statearr_32112_32185[(1)] = (41));

} else {
var statearr_32113_32186 = state_32087__$1;
(statearr_32113_32186[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (33))){
var inst_32032 = (state_32087[(24)]);
var state_32087__$1 = state_32087;
var statearr_32114_32187 = state_32087__$1;
(statearr_32114_32187[(2)] = inst_32032);

(statearr_32114_32187[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (13))){
var inst_31973 = (state_32087[(27)]);
var inst_31977 = cljs.core.chunk_first.call(null,inst_31973);
var inst_31978 = cljs.core.chunk_rest.call(null,inst_31973);
var inst_31979 = cljs.core.count.call(null,inst_31977);
var inst_31960 = inst_31978;
var inst_31961 = inst_31977;
var inst_31962 = inst_31979;
var inst_31963 = (0);
var state_32087__$1 = (function (){var statearr_32115 = state_32087;
(statearr_32115[(7)] = inst_31963);

(statearr_32115[(8)] = inst_31960);

(statearr_32115[(9)] = inst_31962);

(statearr_32115[(10)] = inst_31961);

return statearr_32115;
})();
var statearr_32116_32188 = state_32087__$1;
(statearr_32116_32188[(2)] = null);

(statearr_32116_32188[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (22))){
var inst_32012 = (state_32087[(13)]);
var inst_32025 = (state_32087[(2)]);
var inst_32026 = cljs.core.not_empty.call(null,inst_32012);
var state_32087__$1 = (function (){var statearr_32117 = state_32087;
(statearr_32117[(28)] = inst_32025);

return statearr_32117;
})();
if(cljs.core.truth_(inst_32026)){
var statearr_32118_32189 = state_32087__$1;
(statearr_32118_32189[(1)] = (23));

} else {
var statearr_32119_32190 = state_32087__$1;
(statearr_32119_32190[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (36))){
var state_32087__$1 = state_32087;
var statearr_32120_32191 = state_32087__$1;
(statearr_32120_32191[(2)] = null);

(statearr_32120_32191[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (41))){
var inst_32055 = (state_32087[(25)]);
var inst_32076 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32055);
var inst_32077 = cljs.core.pr_str.call(null,inst_32076);
var inst_32078 = [cljs.core.str("not required: "),cljs.core.str(inst_32077)].join('');
var inst_32079 = figwheel.client.utils.log.call(null,inst_32078);
var state_32087__$1 = state_32087;
var statearr_32121_32192 = state_32087__$1;
(statearr_32121_32192[(2)] = inst_32079);

(statearr_32121_32192[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (43))){
var inst_32082 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
var statearr_32122_32193 = state_32087__$1;
(statearr_32122_32193[(2)] = inst_32082);

(statearr_32122_32193[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (29))){
var state_32087__$1 = state_32087;
var statearr_32123_32194 = state_32087__$1;
(statearr_32123_32194[(2)] = true);

(statearr_32123_32194[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (6))){
var inst_31994 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
var statearr_32124_32195 = state_32087__$1;
(statearr_32124_32195[(2)] = inst_31994);

(statearr_32124_32195[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (28))){
var inst_32047 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
if(cljs.core.truth_(inst_32047)){
var statearr_32125_32196 = state_32087__$1;
(statearr_32125_32196[(1)] = (32));

} else {
var statearr_32126_32197 = state_32087__$1;
(statearr_32126_32197[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (25))){
var inst_32085 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32087__$1,inst_32085);
} else {
if((state_val_32088 === (34))){
var inst_32053 = (state_32087[(29)]);
var inst_32052 = (state_32087[(2)]);
var inst_32053__$1 = cljs.core.get.call(null,inst_32052,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_32054 = cljs.core.get.call(null,inst_32052,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
var inst_32055 = cljs.core.get.call(null,inst_32052,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_32056 = cljs.core.not_empty.call(null,inst_32053__$1);
var state_32087__$1 = (function (){var statearr_32127 = state_32087;
(statearr_32127[(30)] = inst_32054);

(statearr_32127[(25)] = inst_32055);

(statearr_32127[(29)] = inst_32053__$1);

return statearr_32127;
})();
if(cljs.core.truth_(inst_32056)){
var statearr_32128_32198 = state_32087__$1;
(statearr_32128_32198[(1)] = (35));

} else {
var statearr_32129_32199 = state_32087__$1;
(statearr_32129_32199[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (17))){
var inst_31999 = (state_32087[(23)]);
var state_32087__$1 = state_32087;
var statearr_32130_32200 = state_32087__$1;
(statearr_32130_32200[(2)] = inst_31999);

(statearr_32130_32200[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (3))){
var state_32087__$1 = state_32087;
var statearr_32131_32201 = state_32087__$1;
(statearr_32131_32201[(2)] = null);

(statearr_32131_32201[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (12))){
var inst_31990 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
var statearr_32132_32202 = state_32087__$1;
(statearr_32132_32202[(2)] = inst_31990);

(statearr_32132_32202[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (2))){
var inst_31952 = (state_32087[(19)]);
var inst_31959 = cljs.core.seq.call(null,inst_31952);
var inst_31960 = inst_31959;
var inst_31961 = null;
var inst_31962 = (0);
var inst_31963 = (0);
var state_32087__$1 = (function (){var statearr_32133 = state_32087;
(statearr_32133[(7)] = inst_31963);

(statearr_32133[(8)] = inst_31960);

(statearr_32133[(9)] = inst_31962);

(statearr_32133[(10)] = inst_31961);

return statearr_32133;
})();
var statearr_32134_32203 = state_32087__$1;
(statearr_32134_32203[(2)] = null);

(statearr_32134_32203[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (23))){
var inst_32032 = (state_32087[(24)]);
var inst_32009 = (state_32087[(12)]);
var inst_32012 = (state_32087[(13)]);
var inst_32006 = (state_32087[(14)]);
var inst_32010 = (state_32087[(15)]);
var inst_32005 = (state_32087[(16)]);
var inst_32028 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_32031 = (function (){var all_files = inst_32005;
var files_SINGLEQUOTE_ = inst_32006;
var res_SINGLEQUOTE_ = inst_32009;
var res = inst_32010;
var files_not_loaded = inst_32012;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32032,inst_32009,inst_32012,inst_32006,inst_32010,inst_32005,inst_32028,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files){
return (function (p__32030){
var map__32135 = p__32030;
var map__32135__$1 = ((((!((map__32135 == null)))?((((map__32135.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32135.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32135):map__32135);
var meta_data = cljs.core.get.call(null,map__32135__$1,new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
if((cljs.core.contains_QMARK_.call(null,meta_data,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932))) && (cljs.core.not.call(null,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932).cljs$core$IFn$_invoke$arity$1(meta_data)))){
return new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
}
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,files_not_loaded,inst_32032,inst_32009,inst_32012,inst_32006,inst_32010,inst_32005,inst_32028,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files))
})();
var inst_32032__$1 = cljs.core.group_by.call(null,inst_32031,inst_32012);
var inst_32034 = (inst_32032__$1 == null);
var inst_32035 = cljs.core.not.call(null,inst_32034);
var state_32087__$1 = (function (){var statearr_32137 = state_32087;
(statearr_32137[(24)] = inst_32032__$1);

(statearr_32137[(31)] = inst_32028);

return statearr_32137;
})();
if(inst_32035){
var statearr_32138_32204 = state_32087__$1;
(statearr_32138_32204[(1)] = (26));

} else {
var statearr_32139_32205 = state_32087__$1;
(statearr_32139_32205[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (35))){
var inst_32053 = (state_32087[(29)]);
var inst_32058 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32053);
var inst_32059 = cljs.core.pr_str.call(null,inst_32058);
var inst_32060 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_32059)].join('');
var inst_32061 = figwheel.client.utils.log.call(null,inst_32060);
var state_32087__$1 = state_32087;
var statearr_32140_32206 = state_32087__$1;
(statearr_32140_32206[(2)] = inst_32061);

(statearr_32140_32206[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (19))){
var inst_32009 = (state_32087[(12)]);
var inst_32006 = (state_32087[(14)]);
var inst_32010 = (state_32087[(15)]);
var inst_32005 = (state_32087[(16)]);
var inst_32009__$1 = (state_32087[(2)]);
var inst_32010__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_32009__$1);
var inst_32011 = (function (){var all_files = inst_32005;
var files_SINGLEQUOTE_ = inst_32006;
var res_SINGLEQUOTE_ = inst_32009__$1;
var res = inst_32010__$1;
return ((function (all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_32009,inst_32006,inst_32010,inst_32005,inst_32009__$1,inst_32010__$1,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files){
return (function (p1__31715_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__31715_SHARP_));
});
;})(all_files,files_SINGLEQUOTE_,res_SINGLEQUOTE_,res,inst_32009,inst_32006,inst_32010,inst_32005,inst_32009__$1,inst_32010__$1,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files))
})();
var inst_32012 = cljs.core.filter.call(null,inst_32011,inst_32009__$1);
var inst_32013 = cljs.core.not_empty.call(null,inst_32010__$1);
var state_32087__$1 = (function (){var statearr_32141 = state_32087;
(statearr_32141[(12)] = inst_32009__$1);

(statearr_32141[(13)] = inst_32012);

(statearr_32141[(15)] = inst_32010__$1);

return statearr_32141;
})();
if(cljs.core.truth_(inst_32013)){
var statearr_32142_32207 = state_32087__$1;
(statearr_32142_32207[(1)] = (20));

} else {
var statearr_32143_32208 = state_32087__$1;
(statearr_32143_32208[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (11))){
var state_32087__$1 = state_32087;
var statearr_32144_32209 = state_32087__$1;
(statearr_32144_32209[(2)] = null);

(statearr_32144_32209[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (9))){
var inst_31992 = (state_32087[(2)]);
var state_32087__$1 = state_32087;
var statearr_32145_32210 = state_32087__$1;
(statearr_32145_32210[(2)] = inst_31992);

(statearr_32145_32210[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (5))){
var inst_31963 = (state_32087[(7)]);
var inst_31962 = (state_32087[(9)]);
var inst_31965 = (inst_31963 < inst_31962);
var inst_31966 = inst_31965;
var state_32087__$1 = state_32087;
if(cljs.core.truth_(inst_31966)){
var statearr_32146_32211 = state_32087__$1;
(statearr_32146_32211[(1)] = (7));

} else {
var statearr_32147_32212 = state_32087__$1;
(statearr_32147_32212[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (14))){
var inst_31973 = (state_32087[(27)]);
var inst_31982 = cljs.core.first.call(null,inst_31973);
var inst_31983 = figwheel.client.file_reloading.eval_body.call(null,inst_31982,opts);
var inst_31984 = cljs.core.next.call(null,inst_31973);
var inst_31960 = inst_31984;
var inst_31961 = null;
var inst_31962 = (0);
var inst_31963 = (0);
var state_32087__$1 = (function (){var statearr_32148 = state_32087;
(statearr_32148[(7)] = inst_31963);

(statearr_32148[(8)] = inst_31960);

(statearr_32148[(9)] = inst_31962);

(statearr_32148[(10)] = inst_31961);

(statearr_32148[(32)] = inst_31983);

return statearr_32148;
})();
var statearr_32149_32213 = state_32087__$1;
(statearr_32149_32213[(2)] = null);

(statearr_32149_32213[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (26))){
var inst_32032 = (state_32087[(24)]);
var inst_32037 = inst_32032.cljs$lang$protocol_mask$partition0$;
var inst_32038 = (inst_32037 & (64));
var inst_32039 = inst_32032.cljs$core$ISeq$;
var inst_32040 = (inst_32038) || (inst_32039);
var state_32087__$1 = state_32087;
if(cljs.core.truth_(inst_32040)){
var statearr_32150_32214 = state_32087__$1;
(statearr_32150_32214[(1)] = (29));

} else {
var statearr_32151_32215 = state_32087__$1;
(statearr_32151_32215[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (16))){
var inst_31999 = (state_32087[(23)]);
var inst_32001 = (function (){var all_files = inst_31999;
return ((function (all_files,inst_31999,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files){
return (function (p1__31714_SHARP_){
return cljs.core.update_in.call(null,p1__31714_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"meta-data","meta-data",-1613399157)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"file-changed-on-disk","file-changed-on-disk",1086171932));
});
;})(all_files,inst_31999,state_val_32088,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files))
})();
var inst_32002 = cljs.core.map.call(null,inst_32001,inst_31999);
var state_32087__$1 = state_32087;
var statearr_32152_32216 = state_32087__$1;
(statearr_32152_32216[(2)] = inst_32002);

(statearr_32152_32216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (38))){
var inst_32054 = (state_32087[(30)]);
var inst_32067 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32054);
var inst_32068 = cljs.core.pr_str.call(null,inst_32067);
var inst_32069 = [cljs.core.str("file didn't change: "),cljs.core.str(inst_32068)].join('');
var inst_32070 = figwheel.client.utils.log.call(null,inst_32069);
var state_32087__$1 = state_32087;
var statearr_32153_32217 = state_32087__$1;
(statearr_32153_32217[(2)] = inst_32070);

(statearr_32153_32217[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (30))){
var state_32087__$1 = state_32087;
var statearr_32154_32218 = state_32087__$1;
(statearr_32154_32218[(2)] = false);

(statearr_32154_32218[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (10))){
var inst_31973 = (state_32087[(27)]);
var inst_31975 = cljs.core.chunked_seq_QMARK_.call(null,inst_31973);
var state_32087__$1 = state_32087;
if(inst_31975){
var statearr_32155_32219 = state_32087__$1;
(statearr_32155_32219[(1)] = (13));

} else {
var statearr_32156_32220 = state_32087__$1;
(statearr_32156_32220[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (18))){
var inst_32006 = (state_32087[(14)]);
var inst_32005 = (state_32087[(16)]);
var inst_32005__$1 = (state_32087[(2)]);
var inst_32006__$1 = figwheel.client.file_reloading.add_request_urls.call(null,opts,inst_32005__$1);
var inst_32007 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_32006__$1);
var state_32087__$1 = (function (){var statearr_32157 = state_32087;
(statearr_32157[(14)] = inst_32006__$1);

(statearr_32157[(16)] = inst_32005__$1);

return statearr_32157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32087__$1,(19),inst_32007);
} else {
if((state_val_32088 === (42))){
var state_32087__$1 = state_32087;
var statearr_32158_32221 = state_32087__$1;
(statearr_32158_32221[(2)] = null);

(statearr_32158_32221[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (37))){
var inst_32054 = (state_32087[(30)]);
var inst_32064 = (state_32087[(2)]);
var inst_32065 = cljs.core.not_empty.call(null,inst_32054);
var state_32087__$1 = (function (){var statearr_32159 = state_32087;
(statearr_32159[(33)] = inst_32064);

return statearr_32159;
})();
if(cljs.core.truth_(inst_32065)){
var statearr_32160_32222 = state_32087__$1;
(statearr_32160_32222[(1)] = (38));

} else {
var statearr_32161_32223 = state_32087__$1;
(statearr_32161_32223[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32088 === (8))){
var inst_31960 = (state_32087[(8)]);
var inst_31973 = (state_32087[(27)]);
var inst_31973__$1 = cljs.core.seq.call(null,inst_31960);
var state_32087__$1 = (function (){var statearr_32162 = state_32087;
(statearr_32162[(27)] = inst_31973__$1);

return statearr_32162;
})();
if(inst_31973__$1){
var statearr_32163_32224 = state_32087__$1;
(statearr_32163_32224[(1)] = (10));

} else {
var statearr_32164_32225 = state_32087__$1;
(statearr_32164_32225[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
});})(c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files))
;
return ((function (switch__24030__auto__,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto____0 = (function (){
var statearr_32168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32168[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto__);

(statearr_32168[(1)] = (1));

return statearr_32168;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto____1 = (function (state_32087){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_32087);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e32169){if((e32169 instanceof Object)){
var ex__24034__auto__ = e32169;
var statearr_32170_32226 = state_32087;
(statearr_32170_32226[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32087);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32169;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32227 = state_32087;
state_32087 = G__32227;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto__ = function(state_32087){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto____1.call(this,state_32087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files))
})();
var state__24097__auto__ = (function (){var statearr_32171 = f__24096__auto__.call(null);
(statearr_32171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_32171;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__,map__31945,map__31945__$1,opts,before_jsload,on_jsload,load_unchanged_files,map__31946,map__31946__$1,msg,files))
);

return c__24095__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__32230,link){
var map__32233 = p__32230;
var map__32233__$1 = ((((!((map__32233 == null)))?((((map__32233.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32233.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32233):map__32233);
var file = cljs.core.get.call(null,map__32233__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__32233,map__32233__$1,file){
return (function (p1__32228_SHARP_,p2__32229_SHARP_){
if(cljs.core._EQ_.call(null,p1__32228_SHARP_,p2__32229_SHARP_)){
return p1__32228_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__32233,map__32233__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__32239){
var map__32240 = p__32239;
var map__32240__$1 = ((((!((map__32240 == null)))?((((map__32240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32240):map__32240);
var match_length = cljs.core.get.call(null,map__32240__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__32240__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__32235_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__32235_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args32242 = [];
var len__17567__auto___32245 = arguments.length;
var i__17568__auto___32246 = (0);
while(true){
if((i__17568__auto___32246 < len__17567__auto___32245)){
args32242.push((arguments[i__17568__auto___32246]));

var G__32247 = (i__17568__auto___32246 + (1));
i__17568__auto___32246 = G__32247;
continue;
} else {
}
break;
}

var G__32244 = args32242.length;
switch (G__32244) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32242.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__32249){
var map__32252 = p__32249;
var map__32252__$1 = ((((!((map__32252 == null)))?((((map__32252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32252):map__32252);
var f_data = map__32252__$1;
var file = cljs.core.get.call(null,map__32252__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var request_url = cljs.core.get.call(null,map__32252__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var temp__4423__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4423__auto__)){
var link = temp__4423__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return figwheel.client.file_reloading.add_link_to_doc.call(null,figwheel.client.file_reloading.create_link.call(null,(function (){var or__16508__auto__ = request_url;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return file;
}
})()));
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__32254,files_msg){
var map__32277 = p__32254;
var map__32277__$1 = ((((!((map__32277 == null)))?((((map__32277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32277):map__32277);
var opts = map__32277__$1;
var on_cssload = cljs.core.get.call(null,map__32277__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__32279_32299 = cljs.core.seq.call(null,figwheel.client.file_reloading.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__32280_32300 = null;
var count__32281_32301 = (0);
var i__32282_32302 = (0);
while(true){
if((i__32282_32302 < count__32281_32301)){
var f_32303 = cljs.core._nth.call(null,chunk__32280_32300,i__32282_32302);
figwheel.client.file_reloading.reload_css_file.call(null,f_32303);

var G__32304 = seq__32279_32299;
var G__32305 = chunk__32280_32300;
var G__32306 = count__32281_32301;
var G__32307 = (i__32282_32302 + (1));
seq__32279_32299 = G__32304;
chunk__32280_32300 = G__32305;
count__32281_32301 = G__32306;
i__32282_32302 = G__32307;
continue;
} else {
var temp__4425__auto___32308 = cljs.core.seq.call(null,seq__32279_32299);
if(temp__4425__auto___32308){
var seq__32279_32309__$1 = temp__4425__auto___32308;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32279_32309__$1)){
var c__17311__auto___32310 = cljs.core.chunk_first.call(null,seq__32279_32309__$1);
var G__32311 = cljs.core.chunk_rest.call(null,seq__32279_32309__$1);
var G__32312 = c__17311__auto___32310;
var G__32313 = cljs.core.count.call(null,c__17311__auto___32310);
var G__32314 = (0);
seq__32279_32299 = G__32311;
chunk__32280_32300 = G__32312;
count__32281_32301 = G__32313;
i__32282_32302 = G__32314;
continue;
} else {
var f_32315 = cljs.core.first.call(null,seq__32279_32309__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_32315);

var G__32316 = cljs.core.next.call(null,seq__32279_32309__$1);
var G__32317 = null;
var G__32318 = (0);
var G__32319 = (0);
seq__32279_32299 = G__32316;
chunk__32280_32300 = G__32317;
count__32281_32301 = G__32318;
i__32282_32302 = G__32319;
continue;
}
} else {
}
}
break;
}

var c__24095__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__24095__auto__,map__32277,map__32277__$1,opts,on_cssload){
return (function (){
var f__24096__auto__ = (function (){var switch__24030__auto__ = ((function (c__24095__auto__,map__32277,map__32277__$1,opts,on_cssload){
return (function (state_32289){
var state_val_32290 = (state_32289[(1)]);
if((state_val_32290 === (1))){
var inst_32283 = cljs.core.async.timeout.call(null,(100));
var state_32289__$1 = state_32289;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32289__$1,(2),inst_32283);
} else {
if((state_val_32290 === (2))){
var inst_32285 = (state_32289[(2)]);
var inst_32286 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);
var inst_32287 = on_cssload.call(null,inst_32286);
var state_32289__$1 = (function (){var statearr_32291 = state_32289;
(statearr_32291[(7)] = inst_32285);

return statearr_32291;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32289__$1,inst_32287);
} else {
return null;
}
}
});})(c__24095__auto__,map__32277,map__32277__$1,opts,on_cssload))
;
return ((function (switch__24030__auto__,c__24095__auto__,map__32277,map__32277__$1,opts,on_cssload){
return (function() {
var figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto__ = null;
var figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto____0 = (function (){
var statearr_32295 = [null,null,null,null,null,null,null,null];
(statearr_32295[(0)] = figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto__);

(statearr_32295[(1)] = (1));

return statearr_32295;
});
var figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto____1 = (function (state_32289){
while(true){
var ret_value__24032__auto__ = (function (){try{while(true){
var result__24033__auto__ = switch__24030__auto__.call(null,state_32289);
if(cljs.core.keyword_identical_QMARK_.call(null,result__24033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__24033__auto__;
}
break;
}
}catch (e32296){if((e32296 instanceof Object)){
var ex__24034__auto__ = e32296;
var statearr_32297_32320 = state_32289;
(statearr_32297_32320[(5)] = ex__24034__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32296;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__24032__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32321 = state_32289;
state_32289 = G__32321;
continue;
} else {
return ret_value__24032__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto__ = function(state_32289){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto____1.call(this,state_32289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto____0;
figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto____1;
return figwheel$client$file_reloading$reload_css_files_$_state_machine__24031__auto__;
})()
;})(switch__24030__auto__,c__24095__auto__,map__32277,map__32277__$1,opts,on_cssload))
})();
var state__24097__auto__ = (function (){var statearr_32298 = f__24096__auto__.call(null);
(statearr_32298[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__24095__auto__);

return statearr_32298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__24097__auto__);
});})(c__24095__auto__,map__32277,map__32277__$1,opts,on_cssload))
);

return c__24095__auto__;
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1440252247772