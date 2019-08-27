$(document).ready(function(){
	listObj = `[{"idHoSo":"1234567891","sdt":"0986410644","diaChi":"To 23. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"idHoSo":"1234567894","sdt":"0986410654","diaChi":"To 13. phuong Hoa Xuan, quan Cam Le, Da Nang"}]`;
	listObjchuaiv = [];
	listObjdaiv = [];
	
	
	containerTable = $(".container.table");
	lastIDSelected = -1;
	
	tachObj = listO => {
		let newList = {};
		$.each(listO, (k,v) => {
			if (listO[k].trangThai == "3") listObjchuaiv[v.cmnd] = v;
			else listObjdaiv[v.cmnd] = v;
			newList[v.cmnd] = v;
		});
		listObj = newList;
	}
	
	var tabbar = $('#lisitems');
	listObj = JSON.parse(listObj);
	tachObj(listObj);
	setListItem(listObj, tabbar);
//	$.get("./hosothamdinhiv",
//	{
//	  name: "Donald Duck",
//	  city: "Duckburg"
//	}, function(data, status){
//		var tabbar = $('#lisitems');
//		listObj = JSON.parse(data);
//		tachObj(listObj);
//		setListItem(listObj, tabbar);
//	});
	
	function setListItem(listObj, container, condition){
		$.each(listObj, function(k, v) {
			if (condition == undefined || v.trangThai == condition){
				var item = $('<div></div>').attr('class', 'iteminleftmenu');
				var a = $('<a></a>').attr({
					'href': '#' + k, 
					'id'	: v.cmnd }).text(v.tenKH);
					item.append(a);
					container.append(item);
			}
		});
	};
	
	emptyTabbar = () => {
		$("#lisitems").empty();
	};
	
	$("div.tabbar a").click(function (){
		emptyTabbar();
		
		$(this).siblings("a").removeClass("tabselected");
		$(this).addClass("tabselected");
		console.log($(this).attr("href"));
		
		let listSelected = null;
		switch ($(this).attr("href").toString()){
			case "#all": listSelected = listObj; break;
			case "#chua":listSelected = listObjchuaiv; break;
			case "#xong":listSelected = listObjdaiv; break;
			default: console.log("ko dc");
		}
		setListItem(listSelected, tabbar);
		
		$("#lisitems .iteminleftmenu a").click(function() {
			let id = $(this).attr("href").replace("#", "");
			id = parseInt(id);
			if (lastIDSelected != id){
				lastIDSelected = id;
				containerTable.children().remove(".row.tr")
				lietKeThongTin(listObj[id]);
			}
		});
	});
	
	$("#lisitems .iteminleftmenu a").click(function() {
		let id = $(this).attr("href").replace("#", "");
		id = parseInt(id);
		if (lastIDSelected != id){
			lastIDSelected = id;
			containerTable.children().remove(".row.tr")
			lietKeThongTin(listObj[id]);
		}
	});
	
	lietKeThongTin = (info) => {
		containerTable.append(themrow("Tên khách hàng", info.tenKH).append($("<input type='hidden' name='idHoSo' value='" + info.idHoSo + "'/>")));
		containerTable.append(themrow("Chứng minh nhân dân", info.cmnd));
		containerTable.append(themrow("Giới tính", info.gioiTinh ? "Nữ" : "Nam"));
		containerTable.append(themrow("Ngày sinh", info.ngaySinh));
		
		$.each(info.list, (k, v) => {
			containerTable.append(themrow(info.list[k].tenTC, info.list[k].thongTin, info.list[k].quyen, info.list[k].thamDinh, info.list[k].alias));
		});
		themghichu(info);
	}
	
	themrow = (tc, thongtin, quyen, thamdinh, name) => {
		let div = "<div></div>";
		let input = "<input type='radio'>";
		let divrow = $(div).addClass("row tr");
		let divtc = $(div).addClass("col-sm-6").text(tc);
		let divtt = $(div).addClass("col-sm-6").text(thongtin);
		divrow.append(divtc, divtt);
		return divrow;
	}
	
	themghichu = info => {
		$("#textareahistory").text(info.lichSuGoi);
		$("#textareastatus").text(info.noteTinhTrang);
	}
});