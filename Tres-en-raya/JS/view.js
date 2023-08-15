export default class View {
  $ = {};
  $$ = {};

  constructor() {
    this.$.menu = this.#qs('[data-id = "menu"]');
    this.$.menuBtn = this.#qs('[data-id = "menu-btn"]');
    this.$.menuItems = this.#qs('[data-id = "menu-items"]');
    this.$.resetBtn = this.#qs('[data-id = "reset-btn"]');
    this.$.newRoundBtn = this.#qs('[data-id = "new-round-btn"]');

    this.$.modal = this.#qs('[data-id = "modal"]');
    this.$.modalText = this.#qs('[data-id = "modal-text"]');
    this.$.modalBtn = this.#qs('[data-id = "modal-btn"]');
    this.$.turn = this.#qs('[data-id = "turn"]');

    this.$.p1Wins = this.#qs('[data-id = "player1-stats"]');
    this.$.p2Wins = this.#qs('[data-id = "player2-stats"]');
    this.$.tiesCount = this.#qs('[data-id = "ties"]');

    this.$$.squares = this.#qsAll('[data-id = "square"]');

    //UI event listener
    this.$.menuBtn.addEventListener("click", () => {
      this.#toggleMenu();
    });
  }

  //Registrar los event listener
  bindGameReseEvent(handler) {
    this.$.resetBtn.addEventListener("click", handler);
    this.$.modalBtn.addEventListener("click", handler);
  }
  bindNewRoundEvent(handler) {
    this.$.newRoundBtn.addEventListener("click", handler);
  }
  bindPlayerMoveEvent(handler) {
    this.$$.squares.forEach((square) => {
      square.addEventListener("click", () => handler(square));
    });
  }

  //Metodos DOM helper
  updateScoreboard(p1Wins, p2Wins, ties) {
    this.$.p1Wins.innerText = `${p1Wins} wins`;
    this.$.p2Wins.innerText = `${p2Wins} wins`;
    this.$.tiesCount.innerText = ties;
  }

  openModal(message) {
    this.$.modal.classList.remove("hidden");
    this.$.modalText.innerText = message;
  }
  #closeModal() {
    this.$.modal.classList.add("hidden");
  }

  closeAll() {
    this.#closeModal();
    this.#closeMenu();
  }

  clearMoves() {
    this.$$.squares.forEach((square) => {
      square.replaceChildren();
    });
  }
  
  initializeMoves(moves) {
    this.$$.squares.forEach((square) => {
      const existingMove = moves.find((move) => move.squareId === +square.id);
      if (existingMove) {
        this.handlePlayerMove(square, existingMove.player);
      }
    });
  }

  #toggleMenu() {
    this.$.menuItems.classList.toggle("hidden");
    this.$.menuBtn.classList.toggle("border");

    const icon = this.$.menuBtn.querySelector("i");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-up");
  }
  #closeMenu() {
    this.$.menuItems.classList.add("hidden");
    this.$.menuBtn.classList.remove("border");

    const icon = this.$.menuBtn.querySelector("i");
    icon.classList.add("fa-chevron-down");
    icon.classList.remove("fa-chevron-up");
  }

  #qsAll(selector) {
    const elemntList = document.querySelectorAll(selector);

    if (!elemntList) throw Error("Could not find element list");

    return elemntList;
  }
  #qs(selector, parent) {
    const elemnt = parent
      ? parent.document.querySelector(selector)
      : document.querySelector(selector);

    if (!elemnt) throw Error("Could not find element");

    return elemnt;
  }

  handlePlayerMove(squareElemnt, player) {
    const icon = document.createElement("i");
    icon.classList.add("fa-solid", player.iconClass, player.colorClass);

    squareElemnt.replaceChildren(icon);
  }

  setTurnIndicator(player) {
    const icon = document.createElement("i");
    const label = document.createElement("p");

    icon.classList.add(player.colorClass, "fa-solid", player.iconClass);

    label.classList.add(player.colorClass);
    label.innerText = player.name + " you're up!";

    this.$.turn.replaceChildren(icon, label);
  }
}
