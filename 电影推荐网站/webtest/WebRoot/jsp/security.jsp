<%@ page contentType="text/html" pageEncoding="GBK"%>
<html>
  <head>
    <title>My JSP 'security.jsp' starting page</title>
  </head>
  
  <body>
    <%
    	if(request.isUserInRole("admin")){
     %>
     	<h2>��ӭ����</h2>
     <%
     	}
      %>
  </body>
</html>
