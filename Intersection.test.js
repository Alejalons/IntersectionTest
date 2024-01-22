const {FindIntersection} = require('./intersection.js');

test('FindIntersection devuelve correctamente la intersección de dos listas de números', () => {
    const input = ["1, 3, 4, 7, 13", "1, 2, 4, 13, 15"];
    const output = "1,4,13";
    expect(FindIntersection(input)).toBe(output);
});

test('FindIntersection maneja correctamente las entradas alfanuméricas', () => {
    const input = ["a, e, 4, 7, 13", "1, 2, 4, 13, 15"];
    const output = "4,13";
    expect(FindIntersection(input)).toBe(output);
});

test('Intersección con una entrada de array', () => {
    const input = [[1, 3, 4, 7, 13], "1, 2, 4, 13, 15"];
    expect(() => FindIntersection(input)).toThrow();
});

test('Intersección sin intersección', () => {
    const input = ["1, 2, 4, 7, 13", "3, 5, 6, 11, 15"];
    const output = false;
    expect(FindIntersection(input)).toBe(output);
});

test('Intersección sin comas', () => {
    const input = ["1 2, 4, 7 13", "4, 5, 6, 11, 15"];
    const output = "4";
    expect(FindIntersection(input)).toBe(output);
});

test('Intersección con algunas entradas sin comas y sin intersección', () => {
    const input = ["1 2, 4, 7 13", "3, 5, 6, 11, 15"];
    const output = false;
    expect(FindIntersection(input)).toBe(output);
});

test('Intersección con solo un elemento en el array y sin intersección', () => {
    const input = ["1, 2, 4, 7, 13"];
    const output = false;
    expect(FindIntersection(input)).toBe(output);
});

test('Intersección con array vacío y sin intersección', () => {
    const input = [];
    const output = false;
    expect(FindIntersection(input)).toBe(output);
});

test('Intersección alfabética sin espacio', () => {
    const input = ["a,b,c,d,e", "a,b,f,g,e,h,y"];
    const output = "a,b,e";
    expect(FindIntersection(input)).toBe(output);
});

test('Intersección alfabética con espacio', () => {
    const input = ["a, b, c, d, e", "a, b, f, g, e, h, y"];
    const output = "a,b,e";
    expect(FindIntersection(input)).toBe(output);
});

test('FindIntersection devuelve false cuando una lista es null', () => {
    const input = [null, "1, 2, 4, 13, 15"];
    expect(() => FindIntersection(input)).toThrow();
});

test('FindIntersection devuelve false cuando una lista es undefined', () => {
    const input = [undefined, "1, 2, 4, 13, 15"];
    expect(() => FindIntersection(input)).toThrow();
});