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

var swipeCount = 0;

function makeOptionNode(value, text) {
    var opt = document.createElement('option');
    opt.value = value;
    var textNode = document.createTextNode(text);
    opt.appendChild(textNode);

    return opt;
}

function makeListItemNode(text) {
    var li = document.createElement('li');
    li.style.color = "white";
    var textNode = document.createTextNode(text);
    li.appendChild(textNode);

    return li;
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

function loadSwipesForEvent(event) {
    var swipeList = document.getElementById('swipe-list');

    removeAllChildren(swipeList);

    event.cards.forEach(function(card) {
        var li = makeListItemNode(card.owner);
        swipeList.appendChild(li);
    });
}

function setEventSelectionOnChange(eventSelection) {
    eventSelection.addEventListener('change', function(e) {
        loadSwipesForEvent(JSON.parse(this.value));
    });
}

function loadEventsForHackathon(hackathon) {
    var eventSelection = document.getElementById('event-selection');

    removeAllChildren(eventSelection);

    hackathon.events.forEach(function(event) {
        var optionNode = makeOptionNode(JSON.stringify(event), event.name + ' - ' + event.location);
        eventSelection.appendChild(optionNode);
    });

    swipeCount = hackathon.events[0].cards.length;
    updateCount();

    loadSwipesForEvent(hackathon.events[0]);
}

function postSwipe(cardID, eventID, listNode) {
    client.post('/api/v1/card/' + cardID + '/event/' + eventID, {}, function(response){
        var li = makeListItemNode(response.owner);
        listNode.appendChild(li);
        swipeCount++;
        updateCount();
    });
}

function updateCount() {
    var countElement = document.getElementById('count');
    countElement.innerHTML = swipeCount;
}

function setOnSwipe(length, callback) {
    document.onkeypress = function(e) {
        e = e || window.event;
        var charCode = (typeof e.which == 'number') ? e.which : e.keyCode;

        console.log(charCode);

        if(localStorage.getItem('card') && localStorage.getItem('card') != 'null') {
            localStorage.setItem('card', localStorage.getItem('card') + String.fromCharCode(charCode));
        } else {
            // remove localstorage if it takes 300 ms
            localStorage.setItem('card', String.fromCharCode(charCode));
            setTimeout(function() {
                localStorage.removeItem('card');
            }, 300);
        }
        // when reach on certain length within 300 ms, it is not typed by a human being
        var card = localStorage.getItem('card');
        var cardLength = card.length;
        console.log(card);
        if((cardLength == 4 && card.slice(-1) == '?')
            || cardLength == 5) {
            callback(localStorage.getItem('card'));
        }
    }


}

function main() {
    var hackathonSelection = document.getElementById('hackathon-selection');
    var eventSelection = document.getElementById('event-selection');
    var swipeList = document.getElementById('swipe-list');

    setHackathonSelectionOnChange(hackathonSelection);
    setEventSelectionOnChange(eventSelection);

    setOnSwipe(6, function(data) {
        var len = data.length;
        if(!(data[0] == '%' && data[len - 1] == '?')) {
            return;
        }

        var id = data.substring(1, len - 1);

        var idx = eventSelection.selectedIndex;
        var value = eventSelection.options[idx].value
        var event = JSON.parse(value)

        postSwipe(id, event.id, swipeList);
    });

    fetchAndInsertHackathons(hackathonSelection);
}

window.onload = main;
