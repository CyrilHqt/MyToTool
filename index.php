<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css">
    <title>MyToTool</title>
</head>
<body>

<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="index.php">MyToTool</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
        <button id="new-list-btn">Nouvelle Liste</button>
        </li>
        <li class="nav-item">
        <button id="new-list-btn">Sauvgarder</button>
        </li>
        <li class="nav-item">
        <button id="new-list-btn">Tout supprimer</button>
        </li>
      </ul>
    </div>
  </div>
</nav>

    <div id="task-container">
        <div class="original-container">
            <input type="text" id="task-input" placeholder="Ajouter une tâche">
            <button id="add-task-btn">Ajouter</button>
            <ul id="task-list"></ul>
        </div>

    </div>

    <?php
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $task = $_POST['task'];
    
        // Code pour enregistrer la tâche dans une base de données, un fichier, etc.
        // Par exemple :
        // $db->query("INSERT INTO tasks (task) VALUES ('$task')");
        // ou
        // file_put_contents('tasks.txt', $task . PHP_EOL, FILE_APPEND);
        // Assurez-vous d'adapter cette partie en fonction de vos besoins réels.
    
        // Réponse JSON
        header('Content-Type: application/json');
        echo json_encode(['success' => true]);
        exit;
    }
    ?>
        
    <script src="script.js"></script>

</body>
</html>
