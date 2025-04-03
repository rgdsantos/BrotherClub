<?php
require_once '../config/db.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$password = password_hash($data['password'], PASSWORD_DEFAULT);

if (!$name || !$email || !$password) {
    echo json_encode(['error' => 'Campos obrigatórios ausentes.']);
    exit;
}

$stmt = $pdo->prepare("INSERT INTO users (name, email, password) VALUES (?, ?, ?)");
try {
    $stmt->execute([$name, $email, $password]);
    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erro ao registrar: ' . $e->getMessage()]);
}
?>