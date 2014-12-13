



<!DOCTYPE html>
<html>
<head>
 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" >
 <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" >
 
 <meta name="ROBOTS" content="NOARCHIVE">
 
 <link rel="icon" type="image/vnd.microsoft.icon" href="https://ssl.gstatic.com/codesite/ph/images/phosting.ico">
 
 
 <script type="text/javascript">
 
 
 
 
 var codesite_token = "ABZ6GAdiYQ-UOzLps4BeNH5Xu6hJ9OmSPA:1417533013796";
 
 
 var CS_env = {"profileUrl": "/u/105438543774775363520/", "projectName": "tavristasos", "token": "ABZ6GAdiYQ-UOzLps4BeNH5Xu6hJ9OmSPA:1417533013796", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "domainName": null, "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/1729405847801014513", "projectHomeUrl": "/p/tavristasos", "relativeBaseUrl": "", "loggedInUserEmail": "tavristasos@gmail.com"};
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
 
 
 <title>jquery.lightbox-0.5.js - 
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
 | <a href="https://www.google.com/accounts/Logout?continue=https%3A%2F%2Fcode.google.com%2Fp%2Ftavristasos%2Fsource%2Fbrowse%2Ftrunk%2Fjquery.lightbox-0.5.js" 
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
 <span id="crumb_links" class="ifClosed"><a href="/p/tavristasos/source/browse/trunk/">trunk</a><span class="sp">/&nbsp;</span>jquery.lightbox-0.5.js</span>
 
 


 </td>
 
 
 <td nowrap="nowrap" width="33%" align="center">
 <a href="/p/tavristasos/source/browse/trunk/jquery.lightbox-0.5.js?edit=1"
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
><tr id="gr_svn200_33"

><td id="33"><a href="#33">33</a></td></tr
><tr id="gr_svn200_34"

><td id="34"><a href="#34">34</a></td></tr
><tr id="gr_svn200_35"

><td id="35"><a href="#35">35</a></td></tr
><tr id="gr_svn200_36"

><td id="36"><a href="#36">36</a></td></tr
><tr id="gr_svn200_37"

><td id="37"><a href="#37">37</a></td></tr
><tr id="gr_svn200_38"

><td id="38"><a href="#38">38</a></td></tr
><tr id="gr_svn200_39"

><td id="39"><a href="#39">39</a></td></tr
><tr id="gr_svn200_40"

><td id="40"><a href="#40">40</a></td></tr
><tr id="gr_svn200_41"

><td id="41"><a href="#41">41</a></td></tr
><tr id="gr_svn200_42"

><td id="42"><a href="#42">42</a></td></tr
><tr id="gr_svn200_43"

><td id="43"><a href="#43">43</a></td></tr
><tr id="gr_svn200_44"

><td id="44"><a href="#44">44</a></td></tr
><tr id="gr_svn200_45"

><td id="45"><a href="#45">45</a></td></tr
><tr id="gr_svn200_46"

><td id="46"><a href="#46">46</a></td></tr
><tr id="gr_svn200_47"

><td id="47"><a href="#47">47</a></td></tr
><tr id="gr_svn200_48"

><td id="48"><a href="#48">48</a></td></tr
><tr id="gr_svn200_49"

><td id="49"><a href="#49">49</a></td></tr
><tr id="gr_svn200_50"

><td id="50"><a href="#50">50</a></td></tr
><tr id="gr_svn200_51"

><td id="51"><a href="#51">51</a></td></tr
><tr id="gr_svn200_52"

><td id="52"><a href="#52">52</a></td></tr
><tr id="gr_svn200_53"

><td id="53"><a href="#53">53</a></td></tr
><tr id="gr_svn200_54"

><td id="54"><a href="#54">54</a></td></tr
><tr id="gr_svn200_55"

><td id="55"><a href="#55">55</a></td></tr
><tr id="gr_svn200_56"

><td id="56"><a href="#56">56</a></td></tr
><tr id="gr_svn200_57"

><td id="57"><a href="#57">57</a></td></tr
><tr id="gr_svn200_58"

><td id="58"><a href="#58">58</a></td></tr
><tr id="gr_svn200_59"

><td id="59"><a href="#59">59</a></td></tr
><tr id="gr_svn200_60"

><td id="60"><a href="#60">60</a></td></tr
><tr id="gr_svn200_61"

><td id="61"><a href="#61">61</a></td></tr
><tr id="gr_svn200_62"

><td id="62"><a href="#62">62</a></td></tr
><tr id="gr_svn200_63"

><td id="63"><a href="#63">63</a></td></tr
><tr id="gr_svn200_64"

><td id="64"><a href="#64">64</a></td></tr
><tr id="gr_svn200_65"

><td id="65"><a href="#65">65</a></td></tr
><tr id="gr_svn200_66"

><td id="66"><a href="#66">66</a></td></tr
><tr id="gr_svn200_67"

><td id="67"><a href="#67">67</a></td></tr
><tr id="gr_svn200_68"

><td id="68"><a href="#68">68</a></td></tr
><tr id="gr_svn200_69"

><td id="69"><a href="#69">69</a></td></tr
><tr id="gr_svn200_70"

><td id="70"><a href="#70">70</a></td></tr
><tr id="gr_svn200_71"

><td id="71"><a href="#71">71</a></td></tr
><tr id="gr_svn200_72"

><td id="72"><a href="#72">72</a></td></tr
><tr id="gr_svn200_73"

><td id="73"><a href="#73">73</a></td></tr
><tr id="gr_svn200_74"

><td id="74"><a href="#74">74</a></td></tr
><tr id="gr_svn200_75"

><td id="75"><a href="#75">75</a></td></tr
><tr id="gr_svn200_76"

><td id="76"><a href="#76">76</a></td></tr
><tr id="gr_svn200_77"

><td id="77"><a href="#77">77</a></td></tr
><tr id="gr_svn200_78"

><td id="78"><a href="#78">78</a></td></tr
><tr id="gr_svn200_79"

><td id="79"><a href="#79">79</a></td></tr
><tr id="gr_svn200_80"

><td id="80"><a href="#80">80</a></td></tr
><tr id="gr_svn200_81"

><td id="81"><a href="#81">81</a></td></tr
><tr id="gr_svn200_82"

><td id="82"><a href="#82">82</a></td></tr
><tr id="gr_svn200_83"

><td id="83"><a href="#83">83</a></td></tr
><tr id="gr_svn200_84"

><td id="84"><a href="#84">84</a></td></tr
><tr id="gr_svn200_85"

><td id="85"><a href="#85">85</a></td></tr
><tr id="gr_svn200_86"

><td id="86"><a href="#86">86</a></td></tr
><tr id="gr_svn200_87"

><td id="87"><a href="#87">87</a></td></tr
><tr id="gr_svn200_88"

><td id="88"><a href="#88">88</a></td></tr
><tr id="gr_svn200_89"

><td id="89"><a href="#89">89</a></td></tr
><tr id="gr_svn200_90"

><td id="90"><a href="#90">90</a></td></tr
><tr id="gr_svn200_91"

><td id="91"><a href="#91">91</a></td></tr
><tr id="gr_svn200_92"

><td id="92"><a href="#92">92</a></td></tr
><tr id="gr_svn200_93"

><td id="93"><a href="#93">93</a></td></tr
><tr id="gr_svn200_94"

><td id="94"><a href="#94">94</a></td></tr
><tr id="gr_svn200_95"

><td id="95"><a href="#95">95</a></td></tr
><tr id="gr_svn200_96"

><td id="96"><a href="#96">96</a></td></tr
><tr id="gr_svn200_97"

><td id="97"><a href="#97">97</a></td></tr
><tr id="gr_svn200_98"

><td id="98"><a href="#98">98</a></td></tr
><tr id="gr_svn200_99"

><td id="99"><a href="#99">99</a></td></tr
><tr id="gr_svn200_100"

><td id="100"><a href="#100">100</a></td></tr
><tr id="gr_svn200_101"

><td id="101"><a href="#101">101</a></td></tr
><tr id="gr_svn200_102"

><td id="102"><a href="#102">102</a></td></tr
><tr id="gr_svn200_103"

><td id="103"><a href="#103">103</a></td></tr
><tr id="gr_svn200_104"

><td id="104"><a href="#104">104</a></td></tr
><tr id="gr_svn200_105"

><td id="105"><a href="#105">105</a></td></tr
><tr id="gr_svn200_106"

><td id="106"><a href="#106">106</a></td></tr
><tr id="gr_svn200_107"

><td id="107"><a href="#107">107</a></td></tr
><tr id="gr_svn200_108"

><td id="108"><a href="#108">108</a></td></tr
><tr id="gr_svn200_109"

><td id="109"><a href="#109">109</a></td></tr
><tr id="gr_svn200_110"

><td id="110"><a href="#110">110</a></td></tr
><tr id="gr_svn200_111"

><td id="111"><a href="#111">111</a></td></tr
><tr id="gr_svn200_112"

><td id="112"><a href="#112">112</a></td></tr
><tr id="gr_svn200_113"

><td id="113"><a href="#113">113</a></td></tr
><tr id="gr_svn200_114"

><td id="114"><a href="#114">114</a></td></tr
><tr id="gr_svn200_115"

><td id="115"><a href="#115">115</a></td></tr
><tr id="gr_svn200_116"

><td id="116"><a href="#116">116</a></td></tr
><tr id="gr_svn200_117"

><td id="117"><a href="#117">117</a></td></tr
><tr id="gr_svn200_118"

><td id="118"><a href="#118">118</a></td></tr
><tr id="gr_svn200_119"

><td id="119"><a href="#119">119</a></td></tr
><tr id="gr_svn200_120"

><td id="120"><a href="#120">120</a></td></tr
><tr id="gr_svn200_121"

><td id="121"><a href="#121">121</a></td></tr
><tr id="gr_svn200_122"

><td id="122"><a href="#122">122</a></td></tr
><tr id="gr_svn200_123"

><td id="123"><a href="#123">123</a></td></tr
><tr id="gr_svn200_124"

><td id="124"><a href="#124">124</a></td></tr
><tr id="gr_svn200_125"

><td id="125"><a href="#125">125</a></td></tr
><tr id="gr_svn200_126"

><td id="126"><a href="#126">126</a></td></tr
><tr id="gr_svn200_127"

><td id="127"><a href="#127">127</a></td></tr
><tr id="gr_svn200_128"

><td id="128"><a href="#128">128</a></td></tr
><tr id="gr_svn200_129"

><td id="129"><a href="#129">129</a></td></tr
><tr id="gr_svn200_130"

><td id="130"><a href="#130">130</a></td></tr
><tr id="gr_svn200_131"

><td id="131"><a href="#131">131</a></td></tr
><tr id="gr_svn200_132"

><td id="132"><a href="#132">132</a></td></tr
><tr id="gr_svn200_133"

><td id="133"><a href="#133">133</a></td></tr
><tr id="gr_svn200_134"

><td id="134"><a href="#134">134</a></td></tr
><tr id="gr_svn200_135"

><td id="135"><a href="#135">135</a></td></tr
><tr id="gr_svn200_136"

><td id="136"><a href="#136">136</a></td></tr
><tr id="gr_svn200_137"

><td id="137"><a href="#137">137</a></td></tr
><tr id="gr_svn200_138"

><td id="138"><a href="#138">138</a></td></tr
><tr id="gr_svn200_139"

><td id="139"><a href="#139">139</a></td></tr
><tr id="gr_svn200_140"

><td id="140"><a href="#140">140</a></td></tr
><tr id="gr_svn200_141"

><td id="141"><a href="#141">141</a></td></tr
><tr id="gr_svn200_142"

><td id="142"><a href="#142">142</a></td></tr
><tr id="gr_svn200_143"

><td id="143"><a href="#143">143</a></td></tr
><tr id="gr_svn200_144"

><td id="144"><a href="#144">144</a></td></tr
><tr id="gr_svn200_145"

><td id="145"><a href="#145">145</a></td></tr
><tr id="gr_svn200_146"

><td id="146"><a href="#146">146</a></td></tr
><tr id="gr_svn200_147"

