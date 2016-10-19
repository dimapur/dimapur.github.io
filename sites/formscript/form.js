	

	
/********************** Function to submit the metadata filtering form ***************************/

/* function for the homepage accorgion **/

$(document).ready(function(){
	/* Open the first section on load */
	
		$('.accordion_body').hide();
		$(".pane-metadata .pane-title.block-title").append('<span class="plusminus">+</span>');
		$("#mini-panel-most_view_for_home .pane-metadata:first").addClass('open');
	    var openOnLoad = $("#mini-panel-most_view_for_home .pane-metadata.open .collapsing-section"); 
	    $(openOnLoad).slideDown();
		$("#mini-panel-most_view_for_home .open h2 .plusminus").html('-');
	    $("#mini-panel-most_view_for_home .pane-title").on('focus', function () {
	      if (!$(this).data("mouseDown"))
	        $(this).click();
	    });

	    $("#mini-panel-most_view_for_home .pane-title").on('mousedown', function () {
	      $(this).data("mouseDown", true);
	    });

	    $("#mini-panel-most_view_for_home .pane-title").on('mouseup', function () {
	      $(this).removeData("mouseDown");
	    });

	    $("#mini-panel-most_view_for_home h2.pane-title").live('click', function (e) {
	        //close the prev section & open the newly click
	        $('#mini-panel-most_view_for_home .pane-metadata').removeClass('open');
	        $('.collapsing-section').slideUp(); //Side up all sections that are open & remove their open class
			if ($('.accordion_body').is(':visible')) {
				$(".pane-metadata .pane-title.block-title .plusminus").html('+');
			}
			//var sectionToOpen = $(this).next('.collapsing-section');
			 $(this).parent().parent().addClass('open');
	        $('#mini-panel-most_view_for_home .open .collapsing-section').slideDown(); 
			$(this).children(".pane-metadata.open .pane-title .plusminus").html('-');
	    });
	  });
	  



/*

* Cookies Set Get Delete Definations

*/




/************** Set the metadata search cockies ****************/
