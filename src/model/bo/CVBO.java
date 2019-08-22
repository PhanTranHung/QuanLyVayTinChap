package model.bo;

import java.util.List;

import model.bean.HoSoCV;
import model.dao.CVDAO;

public class CVBO {
	
	CVDAO cvDao = new CVDAO();
	
	public List<HoSoCV> dsHS(){
		return cvDao.dsHS();
	}
	
}
