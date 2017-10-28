<html>
<head>
  <title>Swipe | Add Event</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
  <link rel="stylesheet" href="./css/uikit.min.css" />
  <link rel="stylesheet" href="./css/jquery.datetimepicker.css" />
  <link rel="stylesheet" href="./css/styles.css" />
</head>
<body>

  <nav class="uk-navbar-container uk-navbar-transparent uk-margin" uk-navbar>
    <div class="uk-navbar-left">
      <a href="/" class="nav-item uk-navbar-item uk-logo">Swipey Swipes</a>
    </div>
    <div class="uk-navbar-right">
      <ul class="uk-navbar-nav">
        <li><a class="nav-item" href="/">Add Attendee</a></li>
        <li><a class="nav-item" href="/assign">Assign Card</a></li>
        <li><a class="nav-item" href="/event">Add Event</a></li>
      </ul>
    </div>
  </nav>

  <div class="uk-section">
    <div class="uk-container">
      <div class="content-center">
        <h1>Add Event</h1>
        <form class="uk-form" id="form-event-create">
          <div class="uk-margin">
            <span class="form-span">Name</span>
            <input class="uk-input uk-form-width-large" required type="text" placeholder="Name" name="name">
          </div>
          <div class="uk-margin">
            <span class="form-span">Location</span>
            <input class="uk-input uk-form-width-large" type="text" required placeholder="Location" name="location">
          </div>
          <div class="uk-margin">
            <span class="form-span">Start Time</span>
            <input type="text" class="uk-input" id="datetimepicker" name="time-trade" value="Start Time"/>
          </div>
          <div class="uk-margin">
            <span class="form-span">Duration</span>
            <input type="text" class="uk-input" id="timepicker" name="time-trade" value="Duration"/>
          </div>
          <div class="uk-margin">
            <span class="form-span">Hackathon</span>
            <select class="uk-select" id="hackathon-selection"></select>
          </div>
          <input class="uk-button uk-button-default uk-align-center button-white" onsubmit="submitEvent()" type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>

  <script src="./js/jquery.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-datetimepicker/2.5.4/build/jquery.datetimepicker.full.js"></script>
  <script src="./js/event.js"></script>
  <script src="./js/uikit.min.js"></script>
  <script src="./js/uikit-icons.min.js"></script>


</body>
</html>
