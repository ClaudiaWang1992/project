package cn.home.wjl.database.factory;
import cn.home.wjl.database.dao._IUserDAO;
import cn.home.wjl.database.dao.proxy._UserDAOProxy;
public class _DAOFactory {
	public static _IUserDAO getIUserDAOInstance()throws Exception{
		return new _UserDAOProxy();
	}
}
