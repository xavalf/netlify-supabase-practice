<?php
header("Access-Control-Allow-Origin: *");  // Permitir cualquier origen
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization, apikey");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    // Responder a solicitudes preflight
    http_response_code(200);
    exit();
}

$supabaseUrl = 'https://kcoukdhkpxcjrndbcrla.supabase.co/rest/v1/example_table';
$apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtjb3VrZGhrcHhjanJuZGJjcmxhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg5MTg2OTQsImV4cCI6MjA1NDQ5NDY5NH0._5oY1SOcPF-olH9o9lQlqbwTQNutStYqXpDzQn6DLjg';

// Configurar la solicitud cURL
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $supabaseUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    "apikey: $apiKey",
    "Authorization: Bearer $apiKey",
    "Content-Type: application/json"
]);

$response = curl_exec($ch);

if (curl_errno($ch)) {
    echo json_encode(["error" => curl_error($ch)]);
} else {
    echo $response;
}

curl_close($ch);
?>