><td id="147"><a href="#147">147</a></td></tr
><tr id="gr_svn200_148"

><td id="148"><a href="#148">148</a></td></tr
><tr id="gr_svn200_149"

><td id="149"><a href="#149">149</a></td></tr
><tr id="gr_svn200_150"

><td id="150"><a href="#150">150</a></td></tr
><tr id="gr_svn200_151"

><td id="151"><a href="#151">151</a></td></tr
><tr id="gr_svn200_152"

><td id="152"><a href="#152">152</a></td></tr
><tr id="gr_svn200_153"

><td id="153"><a href="#153">153</a></td></tr
><tr id="gr_svn200_154"

><td id="154"><a href="#154">154</a></td></tr
><tr id="gr_svn200_155"

><td id="155"><a href="#155">155</a></td></tr
><tr id="gr_svn200_156"

><td id="156"><a href="#156">156</a></td></tr
><tr id="gr_svn200_157"

><td id="157"><a href="#157">157</a></td></tr
><tr id="gr_svn200_158"

><td id="158"><a href="#158">158</a></td></tr
><tr id="gr_svn200_159"

><td id="159"><a href="#159">159</a></td></tr
><tr id="gr_svn200_160"

><td id="160"><a href="#160">160</a></td></tr
><tr id="gr_svn200_161"

><td id="161"><a href="#161">161</a></td></tr
><tr id="gr_svn200_162"

><td id="162"><a href="#162">162</a></td></tr
><tr id="gr_svn200_163"

><td id="163"><a href="#163">163</a></td></tr
><tr id="gr_svn200_164"

><td id="164"><a href="#164">164</a></td></tr
><tr id="gr_svn200_165"

><td id="165"><a href="#165">165</a></td></tr
><tr id="gr_svn200_166"

><td id="166"><a href="#166">166</a></td></tr
><tr id="gr_svn200_167"

><td id="167"><a href="#167">167</a></td></tr
><tr id="gr_svn200_168"

><td id="168"><a href="#168">168</a></td></tr
><tr id="gr_svn200_169"

><td id="169"><a href="#169">169</a></td></tr
><tr id="gr_svn200_170"

><td id="170"><a href="#170">170</a></td></tr
><tr id="gr_svn200_171"

><td id="171"><a href="#171">171</a></td></tr
><tr id="gr_svn200_172"

><td id="172"><a href="#172">172</a></td></tr
><tr id="gr_svn200_173"

><td id="173"><a href="#173">173</a></td></tr
><tr id="gr_svn200_174"

><td id="174"><a href="#174">174</a></td></tr
><tr id="gr_svn200_175"

><td id="175"><a href="#175">175</a></td></tr
><tr id="gr_svn200_176"

><td id="176"><a href="#176">176</a></td></tr
><tr id="gr_svn200_177"

><td id="177"><a href="#177">177</a></td></tr
><tr id="gr_svn200_178"

><td id="178"><a href="#178">178</a></td></tr
><tr id="gr_svn200_179"

><td id="179"><a href="#179">179</a></td></tr
><tr id="gr_svn200_180"

><td id="180"><a href="#180">180</a></td></tr
><tr id="gr_svn200_181"

><td id="181"><a href="#181">181</a></td></tr
><tr id="gr_svn200_182"

><td id="182"><a href="#182">182</a></td></tr
><tr id="gr_svn200_183"

><td id="183"><a href="#183">183</a></td></tr
><tr id="gr_svn200_184"

><td id="184"><a href="#184">184</a></td></tr
><tr id="gr_svn200_185"

><td id="185"><a href="#185">185</a></td></tr
><tr id="gr_svn200_186"

><td id="186"><a href="#186">186</a></td></tr
><tr id="gr_svn200_187"

><td id="187"><a href="#187">187</a></td></tr
><tr id="gr_svn200_188"

><td id="188"><a href="#188">188</a></td></tr
><tr id="gr_svn200_189"

><td id="189"><a href="#189">189</a></td></tr
><tr id="gr_svn200_190"

><td id="190"><a href="#190">190</a></td></tr
><tr id="gr_svn200_191"

><td id="191"><a href="#191">191</a></td></tr
><tr id="gr_svn200_192"

><td id="192"><a href="#192">192</a></td></tr
><tr id="gr_svn200_193"

><td id="193"><a href="#193">193</a></td></tr
><tr id="gr_svn200_194"

><td id="194"><a href="#194">194</a></td></tr
><tr id="gr_svn200_195"

><td id="195"><a href="#195">195</a></td></tr
><tr id="gr_svn200_196"

><td id="196"><a href="#196">196</a></td></tr
><tr id="gr_svn200_197"

><td id="197"><a href="#197">197</a></td></tr
><tr id="gr_svn200_198"

><td id="198"><a href="#198">198</a></td></tr
><tr id="gr_svn200_199"

><td id="199"><a href="#199">199</a></td></tr
><tr id="gr_svn200_200"

><td id="200"><a href="#200">200</a></td></tr
><tr id="gr_svn200_201"

><td id="201"><a href="#201">201</a></td></tr
><tr id="gr_svn200_202"

><td id="202"><a href="#202">202</a></td></tr
><tr id="gr_svn200_203"

><td id="203"><a href="#203">203</a></td></tr
><tr id="gr_svn200_204"

><td id="204"><a href="#204">204</a></td></tr
><tr id="gr_svn200_205"

><td id="205"><a href="#205">205</a></td></tr
><tr id="gr_svn200_206"

><td id="206"><a href="#206">206</a></td></tr
><tr id="gr_svn200_207"

><td id="207"><a href="#207">207</a></td></tr
><tr id="gr_svn200_208"

><td id="208"><a href="#208">208</a></td></tr
><tr id="gr_svn200_209"

><td id="209"><a href="#209">209</a></td></tr
><tr id="gr_svn200_210"

><td id="210"><a href="#210">210</a></td></tr
><tr id="gr_svn200_211"

><td id="211"><a href="#211">211</a></td></tr
><tr id="gr_svn200_212"

><td id="212"><a href="#212">212</a></td></tr
><tr id="gr_svn200_213"

><td id="213"><a href="#213">213</a></td></tr
><tr id="gr_svn200_214"

><td id="214"><a href="#214">214</a></td></tr
><tr id="gr_svn200_215"

><td id="215"><a href="#215">215</a></td></tr
><tr id="gr_svn200_216"

><td id="216"><a href="#216">216</a></td></tr
><tr id="gr_svn200_217"

><td id="217"><a href="#217">217</a></td></tr
><tr id="gr_svn200_218"

><td id="218"><a href="#218">218</a></td></tr
><tr id="gr_svn200_219"

><td id="219"><a href="#219">219</a></td></tr
><tr id="gr_svn200_220"

><td id="220"><a href="#220">220</a></td></tr
><tr id="gr_svn200_221"

><td id="221"><a href="#221">221</a></td></tr
><tr id="gr_svn200_222"

><td id="222"><a href="#222">222</a></td></tr
><tr id="gr_svn200_223"

><td id="223"><a href="#223">223</a></td></tr
><tr id="gr_svn200_224"

><td id="224"><a href="#224">224</a></td></tr
><tr id="gr_svn200_225"

><td id="225"><a href="#225">225</a></td></tr
><tr id="gr_svn200_226"

><td id="226"><a href="#226">226</a></td></tr
><tr id="gr_svn200_227"

><td id="227"><a href="#227">227</a></td></tr
><tr id="gr_svn200_228"

><td id="228"><a href="#228">228</a></td></tr
><tr id="gr_svn200_229"

><td id="229"><a href="#229">229</a></td></tr
><tr id="gr_svn200_230"

><td id="230"><a href="#230">230</a></td></tr
><tr id="gr_svn200_231"

><td id="231"><a href="#231">231</a></td></tr
><tr id="gr_svn200_232"

><td id="232"><a href="#232">232</a></td></tr
><tr id="gr_svn200_233"

><td id="233"><a href="#233">233</a></td></tr
><tr id="gr_svn200_234"

><td id="234"><a href="#234">234</a></td></tr
><tr id="gr_svn200_235"

><td id="235"><a href="#235">235</a></td></tr
><tr id="gr_svn200_236"

><td id="236"><a href="#236">236</a></td></tr
><tr id="gr_svn200_237"

><td id="237"><a href="#237">237</a></td></tr
><tr id="gr_svn200_238"

><td id="238"><a href="#238">238</a></td></tr
><tr id="gr_svn200_239"

><td id="239"><a href="#239">239</a></td></tr
><tr id="gr_svn200_240"

><td id="240"><a href="#240">240</a></td></tr
><tr id="gr_svn200_241"

><td id="241"><a href="#241">241</a></td></tr
><tr id="gr_svn200_242"

><td id="242"><a href="#242">242</a></td></tr
><tr id="gr_svn200_243"

><td id="243"><a href="#243">243</a></td></tr
><tr id="gr_svn200_244"

><td id="244"><a href="#244">244</a></td></tr
><tr id="gr_svn200_245"

><td id="245"><a href="#245">245</a></td></tr
><tr id="gr_svn200_246"

><td id="246"><a href="#246">246</a></td></tr
><tr id="gr_svn200_247"

><td id="247"><a href="#247">247</a></td></tr
><tr id="gr_svn200_248"

><td id="248"><a href="#248">248</a></td></tr
><tr id="gr_svn200_249"

><td id="249"><a href="#249">249</a></td></tr
><tr id="gr_svn200_250"

><td id="250"><a href="#250">250</a></td></tr
><tr id="gr_svn200_251"

><td id="251"><a href="#251">251</a></td></tr
><tr id="gr_svn200_252"

><td id="252"><a href="#252">252</a></td></tr
><tr id="gr_svn200_253"

><td id="253"><a href="#253">253</a></td></tr
><tr id="gr_svn200_254"

><td id="254"><a href="#254">254</a></td></tr
><tr id="gr_svn200_255"

><td id="255"><a href="#255">255</a></td></tr
><tr id="gr_svn200_256"

><td id="256"><a href="#256">256</a></td></tr
><tr id="gr_svn200_257"

><td id="257"><a href="#257">257</a></td></tr
><tr id="gr_svn200_258"

><td id="258"><a href="#258">258</a></td></tr
><tr id="gr_svn200_259"

><td id="259"><a href="#259">259</a></td></tr
><tr id="gr_svn200_260"

><td id="260"><a href="#260">260</a></td></tr
><tr id="gr_svn200_261"

><td id="261"><a href="#261">261</a></td></tr
><tr id="gr_svn200_262"

><td id="262"><a href="#262">262</a></td></tr
><tr id="gr_svn200_263"

><td id="263"><a href="#263">263</a></td></tr
><tr id="gr_svn200_264"

><td id="264"><a href="#264">264</a></td></tr
><tr id="gr_svn200_265"

><td id="265"><a href="#265">265</a></td></tr
><tr id="gr_svn200_266"

><td id="266"><a href="#266">266</a></td></tr
><tr id="gr_svn200_267"

><td id="267"><a href="#267">267</a></td></tr
><tr id="gr_svn200_268"

><td id="268"><a href="#268">268</a></td></tr
><tr id="gr_svn200_269"

><td id="269"><a href="#269">269</a></td></tr
><tr id="gr_svn200_270"

><td id="270"><a href="#270">270</a></td></tr
><tr id="gr_svn200_271"

><td id="271"><a href="#271">271</a></td></tr
><tr id="gr_svn200_272"

><td id="272"><a href="#272">272</a></td></tr
><tr id="gr_svn200_273"

><td id="273"><a href="#273">273</a></td></tr
><tr id="gr_svn200_274"

><td id="274"><a href="#274">274</a></td></tr
><tr id="gr_svn200_275"

><td id="275"><a href="#275">275</a></td></tr
><tr id="gr_svn200_276"

><td id="276"><a href="#276">276</a></td></tr
><tr id="gr_svn200_277"

><td id="277"><a href="#277">277</a></td></tr
><tr id="gr_svn200_278"

><td id="278"><a href="#278">278</a></td></tr
><tr id="gr_svn200_279"

