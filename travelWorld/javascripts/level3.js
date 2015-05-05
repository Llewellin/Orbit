///====================blog timer
var b_time1=5000; //time trigger Interval
var b_time2=2000; //head fadeIn duration
var b_time3=2000; //photo fadeIn duration


///====================

/*
$(document).on('click','.next_level',function(event){
	var country = $(this).attr('id');
	location.hash='#'+country;
	location.pathname='level3.html';
});*/

/*
var photos = [
	{"img":"darkblue","article":"one"},
	{"img":"fuchsia","article":"two"},
	{"img":"tomato","article":"three"},
	{"img":"khaki","article":"four"},
	{"img":"grey","article":"five"}
	];*/


function test(){
	//var card = document.getElementById('card');
	var card = document.getElementById('food_left').childNodes[1];
	card.toggleClassName('flipped');
};
function test1(){
	//var card = document.getElementById('card');
	var card = document.getElementById('food_left').childNodes[3];
	card.toggleClassName('flipped');
};
function test2(){
	//var card = document.getElementById('card');
	var card = document.getElementById('food_left').childNodes[5];
	card.toggleClassName('flipped');
};
function test3(){
	//var card = document.getElementById('card');
	var card = document.getElementById('food_middle').childNodes[1];
	card.toggleClassName('flipped');
};
function test4(){
	//var card = document.getElementById('card');
	var card = document.getElementById('food_middle').childNodes[3];
	card.toggleClassName('flipped');
};
function test5(){
	//var card = document.getElementById('card');
	var card = document.getElementById('food_middle').childNodes[5];
	card.toggleClassName('flipped');
};
function test6(){
	//var card = document.getElementById('card');
	var card = document.getElementById('food_right');
	card.toggleClassName('flipped');
};



var photo_width=150;
var photo_slider;

function bind_the_mouseover(target){
	target.mouseover(function(){
		//console.log("stop timer");
		clearInterval(photo_slider);
		$('#photo_article').empty();
		var get_article = photos[Number($(this).attr('seq'))].article;
		$('#photo_article').html(get_article);
	}).mouseout(function(){
		//console.log("new a timer");
		photo_slider = setInterval("moveSlider()",1500);
	});

};

function moveSlider(){

	//console.log("TEST left "+$('#photo_slider').css('left'));
	//var check = $('#photo_slider').css('left');
	//check = Number(check.slice(0,check.length-2));
	//console.log("check left "+check);
	/*
	if(check < -100 ){
		console.log("left is less then -500");
		$('#photo_slider').css('left',"0px");
	}else{*/
		//console.log("left is bigger then -500");
		$('#photo_slider').animate({
			left:"-="+photo_width
			},1000,function(){
			//animation complete
			
			$('#photo_slider .slider_photo').first().remove();
			$('#photo_slider').css('left',"0px");
			var get_seq = $('#photo_slider .slider_photo').last().attr('seq');
			var new_seq;
			if(get_seq == 4){
				new_seq=0;
			}else{
				new_seq=Number(get_seq)+1;
			}
			$('#photo_slider').append("<div class='slider_photo'></div>");
			$('#photo_slider .slider_photo').last().attr('seq',new_seq);
			var target = $('#photo_slider .slider_photo').last()
			bind_the_mouseover(target);

			$('#photo_slider .slider_photo').last().css('background-color',photos[new_seq].img);
			
		});

		//$('#photo_slider .slider_photo').first().remove();		
		//$('#photo_slider').appendTo("");
	//}

	/*目前這樣設計，剛好都會推一步一格（所以關鍵在於資料結構的設定）
	如何讓重複的資料不停的輪轉appendTo#photo_slider
	然後再不停的砍掉第一個，順著這樣做。如果想要畫面漂亮很順，就必須準備buffer
	也就是長度要改成5 7 9，提早append 延後remove
	*/
};

function bind_the_fade(){
	
	$('#tabs-1').
	mouseenter(function(){
			event.preventDefault();
			$('#first_sight').fadeOut();
		}).mouseleave(function(){
			$('#first_sight').fadeIn();
	});

	$('#tabs-2').
	mouseenter(function(){
			event.preventDefault();
			$('#first_sight').fadeOut();
		}).mouseleave(function(){
			$('#first_sight').fadeIn();
	});

	$('#tabs-3').
	mouseenter(function(){
			event.preventDefault();
			$('#first_sight').fadeOut();
		}).mouseleave(function(){
			$('#first_sight').fadeIn();
	});

	$('#tabs-4').
	mouseenter(function(){
			event.preventDefault();
			$('#first_sight').fadeOut();
		}).mouseleave(function(){
			$('#first_sight').fadeIn();
	});
	
	/*
	$('.show_tab').
	mouseenter(function(){
			event.preventDefault();
			$('#first_sight').fadeOut();
		}).mouseleave(function(){
			$('#first_sight').fadeIn();
	});*/

}

