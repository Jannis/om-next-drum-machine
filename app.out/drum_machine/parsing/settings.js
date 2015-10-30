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
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),(function (p__18148,key,_){
var map__18149 = p__18148;
var map__18149__$1 = ((((!((map__18149 == null)))?((((map__18149.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18149.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18149):map__18149);
var state = cljs.core.get.call(null,map__18149__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_bpm.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","set-bpm","settings/set-bpm",2084755800,null),(function (p__18151,_,p__18152){
var map__18153 = p__18151;
var map__18153__$1 = ((((!((map__18153 == null)))?((((map__18153.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18153.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18153):map__18153);
var state = cljs.core.get.call(null,map__18153__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__18154 = p__18152;
var map__18154__$1 = ((((!((map__18154 == null)))?((((map__18154.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18154.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18154):map__18154);
var value = cljs.core.get.call(null,map__18154__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__18153,map__18153__$1,state,map__18154,map__18154__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),value);
});})(map__18153,map__18153__$1,state,map__18154,map__18154__$1,value))
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
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),(function (p__18157,key,_){
var map__18158 = p__18157;
var map__18158__$1 = ((((!((map__18158 == null)))?((((map__18158.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18158.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18158):map__18158);
var state = cljs.core.get.call(null,map__18158__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_bars.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","set-bars","settings/set-bars",-336095322,null),(function (p__18160,_,p__18161){
var map__18162 = p__18160;
var map__18162__$1 = ((((!((map__18162 == null)))?((((map__18162.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18162.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18162):map__18162);
var state = cljs.core.get.call(null,map__18162__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var map__18163 = p__18161;
var map__18163__$1 = ((((!((map__18163 == null)))?((((map__18163.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18163.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18163):map__18163);
var value = cljs.core.get.call(null,map__18163__$1,new cljs.core.Keyword(null,"value","value",305978217));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bars","settings/bars",-2037952989)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (map__18162,map__18162__$1,state,map__18163,map__18163__$1,value){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.assoc,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),value);
});})(map__18162,map__18162__$1,state,map__18163,map__18163__$1,value))
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
cljs.core._add_method.call(null,drum_machine.reconciler.read,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),(function (p__18166,key,_){
var map__18167 = p__18166;
var map__18167__$1 = ((((!((map__18167 == null)))?((((map__18167.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18167.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18167):map__18167);
var state = cljs.core.get.call(null,map__18167__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),drum_machine.parsing.settings.get_beat.call(null,st,key)], null);
}));
cljs.core._add_method.call(null,drum_machine.reconciler.mutate,new cljs.core.Symbol("settings","next-beat","settings/next-beat",-1591523215,null),(function (p__18169,_,___$1){
var map__18170 = p__18169;
var map__18170__$1 = ((((!((map__18170 == null)))?((((map__18170.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18170.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18170):map__18170);
var state = cljs.core.get.call(null,map__18170__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var st = cljs.core.deref.call(null,state);
var next_beat = ((function (st,map__18170,map__18170__$1,state){
return (function drum_machine$parsing$settings$next_beat(beat){
if((beat < (drum_machine.parsing.settings.get_bars.call(null,st,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989)) * (4)))){
return (beat + (1));
} else {
return (1);
}
});})(st,map__18170,map__18170__$1,state))
;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","beat","settings/beat",-2094283771)], null),new cljs.core.Keyword(null,"action","action",-811238024),((function (st,map__18170,map__18170__$1,state){
return (function (){
return cljs.core.swap_BANG_.call(null,state,cljs.core.update,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),next_beat);
});})(st,map__18170,map__18170__$1,state))
], null);
}));

//# sourceMappingURL=settings.js.map