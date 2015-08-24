// Compiled by ClojureScript 1.7.107 {}
goog.provide('gh4st.img');
goog.require('cljs.core');
goog.require('gh4st.state');
gh4st.img.actor_order = cljs.core.reverse.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blinky","blinky",1882755167),new cljs.core.Keyword(null,"pinky","pinky",-1607994569),new cljs.core.Keyword(null,"inky","inky",-227406426),new cljs.core.Keyword(null,"clyde","clyde",73127145),new cljs.core.Keyword(null,"pacman","pacman",-818240966),new cljs.core.Keyword(null,"fruit","fruit",33875830)], null));
gh4st.img.dir__GT_name = cljs.core.PersistentArrayMap.fromArray([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(1)], null),"-d",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(-1)], null),"-u",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(0)], null),"-r",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(0)], null),"-l"], true, false);
gh4st.img.img_src = (function gh4st$img$img_src(name_,dir){
if(cljs.core._EQ_.call(null,name_,new cljs.core.Keyword(null,"fruit","fruit",33875830))){
return [cljs.core.str("img/"),cljs.core.str(cljs.core.name.call(null,name_)),cljs.core.str((new cljs.core.Keyword(null,"level","level",1290497552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gh4st.state.app_state)) % (5))),cljs.core.str(".png")].join('');
} else {
return [cljs.core.str("img/"),cljs.core.str(cljs.core.name.call(null,name_)),cljs.core.str(gh4st.img.dir__GT_name.call(null,dir)),cljs.core.str(".png")].join('');
}
});

//# sourceMappingURL=img.js.map?rel=1440371454399