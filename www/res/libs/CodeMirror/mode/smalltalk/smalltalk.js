'use strict';(function(f){"object"==typeof exports&&"object"==typeof module?f(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],f):f(CodeMirror)})(function(f){f.defineMode("smalltalk",function(f){var k=/[+\-\/\\*~<>=@%|&?!.,:;^]/,r=/true|false|nil|self|super|thisContext/,g=function(a,b){this.next=a;this.parent=b},h=function(a,b,d){this.name=a;this.context=b;this.eos=d},m=function(){this.context=new g(l,null);this.expectVariable=!0;this.userIndentationDelta=
this.indentation=0};m.prototype.userIndent=function(a){this.userIndentationDelta=0<a?a/f.indentUnit-this.indentation:0};var l=function(a,b,d){var c=new h(null,b,!1),e=a.next();'"'===e?c=n(a,new g(n,b)):"'"===e?c=p(a,new g(p,b)):"#"===e?"'"===a.peek()?(a.next(),c=q(a,new g(q,b))):a.eatWhile(/[^\s.{}\[\]()]/)?c.name="string-2":c.name="meta":"$"===e?("<"===a.next()&&(a.eatWhile(/[^\s>]/),a.next()),c.name="string-2"):"|"===e&&d.expectVariable?c.context=new g(t,b):/[\[\]{}()]/.test(e)?(c.name="bracket",
c.eos=/[\[{(]/.test(e),"["===e?d.indentation++:"]"===e&&(d.indentation=Math.max(0,d.indentation-1))):k.test(e)?(a.eatWhile(k),c.name="operator",c.eos=";"!==e):/\d/.test(e)?(a.eatWhile(/[\w\d]/),c.name="number"):/[\w_]/.test(e)?(a.eatWhile(/[\w\d_]/),c.name=d.expectVariable?r.test(a.current())?"keyword":"variable":null):c.eos=d.expectVariable;return c},n=function(a,b){a.eatWhile(/[^"]/);return new h("comment",a.eat('"')?b.parent:b,!0)},p=function(a,b){a.eatWhile(/[^']/);return new h("string",a.eat("'")?
b.parent:b,!1)},q=function(a,b){a.eatWhile(/[^']/);return new h("string-2",a.eat("'")?b.parent:b,!1)},t=function(a,b){var d=new h(null,b,!1);"|"===a.next()?(d.context=b.parent,d.eos=!0):(a.eatWhile(/[^|]/),d.name="variable");return d};return{startState:function(){return new m},token:function(a,b){b.userIndent(a.indentation());if(a.eatSpace())return null;a=b.context.next(a,b.context,b);b.context=a.context;b.expectVariable=a.eos;return a.name},blankLine:function(a){a.userIndent(0)},indent:function(a,
b){b=a.context.next===l&&b&&"]"===b.charAt(0)?-1:a.userIndentationDelta;return(a.indentation+b)*f.indentUnit},electricChars:"]"}});f.defineMIME("text/x-stsrc",{name:"smalltalk"})});
