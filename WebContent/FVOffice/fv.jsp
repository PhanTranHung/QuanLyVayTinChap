<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@page import="common.Variable" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
	<head>
		<meta charset="UTF-8">
		<title>Welcome <%=request.getAttribute(Variable.TYPE_OF_USER) %></title>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
		<link rel="stylesheet" type="text/css" href="./css/frame.css">
	
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
	
		<script type="text/javascript" src='<%=request.getAttribute(Variable.THE_JSFILE_INTERFACE) %>' charset="UTF-8"></script>
		<script type="text/javascript" src='<%=request.getAttribute(Variable.THE_JSFILE_HANDLE) %>' charset="UTF-8"></script>
	</head>
	<body>
		<div class="container-fuild">
			<div class="">
				<div id="sidebar" class='sidebar'>
					<div class="info">
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
								<a id="listchua" href="#chua">Chưa FV</a>
								<a id="listxong" href="#xong" class="tabselected">Đã FV</a>
							</div>
							<div id='lisitems'>
								
								<div class="iteminleftmenu">
									<a href="#012345">012345: Tình công Tử</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div id="main" class="main">
					<div class="container">
						<div id='top' class="top">
							<button class="btn btn-info">Chuyển tới IV</button>
							<button class="btn btn-warning">Đánh rớt</button>
						</div>
						<div id="row" class="row">
							<div class="col-sm-9 center">
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
									<div class="row tr">
										<div class="col-sm-4">
											Tên khách hàng
										</div>
										<div class="col-sm-6">
											Zoãn Chí Bình
										</div>
										<div class="col-sm-1">
											<input type="radio" name="name" value="1">
										</div>
										<div class="col-sm-1">
											<input type="radio" name="name" value="0">
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
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>