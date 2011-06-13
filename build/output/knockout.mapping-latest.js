// Knockout Mapping plugin v1.0
// (c) 2011 Steven Sanderson, Roy Jacobs - http://knockoutjs.com/
// License: Ms-Pl (http://www.opensource.org/licenses/ms-pl.html)

ko.exportSymbol=function(k,o){for(var i=k.split("."),p=window,l=0;l<i.length-1;l++)p=p[i[l]];p[i[i.length-1]]=o};ko.exportProperty=function(k,o,i){k[o]=i};
(function(){function k(a,c){for(var b in c)c.hasOwnProperty(b)&&c[b]&&(a[b]=c[b])}function o(a,c){var b={};k(b,a);k(b,c);return b}function i(a){if(a&&typeof a==="object"&&a.constructor==(new Date).constructor)return"date";return typeof a}function p(){ko.dependentObservable=function(a,c,b){b=b||{};b.deferEvaluation=!0;a=new t(a,c,b);a.__ko_proto__=t;return a}}function l(a,c,b,d,e,h){var u=ko.utils.unwrapObservable(c)instanceof Array;if(ko.mapping.isMapped(a))var g=ko.utils.unwrapObservable(a)[m],b=
o(g,b);g=function(){return b[e]&&b[e].create instanceof Function};d=d||new A;if(d.get(c))return a;e=e||"";if(u){var u=[],f=function(a){return a};if(b[e]&&b[e].key)f=b[e].key;var k=function(a){return a};g()&&(k=function(a){return b[e].create({data:a,parent:h})});if(!ko.isObservable(a))a=ko.observableArray([]),a.mappedRemove=function(b){var c=typeof b=="function"?b:function(a){return a===f(b)};return a.remove(function(a){return c(f(a))})},a.mappedRemoveAll=function(b){var c=s(b,f);return a.remove(function(a){return ko.utils.arrayIndexOf(c,
f(a))!=-1})},a.mappedDestroy=function(b){var c=typeof b=="function"?b:function(a){return a===f(b)};return a.destroy(function(a){return c(f(a))})},a.mappedDestroyAll=function(b){var c=s(b,f);return a.destroy(function(a){return ko.utils.arrayIndexOf(c,f(a))!=-1})},a.mappedIndexOf=function(b){var c=s(a(),f),b=f(b);return ko.utils.arrayIndexOf(c,b)},a.mappedCreate=function(b){if(a.mappedIndexOf(b)!==-1)throw Error("There already is an object with the key that you specified.");b=k(b);a.push(b);return b};
for(var g=s(ko.utils.unwrapObservable(a),f).sort(),q=s(c,f).sort(),g=ko.utils.compareArrays(g,q),q={},x=[],y=0,w=g.length;y<w;y++){var r=g[y],n;switch(r.status){case "added":var j=v(ko.utils.unwrapObservable(c),r.value,f);n=ko.utils.unwrapObservable(l(void 0,j,b,d,e,a));j=B(ko.utils.unwrapObservable(c),j,q);x[j]=n;q[j]=!0;break;case "retained":j=v(ko.utils.unwrapObservable(c),r.value,f);n=v(a,r.value,f);l(n,j,b,d,e,a);j=B(ko.utils.unwrapObservable(c),j,q);x[j]=n;q[j]=!0;break;case "deleted":n=v(a,
r.value,f)}u.push({event:r.status,item:n})}a(x);b[e]&&b[e].arrayChanged&&ko.utils.arrayForEach(u,function(a){b[e].arrayChanged(a.event,a.item)})}else if(z(c)){if(!a)if(g())return p(),n=b[e].create({data:c,parent:h}),ko.dependentObservable=t,n;else a={};d.save(c,a);C(c,function(f){var g=d.get(c[f]);a[f]=g?g:l(a[f],c[f],b,d,f,a);b.mappedProperties[D(e,c,f)]=!0})}else switch(i(c)){case "function":a=c;break;default:ko.isWriteableObservable(a)?a(ko.utils.unwrapObservable(c)):g()?(p(),a=b[e].create({data:c,
parent:h}),ko.dependentObservable=t):a=ko.observable(ko.utils.unwrapObservable(c))}return a}function B(a,c,b){for(var d=0,e=a.length;d<e;d++)if(b[d]!==!0&&a[d]==c)return d;return null}function w(a,c){var b;c&&(b=c(a));i(b)==="undefined"&&(b=a);return ko.utils.unwrapObservable(b)}function v(a,c,b){a=ko.utils.arrayFilter(ko.utils.unwrapObservable(a),function(a){return w(a,b)==c});if(a.length==0)throw Error("When calling ko.update*, the key '"+c+"' was not found!");if(a.length>1&&z(a[0]))throw Error("When calling ko.update*, the key '"+
c+"' was not unique!");return a[0]}function s(a,c){return ko.utils.arrayMap(ko.utils.unwrapObservable(a),function(a){return c?w(a,c):a})}function C(a,c){if(a instanceof Array)for(var b=0;b<a.length;b++)c(b);else for(b in a)c(b)}function z(a){var c=i(a);return c=="object"&&a!==null&&c!=="undefined"}function D(a,c,b){var d=a||"";c instanceof Array?a&&(d+="["+b+"]"):(a&&(d+="."),d+=b);return d}function A(){var a=[],c=[];this.save=function(b,d){var e=ko.utils.arrayIndexOf(a,b);e>=0?c[e]=d:(a.push(b),
c.push(d))};this.get=function(b){b=ko.utils.arrayIndexOf(a,b);return b>=0?c[b]:void 0}}ko.mapping={};var m="__ko_mapping__",t=ko.dependentObservable,h;ko.mapping.fromJS=function(a,c,b){if(arguments.length==0)throw Error("When calling ko.fromJS, pass the object you want to convert.");var d;d=c||{};if(d.create instanceof Function||d.key instanceof Function||d.arrayChanged instanceof Function)d={"":d};d.mappedProperties={};c=d;d=l(b,a,c);d[m]=o(d[m],c);return d};ko.mapping.fromJSON=function(a,c){var b=
ko.utils.parseJson(a);return ko.mapping.fromJS(b,c)};ko.mapping.isMapped=function(a){return(a=ko.utils.unwrapObservable(a))&&a[m]};ko.mapping.updateFromJS=function(a,c){if(arguments.length<2)throw Error("When calling ko.updateFromJS, pass: the object to update and the object you want to update from.");if(!a)throw Error("The object is undefined.");if(!a[m])throw Error("The object you are trying to update was not created by a 'fromJS' or 'fromJSON' mapping.");return l(a,c,a[m])};ko.mapping.updateFromJSON=
function(a,c,b){c=ko.utils.parseJson(c);return ko.mapping.updateFromJS(a,c,b)};ko.mapping.toJS=function(a,c){h||ko.mapping.resetDefaultOptions();if(arguments.length==0)throw Error("When calling ko.mapping.toJS, pass the object you want to convert.");if(!(h.ignore instanceof Array))throw Error("ko.mapping.defaultOptions().ignore should be an array.");if(!(h.include instanceof Array))throw Error("ko.mapping.defaultOptions().include should be an array.");c=c||{};if(!(c.ignore instanceof Array))c.ignore=
[c.ignore];c.ignore=c.ignore.concat(h.ignore);if(!(c.include instanceof Array))c.include=[c.include];c.include=c.include.concat(h.include);return ko.mapping.visitModel(a,function(a){return ko.utils.unwrapObservable(a)},c)};ko.mapping.toJSON=function(a,c){var b=ko.mapping.toJS(a,c);return ko.utils.stringifyJson(b)};ko.mapping.defaultOptions=function(){if(arguments.length>0)h=arguments[0];else return h};ko.mapping.resetDefaultOptions=function(){h={include:["_destroy"],ignore:[]}};ko.mapping.visitModel=
function(a,c,b){b=b||{};b.visitedObjects=b.visitedObjects||new A;var d,e=ko.utils.unwrapObservable(a);if(z(e))c(a,b.parentName),d=e instanceof Array?[]:{};else return c(a,b.parentName);b.visitedObjects.save(a,d);var h=b.parentName;C(e,function(a){if(!(b.ignore&&ko.utils.arrayIndexOf(b.ignore,a)!=-1)){var g=e[a];b.parentName=D(h,e,a);if(!(b.include&&ko.utils.arrayIndexOf(b.include,a)===-1)||!e[m]||!e[m].mappedProperties||e[m].mappedProperties[a]||e instanceof Array)switch(i(ko.utils.unwrapObservable(g))){case "object":case "undefined":var f=
b.visitedObjects.get(g);d[a]=i(f)!=="undefined"?f:ko.mapping.visitModel(g,c,b);break;default:d[a]=c(g,b.parentName)}}});return d};ko.exportSymbol("ko.mapping",ko.mapping);ko.exportSymbol("ko.mapping.fromJS",ko.mapping.fromJS);ko.exportSymbol("ko.mapping.fromJSON",ko.mapping.fromJSON);ko.exportSymbol("ko.mapping.isMapped",ko.mapping.isMapped);ko.exportSymbol("ko.mapping.defaultOptions",ko.mapping.defaultOptions);ko.exportSymbol("ko.mapping.toJS",ko.mapping.toJS);ko.exportSymbol("ko.mapping.toJSON",
ko.mapping.toJSON);ko.exportSymbol("ko.mapping.updateFromJS",ko.mapping.updateFromJS);ko.exportSymbol("ko.mapping.updateFromJSON",ko.mapping.updateFromJSON);ko.exportSymbol("ko.mapping.visitModel",ko.mapping.visitModel)})();
