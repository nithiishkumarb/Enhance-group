import{e as I,j as S}from"./chunk-Z4H5XVQJ.js";var R=I((A,g)=>{S();ace.define("ace/ext/searchbox-css",["require","exports","module"],function(s,f,v){v.exports=`

/* ------------------------------------------------------------------------------------------
 * Editor Search Form
 * --------------------------------------------------------------------------------------- */
.ace_search {
    background-color: #ddd;
    color: #666;
    border: 1px solid #cbcbcb;
    border-top: 0 none;
    overflow: hidden;
    margin: 0;
    padding: 4px 6px 0 4px;
    position: absolute;
    top: 0;
    z-index: 99;
    white-space: normal;
}
.ace_search.left {
    border-left: 0 none;
    border-radius: 0px 0px 5px 0px;
    left: 0;
}
.ace_search.right {
    border-radius: 0px 0px 0px 5px;
    border-right: 0 none;
    right: 0;
}

.ace_search_form, .ace_replace_form {
    margin: 0 20px 4px 0;
    overflow: hidden;
    line-height: 1.9;
}
.ace_replace_form {
    margin-right: 0;
}
.ace_search_form.ace_nomatch {
    outline: 1px solid red;
}

.ace_search_field {
    border-radius: 3px 0 0 3px;
    background-color: white;
    color: black;
    border: 1px solid #cbcbcb;
    border-right: 0 none;
    outline: 0;
    padding: 0;
    font-size: inherit;
    margin: 0;
    line-height: inherit;
    padding: 0 6px;
    min-width: 17em;
    vertical-align: top;
    min-height: 1.8em;
    box-sizing: content-box;
}
.ace_searchbtn {
    border: 1px solid #cbcbcb;
    line-height: inherit;
    display: inline-block;
    padding: 0 6px;
    background: #fff;
    border-right: 0 none;
    border-left: 1px solid #dcdcdc;
    cursor: pointer;
    margin: 0;
    position: relative;
    color: #666;
}
.ace_searchbtn:last-child {
    border-radius: 0 3px 3px 0;
    border-right: 1px solid #cbcbcb;
}
.ace_searchbtn:disabled {
    background: none;
    cursor: default;
}
.ace_searchbtn:hover {
    background-color: #eef1f6;
}
.ace_searchbtn.prev, .ace_searchbtn.next {
     padding: 0px 0.7em
}
.ace_searchbtn.prev:after, .ace_searchbtn.next:after {
     content: "";
     border: solid 2px #888;
     width: 0.5em;
     height: 0.5em;
     border-width:  2px 0 0 2px;
     display:inline-block;
     transform: rotate(-45deg);
}
.ace_searchbtn.next:after {
     border-width: 0 2px 2px 0 ;
}
.ace_searchbtn_close {
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAcCAYAAABRVo5BAAAAZ0lEQVR42u2SUQrAMAhDvazn8OjZBilCkYVVxiis8H4CT0VrAJb4WHT3C5xU2a2IQZXJjiQIRMdkEoJ5Q2yMqpfDIo+XY4k6h+YXOyKqTIj5REaxloNAd0xiKmAtsTHqW8sR2W5f7gCu5nWFUpVjZwAAAABJRU5ErkJggg==) no-repeat 50% 0;
    border-radius: 50%;
    border: 0 none;
    color: #656565;
    cursor: pointer;
    font: 16px/16px Arial;
    padding: 0;
    height: 14px;
    width: 14px;
    top: 9px;
    right: 7px;
    position: absolute;
}
.ace_searchbtn_close:hover {
    background-color: #656565;
    background-position: 50% 100%;
    color: white;
}

.ace_button {
    margin-left: 2px;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    overflow: hidden;
    opacity: 0.7;
    border: 1px solid rgba(100,100,100,0.23);
    padding: 1px;
    box-sizing:    border-box!important;
    color: black;
}

.ace_button:hover {
    background-color: #eee;
    opacity:1;
}
.ace_button:active {
    background-color: #ddd;
}

.ace_button.checked {
    border-color: #3399ff;
    opacity:1;
}

.ace_search_options{
    margin-bottom: 3px;
    text-align: right;
    -webkit-user-select: none;
    -moz-user-select: none;
    -o-user-select: none;
    -ms-user-select: none;
    user-select: none;
    clear: both;
}

.ace_search_counter {
    float: left;
    font-family: arial;
    padding: 0 8px;
}`});ace.define("ace/ext/searchbox",["require","exports","module","ace/lib/dom","ace/lib/lang","ace/lib/event","ace/ext/searchbox-css","ace/keyboard/hash_handler","ace/lib/keys","ace/config"],function(s,f,v){"use strict";var o=s("../lib/dom"),y=s("../lib/lang"),h=s("../lib/event"),_=s("./searchbox-css"),k=s("../keyboard/hash_handler").HashHandler,C=s("../lib/keys"),r=s("../config").nls,x=999;o.importCssString(_,"ace_searchbox",!1);var u=function(){function e(n,t,a){this.activeInput;var i=o.createElement("div");o.buildDom(["div",{class:"ace_search right"},["span",{action:"hide",class:"ace_searchbtn_close"}],["div",{class:"ace_search_form"},["input",{class:"ace_search_field",placeholder:r("search-box.find.placeholder","Search for"),spellcheck:"false"}],["span",{action:"findPrev",class:"ace_searchbtn prev"},"\u200B"],["span",{action:"findNext",class:"ace_searchbtn next"},"\u200B"],["span",{action:"findAll",class:"ace_searchbtn",title:"Alt-Enter"},r("search-box.find-all.text","All")]],["div",{class:"ace_replace_form"},["input",{class:"ace_search_field",placeholder:r("search-box.replace.placeholder","Replace with"),spellcheck:"false"}],["span",{action:"replaceAndFindNext",class:"ace_searchbtn"},r("search-box.replace-next.text","Replace")],["span",{action:"replaceAll",class:"ace_searchbtn"},r("search-box.replace-all.text","All")]],["div",{class:"ace_search_options"},["span",{action:"toggleReplace",class:"ace_button",title:r("search-box.toggle-replace.title","Toggle Replace mode"),style:"float:left;margin-top:-2px;padding:0 5px;"},"+"],["span",{class:"ace_search_counter"}],["span",{action:"toggleRegexpMode",class:"ace_button",title:r("search-box.toggle-regexp.title","RegExp Search")},".*"],["span",{action:"toggleCaseSensitive",class:"ace_button",title:r("search-box.toggle-case.title","CaseSensitive Search")},"Aa"],["span",{action:"toggleWholeWords",class:"ace_button",title:r("search-box.toggle-whole-word.title","Whole Word Search")},"\\b"],["span",{action:"searchInSelection",class:"ace_button",title:r("search-box.toggle-in-selection.title","Search In Selection")},"S"]]],i),this.element=i.firstChild,this.setSession=this.setSession.bind(this),this.$init(),this.setEditor(n),o.importCssString(_,"ace_searchbox",n.container)}return e.prototype.setEditor=function(n){n.searchBox=this,n.renderer.scroller.appendChild(this.element),this.editor=n},e.prototype.setSession=function(n){this.searchRange=null,this.$syncOptions(!0)},e.prototype.$initElements=function(n){this.searchBox=n.querySelector(".ace_search_form"),this.replaceBox=n.querySelector(".ace_replace_form"),this.searchOption=n.querySelector("[action=searchInSelection]"),this.replaceOption=n.querySelector("[action=toggleReplace]"),this.regExpOption=n.querySelector("[action=toggleRegexpMode]"),this.caseSensitiveOption=n.querySelector("[action=toggleCaseSensitive]"),this.wholeWordOption=n.querySelector("[action=toggleWholeWords]"),this.searchInput=this.searchBox.querySelector(".ace_search_field"),this.replaceInput=this.replaceBox.querySelector(".ace_search_field"),this.searchCounter=n.querySelector(".ace_search_counter")},e.prototype.$init=function(){var n=this.element;this.$initElements(n);var t=this;h.addListener(n,"mousedown",function(a){setTimeout(function(){t.activeInput.focus()},0),h.stopPropagation(a)}),h.addListener(n,"click",function(a){var i=a.target||a.srcElement,c=i.getAttribute("action");c&&t[c]?t[c]():t.$searchBarKb.commands[c]&&t.$searchBarKb.commands[c].exec(t),h.stopPropagation(a)}),h.addCommandKeyListener(n,function(a,i,c){var p=C.keyCodeToString(c),l=t.$searchBarKb.findKeyCommand(i,p);l&&l.exec&&(l.exec(t),h.stopEvent(a))}),this.$onChange=y.delayedCall(function(){t.find(!1,!1)}),h.addListener(this.searchInput,"input",function(){t.$onChange.schedule(20)}),h.addListener(this.searchInput,"focus",function(){t.activeInput=t.searchInput,t.searchInput.value&&t.highlight()}),h.addListener(this.replaceInput,"focus",function(){t.activeInput=t.replaceInput,t.searchInput.value&&t.highlight()})},e.prototype.setSearchRange=function(n){this.searchRange=n,n?this.searchRangeMarker=this.editor.session.addMarker(n,"ace_active-line"):this.searchRangeMarker&&(this.editor.session.removeMarker(this.searchRangeMarker),this.searchRangeMarker=null)},e.prototype.$syncOptions=function(n){o.setCssClass(this.replaceOption,"checked",this.searchRange),o.setCssClass(this.searchOption,"checked",this.searchOption.checked),this.replaceOption.textContent=this.replaceOption.checked?"-":"+",o.setCssClass(this.regExpOption,"checked",this.regExpOption.checked),o.setCssClass(this.wholeWordOption,"checked",this.wholeWordOption.checked),o.setCssClass(this.caseSensitiveOption,"checked",this.caseSensitiveOption.checked);var t=this.editor.getReadOnly();this.replaceOption.style.display=t?"none":"",this.replaceBox.style.display=this.replaceOption.checked&&!t?"":"none",this.find(!1,!1,n)},e.prototype.highlight=function(n){this.editor.session.highlight(n||this.editor.$search.$options.re),this.editor.renderer.updateBackMarkers()},e.prototype.find=function(n,t,a){var i=this.editor.find(this.searchInput.value,{skipCurrent:n,backwards:t,wrap:!0,regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked,preventScroll:a,range:this.searchRange}),c=!i&&this.searchInput.value;o.setCssClass(this.searchBox,"ace_nomatch",c),this.editor._emit("findSearchBox",{match:!c}),this.highlight(),this.updateCounter()},e.prototype.updateCounter=function(){var n=this.editor,t=n.$search.$options.re,a=t.unicode,i=0,c=0;if(t){var p=this.searchRange?n.session.getTextRange(this.searchRange):n.getValue(),l=n.session.doc.positionToIndex(n.selection.anchor);this.searchRange&&(l-=n.session.doc.positionToIndex(this.searchRange.start));for(var d=t.lastIndex=0,m;(m=t.exec(p))&&(i++,d=m.index,d<=l&&c++,!(i>x||!m[0]&&(t.lastIndex=d+=y.skipEmptyMatch(p,d,a),d>=p.length))););}this.searchCounter.textContent=r("search-box.search-counter","$0 of $1",[c,i>x?x+"+":i])},e.prototype.findNext=function(){this.find(!0,!1)},e.prototype.findPrev=function(){this.find(!0,!0)},e.prototype.findAll=function(){var n=this.editor.findAll(this.searchInput.value,{regExp:this.regExpOption.checked,caseSensitive:this.caseSensitiveOption.checked,wholeWord:this.wholeWordOption.checked}),t=!n&&this.searchInput.value;o.setCssClass(this.searchBox,"ace_nomatch",t),this.editor._emit("findSearchBox",{match:!t}),this.highlight(),this.hide()},e.prototype.replace=function(){this.editor.getReadOnly()||this.editor.replace(this.replaceInput.value)},e.prototype.replaceAndFindNext=function(){this.editor.getReadOnly()||(this.editor.replace(this.replaceInput.value),this.findNext())},e.prototype.replaceAll=function(){this.editor.getReadOnly()||this.editor.replaceAll(this.replaceInput.value)},e.prototype.hide=function(){this.active=!1,this.setSearchRange(null),this.editor.off("changeSession",this.setSession),this.element.style.display="none",this.editor.keyBinding.removeKeyboardHandler(this.$closeSearchBarKb),this.editor.focus()},e.prototype.show=function(n,t){this.active=!0,this.editor.on("changeSession",this.setSession),this.element.style.display="",this.replaceOption.checked=t,n&&(this.searchInput.value=n),this.searchInput.focus(),this.searchInput.select(),this.editor.keyBinding.addKeyboardHandler(this.$closeSearchBarKb),this.$syncOptions(!0)},e.prototype.isFocused=function(){var n=document.activeElement;return n==this.searchInput||n==this.replaceInput},e}(),b=new k;b.bindKeys({"Ctrl-f|Command-f":function(e){var n=e.isReplace=!e.isReplace;e.replaceBox.style.display=n?"":"none",e.replaceOption.checked=!1,e.$syncOptions(),e.searchInput.focus()},"Ctrl-H|Command-Option-F":function(e){e.editor.getReadOnly()||(e.replaceOption.checked=!0,e.$syncOptions(),e.replaceInput.focus())},"Ctrl-G|Command-G":function(e){e.findNext()},"Ctrl-Shift-G|Command-Shift-G":function(e){e.findPrev()},esc:function(e){setTimeout(function(){e.hide()})},Return:function(e){e.activeInput==e.replaceInput&&e.replace(),e.findNext()},"Shift-Return":function(e){e.activeInput==e.replaceInput&&e.replace(),e.findPrev()},"Alt-Return":function(e){e.activeInput==e.replaceInput&&e.replaceAll(),e.findAll()},Tab:function(e){(e.activeInput==e.replaceInput?e.searchInput:e.replaceInput).focus()}}),b.addCommands([{name:"toggleRegexpMode",bindKey:{win:"Alt-R|Alt-/",mac:"Ctrl-Alt-R|Ctrl-Alt-/"},exec:function(e){e.regExpOption.checked=!e.regExpOption.checked,e.$syncOptions()}},{name:"toggleCaseSensitive",bindKey:{win:"Alt-C|Alt-I",mac:"Ctrl-Alt-R|Ctrl-Alt-I"},exec:function(e){e.caseSensitiveOption.checked=!e.caseSensitiveOption.checked,e.$syncOptions()}},{name:"toggleWholeWords",bindKey:{win:"Alt-B|Alt-W",mac:"Ctrl-Alt-B|Ctrl-Alt-W"},exec:function(e){e.wholeWordOption.checked=!e.wholeWordOption.checked,e.$syncOptions()}},{name:"toggleReplace",exec:function(e){e.replaceOption.checked=!e.replaceOption.checked,e.$syncOptions()}},{name:"searchInSelection",exec:function(e){e.searchOption.checked=!e.searchRange,e.setSearchRange(e.searchOption.checked&&e.editor.getSelectionRange()),e.$syncOptions()}}]);var O=new k([{bindKey:"Esc",name:"closeSearchBar",exec:function(e){e.searchBox.hide()}}]);u.prototype.$searchBarKb=b,u.prototype.$closeSearchBarKb=O,f.SearchBox=u,f.Search=function(e,n){var t=e.searchBox||new u(e);t.show(e.session.getTextRange(),n)}});(function(){ace.require(["ace/ext/searchbox"],function(s){typeof g=="object"&&typeof A=="object"&&g&&(g.exports=s)})})()});export default R();
