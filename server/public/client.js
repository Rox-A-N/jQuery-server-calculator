console.log('This will be my Calculator!');

$(onReady);

function onReady() {
    $.ajax({
        method: 'POST', //using ajax to POST (send) info to the server
        url: '/operations', //this is the url path where the data is being retrieved from on the server. We wait for the response from the server...
    }).then(function (response){
        console.log('post request response:', response);
    });
}