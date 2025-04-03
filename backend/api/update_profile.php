<?php
require_once '../config/db.php';

$data = json_decode(file_get_contents('php://input'), true);

$id = $data['id'] ?? null;
$name = $data['name'] ?? null;
$profile_pic = $data['profile_pic'] ?? null;
$about = $data['about'] ?? null;

if (!$id || !$name) {
    echo json_encode(['error' => 'ID e nome são obrigatórios.']);
    exit;
}

$stmt = $pdo->prepare("UPDATE users SET name = ?, profile_pic = ?, about = ? WHERE id = ?");
try {
    $stmt->execute([$name, $profile_pic, $about, $id]);
    echo json_encode(['success' => true]);
} catch (PDOException $e) {
    echo json_encode(['error' => 'Erro ao atualizar perfil: ' . $e->getMessage()]);
}
?>