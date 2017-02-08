package cn.home.wjl.database.dao.impl;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import cn.home.wjl.database.dao.IUserDAO;
import cn.home.wjl.database.vo.User;
public class UserDAOImpl implements IUserDAO{
	private Connection conn=null;
	private PreparedStatement pstmt=null;
	public UserDAOImpl(Connection conn){
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
			 String sql="SELECT username FROM movies WHRER FirstName=?AND LastName=?";
			 this.pstmt=this.conn.prepareStatement(sql);
			 this.pstmt.setString(1,user.getFirstName());
			 this.pstmt.setString(2,user.getLastName());
			 ResultSet rs=this.pstmt.executeQuery();
			 if(rs.next()){
				 user.setUsername(rs.getString(1));
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
}
