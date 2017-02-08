package cn.home.wjl.database.dao;
import net.sf.json.JSONArray;
import cn.home.wjl.database.vo.User;
import cn.home.wjl.database.vo.User2;
public interface _IUserDAO {
	public boolean doCreate(User user)throws Exception;
	public boolean findLogin(User user)throws Exception;
	public boolean doCreate(User2 user)throws Exception;
	public JSONArray findLogin(String username)throws Exception;
}
