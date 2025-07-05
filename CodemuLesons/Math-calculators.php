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
            <h1>1. Найти корни квадратного уравнения</h1>
            <div class="Sfigure">
                <input type="text" placeholder="a" class="number input-box" id="numberA">
                <input type="text" placeholder="b" class="number input-box" id="numberB">
                <input type="text" placeholder="c" class="number input-box" id="numberC">
                <button class="hideButtonSquare hideButton"  id="hideButtonRoot"  href="#">Расчитать</button>
            </div>
            <h6>Корни</h6>
            <div class="perimeter" id="root"></div>
            <div class="perimeter" id="root2"></div>
            
        </section>

        <section class="area-perimeter-figure">
            <h1>2. Тройка Пифагора</h1>
            <div class="Sfigure">
                <input type="text" placeholder="a" class="number input-box" id="numberA1">
                <input type="text" placeholder="b" class="number input-box" id="numberB1">
                <input type="text" placeholder="c" class="number input-box" id="numberC1">
                <button class="hideButtonSquare hideButton"  id="hideButtonRoot1"  href="#">Расчитать</button>
            </div>
            <h6>Наибольшее число</h6>
            <div class="perimeter" id="root1"></div>
            <h6>Числа являются тройкой Пифагора</h6>
            <div class="perimeter" id="root21"></div>
            
        </section>

          <section class="area-perimeter-figure">
            <h1>3. Делители числа</h1>
            <div class="Sfigure">
                <input type="text" placeholder="a" class="number input-box" id="numberA2">
                <button class="hideButtonSquare hideButton"  id="hideButtonRoot2"  href="#">Расчитать</button>
            </div>
            <h6>Результат</h6>
            <div class="perimeter" id="root12"></div>

            
        </section>

          <section class="area-perimeter-figure">
            <h1>4. Общие делители чисел</h1>
            <div class="Sfigure">
                <input type="text" placeholder="a" class="number input-box" id="number4">
                <input type="text" placeholder="a" class="number input-box" id="number4_1">
                <button class="hideButtonSquare hideButton"  id="hideButtonRoot4"  href="#">Расчитать</button>
            </div>
            <h6>Результат</h6>
            <div class="perimeter" id="root4_1"></div>

            
        </section>

          <section class="area-perimeter-figure">
            <h1>5.Наибольший общий делитель чисел</h1>
            <div class="Sfigure">
                <input type="text" placeholder="a" class="number input-box" id="number5">
                <input type="text" placeholder="a" class="number input-box" id="number5_1">
                <button class="hideButtonSquare hideButton"  id="hideButtonRoot5"  href="#">Расчитать</button>
            </div>
            <h6>Результат</h6>
            <div class="perimeter" id="root5_1"></div>

            
        </section>

            <section class="area-perimeter-figure">
            <h1>6.Наибольший общий делитель чисел</h1>
            <div class="Sfigure">
                <input type="text" placeholder="a" class="number input-box" id="number6">
                <input type="text" placeholder="a" class="number input-box" id="number6_1">
                <button class="hideButtonSquare hideButton"  id="hideButtonRoot6" onclick="findLCM()"  href="#">Расчитать</button>
            </div>
            <h6>Результат</h6>
            <div class="perimeter" id="root6_1"></div>

            
        </section>
    
 



    </main>
        <script src="scripts/math-calc.js" defer>
            
        </script>
        
</body>
</html>