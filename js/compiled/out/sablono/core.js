// Compiled by ClojureScript 1.7.107 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__30111__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__30110 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__30110,(0),null);
var body = cljs.core.nthnext.call(null,vec__30110,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__30111 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30112__i = 0, G__30112__a = new Array(arguments.length -  0);
while (G__30112__i < G__30112__a.length) {G__30112__a[G__30112__i] = arguments[G__30112__i + 0]; ++G__30112__i;}
  args = new cljs.core.IndexedSeq(G__30112__a,0);
} 
return G__30111__delegate.call(this,args);};
G__30111.cljs$lang$maxFixedArity = 0;
G__30111.cljs$lang$applyTo = (function (arglist__30113){
var args = cljs.core.seq(arglist__30113);
return G__30111__delegate(args);
});
G__30111.cljs$core$IFn$_invoke$arity$variadic = G__30111__delegate;
return G__30111;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__17280__auto__ = (function sablono$core$update_arglists_$_iter__30118(s__30119){
return (new cljs.core.LazySeq(null,(function (){
var s__30119__$1 = s__30119;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30119__$1);
if(temp__4425__auto__){
var s__30119__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30119__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__30119__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__30121 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__30120 = (0);
while(true){
if((i__30120 < size__17279__auto__)){
var args = cljs.core._nth.call(null,c__17278__auto__,i__30120);
cljs.core.chunk_append.call(null,b__30121,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__30122 = (i__30120 + (1));
i__30120 = G__30122;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30121),sablono$core$update_arglists_$_iter__30118.call(null,cljs.core.chunk_rest.call(null,s__30119__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30121),null);
}
} else {
var args = cljs.core.first.call(null,s__30119__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__30118.call(null,cljs.core.rest.call(null,s__30119__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17280__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__17574__auto__ = [];
var len__17567__auto___30128 = arguments.length;
var i__17568__auto___30129 = (0);
while(true){
if((i__17568__auto___30129 < len__17567__auto___30128)){
args__17574__auto__.push((arguments[i__17568__auto___30129]));

var G__30130 = (i__17568__auto___30129 + (1));
i__17568__auto___30129 = G__30130;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((0) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__17575__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__17280__auto__ = (function sablono$core$iter__30124(s__30125){
return (new cljs.core.LazySeq(null,(function (){
var s__30125__$1 = s__30125;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30125__$1);
if(temp__4425__auto__){
var s__30125__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30125__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__30125__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__30127 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__30126 = (0);
while(true){
if((i__30126 < size__17279__auto__)){
var style = cljs.core._nth.call(null,c__17278__auto__,i__30126);
cljs.core.chunk_append.call(null,b__30127,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__30131 = (i__30126 + (1));
i__30126 = G__30131;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30127),sablono$core$iter__30124.call(null,cljs.core.chunk_rest.call(null,s__30125__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30127),null);
}
} else {
var style = cljs.core.first.call(null,s__30125__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__30124.call(null,cljs.core.rest.call(null,s__30125__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17280__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq30123){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30123));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to30132 = (function sablono$core$link_to30132(var_args){
var args__17574__auto__ = [];
var len__17567__auto___30135 = arguments.length;
var i__17568__auto___30136 = (0);
while(true){
if((i__17568__auto___30136 < len__17567__auto___30135)){
args__17574__auto__.push((arguments[i__17568__auto___30136]));

var G__30137 = (i__17568__auto___30136 + (1));
i__17568__auto___30136 = G__30137;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((1) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((1)),(0))):null);
return sablono.core.link_to30132.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17575__auto__);
});

sablono.core.link_to30132.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to30132.cljs$lang$maxFixedArity = (1);

sablono.core.link_to30132.cljs$lang$applyTo = (function (seq30133){
var G__30134 = cljs.core.first.call(null,seq30133);
var seq30133__$1 = cljs.core.next.call(null,seq30133);
return sablono.core.link_to30132.cljs$core$IFn$_invoke$arity$variadic(G__30134,seq30133__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to30132);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to30138 = (function sablono$core$mail_to30138(var_args){
var args__17574__auto__ = [];
var len__17567__auto___30143 = arguments.length;
var i__17568__auto___30144 = (0);
while(true){
if((i__17568__auto___30144 < len__17567__auto___30143)){
args__17574__auto__.push((arguments[i__17568__auto___30144]));

var G__30145 = (i__17568__auto___30144 + (1));
i__17568__auto___30144 = G__30145;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((1) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((1)),(0))):null);
return sablono.core.mail_to30138.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17575__auto__);
});

sablono.core.mail_to30138.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__30141){
var vec__30142 = p__30141;
var content = cljs.core.nth.call(null,vec__30142,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__16508__auto__ = content;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to30138.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to30138.cljs$lang$applyTo = (function (seq30139){
var G__30140 = cljs.core.first.call(null,seq30139);
var seq30139__$1 = cljs.core.next.call(null,seq30139);
return sablono.core.mail_to30138.cljs$core$IFn$_invoke$arity$variadic(G__30140,seq30139__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to30138);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list30146 = (function sablono$core$unordered_list30146(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__17280__auto__ = (function sablono$core$unordered_list30146_$_iter__30151(s__30152){
return (new cljs.core.LazySeq(null,(function (){
var s__30152__$1 = s__30152;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30152__$1);
if(temp__4425__auto__){
var s__30152__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30152__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__30152__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__30154 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__30153 = (0);
while(true){
if((i__30153 < size__17279__auto__)){
var x = cljs.core._nth.call(null,c__17278__auto__,i__30153);
cljs.core.chunk_append.call(null,b__30154,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30155 = (i__30153 + (1));
i__30153 = G__30155;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30154),sablono$core$unordered_list30146_$_iter__30151.call(null,cljs.core.chunk_rest.call(null,s__30152__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30154),null);
}
} else {
var x = cljs.core.first.call(null,s__30152__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list30146_$_iter__30151.call(null,cljs.core.rest.call(null,s__30152__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17280__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list30146);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list30156 = (function sablono$core$ordered_list30156(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__17280__auto__ = (function sablono$core$ordered_list30156_$_iter__30161(s__30162){
return (new cljs.core.LazySeq(null,(function (){
var s__30162__$1 = s__30162;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30162__$1);
if(temp__4425__auto__){
var s__30162__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30162__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__30162__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__30164 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__30163 = (0);
while(true){
if((i__30163 < size__17279__auto__)){
var x = cljs.core._nth.call(null,c__17278__auto__,i__30163);
cljs.core.chunk_append.call(null,b__30164,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__30165 = (i__30163 + (1));
i__30163 = G__30165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30164),sablono$core$ordered_list30156_$_iter__30161.call(null,cljs.core.chunk_rest.call(null,s__30162__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30164),null);
}
} else {
var x = cljs.core.first.call(null,s__30162__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list30156_$_iter__30161.call(null,cljs.core.rest.call(null,s__30162__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17280__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list30156);
/**
 * Create an image element.
 */
sablono.core.image30166 = (function sablono$core$image30166(var_args){
var args30167 = [];
var len__17567__auto___30170 = arguments.length;
var i__17568__auto___30171 = (0);
while(true){
if((i__17568__auto___30171 < len__17567__auto___30170)){
args30167.push((arguments[i__17568__auto___30171]));

var G__30172 = (i__17568__auto___30171 + (1));
i__17568__auto___30171 = G__30172;
continue;
} else {
}
break;
}

var G__30169 = args30167.length;
switch (G__30169) {
case 1:
return sablono.core.image30166.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image30166.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30167.length)].join('')));

}
});

sablono.core.image30166.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image30166.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image30166.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image30166);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__30174_SHARP_,p2__30175_SHARP_){
return [cljs.core.str(p1__30174_SHARP_),cljs.core.str("["),cljs.core.str(p2__30175_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__30176_SHARP_,p2__30177_SHARP_){
return [cljs.core.str(p1__30176_SHARP_),cljs.core.str("-"),cljs.core.str(p2__30177_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field30178 = (function sablono$core$color_field30178(var_args){
var args30179 = [];
var len__17567__auto___30246 = arguments.length;
var i__17568__auto___30247 = (0);
while(true){
if((i__17568__auto___30247 < len__17567__auto___30246)){
args30179.push((arguments[i__17568__auto___30247]));

var G__30248 = (i__17568__auto___30247 + (1));
i__17568__auto___30247 = G__30248;
continue;
} else {
}
break;
}

var G__30181 = args30179.length;
switch (G__30181) {
case 1:
return sablono.core.color_field30178.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field30178.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30179.length)].join('')));

}
});

sablono.core.color_field30178.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.color_field30178.call(null,name__22843__auto__,null);
});

sablono.core.color_field30178.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.color_field30178.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field30178);

/**
 * Creates a date input field.
 */
sablono.core.date_field30182 = (function sablono$core$date_field30182(var_args){
var args30183 = [];
var len__17567__auto___30250 = arguments.length;
var i__17568__auto___30251 = (0);
while(true){
if((i__17568__auto___30251 < len__17567__auto___30250)){
args30183.push((arguments[i__17568__auto___30251]));

var G__30252 = (i__17568__auto___30251 + (1));
i__17568__auto___30251 = G__30252;
continue;
} else {
}
break;
}

var G__30185 = args30183.length;
switch (G__30185) {
case 1:
return sablono.core.date_field30182.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field30182.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30183.length)].join('')));

}
});

sablono.core.date_field30182.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.date_field30182.call(null,name__22843__auto__,null);
});

sablono.core.date_field30182.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.date_field30182.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field30182);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field30186 = (function sablono$core$datetime_field30186(var_args){
var args30187 = [];
var len__17567__auto___30254 = arguments.length;
var i__17568__auto___30255 = (0);
while(true){
if((i__17568__auto___30255 < len__17567__auto___30254)){
args30187.push((arguments[i__17568__auto___30255]));

var G__30256 = (i__17568__auto___30255 + (1));
i__17568__auto___30255 = G__30256;
continue;
} else {
}
break;
}

var G__30189 = args30187.length;
switch (G__30189) {
case 1:
return sablono.core.datetime_field30186.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field30186.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30187.length)].join('')));

}
});

sablono.core.datetime_field30186.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.datetime_field30186.call(null,name__22843__auto__,null);
});

sablono.core.datetime_field30186.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.datetime_field30186.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field30186);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field30190 = (function sablono$core$datetime_local_field30190(var_args){
var args30191 = [];
var len__17567__auto___30258 = arguments.length;
var i__17568__auto___30259 = (0);
while(true){
if((i__17568__auto___30259 < len__17567__auto___30258)){
args30191.push((arguments[i__17568__auto___30259]));

var G__30260 = (i__17568__auto___30259 + (1));
i__17568__auto___30259 = G__30260;
continue;
} else {
}
break;
}

var G__30193 = args30191.length;
switch (G__30193) {
case 1:
return sablono.core.datetime_local_field30190.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field30190.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30191.length)].join('')));

}
});

sablono.core.datetime_local_field30190.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.datetime_local_field30190.call(null,name__22843__auto__,null);
});

sablono.core.datetime_local_field30190.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.datetime_local_field30190.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field30190);

/**
 * Creates a email input field.
 */
sablono.core.email_field30194 = (function sablono$core$email_field30194(var_args){
var args30195 = [];
var len__17567__auto___30262 = arguments.length;
var i__17568__auto___30263 = (0);
while(true){
if((i__17568__auto___30263 < len__17567__auto___30262)){
args30195.push((arguments[i__17568__auto___30263]));

var G__30264 = (i__17568__auto___30263 + (1));
i__17568__auto___30263 = G__30264;
continue;
} else {
}
break;
}

var G__30197 = args30195.length;
switch (G__30197) {
case 1:
return sablono.core.email_field30194.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field30194.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30195.length)].join('')));

}
});

sablono.core.email_field30194.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.email_field30194.call(null,name__22843__auto__,null);
});

sablono.core.email_field30194.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.email_field30194.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field30194);

/**
 * Creates a file input field.
 */
sablono.core.file_field30198 = (function sablono$core$file_field30198(var_args){
var args30199 = [];
var len__17567__auto___30266 = arguments.length;
var i__17568__auto___30267 = (0);
while(true){
if((i__17568__auto___30267 < len__17567__auto___30266)){
args30199.push((arguments[i__17568__auto___30267]));

var G__30268 = (i__17568__auto___30267 + (1));
i__17568__auto___30267 = G__30268;
continue;
} else {
}
break;
}

var G__30201 = args30199.length;
switch (G__30201) {
case 1:
return sablono.core.file_field30198.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field30198.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30199.length)].join('')));

}
});

sablono.core.file_field30198.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.file_field30198.call(null,name__22843__auto__,null);
});

sablono.core.file_field30198.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.file_field30198.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field30198);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field30202 = (function sablono$core$hidden_field30202(var_args){
var args30203 = [];
var len__17567__auto___30270 = arguments.length;
var i__17568__auto___30271 = (0);
while(true){
if((i__17568__auto___30271 < len__17567__auto___30270)){
args30203.push((arguments[i__17568__auto___30271]));

var G__30272 = (i__17568__auto___30271 + (1));
i__17568__auto___30271 = G__30272;
continue;
} else {
}
break;
}

var G__30205 = args30203.length;
switch (G__30205) {
case 1:
return sablono.core.hidden_field30202.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field30202.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30203.length)].join('')));

}
});

