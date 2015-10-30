// Compiled by ClojureScript 1.7.145 {}
goog.provide('adzerk.boot_reload');
goog.require('cljs.core');
goog.require('adzerk.boot_reload.client');
goog.require('drum_machine.app');
adzerk.boot_reload.client.connect.call(null,"ws://localhost:53855",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){
return drum_machine.app.run.call(null);
})], null));

//# sourceMappingURL=boot_reload.js.map