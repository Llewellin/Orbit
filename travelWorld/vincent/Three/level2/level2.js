/**
 * @author Llewellin
 */

var isGoBoard = true;

window.onload = init;


function init()
{
	/*
	document.getElementById('c0').onclick=function()
	{
		goBoard();
		
	}
	
	document.getElementById('c1').onClick=function()
	{
		goAmerica();
		
	}
	
	document.getElementById('c2').onClick=function()
	{
		goAustralia();
	}
	
	document.getElementById('c3').onClick=function()
	{
		goJapan();
	}
	
	document.getElementById('c4').onClick=function()
	{
		goEurope();
	}
	*/
}

function goBoard()
{
	if(isGoBoard){
		parent.goToBoard();
		isGoBoard = !isGoBoard;
	}else{
		parent.goToInit();
		isGoBoard = !isGoBoard;
	}
}

function goAmerica()
{
	//parent.window.location.href = '../Skybox.html';
	parent.window.location.href = '../../../level3.html'+'#'+'america';
	console.log("america");
}

function goAustralia()
{
	parent.window.location.href = '../../../level3.html'+'#'+'aus';
	console.log("australia");
}

function goJapan()
{
	parent.window.location.href = '../../../level3.html'+'#'+'japan';
	console.log("japan");
}

function goEurope()
{
	parent.window.location.href = '../../../level3.html'+'#'+'europe';
	console.log("europe");
}