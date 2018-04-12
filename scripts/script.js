

$(document).ready(function(){

	setInterval(function () {
		var $sliders = $("#sliders > section");

		for (var i = 0; i<$sliders.length; i++) {
			//alert($($sliders[i]).css("zIndex"))
			//这里为什么不能用 ===
			if($($sliders[i]).css("zIndex") == 5){
				if (i === ($sliders.length-1)) 
				{ 
					$($sliders[0]).css("zIndex", 5);
					$($sliders[0]).animate({opacity:1},500);
				}
				else
				{
					$($sliders[i]).next().css("zIndex", 5);
					$($sliders[i]).next().animate({opacity:1},500);
				}
				$($sliders[i]).css("zIndex", 4);
				$($sliders[i]).animate({opacity:0},500);
				break;
			}
		}
	}, 3000);
});