$(document).ready(function(){	
	$("#submitData").click(function(){
		var FullName = $('#fullName').val();
		var EmailId = $('#email').val();
		var Agree = $('#agreedToTerms').prop('checked');
		localStorage.setItem('Name', FullName);
		localStorage.setItem('Email', EmailId);
		localStorage.setItem('AgreeTerms', Agree);
		
	});
	$("#ReadCookie").click(function(){
		alert(localStorage.getItem("Name"));
		alert(localStorage.getItem("Email"));
		alert(localStorage.getItem("AgreeTerms"));
	});
});
$(window).resize(function(){
	setTimeout(function(){
	if ($(window).width() <= 468){	
		$('#myModal').show();
		}
	}, 5000);
});

