<?php
// Получаем запрошенный URL и вырезаем из него путь
$url = $_SERVER['REQUEST_URI'];
$path = parse_url($url, PHP_URL_PATH);

if ($path == '/latest-news') {
    // Выполняем программу из указанного файла
    require __DIR__ . '/news.php';
    exit;
} elseif ($path == '/hello') {
    header("Content-Type: text/plain; charset=utf-8");
    echo "Hello world";
    exit;
}

// Возвращаем управление веб-серверу, если мы не смогли обработать запрос
// Веб-сервер попытается самостоятельно найти указанный в запросе файл
return false;