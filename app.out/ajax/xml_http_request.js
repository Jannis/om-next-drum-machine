// Compiled by ClojureScript 1.7.145 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13589,handler){
var map__13590 = p__13589;
var map__13590__$1 = ((((!((map__13590 == null)))?((((map__13590.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13590.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13590):map__13590);
var uri = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__13590__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__13590,map__13590__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__13588_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__13588_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__13590,map__13590__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4425__auto___13598 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4425__auto___13598)){
var response_type_13599 = temp__4425__auto___13598;
this$__$1.responseType = cljs.core.name.call(null,response_type_13599);
} else {
}

var seq__13592_13600 = cljs.core.seq.call(null,headers);
var chunk__13593_13601 = null;
var count__13594_13602 = (0);
var i__13595_13603 = (0);
while(true){
if((i__13595_13603 < count__13594_13602)){
var vec__13596_13604 = cljs.core._nth.call(null,chunk__13593_13601,i__13595_13603);
var k_13605 = cljs.core.nth.call(null,vec__13596_13604,(0),null);
var v_13606 = cljs.core.nth.call(null,vec__13596_13604,(1),null);
this$__$1.setRequestHeader(k_13605,v_13606);

var G__13607 = seq__13592_13600;
var G__13608 = chunk__13593_13601;
var G__13609 = count__13594_13602;
var G__13610 = (i__13595_13603 + (1));
seq__13592_13600 = G__13607;
chunk__13593_13601 = G__13608;
count__13594_13602 = G__13609;
i__13595_13603 = G__13610;
continue;
} else {
var temp__4425__auto___13611 = cljs.core.seq.call(null,seq__13592_13600);
if(temp__4425__auto___13611){
var seq__13592_13612__$1 = temp__4425__auto___13611;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13592_13612__$1)){
var c__5897__auto___13613 = cljs.core.chunk_first.call(null,seq__13592_13612__$1);
var G__13614 = cljs.core.chunk_rest.call(null,seq__13592_13612__$1);
var G__13615 = c__5897__auto___13613;
var G__13616 = cljs.core.count.call(null,c__5897__auto___13613);
var G__13617 = (0);
seq__13592_13600 = G__13614;
chunk__13593_13601 = G__13615;
count__13594_13602 = G__13616;
i__13595_13603 = G__13617;
continue;
} else {
var vec__13597_13618 = cljs.core.first.call(null,seq__13592_13612__$1);
var k_13619 = cljs.core.nth.call(null,vec__13597_13618,(0),null);
var v_13620 = cljs.core.nth.call(null,vec__13597_13618,(1),null);
this$__$1.setRequestHeader(k_13619,v_13620);

var G__13621 = cljs.core.next.call(null,seq__13592_13612__$1);
var G__13622 = null;
var G__13623 = (0);
var G__13624 = (0);
seq__13592_13600 = G__13621;
chunk__13593_13601 = G__13622;
count__13594_13602 = G__13623;
i__13595_13603 = G__13624;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__5094__auto__ = body;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map