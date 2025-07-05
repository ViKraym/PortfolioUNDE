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
            <h1>1. Площадь и периметр квадрата(Square)</h1>
            <div class="Sfigure">
                <input type="text" placeholder="a" class="number input-box" id="number">
                <button class="hideButtonSquare hideButton"  id="hideButtonSquare"  href="#">Расчитать</button>
            </div>
            
            <h6>Площадь</h6>
            <div class="area" id="area"></div>
             <h6>Периметр</h6>
            <div class="perimeter" id="perimeter"></div>
            
        </section>

        <section class="area-perimeter-figure">
            <h1>2. Площадь и периметр прямоугольника(Rectangle)</h1>
            <div class="Sfigure">
                
                <input type="text" placeholder="a" class="numberRectangleA input-box" id="numberRectangleA">
                <input type="text" placeholder="b" class="numberRectangleB input-box" id="numberRectangleB">
                <button class="hideButtonRectangle hideButton"  id="hideButtonRectangle"  href="#">Расчитать</button>
            </div>
            
            <h6>Площадь</h6>
            <div class="area" id="areaRectangle"></div>
             <h6>Периметр</h6>
            <div class="perimeter" id="perimeterRectangle"></div>
            
        </section>

        <section class="area-perimeter-figure">
            <h1>3. Площадь и длину окружности(Circle)</h1>
            <div class="Sfigure">
                <input type="text" placeholder="r" class="numberCircleA input-box" id="numberCircleR">   
            <button class="hideButtonCircle hideButton"  id="hideButtonCircle"  href="#">Расчитать</button>
            </div>
            
            <h6>Площадь</h6>
            <div class="area" id="areaCircle"></div>
             <h6>Длина окружности</h6>
            <div class="perimeter" id="perimeterCircle"></div>
            
        </section>

        <section class="area-perimeter-figure">
            <h1>4. Площадь треугольника по трем сторонам(Triangle)</h1>
            <div class="Sfigure">
                <input type="text" placeholder="а" class="numberTriangleA input-box" id="numberTriangleA">
                <input type="text" placeholder="b" class="numberTriangleB input-box" id="numberTriangleB">  
                <input type="text" placeholder="c" class="numberTriangleC input-box" id="numberTriangleC">    
             <button class="hideButtonTriangle hideButton"  id="hideButtonTriangle"  href="#">Расчитать</button>
            </div>
           
            <h6>Площадь</h6>
            <div class="area" id="areaTriangle"></div>
            
            
        </section>



    </main>
        <script src="scripts/figure-calc.js" defer>
            
        </script>
        
</body>
</html>