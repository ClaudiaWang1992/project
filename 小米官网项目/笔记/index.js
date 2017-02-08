(function(){
	var $buy=$("#header .h_main .h_m_right .h_m_r_buy");
	var $hide=$buy.find(".hide");
	var $buyA=$buy.find("a.buy");
	$buy.hover(function(){
		$hide.stop().slideDown(300);
		$buyA.addClass("hover");
	},function(){
		$hide.stop().slideUp(300,function(){
			$buyA.removeClass("hover");
		});
	});
})();
(function(){
	var $li=$("#nav .content .n_c_main li.product");
	var $A=$li.find("a");
	var $nav_hide=$("#nav .nav_hide");
	var $ul=$nav_hide.find("ul");
	var $search=$("#nav .content .n_c_search");
	var $input=$search.find(".n_c_s_show");
	var $hide=$search.find(".hide");
	var $tip=$search.find(".tip");
	var $oli=$hide.find("li");
	var index=0;
	/*$li.mouseenter(function(){
		$(this).addClass("on");
        $nav_hide.stop().slideDown(200);
	});
	$li.mouseleave(function(){
		$(this).removeClass("on");
		$nav_hide.stop().slideUp();
	});
	$nav_hide.mouseenter(function(){
		$(this).stop().slideDown(200);
	});
	$nav_hide.mouseleave(function(){
		$(this).stop().slideUp();
	});*/
	$ul.hide();
	$li.hover(function(){
		$(this).addClass("on");
		index=$(this).index();
		$ul.hide();
		$ul.eq(index).show();
        $nav_hide.stop().slideDown(200);
	},function(){
		$(this).removeClass("on");
		$nav_hide.stop().slideUp();
	});
	$nav_hide.hover(function(){
		$(this).stop().slideDown(200);
	},function(){
		$(this).stop().slideUp();
	});
	/*$input.focus(function(){
		$search.addClass("focus");
        $hide.stop().show();
		$tip.hide();
	}).blur(function(){
		$search.removeClass("focus");
		$hide.stop().hide(150);
		$tip.show();
	});*/
	$input.on('focus blur',function(){
		$search.toggleClass("focus");
		$hide.fadeToggle(100);
		$tip.fadeToggle(200);
	});
})();
(function(){
	var $banner=$("#banner .b_main");
	var $pic=$("#banner .b_main .pic");
	var $tab=$("#banner .b_main .tab");
	var $btn=$("#banner .b_main .btn div");
	var $img=$pic.find("li");
	var $tabLi=$tab.find("li");
	var length=$tabLi.length;
	var index=0;
	var timer=null;
	$img.eq(0).show();
    $tabLi.eq(0).addClass("on");
	$tabLi.click(function(){
		var This=this;
		change(function(){
			index=$(This).index();
		});
	});
    $btn.click(function(){
		var This=this;
		change(function(){
			if($(This).index()){
				index++;
				index%=length;
		    }else{
				index--;
				if(index<0){
					index=length-1;
				}
		    }
		});
	});
   /* $banner.mouseenter(function(){
		clearInterval(timer);
	});
	$banner.mouseleave(function(){
		auto();
	});*/
	$banner.hover(function(){
		clearInterval(timer);
	},function(){
		auto();
	});
    auto();
	function auto(){
		timer=setInterval(function(){
			change(function(){
				index++;
				index%=length;
			});
		},3000);
	}
	 /*function change(fn){
		fn&&fn();
		$img.eq(index).fadeIn(500).siblings().fadeOut(500);
		$tabLi.eq(index).addClass("on").siblings().removeClass("on");
	}*/
	function change(fn){
		$img.eq(index).fadeOut(500);
		$tabLi.eq(index).removeClass("on");
		fn&&fn();
		$img.eq(index).fadeIn(500);
		$tabLi.eq(index).addClass("on");
	}
})();
(function(){
	var $leftNav=$("#banner .b_main .b_nav");
	//var $hide=$leftNav.find(".info");
	var $fristLi=$leftNav.find(".fristLi");
	//var $li=$hide.find("li");//这里li是secondLi
	$fristLi.hover(function(){
		var $hide=$(this).find(".info");
		var $li=$hide.find("li");
		$hide.css('width',Math.ceil($li.length/6)*$li.width()+30+'px');
	    $hide.css("right",(-1*$hide.width())+'px');
		$li.each(function(i,obj){
			//var y=Math.floor(i/Math.ceil($li.length/6));
			//var x=i%Math.ceil($li.length/6);
			var y=i%6;
			var x=Math.floor(i/6);
			$(this).css({'top':y*($li.height()+25)+'px','left':x*$li.width()+'px'});
	    });
		$hide.show();
	},function(){
		$(this).find(".info").hide();
	});

})();
(function(){
	var $content=$("#star .s_main .s_main_content");
	var $pic=$content.find(".pic");
	var $span=$("#star .s_main .head .btn span");
	//var $btn=$("#star .s_main .head .btn");
	var timer=null;
	var index=0;
	auto();
	//$pic.animate('left',(-1*index)*$content.width()+10+'px');
	function auto(){
		timer=setInterval(function(){
			index++;
			index%=2;
			tabActive();
		},5000);
	}
	function tabActive(){
		$span.eq(index).addClass("active").siblings().removeClass("active");
        $pic.animate({'left':(-1*index)*$content.width()+'px'},1000);
	}
	$content.hover(function(){
		clearInterval(timer);
	},function(){
		auto();
	});
	$span.click(function(){
		if(!$(this).hasClass("active")){
			if($(this).index()){
				index=1;
			}else{
				index=0;
			}
			tabActive();
		}
	});
	$span.hover(function(){
		clearInterval(timer);
	},function(){
		auto();
	})
})();
(function(){
	var $smartLi=$("#smart .smart_main .smart_main_content .smart_m_right li");
	var $smartLeft=$("#smart .smart_main .smart_main_content .smart_m_left");
	/*通用的给元素进行绝对布局的方法*/
    $("._shadow").each(function(i){
		var x=$(this).index()%4;
		var y=Math.floor($(this).index()/4);
		$(this).css({'top':y*($(this).innerHeight()+13)+'px','left':x*($(this).innerWidth()+13)+'px'});
	})
	/*通用的让选择出的所有li._shadow，后面再不用定义这个函数元素上移并出现阴影的函数*/
	$("._shadow").hover(function(){
		$(this).animate({"marginTop":"-3px"},100).addClass("shadowShow");
	},function(){
		$(this).animate({"marginTop":"0px"},100).removeClass("shadowShow");
	});
	//console.log($smartLi.parent().parent().offset().left);
})();
/*搭配*/
(function(){
	var $dapeiNav=$("#dapei .d_main .d_m_head .d_m_nav ul li");
	var $dapeiList=$("#dapei .d_main .d_m_content .d_m_content_right .list");
	var $dapeiLi=$("#dapei .d_main .d_m_content .d_m_content_right .list li");
	var $dapeiLeft=$("#dapei .d_main .d_m_content .d_m_content_left a img");
	var $info=$("#dapei .d_main .d_m_content .d_m_content_right .list li div.info");
	//$dapeiLeft部分如果用增加class=._shadow属性，那么这部分就要按照这样布局（但之前定义的右半部分的方法于是这里出错）
	$dapeiLeft.hover(function(){
		$(this).animate({'marginTop':'-3px'},100).addClass("shadowShow");
	},function(){
		$(this).animate({'marginTop':'0px'},100).removeClass("shadowShow");
	})
	$dapeiList.eq(0).show();
	$dapeiNav.eq(0).addClass("hover");
	$dapeiNav.mouseenter(function(){
		var index=$(this).index();
		$(this).addClass("hover").siblings().removeClass("hover");
		/*$dapeiNav.filter(".hover").animate({"color":"#333"},200);
		console.log($dapeiNav.filter(".hover").html());
		$(this).animate({"color":"#ff6709"},200).addClass("hover").siblings().removeClass("hover");*/
        $dapeiList.eq(index).show().siblings().hide();
	});
	$dapeiLi.filter(".small:even").css({'top':($dapeiLi.eq(0).innerHeight()+13)+'px','left':3*($dapeiLi.innerWidth()+13)+'px'});
    $dapeiLi.filter(".small:odd").css({'top':($dapeiLi.eq(0).innerHeight()+$dapeiLi.filter(".small:odd").eq(0).innerHeight()+26)+'px','left':3*($dapeiLi.innerWidth()+13)+'px'});
	$dapeiLi.hover(function(){
		$(this).find(".info").stop().slideDown("fast");
	},function(){
		$(this).find(".info").stop().slideUp("fast");
	});
})();
(function(){
	var $peijianNav=$("#peijian .p_main .p_m_head .p_m_nav ul li");
	var $peijianList=$("#peijian .p_main .p_m_content .right .list");
	var $peijianLi=$peijianList.find("li");
	var $info=$peijianLi.find(".info");
	var $tip=$peijianLi.find(".tip");
	$peijianList.eq(0).show();
	$peijianNav.eq(0).addClass("hover");
	$peijianNav.mouseenter(function(){
		var index=$(this).index();
		$(this).addClass("hover").siblings().removeClass("hover");
        $peijianList.eq(index).show().siblings().hide();
	});
	$tip.each(function(i){
		/*if($(this).text()=="新品"){
			$(this).addClass("new");
		}else if($(this).text()=="有赠品"){
			$(this).addClass("gift");
		}else if($(this).text()=="包邮"){
			$(this).addClass("free");
		}*/
		if($(this).text()=='new'){
			$(this).addClass("new");
		}
		console.log($(this).text());
	});
})();
(function(){
	var $firstLi=$("#content .c_main .c_m_content ul li.first");
	var $secondUl=$firstLi.find("ul.show");
	//var $tab=$firstLi.find("div.tab li");
	$firstLi.find("div.tab ul").children(":first-child").addClass("on").siblings().removeClass("on");
	$firstLi.hover(function(){
		$(this).find(".btn div").fadeIn(300);
	},function(){
		$(this).find(".btn div").fadeOut(300);
	})
	$firstLi.each(function(i){
		var $btn=$(this).find(".btn div");
		var $tab=$(this).find("div.tab li");
		var $This=$(this);
		var $ul=$(this).find(".show");
		var length=$ul.find(".second").length;
		var index=0;
		$btn.click(function(){
			if($(this).index()){
				index=Math.min(index+1,length-1);
			}else{
				index=Math.max(index-1,0);
			}
			$This.find("div.tab li").eq(index).addClass("on").siblings().removeClass("on");
            $ul.animate({"left":-index*$ul.find("li").width()+"px"},1000);
		});
		$tab.click(function(){
			index=$(this).index();
			$ul.animate({"left":-index*$ul.find("li").width()+"px"},1000);
			$(this).addClass("on").siblings().removeClass("on");
		});
	});
	//$secondUl.children(":first-child").show().siblings().hide();
	//alert($secondUl.length);
})();
(function(){
	$cover=$("#video .cover");
	$play=$cover.find(".play");
    $videoLi=$("#video .v_main .v_m_content ul li");
	//$close=$play.find("span.close");
	center();
	window.onresize=function(){
	   center();
	};
	$videoLi.hover(function(){
		$(this).find(".iconfont").addClass("hover");
	},function(){
		$(this).find(".iconfont").removeClass("hover");
	});
	$videoLi.click(function(){
		var title=$(this).find(".title span").text();
	    var str= '<div class="main">'+
					'<div class="head">'+
						'<span class="desc">'+title+'</span>'+
						'<span class="close"> x </span>'+
					'</div>'+
					'<div class="play_content">'+
						'<embed src="http://player.video.qiyi.com/70e34f60682848ee9b20885b7ce81733/0/0/dongman/20111012/3d19e2314dccea80.swf-albumId=134394-tvId=134274-isPurchase=0-cnId=4" allowFullScreen="true" quality="high" width="884" height="540" align="middle" allowScriptAccess="always" type="application/x-shockwave-flash"></embed>'+
					'</div>'+
				  '</div>';
			$cover.find(".play").append(str);
			$cover.fadeIn();
			$cover.fadeIn(200,function(){
				$(this).find('.main').animate({"marginTop":'0px','opacity':'1'},500);
			});
			$play.find("span.close").click(function(){
				$play.find(".main").animate({"marginTop":'-600px','opacity':'0'},500,function(){
					   $cover.fadeOut();
					   $play.empty();
				 });
	        });
	});
	function center(){
		var pageWidth=document.documentElement.clientWidth;
	    var pageHeight=document.documentElement.clientHeight;
		$play.css({'left':(pageWidth-$play.width())/2+'px','top':(pageHeight-$play.height())/2+'px'});
	}
})();
