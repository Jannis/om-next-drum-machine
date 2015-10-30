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

var x18845_18859 = drum_machine.app.App.prototype;
x18845_18859.componentWillUpdate = ((function (x18845_18859){
return (function (next_props__11049__auto__,next_state__11050__auto__){
var this__11048__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__11048__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__11048__auto__);
});})(x18845_18859))
;

x18845_18859.shouldComponentUpdate = ((function (x18845_18859){
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
});})(x18845_18859))
;

x18845_18859.componentWillUnmount = ((function (x18845_18859){
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
});})(x18845_18859))
;

x18845_18859.componentDidUpdate = ((function (x18845_18859){
return (function (prev_props__11051__auto__,prev_state__11052__auto__){
var this__11048__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__11048__auto__);
});})(x18845_18859))
;

x18845_18859.isMounted = ((function (x18845_18859){
return (function (){
var this__11048__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__11048__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x18845_18859))
;

x18845_18859.componentWillMount = ((function (x18845_18859){
return (function (){
var this__11048__auto__ = this;
var indexer__11053__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__11048__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__11053__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__11053__auto__,this__11048__auto__);
}
});})(x18845_18859))
;

x18845_18859.set_bpm = ((function (x18845_18859){
return (function (value){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("settings","set-bpm","settings/set-bpm",2084755800,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,value)))))))))))))));
});})(x18845_18859))
;

x18845_18859.set_bars = ((function (x18845_18859){
return (function (value){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("settings","set-bars","settings/set-bars",-336095322,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,value)))))))))))))));
});})(x18845_18859))
;

x18845_18859.update_track = ((function (x18845_18859){
return (function (ref,props){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tracks","update","tracks/update",-729807205,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref","ref",1289896967)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ref),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"props","props",453281727)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props)))))))))))))));
});})(x18845_18859))
;

x18845_18859.render = ((function (x18845_18859){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_18846 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_18847 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_18848 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_18849 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_18850 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__18851 = om.next.props.call(null,this$);
var map__18851__$1 = ((((!((map__18851 == null)))?((((map__18851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18851):map__18851);
var bpm = cljs.core.get.call(null,map__18851__$1,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222));
var bars = cljs.core.get.call(null,map__18851__$1,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989));
var beat = cljs.core.get.call(null,map__18851__$1,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771));
return React.DOM.div({"className": "app"},React.DOM.h1(null,"Om Next Drum Machine"),React.DOM.h2(null,"Settings"),React.DOM.form({"className": "settings"},React.DOM.p({"className": "setting"},React.DOM.label(null,"BPM"),om.dom.input.call(null,{"type": "range", "min": (30), "max": (120), "value": bpm, "onChange": ((function (map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859){
return (function (p1__18837_SHARP_){
return this$.set_bpm(p1__18837_SHARP_.target.value);
});})(map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859))
}),React.DOM.span(null,bpm)),React.DOM.p({"className": "setting"},React.DOM.label(null,"Bars"),om.dom.input.call(null,{"type": "range", "min": (1), "max": (4), "value": bars, "onChange": ((function (map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859){
return (function (p1__18838_SHARP_){
return this$.set_bars(p1__18838_SHARP_.target.value);
});})(map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859))
}),React.DOM.span(null,bars))),React.DOM.h2(null,"Tracks"),React.DOM.div({"className": "tracks"},(function (){var iter__5866__auto__ = ((function (map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859){
return (function drum_machine$app$iter__18853(s__18854){
return (new cljs.core.LazySeq(null,((function (map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859){
return (function (){
var s__18854__$1 = s__18854;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__18854__$1);
if(temp__4425__auto__){
var s__18854__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__18854__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__18854__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__18856 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__18855 = (0);
while(true){
if((i__18855 < size__5865__auto__)){
var t = cljs.core._nth.call(null,c__5864__auto__,i__18855);
cljs.core.chunk_append.call(null,b__18856,drum_machine.components.track.track.call(null,om.next.computed.call(null,t,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bars","bars",-586907130),bars,new cljs.core.Keyword(null,"beat","beat",-817854366),beat,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),((function (i__18855,t,c__5864__auto__,size__5865__auto__,b__18856,s__18854__$2,temp__4425__auto__,map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859){
return (function (p1__18839_SHARP_,p2__18840_SHARP_){
return this$.update_track(p1__18839_SHARP_,p2__18840_SHARP_);
});})(i__18855,t,c__5864__auto__,size__5865__auto__,b__18856,s__18854__$2,temp__4425__auto__,map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859))
], null))));

var G__18860 = (i__18855 + (1));
i__18855 = G__18860;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18856),drum_machine$app$iter__18853.call(null,cljs.core.chunk_rest.call(null,s__18854__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__18856),null);
}
} else {
var t = cljs.core.first.call(null,s__18854__$2);
return cljs.core.cons.call(null,drum_machine.components.track.track.call(null,om.next.computed.call(null,t,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bars","bars",-586907130),bars,new cljs.core.Keyword(null,"beat","beat",-817854366),beat,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),((function (t,s__18854__$2,temp__4425__auto__,map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859){
return (function (p1__18839_SHARP_,p2__18840_SHARP_){
return this$.update_track(p1__18839_SHARP_,p2__18840_SHARP_);
});})(t,s__18854__$2,temp__4425__auto__,map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859))
], null))),drum_machine$app$iter__18853.call(null,cljs.core.rest.call(null,s__18854__$2)));
}
} else {
return null;
}
break;
}
});})(map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859))
,null,null));
});})(map__18851,map__18851__$1,bpm,bars,beat,_STAR_reconciler_STAR_18846,_STAR_depth_STAR_18847,_STAR_shared_STAR_18848,_STAR_instrument_STAR_18849,_STAR_parent_STAR_18850,this$,x18845_18859))
;
return iter__5866__auto__.call(null,new cljs.core.Keyword(null,"tracks","tracks",-326768501).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_18850;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_18849;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_18848;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_18847;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_18846;
}});})(x18845_18859))
;


