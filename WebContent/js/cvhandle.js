$(document).ready(function(){
	listObj = '';
	
	$.post("./homecv",
	{
	  name: "Donald Duck",
	  city: "Duckburg"
	},
	function(data, status){
		var tabbar = $('#lisitems');
		listObj = JSON.parse(data);
		setListItem(listObj, tabbar);
	});
	
	function setListItem(listObj, container, condition){
		$.each(listObj, function(k, v) {
		  if (condition == undefined || v.trangThai == condition){
			  var item = $('<div></div>').attr('class', 'iteminleftmenu');
			  var a = $('<a></a>').attr({
				  'href': '#' + v.cmnd, 
				  'id'	: v.cmnd }).text(v.tenKH);
			  
				  item.append(a);
				  container.append(item);
		  }
		});
	};
});