// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var $$String = require("bs-platform/lib/js/string.js");
var Caml_exceptions = require("bs-platform/lib/js/caml_exceptions.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var OutOfBound = Caml_exceptions.create("Demo-Tictactoe.OutOfBound");

function displayPlayer(player) {
  if (player) {
    return "X";
  } else {
    return "O";
  }
}

function proceedGame(gameState, newMove) {
  return {
          currentPlayer: gameState.currentPlayer,
          history: List.append(gameState.history, /* :: */[
                /* tuple */[
                  gameState.currentPlayer,
                  newMove
                ],
                /* [] */0
              ]),
          won: gameState.won
        };
}

function renderBoard(moves, initialBoard) {
  return List.mapi((function (row, cols) {
                return List.mapi((function (col, item) {
                              var val;
                              try {
                                val = List.find((function (play) {
                                        var match = play[1];
                                        if (match[0] === row) {
                                          return match[1] === col;
                                        } else {
                                          return false;
                                        }
                                      }), moves);
                              }
                              catch (exn){
                                if (exn === Caml_builtin_exceptions.not_found) {
                                  if (col === 2) {
                                    return "E\n";
                                  } else {
                                    return "E";
                                  }
                                } else {
                                  throw exn;
                                }
                              }
                              var player = val[0];
                              if (val[1][1] === 2) {
                                return (
                                        player ? "X" : "O"
                                      ) + "\n";
                              } else if (player) {
                                return "X";
                              } else {
                                return "O";
                              }
                            }), cols);
              }), initialBoard);
}

function renderGame(gameState) {
  return $$String.concat("", List.flatten(renderBoard(gameState.history, /* :: */[
                      /* :: */[
                        /* Empty */2,
                        /* :: */[
                          /* Empty */2,
                          /* :: */[
                            /* Empty */2,
                            /* [] */0
                          ]
                        ]
                      ],
                      /* :: */[
                        /* :: */[
                          /* Empty */2,
                          /* :: */[
                            /* Empty */2,
                            /* :: */[
                              /* Empty */2,
                              /* [] */0
                            ]
                          ]
                        ],
                        /* :: */[
                          /* :: */[
                            /* Empty */2,
                            /* :: */[
                              /* Empty */2,
                              /* :: */[
                                /* Empty */2,
                                /* [] */0
                              ]
                            ]
                          ],
                          /* [] */0
                        ]
                      ]
                    ])));
}

var sample = {
  currentPlayer: /* Black */1,
  history: /* :: */[
    /* tuple */[
      /* Black */1,
      /* tuple */[
        1,
        0
      ]
    ],
    /* :: */[
      /* tuple */[
        /* White */0,
        /* tuple */[
          0,
          1
        ]
      ],
      /* [] */0
    ]
  ],
  won: false
};

console.log("Starting Game");

console.log(renderGame(sample));

exports.OutOfBound = OutOfBound;
exports.displayPlayer = displayPlayer;
exports.proceedGame = proceedGame;
exports.renderBoard = renderBoard;
exports.renderGame = renderGame;
exports.sample = sample;
/*  Not a pure module */
