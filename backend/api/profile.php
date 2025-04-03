<?php
require_once '../config/db.php';

$id = $_GET['id'] ?? null;

if (!$id) {
    echo json_encode(['error' => 'ID de usuário não fornecido.']);
    exit;
}

$stmt = $pdo->prepare("SELECT id, name, email, profile_pic, about FROM users WHERE id = ?");
$stmt->execute([$id]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user) {
    echo json_encode(['user' => $user]);
} else {
    echo json_encode(['error' => 'Usuário não encontrado.']);
}
?>