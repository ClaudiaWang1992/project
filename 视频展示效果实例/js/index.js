(function(){
	var $video=$("#video");
	var $tab=$("#video .header .tag li");
	var $btn=$("#video .header .btn div");
	var $pic=$("#video .pic");
	var $img=$pic.find(".img");
	var index=0;
	var timer=null;
	auto();
	function auto(){
		timer=setInterval(function(){
			index++;
			index%=2;
			$img.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       animate({'marginLeft':(-700*index)+'px'},1000);
			$tab.eq(index).addClass("on").siblings().removeClass("on");
		    $btn.eq(index).removeClass("active").siblings().addClass("active");
		},3000);
	}
	$video.hover(function(){
		clearInterval(timer);
	},function(){auto();});
    $tab.click(function(){
		index=$(this).index();
		$img.animate({'marginLeft':(-700*index)+'px'},1000);
		$(this).addClass("on").siblings().removeClass("on");
		$btn.eq(index).removeClass("active").siblings().addClass("active");
	});
	$btn.click(function(){
		if($(this).index()){
			index=1;
		}else{
			index=0;
		}
		$img.animate({'marginLeft':(-700*index)+'px'},1000);
		$(this).removeClass("active").siblings().addClass("active");
		$tab.eq(index).addClass("on").siblings().removeClass("on");
	});
})();