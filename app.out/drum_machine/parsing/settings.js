// Compiled by ClojureScript 1.7.145 {}
goog.provide('drum_machine.parsing.settings');
goog.require('cljs.core');
goog.require('drum_machine.reconciler');
drum_machine.parsing.settings.get_bpm = (function drum_machine$parsing$settings$get_bpm(st,key){
var or__5094__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return (60);
}
});
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),(function (p__11633,key,_){
var map__11634 = p__11633;
var map__11634__$1 = ((((!((map__11634 == null)))?((((map__11634.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11634.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11634):map__11634);
var state = cljs.core.get.call(null,map__11634__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_bpm.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","set-bpm","settings/set-bpm",2084755800,null),(function (p__11636,_,p__11637){
var map__11638 = p__11636;
var map__11638__$1 = ((((!((map__11638 == null)))?((((map__11638.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11638.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11638):map__11638);
var state = cljs.core.get.call(null,map__11638__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11639 = p__11637;
var map__11639__$1 = ((((!((map__11639 == null)))?((((map__11639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11639):map__11639);
var value = cljs.core.get.call(null,map__11639__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11638,map__11638__$1,state,map__11639,map__11639__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),value);
});})(map__11638,map__11638__$1,state,map__11639,map__11639__$1,value))
], null);
}));
drum_machine.parsing.settings.get_bars = (function drum_machine$parsing$settings$get_bars(st,key){
var or__5094__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return (1);
}
});
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),(function (p__11642,key,_){
var map__11643 = p__11642;
var map__11643__$1 = ((((!((map__11643 == null)))?((((map__11643.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11643.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11643):map__11643);
var state = cljs.core.get.call(null,map__11643__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_bars.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","set-bars","settings/set-bars",-336095322,null),(function (p__11645,_,p__11646){
var map__11647 = p__11645;
var map__11647__$1 = ((((!((map__11647 == null)))?((((map__11647.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11647.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11647):map__11647);
var state = cljs.core.get.call(null,map__11647__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__11648 = p__11646;
var map__11648__$1 = ((((!((map__11648 == null)))?((((map__11648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11648):map__11648);
var value = cljs.core.get.call(null,map__11648__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bars","settings/bars",-2037952989)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__11647,map__11647__$1,state,map__11648,map__11648__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),value);
});})(map__11647,map__11647__$1,state,map__11648,map__11648__$1,value))
], null);
}));
drum_machine.parsing.settings.get_beat = (function drum_machine$parsing$settings$get_beat(st,key){
var or__5094__auto__ = cljs.core.get.call(null,st,key);
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return (1);
}
});
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),(function (p__11651,key,_){
var map__11652 = p__11651;
var map__11652__$1 = ((((!((map__11652 == null)))?((((map__11652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11652):map__11652);
var state = cljs.core.get.call(null,map__11652__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_beat.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","next-beat","settings/next-beat",-1591523215,null),(function (p__11654,_,___$1){
var map__11655 = p__11654;
var map__11655__$1 = ((((!((map__11655 == null)))?((((map__11655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__11655):map__11655);
var state = cljs.core.get.call(null,map__11655__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var next_beat = ((function (st,map__11655,map__11655__$1,state){
return (function drum_machine$parsing$settings$next_beat(beat){
if((beat < (drum_machine.parsing.settings.get_bars.call(null,st,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989)) * (4)))){
return (beat + (1));
} else {
return (1);
}
});})(st,map__11655,map__11655__$1,state))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","beat","settings/beat",-2094283771)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (st,map__11655,map__11655__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),next_beat);
});})(st,map__11655,map__11655__$1,state))
], null);
}));

//# sourceMappingURL=settings.js.map