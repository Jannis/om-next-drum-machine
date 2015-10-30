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
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),(function (p__16396,key,_){
var map__16397 = p__16396;
var map__16397__$1 = ((((!((map__16397 == null)))?((((map__16397.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16397.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16397):map__16397);
var state = cljs.core.get.call(null,map__16397__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_bpm.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","set-bpm","settings/set-bpm",2084755800,null),(function (p__16399,_,p__16400){
var map__16401 = p__16399;
var map__16401__$1 = ((((!((map__16401 == null)))?((((map__16401.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16401.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16401):map__16401);
var state = cljs.core.get.call(null,map__16401__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16402 = p__16400;
var map__16402__$1 = ((((!((map__16402 == null)))?((((map__16402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16402):map__16402);
var value = cljs.core.get.call(null,map__16402__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__16401,map__16401__$1,state,map__16402,map__16402__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),value);
});})(map__16401,map__16401__$1,state,map__16402,map__16402__$1,value))
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
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),(function (p__16405,key,_){
var map__16406 = p__16405;
var map__16406__$1 = ((((!((map__16406 == null)))?((((map__16406.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16406.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16406):map__16406);
var state = cljs.core.get.call(null,map__16406__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_bars.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","set-bars","settings/set-bars",-336095322,null),(function (p__16408,_,p__16409){
var map__16410 = p__16408;
var map__16410__$1 = ((((!((map__16410 == null)))?((((map__16410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16410):map__16410);
var state = cljs.core.get.call(null,map__16410__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__16411 = p__16409;
var map__16411__$1 = ((((!((map__16411 == null)))?((((map__16411.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16411.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16411):map__16411);
var value = cljs.core.get.call(null,map__16411__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bars","settings/bars",-2037952989)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__16410,map__16410__$1,state,map__16411,map__16411__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),value);
});})(map__16410,map__16410__$1,state,map__16411,map__16411__$1,value))
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
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),(function (p__16414,key,_){
var map__16415 = p__16414;
var map__16415__$1 = ((((!((map__16415 == null)))?((((map__16415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16415):map__16415);
var state = cljs.core.get.call(null,map__16415__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_beat.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","next-beat","settings/next-beat",-1591523215,null),(function (p__16417,_,___$1){
var map__16418 = p__16417;
var map__16418__$1 = ((((!((map__16418 == null)))?((((map__16418.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16418.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16418):map__16418);
var state = cljs.core.get.call(null,map__16418__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var next_beat = ((function (st,map__16418,map__16418__$1,state){
return (function drum_machine$parsing$settings$next_beat(beat){
if((beat < (drum_machine.parsing.settings.get_bars.call(null,st,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989)) * (4)))){
return (beat + (1));
} else {
return (1);
}
});})(st,map__16418,map__16418__$1,state))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","beat","settings/beat",-2094283771)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (st,map__16418,map__16418__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),next_beat);
});})(st,map__16418,map__16418__$1,state))
], null);
}));

//# sourceMappingURL=settings.js.map