sablono.core.hidden_field30202.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.hidden_field30202.call(null,name__22843__auto__,null);
});

sablono.core.hidden_field30202.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.hidden_field30202.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field30202);

/**
 * Creates a month input field.
 */
sablono.core.month_field30206 = (function sablono$core$month_field30206(var_args){
var args30207 = [];
var len__17567__auto___30274 = arguments.length;
var i__17568__auto___30275 = (0);
while(true){
if((i__17568__auto___30275 < len__17567__auto___30274)){
args30207.push((arguments[i__17568__auto___30275]));

var G__30276 = (i__17568__auto___30275 + (1));
i__17568__auto___30275 = G__30276;
continue;
} else {
}
break;
}

var G__30209 = args30207.length;
switch (G__30209) {
case 1:
return sablono.core.month_field30206.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field30206.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30207.length)].join('')));

}
});

sablono.core.month_field30206.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.month_field30206.call(null,name__22843__auto__,null);
});

sablono.core.month_field30206.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.month_field30206.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field30206);

/**
 * Creates a number input field.
 */
sablono.core.number_field30210 = (function sablono$core$number_field30210(var_args){
var args30211 = [];
var len__17567__auto___30278 = arguments.length;
var i__17568__auto___30279 = (0);
while(true){
if((i__17568__auto___30279 < len__17567__auto___30278)){
args30211.push((arguments[i__17568__auto___30279]));

var G__30280 = (i__17568__auto___30279 + (1));
i__17568__auto___30279 = G__30280;
continue;
} else {
}
break;
}

var G__30213 = args30211.length;
switch (G__30213) {
case 1:
return sablono.core.number_field30210.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field30210.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30211.length)].join('')));

}
});

