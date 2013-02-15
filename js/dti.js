// -- Deutsche Telekom AG- Version 1.3.1
// -- Copyright (c) 1996-2011 WebTrends Inc. All rights reserved.
// -- Copyright (c) 2007-2012 e-dynamics GmbH All rights reserved.

function WTinit(that){
	// begin: user modifiable
	that.dcsid="dcsxln2virb0sziiu1yfoaoee_6i5i";
	that.domain="www.wtpx-telekom.com";
	that.timezone=1;
	that.fpcdom =".telekom.com";
	that.fpcdom=(that.fpcdom=="")?window.location.hostname:that.fpcdom;
	that.onsitedoms=_ed.ed_doms;
	that.downloadtypes=_ed.ed_types;
	that.navigationtag="div,table";
	that.trackevents=true;
	that.trimoffsiteparams=true;
	that.enabled=true;  // gConvert
	that.i18n=false;
	that.fpc="WT_FPC";
	that.paidsearchparams="gclid";
	that.splitvalue="";
	that.preserve=true;
	// end: user modifiable
}
function ed_init(ed_space){
    // e-dynamics variables:
	ed_space.ed_doms=window.location.hostname;
	ed_space.ed_doms += ",telekom.de,telekom.com";
	ed_space.ed_types = "xls,doc,ppt,pdf,txt,csv,zip,swf,wav,mp3,dot,pps,flv,docx,xlsx,pptx";
	ed_space.ed_manualDownload = true;
	ed_space.ed_lst = false;
	ed_space.ed_iv = "1.3.1_" + window.location.hostname; // WTi script version
}
function ed_global(){
	// _ed.helpers.add('wti_param1', 'Wert');
    // _ed.globals.cookie.set('name','wert','optional:lebensdauer');
}