><td id="279"><a href="#279">279</a></td></tr
><tr id="gr_svn200_280"

><td id="280"><a href="#280">280</a></td></tr
><tr id="gr_svn200_281"

><td id="281"><a href="#281">281</a></td></tr
><tr id="gr_svn200_282"

><td id="282"><a href="#282">282</a></td></tr
><tr id="gr_svn200_283"

><td id="283"><a href="#283">283</a></td></tr
><tr id="gr_svn200_284"

><td id="284"><a href="#284">284</a></td></tr
><tr id="gr_svn200_285"

><td id="285"><a href="#285">285</a></td></tr
><tr id="gr_svn200_286"

><td id="286"><a href="#286">286</a></td></tr
><tr id="gr_svn200_287"

><td id="287"><a href="#287">287</a></td></tr
><tr id="gr_svn200_288"

><td id="288"><a href="#288">288</a></td></tr
><tr id="gr_svn200_289"

><td id="289"><a href="#289">289</a></td></tr
><tr id="gr_svn200_290"

><td id="290"><a href="#290">290</a></td></tr
><tr id="gr_svn200_291"

><td id="291"><a href="#291">291</a></td></tr
><tr id="gr_svn200_292"

><td id="292"><a href="#292">292</a></td></tr
><tr id="gr_svn200_293"

><td id="293"><a href="#293">293</a></td></tr
><tr id="gr_svn200_294"

><td id="294"><a href="#294">294</a></td></tr
><tr id="gr_svn200_295"

><td id="295"><a href="#295">295</a></td></tr
><tr id="gr_svn200_296"

><td id="296"><a href="#296">296</a></td></tr
><tr id="gr_svn200_297"

><td id="297"><a href="#297">297</a></td></tr
><tr id="gr_svn200_298"

><td id="298"><a href="#298">298</a></td></tr
><tr id="gr_svn200_299"

><td id="299"><a href="#299">299</a></td></tr
><tr id="gr_svn200_300"

><td id="300"><a href="#300">300</a></td></tr
><tr id="gr_svn200_301"

><td id="301"><a href="#301">301</a></td></tr
><tr id="gr_svn200_302"

><td id="302"><a href="#302">302</a></td></tr
><tr id="gr_svn200_303"

><td id="303"><a href="#303">303</a></td></tr
><tr id="gr_svn200_304"

><td id="304"><a href="#304">304</a></td></tr
><tr id="gr_svn200_305"

><td id="305"><a href="#305">305</a></td></tr
><tr id="gr_svn200_306"

><td id="306"><a href="#306">306</a></td></tr
><tr id="gr_svn200_307"

><td id="307"><a href="#307">307</a></td></tr
><tr id="gr_svn200_308"

><td id="308"><a href="#308">308</a></td></tr
><tr id="gr_svn200_309"

><td id="309"><a href="#309">309</a></td></tr
><tr id="gr_svn200_310"

><td id="310"><a href="#310">310</a></td></tr
><tr id="gr_svn200_311"

><td id="311"><a href="#311">311</a></td></tr
><tr id="gr_svn200_312"

><td id="312"><a href="#312">312</a></td></tr
><tr id="gr_svn200_313"

><td id="313"><a href="#313">313</a></td></tr
><tr id="gr_svn200_314"

><td id="314"><a href="#314">314</a></td></tr
><tr id="gr_svn200_315"

><td id="315"><a href="#315">315</a></td></tr
><tr id="gr_svn200_316"

><td id="316"><a href="#316">316</a></td></tr
><tr id="gr_svn200_317"

><td id="317"><a href="#317">317</a></td></tr
><tr id="gr_svn200_318"

><td id="318"><a href="#318">318</a></td></tr
><tr id="gr_svn200_319"

><td id="319"><a href="#319">319</a></td></tr
><tr id="gr_svn200_320"

><td id="320"><a href="#320">320</a></td></tr
><tr id="gr_svn200_321"

><td id="321"><a href="#321">321</a></td></tr
><tr id="gr_svn200_322"

><td id="322"><a href="#322">322</a></td></tr
><tr id="gr_svn200_323"

><td id="323"><a href="#323">323</a></td></tr
><tr id="gr_svn200_324"

><td id="324"><a href="#324">324</a></td></tr
><tr id="gr_svn200_325"

><td id="325"><a href="#325">325</a></td></tr
><tr id="gr_svn200_326"

><td id="326"><a href="#326">326</a></td></tr
><tr id="gr_svn200_327"

><td id="327"><a href="#327">327</a></td></tr
><tr id="gr_svn200_328"

><td id="328"><a href="#328">328</a></td></tr
><tr id="gr_svn200_329"

><td id="329"><a href="#329">329</a></td></tr
><tr id="gr_svn200_330"

><td id="330"><a href="#330">330</a></td></tr
><tr id="gr_svn200_331"

><td id="331"><a href="#331">331</a></td></tr
><tr id="gr_svn200_332"

><td id="332"><a href="#332">332</a></td></tr
><tr id="gr_svn200_333"

><td id="333"><a href="#333">333</a></td></tr
><tr id="gr_svn200_334"

><td id="334"><a href="#334">334</a></td></tr
><tr id="gr_svn200_335"

><td id="335"><a href="#335">335</a></td></tr
><tr id="gr_svn200_336"

><td id="336"><a href="#336">336</a></td></tr
><tr id="gr_svn200_337"

><td id="337"><a href="#337">337</a></td></tr
><tr id="gr_svn200_338"

><td id="338"><a href="#338">338</a></td></tr
><tr id="gr_svn200_339"

><td id="339"><a href="#339">339</a></td></tr
><tr id="gr_svn200_340"

><td id="340"><a href="#340">340</a></td></tr
><tr id="gr_svn200_341"

><td id="341"><a href="#341">341</a></td></tr
><tr id="gr_svn200_342"

><td id="342"><a href="#342">342</a></td></tr
><tr id="gr_svn200_343"

><td id="343"><a href="#343">343</a></td></tr
><tr id="gr_svn200_344"

><td id="344"><a href="#344">344</a></td></tr
><tr id="gr_svn200_345"

><td id="345"><a href="#345">345</a></td></tr
><tr id="gr_svn200_346"

><td id="346"><a href="#346">346</a></td></tr
><tr id="gr_svn200_347"

><td id="347"><a href="#347">347</a></td></tr
><tr id="gr_svn200_348"

><td id="348"><a href="#348">348</a></td></tr
><tr id="gr_svn200_349"

><td id="349"><a href="#349">349</a></td></tr
><tr id="gr_svn200_350"

><td id="350"><a href="#350">350</a></td></tr
><tr id="gr_svn200_351"

><td id="351"><a href="#351">351</a></td></tr
><tr id="gr_svn200_352"

><td id="352"><a href="#352">352</a></td></tr
><tr id="gr_svn200_353"

><td id="353"><a href="#353">353</a></td></tr
><tr id="gr_svn200_354"

><td id="354"><a href="#354">354</a></td></tr
><tr id="gr_svn200_355"

><td id="355"><a href="#355">355</a></td></tr
><tr id="gr_svn200_356"

><td id="356"><a href="#356">356</a></td></tr
><tr id="gr_svn200_357"

><td id="357"><a href="#357">357</a></td></tr
><tr id="gr_svn200_358"

><td id="358"><a href="#358">358</a></td></tr
><tr id="gr_svn200_359"

><td id="359"><a href="#359">359</a></td></tr
><tr id="gr_svn200_360"

><td id="360"><a href="#360">360</a></td></tr
><tr id="gr_svn200_361"

><td id="361"><a href="#361">361</a></td></tr
><tr id="gr_svn200_362"

><td id="362"><a href="#362">362</a></td></tr
><tr id="gr_svn200_363"

><td id="363"><a href="#363">363</a></td></tr
><tr id="gr_svn200_364"

><td id="364"><a href="#364">364</a></td></tr
><tr id="gr_svn200_365"

><td id="365"><a href="#365">365</a></td></tr
><tr id="gr_svn200_366"

><td id="366"><a href="#366">366</a></td></tr
><tr id="gr_svn200_367"

><td id="367"><a href="#367">367</a></td></tr
><tr id="gr_svn200_368"

><td id="368"><a href="#368">368</a></td></tr
><tr id="gr_svn200_369"

><td id="369"><a href="#369">369</a></td></tr
><tr id="gr_svn200_370"

><td id="370"><a href="#370">370</a></td></tr
><tr id="gr_svn200_371"

><td id="371"><a href="#371">371</a></td></tr
><tr id="gr_svn200_372"

><td id="372"><a href="#372">372</a></td></tr
><tr id="gr_svn200_373"

><td id="373"><a href="#373">373</a></td></tr
><tr id="gr_svn200_374"

><td id="374"><a href="#374">374</a></td></tr
><tr id="gr_svn200_375"

><td id="375"><a href="#375">375</a></td></tr
><tr id="gr_svn200_376"

><td id="376"><a href="#376">376</a></td></tr
><tr id="gr_svn200_377"

><td id="377"><a href="#377">377</a></td></tr
><tr id="gr_svn200_378"

><td id="378"><a href="#378">378</a></td></tr
><tr id="gr_svn200_379"

><td id="379"><a href="#379">379</a></td></tr
><tr id="gr_svn200_380"

><td id="380"><a href="#380">380</a></td></tr
><tr id="gr_svn200_381"

><td id="381"><a href="#381">381</a></td></tr
><tr id="gr_svn200_382"

><td id="382"><a href="#382">382</a></td></tr
><tr id="gr_svn200_383"

><td id="383"><a href="#383">383</a></td></tr
><tr id="gr_svn200_384"

><td id="384"><a href="#384">384</a></td></tr
><tr id="gr_svn200_385"

><td id="385"><a href="#385">385</a></td></tr
><tr id="gr_svn200_386"

><td id="386"><a href="#386">386</a></td></tr
><tr id="gr_svn200_387"

><td id="387"><a href="#387">387</a></td></tr
><tr id="gr_svn200_388"

><td id="388"><a href="#388">388</a></td></tr
><tr id="gr_svn200_389"

><td id="389"><a href="#389">389</a></td></tr
><tr id="gr_svn200_390"

><td id="390"><a href="#390">390</a></td></tr
><tr id="gr_svn200_391"

><td id="391"><a href="#391">391</a></td></tr
><tr id="gr_svn200_392"

><td id="392"><a href="#392">392</a></td></tr
><tr id="gr_svn200_393"

><td id="393"><a href="#393">393</a></td></tr
><tr id="gr_svn200_394"

><td id="394"><a href="#394">394</a></td></tr
><tr id="gr_svn200_395"

><td id="395"><a href="#395">395</a></td></tr
><tr id="gr_svn200_396"

><td id="396"><a href="#396">396</a></td></tr
><tr id="gr_svn200_397"

><td id="397"><a href="#397">397</a></td></tr
><tr id="gr_svn200_398"

><td id="398"><a href="#398">398</a></td></tr
><tr id="gr_svn200_399"

><td id="399"><a href="#399">399</a></td></tr
><tr id="gr_svn200_400"

><td id="400"><a href="#400">400</a></td></tr
><tr id="gr_svn200_401"

><td id="401"><a href="#401">401</a></td></tr
><tr id="gr_svn200_402"

><td id="402"><a href="#402">402</a></td></tr
><tr id="gr_svn200_403"

><td id="403"><a href="#403">403</a></td></tr
><tr id="gr_svn200_404"

><td id="404"><a href="#404">404</a></td></tr
><tr id="gr_svn200_405"

><td id="405"><a href="#405">405</a></td></tr
><tr id="gr_svn200_406"

><td id="406"><a href="#406">406</a></td></tr
><tr id="gr_svn200_407"

><td id="407"><a href="#407">407</a></td></tr
><tr id="gr_svn200_408"

><td id="408"><a href="#408">408</a></td></tr
><tr id="gr_svn200_409"

><td id="409"><a href="#409">409</a></td></tr
><tr id="gr_svn200_410"

><td id="410"><a href="#410">410</a></td></tr
><tr id="gr_svn200_411"

