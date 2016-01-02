// http://qunitjs.com/

module('Module Assert');

// Assertions
test('nunber of Cars', function() {
    ok(nbCars(0), 'Zero is a possible number of cars');
    ok(nbCars(2), 'Two is a possible number of cars');
    ok(!nbCars(-2), 'Negative two is NOT a possible number of cars');
});

// Equal assertion
test('equal', function() {
    // equal() uses ==
    equal(1,1);
    equal(1,1, 'One is really equal to one...');
    equal(1,'1', 'One is really equal to one...');
    notEqual( {}, {}, 'Returns true as the two objects are different objects');
    notEqual( [], [], 'Returns true as the two arrays are different arrays');

    /**
     * @fromTheDoc
     *
     * A deep recursive comparison, working on primitive types, arrays, objects, regular expressions, dates and functions.
     *
     * deepEqual() uses ===
     */
    deepEqual(1,1, 'One is really equal to one...');
    notDeepEqual(1,'1', 'One is really equal to one...');
    // strictlyEqual() uses ===
    deepEqual(1,1, 'One is really equal to one...');
    notDeepEqual(1,'1', 'One is really equal to one...');
});

// Identical assertion

/**
 * @fromTheDoc
 *
 * The propEqual() assertion provides strictly (===) comparison of Object properties. Unlike deepEqual(), this assertion can be
 * used to compare two objects made with different constructors and prototype.
 *
 * strictEqual() can be used to test strict equality.
 *
 * notPropEqual() can be used to explicitly test strict inequality of Object properties
 */
test('propEqual', function() {
    propEqual( {a: 1}, {a: 1} , 'Although the objects are different, there properties are even');
    propEqual( [1], [1], 'Returns true event though the two arrays are different arrays');
});
