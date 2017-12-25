module.exports = (window, pieces) => {

  (function($){
    $.fn.snapPuzzle = function(options){

      let o = $.extend({ pile: '', containment: 'document', rows: 2, columns: 2, onComplete: function(){} }, options);

      // public methods
      if (typeof options == 'string') {
        this.each(function(){
          let that = $(this),
            o = that.data('options'),
            pieceWidth = that.width() / o.columns,
            pieceHeight = that.height() / o.rows,
            pile = $(o.pile),
            maxX = pile.width() - pieceWidth,
            maxY = pile.height() - pieceHeight,
            puzzle_offset = that.closest('span').offset(),
            pile_offset = pile.offset();

          if (options == 'destroy') {
            $('.'+o.puzzle_class).remove();
            that.unwrap().removeData('options');
            pile.removeClass('snappuzzle-pile');
          } else if (options == 'refresh') {
            $('.snappuzzle-slot.'+o.puzzle_class).each(function(){
              let x_y = $(this).data('pos').split('_'), x = x_y[0], y = x_y[1];
              $(this).css({
                width: pieceWidth,
                height: pieceHeight,
                left: y*pieceWidth,
                top: x*pieceHeight
              });
            });
            $('.snappuzzle-piece.'+o.puzzle_class).each(function(){
              if ($(this).data('slot')) {
                // placed on slot
                var x_y = $(this).data('slot').split('_'), slot_x = x_y[0], slot_y = x_y[1],
                  x_y = $(this).data('pos').split('_'), pos_x = x_y[0], pos_y = x_y[1];
                $(this).css({
                  width: pieceWidth,
                  height: pieceHeight,
                  left: slot_y*pieceWidth+puzzle_offset.left-pile_offset.left,
                  top: slot_x*pieceHeight+puzzle_offset.top-pile_offset.top,
                  backgroundPosition: (-pos_y*pieceWidth)+'px '+(-pos_x*pieceHeight)+'px',
                  backgroundSize: that.width()
                });
              } else {
                // placed anywhere else
                let x_y = $(this).data('pos').split('_'), x = x_y[0], y = x_y[1];
                $(this).css({
                  width: pieceWidth,
                  height: pieceHeight,
                  left: Math.floor((Math.random()*(maxX+1))),
                  top: Math.floor((Math.random()*(maxY+1))),
                  backgroundPosition: (-y*pieceWidth)+'px '+(-x*pieceHeight)+'px',
                  backgroundSize: that.width()
                });
              }
            });
          }
        });
        return this;
      }

      function init(that){

        that = $("#source_image");

        var puzzle_class = 'sp_'+new Date().getTime(),
          puzzle = that.wrap('<span class="snappuzzle-wrap"/>').closest('span'),
          src = that.attr('src'),
          pieceWidth = that.width() / o.columns,
          pieceHeight = that.height() / o.rows,
          pile = $(o.pile).addClass('snappuzzle-pile'),
          maxX = pile.width() - pieceWidth,
          maxY = pile.height() - pieceHeight;

        o.puzzle_class = puzzle_class;
        that.data('options', o);

        for (let x=0; x<o.rows; x++) {
          for (let y=0; y<o.columns; y++) {

            $('<div class="snappuzzle-piece '+puzzle_class+'"/>').data('pos', x+'_'+y).css({
              width: pieceWidth,
              height: pieceHeight,
              position: 'absolute',
              left: Math.floor((Math.random()*(maxX+1))),
              top: Math.floor((Math.random()*(maxY+1))),
              zIndex: Math.floor((Math.random()*10)+1),
              backgroundImage: 'url('+src+')',
              backgroundPosition: (-y*pieceWidth)+'px '+(-x*pieceHeight)+'px',
              backgroundSize: that.width()
            }).draggable({
              start: function(e, ui){ $(this).removeData('slot'); },
              stack: '.snappuzzle-piece',
              containment: o.containment
            }).appendTo(pile).data('lastSlot', pile);

            $('<div class="snappuzzle-slot '+puzzle_class+'"/>').data('pos', x+'_'+y).css({
              width: pieceWidth,
              height: pieceHeight,
              left: y*pieceWidth,
              top: x*pieceHeight
            }).appendTo(puzzle).droppable({
              accept: '.'+puzzle_class,
              hoverClass: 'snappuzzle-slot-hover',
              drop: function(e, ui){
                var slot_pos = $(this).data('pos');

                // prevent dropping multiple pieces on one slot
                $('.snappuzzle-piece.'+puzzle_class).each(function(){
                  if ($(this).data('slot') == slot_pos) slot_pos = false;
                });
                if (!slot_pos) return false;

                ui.draggable.data('lastSlot', $(this)).data('slot', slot_pos);
                ui.draggable.position({ of: $(this), my: 'left top', at: 'left top' });
                if (ui.draggable.data('pos')==slot_pos) {
                  ui.draggable.addClass('correct');
                  // fix piece
                  // $(this).droppable('disable').fadeIn().fadeOut();
                  $(this).droppable('disable').css('opacity', 1).fadeOut(1000);
                  ui.draggable.css({opacity: 0, cursor: 'default'}).draggable('disable');
                  if ($('.snappuzzle-piece.correct.'+puzzle_class).length == o.rows*o.columns) o.onComplete(that);
                }
              }
            });
          }
        }
      }

      return setTimeout(()=>init($(this)), 1500);
    };
  }(jQuery));


  !function(a){function f(a,b){if(!(a.originalEvent.touches.length>1)){a.preventDefault();var c=a.originalEvent.changedTouches[0],d=document.createEvent("MouseEvents");d.initMouseEvent(b,!0,!0,window,1,c.screenX,c.screenY,c.clientX,c.clientY,!1,!1,!1,!1,0,null),a.target.dispatchEvent(d)}}if(a.support.touch="ontouchend"in document,a.support.touch){var e,b=a.ui.mouse.prototype,c=b._mouseInit,d=b._mouseDestroy;b._touchStart=function(a){var b=this;!e&&b._mouseCapture(a.originalEvent.changedTouches[0])&&(e=!0,b._touchMoved=!1,f(a,"mouseover"),f(a,"mousemove"),f(a,"mousedown"))},b._touchMove=function(a){e&&(this._touchMoved=!0,f(a,"mousemove"))},b._touchEnd=function(a){e&&(f(a,"mouseup"),f(a,"mouseout"),this._touchMoved||f(a,"click"),e=!1)},b._mouseInit=function(){var b=this;b.element.bind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),c.call(b)},b._mouseDestroy=function(){var b=this;b.element.unbind({touchstart:a.proxy(b,"_touchStart"),touchmove:a.proxy(b,"_touchMove"),touchend:a.proxy(b,"_touchEnd")}),d.call(b)}}}(jQuery);
  function start_puzzle(x){
    $('#puzzle_solved').hide();
    $('#source_image').snapPuzzle({
      rows: x, columns: x,
      pile: '#pile',
      containment: '#puzzle-containment',
      onComplete: function(){
        $('#source_image').fadeOut(150).fadeIn();
        $('#puzzle_solved').show();
      }
    });
  }
  $(function(){
    $('#pile').height($('#source_image').height());
    start_puzzle(pieces || 2);
    $('.restart-puzzle').click(function(){
      $('#source_image').snapPuzzle('destroy');
      start_puzzle($(this).data('grid'));
    });
    $(window).resize(function(){
      $('#pile').height($('#source_image').height());
      $('#source_image').snapPuzzle('refresh');
    });
  });
};

// const puzzle = {
//
//   window: window,
//   workarea: undefined,
//
//   sourceImage: undefined,
//
//   rows: 2,
//   columns: 2,
//
//   init({ window, rows = 2, columns = 2 }) {
//
//     this.window = window;
//     this.workarea = this.window.document.getElementsByClassName("workarea")[0];
//
//     this.sourceImage = this.window.document.getElementById("sourceImage");
//
//     console.log(this.workarea);
//
//     console.log(this.sourceImage);
//
//     let width = this.sourceImage.offsetWidth / rows;
//
//     this.rows = rows;
//     this.columns = columns;
//   }
// };
//
// module.exports = puzzle;
