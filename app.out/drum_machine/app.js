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

var x16930_16944 = drum_machine.app.App.prototype;
x16930_16944.componentWillUpdate = ((function (x16930_16944){
return (function (next_props__11049__auto__,next_state__11050__auto__){
var this__11048__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__11048__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__11048__auto__);
});})(x16930_16944))
;

x16930_16944.shouldComponentUpdate = ((function (x16930_16944){
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
});})(x16930_16944))
;

x16930_16944.componentWillUnmount = ((function (x16930_16944){
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
});})(x16930_16944))
;

x16930_16944.componentDidUpdate = ((function (x16930_16944){
return (function (prev_props__11051__auto__,prev_state__11052__auto__){
var this__11048__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__11048__auto__);
});})(x16930_16944))
;

x16930_16944.isMounted = ((function (x16930_16944){
return (function (){
var this__11048__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__11048__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x16930_16944))
;

x16930_16944.componentWillMount = ((function (x16930_16944){
return (function (){
var this__11048__auto__ = this;
var indexer__11053__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__11048__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__11053__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__11053__auto__,this__11048__auto__);
}
});})(x16930_16944))
;

x16930_16944.set_bpm = ((function (x16930_16944){
return (function (value){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("settings","set-bpm","settings/set-bpm",2084755800,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,value)))))))))))))));
});})(x16930_16944))
;

x16930_16944.set_bars = ((function (x16930_16944){
return (function (value){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("settings","set-bars","settings/set-bars",-336095322,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"value","value",305978217)),cljs.core._conj.call(null,cljs.core.List.EMPTY,value)))))))))))))));
});})(x16930_16944))
;

x16930_16944.update_track = ((function (x16930_16944){
return (function (ref,props){
var this$ = this;
return om.next.transact_BANG_.call(null,this$,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("tracks","update","tracks/update",-729807205,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,cljs.core.apply.call(null,cljs.core.array_map,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ref","ref",1289896967)),cljs.core._conj.call(null,cljs.core.List.EMPTY,ref),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"props","props",453281727)),cljs.core._conj.call(null,cljs.core.List.EMPTY,props)))))))))))))));
});})(x16930_16944))
;

x16930_16944.render = ((function (x16930_16944){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_16931 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_16932 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_16933 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_16934 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_16935 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__16936 = om.next.props.call(null,this$);
var map__16936__$1 = ((((!((map__16936 == null)))?((((map__16936.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16936.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16936):map__16936);
var bpm = cljs.core.get.call(null,map__16936__$1,new cljs.core.Keyword("settings","bpm","settings/bpm",392189222));
var bars = cljs.core.get.call(null,map__16936__$1,new cljs.core.Keyword("settings","bars","settings/bars",-2037952989));
var beat = cljs.core.get.call(null,map__16936__$1,new cljs.core.Keyword("settings","beat","settings/beat",-2094283771));
return React.DOM.div({"className": "app"},React.DOM.header(null,React.DOM.h1(null,"Om Next Drum Machine"),React.DOM.p(null,"I know, this is really bad. Source: ",React.DOM.a({"href": "http://github.com/jannis/om-next-drum-machine/"},"http://github.com/jannis/om-next-drum-machine"),".")),React.DOM.h2(null,"Settings"),React.DOM.form({"className": "settings"},React.DOM.p({"className": "setting"},React.DOM.label(null,"BPM"),om.dom.input.call(null,{"type": "range", "min": (30), "max": (120), "value": bpm, "onChange": ((function (map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944){
return (function (p1__16922_SHARP_){
return this$.set_bpm(p1__16922_SHARP_.target.value);
});})(map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944))
}),React.DOM.span(null,bpm)),React.DOM.p({"className": "setting"},React.DOM.label(null,"Bars"),om.dom.input.call(null,{"type": "range", "min": (1), "max": (4), "value": bars, "onChange": ((function (map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944){
return (function (p1__16923_SHARP_){
return this$.set_bars(p1__16923_SHARP_.target.value);
});})(map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944))
}),React.DOM.span(null,bars))),React.DOM.h2(null,"Tracks"),React.DOM.div({"className": "tracks"},(function (){var iter__5866__auto__ = ((function (map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944){
return (function drum_machine$app$iter__16938(s__16939){
return (new cljs.core.LazySeq(null,((function (map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944){
return (function (){
var s__16939__$1 = s__16939;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__16939__$1);
if(temp__4425__auto__){
var s__16939__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__16939__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__16939__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__16941 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__16940 = (0);
while(true){
if((i__16940 < size__5865__auto__)){
var t = cljs.core._nth.call(null,c__5864__auto__,i__16940);
cljs.core.chunk_append.call(null,b__16941,drum_machine.components.track.track.call(null,om.next.computed.call(null,t,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bars","bars",-586907130),bars,new cljs.core.Keyword(null,"beat","beat",-817854366),beat,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),((function (i__16940,t,c__5864__auto__,size__5865__auto__,b__16941,s__16939__$2,temp__4425__auto__,map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944){
return (function (p1__16924_SHARP_,p2__16925_SHARP_){
return this$.update_track(p1__16924_SHARP_,p2__16925_SHARP_);
});})(i__16940,t,c__5864__auto__,size__5865__auto__,b__16941,s__16939__$2,temp__4425__auto__,map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944))
], null))));

var G__16945 = (i__16940 + (1));
i__16940 = G__16945;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16941),drum_machine$app$iter__16938.call(null,cljs.core.chunk_rest.call(null,s__16939__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__16941),null);
}
} else {
var t = cljs.core.first.call(null,s__16939__$2);
return cljs.core.cons.call(null,drum_machine.components.track.track.call(null,om.next.computed.call(null,t,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"bars","bars",-586907130),bars,new cljs.core.Keyword(null,"beat","beat",-817854366),beat,new cljs.core.Keyword(null,"update-fn","update-fn",711087313),((function (t,s__16939__$2,temp__4425__auto__,map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944){
return (function (p1__16924_SHARP_,p2__16925_SHARP_){
return this$.update_track(p1__16924_SHARP_,p2__16925_SHARP_);
});})(t,s__16939__$2,temp__4425__auto__,map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944))
], null))),drum_machine$app$iter__16938.call(null,cljs.core.rest.call(null,s__16939__$2)));
}
} else {
return null;
}
break;
}
});})(map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944))
,null,null));
});})(map__16936,map__16936__$1,bpm,bars,beat,_STAR_reconciler_STAR_16931,_STAR_depth_STAR_16932,_STAR_shared_STAR_16933,_STAR_instrument_STAR_16934,_STAR_parent_STAR_16935,this$,x16930_16944))
;
return iter__5866__auto__.call(null,new cljs.core.Keyword(null,"tracks","tracks",-326768501).cljs$core$IFn$_invoke$arity$1(om.next.props.call(null,this$)));
})()));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_16935;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_16934;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_16933;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_16932;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_16931;
}});})(x16930_16944))
;


