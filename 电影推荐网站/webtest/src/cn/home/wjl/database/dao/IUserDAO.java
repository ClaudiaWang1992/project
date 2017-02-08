package cn.home.wjl.database.dao;
import cn.home.wjl.database.vo.User;
public interface IUserDAO {
	public boolean doCreate(User user)throws Exception;
	public boolean findLogin(User user)throws Exception;
}
