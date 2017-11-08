<?php

// Dump post to file, sync on lock file.
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
	file_put_contents('.lock', '');
	file_put_contents('captured.txt', file_get_contents('php://input'));
	unlink('.lock');
}
