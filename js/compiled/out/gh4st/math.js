// Compiled by ClojureScript 1.7.107 {}
goog.provide('gh4st.math');
goog.require('cljs.core');
gh4st.math.scale_dir = (function gh4st$math$scale_dir(p__23349,s){
var vec__23351 = p__23349;
var x = cljs.core.nth.call(null,vec__23351,(0),null);
var y = cljs.core.nth.call(null,vec__23351,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(s * x),(s * y)], null);
});
gh4st.math.add_pos = (function gh4st$math$add_pos(p__23352,p__23353){
var vec__23356 = p__23352;
var x = cljs.core.nth.call(null,vec__23356,(0),null);
var y = cljs.core.nth.call(null,vec__23356,(1),null);
var vec__23357 = p__23353;
var dx = cljs.core.nth.call(null,vec__23357,(0),null);
var dy = cljs.core.nth.call(null,vec__23357,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x + dx),(y + dy)], null);
});
gh4st.math.sub_pos = (function gh4st$math$sub_pos(p__23358,p__23359){
var vec__23362 = p__23358;
var x = cljs.core.nth.call(null,vec__23362,(0),null);
var y = cljs.core.nth.call(null,vec__23362,(1),null);
var vec__23363 = p__23359;
var x0 = cljs.core.nth.call(null,vec__23363,(0),null);
var y0 = cljs.core.nth.call(null,vec__23363,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x - x0),(y - y0)], null);
});
gh4st.math.dist_sq = (function gh4st$math$dist_sq(p__23364,p__23365){
var vec__23368 = p__23364;
var x = cljs.core.nth.call(null,vec__23368,(0),null);
var y = cljs.core.nth.call(null,vec__23368,(1),null);
var vec__23369 = p__23365;
var x0 = cljs.core.nth.call(null,vec__23369,(0),null);
var y0 = cljs.core.nth.call(null,vec__23369,(1),null);
var dx = (x - x0);
var dy = (y - y0);
return ((dx * dx) + (dy * dy));
});
gh4st.math.reflect_pos = (function gh4st$math$reflect_pos(p__23370,p__23371){
var vec__23374 = p__23370;
var cx = cljs.core.nth.call(null,vec__23374,(0),null);
var cy = cljs.core.nth.call(null,vec__23374,(1),null);
var center = vec__23374;
var vec__23375 = p__23371;
var x = cljs.core.nth.call(null,vec__23375,(0),null);
var y = cljs.core.nth.call(null,vec__23375,(1),null);
var pos = vec__23375;
var dx = (x - cx);
var dy = (y - cy);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cx - dx),(cy - dy)], null);
});

//# sourceMappingURL=math.js.map?rel=1440356863839