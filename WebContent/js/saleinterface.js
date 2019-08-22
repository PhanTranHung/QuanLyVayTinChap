$(document).ready(function() {
	var sidebar = `<div class="frameavatar">
					<div class="frameavatarinner">
						<img src="./img/avatar.jpg" width="100%">
					</div>
				</div>
				<div class="horizontaltab">
					<div class="horizontaltabinner">
						<div class="listitems">
							<div class="iteminleftmenu">
								<a id="formkh" href="#012345" class="itemselected">Tìm thông tin khách hàng</a>
							</div>
							<div class="iteminleftmenu">
								<a id="formcty" href="#012345">Tìm thông tin công ty</a>
							</div>
						</div>
					</div>
				</div>`
		
	var row = `<div class="col-sm-3 center">
				<div class="col-input stickytop">
					<div class="inputitem">
						<label for="inputitem1">Tên khách hàng</label>										
						<div class="searchitem">
							<div class="style-scope-inner">
								<input class="search" id='inputitem1' type="text" name="ten" placeholder="Tên khách hàng">
								<span id="searchreset" class="btnreset">x</span>
							</div>
						</div>
					</div>
					<div class="inputitem">
						<label for="inputitem2">Ngày sinh</label>										
						<div class="searchitem">
							<div class="style-scope-inner">
								<input class="search" id='inputitem2' type="text" name="ngaysinh" placeholder="Ngày sinh">
								<span id="searchreset" class="btnreset">x</span>
							</div>
						</div>
					</div>
					<div class="inputitem">
						<label for="inputitem3">Số CMND</label>										
						<div class="searchitem">
							<div class="style-scope-inner">
								<input class="search" id='inputitem3' type="text" name="socmnd" placeholder="Số CMND">
								<span id="searchreset" class="btnreset">x</span>
							</div>
						</div>
					</div>
					<div class="" style="text-align: center;">
						<button id="btntimkiem" type="button" class="btn btn-info">
				     	<span class="glyphicon glyphicon-search"></span> Search
				    </button>
						<input id="typeofsubmit" type="hidden" name="typeofsubmit" value="formkh">
					</div>
				</div>
			</div>
			<div class="col-sm-6 center">
				<div class="container table">
					<div class="row th stickytop">
						<div class="col-sm-5">
							Tiêu chí
						</div>
						<div class="col-sm-7">
							Thông tin
						</div>
					</div>
					<div id="tablecontent">
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
		`
	
	$('#top').append('<button class="btn btn-info">Logout</button>');
	$('#sidebar').append(sidebar);
	$('#row').append(row);
});