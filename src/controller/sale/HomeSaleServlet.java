package controller.sale;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.JSFiles;
import common.TypeOfUser;
import common.Variable;
import model.bean.CongTy;
import model.bo.SaleBO;

/**
 * Servlet implementation class ThongTinCongTyServlet
 */
//@WebServlet("/ThongTinCongTyServlet")
public class ThongTinCongTyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ThongTinCongTyServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		// TODO Auto-generated method stub
		RequestDispatcher rd = req.getRequestDispatcher("frame.jsp");
		req.setAttribute(Variable.TYPE_OF_USER, TypeOfUser.SALE_PERSONAL);
		req.setAttribute(Variable.THE_JSFILE_HANDLE, JSFiles.SALE_HANDLE);
		req.setAttribute(Variable.THE_JSFILE_INTERFACE, JSFiles.SALE_INTERFACE);
		rd.forward(req, resp);
		
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		SaleBO saleBo = new SaleBO();
		List<CongTy> congTy = saleBo.thongTinCT();
		System.out.println("some thing");
	}

}
