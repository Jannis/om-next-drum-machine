// Compiled by ClojureScript 1.7.145 {}
goog.provide('drum_machine.app');
goog.require('cljs.core');
goog.require('om.dom');
goog.require('cljs.core.async');
goog.require('drum_machine.parsing.tracks');
goog.require('drum_machine.parsing.settings');
goog.require('drum_machine.reconciler');
goog.require('drum_machine.components.track');
goog.require('om.next');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * @constructor
 */
drum_machine.app.App = (function drum_machine$app$App(){
var this__11108__auto__ = this;
React.Component.apply(this__11108__auto__,arguments);

if(!((this__11108__auto__.getInitialState == null))){
this__11108__auto__.state = this__11108__auto__.getInitialState();
} else {
this__11108__auto__.state = {};
}

return this__11108__auto__;
});

drum_machine.app.App.prototype = goog.object.clone(React.Component.prototype);

var x27828_27842 = drum_machine.app.App.prototype;
x27828_27842.componentWillUpdate = ((function (x27828_27842){
return (function (next_props__11049__auto__,next_state__11050__auto__){
var this__11048__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__11048__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__11048__auto__);
});})(x27828_27842))
;

x27828_27842.shouldComponentUpdate = ((function (x27828_27842){
return (function (next_props__11049__auto__,next_state__11050__auto__){
var this__11048__auto__ = this;
var or__5094__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__11048__auto__),goog.object.get(next_props__11049__auto__,"omcljs$value"));
if(or__5094__auto__){
return or__5094__auto__;
} else {
var and__5082__auto__ = this__11048__auto__.state;
if(cljs.core.truth_(and__5082__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__11048__auto__.state,"omcljs$state"),goog.object.get(next_state__11050__auto__,"omcljs$state"));
} else {
return and__5082__auto__;
}
}
});})(x27828_27842))
;

x27828_27842.componentWillUnmount = ((function (x27828_27842){
return (function (){
var this__11048__auto__ = this;
var r__11054__auto__ = om.next.get_reconciler.call(null,this__11048__auto__);
var cfg__11055__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__11054__auto__);
var st__11056__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__11055__auto__);
var indexer__11053__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__11055__auto__);
if((st__11056__auto__ == null)){
} else {
cljs.core.swap_BANG_.call(null,st__11056__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__11048__auto__);
}

if((indexer__11053__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__11053__auto__,this__11048__auto__);
}
});})(x27828_27842))
;

x27828_27842.componentDidUpdate = ((function (x27828_27842){
return (function (prev_props__11051__auto__,prev_state__11052__auto__){
var this__11048__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__11048__auto__);
});})(x27828_27842))
;

x27828_27842.isMounted = ((function (x27828_27842){
return (function (){
var this__11048__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__11048__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27828_27842))
;

x27828_27842.componentWillMount = ((function (x27828_27842){
return (function (){
var this__11048__auto__ = this;
var indexer__11053__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__11048__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__11053__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__11053__auto__,this__11048__auto__);
}
});})(x27828_27842))
;

x27828_27842.set_bpm = ((function (x27828_27842){
return (function (value){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("settings","set-bpm","settings/set-bpm",2084755800,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,value)))))))))))))));
});})(x27828_27842))
;

x27828_27842.set_bars = ((function (x27828_27842){
return (function (value){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("settings","set-bars","settings/set-bars",-336095322,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,value)))))))))))))));
});})(x27828_27842))
;

x27828_27842.update_track = ((function (x27828_27842){
return (function (ref,props){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tracks","update","tracks/update",-729807205,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref","ref",1289896967)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ref),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"props","props",453281727)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props)))))))))))))));
});})(x27828_27842))
;