sablono.core.number_field30210.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.number_field30210.call(null,name__22843__auto__,null);
});

sablono.core.number_field30210.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.number_field30210.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field30210);

/**
 * Creates a password input field.
 */
sablono.core.password_field30214 = (function sablono$core$password_field30214(var_args){
var args30215 = [];
var len__17567__auto___30282 = arguments.length;
var i__17568__auto___30283 = (0);
while(true){
if((i__17568__auto___30283 < len__17567__auto___30282)){
args30215.push((arguments[i__17568__auto___30283]));

var G__30284 = (i__17568__auto___30283 + (1));
i__17568__auto___30283 = G__30284;
continue;
} else {
}
break;
}

var G__30217 = args30215.length;
switch (G__30217) {
case 1:
return sablono.core.password_field30214.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field30214.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30215.length)].join('')));

}
});

sablono.core.password_field30214.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.password_field30214.call(null,name__22843__auto__,null);
});

sablono.core.password_field30214.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.password_field30214.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field30214);

/**
 * Creates a range input field.
 */
sablono.core.range_field30218 = (function sablono$core$range_field30218(var_args){
var args30219 = [];
var len__17567__auto___30286 = arguments.length;
var i__17568__auto___30287 = (0);
while(true){
if((i__17568__auto___30287 < len__17567__auto___30286)){
args30219.push((arguments[i__17568__auto___30287]));

var G__30288 = (i__17568__auto___30287 + (1));
i__17568__auto___30287 = G__30288;
continue;
} else {
}
break;
}

var G__30221 = args30219.length;
switch (G__30221) {
case 1:
return sablono.core.range_field30218.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field30218.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30219.length)].join('')));

}
});

