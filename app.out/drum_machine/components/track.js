// Compiled by ClojureScript 1.7.145 {}
goog.provide('drum_machine.components.track');
goog.require('cljs.core');
goog.require('om.next');
goog.require('om.dom');
goog.require('drum_machine.util');
/**
 * @constructor
 */
drum_machine.components.track.Track = (function drum_machine$components$track$Track(){
var this__11108__auto__ = this;
React.Component.apply(this__11108__auto__,arguments);

if(!((this__11108__auto__.getInitialState == null))){
this__11108__auto__.state = this__11108__auto__.getInitialState();
} else {
this__11108__auto__.state = {};
}

return this__11108__auto__;
});

drum_machine.components.track.Track.prototype = goog.object.clone(React.Component.prototype);

var x27793_27814 = drum_machine.components.track.Track.prototype;
x27793_27814.componentWillUpdate = ((function (x27793_27814){
return (function (next_props__11049__auto__,next_state__11050__auto__){
var this__11048__auto__ = this;
om.next.merge_pending_props_BANG_.call(null,this__11048__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__11048__auto__);
});})(x27793_27814))
;

x27793_27814.shouldComponentUpdate = ((function (x27793_27814){
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
});})(x27793_27814))
;

x27793_27814.componentWillUnmount = ((function (x27793_27814){
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
});})(x27793_27814))
;

x27793_27814.componentDidUpdate = ((function (x27793_27814){
return (function (prev_props__11051__auto__,prev_state__11052__auto__){
var this__11048__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__11048__auto__);
});})(x27793_27814))
;

