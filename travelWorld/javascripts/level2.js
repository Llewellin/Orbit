

$(document).on('click','.next_level',function(event){
	var country = $(this).attr('id');
	location.hash='#'+country;
	location.pathname='level3.html';
});

$(document).ready(function(){
	console.log("level2 is ready");
});