drum_machine.app.App.prototype.constructor = drum_machine.app.App;

drum_machine.app.App.prototype.om$isComponent = true;

var x16942_16946 = drum_machine.app.App;
x16942_16946.om$next$IQuery$ = true;

x16942_16946.om$next$IQuery$query$arity$1 = ((function (x16942_16946){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tracks","tracks",-326768501),om.next.get_query.call(null,drum_machine.components.track.Track)], null)], null);
});})(x16942_16946))
;


var x16943_16947 = drum_machine.app.App.prototype;
x16943_16947.om$next$IQuery$ = true;

x16943_16947.om$next$IQuery$query$arity$1 = ((function (x16943_16947){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222),new cljs.core.Keyword("settings","bars","settings/bars",-2037952989),new cljs.core.Keyword("settings","beat","settings/beat",-2094283771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tracks","tracks",-326768501),om.next.get_query.call(null,drum_machine.components.track.Track)], null)], null);
});})(x16943_16947))
;


drum_machine.app.App.cljs$lang$type = true;

drum_machine.app.App.cljs$lang$ctorStr = "drum-machine.app/App";

drum_machine.app.App.cljs$lang$ctorPrWriter = (function (this__11110__auto__,writer__11111__auto__,opt__11112__auto__){
return cljs.core._write.call(null,writer__11111__auto__,"drum-machine.app/App");
});
drum_machine.app.run = (function drum_machine$app$run(){
var c__8543__auto___17036 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__8543__auto___17036){
return (function (){
var f__8544__auto__ = (function (){var switch__8478__auto__ = ((function (c__8543__auto___17036){
return (function (state_17023){
var state_val_17024 = (state_17023[(1)]);
if((state_val_17024 === (1))){
var inst_16992 = cljs.core.async.timeout.call(null,(1000));
var state_17023__$1 = state_17023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17023__$1,(2),inst_16992);
} else {
if((state_val_17024 === (2))){
var inst_16994 = (state_17023[(2)]);
var state_17023__$1 = (function (){var statearr_17025 = state_17023;
(statearr_17025[(7)] = inst_16994);

return statearr_17025;
})();
var statearr_17026_17037 = state_17023__$1;
(statearr_17026_17037[(2)] = null);

(statearr_17026_17037[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17024 === (3))){
var inst_16996 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_16997 = [new cljs.core.Keyword("settings","bpm","settings/bpm",392189222)];
var inst_16998 = (new cljs.core.PersistentVector(null,1,(5),inst_16996,inst_16997,null));
var inst_16999 = drum_machine.reconciler.parse.call(null,inst_16998);
var inst_17000 = new cljs.core.Keyword("settings","bpm","settings/bpm",392189222).cljs$core$IFn$_invoke$arity$1(inst_16999);
var inst_17001 = (60.0 / inst_17000);
var inst_17002 = (inst_17001 * (1000));
var inst_17003 = cljs.core.async.timeout.call(null,inst_17002);
var state_17023__$1 = state_17023;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17023__$1,(5),inst_17003);
} else {
if((state_val_17024 === (4))){
var inst_17021 = (state_17023[(2)]);
var state_17023__$1 = state_17023;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17023__$1,inst_17021);
} else {
if((state_val_17024 === (5))){
var inst_17005 = (state_17023[(2)]);
var inst_17006 = cljs.core.List.EMPTY;
var inst_17007 = cljs.core.List.EMPTY;
var inst_17008 = new cljs.core.Symbol("settings","next-beat","settings/next-beat",-1591523215,null);
var inst_17009 = cljs.core._conj.call(null,inst_17007,inst_17008);
var inst_17010 = cljs.core.concat.call(null,inst_17009);
var inst_17011 = cljs.core.seq.call(null,inst_17010);
var inst_17012 = cljs.core.sequence.call(null,inst_17011);
var inst_17013 = cljs.core._conj.call(null,inst_17006,inst_17012);
var inst_17014 = cljs.core.concat.call(null,inst_17013);
var inst_17015 = cljs.core.seq.call(null,inst_17014);
var inst_17016 = cljs.core.sequence.call(null,inst_17015);
var inst_17017 = cljs.core.vec.call(null,inst_17016);
var inst_17018 = om.next.transact_BANG_.call(null,drum_machine.reconciler.reconciler,inst_17017);
var state_17023__$1 = (function (){var statearr_17027 = state_17023;
(statearr_17027[(8)] = inst_17018);

(statearr_17027[(9)] = inst_17005);

return statearr_17027;
})();
var statearr_17028_17038 = state_17023__$1;
(statearr_17028_17038[(2)] = null);

(statearr_17028_17038[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
});})(c__8543__auto___17036))
;
return ((function (switch__8478__auto__,c__8543__auto___17036){
return (function() {
var drum_machine$app$run_$_state_machine__8479__auto__ = null;
var drum_machine$app$run_$_state_machine__8479__auto____0 = (function (){
var statearr_17032 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17032[(0)] = drum_machine$app$run_$_state_machine__8479__auto__);

(statearr_17032[(1)] = (1));

return statearr_17032;
});
var drum_machine$app$run_$_state_machine__8479__auto____1 = (function (state_17023){
while(true){
var ret_value__8480__auto__ = (function (){try{while(true){
var result__8481__auto__ = switch__8478__auto__.call(null,state_17023);
if(cljs.core.keyword_identical_QMARK_.call(null,result__8481__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__8481__auto__;
}
break;
}
}catch (e17033){if((e17033 instanceof Object)){
var ex__8482__auto__ = e17033;
var statearr_17034_17039 = state_17023;
(statearr_17034_17039[(5)] = ex__8482__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17023);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17033;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__8480__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17040 = state_17023;
state_17023 = G__17040;
continue;
} else {
return ret_value__8480__auto__;
}
break;
}
});
drum_machine$app$run_$_state_machine__8479__auto__ = function(state_17023){
switch(arguments.length){
case 0:
return drum_machine$app$run_$_state_machine__8479__auto____0.call(this);
case 1:
return drum_machine$app$run_$_state_machine__8479__auto____1.call(this,state_17023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
drum_machine$app$run_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$0 = drum_machine$app$run_$_state_machine__8479__auto____0;
drum_machine$app$run_$_state_machine__8479__auto__.cljs$core$IFn$_invoke$arity$1 = drum_machine$app$run_$_state_machine__8479__auto____1;
return drum_machine$app$run_$_state_machine__8479__auto__;
})()
;})(switch__8478__auto__,c__8543__auto___17036))
})();
var state__8545__auto__ = (function (){var statearr_17035 = f__8544__auto__.call(null);
(statearr_17035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__8543__auto___17036);

return statearr_17035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__8545__auto__);
});})(c__8543__auto___17036))
);


return om.next.add_root_BANG_.call(null,drum_machine.reconciler.reconciler,drum_machine.app.App,document.getElementById("app"));
});

//# sourceMappingURL=app.js.map