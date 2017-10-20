/*global QUnit:true, module:true, test:true, asyncTest:true, expect:true*/
/*global start:true, stop:true ok:true, equal:true, notEqual:true, deepEqual:true*/
/*global notDeepEqual:true, strictEqual:true, notStrictEqual:true, raises:true*/
(function($) {
    QUnit.module('jQuery Functionality', {
        setup: function () {
            this.elems = $('#qunit-fixture').children();
        }
    });

    QUnit.test('can render divs', function (assert) {
        $('div.alpha').animatedBorder({ size : 1, color : 'red' });
        assert.ok($('.animatedBorderSprite').length, 'Div is rendered');
    });
}(jQuery));
