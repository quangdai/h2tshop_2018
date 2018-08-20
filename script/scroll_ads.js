var slideTime = 700;
var floatAtBottom = false;

function floating_init()
{
    xMoveTo('floating_banner_right', 900 - (1259-screen.width), 0);

    winOnResize(); // set initial position
    xAddEventListener(window, 'resize', winOnResize, false);
    xAddEventListener(window, 'scroll', winOnScroll, false);
}
function winOnResize() {
    checkScreenWidth();
    winOnScroll(); // initial slide
}
function winOnScroll() {
    var y = xScrollTop();
    if (floatAtBottom) {
        y += xClientHeight() - xHeight('floating_banner_left');
    }
    xSlideTo('floating_banner_left', (screen.width - 980)/2-150 , y+30, slideTime);
    xSlideTo('floating_banner_right', (screen.width + 980)/2, y+30, slideTime);
}
function checkScreenWidth()
{
    if( document.body.clientWidth < 1259 )
    {
        document.getElementById('floating_banner_left').style.display = 'none';
        document.getElementById('floating_banner_right').style.display = 'none';
    }
    else
    {
        document.getElementById('floating_banner_left').style.display = '';
        document.getElementById('floating_banner_right').style.display = '';
    }
}
//--------------------------------------
document.write('<div>');
if (typeof(FloatLeftOut_adLnk)!='function')
    FloatLeftOut_adLnk = function (aa)
    {
        if(aa.clkctrl=='True')return(aa.link);
        else return(aa.link);
    };
//var __AB_ADLIST_FloatLeftOut = [{link:'http://www.topbuy.com.vn', image:'http://topbuy.vn/Images/Banner/banner_scroll/banner_trai1.jpg', startDate:'', finishDate:'', target:'_self', width:'115', height:'583', aid:'132078', clkctrl:'True', getLink:function(){return FloatLeftOut_adLnk(this)}}]; 
document.write('<div id="floating_banner_left" style="text-align:right; position:absolute; overflow:hidden; top: 20px; left: 0; width: 135px; border: 0 solid #000;">');

document.write('	<div id="floating_banner_left_content">');

for(var ii=0; ii<__AB_ADLIST_FloatLeftOut.length;ii++)
{
    if(__AB_ADLIST_FloatLeftOut[ii].image.indexOf("swf")==-1 ){
        if(__AB_ADLIST_FloatLeftOut[ii].link == null || __AB_ADLIST_FloatLeftOut[ii].link.length == 0)
            document.write('<IMG src="'+ __AB_ADLIST_FloatLeftOut[ii].image +'" border="0">');
        else
        //document.write('<a href="'+ __AB_ADLIST_FloatLeftOut[ii].link +'" onclick="window.open(\''+ __AB_ADLIST_FloatLeftOut[ii].getLink() +'\',\''+ __AB_ADLIST_FloatLeftOut[ii].target +'\'); return false;"><img src="' + __AB_ADLIST_FloatLeftOut[ii].image + '" border="0"></a>');
            document.write('<a href="'+ __AB_ADLIST_FloatLeftOut[ii].link +'"><img src="' + __AB_ADLIST_FloatLeftOut[ii].image + '" border="0"></a>');
    }
    else {
        if(__AB_ADLIST_FloatLeftOut[ii].link == null || __AB_ADLIST_FloatLeftOut[ii].link.length == 0)
            document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+__AB_ADLIST_FloatLeftOut[ii].width+'" height="' + __AB_ADLIST_FloatLeftOut[ii].height + '">'
                +'<param name="movie" value="'+ __AB_ADLIST_FloatLeftOut[ii].image +'" />'
                +'<param name="quality" value="high" />'
                +'<PARAM NAME="WMode" VALUE="Transparent">'
                +'<embed src="'+ __AB_ADLIST_FloatLeftOut[ii].image +'" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+__AB_ADLIST_FloatLeftOut[ii].width+'" height="' + __AB_ADLIST_FloatLeftOut[ii].height + '"></embed></object>');
        else
            document.write('<div align="left" style="border-style:solid; border-collapse:collapse; border-width:0px; width:'+__AB_ADLIST_FloatLeftOut[ii].width+'px; height:'+__AB_ADLIST_FloatLeftOut[ii].height+'px;">'
                +'<div style="position:absolute; left:inherit; z-index:15; width:'+__AB_ADLIST_FloatLeftOut[ii].width+'px; height:'+__AB_ADLIST_FloatLeftOut[ii].height+'px;border-style:solid; border-width:0px;">'
                +'<a href="' + __AB_ADLIST_FloatLeftOut[ii].link + '"  onclick="window.open(\''+ __AB_ADLIST_FloatLeftOut[ii].getLink() +'\',\''+ __AB_ADLIST_FloatLeftOut[ii].target +'\'); return false;"><img src="http://www.gate.vn/adsvc/admedia/_space.gif" width="'+__AB_ADLIST_FloatLeftOut[ii].width+'" height="'+__AB_ADLIST_FloatLeftOut[ii].height+'" border="0" /></a>'
                +'</div>'
                +'<div style="position:relative;z-index:1;">'
                +'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+__AB_ADLIST_FloatLeftOut[ii].width+'" height="' + __AB_ADLIST_FloatLeftOut[ii].height + '">'
                +'<param name="movie" value="'+ __AB_ADLIST_FloatLeftOut[ii].image +'" />'
                +'<param name="quality" value="high" />'
                +'<PARAM NAME="WMode" VALUE="Transparent">'
                +'<embed src="'+ __AB_ADLIST_FloatLeftOut[ii].image +'" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+__AB_ADLIST_FloatLeftOut[ii].width+'" height="' + __AB_ADLIST_FloatLeftOut[ii].height + '"></embed></object>'
                +'</div>'
                +'</div>'
            );
    }

    document.write('<br/>');
}
document.write('	</div>');
document.write('</div>');document.write('</div>');

