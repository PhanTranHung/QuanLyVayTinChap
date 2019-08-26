package model.bean;

public class HoSoIV {
	String idHoSo ;
	String sdt ;
	String diaChi;
	
	public HoSoIV() {
		
	}
	public HoSoIV(String idHoSo, String sdt, String diaChi) {
		super();
		this.idHoSo = idHoSo;
		this.sdt = sdt;
		this.diaChi = diaChi;
	}
	public String getIdHoSo() {
		return idHoSo;
	}
	public void setIdHoSo(String idHoSo) {
		this.idHoSo = idHoSo;
	}
	public String getSdt() {
		return sdt;
	}
	public void setSdt(String sdt) {
		this.sdt = sdt;
	}
	public String getDiaChi() {
		return diaChi;
	}
	public void setDiaChi(String diaChi) {
		this.diaChi = diaChi;
	}
	
	

}
