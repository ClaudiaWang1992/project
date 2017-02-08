<%@ page contentType="text/html" pageEncoding="GBK"%>
<html>
  <head>
    <title>My JSP 'security.jsp' starting page</title>
  </head>
  
  <body>
    <%
    	if(request.isUserInRole("admin")){
     %>
     	<h2>ª∂”≠π‚¡Ÿ</h2>
     <%
     	}
      %>
  </body>
</html>
