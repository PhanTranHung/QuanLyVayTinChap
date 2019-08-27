package controller.cv;

import javax.servlet.http.HttpServlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import model.bean.HoSoCV;
import model.bo.CVBO;

public class HoSoThamDinhCVServlet extends HttpServlet{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

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

		String idHoSo = req.getParameter("idHoSo"); 
		String SDT = req.getParameter("SDT"); 
		String DC = req.getParameter("DC"); 
		String DCSHK = req.getParameter("DCSHK"); 
		String SDTTT = req.getParameter("SDTTT"); 
		String MST = req.getParameter("MST"); 
		String DCCT = req.getParameter("DCCT"); 
		String L = req.getParameter("L"); 
		String HTNL = req.getParameter("HTNL"); 
		String HDLD = req.getParameter("HDLD"); 
		String BHYT = req.getParameter("BHYT"); 
		String NVLV = req.getParameter("NVLV"); 
		String callhistory = req.getParameter("callhistory"); 
		String status = req.getParameter("status"); 
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
