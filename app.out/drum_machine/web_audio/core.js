// Compiled by ClojureScript 1.7.145 {}
goog.provide('drum_machine.web_audio.core');
goog.require('cljs.core');

/**
 * @interface
 */
drum_machine.web_audio.core.IAudioNode = function(){};


/**
 * @interface
 */
drum_machine.web_audio.core.IOscillator = function(){};

drum_machine.web_audio.core.set_frequency = (function drum_machine$web_audio$core$set_frequency(this$,freq){
if((!((this$ == null))) && (!((this$.drum_machine$web_audio$core$IOscillator$set_frequency$arity$2 == null)))){
return this$.drum_machine$web_audio$core$IOscillator$set_frequency$arity$2(this$,freq);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (drum_machine.web_audio.core.set_frequency[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,this$,freq);
} else {
var m__5750__auto____$1 = (drum_machine.web_audio.core.set_frequency["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,this$,freq);
} else {
throw cljs.core.missing_protocol.call(null,"IOscillator.set-frequency",this$);
}
}
}
});

drum_machine.web_audio.core.start = (function drum_machine$web_audio$core$start(this$){
if((!((this$ == null))) && (!((this$.drum_machine$web_audio$core$IOscillator$start$arity$1 == null)))){
return this$.drum_machine$web_audio$core$IOscillator$start$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (drum_machine.web_audio.core.start[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,this$);
} else {
var m__5750__auto____$1 = (drum_machine.web_audio.core.start["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IOscillator.start",this$);
}
}
}
});


/**
 * @interface
 */
drum_machine.web_audio.core.IAudioContext = function(){};

drum_machine.web_audio.core.create_oscillator = (function drum_machine$web_audio$core$create_oscillator(this$){
if((!((this$ == null))) && (!((this$.drum_machine$web_audio$core$IAudioContext$create_oscillator$arity$1 == null)))){
return this$.drum_machine$web_audio$core$IAudioContext$create_oscillator$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (drum_machine.web_audio.core.create_oscillator[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,this$);
} else {
var m__5750__auto____$1 = (drum_machine.web_audio.core.create_oscillator["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IAudioContext.create-oscillator",this$);
}
}
}
});

drum_machine.web_audio.core.create_gain = (function drum_machine$web_audio$core$create_gain(this$){
if((!((this$ == null))) && (!((this$.drum_machine$web_audio$core$IAudioContext$create_gain$arity$1 == null)))){
return this$.drum_machine$web_audio$core$IAudioContext$create_gain$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (drum_machine.web_audio.core.create_gain[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,this$);
} else {
var m__5750__auto____$1 = (drum_machine.web_audio.core.create_gain["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IAudioContext.create-gain",this$);
}
}
}
});

drum_machine.web_audio.core.current_time = (function drum_machine$web_audio$core$current_time(this$){
if((!((this$ == null))) && (!((this$.drum_machine$web_audio$core$IAudioContext$current_time$arity$1 == null)))){
return this$.drum_machine$web_audio$core$IAudioContext$current_time$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (drum_machine.web_audio.core.current_time[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,this$);
} else {
var m__5750__auto____$1 = (drum_machine.web_audio.core.current_time["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IAudioContext.current-time",this$);
}
}
}
});

drum_machine.web_audio.core.destination = (function drum_machine$web_audio$core$destination(this$){
if((!((this$ == null))) && (!((this$.drum_machine$web_audio$core$IAudioContext$destination$arity$1 == null)))){
return this$.drum_machine$web_audio$core$IAudioContext$destination$arity$1(this$);
} else {
var x__5749__auto__ = (((this$ == null))?null:this$);
var m__5750__auto__ = (drum_machine.web_audio.core.destination[goog.typeOf(x__5749__auto__)]);
if(!((m__5750__auto__ == null))){
return m__5750__auto__.call(null,this$);
} else {
var m__5750__auto____$1 = (drum_machine.web_audio.core.destination["_"]);
if(!((m__5750__auto____$1 == null))){
return m__5750__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"IAudioContext.destination",this$);
}
}
}
});


/**
 * @interface
 */
drum_machine.web_audio.core.IGain = function(){};


/**
* @constructor
*/
drum_machine.web_audio.core.Gain = (function (ctx,obj){
this.ctx = ctx;
this.obj = obj;
})

drum_machine.web_audio.core.Gain.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

drum_machine.web_audio.core.Gain.cljs$lang$type = true;

