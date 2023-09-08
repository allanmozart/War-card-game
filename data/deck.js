const deck = [
  {
    value: 15,
    name: "ace",
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">A<br>&#9829</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9829</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottomPic">A<br>&#9829</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 15,
    name: "ace",
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">A<br>&#9827</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9827</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottomPic">A<br>&#9827</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 15,
    name: "ace",
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">A<br>&#9830</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9830</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottomPic">A<br>&#9830</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 15,
    name: "ace",
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">A<br>&#9824</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9824</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottomPic">A<br>&#9824</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 14,
    name: "king",
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">K<br>&#9829</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/king.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">K<br>&#9829</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 14,
    name: "king",
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">K<br>&#9827</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/king.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">K<br>&#9827</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 14,
    name: "king",
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">K<br>&#9830</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/king.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">K<br>&#9830</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 14,
    name: "king",
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">K<br>&#9824</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/king.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">K<br>&#9824</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 13,
    name: "queen",
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">Q<br>&#9829</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/queen.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">Q<br>&#9829</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 13,
    name: "queen",
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">Q<br>&#9827</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/queen.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">Q<br>&#9827</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 13,
    name: "queen",
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">Q<br>&#9830</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/queen.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">Q<br>&#9830</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 13,
    name: "queen",
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">Q<br>&#9824</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/queen.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">Q<br>&#9824</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 12,
    name: "jack",
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">J<br>&#9829</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/jack.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">J<br>&#9829</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 12,
    name: "jack",
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">J<br />&#9827</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/jack.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">J<br />&#9827</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 12,
    name: "jack",
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">J<br />&#9830</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/jack.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">J<br />&#9830</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 12,
    name: "jack",
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">J<br />&#9824</span>
    <div class="card-layout-div"></div>
  </div>
  <div class="card-layout-div row3"><img class="card-picture" src="./data/images/jack.webp"></div>
  <div class="card-layout-div row5">
     <span class="valueCardBottomPic">J<br />&#9824</span>
    <div class="card-layout-div"></div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 10,
    name: 10,
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
    <div class="card-layout-div row1">
      <span class="valueCard">10<br>&#9829</span>
      <div class="card-layout-div">&#9829</div>
      <div class="card-layout-div">&#9829</div>
    </div>
    <div class="card-layout-div row2">
      <div class="card-layout-div">&#9829</div>
      <div class="card-layout-div">&#9829</div>
    </div>
    <div class="card-layout-div row3">
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
    </div>
    <div class="card-layout-div row4">
      <div class="card-layout-div">&#9829</div>
      <div class="card-layout-div">&#9829</div>
    </div>
    <div class="card-layout-div row5">
      <span class="valueCardBottom">10<br>&#9829</span>
      <div class="card-layout-div">&#9829</div>
      <div class="card-layout-div">&#9829</div>
    </div>
    </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 10,
    name: 10,
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
    <div class="card-layout-div row1">
      <span class="valueCard">10<br>&#9827</span>
      <div class="card-layout-div">&#9827</div>
      <div class="card-layout-div">&#9827</div>
    </div>
    <div class="card-layout-div row2">
      <div class="card-layout-div">&#9827</div>
      <div class="card-layout-div">&#9827</div>
    </div>
    <div class="card-layout-div row3">
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
    </div>
    <div class="card-layout-div row4">
      <div class="card-layout-div">&#9827</div>
      <div class="card-layout-div">&#9827</div>
    </div>
    <div class="card-layout-div row5">
      <span class="valueCardBottom">10<br>&#9827</span>
      <div class="card-layout-div">&#9827</div>
      <div class="card-layout-div">&#9827</div>
    </div>
    </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 10,
    name: 10,
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
    <div class="card-layout-div row1">
      <span class="valueCard">10<br>&#9830</span>
      <div class="card-layout-div">&#9830</div>
      <div class="card-layout-div">&#9830</div>
    </div>
    <div class="card-layout-div row2">
      <div class="card-layout-div">&#9830</div>
      <div class="card-layout-div">&#9830</div>
    </div>
    <div class="card-layout-div row3">
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
    </div>
    <div class="card-layout-div row4">
      <div class="card-layout-div">&#9830</div>
      <div class="card-layout-div">&#9830</div>
    </div>
    <div class="card-layout-div row5">
      <span class="valueCardBottom">10<br>&#9830</span>
      <div class="card-layout-div">&#9830</div>
      <div class="card-layout-div">&#9830</div>
    </div>
    </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 10,
    name: 10,
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
    <div class="card-layout-div row1">
      <span class="valueCard">10<br>&#9824</span>
      <div class="card-layout-div">&#9824</div>
      <div class="card-layout-div">&#9824</div>
    </div>
    <div class="card-layout-div row2">
      <div class="card-layout-div">&#9824</div>
      <div class="card-layout-div">&#9824</div>
    </div>
    <div class="card-layout-div row3">
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
    </div>
    <div class="card-layout-div row4">
      <div class="card-layout-div">&#9824</div>
      <div class="card-layout-div">&#9824</div>
    </div>
    <div class="card-layout-div row5">
      <span class="valueCardBottom">10<br>&#9824</span>
      <div class="card-layout-div">&#9824</div>
      <div class="card-layout-div">&#9824</div>
    </div>
    </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 9,
    name: 9,
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">9<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row2">
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row3">&#9829</div>
  <div class="card-layout-div row4">
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">9<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 9,
    name: 9,
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">9<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row2">
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row3">&#9827</div>
  <div class="card-layout-div row4">
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">9<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 9,
    name: 9,
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'>    <div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">9<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row2">
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row3">&#9830</div>
  <div class="card-layout-div row4">
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">9<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 9,
    name: 9,
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">9<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row2">
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row3">&#9824</div>
  <div class="card-layout-div row4">
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">9<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 8,
    name: 8,
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">8<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row2">&#9829</div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row4">&#9829</div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">8<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 8,
    name: 8,
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <div class="valueCard">8<br>&#9827</div>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row2">&#9827</div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row4">&#9827</div>
  <div class="card-layout-div row5">
    <div class="valueCardBottom">8<br>&#9827</div>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 8,
    name: 8,
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">8<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row2">&#9830</div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row4">&#9830</div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">8<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 8,
    name: 8,
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">8<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row2">&#9824</div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row4">&#9824</div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">8<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 7,
    name: 7,
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">7<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row2">&#9829</div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">7<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 7,
    name: 7,
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'>
    <div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <div class="valueCard">7<br>&#9827</div>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row2">&#9827</div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <div class="valueCardBottom">7<br>&#9827</div>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 7,
    name: 7,
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">7<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row2">&#9830</div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">7<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 7,
    name: 7,
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">7<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row2">&#9824</div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">7<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 6,
    name: 6,
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">6<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">6<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 6,
    name: 6,
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">6<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">6<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 6,
    name: 6,
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">6<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">6<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 6,
    name: 6,
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">6<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">6<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 5,
    name: 5,
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">5<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9829</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">5<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 5,
    name: 5,
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">5<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9827</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">5<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 5,
    name: 5,
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">5<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9830</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">5<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 5,
    name: 5,
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">5<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9824</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">5<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 4,
    name: 4,
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">4<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3"></div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">4<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
    <div class="card-layout-div">&#9829</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 4,
    name: 4,
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">4<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3"></div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">4<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
    <div class="card-layout-div">&#9827</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 4,
    name: 4,
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">4<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3"></div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">4<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
    <div class="card-layout-div">&#9830</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 4,
    name: 4,
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">4<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3"></div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">4<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
    <div class="card-layout-div">&#9824</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 3,
    name: 3,
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">3<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9829</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">3<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 3,
    name: 3,
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">3<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9827</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">3<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 3,
    name: 3,
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">3<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9830</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">3<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 3,
    name: 3,
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">3<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3">&#9824</div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">3<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 2,
    name: 2,
    symbol: "hearts",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">2<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3"></div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">2<br>&#9829</span>
    <div class="card-layout-div">&#9829</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 2,
    name: 2,
    symbol: "clubs",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">2<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3"></div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">2<br>&#9827</span>
    <div class="card-layout-div">&#9827</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 2,
    name: 2,
    symbol: "diamonds",
    color: "red",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">2<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3"></div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">2<br>&#9830</span>
    <div class="card-layout-div">&#9830</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
  {
    value: 2,
    name: 2,
    symbol: "spades",
    color: "black",
    layout: `<div class='card-container'><div class="card-layout-div cardFront">
  <div class="card-layout-div row1">
    <span class="valueCard">2<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
  </div>
  <div class="card-layout-div row2"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row3"></div>
  <div class="card-layout-div row4"><div class="card-layout-div"></div></div>
  <div class="card-layout-div row5">
    <span class="valueCardBottom">2<br>&#9824</span>
    <div class="card-layout-div">&#9824</div>
  </div>
  </div>  <div class='cardBack'>
  </div>
  </div>`,
  },
];

export default deck;
