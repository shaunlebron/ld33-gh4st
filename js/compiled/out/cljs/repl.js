// Compiled by ClojureScript 1.7.107 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31519_31533 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31520_31534 = null;
var count__31521_31535 = (0);
var i__31522_31536 = (0);
while(true){
if((i__31522_31536 < count__31521_31535)){
var f_31537 = cljs.core._nth.call(null,chunk__31520_31534,i__31522_31536);
cljs.core.println.call(null,"  ",f_31537);

var G__31538 = seq__31519_31533;
var G__31539 = chunk__31520_31534;
var G__31540 = count__31521_31535;
var G__31541 = (i__31522_31536 + (1));
seq__31519_31533 = G__31538;
chunk__31520_31534 = G__31539;
count__31521_31535 = G__31540;
i__31522_31536 = G__31541;
continue;
} else {
var temp__4425__auto___31542 = cljs.core.seq.call(null,seq__31519_31533);
if(temp__4425__auto___31542){
var seq__31519_31543__$1 = temp__4425__auto___31542;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31519_31543__$1)){
var c__17311__auto___31544 = cljs.core.chunk_first.call(null,seq__31519_31543__$1);
var G__31545 = cljs.core.chunk_rest.call(null,seq__31519_31543__$1);
var G__31546 = c__17311__auto___31544;
var G__31547 = cljs.core.count.call(null,c__17311__auto___31544);
var G__31548 = (0);
seq__31519_31533 = G__31545;
chunk__31520_31534 = G__31546;
count__31521_31535 = G__31547;
i__31522_31536 = G__31548;
continue;
} else {
var f_31549 = cljs.core.first.call(null,seq__31519_31543__$1);
cljs.core.println.call(null,"  ",f_31549);

var G__31550 = cljs.core.next.call(null,seq__31519_31543__$1);
var G__31551 = null;
var G__31552 = (0);
var G__31553 = (0);
seq__31519_31533 = G__31550;
chunk__31520_31534 = G__31551;
count__31521_31535 = G__31552;
i__31522_31536 = G__31553;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_31554 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16508__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_31554);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_31554)))?cljs.core.second.call(null,arglists_31554):arglists_31554));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__31523 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__31524 = null;
var count__31525 = (0);
var i__31526 = (0);
while(true){
if((i__31526 < count__31525)){
var vec__31527 = cljs.core._nth.call(null,chunk__31524,i__31526);
var name = cljs.core.nth.call(null,vec__31527,(0),null);
var map__31528 = cljs.core.nth.call(null,vec__31527,(1),null);
var map__31528__$1 = ((((!((map__31528 == null)))?((((map__31528.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31528.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31528):map__31528);
var doc = cljs.core.get.call(null,map__31528__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31528__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31555 = seq__31523;
var G__31556 = chunk__31524;
var G__31557 = count__31525;
var G__31558 = (i__31526 + (1));
seq__31523 = G__31555;
chunk__31524 = G__31556;
count__31525 = G__31557;
i__31526 = G__31558;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__31523);
if(temp__4425__auto__){
var seq__31523__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31523__$1)){
var c__17311__auto__ = cljs.core.chunk_first.call(null,seq__31523__$1);
var G__31559 = cljs.core.chunk_rest.call(null,seq__31523__$1);
var G__31560 = c__17311__auto__;
var G__31561 = cljs.core.count.call(null,c__17311__auto__);
var G__31562 = (0);
seq__31523 = G__31559;
chunk__31524 = G__31560;
count__31525 = G__31561;
i__31526 = G__31562;
continue;
} else {
var vec__31530 = cljs.core.first.call(null,seq__31523__$1);
var name = cljs.core.nth.call(null,vec__31530,(0),null);
var map__31531 = cljs.core.nth.call(null,vec__31530,(1),null);
var map__31531__$1 = ((((!((map__31531 == null)))?((((map__31531.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31531.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31531):map__31531);
var doc = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__31531__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__31563 = cljs.core.next.call(null,seq__31523__$1);
var G__31564 = null;
var G__31565 = (0);
var G__31566 = (0);
seq__31523 = G__31563;
chunk__31524 = G__31564;
count__31525 = G__31565;
i__31526 = G__31566;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1440252247426