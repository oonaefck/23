var winX,winY;

$(function(){ init(); });
$(window).resize(function(){ init(); })

function init(){
	winX=$(window).width();
	winY=$(window).height();
}
	
$(window).mousemove(function(e){
	$('#log').text('x='+e.pageX+' y='+e.pageY);
	console.log('x='+e.pageX+' y='+e.pageY);
	if(e.pageY>winY/2) {
		var logposY = e.pageY-50;
	}
	else {
		var logposY = e.pageY+50;
	}
	$('#log').css({'top':logposY,'left':e.pageX});
});