package controller.iv;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import common.JSFiles;
import common.TypeOfUser;
import common.Variable;

/**
 * Servlet implementation class DanhSachHoSoIVServlet
 */
//@WebServlet("/DanhSachHoSoIVServlet")
public class IVInterfaceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public IVInterfaceServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		/**
		 * Trả về giao diện cho người dùng
		 */
		HttpSession session = req.getSession();
		String chucVu =(String) session.getAttribute("chucVu");
		if (chucVu == null) {
			RequestDispatcher rd = req.getRequestDispatcher("./IVOffice/iv.jsp");
			req.setAttribute(Variable.TYPE_OF_USER, TypeOfUser.IV);
			req.setAttribute(Variable.THE_JSFILE_HANDLE, JSFiles.IV_HANDLE);
			req.setAttribute(Variable.THE_JSFILE_INTERFACE, JSFiles.IV_INTERFACE);
			rd.forward(req, resp);
		
		} else {
			switch (chucVu) {
			case "sale":
				resp.sendRedirect("homesale");
				break;
			case "admin": 
				resp.sendRedirect("homeadmin");
				break;
			case "cv": 
				resp.sendRedirect("homecv");
				break;
			case "fv" : 
				resp.sendRedirect("homefv");
				break;
			case "iv" : 
				resp.sendRedirect("homeiv");
				break ;
			case "ro" : 
				resp.sendRedirect("homero");
				break ;
			}
		}
		
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		/**
		 * Không làm gì hết
		 */
		
//		// TODO Auto-generated method stub
//		doGet(request, response);
	}

}
