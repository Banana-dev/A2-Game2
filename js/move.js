/**
 * Interface de jeu
 * @param element Element HTML (id) dans lequel l'interface sera dessinée
 */
var interface = function (element) {
  /**
   * Correspondance pour this, utilisée dans les callbacks
   * @type {interface}
   */
  var that = this

  /**
   * Nombre de vies
   * @type {number}
   */
  this.lives = 0
  /**
   * Score
   * @type {number}
   */
  this.score = 0

  /**
   * Taille de la zone de jeu
   * @type {{width: number, height: number}}
   */
  this.size = {
    width: 1024,
    height: 768,
  }

  /**
   * Instance de board (éponge)
   * @type {board}
   */
  this.board = new board(this.size.height)

  /**
   * Grille de briques
   * @type {grid}
   */
  this.bricks = new grid()

  /**
   * Instance de partie : timer
   * @type {null}
   */
  this.instance = null

  /**
   * Element DOM dans lequel on va afficher l'interface
   * @type {Element}
   */
  this.canvas = document.getElementById(element)
  /**
   * Contexte canva pour dessiner
   * @type {CanvasRenderingContext2D|null}
   */
  this.context = this.canvas.getContext('2d') || null

  // Erreur de contexte (pas de canvas dispo pour le navigateur)
  if (!this.context) {
    console.log('Pas de canvas disponible')
    return
  }

  /**
   * Dessine l'interface
   */
  this.draw = function () {
    console.log('tick')

    // Nettoyage de la zone
    that.context.clearRect(0, 0, that.size.width, that.size.height)

    // Dessin du pad
    that.board.draw(that.context)
  }

  /**
   * Remet les valeurs à 0
   */
  this.reset = function () {
    this.lives = 0
    this.score = 0
  }

  /**
   * Démarre le timer
   */
  this.start = function () {
    this.instance = setInterval(that.draw, 1000 / 120)
  }

  /**
   * Stoppe le timer
   */
  this.stop = function () {
    console.log('Stopped')
    window.clearInterval(this.instance)
  }

  /**********************
   * Evènements materiels
   */
  window.addEventListener('mousemove', this.board.move, false)
}

/**
 * Classe de grille
 *
 * @returns {grid}
 */
var grid = function () {
  /**
   * héhéhé
   * @type {grid}
   */
  var that = this
  /**
   * Va instancier la grille et placer des blocs dessus
   */
  this.init = function () {}

  /**
   * Fonction de dessin de la grille
   *
   * @param {CanvasRenderingContext2D} context Contexte Canvas 2D
   */
  function draw(context) {}

  return this
}

/**
 * Classe de brique
 *
 * @returns {brick}
 */
var brick = function () {
  // Type de brique (chépo, vous le virerez si ca ne sert à rien)
  this.type = null
  // Stockage de powerup dans la brique
  this.powerup = null
  // Nombre de vies de la brique
  this.lives = 1

  /**
   * Fonction de dessin de la balle
   *
   * @param {CanvasRenderingContext2D} context Contexte Canvas 2D
   * @param {number} x Position en X
   * @param {number} y Position en Y
   */
  function draw(context, x, y) {}

  return this
}

/**
 * Classe de board (éponge)
 *
 * @param gameHeigth Taille de la zone de jeu, pour placement initial
 *
 * @returns {board}
 */
var board = function (gameHeigth) {
  var that = this
  /**
   * Position du pad
   * @type {{x: number, y: number}}
   */
  this.position = {
    x: 0,
    y: gameHeigth - 70,
  }

  /**
   * Taille du pad
   * @type {{height: number, width: number}}
   */
  this.size = {
    height: 32,
    width: 80,
  }

  /**
   * Modificateurs de pad
   * @type {Array}
   */
  this.modifiers = []

  this.move = function (e) {
    //console.log(this.board.position.x)
    console.log(e.clientX)
    if (e.clientX > (1024 - that.size.width)) {
    	that.position.x = 1024 - that.size.width;
    }
    else if (e.clientX < that.size.width / 2) {
    	that.position.x = that.size.width / 2;
    }
    else {
    	that.position.x = e.clientX;
    }
  }
  /**
   * Fonction de dessin de la board
   *
   * @param {CanvasRenderingContext2D} context Contexte Canvas 2D
   */
  this.draw = function (context) {
    context.fillStyle = 'rgb(0, 200, 0)'
    context.fillRect(this.position.x - (this.size.width / 2), this.position.y, this.size.width, this.size.height)
  }

  return this
}

var ball = function () {

  /**
   * Fonction de dessin de la balle
   *
   * @param {CanvasRenderingContext2D} context Contexte Canvas 2D
   */
  function draw(context) {}

  return this
}