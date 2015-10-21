$(document).ready(function(){

	$("#container").append("<button class ='generate'>Generate</button>")
	
	$("#container").on('click', '.generate', function(){
		appendDom();
	$("#container").on('click', '.changeButton', function(){
		changeColor;
	});
	$("#container").on('click', '.deleteButton', function(){
		removeDeleteButton;
	});
	});	
	removeDeleteButton();
	changeColor();
});

function appendDom(prop){
	$("#container").append("<div class = 'delete'></div>");
	var $el = $("#container").children().last().hide().slideDown().fadeIn(1000);
	$el.append("<button class = 'deleteButton'>Delete</button>");
	$("#container").append("<div class = 'change'></div>");
	var $el = $("#container").children().last().hide().slideDown().fadeIn(1000).css("background-color", "yellow");
	$el.append("<button class = 'changeButton'>Change</button>");
	$el.append("<p>"+ prop[1]+" Times Clicked</p>");
	
}

function removeDeleteButton(prop) {
	$("#container").on('click','.deleteButton', function(){
			$(this).parent().slideUp();		
	});
}
function changeColor(prop) {
	$("#container").on('click','.changeButton', function(){
			$(this).parent().css("background-color", "red")
	});
}
//function changeColorBack(prop) {
//	$("#container").on('click','.changeButton', function(){
//			$(this).parent().css("background-color", "yellow");
//	});
//}