package cn.home.wjl.database.vo;
import cn.home.wjl.database.vo.User;
public class User2 extends User{
	private String userPassword;
	public String getUserPassword(){
		return userPassword;
	}
	public void setUserPassword(String userPassword){
		this.userPassword=userPassword;
	}
}
