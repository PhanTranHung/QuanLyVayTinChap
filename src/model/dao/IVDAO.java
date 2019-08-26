package model.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import model.bean.HoSoIV;
import model.bean.TieuChi;

public class IVDAO {
	
	ExcuteDB excuter = new ExcuteDB();

public List<HoSoIV> dsHS(){
	List<HoSoIV> list = new ArrayList<HoSoIV>();
	
	ExcuteDB excuter = new ExcuteDB();
	String sql=	String.format("select a1.IDHoSo, a1.SDT, a2.DiaChi\r\n" + 
			"from [iv] as a1\r\n" + 
			"inner join [iv] as a2\r\n" + 
			"on a1.IDHoSo = a2.IDHoSo\r\n" + 
			"where a1.SDT is not null and a2.DiaChi is not null");
	ResultSet rs = excuter.executeQuery(sql);
	
	try {
		while(rs.next()){
			HoSoIV hoSoCv = new HoSoIV();
			hoSoCv.setIdHoSo(rs.getString("IDHoSo"));
			hoSoCv.setSdt(rs.getString("SDT"));
			hoSoCv.setDiaChi(rs.getString("DiaChi"));
			list.add(hoSoCv);
		}
	} catch (SQLException e) {
		e.printStackTrace();
	}
	
	return list ;
}

}
