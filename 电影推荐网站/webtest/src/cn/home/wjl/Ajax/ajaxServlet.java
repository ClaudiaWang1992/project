package cn.home.wjl.Ajax;
import cn.home.wjl.Ajax.User;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
public class ajaxServlet extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		User member1=new User();
		User member2=new User();
		User member3=new User();
		PrintWriter out=resp.getWriter();
		member1.setUserid("1");
		member1.setName("王佳蕾");
		member2.setUserid("2");
		member2.setName("坂田银时");
		member3.setUserid("3");
		member3.setName("志村新八");
		User a[];
		a=new User[3];
		a[0]=member1;
		a[1]=member2;
		a[2]=member3;
		resp.setHeader("content-type", "text/html;charset=utf-8");
		out.print(a);
	}
	public void doPost(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		this.doGet(req, resp);
	}
}
