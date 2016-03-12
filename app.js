var main = function() {
	
  $('#top-text').keyup(function(key) {
  	var toAdd = $('#top-text').val();
     $('.top-caption').text(toAdd);	
  });
  $('#bottom-text').keyup(function(key) {
  	var toAd = $('#bottom-text').val();
     $('.bottom-caption').text(toAd);	
  });
  $('#image-url').keyup(function(key) {
  	var toAs = $('#image-url').val();
     $('img').attr('src', toAs);	
  });
}

 
$(document).ready(main);