sablono.core.range_field30218.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.range_field30218.call(null,name__22843__auto__,null);
});

sablono.core.range_field30218.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.range_field30218.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field30218);

/**
 * Creates a search input field.
 */
sablono.core.search_field30222 = (function sablono$core$search_field30222(var_args){
var args30223 = [];
var len__17567__auto___30290 = arguments.length;
var i__17568__auto___30291 = (0);
while(true){
if((i__17568__auto___30291 < len__17567__auto___30290)){
args30223.push((arguments[i__17568__auto___30291]));

var G__30292 = (i__17568__auto___30291 + (1));
i__17568__auto___30291 = G__30292;
continue;
} else {
}
break;
}

var G__30225 = args30223.length;
switch (G__30225) {
case 1:
return sablono.core.search_field30222.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field30222.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30223.length)].join('')));

}
});

sablono.core.search_field30222.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.search_field30222.call(null,name__22843__auto__,null);
});

sablono.core.search_field30222.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.search_field30222.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field30222);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field30226 = (function sablono$core$tel_field30226(var_args){
var args30227 = [];
var len__17567__auto___30294 = arguments.length;
var i__17568__auto___30295 = (0);
while(true){
if((i__17568__auto___30295 < len__17567__auto___30294)){
args30227.push((arguments[i__17568__auto___30295]));

var G__30296 = (i__17568__auto___30295 + (1));
i__17568__auto___30295 = G__30296;
continue;
} else {
}
break;
}

var G__30229 = args30227.length;
switch (G__30229) {
case 1:
return sablono.core.tel_field30226.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field30226.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30227.length)].join('')));

}
});

