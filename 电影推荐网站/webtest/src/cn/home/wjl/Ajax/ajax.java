package cn.home.wjl.Ajax;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class ajax extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		String user=java.net.URLDecoder.decode(req.getParameter("user"),"utf-8");
		String pwd=java.net.URLDecoder.decode(req.getParameter("pwd"),"utf-8");
		//String user=req.getParameter("user");
		//String pwd=req.getParameter("pwd");
		resp.setHeader("Content-type", "text/html;charset=utf-8");
		//req.setCharacterEncoding("utf-8");
	    resp.setCharacterEncoding("utf-8");
		PrintWriter out=resp.getWriter();
		out.println("用户名为："+user+"，密码为："+pwd);
	}
	public void doPost(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		this.doGet(req, resp);
	}
}
