const MaquinaCafe = require('./maquinaCafe');

test('debe permitir seleccionar un tamaño de vaso', () => {
    const maquina = new MaquinaCafe();
    expect(maquina.seleccionarVaso('Mediano')).toBe('Vaso Mediano seleccionado');
});
test('debe mostrar un error si el tamaño de vaso no es válido', () => {
    const maquina = new MaquinaCafe();
    expect(maquina.seleccionarVaso('Extra Grande')).toBe("Error: Tamaño de vaso no válido. Usa 'Pequeño', 'Mediano' o 'Grande'.");
});