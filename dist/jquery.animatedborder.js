/*! Animated Border - v0.6.0 - 3/27/2012
* https://github.com/there4/jquery-animatedborder
* Copyright (c) 2012 Craig Davis; Licensed MIT */

/**
 * Adds an animated border around any block level element.
 *
 * It does this by adding 4 absolutely positioned divs around
 * the element. The 4 highlight divs use an animated gif with
 * white blocks and transparent areas. This allows the background
 * of the div to be visible and be treated as the color of the
 * animated border.
 *
 * This plugin requires 3 style rules:
 * .animatedBorderSprite { position: absolute; background: url(stripe.gif); margin: 0; }
 * .animatedBorderSprite-top { -moz-border-radius-topleft: 2px; -webkit-border-radius-topleft: 2px; -moz-border-radius-topright: 2px; -webkit-border-radius-topright: 2px;}
 * .animatedBorderSprite-bottom { -moz-border-radius-bottomleft: 2px; -webkit-border-radius-bottomleft: 2px; -moz-border-radius-bottomright: 2px; -webkit-border-radius-bottomright: 2px;}
 *
 * If you have to remake the animated gif, you should build
 * an 8x8 2 frame gif animation, with a 4x4 checkerboard grid
 * made of white and transparent blocks
 *
 */

(function($) {
    $.fn.extend({
        repositionBorders: function() {
            $('body div.animatedBorder').each(function() {
                var color = $('.animatedBorderSprite-top', $(this)).css('background-color'),
            size = $('.animatedBorderSprite-top', $(this)).height();
                $(this)
          .animatedBorder() // remove
          .animatedBorder({ 'size': size, 'color': color });
            });
        },
        animatedBorder: function(options) {
            var defaults = {
                size: 2,
                color: '#6699CC',
                hover: false
            },
            opacity = 0.3,
            size;
            options = $.extend(defaults, options);

            return this.each(function() {
                switch (options) {
                    case 'hide':
                        $(this).children('.animatedBorderSprite').fadeOut();
                        break;
                    case 'show':
                        $(this).children('.animatedBorderSprite').css('opacity', 1).fadeIn();
                        break;
                    case 'destory':
                        $(this).children('.animatedBorderSprite').remove();
                        $(this).unbind('mouseenter mouseleave');
                        break;
                    default:
                        if ($(this).hasClass('animatedBorder')) {
                            $('.animatedBorderSprite', $(this)).remove();
                            $(this).removeClass('animatedBorder');
                            return;
                        }
                        if (options.hover) {
                            $(this).hover(
                              function() {
                                  $(this).children('.animatedBorderSprite').each(function(index) {
                                      if ($(this).css('display') === 'none') {
                                          $(this).show().css('opacity', opacity);
                                      }
                                  });
                              },
                              function() {
                                  $(this).children('.animatedBorderSprite').each(function(index) {
                                      if ($(this).css('display') === 'block' && Math.round($(this).css('opacity') * 10) / 10 === opacity) {
                                          $(this).css('opacity', 1).hide();
                                      }
                                  });
                              }
                            );
                        }
                        
                        // The element needs to get a position:relative rule
                        // so that the absolutely positioned borders will work
                        $(this).addClass('animatedBorder');
                        
                        // This is the size of the element, we use this to 
                        // calculate the width of the border elements
                        size = {
                            height: $(this).innerWidth(),
                            width: $(this).innerWidth()
                        };
                        
                        // Top line
                        $(this).append(
                          $('<div />')
                            .addClass('animatedBorderSprite animatedBorderSprite-top')
                            .css({
                                'top': -options.size,
                                'left': -options.size,
                                'width': size.width + (2*options.size),
                                'height': options.size,
                                'background-color': options.color
                            })
                        );
                        // Bottom Line
                        $(this).append(
                          $('<div />')
                            .addClass('animatedBorderSprite animatedBorderSprite-bottom')
                            .css({
                                'bottom': -options.size,
                                'left': -options.size,
                                'width': size.width + (2*options.size),
                                'height': options.size,
                                'background-color': options.color
                            })
                        );
                        // Left Line
                        $(this).append(
                          $('<div />')
                            .addClass('animatedBorderSprite')
                            .css({
                                'top': 0,
                                'left': -options.size,
                                'width': options.size,
                                'height': size.height,
                                'background-color': options.color
                            })
                        );
                        // Right Line
                        $(this).append(
                          $('<div />')
                            .addClass('animatedBorderSprite')
                            .css({
                                'top': 0,
                                'right': -options.size,
                                'width': options.size,
                                'height': size.height,
                                'background-color': options.color
                            })
                        );
                }
            });

        }
    });
}(jQuery));