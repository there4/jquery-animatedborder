/*global QUnit:true, module:true, test:true, asyncTest:true, expect:true*/
/*global start:true, stop:true ok:true, equal:true, notEqual:true, deepEqual:true*/
/*global notDeepEqual:true, strictEqual:true, notStrictEqual:true, raises:true*/
(function($) {

    module('jQuery Functionality', {
        setup: function() {
            this.elems = $('#qunit-fixture').children();
        }
    });
    
    test('is chainable', 1, function() {
        strictEqual(this.elems.animatedBorder(), this.elems, 'should be chaninable');
    });

}(jQuery));
