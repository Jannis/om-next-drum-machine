// Compiled by ClojureScript 1.7.145 {}
goog.provide('adzerk.boot_reload.reload');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('goog.async.DeferredList');
goog.require('goog.net.jsloader');
adzerk.boot_reload.reload.page_uri = (new goog.Uri(window.location.href));
adzerk.boot_reload.reload.ends_with_QMARK_ = (function adzerk$boot_reload$reload$ends_with_QMARK_(s,pat){
return cljs.core._EQ_.call(null,pat,cljs.core.subs.call(null,s,(cljs.core.count.call(null,s) - cljs.core.count.call(null,pat))));
});
adzerk.boot_reload.reload.reload_page_BANG_ = (function adzerk$boot_reload$reload$reload_page_BANG_(){
return window.location.reload();
});
adzerk.boot_reload.reload.normalize_href_or_uri = (function adzerk$boot_reload$reload$normalize_href_or_uri(href_or_uri){
var uri = (new goog.Uri(href_or_uri));
return adzerk.boot_reload.reload.page_uri.resolve(uri).getPath();
});
adzerk.boot_reload.reload.changed_href_QMARK_ = (function adzerk$boot_reload$reload$changed_href_QMARK_(href_or_uri,changed){
if(cljs.core.truth_(href_or_uri)){
var path = adzerk.boot_reload.reload.normalize_href_or_uri.call(null,href_or_uri);
if(cljs.core.truth_(cljs.core.not_empty.call(null,cljs.core.filter.call(null,((function (path){
return (function (p1__12387_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__12387_SHARP_),path);
});})(path))
,changed)))){
return goog.Uri.parse(path);
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_css = (function adzerk$boot_reload$reload$reload_css(changed){
var sheets = document.styleSheets;
var seq__12392 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__12393 = null;
var count__12394 = (0);
var i__12395 = (0);
while(true){
if((i__12395 < count__12394)){
var s = cljs.core._nth.call(null,chunk__12393,i__12395);
var temp__4425__auto___12396 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___12396)){
var sheet_12397 = temp__4425__auto___12396;
var temp__4425__auto___12398__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_12397.href,changed);
if(cljs.core.truth_(temp__4425__auto___12398__$1)){
var href_uri_12399 = temp__4425__auto___12398__$1;
sheet_12397.ownerNode.href = href_uri_12399.makeUnique().toString();
} else {
}
} else {
}

var G__12400 = seq__12392;
var G__12401 = chunk__12393;
var G__12402 = count__12394;
var G__12403 = (i__12395 + (1));
seq__12392 = G__12400;
chunk__12393 = G__12401;
count__12394 = G__12402;
i__12395 = G__12403;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12392);
if(temp__4425__auto__){
var seq__12392__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12392__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__12392__$1);
var G__12404 = cljs.core.chunk_rest.call(null,seq__12392__$1);
var G__12405 = c__5897__auto__;
var G__12406 = cljs.core.count.call(null,c__5897__auto__);
var G__12407 = (0);
seq__12392 = G__12404;
chunk__12393 = G__12405;
count__12394 = G__12406;
i__12395 = G__12407;
continue;
} else {
var s = cljs.core.first.call(null,seq__12392__$1);
var temp__4425__auto___12408__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___12408__$1)){
var sheet_12409 = temp__4425__auto___12408__$1;
var temp__4425__auto___12410__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_12409.href,changed);
if(cljs.core.truth_(temp__4425__auto___12410__$2)){
var href_uri_12411 = temp__4425__auto___12410__$2;
sheet_12409.ownerNode.href = href_uri_12411.makeUnique().toString();
} else {
}
} else {
}

var G__12412 = cljs.core.next.call(null,seq__12392__$1);
var G__12413 = null;
var G__12414 = (0);
var G__12415 = (0);
seq__12392 = G__12412;
chunk__12393 = G__12413;
count__12394 = G__12414;
i__12395 = G__12415;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_img = (function adzerk$boot_reload$reload$reload_img(changed){
var images = document.images;
var seq__12420 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__12421 = null;
var count__12422 = (0);
var i__12423 = (0);
while(true){
if((i__12423 < count__12422)){
var s = cljs.core._nth.call(null,chunk__12421,i__12423);
var temp__4425__auto___12424 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___12424)){
var image_12425 = temp__4425__auto___12424;
var temp__4425__auto___12426__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_12425.src,changed);
if(cljs.core.truth_(temp__4425__auto___12426__$1)){
var href_uri_12427 = temp__4425__auto___12426__$1;
image_12425.src = href_uri_12427.makeUnique().toString();
} else {
}
} else {
}

var G__12428 = seq__12420;
var G__12429 = chunk__12421;
var G__12430 = count__12422;
var G__12431 = (i__12423 + (1));
seq__12420 = G__12428;
chunk__12421 = G__12429;
count__12422 = G__12430;
i__12423 = G__12431;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12420);
if(temp__4425__auto__){
var seq__12420__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12420__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__12420__$1);
var G__12432 = cljs.core.chunk_rest.call(null,seq__12420__$1);
var G__12433 = c__5897__auto__;
var G__12434 = cljs.core.count.call(null,c__5897__auto__);
var G__12435 = (0);
seq__12420 = G__12432;
chunk__12421 = G__12433;
count__12422 = G__12434;
i__12423 = G__12435;
continue;
} else {
var s = cljs.core.first.call(null,seq__12420__$1);
var temp__4425__auto___12436__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___12436__$1)){
var image_12437 = temp__4425__auto___12436__$1;
var temp__4425__auto___12438__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_12437.src,changed);
if(cljs.core.truth_(temp__4425__auto___12438__$2)){
var href_uri_12439 = temp__4425__auto___12438__$2;
image_12437.src = href_uri_12439.makeUnique().toString();
} else {
}
} else {
}

