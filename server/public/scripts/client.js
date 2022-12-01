console.log('This will be my Calculator!');

$(onReady);

function onReady() {
    $.ajax({
        method: 'GET', //using ajax get method to retrieve data from server
        url: '/artist' //this is the url path where the data is being retrieved from on the server. We wait for the response from the server...
    }).then(function (response){

    });
}