<%@ page contentType="text/html" pageEncoding="GBK"%>
<html>
  <head>
    <title>My JSP 'ajax.jsp' starting page</title> 
	<meta http-equiv="content-type" content="text/html;charset=GBK">
  </head>
  <body>
    <%
    	String user=request.getParameter("user");
    	String pwd=request.getParameter("pwd");
    	out.println("�û�����"+user+",�����ǣ�"+pwd);
     %>
  </body>
</html>