x27828_27842.render = ((function (x27828_27842){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_27829 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27830 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27831 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27832 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27833 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__27834 = om.next.props.call(null,this$);
var map__27834__$1 = ((((!((map__27834 == null)))?((((map__27834.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27834.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27834):map__27834);
var bpm = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222));
var bars = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989));
var beat = cljs.core.get.call(null,map__27834__$1,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771));
return React.DOM.div({"className": "app"},React.DOM.h1(null,"Om Next Drum Machine"),React.DOM.h2(null,"Settings"),React.DOM.form({"className": "settings"},React.DOM.p({"className": "setting"},React.DOM.label(null,"BPM"),om.dom.input.call(null,{"type": "range", "min": (30), "max": (120), "value": bpm, "onChange": ((function (map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842){
return (function (p1__27820_SHARP_){
return this$.set_bpm(p1__27820_SHARP_.target.value);
});})(map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842))
}),React.DOM.span(null,bpm)),React.DOM.p({"className": "setting"},React.DOM.label(null,"Bars"),om.dom.input.call(null,{"type": "range", "min": (1), "max": (4), "value": bars, "onChange": ((function (map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842){
return (function (p1__27821_SHARP_){
return this$.set_bars(p1__27821_SHARP_.target.value);
});})(map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842))
}),React.DOM.span(null,bars))),React.DOM.h2(null,"Tracks"),React.DOM.div({"className": "tracks"},(function (){var iter__5866__auto__ = ((function (map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842){
return (function drum_machine$app$iter__27836(s__27837){
return (new cljs.core.LazySeq(null,((function (map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842){
return (function (){
var s__27837__$1 = s__27837;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27837__$1);
if(temp__4425__auto__){
var s__27837__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27837__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__27837__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__27839 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__27838 = (0);
while(true){
if((i__27838 < size__5865__auto__)){
var t = cljs.core._nth.call(null,c__5864__auto__,i__27838);
cljs.core.chunk_append.call(null,b__27839,drum_machine.components.track.track.call(null,om.next.computed.call(null,t,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bars","bars",-586907130),bars,new cljs.core.Keyword(null,"beat","beat",-817854366),beat,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),((function (i__27838,t,c__5864__auto__,size__5865__auto__,b__27839,s__27837__$2,temp__4425__auto__,map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842){
return (function (p1__27822_SHARP_,p2__27823_SHARP_){
return this$.update_track(p1__27822_SHARP_,p2__27823_SHARP_);
});})(i__27838,t,c__5864__auto__,size__5865__auto__,b__27839,s__27837__$2,temp__4425__auto__,map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842))
], null))));

var G__27843 = (i__27838 + (1));
i__27838 = G__27843;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27839),drum_machine$app$iter__27836.call(null,cljs.core.chunk_rest.call(null,s__27837__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27839),null);
}
} else {
var t = cljs.core.first.call(null,s__27837__$2);
return cljs.core.cons.call(null,drum_machine.components.track.track.call(null,om.next.computed.call(null,t,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bars","bars",-586907130),bars,new cljs.core.Keyword(null,"beat","beat",-817854366),beat,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),((function (t,s__27837__$2,temp__4425__auto__,map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842){
return (function (p1__27822_SHARP_,p2__27823_SHARP_){
return this$.update_track(p1__27822_SHARP_,p2__27823_SHARP_);
});})(t,s__27837__$2,temp__4425__auto__,map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842))
], null))),drum_machine$app$iter__27836.call(null,cljs.core.rest.call(null,s__27837__$2)));
}
} else {
return null;
}
break;
}
});})(map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842))
,null,null));
});})(map__27834,map__27834__$1,bpm,bars,beat,_STAR_reconciler_STAR_27829,_STAR_depth_STAR_27830,_STAR_shared_STAR_27831,_STAR_instrument_STAR_27832,_STAR_parent_STAR_27833,this$,x27828_27842))
;
return iter__5866__auto__.call(null,new cljs.core.Keyword(null,"tracks","tracks",-326768501).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27833;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27832;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27831;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27830;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27829;
}});})(x27828_27842))
;


drum_machine.app.App.prototype.constructor = drum_machine.app.App;

drum_machine.app.App.prototype.om$isComponent = true;

var x27840_27844 = drum_machine.app.App;
x27840_27844.om$next$IQuery$ = true;

x27840_27844.om$next$IQuery$query$arity$1 = ((function (x27840_27844){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tracks","tracks",-326768501),om.next.get_query.call(null,drum_machine.components.track.Track)], null)], null);
});})(x27840_27844))
;


var x27841_27845 = drum_machine.app.App.prototype;
x27841_27845.om$next$IQuery$ = true;

x27841_27845.om$next$IQuery$query$arity$1 = ((function (x27841_27845){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tracks","tracks",-326768501),om.next.get_query.call(null,drum_machine.components.track.Track)], null)], null);
});})(x27841_27845))
;


drum_machine.app.App.cljs$lang$type = true;

drum_machine.app.App.cljs$lang$ctorStr = "drum-machine.app/App";

