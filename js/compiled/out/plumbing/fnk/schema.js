// Compiled by ClojureScript 1.7.107 {}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__19252__19253__auto__){
if(!((p1__19252__19253__auto__ == null))){
if((false) || (p1__19252__19253__auto__.schema$core$Schema$)){
return true;
} else {
if((!p1__19252__19253__auto__.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__19252__19253__auto__);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,p1__19252__19253__auto__);
}
})], null));
plumbing.fnk.schema.InputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__27919_SHARP_){
return (cljs.core.val.call(null,p1__27919_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));
if(cljs.core.empty_QMARK_.call(null,repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_.call(null,m)){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}

var vec__27921 = cljs.core.find.call(null,m,k);
var _ = cljs.core.nth.call(null,vec__27921,(0),null);
var v = cljs.core.nth.call(null,vec__27921,(1),null);
var p = vec__27921;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.call(null,s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.call(null,s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.call(null,s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___27927 = schema.utils.use_fn_validation;
var output_schema27922_27928 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema27923_27929 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker27924_27930 = schema.core.checker.call(null,input_schema27923_27929);
var output_checker27925_27931 = schema.core.checker.call(null,output_schema27922_27928);
/**
 * Inputs: [k]
 *   Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 *   Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___27927,output_schema27922_27928,input_schema27923_27929,input_checker27924_27930,output_checker27925_27931){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__27926){
var validate__18844__auto__ = ufv___27927.get_cell();
if(cljs.core.truth_(validate__18844__auto__)){
var args__18845__auto___27932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27926], null);
var temp__4425__auto___27933 = input_checker27924_27930.call(null,args__18845__auto___27932);
if(cljs.core.truth_(temp__4425__auto___27933)){
var error__18846__auto___27934 = temp__4425__auto___27933;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__18846__auto___27934)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27923_27929,new cljs.core.Keyword(null,"value","value",305978217),args__18845__auto___27932,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___27934], null));
} else {
}
} else {
}

var o__18847__auto__ = (function (){var k = G__27926;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else {
if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__18844__auto__)){
var temp__4425__auto___27935 = output_checker27925_27931.call(null,o__18847__auto__);
if(cljs.core.truth_(temp__4425__auto___27935)){
var error__18846__auto___27936 = temp__4425__auto___27935;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),cljs.core.list(new cljs.core.Symbol("s","maybe","s/maybe",1326133944,null),cljs.core.list(new cljs.core.Symbol("s","pair","s/pair",1193014306,null),new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),"k",new cljs.core.Symbol("s","Bool","s/Bool",195910545,null),"optional?")),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated schema map key form, unpack an explicit keyword\n   and optional? flag, or return nil for a non-explicit key"], null)),cljs.core.pr_str.call(null,error__18846__auto___27936)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27922_27928,new cljs.core.Keyword(null,"value","value",305978217),o__18847__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___27936], null));
} else {
}
} else {
}

return o__18847__auto__;
});})(ufv___27927,output_schema27922_27928,input_schema27923_27929,input_checker27924_27930,output_checker27925_27931))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema27922_27928,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27923_27929], null)));
var ufv___27942 = schema.utils.use_fn_validation;
var output_schema27937_27943 = cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema27938_27944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null)], null)))], null);
var input_checker27939_27945 = schema.core.checker.call(null,input_schema27938_27944);
var output_checker27940_27946 = schema.core.checker.call(null,output_schema27937_27943);
/**
 * Inputs: [s]
 *   Returns: {s/Keyword s/Bool}
 * 
 *   Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___27942,output_schema27937_27943,input_schema27938_27944,input_checker27939_27945,output_checker27940_27946){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__27941){
var validate__18844__auto__ = ufv___27942.get_cell();
if(cljs.core.truth_(validate__18844__auto__)){
var args__18845__auto___27947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27941], null);
var temp__4425__auto___27948 = input_checker27939_27945.call(null,args__18845__auto___27947);
if(cljs.core.truth_(temp__4425__auto___27948)){
var error__18846__auto___27949 = temp__4425__auto___27948;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__18846__auto___27949)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27938_27944,new cljs.core.Keyword(null,"value","value",305978217),args__18845__auto___27947,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___27949], null));
} else {
}
} else {
}

var o__18847__auto__ = (function (){var s = G__27941;
while(true){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();
if(cljs.core.truth_(validate__18844__auto__)){
var temp__4425__auto___27950 = output_checker27940_27946.call(null,o__18847__auto__);
if(cljs.core.truth_(temp__4425__auto___27950)){
var error__18846__auto___27951 = temp__4425__auto___27950;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given a possibly-unevaluated map schema, return a map from bare keyword to true\n   (for required) or false (for optional)"], null)),cljs.core.pr_str.call(null,error__18846__auto___27951)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27937_27943,new cljs.core.Keyword(null,"value","value",305978217),o__18847__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___27951], null));
} else {
}
} else {
}

return o__18847__auto__;
});})(ufv___27942,output_schema27937_27943,input_schema27938_27944,input_checker27939_27945,output_checker27940_27946))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema27937_27943,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27938_27944], null)));
var ufv___27957 = schema.utils.use_fn_validation;
var output_schema27952_27958 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema27953_27959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null),new cljs.core.Symbol("s","Bool","s/Bool",195910545,null)], null)], null)))], null);
var input_checker27954_27960 = schema.core.checker.call(null,input_schema27953_27959);
var output_checker27955_27961 = schema.core.checker.call(null,output_schema27952_27958);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 *   Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 *   Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___27957,output_schema27952_27958,input_schema27953_27959,input_checker27954_27960,output_checker27955_27961){
return (function plumbing$fnk$schema$split_schema_keys(G__27956){
var validate__18844__auto__ = ufv___27957.get_cell();
if(cljs.core.truth_(validate__18844__auto__)){
var args__18845__auto___27962 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27956], null);
var temp__4425__auto___27963 = input_checker27954_27960.call(null,args__18845__auto___27962);
if(cljs.core.truth_(temp__4425__auto___27963)){
var error__18846__auto___27964 = temp__4425__auto___27963;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__18846__auto___27964)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27953_27959,new cljs.core.Keyword(null,"value","value",305978217),args__18845__auto___27962,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___27964], null));
} else {
}
} else {
}

var o__18847__auto__ = (function (){var s = G__27956;
while(true){
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__18844__auto__)){
var temp__4425__auto___27965 = output_checker27955_27961.call(null,o__18847__auto__);
if(cljs.core.truth_(temp__4425__auto___27965)){
var error__18846__auto___27966 = temp__4425__auto___27965;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"required","required",-846788763,null))),cljs.core.list(new cljs.core.Symbol("s","one","s/one",-1719427222,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"optional","optional",-600484260,null)))], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given output of explicit-schema-key-map, split into seq [req opt]."], null)),cljs.core.pr_str.call(null,error__18846__auto___27966)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27952_27958,new cljs.core.Keyword(null,"value","value",305978217),o__18847__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___27966], null));
} else {
}
} else {
}

return o__18847__auto__;
});})(ufv___27957,output_schema27952_27958,input_schema27953_27959,input_checker27954_27960,output_checker27955_27961))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema27952_27958,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27953_27959], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(var_args){
var args__17574__auto__ = [];
var len__17567__auto___27974 = arguments.length;
var i__17568__auto___27975 = (0);
while(true){
if((i__17568__auto___27975 < len__17567__auto___27974)){
args__17574__auto__.push((arguments[i__17568__auto___27975]));

var G__27976 = (i__17568__auto___27975 + (1));
i__17568__auto___27975 = G__27976;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((3) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17575__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__27971){
var vec__27972 = p__27971;
var k = cljs.core.nth.call(null,vec__27972,(0),null);
var v = cljs.core.nth.call(null,vec__27972,(1),null);
var pk = key_project.call(null,k);
var temp__4423__auto__ = cljs.core.get.call(null,m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__27973 = temp__4423__auto__;
var ok = cljs.core.nth.call(null,vec__27973,(0),null);
var ov = cljs.core.nth.call(null,vec__27973,(1),null);
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else {
return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq27967){
var G__27968 = cljs.core.first.call(null,seq27967);
var seq27967__$1 = cljs.core.next.call(null,seq27967);
var G__27969 = cljs.core.first.call(null,seq27967__$1);
var seq27967__$2 = cljs.core.next.call(null,seq27967__$1);
var G__27970 = cljs.core.first.call(null,seq27967__$2);
var seq27967__$3 = cljs.core.next.call(null,seq27967__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__27968,G__27969,G__27970,seq27967__$3);
});
var ufv___27984 = schema.utils.use_fn_validation;
var output_schema27978_27985 = plumbing.fnk.schema.InputSchema;
var input_schema27979_27986 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i1","i1",-572470430,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"i2","i2",850408895,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker27980_27987 = schema.core.checker.call(null,input_schema27979_27986);
var output_checker27981_27988 = schema.core.checker.call(null,output_schema27978_27985);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 *   Returns: InputSchema
 * 
 *   Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___27984,output_schema27978_27985,input_schema27979_27986,input_checker27980_27987,output_checker27981_27988){
return (function plumbing$fnk$schema$union_input_schemata(G__27982,G__27983){
var validate__18844__auto__ = ufv___27984.get_cell();
if(cljs.core.truth_(validate__18844__auto__)){
var args__18845__auto___27989 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27982,G__27983], null);
var temp__4425__auto___27990 = input_checker27980_27987.call(null,args__18845__auto___27989);
if(cljs.core.truth_(temp__4425__auto___27990)){
var error__18846__auto___27991 = temp__4425__auto___27990;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__18846__auto___27991)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27979_27986,new cljs.core.Keyword(null,"value","value",305978217),args__18845__auto___27989,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___27991], null));
} else {
}
} else {
}

var o__18847__auto__ = (function (){var i1 = G__27982;
var i2 = G__27983;
while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__18844__auto__,ufv___27984,output_schema27978_27985,input_schema27979_27986,input_checker27980_27987,output_checker27981_27988){
return (function (p1__27977_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,p1__27977_SHARP_))){
return schema.core.explicit_schema_key.call(null,p1__27977_SHARP_);
} else {
return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__18844__auto__,ufv___27984,output_schema27978_27985,input_schema27979_27986,input_checker27980_27987,output_checker27981_27988))
,((function (validate__18844__auto__,ufv___27984,output_schema27978_27985,input_schema27979_27986,input_checker27980_27987,output_checker27981_27988){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_.call(null,k1))){
if(cljs.core._EQ_.call(null,k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.call(null,k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__18844__auto__,ufv___27984,output_schema27978_27985,input_schema27979_27986,input_checker27980_27987,output_checker27981_27988))
,((function (validate__18844__auto__,ufv___27984,output_schema27978_27985,input_schema27979_27986,input_checker27980_27987,output_checker27981_27988){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__16496__auto__ = plumbing.fnk.schema.map_schema_QMARK_.call(null,s1);
if(cljs.core.truth_(and__16496__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_.call(null,s2);
} else {
return and__16496__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata.call(null,s1,s2);
} else {
return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__18844__auto__,ufv___27984,output_schema27978_27985,input_schema27979_27986,input_checker27980_27987,output_checker27981_27988))
,i1,i2);
break;
}
})();
if(cljs.core.truth_(validate__18844__auto__)){
var temp__4425__auto___27992 = output_checker27981_27988.call(null,o__18847__auto__);
if(cljs.core.truth_(temp__4425__auto___27992)){
var error__18846__auto___27993 = temp__4425__auto___27992;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Returns a minimal input schema schema that entails satisfaction of both s1 and s2"], null)),cljs.core.pr_str.call(null,error__18846__auto___27993)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27978_27985,new cljs.core.Keyword(null,"value","value",305978217),o__18847__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___27993], null));
} else {
}
} else {
}

return o__18847__auto__;
});})(ufv___27984,output_schema27978_27985,input_schema27979_27986,input_checker27980_27987,output_checker27981_27988))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema27978_27985,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27979_27986], null)));
var ufv___27999 = schema.utils.use_fn_validation;
var output_schema27994_28000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema27995_28001 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null)))], null);
var input_checker27996_28002 = schema.core.checker.call(null,input_schema27995_28001);
var output_checker27997_28003 = schema.core.checker.call(null,output_schema27994_28000);
/**
 * Inputs: [input-schema :- InputSchema]
 *   Returns: [s/Keyword]
 * 
 *   Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___27999,output_schema27994_28000,input_schema27995_28001,input_checker27996_28002,output_checker27997_28003){
return (function plumbing$fnk$schema$required_toplevel_keys(G__27998){
var validate__18844__auto__ = ufv___27999.get_cell();
if(cljs.core.truth_(validate__18844__auto__)){
var args__18845__auto___28004 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__27998], null);
var temp__4425__auto___28005 = input_checker27996_28002.call(null,args__18845__auto___28004);
if(cljs.core.truth_(temp__4425__auto___28005)){
var error__18846__auto___28006 = temp__4425__auto___28005;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__18846__auto___28006)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema27995_28001,new cljs.core.Keyword(null,"value","value",305978217),args__18845__auto___28004,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___28006], null));
} else {
}
} else {
}

var o__18847__auto__ = (function (){var input_schema = G__27998;
while(true){
return cljs.core.keep.call(null,((function (validate__18844__auto__,ufv___27999,output_schema27994_28000,input_schema27995_28001,input_checker27996_28002,output_checker27997_28003){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_.call(null,k))){
return schema.core.explicit_schema_key.call(null,k);
} else {
return null;
}
});})(validate__18844__auto__,ufv___27999,output_schema27994_28000,input_schema27995_28001,input_checker27996_28002,output_checker27997_28003))
,cljs.core.keys.call(null,input_schema));
break;
}
})();
if(cljs.core.truth_(validate__18844__auto__)){
var temp__4425__auto___28007 = output_checker27997_28003.call(null,o__18847__auto__);
if(cljs.core.truth_(temp__4425__auto___28007)){
var error__18846__auto___28008 = temp__4425__auto___28007;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Which top-level keys are required (i.e., non-false) by this input schema."], null)),cljs.core.pr_str.call(null,error__18846__auto___28008)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema27994_28000,new cljs.core.Keyword(null,"value","value",305978217),o__18847__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___28008], null));
} else {
}
} else {
}

return o__18847__auto__;
});})(ufv___27999,output_schema27994_28000,input_schema27995_28001,input_checker27996_28002,output_checker27997_28003))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema27994_28000,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema27995_28001], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr)))){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17280__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__28017(s__28018){
return (new cljs.core.LazySeq(null,(function (){
var s__28018__$1 = s__28018;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28018__$1);
if(temp__4425__auto__){
var s__28018__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28018__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__28018__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__28020 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__28019 = (0);
while(true){
if((i__28019 < size__17279__auto__)){
var vec__28023 = cljs.core._nth.call(null,c__17278__auto__,i__28019);
var k = cljs.core.nth.call(null,vec__28023,(0),null);
var v = cljs.core.nth.call(null,vec__28023,(1),null);
cljs.core.chunk_append.call(null,b__28020,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null));

var G__28025 = (i__28019 + (1));
i__28019 = G__28025;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28020),plumbing$fnk$schema$guess_expr_output_schema_$_iter__28017.call(null,cljs.core.chunk_rest.call(null,s__28018__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28020),null);
}
} else {
var vec__28024 = cljs.core.first.call(null,s__28018__$2);
var k = cljs.core.nth.call(null,vec__28024,(0),null);
var v = cljs.core.nth.call(null,vec__28024,(1),null);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema.call(null,v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__28017.call(null,cljs.core.rest.call(null,s__28018__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17280__auto__.call(null,expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema))){
return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else {
if(cljs.core.not.call(null,plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema))){
return schema.utils.error.call(null,schema.utils.make_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17280__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__28034(s__28035){
return (new cljs.core.LazySeq(null,(function (){
var s__28035__$1 = s__28035;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28035__$1);
if(temp__4425__auto__){
var s__28035__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28035__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__28035__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__28037 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__28036 = (0);
while(true){
if((i__28036 < size__17279__auto__)){
var vec__28040 = cljs.core._nth.call(null,c__17278__auto__,i__28036);
var k = cljs.core.nth.call(null,vec__28040,(0),null);
var v = cljs.core.nth.call(null,vec__28040,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__16508__auto__ = required_QMARK_;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append.call(null,b__28037,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__28042 = (i__28036 + (1));
i__28036 = G__28042;
continue;
} else {
var G__28043 = (i__28036 + (1));
i__28036 = G__28043;
continue;
}
} else {
var G__28044 = (i__28036 + (1));
i__28036 = G__28044;
continue;
}
} else {
var G__28045 = (i__28036 + (1));
i__28036 = G__28045;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28037),plumbing$fnk$schema$schema_diff_$_iter__28034.call(null,cljs.core.chunk_rest.call(null,s__28035__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28037),null);
}
} else {
var vec__28041 = cljs.core.first.call(null,s__28035__$2);
var k = cljs.core.nth.call(null,vec__28041,(0),null);
var v = cljs.core.nth.call(null,vec__28041,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_.call(null,k))){
var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);
var raw_k = schema.core.explicit_schema_key.call(null,k);
var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);
if(cljs.core.truth_((function (){var or__16508__auto__ = required_QMARK_;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__28034.call(null,cljs.core.rest.call(null,s__28035__$2)));
} else {
var G__28046 = cljs.core.rest.call(null,s__28035__$2);
s__28035__$1 = G__28046;
continue;
}
} else {
var G__28047 = cljs.core.rest.call(null,s__28035__$2);
s__28035__$1 = G__28047;
continue;
}
} else {
var G__28048 = cljs.core.rest.call(null,s__28035__$2);
s__28035__$1 = G__28048;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17280__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.call(null,[cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else {
return null;
}
});
var ufv___28071 = schema.utils.use_fn_validation;
var output_schema28049_28072 = schema.core.Any;
var input_schema28050_28073 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker28051_28074 = schema.core.checker.call(null,input_schema28050_28073);
var output_checker28052_28075 = schema.core.checker.call(null,output_schema28049_28072);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___28071,output_schema28049_28072,input_schema28050_28073,input_checker28051_28074,output_checker28052_28075){
return (function plumbing$fnk$schema$compose_schemata(G__28053,G__28054){
var validate__18844__auto__ = true;
if(validate__18844__auto__){
var args__18845__auto___28076 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28053,G__28054], null);
var temp__4425__auto___28077 = input_checker28051_28074.call(null,args__18845__auto___28076);
if(cljs.core.truth_(temp__4425__auto___28077)){
var error__18846__auto___28078 = temp__4425__auto___28077;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__18846__auto___28078)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28050_28073,new cljs.core.Keyword(null,"value","value",305978217),args__18845__auto___28076,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___28078], null));
} else {
}
} else {
}

var o__18847__auto__ = (function (){var G__28065 = G__28053;
var vec__28067 = G__28065;
var i2 = cljs.core.nth.call(null,vec__28067,(0),null);
var o2 = cljs.core.nth.call(null,vec__28067,(1),null);
var G__28066 = G__28054;
var vec__28068 = G__28066;
var i1 = cljs.core.nth.call(null,vec__28068,(0),null);
var o1 = cljs.core.nth.call(null,vec__28068,(1),null);
var G__28065__$1 = G__28065;
var G__28066__$1 = G__28066;
while(true){
var vec__28069 = G__28065__$1;
var i2__$1 = cljs.core.nth.call(null,vec__28069,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__28069,(1),null);
var vec__28070 = G__28066__$1;
var i1__$1 = cljs.core.nth.call(null,vec__28070,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__28070,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__18844__auto__){
var temp__4425__auto___28079 = output_checker28052_28075.call(null,o__18847__auto__);
if(cljs.core.truth_(temp__4425__auto___28079)){
var error__18846__auto___28080 = temp__4425__auto___28079;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"always-validate","always-validate",1031872127),true,new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2,\n   return a pair of input and output schemata for #(f2 (merge % (f1 %))).\n   f1's output schema must not contain any optional keys."], null)),cljs.core.pr_str.call(null,error__18846__auto___28080)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28049_28072,new cljs.core.Keyword(null,"value","value",305978217),o__18847__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___28080], null));
} else {
}
} else {
}

return o__18847__auto__;
});})(ufv___28071,output_schema28049_28072,input_schema28050_28073,input_checker28051_28074,output_checker28052_28075))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema28049_28072,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28050_28073], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_.call(null,m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k))){
return schema.core.optional_key.call(null,k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___28159 = schema.utils.use_fn_validation;
var output_schema28081_28160 = schema.core.Any;
var input_schema28082_28161 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,cljs.core.with_meta(new cljs.core.Symbol(null,"s","s",-948495851,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"InputSchema","InputSchema",-824370558,null)], null))),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),cljs.core.with_meta(new cljs.core.Symbol(null,"ks","ks",-754231827,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("s","Keyword","s/Keyword",-850066400,null)], null)], null)))], null);
var input_checker28083_28162 = schema.core.checker.call(null,input_schema28082_28161);
var output_checker28084_28163 = schema.core.checker.call(null,output_schema28081_28160);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 *   Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163){
return (function plumbing$fnk$schema$split_schema(G__28085,G__28086){
var validate__18844__auto__ = ufv___28159.get_cell();
if(cljs.core.truth_(validate__18844__auto__)){
var args__18845__auto___28164 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28085,G__28086], null);
var temp__4425__auto___28165 = input_checker28083_28162.call(null,args__18845__auto___28164);
if(cljs.core.truth_(temp__4425__auto___28165)){
var error__18846__auto___28166 = temp__4425__auto___28165;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__18846__auto___28166)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28082_28161,new cljs.core.Keyword(null,"value","value",305978217),args__18845__auto___28164,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___28166], null));
} else {
}
} else {
}

var o__18847__auto__ = (function (){var s = G__28085;
var ks = G__28086;
while(true){
var ks__$1 = cljs.core.set.call(null,ks);
var iter__17280__auto__ = ((function (ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163){
return (function plumbing$fnk$schema$split_schema_$_iter__28123(s__28124){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163){
return (function (){
var s__28124__$1 = s__28124;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28124__$1);
if(temp__4425__auto__){
var s__28124__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28124__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__28124__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__28126 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__28125 = (0);
while(true){
if((i__28125 < size__17279__auto__)){
var in_QMARK_ = cljs.core._nth.call(null,c__17278__auto__,i__28125);
cljs.core.chunk_append.call(null,b__28126,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17280__auto__ = ((function (i__28125,in_QMARK_,c__17278__auto__,size__17279__auto__,b__28126,s__28124__$2,temp__4425__auto__,ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163){
return (function plumbing$fnk$schema$split_schema_$_iter__28123_$_iter__28143(s__28144){
return (new cljs.core.LazySeq(null,((function (i__28125,in_QMARK_,c__17278__auto__,size__17279__auto__,b__28126,s__28124__$2,temp__4425__auto__,ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163){
return (function (){
var s__28144__$1 = s__28144;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__28144__$1);
if(temp__4425__auto____$1){
var s__28144__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28144__$2)){
var c__17278__auto____$1 = cljs.core.chunk_first.call(null,s__28144__$2);
var size__17279__auto____$1 = cljs.core.count.call(null,c__17278__auto____$1);
var b__28146 = cljs.core.chunk_buffer.call(null,size__17279__auto____$1);
if((function (){var i__28145 = (0);
while(true){
if((i__28145 < size__17279__auto____$1)){
var vec__28149 = cljs.core._nth.call(null,c__17278__auto____$1,i__28145);
var k = cljs.core.nth.call(null,vec__28149,(0),null);
var v = cljs.core.nth.call(null,vec__28149,(1),null);
if(cljs.core.truth_((function (){var and__16496__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16496__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16496__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__28146,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__28167 = (i__28145 + (1));
i__28145 = G__28167;
continue;
} else {
var G__28168 = (i__28145 + (1));
i__28145 = G__28168;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28146),plumbing$fnk$schema$split_schema_$_iter__28123_$_iter__28143.call(null,cljs.core.chunk_rest.call(null,s__28144__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28146),null);
}
} else {
var vec__28150 = cljs.core.first.call(null,s__28144__$2);
var k = cljs.core.nth.call(null,vec__28150,(0),null);
var v = cljs.core.nth.call(null,vec__28150,(1),null);
if(cljs.core.truth_((function (){var and__16496__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16496__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16496__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__28123_$_iter__28143.call(null,cljs.core.rest.call(null,s__28144__$2)));
} else {
var G__28169 = cljs.core.rest.call(null,s__28144__$2);
s__28144__$1 = G__28169;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__28125,in_QMARK_,c__17278__auto__,size__17279__auto__,b__28126,s__28124__$2,temp__4425__auto__,ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163))
,null,null));
});})(i__28125,in_QMARK_,c__17278__auto__,size__17279__auto__,b__28126,s__28124__$2,temp__4425__auto__,ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163))
;
return iter__17280__auto__.call(null,s);
})()));

var G__28170 = (i__28125 + (1));
i__28125 = G__28170;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28126),plumbing$fnk$schema$split_schema_$_iter__28123.call(null,cljs.core.chunk_rest.call(null,s__28124__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28126),null);
}
} else {
var in_QMARK_ = cljs.core.first.call(null,s__28124__$2);
return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__17280__auto__ = ((function (in_QMARK_,s__28124__$2,temp__4425__auto__,ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163){
return (function plumbing$fnk$schema$split_schema_$_iter__28123_$_iter__28151(s__28152){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__28124__$2,temp__4425__auto__,ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163){
return (function (){
var s__28152__$1 = s__28152;
while(true){
var temp__4425__auto____$1 = cljs.core.seq.call(null,s__28152__$1);
if(temp__4425__auto____$1){
var s__28152__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28152__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__28152__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__28154 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__28153 = (0);
while(true){
if((i__28153 < size__17279__auto__)){
var vec__28157 = cljs.core._nth.call(null,c__17278__auto__,i__28153);
var k = cljs.core.nth.call(null,vec__28157,(0),null);
var v = cljs.core.nth.call(null,vec__28157,(1),null);
if(cljs.core.truth_((function (){var and__16496__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16496__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16496__auto__;
}
})())){
cljs.core.chunk_append.call(null,b__28154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__28171 = (i__28153 + (1));
i__28153 = G__28171;
continue;
} else {
var G__28172 = (i__28153 + (1));
i__28153 = G__28172;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28154),plumbing$fnk$schema$split_schema_$_iter__28123_$_iter__28151.call(null,cljs.core.chunk_rest.call(null,s__28152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28154),null);
}
} else {
var vec__28158 = cljs.core.first.call(null,s__28152__$2);
var k = cljs.core.nth.call(null,vec__28158,(0),null);
var v = cljs.core.nth.call(null,vec__28158,(1),null);
if(cljs.core.truth_((function (){var and__16496__auto__ = schema.core.specific_key_QMARK_.call(null,k);
if(cljs.core.truth_(and__16496__auto__)){
return cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)));
} else {
return and__16496__auto__;
}
})())){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__28123_$_iter__28151.call(null,cljs.core.rest.call(null,s__28152__$2)));
} else {
var G__28173 = cljs.core.rest.call(null,s__28152__$2);
s__28152__$1 = G__28173;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__28124__$2,temp__4425__auto__,ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163))
,null,null));
});})(in_QMARK_,s__28124__$2,temp__4425__auto__,ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163))
;
return iter__17280__auto__.call(null,s);
})()),plumbing$fnk$schema$split_schema_$_iter__28123.call(null,cljs.core.rest.call(null,s__28124__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163))
,null,null));
});})(ks__$1,validate__18844__auto__,ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163))
;
return iter__17280__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__18844__auto__)){
var temp__4425__auto___28174 = output_checker28084_28163.call(null,o__18847__auto__);
if(cljs.core.truth_(temp__4425__auto___28174)){
var error__18846__auto___28175 = temp__4425__auto___28174;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Return a pair [ks-part non-ks-part], with any extra schema removed."], null)),cljs.core.pr_str.call(null,error__18846__auto___28175)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28081_28160,new cljs.core.Keyword(null,"value","value",305978217),o__18847__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___28175], null));
} else {
}
} else {
}

return o__18847__auto__;
});})(ufv___28159,output_schema28081_28160,input_schema28082_28161,input_checker28083_28162,output_checker28084_28163))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema28081_28160,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28082_28161], null)));
var ufv___28206 = schema.utils.use_fn_validation;
var output_schema28176_28207 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema28177_28208 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker28178_28209 = schema.core.checker.call(null,input_schema28177_28208);
var output_checker28179_28210 = schema.core.checker.call(null,output_schema28176_28207);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 *   Returns: GraphIOSchemata
 * 
 *   Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___28206,output_schema28176_28207,input_schema28177_28208,input_checker28178_28209,output_checker28179_28210){
return (function plumbing$fnk$schema$sequence_schemata(G__28180,G__28181){
var validate__18844__auto__ = ufv___28206.get_cell();
if(cljs.core.truth_(validate__18844__auto__)){
var args__18845__auto___28211 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__28180,G__28181], null);
var temp__4425__auto___28212 = input_checker28178_28209.call(null,args__18845__auto___28211);
if(cljs.core.truth_(temp__4425__auto___28212)){
var error__18846__auto___28213 = temp__4425__auto___28212;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__18846__auto___28213)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema28177_28208,new cljs.core.Keyword(null,"value","value",305978217),args__18845__auto___28211,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___28213], null));
} else {
}
} else {
}

var o__18847__auto__ = (function (){var G__28197 = G__28180;
var vec__28199 = G__28197;
var i1 = cljs.core.nth.call(null,vec__28199,(0),null);
var o1 = cljs.core.nth.call(null,vec__28199,(1),null);
var G__28198 = G__28181;
var vec__28200 = G__28198;
var k = cljs.core.nth.call(null,vec__28200,(0),null);
var vec__28201 = cljs.core.nth.call(null,vec__28200,(1),null);
var i2 = cljs.core.nth.call(null,vec__28201,(0),null);
var o2 = cljs.core.nth.call(null,vec__28201,(1),null);
var G__28197__$1 = G__28197;
var G__28198__$1 = G__28198;
while(true){
var vec__28202 = G__28197__$1;
var i1__$1 = cljs.core.nth.call(null,vec__28202,(0),null);
var o1__$1 = cljs.core.nth.call(null,vec__28202,(1),null);
var vec__28203 = G__28198__$1;
var k__$1 = cljs.core.nth.call(null,vec__28203,(0),null);
var vec__28204 = cljs.core.nth.call(null,vec__28203,(1),null);
var i2__$1 = cljs.core.nth.call(null,vec__28204,(0),null);
var o2__$1 = cljs.core.nth.call(null,vec__28204,(1),null);
if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}

if(cljs.core.not.call(null,plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}

var vec__28205 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));
var used = cljs.core.nth.call(null,vec__28205,(0),null);
var unused = cljs.core.nth.call(null,vec__28205,(1),null);
plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__18844__auto__)){
var temp__4425__auto___28214 = output_checker28179_28210.call(null,o__18847__auto__);
if(cljs.core.truth_(temp__4425__auto___28214)){
var error__18846__auto___28215 = temp__4425__auto___28214;
throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",cljs.core.with_meta(new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Symbol(null,"GraphIOSchemata","GraphIOSchemata",-2137701253,null),new cljs.core.Keyword(null,"doc","doc",1913296891),"Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,\n   return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))"], null)),cljs.core.pr_str.call(null,error__18846__auto___28215)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("schema.core","error","schema.core/error",1991454308),new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema28176_28207,new cljs.core.Keyword(null,"value","value",305978217),o__18847__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__18846__auto___28215], null));
} else {
}
} else {
}

return o__18847__auto__;
});})(ufv___28206,output_schema28176_28207,input_schema28177_28208,input_checker28178_28209,output_checker28179_28210))
;

schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema28176_28207,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema28177_28208], null)));

//# sourceMappingURL=schema.js.map?rel=1440252242858