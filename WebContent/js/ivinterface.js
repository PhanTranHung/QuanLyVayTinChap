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
								<a id="listchua" href="#chua">Chưa IV</a>
								<a id="listxong" href="#xong" class="tabselected">Đã IV</a>
							</div>
							<div id='lisitems'>
								<div class="iteminleftmenu">
									<a href="#012345">012345: Cô Cô</a>
								</div>
								
							</div>
						</div>
					</div>`
	var top = `<button class="btn btn-info">Chuyển tới RO</button>
				<button class="btn btn-warning">Đánh rớt</button>`	
	var row = `<div class="col-sm-9 center">
					<div class="container table">
						<div class="row th">
							<div class="col-sm-4">
								Tiêu chí
							</div>
							<div class="col-sm-6">
								Thông tin
							</div>
							<div class="col-sm-1">
								Đúng
							</div>
							<div class="col-sm-1">
								Sai
							</div>
						</div>
						
					</div>
				</div>
				<div class="col-sm-3 left">
					<div class="textarea">
						<label for="textareahistory">Lịch sử khảo sát</label>
						<textarea id="textareahistory" placeholder="dd/mm/YYYY: Lịch sử gặp khách hàng"></textarea>
					</div>
					<div class="textarea">
						<label for="textareastatus">Tình trạng</label>
						<textarea id="textareastatus" placeholder="Ghi rõ lí do nếu đánh rớt"></textarea>
					</div>
					<div>
						<button type="submit">Lưu</button>
						<button type="reset">Hủy</button>
					</div>
				</div>`
	
	$('#top').append(top);
	$('#sidebar').append(sidebar);
	$('#row').append(row);
});