x27793_27814.isMounted = ((function (x27793_27814){
return (function (){
var this__11048__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__11048__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x27793_27814))
;

x27793_27814.componentWillMount = ((function (x27793_27814){
return (function (){
var this__11048__auto__ = this;
var indexer__11053__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__11048__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__11053__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__11053__auto__,this__11048__auto__);
}
});})(x27793_27814))
;

x27793_27814.toggle_beat = ((function (x27793_27814){
return (function (n){
var this$ = this;
var map__27794 = om.next.props.call(null,this$);
var map__27794__$1 = ((((!((map__27794 == null)))?((((map__27794.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27794.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27794):map__27794);
var play_on = cljs.core.get.call(null,map__27794__$1,new cljs.core.Keyword(null,"play-on","play-on",-1655917734));
var map__27795 = om.next.get_computed.call(null,om.next.props.call(null,this$));
var map__27795__$1 = ((((!((map__27795 == null)))?((((map__27795.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27795.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27795):map__27795);
var update_fn = cljs.core.get.call(null,map__27795__$1,new cljs.core.Keyword(null,"update-fn","update-fn",711087313));
return update_fn.call(null,om.next.get_ident.call(null,this$),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"play-on","play-on",-1655917734),(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([n], true),play_on))?cljs.core.remove.call(null,cljs.core.PersistentHashSet.fromArray([n], true),play_on):cljs.core.conj.call(null,play_on,n))], null));
});})(x27793_27814))
;

x27793_27814.render = ((function (x27793_27814){
return (function (){
var this$ = this;
var _STAR_reconciler_STAR_27798 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_27799 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_27800 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_27801 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_27802 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this$);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this$) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this$);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this$);

om.next._STAR_parent_STAR_ = this$;

try{var map__27803 = om.next.props.call(null,this$);
var map__27803__$1 = ((((!((map__27803 == null)))?((((map__27803.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27803.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27803):map__27803);
var name = cljs.core.get.call(null,map__27803__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var source = cljs.core.get.call(null,map__27803__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var play_on = cljs.core.get.call(null,map__27803__$1,new cljs.core.Keyword(null,"play-on","play-on",-1655917734));
var map__27804 = om.next.get_computed.call(null,om.next.props.call(null,this$));
var map__27804__$1 = ((((!((map__27804 == null)))?((((map__27804.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27804.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27804):map__27804);
var bars = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"bars","bars",-586907130));
var beat = cljs.core.get.call(null,map__27804__$1,new cljs.core.Keyword(null,"beat","beat",-817854366));
var play = cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([beat], true),play_on);
return React.DOM.div({"className": "track"},React.DOM.h3({"className": "title"},name),React.DOM.div({"className": "beats-container"},React.DOM.div({"className": "beats"},(function (){var iter__5866__auto__ = ((function (map__27803,map__27803__$1,name,source,play_on,map__27804,map__27804__$1,bars,beat,play,_STAR_reconciler_STAR_27798,_STAR_depth_STAR_27799,_STAR_shared_STAR_27800,_STAR_instrument_STAR_27801,_STAR_parent_STAR_27802,this$,x27793_27814){
return (function drum_machine$components$track$iter__27807(s__27808){
return (new cljs.core.LazySeq(null,((function (map__27803,map__27803__$1,name,source,play_on,map__27804,map__27804__$1,bars,beat,play,_STAR_reconciler_STAR_27798,_STAR_depth_STAR_27799,_STAR_shared_STAR_27800,_STAR_instrument_STAR_27801,_STAR_parent_STAR_27802,this$,x27793_27814){
return (function (){
var s__27808__$1 = s__27808;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__27808__$1);
if(temp__4425__auto__){
var s__27808__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__27808__$2)){
var c__5864__auto__ = cljs.core.chunk_first.call(null,s__27808__$2);
var size__5865__auto__ = cljs.core.count.call(null,c__5864__auto__);
var b__27810 = cljs.core.chunk_buffer.call(null,size__5865__auto__);
if((function (){var i__27809 = (0);
while(true){
if((i__27809 < size__5865__auto__)){
var n = cljs.core._nth.call(null,c__5864__auto__,i__27809);
cljs.core.chunk_append.call(null,b__27810,React.DOM.span({"key": n, "className": drum_machine.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,beat,n)], null))},React.DOM.audio({"id": [cljs.core.str(name),cljs.core.str(n)].join(''), "src": source, "preload": "auto"}),React.DOM.button({"className": drum_machine.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on","on",173873944),cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([n], true),play_on),new cljs.core.Keyword(null,"play","play",-580418022),(function (){var and__5082__auto__ = cljs.core._EQ_.call(null,beat,n);
if(and__5082__auto__){
return play;
} else {
return and__5082__auto__;
}
})()], null)), "onClick": ((function (i__27809,n,c__5864__auto__,size__5865__auto__,b__27810,s__27808__$2,temp__4425__auto__,map__27803,map__27803__$1,name,source,play_on,map__27804,map__27804__$1,bars,beat,play,_STAR_reconciler_STAR_27798,_STAR_depth_STAR_27799,_STAR_shared_STAR_27800,_STAR_instrument_STAR_27801,_STAR_parent_STAR_27802,this$,x27793_27814){
return (function (){
return this$.toggle_beat(n);
});})(i__27809,n,c__5864__auto__,size__5865__auto__,b__27810,s__27808__$2,temp__4425__auto__,map__27803,map__27803__$1,name,source,play_on,map__27804,map__27804__$1,bars,beat,play,_STAR_reconciler_STAR_27798,_STAR_depth_STAR_27799,_STAR_shared_STAR_27800,_STAR_instrument_STAR_27801,_STAR_parent_STAR_27802,this$,x27793_27814))
})));

var G__27815 = (i__27809 + (1));
i__27809 = G__27815;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27810),drum_machine$components$track$iter__27807.call(null,cljs.core.chunk_rest.call(null,s__27808__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__27810),null);
}
} else {
var n = cljs.core.first.call(null,s__27808__$2);
return cljs.core.cons.call(null,React.DOM.span({"key": n, "className": drum_machine.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"active","active",1895962068),cljs.core._EQ_.call(null,beat,n)], null))},React.DOM.audio({"id": [cljs.core.str(name),cljs.core.str(n)].join(''), "src": source, "preload": "auto"}),React.DOM.button({"className": drum_machine.util.class_names.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on","on",173873944),cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([n], true),play_on),new cljs.core.Keyword(null,"play","play",-580418022),(function (){var and__5082__auto__ = cljs.core._EQ_.call(null,beat,n);
if(and__5082__auto__){
return play;
} else {
return and__5082__auto__;
}
})()], null)), "onClick": ((function (n,s__27808__$2,temp__4425__auto__,map__27803,map__27803__$1,name,source,play_on,map__27804,map__27804__$1,bars,beat,play,_STAR_reconciler_STAR_27798,_STAR_depth_STAR_27799,_STAR_shared_STAR_27800,_STAR_instrument_STAR_27801,_STAR_parent_STAR_27802,this$,x27793_27814){
return (function (){
return this$.toggle_beat(n);
});})(n,s__27808__$2,temp__4425__auto__,map__27803,map__27803__$1,name,source,play_on,map__27804,map__27804__$1,bars,beat,play,_STAR_reconciler_STAR_27798,_STAR_depth_STAR_27799,_STAR_shared_STAR_27800,_STAR_instrument_STAR_27801,_STAR_parent_STAR_27802,this$,x27793_27814))
})),drum_machine$components$track$iter__27807.call(null,cljs.core.rest.call(null,s__27808__$2)));
}
} else {
return null;
}
break;
}
});})(map__27803,map__27803__$1,name,source,play_on,map__27804,map__27804__$1,bars,beat,play,_STAR_reconciler_STAR_27798,_STAR_depth_STAR_27799,_STAR_shared_STAR_27800,_STAR_instrument_STAR_27801,_STAR_parent_STAR_27802,this$,x27793_27814))
,null,null));
});})(map__27803,map__27803__$1,name,source,play_on,map__27804,map__27804__$1,bars,beat,play,_STAR_reconciler_STAR_27798,_STAR_depth_STAR_27799,_STAR_shared_STAR_27800,_STAR_instrument_STAR_27801,_STAR_parent_STAR_27802,this$,x27793_27814))
;
return iter__5866__auto__.call(null,cljs.core.range.call(null,(1),((bars * (4)) + (1))));
})())),(cljs.core.truth_(play)?(function (){var G__27811 = document;
var G__27811__$1 = (((G__27811 == null))?null:G__27811.getElementById([cljs.core.str(name),cljs.core.str(beat)].join('')));
var G__27811__$2 = (((G__27811__$1 == null))?null:G__27811__$1.play());
return G__27811__$2;
})():null));
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_27802;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_27801;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_27800;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_27799;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_27798;
}});})(x27793_27814))
;


