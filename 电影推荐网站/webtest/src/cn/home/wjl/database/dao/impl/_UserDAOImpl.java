package cn.home.wjl.database.dao.impl;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import cn.home.wjl.database.dao._IUserDAO;
import cn.home.wjl.database.vo.User;
import cn.home.wjl.database.vo.User2;
import net.sf.json.JSONArray;
import cn.home.wjl.normal.jsonUtil;
public class _UserDAOImpl implements _IUserDAO{
	private Connection conn=null;
	private PreparedStatement pstmt=null;
	private  ResultSet rs;
	public _UserDAOImpl(Connection conn){
		this.conn=conn;
	}
	public boolean doCreate(User user)throws Exception{
		boolean flag=false;
			String sql="INSERT INTO movies(username,FirstName,LastName,Email,FavoriteGenre,FavoriteMovie,Describes) VALUES (?,?,?,?,?,?,?)";
			this.pstmt=this.conn.prepareStatement(sql);
			this.pstmt.setString(1, user.getUsername());
			this.pstmt.setString(2, user.getFirstName());
			this.pstmt.setString(3, user.getLastName());
			this.pstmt.setString(4, user.getEmail());
			this.pstmt.setString(5, user.getFavoriteGenre());
			this.pstmt.setString(6, user.getFavoriteMovie());
			this.pstmt.setString(7, user.getDescribe());
			if(this.pstmt.executeUpdate()>0){
				flag=true;
			}
	        this.pstmt.close();
		return flag;
	}
	public boolean findLogin(User user)throws Exception{
		boolean flag=false;
		try{
			 String sql="SELECT username FROM movies2 WHERE FirstName=?AND LastName=?";
			 this.pstmt=this.conn.prepareStatement(sql);
			 this.pstmt.setString(1,user.getFirstName());
			 this.pstmt.setString(2,user.getLastName());
			 this.rs=this.pstmt.executeQuery();
			 if(this.rs.next()){
				 user.setUsername(this.rs.getString(1));
				 flag=true;
			 }
		}catch(Exception e){
			throw e;
		}finally{
			if(this.pstmt!=null){
				try{
					this.pstmt.close();
				}catch(Exception e){
					throw e;
				}
			}
		}
		return flag;
	}
	public boolean doCreate(User2 user)throws Exception{
		boolean flag=false;
			String sql="INSERT INTO movies2(username,userPassword,FirstName,LastName,Email,FavoriteGenre,FavoriteMovie,Describes) VALUES (?,?,?,?,?,?,?,?)";
			this.pstmt=this.conn.prepareStatement(sql);
			this.pstmt.setString(1, user.getUsername());
			this.pstmt.setString(2,user.getUserPassword());
			this.pstmt.setString(3, user.getFirstName());
			this.pstmt.setString(4, user.getLastName());
			this.pstmt.setString(5, user.getEmail());
			this.pstmt.setString(6, user.getFavoriteGenre());
			this.pstmt.setString(7, user.getFavoriteMovie());
			this.pstmt.setString(8, user.getDescribe());
			if(this.pstmt.executeUpdate()>0){
				flag=true;
			}
	        this.pstmt.close();
		return flag;
	}
	public JSONArray findLogin(String username)throws Exception{
		//boolean flag=false;
		ResultSet rs=null;
		jsonUtil json=new jsonUtil();
		JSONArray result;
		try{
			 String sql="SELECT * FROM movies2 WHERE FirstName=?";
			 this.pstmt=this.conn.prepareStatement(sql);
			 this.pstmt.setString(1,username);
			 rs=this.pstmt.executeQuery();
			 json=new jsonUtil();
			 result=json.resultSetToJson(rs);
			return result;
		}catch(Exception e){
			throw e;
		}finally{
			if(this.pstmt!=null){
				try{
					this.pstmt.close();
				}catch(Exception e){
					throw e;
				}
			}
		}
		
	}
}
