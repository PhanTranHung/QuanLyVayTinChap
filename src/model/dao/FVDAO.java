package model.dao;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import model.bean.HoSoCV;
import model.bean.HoSoFV;
import model.bean.TieuChi;

public class FVDAO {

	public List<TieuChi> listTieuChi() {
		List<TieuChi> list = new ArrayList<TieuChi>();
		ExcuteDB excuter = new ExcuteDB();

		String sql = String.format("select TenTieuChi,Alias,Quyen from TieuChi");
		ResultSet rs = excuter.executeQuery(sql);
		try {
			while (rs.next()) {
				TieuChi tc = new TieuChi();
				tc.setTenTC(rs.getString("TenTieuChi"));
				tc.setAlias(rs.getString("Alias"));
				tc.setQuyen(rs.getInt("Quyen"));
				list.add(tc);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}

		return list;

	}

	public List<HoSoFV> dsHS() {
		List<HoSoFV> list = new ArrayList<HoSoFV>();

		ExcuteDB excuter = new ExcuteDB();
		String sql = String.format("select Ten,KhachHang.CMNDKhachHang as CMNDKhachHang,NgaySinh,GioiTinh,LichSuFV,GhiChu,TrangThai " + 
				"from KhachHang " + 
				"inner join HoSo " + 
				"on KhachHang.CMNDKhachHang = HoSo.CMNDKhachHang");
		ResultSet rs = excuter.executeQuery(sql);
		try {
			while (rs.next()) {
				HoSoFV hoSoFv = new HoSoFV();
				hoSoFv.setTenKH(rs.getString("Ten"));
				hoSoFv.setCmnd(rs.getString("CMNDKhachHang"));
				Date date = rs.getDate("NgaySinh");
				hoSoFv.setNgaySinh(date);
				if (rs.getInt("GioiTinh") == 0) {
					hoSoFv.setGioiTinh(false);
				} else {
					hoSoFv.setGioiTinh(true);
				}
				hoSoFv.setLichSuGoi(rs.getString("LichSuFV"));
				hoSoFv.setNoteTinhTrang(rs.getString("GhiChu"));
				hoSoFv.setTrangThai(rs.getInt("TrangThai"));
				List<TieuChi> tieuChi = new FVDAO().listTieuChi();
				hoSoFv.setList(tieuChi);

				list.add(hoSoFv);
			}
		} catch (SQLException e) {
			e.printStackTrace();
		}
		return list;
	}

}
