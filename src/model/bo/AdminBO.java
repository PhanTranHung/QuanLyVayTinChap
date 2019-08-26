package model.bo;

import model.bean.HoSoAdmin;
import model.dao.AdminDAO;

public class AdminBO {
	
	AdminDAO adminDao = new AdminDAO();
	public void themKhachHang(HoSoAdmin hoSoAdmin) {
		adminDao.themKhachHang(hoSoAdmin);
	}
	
}