sablono.core.tel_field30226.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.tel_field30226.call(null,name__22843__auto__,null);
});

sablono.core.tel_field30226.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.tel_field30226.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field30226);

/**
 * Creates a text input field.
 */
sablono.core.text_field30230 = (function sablono$core$text_field30230(var_args){
var args30231 = [];
var len__17567__auto___30298 = arguments.length;
var i__17568__auto___30299 = (0);
while(true){
if((i__17568__auto___30299 < len__17567__auto___30298)){
args30231.push((arguments[i__17568__auto___30299]));

var G__30300 = (i__17568__auto___30299 + (1));
i__17568__auto___30299 = G__30300;
continue;
} else {
}
break;
}

var G__30233 = args30231.length;
switch (G__30233) {
case 1:
return sablono.core.text_field30230.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field30230.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30231.length)].join('')));

}
});

sablono.core.text_field30230.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.text_field30230.call(null,name__22843__auto__,null);
});

sablono.core.text_field30230.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.text_field30230.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field30230);

/**
 * Creates a time input field.
 */
sablono.core.time_field30234 = (function sablono$core$time_field30234(var_args){
var args30235 = [];
var len__17567__auto___30302 = arguments.length;
var i__17568__auto___30303 = (0);
while(true){
if((i__17568__auto___30303 < len__17567__auto___30302)){
args30235.push((arguments[i__17568__auto___30303]));

var G__30304 = (i__17568__auto___30303 + (1));
i__17568__auto___30303 = G__30304;
continue;
} else {
}
break;
}

var G__30237 = args30235.length;
switch (G__30237) {
case 1:
return sablono.core.time_field30234.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field30234.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30235.length)].join('')));

}
});

