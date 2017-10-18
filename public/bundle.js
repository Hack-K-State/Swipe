var HttpClient = function() {
    this.get = function(url, callback) {
        var xhr = new XMLHttpRequest();
        
        xhr.addEventListener('readystatechange', function() {
            if (this.readyState === 4 && this.status == 200) {
                callback(this.responseText);
            }
        });

        xhr.open('GET', url);            
        xhr.send(null);
    }

    this.post = function(url, params, callback) {
        var data = new FormData();

        Object.entries(params).forEach(function([key, value]) { 
            data.append(key, value);
        });

        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status == 200) {
                callback(this.responseText);
            }
        }); 

        xhr.open("POST", url);
        xhr.setRequestHeader("accept", "application/json");
        
        xhr.send(data);
    } 
}

var client = new HttpClient();
client.get('/api/v1/event', function(response) {
    // do something with response
    console.log(response);
});

var params = {
    owner: "Ash",
    identifier: "asdf123"
};

client.post('/api/v1/card', params, function(response){
    console.log(response)
});
