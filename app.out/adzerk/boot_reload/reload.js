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
return (function (p1__12043_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,adzerk.boot_reload.reload.normalize_href_or_uri.call(null,p1__12043_SHARP_),path);
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
var seq__12048 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),sheets.length));
var chunk__12049 = null;
var count__12050 = (0);
var i__12051 = (0);
while(true){
if((i__12051 < count__12050)){
var s = cljs.core._nth.call(null,chunk__12049,i__12051);
var temp__4425__auto___12052 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___12052)){
var sheet_12053 = temp__4425__auto___12052;
var temp__4425__auto___12054__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_12053.href,changed);
if(cljs.core.truth_(temp__4425__auto___12054__$1)){
var href_uri_12055 = temp__4425__auto___12054__$1;
sheet_12053.ownerNode.href = href_uri_12055.makeUnique().toString();
} else {
}
} else {
}

var G__12056 = seq__12048;
var G__12057 = chunk__12049;
var G__12058 = count__12050;
var G__12059 = (i__12051 + (1));
seq__12048 = G__12056;
chunk__12049 = G__12057;
count__12050 = G__12058;
i__12051 = G__12059;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12048);
if(temp__4425__auto__){
var seq__12048__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12048__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__12048__$1);
var G__12060 = cljs.core.chunk_rest.call(null,seq__12048__$1);
var G__12061 = c__5897__auto__;
var G__12062 = cljs.core.count.call(null,c__5897__auto__);
var G__12063 = (0);
seq__12048 = G__12060;
chunk__12049 = G__12061;
count__12050 = G__12062;
i__12051 = G__12063;
continue;
} else {
var s = cljs.core.first.call(null,seq__12048__$1);
var temp__4425__auto___12064__$1 = (sheets[s]);
if(cljs.core.truth_(temp__4425__auto___12064__$1)){
var sheet_12065 = temp__4425__auto___12064__$1;
var temp__4425__auto___12066__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,sheet_12065.href,changed);
if(cljs.core.truth_(temp__4425__auto___12066__$2)){
var href_uri_12067 = temp__4425__auto___12066__$2;
sheet_12065.ownerNode.href = href_uri_12067.makeUnique().toString();
} else {
}
} else {
}

var G__12068 = cljs.core.next.call(null,seq__12048__$1);
var G__12069 = null;
var G__12070 = (0);
var G__12071 = (0);
seq__12048 = G__12068;
chunk__12049 = G__12069;
count__12050 = G__12070;
i__12051 = G__12071;
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
var seq__12076 = cljs.core.seq.call(null,cljs.core.range.call(null,(0),images.length));
var chunk__12077 = null;
var count__12078 = (0);
var i__12079 = (0);
while(true){
if((i__12079 < count__12078)){
var s = cljs.core._nth.call(null,chunk__12077,i__12079);
var temp__4425__auto___12080 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___12080)){
var image_12081 = temp__4425__auto___12080;
var temp__4425__auto___12082__$1 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_12081.src,changed);
if(cljs.core.truth_(temp__4425__auto___12082__$1)){
var href_uri_12083 = temp__4425__auto___12082__$1;
image_12081.src = href_uri_12083.makeUnique().toString();
} else {
}
} else {
}

