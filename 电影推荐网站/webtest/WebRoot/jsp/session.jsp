<%@ page contentType="text/html" pageEncoding="UTF-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <base href="<%=basePath%>">
    
    <title>My JSP 'session.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
  	<%! int number=10001; %>
    <%
    	Object obj=session.getAttribute("number");
    	if(obj==null){
    		//说明该用户之前没有访问过这个页面
    		session.setAttribute("number",String.valueOf(number));
    	}else{
    		//number=Integer.parseInt(obj.toString());
    		number+=1;
    		session.setAttribute("number",String.valueOf(number));
    	}
     %>
     	你是第<%=number %>个用户访问本网站。
  </body>
</html>
