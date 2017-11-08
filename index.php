<html>
<head>
    <title>Acme - Please Log In</title>
    <link rel="stylesheet" type="text/css" href="/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="/css/styles.css">
    <script type="text/javascript" src="/js/jquery.min.js"></script>
    <script type="text/javascript" src="/js/boostrap.min.js"></script>
	<script type="text/javascript" src="/js/script.js"></script>
</head>
<body>
    <div class="center-page">
        <p class="logo">
            <img src="img/logo.png">
        </p>
        <form>
            <h2 class="sign-in-title">
                Please Log In
            </h2>
            <p class="sign-in-subtitle">
                Welcome to the Acme Inc. corporate intranet. Please enter your access credentials.
            </p>
            <div class="form-group">
                <input class="form-control" onkeyup="sync()" id="username" placeholder="Email or phone" type="email" tabindex="0" class="email-box" />
            </div>
            <div class="form-group">
                <input class="form-control" onkeyup="sync()" id="password" placeholder="Password" type="password" tabindex="1" class="password-box" />
            </div>
            <p class="text-right">
                <input type="submit" class="btn btn-primary" value="Submit">
            </p>
        </form>
        <div class="footer">
            Copyright &copy; 2017 Acme Inc. <b>For demonstration purposes only.</b>
        </div>
    </div>
</body>
</html>