package cn.home.wjl.Ajax;
import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONArray;
import cn.home.wjl.database.factory._DAOFactory;
import cn.home.wjl.database.vo.User2;
public class InsertServlet2 extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	public static final String DBDRIVER="org.gjt.mm.mysql.Driver";
	public static final String DBURL="jdbc:mysql://localhost:3306/adim";
	public static final String DBUSER="root";
	public static final String DBPASS="wjl19920521";
	private JSONArray rs;
	public void doGet(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html");
		resp.setCharacterEncoding("utf-8");
		resp.setHeader("content-type","text/html;charset=utf-8");
		//Connection conn=null;
		//PreparedStatement pstmt=null;
		PrintWriter out=resp.getWriter();
		//JSONObject jsonObject=null;
		User2 person=new User2();
		//JSONArray result=null;
		String username=java.net.URLDecoder.decode(req.getParameter("username"), "utf-8");
		String password1=java.net.URLDecoder.decode(req.getParameter("password1"), "utf-8");
		String FirstName=java.net.URLDecoder.decode(req.getParameter("FirstName"), "utf-8");
		String LastName=java.net.URLDecoder.decode(req.getParameter("LastName"), "utf-8");
		String Email=java.net.URLDecoder.decode(req.getParameter("Email"), "utf-8");
		String FavoriteGenre=java.net.URLDecoder.decode(req.getParameter("FavoriteGenre"), "utf-8");
		String FavoriteMovie=java.net.URLDecoder.decode(req.getParameter("FavoriteMovie"), "utf-8");
		String Describe=java.net.URLDecoder.decode(req.getParameter("Describe"), "utf-8");
		person.setUsername(username);
		person.setUserPassword(password1);
		person.setFirstName(FirstName);
		person.setLastName(LastName);
		person.setEmail(Email);
		person.setFavoriteGenre(FavoriteGenre);
		person.setFavoriteMovie(FavoriteMovie);
		person.setDescribe(Describe);
		try{
			//Class.forName(DBDRIVER);
			//conn=DriverManager.getConnection(DBURL, DBUSER, DBPASS);
			if(_DAOFactory.getIUserDAOInstance().doCreate(person)){
				setRs(_DAOFactory.getIUserDAOInstance().findLogin(person.getFirstName()));
				/*直接在这里执行select语句
				 * String sql="SELECT * FROM movies2 WHERE FirstName=?";
				pstmt=conn.prepareStatement(sql);
				pstmt.setString(1, person.getFirstName());
				rs=pstmt.executeQuery();
				json=new jsonUtil();
				result=json.resultSetToJson(rs);*/
			}
			out.print(this.getRs());
		}catch(Exception e){
			e.printStackTrace();
		}
	}
	public void doPost(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		this.doGet(req,resp);
	}
	public JSONArray getRs() {
		return rs;
	}
	public void setRs(JSONArray rs) {
		this.rs = rs;
	}
}
