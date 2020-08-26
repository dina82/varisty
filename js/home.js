$(document).ready(function() {
    jQuery("#mu-abtus-video").on('click',function(event){
		event.preventDefault();
		$('body').append(" <div id='about-video-popup'> <span id='mu-video-close' class='fa fa-close'></span> <iframe id='mutube-video' name='video' frameborder='0'  allowfullscreen></iframe>   </div> ");
		
			$('#mutube-video').attr("src",$(this).attr('href') );
		})
	$(document).on('click','#mu-video-close',function(event){
		$(this).parent("div").fadeOut(1000);
		})
	$(document).on('click',"#about-video-popup",function(event){
		$(this).remove();
		})
	$("#health_link").on("click",function(event){
		event.preventDefault();
		$('body').append("<div class='container text-center'><div id='health_link_append'><div><div class='col-sm-12'><img id='append_image'></div></div></div></div>");
		$('#append_image').attr('src',$(this).attr('href'))
	})

});
$(document).ready(function() {
    
	$(".owl-carousel").owlCarousel();
	
});
/*
<iframe id='mutube-video' name='mutube-video' frameborder='0' allowfullscreen></iframe>
		$("#mutube-video").attr("src", $(this).attr("href"));
*/