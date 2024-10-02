let backgroundValue = 255;
let xPosition;  // Posição inicial da frase

const sketch = (p) => {
  let c;

  p.setup = function() {
    const canvas = p.createCanvas(640, 300);
    canvas.parent('sketch-container'); // Coloca o canvas dentro do contêiner HTML
    p.textAlign(p.CENTER);
    p.textFont('sans-serif');
    p.textStyle(p.BOLD);
    c = p.color('red');

    // Define a posição inicial da frase à direita da tela
    xPosition = p.width + p.textWidth('Eu te Amo!') / 2;

    // Pega o controle deslizante do DOM
    const slider = document.getElementById('backgroundSlider');
    slider.addEventListener('input', () => {
      backgroundValue = Number(slider.value);  // Converte o valor para número
    });
  };

  p.draw = function() {
    p.background(backgroundValue);  // Usa o valor numérico do background

    // Mova a frase pela tela da direita para a esquerda
    p.translate(xPosition, p.height / 2);  // Alinha a posição verticalmente no centro
    p.fill(c).textSize(100);
    p.text('Eu te Amo!', 0, 0);

    // Atualiza a posição da frase (movendo para a esquerda)
    xPosition -= 2; // Velocidade do movimento (negativa para mover para a esquerda)

    // Se a frase sair completamente da tela à esquerda, reinicia à direita
    if (xPosition < -p.textWidth('Eu te Amo!') / 2) {
      xPosition = p.width + p.textWidth('Eu te Amo!') / 2; // Reaparece do lado direito
    }
  };
};

// Inicializa o sketch
new p5(sketch);
