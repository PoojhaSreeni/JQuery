$(document).ready(function(){
	
	
	$('input').on({
		mouseenter:function(){
			$(this).css("backgroundColor","lightgray");
		},
		mouseleave:function(){
			$(this).css("backgroundColor","white");
		},
		click:function(){
			$(this).css("backgroundColor","lightblue");
		}
	});
	
	$('ul').on('click', 'li.title', function() {
		$(this)
			.next()
					.toggle(500);
	});
	
});