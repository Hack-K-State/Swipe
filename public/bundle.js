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

function removeAllChildren(node) {
    while (node.hasChildNodes()) {
        node.removeChild(node.lastChild);
    }
}

function fetchAndInsertHackathons(hackathonSelection) {
    client.get('/api/v1/hackathon', function(response){
        response.forEach(function(item){
            var optionNode = makeOptionNode(JSON.stringify(item), item.name + ' - ' + item.city + ', ' + item.state);
            hackathonSelection.appendChild(optionNode);
        });    
        loadEventsForHackathon(response[0]);
    });
}

function setHackathonSelectionOnChange(hackathonSelection) {
    hackathonSelection.addEventListener('change', function(e) {
        loadEventsForHackathon(JSON.parse(this.value));
    });
}

function loadEventsForHackathon(hackathon) {
    var eventSelection = document.getElementById('event-selection');
    removeAllChildren(eventSelection);
    
    hackathon.events.forEach(function(event) {
        var optionNode = makeOptionNode(JSON.stringify(event), event.name + ' - ' + event.location);
        eventSelection.appendChild(optionNode);
    });
}

function main() { 
    var hackathonSelection = document.getElementById('hackathon-selection');
  
    setHackathonSelectionOnChange(hackathonSelection);
    fetchAndInsertHackathons(hackathonSelection);
}

window.onload = main;

