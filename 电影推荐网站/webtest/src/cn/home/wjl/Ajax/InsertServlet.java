package cn.home.wjl.Ajax;
import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import cn.home.wjl.database.factory.DAOFactory;
import cn.home.wjl.database.vo.User;
public class InsertServlet extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public void doGet(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		this.doPost(req, resp);
	}
	public void doPost(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		//String path="login.jsp";
				//String path1="register.html";
				//req.getRequestDispatcher(path);*/
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html");
		resp.setCharacterEncoding("utf-8");
		User user=new User();
		user.setUsername(req.getParameter("username"));
		user.setFirstName(req.getParameter("FirstName"));
		user.setLastName(req.getParameter("LastName"));
		user.setEmail(req.getParameter("Email"));
		user.setFavoriteGenre(req.getParameter("FavoriteGenre"));
		user.setFavoriteMovie(req.getParameter("FavoriteMovie"));
		user.setDescribe(req.getParameter("Describe"));
	//	PrintWriter out=resp.getWriter();
		try{
			if(DAOFactory.getIUserDAOInstance().doCreate(user)){
				req.getRequestDispatcher("thanks.html").forward(req, resp);
			}else{
				req.getRequestDispatcher("register.html").forward(req, resp);
			}
		}catch(Exception e){
			e.printStackTrace();
		}
	}
}
