// Compiled by ClojureScript 1.7.145 {}
goog.provide('drum_machine.parsing.tracks');
goog.require('cljs.core');
goog.require('om.next');
goog.require('drum_machine.reconciler');
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword(null,"tracks","tracks",-326768501),(function (p__11584,key,_){
var map__11585 = p__11584;
var map__11585__$1 = ((((!((map__11585 == null)))?((((map__11585.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11585.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11585):map__11585);
var state = cljs.core.get.call(null,map__11585__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var selector = cljs.core.get.call(null,map__11585__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.denormalize.call(null,selector,cljs.core.get.call(null,st,key),st)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("tracks","update","tracks/update",-729807205,null),(function (p__11587,_,p__11588){
var map__11589 = p__11587;
var map__11589__$1 = ((((!((map__11589 == null)))?((((map__11589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11589):map__11589);
var state = cljs.core.get.call(null,map__11589__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11590 = p__11588;
var map__11590__$1 = ((((!((map__11590 == null)))?((((map__11590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11590):map__11590);
var ref = cljs.core.get.call(null,map__11590__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var props = cljs.core.get.call(null,map__11590__$1,new cljs.core.Keyword(null,"props","props",453281727));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracks","tracks",-326768501)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11589,map__11589__$1,state,map__11590,map__11590__$1,ref,props){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,cljs.core.merge,props);
});})(map__11589,map__11589__$1,state,map__11590,map__11590__$1,ref,props))
], null);
}));

//# sourceMappingURL=tracks.js.map