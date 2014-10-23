unction alignSkewRow(){
	// angle from .skew class in css. 
	var skewAngle = 5; 
	//fun fact, the Math.tan() function only accepts radians. So we convert degrees to radians.
	var skewRadians = skewAngle * 0.0174532925;
	// for each container, so that I can have multiple grids per page. 
	$('.angle-row').each(function(){
		//width of container
		var skewContainerW = $(this).outerWidth();
		var skewContainerAdjust = skewContainerW * Math.tan(skewRadians);
		if (skewAngle > 0){
			// positive angle, sloping up on right. 
			$(this).css('padding-top', skewContainerAdjust+'px');
			//console.log('pos');
		}
		if (skewAngle < 0) {
			// negative angle, sloping down on right. 
			$(this).css('padding-bottom', skewContainerAdjust+'px');
			//console.log('neg');
		}
		
		// calculate the vertical offset of each angled block with some high school trig. 
		var skewWidth = $('.angle-img').width();
		var skewHeight = $('.angle-img').height();
		var skewSpacing =  parseInt($('.angle-cell').css('margin-right'));
		var skewAdjust = (skewWidth+skewSpacing) * Math.tan(skewRadians);
		//console.log('skewAdjust'+skewAdjust);
		
		// variable to track vertical positioning. 
		// this will need to reset back to 0 for each visual row. 
		var currentAdjust = 0;
	
		// number of cells total 
		var skewCellsN = $(this).children('.angle-cell').length;
		// number of cells that will fit within the container. 
		var skewsPerRow = Math.floor(skewContainerW / (skewWidth+skewSpacing) );
		//console.log('skewsPerRow'+skewsPerRow);
		//console.log('skewWidth'+skewWidth);
		//
		var skewCounter = 1;
		
		//manipulate each of the cells within this row. 
		$('.angle-cell').each(function(){
			// slide the cell up with relative positioning. 
			$(this).css('bottom',''+currentAdjust+'px');
			// change the vertical adjustment
			if (skewCounter < skewsPerRow){
				// there are more cells left in this row
				currentAdjust = currentAdjust + skewAdjust;
				skewCounter++;
			} else {
				// this is the last cell in the row.
				currentAdjust = 0;
				skewCounter = 1;
			}
			
			// the image tags.
			$(this).children('.angle-link').children('.angle-img').children('img').each(function(){
				
				// +1 to account for rounding down on some browsers. without it, you get a gap. 
				var targetW = skewWidth + 1;
				var targetH = skewHeight + skewAdjust + 1;
				
				// W & H of image as it first gets loaded, before we resize 
				var imgW = $(this).width();
				var imgH = $(this).height();		
				
				
				if (imgH >= imgW){
					// Vertical or Square
					$(this).width(targetW +'px');
					var imgH = $(this).height();
					var imgHdiff = Math.abs(targetH-imgH);
					var slide = (imgHdiff/2)*-1;
					$(this).css('top', slide +'px');
				} else {
					// horizontal
					$(this).height(targetH + 'px');
					var imgW = $(this).width();
					var imgWdiff = Math.abs(targetW-imgW);
					var slide = (imgWdiff/2)*-1;
					var slideV = (1 + 0.5 * skewAdjust)*-1;
					$(this).css('left', slide +'px');
					$(this).css('top', slideV +'px');
				}
			});
		});
	});
}