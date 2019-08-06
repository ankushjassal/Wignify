$(document).ready(function(){	
	$("#submitData").click(function(){
		var FullName = $('#fullName').val();
		var EmailId = $('#email').val();
		var Agree = $('#agreedToTerms').prop('checked');
		localStorage.setItem('Name', FullName);
		localStorage.setItem('Email', EmailId);
		localStorage.setItem('AgreeTerms', Agree);
	});
$(window).resize(function(){
	setTimeout(function(){
	if ($(window).width() <= 468){	
		$('#myModal').show();
		}
	}, 5000);
});

