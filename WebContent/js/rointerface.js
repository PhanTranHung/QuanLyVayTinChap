$(document).ready(function() {
	var sidebar = `<div class="info">
						<div class="container avatar">
							<img src="./img/avatar.jpg" width="100%">
						</div>
						<div class="searchbar">
							<div class="style-scope">
								<input class="search" id='search' type="text" name="search" placeholder="Search">
								<span id="searchreset" class="btnreset">x</span>
							</div>
						</div>
					</div>
					<div class="leftmenuinner">
						<div class="leftmenuinnerinner">
							<div class="tabbar">
								<a id="listall" href="#all">Tất cả</a>
								<a id="listchua" href="#chua">Chưa RO</a>
								<a id="listxong" href="#xong" class="tabselected">Đã RO</a>
							</div>
							<div id='lisitems'>
								
							</div>
						</div>
					</div>`
	var top = `<button class="btn btn-info">Hoàn tất</button>
				<button class="btn btn-warning">Đánh rớt</button>`
	var row = `<div class="col-sm-6 center">
					<div class="container table">
						<div class="row th stickytop">
							<div class="col-sm-5">
								Tiêu chí
							</div>
							<div class="col-sm-7">
								Thông tin
							</div>
						</div>
						<div class="row tr">
							<div class="col-sm-5">
								Tên khách hàng
							</div>
							<div class="col-sm-7">
								Zoãn Chí Bình
							</div>
						</div>
						
						</div>
					</div>
				</div>
				<div class="col-sm-3 center">
					<div class="col-input stickytop">
						<div class="inputitem">
							<label for="tienvaythucte">Số tiền vay thực tế</label>
							<div class="inputiteminner">
								<input id="tienvaythucte" placeholder="Đơn vị: triệu đồng"></input>
							</div>
						</div>
						<div class="inputitem">
							<label for="thoihanvay">Thời hạn vay</label>
							<div class="inputiteminner">
								<input id="thoihanvay" placeholder="Đơn vị: tháng"></input>
							</div>
						</div>
						<div class="inputitem">
							<label for="laisuat">Lãi suất</label>
							<div class="inputiteminner">
								<input id="laisuat" placeholder="Đơn vị phần trăm"></input>
							</div>
						</div>
						<div class="inputitem">
							<label for="thoigianky">Thời gian ký hợp đồng</label>
							<div class="inputiteminner">
								<input id="thoigianky" placeholder="dd-mm-YYYY"></input>
							</div>
						</div>
					</div>
				</div>
				<div class="col-sm-3 center">
					<div class="stickytop">
						<div class="textarea">
							<label for="textareahistory">Lịch sử gọi</label>
							<textarea id="textareahistory" placeholder="dd/mm/YYYY: Ghi chú cuộc gọi"></textarea>
						</div>
						<div class="textarea">
							<label for="textareastatus">Tình trạng</label>
							<textarea id="textareastatus" placeholder="Ghi rõ lí do nếu đánh rớt"></textarea>
						</div>
						<div>
							<button type="submit">Lưu</button>
							<button type="reset">Hủy</button>
						</div>
					</div>
				</div>`
	
	$('#top').append(top);
	$('#sidebar').append(sidebar);
	$('#row').append(row);
});