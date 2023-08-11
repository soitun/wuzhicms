'use strict';(function(c){"object"==typeof exports&&"object"==typeof module?c(require("../../lib/codemirror")):"function"==typeof define&&define.amd?define(["../../lib/codemirror"],c):c(CodeMirror)})(function(c){c.defineMode("spreadsheet",function(){return{startState:function(){return{stringType:null,stack:[]}},token:function(a,b){if(a){0!==b.stack.length||'"'!=a.peek()&&"'"!=a.peek()||(b.stringType=a.peek(),a.next(),b.stack.unshift("string"));switch(b.stack[0]){case "string":for(;"string"===b.stack[0]&&
!a.eol();)a.peek()===b.stringType?(a.next(),b.stack.shift()):"\\"===a.peek()?(a.next(),a.next()):a.match(/^.[^\\"']*/);return"string";case "characterClass":for(;"characterClass"===b.stack[0]&&!a.eol();)a.match(/^[^\]\\]+/)||a.match(/^\\./)||b.stack.shift();return"operator"}var c=a.peek();switch(c){case "[":return a.next(),b.stack.unshift("characterClass"),"bracket";case ":":return a.next(),"operator";case "\\":if(a.match(/\\[a-z]+/))return"string-2";a.next();return"atom";case ".":case ",":case ";":case "*":case "-":case "+":case "^":case "<":case "/":case "=":return a.next(),
"atom";case "$":return a.next(),"builtin"}if(a.match(/\d+/))return a.match(/^\w+/)?"error":"number";if(a.match(/^[a-zA-Z_]\w*/))return a.match(/(?=[\(.])/,!1)?"keyword":"variable-2";if(-1!="[](){}".split("").indexOf(c))return a.next(),"bracket";a.eatSpace()||a.next();return null}}}});c.defineMIME("text/x-spreadsheet","spreadsheet")});