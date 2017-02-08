package cn.home.wjl.Ajax;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import net.sf.json.JSONObject;
import net.sf.json.JSONArray;
import cn.home.wjl.normal.jsonUtil;
public class backend extends HttpServlet{
	private static final long serialVersionUID = 1L;
	public static final String DBDRIVER="org.gjt.mm.mysql.Driver";
	public static final String DBURL="jdbc:mysql://localhost:3306/adim";
	public static final String DBUSER="root";
	public static final String DBPASS="wjl19920521";
	public void doGet(HttpServletRequest req,HttpServletResponse resp) throws ServletException,IOException{
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html");
		resp.setCharacterEncoding("utf-8");
		resp.setHeader("content-type","text/html;charset=utf-8");
		Connection conn=null;
		PreparedStatement pstmt=null;
		PreparedStatement pstmt1=null;
		ResultSet rs=null;
		PrintWriter out=resp.getWriter();
		JSONObject object=new JSONObject();
		try{
			Class.forName(DBDRIVER);
			conn=DriverManager.getConnection(DBURL, DBUSER, DBPASS);
			String action=req.getParameter("action");
			//Date date=new Date();
			//int timestamp= (int)date.getTime();
			long currentTime=System.currentTimeMillis();
			int timestamp= new Long(currentTime).intValue();
		    if(action.equalsIgnoreCase("postmsg")){
				String sql="INSERT INTO messages(users,msg,times) VALUES (?,?,?)";
				pstmt=conn.prepareStatement(sql);
				String message=req.getParameter("message");
				String name=req.getParameter("name");
				//String times=req.getParameter("times");
				pstmt.setString(1, name);
				pstmt.setString(2,message);
				pstmt.setInt(3, timestamp);
				if(pstmt.executeUpdate()>0){
				   object.element("string", true);
				}
				pstmt.close();
		  }else{
				//Date date=new Date();
				//int timestamp= (int)date.getTime();
				//String sql_1="SELECT * FROM messages";
				String sql_1="SELECT * FROM adim.messages WHERE id > (SELECT MAX(id) FROM adim.messages) - 10";
				pstmt1=conn.prepareStatement(sql_1);
				rs=pstmt1.executeQuery();
				jsonUtil json=new jsonUtil();
				JSONArray result=json.resultSetToJson(rs);
				object.element("status", 1);
				object.element("time", timestamp);
				object.element("message",result);
		      }
			out.print(object);
			
		}catch(Exception e){
			e.printStackTrace();
		}finally{
			try{
				conn.close();
			}catch(SQLException e){
				e.printStackTrace();
			}
		}
	}
	public void doPost(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		this.doGet(req,resp);
	}
}
