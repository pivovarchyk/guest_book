<?php

use Symfony\Component\HttpFoundation\{Request, Response};
use Piv\Guestbook\App\Kernel;

require_once __DIR__ . '/../vendor/autoload.php';

$request = Request::createFromGlobals();
$kernel = new Kernel();
$kernel->map('/', 'show');
$response = $kernel->handle($request);
$response->send();
