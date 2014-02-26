$(document).ready(function () {
    $.ajax({
        url: "http://54.213.92.70:8080/getaccount",
        type: 'GET',
        dataType: "json",
        data: {
            'account': 'all'
        },
        }).then(function (data) {
        // for loop for looping through th elenght o fth json data
        for(var i = 0; i < data.accounts.length; i++){
        	// i need to find a way to pull the user data from 
        	// the indivifule and not  on  loop possibly using the 
        	// $(this) method 
        	$('body .head').append("<div class=\"photo_url\">" + ("<img src='" + data.accounts[i].photo_url + "'/>") + "</div>");
        	$('body .head').append('<h1 class="user_id">'+ data.accounts[i].turbo_user_id + '</h1>');
        	// $('body').append('<ul class=""
        }
    });
        console.log("got info")
});