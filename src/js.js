$(window).mousemove(function(e){
	$('#log').text('x='+e.pageX+' y='+e.pageY);
	console.log('x='+e.pageX+' y='+e.pageY);
	$('#log').css({'top':e.pageY-50,'left':e.pageX});
});