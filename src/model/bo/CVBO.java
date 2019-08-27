package model.bo;

import java.util.List;

import model.bean.HoSoCV;
import model.bean.TieuChi;
import model.dao.CVDAO;

public class CVBO {
	
	CVDAO cvDao = new CVDAO();
	
	public List<HoSoCV> dsHS(){
		return cvDao.dsHS();
	}
	public  List<TieuChi> listAllTenTieuChi(){
		return cvDao.listAllTenTieuChi();
	}
	public void ThamDinh(String val, String idHoSo,String idTieuChi) {
		 cvDao.ThamDinh(val, idHoSo, idTieuChi);
	}
	public void ChuyenTrangThai(String idHoSo) {
		cvDao.ChuyenTrangThai(idHoSo);
	}
}
