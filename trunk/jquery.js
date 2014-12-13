



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "ABZ6GAeew5yqP25Osx55ouLOC5Waq3K8rQ:1417533003455";
 
 
 var CS_env = {"loggedInUserEmail": "tavristasos@gmail.com", "relativeBaseUrl": "", "projectHomeUrl": "/p/tavristasos", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/1729405847801014513", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "domainName": null, "projectName": "tavristasos", "token": "ABZ6GAeew5yqP25Osx55ouLOC5Waq3K8rQ:1417533003455", "profileUrl": "/u/105438543774775363520/"};
 var _gaq = _gaq || [];
 _gaq.push(
 ['siteTracker._setAccount', 'UA-18071-1'],
 ['siteTracker._trackPageview']);
 
 (function() {
 var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
 ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
 (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(ga);
 })();
 
 </script>
 
 
 <title>jquery.js - 
 tavristasos -
 
 
 1 - Google Project Hosting
 </title>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/1729405847801014513/css/core.css">
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/1729405847801014513/css/ph_detail.css" >
 
 
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/1729405847801014513/css/d_sb.css" >
 
 
 
<!--[if IE]>
 <link type="text/css" rel="stylesheet" href="https://ssl.gstatic.com/codesite/ph/1729405847801014513/css/d_ie.css" >
<![endif]-->
 <style type="text/css">
 .menuIcon.off { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -42px }
 .menuIcon.on { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 -28px }
 .menuIcon.down { background: no-repeat url(https://ssl.gstatic.com/codesite/ph/images/dropdown_sprite.gif) 0 0; }
 
 
 
  tr.inline_comment {
 background: #fff;
 vertical-align: top;
 }
 div.draft, div.published {
 padding: .3em;
 border: 1px solid #999; 
 margin-bottom: .1em;
 font-family: arial, sans-serif;
 max-width: 60em;
 }
 div.draft {
 background: #ffa;
 } 
 div.published {
 background: #e5ecf9;
 }
 div.published .body, div.draft .body {
 padding: .5em .1em .1em .1em;
 max-width: 60em;
 white-space: pre-wrap;
 white-space: -moz-pre-wrap;
 white-space: -pre-wrap;
 white-space: -o-pre-wrap;
 word-wrap: break-word;
 font-size: 1em;
 }
 div.draft .actions {
 margin-left: 1em;
 font-size: 90%;
 }
 div.draft form {
 padding: .5em .5em .5em 0;
 }
 div.draft textarea, div.published textarea {
 width: 95%;
 height: 10em;
 font-family: arial, sans-serif;
 margin-bottom: .5em;
 }

 
 .nocursor, .nocursor td, .cursor_hidden, .cursor_hidden td {
 background-color: white;
 height: 2px;
 }
 .cursor, .cursor td {
 background-color: darkblue;
 height: 2px;
 display: '';
 }
 
 
.list {
 border: 1px solid white;
 border-bottom: 0;
}

 
 </style>
</head>
<body class="t4">
<script type="text/javascript">
 window.___gcfg = {lang: 'en'};
 (function() 
 {var po = document.createElement("script");
 po.type = "text/javascript"; po.async = true;po.src = "https://apis.google.com/js/plusone.js";
 var s = document.getElementsByTagName("script")[0];
 s.parentNode.insertBefore(po, s);
 })();
</script>
<div class="headbg">

 <div id="gaia">
 

 <span>
 
 
 
 <a href="#" id="multilogin-dropdown" onclick="return false;"
 ><u><b>tavristasos@gmail.com</b></u> <small>&#9660;</small></a>
 
 
 | <a href="/u/105438543774775363520/" id="projects-dropdown" onclick="return false;"
 ><u>My favorites</u> <small>&#9660;</small></a>
 | <a href="/u/105438543774775363520/" onclick="_CS_click('/gb/ph/profile');"
 title="Profile, Updates, and Settings"
 ><u>Profile</u></a>
 | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fp%2Ftavristasos%2Fsource%2Fbrowse%2Ftrunk%2Fjquery.js" 
 onclick="_CS_click('/gb/ph/signout');"
 ><u>Sign out</u></a>
 
 </span>

 </div>

 <div class="gbh" style="left: 0pt;"></div>
 <div class="gbh" style="right: 0pt;"></div>
 
 
 <div style="height: 1px"></div>
<!--[if lte IE 7]>
<div style="text-align:center;">
Your version of Internet Explorer is not supported. Try a browser that
contributes to open source, such as <a href="http://www.firefox.com">Firefox</a>,
<a href="http://www.google.com/chrome">Google Chrome</a>, or
<a href="http://code.google.com/chrome/chromeframe/">Google Chrome Frame</a>.
</div>
<![endif]-->



 <table style="padding:0px; margin: 0px 0px 10px 0px; width:100%" cellpadding="0" cellspacing="0"
 itemscope itemtype="http://schema.org/CreativeWork">
 <tr style="height: 58px;">
 
 
 
 <td id="plogo">
 <link itemprop="url" href="/p/tavristasos">
 <a href="/p/tavristasos/">
 
 <img src="https://ssl.gstatic.com/codesite/ph/images/defaultlogo.png" alt="Logo" itemprop="image">
 
 </a>
 </td>
 
 <td style="padding-left: 0.5em">
 
 <div id="pname">
 <a href="/p/tavristasos/"><span itemprop="name">tavristasos</span></a>
 </div>
 
 <div id="psum">
 <a id="project_summary_link"
 href="/p/tavristasos/"><span itemprop="description">1</span></a>
 
 </div>
 
 
 </td>
 <td style="white-space:nowrap;text-align:right; vertical-align:bottom;">
 
 <form action="/hosting/search">
 <input size="30" name="q" value="" type="text">
 
 <input type="submit" name="projectsearch" value="Search projects" >
 </form>
 
 </tr>
 </table>

</div>

 
<div id="mt" class="gtb"> 
 <a href="/p/tavristasos/" class="tab ">Project&nbsp;Home</a>
 
 
 
 
 <a href="/p/tavristasos/downloads/list" class="tab ">Downloads</a>
 
 
 
 
 
 <a href="/p/tavristasos/w/list" class="tab ">Wiki</a>
 
 
 
 
 
 <a href="/p/tavristasos/issues/list"
 class="tab ">Issues</a>
 
 
 
 
 
 <a href="/p/tavristasos/source/checkout"
 class="tab active">Source</a>
 
 
 
 
 
 <a href="/p/tavristasos/admin"
 class="tab inactive">Administer</a>
 
 
 
 <span style="font-weight: bold; color: #c00; margin-top: 5px; display: block;">
 Scheduled for deletion due to Violation of TOS.
 </span>
 
 
 <div class=gtbc></div>
</div>
<table cellspacing="0" cellpadding="0" width="100%" align="center" border="0" class="st">
 <tr>
 
 
 
 
 
 
 <td class="subt">
 <div class="st2">
 <div class="isf">
 
 


 <span class="inst1"><a href="/p/tavristasos/source/checkout">Checkout</a></span> &nbsp;
 <span class="inst2"><a href="/p/tavristasos/source/browse/">Browse</a></span> &nbsp;
 <span class="inst3"><a href="/p/tavristasos/source/list">Changes</a></span> &nbsp;
 
 
 
 
 
 <a href="/p/tavristasos/issues/entry?show=review&former=sourcelist">Request code review</a>
 
 
 
 </form>
 <script type="text/javascript">
 
 function codesearchQuery(form) {
 var query = document.getElementById('q').value;
 if (query) { form.action += '%20' + query; }
 }
 </script>
 </div>
</div>

 </td>
 
 
 
 <td align="right" valign="top" class="bevel-right"></td>
 </tr>
</table>


<script type="text/javascript">
 var cancelBubble = false;
 function _go(url) { document.location = url; }
</script>
<div id="maincol"
 
>

 




<div class="expand">
<div id="colcontrol">
<style type="text/css">
 #file_flipper { white-space: nowrap; padding-right: 2em; }
 #file_flipper.hidden { display: none; }
 #file_flipper .pagelink { color: #0000CC; text-decoration: underline; }
 #file_flipper #visiblefiles { padding-left: 0.5em; padding-right: 0.5em; }
</style>
<table id="nav_and_rev" class="list"
 cellpadding="0" cellspacing="0" width="100%">
 <tr>
 
 <td nowrap="nowrap" class="src_crumbs src_nav" width="33%">
 <strong class="src_nav">Source path:&nbsp;</strong>
 <span id="crumb_root">
 
 <a href="/p/tavristasos/source/browse/">svn</a>/&nbsp;</span>
 <span id="crumb_links" class="ifClosed"><a href="/p/tavristasos/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span>jquery.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/tavristasos/source/browse/trunk/jquery.js?edit=1"
 ><img src="https://ssl.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper"><b>r200</b></td>
 
 </tr></table>
 </td> 
 </tr>
</table>

<div class="fc">
 
 
 
<style type="text/css">
.undermouse span {
 background-image: url(https://ssl.gstatic.com/codesite/ph/images/comments.gif); }
</style>
<table class="opened" id="review_comment_area"
><tr>
<td id="nums">
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
<pre><table width="100%" id="nums_table_0"><tr id="gr_svn200_1"

><td id="1"><a href="#1">1</a></td></tr
><tr id="gr_svn200_2"

><td id="2"><a href="#2">2</a></td></tr
><tr id="gr_svn200_3"

><td id="3"><a href="#3">3</a></td></tr
><tr id="gr_svn200_4"

><td id="4"><a href="#4">4</a></td></tr
><tr id="gr_svn200_5"

><td id="5"><a href="#5">5</a></td></tr
><tr id="gr_svn200_6"

><td id="6"><a href="#6">6</a></td></tr
><tr id="gr_svn200_7"

><td id="7"><a href="#7">7</a></td></tr
><tr id="gr_svn200_8"

><td id="8"><a href="#8">8</a></td></tr
><tr id="gr_svn200_9"

><td id="9"><a href="#9">9</a></td></tr
><tr id="gr_svn200_10"

><td id="10"><a href="#10">10</a></td></tr
><tr id="gr_svn200_11"

><td id="11"><a href="#11">11</a></td></tr
><tr id="gr_svn200_12"

><td id="12"><a href="#12">12</a></td></tr
><tr id="gr_svn200_13"

><td id="13"><a href="#13">13</a></td></tr
><tr id="gr_svn200_14"

><td id="14"><a href="#14">14</a></td></tr
><tr id="gr_svn200_15"

><td id="15"><a href="#15">15</a></td></tr
><tr id="gr_svn200_16"

><td id="16"><a href="#16">16</a></td></tr
><tr id="gr_svn200_17"

><td id="17"><a href="#17">17</a></td></tr
><tr id="gr_svn200_18"

><td id="18"><a href="#18">18</a></td></tr
><tr id="gr_svn200_19"

><td id="19"><a href="#19">19</a></td></tr
><tr id="gr_svn200_20"

><td id="20"><a href="#20">20</a></td></tr
><tr id="gr_svn200_21"

><td id="21"><a href="#21">21</a></td></tr
><tr id="gr_svn200_22"

><td id="22"><a href="#22">22</a></td></tr
><tr id="gr_svn200_23"

><td id="23"><a href="#23">23</a></td></tr
><tr id="gr_svn200_24"

><td id="24"><a href="#24">24</a></td></tr
><tr id="gr_svn200_25"

><td id="25"><a href="#25">25</a></td></tr
><tr id="gr_svn200_26"

><td id="26"><a href="#26">26</a></td></tr
><tr id="gr_svn200_27"

><td id="27"><a href="#27">27</a></td></tr
><tr id="gr_svn200_28"

><td id="28"><a href="#28">28</a></td></tr
><tr id="gr_svn200_29"

><td id="29"><a href="#29">29</a></td></tr
><tr id="gr_svn200_30"

><td id="30"><a href="#30">30</a></td></tr
><tr id="gr_svn200_31"

><td id="31"><a href="#31">31</a></td></tr
><tr id="gr_svn200_32"

><td id="32"><a href="#32">32</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn200_1

><td class="source">/*<br></td></tr
><tr
id=sl_svn200_2

><td class="source"> * jQuery 1.2.3 - New Wave Javascript<br></td></tr
><tr
id=sl_svn200_3

><td class="source"> *<br></td></tr
><tr
id=sl_svn200_4

><td class="source"> * Copyright (c) 2008 John Resig (jquery.com)<br></td></tr
><tr
id=sl_svn200_5

><td class="source"> * Dual licensed under the MIT (MIT-LICENSE.txt)<br></td></tr
><tr
id=sl_svn200_6

><td class="source"> * and GPL (GPL-LICENSE.txt) licenses.<br></td></tr
><tr
id=sl_svn200_7

><td class="source"> *<br></td></tr
><tr
id=sl_svn200_8

><td class="source"> * $Date: 2008-02-06 00:21:25 -0500 (Wed, 06 Feb 2008) $<br></td></tr
><tr
id=sl_svn200_9

><td class="source"> * $Rev: 4663 $<br></td></tr
><tr
id=sl_svn200_10

><td class="source"> */<br></td></tr
><tr
id=sl_svn200_11

><td class="source">(function(){if(window.jQuery)var _jQuery=window.jQuery;var jQuery=window.jQuery=function(selector,context){return new jQuery.prototype.init(selector,context);};if(window.$)var _$=window.$;window.$=jQuery;var quickExpr=/^[^&lt;]*(&lt;(.|\s)+&gt;)[^&gt;]*$|^#(\w+)$/;var isSimple=/^.[^:#\[\.]*$/;jQuery.fn=jQuery.prototype={init:function(selector,context){selector=selector||document;if(selector.nodeType){this[0]=selector;this.length=1;return this;}else if(typeof selector==&quot;string&quot;){var match=quickExpr.exec(selector);if(match&amp;&amp;(match[1]||!context)){if(match[1])selector=jQuery.clean([match[1]],context);else{var elem=document.getElementById(match[3]);if(elem)if(elem.id!=match[3])return jQuery().find(selector);else{this[0]=elem;this.length=1;return this;}else<br></td></tr
><tr
id=sl_svn200_12

><td class="source">selector=[];}}else<br></td></tr
><tr
id=sl_svn200_13

><td class="source">return new jQuery(context).find(selector);}else if(jQuery.isFunction(selector))return new jQuery(document)[jQuery.fn.ready?&quot;ready&quot;:&quot;load&quot;](selector);return this.setArray(selector.constructor==Array&amp;&amp;selector||(selector.jquery||selector.length&amp;&amp;selector!=window&amp;&amp;!selector.nodeType&amp;&amp;selector[0]!=undefined&amp;&amp;selector[0].nodeType)&amp;&amp;jQuery.makeArray(selector)||[selector]);},jquery:&quot;1.2.3&quot;,size:function(){return this.length;},length:0,get:function(num){return num==undefined?jQuery.makeArray(this):this[num];},pushStack:function(elems){var ret=jQuery(elems);ret.prevObject=this;return ret;},setArray:function(elems){this.length=0;Array.prototype.push.apply(this,elems);return this;},each:function(callback,args){return jQuery.each(this,callback,args);},index:function(elem){var ret=-1;this.each(function(i){if(this==elem)ret=i;});return ret;},attr:function(name,value,type){var options=name;if(name.constructor==String)if(value==undefined)return this.length&amp;&amp;jQuery[type||&quot;attr&quot;](this[0],name)||undefined;else{options={};options[name]=value;}return this.each(function(i){for(name in options)jQuery.attr(type?this.style:this,name,jQuery.prop(this,options[name],type,i,name));});},css:function(key,value){if((key==&#39;width&#39;||key==&#39;height&#39;)&amp;&amp;parseFloat(value)&lt;0)value=undefined;return this.attr(key,value,&quot;curCSS&quot;);},text:function(text){if(typeof text!=&quot;object&quot;&amp;&amp;text!=null)return this.empty().append((this[0]&amp;&amp;this[0].ownerDocument||document).createTextNode(text));var ret=&quot;&quot;;jQuery.each(text||this,function(){jQuery.each(this.childNodes,function(){if(this.nodeType!=8)ret+=this.nodeType!=1?this.nodeValue:jQuery.fn.text([this]);});});return ret;},wrapAll:function(html){if(this[0])jQuery(html,this[0].ownerDocument).clone().insertBefore(this[0]).map(function(){var elem=this;while(elem.firstChild)elem=elem.firstChild;return elem;}).append(this);return this;},wrapInner:function(html){return this.each(function(){jQuery(this).contents().wrapAll(html);});},wrap:function(html){return this.each(function(){jQuery(this).wrapAll(html);});},append:function(){return this.domManip(arguments,true,false,function(elem){if(this.nodeType==1)this.appendChild(elem);});},prepend:function(){return this.domManip(arguments,true,true,function(elem){if(this.nodeType==1)this.insertBefore(elem,this.firstChild);});},before:function(){return this.domManip(arguments,false,false,function(elem){this.parentNode.insertBefore(elem,this);});},after:function(){return this.domManip(arguments,false,true,function(elem){this.parentNode.insertBefore(elem,this.nextSibling);});},end:function(){return this.prevObject||jQuery([]);},find:function(selector){var elems=jQuery.map(this,function(elem){return jQuery.find(selector,elem);});return this.pushStack(/[^+&gt;] [^+&gt;]/.test(selector)||selector.indexOf(&quot;..&quot;)&gt;-1?jQuery.unique(elems):elems);},clone:function(events){var ret=this.map(function(){if(jQuery.browser.msie&amp;&amp;!jQuery.isXMLDoc(this)){var clone=this.cloneNode(true),container=document.createElement(&quot;div&quot;);container.appendChild(clone);return jQuery.clean([container.innerHTML])[0];}else<br></td></tr
><tr
id=sl_svn200_14

><td class="source">return this.cloneNode(true);});var clone=ret.find(&quot;*&quot;).andSelf().each(function(){if(this[expando]!=undefined)this[expando]=null;});if(events===true)this.find(&quot;*&quot;).andSelf().each(function(i){if(this.nodeType==3)return;var events=jQuery.data(this,&quot;events&quot;);for(var type in events)for(var handler in events[type])jQuery.event.add(clone[i],type,events[type][handler],events[type][handler].data);});return ret;},filter:function(selector){return this.pushStack(jQuery.isFunction(selector)&amp;&amp;jQuery.grep(this,function(elem,i){return selector.call(elem,i);})||jQuery.multiFilter(selector,this));},not:function(selector){if(selector.constructor==String)if(isSimple.test(selector))return this.pushStack(jQuery.multiFilter(selector,this,true));else<br></td></tr
><tr
id=sl_svn200_15

><td class="source">selector=jQuery.multiFilter(selector,this);var isArrayLike=selector.length&amp;&amp;selector[selector.length-1]!==undefined&amp;&amp;!selector.nodeType;return this.filter(function(){return isArrayLike?jQuery.inArray(this,selector)&lt;0:this!=selector;});},add:function(selector){return!selector?this:this.pushStack(jQuery.merge(this.get(),selector.constructor==String?jQuery(selector).get():selector.length!=undefined&amp;&amp;(!selector.nodeName||jQuery.nodeName(selector,&quot;form&quot;))?selector:[selector]));},is:function(selector){return selector?jQuery.multiFilter(selector,this).length&gt;0:false;},hasClass:function(selector){return this.is(&quot;.&quot;+selector);},val:function(value){if(value==undefined){if(this.length){var elem=this[0];if(jQuery.nodeName(elem,&quot;select&quot;)){var index=elem.selectedIndex,values=[],options=elem.options,one=elem.type==&quot;select-one&quot;;if(index&lt;0)return null;for(var i=one?index:0,max=one?index+1:options.length;i&lt;max;i++){var option=options[i];if(option.selected){value=jQuery.browser.msie&amp;&amp;!option.attributes.value.specified?option.text:option.value;if(one)return value;values.push(value);}}return values;}else<br></td></tr
><tr
id=sl_svn200_16

><td class="source">return(this[0].value||&quot;&quot;).replace(/\r/g,&quot;&quot;);}return undefined;}return this.each(function(){if(this.nodeType!=1)return;if(value.constructor==Array&amp;&amp;/radio|checkbox/.test(this.type))this.checked=(jQuery.inArray(this.value,value)&gt;=0||jQuery.inArray(this.name,value)&gt;=0);else if(jQuery.nodeName(this,&quot;select&quot;)){var values=value.constructor==Array?value:[value];jQuery(&quot;option&quot;,this).each(function(){this.selected=(jQuery.inArray(this.value,values)&gt;=0||jQuery.inArray(this.text,values)&gt;=0);});if(!values.length)this.selectedIndex=-1;}else<br></td></tr
><tr
id=sl_svn200_17

><td class="source">this.value=value;});},html:function(value){return value==undefined?(this.length?this[0].innerHTML:null):this.empty().append(value);},replaceWith:function(value){return this.after(value).remove();},eq:function(i){return this.slice(i,i+1);},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments));},map:function(callback){return this.pushStack(jQuery.map(this,function(elem,i){return callback.call(elem,i,elem);}));},andSelf:function(){return this.add(this.prevObject);},data:function(key,value){var parts=key.split(&quot;.&quot;);parts[1]=parts[1]?&quot;.&quot;+parts[1]:&quot;&quot;;if(value==null){var data=this.triggerHandler(&quot;getData&quot;+parts[1]+&quot;!&quot;,[parts[0]]);if(data==undefined&amp;&amp;this.length)data=jQuery.data(this[0],key);return data==null&amp;&amp;parts[1]?this.data(parts[0]):data;}else<br></td></tr
><tr
id=sl_svn200_18

><td class="source">return this.trigger(&quot;setData&quot;+parts[1]+&quot;!&quot;,[parts[0],value]).each(function(){jQuery.data(this,key,value);});},removeData:function(key){return this.each(function(){jQuery.removeData(this,key);});},domManip:function(args,table,reverse,callback){var clone=this.length&gt;1,elems;return this.each(function(){if(!elems){elems=jQuery.clean(args,this.ownerDocument);if(reverse)elems.reverse();}var obj=this;if(table&amp;&amp;jQuery.nodeName(this,&quot;table&quot;)&amp;&amp;jQuery.nodeName(elems[0],&quot;tr&quot;))obj=this.getElementsByTagName(&quot;tbody&quot;)[0]||this.appendChild(this.ownerDocument.createElement(&quot;tbody&quot;));var scripts=jQuery([]);jQuery.each(elems,function(){var elem=clone?jQuery(this).clone(true)[0]:this;if(jQuery.nodeName(elem,&quot;script&quot;)){scripts=scripts.add(elem);}else{if(elem.nodeType==1)scripts=scripts.add(jQuery(&quot;script&quot;,elem).remove());callback.call(obj,elem);}});scripts.each(evalScript);});}};jQuery.prototype.init.prototype=jQuery.prototype;function evalScript(i,elem){if(elem.src)jQuery.ajax({url:elem.src,async:false,dataType:&quot;script&quot;});else<br></td></tr
><tr
id=sl_svn200_19

><td class="source">jQuery.globalEval(elem.text||elem.textContent||elem.innerHTML||&quot;&quot;);if(elem.parentNode)elem.parentNode.removeChild(elem);}jQuery.extend=jQuery.fn.extend=function(){var target=arguments[0]||{},i=1,length=arguments.length,deep=false,options;if(target.constructor==Boolean){deep=target;target=arguments[1]||{};i=2;}if(typeof target!=&quot;object&quot;&amp;&amp;typeof target!=&quot;function&quot;)target={};if(length==1){target=this;i=0;}for(;i&lt;length;i++)if((options=arguments[i])!=null)for(var name in options){if(target===options[name])continue;if(deep&amp;&amp;options[name]&amp;&amp;typeof options[name]==&quot;object&quot;&amp;&amp;target[name]&amp;&amp;!options[name].nodeType)target[name]=jQuery.extend(target[name],options[name]);else if(options[name]!=undefined)target[name]=options[name];}return target;};var expando=&quot;jQuery&quot;+(new Date()).getTime(),uuid=0,windowData={};var exclude=/z-?index|font-?weight|opacity|zoom|line-?height/i;jQuery.extend({noConflict:function(deep){window.$=_$;if(deep)window.jQuery=_jQuery;return jQuery;},isFunction:function(fn){return!!fn&amp;&amp;typeof fn!=&quot;string&quot;&amp;&amp;!fn.nodeName&amp;&amp;fn.constructor!=Array&amp;&amp;/function/i.test(fn+&quot;&quot;);},isXMLDoc:function(elem){return elem.documentElement&amp;&amp;!elem.body||elem.tagName&amp;&amp;elem.ownerDocument&amp;&amp;!elem.ownerDocument.body;},globalEval:function(data){data=jQuery.trim(data);if(data){var head=document.getElementsByTagName(&quot;head&quot;)[0]||document.documentElement,script=document.createElement(&quot;script&quot;);script.type=&quot;text/javascript&quot;;if(jQuery.browser.msie)script.text=data;else<br></td></tr
><tr
id=sl_svn200_20

><td class="source">script.appendChild(document.createTextNode(data));head.appendChild(script);head.removeChild(script);}},nodeName:function(elem,name){return elem.nodeName&amp;&amp;elem.nodeName.toUpperCase()==name.toUpperCase();},cache:{},data:function(elem,name,data){elem=elem==window?windowData:elem;var id=elem[expando];if(!id)id=elem[expando]=++uuid;if(name&amp;&amp;!jQuery.cache[id])jQuery.cache[id]={};if(data!=undefined)jQuery.cache[id][name]=data;return name?jQuery.cache[id][name]:id;},removeData:function(elem,name){elem=elem==window?windowData:elem;var id=elem[expando];if(name){if(jQuery.cache[id]){delete jQuery.cache[id][name];name=&quot;&quot;;for(name in jQuery.cache[id])break;if(!name)jQuery.removeData(elem);}}else{try{delete elem[expando];}catch(e){if(elem.removeAttribute)elem.removeAttribute(expando);}delete jQuery.cache[id];}},each:function(object,callback,args){if(args){if(object.length==undefined){for(var name in object)if(callback.apply(object[name],args)===false)break;}else<br></td></tr
><tr
id=sl_svn200_21

><td class="source">for(var i=0,length=object.length;i&lt;length;i++)if(callback.apply(object[i],args)===false)break;}else{if(object.length==undefined){for(var name in object)if(callback.call(object[name],name,object[name])===false)break;}else<br></td></tr
><tr
id=sl_svn200_22

><td class="source">for(var i=0,length=object.length,value=object[0];i&lt;length&amp;&amp;callback.call(value,i,value)!==false;value=object[++i]){}}return object;},prop:function(elem,value,type,i,name){if(jQuery.isFunction(value))value=value.call(elem,i);return value&amp;&amp;value.constructor==Number&amp;&amp;type==&quot;curCSS&quot;&amp;&amp;!exclude.test(name)?value+&quot;px&quot;:value;},className:{add:function(elem,classNames){jQuery.each((classNames||&quot;&quot;).split(/\s+/),function(i,className){if(elem.nodeType==1&amp;&amp;!jQuery.className.has(elem.className,className))elem.className+=(elem.className?&quot; &quot;:&quot;&quot;)+className;});},remove:function(elem,classNames){if(elem.nodeType==1)elem.className=classNames!=undefined?jQuery.grep(elem.className.split(/\s+/),function(className){return!jQuery.className.has(classNames,className);}).join(&quot; &quot;):&quot;&quot;;},has:function(elem,className){return jQuery.inArray(className,(elem.className||elem).toString().split(/\s+/))&gt;-1;}},swap:function(elem,options,callback){var old={};for(var name in options){old[name]=elem.style[name];elem.style[name]=options[name];}callback.call(elem);for(var name in options)elem.style[name]=old[name];},css:function(elem,name,force){if(name==&quot;width&quot;||name==&quot;height&quot;){var val,props={position:&quot;absolute&quot;,visibility:&quot;hidden&quot;,display:&quot;block&quot;},which=name==&quot;width&quot;?[&quot;Left&quot;,&quot;Right&quot;]:[&quot;Top&quot;,&quot;Bottom&quot;];function getWH(){val=name==&quot;width&quot;?elem.offsetWidth:elem.offsetHeight;var padding=0,border=0;jQuery.each(which,function(){padding+=parseFloat(jQuery.curCSS(elem,&quot;padding&quot;+this,true))||0;border+=parseFloat(jQuery.curCSS(elem,&quot;border&quot;+this+&quot;Width&quot;,true))||0;});val-=Math.round(padding+border);}if(jQuery(elem).is(&quot;:visible&quot;))getWH();else<br></td></tr
><tr
id=sl_svn200_23

><td class="source">jQuery.swap(elem,props,getWH);return Math.max(0,val);}return jQuery.curCSS(elem,name,force);},curCSS:function(elem,name,force){var ret;function color(elem){if(!jQuery.browser.safari)return false;var ret=document.defaultView.getComputedStyle(elem,null);return!ret||ret.getPropertyValue(&quot;color&quot;)==&quot;&quot;;}if(name==&quot;opacity&quot;&amp;&amp;jQuery.browser.msie){ret=jQuery.attr(elem.style,&quot;opacity&quot;);return ret==&quot;&quot;?&quot;1&quot;:ret;}if(jQuery.browser.opera&amp;&amp;name==&quot;display&quot;){var save=elem.style.outline;elem.style.outline=&quot;0 solid black&quot;;elem.style.outline=save;}if(name.match(/float/i))name=styleFloat;if(!force&amp;&amp;elem.style&amp;&amp;elem.style[name])ret=elem.style[name];else if(document.defaultView&amp;&amp;document.defaultView.getComputedStyle){if(name.match(/float/i))name=&quot;float&quot;;name=name.replace(/([A-Z])/g,&quot;-$1&quot;).toLowerCase();var getComputedStyle=document.defaultView.getComputedStyle(elem,null);if(getComputedStyle&amp;&amp;!color(elem))ret=getComputedStyle.getPropertyValue(name);else{var swap=[],stack=[];for(var a=elem;a&amp;&amp;color(a);a=a.parentNode)stack.unshift(a);for(var i=0;i&lt;stack.length;i++)if(color(stack[i])){swap[i]=stack[i].style.display;stack[i].style.display=&quot;block&quot;;}ret=name==&quot;display&quot;&amp;&amp;swap[stack.length-1]!=null?&quot;none&quot;:(getComputedStyle&amp;&amp;getComputedStyle.getPropertyValue(name))||&quot;&quot;;for(var i=0;i&lt;swap.length;i++)if(swap[i]!=null)stack[i].style.display=swap[i];}if(name==&quot;opacity&quot;&amp;&amp;ret==&quot;&quot;)ret=&quot;1&quot;;}else if(elem.currentStyle){var camelCase=name.replace(/\-(\w)/g,function(all,letter){return letter.toUpperCase();});ret=elem.currentStyle[name]||elem.currentStyle[camelCase];if(!/^\d+(px)?$/i.test(ret)&amp;&amp;/^\d/.test(ret)){var style=elem.style.left,runtimeStyle=elem.runtimeStyle.left;elem.runtimeStyle.left=elem.currentStyle.left;elem.style.left=ret||0;ret=elem.style.pixelLeft+&quot;px&quot;;elem.style.left=style;elem.runtimeStyle.left=runtimeStyle;}}return ret;},clean:function(elems,context){var ret=[];context=context||document;if(typeof context.createElement==&#39;undefined&#39;)context=context.ownerDocument||context[0]&amp;&amp;context[0].ownerDocument||document;jQuery.each(elems,function(i,elem){if(!elem)return;if(elem.constructor==Number)elem=elem.toString();if(typeof elem==&quot;string&quot;){elem=elem.replace(/(&lt;(\w+)[^&gt;]*?)\/&gt;/g,function(all,front,tag){return tag.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?all:front+&quot;&gt;&lt;/&quot;+tag+&quot;&gt;&quot;;});var tags=jQuery.trim(elem).toLowerCase(),div=context.createElement(&quot;div&quot;);var wrap=!tags.indexOf(&quot;&lt;opt&quot;)&amp;&amp;[1,&quot;&lt;select multiple=&#39;multiple&#39;&gt;&quot;,&quot;&lt;/select&gt;&quot;]||!tags.indexOf(&quot;&lt;leg&quot;)&amp;&amp;[1,&quot;&lt;fieldset&gt;&quot;,&quot;&lt;/fieldset&gt;&quot;]||tags.match(/^&lt;(thead|tbody|tfoot|colg|cap)/)&amp;&amp;[1,&quot;&lt;table&gt;&quot;,&quot;&lt;/table&gt;&quot;]||!tags.indexOf(&quot;&lt;tr&quot;)&amp;&amp;[2,&quot;&lt;table&gt;&lt;tbody&gt;&quot;,&quot;&lt;/tbody&gt;&lt;/table&gt;&quot;]||(!tags.indexOf(&quot;&lt;td&quot;)||!tags.indexOf(&quot;&lt;th&quot;))&amp;&amp;[3,&quot;&lt;table&gt;&lt;tbody&gt;&lt;tr&gt;&quot;,&quot;&lt;/tr&gt;&lt;/tbody&gt;&lt;/table&gt;&quot;]||!tags.indexOf(&quot;&lt;col&quot;)&amp;&amp;[2,&quot;&lt;table&gt;&lt;tbody&gt;&lt;/tbody&gt;&lt;colgroup&gt;&quot;,&quot;&lt;/colgroup&gt;&lt;/table&gt;&quot;]||jQuery.browser.msie&amp;&amp;[1,&quot;div&lt;div&gt;&quot;,&quot;&lt;/div&gt;&quot;]||[0,&quot;&quot;,&quot;&quot;];div.innerHTML=wrap[1]+elem+wrap[2];while(wrap[0]--)div=div.lastChild;if(jQuery.browser.msie){var tbody=!tags.indexOf(&quot;&lt;table&quot;)&amp;&amp;tags.indexOf(&quot;&lt;tbody&quot;)&lt;0?div.firstChild&amp;&amp;div.firstChild.childNodes:wrap[1]==&quot;&lt;table&gt;&quot;&amp;&amp;tags.indexOf(&quot;&lt;tbody&quot;)&lt;0?div.childNodes:[];for(var j=tbody.length-1;j&gt;=0;--j)if(jQuery.nodeName(tbody[j],&quot;tbody&quot;)&amp;&amp;!tbody[j].childNodes.length)tbody[j].parentNode.removeChild(tbody[j]);if(/^\s/.test(elem))div.insertBefore(context.createTextNode(elem.match(/^\s*/)[0]),div.firstChild);}elem=jQuery.makeArray(div.childNodes);}if(elem.length===0&amp;&amp;(!jQuery.nodeName(elem,&quot;form&quot;)&amp;&amp;!jQuery.nodeName(elem,&quot;select&quot;)))return;if(elem[0]==undefined||jQuery.nodeName(elem,&quot;form&quot;)||elem.options)ret.push(elem);else<br></td></tr
><tr
id=sl_svn200_24

><td class="source">ret=jQuery.merge(ret,elem);});return ret;},attr:function(elem,name,value){if(!elem||elem.nodeType==3||elem.nodeType==8)return undefined;var fix=jQuery.isXMLDoc(elem)?{}:jQuery.props;if(name==&quot;selected&quot;&amp;&amp;jQuery.browser.safari)elem.parentNode.selectedIndex;if(fix[name]){if(value!=undefined)elem[fix[name]]=value;return elem[fix[name]];}else if(jQuery.browser.msie&amp;&amp;name==&quot;style&quot;)return jQuery.attr(elem.style,&quot;cssText&quot;,value);else if(value==undefined&amp;&amp;jQuery.browser.msie&amp;&amp;jQuery.nodeName(elem,&quot;form&quot;)&amp;&amp;(name==&quot;action&quot;||name==&quot;method&quot;))return elem.getAttributeNode(name).nodeValue;else if(elem.tagName){if(value!=undefined){if(name==&quot;type&quot;&amp;&amp;jQuery.nodeName(elem,&quot;input&quot;)&amp;&amp;elem.parentNode)throw&quot;type property can&#39;t be changed&quot;;elem.setAttribute(name,&quot;&quot;+value);}if(jQuery.browser.msie&amp;&amp;/href|src/.test(name)&amp;&amp;!jQuery.isXMLDoc(elem))return elem.getAttribute(name,2);return elem.getAttribute(name);}else{if(name==&quot;opacity&quot;&amp;&amp;jQuery.browser.msie){if(value!=undefined){elem.zoom=1;elem.filter=(elem.filter||&quot;&quot;).replace(/alpha\([^)]*\)/,&quot;&quot;)+(parseFloat(value).toString()==&quot;NaN&quot;?&quot;&quot;:&quot;alpha(opacity=&quot;+value*100+&quot;)&quot;);}return elem.filter&amp;&amp;elem.filter.indexOf(&quot;opacity=&quot;)&gt;=0?(parseFloat(elem.filter.match(/opacity=([^)]*)/)[1])/100).toString():&quot;&quot;;}name=name.replace(/-([a-z])/ig,function(all,letter){return letter.toUpperCase();});if(value!=undefined)elem[name]=value;return elem[name];}},trim:function(text){return(text||&quot;&quot;).replace(/^\s+|\s+$/g,&quot;&quot;);},makeArray:function(array){var ret=[];if(typeof array!=&quot;array&quot;)for(var i=0,length=array.length;i&lt;length;i++)ret.push(array[i]);else<br></td></tr
><tr
id=sl_svn200_25

><td class="source">ret=array.slice(0);return ret;},inArray:function(elem,array){for(var i=0,length=array.length;i&lt;length;i++)if(array[i]==elem)return i;return-1;},merge:function(first,second){if(jQuery.browser.msie){for(var i=0;second[i];i++)if(second[i].nodeType!=8)first.push(second[i]);}else<br></td></tr
><tr
id=sl_svn200_26

><td class="source">for(var i=0;second[i];i++)first.push(second[i]);return first;},unique:function(array){var ret=[],done={};try{for(var i=0,length=array.length;i&lt;length;i++){var id=jQuery.data(array[i]);if(!done[id]){done[id]=true;ret.push(array[i]);}}}catch(e){ret=array;}return ret;},grep:function(elems,callback,inv){var ret=[];for(var i=0,length=elems.length;i&lt;length;i++)if(!inv&amp;&amp;callback(elems[i],i)||inv&amp;&amp;!callback(elems[i],i))ret.push(elems[i]);return ret;},map:function(elems,callback){var ret=[];for(var i=0,length=elems.length;i&lt;length;i++){var value=callback(elems[i],i);if(value!==null&amp;&amp;value!=undefined){if(value.constructor!=Array)value=[value];ret=ret.concat(value);}}return ret;}});var userAgent=navigator.userAgent.toLowerCase();jQuery.browser={version:(userAgent.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[])[1],safari:/webkit/.test(userAgent),opera:/opera/.test(userAgent),msie:/msie/.test(userAgent)&amp;&amp;!/opera/.test(userAgent),mozilla:/mozilla/.test(userAgent)&amp;&amp;!/(compatible|webkit)/.test(userAgent)};var styleFloat=jQuery.browser.msie?&quot;styleFloat&quot;:&quot;cssFloat&quot;;jQuery.extend({boxModel:!jQuery.browser.msie||document.compatMode==&quot;CSS1Compat&quot;,props:{&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;,&quot;float&quot;:styleFloat,cssFloat:styleFloat,styleFloat:styleFloat,innerHTML:&quot;innerHTML&quot;,className:&quot;className&quot;,value:&quot;value&quot;,disabled:&quot;disabled&quot;,checked:&quot;checked&quot;,readonly:&quot;readOnly&quot;,selected:&quot;selected&quot;,maxlength:&quot;maxLength&quot;,selectedIndex:&quot;selectedIndex&quot;,defaultValue:&quot;defaultValue&quot;,tagName:&quot;tagName&quot;,nodeName:&quot;nodeName&quot;}});jQuery.each({parent:function(elem){return elem.parentNode;},parents:function(elem){return jQuery.dir(elem,&quot;parentNode&quot;);},next:function(elem){return jQuery.nth(elem,2,&quot;nextSibling&quot;);},prev:function(elem){return jQuery.nth(elem,2,&quot;previousSibling&quot;);},nextAll:function(elem){return jQuery.dir(elem,&quot;nextSibling&quot;);},prevAll:function(elem){return jQuery.dir(elem,&quot;previousSibling&quot;);},siblings:function(elem){return jQuery.sibling(elem.parentNode.firstChild,elem);},children:function(elem){return jQuery.sibling(elem.firstChild);},contents:function(elem){return jQuery.nodeName(elem,&quot;iframe&quot;)?elem.contentDocument||elem.contentWindow.document:jQuery.makeArray(elem.childNodes);}},function(name,fn){jQuery.fn[name]=function(selector){var ret=jQuery.map(this,fn);if(selector&amp;&amp;typeof selector==&quot;string&quot;)ret=jQuery.multiFilter(selector,ret);return this.pushStack(jQuery.unique(ret));};});jQuery.each({appendTo:&quot;append&quot;,prependTo:&quot;prepend&quot;,insertBefore:&quot;before&quot;,insertAfter:&quot;after&quot;,replaceAll:&quot;replaceWith&quot;},function(name,original){jQuery.fn[name]=function(){var args=arguments;return this.each(function(){for(var i=0,length=args.length;i&lt;length;i++)jQuery(args[i])[original](this);});};});jQuery.each({removeAttr:function(name){jQuery.attr(this,name,&quot;&quot;);if(this.nodeType==1)this.removeAttribute(name);},addClass:function(classNames){jQuery.className.add(this,classNames);},removeClass:function(classNames){jQuery.className.remove(this,classNames);},toggleClass:function(classNames){jQuery.className[jQuery.className.has(this,classNames)?&quot;remove&quot;:&quot;add&quot;](this,classNames);},remove:function(selector){if(!selector||jQuery.filter(selector,[this]).r.length){jQuery(&quot;*&quot;,this).add(this).each(function(){jQuery.event.remove(this);jQuery.removeData(this);});if(this.parentNode)this.parentNode.removeChild(this);}},empty:function(){jQuery(&quot;&gt;*&quot;,this).remove();while(this.firstChild)this.removeChild(this.firstChild);}},function(name,fn){jQuery.fn[name]=function(){return this.each(fn,arguments);};});jQuery.each([&quot;Height&quot;,&quot;Width&quot;],function(i,name){var type=name.toLowerCase();jQuery.fn[type]=function(size){return this[0]==window?jQuery.browser.opera&amp;&amp;document.body[&quot;client&quot;+name]||jQuery.browser.safari&amp;&amp;window[&quot;inner&quot;+name]||document.compatMode==&quot;CSS1Compat&quot;&amp;&amp;document.documentElement[&quot;client&quot;+name]||document.body[&quot;client&quot;+name]:this[0]==document?Math.max(Math.max(document.body[&quot;scroll&quot;+name],document.documentElement[&quot;scroll&quot;+name]),Math.max(document.body[&quot;offset&quot;+name],document.documentElement[&quot;offset&quot;+name])):size==undefined?(this.length?jQuery.css(this[0],type):null):this.css(type,size.constructor==String?size:size+&quot;px&quot;);};});var chars=jQuery.browser.safari&amp;&amp;parseInt(jQuery.browser.version)&lt;417?&quot;(?:[\\w*_-]|\\\\.)&quot;:&quot;(?:[\\w\u0128-\uFFFF*_-]|\\\\.)&quot;,quickChild=new RegExp(&quot;^&gt;\\s*(&quot;+chars+&quot;+)&quot;),quickID=new RegExp(&quot;^(&quot;+chars+&quot;+)(#)(&quot;+chars+&quot;+)&quot;),quickClass=new RegExp(&quot;^([#.]?)(&quot;+chars+&quot;*)&quot;);jQuery.extend({expr:{&quot;&quot;:function(a,i,m){return m[2]==&quot;*&quot;||jQuery.nodeName(a,m[2]);},&quot;#&quot;:function(a,i,m){return a.getAttribute(&quot;id&quot;)==m[2];},&quot;:&quot;:{lt:function(a,i,m){return i&lt;m[3]-0;},gt:function(a,i,m){return i&gt;m[3]-0;},nth:function(a,i,m){return m[3]-0==i;},eq:function(a,i,m){return m[3]-0==i;},first:function(a,i){return i==0;},last:function(a,i,m,r){return i==r.length-1;},even:function(a,i){return i%2==0;},odd:function(a,i){return i%2;},&quot;first-child&quot;:function(a){return a.parentNode.getElementsByTagName(&quot;*&quot;)[0]==a;},&quot;last-child&quot;:function(a){return jQuery.nth(a.parentNode.lastChild,1,&quot;previousSibling&quot;)==a;},&quot;only-child&quot;:function(a){return!jQuery.nth(a.parentNode.lastChild,2,&quot;previousSibling&quot;);},parent:function(a){return a.firstChild;},empty:function(a){return!a.firstChild;},contains:function(a,i,m){return(a.textContent||a.innerText||jQuery(a).text()||&quot;&quot;).indexOf(m[3])&gt;=0;},visible:function(a){return&quot;hidden&quot;!=a.type&amp;&amp;jQuery.css(a,&quot;display&quot;)!=&quot;none&quot;&amp;&amp;jQuery.css(a,&quot;visibility&quot;)!=&quot;hidden&quot;;},hidden:function(a){return&quot;hidden&quot;==a.type||jQuery.css(a,&quot;display&quot;)==&quot;none&quot;||jQuery.css(a,&quot;visibility&quot;)==&quot;hidden&quot;;},enabled:function(a){return!a.disabled;},disabled:function(a){return a.disabled;},checked:function(a){return a.checked;},selected:function(a){return a.selected||jQuery.attr(a,&quot;selected&quot;);},text:function(a){return&quot;text&quot;==a.type;},radio:function(a){return&quot;radio&quot;==a.type;},checkbox:function(a){return&quot;checkbox&quot;==a.type;},file:function(a){return&quot;file&quot;==a.type;},password:function(a){return&quot;password&quot;==a.type;},submit:function(a){return&quot;submit&quot;==a.type;},image:function(a){return&quot;image&quot;==a.type;},reset:function(a){return&quot;reset&quot;==a.type;},button:function(a){return&quot;button&quot;==a.type||jQuery.nodeName(a,&quot;button&quot;);},input:function(a){return/input|select|textarea|button/i.test(a.nodeName);},has:function(a,i,m){return jQuery.find(m[3],a).length;},header:function(a){return/h\d/i.test(a.nodeName);},animated:function(a){return jQuery.grep(jQuery.timers,function(fn){return a==fn.elem;}).length;}}},parse:[/^(\[) *@?([\w-]+) *([!*$^~=]*) *(&#39;?&quot;?)(.*?)\4 *\]/,/^(:)([\w-]+)\(&quot;?&#39;?(.*?(\(.*?\))?[^(]*?)&quot;?&#39;?\)/,new RegExp(&quot;^([:.#]*)(&quot;+chars+&quot;+)&quot;)],multiFilter:function(expr,elems,not){var old,cur=[];while(expr&amp;&amp;expr!=old){old=expr;var f=jQuery.filter(expr,elems,not);expr=f.t.replace(/^\s*,\s*/,&quot;&quot;);cur=not?elems=f.r:jQuery.merge(cur,f.r);}return cur;},find:function(t,context){if(typeof t!=&quot;string&quot;)return[t];if(context&amp;&amp;context.nodeType!=1&amp;&amp;context.nodeType!=9)return[];context=context||document;var ret=[context],done=[],last,nodeName;while(t&amp;&amp;last!=t){var r=[];last=t;t=jQuery.trim(t);var foundToken=false;var re=quickChild;var m=re.exec(t);if(m){nodeName=m[1].toUpperCase();for(var i=0;ret[i];i++)for(var c=ret[i].firstChild;c;c=c.nextSibling)if(c.nodeType==1&amp;&amp;(nodeName==&quot;*&quot;||c.nodeName.toUpperCase()==nodeName))r.push(c);ret=r;t=t.replace(re,&quot;&quot;);if(t.indexOf(&quot; &quot;)==0)continue;foundToken=true;}else{re=/^([&gt;+~])\s*(\w*)/i;if((m=re.exec(t))!=null){r=[];var merge={};nodeName=m[2].toUpperCase();m=m[1];for(var j=0,rl=ret.length;j&lt;rl;j++){var n=m==&quot;~&quot;||m==&quot;+&quot;?ret[j].nextSibling:ret[j].firstChild;for(;n;n=n.nextSibling)if(n.nodeType==1){var id=jQuery.data(n);if(m==&quot;~&quot;&amp;&amp;merge[id])break;if(!nodeName||n.nodeName.toUpperCase()==nodeName){if(m==&quot;~&quot;)merge[id]=true;r.push(n);}if(m==&quot;+&quot;)break;}}ret=r;t=jQuery.trim(t.replace(re,&quot;&quot;));foundToken=true;}}if(t&amp;&amp;!foundToken){if(!t.indexOf(&quot;,&quot;)){if(context==ret[0])ret.shift();done=jQuery.merge(done,ret);r=ret=[context];t=&quot; &quot;+t.substr(1,t.length);}else{var re2=quickID;var m=re2.exec(t);if(m){m=[0,m[2],m[3],m[1]];}else{re2=quickClass;m=re2.exec(t);}m[2]=m[2].replace(/\\/g,&quot;&quot;);var elem=ret[ret.length-1];if(m[1]==&quot;#&quot;&amp;&amp;elem&amp;&amp;elem.getElementById&amp;&amp;!jQuery.isXMLDoc(elem)){var oid=elem.getElementById(m[2]);if((jQuery.browser.msie||jQuery.browser.opera)&amp;&amp;oid&amp;&amp;typeof oid.id==&quot;string&quot;&amp;&amp;oid.id!=m[2])oid=jQuery(&#39;[@id=&quot;&#39;+m[2]+&#39;&quot;]&#39;,elem)[0];ret=r=oid&amp;&amp;(!m[3]||jQuery.nodeName(oid,m[3]))?[oid]:[];}else{for(var i=0;ret[i];i++){var tag=m[1]==&quot;#&quot;&amp;&amp;m[3]?m[3]:m[1]!=&quot;&quot;||m[0]==&quot;&quot;?&quot;*&quot;:m[2];if(tag==&quot;*&quot;&amp;&amp;ret[i].nodeName.toLowerCase()==&quot;object&quot;)tag=&quot;param&quot;;r=jQuery.merge(r,ret[i].getElementsByTagName(tag));}if(m[1]==&quot;.&quot;)r=jQuery.classFilter(r,m[2]);if(m[1]==&quot;#&quot;){var tmp=[];for(var i=0;r[i];i++)if(r[i].getAttribute(&quot;id&quot;)==m[2]){tmp=[r[i]];break;}r=tmp;}ret=r;}t=t.replace(re2,&quot;&quot;);}}if(t){var val=jQuery.filter(t,r);ret=r=val.r;t=jQuery.trim(val.t);}}if(t)ret=[];if(ret&amp;&amp;context==ret[0])ret.shift();done=jQuery.merge(done,ret);return done;},classFilter:function(r,m,not){m=&quot; &quot;+m+&quot; &quot;;var tmp=[];for(var i=0;r[i];i++){var pass=(&quot; &quot;+r[i].className+&quot; &quot;).indexOf(m)&gt;=0;if(!not&amp;&amp;pass||not&amp;&amp;!pass)tmp.push(r[i]);}return tmp;},filter:function(t,r,not){var last;while(t&amp;&amp;t!=last){last=t;var p=jQuery.parse,m;for(var i=0;p[i];i++){m=p[i].exec(t);if(m){t=t.substring(m[0].length);m[2]=m[2].replace(/\\/g,&quot;&quot;);break;}}if(!m)break;if(m[1]==&quot;:&quot;&amp;&amp;m[2]==&quot;not&quot;)r=isSimple.test(m[3])?jQuery.filter(m[3],r,true).r:jQuery(r).not(m[3]);else if(m[1]==&quot;.&quot;)r=jQuery.classFilter(r,m[2],not);else if(m[1]==&quot;[&quot;){var tmp=[],type=m[3];for(var i=0,rl=r.length;i&lt;rl;i++){var a=r[i],z=a[jQuery.props[m[2]]||m[2]];if(z==null||/href|src|selected/.test(m[2]))z=jQuery.attr(a,m[2])||&#39;&#39;;if((type==&quot;&quot;&amp;&amp;!!z||type==&quot;=&quot;&amp;&amp;z==m[5]||type==&quot;!=&quot;&amp;&amp;z!=m[5]||type==&quot;^=&quot;&amp;&amp;z&amp;&amp;!z.indexOf(m[5])||type==&quot;$=&quot;&amp;&amp;z.substr(z.length-m[5].length)==m[5]||(type==&quot;*=&quot;||type==&quot;~=&quot;)&amp;&amp;z.indexOf(m[5])&gt;=0)^not)tmp.push(a);}r=tmp;}else if(m[1]==&quot;:&quot;&amp;&amp;m[2]==&quot;nth-child&quot;){var merge={},tmp=[],test=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(m[3]==&quot;even&quot;&amp;&amp;&quot;2n&quot;||m[3]==&quot;odd&quot;&amp;&amp;&quot;2n+1&quot;||!/\D/.test(m[3])&amp;&amp;&quot;0n+&quot;+m[3]||m[3]),first=(test[1]+(test[2]||1))-0,last=test[3]-0;for(var i=0,rl=r.length;i&lt;rl;i++){var node=r[i],parentNode=node.parentNode,id=jQuery.data(parentNode);if(!merge[id]){var c=1;for(var n=parentNode.firstChild;n;n=n.nextSibling)if(n.nodeType==1)n.nodeIndex=c++;merge[id]=true;}var add=false;if(first==0){if(node.nodeIndex==last)add=true;}else if((node.nodeIndex-last)%first==0&amp;&amp;(node.nodeIndex-last)/first&gt;=0)add=true;if(add^not)tmp.push(node);}r=tmp;}else{var fn=jQuery.expr[m[1]];if(typeof fn==&quot;object&quot;)fn=fn[m[2]];if(typeof fn==&quot;string&quot;)fn=eval(&quot;false||function(a,i){return &quot;+fn+&quot;;}&quot;);r=jQuery.grep(r,function(elem,i){return fn(elem,i,m,r);},not);}}return{r:r,t:t};},dir:function(elem,dir){var matched=[];var cur=elem[dir];while(cur&amp;&amp;cur!=document){if(cur.nodeType==1)matched.push(cur);cur=cur[dir];}return matched;},nth:function(cur,result,dir,elem){result=result||1;var num=0;for(;cur;cur=cur[dir])if(cur.nodeType==1&amp;&amp;++num==result)break;return cur;},sibling:function(n,elem){var r=[];for(;n;n=n.nextSibling){if(n.nodeType==1&amp;&amp;(!elem||n!=elem))r.push(n);}return r;}});jQuery.event={add:function(elem,types,handler,data){if(elem.nodeType==3||elem.nodeType==8)return;if(jQuery.browser.msie&amp;&amp;elem.setInterval!=undefined)elem=window;if(!handler.guid)handler.guid=this.guid++;if(data!=undefined){var fn=handler;handler=function(){return fn.apply(this,arguments);};handler.data=data;handler.guid=fn.guid;}var events=jQuery.data(elem,&quot;events&quot;)||jQuery.data(elem,&quot;events&quot;,{}),handle=jQuery.data(elem,&quot;handle&quot;)||jQuery.data(elem,&quot;handle&quot;,function(){var val;if(typeof jQuery==&quot;undefined&quot;||jQuery.event.triggered)return val;val=jQuery.event.handle.apply(arguments.callee.elem,arguments);return val;});handle.elem=elem;jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(&quot;.&quot;);type=parts[0];handler.type=parts[1];var handlers=events[type];if(!handlers){handlers=events[type]={};if(!jQuery.event.special[type]||jQuery.event.special[type].setup.call(elem)===false){if(elem.addEventListener)elem.addEventListener(type,handle,false);else if(elem.attachEvent)elem.attachEvent(&quot;on&quot;+type,handle);}}handlers[handler.guid]=handler;jQuery.event.global[type]=true;});elem=null;},guid:1,global:{},remove:function(elem,types,handler){if(elem.nodeType==3||elem.nodeType==8)return;var events=jQuery.data(elem,&quot;events&quot;),ret,index;if(events){if(types==undefined||(typeof types==&quot;string&quot;&amp;&amp;types.charAt(0)==&quot;.&quot;))for(var type in events)this.remove(elem,type+(types||&quot;&quot;));else{if(types.type){handler=types.handler;types=types.type;}jQuery.each(types.split(/\s+/),function(index,type){var parts=type.split(&quot;.&quot;);type=parts[0];if(events[type]){if(handler)delete events[type][handler.guid];else<br></td></tr
><tr
id=sl_svn200_27

><td class="source">for(handler in events[type])if(!parts[1]||events[type][handler].type==parts[1])delete events[type][handler];for(ret in events[type])break;if(!ret){if(!jQuery.event.special[type]||jQuery.event.special[type].teardown.call(elem)===false){if(elem.removeEventListener)elem.removeEventListener(type,jQuery.data(elem,&quot;handle&quot;),false);else if(elem.detachEvent)elem.detachEvent(&quot;on&quot;+type,jQuery.data(elem,&quot;handle&quot;));}ret=null;delete events[type];}}});}for(ret in events)break;if(!ret){var handle=jQuery.data(elem,&quot;handle&quot;);if(handle)handle.elem=null;jQuery.removeData(elem,&quot;events&quot;);jQuery.removeData(elem,&quot;handle&quot;);}}},trigger:function(type,data,elem,donative,extra){data=jQuery.makeArray(data||[]);if(type.indexOf(&quot;!&quot;)&gt;=0){type=type.slice(0,-1);var exclusive=true;}if(!elem){if(this.global[type])jQuery(&quot;*&quot;).add([window,document]).trigger(type,data);}else{if(elem.nodeType==3||elem.nodeType==8)return undefined;var val,ret,fn=jQuery.isFunction(elem[type]||null),event=!data[0]||!data[0].preventDefault;if(event)data.unshift(this.fix({type:type,target:elem}));data[0].type=type;if(exclusive)data[0].exclusive=true;if(jQuery.isFunction(jQuery.data(elem,&quot;handle&quot;)))val=jQuery.data(elem,&quot;handle&quot;).apply(elem,data);if(!fn&amp;&amp;elem[&quot;on&quot;+type]&amp;&amp;elem[&quot;on&quot;+type].apply(elem,data)===false)val=false;if(event)data.shift();if(extra&amp;&amp;jQuery.isFunction(extra)){ret=extra.apply(elem,val==null?data:data.concat(val));if(ret!==undefined)val=ret;}if(fn&amp;&amp;donative!==false&amp;&amp;val!==false&amp;&amp;!(jQuery.nodeName(elem,&#39;a&#39;)&amp;&amp;type==&quot;click&quot;)){this.triggered=true;try{elem[type]();}catch(e){}}this.triggered=false;}return val;},handle:function(event){var val;event=jQuery.event.fix(event||window.event||{});var parts=event.type.split(&quot;.&quot;);event.type=parts[0];var handlers=jQuery.data(this,&quot;events&quot;)&amp;&amp;jQuery.data(this,&quot;events&quot;)[event.type],args=Array.prototype.slice.call(arguments,1);args.unshift(event);for(var j in handlers){var handler=handlers[j];args[0].handler=handler;args[0].data=handler.data;if(!parts[1]&amp;&amp;!event.exclusive||handler.type==parts[1]){var ret=handler.apply(this,args);if(val!==false)val=ret;if(ret===false){event.preventDefault();event.stopPropagation();}}}if(jQuery.browser.msie)event.target=event.preventDefault=event.stopPropagation=event.handler=event.data=null;return val;},fix:function(event){var originalEvent=event;event=jQuery.extend({},originalEvent);event.preventDefault=function(){if(originalEvent.preventDefault)originalEvent.preventDefault();originalEvent.returnValue=false;};event.stopPropagation=function(){if(originalEvent.stopPropagation)originalEvent.stopPropagation();originalEvent.cancelBubble=true;};if(!event.target)event.target=event.srcElement||document;if(event.target.nodeType==3)event.target=originalEvent.target.parentNode;if(!event.relatedTarget&amp;&amp;event.fromElement)event.relatedTarget=event.fromElement==event.target?event.toElement:event.fromElement;if(event.pageX==null&amp;&amp;event.clientX!=null){var doc=document.documentElement,body=document.body;event.pageX=event.clientX+(doc&amp;&amp;doc.scrollLeft||body&amp;&amp;body.scrollLeft||0)-(doc.clientLeft||0);event.pageY=event.clientY+(doc&amp;&amp;doc.scrollTop||body&amp;&amp;body.scrollTop||0)-(doc.clientTop||0);}if(!event.which&amp;&amp;((event.charCode||event.charCode===0)?event.charCode:event.keyCode))event.which=event.charCode||event.keyCode;if(!event.metaKey&amp;&amp;event.ctrlKey)event.metaKey=event.ctrlKey;if(!event.which&amp;&amp;event.button)event.which=(event.button&amp;1?1:(event.button&amp;2?3:(event.button&amp;4?2:0)));return event;},special:{ready:{setup:function(){bindReady();return;},teardown:function(){return;}},mouseenter:{setup:function(){if(jQuery.browser.msie)return false;jQuery(this).bind(&quot;mouseover&quot;,jQuery.event.special.mouseenter.handler);return true;},teardown:function(){if(jQuery.browser.msie)return false;jQuery(this).unbind(&quot;mouseover&quot;,jQuery.event.special.mouseenter.handler);return true;},handler:function(event){if(withinElement(event,this))return true;arguments[0].type=&quot;mouseenter&quot;;return jQuery.event.handle.apply(this,arguments);}},mouseleave:{setup:function(){if(jQuery.browser.msie)return false;jQuery(this).bind(&quot;mouseout&quot;,jQuery.event.special.mouseleave.handler);return true;},teardown:function(){if(jQuery.browser.msie)return false;jQuery(this).unbind(&quot;mouseout&quot;,jQuery.event.special.mouseleave.handler);return true;},handler:function(event){if(withinElement(event,this))return true;arguments[0].type=&quot;mouseleave&quot;;return jQuery.event.handle.apply(this,arguments);}}}};jQuery.fn.extend({bind:function(type,data,fn){return type==&quot;unload&quot;?this.one(type,data,fn):this.each(function(){jQuery.event.add(this,type,fn||data,fn&amp;&amp;data);});},one:function(type,data,fn){return this.each(function(){jQuery.event.add(this,type,function(event){jQuery(this).unbind(event);return(fn||data).apply(this,arguments);},fn&amp;&amp;data);});},unbind:function(type,fn){return this.each(function(){jQuery.event.remove(this,type,fn);});},trigger:function(type,data,fn){return this.each(function(){jQuery.event.trigger(type,data,this,true,fn);});},triggerHandler:function(type,data,fn){if(this[0])return jQuery.event.trigger(type,data,this[0],false,fn);return undefined;},toggle:function(){var args=arguments;return this.click(function(event){this.lastToggle=0==this.lastToggle?1:0;event.preventDefault();return args[this.lastToggle].apply(this,arguments)||false;});},hover:function(fnOver,fnOut){return this.bind(&#39;mouseenter&#39;,fnOver).bind(&#39;mouseleave&#39;,fnOut);},ready:function(fn){bindReady();if(jQuery.isReady)fn.call(document,jQuery);else<br></td></tr
><tr
id=sl_svn200_28

><td class="source">jQuery.readyList.push(function(){return fn.call(this,jQuery);});return this;}});jQuery.extend({isReady:false,readyList:[],ready:function(){if(!jQuery.isReady){jQuery.isReady=true;if(jQuery.readyList){jQuery.each(jQuery.readyList,function(){this.apply(document);});jQuery.readyList=null;}jQuery(document).triggerHandler(&quot;ready&quot;);}}});var readyBound=false;function bindReady(){if(readyBound)return;readyBound=true;if(document.addEventListener&amp;&amp;!jQuery.browser.opera)document.addEventListener(&quot;DOMContentLoaded&quot;,jQuery.ready,false);if(jQuery.browser.msie&amp;&amp;window==top)(function(){if(jQuery.isReady)return;try{document.documentElement.doScroll(&quot;left&quot;);}catch(error){setTimeout(arguments.callee,0);return;}jQuery.ready();})();if(jQuery.browser.opera)document.addEventListener(&quot;DOMContentLoaded&quot;,function(){if(jQuery.isReady)return;for(var i=0;i&lt;document.styleSheets.length;i++)if(document.styleSheets[i].disabled){setTimeout(arguments.callee,0);return;}jQuery.ready();},false);if(jQuery.browser.safari){var numStyles;(function(){if(jQuery.isReady)return;if(document.readyState!=&quot;loaded&quot;&amp;&amp;document.readyState!=&quot;complete&quot;){setTimeout(arguments.callee,0);return;}if(numStyles===undefined)numStyles=jQuery(&quot;style, link[rel=stylesheet]&quot;).length;if(document.styleSheets.length!=numStyles){setTimeout(arguments.callee,0);return;}jQuery.ready();})();}jQuery.event.add(window,&quot;load&quot;,jQuery.ready);}jQuery.each((&quot;blur,focus,load,resize,scroll,unload,click,dblclick,&quot;+&quot;mousedown,mouseup,mousemove,mouseover,mouseout,change,select,&quot;+&quot;submit,keydown,keypress,keyup,error&quot;).split(&quot;,&quot;),function(i,name){jQuery.fn[name]=function(fn){return fn?this.bind(name,fn):this.trigger(name);};});var withinElement=function(event,elem){var parent=event.relatedTarget;while(parent&amp;&amp;parent!=elem)try{parent=parent.parentNode;}catch(error){parent=elem;}return parent==elem;};jQuery(window).bind(&quot;unload&quot;,function(){jQuery(&quot;*&quot;).add(document).unbind();});jQuery.fn.extend({load:function(url,params,callback){if(jQuery.isFunction(url))return this.bind(&quot;load&quot;,url);var off=url.indexOf(&quot; &quot;);if(off&gt;=0){var selector=url.slice(off,url.length);url=url.slice(0,off);}callback=callback||function(){};var type=&quot;GET&quot;;if(params)if(jQuery.isFunction(params)){callback=params;params=null;}else{params=jQuery.param(params);type=&quot;POST&quot;;}var self=this;jQuery.ajax({url:url,type:type,dataType:&quot;html&quot;,data:params,complete:function(res,status){if(status==&quot;success&quot;||status==&quot;notmodified&quot;)self.html(selector?jQuery(&quot;&lt;div/&gt;&quot;).append(res.responseText.replace(/&lt;script(.|\s)*?\/script&gt;/g,&quot;&quot;)).find(selector):res.responseText);self.each(callback,[res.responseText,status,res]);}});return this;},serialize:function(){return jQuery.param(this.serializeArray());},serializeArray:function(){return this.map(function(){return jQuery.nodeName(this,&quot;form&quot;)?jQuery.makeArray(this.elements):this;}).filter(function(){return this.name&amp;&amp;!this.disabled&amp;&amp;(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password/i.test(this.type));}).map(function(i,elem){var val=jQuery(this).val();return val==null?null:val.constructor==Array?jQuery.map(val,function(val,i){return{name:elem.name,value:val};}):{name:elem.name,value:val};}).get();}});jQuery.each(&quot;ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend&quot;.split(&quot;,&quot;),function(i,o){jQuery.fn[o]=function(f){return this.bind(o,f);};});var jsc=(new Date).getTime();jQuery.extend({get:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data=null;}return jQuery.ajax({type:&quot;GET&quot;,url:url,data:data,success:callback,dataType:type});},getScript:function(url,callback){return jQuery.get(url,null,callback,&quot;script&quot;);},getJSON:function(url,data,callback){return jQuery.get(url,data,callback,&quot;json&quot;);},post:function(url,data,callback,type){if(jQuery.isFunction(data)){callback=data;data={};}return jQuery.ajax({type:&quot;POST&quot;,url:url,data:data,success:callback,dataType:type});},ajaxSetup:function(settings){jQuery.extend(jQuery.ajaxSettings,settings);},ajaxSettings:{global:true,type:&quot;GET&quot;,timeout:0,contentType:&quot;application/x-www-form-urlencoded&quot;,processData:true,async:true,data:null,username:null,password:null,accepts:{xml:&quot;application/xml, text/xml&quot;,html:&quot;text/html&quot;,script:&quot;text/javascript, application/javascript&quot;,json:&quot;application/json, text/javascript&quot;,text:&quot;text/plain&quot;,_default:&quot;*/*&quot;}},lastModified:{},ajax:function(s){var jsonp,jsre=/=\?(&amp;|$)/g,status,data;s=jQuery.extend(true,s,jQuery.extend(true,{},jQuery.ajaxSettings,s));if(s.data&amp;&amp;s.processData&amp;&amp;typeof s.data!=&quot;string&quot;)s.data=jQuery.param(s.data);if(s.dataType==&quot;jsonp&quot;){if(s.type.toLowerCase()==&quot;get&quot;){if(!s.url.match(jsre))s.url+=(s.url.match(/\?/)?&quot;&amp;&quot;:&quot;?&quot;)+(s.jsonp||&quot;callback&quot;)+&quot;=?&quot;;}else if(!s.data||!s.data.match(jsre))s.data=(s.data?s.data+&quot;&amp;&quot;:&quot;&quot;)+(s.jsonp||&quot;callback&quot;)+&quot;=?&quot;;s.dataType=&quot;json&quot;;}if(s.dataType==&quot;json&quot;&amp;&amp;(s.data&amp;&amp;s.data.match(jsre)||s.url.match(jsre))){jsonp=&quot;jsonp&quot;+jsc++;if(s.data)s.data=(s.data+&quot;&quot;).replace(jsre,&quot;=&quot;+jsonp+&quot;$1&quot;);s.url=s.url.replace(jsre,&quot;=&quot;+jsonp+&quot;$1&quot;);s.dataType=&quot;script&quot;;window[jsonp]=function(tmp){data=tmp;success();complete();window[jsonp]=undefined;try{delete window[jsonp];}catch(e){}if(head)head.removeChild(script);};}if(s.dataType==&quot;script&quot;&amp;&amp;s.cache==null)s.cache=false;if(s.cache===false&amp;&amp;s.type.toLowerCase()==&quot;get&quot;){var ts=(new Date()).getTime();var ret=s.url.replace(/(\?|&amp;)_=.*?(&amp;|$)/,&quot;$1_=&quot;+ts+&quot;$2&quot;);s.url=ret+((ret==s.url)?(s.url.match(/\?/)?&quot;&amp;&quot;:&quot;?&quot;)+&quot;_=&quot;+ts:&quot;&quot;);}if(s.data&amp;&amp;s.type.toLowerCase()==&quot;get&quot;){s.url+=(s.url.match(/\?/)?&quot;&amp;&quot;:&quot;?&quot;)+s.data;s.data=null;}if(s.global&amp;&amp;!jQuery.active++)jQuery.event.trigger(&quot;ajaxStart&quot;);if((!s.url.indexOf(&quot;http&quot;)||!s.url.indexOf(&quot;//&quot;))&amp;&amp;s.dataType==&quot;script&quot;&amp;&amp;s.type.toLowerCase()==&quot;get&quot;){var head=document.getElementsByTagName(&quot;head&quot;)[0];var script=document.createElement(&quot;script&quot;);script.src=s.url;if(s.scriptCharset)script.charset=s.scriptCharset;if(!jsonp){var done=false;script.onload=script.onreadystatechange=function(){if(!done&amp;&amp;(!this.readyState||this.readyState==&quot;loaded&quot;||this.readyState==&quot;complete&quot;)){done=true;success();complete();head.removeChild(script);}};}head.appendChild(script);return undefined;}var requestDone=false;var xml=window.ActiveXObject?new ActiveXObject(&quot;Microsoft.XMLHTTP&quot;):new XMLHttpRequest();xml.open(s.type,s.url,s.async,s.username,s.password);try{if(s.data)xml.setRequestHeader(&quot;Content-Type&quot;,s.contentType);if(s.ifModified)xml.setRequestHeader(&quot;If-Modified-Since&quot;,jQuery.lastModified[s.url]||&quot;Thu, 01 Jan 1970 00:00:00 GMT&quot;);xml.setRequestHeader(&quot;X-Requested-With&quot;,&quot;XMLHttpRequest&quot;);xml.setRequestHeader(&quot;Accept&quot;,s.dataType&amp;&amp;s.accepts[s.dataType]?s.accepts[s.dataType]+&quot;, */*&quot;:s.accepts._default);}catch(e){}if(s.beforeSend)s.beforeSend(xml);if(s.global)jQuery.event.trigger(&quot;ajaxSend&quot;,[xml,s]);var onreadystatechange=function(isTimeout){if(!requestDone&amp;&amp;xml&amp;&amp;(xml.readyState==4||isTimeout==&quot;timeout&quot;)){requestDone=true;if(ival){clearInterval(ival);ival=null;}status=isTimeout==&quot;timeout&quot;&amp;&amp;&quot;timeout&quot;||!jQuery.httpSuccess(xml)&amp;&amp;&quot;error&quot;||s.ifModified&amp;&amp;jQuery.httpNotModified(xml,s.url)&amp;&amp;&quot;notmodified&quot;||&quot;success&quot;;if(status==&quot;success&quot;){try{data=jQuery.httpData(xml,s.dataType);}catch(e){status=&quot;parsererror&quot;;}}if(status==&quot;success&quot;){var modRes;try{modRes=xml.getResponseHeader(&quot;Last-Modified&quot;);}catch(e){}if(s.ifModified&amp;&amp;modRes)jQuery.lastModified[s.url]=modRes;if(!jsonp)success();}else<br></td></tr
><tr
id=sl_svn200_29

><td class="source">jQuery.handleError(s,xml,status);complete();if(s.async)xml=null;}};if(s.async){var ival=setInterval(onreadystatechange,13);if(s.timeout&gt;0)setTimeout(function(){if(xml){xml.abort();if(!requestDone)onreadystatechange(&quot;timeout&quot;);}},s.timeout);}try{xml.send(s.data);}catch(e){jQuery.handleError(s,xml,null,e);}if(!s.async)onreadystatechange();function success(){if(s.success)s.success(data,status);if(s.global)jQuery.event.trigger(&quot;ajaxSuccess&quot;,[xml,s]);}function complete(){if(s.complete)s.complete(xml,status);if(s.global)jQuery.event.trigger(&quot;ajaxComplete&quot;,[xml,s]);if(s.global&amp;&amp;!--jQuery.active)jQuery.event.trigger(&quot;ajaxStop&quot;);}return xml;},handleError:function(s,xml,status,e){if(s.error)s.error(xml,status,e);if(s.global)jQuery.event.trigger(&quot;ajaxError&quot;,[xml,s,e]);},active:0,httpSuccess:function(r){try{return!r.status&amp;&amp;location.protocol==&quot;file:&quot;||(r.status&gt;=200&amp;&amp;r.status&lt;300)||r.status==304||r.status==1223||jQuery.browser.safari&amp;&amp;r.status==undefined;}catch(e){}return false;},httpNotModified:function(xml,url){try{var xmlRes=xml.getResponseHeader(&quot;Last-Modified&quot;);return xml.status==304||xmlRes==jQuery.lastModified[url]||jQuery.browser.safari&amp;&amp;xml.status==undefined;}catch(e){}return false;},httpData:function(r,type){var ct=r.getResponseHeader(&quot;content-type&quot;);var xml=type==&quot;xml&quot;||!type&amp;&amp;ct&amp;&amp;ct.indexOf(&quot;xml&quot;)&gt;=0;var data=xml?r.responseXML:r.responseText;if(xml&amp;&amp;data.documentElement.tagName==&quot;parsererror&quot;)throw&quot;parsererror&quot;;if(type==&quot;script&quot;)jQuery.globalEval(data);if(type==&quot;json&quot;)data=eval(&quot;(&quot;+data+&quot;)&quot;);return data;},param:function(a){var s=[];if(a.constructor==Array||a.jquery)jQuery.each(a,function(){s.push(encodeURIComponent(this.name)+&quot;=&quot;+encodeURIComponent(this.value));});else<br></td></tr
><tr
id=sl_svn200_30

><td class="source">for(var j in a)if(a[j]&amp;&amp;a[j].constructor==Array)jQuery.each(a[j],function(){s.push(encodeURIComponent(j)+&quot;=&quot;+encodeURIComponent(this));});else<br></td></tr
><tr
id=sl_svn200_31

><td class="source">s.push(encodeURIComponent(j)+&quot;=&quot;+encodeURIComponent(a[j]));return s.join(&quot;&amp;&quot;).replace(/%20/g,&quot;+&quot;);}});jQuery.fn.extend({show:function(speed,callback){return speed?this.animate({height:&quot;show&quot;,width:&quot;show&quot;,opacity:&quot;show&quot;},speed,callback):this.filter(&quot;:hidden&quot;).each(function(){this.style.display=this.oldblock||&quot;&quot;;if(jQuery.css(this,&quot;display&quot;)==&quot;none&quot;){var elem=jQuery(&quot;&lt;&quot;+this.tagName+&quot; /&gt;&quot;).appendTo(&quot;body&quot;);this.style.display=elem.css(&quot;display&quot;);if(this.style.display==&quot;none&quot;)this.style.display=&quot;block&quot;;elem.remove();}}).end();},hide:function(speed,callback){return speed?this.animate({height:&quot;hide&quot;,width:&quot;hide&quot;,opacity:&quot;hide&quot;},speed,callback):this.filter(&quot;:visible&quot;).each(function(){this.oldblock=this.oldblock||jQuery.css(this,&quot;display&quot;);this.style.display=&quot;none&quot;;}).end();},_toggle:jQuery.fn.toggle,toggle:function(fn,fn2){return jQuery.isFunction(fn)&amp;&amp;jQuery.isFunction(fn2)?this._toggle(fn,fn2):fn?this.animate({height:&quot;toggle&quot;,width:&quot;toggle&quot;,opacity:&quot;toggle&quot;},fn,fn2):this.each(function(){jQuery(this)[jQuery(this).is(&quot;:hidden&quot;)?&quot;show&quot;:&quot;hide&quot;]();});},slideDown:function(speed,callback){return this.animate({height:&quot;show&quot;},speed,callback);},slideUp:function(speed,callback){return this.animate({height:&quot;hide&quot;},speed,callback);},slideToggle:function(speed,callback){return this.animate({height:&quot;toggle&quot;},speed,callback);},fadeIn:function(speed,callback){return this.animate({opacity:&quot;show&quot;},speed,callback);},fadeOut:function(speed,callback){return this.animate({opacity:&quot;hide&quot;},speed,callback);},fadeTo:function(speed,to,callback){return this.animate({opacity:to},speed,callback);},animate:function(prop,speed,easing,callback){var optall=jQuery.speed(speed,easing,callback);return this[optall.queue===false?&quot;each&quot;:&quot;queue&quot;](function(){if(this.nodeType!=1)return false;var opt=jQuery.extend({},optall);var hidden=jQuery(this).is(&quot;:hidden&quot;),self=this;for(var p in prop){if(prop[p]==&quot;hide&quot;&amp;&amp;hidden||prop[p]==&quot;show&quot;&amp;&amp;!hidden)return jQuery.isFunction(opt.complete)&amp;&amp;opt.complete.apply(this);if(p==&quot;height&quot;||p==&quot;width&quot;){opt.display=jQuery.css(this,&quot;display&quot;);opt.overflow=this.style.overflow;}}if(opt.overflow!=null)this.style.overflow=&quot;hidden&quot;;opt.curAnim=jQuery.extend({},prop);jQuery.each(prop,function(name,val){var e=new jQuery.fx(self,opt,name);if(/toggle|show|hide/.test(val))e[val==&quot;toggle&quot;?hidden?&quot;show&quot;:&quot;hide&quot;:val](prop);else{var parts=val.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),start=e.cur(true)||0;if(parts){var end=parseFloat(parts[2]),unit=parts[3]||&quot;px&quot;;if(unit!=&quot;px&quot;){self.style[name]=(end||1)+unit;start=((end||1)/e.cur(true))*start;self.style[name]=start+unit;}if(parts[1])end=((parts[1]==&quot;-=&quot;?-1:1)*end)+start;e.custom(start,end,unit);}else<br></td></tr
><tr
id=sl_svn200_32

><td class="source">e.custom(start,val,&quot;&quot;);}});return true;});},queue:function(type,fn){if(jQuery.isFunction(type)||(type&amp;&amp;type.constructor==Array)){fn=type;type=&quot;fx&quot;;}if(!type||(typeof type==&quot;string&quot;&amp;&amp;!fn))return queue(this[0],type);return this.each(function(){if(fn.constructor==Array)queue(this,type,fn);else{queue(this,type).push(fn);if(queue(this,type).length==1)fn.apply(this);}});},stop:function(clearQueue,gotoEnd){var timers=jQuery.timers;if(clearQueue)this.queue([]);this.each(function(){for(var i=timers.length-1;i&gt;=0;i--)if(timers[i].elem==this){if(gotoEnd)timers[i](true);timers.splice(i,1);}});if(!gotoEnd)this.dequeue();return this;}});var queue=function(elem,type,array){if(!elem)return undefined;type=type||&quot;fx&quot;;var q=jQuery.data(elem,type+&quot;queue&quot;);if(!q||array)q=jQuery.data(elem,type+&quot;queue&quot;,array?jQuery.makeArray(array):[]);return q;};jQuery.fn.dequeue=function(type){type=type||&quot;fx&quot;;return this.each(function(){var q=queue(this,type);q.shift();if(q.length)q[0].apply(this);});};jQuery.extend({speed:function(speed,easing,fn){var opt=speed&amp;&amp;speed.constructor==Object?speed:{complete:fn||!fn&amp;&amp;easing||jQuery.isFunction(speed)&amp;&amp;speed,duration:speed,easing:fn&amp;&amp;easing||easing&amp;&amp;easing.constructor!=Function&amp;&amp;easing};opt.duration=(opt.duration&amp;&amp;opt.duration.constructor==Number?opt.duration:{slow:600,fast:200}[opt.duration])||400;opt.old=opt.complete;opt.complete=function(){if(opt.queue!==false)jQuery(this).dequeue();if(jQuery.isFunction(opt.old))opt.old.apply(this);};return opt;},easing:{linear:function(p,n,firstNum,diff){return firstNum+diff*p;},swing:function(p,n,firstNum,diff){return((-Math.cos(p*Math.PI)/2)+0.5)*diff+firstNum;}},timers:[],timerId:null,fx:function(elem,options,prop){this.options=options;this.elem=elem;this.prop=prop;if(!options.orig)options.orig={};}});jQuery.fx.prototype={update:function(){if(this.options.step)this.options.step.apply(this.elem,[this.now,this]);(jQuery.fx.step[this.prop]||jQuery.fx.step._default)(this);if(this.prop==&quot;height&quot;||this.prop==&quot;width&quot;)this.elem.style.display=&quot;block&quot;;},cur:function(force){if(this.elem[this.prop]!=null&amp;&amp;this.elem.style[this.prop]==null)return this.elem[this.prop];var r=parseFloat(jQuery.css(this.elem,this.prop,force));return r&amp;&amp;r&gt;-10000?r:parseFloat(jQuery.curCSS(this.elem,this.prop))||0;},custom:function(from,to,unit){this.startTime=(new Date()).getTime();this.start=from;this.end=to;this.unit=unit||this.unit||&quot;px&quot;;this.now=this.start;this.pos=this.state=0;this.update();var self=this;function t(gotoEnd){return self.step(gotoEnd);}t.elem=this.elem;jQuery.timers.push(t);if(jQuery.timerId==null){jQuery.timerId=setInterval(function(){var timers=jQuery.timers;for(var i=0;i&lt;timers.length;i++)if(!timers[i]())timers.splice(i--,1);if(!timers.length){clearInterval(jQuery.timerId);jQuery.timerId=null;}},13);}},show:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.show=true;this.custom(0,this.cur());if(this.prop==&quot;width&quot;||this.prop==&quot;height&quot;)this.elem.style[this.prop]=&quot;1px&quot;;jQuery(this.elem).show();},hide:function(){this.options.orig[this.prop]=jQuery.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0);},step:function(gotoEnd){var t=(new Date()).getTime();if(gotoEnd||t&gt;this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var done=true;for(var i in this.options.curAnim)if(this.options.curAnim[i]!==true)done=false;if(done){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(jQuery.css(this.elem,&quot;display&quot;)==&quot;none&quot;)this.elem.style.display=&quot;block&quot;;}if(this.options.hide)this.elem.style.display=&quot;none&quot;;if(this.options.hide||this.options.show)for(var p in this.options.curAnim)jQuery.attr(this.elem.style,p,this.options.orig[p]);}if(done&amp;&amp;jQuery.isFunction(this.options.complete))this.options.complete.apply(this.elem);return false;}else{var n=t-this.startTime;this.state=n/this.options.duration;this.pos=jQuery.easing[this.options.easing||(jQuery.easing.swing?&quot;swing&quot;:&quot;linear&quot;)](this.state,n,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update();}return true;}};jQuery.fx.step={scrollLeft:function(fx){fx.elem.scrollLeft=fx.now;},scrollTop:function(fx){fx.elem.scrollTop=fx.now;},opacity:function(fx){jQuery.attr(fx.elem.style,&quot;opacity&quot;,fx.now);},_default:function(fx){fx.elem.style[fx.prop]=fx.now+fx.unit;}};jQuery.fn.offset=function(){var left=0,top=0,elem=this[0],results;if(elem)with(jQuery.browser){var parent=elem.parentNode,offsetChild=elem,offsetParent=elem.offsetParent,doc=elem.ownerDocument,safari2=safari&amp;&amp;parseInt(version)&lt;522&amp;&amp;!/adobeair/i.test(userAgent),fixed=jQuery.css(elem,&quot;position&quot;)==&quot;fixed&quot;;if(elem.getBoundingClientRect){var box=elem.getBoundingClientRect();add(box.left+Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),box.top+Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));add(-doc.documentElement.clientLeft,-doc.documentElement.clientTop);}else{add(elem.offsetLeft,elem.offsetTop);while(offsetParent){add(offsetParent.offsetLeft,offsetParent.offsetTop);if(mozilla&amp;&amp;!/^t(able|d|h)$/i.test(offsetParent.tagName)||safari&amp;&amp;!safari2)border(offsetParent);if(!fixed&amp;&amp;jQuery.css(offsetParent,&quot;position&quot;)==&quot;fixed&quot;)fixed=true;offsetChild=/^body$/i.test(offsetParent.tagName)?offsetChild:offsetParent;offsetParent=offsetParent.offsetParent;}while(parent&amp;&amp;parent.tagName&amp;&amp;!/^body|html$/i.test(parent.tagName)){if(!/^inline|table.*$/i.test(jQuery.css(parent,&quot;display&quot;)))add(-parent.scrollLeft,-parent.scrollTop);if(mozilla&amp;&amp;jQuery.css(parent,&quot;overflow&quot;)!=&quot;visible&quot;)border(parent);parent=parent.parentNode;}if((safari2&amp;&amp;(fixed||jQuery.css(offsetChild,&quot;position&quot;)==&quot;absolute&quot;))||(mozilla&amp;&amp;jQuery.css(offsetChild,&quot;position&quot;)!=&quot;absolute&quot;))add(-doc.body.offsetLeft,-doc.body.offsetTop);if(fixed)add(Math.max(doc.documentElement.scrollLeft,doc.body.scrollLeft),Math.max(doc.documentElement.scrollTop,doc.body.scrollTop));}results={top:top,left:left};}function border(elem){add(jQuery.curCSS(elem,&quot;borderLeftWidth&quot;,true),jQuery.curCSS(elem,&quot;borderTopWidth&quot;,true));}function add(l,t){left+=parseInt(l)||0;top+=parseInt(t)||0;}return results;};})();<br></td></tr
></table></pre>
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
</td>
</tr></table>

 
<script type="text/javascript">
 var lineNumUnderMouse = -1;
 
 function gutterOver(num) {
 gutterOut();
 var newTR = document.getElementById('gr_svn200_' + num);
 if (newTR) {
 newTR.className = 'undermouse';
 }
 lineNumUnderMouse = num;
 }
 function gutterOut() {
 if (lineNumUnderMouse != -1) {
 var oldTR = document.getElementById(
 'gr_svn200_' + lineNumUnderMouse);
 if (oldTR) {
 oldTR.className = '';
 }
 lineNumUnderMouse = -1;
 }
 }
 var numsGenState = {table_base_id: 'nums_table_'};
 var srcGenState = {table_base_id: 'src_table_'};
 var alignerRunning = false;
 var startOver = false;
 function setLineNumberHeights() {
 if (alignerRunning) {
 startOver = true;
 return;
 }
 numsGenState.chunk_id = 0;
 numsGenState.table = document.getElementById('nums_table_0');
 numsGenState.row_num = 0;
 if (!numsGenState.table) {
 return; // Silently exit if no file is present.
 }
 srcGenState.chunk_id = 0;
 srcGenState.table = document.getElementById('src_table_0');
 srcGenState.row_num = 0;
 alignerRunning = true;
 continueToSetLineNumberHeights();
 }
 function rowGenerator(genState) {
 if (genState.row_num < genState.table.rows.length) {
 var currentRow = genState.table.rows[genState.row_num];
 genState.row_num++;
 return currentRow;
 }
 var newTable = document.getElementById(
 genState.table_base_id + (genState.chunk_id + 1));
 if (newTable) {
 genState.chunk_id++;
 genState.row_num = 0;
 genState.table = newTable;
 return genState.table.rows[0];
 }
 return null;
 }
 var MAX_ROWS_PER_PASS = 1000;
 function continueToSetLineNumberHeights() {
 var rowsInThisPass = 0;
 var numRow = 1;
 var srcRow = 1;
 while (numRow && srcRow && rowsInThisPass < MAX_ROWS_PER_PASS) {
 numRow = rowGenerator(numsGenState);
 srcRow = rowGenerator(srcGenState);
 rowsInThisPass++;
 if (numRow && srcRow) {
 if (numRow.offsetHeight != srcRow.offsetHeight) {
 numRow.firstChild.style.height = srcRow.offsetHeight + 'px';
 }
 }
 }
 if (rowsInThisPass >= MAX_ROWS_PER_PASS) {
 setTimeout(continueToSetLineNumberHeights, 10);
 } else {
 alignerRunning = false;
 if (startOver) {
 startOver = false;
 setTimeout(setLineNumberHeights, 500);
 }
 }
 }
 function initLineNumberHeights() {
 // Do 2 complete passes, because there can be races
 // between this code and prettify.
 startOver = true;
 setTimeout(setLineNumberHeights, 250);
 window.onresize = setLineNumberHeights;
 }
 initLineNumberHeights();
