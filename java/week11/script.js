$(document).ready(function () {
		$("#menu li a").prepend('<img src="icon.png">')
		// adds the icons to the nav items
		$("#header h1").on("click", function () {
			$("#header").css ('background-color', 'blue')
			//This changes the header color upon click
		});
		$("#sidebar_content_2 li:first-child a").css("color", "blue");
			//This changes the color of the first link in the sub-box bar
			
		$("#sidebar_content_1 li:even a").css("margin-left", "5px");
			//This will drive your designer friends crazy. This moves the links in the first sub box to the right by 5px. 
		$(".post").on("click", function () {
			$("#content").html("<h2>This is some crazy Javascript</h2>");
			//This will bring up new html when anything in the post section is clicked.
		});

		$("#sidebar_content_1 h2").click(function() {
			$(this).siblings().toggle();
			//I'm new to this toggle function, but this is going to turn the visibility on and off for the content below it.
		});
		$("#sidebar_content_2 h2").click(function() {
			$(this).siblings().toggle();
			//I'm new to this toggle function, but this is going to turn the visibility on and off for the content below it.

		});
});