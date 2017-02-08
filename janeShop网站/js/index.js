$(function(){
	var cookie_skin=$.cookie("MyCssSkin");
	if(cookie_skin){
		$("#"+cookie_skin).addClass("checked").siblings().removeClass("checked");
		$("#cssfile").attr("href","css/"+cookie_skin+".css");
		$.cookie("MyCssSkin",cookie_skin,{path:'/',expires:10});
	}
	(function(){
		var $li=$("#header .main .top .skin li");
		var $navLi=$("#header .main .bottom ul li");
		/*
			$li.each(function(){
				var index=$(this).index();
				$(this).css('background-position',index*(-20)+'px '+'0px');
				console.log(index*(-20)+'px '+'0px');
			});
			//这里设置addClass不能让背景的图片上移，这是由于javascript中设置的位置优先级高于用css设置的位置优先级，所以这里y坐标已经设置就不会改变。
			$li.eq(0).addClass("checked");
			$li.click(function(){
				var index=$(this).index();
				$li.each(function(){
				var index=$(this).index();
				$(this).css('background-position',index*(-20)+'px '+'0px');
				console.log(index*(-20)+'px '+'0px');
			});
				if($(this).hasClass("checked")){
					$(this).css('background-position',index*(-20)+'px '+'0px');
				}else{
					$(this).css('background-position',index*(-20)+'px '+'-14px');
				}
			});
		*/
		$li.each(function(){
			var index=$(this).index();
			$(this).css('backgroundPositionX',index*(-20)+'px');
			//console.log(index*(-20)+'px');
		})
		$li.click(function(){
			$(this).addClass("checked").siblings().removeClass("checked");
			$("#cssfile").attr("href","css/"+this.id+".css");
			$.cookie("MyCssSkin",this.id,{path:'/',expires:10});
        });
		$navLi.hover(function(){
				$(this).find(".info").show();
			},function(){
				$(this).find(".info").hide();
			});
	})();
	(function(){
		var $ad=$("#content .main .right .r_top .ad");
		$ad.lunbo({hover:"on"});
	})();
	(function(){
		var $newLi=$("#content .main .right .r_top .ad_right .new .n_content ul li a");
		$newLi.hover(function(e){
			var str=$(this).text();
			var $info=$("<div class='info1'>"+str+"</div>");
			var $body=$("body");
			$info.appendTo($body);
			$info.css({"top":e.pageY+10+'px',"left":e.pageX+10+"px"});
			$newLi.mousemove(function(e){
			      $(".info1").css({"top":e.pageY+10+'px',"left":e.pageX+10+"px"});
		    });
		},function(){
			$(".info1").remove();
		});
	})();
	(function(){
		var $navLi=$("#content .main .right .r_bottom .head ul li");
		var width=$("#content .main .right .r_bottom .content").width();
		var $pic=$("#content .main .right .r_bottom .content .pic");
		var $item=$("#content .main .right .r_bottom .content ul li");
		var index=0;
		$navLi.click(function(){
			index=$(this).index();
			$pic.animate({'left':index*(-width)+'px'},500);
			$(this).addClass("on").siblings().removeClass("on");
		});
		$item.hover(function(){
			$(this).find(".cover").css('opacity',"0.5");
		},function(){
			$(this).find(".cover").css('opacity',"0");
		});
	})();
});
;(function($){
		$.fn.extend({
			'lunbo':function(option){
				option=$.extend({
					hover:"hover"
				},option);
				var index=0;
				var timer=null;
				var $picLi=this.find(".pic ul li");
				var $tabLi=this.find(".tab ul li");
				$tabLi.eq(0).addClass(option.hover).siblings().removeClass(option.hover);
		        $picLi.eq(0).show().siblings().hide();
				$tabLi.mouseenter(function(){
					index=$(this).index();
					$(this).addClass(option.hover).siblings().removeClass(option.hover);
					$picLi.eq(index).fadeIn().siblings().fadeOut();
				});
		        auto();
				function auto(){
					timer=setInterval(function(){
						index++;
						index%=$picLi.length;
						$picLi.eq(index).fadeIn().siblings().fadeOut();
						$tabLi.eq(index).addClass(option.hover).siblings().removeClass(option.hover);
					},3000);
				}
				this.hover(function(){
					clearInterval(timer);
				},function(){
					auto();
				});
			}
		});
	})(jQuery);
		
