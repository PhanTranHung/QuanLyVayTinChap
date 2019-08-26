package model.bean;

import java.util.ArrayList;
import java.util.List;

public class HoSoRO extends HoSoKhachHang{
	
	List<TieuChi> list = new ArrayList<TieuChi>();
	
	public HoSoRO() {
		
	}

	public HoSoRO(List<TieuChi> list) {
		super();
		this.list = list;
	}

	public List<TieuChi> getList() {
		return list;
	}

	public void setList(List<TieuChi> list) {
		this.list = list;
	}
	

}
