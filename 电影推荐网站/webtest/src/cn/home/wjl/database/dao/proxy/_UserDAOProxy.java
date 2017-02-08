package cn.home.wjl.database.dao.proxy;
import cn.home.wjl.database.dao._IUserDAO;
import cn.home.wjl.database.dao.impl._UserDAOImpl;
import cn.home.wjl.database.dbc.DatabaseConnection;
import cn.home.wjl.database.vo.User;
import cn.home.wjl.database.vo.User2;
import net.sf.json.JSONArray;
public class _UserDAOProxy implements _IUserDAO{
	private DatabaseConnection dbc=null;
	private _IUserDAO dao=null;
	public _UserDAOProxy()throws Exception{
		this.dbc=new DatabaseConnection();
		this.dao=new _UserDAOImpl(this.dbc.getConnection());
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
	public boolean doCreate(User2 user)throws Exception{
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
	public JSONArray findLogin(String username)throws Exception{
		JSONArray rs;
		try{
			rs=this.dao.findLogin(username);
		}catch(Exception e){
			throw e;
		}finally{
			this.dbc.close();
		}
		return rs;
	}
}
