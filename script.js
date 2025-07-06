const container = document.getElementById('envelopeContainer');
const overlay = document.getElementById('overlay');

container.addEventListener('pointerdown', () => {
  // Animación de zoom-out
  container.classList.add('fadeOutZoom');
  overlay.style.opacity = '1';
  overlay.style.pointerEvents = 'auto';

  // Esperar a que termine la animación
  setTimeout(() => {
    // Cambiar fondo
    document.body.style.background = 'black';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    // Reemplazar TODO el contenido del body
    document.body.innerHTML = `
      <audio src="sound/Sunshine.mp3" autoplay></audio>
      <div id="lyrics"></div>
      <h1 class="titulo" id="changingTitle">
      </h1>
      <div class="night"></div>
       <div class="flowers">
      <div class="flower flower--1">
        <div class="flower__leafs flower__leafs--1">
          <div class="flower__leaf flower__leaf--1"></div>
          <div class="flower__leaf flower__leaf--2"></div>
          <div class="flower__leaf flower__leaf--3"></div>
          <div class="flower__leaf flower__leaf--4"></div>
          <div class="flower__white-circle"></div>

          <div class="flower__light flower__light--1"></div>
          <div class="flower__light flower__light--2"></div>
          <div class="flower__light flower__light--3"></div>
          <div class="flower__light flower__light--4"></div>
          <div class="flower__light flower__light--5"></div>
          <div class="flower__light flower__light--6"></div>
          <div class="flower__light flower__light--7"></div>
          <div class="flower__light flower__light--8"></div>
        </div>
        <div class="flower__line">
          <div class="flower__line__leaf flower__line__leaf--1"></div>
          <div class="flower__line__leaf flower__line__leaf--2"></div>
          <div class="flower__line__leaf flower__line__leaf--3"></div>
          <div class="flower__line__leaf flower__line__leaf--4"></div>
          <div class="flower__line__leaf flower__line__leaf--5"></div>
          <div class="flower__line__leaf flower__line__leaf--6"></div>
        </div>
      </div>

      <div class="flower flower--2">
        <div class="flower__leafs flower__leafs--2">
          <div class="flower__leaf flower__leaf--1"></div>
          <div class="flower__leaf flower__leaf--2"></div>
          <div class="flower__leaf flower__leaf--3"></div>
          <div class="flower__leaf flower__leaf--4"></div>
          <div class="flower__white-circle"></div>

          <div class="flower__light flower__light--1"></div>
          <div class="flower__light flower__light--2"></div>
          <div class="flower__light flower__light--3"></div>
          <div class="flower__light flower__light--4"></div>
          <div class="flower__light flower__light--5"></div>
          <div class="flower__light flower__light--6"></div>
          <div class="flower__light flower__light--7"></div>
          <div class="flower__light flower__light--8"></div>
        </div>
        <div class="flower__line">
          <div class="flower__line__leaf flower__line__leaf--1"></div>
          <div class="flower__line__leaf flower__line__leaf--2"></div>
          <div class="flower__line__leaf flower__line__leaf--3"></div>
          <div class="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div class="flower flower--3">
        <div class="flower__leafs flower__leafs--3">
          <div class="flower__leaf flower__leaf--1"></div>
          <div class="flower__leaf flower__leaf--2"></div>
          <div class="flower__leaf flower__leaf--3"></div>
          <div class="flower__leaf flower__leaf--4"></div>
          <div class="flower__white-circle"></div>

          <div class="flower__light flower__light--1"></div>
          <div class="flower__light flower__light--2"></div>
          <div class="flower__light flower__light--3"></div>
          <div class="flower__light flower__light--4"></div>
          <div class="flower__light flower__light--5"></div>
          <div class="flower__light flower__light--6"></div>
          <div class="flower__light flower__light--7"></div>
          <div class="flower__light flower__light--8"></div>
        </div>
        <div class="flower__line">
          <div class="flower__line__leaf flower__line__leaf--1"></div>
          <div class="flower__line__leaf flower__line__leaf--2"></div>
          <div class="flower__line__leaf flower__line__leaf--3"></div>
          <div class="flower__line__leaf flower__line__leaf--4"></div>
        </div>
      </div>

      <div class="grow-ans" style="--d: 1.2s">
        <div class="flower__g-long">
          <div class="flower__g-long__top"></div>
          <div class="flower__g-long__bottom"></div>
        </div>
      </div>

      <div class="growing-grass">
        <div class="flower__grass flower__grass--1">
          <div class="flower__grass--top"></div>
          <div class="flower__grass--bottom"></div>
          <div class="flower__grass__leaf flower__grass__leaf--1"></div>
          <div class="flower__grass__leaf flower__grass__leaf--2"></div>
          <div class="flower__grass__leaf flower__grass__leaf--3"></div>
          <div class="flower__grass__leaf flower__grass__leaf--4"></div>
          <div class="flower__grass__leaf flower__grass__leaf--5"></div>
          <div class="flower__grass__leaf flower__grass__leaf--6"></div>
          <div class="flower__grass__leaf flower__grass__leaf--7"></div>
          <div class="flower__grass__leaf flower__grass__leaf--8"></div>
          <div class="flower__grass__overlay"></div>
        </div>
      </div>

      <div class="growing-grass">
        <div class="flower__grass flower__grass--2">
          <div class="flower__grass--top"></div>
          <div class="flower__grass--bottom"></div>
          <div class="flower__grass__leaf flower__grass__leaf--1"></div>
          <div class="flower__grass__leaf flower__grass__leaf--2"></div>
          <div class="flower__grass__leaf flower__grass__leaf--3"></div>
          <div class="flower__grass__leaf flower__grass__leaf--4"></div>
          <div class="flower__grass__leaf flower__grass__leaf--5"></div>
          <div class="flower__grass__leaf flower__grass__leaf--6"></div>
          <div class="flower__grass__leaf flower__grass__leaf--7"></div>
          <div class="flower__grass__leaf flower__grass__leaf--8"></div>
          <div class="flower__grass__overlay"></div>
        </div>
      </div>

      <div class="grow-ans" style="--d: 2.4s">
        <div class="flower__g-right flower__g-right--1">
          <div class="leaf"></div>
        </div>
      </div>

      <div class="grow-ans" style="--d: 2.8s">
        <div class="flower__g-right flower__g-right--2">
          <div class="leaf"></div>
        </div>
      </div>

      <div class="grow-ans" style="--d: 2.8s">
        <div class="flower__g-front">
          <div
            class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--1"
          >
            <div class="flower__g-front__leaf"></div>
          </div>
          <div
            class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--2"
          >
            <div class="flower__g-front__leaf"></div>
          </div>
          <div
            class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--3"
          >
            <div class="flower__g-front__leaf"></div>
          </div>
          <div
            class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--4"
          >
            <div class="flower__g-front__leaf"></div>
          </div>
          <div
            class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--5"
          >
            <div class="flower__g-front__leaf"></div>
          </div>
          <div
            class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--6"
          >
            <div class="flower__g-front__leaf"></div>
          </div>
          <div
            class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--7"
          >
            <div class="flower__g-front__leaf"></div>
          </div>
          <div
            class="flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--8"
          >
            <div class="flower__g-front__leaf"></div>
          </div>
          <div class="flower__g-front__line"></div>
        </div>
      </div>

      <div class="grow-ans" style="--d: 3.2s">
        <div class="flower__g-fr">
          <div class="leaf"></div>
          <div class="flower__g-fr__leaf flower__g-fr__leaf--1"></div>
          <div class="flower__g-fr__leaf flower__g-fr__leaf--2"></div>
          <div class="flower__g-fr__leaf flower__g-fr__leaf--3"></div>
          <div class="flower__g-fr__leaf flower__g-fr__leaf--4"></div>
          <div class="flower__g-fr__leaf flower__g-fr__leaf--5"></div>
          <div class="flower__g-fr__leaf flower__g-fr__leaf--6"></div>
          <div class="flower__g-fr__leaf flower__g-fr__leaf--7"></div>
          <div class="flower__g-fr__leaf flower__g-fr__leaf--8"></div>
        </div>
      </div>

      <div class="long-g long-g--0">
        <div class="grow-ans" style="--d: 3s">
          <div class="leaf leaf--0"></div>
        </div>
        <div class="grow-ans" style="--d: 2.2s">
          <div class="leaf leaf--1"></div>
        </div>
        <div class="grow-ans" style="--d: 3.4s">
          <div class="leaf leaf--2"></div>
        </div>
        <div class="grow-ans" style="--d: 3.6s">
          <div class="leaf leaf--3"></div>
        </div>
      </div>

      <div class="long-g long-g--1">
        <div class="grow-ans" style="--d: 3.6s">
          <div class="leaf leaf--0"></div>
        </div>
        <div class="grow-ans" style="--d: 3.8s">
          <div class="leaf leaf--1"></div>
        </div>
        <div class="grow-ans" style="--d: 4s">
          <div class="leaf leaf--2"></div>
        </div>
        <div class="grow-ans" style="--d: 4.2s">
          <div class="leaf leaf--3"></div>
        </div>
      </div>

      <div class="long-g long-g--2">
        <div class="grow-ans" style="--d: 4s">
          <div class="leaf leaf--0"></div>
        </div>
        <div class="grow-ans" style="--d: 4.2s">
          <div class="leaf leaf--1"></div>
        </div>
        <div class="grow-ans" style="--d: 4.4s">
          <div class="leaf leaf--2"></div>
        </div>
        <div class="grow-ans" style="--d: 4.6s">
          <div class="leaf leaf--3"></div>
        </div>
      </div>

      <div class="long-g long-g--3">
        <div class="grow-ans" style="--d: 4s">
          <div class="leaf leaf--0"></div>
        </div>
        <div class="grow-ans" style="--d: 4.2s">
          <div class="leaf leaf--1"></div>
        </div>
        <div class="grow-ans" style="--d: 3s">
          <div class="leaf leaf--2"></div>
        </div>
        <div class="grow-ans" style="--d: 3.6s">
          <div class="leaf leaf--3"></div>
        </div>
      </div>

      <div class="long-g long-g--4">
        <div class="grow-ans" style="--d: 4s">
          <div class="leaf leaf--0"></div>
        </div>
        <div class="grow-ans" style="--d: 4.2s">
          <div class="leaf leaf--1"></div>
        </div>
        <div class="grow-ans" style="--d: 3s">
          <div class="leaf leaf--2"></div>
        </div>
        <div class="grow-ans" style="--d: 3.6s">
          <div class="leaf leaf--3"></div>
        </div>
      </div>

      <div class="long-g long-g--5">
        <div class="grow-ans" style="--d: 4s">
          <div class="leaf leaf--0"></div>
        </div>
        <div class="grow-ans" style="--d: 4.2s">
          <div class="leaf leaf--1"></div>
        </div>
        <div class="grow-ans" style="--d: 3s">
          <div class="leaf leaf--2"></div>
        </div>
        <div class="grow-ans" style="--d: 3.6s">
          <div class="leaf leaf--3"></div>
        </div>
      </div>

      <div class="long-g long-g--6">
        <div class="grow-ans" style="--d: 4.2s">
          <div class="leaf leaf--0"></div>
        </div>
        <div class="grow-ans" style="--d: 4.4s">
          <div class="leaf leaf--1"></div>
        </div>
        <div class="grow-ans" style="--d: 4.6s">
          <div class="leaf leaf--2"></div>
        </div>
        <div class="grow-ans" style="--d: 4.8s">
          <div class="leaf leaf--3"></div>
        </div>
      </div>

      <div class="long-g long-g--7">
        <div class="grow-ans" style="--d: 3s">
          <div class="leaf leaf--0"></div>
        </div>
        <div class="grow-ans" style="--d: 3.2s">
          <div class="leaf leaf--1"></div>
        </div>
        <div class="grow-ans" style="--d: 3.5s">
          <div class="leaf leaf--2"></div>
        </div>
        <div class="grow-ans" style="--d: 3.6s">
          <div class="leaf leaf--3"></div>
        </div>
      </div>
    </div>
      <link rel="stylesheet" href="css/main.css">
    `;    

        
    const scriptTitle = document.createElement('script');
    scriptTitle.innerHTML = `
      const messages = [
        "Feliz cumpleaños, amor de mi vida.",
        "Eres la razón de muchas de mis sonrisas.",
        "No sabes cuánto agradezco tenerte a mi lado.",
        "Quiero recordarte que eres increíblemente especial para mí.",                
        "Quisiera siempre poder compartir cada día contigo.",
        "Te quiero más de lo que las palabras pueden decir.",
        "Hoy celebro tu vida y todo lo que eres.",
        "Eres mi paz, mi alegría y mi inspiración.",
        "Gracias por existir y por elegirme cada día.",        
        "Nunca dudes de lo importante que eres para mí.",
        "Eres mi presente, mi futuro y mi todo.",
        "Te quiero con cada parte de mi corazón."
      ];
      let index = 0;
      const title = document.getElementById("changingTitle");

      // Inicializar con el primer mensaje
      title.innerHTML = messages[0];
      title.style.opacity = 1;

      function changeTitle() {
        // Desaparecer
        title.style.opacity = 0;

        setTimeout(() => {
          // Cambiar texto
          index = (index + 1) % messages.length;
          title.innerHTML = messages[index];
          // Volver a aparecer
          title.style.opacity = 1;
        }, 800); // Tiempo igual a la duración de la transición
      }

      // Cambiar cada 5 segundos
      setInterval(changeTitle, 5000);
    `;
    document.body.appendChild(scriptTitle);


  }, 1000);
});
