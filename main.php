<?php
$startTime = microtime(true);
if (!isset($_POST['x']) || !isset($_POST['y']) || !isset($_POST['r'])) {
    http_response_code(400);
    echo "One or more of X, Y, R is not set";
    exit();
}
$x = $_POST['x'];
$y = $_POST['y'];
$r = $_POST['r'];
if (!is_numeric($x) || !is_numeric($y) || !is_numeric($r) || $r <= 0 ||$r>3||$y<=-5||$y>=5|| $x<-5 || $x>3) {
    http_response_code(400);
    echo "Invalid input data";
    exit();
}
if( (($x >= 0) && ($x <= $r) && ($y <= 0) && ($y >= -$r)) ||
(($x <= 0) && ($x >= -$r/2) && ($y <= 0) && ($y >= -$r/2)&& ($y >= -$r/2)&&($x ** 2 + $y ** 2 >= $r/2 ** 2))||
(($x <= 0) && ($x >= -$r/2) && ($y >= 0) && ($y <= $r)&& ($y >= -$r/2)&&($y <= 2*$x + $r)))
{
    echo '<tr>';
    foreach (array($x, $y, $r, date('Y-m-d H:i:s'), (microtime(true) - $startTime)*1000, "yes") as $cell) {
        echo '<td>';
        echo $cell;
        echo '</td>';
    }
    echo '</tr>';
}else {
    echo '<tr>';
    foreach (array($x, $y, $r, date('Y-m-d H:i:s'), (microtime(true) - $startTime)*1000, "no") as $cell) {
        echo '<td>';
        echo $cell;
        echo '</td>';
    }
    echo '</tr>';
}
?>