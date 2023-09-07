const cards = [
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">A<br>&#9829</span>
        <div></div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9829</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">A<br>&#9829</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">2<br>&#9829</span>
        <div>&#9829</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3"></div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">2<br>&#9829</span>
        <div>&#9829</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">3<br>&#9829</span>
        <div>&#9829</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9829</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">3<br>&#9829</span>
        <div>&#9829</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">4<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3"></div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">4<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">5<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9829</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">5<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">6<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">6<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">7<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row2">&#9829</div>
      <div class="row3">
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">7<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">8<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row2">&#9829</div>
      <div class="row3">
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row4">&#9829</div>
      <div class="row5">
        <span class="valueCardBottom">8<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">9<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row2">
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row3">&#9829</div>
      <div class="row4">
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div class="row5">
        <span class="valueCardBottom">9<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
    </div>`,
  },
  {
    value: `    <div class="cardFrontRed">
      <div id="row1Ten">
        <span class="valueCard">10<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div id="row2Ten"><div>&#9829</div></div>
      <div id="row3Ten">
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div id="row4Ten">
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
      <div id="row5Ten">&#9829</div>
      <div id="row6Ten">
        <span class="valueCardBottom">10<br>&#9829</span>
        <div>&#9829</div>
        <div>&#9829</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">J<br>&#9829</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/jack.webp" alt="jack"></div>
      <div class="row5">
        <span class="valueCardBottom">J<br>&#9829</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">Q<br>&#9829</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/queen.webp" alt="queen"></div>
      <div class="row5">
        <span class="valueCardBottom">Q<br>&#9829</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">K<br>&#9829</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/king.webp" alt="queen"></div>
      <div class="row5">
        <span class="valueCardBottom">K<br>&#9829</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">A<br>&#9830</span>
        <div></div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9830</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">A<br>&#9830</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">2<br>&#9830</span>
        <div>&#9830</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3"></div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">2<br>&#9830</span>
        <div>&#9830</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">3<br>&#9830</span>
        <div>&#9830</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9830</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">3<br>&#9830</span>
        <div>&#9830</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">4<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3"></div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">4<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">5<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9830</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">5<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">6<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">6<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">7<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row2">&#9830</div>
      <div class="row3">
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">7<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">8<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row2">&#9830</div>
      <div class="row3">
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row4">&#9830</div>
      <div class="row5">
        <span class="valueCardBottom">8<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
    </div>`,
  },
  {
    value: `    <div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">9<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row2">
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row3">&#9830</div>
      <div class="row4">
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div class="row5">
        <span class="valueCardBottom">9<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div id="row1Ten">
        <span class="valueCard">10<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div id="row2Ten"><div>&#9830</div></div>
      <div id="row3Ten">
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div id="row4Ten">
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
      <div id="row5Ten">&#9830</div>
      <div id="row6Ten">
        <span class="valueCardBottom">10<br>&#9830</span>
        <div>&#9830</div>
        <div>&#9830</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">J<br />&#9830</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/jack.webp" alt="jack"></div>
      <div class="row5">
        <span class="valueCardBottom">J<br />&#9830</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">Q<br>&#9830</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/queen.webp" alt="queen"></div>
      <div class="row5">
        <span class="valueCardBottom">Q<br>&#9830</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFrontRed">
      <div class="row1">
        <span class="valueCard">K<br>&#9830</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/king.webp" alt="queen"></div>
      <div class="row5">
        <span class="valueCardBottom">K<br>&#9830</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">A<br>&#9827</span>
        <div></div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9827</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">A<br>&#9827</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">2<br>&#9827</span>
        <div>&#9827</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3"></div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">2<br>&#9827</span>
        <div>&#9827</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">3<br>&#9827</span>
        <div>&#9827</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9827</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">3<br>&#9827</span>
        <div>&#9827</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">4<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3"></div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">4<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">5<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9827</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">5<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">6<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">6<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">7<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row2">&#9827</div>
      <div class="row3">
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">7<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">8<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row2">&#9827</div>
      <div class="row3">
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row4">&#9827</div>
      <div class="row5">
        <span class="valueCardBottom">8<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">9<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row2">
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row3">&#9827</div>
      <div class="row4">
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div class="row5">
        <span class="valueCardBottom">9<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div id="row1Ten">
        <span class="valueCard">10<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div id="row2Ten"><div>&#9827</div></div>
      <div id="row3Ten">
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div id="row4Ten">
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
      <div id="row5Ten">&#9827</div>
      <div id="row6Ten">
        <span class="valueCardBottom">10<br>&#9827</span>
        <div>&#9827</div>
        <div>&#9827</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">J<br />&#9827</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/jack.webp" alt="jack"></div>
      <div class="row5">
        <span class="valueCardBottom">J<br />&#9827</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">Q<br>&#9827</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/queen.webp" alt="queen"></div>
      <div class="row5">
        <span class="valueCardBottom">Q<br>&#9827</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">K<br>&#9827</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/king.webp" alt="queen"></div>
      <div class="row5">
        <span class="valueCardBottom">K<br>&#9827</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">A<br>&#9824</span>
        <div></div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9824</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">A<br>&#9824</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">2<br>&#9824</span>
        <div>&#9824</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3"></div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">2<br>&#9824</span>
        <div>&#9824</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">3<br>&#9824</span>
        <div>&#9824</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9824</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">3<br>&#9824</span>
        <div>&#9824</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">4<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3"></div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">4<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">5<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">&#9824</div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">5<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">6<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row2"><div></div></div>
      <div class="row3">
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">6<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">7<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row2">&#9824</div>
      <div class="row3">
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row4"><div></div></div>
      <div class="row5">
        <span class="valueCardBottom">7<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">8<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row2">&#9824</div>
      <div class="row3">
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row4">&#9824</div>
      <div class="row5">
        <span class="valueCardBottom">8<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">9<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row2">
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row3">&#9824</div>
      <div class="row4">
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div class="row5">
        <span class="valueCardBottom">9<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div id="row1Ten">
        <span class="valueCard">10<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div id="row2Ten"><div>&#9824</div></div>
      <div id="row3Ten">
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div id="row4Ten">
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
      <div id="row5Ten">&#9824</div>
      <div id="row6Ten">
        <span class="valueCardBottom">10<br>&#9824</span>
        <div>&#9824</div>
        <div>&#9824</div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">J<br />&#9824</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/jack.webp" alt="jack"></div>
      <div class="row5">
        <span class="valueCardBottom">J<br />&#9824</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">Q<br>&#9824</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/queen.webp" alt="queen"></div>
      <div class="row5">
        <span class="valueCardBottom">Q<br>&#9824</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div class="cardFront">
      <div class="row1">
        <span class="valueCard">K<br>&#9824</span>
        <div></div>
      </div>
      <div class="row3Faces"><img src="../imagens/king.webp" alt="queen"></div>
      <div class="row5">
        <span class="valueCardBottom">K<br>&#9824</span>
        <div></div>
      </div>
    </div>`,
  },
  {
    value: `<div id="cardBack">
      <img src="../imagens/fancyPattern.webp" alt="">
    </div>`,
  },
];