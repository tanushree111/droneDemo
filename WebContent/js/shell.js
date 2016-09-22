$(document).ready(function() {
	var bot = $('#boxB');
	 var bot1 = $('#boxC');
	 bot1.hide();
     bot.show();
     var title = $('#centertitle');
     title.text("DRONE SURVILLENCE IN PROGRESS");
	 
	if(!Modernizr.meter){
		//alert('Sorry your brower does not support HTML5 progress bar');
	} else {
		var progressbar = $('#progressbar'),
			max = progressbar.attr('max'),
			time = (24000/max)*5,	
	        value = progressbar.val();

	    var loading = function() {
	        value += 1;
	        addValue = progressbar.val(value);
	        
	        $('.progress-value').html(value + '%');

	        if (value == max) {
	            clearInterval(animate);
	            //alert('complete');
	            var bot = $('#boxB');
	            var bot1 = $('#boxC');
	            bot.hide();
	            bot1.show();
	            $("#direct").show(); 
	            title.text("DRONE SURVILLENCE STATISTICS");
	            
	            
	        }
	    };

	    var animate = setInterval(function() {
	        loading();
	    }, time);
	};
	
	/*$("#right_container_bottom").hover(
            function(event) {
                    $(this).animate({
                          height : '500px',
                          width  : '500px'
                   }); 
                   $(this)
                   .css(
                                 {
                                        "-webkit-box-shadow" : " 0px 0px 12px rgba(0, 0, 0, 0.5)"
                                 });

            },
            function() {
                   $(this).stop(true, true);
                    $(this).animate({
                          height : '300px',
                          width  : '300px'
                   }); 
                   $(this)
                   .css(
                                 {
                                        "-webkit-box-shadow" : " 0px 0px 0px rgba(0, 0, 0, 0)"
                                 });

            });	
	*/
});

function actionclick()
{
	
alert('hi');

}

