/***************************/
//@Author: Adrian "yEnS" Mato Gondelle
//@website: www.yensdesign.com
//@email: yensamg@gmail.com
//@license: Feel free to use it, but keep this credits please!					
/***************************/

//SETTING UP OUR POPUP
//0 means disabled; 1 means enabled;
var popupStatus = 0;

//loading popup with jQuery magic!
function loadPopup(){
	//loads popup only if it is disabled
	if(popupStatus==0){
		$("#backgroundPopup").css({
			"opacity": "0.8"
		});
		$("#backgroundPopup").fadeIn("slow");
		$("#popupContact").fadeIn("slow");
		popupStatus = 1;
	}
}

//disabling popup with jQuery magic!
function disablePopup(){
	//disables popup only if it is enabled
	if(popupStatus==1){
		$("#backgroundPopup").fadeOut("slow");
		$("#popupContact").fadeOut("slow");
		popupStatus = 0;
	}
}

//centering popup
function centerPopup(){
	//request data for centering
	var windowWidth = document.documentElement.clientWidth;
	var windowHeight = document.documentElement.clientHeight;
	var popupHeight = $("#popupContact").height();
	var popupWidth = $("#popupContact").width();
	//centering
	$("#popupContact").css({
		"position": "fixed",
		"top": windowHeight/2-popupHeight/2,
		"left": windowWidth/2-popupWidth/2
	});
	//only need force for IE6
	
	$("#backgroundPopup").css({
		"height": windowHeight
	});
	
}


//CONTROLLING EVENTS IN jQuery
$(document).ready(function(){
	
	//LOADING POPUP
	//centering with css
	centerPopup();
	//load popup
	loadPopup();
	//Click the button event!
	$("#button").click(function(){
		//centering with css
		centerPopup();
		//load popup
		loadPopup();
	});
				
	//CLOSING POPUP
	//Click the x event!
	$("#popupContactClose").click(function(){
		disablePopup();
	});
	//Click out event!
	$("#backgroundPopup").click(function(){
		disablePopup();
	});
	//Press Escape event!
	$(document).keypress(function(e){
		if(e.keyCode==27 && popupStatus==1){
			disablePopup();
		}
	});

});

//Popup right----------------------------------------------------
function slide_default() {
    //default
    var _objimg = $("#slide-modify").find("img");
    // need to remove these in of case img-element has set width and height
    _objimg.removeAttr("width");
    _objimg.removeAttr("height");
    var pic_real_width = _objimg.width();
    var pic_real_height = _objimg.height();

    $(_objimg).attr('width', pic_real_width);
    $(_objimg).attr('height', pic_real_height);

    $("#slidehelper").css({ 'width': '' + pic_real_width + 'px', 'height': '' + pic_real_height + 'px' });
    $("#slide-modify").css('display', 'block');
}
function slide_clickhide() {
    $("#slidehelper #slide_hide").css({ 'display': 'none' });
    $("#slidehelper #slide_show").css({ 'display': 'block' });
    $("#slidehelper #slide-modify").css({ 'display': 'none' });
    $("#slidehelper").css({ 'width': '300px', 'height': '20px' });
    //createCookie('close-popup-adv', 'true', 1);
}
function slide_clickshow() {
    $("#slidehelper #slide_hide").css({ 'display': 'inline' });
    $("#slidehelper #slide_show").css({ 'display': 'none' });
    $("#slidehelper #slide-modify").css({ 'display': 'block' });
    slide_default();
    $("#slidehelper").css({ 'width': '300px', 'height': '110px' });
    //createCookie('close-popup-adv', 'false', -1);
}
//-------------------------------------