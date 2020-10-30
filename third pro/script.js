$(function () {
	$("button").blur(function(event){
		var screenWidth=window.innerWidth; //size screen nfso
		if (screenWidth<768) {
			$("#collapsable-nav").collapse('hide');
		}
	});
});