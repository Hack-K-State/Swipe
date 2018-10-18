var HttpClient = function() {
    this.post = function(url, data, callback) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", function () {
            if (this.readyState === 4 && this.status == 200) {
                callback(JSON.parse(this.responseText));
            }
        }); 

        xhr.open("POST", url);
        xhr.setRequestHeader("accept", "application/json");
        
        xhr.send(data);
    } 
}

var client = new HttpClient();

function main() { 
    var form = document.getElementById('form-card-assign');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var id = form[1].value;
        var len = id.length
        if(!(id[0] == '%' && id[len - 1] == '?' && len == 5)) {
            alert('Malformed Card ID.');
            return;
        }

        form[1].value = id.substring(1, len - 1);

        var data = new FormData(form);

        client.post('/api/v1/card', data, function(response) {
            alert('Success. Card Assigned');
            form[0].value = '';
            form[1].value = '';
        });
    });
}

window.onload = main;

