// Compiled by ClojureScript 1.7.145 {}
goog.provide('drum_machine.web_audio.remote');
goog.require('cljs.core');
goog.require('ajax.core');
drum_machine.web_audio.remote.load_into_buffer = (function drum_machine$web_audio$remote$load_into_buffer(ctx,url,p__17366){
var map__17369 = p__17366;
var map__17369__$1 = ((((!((map__17369 == null)))?((((map__17369.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17369.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17369):map__17369);
var handler = cljs.core.get.call(null,map__17369__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
var error_handler = cljs.core.get.call(null,map__17369__$1,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776));
var complete = ((function (map__17369,map__17369__$1,handler,error_handler){
return (function drum_machine$web_audio$remote$load_into_buffer_$_complete(data){
return cljs.core.println.call(null,"complete",cljs.core.count.call(null,data));
});})(map__17369,map__17369__$1,handler,error_handler))
;
var error = ((function (map__17369,map__17369__$1,handler,error_handler){
return (function drum_machine$web_audio$remote$load_into_buffer_$_error(error__$1){
return cljs.core.println.call(null,"error",error__$1);
});})(map__17369,map__17369__$1,handler,error_handler))
;
return ajax.core.GET.call(null,url,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Authorization","Token: 852ac849cc5fd97a09ab6906286cc52344fc4dfd"], null),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"raw","raw",1604651272),new cljs.core.Keyword(null,"handler","handler",-195596612),complete,new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),error], null));
});

//# sourceMappingURL=remote.js.map