sablono.core.time_field30234.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.time_field30234.call(null,name__22843__auto__,null);
});

sablono.core.time_field30234.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.time_field30234.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field30234);

/**
 * Creates a url input field.
 */
sablono.core.url_field30238 = (function sablono$core$url_field30238(var_args){
var args30239 = [];
var len__17567__auto___30306 = arguments.length;
var i__17568__auto___30307 = (0);
while(true){
if((i__17568__auto___30307 < len__17567__auto___30306)){
args30239.push((arguments[i__17568__auto___30307]));

var G__30308 = (i__17568__auto___30307 + (1));
i__17568__auto___30307 = G__30308;
continue;
} else {
}
break;
}

var G__30241 = args30239.length;
switch (G__30241) {
case 1:
return sablono.core.url_field30238.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field30238.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30239.length)].join('')));

}
});

sablono.core.url_field30238.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.url_field30238.call(null,name__22843__auto__,null);
});

sablono.core.url_field30238.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.url_field30238.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field30238);

/**
 * Creates a week input field.
 */
sablono.core.week_field30242 = (function sablono$core$week_field30242(var_args){
var args30243 = [];
var len__17567__auto___30310 = arguments.length;
var i__17568__auto___30311 = (0);
while(true){
if((i__17568__auto___30311 < len__17567__auto___30310)){
args30243.push((arguments[i__17568__auto___30311]));

var G__30312 = (i__17568__auto___30311 + (1));
i__17568__auto___30311 = G__30312;
continue;
} else {
}
break;
}

var G__30245 = args30243.length;
switch (G__30245) {
case 1:
return sablono.core.week_field30242.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field30242.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30243.length)].join('')));

}
});

sablono.core.week_field30242.cljs$core$IFn$_invoke$arity$1 = (function (name__22843__auto__){
return sablono.core.week_field30242.call(null,name__22843__auto__,null);
});

sablono.core.week_field30242.cljs$core$IFn$_invoke$arity$2 = (function (name__22843__auto__,value__22844__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__22843__auto__,value__22844__auto__);
});

sablono.core.week_field30242.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field30242);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box30314 = (function sablono$core$check_box30314(var_args){
var args30315 = [];
var len__17567__auto___30318 = arguments.length;
var i__17568__auto___30319 = (0);
while(true){
if((i__17568__auto___30319 < len__17567__auto___30318)){
args30315.push((arguments[i__17568__auto___30319]));

var G__30320 = (i__17568__auto___30319 + (1));
i__17568__auto___30319 = G__30320;
continue;
} else {
}
break;
}

var G__30317 = args30315.length;
switch (G__30317) {
case 1:
return sablono.core.check_box30314.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box30314.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box30314.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30315.length)].join('')));

}
});

sablono.core.check_box30314.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box30314.call(null,name,null);
});

sablono.core.check_box30314.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box30314.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box30314.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box30314.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box30314);
/**
 * Creates a radio button.
 */
sablono.core.radio_button30322 = (function sablono$core$radio_button30322(var_args){
var args30323 = [];
var len__17567__auto___30326 = arguments.length;
var i__17568__auto___30327 = (0);
while(true){
if((i__17568__auto___30327 < len__17567__auto___30326)){
args30323.push((arguments[i__17568__auto___30327]));

var G__30328 = (i__17568__auto___30327 + (1));
i__17568__auto___30327 = G__30328;
continue;
} else {
}
break;
}

var G__30325 = args30323.length;
switch (G__30325) {
case 1:
return sablono.core.radio_button30322.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button30322.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button30322.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30323.length)].join('')));

}
});

sablono.core.radio_button30322.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button30322.call(null,group,null);
});

