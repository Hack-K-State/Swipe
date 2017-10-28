jQuery.datetimepicker.setLocale('en');

$(document).ready(function(){

  $('#datetimepicker').datetimepicker();
  $('#timepicker').datetimepicker({
    datepicker:false,
    format:'H:i'
  });
});

var HttpClient = function() {
    this.get = function(url, callback) {
        var xhr = new XMLHttpRequest();

        xhr.addEventListener('readystatechange', function() {
            if (this.readyState === 4 && this.status == 200) {
                callback(JSON.parse(this.responseText));
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
                callback(JSON.parse(this.responseText));
            }
        });

        xhr.open("POST", url);
        xhr.setRequestHeader("accept", "application/json");

        xhr.send(data);
    }
}

var client = new HttpClient();

function makeOptionNode(value, text) {
    var opt = document.createElement('option');
    opt.value = value;
    var textNode = document.createTextNode(text);
    opt.appendChild(textNode);

    return opt;
}

function fetchAndInsertHackathons(hackathonSelection) {
    client.get('/api/v1/hackathon', function(response){
        response.forEach(function(item){
            var optionNode = makeOptionNode(item.id, item.name + ' - ' + item.city + ', ' + item.state);
            hackathonSelection.appendChild(optionNode);
        });
    });
}


function main() {
    var hackathonSelection = document.getElementById('hackathon-selection');
    fetchAndInsertHackathons(hackathonSelection);

    //todo submit event

}

window.onload = main;