</script>

 
 
 <div id="log">
 <div style="text-align:right">
 <a class="ifCollapse" href="#" onclick="_toggleMeta(this); return false">Show details</a>
 <a class="ifExpand" href="#" onclick="_toggleMeta(this); return false">Hide details</a>
 </div>
 <div class="ifExpand">
 
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="changelog">
 <p>Change log</p>
 <div>
 <a href="/p/tavristasos/source/detail?spec=svn200&amp;r=158">r158</a>
 by tavristasos@gmail.com
 on Jan 30, 2012
 &nbsp; <a href="/p/tavristasos/source/diff?spec=svn200&r=158&amp;format=side&amp;path=/trunk/jquery.js&amp;old_path=/trunk/jquery.js&amp;old=">Diff</a>
 </div>
 <pre>1</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/tavristasos/source/detail?r=158&spec=svn200';
 var publish_url = '/p/tavristasos/source/detail?r=158&spec=svn200#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/jquery.js');
 changed_urls.push('/p/tavristasos/source/browse/trunk/jquery.js?r\x3d158\x26spec\x3dsvn200');
 
 var selected_path = '/trunk/jquery.js';
 
 
 function getCurrentPageIndex() {
 for (var i = 0; i < changed_paths.length; i++) {
 if (selected_path == changed_paths[i]) {
 return i;
 }
 }
 }
 function getNextPage() {
 var i = getCurrentPageIndex();
 if (i < changed_paths.length - 1) {
 return changed_urls[i + 1];
 }
 return null;
 }
 function getPreviousPage() {
 var i = getCurrentPageIndex();
 if (i > 0) {
 return changed_urls[i - 1];
 }
 return null;
 }
 function gotoNextPage() {
 var page = getNextPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoPreviousPage() {
 var page = getPreviousPage();
 if (!page) {
 page = detail_url;
 }
 window.location = page;
 }
 function gotoDetailPage() {
 window.location = detail_url;
 }
 function gotoPublishPage() {
 window.location = publish_url;
 }
</script>

 
 <style type="text/css">
 #review_nav {
 border-top: 3px solid white;
 padding-top: 6px;
 margin-top: 1em;
 }
 #review_nav td {
 vertical-align: middle;
 }
 #review_nav select {
 margin: .5em 0;
 }
 </style>
 <div id="review_nav">
 <table><tr><td>Go to:&nbsp;</td><td>
 <select name="files_in_rev" onchange="window.location=this.value">
 
 <option value="/p/tavristasos/source/browse/trunk/jquery.js?r=158&amp;spec=svn200"
 selected="selected"
 >/trunk/jquery.js</option>
 
 </select>
 </td></tr></table>
 
 
 



 
 </div>
 
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="older_bubble">
 <p>Older revisions</p>
 
 <a href="/p/tavristasos/source/list?path=/trunk/jquery.js&start=158">All revisions of this file</a>
 </div>
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 
 <div class="pmeta_bubble_bg" style="border:1px solid white">
 <div class="round4"></div>
 <div class="round2"></div>
 <div class="round1"></div>
 <div class="box-inner">
 <div id="fileinfo_bubble">
 <p>File info</p>
 
 <div>Size: 54075 bytes,
 32 lines</div>
 
 <div><a href="//tavristasos.googlecode.com/svn/trunk/jquery.js">View raw file</a></div>
 </div>
 
 </div>
 <div class="round1"></div>
 <div class="round2"></div>
 <div class="round4"></div>
 </div>
 </div>
 </div>


