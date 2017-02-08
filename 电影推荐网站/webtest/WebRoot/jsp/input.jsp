<%@ page contentType="text/html" pageEncoding="UTF-8"%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<html>
  <head>
    <title>My JSP 'input.jsp' starting page</title>
    
	<meta http-equiv="pragma" content="no-cache">
	<meta http-equiv="cache-control" content="no-cache">
	<meta http-equiv="expires" content="0">    
	<meta http-equiv="keywords" content="keyword1,keyword2,keyword3">
	<meta http-equiv="description" content="This is my page">
	<!--
	<link rel="stylesheet" type="text/css" href="styles.css">
	-->

  </head>
  
  <body>
   <form action="jsp/form.jsp" method="post"><!-- 在JSP中用表格提交数据这种办法在action处若是jsp文件，要写绝对地址，原因不明？ -->
		<input type="text" name="user" />
		<input type="text" name="pwd"/>
		<input type="submit"/>
	</form> 
  </body>
</html>