drum_machine.web_audio.core.Gain.cljs$lang$ctorStr = "drum-machine.web-audio.core/Gain";

drum_machine.web_audio.core.Gain.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"drum-machine.web-audio.core/Gain");
});

drum_machine.web_audio.core.__GT_Gain = (function drum_machine$web_audio$core$__GT_Gain(ctx,obj){
return (new drum_machine.web_audio.core.Gain(ctx,obj));
});


/**
* @constructor
 * @implements {drum_machine.web_audio.core.IOscillator}
*/
drum_machine.web_audio.core.Oscillator = (function (ctx,obj){
this.ctx = ctx;
this.obj = obj;
})
drum_machine.web_audio.core.Oscillator.prototype.drum_machine$web_audio$core$IOscillator$ = true;

drum_machine.web_audio.core.Oscillator.prototype.drum_machine$web_audio$core$IOscillator$set_frequency$arity$2 = (function (this$,freq){
var self__ = this;
var this$__$1 = this;
return self__.obj.frequency.setValueAtTime(freq,drum_machine.web_audio.core.current_time.call(null,self__.ctx));
});

drum_machine.web_audio.core.Oscillator.prototype.drum_machine$web_audio$core$IOscillator$start$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.obj.start();
});

drum_machine.web_audio.core.Oscillator.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ctx","ctx",1146921409,null),new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

drum_machine.web_audio.core.Oscillator.cljs$lang$type = true;

drum_machine.web_audio.core.Oscillator.cljs$lang$ctorStr = "drum-machine.web-audio.core/Oscillator";

drum_machine.web_audio.core.Oscillator.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"drum-machine.web-audio.core/Oscillator");
});

drum_machine.web_audio.core.__GT_Oscillator = (function drum_machine$web_audio$core$__GT_Oscillator(ctx,obj){
return (new drum_machine.web_audio.core.Oscillator(ctx,obj));
});


/**
* @constructor
 * @implements {drum_machine.web_audio.core.IAudioContext}
*/
drum_machine.web_audio.core.AudioContext = (function (obj){
this.obj = obj;
})
drum_machine.web_audio.core.AudioContext.prototype.drum_machine$web_audio$core$IAudioContext$ = true;

drum_machine.web_audio.core.AudioContext.prototype.drum_machine$web_audio$core$IAudioContext$create_oscillator$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new drum_machine.web_audio.core.Oscillator(this$__$1,self__.obj.createOscillator()));
});

drum_machine.web_audio.core.AudioContext.prototype.drum_machine$web_audio$core$IAudioContext$create_gain$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return (new drum_machine.web_audio.core.Gain(this$__$1,self__.obj.createGain()));
});

drum_machine.web_audio.core.AudioContext.prototype.drum_machine$web_audio$core$IAudioContext$current_time$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.obj.currentTime;
});

drum_machine.web_audio.core.AudioContext.prototype.drum_machine$web_audio$core$IAudioContext$destination$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.obj.destination;
});

drum_machine.web_audio.core.AudioContext.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"obj","obj",-1672671807,null)], null);
});

drum_machine.web_audio.core.AudioContext.cljs$lang$type = true;

drum_machine.web_audio.core.AudioContext.cljs$lang$ctorStr = "drum-machine.web-audio.core/AudioContext";

drum_machine.web_audio.core.AudioContext.cljs$lang$ctorPrWriter = (function (this__5692__auto__,writer__5693__auto__,opt__5694__auto__){
return cljs.core._write.call(null,writer__5693__auto__,"drum-machine.web-audio.core/AudioContext");
});

drum_machine.web_audio.core.__GT_AudioContext = (function drum_machine$web_audio$core$__GT_AudioContext(obj){
return (new drum_machine.web_audio.core.AudioContext(obj));
});

drum_machine.web_audio.core.create_context = (function drum_machine$web_audio$core$create_context(){
return (new drum_machine.web_audio.core.AudioContext((new ((function (){var or__5094__auto__ = window.AudioContext;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return window.webkitAudioContext;
}
})()))));
});
drum_machine.web_audio.core.connect = (function drum_machine$web_audio$core$connect(x,y){
return x.obj.connect(y.obj);
});
drum_machine.web_audio.core.connect_destination = (function drum_machine$web_audio$core$connect_destination(x){
return x.obj.connect(drum_machine.web_audio.core.destination.call(null,x.ctx));
});

//# sourceMappingURL=core.js.map