var G__12440 = cljs.core.next.call(null,seq__12420__$1);
var G__12441 = null;
var G__12442 = (0);
var G__12443 = (0);
seq__12420 = G__12440;
chunk__12421 = G__12441;
count__12422 = G__12442;
i__12423 = G__12443;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__12446){
var map__12449 = p__12446;
var map__12449__$1 = ((((!((map__12449 == null)))?((((map__12449.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12449.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12449):map__12449);
var on_jsload = cljs.core.get.call(null,map__12449__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__12449,map__12449__$1,on_jsload){
return (function (p1__12444_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__12444_SHARP_,".js");
});})(map__12449,map__12449__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__12449,map__12449__$1,on_jsload){
return (function (p1__12445_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__12445_SHARP_).makeUnique());
});})(js_files,map__12449,map__12449__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__12449,map__12449__$1,on_jsload){
return (function() { 
var G__12451__delegate = function (_){
return on_jsload.call(null);
};
var G__12451 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__12452__i = 0, G__12452__a = new Array(arguments.length -  0);
while (G__12452__i < G__12452__a.length) {G__12452__a[G__12452__i] = arguments[G__12452__i + 0]; ++G__12452__i;}
  _ = new cljs.core.IndexedSeq(G__12452__a,0);
} 
return G__12451__delegate.call(this,_);};
G__12451.cljs$lang$maxFixedArity = 0;
G__12451.cljs$lang$applyTo = (function (arglist__12453){
var _ = cljs.core.seq(arglist__12453);
return G__12451__delegate(_);
});
G__12451.cljs$core$IFn$_invoke$arity$variadic = G__12451__delegate;
return G__12451;
})()
;})(js_files,map__12449,map__12449__$1,on_jsload))
,((function (js_files,map__12449,map__12449__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__12449,map__12449__$1,on_jsload))
);

if(cljs.core.truth_((window["jQuery"]))){
return jQuery(document).trigger("page-load");
} else {
return null;
}
} else {
return null;
}
});
adzerk.boot_reload.reload.reload_html = (function adzerk$boot_reload$reload$reload_html(changed){
var page_path = adzerk.boot_reload.reload.page_uri.getPath();
var html_path = (cljs.core.truth_(adzerk.boot_reload.reload.ends_with_QMARK_.call(null,page_path,"/"))?[cljs.core.str(page_path),cljs.core.str("index.html")].join(''):page_path);
if(cljs.core.truth_(adzerk.boot_reload.reload.changed_href_QMARK_.call(null,html_path,changed))){
return adzerk.boot_reload.reload.reload_page_BANG_.call(null);
} else {
return null;
}
});
adzerk.boot_reload.reload.group_log = (function adzerk$boot_reload$reload$group_log(title,things_to_log){
console.groupCollapsed(title);

var seq__12458_12462 = cljs.core.seq.call(null,things_to_log);
var chunk__12459_12463 = null;
var count__12460_12464 = (0);
var i__12461_12465 = (0);
while(true){
if((i__12461_12465 < count__12460_12464)){
var t_12466 = cljs.core._nth.call(null,chunk__12459_12463,i__12461_12465);
console.log(t_12466);

var G__12467 = seq__12458_12462;
var G__12468 = chunk__12459_12463;
var G__12469 = count__12460_12464;
var G__12470 = (i__12461_12465 + (1));
seq__12458_12462 = G__12467;
chunk__12459_12463 = G__12468;
count__12460_12464 = G__12469;
i__12461_12465 = G__12470;
continue;
} else {
var temp__4425__auto___12471 = cljs.core.seq.call(null,seq__12458_12462);
if(temp__4425__auto___12471){
var seq__12458_12472__$1 = temp__4425__auto___12471;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12458_12472__$1)){
var c__5897__auto___12473 = cljs.core.chunk_first.call(null,seq__12458_12472__$1);
var G__12474 = cljs.core.chunk_rest.call(null,seq__12458_12472__$1);
var G__12475 = c__5897__auto___12473;
var G__12476 = cljs.core.count.call(null,c__5897__auto___12473);
var G__12477 = (0);
seq__12458_12462 = G__12474;
chunk__12459_12463 = G__12475;
count__12460_12464 = G__12476;
i__12461_12465 = G__12477;
continue;
} else {
var t_12478 = cljs.core.first.call(null,seq__12458_12472__$1);
console.log(t_12478);

var G__12479 = cljs.core.next.call(null,seq__12458_12472__$1);
var G__12480 = null;
var G__12481 = (0);
var G__12482 = (0);
seq__12458_12462 = G__12479;
chunk__12459_12463 = G__12480;
count__12460_12464 = G__12481;
i__12461_12465 = G__12482;
continue;
}
} else {
}
}
break;
}

return console.groupEnd();
});
adzerk.boot_reload.reload.reload = (function adzerk$boot_reload$reload$reload(changed,opts){
adzerk.boot_reload.reload.group_log.call(null,"Reload",changed);

var G__12484 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__12484,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__12484);

adzerk.boot_reload.reload.reload_css.call(null,G__12484);

adzerk.boot_reload.reload.reload_img.call(null,G__12484);

return G__12484;
});

//# sourceMappingURL=reload.js.map