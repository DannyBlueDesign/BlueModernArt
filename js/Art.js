'use strict';

var Art = (function() {

  var POSITION_BASE = 150,
      SIZE_BASE     = 75,
      prototype     = Art.prototype;

  var X, Y;

  /**
   * @name Art
   *
   * @param {Object} stage
   * @param {Array} colors
   * @param {Number} originX
   * @param {Number} originY
   *
   * @constructor
   */
  function Art(stage, colors, originX, originY) {
    X = originX;
    Y = originY;

    this.stage = stage;

    this.colors = colors;

    this.shapeList = [];

    this.layer1 = new Kinetic.Layer();
  }

  /**
   * @name create
   *
   * @memberof Art
   *
   * @description
   * Create Art!!!
   */
  prototype.create = function create() {
    var shapeList = [], object;

    for(var i = 0; i <= this.stage.attrs.width; i += _createRandom(POSITION_BASE)) {

      for(var y = 0; y <= this.stage.attrs.height; y += _createRandom(POSITION_BASE)) {

        object = new Kinetic.Rect({
          x: typeof X !== 'undefined' ? X : i,
          y: typeof Y !== 'undefined' ? Y : y,
          width: _createRandom(SIZE_BASE),
          height: _createRandom(SIZE_BASE),
          fill: this.colors[Math.floor(Math.random() * this.colors.length)]
        });

        shapeList.push(object);

        this.layer1.add(object); // add the shape to the layer

      }

    }

    this.stage.add(this.layer1); // add the layer to the stage

    this.shapeList = shapeList;
  };

  /**
   * @name shuffle
   *
   * @memberof Art
   *
   * @description
   * Shuffle all of the shapes to a new position on screen
   */
  prototype.shuffle = function shuffle(x, y) {
    var shapeList = this.shapeList, tween;

    for(var i = 0, len = shapeList.length; i < len; i++) {

      tween = new Kinetic.Tween({
        node: shapeList[i],
        x: typeof x !== 'undefined' ? x : 0,
        y: typeof y !== 'undefined' ? y : 0,
        width: _createRandom(SIZE_BASE),
        height: _createRandom(SIZE_BASE),
        easing: Kinetic.Easings.StrongEaseOut,
        duration: 0.5
      });

      tween.play();

    }

    setTimeout(function() {
      for(var i = 0, len = shapeList.length; i < len; i++) {

        tween = new Kinetic.Tween({
          node: shapeList[i],
          x: _createRandom(this.stage.attrs.width),
          y: _createRandom(this.stage.attrs.height),
          width: _createRandom(SIZE_BASE),
          height: _createRandom(SIZE_BASE),
          easing: Kinetic.Easings.StrongEaseOut,
          duration: 1
        });

        tween.play();

      }
    }.bind(this), 1000);
  };

  /**
   * @name changeColors
   *
   * @memberof Art
   *
   * @description
   * Change the color mix of the shapes
   */
  prototype.changeColors = function() {
    var shapeList = this.shapeList,
        layer     = this.layer1,
        colors    = this.colors;

    for(var i = 0; i<shapeList.length; i++) {
      shapeList[i].fill(colors[Math.floor(Math.random() * colors.length)]);
    }

    layer.draw();
  };

  /**
   * @name _createRandom
   *
   * @memberof Art
   *
   * @param base
   *
   * @return {number}
   *
   * @private
   */
  function _createRandom(base) {
    return Math.floor((Math.random() * base) + 1);
  }

  return Art

}());