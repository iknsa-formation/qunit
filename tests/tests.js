test('nbCars()', function() {
    ok(nbCars(0), 'Zero is a possible number of cars');
    ok(nbCars(2), 'Two is a possible number of cars');
    ok(!nbCars(-2), 'Negative two is NOT a possible number of cars');
});

test('assertions', function() {
    // equal() uses ==
    equal(1,1);
    equal(1,1, 'One is really equal to one...');
    equal(1,'1', 'One is really equal to one...');
    // deepEqual() uses ===
    deepEqual(1,1, 'One is really equal to one...');
    notDeepEqual(1,'1', 'One is really equal to one...');
});