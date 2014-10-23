
$( document ).ready(function() {	



function drawEvents(num){
	
	var e = {
	'title' : 'I am the title of the event',
	'img' : 'hulk.jpg'
	}

	function buildEvent(){
		var div = $('<div>')
		div.addClass('col-sm-4')
		div.addClass('event')
		
		
		var a = $('<a>')
		a.attr('href', '#')
		
		var span = $('<span>')
		span.addClass('img')
		span.addClass('skew')
		
		var img = $('<img>')
		img.attr('src', 'img/'+e.img)
		img.addClass('counter-skew')
		
		var title = $('<span>')
		title.addClass('title')
		title.append(e.title)
		
		span.append(img)
		a.append(span)
		a.append(title)
		div.append(a)
		
		return div
	}
	
	for (i=0; i<num; i++){
		console.log('go')
		$('#events').append(buildEvent())	
	}	
}



// go

drawEvents(9)


});