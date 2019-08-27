package controller.fv;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import model.bean.HoSoFV;
import model.bean.TieuChi;
import model.bo.CVBO;
import model.bo.FVBO;

public class HoSoThamDinhFVServlet extends HttpServlet {

	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		FVBO fvBo = new FVBO();
		List<HoSoFV> list;
		list = fvBo.dsHs();

		System.out.println("some things ");
		Gson gson = new Gson();
		String json = gson.toJson(list);
		resp.getWriter().write(json);

	}

	@Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

		FVBO fvBo = new FVBO();

		String idHoSo = req.getParameter("idHoSo");

		List<TieuChi> listAllTenTieuChi = fvBo.listAllTenTieuChi();
		
		int listSize = listAllTenTieuChi.size();
		for (int i = 0; i < listSize; i++) {
			TieuChi tieuchi = listAllTenTieuChi.get(i);

			String val = req.getParameter(tieuchi.getAlias());
			
			//System.out.println(val);

			fvBo.ThamDinh(val, idHoSo, tieuchi.getTenTC());

		}

	}
	/**
	 * doGet: Trả về danh sách hồ sơ đang FV và đã FV dưới dạng JSON Nhớ là cả thông
	 * tin thẩm định đúng or sai
	 * 
	 * doPost: Nhận thông tin đã thẩm định và insert vào CSDL Chú ý: kiểm tra xem
	 * người dùng lưu hay chuyển tới bộ phận tiếp theo Sau khi xong redirect người
	 * dùng về trang homefv, đảm bảo khi F5 không hiện lại form xác nhận resubmit
	 */

}
