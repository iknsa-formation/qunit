test('nbCars()', function() {
    ok(nbCars(0), 'Zero is a possible number of cars');
    ok(nbCars(2), 'Two is a possible number of cars');
    ok(!nbCars(-2), 'Negative two is NOT a possible number of cars');
});