drum_machine.app.App.prototype.constructor = drum_machine.app.App;

drum_machine.app.App.prototype.om$isComponent = true;

var x18857_18861 = drum_machine.app.App;
x18857_18861.om$next$IQuery$ = true;

x18857_18861.om$next$IQuery$query$arity$1 = ((function (x18857_18861){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tracks","tracks",-326768501),om.next.get_query.call(null,drum_machine.components.track.Track)], null)], null);
});})(x18857_18861))
;


var x18858_18862 = drum_machine.app.App.prototype;
x18858_18862.om$next$IQuery$ = true;

x18858_18862.om$next$IQuery$query$arity$1 = ((function (x18858_18862){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tracks","tracks",-326768501),om.next.get_query.call(null,drum_machine.components.track.Track)], null)], null);
});})(x18858_18862))
;


drum_machine.app.App.cljs$lang$type = true;

drum_machine.app.App.cljs$lang$ctorStr = "drum-machine.app/App";

drum_machine.app.App.cljs$lang$ctorPrWriter = (function (this__11110__auto__,writer__11111__auto__,opt__11112__auto__){
return cljs.core._write.call(null,writer__11111__auto__,"drum-machine.app/App");
});
drum_machine.app.run = (function drum_machine$app$run(){
var c__8543__auto___18951 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___18951){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___18951){
return (function (state_18938){
var state_val_18939 = (state_18938[(1)]);
if((state_val_18939 === (1))){
var inst_18907 = cljs.core.async.timeout.call(null,(1000));
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18938__$1,(2),inst_18907);
} else {
if((state_val_18939 === (2))){
var inst_18909 = (state_18938[(2)]);
var state_18938__$1 = (function (){var statearr_18940 = state_18938;
(statearr_18940[(7)] = inst_18909);

return statearr_18940;
})();
var statearr_18941_18952 = state_18938__$1;
(statearr_18941_18952[(2)] = null);

(statearr_18941_18952[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18939 === (3))){
var inst_18911 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_18912 = [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222)];
var inst_18913 = (new cljs.core.PersistentVector(null,1,(5),inst_18911,inst_18912,null));
var inst_18914 = drum_machine.reconciler.parse.call(null,inst_18913);
var inst_18915 = new cljs.core.Keyword("settings","bpm","settings/bpm",392189222).cljs$core$IFn$_invoke$arity$1(inst_18914);
var inst_18916 = (60.0 / inst_18915);
var inst_18917 = (inst_18916 * (1000));
var inst_18918 = cljs.core.async.timeout.call(null,inst_18917);
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18938__$1,(5),inst_18918);
} else {
if((state_val_18939 === (4))){
var inst_18936 = (state_18938[(2)]);
var state_18938__$1 = state_18938;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18938__$1,inst_18936);
} else {
if((state_val_18939 === (5))){
var inst_18920 = (state_18938[(2)]);
var inst_18921 = cljs.core.List.EMPTY;
var inst_18922 = cljs.core.List.EMPTY;
var inst_18923 = new cljs.core.Symbol("settings","next-beat","settings/next-beat",-1591523215,null);
var inst_18924 = cljs.core._conj.call(null,inst_18922,inst_18923);
var inst_18925 = cljs.core.concat.call(null,inst_18924);
var inst_18926 = cljs.core.seq.call(null,inst_18925);
var inst_18927 = cljs.core.sequence.call(null,inst_18926);
var inst_18928 = cljs.core._conj.call(null,inst_18921,inst_18927);
var inst_18929 = cljs.core.concat.call(null,inst_18928);
var inst_18930 = cljs.core.seq.call(null,inst_18929);
var inst_18931 = cljs.core.sequence.call(null,inst_18930);
var inst_18932 = cljs.core.vec.call(null,inst_18931);
var inst_18933 = om.next.transact_BANG_.call(null,drum_machine.reconciler.reconciler,inst_18932);
var state_18938__$1 = (function (){var statearr_18942 = state_18938;
(statearr_18942[(8)] = inst_18920);

(statearr_18942[(9)] = inst_18933);

return statearr_18942;
})();
var statearr_18943_18953 = state_18938__$1;
(statearr_18943_18953[(2)] = null);

(statearr_18943_18953[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__8543__auto___18951))
;
return ((function (switch__8478__auto__,c__8543__auto___18951){
return (function() {
var drum_machine$app$run_$_state_machine__8479__auto__ = null;
var drum_machine$app$run_$_state_machine__8479__auto____0 = (function (){
var statearr_18947 = [null,null,null,null,null,null,null,null,null,null];
(statearr_18947[(0)] = drum_machine$app$run_$_state_machine__8479__auto__);

(statearr_18947[(1)] = (1));

return statearr_18947;
});
var drum_machine$app$run_$_state_machine__8479__auto____1 = (function (state_18938){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_18938);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e18948){if((e18948 instanceof Object)){
var ex__8482__auto__ = e18948;
var statearr_18949_18954 = state_18938;
(statearr_18949_18954[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18938);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18948;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18955 = state_18938;
state_18938 = G__18955;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
drum_machine$app$run_$_state_machine__8479__auto__ = function(state_18938){
switch(arguments.length){
case 0:
return drum_machine$app$run_$_state_machine__8479__auto____0.call(this);
case 1:
return drum_machine$app$run_$_state_machine__8479__auto____1.call(this,state_18938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drum_machine$app$run_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = drum_machine$app$run_$_state_machine__8479__auto____0;
drum_machine$app$run_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = drum_machine$app$run_$_state_machine__8479__auto____1;
return drum_machine$app$run_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___18951))
})();
var state__8545__auto__ = (function (){var statearr_18950 = f__8544__auto__.call(null);
(statearr_18950[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___18951);

return statearr_18950;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___18951))
);


return om.next.add_root_BANG_.call(null,drum_machine.reconciler.reconciler,drum_machine.app.App,document.getElementById("app"));
});

//# sourceMappingURL=app.js.map