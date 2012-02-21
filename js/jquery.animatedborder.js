/*
 * jquery.animatedborder. Animated borders on elements
 *
 * Copyright (c) 2010 Craig Davis
 * https://github.com/there4/jquery-animatedborder
 *
 * Licensed under MIT
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Launch  : 2/20/2010
 * Version : 0.3.0
 * Debug: jquery.animatedborder.js
 */

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
            };

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
                        options = $.extend(defaults, options);
                        var o = options;
                        if ($(this).hasClass('animatedBorder')) {
                            $('.animatedBorderSprite', $(this)).remove();
                            $(this).removeClass('animatedBorder');
                            return;
                        }
                        if (o.hover) {
                            var opacity = 0.3;
                            $(this).hover(
                              function() {
                                  $(this).children('.animatedBorderSprite').each(function(index) {
                                      if ($(this).css('display') == 'none') {
                                          $(this).show().css('opacity', opacity);
                                      }
                                  });
                              },
                              function() {
                                  $(this).children('.animatedBorderSprite').each(function(index) {
                                      console.log($(this).css('opacity'));
                                      if ($(this).css('display') == 'block' && Math.round($(this).css('opacity') * 10) / 10 == opacity) {
                                          $(this).css('opacity', 1).hide();
                                      }
                                  });
                              }
                            );
                        }

                        $(this).addClass('animatedBorder');
                        var offset = $(this).position(),
                        size = {
                            height: $(this).outerHeight(),
                            width: $(this).outerWidth()
                        };
                        $(this).append(
                          $('<div />')
                            .addClass('animatedBorderSprite')
                            .addClass('animatedBorderSprite-top')
                            .css({
                                'top': -o.size,
                                'left': 0,
                                'width': '100%',
                                'height': o.size,
                                'background-color': o.color
                            })
                          );
                        $(this).append(
                          $('<div />')
                            .addClass('animatedBorderSprite')
                            .addClass('animatedBorderSprite-bottom')
                            .css({
                                'bottom': -o.size,
                                'left': 0,
                                'width': '100%',
                                'height': o.size,
                                'background-color': o.color
                            })
                          );
                        $(this).append(
                          $('<div />')
                            .addClass('animatedBorderSprite')
                            .css({
                                'top': 0,
                                'left': 0,
                                'width': o.size,
                                'height': '100%',
                                'background-color': o.color
                            })
                          );
                        $(this).append(
                          $('<div />')
                            .addClass('animatedBorderSprite')
                            .css({
                                'top': 0,
                                'right': 0,
                                'width': o.size,
                                'height': '100%',
                                'background-color': o.color
                            })
                          );


                }
            });

        }
    });
})(jQuery);