><td id="411"><a href="#411">411</a></td></tr
><tr id="gr_svn200_412"

><td id="412"><a href="#412">412</a></td></tr
><tr id="gr_svn200_413"

><td id="413"><a href="#413">413</a></td></tr
><tr id="gr_svn200_414"

><td id="414"><a href="#414">414</a></td></tr
><tr id="gr_svn200_415"

><td id="415"><a href="#415">415</a></td></tr
><tr id="gr_svn200_416"

><td id="416"><a href="#416">416</a></td></tr
><tr id="gr_svn200_417"

><td id="417"><a href="#417">417</a></td></tr
><tr id="gr_svn200_418"

><td id="418"><a href="#418">418</a></td></tr
><tr id="gr_svn200_419"

><td id="419"><a href="#419">419</a></td></tr
><tr id="gr_svn200_420"

><td id="420"><a href="#420">420</a></td></tr
><tr id="gr_svn200_421"

><td id="421"><a href="#421">421</a></td></tr
><tr id="gr_svn200_422"

><td id="422"><a href="#422">422</a></td></tr
><tr id="gr_svn200_423"

><td id="423"><a href="#423">423</a></td></tr
><tr id="gr_svn200_424"

><td id="424"><a href="#424">424</a></td></tr
><tr id="gr_svn200_425"

><td id="425"><a href="#425">425</a></td></tr
><tr id="gr_svn200_426"

><td id="426"><a href="#426">426</a></td></tr
><tr id="gr_svn200_427"

><td id="427"><a href="#427">427</a></td></tr
><tr id="gr_svn200_428"

><td id="428"><a href="#428">428</a></td></tr
><tr id="gr_svn200_429"

><td id="429"><a href="#429">429</a></td></tr
><tr id="gr_svn200_430"

><td id="430"><a href="#430">430</a></td></tr
><tr id="gr_svn200_431"

><td id="431"><a href="#431">431</a></td></tr
><tr id="gr_svn200_432"

><td id="432"><a href="#432">432</a></td></tr
><tr id="gr_svn200_433"

><td id="433"><a href="#433">433</a></td></tr
><tr id="gr_svn200_434"

><td id="434"><a href="#434">434</a></td></tr
><tr id="gr_svn200_435"

><td id="435"><a href="#435">435</a></td></tr
><tr id="gr_svn200_436"

><td id="436"><a href="#436">436</a></td></tr
><tr id="gr_svn200_437"

><td id="437"><a href="#437">437</a></td></tr
><tr id="gr_svn200_438"

><td id="438"><a href="#438">438</a></td></tr
><tr id="gr_svn200_439"

><td id="439"><a href="#439">439</a></td></tr
><tr id="gr_svn200_440"

><td id="440"><a href="#440">440</a></td></tr
><tr id="gr_svn200_441"

><td id="441"><a href="#441">441</a></td></tr
><tr id="gr_svn200_442"

><td id="442"><a href="#442">442</a></td></tr
><tr id="gr_svn200_443"

><td id="443"><a href="#443">443</a></td></tr
><tr id="gr_svn200_444"

><td id="444"><a href="#444">444</a></td></tr
><tr id="gr_svn200_445"

><td id="445"><a href="#445">445</a></td></tr
><tr id="gr_svn200_446"

><td id="446"><a href="#446">446</a></td></tr
><tr id="gr_svn200_447"

><td id="447"><a href="#447">447</a></td></tr
><tr id="gr_svn200_448"

><td id="448"><a href="#448">448</a></td></tr
><tr id="gr_svn200_449"

><td id="449"><a href="#449">449</a></td></tr
><tr id="gr_svn200_450"

><td id="450"><a href="#450">450</a></td></tr
><tr id="gr_svn200_451"

><td id="451"><a href="#451">451</a></td></tr
><tr id="gr_svn200_452"

><td id="452"><a href="#452">452</a></td></tr
><tr id="gr_svn200_453"

><td id="453"><a href="#453">453</a></td></tr
><tr id="gr_svn200_454"

><td id="454"><a href="#454">454</a></td></tr
><tr id="gr_svn200_455"

><td id="455"><a href="#455">455</a></td></tr
><tr id="gr_svn200_456"

><td id="456"><a href="#456">456</a></td></tr
><tr id="gr_svn200_457"

><td id="457"><a href="#457">457</a></td></tr
><tr id="gr_svn200_458"

><td id="458"><a href="#458">458</a></td></tr
><tr id="gr_svn200_459"

><td id="459"><a href="#459">459</a></td></tr
><tr id="gr_svn200_460"

><td id="460"><a href="#460">460</a></td></tr
><tr id="gr_svn200_461"

><td id="461"><a href="#461">461</a></td></tr
><tr id="gr_svn200_462"

><td id="462"><a href="#462">462</a></td></tr
><tr id="gr_svn200_463"

><td id="463"><a href="#463">463</a></td></tr
><tr id="gr_svn200_464"

><td id="464"><a href="#464">464</a></td></tr
><tr id="gr_svn200_465"

><td id="465"><a href="#465">465</a></td></tr
><tr id="gr_svn200_466"

><td id="466"><a href="#466">466</a></td></tr
><tr id="gr_svn200_467"

><td id="467"><a href="#467">467</a></td></tr
><tr id="gr_svn200_468"

><td id="468"><a href="#468">468</a></td></tr
><tr id="gr_svn200_469"

><td id="469"><a href="#469">469</a></td></tr
><tr id="gr_svn200_470"

><td id="470"><a href="#470">470</a></td></tr
><tr id="gr_svn200_471"

><td id="471"><a href="#471">471</a></td></tr
><tr id="gr_svn200_472"

><td id="472"><a href="#472">472</a></td></tr
></table></pre>
<pre><table width="100%"><tr class="nocursor"><td></td></tr></table></pre>
</td>
<td id="lines">
<pre><table width="100%"><tr class="cursor_stop cursor_hidden"><td></td></tr></table></pre>
<pre class="prettyprint lang-js"><table id="src_table_0"><tr
id=sl_svn200_1

><td class="source">/**<br></td></tr
><tr
id=sl_svn200_2

><td class="source"> * jQuery lightBox plugin<br></td></tr
><tr
id=sl_svn200_3

><td class="source"> * This jQuery plugin was inspired and based on Lightbox 2 by Lokesh Dhakar (http://www.huddletogether.com/projects/lightbox2/)<br></td></tr
><tr
id=sl_svn200_4

><td class="source"> * and adapted to me for use like a plugin from jQuery.<br></td></tr
><tr
id=sl_svn200_5

><td class="source"> * @name jquery-lightbox-0.5.js<br></td></tr
><tr
id=sl_svn200_6

><td class="source"> * @author Leandro Vieira Pinho - http://leandrovieira.com<br></td></tr
><tr
id=sl_svn200_7

><td class="source"> * @version 0.5<br></td></tr
><tr
id=sl_svn200_8

><td class="source"> * @date April 11, 2008<br></td></tr
><tr
id=sl_svn200_9

><td class="source"> * @category jQuery plugin<br></td></tr
><tr
id=sl_svn200_10

><td class="source"> * @copyright (c) 2008 Leandro Vieira Pinho (leandrovieira.com)<br></td></tr
><tr
id=sl_svn200_11

><td class="source"> * @license CCAttribution-ShareAlike 2.5 Brazil - http://creativecommons.org/licenses/by-sa/2.5/br/deed.en_US<br></td></tr
><tr
id=sl_svn200_12

><td class="source"> * @example Visit http://leandrovieira.com/projects/jquery/lightbox/ for more informations about this jQuery plugin<br></td></tr
><tr
id=sl_svn200_13

><td class="source"> */<br></td></tr
><tr
id=sl_svn200_14

><td class="source"><br></td></tr
><tr
id=sl_svn200_15

><td class="source">// Offering a Custom Alias suport - More info: http://docs.jquery.com/Plugins/Authoring#Custom_Alias<br></td></tr
><tr
id=sl_svn200_16

