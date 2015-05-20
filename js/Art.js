var Art = (function() {

  var POSITION_BASE = 135,
      SIZE_BASE     = 75,
      prototype     = Art.prototype;

  /**
   * @name Art
   *
   * @param {Object} opts
   * @param {Object} opts.stage
   * @param {Array} opts.colors
   *
   * @constructor
   */
  function Art(opts) {
    this.stage = opts.stage;

    this.colors = opts.colors;

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
    var shapeList = [];

    for(var i = 0; i <= this.stage.attrs.width; i += _createRandom(POSITION_BASE)) {

      for(var y = 0; y <= this.stage.attrs.height; y += _createRandom(POSITION_BASE)) {

        var object = new Kinetic.Rect({
          x: i,
          y: y,
          width: _createRandom(SIZE_BASE),
          height: _createRandom(SIZE_BASE),
          fill: this.colors[Math.floor(Math.random() * this.colors.length)],
          opacity: Math.random()
        });

        shapeList.push(object);

        this.layer1.add(object); // add the shape to the layer

      }

    }

    this.stage.add(this.layer1); // add the layer to the stage

    this.shapeList = shapeList;

    console.log(this.shapeList.length);
  };

  /**
   * @name shuffle
   *
   * @memberof Art
   *
   * @description
   * Shuffle all of the shapes to a new position on screen
   */
  prototype.shuffle = function shuffle() {
    var shapeList = this.shapeList, tween;

    for(var i = 0, len = shapeList.length; i < len; i++) {
      tween = new Kinetic.Tween({
        node: shapeList[i],
        x: _createRandom(this.stage.attrs.width),
        y: _createRandom(this.stage.attrs.height),
        width: _createRandom(SIZE_BASE),
        height: _createRandom(SIZE_BASE),
        opacity: Math.random(),
        easing: Kinetic.Easings.StrongEaseOut,
        duration: 2
      });

      tween.play();
    }
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