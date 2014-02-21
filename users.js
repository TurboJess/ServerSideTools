$(document).ready(function () {
    $.ajax({
        url: "http://54.213.92.70:8080/getaccount",
        type: 'GET',
        dataType: "json",
        data: {
            'account': 'all'
        },
        // once json data is retrieved with the get request using ajaax then display teh following table rows.
    }).then(function (data) {
        // for loop for looping through th elenght o fth json data
        for(var i = 0; i < data.accounts.length; i++){
            // creates the table row every time a new instance is created
            $('#myTable tbody').append("<tr>");
            // pulls image source for each individule user and displays it 
            $('#myTable tbody').append("<td class=\"photo_url\">" + ("<img src='" + data.accounts[i].photo_url + "'/>") + "</td>");
            // displays Turbo user name in a new instance of a user
            $('#myTable tbody').append("<td class=\"user_id\">" + data.accounts[i].turbo_user_id + "</td>"); 
            // displays user real name in  
            $('#myTable tbody').append("<td class=\"name\">" + data.accounts[i].name + "</td>");
            // displays individule session token for each user.
            $('#myTable tbody').append("<td class=\"session_token\">" + data.accounts[i].session_token + "</td>");
            // $('#myTable tbody').append("<td class=\"photo_url\">" + data.accounts[i].photo_url + "</td>");   
            $('#myTable tbody').append("</tr><br>"); 

        }
    });
      $.("table").vizualize();

    // $("tr").on(click, function(){
    //     var href= $(.this)
    // })
       

    console.log('finished');
});





