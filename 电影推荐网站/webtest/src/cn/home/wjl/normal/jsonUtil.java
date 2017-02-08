package cn.home.wjl.normal;
import java.sql.ResultSet;
import java.sql.SQLException;
import net.sf.json.JSONObject;
import net.sf.json.JSONArray;
import net.sf.json.JSONException;
import java.sql.ResultSetMetaData;
public class jsonUtil {
	public JSONArray resultSetToJson(ResultSet rs) throws SQLException,JSONException{
		JSONArray array=new JSONArray();
		ResultSetMetaData metaData=rs.getMetaData();
		int columnCount=metaData.getColumnCount();
		while(rs.next()){
			JSONObject jsonObj=new JSONObject();
			for(int i=1;i<=columnCount;i++){
				String columnName=metaData.getColumnName(i);
				String value=rs.getString(columnName);
				jsonObj.put(columnName, value);
			}
			array.add(jsonObj);
		}
		return array; 
	}
}
