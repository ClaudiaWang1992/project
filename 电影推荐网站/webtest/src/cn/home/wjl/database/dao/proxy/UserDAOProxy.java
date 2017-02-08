package cn.home.wjl.database.dao.proxy;
import cn.home.wjl.database.dao.IUserDAO;
import cn.home.wjl.database.dao.impl.UserDAOImpl;
import cn.home.wjl.database.dbc.DatabaseConnection;
import cn.home.wjl.database.vo.User;
public class UserDAOProxy implements IUserDAO{
	private DatabaseConnection dbc=null;
	private IUserDAO dao=null;
	public UserDAOProxy()throws Exception{
		this.dbc=new DatabaseConnection();
		this.dao=new UserDAOImpl(this.dbc.getConnection());
	}
	public boolean doCreate(User user)throws Exception{
		boolean flag=false;
		try{
			flag=this.dao.doCreate(user);
		}catch(Exception e){
			throw e;
		}finally{
			this.dbc.close();
		}
		return flag;
	}
	public boolean findLogin(User user)throws Exception{
		boolean flag=false;
		try{
			flag=this.dao.findLogin(user);
		}catch(Exception e){
			throw e;
		}finally{
			this.dbc.close();
		}
		return flag;
	}
}
