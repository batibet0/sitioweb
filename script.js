function showOverlay(imageSrc, identifier) {
    var overlayContainer = document.querySelector('.overlay-container');
    var overlayImage = new Image();
    overlayImage.src = imageSrc;
    overlayImage.classList.add('overlay-image');
    overlayContainer.appendChild(overlayImage);

    
    overlayContainer.classList.add(identifier);
    
    var cerrarBtn = document.getElementById('cerrarImagenBtn');
    cerrarBtn.style.display = 'block';
    overlayContainer.style.display = 'block';

  
    var textoIzquierda = document.querySelector('.texto-izquierda');
    var textoDerecha = document.querySelector('.texto-derecha');

    switch (identifier) {
        case 'single-coil':
    textoIzquierda.innerHTML += '<li>https://www.fender.com/es/<br>accessories/pickups/custom-shop-fat-60s-stratocaster<br>-pickup-set/0992265000.html</li>';
    textoDerecha.innerHTML = 'Tiene un sonido brillante y claro, <br>ideal para géneros como el rock clásico y el blues. Sin embargo,<br>es más propenso a captar interferencias eléctricas y zumbidos.';
    break;

        
        case 'P90':
            textoIzquierda.innerHTML += '<li>https://www.gibson.com/<br>en-US/p/Pickup/PU90DCDEBC2/<br>PU90DCDEBC2</li>';
            textoDerecha.innerHTML = 'P-90 es más grande y tiene una construcción de bobina simple, <br>similar a una single coil pero con un mayor tamaño, <br>y más vueltas de alambre. Esto le proporciona un<br>sonido más cálido y potente que las single coils estándar.';        
            break;
        case 'Humbucker':
            textoIzquierda.innerHTML += '<li>https://www.gibson.com/en-US/p/Pickup<br>/PU490RDB4/PU490RDB4</li>';
            textoDerecha.innerHTML = 'las humbuckers están <br>compuestas por dos <br>bobinas de alambre enrolladas en sentido <br>contrario y dispuestas de manera que se cancelen <br>mutuamente las interferencias <br>eléctricas, lo que reduce <br>considerablemente el ruido y el zumbido que pueden captar las <br>pastillas single coil. Esto da como resultado un sonido <br>más grueso, potente y con menos interferencias eléctricas,  <br>ideal para estilos de música más pesados como el rock, el metal y el punk.';
            break;
        case 'FLOYD':
            textoIzquierda.innerHTML += '<li>https://www.floydrose.com/products/frto</li>';
            textoDerecha.innerHTML = 'El Floyd Rose permite cambiar la afinación mientras mantiene las otras cuerdas estables.<br> Ideal para rock y metal, pero su instalación y ajuste son complicados.';
            break;
        case 'TREMOLO':
            textoIzquierda.innerHTML += '<li>https://www.floydrose.com/products/rtw</li>';
            textoDerecha.innerHTML = 'Los puentes tremolo sin Floyd Rose permiten efectos de vibrato <br>y cambios de tono mediante una palanca de trémolo.<br> Son más simples que los <br>Floyd Rose y no tienen bloqueos para mantener las<br> cuerdas estables, <br>lo que puede afectar la afinación durante<br> un uso intenso del trémolo.<br> Son populares por su simplicidad y se encuentran en guitarras como las Stratocaster';
            break;
        default:
            textoIzquierda.textContent = '';
            textoDerecha.textContent = '';
    }
}

function hideOverlay() {
    var overlayContainer = document.querySelector('.overlay-container');
    overlayContainer.style.display = 'none';
    
    var cerrarBtn = document.getElementById('cerrarImagenBtn');
    cerrarBtn.style.display = 'none';
    
    
    var textoIzquierda = document.querySelector('.texto-izquierda');
    textoIzquierda.textContent = '';
    
    while (overlayContainer.firstChild) {
        overlayContainer.removeChild(overlayContainer.firstChild);
    }
}
