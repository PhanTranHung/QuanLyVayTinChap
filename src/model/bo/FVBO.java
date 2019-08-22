package model.bo;

import java.util.List;

import model.bean.HoSoFV;
import model.dao.FVDAO;

public class FVBO {
	FVDAO fvDao = new FVDAO();
	public List<HoSoFV> dsHs(){
		return fvDao.dsHS();
	}
	
}