var G__12084 = seq__12076;
var G__12085 = chunk__12077;
var G__12086 = count__12078;
var G__12087 = (i__12079 + (1));
seq__12076 = G__12084;
chunk__12077 = G__12085;
count__12078 = G__12086;
i__12079 = G__12087;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__12076);
if(temp__4425__auto__){
var seq__12076__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12076__$1)){
var c__5897__auto__ = cljs.core.chunk_first.call(null,seq__12076__$1);
var G__12088 = cljs.core.chunk_rest.call(null,seq__12076__$1);
var G__12089 = c__5897__auto__;
var G__12090 = cljs.core.count.call(null,c__5897__auto__);
var G__12091 = (0);
seq__12076 = G__12088;
chunk__12077 = G__12089;
count__12078 = G__12090;
i__12079 = G__12091;
continue;
} else {
var s = cljs.core.first.call(null,seq__12076__$1);
var temp__4425__auto___12092__$1 = (images[s]);
if(cljs.core.truth_(temp__4425__auto___12092__$1)){
var image_12093 = temp__4425__auto___12092__$1;
var temp__4425__auto___12094__$2 = adzerk.boot_reload.reload.changed_href_QMARK_.call(null,image_12093.src,changed);
if(cljs.core.truth_(temp__4425__auto___12094__$2)){
var href_uri_12095 = temp__4425__auto___12094__$2;
image_12093.src = href_uri_12095.makeUnique().toString();
} else {
}
} else {
}

var G__12096 = cljs.core.next.call(null,seq__12076__$1);
var G__12097 = null;
var G__12098 = (0);
var G__12099 = (0);
seq__12076 = G__12096;
chunk__12077 = G__12097;
count__12078 = G__12098;
i__12079 = G__12099;
continue;
}
} else {
return null;
}
}
break;
}
});
adzerk.boot_reload.reload.reload_js = (function adzerk$boot_reload$reload$reload_js(changed,p__12102){
var map__12105 = p__12102;
var map__12105__$1 = ((((!((map__12105 == null)))?((((map__12105.cljs$lang$protocol_mask$partition0$ & (64))) || (map__12105.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__12105):map__12105);
var on_jsload = cljs.core.get.call(null,map__12105__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),cljs.core.identity);
var js_files = cljs.core.filter.call(null,((function (map__12105,map__12105__$1,on_jsload){
return (function (p1__12100_SHARP_){
return adzerk.boot_reload.reload.ends_with_QMARK_.call(null,p1__12100_SHARP_,".js");
});})(map__12105,map__12105__$1,on_jsload))
,changed);
if(cljs.core.seq.call(null,js_files)){
goog.async.DeferredList.gatherResults(cljs.core.clj__GT_js.call(null,cljs.core.map.call(null,((function (js_files,map__12105,map__12105__$1,on_jsload){
return (function (p1__12101_SHARP_){
return goog.net.jsloader.load(goog.Uri.parse(p1__12101_SHARP_).makeUnique());
});})(js_files,map__12105,map__12105__$1,on_jsload))
,js_files))).addCallbacks(((function (js_files,map__12105,map__12105__$1,on_jsload){
return (function() { 
var G__12107__delegate = function (_){
return on_jsload.call(null);
};
var G__12107 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__12108__i = 0, G__12108__a = new Array(arguments.length -  0);
while (G__12108__i < G__12108__a.length) {G__12108__a[G__12108__i] = arguments[G__12108__i + 0]; ++G__12108__i;}
  _ = new cljs.core.IndexedSeq(G__12108__a,0);
} 
return G__12107__delegate.call(this,_);};
G__12107.cljs$lang$maxFixedArity = 0;
G__12107.cljs$lang$applyTo = (function (arglist__12109){
var _ = cljs.core.seq(arglist__12109);
return G__12107__delegate(_);
});
G__12107.cljs$core$IFn$_invoke$arity$variadic = G__12107__delegate;
return G__12107;
})()
;})(js_files,map__12105,map__12105__$1,on_jsload))
,((function (js_files,map__12105,map__12105__$1,on_jsload){
return (function (e){
return console.error("Load failed:",e.message);
});})(js_files,map__12105,map__12105__$1,on_jsload))
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

var seq__12114_12118 = cljs.core.seq.call(null,things_to_log);
var chunk__12115_12119 = null;
var count__12116_12120 = (0);
var i__12117_12121 = (0);
while(true){
if((i__12117_12121 < count__12116_12120)){
var t_12122 = cljs.core._nth.call(null,chunk__12115_12119,i__12117_12121);
console.log(t_12122);

var G__12123 = seq__12114_12118;
var G__12124 = chunk__12115_12119;
var G__12125 = count__12116_12120;
var G__12126 = (i__12117_12121 + (1));
seq__12114_12118 = G__12123;
chunk__12115_12119 = G__12124;
count__12116_12120 = G__12125;
i__12117_12121 = G__12126;
continue;
} else {
var temp__4425__auto___12127 = cljs.core.seq.call(null,seq__12114_12118);
if(temp__4425__auto___12127){
var seq__12114_12128__$1 = temp__4425__auto___12127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__12114_12128__$1)){
var c__5897__auto___12129 = cljs.core.chunk_first.call(null,seq__12114_12128__$1);
var G__12130 = cljs.core.chunk_rest.call(null,seq__12114_12128__$1);
var G__12131 = c__5897__auto___12129;
var G__12132 = cljs.core.count.call(null,c__5897__auto___12129);
var G__12133 = (0);
seq__12114_12118 = G__12130;
chunk__12115_12119 = G__12131;
count__12116_12120 = G__12132;
i__12117_12121 = G__12133;
continue;
} else {
var t_12134 = cljs.core.first.call(null,seq__12114_12128__$1);
console.log(t_12134);

var G__12135 = cljs.core.next.call(null,seq__12114_12128__$1);
var G__12136 = null;
var G__12137 = (0);
var G__12138 = (0);
seq__12114_12118 = G__12135;
chunk__12115_12119 = G__12136;
count__12116_12120 = G__12137;
i__12117_12121 = G__12138;
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

var G__12140 = changed;
adzerk.boot_reload.reload.reload_js.call(null,G__12140,opts);

adzerk.boot_reload.reload.reload_html.call(null,G__12140);

adzerk.boot_reload.reload.reload_css.call(null,G__12140);

adzerk.boot_reload.reload.reload_img.call(null,G__12140);

return G__12140;
});

//# sourceMappingURL=reload.js.map