//------------------------------------------------------

document.write('<div>');if (typeof(FloatRightOut_adLnk)!='function')
    FloatRightOut_adLnk = function (aa) {
        if(aa.clkctrl=='True')return(aa.link);
        else return(aa.link);
    };
//var __AB_ADLIST_FloatRightOut = [{link:'#', image:'http://topbuy.vn/Images/Banner/banner_scroll/banner_phai1.jpg', startDate:'', finishDate:'', target:'_blank', width:'115', height:'583', aid:'132087', clkctrl:'True', getLink:function(){return FloatRightOut_adLnk(this)}}];
document.write('<div id="floating_banner_right" style="text-align:left; position:absolute; overflow:hidden; top: 20px; right: 0; width: 135px; border: 0 solid #000;">');
document.write('	<div id="floating_banner_right_content"  >');

for(var ii=0; ii<__AB_ADLIST_FloatRightOut.length;ii++)
{
    if(__AB_ADLIST_FloatRightOut[ii].image.indexOf("swf")==-1 ){
        if(__AB_ADLIST_FloatRightOut[ii].link == null || __AB_ADLIST_FloatRightOut[ii].link.length == 0)
            document.write('<IMG src="'+ __AB_ADLIST_FloatRightOut[ii].image +'" border="0">');
        else
        //document.write('<a href="'+ __AB_ADLIST_FloatRightOut[ii].link +'" onclick="window.open(\''+ __AB_ADLIST_FloatRightOut[ii].getLink() +'\',\''+ __AB_ADLIST_FloatRightOut[ii].target +'\'); return false;"><img src="' + __AB_ADLIST_FloatRightOut[ii].image + '" border="0"></a>');
            document.write('<a href="'+ __AB_ADLIST_FloatRightOut[ii].link +'"><img src="' + __AB_ADLIST_FloatRightOut[ii].image + '" border="0"></a>');
    }
    else {
        if(__AB_ADLIST_FloatRightOut[ii].link == null || __AB_ADLIST_FloatRightOut[ii].link.length == 0)
            document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+__AB_ADLIST_FloatRightOut[ii].width+'" height="' + __AB_ADLIST_FloatRightOut[ii].height + '">'
                +'<param name="movie" value="'+ __AB_ADLIST_FloatRightOut[ii].image +'" />'
                +'<param name="quality" value="high" />'
                +'<PARAM NAME="WMode" VALUE="Transparent">'
                +'<embed src="'+ __AB_ADLIST_FloatRightOut[ii].image +'" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+__AB_ADLIST_FloatRightOut[ii].width+'" height="' + __AB_ADLIST_FloatRightOut[ii].height + '"></embed></object>');
        else
            document.write('<div align="left" style="border-style:solid; border-collapse:collapse; border-width:0px; width:'+__AB_ADLIST_FloatRightOut[ii].width+'px; height:'+__AB_ADLIST_FloatRightOut[ii].height+'px;">'
                +'<div style="position:absolute; left:inherit; z-index:15; width:'+__AB_ADLIST_FloatRightOut[ii].width+'px; height:'+__AB_ADLIST_FloatRightOut[ii].height+'px;border-style:solid; border-width:0px;">'
                +'<a href="' + __AB_ADLIST_FloatRightOut[ii].link + '"  onclick="window.open(\''+ __AB_ADLIST_FloatRightOut[ii].getLink() +'\',\''+ __AB_ADLIST_FloatRightOut[ii].target +'\'); return false;"><img src="http://www.gate.vn/adsvc/admedia/_space.gif" width="'+__AB_ADLIST_FloatRightOut[ii].width+'" height="'+__AB_ADLIST_FloatRightOut[ii].height+'" border="0" /></a>'
                +'</div>'
                +'<div style="position:relative;z-index:1;">'
                +'<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,19,0" width="'+__AB_ADLIST_FloatRightOut[ii].width+'" height="' + __AB_ADLIST_FloatRightOut[ii].height + '">'
                +'<param name="movie" value="'+ __AB_ADLIST_FloatRightOut[ii].image +'" />'
                +'<param name="quality" value="high" />'
                +'<PARAM NAME="WMode" VALUE="Transparent">'
                +'<embed src="'+ __AB_ADLIST_FloatRightOut[ii].image +'" quality="high" wmode="transparent" pluginspage="http://www.macromedia.com/go/getflashplayer" type="application/x-shockwave-flash" width="'+__AB_ADLIST_FloatRightOut[ii].width+'" height="' + __AB_ADLIST_FloatRightOut[ii].height + '"></embed></object>'
                +'</div>'
                +'</div>'

            );
    }
    document.write('<br/>');
}
document.write('	</div>');
document.write('</div>');document.write('</div>');