$(document).ready(function(){
	var route = String(location.hash).slice(1);
	var route_blog;
	var route_scene;
	var route_food;
	var route_festival;
	console.log("level3 is ready, route is "+route);
	if(route == 'japan'){
		console.log("get in background image define");
		$('body').css("background-image", "url(../image/japan_BG.png)");
		$('#first_sight').css("background-image", "url(../image/japan_title.png)");
		$('#first_sight').css({"top":"120px","left":"-45px"});

		var str='<audio controls loop><source src="media/Japan_music.mp3" type="audio/mp3"></audio>';
            $(str).appendTo("#music_bar");
            var song = $("#music_bar audio").get(0);
            song.play();

		route_blog=japan_blog;
		route_scene=japan_scene;
		route_food=japan_food;
		route_festival=japan_festival;

	}else if(route == 'america'){
		$('body').css("background-image", "url(../image/usa_BG.png)");
		$('#first_sight').css("background-image", "url(../image/usa_title.png)");
		$('#first_sight').css({"top":"120px","left":"-45px"});

		var str='<audio controls loop><source src="media/USA_music.mp3" type="audio/mp3"></audio>';
            $(str).appendTo("#music_bar");
            var song = $("#music_bar audio").get(0);
            song.play();

		route_blog=usa_blog;
		route_scene=usa_scene;
		route_food=usa_food;
		route_festival=usa_festival;

	}else if(route == 'europe'){
		$('body').css("background-image", "url(../image/europe_BG.png)");
		$('#first_sight').css("background-image", "url(../image/europe_title.png)");
		$('#first_sight').css({"left":"-50px"});

		var str='<audio controls loop><source src="media/Europe_Music.mp3" type="audio/mp3"></audio>';
            $(str).appendTo("#music_bar");
            var song = $("#music_bar audio").get(0);
            song.play();

		route_blog=europe_blog;
		route_scene=europe_scene;
		route_food=europe_food;
		route_festival=europe_festival;

	}else if(route == 'aus'){
		$('body').css("background-image", "url(../image/australia_BG.png)");
		$('#first_sight').css("background-image", "url(../image/australia_title.png)");
		$('#first_sight').css({"left":"-50px"});

		var str='<audio controls loop><source src="media/Austilla_Music.mp3" type="audio/mp3"></audio>';
            $(str).appendTo("#music_bar");
            var song = $("#music_bar audio").get(0);
            song.play();

		route_blog=aus_blog;
		route_scene=aus_scene;
		route_food=aus_food;
		route_festival=aus_festival;
	}else{
	}
	/*
	$('#tabs-1 .show_bar').html("food of "+route);
	$('#tabs-2 .show_bar').html("festival of "+route);
	$('#tabs-3 .show_bar').html("scene of "+route);
	$('#tabs-4 .show_bar').html("blog of "+route);*/
	bind_the_fade();

	$('.slider_photo').each(function(index,value){
		//console.log('index is '+index);
		$(this).attr("seq",index);
	});

	/*
	console.log("new a timer");
	photo_slider = setInterval("moveSlider()",1500);
	
	$('.slider_photo').mouseover(function(){
			console.log("stop timer");
			clearInterval(photo_slider);
			$('#photo_article').empty();
			var get_article = photos[Number($(this).attr('seq'))].article;
			$('#photo_article').html(get_article);
		}).mouseout(function(){
			photo_slider = setInterval("moveSlider()",1500);
	});
	*/
	
	scene_go(route_scene);
	food_go(route_food);
	blog_go(route_blog);
	festival_go(route_festival);
	///test

});


