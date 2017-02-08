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
public class CheckServlet extends HttpServlet{
	/**
	 * 
	 */
	private static final long serialVersionUID = -8357398806786851191L;
	public static final String DBDRIVER="org.gjt.mm.mysql.Driver";
	public static final String DBURL="jdbc:mysql://localhost:3306/adim";
	public static final String DBUSER="root";
	public static final String DBPASS="wjl19920521";
	public void doGet(HttpServletRequest req,HttpServletResponse resp)throws ServletException,IOException{
		req.setCharacterEncoding("utf-8");
		resp.setContentType("text/html");
		resp.setCharacterEncoding("utf-8");
		resp.setHeader("content-type","text/html;charset=utf-8");
		Connection conn=null;
		PreparedStatement pstmt=null;
		ResultSet rs=null;
		PrintWriter out=resp.getWriter();
		//String username=req.getParameter("username");
		String username=java.net.URLDecoder.decode(req.getParameter("username"), "utf-8");
		try{
			Class.forName(DBDRIVER);
			conn=DriverManager.getConnection(DBURL, DBUSER, DBPASS);
			String sql="SELECT COUNT(username) FROM movies WHERE username=?";
			pstmt=conn.prepareStatement(sql);
			pstmt.setString(1, username);
			rs=pstmt.executeQuery();
			if(rs.next()){
				if(rs.getInt(1)>0){
					out.print("no");
				}else{
					out.print("okay");
				}
			}
			out.close();
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
		this.doGet(req, resp);
	}
}