</div>

</div>
</div>

<script src="https://ssl.gstatic.com/codesite/ph/1729405847801014513/js/prettify/prettify.js"></script>
<script type="text/javascript">prettyPrint();</script>


<script src="https://ssl.gstatic.com/codesite/ph/1729405847801014513/js/source_file_scripts.js"></script>

 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/1729405847801014513/js/kibbles.js"></script>
 <script type="text/javascript">
 var lastStop = null;
 var initialized = false;
 
 function updateCursor(next, prev) {
 if (prev && prev.element) {
 prev.element.className = 'cursor_stop cursor_hidden';
 }
 if (next && next.element) {
 next.element.className = 'cursor_stop cursor';
 lastStop = next.index;
 }
 }
 
 function pubRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftRevealed(data) {
 updateCursorForCell(data.cellId, 'cursor_stop cursor_hidden');
 if (initialized) {
 reloadCursors();
 }
 }
 
 function draftDestroyed(data) {
 updateCursorForCell(data.cellId, 'nocursor');
 if (initialized) {
 reloadCursors();
 }
 }
 function reloadCursors() {
 kibbles.skipper.reset();
 loadCursors();
 if (lastStop != null) {
 kibbles.skipper.setCurrentStop(lastStop);
 }
 }
 // possibly the simplest way to insert any newly added comments
 // is to update the class of the corresponding cursor row,
 // then refresh the entire list of rows.
 function updateCursorForCell(cellId, className) {
 var cell = document.getElementById(cellId);
 // we have to go two rows back to find the cursor location
 var row = getPreviousElement(cell.parentNode);
 row.className = className;
 }
 // returns the previous element, ignores text nodes.
 function getPreviousElement(e) {
 var element = e.previousSibling;
 if (element.nodeType == 3) {
 element = element.previousSibling;
 }
 if (element && element.tagName) {
 return element;
 }
 }
 function loadCursors() {
 // register our elements with skipper
 var elements = CR_getElements('*', 'cursor_stop');
 var len = elements.length;
 for (var i = 0; i < len; i++) {
 var element = elements[i]; 
 element.className = 'cursor_stop cursor_hidden';
 kibbles.skipper.append(element);
 }
 }
 function toggleComments() {
 CR_toggleCommentDisplay();
 reloadCursors();
 }
 function keysOnLoadHandler() {
 // setup skipper
 kibbles.skipper.addStopListener(
 kibbles.skipper.LISTENER_TYPE.PRE, updateCursor);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_top', 50);
 // Set the 'offset' option to return the middle of the client area
 // an option can be a static value, or a callback
 kibbles.skipper.setOption('padding_bottom', 100);
 // Register our keys
 kibbles.skipper.addFwdKey("n");
 kibbles.skipper.addRevKey("p");
 kibbles.keys.addKeyPressListener(
 'u', function() { window.location = detail_url; });
 kibbles.keys.addKeyPressListener(
 'r', function() { window.location = detail_url + '#publish'; });
 
 kibbles.keys.addKeyPressListener('j', gotoNextPage);
 kibbles.keys.addKeyPressListener('k', gotoPreviousPage);
 
 
 }
 </script>
