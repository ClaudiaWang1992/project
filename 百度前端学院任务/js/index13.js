  	window.onload=function(){
		var oBtn=document.getElementById("btn");
		var oInput=document.getElementById("input");
		var oContent=document.getElementById("content");
		var oShow=document.getElementById("show");
		oBtn.onclick=function(){
			oContent.innerHTML=oInput.value;
			oShow.style.display="block";
            if(oShow.style.display=="block"){
				oShow.onclick=text;
			}else{
				oShow.onclick="null";
			}
            function text(event){
					oShow.style.display="none";
				}
		}
			
      /* */
	}