package controller.cv;

import javax.servlet.http.HttpServlet;

public class HoSoThamDinhCVServlet extends HttpServlet{
	/**
	 * doGet: Trả về danh sách hồ sơ đang CV và đã cv dưới dạng JSON
	 * 		Nhớ là cả thông tin thẩm định đúng or sai
	 * 
	 * doPost: Nhận thông tin đã thẩm định và insert vào CSDL
	 * 		Chú ý: kiểm tra xem người dùng lưu hay chuyển tới bộ phận tiếp theo
	 * 		Sau khi xong redirect người dùng về trang homecv, đảm bảo khi F5 không hiện lại form xác nhận resubmit
	 */
}
