/**
 * Synchronises the username and password display elements with the object at the given URL.
 *
 * @param url   the URL of the object to synchronise against
 */
function sync(url) {
    var ajax = new XMLHttpRequest();
    ajax.open('GET', url, false);
    ajax.onreadystatechange = function () {
        if(ajax.readyState === 4) {
            if(ajax.status === 200 || ajax.status === 0) {
                var obj = JSON.parse(ajax.responseText);
                document.getElementById('username').innerText = obj.username;
                document.getElementById('password').innerText = obj.password;
            }
        }
    };
    ajax.send(null);
}

/**
 * Begins synchronising the username and password display elements.
 */
function beginSync() {
    setInterval("sync('/get.php')", 500);
}
