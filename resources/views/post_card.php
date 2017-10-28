<html>
<head>
  <title>Swipe | Assign Card</title>
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
        <h1>Assign Card</h1>
        <form id="form-card-assign">
          <div class="uk-margin">
            <span class="form-span">Assigned To</span>
            <input class="uk-input uk-form-width-large" type="text" placeholder="Assigned To" name="owner">
          </div>
          <div class="uk-margin">
            <span class="form-span">Card ID</span>
            <input class="uk-input uk-form-width-large" type="text" placeholder="Card ID" name="identifier">
          </div>
          <input hidden type="submit" value="Submit">
        </form>
      </div>
    </div>
  </div>

  <script src="./js/uikit.min.js"></script>
  <script src="./js/uikit-icons.min.js"></script>
  <script src="./js/post_card.js"></script>
</body>
</html>
