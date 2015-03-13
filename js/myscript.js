$(function(){
	$('#tabs').tabs();  


	function submitForm(){
		$('#submit').click(function(e){
			if ($('#contact').parsley().isValid()){
				var formData = $('form').serialize();
				$.ajax ({
					url: 'https://httpbin.org/post',
					type: 'POST',
					data: formData,
					dataType: 'html',
					success: function (data){
						alert(formData);
					},
					error: function (data, errorThrown){
						alert(errorThrown);
					}

				})
				e.preventDefault();
			}
			
		})
	}
	
	

	
	function displayIP(){
		$.ajax({
			url: 'http://httpbin.org/get',
			type: 'GET',
			dataType: 'json',
			success: function(data){
				var IP = data.origin;
				$('#display').append(IP);
			}
		})
	}
	


	
	function getImages() {
		var flickrAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?tags=bighero6&format=json&jsoncallback=?'
		$.ajax({
			url: flickrAPI,
			type: 'GET',
			dataType: 'jsonp',
			success: function(data){
				$.each(data.items, function(i, item) {
					$('<img/>').attr("src", item.media.m).appendTo('#images');
					if (i === 12){
						return false;
					}
				})
			}
		})
	}

	function displayInfo(){
		$('#info').click(function() {
		localStorage.setItem('myinfo','Yijun Wu-Advanced Web Design and Development');
		var myinfo = localStorage.getItem('myinfo');
		$('#myinfo').append(myinfo);
	});
	}
	

	

	// run functions
	submitForm();
	displayIP();
	getImages();
	displayInfo();



})





