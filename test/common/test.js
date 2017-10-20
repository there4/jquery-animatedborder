/*global QUnit:true, module:true, test:true, asyncTest:true, expect:true*/
/*global start:true, stop:true ok:true, equal:true, notEqual:true, deepEqual:true*/
/*global notDeepEqual:true, strictEqual:true, notStrictEqual:true, raises:true*/
(function($) {
    QUnit.test('is chainable', function(assert) {
        var elements = $('#qunit-fixture').children();
        assert.strictEqual(
            elements.animatedBorder(),
            elements,
            'should be chaninable'
        );
    });
}(jQuery));
