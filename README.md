# Sync or Simple
This is a proof-of-concept page designed to illustrate a that a user need not click the submit button on a form for
information from the page to be sent to the server.

## How to Use
PHP will need to be installed on your machine and in your PATH. Open a terminal in the root directory (the folder with 
this file in it) and run:

```
php -S localhost:8080
```

Then navigate to `http://localhost:8080` in your web browser. Open up the `http://localhost:8080/spy.html` page in
another window. Typing in to the username and password fields on the form in the first window will cause text to
appear in the second.

## How It Works
In the background, every half a second, a script is sending the contents of the username and password fields to the
server (which is in this case running on the same machine, but needn't be) which is capturing these values.