sablono.core.radio_button30322.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button30322.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button30322.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button30322.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button30322);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options30330 = (function sablono$core$select_options30330(coll){
var iter__17280__auto__ = (function sablono$core$select_options30330_$_iter__30339(s__30340){
return (new cljs.core.LazySeq(null,(function (){
var s__30340__$1 = s__30340;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__30340__$1);
if(temp__4425__auto__){
var s__30340__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__30340__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__30340__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__30342 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__30341 = (0);
while(true){
if((i__30341 < size__17279__auto__)){
var x = cljs.core._nth.call(null,c__17278__auto__,i__30341);
cljs.core.chunk_append.call(null,b__30342,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30345 = x;
var text = cljs.core.nth.call(null,vec__30345,(0),null);
var val = cljs.core.nth.call(null,vec__30345,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30345,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options30330.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__30347 = (i__30341 + (1));
i__30341 = G__30347;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30342),sablono$core$select_options30330_$_iter__30339.call(null,cljs.core.chunk_rest.call(null,s__30340__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__30342),null);
}
} else {
var x = cljs.core.first.call(null,s__30340__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__30346 = x;
var text = cljs.core.nth.call(null,vec__30346,(0),null);
var val = cljs.core.nth.call(null,vec__30346,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__30346,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono$core$select_options30330.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options30330_$_iter__30339.call(null,cljs.core.rest.call(null,s__30340__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__17280__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options30330);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down30348 = (function sablono$core$drop_down30348(var_args){
var args30349 = [];
var len__17567__auto___30352 = arguments.length;
var i__17568__auto___30353 = (0);
while(true){
if((i__17568__auto___30353 < len__17567__auto___30352)){
args30349.push((arguments[i__17568__auto___30353]));

var G__30354 = (i__17568__auto___30353 + (1));
i__17568__auto___30353 = G__30354;
continue;
} else {
}
break;
}

var G__30351 = args30349.length;
switch (G__30351) {
case 2:
return sablono.core.drop_down30348.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down30348.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30349.length)].join('')));

}
});

sablono.core.drop_down30348.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down30348.call(null,name,options,null);
});

sablono.core.drop_down30348.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down30348.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down30348);
/**
 * Creates a text area element.
 */
sablono.core.text_area30356 = (function sablono$core$text_area30356(var_args){
var args30357 = [];
var len__17567__auto___30360 = arguments.length;
var i__17568__auto___30361 = (0);
while(true){
if((i__17568__auto___30361 < len__17567__auto___30360)){
args30357.push((arguments[i__17568__auto___30361]));

var G__30362 = (i__17568__auto___30361 + (1));
i__17568__auto___30361 = G__30362;
continue;
} else {
}
break;
}

var G__30359 = args30357.length;
switch (G__30359) {
case 1:
return sablono.core.text_area30356.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area30356.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args30357.length)].join('')));

}
});

sablono.core.text_area30356.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area30356.call(null,name,null);
});

sablono.core.text_area30356.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area30356.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area30356);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label30364 = (function sablono$core$label30364(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label30364);
/**
 * Creates a submit button.
 */
sablono.core.submit_button30365 = (function sablono$core$submit_button30365(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button30365);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button30366 = (function sablono$core$reset_button30366(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button30366);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to30367 = (function sablono$core$form_to30367(var_args){
var args__17574__auto__ = [];
var len__17567__auto___30372 = arguments.length;
var i__17568__auto___30373 = (0);
while(true){
if((i__17568__auto___30373 < len__17567__auto___30372)){
args__17574__auto__.push((arguments[i__17568__auto___30373]));

var G__30374 = (i__17568__auto___30373 + (1));
i__17568__auto___30373 = G__30374;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((1) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((1)),(0))):null);
return sablono.core.form_to30367.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17575__auto__);
});

sablono.core.form_to30367.cljs$core$IFn$_invoke$arity$variadic = (function (p__30370,body){
var vec__30371 = p__30370;
var method = cljs.core.nth.call(null,vec__30371,(0),null);
var action = cljs.core.nth.call(null,vec__30371,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to30367.cljs$lang$maxFixedArity = (1);

sablono.core.form_to30367.cljs$lang$applyTo = (function (seq30368){
var G__30369 = cljs.core.first.call(null,seq30368);
var seq30368__$1 = cljs.core.next.call(null,seq30368);
return sablono.core.form_to30367.cljs$core$IFn$_invoke$arity$variadic(G__30369,seq30368__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to30367);

//# sourceMappingURL=core.js.map?rel=1440252246350