package cn.home.wjl.Ajax;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONObject;
import cn.home.wjl.database.vo.User2;
public class registerServlet extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		req.setCharacterEncoding("utf-8");
		resp.setCharacterEncoding("utf-8");
		resp.setHeader("content-type","text/html;charset=utf-8");
		PrintWriter out=resp.getWriter();
		JSONObject jsonObject=new JSONObject();
		User2 person=new User2();
		person.setUsername(req.getParameter("username"));
		person.setFirstName(req.getParameter("FirstName"));
		person.setLastName(req.getParameter("LastName"));
		person.setEmail(req.getParameter("Email"));
		person.setFavoriteGenre(req.getParameter("FavoriteGenre"));
		person.setFavoriteMovie(req.getParameter("FavoriteMovie"));
		person.setDescribe(req.getParameter("Describe"));
		jsonObject=JSONObject.fromObject(person);
		//String info="Welcome"+username+"come our page, your favorite movie genre is:"+FavoriteGenre;
		/*out.print("Welcome"+username+"come our page");
		out.print("\r\n");
		out.print("your favorite movie genre is:"+FavoriteGenre);*/
		out.print(jsonObject);
	}
	public void doPost(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		this.doGet(req,resp);
	}
}
