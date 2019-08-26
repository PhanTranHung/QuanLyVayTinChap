$(document).ready(function(){
	$("div.tabbar a").click(function (){
		$(this).siblings("a").removeClass("tabselected");
		$(this).addClass("tabselected");
	});
});