<script src="https://ssl.gstatic.com/codesite/ph/1729405847801014513/js/code_review_scripts.js"></script>
<script type="text/javascript">
 function showPublishInstructions() {
 var element = document.getElementById('review_instr');
 if (element) {
 element.className = 'opened';
 }
 }
 var codereviews;
 function revsOnLoadHandler() {
 // register our source container with the commenting code
 var paths = {'svn200': '/trunk/jquery.js'}
 codereviews = CR_controller.setup(
 {"loggedInUserEmail": "tavristasos@gmail.com", "relativeBaseUrl": "", "projectHomeUrl": "/p/tavristasos", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/1729405847801014513", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "domainName": null, "projectName": "tavristasos", "token": "ABZ6GAeew5yqP25Osx55ouLOC5Waq3K8rQ:1417533003455", "profileUrl": "/u/105438543774775363520/"}, '', 'svn200', paths,
 CR_BrowseIntegrationFactory);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, showPublishInstructions);
 
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_PUB_PLATE, pubRevealed);
 codereviews.registerActivityListener(CR_ActivityType.REVEAL_DRAFT_PLATE, draftRevealed);
 codereviews.registerActivityListener(CR_ActivityType.DISCARD_DRAFT_COMMENT, draftDestroyed);
 
 
 
 
 
 
 
 var initialized = true;
 reloadCursors();
 }
 window.onload = function() {keysOnLoadHandler(); revsOnLoadHandler();};

</script>
<script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/1729405847801014513/js/dit_scripts.js"></script>

 
 
 
 <script type="text/javascript" src="https://ssl.gstatic.com/codesite/ph/1729405847801014513/js/ph_core.js"></script>
 
 
 
 
</div> 

<div id="footer" dir="ltr">
 <div class="text">
 <a href="/projecthosting/terms.html">Terms</a> -
 <a href="http://www.google.com/privacy.html">Privacy</a> -
 <a href="/p/support/">Project Hosting Help</a>
 </div>
</div>
 <div class="hostedBy" style="margin-top: -20px;">
 <span style="vertical-align: top;">Powered by <a href="http://code.google.com/projecthosting/">Google Project Hosting</a></span>
 </div>

 
 


 
 </body>
</html>

