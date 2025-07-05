<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="/CodemuLesons/style/figure-calc.css">
</head>
<body>
     <?php include "header.php"; ?>
    <main>
        <section class="area-perimeter-figure">
            <h1>Игра "Угадай число"</h1>
                <div class="Sfigure">
                    <input type="text" placeholder="a" class="number input-box" id="userNumber">
                    <button class="hideButtonSquare hideButton"  id="answerButton"  href="#">Угадать</button>
                </div>
            <h6>Корни</h6>
                <div class="perimeter" id="answer"></div>            
        </section>

        <section class="area-perimeter-figure">
            <h1>Игра "Угадай число" 5 попыток</h1>
                <div class="Sfigure">
                    <input type="text" placeholder="a" class="number input-box" id="userNumber5">
                    <button class="hideButtonSquare hideButton"  id="answerButton5"  href="#">Угадать</button>
                </div>
            <h6>Корни</h6>
                <div class="perimeter" id="answer5"></div>            
        </section>


    </main>
        <script src="scripts/gamesinnumber.js" defer></script>
        
</body>
</html>