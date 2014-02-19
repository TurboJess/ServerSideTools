$(document).ready(function () {
    $.ajax({
        url: "http://54.213.92.70:8080/getaccount",
        type: 'GET',
        dataType: "json",
        data: {
            'account': 'all'
        },
    }).then(function (data) {
        for(var i = 0; i < data.accounts.length; i++){
            $('#myTable tbody').append("<tr>");
            // $('#myTable').append("<td class=\"photo_url\">" + data.accounts[i].photo_url + "</td>");
            $('#myTable tbody').append("<td class=\"user_id\">" + data.accounts[i].turbo_user_id + "</td>");     
            $('#myTable tbody').append("<td class=\"name\">" + data.accounts[i].name + "</td>");
            $('#myTable tbody').append("<td class=\"session_token\">" + data.accounts[i].session_token + "</td>");
            $('#myTable tbody').append("<td class=\"photo_url\">" + data.accounts[i].photo_url + "</td>");   
            $('#myTable tbody').append("</tr><br>"); 

        }
    });

    console.log('finished');
});





