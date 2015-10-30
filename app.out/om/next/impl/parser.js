// Compiled by ClojureScript 1.7.145 {}
goog.provide('om.next.impl.parser');
goog.require('cljs.core');
om.next.impl.parser.expr__GT_ast;
om.next.impl.parser.symbol__GT_ast = (function om$next$impl$parser$symbol__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dkey","dkey",-352222233),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.keyword__GT_ast = (function om$next$impl$parser$keyword__GT_ast(k){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dkey","dkey",-352222233),k,new cljs.core.Keyword(null,"key","key",-1516042587),k], null);
});
om.next.impl.parser.call__GT_ast = (function om$next$impl$parser$call__GT_ast(p__14082){
var vec__14085 = p__14082;
var f = cljs.core.nth.call(null,vec__14085,(0),null);
var args = cljs.core.nth.call(null,vec__14085,(1),null);
var call = vec__14085;
if(cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),f)){
return cljs.core.assoc.call(null,om.next.impl.parser.expr__GT_ast.call(null,args),new cljs.core.Keyword(null,"target","target",253001721),(function (){var or__5094__auto__ = new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,call));
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return new cljs.core.Keyword(null,"remote","remote",-1593576576);
}
})());
} else {
var ast = cljs.core.update_in.call(null,om.next.impl.parser.expr__GT_ast.call(null,f),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.merge,(function (){var or__5094__auto__ = args;
if(cljs.core.truth_(or__5094__auto__)){
return or__5094__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
var G__14086 = ast;
var G__14086__$1 = (((new cljs.core.Keyword(null,"dkey","dkey",-352222233).cljs$core$IFn$_invoke$arity$1(ast) instanceof cljs.core.Symbol))?cljs.core.assoc.call(null,G__14086,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"call","call",-519999866)):G__14086);
return G__14086__$1;
}
});
om.next.impl.parser.join__GT_ast = (function om$next$impl$parser$join__GT_ast(join){
var vec__14088 = cljs.core.first.call(null,join);
var k = cljs.core.nth.call(null,vec__14088,(0),null);
var v = cljs.core.nth.call(null,vec__14088,(1),null);
var ast = om.next.impl.parser.expr__GT_ast.call(null,k);
var ref_QMARK_ = cljs.core.vector_QMARK_.call(null,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(ast));
return cljs.core.assoc.call(null,ast,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"sel","sel",-1686154807),v);
});
om.next.impl.parser.ref__GT_ast = (function om$next$impl$parser$ref__GT_ast(p__14089){
var vec__14091 = p__14089;
var k = cljs.core.nth.call(null,vec__14091,(0),null);
var id = cljs.core.nth.call(null,vec__14091,(1),null);
var ref = vec__14091;
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"prop","prop",-515168332),new cljs.core.Keyword(null,"dkey","dkey",-352222233),k,new cljs.core.Keyword(null,"key","key",-1516042587),ref,new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("om.next","refid","om.next/refid",1975461791),id], null)], null);
});
om.next.impl.parser.expr__GT_ast = (function om$next$impl$parser$expr__GT_ast(x){
if((x instanceof cljs.core.Symbol)){
return om.next.impl.parser.symbol__GT_ast.call(null,x);
} else {
if((x instanceof cljs.core.Keyword)){
return om.next.impl.parser.keyword__GT_ast.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return om.next.impl.parser.join__GT_ast.call(null,x);
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return om.next.impl.parser.ref__GT_ast.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return om.next.impl.parser.call__GT_ast.call(null,x);
} else {
throw cljs.core.ex_info.call(null,[cljs.core.str("Invalid expression "),cljs.core.str(x)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("error","invalid-expression","error/invalid-expression",-881565136)], null));

}
}
}
}
}
});
om.next.impl.parser.ast__GT_expr = (function om$next$impl$parser$ast__GT_expr(p__14092){
var map__14097 = p__14092;
var map__14097__$1 = ((((!((map__14097 == null)))?((((map__14097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14097):map__14097);
var ast = map__14097__$1;
var key = cljs.core.get.call(null,map__14097__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var sel = cljs.core.get.call(null,map__14097__$1,new cljs.core.Keyword(null,"sel","sel",-1686154807));
var ref_QMARK_ = cljs.core.vector_QMARK_.call(null,key);
var ast_SINGLEQUOTE_ = (function (){var G__14099 = ast;
var G__14099__$1 = ((ref_QMARK_)?cljs.core.update_in.call(null,G__14099,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235)], null),cljs.core.dissoc,new cljs.core.Keyword("om.next","refid","om.next/refid",1975461791)):G__14099);
return G__14099__$1;
})();
var params = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE_);
var empty_QMARK_ = (cljs.core.count.call(null,params) === (0));
var ast_SINGLEQUOTE__SINGLEQUOTE_ = (function (){var G__14100 = ast_SINGLEQUOTE_;
var G__14100__$1 = (((ref_QMARK_) && (empty_QMARK_))?cljs.core.dissoc.call(null,G__14100,new cljs.core.Keyword(null,"params","params",710516235)):G__14100);
return G__14100__$1;
})();
var params_SINGLEQUOTE_ = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(ast_SINGLEQUOTE__SINGLEQUOTE_);
if(!((params_SINGLEQUOTE_ == null))){
if((cljs.core.count.call(null,params_SINGLEQUOTE_) === (0))){
return cljs.core._conj.call(null,cljs.core.List.EMPTY,om$next$impl$parser$ast__GT_expr.call(null,cljs.core.dissoc.call(null,ast_SINGLEQUOTE__SINGLEQUOTE_,new cljs.core.Keyword(null,"params","params",710516235))));
} else {
return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,params_SINGLEQUOTE_),om$next$impl$parser$ast__GT_expr.call(null,cljs.core.dissoc.call(null,ast_SINGLEQUOTE__SINGLEQUOTE_,new cljs.core.Keyword(null,"params","params",710516235))));
}
} else {
if(!((sel == null))){
return cljs.core.PersistentArrayMap.fromArray([key,sel], true, false);
} else {
return key;
}
}
});
om.next.impl.parser.path_meta = (function om$next$impl$parser$path_meta(x,path){
var x_SINGLEQUOTE_ = (function (){var G__14108 = x;
var G__14108__$1 = ((cljs.core.map_QMARK_.call(null,x))?cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,((function (G__14108){
return (function (p__14109){
var vec__14110 = p__14109;
var k = cljs.core.nth.call(null,vec__14110,(0),null);
var v = cljs.core.nth.call(null,vec__14110,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,om$next$impl$parser$path_meta.call(null,v,cljs.core.conj.call(null,path,k))], null);
});})(G__14108))
),G__14108):G__14108);
var G__14108__$2 = ((cljs.core.vector_QMARK_.call(null,x))?cljs.core.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.map_indexed.call(null,((function (G__14108,G__14108__$1){
return (function (p1__14102_SHARP_,p2__14101_SHARP_){
return om$next$impl$parser$path_meta.call(null,p2__14101_SHARP_,cljs.core.conj.call(null,path,p1__14102_SHARP_));
});})(G__14108,G__14108__$1))
),G__14108__$1):G__14108__$1);
return G__14108__$2;
})();
var G__14111 = x_SINGLEQUOTE_;
var G__14111__$1 = ((((!((x_SINGLEQUOTE_ == null)))?((((x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$ & (262144))) || (x_SINGLEQUOTE_.cljs$core$IWithMeta$))?true:(((!x_SINGLEQUOTE_.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,x_SINGLEQUOTE_):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IWithMeta,x_SINGLEQUOTE_)))?cljs.core.vary_meta.call(null,G__14111,cljs.core.assoc,new cljs.core.Keyword(null,"om-path","om-path",-1911443978),path):G__14111);
return G__14111__$1;
});
om.next.impl.parser.parser = (function om$next$impl$parser$parser(p__14113){
var map__14180 = p__14113;
var map__14180__$1 = ((((!((map__14180 == null)))?((((map__14180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14180):map__14180);
var config = map__14180__$1;
var read = cljs.core.get.call(null,map__14180__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var mutate = cljs.core.get.call(null,map__14180__$1,new cljs.core.Keyword(null,"mutate","mutate",1422419038));
return ((function (map__14180,map__14180__$1,config,read,mutate){
return (function() {
var om$next$impl$parser$parser_$_self = null;
var om$next$impl$parser$parser_$_self__2 = (function (env,sel){
return om$next$impl$parser$parser_$_self.call(null,env,sel,null);
});
var om$next$impl$parser$parser_$_self__3 = (function (env,sel,target){
var elide_paths_QMARK_ = cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"elide-paths","elide-paths",-1165465185).cljs$core$IFn$_invoke$arity$1(config));
var map__14214 = (function (){var G__14215 = cljs.core.assoc.call(null,env,new cljs.core.Keyword(null,"parser","parser",-1543495310),om$next$impl$parser$parser_$_self,new cljs.core.Keyword(null,"target","target",253001721),target);
var G__14215__$1 = ((!(cljs.core.contains_QMARK_.call(null,env,new cljs.core.Keyword(null,"path","path",-188191168))))?cljs.core.assoc.call(null,G__14215,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY):G__14215);
return G__14215__$1;
})();
var map__14214__$1 = ((((!((map__14214 == null)))?((((map__14214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14214):map__14214);
var env__$1 = map__14214__$1;
var path = cljs.core.get.call(null,map__14214__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var step = ((function (elide_paths_QMARK_,map__14214,map__14214__$1,env__$1,path,map__14180,map__14180__$1,config,read,mutate){
return (function om$next$impl$parser$parser_$_self_$_step(ret,expr){
var map__14238 = om.next.impl.parser.expr__GT_ast.call(null,expr);
var map__14238__$1 = ((((!((map__14238 == null)))?((((map__14238.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14238.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14238):map__14238);
var ast = map__14238__$1;
var key = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var dkey = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"dkey","dkey",-352222233));
var params = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"params","params",710516235));
var sel__$1 = cljs.core.get.call(null,map__14238__$1,new cljs.core.Keyword(null,"sel","sel",-1686154807));
var env__$2 = (function (){var G__14240 = cljs.core.assoc.call(null,env__$1,new cljs.core.Keyword(null,"ast","ast",-860334068),ast);
var G__14240__$1 = ((!((sel__$1 == null)))?cljs.core.assoc.call(null,G__14240,new cljs.core.Keyword(null,"selector","selector",762528866),sel__$1):G__14240);
return G__14240__$1;
})();
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(ast);
var call_QMARK_ = cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"call","call",-519999866),type);
var res = (((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast) == null))?(function (){var G__14241 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14241) {
case "call":
if(cljs.core.truth_(mutate)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse mutation attempted but no :mutate function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"mutate","mutate",-1232016731,null)))].join('')));
}

return mutate.call(null,env__$2,dkey,params);

break;
case "prop":
if(cljs.core.truth_(read)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Parse read attempted but no :read function supplied"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"read","read",-1514377108,null)))].join('')));
}

return read.call(null,env__$2,dkey,params);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}
})():null);
if(!((target == null))){
var ast_SINGLEQUOTE_ = cljs.core.get.call(null,res,target);
var G__14242 = ret;
var G__14242__$1 = ((ast_SINGLEQUOTE_ === true)?cljs.core.conj.call(null,G__14242,expr):G__14242);
var G__14242__$2 = ((cljs.core.map_QMARK_.call(null,ast_SINGLEQUOTE_))?cljs.core.conj.call(null,G__14242__$1,om.next.impl.parser.ast__GT_expr.call(null,ast_SINGLEQUOTE_)):G__14242__$1);
var G__14242__$3 = ((cljs.core._EQ_.call(null,target,new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast)))?cljs.core.conj.call(null,G__14242__$2,om.next.impl.parser.ast__GT_expr.call(null,ast)):G__14242__$2);
return G__14242__$3;
} else {
if(!((call_QMARK_) || ((new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(ast) == null)) || (cljs.core.contains_QMARK_.call(null,res,new cljs.core.Keyword(null,"value","value",305978217))))){
return ret;
} else {
var error = cljs.core.atom.call(null,null);
if((call_QMARK_) && (!((new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res) == null)))){
try{new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(res).call(null);
}catch (e14243){var e_14247 = e14243;
cljs.core.reset_BANG_.call(null,error,e_14247);
}} else {
}

var value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(res);
var G__14244 = ret;
var G__14244__$1 = ((!((value == null)))?cljs.core.assoc.call(null,G__14244,key,value):G__14244);
var G__14244__$2 = (cljs.core.truth_(cljs.core.deref.call(null,error))?cljs.core.assoc.call(null,G__14244__$1,key,cljs.core.deref.call(null,error)):G__14244__$1);
return G__14244__$2;
}
}
});})(elide_paths_QMARK_,map__14214,map__14214__$1,env__$1,path,map__14180,map__14180__$1,config,read,mutate))
;
var G__14245 = cljs.core.reduce.call(null,step,(((target == null))?cljs.core.PersistentArrayMap.EMPTY:cljs.core.PersistentVector.EMPTY),sel);
var G__14245__$1 = ((!((!((target == null))) || (elide_paths_QMARK_)))?om.next.impl.parser.path_meta.call(null,G__14245,path):G__14245);
return G__14245__$1;
});
om$next$impl$parser$parser_$_self = function(env,sel,target){
switch(arguments.length){
case 2:
return om$next$impl$parser$parser_$_self__2.call(this,env,sel);
case 3:
return om$next$impl$parser$parser_$_self__3.call(this,env,sel,target);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$2 = om$next$impl$parser$parser_$_self__2;
om$next$impl$parser$parser_$_self.cljs$core$IFn$_invoke$arity$3 = om$next$impl$parser$parser_$_self__3;
return om$next$impl$parser$parser_$_self;
})()
;})(map__14180,map__14180__$1,config,read,mutate))
});
om.next.impl.parser.dispatch = (function om$next$impl$parser$dispatch(_,k,___$1){
return k;
});

//# sourceMappingURL=parser.js.map