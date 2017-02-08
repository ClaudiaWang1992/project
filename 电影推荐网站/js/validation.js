    window.onload=initPage;
    var usernameValid=false;
    var passwordValid=false;
    var index=0;
	var timer=null;
	var pic=$("pic");
	var img=$("pic").getElementsByTagName("li");
	var width=parseInt(getStyle(img[0],"width"))+7;
	var oli=$("tab").getElementsByTagName("li");
	var oBtn=$("btn").getElementsByTagName("div");
    var content=$("wrap").getElementsByTagName("form")[0];
			function initPage(){
				$("username").onblur=checkUsername;
				$("password2").onblur=checkPassword;
				$("register").disabled=true;
				$("register").onclick=registerUser;
			}
			function checkUsername(){
				if($("username").value==""){
					$("username").className="denied";
				}else{
					$("username").className="thinking";
					var request= createXHR();
					if(request==null){
						alert("Unable to create request");
					}else{
						var theName=$("username").value;
						//var username=escape(theName);
						//var url="CheckServlet?username="+username;
						var url="CheckServlet1?username="+encodeURI(encodeURI(theName));
						request.onreadystatechange=showUsernameStatus;
						request.open('get',url,true);
						request.setRequestHeader('content-type','application/x-www-form-urlencoded');
						request.send(null);
				    }
					
				}
			};
			function checkPassword(){
				$("password1").className="thinking";
				if((password1.value=="")||(password1.value!=password2.value)){
					password1.className="denied";
					passwordValid=false;
					checkFormStatus();
					return;
				}
				var request=createXHR();
				if(request==null){
					alert("Uable to create request");
				}else{
					var password=$("password1").value;
					console.log(password);
					var url="CheckServlet2?password="+encodeURI(encodeURI(password));
					request.open("get",url,true);
					request.setRequestHeader('content-type','application/x-www-form-urlencoded');
					request.onreadystatechange=showPasswordStatus;
					request.send(null);
				}
			}
			function showUsernameStatus(){
				if(this.readyState==4){
					if(this.status==200){
						console.log("showUsernames");
						console.log(this.responseText);
						if(this.responseText=="okay"){
							$("username").className="approved";
							usernameValid=true;
						}else{
							$("username").className="denied";
							$("username").focus();
							$("username").select();
							usernameValid=false;
						}
						checkFormStatus();
					}
				}
			};
			function showPasswordStatus(){
				if(this.readyState==4){
					if(this.status==200){
						console.log("showpassword");
						console.log(this.responseText);
						if(this.responseText=="okay"){
							$("password1").className="approved";
							passwordValid=true;
						}else{
							$("password1").className="denied";
							$("password1").focus();
							$("password1").select();
							passwordValid=false;
						}
						checkFormStatus();
					}
				}
			}
			function checkFormStatus(){
				if(usernameValid&&passwordValid){
					$("register").disabled=false;
				}else{
					$("register").disabled=true;
				}
			}                                     
			function registerUser(e){
				$("register").value="Processing....";
				var request=createXHR();
				var url="InsertServlet2?username="+encodeURI(encodeURI($("username").value))+"&password1="+
				encodeURI(encodeURI($("password1").value))+"&FirstName="+encodeURI(encodeURI($("FirstName").value))+"&LastName="+
				encodeURI(encodeURI($("LastName").value))+"&Email="+encodeURI(encodeURI($("Email").value))+"&FavoriteGenre="+
				encodeURI(encodeURI($("FavoriteGenre").value))+"&FavoriteMovie="+encodeURI(encodeURI($("FavoriteMovie").value))+"&Describe="+
				encodeURI(encodeURI($("Describe").value));
				console.log(url);
				request.open('get',url,true);
				request.onreadystatechange=function(){
					if(this.readyState==4){
						if(this.status==200){
							content.innerHTML='';
							console.log(this.responseText);
							//alert(this.responseText);
							var json=JSON.parse(this.responseText);
							json.forEach(function(obj){
								var username=obj['username'];
								var FirstName=obj['FirstName'];
								var LastName=obj['LastName'];
								var Email=obj['Email'];
								var FavoriteGenre=obj['FavoriteGenre'];
								var FavoriteMovie=obj['FavoriteMovie'];
								var Describes=obj['Describes'];
								var node=document.createElement("p");
								var html='<strong>'+username+'</strong>: '+FirstName+'<br/>'+LastName+'<br/>'+Email+'<br/>'+FavoriteGenre+'<br/>'+FavoriteMovie+'<br/>'+Describes+'<br/>';
								node.innerHTML=html;
								content.appendChild(node);
							});
						}
					}
				};
				request.setRequestHeader('content-type','application/x-www-form-urlencoded');
				request.send(null);
				auto();
				toArray(oli).forEach(function(obj,i){
				//obj.index=i;
					obj.onclick=function(){
						//index=this.index;
						index=i;//这里形成闭包，因此可以直接把i在onclick事件处理函数中使用。
						tabActive();
						console.log(i);
					}
			    });
				for(var i=0;i<oBtn.length;i++){
					oBtn[i].index=i;
					oBtn[i].onclick=function(){
						if(this.index){
							index++;
							if(index>7){
								index=1;
								pic.style.left="0px";
							}
						}else{
							index--;
							if(index<0){
								index=6;
								pic.style.left=oli.length*(-width)+'px';
							}
							
						}
						tabActive();
					}
				}
				$("cover").onmouseenter=function(){
				clearInterval(timer);
			    }
				$("cover").onmouseleave=function(){
					auto();
				}
				return false;
			}
			function auto(){
				timer=setInterval(function(){
					index++;
					if(index>7){
						index=1;
						pic.style.left="0px";
					}
					tabActive();
				},3000);
			}
			function tabActive(){
				move({'obj':pic,'attr':"left",'time':1000,'target':-1*width*index});
				for(var i=0;i<oli.length;i++){
					oli[i].className="";
				}
				var num=index%7;
				oli[num].className="on";
			}
			