var festival_slider;
var fes_i=1;
function festivalSlider(festival){

	$('#fest_g').css("background-image", "url("+festival.graph[fes_i]+")");
	$('#fest_exp').css("background-image", "url("+festival.exp[fes_i]+")");
	$("#fest_g").hide();
	$("#fest_g").slideDown(1500,function(){});
	$("#fest_exp").hide();
	$("#fest_exp").slideDown(1500,function(){});

	if(fes_i == festival.graph.length-1){
		fes_i = 0;
	}else{
		fes_i++;
	}

};
function festival_go(festival){

	$('#fest_g').css("background-image", "url("+festival.graph[0]+")");
	$('#fest_exp').css("background-image", "url("+festival.exp[0]+")");

	$('#tabs-3').		//
	mouseenter(function(){
			event.preventDefault();
			//console.log("new a festival timer");	
			festival_slider = setInterval(function(){festivalSlider(festival);},5000);

		}).mouseleave(function(){		
			clearInterval(festival_slider);
			//console.log("clear a festival timer");
	});//*/

};



var food_slider;
function small1(){
	test();
	/*
    $('#food_left .food_small').first().find('div').each(function(){
        if($(this).is(':visible')){
            $(this).fadeOut();
        }else{
            $(this).fadeIn();
        }
    });*/
};
function small2(){
	test1();
	/*
    $('#food_left .food_small').last().find('div').each(function(){
        if($(this).is(':visible')){
            $(this).fadeOut();
        }else{
            $(this).fadeIn();
        }
    });*/
};
function small3(){
	test4();
	/*
    $('#food_middle .food_small').first().find('div').each(function(){
        if($(this).is(':visible')){
            $(this).fadeOut();
        }else{
            $(this).fadeIn();
        }
    });*/
};
function small4(){
	test5();
	/*
    $('#food_middle .food_small').last().find('div').each(function(){
        if($(this).is(':visible')){
            $(this).fadeOut();
        }else{
            $(this).fadeIn();
        }
    });*/
};
function big1(){
	test2();
	/*
    $('#food_left .food_big').find('div').each(function(){
        if($(this).is(':visible')){
            $(this).fadeOut();
        }else{
            $(this).fadeIn();
        }
    });*/
};
function big2(){
	test3();
	/*
    $('#food_middle .food_big').find('div').each(function(){
        if($(this).is(':visible')){
            $(this).fadeOut();
        }else{
            $(this).fadeIn();
        }
    });*/
};
function long1(){
	test6();
	/*
    $('#food_right').find('div').each(function(){
        if($(this).is(':visible')){
            $(this).fadeOut();
        }else{
            $(this).fadeIn();
        }
    });*/
};



var flatFood =
[
	small1,
	small2,
	small3,
	small4,
	big1,
	big2,
	long1,
];


function foodSlider(food){

	var easy = Math.floor((Math.random()*7)+0);
	flatFood[easy]();
	//flatFood[6]();
};

function putFood(food){
	$('#food_left .food_small').first().find('div').first()
		.css("background-image", "url("+food.small[0]+")");
	
	//$('#food_left .food_small').first().find('div').last()
	//	.css({"background-image":"url("+food.small[1]+")"}).hide();

	///test
	$('#food_left .food_small').first().find('div').last()
		.css({"background-image":"url("+food.small[1]+")"}).addClass('back');
	

	$('#food_left .food_small').last().find('div').first()
		.css("background-image", "url("+food.small[2]+")");
	//$('#food_left .food_small').last().find('div').last()
	//	.css("background-image", "url("+food.small[3]+")").hide();
	$('#food_left .food_small').last().find('div').last()
		.css("background-image", "url("+food.small[3]+")").addClass('back');

	$('#food_middle .food_small').first().find('div').first()
		.css("background-image", "url("+food.small[4]+")");
	//$('#food_middle .food_small').first().find('div').last()
	//	.css("background-image", "url("+food.small[5]+")").hide();
	$('#food_middle .food_small').first().find('div').last()
		.css("background-image", "url("+food.small[5]+")").addClass('back');

	$('#food_middle .food_small').last().find('div').first()
		.css("background-image", "url("+food.small[6]+")");
	//$('#food_middle .food_small').last().find('div').last()
	//	.css("background-image", "url("+food.small[7]+")").hide();
	$('#food_middle .food_small').last().find('div').last()
		.css("background-image", "url("+food.small[7]+")").addClass('back');

	$('#food_left .food_big').find('div').first()
		.css("background-image", "url("+food.big[0]+")");
	//$('#food_left .food_big').find('div').last()
	//	.css({"background-image":"url("+food.big[1]+")"}).hide();
	$('#food_left .food_big').find('div').last()
		.css({"background-image":"url("+food.big[1]+")"}).addClass('back');

	$('#food_middle .food_big').find('div').first()
		.css("background-image", "url("+food.big[2]+")");
	//$('#food_middle .food_big').find('div').last()
	//	.css("background-image", "url("+food.big[3]+")").hide();
	$('#food_middle .food_big').find('div').last()
		.css("background-image", "url("+food.big[3]+")").addClass('back');

	$('#food_right').find('div').first()
		.css("background-image", "url("+food.Long[0]+")");
	//$('#food_right').find('div').last()
	//	.css({"background-image":"url("+food.Long[1]+")"}).hide();
	$('#food_right').find('div').last()
		.css({"background-image":"url("+food.Long[1]+")"}).addClass('back');

};

