
$("#main").css("box-shadow","0px 2px 30px #888");

$(".prettyprint").addClass("hljs-light");

$(".hljs-preprocessor").css("color","#A29A4E");

$("code").css("font-family","Consolas");

if($(".hljs-dark").length>0){
	$(".hljs-dark").css("color","white");
}

if($(".hljs-light").length>0){
	$(".hljs-light").css("color","black");
	$(".hljs-string").css("color","blue");
	$(".hljs-title").css("color","blue");
}

$("#article_content").find("img").each(function(i){
	var obj=$(this);
	obj.css("max-width","100%");
	if(obj.parent().text().length==0){
		obj.parent().css("text-align","center");
	}
});




