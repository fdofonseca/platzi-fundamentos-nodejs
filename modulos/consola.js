var tabla = [{ a: 1, b: 'Z' }, { a: 2, b: 'A' }];

console.group('Inicio Grupo');
console.log('Algo');
console.error('Algo error');
console.groupEnd('Fin Grupo');

console.warn('Algo Warn');

console.table(tabla);

console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');