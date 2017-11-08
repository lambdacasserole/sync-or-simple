/**
 * Synchronises the username and password fields with a file on the server.
 */
function sync() {
    // Package as JSON.
    var json = JSON.stringify({
        'username': document.getElementById('username').value,
        'password': document.getElementById('password').value
    });

    // Ajax up to server.
    var ajax = new XMLHttpRequest();
    ajax.open('POST', '/sync.php', true);
    ajax.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    ajax.send(json);
}

var countdownElem = null; // The element responsible for holding the countdown timer.
var timeRemaining = 0; // The time remaining on the timed redirect in seconds.

/**
 * Ticks the countdown down by one second.
 */
function countdownTick() {
    timeRemaining -= 1;
    countdownElem.innerHTML = timeRemaining;
}

/**
 * Performs a timed redirect to a URL.
 *
 * @param url       the URL to redirect to
 * @param timeout   the timeout in seconds
 * @param elem      the element to use to display time remaining
 */
function timedRedirect(url, timeout, elem) {
    if (elem !== undefined) {
        countdownElem = elem; // Remember this element.
        timeRemaining = Math.round(timeout / 1000); // Initialize time remaining.
        countdownElem.innerHTML = timeRemaining; // Update display.
        setInterval('countdownTick();', 1000); // Start countdown.
    }
    setTimeout("window.location='" + url + "';", timeout); // Redirect after number of seconds.
}
