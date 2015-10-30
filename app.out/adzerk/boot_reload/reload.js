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
return (function (p1__12020_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__12020_SHARP_),path);
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
var seq__12025 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__12026 = null;
var count__12027 = (0);
var i__12028 = (0);
while(true){
if((i__12028 < count__12027)){
var s = cljs.core._nth.call(null,chunk__12026,i__12028);
var temp__4425__auto___12029 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___12029)){
var sheet_12030 = temp__4425__auto___12029;
var temp__4425__auto___12031__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_12030.href,changed);
if(cljs.core.truth_(temp__4425__auto___12031__$1)){
var href_uri_12032 = temp__4425__auto___12031__$1;
sheet_12030.ownerNode.href = href_uri_12032.makeUnique().toString();
} else {
}
} else {
}

var G__12033 = seq__12025;
var G__12034 = chunk__12026;
var G__12035 = count__12027;
var G__12036 = (i__12028 + (1));
seq__12025 = G__12033;
chunk__12026 = G__12034;
count__12027 = G__12035;
i__12028 = G__12036;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12025);
if(temp__4425__auto__){
var seq__12025__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12025__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__12025__$1);
var G__12037 = cljs.core.chunk_rest.call(null,seq__12025__$1);
var G__12038 = c__5897__auto__;
var G__12039 = cljs.core.count.call(null,c__5897__auto__);
var G__12040 = (0);
seq__12025 = G__12037;
chunk__12026 = G__12038;
count__12027 = G__12039;
i__12028 = G__12040;
continue;
} else {
var s = cljs.core.first.call(null,seq__12025__$1);
var temp__4425__auto___12041__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___12041__$1)){
var sheet_12042 = temp__4425__auto___12041__$1;
var temp__4425__auto___12043__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_12042.href,changed);
if(cljs.core.truth_(temp__4425__auto___12043__$2)){
var href_uri_12044 = temp__4425__auto___12043__$2;
sheet_12042.ownerNode.href = href_uri_12044.makeUnique().toString();
} else {
}
} else {
}

var G__12045 = cljs.core.next.call(null,seq__12025__$1);
var G__12046 = null;
var G__12047 = (0);
var G__12048 = (0);
seq__12025 = G__12045;
chunk__12026 = G__12046;
count__12027 = G__12047;
i__12028 = G__12048;
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
var seq__12053 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__12054 = null;
var count__12055 = (0);
var i__12056 = (0);
while(true){
if((i__12056 < count__12055)){
var s = cljs.core._nth.call(null,chunk__12054,i__12056);
var temp__4425__auto___12057 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___12057)){
var image_12058 = temp__4425__auto___12057;
var temp__4425__auto___12059__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_12058.src,changed);
if(cljs.core.truth_(temp__4425__auto___12059__$1)){
var href_uri_12060 = temp__4425__auto___12059__$1;
image_12058.src = href_uri_12060.makeUnique().toString();
} else {
}
} else {
}

var G__12061 = seq__12053;
var G__12062 = chunk__12054;
var G__12063 = count__12055;
var G__12064 = (i__12056 + (1));
seq__12053 = G__12061;
chunk__12054 = G__12062;
count__12055 = G__12063;
i__12056 = G__12064;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12053);
if(temp__4425__auto__){
var seq__12053__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12053__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__12053__$1);
var G__12065 = cljs.core.chunk_rest.call(null,seq__12053__$1);
var G__12066 = c__5897__auto__;
var G__12067 = cljs.core.count.call(null,c__5897__auto__);
var G__12068 = (0);
seq__12053 = G__12065;
chunk__12054 = G__12066;
count__12055 = G__12067;
i__12056 = G__12068;
continue;
} else {
var s = cljs.core.first.call(null,seq__12053__$1);
var temp__4425__auto___12069__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___12069__$1)){
var image_12070 = temp__4425__auto___12069__$1;
var temp__4425__auto___12071__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_12070.src,changed);
if(cljs.core.truth_(temp__4425__auto___12071__$2)){
var href_uri_12072 = temp__4425__auto___12071__$2;
image_12070.src = href_uri_12072.makeUnique().toString();
} else {
}
} else {
}

