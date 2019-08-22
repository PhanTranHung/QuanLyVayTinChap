package controller.iv;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import common.JSFiles;
import common.TypeOfUser;
import common.Variable;

/**
 * Servlet implementation class DanhSachHoSoIVServlet
 */
//@WebServlet("/DanhSachHoSoIVServlet")
public class DanhSachHoSoIVServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public DanhSachHoSoIVServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		RequestDispatcher rd = req.getRequestDispatcher("frame.jsp");
		req.setAttribute(Variable.TYPE_OF_USER, TypeOfUser.IV);
		req.setAttribute(Variable.THE_JSFILE_HANDLE, JSFiles.IV_HANDLE);
		req.setAttribute(Variable.THE_JSFILE_INTERFACE, JSFiles.IV_INTERFACE);
		rd.forward(req, resp);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