function food_go(food){
	//put img in the food frame
	putFood(food);

	
	$('#tabs-2').		//
	mouseenter(function(){
			event.preventDefault();
			//console.log("new a food timer");	
			food_slider = setInterval(function(){foodSlider(food);},1000);

		}).mouseleave(function(){		
			clearInterval(food_slider);
			//console.log("clear a food timer");
	});//*/

};

var scene_slider;
var scene_count;

function showLetter(tempSrc){
	tempSrc = "../image/exp__"+String(tempSrc).slice(9,tempSrc.length-3)+"png";
	console.log("test tempSrc "+tempSrc);
	$('#photo_article').empty();
	$('#photo_article').css("background-image", "url("+tempSrc+")");
		//we have to insert the img in this or re-define background image
	$('#photo_article').css({"top":"360px"});
}

function addScene(scene){
	var DOM = '<div class="slider_photo"><img class="scene_photo" /></div>';
	for(var i in scene.photo){
		//console.log("test "+scene.photo[i].url);
		var tempDOM = DOM;
		tempDOM = $(tempDOM).find('img').attr('src',scene.photo[i].url).parent();
		//tempDOM = $(tempDOM).css("background-image", "url("+scene.photo[i].url+")");
		$('#photo_slider').append(tempDOM);
	}

};

function sceneSlider(scene){
	scene_count++;
	$('#photo_slider').animate({
		left:"-=4px"
		},45,function(){
		//animation complete
		/*
		for(var j=0;j<5;j++){
			addScene(scene);
		}//*/
		if(scene_count > 1500){
			for(var j=0;j<5;j++){
				addScene(scene);
			}
			scene_count=0;
			//*/
			//append one time
			//addScene(scene);

			/*
			$('#photo_slider').animate({
				left:"+=5000000px"
				},1000,function(){
				//animation complete
				}
			});*/
		}
	});

};
function scene_go(scene){
	/*
	for(var i in scene.photo){
		console.log("test "+scene.photo[i].url);
	}*/
	for(var j=0;j<5;j++){
		addScene(scene);
	}
	//sceneSlider(scene);
	//scene_slider = setInterval(function(){sceneSlider(scene);},2);
	
	/*
	$('#tabs-1').		//
	mouseenter(function(){
			event.preventDefault();
			//start scene timer
			//clearInterval(scene_slider);
			console.log("new a scene timer");	
			scene_slider = setInterval(function(){sceneSlider(scene);},5);

		}).mouseleave(function(){		
			//start scene timer
			//scene_slider = setInterval(function(){sceneSlider(scene);},2);
			clearInterval(scene_slider);
			console.log("clear a scene timer");
	});//*/
	$('#tabs-1').		//
		mouseleave(function(){		
			//start scene timer
			//scene_slider = setInterval(function(){sceneSlider(scene);},2);
			clearInterval(scene_slider);
			console.log("clear a scene timer");
	});

	$('#photo_frame .slider_photo').off("mouseenter","**");
	$('#photo_frame .slider_photo').off("mouseleave","**");

	$('#photo_frame .slider_photo').		//
	mouseenter(function(){
			//event.preventDefault();
			//start scene timer
			event.preventDefault();
			//console.log("clear a scene timer");	
			clearInterval(scene_slider);
			//scene_slider = setInterval(function(){sceneSlider(scene);},2);
			var temp = $(this).find('img').attr('src');
			showLetter(temp);
		}).mouseleave(function(){
			//start scene timer
			event.preventDefault();
			//console.log("new a scene timer");	
			scene_slider = setInterval(function(){sceneSlider(scene);},50);
			//clearInterval(scene_slider);
			$('#photo_article').css({"top":"680px"});

	});//*/


};


