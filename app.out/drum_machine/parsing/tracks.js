// Compiled by ClojureScript 1.7.145 {}
goog.provide('drum_machine.parsing.tracks');
goog.require('cljs.core');
goog.require('om.next');
goog.require('drum_machine.reconciler');
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword(null,"tracks","tracks",-326768501),(function (p__16347,key,_){
var map__16348 = p__16347;
var map__16348__$1 = ((((!((map__16348 == null)))?((((map__16348.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16348.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16348):map__16348);
var state = cljs.core.get.call(null,map__16348__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var selector = cljs.core.get.call(null,map__16348__$1,new cljs.core.Keyword(null,"selector","selector",762528866));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),om.next.denormalize.call(null,selector,cljs.core.get.call(null,st,key),st)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("tracks","update","tracks/update",-729807205,null),(function (p__16350,_,p__16351){
var map__16352 = p__16350;
var map__16352__$1 = ((((!((map__16352 == null)))?((((map__16352.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16352.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16352):map__16352);
var state = cljs.core.get.call(null,map__16352__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16353 = p__16351;
var map__16353__$1 = ((((!((map__16353 == null)))?((((map__16353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16353):map__16353);
var ref = cljs.core.get.call(null,map__16353__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var props = cljs.core.get.call(null,map__16353__$1,new cljs.core.Keyword(null,"props","props",453281727));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tracks","tracks",-326768501)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__16352,map__16352__$1,state,map__16353,map__16353__$1,ref,props){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,ref,cljs.core.merge,props);
});})(map__16352,map__16352__$1,state,map__16353,map__16353__$1,ref,props))
], null);
}));

//# sourceMappingURL=tracks.js.map