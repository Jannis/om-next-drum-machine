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
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),(function (p__23656,key,_){
var map__23657 = p__23656;
var map__23657__$1 = ((((!((map__23657 == null)))?((((map__23657.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23657.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23657):map__23657);
var state = cljs.core.get.call(null,map__23657__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_bpm.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","set-bpm","settings/set-bpm",2084755800,null),(function (p__23659,_,p__23660){
var map__23661 = p__23659;
var map__23661__$1 = ((((!((map__23661 == null)))?((((map__23661.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23661.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23661):map__23661);
var state = cljs.core.get.call(null,map__23661__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23662 = p__23660;
var map__23662__$1 = ((((!((map__23662 == null)))?((((map__23662.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23662.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23662):map__23662);
var value = cljs.core.get.call(null,map__23662__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23661,map__23661__$1,state,map__23662,map__23662__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),value);
});})(map__23661,map__23661__$1,state,map__23662,map__23662__$1,value))
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
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),(function (p__23665,key,_){
var map__23666 = p__23665;
var map__23666__$1 = ((((!((map__23666 == null)))?((((map__23666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23666):map__23666);
var state = cljs.core.get.call(null,map__23666__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_bars.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","set-bars","settings/set-bars",-336095322,null),(function (p__23668,_,p__23669){
var map__23670 = p__23668;
var map__23670__$1 = ((((!((map__23670 == null)))?((((map__23670.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23670.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23670):map__23670);
var state = cljs.core.get.call(null,map__23670__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__23671 = p__23669;
var map__23671__$1 = ((((!((map__23671 == null)))?((((map__23671.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23671.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23671):map__23671);
var value = cljs.core.get.call(null,map__23671__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bars","settings/bars",-2037952989)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__23670,map__23670__$1,state,map__23671,map__23671__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),value);
});})(map__23670,map__23670__$1,state,map__23671,map__23671__$1,value))
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
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),(function (p__23674,key,_){
var map__23675 = p__23674;
var map__23675__$1 = ((((!((map__23675 == null)))?((((map__23675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23675):map__23675);
var state = cljs.core.get.call(null,map__23675__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_beat.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","next-beat","settings/next-beat",-1591523215,null),(function (p__23677,_,___$1){
var map__23678 = p__23677;
var map__23678__$1 = ((((!((map__23678 == null)))?((((map__23678.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23678.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23678):map__23678);
var state = cljs.core.get.call(null,map__23678__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var next_beat = ((function (st,map__23678,map__23678__$1,state){
return (function drum_machine$parsing$settings$next_beat(beat){
if((beat < (drum_machine.parsing.settings.get_bars.call(null,st,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989)) * (4)))){
return (beat + (1));
} else {
return (1);
}
});})(st,map__23678,map__23678__$1,state))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","beat","settings/beat",-2094283771)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (st,map__23678,map__23678__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),next_beat);
});})(st,map__23678,map__23678__$1,state))
], null);
}));

//# sourceMappingURL=settings.js.map