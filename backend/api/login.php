<?php
require_once './cors.php';
require_once '../config/db.php';

$data = json_decode(file_get_contents('php://input'), true);
$email = $data['email'] ?? '';
$password = $data['password'] ?? '';

$stmt = $pdo->prepare("SELECT * FROM users WHERE email = ? LIMIT 1");
$stmt->execute([$email]);
$user = $stmt->fetch(PDO::FETCH_ASSOC);

if ($user && password_verify($password, $user['password'])) {

    // Gera um token simples (você pode substituir por JWT futuramente)
    $token = bin2hex(random_bytes(32));

    // Opcional: salvar o token no banco se quiser validar depois
    // $pdo->prepare("UPDATE users SET token = ? WHERE id = ?")->execute([$token, $user['id']]);

    echo json_encode([
        'success' => true,
        'token' => $token,
        'user' => [
            'id' => $user['id'],
            'name' => $user['name'],
            'email' => $user['email']
        ]
    ]);
} else {
    echo json_encode(['success' => false, 'error' => 'Credenciais inválidas.']);
}
?>