<?php

use Zend\Diactoros\ServerRequestFactory;
use Zend\Diactoros\ServerRequest;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

use Psr\Http\Message\ResponseInterface;
use Piv\Guestbook\App\AppKernel;
use Piv\Guestbook\App\Http\Response as MyResponse;

require_once __DIR__ . '/../vendor/autoload.php';

$kernel = new AppKernel();
$request = Request::createFromGlobals();
$response = $kernel->handle($request);
$response->send();
