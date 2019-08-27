$(document).ready(function(){
	listObj = `[{"list":[{"tenTC":"So dien thoai","alias":"SDT","quyen":0,"thamDinh":true,"thongTin":"0986410644"},{"tenTC":"Dia chi ","alias":"DC","quyen":2,"thamDinh":true,"thongTin":"To 23. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Dia chi dang ki tren so ho khau","alias":"DCSHK","quyen":0,"thamDinh":true,"thongTin":"To 14. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"So dien thoai tham chieu","alias":"SDTTT","quyen":0,"thamDinh":true,"thongTin":"0986410645;0986410646;0986410647"},{"tenTC":"Ma so thue cong ty","alias":"MST","quyen":2,"thamDinh":true,"thongTin":"156234952 "},{"tenTC":"Dia chi cong ty","alias":"DCCT","quyen":2,"thamDinh":true,"thongTin":"To 13. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Luong","alias":"L","quyen":2,"thamDinh":true,"thongTin":"8000000"},{"tenTC":"Hinh thuc nhan luong","alias":"HTNL","quyen":2,"thamDinh":true,"thongTin":"Chuyen khoan"},{"tenTC":"Hop dong lao dong","alias":"HDLD","quyen":0,"thamDinh":true,"thongTin":"123"},{"tenTC":"Bao hiem y te","alias":"BHYT","quyen":2,"thamDinh":true,"thongTin":"456"},{"tenTC":"Ngay vao lam viec","alias":"NVLV","quyen":2,"thamDinh":true,"thongTin":"10/10/2010"},{"tenTC":"So du no","alias":"SDN","quyen":1,"thamDinh":true,"thongTin":"0"},{"tenTC":"Lich su tra no","alias":"LSTN","quyen":1,"thamDinh":true,"thongTin":"Chua tung tra tre"},{"tenTC":"So dien thoai","alias":"SDT","quyen":0,"thamDinh":true,"thongTin":"0986410654"},{"tenTC":"Dia chi ","alias":"DC","quyen":2,"thamDinh":false,"thongTin":"To 13. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Dia chi dang ki tren so ho khau","alias":"DCSHK","quyen":0,"thamDinh":false,"thongTin":"To 14. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"So dien thoai tham chieu","alias":"SDTTT","quyen":0,"thamDinh":false,"thongTin":"0986410645;0986410646;0986410647"},{"tenTC":"Ma so thue cong ty","alias":"MST","quyen":2,"thamDinh":false,"thongTin":"156234952 "},{"tenTC":"Dia chi cong ty","alias":"DCCT","quyen":2,"thamDinh":false,"thongTin":"To 13. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Luong","alias":"L","quyen":2,"thamDinh":false,"thongTin":"8000000"},{"tenTC":"Hinh thuc nhan luong","alias":"HTNL","quyen":2,"thamDinh":false,"thongTin":"Chuyen khoan"},{"tenTC":"Hop dong lao dong","alias":"HDLD","quyen":0,"thamDinh":false,"thongTin":"124"},{"tenTC":"Bao hiem y te","alias":"BHYT","quyen":2,"thamDinh":false,"thongTin":"457"},{"tenTC":"Ngay vao lam viec","alias":"NVLV","quyen":2,"thamDinh":false,"thongTin":"10/10/2010"}],"tenKH":"Dang Ngoc Tuan","cmnd":"125451445","ngaySinh":"Jan 2, 1998","gioiTinh":true},{"list":[{"tenTC":"So dien thoai","alias":"SDT","quyen":0,"thamDinh":true,"thongTin":"0986410644"},{"tenTC":"Dia chi ","alias":"DC","quyen":2,"thamDinh":true,"thongTin":"To 23. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Dia chi dang ki tren so ho khau","alias":"DCSHK","quyen":0,"thamDinh":true,"thongTin":"To 14. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"So dien thoai tham chieu","alias":"SDTTT","quyen":0,"thamDinh":true,"thongTin":"0986410645;0986410646;0986410647"},{"tenTC":"Ma so thue cong ty","alias":"MST","quyen":2,"thamDinh":true,"thongTin":"156234952 "},{"tenTC":"Dia chi cong ty","alias":"DCCT","quyen":2,"thamDinh":true,"thongTin":"To 13. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Luong","alias":"L","quyen":2,"thamDinh":true,"thongTin":"8000000"},{"tenTC":"Hinh thuc nhan luong","alias":"HTNL","quyen":2,"thamDinh":true,"thongTin":"Chuyen khoan"},{"tenTC":"Hop dong lao dong","alias":"HDLD","quyen":0,"thamDinh":true,"thongTin":"123"},{"tenTC":"Bao hiem y te","alias":"BHYT","quyen":2,"thamDinh":true,"thongTin":"456"},{"tenTC":"Ngay vao lam viec","alias":"NVLV","quyen":2,"thamDinh":true,"thongTin":"10/10/2010"},{"tenTC":"So du no","alias":"SDN","quyen":1,"thamDinh":true,"thongTin":"0"},{"tenTC":"Lich su tra no","alias":"LSTN","quyen":1,"thamDinh":true,"thongTin":"Chua tung tra tre"},{"tenTC":"So dien thoai","alias":"SDT","quyen":0,"thamDinh":true,"thongTin":"0986410654"},{"tenTC":"Dia chi ","alias":"DC","quyen":2,"thamDinh":false,"thongTin":"To 13. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Dia chi dang ki tren so ho khau","alias":"DCSHK","quyen":0,"thamDinh":false,"thongTin":"To 14. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"So dien thoai tham chieu","alias":"SDTTT","quyen":0,"thamDinh":false,"thongTin":"0986410645;0986410646;0986410647"},{"tenTC":"Ma so thue cong ty","alias":"MST","quyen":2,"thamDinh":false,"thongTin":"156234952 "},{"tenTC":"Dia chi cong ty","alias":"DCCT","quyen":2,"thamDinh":false,"thongTin":"To 13. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Luong","alias":"L","quyen":2,"thamDinh":false,"thongTin":"8000000"},{"tenTC":"Hinh thuc nhan luong","alias":"HTNL","quyen":2,"thamDinh":false,"thongTin":"Chuyen khoan"},{"tenTC":"Hop dong lao dong","alias":"HDLD","quyen":0,"thamDinh":false,"thongTin":"124"},{"tenTC":"Bao hiem y te","alias":"BHYT","quyen":2,"thamDinh":false,"thongTin":"457"},{"tenTC":"Ngay vao lam viec","alias":"NVLV","quyen":2,"thamDinh":false,"thongTin":"10/10/2010"}],"tenKH":"Nguyen Dinh Dung","cmnd":"125496354","ngaySinh":"Sep 23, 1987","gioiTinh":true},{"list":[{"tenTC":"So dien thoai","alias":"SDT","quyen":0,"thamDinh":true,"thongTin":"0986410644"},{"tenTC":"Dia chi ","alias":"DC","quyen":2,"thamDinh":true,"thongTin":"To 23. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Dia chi dang ki tren so ho khau","alias":"DCSHK","quyen":0,"thamDinh":true,"thongTin":"To 14. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"So dien thoai tham chieu","alias":"SDTTT","quyen":0,"thamDinh":true,"thongTin":"0986410645;0986410646;0986410647"},{"tenTC":"Ma so thue cong ty","alias":"MST","quyen":2,"thamDinh":true,"thongTin":"156234952 "},{"tenTC":"Dia chi cong ty","alias":"DCCT","quyen":2,"thamDinh":true,"thongTin":"To 13. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Luong","alias":"L","quyen":2,"thamDinh":true,"thongTin":"8000000"},{"tenTC":"Hinh thuc nhan luong","alias":"HTNL","quyen":2,"thamDinh":true,"thongTin":"Chuyen khoan"},{"tenTC":"Hop dong lao dong","alias":"HDLD","quyen":0,"thamDinh":true,"thongTin":"123"},{"tenTC":"Bao hiem y te","alias":"BHYT","quyen":2,"thamDinh":true,"thongTin":"456"},{"tenTC":"Ngay vao lam viec","alias":"NVLV","quyen":2,"thamDinh":true,"thongTin":"10/10/2010"},{"tenTC":"So du no","alias":"SDN","quyen":1,"thamDinh":true,"thongTin":"0"},{"tenTC":"Lich su tra no","alias":"LSTN","quyen":1,"thamDinh":true,"thongTin":"Chua tung tra tre"},{"tenTC":"So dien thoai","alias":"SDT","quyen":0,"thamDinh":true,"thongTin":"0986410654"},{"tenTC":"Dia chi ","alias":"DC","quyen":2,"thamDinh":false,"thongTin":"To 13. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Dia chi dang ki tren so ho khau","alias":"DCSHK","quyen":0,"thamDinh":false,"thongTin":"To 14. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"So dien thoai tham chieu","alias":"SDTTT","quyen":0,"thamDinh":false,"thongTin":"0986410645;0986410646;0986410647"},{"tenTC":"Ma so thue cong ty","alias":"MST","quyen":2,"thamDinh":false,"thongTin":"156234952 "},{"tenTC":"Dia chi cong ty","alias":"DCCT","quyen":2,"thamDinh":false,"thongTin":"To 13. phuong Hoa Xuan, quan Cam Le, Da Nang"},{"tenTC":"Luong","alias":"L","quyen":2,"thamDinh":false,"thongTin":"8000000"},{"tenTC":"Hinh thuc nhan luong","alias":"HTNL","quyen":2,"thamDinh":false,"thongTin":"Chuyen khoan"},{"tenTC":"Hop dong lao dong","alias":"HDLD","quyen":0,"thamDinh":false,"thongTin":"124"},{"tenTC":"Bao hiem y te","alias":"BHYT","quyen":2,"thamDinh":false,"thongTin":"457"},{"tenTC":"Ngay vao lam viec","alias":"NVLV","quyen":2,"thamDinh":false,"thongTin":"10/10/2010"}],"tenKH":"Nguyen Thi Hoai Thuong","cmnd":"245632584","ngaySinh":"Feb 19, 1992","gioiTinh":false}]`;
	listObjchuaiv = [];
	listObjdaiv = [];
	
	
	containerTable = $(".container.table");
	lastIDSelected = -1;
	
	tachObj = listObj => {
		$.each(listObj, (k,v) => {
			if (listObj[k].trangThai == "4") listObjchuaiv.push(listObj[k]);
			else listObjdaiv.push(listObj[k]);
		})
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