><td class="source">(function($) {<br></td></tr
><tr
id=sl_svn200_17

><td class="source">	/**<br></td></tr
><tr
id=sl_svn200_18

><td class="source">	 * $ is an alias to jQuery object<br></td></tr
><tr
id=sl_svn200_19

><td class="source">	 *<br></td></tr
><tr
id=sl_svn200_20

><td class="source">	 */<br></td></tr
><tr
id=sl_svn200_21

><td class="source">	$.fn.lightBox = function(settings) {<br></td></tr
><tr
id=sl_svn200_22

><td class="source">		// Settings to configure the jQuery lightBox plugin how you like<br></td></tr
><tr
id=sl_svn200_23

><td class="source">		settings = jQuery.extend({<br></td></tr
><tr
id=sl_svn200_24

><td class="source">			// Configuration related to overlay<br></td></tr
><tr
id=sl_svn200_25

><td class="source">			overlayBgColor: 		&#39;#000&#39;,		// (string) Background color to overlay; inform a hexadecimal value like: #RRGGBB. Where RR, GG, and BB are the hexadecimal values for the red, green, and blue values of the color.<br></td></tr
><tr
id=sl_svn200_26

><td class="source">			overlayOpacity:			0.8,		// (integer) Opacity value to overlay; inform: 0.X. Where X are number from 0 to 9<br></td></tr
><tr
id=sl_svn200_27

><td class="source">			// Configuration related to navigation<br></td></tr
><tr
id=sl_svn200_28

><td class="source">			fixedNavigation:		false,		// (boolean) Boolean that informs if the navigation (next and prev button) will be fixed or not in the interface.<br></td></tr
><tr
id=sl_svn200_29

><td class="source">			// Configuration related to images<br></td></tr
><tr
id=sl_svn200_30

><td class="source">			imageLoading:			&#39;images/lightbox-ico-loading.gif&#39;,		// (string) Path and the name of the loading icon<br></td></tr
><tr
id=sl_svn200_31

><td class="source">			imageBtnPrev:			&#39;images/lightbox-btn-prev.gif&#39;,			// (string) Path and the name of the prev button image<br></td></tr
><tr
id=sl_svn200_32

><td class="source">			imageBtnNext:			&#39;images/lightbox-btn-next.gif&#39;,			// (string) Path and the name of the next button image<br></td></tr
><tr
id=sl_svn200_33

><td class="source">			imageBtnClose:			&#39;images/lightbox-btn-close.gif&#39;,		// (string) Path and the name of the close btn<br></td></tr
><tr
id=sl_svn200_34

><td class="source">			imageBlank:				&#39;images/lightbox-blank.gif&#39;,			// (string) Path and the name of a blank image (one pixel)<br></td></tr
><tr
id=sl_svn200_35

><td class="source">			// Configuration related to container image box<br></td></tr
><tr
id=sl_svn200_36

><td class="source">			containerBorderSize:	10,			// (integer) If you adjust the padding in the CSS for the container, #lightbox-container-image-box, you will need to update this value<br></td></tr
><tr
id=sl_svn200_37

><td class="source">			containerResizeSpeed:	400,		// (integer) Specify the resize duration of container image. These number are miliseconds. 400 is default.<br></td></tr
><tr
id=sl_svn200_38

><td class="source">			// Configuration related to texts in caption. For example: Image 2 of 8. You can alter either &quot;Image&quot; and &quot;of&quot; texts.<br></td></tr
><tr
id=sl_svn200_39

><td class="source">			txtImage:				&#39;Image&#39;,	// (string) Specify text &quot;Image&quot;<br></td></tr
><tr
id=sl_svn200_40

><td class="source">			txtOf:					&#39;of&#39;,		// (string) Specify text &quot;of&quot;<br></td></tr
><tr
id=sl_svn200_41

><td class="source">			// Configuration related to keyboard navigation<br></td></tr
><tr
id=sl_svn200_42

><td class="source">			keyToClose:				&#39;c&#39;,		// (string) (c = close) Letter to close the jQuery lightBox interface. Beyond this letter, the letter X and the SCAPE key is used to.<br></td></tr
><tr
id=sl_svn200_43

><td class="source">			keyToPrev:				&#39;p&#39;,		// (string) (p = previous) Letter to show the previous image<br></td></tr
><tr
id=sl_svn200_44

><td class="source">			keyToNext:				&#39;n&#39;,		// (string) (n = next) Letter to show the next image.<br></td></tr
><tr
id=sl_svn200_45

><td class="source">			// Don´t alter these variables in any way<br></td></tr
><tr
id=sl_svn200_46

><td class="source">			imageArray:				[],<br></td></tr
><tr
id=sl_svn200_47

><td class="source">			activeImage:			0<br></td></tr
><tr
id=sl_svn200_48

><td class="source">		},settings);<br></td></tr
><tr
id=sl_svn200_49

><td class="source">		// Caching the jQuery object with all elements matched<br></td></tr
><tr
id=sl_svn200_50

><td class="source">		var jQueryMatchedObj = this; // This, in this context, refer to jQuery object<br></td></tr
><tr
id=sl_svn200_51

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_52

><td class="source">		 * Initializing the plugin calling the start function<br></td></tr
><tr
id=sl_svn200_53

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_54

><td class="source">		 * @return boolean false<br></td></tr
><tr
id=sl_svn200_55

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_56

><td class="source">		function _initialize() {<br></td></tr
><tr
id=sl_svn200_57

><td class="source">			_start(this,jQueryMatchedObj); // This, in this context, refer to object (link) which the user have clicked<br></td></tr
><tr
id=sl_svn200_58

><td class="source">			return false; // Avoid the browser following the link<br></td></tr
><tr
id=sl_svn200_59

><td class="source">		}<br></td></tr
><tr
id=sl_svn200_60

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_61

><td class="source">		 * Start the jQuery lightBox plugin<br></td></tr
><tr
id=sl_svn200_62

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_63

><td class="source">		 * @param object objClicked The object (link) whick the user have clicked<br></td></tr
><tr
id=sl_svn200_64

><td class="source">		 * @param object jQueryMatchedObj The jQuery object with all elements matched<br></td></tr
><tr
id=sl_svn200_65

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_66

><td class="source">		function _start(objClicked,jQueryMatchedObj) {<br></td></tr
><tr
id=sl_svn200_67

><td class="source">			// Hime some elements to avoid conflict with overlay in IE. These elements appear above the overlay.<br></td></tr
><tr
id=sl_svn200_68

><td class="source">			$(&#39;embed, object, select&#39;).css({ &#39;visibility&#39; : &#39;hidden&#39; });<br></td></tr
><tr
id=sl_svn200_69

><td class="source">			// Call the function to create the markup structure; style some elements; assign events in some elements.<br></td></tr
><tr
id=sl_svn200_70

><td class="source">			_set_interface();<br></td></tr
><tr
id=sl_svn200_71

><td class="source">			// Unset total images in imageArray<br></td></tr
><tr
id=sl_svn200_72

><td class="source">			settings.imageArray.length = 0;<br></td></tr
><tr
id=sl_svn200_73

><td class="source">			// Unset image active information<br></td></tr
><tr
id=sl_svn200_74

><td class="source">			settings.activeImage = 0;<br></td></tr
><tr
id=sl_svn200_75

><td class="source">			// We have an image set? Or just an image? Let´s see it.<br></td></tr
><tr
id=sl_svn200_76

><td class="source">			if ( jQueryMatchedObj.length == 1 ) {<br></td></tr
><tr
id=sl_svn200_77

><td class="source">				settings.imageArray.push(new Array(objClicked.getAttribute(&#39;href&#39;),objClicked.getAttribute(&#39;title&#39;)));<br></td></tr
><tr
id=sl_svn200_78

><td class="source">			} else {<br></td></tr
><tr
id=sl_svn200_79

><td class="source">				// Add an Array (as many as we have), with href and title atributes, inside the Array that storage the images references		<br></td></tr
><tr
id=sl_svn200_80

><td class="source">				for ( var i = 0; i &lt; jQueryMatchedObj.length; i++ ) {<br></td></tr
><tr
id=sl_svn200_81

><td class="source">					settings.imageArray.push(new Array(jQueryMatchedObj[i].getAttribute(&#39;href&#39;),jQueryMatchedObj[i].getAttribute(&#39;title&#39;)));<br></td></tr
><tr
id=sl_svn200_82

><td class="source">				}<br></td></tr
><tr
id=sl_svn200_83

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_84

><td class="source">			while ( settings.imageArray[settings.activeImage][0] != objClicked.getAttribute(&#39;href&#39;) ) {<br></td></tr
><tr
id=sl_svn200_85

><td class="source">				settings.activeImage++;<br></td></tr
><tr
id=sl_svn200_86

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_87

><td class="source">			// Call the function that prepares image exibition<br></td></tr
><tr
id=sl_svn200_88

><td class="source">			_set_image_to_view();<br></td></tr
><tr
id=sl_svn200_89

><td class="source">		}<br></td></tr
><tr
id=sl_svn200_90

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_91

><td class="source">		 * Create the jQuery lightBox plugin interface<br></td></tr
><tr
id=sl_svn200_92

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_93

><td class="source">		 * The HTML markup will be like that:<br></td></tr
><tr
id=sl_svn200_94

><td class="source">			&lt;div id=&quot;jquery-overlay&quot;&gt;&lt;/div&gt;<br></td></tr
><tr
id=sl_svn200_95

><td class="source">			&lt;div id=&quot;jquery-lightbox&quot;&gt;<br></td></tr
><tr
id=sl_svn200_96

><td class="source">				&lt;div id=&quot;lightbox-container-image-box&quot;&gt;<br></td></tr
><tr
id=sl_svn200_97

><td class="source">					&lt;div id=&quot;lightbox-container-image&quot;&gt;<br></td></tr
><tr
id=sl_svn200_98

><td class="source">						&lt;img src=&quot;../fotos/XX.jpg&quot; id=&quot;lightbox-image&quot;&gt;<br></td></tr
><tr
id=sl_svn200_99

><td class="source">						&lt;div id=&quot;lightbox-nav&quot;&gt;<br></td></tr
><tr
id=sl_svn200_100

><td class="source">							&lt;a href=&quot;#&quot; id=&quot;lightbox-nav-btnPrev&quot;&gt;&lt;/a&gt;<br></td></tr
><tr
id=sl_svn200_101

><td class="source">							&lt;a href=&quot;#&quot; id=&quot;lightbox-nav-btnNext&quot;&gt;&lt;/a&gt;<br></td></tr
><tr
id=sl_svn200_102

><td class="source">						&lt;/div&gt;<br></td></tr
><tr
id=sl_svn200_103

><td class="source">						&lt;div id=&quot;lightbox-loading&quot;&gt;<br></td></tr
><tr
id=sl_svn200_104

><td class="source">							&lt;a href=&quot;#&quot; id=&quot;lightbox-loading-link&quot;&gt;<br></td></tr
><tr
id=sl_svn200_105

><td class="source">								&lt;img src=&quot;../images/lightbox-ico-loading.gif&quot;&gt;<br></td></tr
><tr
id=sl_svn200_106

><td class="source">							&lt;/a&gt;<br></td></tr
><tr
id=sl_svn200_107

><td class="source">						&lt;/div&gt;<br></td></tr
><tr
id=sl_svn200_108

><td class="source">					&lt;/div&gt;<br></td></tr
><tr
id=sl_svn200_109

><td class="source">				&lt;/div&gt;<br></td></tr
><tr
id=sl_svn200_110

><td class="source">				&lt;div id=&quot;lightbox-container-image-data-box&quot;&gt;<br></td></tr
><tr
id=sl_svn200_111

><td class="source">					&lt;div id=&quot;lightbox-container-image-data&quot;&gt;<br></td></tr
><tr
id=sl_svn200_112

><td class="source">						&lt;div id=&quot;lightbox-image-details&quot;&gt;<br></td></tr
><tr
id=sl_svn200_113

><td class="source">							&lt;span id=&quot;lightbox-image-details-caption&quot;&gt;&lt;/span&gt;<br></td></tr
><tr
id=sl_svn200_114

><td class="source">							&lt;span id=&quot;lightbox-image-details-currentNumber&quot;&gt;&lt;/span&gt;<br></td></tr
><tr
id=sl_svn200_115

><td class="source">						&lt;/div&gt;<br></td></tr
><tr
id=sl_svn200_116

><td class="source">						&lt;div id=&quot;lightbox-secNav&quot;&gt;<br></td></tr
><tr
id=sl_svn200_117

><td class="source">							&lt;a href=&quot;#&quot; id=&quot;lightbox-secNav-btnClose&quot;&gt;<br></td></tr
><tr
id=sl_svn200_118

><td class="source">								&lt;img src=&quot;../images/lightbox-btn-close.gif&quot;&gt;<br></td></tr
><tr
id=sl_svn200_119

><td class="source">							&lt;/a&gt;<br></td></tr
><tr
id=sl_svn200_120

><td class="source">						&lt;/div&gt;<br></td></tr
><tr
id=sl_svn200_121

><td class="source">					&lt;/div&gt;<br></td></tr
><tr
id=sl_svn200_122

><td class="source">				&lt;/div&gt;<br></td></tr
><tr
id=sl_svn200_123

><td class="source">			&lt;/div&gt;<br></td></tr
><tr
id=sl_svn200_124

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_125

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_126

><td class="source">		function _set_interface() {<br></td></tr
><tr
id=sl_svn200_127

><td class="source">			// Apply the HTML markup into body tag<br></td></tr
><tr
id=sl_svn200_128

><td class="source">			$(&#39;body&#39;).append(&#39;&lt;div id=&quot;jquery-overlay&quot;&gt;&lt;/div&gt;&lt;div id=&quot;jquery-lightbox&quot;&gt;&lt;div id=&quot;lightbox-container-image-box&quot;&gt;&lt;div id=&quot;lightbox-container-image&quot;&gt;&lt;img id=&quot;lightbox-image&quot;&gt;&lt;div style=&quot;&quot; id=&quot;lightbox-nav&quot;&gt;&lt;a href=&quot;#&quot; id=&quot;lightbox-nav-btnPrev&quot;&gt;&lt;/a&gt;&lt;a href=&quot;#&quot; id=&quot;lightbox-nav-btnNext&quot;&gt;&lt;/a&gt;&lt;/div&gt;&lt;div id=&quot;lightbox-loading&quot;&gt;&lt;a href=&quot;#&quot; id=&quot;lightbox-loading-link&quot;&gt;&lt;img src=&quot;&#39; + settings.imageLoading + &#39;&quot;&gt;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;div id=&quot;lightbox-container-image-data-box&quot;&gt;&lt;div id=&quot;lightbox-container-image-data&quot;&gt;&lt;div id=&quot;lightbox-image-details&quot;&gt;&lt;span id=&quot;lightbox-image-details-caption&quot;&gt;&lt;/span&gt;&lt;span id=&quot;lightbox-image-details-currentNumber&quot;&gt;&lt;/span&gt;&lt;/div&gt;&lt;div id=&quot;lightbox-secNav&quot;&gt;&lt;a href=&quot;#&quot; id=&quot;lightbox-secNav-btnClose&quot;&gt;&lt;img src=&quot;&#39; + settings.imageBtnClose + &#39;&quot;&gt;&lt;/a&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&lt;/div&gt;&#39;);	<br></td></tr
><tr
id=sl_svn200_129

><td class="source">			// Get page sizes<br></td></tr
><tr
id=sl_svn200_130

><td class="source">			var arrPageSizes = ___getPageSize();<br></td></tr
><tr
id=sl_svn200_131

><td class="source">			// Style overlay and show it<br></td></tr
><tr
id=sl_svn200_132

><td class="source">			$(&#39;#jquery-overlay&#39;).css({<br></td></tr
><tr
id=sl_svn200_133

><td class="source">				backgroundColor:	settings.overlayBgColor,<br></td></tr
><tr
id=sl_svn200_134

><td class="source">				opacity:			settings.overlayOpacity,<br></td></tr
><tr
id=sl_svn200_135

><td class="source">				width:				arrPageSizes[0],<br></td></tr
><tr
id=sl_svn200_136

><td class="source">				height:				arrPageSizes[1]<br></td></tr
><tr
id=sl_svn200_137

><td class="source">			}).fadeIn();<br></td></tr
><tr
id=sl_svn200_138

><td class="source">			// Get page scroll<br></td></tr
><tr
id=sl_svn200_139

><td class="source">			var arrPageScroll = ___getPageScroll();<br></td></tr
><tr
id=sl_svn200_140

><td class="source">			// Calculate top and left offset for the jquery-lightbox div object and show it<br></td></tr
><tr
id=sl_svn200_141

><td class="source">			$(&#39;#jquery-lightbox&#39;).css({<br></td></tr
><tr
id=sl_svn200_142

><td class="source">				top:	arrPageScroll[1] + (arrPageSizes[3] / 10),<br></td></tr
><tr
id=sl_svn200_143

><td class="source">				left:	arrPageScroll[0]<br></td></tr
><tr
id=sl_svn200_144

><td class="source">			}).show();<br></td></tr
><tr
id=sl_svn200_145

><td class="source">			// Assigning click events in elements to close overlay<br></td></tr
><tr
id=sl_svn200_146

><td class="source">			$(&#39;#jquery-overlay,#jquery-lightbox&#39;).click(function() {<br></td></tr
><tr
id=sl_svn200_147

><td class="source">				_finish();									<br></td></tr
><tr
id=sl_svn200_148

><td class="source">			});<br></td></tr
><tr
id=sl_svn200_149

><td class="source">			// Assign the _finish function to lightbox-loading-link and lightbox-secNav-btnClose objects<br></td></tr
><tr
id=sl_svn200_150

><td class="source">			$(&#39;#lightbox-loading-link,#lightbox-secNav-btnClose&#39;).click(function() {<br></td></tr
><tr
id=sl_svn200_151

><td class="source">				_finish();<br></td></tr
><tr
id=sl_svn200_152

><td class="source">				return false;<br></td></tr
><tr
id=sl_svn200_153

><td class="source">			});<br></td></tr
><tr
id=sl_svn200_154

><td class="source">			// If window was resized, calculate the new overlay dimensions<br></td></tr
><tr
id=sl_svn200_155

><td class="source">			$(window).resize(function() {<br></td></tr
><tr
id=sl_svn200_156

><td class="source">				// Get page sizes<br></td></tr
><tr
id=sl_svn200_157

><td class="source">				var arrPageSizes = ___getPageSize();<br></td></tr
><tr
id=sl_svn200_158

><td class="source">				// Style overlay and show it<br></td></tr
><tr
id=sl_svn200_159

><td class="source">				$(&#39;#jquery-overlay&#39;).css({<br></td></tr
><tr
id=sl_svn200_160

><td class="source">					width:		arrPageSizes[0],<br></td></tr
><tr
id=sl_svn200_161

><td class="source">					height:		arrPageSizes[1]<br></td></tr
><tr
id=sl_svn200_162

><td class="source">				});<br></td></tr
><tr
id=sl_svn200_163

><td class="source">				// Get page scroll<br></td></tr
><tr
id=sl_svn200_164

><td class="source">				var arrPageScroll = ___getPageScroll();<br></td></tr
><tr
id=sl_svn200_165

><td class="source">				// Calculate top and left offset for the jquery-lightbox div object and show it<br></td></tr
><tr
id=sl_svn200_166

><td class="source">				$(&#39;#jquery-lightbox&#39;).css({<br></td></tr
><tr
id=sl_svn200_167

><td class="source">					top:	arrPageScroll[1] + (arrPageSizes[3] / 10),<br></td></tr
><tr
id=sl_svn200_168

><td class="source">					left:	arrPageScroll[0]<br></td></tr
><tr
id=sl_svn200_169

><td class="source">				});<br></td></tr
><tr
id=sl_svn200_170

><td class="source">			});<br></td></tr
><tr
id=sl_svn200_171

><td class="source">		}<br></td></tr
><tr
id=sl_svn200_172

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_173

><td class="source">		 * Prepares image exibition; doing a image´s preloader to calculate it´s size<br></td></tr
><tr
id=sl_svn200_174

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_175

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_176

><td class="source">		function _set_image_to_view() { // show the loading<br></td></tr
><tr
id=sl_svn200_177

><td class="source">			// Show the loading<br></td></tr
><tr
id=sl_svn200_178

><td class="source">			$(&#39;#lightbox-loading&#39;).show();<br></td></tr
><tr
id=sl_svn200_179

><td class="source">			if ( settings.fixedNavigation ) {<br></td></tr
><tr
id=sl_svn200_180

><td class="source">				$(&#39;#lightbox-image,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber&#39;).hide();<br></td></tr
><tr
id=sl_svn200_181

><td class="source">			} else {<br></td></tr
><tr
id=sl_svn200_182

><td class="source">				// Hide some elements<br></td></tr
><tr
id=sl_svn200_183

><td class="source">				$(&#39;#lightbox-image,#lightbox-nav,#lightbox-nav-btnPrev,#lightbox-nav-btnNext,#lightbox-container-image-data-box,#lightbox-image-details-currentNumber&#39;).hide();<br></td></tr
><tr
id=sl_svn200_184

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_185

><td class="source">			// Image preload process<br></td></tr
><tr
id=sl_svn200_186

><td class="source">			var objImagePreloader = new Image();<br></td></tr
><tr
id=sl_svn200_187

><td class="source">			objImagePreloader.onload = function() {<br></td></tr
><tr
id=sl_svn200_188

><td class="source">				$(&#39;#lightbox-image&#39;).attr(&#39;src&#39;,settings.imageArray[settings.activeImage][0]);<br></td></tr
><tr
id=sl_svn200_189

><td class="source">				// Perfomance an effect in the image container resizing it<br></td></tr
><tr
id=sl_svn200_190

><td class="source">				_resize_container_image_box(objImagePreloader.width,objImagePreloader.height);<br></td></tr
><tr
id=sl_svn200_191

><td class="source">				//	clear onLoad, IE behaves irratically with animated gifs otherwise<br></td></tr
><tr
id=sl_svn200_192

><td class="source">				objImagePreloader.onload=function(){};<br></td></tr
><tr
id=sl_svn200_193

><td class="source">			};<br></td></tr
><tr
id=sl_svn200_194

><td class="source">			objImagePreloader.src = settings.imageArray[settings.activeImage][0];<br></td></tr
><tr
id=sl_svn200_195

><td class="source">		};<br></td></tr
><tr
id=sl_svn200_196

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_197

><td class="source">		 * Perfomance an effect in the image container resizing it<br></td></tr
><tr
id=sl_svn200_198

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_199

><td class="source">		 * @param integer intImageWidth The image´s width that will be showed<br></td></tr
><tr
id=sl_svn200_200

><td class="source">		 * @param integer intImageHeight The image´s height that will be showed<br></td></tr
><tr
id=sl_svn200_201

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_202

><td class="source">		function _resize_container_image_box(intImageWidth,intImageHeight) {<br></td></tr
><tr
id=sl_svn200_203

><td class="source">			// Get current width and height<br></td></tr
><tr
id=sl_svn200_204

><td class="source">			var intCurrentWidth = $(&#39;#lightbox-container-image-box&#39;).width();<br></td></tr
><tr
id=sl_svn200_205

><td class="source">			var intCurrentHeight = $(&#39;#lightbox-container-image-box&#39;).height();<br></td></tr
><tr
id=sl_svn200_206

><td class="source">			// Get the width and height of the selected image plus the padding<br></td></tr
><tr
id=sl_svn200_207

><td class="source">			var intWidth = (intImageWidth + (settings.containerBorderSize * 2)); // Plus the image´s width and the left and right padding value<br></td></tr
><tr
id=sl_svn200_208

><td class="source">			var intHeight = (intImageHeight + (settings.containerBorderSize * 2)); // Plus the image´s height and the left and right padding value<br></td></tr
><tr
id=sl_svn200_209

><td class="source">			// Diferences<br></td></tr
><tr
id=sl_svn200_210

><td class="source">			var intDiffW = intCurrentWidth - intWidth;<br></td></tr
><tr
id=sl_svn200_211

><td class="source">			var intDiffH = intCurrentHeight - intHeight;<br></td></tr
><tr
id=sl_svn200_212

><td class="source">			// Perfomance the effect<br></td></tr
><tr
id=sl_svn200_213

><td class="source">			$(&#39;#lightbox-container-image-box&#39;).animate({ width: intWidth, height: intHeight },settings.containerResizeSpeed,function() { _show_image(); });<br></td></tr
><tr
id=sl_svn200_214

><td class="source">			if ( ( intDiffW == 0 ) &amp;&amp; ( intDiffH == 0 ) ) {<br></td></tr
><tr
id=sl_svn200_215

><td class="source">				if ( $.browser.msie ) {<br></td></tr
><tr
id=sl_svn200_216

><td class="source">					___pause(250);<br></td></tr
><tr
id=sl_svn200_217

><td class="source">				} else {<br></td></tr
><tr
id=sl_svn200_218

><td class="source">					___pause(100);	<br></td></tr
><tr
id=sl_svn200_219

><td class="source">				}<br></td></tr
><tr
id=sl_svn200_220

><td class="source">			} <br></td></tr
><tr
id=sl_svn200_221

><td class="source">			$(&#39;#lightbox-container-image-data-box&#39;).css({ width: intImageWidth });<br></td></tr
><tr
id=sl_svn200_222

><td class="source">			$(&#39;#lightbox-nav-btnPrev,#lightbox-nav-btnNext&#39;).css({ height: intImageHeight + (settings.containerBorderSize * 2) });<br></td></tr
><tr
id=sl_svn200_223

><td class="source">		};<br></td></tr
><tr
id=sl_svn200_224

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_225

><td class="source">		 * Show the prepared image<br></td></tr
><tr
id=sl_svn200_226

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_227

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_228

><td class="source">		function _show_image() {<br></td></tr
><tr
id=sl_svn200_229

><td class="source">			$(&#39;#lightbox-loading&#39;).hide();<br></td></tr
><tr
id=sl_svn200_230

><td class="source">			$(&#39;#lightbox-image&#39;).fadeIn(function() {<br></td></tr
><tr
id=sl_svn200_231

><td class="source">				_show_image_data();<br></td></tr
><tr
id=sl_svn200_232

><td class="source">				_set_navigation();<br></td></tr
><tr
id=sl_svn200_233

><td class="source">			});<br></td></tr
><tr
id=sl_svn200_234

><td class="source">			_preload_neighbor_images();<br></td></tr
><tr
id=sl_svn200_235

><td class="source">		};<br></td></tr
><tr
id=sl_svn200_236

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_237

><td class="source">		 * Show the image information<br></td></tr
><tr
id=sl_svn200_238

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_239

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_240

><td class="source">		function _show_image_data() {<br></td></tr
><tr
id=sl_svn200_241

><td class="source">			$(&#39;#lightbox-container-image-data-box&#39;).slideDown(&#39;fast&#39;);<br></td></tr
><tr
id=sl_svn200_242

><td class="source">			$(&#39;#lightbox-image-details-caption&#39;).hide();<br></td></tr
><tr
id=sl_svn200_243

><td class="source">			if ( settings.imageArray[settings.activeImage][1] ) {<br></td></tr
><tr
id=sl_svn200_244

><td class="source">				$(&#39;#lightbox-image-details-caption&#39;).html(settings.imageArray[settings.activeImage][1]).show();<br></td></tr
><tr
id=sl_svn200_245

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_246

><td class="source">			// If we have a image set, display &#39;Image X of X&#39;<br></td></tr
><tr
id=sl_svn200_247

><td class="source">			if ( settings.imageArray.length &gt; 1 ) {<br></td></tr
><tr
id=sl_svn200_248

><td class="source">				$(&#39;#lightbox-image-details-currentNumber&#39;).html(settings.txtImage + &#39; &#39; + ( settings.activeImage + 1 ) + &#39; &#39; + settings.txtOf + &#39; &#39; + settings.imageArray.length).show();<br></td></tr
><tr
id=sl_svn200_249

><td class="source">			}		<br></td></tr
><tr
id=sl_svn200_250

><td class="source">		}<br></td></tr
><tr
id=sl_svn200_251

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_252

><td class="source">		 * Display the button navigations<br></td></tr
><tr
id=sl_svn200_253

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_254

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_255

><td class="source">		function _set_navigation() {<br></td></tr
><tr
id=sl_svn200_256

><td class="source">			$(&#39;#lightbox-nav&#39;).show();<br></td></tr
><tr
id=sl_svn200_257

><td class="source"><br></td></tr
><tr
id=sl_svn200_258

><td class="source">			// Instead to define this configuration in CSS file, we define here. And it´s need to IE. Just.<br></td></tr
><tr
id=sl_svn200_259

><td class="source">			$(&#39;#lightbox-nav-btnPrev,#lightbox-nav-btnNext&#39;).css({ &#39;background&#39; : &#39;transparent url(&#39; + settings.imageBlank + &#39;) no-repeat&#39; });<br></td></tr
><tr
id=sl_svn200_260

><td class="source">			<br></td></tr
><tr
id=sl_svn200_261

><td class="source">			// Show the prev button, if not the first image in set<br></td></tr
><tr
id=sl_svn200_262

><td class="source">			if ( settings.activeImage != 0 ) {<br></td></tr
><tr
id=sl_svn200_263

><td class="source">				if ( settings.fixedNavigation ) {<br></td></tr
><tr
id=sl_svn200_264

><td class="source">					$(&#39;#lightbox-nav-btnPrev&#39;).css({ &#39;background&#39; : &#39;url(&#39; + settings.imageBtnPrev + &#39;) left 15% no-repeat&#39; })<br></td></tr
><tr
id=sl_svn200_265

><td class="source">						.unbind()<br></td></tr
><tr
id=sl_svn200_266

><td class="source">						.bind(&#39;click&#39;,function() {<br></td></tr
><tr
id=sl_svn200_267

><td class="source">							settings.activeImage = settings.activeImage - 1;<br></td></tr
><tr
id=sl_svn200_268

><td class="source">							_set_image_to_view();<br></td></tr
><tr
id=sl_svn200_269

><td class="source">							return false;<br></td></tr
><tr
id=sl_svn200_270

><td class="source">						});<br></td></tr
><tr
id=sl_svn200_271

><td class="source">				} else {<br></td></tr
><tr
id=sl_svn200_272

><td class="source">					// Show the images button for Next buttons<br></td></tr
><tr
id=sl_svn200_273

><td class="source">					$(&#39;#lightbox-nav-btnPrev&#39;).unbind().hover(function() {<br></td></tr
><tr
id=sl_svn200_274

><td class="source">						$(this).css({ &#39;background&#39; : &#39;url(&#39; + settings.imageBtnPrev + &#39;) left 15% no-repeat&#39; });<br></td></tr
><tr
id=sl_svn200_275

><td class="source">					},function() {<br></td></tr
><tr
id=sl_svn200_276

><td class="source">						$(this).css({ &#39;background&#39; : &#39;transparent url(&#39; + settings.imageBlank + &#39;) no-repeat&#39; });<br></td></tr
><tr
id=sl_svn200_277

><td class="source">					}).show().bind(&#39;click&#39;,function() {<br></td></tr
><tr
id=sl_svn200_278

><td class="source">						settings.activeImage = settings.activeImage - 1;<br></td></tr
><tr
id=sl_svn200_279

><td class="source">						_set_image_to_view();<br></td></tr
><tr
id=sl_svn200_280

><td class="source">						return false;<br></td></tr
><tr
id=sl_svn200_281

><td class="source">					});<br></td></tr
><tr
id=sl_svn200_282

><td class="source">				}<br></td></tr
><tr
id=sl_svn200_283

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_284

><td class="source">			<br></td></tr
><tr
id=sl_svn200_285

><td class="source">			// Show the next button, if not the last image in set<br></td></tr
><tr
id=sl_svn200_286

><td class="source">			if ( settings.activeImage != ( settings.imageArray.length -1 ) ) {<br></td></tr
><tr
id=sl_svn200_287

><td class="source">				if ( settings.fixedNavigation ) {<br></td></tr
><tr
id=sl_svn200_288

><td class="source">					$(&#39;#lightbox-nav-btnNext&#39;).css({ &#39;background&#39; : &#39;url(&#39; + settings.imageBtnNext + &#39;) right 15% no-repeat&#39; })<br></td></tr
><tr
id=sl_svn200_289

><td class="source">						.unbind()<br></td></tr
><tr
id=sl_svn200_290

><td class="source">						.bind(&#39;click&#39;,function() {<br></td></tr
><tr
id=sl_svn200_291

><td class="source">							settings.activeImage = settings.activeImage + 1;<br></td></tr
><tr
id=sl_svn200_292

><td class="source">							_set_image_to_view();<br></td></tr
><tr
id=sl_svn200_293

><td class="source">							return false;<br></td></tr
><tr
id=sl_svn200_294

><td class="source">						});<br></td></tr
><tr
id=sl_svn200_295

><td class="source">				} else {<br></td></tr
><tr
id=sl_svn200_296

><td class="source">					// Show the images button for Next buttons<br></td></tr
><tr
id=sl_svn200_297

><td class="source">					$(&#39;#lightbox-nav-btnNext&#39;).unbind().hover(function() {<br></td></tr
><tr
id=sl_svn200_298

><td class="source">						$(this).css({ &#39;background&#39; : &#39;url(&#39; + settings.imageBtnNext + &#39;) right 15% no-repeat&#39; });<br></td></tr
><tr
id=sl_svn200_299

><td class="source">					},function() {<br></td></tr
><tr
id=sl_svn200_300

><td class="source">						$(this).css({ &#39;background&#39; : &#39;transparent url(&#39; + settings.imageBlank + &#39;) no-repeat&#39; });<br></td></tr
><tr
id=sl_svn200_301

><td class="source">					}).show().bind(&#39;click&#39;,function() {<br></td></tr
><tr
id=sl_svn200_302

><td class="source">						settings.activeImage = settings.activeImage + 1;<br></td></tr
><tr
id=sl_svn200_303

><td class="source">						_set_image_to_view();<br></td></tr
><tr
id=sl_svn200_304

><td class="source">						return false;<br></td></tr
><tr
id=sl_svn200_305

><td class="source">					});<br></td></tr
><tr
id=sl_svn200_306

><td class="source">				}<br></td></tr
><tr
id=sl_svn200_307

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_308

><td class="source">			// Enable keyboard navigation<br></td></tr
><tr
id=sl_svn200_309

><td class="source">			_enable_keyboard_navigation();<br></td></tr
><tr
id=sl_svn200_310

><td class="source">		}<br></td></tr
><tr
id=sl_svn200_311

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_312

><td class="source">		 * Enable a support to keyboard navigation<br></td></tr
><tr
id=sl_svn200_313

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_314

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_315

><td class="source">		function _enable_keyboard_navigation() {<br></td></tr
><tr
id=sl_svn200_316

><td class="source">			$(document).keydown(function(objEvent) {<br></td></tr
><tr
id=sl_svn200_317

><td class="source">				_keyboard_action(objEvent);<br></td></tr
><tr
id=sl_svn200_318

><td class="source">			});<br></td></tr
><tr
id=sl_svn200_319

><td class="source">		}<br></td></tr
><tr
id=sl_svn200_320

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_321

><td class="source">		 * Disable the support to keyboard navigation<br></td></tr
><tr
id=sl_svn200_322

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_323

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_324

><td class="source">		function _disable_keyboard_navigation() {<br></td></tr
><tr
id=sl_svn200_325

><td class="source">			$(document).unbind();<br></td></tr
><tr
id=sl_svn200_326

><td class="source">		}<br></td></tr
><tr
id=sl_svn200_327

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_328

><td class="source">		 * Perform the keyboard actions<br></td></tr
><tr
id=sl_svn200_329

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_330

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_331

><td class="source">		function _keyboard_action(objEvent) {<br></td></tr
><tr
id=sl_svn200_332

><td class="source">			// To ie<br></td></tr
><tr
id=sl_svn200_333

><td class="source">			if ( objEvent == null ) {<br></td></tr
><tr
id=sl_svn200_334

><td class="source">				keycode = event.keyCode;<br></td></tr
><tr
id=sl_svn200_335

><td class="source">				escapeKey = 27;<br></td></tr
><tr
id=sl_svn200_336

><td class="source">			// To Mozilla<br></td></tr
><tr
id=sl_svn200_337

><td class="source">			} else {<br></td></tr
><tr
id=sl_svn200_338

><td class="source">				keycode = objEvent.keyCode;<br></td></tr
><tr
id=sl_svn200_339

><td class="source">				escapeKey = objEvent.DOM_VK_ESCAPE;<br></td></tr
><tr
id=sl_svn200_340

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_341

><td class="source">			// Get the key in lower case form<br></td></tr
><tr
id=sl_svn200_342

><td class="source">			key = String.fromCharCode(keycode).toLowerCase();<br></td></tr
><tr
id=sl_svn200_343

><td class="source">			// Verify the keys to close the ligthBox<br></td></tr
><tr
id=sl_svn200_344

><td class="source">			if ( ( key == settings.keyToClose ) || ( key == &#39;x&#39; ) || ( keycode == escapeKey ) ) {<br></td></tr
><tr
id=sl_svn200_345

><td class="source">				_finish();<br></td></tr
><tr
id=sl_svn200_346

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_347

><td class="source">			// Verify the key to show the previous image<br></td></tr
><tr
id=sl_svn200_348

><td class="source">			if ( ( key == settings.keyToPrev ) || ( keycode == 37 ) ) {<br></td></tr
><tr
id=sl_svn200_349

><td class="source">				// If we´re not showing the first image, call the previous<br></td></tr
><tr
id=sl_svn200_350

><td class="source">				if ( settings.activeImage != 0 ) {<br></td></tr
><tr
id=sl_svn200_351

><td class="source">					settings.activeImage = settings.activeImage - 1;<br></td></tr
><tr
id=sl_svn200_352

><td class="source">					_set_image_to_view();<br></td></tr
><tr
id=sl_svn200_353

><td class="source">					_disable_keyboard_navigation();<br></td></tr
><tr
id=sl_svn200_354

><td class="source">				}<br></td></tr
><tr
id=sl_svn200_355

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_356

><td class="source">			// Verify the key to show the next image<br></td></tr
><tr
id=sl_svn200_357

><td class="source">			if ( ( key == settings.keyToNext ) || ( keycode == 39 ) ) {<br></td></tr
><tr
id=sl_svn200_358

><td class="source">				// If we´re not showing the last image, call the next<br></td></tr
><tr
id=sl_svn200_359

><td class="source">				if ( settings.activeImage != ( settings.imageArray.length - 1 ) ) {<br></td></tr
><tr
id=sl_svn200_360

><td class="source">					settings.activeImage = settings.activeImage + 1;<br></td></tr
><tr
id=sl_svn200_361

><td class="source">					_set_image_to_view();<br></td></tr
><tr
id=sl_svn200_362

><td class="source">					_disable_keyboard_navigation();<br></td></tr
><tr
id=sl_svn200_363

><td class="source">				}<br></td></tr
><tr
id=sl_svn200_364

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_365

><td class="source">		}<br></td></tr
><tr
id=sl_svn200_366

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_367

><td class="source">		 * Preload prev and next images being showed<br></td></tr
><tr
id=sl_svn200_368

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_369

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_370

><td class="source">		function _preload_neighbor_images() {<br></td></tr
><tr
id=sl_svn200_371

><td class="source">			if ( (settings.imageArray.length -1) &gt; settings.activeImage ) {<br></td></tr
><tr
id=sl_svn200_372

><td class="source">				objNext = new Image();<br></td></tr
><tr
id=sl_svn200_373

><td class="source">				objNext.src = settings.imageArray[settings.activeImage + 1][0];<br></td></tr
><tr
id=sl_svn200_374

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_375

><td class="source">			if ( settings.activeImage &gt; 0 ) {<br></td></tr
><tr
id=sl_svn200_376

><td class="source">				objPrev = new Image();<br></td></tr
><tr
id=sl_svn200_377

><td class="source">				objPrev.src = settings.imageArray[settings.activeImage -1][0];<br></td></tr
><tr
id=sl_svn200_378

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_379

><td class="source">		}<br></td></tr
><tr
id=sl_svn200_380

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_381

><td class="source">		 * Remove jQuery lightBox plugin HTML markup<br></td></tr
><tr
id=sl_svn200_382

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_383

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_384

><td class="source">		function _finish() {<br></td></tr
><tr
id=sl_svn200_385

><td class="source">			$(&#39;#jquery-lightbox&#39;).remove();<br></td></tr
><tr
id=sl_svn200_386

><td class="source">			$(&#39;#jquery-overlay&#39;).fadeOut(function() { $(&#39;#jquery-overlay&#39;).remove(); });<br></td></tr
><tr
id=sl_svn200_387

><td class="source">			// Show some elements to avoid conflict with overlay in IE. These elements appear above the overlay.<br></td></tr
><tr
id=sl_svn200_388

><td class="source">			$(&#39;embed, object, select&#39;).css({ &#39;visibility&#39; : &#39;visible&#39; });<br></td></tr
><tr
id=sl_svn200_389

><td class="source">		}<br></td></tr
><tr
id=sl_svn200_390

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_391

><td class="source">		 / THIRD FUNCTION<br></td></tr
><tr
id=sl_svn200_392

><td class="source">		 * getPageSize() by quirksmode.com<br></td></tr
><tr
id=sl_svn200_393

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_394

><td class="source">		 * @return Array Return an array with page width, height and window width, height<br></td></tr
><tr
id=sl_svn200_395

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_396

><td class="source">		function ___getPageSize() {<br></td></tr
><tr
id=sl_svn200_397

><td class="source">			var xScroll, yScroll;<br></td></tr
><tr
id=sl_svn200_398

><td class="source">			if (window.innerHeight &amp;&amp; window.scrollMaxY) {	<br></td></tr
><tr
id=sl_svn200_399

><td class="source">				xScroll = window.innerWidth + window.scrollMaxX;<br></td></tr
><tr
id=sl_svn200_400

><td class="source">				yScroll = window.innerHeight + window.scrollMaxY;<br></td></tr
><tr
id=sl_svn200_401

><td class="source">			} else if (document.body.scrollHeight &gt; document.body.offsetHeight){ // all but Explorer Mac<br></td></tr
><tr
id=sl_svn200_402

><td class="source">				xScroll = document.body.scrollWidth;<br></td></tr
><tr
id=sl_svn200_403

><td class="source">				yScroll = document.body.scrollHeight;<br></td></tr
><tr
id=sl_svn200_404

><td class="source">			} else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari<br></td></tr
><tr
id=sl_svn200_405

><td class="source">				xScroll = document.body.offsetWidth;<br></td></tr
><tr
id=sl_svn200_406

><td class="source">				yScroll = document.body.offsetHeight;<br></td></tr
><tr
id=sl_svn200_407

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_408

><td class="source">			var windowWidth, windowHeight;<br></td></tr
><tr
id=sl_svn200_409

><td class="source">			if (self.innerHeight) {	// all except Explorer<br></td></tr
><tr
id=sl_svn200_410

><td class="source">				if(document.documentElement.clientWidth){<br></td></tr
><tr
id=sl_svn200_411

><td class="source">					windowWidth = document.documentElement.clientWidth; <br></td></tr
><tr
id=sl_svn200_412

><td class="source">				} else {<br></td></tr
><tr
id=sl_svn200_413

><td class="source">					windowWidth = self.innerWidth;<br></td></tr
><tr
id=sl_svn200_414

><td class="source">				}<br></td></tr
><tr
id=sl_svn200_415

><td class="source">				windowHeight = self.innerHeight;<br></td></tr
><tr
id=sl_svn200_416

><td class="source">			} else if (document.documentElement &amp;&amp; document.documentElement.clientHeight) { // Explorer 6 Strict Mode<br></td></tr
><tr
id=sl_svn200_417

><td class="source">				windowWidth = document.documentElement.clientWidth;<br></td></tr
><tr
id=sl_svn200_418

><td class="source">				windowHeight = document.documentElement.clientHeight;<br></td></tr
><tr
id=sl_svn200_419

><td class="source">			} else if (document.body) { // other Explorers<br></td></tr
><tr
id=sl_svn200_420

><td class="source">				windowWidth = document.body.clientWidth;<br></td></tr
><tr
id=sl_svn200_421

><td class="source">				windowHeight = document.body.clientHeight;<br></td></tr
><tr
id=sl_svn200_422

><td class="source">			}	<br></td></tr
><tr
id=sl_svn200_423

><td class="source">			// for small pages with total height less then height of the viewport<br></td></tr
><tr
id=sl_svn200_424

><td class="source">			if(yScroll &lt; windowHeight){<br></td></tr
><tr
id=sl_svn200_425

><td class="source">				pageHeight = windowHeight;<br></td></tr
><tr
id=sl_svn200_426

><td class="source">			} else { <br></td></tr
><tr
id=sl_svn200_427

><td class="source">				pageHeight = yScroll;<br></td></tr
><tr
id=sl_svn200_428

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_429

><td class="source">			// for small pages with total width less then width of the viewport<br></td></tr
><tr
id=sl_svn200_430

><td class="source">			if(xScroll &lt; windowWidth){	<br></td></tr
><tr
id=sl_svn200_431

><td class="source">				pageWidth = xScroll;		<br></td></tr
><tr
id=sl_svn200_432

><td class="source">			} else {<br></td></tr
><tr
id=sl_svn200_433

><td class="source">				pageWidth = windowWidth;<br></td></tr
><tr
id=sl_svn200_434

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_435

><td class="source">			arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);<br></td></tr
><tr
id=sl_svn200_436

><td class="source">			return arrayPageSize;<br></td></tr
><tr
id=sl_svn200_437

><td class="source">		};<br></td></tr
><tr
id=sl_svn200_438

><td class="source">		/**<br></td></tr
><tr
id=sl_svn200_439

><td class="source">		 / THIRD FUNCTION<br></td></tr
><tr
id=sl_svn200_440

><td class="source">		 * getPageScroll() by quirksmode.com<br></td></tr
><tr
id=sl_svn200_441

><td class="source">		 *<br></td></tr
><tr
id=sl_svn200_442

><td class="source">		 * @return Array Return an array with x,y page scroll values.<br></td></tr
><tr
id=sl_svn200_443

><td class="source">		 */<br></td></tr
><tr
id=sl_svn200_444

><td class="source">		function ___getPageScroll() {<br></td></tr
><tr
id=sl_svn200_445

><td class="source">			var xScroll, yScroll;<br></td></tr
><tr
id=sl_svn200_446

><td class="source">			if (self.pageYOffset) {<br></td></tr
><tr
id=sl_svn200_447

><td class="source">				yScroll = self.pageYOffset;<br></td></tr
><tr
id=sl_svn200_448

><td class="source">				xScroll = self.pageXOffset;<br></td></tr
><tr
id=sl_svn200_449

><td class="source">			} else if (document.documentElement &amp;&amp; document.documentElement.scrollTop) {	 // Explorer 6 Strict<br></td></tr
><tr
id=sl_svn200_450

><td class="source">				yScroll = document.documentElement.scrollTop;<br></td></tr
><tr
id=sl_svn200_451

><td class="source">				xScroll = document.documentElement.scrollLeft;<br></td></tr
><tr
id=sl_svn200_452

><td class="source">			} else if (document.body) {// all other Explorers<br></td></tr
><tr
id=sl_svn200_453

><td class="source">				yScroll = document.body.scrollTop;<br></td></tr
><tr
id=sl_svn200_454

><td class="source">				xScroll = document.body.scrollLeft;	<br></td></tr
><tr
id=sl_svn200_455

><td class="source">			}<br></td></tr
><tr
id=sl_svn200_456

><td class="source">			arrayPageScroll = new Array(xScroll,yScroll);<br></td></tr
><tr
id=sl_svn200_457

><td class="source">			return arrayPageScroll;<br></td></tr
><tr
id=sl_svn200_458

><td class="source">		};<br></td></tr
><tr
id=sl_svn200_459

><td class="source">		 /**<br></td></tr
><tr
id=sl_svn200_460

><td class="source">		  * Stop the code execution from a escified time in milisecond<br></td></tr
><tr
id=sl_svn200_461

><td class="source">		  *<br></td></tr
><tr
id=sl_svn200_462

><td class="source">		  */<br></td></tr
><tr
id=sl_svn200_463

><td class="source">		 function ___pause(ms) {<br></td></tr
><tr
id=sl_svn200_464

><td class="source">			var date = new Date(); <br></td></tr
><tr
id=sl_svn200_465

><td class="source">			curDate = null;<br></td></tr
><tr
id=sl_svn200_466

><td class="source">			do { var curDate = new Date(); }<br></td></tr
><tr
id=sl_svn200_467

><td class="source">			while ( curDate - date &lt; ms);<br></td></tr
><tr
id=sl_svn200_468

><td class="source">		 };<br></td></tr
><tr
id=sl_svn200_469

><td class="source">		// Return the jQuery object for chaining. The unbind method is used to avoid click conflict when the plugin is called more than once<br></td></tr
><tr
id=sl_svn200_470

><td class="source">		return this.unbind(&#39;click&#39;).click(_initialize);<br></td></tr
><tr
id=sl_svn200_471

><td class="source">	};<br></td></tr
><tr
id=sl_svn200_472

><td class="source">})(jQuery); // Call and execute the function immediately passing the jQuery object<br></td></tr
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
 <a href="/p/tavristasos/source/detail?spec=svn200&amp;r=159">r159</a>
 by tavristasos@gmail.com
 on Jan 30, 2012
 &nbsp; <a href="/p/tavristasos/source/diff?spec=svn200&r=159&amp;format=side&amp;path=/trunk/jquery.lightbox-0.5.js&amp;old_path=/trunk/jquery.lightbox-0.5.js&amp;old=">Diff</a>
 </div>
 <pre>1</pre>
 </div>
 
 
 
 
 
 
 <script type="text/javascript">
 var detail_url = '/p/tavristasos/source/detail?r=159&spec=svn200';
 var publish_url = '/p/tavristasos/source/detail?r=159&spec=svn200#publish';
 // describe the paths of this revision in javascript.
 var changed_paths = [];
 var changed_urls = [];
 
 changed_paths.push('/trunk/jquery.lightbox-0.5.js');
 changed_urls.push('/p/tavristasos/source/browse/trunk/jquery.lightbox-0.5.js?r\x3d159\x26spec\x3dsvn200');
 
 var selected_path = '/trunk/jquery.lightbox-0.5.js';
 
 
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
 
 <option value="/p/tavristasos/source/browse/trunk/jquery.lightbox-0.5.js?r=159&amp;spec=svn200"
 selected="selected"
 >/trunk/jquery.lightbox-0.5.js</option>
 
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
 
 <a href="/p/tavristasos/source/list?path=/trunk/jquery.lightbox-0.5.js&start=159">All revisions of this file</a>
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
 
 <div>Size: 20065 bytes,
 472 lines</div>
 
 <div><a href="//tavristasos.googlecode.com/svn/trunk/jquery.lightbox-0.5.js">View raw file</a></div>
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
 var paths = {'svn200': '/trunk/jquery.lightbox-0.5.js'}
 codereviews = CR_controller.setup(
 {"profileUrl": "/u/105438543774775363520/", "projectName": "tavristasos", "token": "ABZ6GAdiYQ-UOzLps4BeNH5Xu6hJ9OmSPA:1417533013796", "assetHostPath": "https://ssl.gstatic.com/codesite/ph", "domainName": null, "assetVersionPath": "https://ssl.gstatic.com/codesite/ph/1729405847801014513", "projectHomeUrl": "/p/tavristasos", "relativeBaseUrl": "", "loggedInUserEmail": "tavristasos@gmail.com"}, '', 'svn200', paths,
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

