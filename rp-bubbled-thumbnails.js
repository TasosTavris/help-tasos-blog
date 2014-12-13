



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "ABZ6GAeWKuOWnHamH4TMEu-Nqun4bHk04g:1417533142723";
 
 
 var CS_env = {"assetHostPath": "https://ssl.gstatic.com/codesite/ph", "token": "ABZ6GAeWKuOWnHamH4TMEu-Nqun4bHk04g:1417533142723", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/1729405847801014513", "domainName": null, "relativeBaseUrl": "", "loggedInUserEmail": "tavristasos@gmail.com", "projectName": "tavristasos", "profileUrl": "/u/105438543774775363520/", "projectHomeUrl": "/p/tavristasos"};
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
 
 
 <title>rp-bubbled-thumbnails.js - 
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
 | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fp%2Ftavristasos%2Fsource%2Fbrowse%2Ftrunk%2Frp-bubbled-thumbnails.js" 
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
 <span id="crumb_links" class="ifClosed"><a href="/p/tavristasos/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span>rp-bubbled-thumbnails.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/tavristasos/source/browse/trunk/rp-bubbled-thumbnails.js?edit=1"
 ><img src="https://ssl.gstatic.com/codesite/ph/images/pencil-y14.png"
 class="edit_icon">Edit file</a>
 </td>
 
 
 <td nowrap="nowrap" width="33%" align="right">
 <table cellpadding="0" cellspacing="0" style="font-size: 100%"><tr>
 
 
 <td class="flipper">
 <ul class="leftside">
 
 <li><a href="/p/tavristasos/source/browse/trunk/rp-bubbled-thumbnails.js?r=156" title="Previous">&lsaquo;r156</a></li>
 
 </ul>
 </td>
 
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
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn200_1

><td class="source">//Script by Aneesh of www.bloggerplugins.org<br></td></tr
><tr
id=sl_svn200_2

><td class="source">//Released on August 19th August 2009<br></td></tr
><tr
id=sl_svn200_3

><td class="source">//Modified by Damn Nov 14th 2011<br></td></tr
><tr
id=sl_svn200_4

><td class="source">//Bubble tips added<br></td></tr
><tr
id=sl_svn200_5

><td class="source">//http://www.finderonly.net/<br></td></tr
><tr
id=sl_svn200_6

><td class="source">eval(function(p,a,c,k,e,r){e=function(c){return(c&lt;a?&#39;&#39;:e(parseInt(c/a)))+((c=c%a)&gt;35?String.fromCharCode(c+29):c.toString(36))};if(!&#39;&#39;.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return&#39;\\w+&#39;};c=1};while(c--)if(k[c])p=p.replace(new RegExp(&#39;\\b&#39;+e(c)+&#39;\\b&#39;,&#39;g&#39;),k[c]);return p}(&#39;3 8=D A();3 o=0;3 m=D A();3 n=D A();g 3j(e){v(3 i=0;i&lt;e.1n.1D.6;i++){3 f=e.1n.1D[i];8[o]=f.G.$t;3i{n[o]=f.1b$S.3h}3g(3f){s=f.3e.$t;a=s.Q(&quot;&lt;1o&quot;);b=s.Q(&quot;1E=\\&quot;&quot;,a);c=s.Q(&quot;\\&quot;&quot;,b+5);d=s.3d(b+5,c-b-5);7((a!=-1)&amp;&amp;(b!=-1)&amp;&amp;(c!=-1)&amp;&amp;(d!=&quot;&quot;)){n[o]=d}q{7(1s(1t)!==\&#39;1B\&#39;)n[o]=1t;q n[o]=&quot;1C://4.31.2Y.2X/-2R/2P/2N/2L/2I/2H.2G&quot;}}7(8[o].6&gt;35)8[o]=8[o].2D(0,35)+&quot;...&quot;;v(3 k=0;k&lt;f.O.6;k++){7(f.O[k].1p==\&#39;2C\&#39;){m[o]=f.O[k].19;o++}}}}g 2B(){3 a=D A(0);3 b=D A(0);3 c=D A(0);v(3 i=0;i&lt;m.6;i++){7(!1x(a,m[i])){a.6+=1;a[a.6-1]=m[i];b.6+=1;c.6+=1;b[b.6-1]=8[i];c[c.6-1]=n[i]}}8=b;m=a;n=c}g 1x(a,e){v(3 j=0;j&lt;a.6;j++)7(a[j]==e)F 2A;F 2z}g 2w(a){3 b;7(1s(1H)!==\&#39;1B\&#39;)b=1H;q b=&quot;#2v&quot;;v(3 i=0;i&lt;m.6;i++){7((m[i]==a)||(!8[i])){m.z(i,1);8.z(i,1);n.z(i,1);i--}}3 r=1d.2u((8.6-1)*1d.2t());3 i=0;7(8.6&gt;0)2.u(\&#39;&lt;1i&gt;\&#39;+2s+\&#39;&lt;/1i&gt;&lt;B T=&quot;2r&quot;&gt;&lt;H 9=&quot;p-X:2q;1r:2i;p-2h:2d;1v:-2b 28 0 0&quot;&gt;&lt;a G=&quot;27 1z 26 24 S v 23&quot; 19=&quot;1C://22.21.1Z/1X/11/1V-1Q-1z-S-1J.1L&quot; 2y=&quot;1M&quot;&gt;&lt;p 1N=&quot;#1O&quot;&gt;1P 1I 1J!&lt;/p&gt;&lt;/a&gt;&lt;/H&gt;&lt;1R/&gt;\&#39;);2.u(\&#39;&lt;B 9=&quot;1S: 1T;&quot;/&gt;\&#39;);1U(i&lt;8.6&amp;&amp;i&lt;20&amp;&amp;i&lt;1W){2.u(\&#39;&lt;a 9=&quot;1G-1Y:18;17:16;1r:N;\&#39;);7(i!=0)2.u(\&#39;14-N:25 0.16 \&#39;+b+\&#39;;&quot;\&#39;);q 2.u(\&#39;&quot;\&#39;);2.u(\&#39; 19=&quot;\&#39;+m[r]+\&#39;&quot; G=&quot;\&#39;+8[r]+\&#39;&quot;&gt;&lt;1o 9=&quot;1A:1y;13:1y;14:29;&quot; 1E=&quot;\&#39;+n[r]+\&#39;&quot;/&gt;&lt;2a/&gt;&lt;B 9=&quot;1w-1A:2c;17-N:1u;2e:2f;1w-13:2g;14: 12 18 ; 1v: 1u 12 16 0; 17: 12; p-9: K; p-2j: K; p-2k: K; p-X: 2l; 2m-13: K; p-X-2n: 18; p-2o: K;&quot;&gt;\&#39;+8[r]+\&#39; ...&lt;/B&gt;&lt;/a&gt;\&#39;);i++;7(r&lt;8.6-1){r++}q{r=0}}2.u(\&#39;&lt;/B&gt;&lt;/B&gt;\&#39;);m.z(0,m.6);n.z(0,n.6);8.z(0,8.6)}g 2p(a){3 b,i,h;7(!2.C||!2.J)F;1f();h=2.1e(&quot;H&quot;);h.T=&quot;y&quot;;h.L(&quot;T&quot;,&quot;y&quot;);h.9.2x=&quot;1K&quot;;2.J(&quot;W&quot;)[0].w(h);7(a==R)b=2.J(&quot;a&quot;);q b=2.C(a).J(&quot;a&quot;);v(i=0;i&lt;b.6;i++){1q(b[i])}}g 1q(a){3 c,t,s,b,l;t=a.2E(&quot;G&quot;);7(t==R||t.6==0)F;a.2F(&quot;G&quot;);c=E(&quot;H&quot;,&quot;15&quot;);s=E(&quot;H&quot;,&quot;1j&quot;);s.w(2.2J(t));c.w(s);b=E(&quot;b&quot;,&quot;2K&quot;);c.w(b);1h(c);a.15=c;a.2M=1g;a.2O=1c;a.2Q=V}g 1g(e){2.C(&quot;y&quot;).w(1I.15);V(e)}g 1c(e){3 d=2.C(&quot;y&quot;);7(d.2S.6&gt;0)d.2T(d.2U)}g 1h(a){a.9.2V=&quot;2W(1a:M)&quot;;a.9.2Z=&quot;0.M&quot;;a.9.30=&quot;0.M&quot;;a.9.1a=&quot;0.M&quot;}g E(t,c){3 x=2.1e(t);x.32=c;x.9.33=&quot;34&quot;;F(x)}g 1f(){3 l=E(&quot;O&quot;);l.L(&quot;36&quot;,&quot;1G/37&quot;);l.L(&quot;1p&quot;,&quot;38&quot;);l.L(&quot;1b&quot;,&quot;39&quot;);2.J(&quot;3a&quot;)[0].w(l)}g V(e){3 a=0,I=0;7(e==R)e=3b.3c;7(e.1l||e.1k){a=e.1l;I=e.1k}q 7(e.Z||e.Y){7(2.U.P){a=e.Z+2.U.1F;I=e.Y+2.U.P}q{a=e.Z+2.W.1F;I=e.Y+2.W.P}}2.C(&quot;y&quot;).9.1j=(I+10)+&quot;1m&quot;;2.C(&quot;y&quot;).9.N=(a-20)+&quot;1m&quot;}&#39;,62,206,&#39;||document|var|||length|if|relatedTitles|style|||||||function||||||relatedUrls|thumburl|relatedTitlesNum|font|else||||write|for|appendChild||btc|splice|Array|div|getElementById|new|CreateEl|return|title|span|posy|getElementsByTagName|normal|setAttribute|90|left|link|scrollTop|indexOf|null|thumbnail|id|documentElement|Locate|body|size|clientY|clientX|||0pt|height|border|tooltip|5px|padding|none|href|opacity|media|hideTooltip|Math|createElement|AddCss|showTooltip|setOpacity|h2|top|pageY|pageX|px|feed|img|rel|Prepare|float|typeof|defaultnoimage|3px|margin|max|contains_thumbs|100px|post|width|undefined|http|entry|src|scrollLeft|text|splittercolor|this|widget|absolute|html|_blank|color|ff5f00|Grab|related|nobr|clear|both|while|scrolling|maxresults|2011|decoration|net||intert3chmedia|www|Blogger|bubbled|solid|with|Related|33px|0px|br|15px|95px|arial|overflow|hidden|20px|family|right|variant|weight|11px|line|adjust|stretch|enableTooltips|9px|calcList|relatedpoststitle|random|floor|d4eaf2|printRelatedLabels_thumbs|position|target|false|true|removeRelatedDuplicates_thumbs|alternate|substring|getAttribute|removeAttribute|jpg|noimage|s1600|createTextNode|bottom|Vq8oZLnRTVw|onmouseover|AAAAAAAAAHs|onmouseout|TsEgEpZVEbI|onmousemove|WQzi5hugHT8|childNodes|removeChild|firstChild|filter|alpha|com|blogspot|KHTMLOpacity|MozOpacity|bp|className|display|block||type|css|stylesheet|screen|head|window|event|substr|content|error|catch|url|try|related_results_labels_thumbs&#39;.split(&#39;|&#39;),0,{}))<br></td></tr
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
 <a href="/p/tavristasos/source/detail?spec=svn200&amp;r=157">r157</a>
 by tavristasos@gmail.com
 on Jan 27, 2012
 &nbsp; <a href="/p/tavristasos/source/diff?spec=svn200&r=157&amp;format=side&amp;path=/trunk/rp-bubbled-thumbnails.js&amp;old_path=/trunk/rp-bubbled-thumbnails.js&amp;old=156">Diff</a>
 </div>
 <pre>1</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/tavristasos/source/detail?r=157&spec=svn200';
 var publish_url = '/p/tavristasos/source/detail?r=157&spec=svn200#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/rp-bubbled-thumbnails.js');
 changed_urls.push('/p/tavristasos/source/browse/trunk/rp-bubbled-thumbnails.js?r\x3d157\x26spec\x3dsvn200');
 
 var selected_path = '/trunk/rp-bubbled-thumbnails.js';
 
 
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
 
 <option value="/p/tavristasos/source/browse/trunk/rp-bubbled-thumbnails.js?r=157&amp;spec=svn200"
 selected="selected"
 >/trunk/rp-bubbled-thumbnails.js</option>
 
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
 
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/tavristasos/source/detail?spec=svn200&r=156">r156</a>
 by tavristasos@gmail.com
 on Jan 27, 2012
 &nbsp; <a href="/p/tavristasos/source/diff?spec=svn200&r=156&amp;format=side&amp;path=/trunk/rp-bubbled-thumbnails.js&amp;old_path=/trunk/rp-bubbled-thumbnails.js&amp;old=155">Diff</a>
 <br>
 <pre class="ifOpened">1</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/tavristasos/source/detail?spec=svn200&r=155">r155</a>
 by tavristasos@gmail.com
 on Jan 27, 2012
 &nbsp; <a href="/p/tavristasos/source/diff?spec=svn200&r=155&amp;format=side&amp;path=/trunk/rp-bubbled-thumbnails.js&amp;old_path=/trunk/rp-bubbled-thumbnails.js&amp;old=154">Diff</a>
 <br>
 <pre class="ifOpened">1</pre>
 </div>
 
 <div class="closed" style="margin-bottom:3px;" >
 <a class="ifClosed" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/plus.gif" ></a>
 <a class="ifOpened" onclick="return _toggleHidden(this)"><img src="https://ssl.gstatic.com/codesite/ph/images/minus.gif" ></a>
 <a href="/p/tavristasos/source/detail?spec=svn200&r=154">r154</a>
 by tavristasos@gmail.com
 on Jan 27, 2012
 &nbsp; <a href="/p/tavristasos/source/diff?spec=svn200&r=154&amp;format=side&amp;path=/trunk/rp-bubbled-thumbnails.js&amp;old_path=/trunk/rp-bubbled-thumbnails.js&amp;old=153">Diff</a>
 <br>
 <pre class="ifOpened">1</pre>
 </div>
 
 
 <a href="/p/tavristasos/source/list?path=/trunk/rp-bubbled-thumbnails.js&start=157">All revisions of this file</a>
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
 
 <div>Size: 4209 bytes,
 6 lines</div>
 
 <div><a href="//tavristasos.googlecode.com/svn/trunk/rp-bubbled-thumbnails.js">View raw file</a></div>
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
 var paths = {'svn200': '/trunk/rp-bubbled-thumbnails.js'}
 codereviews = CR_controller.setup(
 {"assetHostPath": "https://ssl.gstatic.com/codesite/ph", "token": "ABZ6GAeWKuOWnHamH4TMEu-Nqun4bHk04g:1417533142723", "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/1729405847801014513", "domainName": null, "relativeBaseUrl": "", "loggedInUserEmail": "tavristasos@gmail.com", "projectName": "tavristasos", "profileUrl": "/u/105438543774775363520/", "projectHomeUrl": "/p/tavristasos"}, '', 'svn200', paths,
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