var G__12073 = cljs.core.next.call(null,seq__12053__$1);
var G__12074 = null;
var G__12075 = (0);
var G__12076 = (0);
seq__12053 = G__12073;
chunk__12054 = G__12074;
count__12055 = G__12075;
i__12056 = G__12076;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__12079){
var map__12082 = p__12079;
var map__12082__$1 = ((((!((map__12082 == null)))?((((map__12082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12082):map__12082);
var on_jsload = cljs.core.get.call(null,map__12082__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__12082,map__12082__$1,on_jsload){
return (function (p1__12077_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__12077_SHARP_,".js");
});})(map__12082,map__12082__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__12082,map__12082__$1,on_jsload){
return (function (p1__12078_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__12078_SHARP_).makeUnique());
});})(js_files,map__12082,map__12082__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__12082,map__12082__$1,on_jsload){
return (function() { 
var G__12084__delegate = function (_){
return on_jsload.call(null);
};
var G__12084 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__12085__i = 0, G__12085__a = new Array(arguments.length -  0);
while (G__12085__i < G__12085__a.length) {G__12085__a[G__12085__i] = arguments[G__12085__i + 0]; ++G__12085__i;}
  _ = new cljs.core.IndexedSeq(G__12085__a,0);
} 
return G__12084__delegate.call(this,_);};
G__12084.cljs$lang$maxFixedArity = 0;
G__12084.cljs$lang$applyTo = (function (arglist__12086){
var _ = cljs.core.seq(arglist__12086);
return G__12084__delegate(_);
});
G__12084.cljs$core$IFn$_invoke$arity$variadic = G__12084__delegate;
return G__12084;
})()
;})(js_files,map__12082,map__12082__$1,on_jsload))
,((function (js_files,map__12082,map__12082__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__12082,map__12082__$1,on_jsload))
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

var seq__12091_12095 = cljs.core.seq.call(null,things_to_log);
var chunk__12092_12096 = null;
var count__12093_12097 = (0);
var i__12094_12098 = (0);
while(true){
if((i__12094_12098 < count__12093_12097)){
var t_12099 = cljs.core._nth.call(null,chunk__12092_12096,i__12094_12098);
console.log(t_12099);

var G__12100 = seq__12091_12095;
var G__12101 = chunk__12092_12096;
var G__12102 = count__12093_12097;
var G__12103 = (i__12094_12098 + (1));
seq__12091_12095 = G__12100;
chunk__12092_12096 = G__12101;
count__12093_12097 = G__12102;
i__12094_12098 = G__12103;
continue;
} else {
var temp__4425__auto___12104 = cljs.core.seq.call(null,seq__12091_12095);
if(temp__4425__auto___12104){
var seq__12091_12105__$1 = temp__4425__auto___12104;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12091_12105__$1)){
var c__5897__auto___12106 = cljs.core.chunk_first.call(null,seq__12091_12105__$1);
var G__12107 = cljs.core.chunk_rest.call(null,seq__12091_12105__$1);
var G__12108 = c__5897__auto___12106;
var G__12109 = cljs.core.count.call(null,c__5897__auto___12106);
var G__12110 = (0);
seq__12091_12095 = G__12107;
chunk__12092_12096 = G__12108;
count__12093_12097 = G__12109;
i__12094_12098 = G__12110;
continue;
} else {
var t_12111 = cljs.core.first.call(null,seq__12091_12105__$1);
console.log(t_12111);

var G__12112 = cljs.core.next.call(null,seq__12091_12105__$1);
var G__12113 = null;
var G__12114 = (0);
var G__12115 = (0);
seq__12091_12095 = G__12112;
chunk__12092_12096 = G__12113;
count__12093_12097 = G__12114;
i__12094_12098 = G__12115;
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

var G__12117 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__12117,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__12117);

adzerk.boot_reload.reload.reload_css.call(null,G__12117);

adzerk.boot_reload.reload.reload_img.call(null,G__12117);

return G__12117;
});

//# sourceMappingURL=reload.js.map