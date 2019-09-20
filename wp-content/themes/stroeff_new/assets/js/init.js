jQuery(document).ready(function($){

	//	маска для телефона
	$("#phoneNum").mask("+7 (999) 999-99-99");
	$("#phoneNum2").mask("+7 (999) 999-99-99");

	//	скролл без якорей
	$('a').not('.outerService').on('click', function (e) {
		e.preventDefault();
		var targetSection = $(this).attr("href");
		$(targetSection).velocity('scroll', {
			queue: false,
			duration: '1500',
			offset: -100
		});
	});

	var form = $('#phone_sender');
	$(form).submit(function (e) {
		// Stop the browser from submitting the form.
		e.preventDefault();
		// Serialize the form data.
		var formData = $(form).serialize(),
			result = $.ajax({
				type: 'POST',
				url: form.attr('action'),
				data: $(form).serialize(),
				beforeSend: function () {
					$('#sended').text('Отправляется');
				},
				success: function (response, textStatus, jqXHR) {
					if (response === "success") {
						$(location).attr('href','thank');
					} else {
						result = response;
						setTimeout(function(){
							$('#sended').text('Еще раз?');
						}, 1000);
					}
				}
			});
	});
var form2 = $('#phone_sender_2');
	$(form2).submit(function (e2) {
		// Stop the browser from submitting the form.
		e2.preventDefault();
		// Serialize the form data.
		var formData2 = $(form2).serialize(),
			result2 = $.ajax({
				type: 'POST',
				url: form2.attr('action'),
				data: $(form2).serialize(),
				beforeSend: function () {
					$('#phone_sender_2 #sended').text('Отправляется');
				},
				success: function (response2, textStatus, jqXHR) {
					if (response2 === "success") {
						$(location).attr('href','thank');
					} else {
						result2 = response2;
						setTimeout(function(){
							$('#phone_sender_2 #sended').text('Еще раз?');
						}, 1000);
					}
				}
			});
	});
	var backImg = $('.back .img').text();
	$('.back').css({backgroundImage : 'url('+backImg+')'});
//	if ($(window).width() < 993) {
//	var bodyHeight = $('body').outerHeight();
//	setTimeout(function(){
//		$('.back').css({height : bodyHeight});
//		}, 100);
//		}
});
