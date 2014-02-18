$(document).ready(function() {
   $.ajax({
       'url': "http://54.213.92.70:8080/getaccount",
		'type': 'GET',
		dataType: "json",
		'data':{
			'account' : 'all'
		},
		}).then(function(data) {
		$('.request').append(data.request);
		$('.ack').append(data.ack);
		$('.return_info').append(data.return_info);
		$('.turbo_user_id').append(data.turbo_user_id);
		$('.name').append(data.name);
		$('.session_token').append(data.session_token);
		   });
});






// $(document).ready(function(){

// 	$.ajax({
// 		url:"http://54.213.92.70:8080/getaccount",
//         dataType: 'json',
//         type:"GET",
//         success: function(response) {
//             jsonData = response;
//         }
// 		data:{
// 			account: ""
// 		},
		

		
// 	})
// 		console.log(account);

// });