var blog_slider=null;
var blog_i=0,blog_j=1;

/*
var b_time1=5000;
var b_time2=2000;
var b_time3=2000;
*/

function blogSlider(blog){		//this function do change photos 1s

	$("#blog_photo").fadeOut();

	if(blog_j == 0){
		$("#blog_head").fadeOut();
		$("#blog_head").empty();
		var img = "<img class='blog_master'/>";
		img = $(img).attr('src','../image/'+blog[blog_i].name+'.png');
		$("#blog_head").append(img);//append then bind slideDown*/
		$("#blog_head").hide();
		//$("#blog_head").slideDown(2000,function(){});
		//$("#blog_head").fadeIn(2000);
		$("#blog_head").fadeIn(b_time2);

	}

	$("#blog_photo").empty();

	/*
	$("#blog_photo").html(
		"url is "+blog[blog_i].photo[blog_j].url+",dir is "+blog[blog_i].photo[blog_j].dir
	);// test code*/

	if(blog[blog_i].photo[blog_j].dir == 'lie'){
		$('#blog_photo').css({"top":"130px","left":"470px","width":"600px","height":"350px"});
	}else{
		$('#blog_photo').css({"top":"100px","left":"570px","width":"350px","height":"477px"});
	}
	var img = "<img class='blog_picture'/>";
	img = $(img).attr('src',blog[blog_i].photo[blog_j].url);
	$("#blog_photo").append(img);

	$("#blog_photo").hide();
	//$("#blog_photo").slideDown(1500,function(){});
	//$("#blog_photo").fadeIn(2000);
	$("#blog_photo").fadeIn(b_time3);

	//console.log("blog_j is "+blog_j+" blog[blog_i].photo.length is "+blog[blog_i].photo.length);
	if(blog_j == blog[blog_i].photo.length-1){
		blog_j = 0;
		if(blog_i == blog.length-1){
			blog_i = 0;
		}else{
			blog_i++;
		}
	}else{
		//console.log("blog_j is "+blog_j+" blog[blog_i].photo.length is "+blog[blog_i].photo.length);
		blog_j++;
	}

};

function blog_go(blog){
	$('#blog_article').css("background-image", "url(../image/travel_title.png)");
	//console.trace();
	//---------------blog test
	/*
	for(var i in blog){
		console.log("name is "+blog[i].name);
		for(var j in blog[i].photo){
			console.log("url is "+blog[i].photo[j].url);
			console.log("dir is "+blog[i].photo[j].dir);
		}
	}*/

		$("#blog_head").empty();
		var img = "<img class='blog_master'/>";
		img = $(img).attr('src','../image/'+blog[0].name+'.png');
		$("#blog_head").append(img);//append then bind slideDown*/
		$("#blog_head").hide();
		//$("#blog_head").slideDown(2000,function(){});
		//$("#blog_head").fadeIn(2000);
		$("#blog_head").fadeIn(b_time2);

		$("#blog_photo").empty();

	if(blog[0].photo[0].dir == 'lie'){
		$('#blog_photo').css({"top":"130px","left":"470px","width":"600px","height":"350px"});
	}else{
		$('#blog_photo').css({"top":"100px","left":"570px","width":"350px","height":"477px"});
	}
	var img = "<img class='blog_picture'/>";
	img = $(img).attr('src',blog[0].photo[0].url);
	$("#blog_photo").append(img);
	$("#blog_photo").hide();
	//$("#blog_photo").slideDown(1500,function(){});
	//$("#blog_photo").fadeIn(2000);
	$("#blog_photo").fadeIn(b_time3);


    $('#tabs-4').       //這個要改
    mouseenter(function(){
			//console.trace();

            event.preventDefault();
            //start scene timer
            //clearInterval(scene_slider);
			//blog_slider = setInterval(function(){blogSlider(blog);},5000);
			if(blog_slider == null){
				console.log("new a blog timer");	
				blog_slider = setInterval(function(){blogSlider(blog);},b_time1);
			}
        }).mouseleave(function(){       
            //start scene timer
            //scene_slider = setInterval(function(){sceneSlider(scene);},2);

			console.log("clear a blog timer");	
            clearInterval(blog_slider);
			blog_slider=null;			
    });//*/
};
