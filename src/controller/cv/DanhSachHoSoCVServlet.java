package controller.cv;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.Gson;

import common.JSFiles;
import common.TypeOfUser;
import common.Variable;
import model.bean.HoSoCV;
import model.bo.CVBO;

/**
 * Servlet implementation class DanhSachHoSoCVServlet
 */
//@WebServlet("/DanhSachHoSoCVServlet")
public class DanhSachHoSoCVServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DanhSachHoSoCVServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		System.out.println("some things");
		RequestDispatcher rd = req.getRequestDispatcher("frame.jsp");
		req.setAttribute(Variable.TYPE_OF_USER, TypeOfUser.CV);
		req.setAttribute(Variable.THE_JSFILE_INTERFACE, JSFiles.CV_INTERFACE);
		req.setAttribute(Variable.THE_JSFILE_HANDLE, JSFiles.CV_HANDLE);
		rd.forward(req, resp);
	}
	

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		CVBO cvBo = new CVBO();
		List<HoSoCV> list ;
		list = cvBo.dsHS();
		
		Gson gson = new Gson();
		String json = gson.toJson(list);
		response.getWriter().write(json);
	}

}
