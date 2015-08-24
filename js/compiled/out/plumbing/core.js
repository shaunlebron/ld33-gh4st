// Compiled by ClojureScript 1.7.107 {}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
 * Updates the value in map m at k with the function f.
 * 
 *  Like update-in, but for updating a single top-level key.
 *  Any additional args will be passed to f after the value.
 * 
 *  WARNING As of Clojure 1.7 this function exists in clojure.core and
 *  will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(var_args){
var args28577 = [];
var len__17567__auto___28586 = arguments.length;
var i__17568__auto___28587 = (0);
while(true){
if((i__17568__auto___28587 < len__17567__auto___28586)){
args28577.push((arguments[i__17568__auto___28587]));

var G__28588 = (i__17568__auto___28587 + (1));
i__17568__auto___28587 = G__28588;
continue;
} else {
}
break;
}

var G__28585 = args28577.length;
switch (G__28585) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__17586__auto__ = (new cljs.core.IndexedSeq(args28577.slice((5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__17586__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq28578){
var G__28579 = cljs.core.first.call(null,seq28578);
var seq28578__$1 = cljs.core.next.call(null,seq28578);
var G__28580 = cljs.core.first.call(null,seq28578__$1);
var seq28578__$2 = cljs.core.next.call(null,seq28578__$1);
var G__28581 = cljs.core.first.call(null,seq28578__$2);
var seq28578__$3 = cljs.core.next.call(null,seq28578__$2);
var G__28582 = cljs.core.first.call(null,seq28578__$3);
var seq28578__$4 = cljs.core.next.call(null,seq28578__$3);
var G__28583 = cljs.core.first.call(null,seq28578__$4);
var seq28578__$5 = cljs.core.next.call(null,seq28578__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__28579,G__28580,G__28581,G__28582,G__28583,seq28578__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_.call(null,m)){
return cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else {
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__20768__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__28598_28604 = cljs.core.seq.call(null,m);
var chunk__28599_28605 = null;
var count__28600_28606 = (0);
var i__28601_28607 = (0);
while(true){
if((i__28601_28607 < count__28600_28606)){
var vec__28602_28608 = cljs.core._nth.call(null,chunk__28599_28605,i__28601_28607);
var k_28609 = cljs.core.nth.call(null,vec__28602_28608,(0),null);
var v_28610 = cljs.core.nth.call(null,vec__28602_28608,(1),null);
var m28597_28611 = cljs.core.deref.call(null,m_atom__20768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20768__auto__,cljs.core.assoc_BANG_.call(null,m28597_28611,k_28609,f.call(null,v_28610)));

var G__28612 = seq__28598_28604;
var G__28613 = chunk__28599_28605;
var G__28614 = count__28600_28606;
var G__28615 = (i__28601_28607 + (1));
seq__28598_28604 = G__28612;
chunk__28599_28605 = G__28613;
count__28600_28606 = G__28614;
i__28601_28607 = G__28615;
continue;
} else {
var temp__4425__auto___28616 = cljs.core.seq.call(null,seq__28598_28604);
if(temp__4425__auto___28616){
var seq__28598_28617__$1 = temp__4425__auto___28616;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28598_28617__$1)){
var c__17311__auto___28618 = cljs.core.chunk_first.call(null,seq__28598_28617__$1);
var G__28619 = cljs.core.chunk_rest.call(null,seq__28598_28617__$1);
var G__28620 = c__17311__auto___28618;
var G__28621 = cljs.core.count.call(null,c__17311__auto___28618);
var G__28622 = (0);
seq__28598_28604 = G__28619;
chunk__28599_28605 = G__28620;
count__28600_28606 = G__28621;
i__28601_28607 = G__28622;
continue;
} else {
var vec__28603_28623 = cljs.core.first.call(null,seq__28598_28617__$1);
var k_28624 = cljs.core.nth.call(null,vec__28603_28623,(0),null);
var v_28625 = cljs.core.nth.call(null,vec__28603_28623,(1),null);
var m28597_28626 = cljs.core.deref.call(null,m_atom__20768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20768__auto__,cljs.core.assoc_BANG_.call(null,m28597_28626,k_28624,f.call(null,v_28625)));

var G__28627 = cljs.core.next.call(null,seq__28598_28617__$1);
var G__28628 = null;
var G__28629 = (0);
var G__28630 = (0);
seq__28598_28604 = G__28627;
chunk__28599_28605 = G__28628;
count__28600_28606 = G__28629;
i__28601_28607 = G__28630;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__20768__auto__));

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_.call(null,m)){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){
return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__20768__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__28639_28645 = cljs.core.seq.call(null,m);
var chunk__28640_28646 = null;
var count__28641_28647 = (0);
var i__28642_28648 = (0);
while(true){
if((i__28642_28648 < count__28641_28647)){
var vec__28643_28649 = cljs.core._nth.call(null,chunk__28640_28646,i__28642_28648);
var k_28650 = cljs.core.nth.call(null,vec__28643_28649,(0),null);
var v_28651 = cljs.core.nth.call(null,vec__28643_28649,(1),null);
var m28638_28652 = cljs.core.deref.call(null,m_atom__20768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20768__auto__,cljs.core.assoc_BANG_.call(null,m28638_28652,f.call(null,k_28650),v_28651));

var G__28653 = seq__28639_28645;
var G__28654 = chunk__28640_28646;
var G__28655 = count__28641_28647;
var G__28656 = (i__28642_28648 + (1));
seq__28639_28645 = G__28653;
chunk__28640_28646 = G__28654;
count__28641_28647 = G__28655;
i__28642_28648 = G__28656;
continue;
} else {
var temp__4425__auto___28657 = cljs.core.seq.call(null,seq__28639_28645);
if(temp__4425__auto___28657){
var seq__28639_28658__$1 = temp__4425__auto___28657;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28639_28658__$1)){
var c__17311__auto___28659 = cljs.core.chunk_first.call(null,seq__28639_28658__$1);
var G__28660 = cljs.core.chunk_rest.call(null,seq__28639_28658__$1);
var G__28661 = c__17311__auto___28659;
var G__28662 = cljs.core.count.call(null,c__17311__auto___28659);
var G__28663 = (0);
seq__28639_28645 = G__28660;
chunk__28640_28646 = G__28661;
count__28641_28647 = G__28662;
i__28642_28648 = G__28663;
continue;
} else {
var vec__28644_28664 = cljs.core.first.call(null,seq__28639_28658__$1);
var k_28665 = cljs.core.nth.call(null,vec__28644_28664,(0),null);
var v_28666 = cljs.core.nth.call(null,vec__28644_28664,(1),null);
var m28638_28667 = cljs.core.deref.call(null,m_atom__20768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20768__auto__,cljs.core.assoc_BANG_.call(null,m28638_28667,f.call(null,k_28665),v_28666));

var G__28668 = cljs.core.next.call(null,seq__28639_28658__$1);
var G__28669 = null;
var G__28670 = (0);
var G__28671 = (0);
seq__28639_28645 = G__28668;
chunk__28640_28646 = G__28669;
count__28641_28647 = G__28670;
i__28642_28648 = G__28671;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__20768__auto__));
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__20768__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__28678_28682 = cljs.core.seq.call(null,ks);
var chunk__28679_28683 = null;
var count__28680_28684 = (0);
var i__28681_28685 = (0);
while(true){
if((i__28681_28685 < count__28680_28684)){
var k_28686 = cljs.core._nth.call(null,chunk__28679_28683,i__28681_28685);
var m28677_28687 = cljs.core.deref.call(null,m_atom__20768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20768__auto__,cljs.core.assoc_BANG_.call(null,m28677_28687,k_28686,f.call(null,k_28686)));

var G__28688 = seq__28678_28682;
var G__28689 = chunk__28679_28683;
var G__28690 = count__28680_28684;
var G__28691 = (i__28681_28685 + (1));
seq__28678_28682 = G__28688;
chunk__28679_28683 = G__28689;
count__28680_28684 = G__28690;
i__28681_28685 = G__28691;
continue;
} else {
var temp__4425__auto___28692 = cljs.core.seq.call(null,seq__28678_28682);
if(temp__4425__auto___28692){
var seq__28678_28693__$1 = temp__4425__auto___28692;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28678_28693__$1)){
var c__17311__auto___28694 = cljs.core.chunk_first.call(null,seq__28678_28693__$1);
var G__28695 = cljs.core.chunk_rest.call(null,seq__28678_28693__$1);
var G__28696 = c__17311__auto___28694;
var G__28697 = cljs.core.count.call(null,c__17311__auto___28694);
var G__28698 = (0);
seq__28678_28682 = G__28695;
chunk__28679_28683 = G__28696;
count__28680_28684 = G__28697;
i__28681_28685 = G__28698;
continue;
} else {
var k_28699 = cljs.core.first.call(null,seq__28678_28693__$1);
var m28677_28700 = cljs.core.deref.call(null,m_atom__20768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20768__auto__,cljs.core.assoc_BANG_.call(null,m28677_28700,k_28699,f.call(null,k_28699)));

var G__28701 = cljs.core.next.call(null,seq__28678_28693__$1);
var G__28702 = null;
var G__28703 = (0);
var G__28704 = (0);
seq__28678_28682 = G__28701;
chunk__28679_28683 = G__28702;
count__28680_28684 = G__28703;
i__28681_28685 = G__28704;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__20768__auto__));
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__20768__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__28711_28715 = cljs.core.seq.call(null,vs);
var chunk__28712_28716 = null;
var count__28713_28717 = (0);
var i__28714_28718 = (0);
while(true){
if((i__28714_28718 < count__28713_28717)){
var v_28719 = cljs.core._nth.call(null,chunk__28712_28716,i__28714_28718);
var m28710_28720 = cljs.core.deref.call(null,m_atom__20768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20768__auto__,cljs.core.assoc_BANG_.call(null,m28710_28720,f.call(null,v_28719),v_28719));

var G__28721 = seq__28711_28715;
var G__28722 = chunk__28712_28716;
var G__28723 = count__28713_28717;
var G__28724 = (i__28714_28718 + (1));
seq__28711_28715 = G__28721;
chunk__28712_28716 = G__28722;
count__28713_28717 = G__28723;
i__28714_28718 = G__28724;
continue;
} else {
var temp__4425__auto___28725 = cljs.core.seq.call(null,seq__28711_28715);
if(temp__4425__auto___28725){
var seq__28711_28726__$1 = temp__4425__auto___28725;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28711_28726__$1)){
var c__17311__auto___28727 = cljs.core.chunk_first.call(null,seq__28711_28726__$1);
var G__28728 = cljs.core.chunk_rest.call(null,seq__28711_28726__$1);
var G__28729 = c__17311__auto___28727;
var G__28730 = cljs.core.count.call(null,c__17311__auto___28727);
var G__28731 = (0);
seq__28711_28715 = G__28728;
chunk__28712_28716 = G__28729;
count__28713_28717 = G__28730;
i__28714_28718 = G__28731;
continue;
} else {
var v_28732 = cljs.core.first.call(null,seq__28711_28726__$1);
var m28710_28733 = cljs.core.deref.call(null,m_atom__20768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20768__auto__,cljs.core.assoc_BANG_.call(null,m28710_28733,f.call(null,v_28732),v_28732));

var G__28734 = cljs.core.next.call(null,seq__28711_28726__$1);
var G__28735 = null;
var G__28736 = (0);
var G__28737 = (0);
seq__28711_28715 = G__28734;
chunk__28712_28716 = G__28735;
count__28713_28717 = G__28736;
i__28714_28718 = G__28737;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__20768__auto__));
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__28738){
var vec__28740 = p__28738;
var k = cljs.core.nth.call(null,vec__28740,(0),null);
var ks = cljs.core.nthnext.call(null,vec__28740,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__16496__auto__ = ks;
if(cljs.core.truth_(and__16496__auto__)){
return plumbing$core$dissoc_in.call(null,cljs.core.get.call(null,m,k),ks);
} else {
return and__16496__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.call(null,m,k,res);
} else {
var res = cljs.core.dissoc.call(null,m,k);
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_.call(null,x)){
var m_atom__20768__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));
var seq__28749_28755 = cljs.core.seq.call(null,x);
var chunk__28750_28756 = null;
var count__28751_28757 = (0);
var i__28752_28758 = (0);
while(true){
if((i__28752_28758 < count__28751_28757)){
var vec__28753_28759 = cljs.core._nth.call(null,chunk__28750_28756,i__28752_28758);
var k_28760 = cljs.core.nth.call(null,vec__28753_28759,(0),null);
var v_28761 = cljs.core.nth.call(null,vec__28753_28759,(1),null);
var m28748_28762 = cljs.core.deref.call(null,m_atom__20768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20768__auto__,cljs.core.assoc_BANG_.call(null,m28748_28762,((typeof k_28760 === 'string')?cljs.core.keyword.call(null,k_28760):k_28760),plumbing$core$keywordize_map.call(null,v_28761)));

var G__28763 = seq__28749_28755;
var G__28764 = chunk__28750_28756;
var G__28765 = count__28751_28757;
var G__28766 = (i__28752_28758 + (1));
seq__28749_28755 = G__28763;
chunk__28750_28756 = G__28764;
count__28751_28757 = G__28765;
i__28752_28758 = G__28766;
continue;
} else {
var temp__4425__auto___28767 = cljs.core.seq.call(null,seq__28749_28755);
if(temp__4425__auto___28767){
var seq__28749_28768__$1 = temp__4425__auto___28767;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28749_28768__$1)){
var c__17311__auto___28769 = cljs.core.chunk_first.call(null,seq__28749_28768__$1);
var G__28770 = cljs.core.chunk_rest.call(null,seq__28749_28768__$1);
var G__28771 = c__17311__auto___28769;
var G__28772 = cljs.core.count.call(null,c__17311__auto___28769);
var G__28773 = (0);
seq__28749_28755 = G__28770;
chunk__28750_28756 = G__28771;
count__28751_28757 = G__28772;
i__28752_28758 = G__28773;
continue;
} else {
var vec__28754_28774 = cljs.core.first.call(null,seq__28749_28768__$1);
var k_28775 = cljs.core.nth.call(null,vec__28754_28774,(0),null);
var v_28776 = cljs.core.nth.call(null,vec__28754_28774,(1),null);
var m28748_28777 = cljs.core.deref.call(null,m_atom__20768__auto__);
cljs.core.reset_BANG_.call(null,m_atom__20768__auto__,cljs.core.assoc_BANG_.call(null,m28748_28777,((typeof k_28775 === 'string')?cljs.core.keyword.call(null,k_28775):k_28775),plumbing$core$keywordize_map.call(null,v_28776)));

var G__28778 = cljs.core.next.call(null,seq__28749_28768__$1);
var G__28779 = null;
var G__28780 = (0);
var G__28781 = (0);
seq__28749_28755 = G__28778;
chunk__28750_28756 = G__28779;
count__28751_28757 = G__28780;
i__28752_28758 = G__28781;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__20768__auto__));
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return cljs.core.map.call(null,plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.mapv.call(null,plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find.call(null,m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__20844__auto__ = temp__4423__auto__;
return cljs.core.val.call(null,pair__20844__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq.call(null,ks)){
var G__28782 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__28783 = cljs.core.next.call(null,ks);
m = G__28782;
ks = G__28783;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(var_args){
var args__17574__auto__ = [];
var len__17567__auto___28794 = arguments.length;
var i__17568__auto___28795 = (0);
while(true){
if((i__17568__auto___28795 < len__17567__auto___28794)){
args__17574__auto__.push((arguments[i__17568__auto___28795]));

var G__28796 = (i__17568__auto___28795 + (1));
i__17568__auto___28795 = G__28796;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((1) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17575__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))))].join('')));
}

return cljs.core.into.call(null,(function (){var or__16508__auto__ = m;
if(cljs.core.truth_(or__16508__auto__)){
return or__16508__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__17280__auto__ = (function plumbing$core$iter__28786(s__28787){
return (new cljs.core.LazySeq(null,(function (){
var s__28787__$1 = s__28787;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28787__$1);
if(temp__4425__auto__){
var s__28787__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28787__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__28787__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__28789 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__28788 = (0);
while(true){
if((i__28788 < size__17279__auto__)){
var vec__28792 = cljs.core._nth.call(null,c__17278__auto__,i__28788);
var k = cljs.core.nth.call(null,vec__28792,(0),null);
var v = cljs.core.nth.call(null,vec__28792,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append.call(null,b__28789,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__28797 = (i__28788 + (1));
i__28788 = G__28797;
continue;
} else {
var G__28798 = (i__28788 + (1));
i__28788 = G__28798;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28789),plumbing$core$iter__28786.call(null,cljs.core.chunk_rest.call(null,s__28787__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28789),null);
}
} else {
var vec__28793 = cljs.core.first.call(null,s__28787__$2);
var k = cljs.core.nth.call(null,vec__28793,(0),null);
var v = cljs.core.nth.call(null,vec__28793,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__28786.call(null,cljs.core.rest.call(null,s__28787__$2)));
} else {
var G__28799 = cljs.core.rest.call(null,s__28787__$2);
s__28787__$1 = G__28799;
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
return iter__17280__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
});

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq28784){
var G__28785 = cljs.core.first.call(null,seq28784);
var seq28784__$1 = cljs.core.next.call(null,seq28784);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__28785,seq28784__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(var_args){
var args__17574__auto__ = [];
var len__17567__auto___28804 = arguments.length;
var i__17568__auto___28805 = (0);
while(true){
if((i__17568__auto___28805 < len__17567__auto___28804)){
args__17574__auto__.push((arguments[i__17568__auto___28805]));

var G__28806 = (i__17568__auto___28805 + (1));
i__17568__auto___28805 = G__28806;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((3) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17575__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq28800){
var G__28801 = cljs.core.first.call(null,seq28800);
var seq28800__$1 = cljs.core.next.call(null,seq28800);
var G__28802 = cljs.core.first.call(null,seq28800__$1);
var seq28800__$2 = cljs.core.next.call(null,seq28800__$1);
var G__28803 = cljs.core.first.call(null,seq28800__$2);
var seq28800__$3 = cljs.core.next.call(null,seq28800__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__28801,G__28802,G__28803,seq28800__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){
var k = key_fn.call(null,x);
return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter) 
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){
return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next.call(null,s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat.call(null,n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 *   Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq.call(null,s)){
return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(var_args){
var args28807 = [];
var len__17567__auto___28810 = arguments.length;
var i__17568__auto___28811 = (0);
while(true){
if((i__17568__auto___28811 < len__17567__auto___28810)){
args28807.push((arguments[i__17568__auto___28811]));

var G__28812 = (i__17568__auto___28811 + (1));
i__17568__auto___28811 = G__28812;
continue;
} else {
}
break;
}

var G__28809 = args28807.length;
switch (G__28809) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28807.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq.call(null,xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
if(cljs.core.next.call(null,xs__$1)){
return null;
} else {
return cljs.core.first.call(null,xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.call(null,(function (i,x){
if(cljs.core.truth_(f.call(null,x))){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);
var iter__17280__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__28818(s__28819){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__28819__$1 = s__28819;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__28819__$1);
if(temp__4425__auto__){
var s__28819__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__28819__$2)){
var c__17278__auto__ = cljs.core.chunk_first.call(null,s__28819__$2);
var size__17279__auto__ = cljs.core.count.call(null,c__17278__auto__);
var b__28821 = cljs.core.chunk_buffer.call(null,size__17279__auto__);
if((function (){var i__28820 = (0);
while(true){
if((i__28820 < size__17279__auto__)){
var x = cljs.core._nth.call(null,c__17278__auto__,i__28820);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
cljs.core.chunk_append.call(null,b__28821,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
);

var G__28822 = (i__28820 + (1));
i__28820 = G__28822;
continue;
} else {
var G__28823 = (i__28820 + (1));
i__28820 = G__28823;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28821),plumbing$core$distinct_by_$_iter__28818.call(null,cljs.core.chunk_rest.call(null,s__28819__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__28821),null);
}
} else {
var x = cljs.core.first.call(null,s__28819__$2);
var id = f.call(null,x);
if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id))){
return cljs.core.cons.call(null,(function (){
cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__28818.call(null,cljs.core.rest.call(null,s__28819__$2)));
} else {
var G__28824 = cljs.core.rest.call(null,s__28819__$2);
s__28819__$1 = G__28824;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__17280__auto__.call(null,xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(var_args){
var args__17574__auto__ = [];
var len__17567__auto___28826 = arguments.length;
var i__17568__auto___28827 = (0);
while(true){
if((i__17568__auto___28827 < len__17567__auto___28826)){
args__17574__auto__.push((arguments[i__17568__auto___28827]));

var G__28828 = (i__17568__auto___28827 + (1));
i__17568__auto___28827 = G__28828;
continue;
} else {
}
break;
}

var argseq__17575__auto__ = ((((0) < args__17574__auto__.length))?(new cljs.core.IndexedSeq(args__17574__auto__.slice((0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__17575__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq.call(null,seqs)){
return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq28825){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq28825));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(var_args){
var args28829 = [];
var len__17567__auto___28835 = arguments.length;
var i__17568__auto___28836 = (0);
while(true){
if((i__17568__auto___28836 < len__17567__auto___28835)){
args28829.push((arguments[i__17568__auto___28836]));

var G__28837 = (i__17568__auto___28836 + (1));
i__17568__auto___28836 = G__28837;
continue;
} else {
}
break;
}

var G__28834 = args28829.length;
switch (G__28834) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17586__auto__ = (new cljs.core.IndexedSeq(args28829.slice((2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17586__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.call(null,coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__28839 = plumbing.core.conj_when.call(null,coll,x);
var G__28840 = cljs.core.first.call(null,xs);
var G__28841 = cljs.core.next.call(null,xs);
coll = G__28839;
x = G__28840;
xs = G__28841;
continue;
} else {
return plumbing.core.conj_when.call(null,coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq28830){
var G__28831 = cljs.core.first.call(null,seq28830);
var seq28830__$1 = cljs.core.next.call(null,seq28830);
var G__28832 = cljs.core.first.call(null,seq28830__$1);
var seq28830__$2 = cljs.core.next.call(null,seq28830__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__28831,G__28832,seq28830__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons.call(null,x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(var_args){
var args28843 = [];
var len__17567__auto___28849 = arguments.length;
var i__17568__auto___28850 = (0);
while(true){
if((i__17568__auto___28850 < len__17567__auto___28849)){
args28843.push((arguments[i__17568__auto___28850]));

var G__28851 = (i__17568__auto___28850 + (1));
i__17568__auto___28850 = G__28851;
continue;
} else {
}
break;
}

var G__28848 = args28843.length;
switch (G__28848) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17586__auto__ = (new cljs.core.IndexedSeq(args28843.slice((2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17586__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = cljs.core.deref.call(null,a);
var new_val = f.call(null,old_val);
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.call(null,a,(function (p1__28842_SHARP_){
return cljs.core.apply.call(null,f,p1__28842_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq28844){
var G__28845 = cljs.core.first.call(null,seq28844);
var seq28844__$1 = cljs.core.next.call(null,seq28844);
var G__28846 = cljs.core.first.call(null,seq28844__$1);
var seq28844__$2 = cljs.core.next.call(null,seq28844__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__28845,G__28846,seq28844__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 *   arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(var_args){
var args28853 = [];
var len__17567__auto___28859 = arguments.length;
var i__17568__auto___28860 = (0);
while(true){
if((i__17568__auto___28860 < len__17567__auto___28859)){
args28853.push((arguments[i__17568__auto___28860]));

var G__28861 = (i__17568__auto___28860 + (1));
i__17568__auto___28860 = G__28861;
continue;
} else {
}
break;
}

var G__28858 = args28853.length;
switch (G__28858) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__17586__auto__ = (new cljs.core.IndexedSeq(args28853.slice((2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__17586__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq28854){
var G__28855 = cljs.core.first.call(null,seq28854);
var seq28854__$1 = cljs.core.next.call(null,seq28854);
var G__28856 = cljs.core.first.call(null,seq28854__$1);
var seq28854__$2 = cljs.core.next.call(null,seq28854__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__28855,G__28856,seq28854__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);

//# sourceMappingURL=core.js.map?rel=1440252244253