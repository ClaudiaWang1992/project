package cn.home.wjl.database.factory;
import cn.home.wjl.database.dao.IUserDAO;
import cn.home.wjl.database.dao.proxy.UserDAOProxy;
public class DAOFactory {
	public static IUserDAO getIUserDAOInstance()throws Exception{
		return new UserDAOProxy();
	}
}
