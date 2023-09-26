import Store from "./store.js";
import View from "./view.js";

const players = [
  {
    id: 1,
    name: "Player 1",
    iconClass: "fa-x",
    colorClass: "yellow",
  },
  {
    id: 2,
    name: "Player 2",
    iconClass: "fa-o",
    colorClass: "turquoise",
  },
];

function init() {
  const store = new Store(players, "live-storage-key");
  const view = new View();
  

  const innitView = () => {
    view.closeAll();

    store.reset();

    view.setTurnIndicator(players[0]);
    view.clearMoves();

    view.updateScoreboard(
      store.stats.playerWithStats[0].wins,
      store.stats.playerWithStats[1].wins,
      store.stats.ties
    );
  };
  innitView();
  view.initializeMoves(store.game.moves)

  view.bindGameReseEvent((e) => {
    innitView();
  });

  view.bindNewRoundEvent((e) => {
    store.newRound();
    innitView();
  });

  view.bindPlayerMoveEvent((square) => {
    const existingMove = store.game.moves.find(
      (move) => move.squareId === +square.id
    );
    if (existingMove) {
      return;
    }

    //coloca el icono del jugador en su casilla
    view.handlePlayerMove(square, store.game.currentPlayer);

    //salta al siguiente estado 'pusheando' el movimiento al array
    store.playerMove(+square.id);

    //si el juego se termina se libera el modal con el ganador
    if (store.game.status.isComplete) {
      view.openModal(
        store.game.status.winner
          ? `${store.game.status.winner.name} wins!`
          : "it's a tie!"
      );
      return;
    }

    //Cambia el indicador de jugador actual
    view.setTurnIndicator(store.game.currentPlayer);
  });
}

window.addEventListener("load", init);