drum_machine.app.App.cljs$lang$ctorPrWriter = (function (this__11110__auto__,writer__11111__auto__,opt__11112__auto__){
return cljs.core._write.call(null,writer__11111__auto__,"drum-machine.app/App");
});
drum_machine.app.run = (function drum_machine$app$run(){
var c__8543__auto___27926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___27926){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___27926){
return (function (state_27914){
var state_val_27915 = (state_27914[(1)]);
if((state_val_27915 === (1))){
var state_27914__$1 = state_27914;
var statearr_27916_27927 = state_27914__$1;
(statearr_27916_27927[(2)] = null);

(statearr_27916_27927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27915 === (2))){
var inst_27887 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_27888 = [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222)];
var inst_27889 = (new cljs.core.PersistentVector(null,1,(5),inst_27887,inst_27888,null));
var inst_27890 = drum_machine.reconciler.parse.call(null,inst_27889);
var inst_27891 = new cljs.core.Keyword("settings","bpm","settings/bpm",392189222).cljs$core$IFn$_invoke$arity$1(inst_27890);
var inst_27892 = (60.0 / inst_27891);
var inst_27893 = (inst_27892 * (1000));
var inst_27894 = cljs.core.async.timeout.call(null,inst_27893);
var state_27914__$1 = state_27914;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27914__$1,(4),inst_27894);
} else {
if((state_val_27915 === (3))){
var inst_27912 = (state_27914[(2)]);
var state_27914__$1 = state_27914;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27914__$1,inst_27912);
} else {
if((state_val_27915 === (4))){
var inst_27896 = (state_27914[(2)]);
var inst_27897 = cljs.core.List.EMPTY;
var inst_27898 = cljs.core.List.EMPTY;
var inst_27899 = new cljs.core.Symbol("settings","next-beat","settings/next-beat",-1591523215,null);
var inst_27900 = cljs.core._conj.call(null,inst_27898,inst_27899);
var inst_27901 = cljs.core.concat.call(null,inst_27900);
var inst_27902 = cljs.core.seq.call(null,inst_27901);
var inst_27903 = cljs.core.sequence.call(null,inst_27902);
var inst_27904 = cljs.core._conj.call(null,inst_27897,inst_27903);
var inst_27905 = cljs.core.concat.call(null,inst_27904);
var inst_27906 = cljs.core.seq.call(null,inst_27905);
var inst_27907 = cljs.core.sequence.call(null,inst_27906);
var inst_27908 = cljs.core.vec.call(null,inst_27907);
var inst_27909 = om.next.transact_BANG_.call(null,drum_machine.reconciler.reconciler,inst_27908);
var state_27914__$1 = (function (){var statearr_27917 = state_27914;
(statearr_27917[(7)] = inst_27896);

(statearr_27917[(8)] = inst_27909);

return statearr_27917;
})();
var statearr_27918_27928 = state_27914__$1;
(statearr_27918_27928[(2)] = null);

(statearr_27918_27928[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__8543__auto___27926))
;
return ((function (switch__8478__auto__,c__8543__auto___27926){
return (function() {
var drum_machine$app$run_$_state_machine__8479__auto__ = null;
var drum_machine$app$run_$_state_machine__8479__auto____0 = (function (){
var statearr_27922 = [null,null,null,null,null,null,null,null,null];
(statearr_27922[(0)] = drum_machine$app$run_$_state_machine__8479__auto__);

(statearr_27922[(1)] = (1));

return statearr_27922;
});
var drum_machine$app$run_$_state_machine__8479__auto____1 = (function (state_27914){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_27914);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e27923){if((e27923 instanceof Object)){
var ex__8482__auto__ = e27923;
var statearr_27924_27929 = state_27914;
(statearr_27924_27929[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27914);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27930 = state_27914;
state_27914 = G__27930;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
drum_machine$app$run_$_state_machine__8479__auto__ = function(state_27914){
switch(arguments.length){
case 0:
return drum_machine$app$run_$_state_machine__8479__auto____0.call(this);
case 1:
return drum_machine$app$run_$_state_machine__8479__auto____1.call(this,state_27914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drum_machine$app$run_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = drum_machine$app$run_$_state_machine__8479__auto____0;
drum_machine$app$run_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = drum_machine$app$run_$_state_machine__8479__auto____1;
return drum_machine$app$run_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___27926))
})();
var state__8545__auto__ = (function (){var statearr_27925 = f__8544__auto__.call(null);
(statearr_27925[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___27926);

return statearr_27925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___27926))
);


return om.next.add_root_BANG_.call(null,drum_machine.reconciler.reconciler,drum_machine.app.App,document.getElementById("app"));
});

//# sourceMappingURL=app.js.map