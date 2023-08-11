'use strict';(function(e){"object"==typeof exports&&"object"==typeof module?e(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],e):e(CodeMirror)})(function(e){e.defineMode("ecl",function(e){function f(a){var b={};a=a.split(" ");for(var c=0;c<a.length;++c)b[a[c]]=!0;return b}function l(a,b){var c=a.next();if(p[c]){var g=p[c](a,b);if(!1!==g)return g}if('"'==c||"'"==c)return b.tokenize=v(c),b.tokenize(a,b);if(/[\[\]{}\(\),;:\.]/.test(c))return d=c,
null;if(/\d/.test(c))return a.eatWhile(/[\w\.]/),"number";if("/"==c){if(a.eat("*"))return b.tokenize=q,q(a,b);if(a.eat("/"))return a.skipToEnd(),"comment"}if(r.test(c))return a.eatWhile(r),"operator";a.eatWhile(/[\w\$_]/);a=a.current().toLowerCase();if(w.propertyIsEnumerable(a))return h.propertyIsEnumerable(a)&&(d="newstatement"),"keyword";if(x.propertyIsEnumerable(a))return h.propertyIsEnumerable(a)&&(d="newstatement"),"variable";if(y.propertyIsEnumerable(a))return h.propertyIsEnumerable(a)&&(d=
"newstatement"),"variable-2";if(t.propertyIsEnumerable(a))return h.propertyIsEnumerable(a)&&(d="newstatement"),"variable-3";if(z.propertyIsEnumerable(a))return h.propertyIsEnumerable(a)&&(d="newstatement"),"builtin";for(b=a.length-1;0<=b&&(!isNaN(a[b])||"_"==a[b]);)--b;return 0<b&&(b=a.substr(0,b+1),t.propertyIsEnumerable(b))?(h.propertyIsEnumerable(b)&&(d="newstatement"),"variable-3"):A.propertyIsEnumerable(a)?"atom":null}function v(a){return function(b,c){for(var g=!1,d,e=!1;null!=(d=b.next());){if(d==
a&&!g){e=!0;break}g=!g&&"\\"==d}if(e||!g)c.tokenize=l;return"string"}}function q(a,b){for(var c=!1,d;d=a.next();){if("/"==d&&c){b.tokenize=l;break}c="*"==d}return"comment"}function u(a,b,c,d,e){this.indented=a;this.column=b;this.type=c;this.align=d;this.prev=e}function m(a,b,c){return a.context=new u(a.indented,b,c,null,a.context)}function k(a){var b=a.context.type;if(")"==b||"]"==b||"}"==b)a.indented=a.context.indented;return a.context=a.context.prev}var n=e.indentUnit,w=f("abs acos allnodes ascii asin asstring atan atan2 ave case choose choosen choosesets clustersize combine correlation cos cosh count covariance cron dataset dedup define denormalize distribute distributed distribution ebcdic enth error evaluate event eventextra eventname exists exp failcode failmessage fetch fromunicode getisvalid global graph group hash hash32 hash64 hashcrc hashmd5 having if index intformat isvalid iterate join keyunicode length library limit ln local log loop map matched matchlength matchposition matchtext matchunicode max merge mergejoin min nolocal nonempty normalize parse pipe power preload process project pull random range rank ranked realformat recordof regexfind regexreplace regroup rejected rollup round roundup row rowdiff sample set sin sinh sizeof soapcall sort sorted sqrt stepped stored sum table tan tanh thisnode topn tounicode transfer trim truncate typeof ungroup unicodeorder variance which workunit xmldecode xmlencode xmltext xmlunicode"),
x=f("apply assert build buildindex evaluate fail keydiff keypatch loadxml nothor notify output parallel sequential soapcall wait"),y=f("__compressed__ all and any as atmost before beginc++ best between case const counter csv descend encrypt end endc++ endmacro except exclusive expire export extend false few first flat from full function group header heading hole ifblock import in interface joined keep keyed last left limit load local locale lookup macro many maxcount maxlength min skew module named nocase noroot noscan nosort not of only opt or outer overwrite packed partition penalty physicallength pipe quote record relationship repeat return right scan self separator service shared skew skip sql store terminator thor threshold token transform trim true type unicodeorder unsorted validate virtual whole wild within xml xpath"),
t=f("ascii big_endian boolean data decimal ebcdic integer pattern qstring real record rule set of string token udecimal unicode unsigned varstring varunicode"),z=f("checkpoint deprecated failcode failmessage failure global independent onwarning persist priority recovery stored success wait when"),h=f("catch class do else finally for if switch try while"),A=f("true false null"),p={"#":function(a,b){if(!b.startOfLine)return!1;a.skipToEnd();return"meta"}},r=/[+\-*&%=<>!?|\/]/,d;return{startState:function(a){return{tokenize:null,
context:new u((a||0)-n,0,"top",!1),indented:0,startOfLine:!0}},token:function(a,b){var c=b.context;a.sol()&&(null==c.align&&(c.align=!1),b.indented=a.indentation(),b.startOfLine=!0);if(a.eatSpace())return null;d=null;var e=(b.tokenize||l)(a,b);if("comment"==e||"meta"==e)return e;null==c.align&&(c.align=!0);if(";"!=d&&":"!=d||"statement"!=c.type)if("{"==d)m(b,a.column(),"}");else if("["==d)m(b,a.column(),"]");else if("("==d)m(b,a.column(),")");else if("}"==d){for(;"statement"==c.type;)c=k(b);for("}"==
c.type&&(c=k(b));"statement"==c.type;)c=k(b)}else d==c.type?k(b):("}"==c.type||"top"==c.type||"statement"==c.type&&"newstatement"==d)&&m(b,a.column(),"statement");else k(b);b.startOfLine=!1;return e},indent:function(a,b){if(a.tokenize!=l&&null!=a.tokenize)return 0;a=a.context;b=b&&b.charAt(0);"statement"==a.type&&"}"==b&&(a=a.prev);var c=b==a.type;return"statement"==a.type?a.indented+("{"==b?0:n):a.align?a.column+(c?0:1):a.indented+(c?0:n)},electricChars:"{}"}});e.defineMIME("text/x-ecl","ecl")});