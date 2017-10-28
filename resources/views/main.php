<html>
<head>
  <title>Swipe | Add Attendee</title>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link href="https://fonts.googleapis.com/css?family=Raleway" rel="stylesheet">
  <link rel="stylesheet" href="./css/uikit.min.css" />
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
      </ul>
    </div>
  </nav>

  <div class="uk-section">
    <div class="uk-container">
      <div class="content-center">
        <h1>Add Attendees to Event</h1>
        <div class="uk-margin">
          <select class="uk-select" id="hackathon-selection"></select>
        </div>
        <div class="uk-margin">
          <select class="uk-select" id="event-selection"></select>
        </div>
        <h2>Swipes</h2>
        <ul id="swipe-list" class="uk-list uk-list-divider"></ul>
      </div>
    </div>
  </div>

  <script src="./js/main.js"></script>
  <script src="./js/uikit.min.js"></script>
  <script src="./js/uikit-icons.min.js"></script>
</body>
</html>
