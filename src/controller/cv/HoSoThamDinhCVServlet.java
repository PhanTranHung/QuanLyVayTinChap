package controller.cv;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import model.bean.HoSoCV;
import model.bo.CVBO;

public class HoSoThamDinhCVServlet extends HttpServlet{

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		List<HoSoCV> list ;
		
		CVBO cvBo = new CVBO();
		list = cvBo.dsHS();
		
		Gson gson = new Gson();
		String json = gson.toJson(list);
		resp.getWriter().write(json);
		
	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		super.doPost(req, resp);
	}
	/**
	 * doGet: Trả về danh sách hồ sơ đang CV và đã cv dưới dạng JSON
	 * 		Nhớ là cả thông tin thẩm định đúng or sai
	 * 
	 * doPost: Nhận thông tin đã thẩm địn	h và insert vào CSDL
	 * 		Chú ý: kiểm tra xem người dùng lưu hay chuyển tới bộ phận tiếp theo
	 * 		Sau khi xong redirect người dùng về trang homecv, đảm bảo khi F5 không hiện lại form xác nhận resubmit
	 */
	
	
}
