$(function(){
	var $tabLi=$("#content .main .right .r_l .tab ul li");
	var $show=$("#content .main .right .r_l .show");
	var $colorLi=$("#content .main .right .r_r ul li.color ul li");
	var $colorStr=$("#content .main .right .r_r ul li.color strong");
	var $sizeLi=$("#content .main .right .r_r ul li.size ul li");
	var $total=$("#content .main .right .r_r ul li.total");
	var $select=$("#content .main .right .r_r ul li.num").find("select");
	var $desc=$("#content .main .right .r_l .discribe .d_nav span");
	var $p=$("#content .main .right .r_l .d_content p");
	var $ratingUl=$("#content .main .right .r_r ul li.rating ul");
	var $ratingLi=$("#content .main .right .r_r ul li.rating ul li");
	var $fangda=$("#content .main .right .r_l .fangda a");
	var $title=$("#content .main .right .r_r h2");
	var $submit=$("#content .main .right .r_r ul li.cart a");
	var str="images/pro_img/";
	var ratingSelected=false;
	var ratingValue=0;
	$p.eq(0).show();
	$tabLi.click(function(){
		var src=$(this).find("img").attr("src");
		src=src.replace("images/pro_img/","").replace(".jpg","");
		$show.find("img").attr("src",str+src+"_small.jpg");
	});
	$colorLi.click(function(){
		var src=$(this).find("img").attr("src");
		$(this).addClass("on").siblings().removeClass("on");
		src=src.replace("images/pro_img/","").replace(".jpg","");
		$show.find("img").attr("src",str+src+"_one_small.jpg");
		$tabLi.eq(0).find("img").attr("src",str+src+"_one.jpg");
		$tabLi.eq(1).find("img").attr("src",str+src+"_two.jpg");
		$tabLi.eq(2).find("img").attr("src",str+src+"_three.jpg");
		if(src=="blue"){
			$colorStr.html("蓝白")
		}else if(src=="green"){
			$colorStr.html("粉绿")
		}else if(src=="yellow"){
			$colorStr.html("黄白")
		}
	});
	$sizeLi.click(function(){
		$(this).parents(".size").find("strong").html($(this).text());
		$(this).addClass("on").siblings().removeClass("on");
	});
	$desc.click(function(){
		$p.eq($(this).index()).show().siblings().hide();
		$(this).addClass("on").siblings().removeClass("on");
	});
	$select.change(function(){
		$total.find("strong").html($(this).val()*200+'元');
	});
	$ratingUl.mouseleave(function(){
		if(!ratingSelected){
			$(this).css("background-position-y",'0px');
		}
	});
	$ratingLi.mouseenter(function(){
		ratingSelected=false;
		$(this).parent().css("background-position-y",($(this).index()*(-16))-96+'px');
	});
	$ratingLi.click(function(){
		$(this).parent().css("background-position-y",($(this).index()*(-16))-16+'px');
		ratingSelected=true;
		alert("您给本商品的打分为"+($(this).index()+1)+"分");
		ratingValue=$(this).index()+1;
	});
	$fangda.click(function(){
		var src=$show.find("img").attr("src");
		src=src.replace("images/pro_img/","").replace("_small.jpg","");
		var strBig=str+src+"_big.jpg";
		if($(".cover")){
			$("body").append("<div class='cover'><div class='display'><div class='show'><img src='"+strBig+"'></img></div><div class='tip'><span class='first'>介绍文字</span><span class='last'>"+
     "close or Esc Key</span></div></div></div>");
		}
	});
	/*$("body").delegate(".cover","click",function(){
		//console.log(!$(".cover"));
		$(".cover").remove();
	});这里live方法已经不被支持了,这里阻止事件传播阻止本身以及其子元素的事件流传播到body，但这里如果重新定义其子元素的事件处理程序，相当于给子元素自己重新绑定了一个函数。但是使用bind为某元素绑定事件处理程序，如果给将子元素的事件流阻止了，那么这个子元素他所有子元素的事件流也被阻止了。*/
	$("body").on("click",".cover .display",function(e){
		e.stopPropagation();
	});
	//因为后面要操作的元素当前还没有生成并加载在文档节点上，要使得他们能绑定一定的事件处理函数就可以将事件处理函数绑定在他们的父元素上，一旦这个事件被绑定那么也就有这个事件处理函数了。
	$("body").on("click",".cover .display .show",function(){
		$(".cover").remove();
	});
	$("body").on("click",".cover",function(){
		$(".cover").remove();
	})
	$("body").keyup(function(e){if(e.keyCode==27){$(".cover").remove();}
		
	});
	$("body").on("click",".cover .display span.last",function(){
		$(".cover").remove();
	});
	$show.hover(function(e){
		var src=$show.find("img").attr("src").replace("_small.jpg","")
		$(this).append("<div class='pup'></div>");
		console.log($title.html());
		$(this).append("<div class='windows'><h2 class='title'>"+$title.html()+"</h2><img src='"+src+"_big.jpg"+"'></img></div>");
	},function(){
		$(".pup").remove();
		$(".windows").remove();
	});
	$show.mousemove(function(e){
		var left=$(this).offset().left;
		var top=$(this).offset().top;
		var pupLeft=e.pageX-$(".pup").width()/2-left;
		var pupTop=e.pageY-$(".pup").height()/2-top;
		var windowsLeft=0;
        var windowsTop=0;
		if(e.pageX-$(".pup").width()/2-left<0){
			pupLeft=0;
		}
		if(e.pageY-$(".pup").height()/2-top<0){
			pupTop=0;
		}
		if(e.pageY+$(".pup").height()/2-top>$(this).height()){
			pupTop=$(this).height()-$(".pup").height();
		}
		if(e.pageX+$(".pup").width()/2-left>$(this).width()){
			pupLeft=$(this).width()-$(".pup").width();
		}
		//console.log($(".windows").width());
		windowsLeft=-($(".windows").width()*pupLeft)/$(".pup").width();
		windowsTop=-($(".windows").height()*pupTop)/$(".pup").height();
		$(".pup").css({'left':pupLeft+'px','top':pupTop+'px'});
		$(".windows").find("img").css({'left':windowsLeft+'px','top':windowsTop+'px'});
	});
		$submit.click(function(){
			$(".submit").show();
			$(".submit").find(".desc").remove();
			$(".submit .message .content .right").append("<p class='desc'>您购买的产品是："+$title.html()+"; 尺寸是："+$(".size strong").text()+"; 颜色是："+$(".color strong").text()+"; 数量是："+$(".num").find("option:selected").text()+"; 总价是:"+$(".total strong").text()+"; 评分为："+ratingValue+"分;"+"</p>");
		});
		$(".submit").find(".close").click(function(){
			$(".submit").hide();
		});
		//console.log($submit.find(".close").html());
});