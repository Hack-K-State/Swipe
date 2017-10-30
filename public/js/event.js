jQuery.datetimepicker.setLocale('en');

$(document).ready(function(){

  $('#datetimepicker').datetimepicker({
      format: 'Y-m-d H:i'
  });

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
    
    var form = document.getElementById('form-event-create');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        var idx = hackathonSelection.selectedIndex;
        var hackathon_id = hackathonSelection.options[idx].value;

        var data = new FormData(form);
        data.append('hackathon_id', hackathon_id);
        data.set('start_at', data.get('start_at') + ':00');

        var dur = data.get('duration').split(':');
        data.set('duration', (parseInt(dur[0])*60 + parseInt(dur[1])))

        client.post('api/v1/event', data, function(response) {
            alert('Success. Event Created');
            form[0].value = '';
            form[1].value = '';
            form[2].value = '';
            form[3].value = '';
        });
    })
}

window.onload = main;