drum_machine.components.track.Track.prototype.constructor = drum_machine.components.track.Track;

drum_machine.components.track.Track.prototype.om$isComponent = true;

var x27812_27816 = drum_machine.components.track.Track;
x27812_27816.om$next$Ident$ = true;

x27812_27816.om$next$Ident$ident$arity$2 = ((function (x27812_27816){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("track","by-name","track/by-name",780647993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x27812_27816))
;

x27812_27816.om$next$IQuery$ = true;

x27812_27816.om$next$IQuery$query$arity$1 = ((function (x27812_27816){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"play-on","play-on",-1655917734)], null);
});})(x27812_27816))
;


var x27813_27817 = drum_machine.components.track.Track.prototype;
x27813_27817.om$next$Ident$ = true;

x27813_27817.om$next$Ident$ident$arity$2 = ((function (x27813_27817){
return (function (this$,props){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("track","by-name","track/by-name",780647993),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(props)], null);
});})(x27813_27817))
;

x27813_27817.om$next$IQuery$ = true;

x27813_27817.om$next$IQuery$query$arity$1 = ((function (x27813_27817){
return (function (this$){
var this$__$1 = this;
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"play-on","play-on",-1655917734)], null);
});})(x27813_27817))
;


drum_machine.components.track.Track.cljs$lang$type = true;

drum_machine.components.track.Track.cljs$lang$ctorStr = "drum-machine.components.track/Track";

drum_machine.components.track.Track.cljs$lang$ctorPrWriter = (function (this__11110__auto__,writer__11111__auto__,opt__11112__auto__){
return cljs.core._write.call(null,writer__11111__auto__,"drum-machine.components.track/Track");
});
drum_machine.components.track.track = om.next.factory.call(null,drum_machine.components.track.Track,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keyfn","keyfn",780060332),new cljs.core.Keyword(null,"name","name",1843675177)], null));

//# sourceMappingURL=track.js.map