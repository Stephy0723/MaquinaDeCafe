const MaquinaCafe = require('./maquinaCafe');

test('debe permitir seleccionar un tamaño de vaso', () => {
    const maquina = new MaquinaCafe();
    expect(maquina.seleccionarVaso('Mediano')).toBe('Vaso Mediano seleccionado');
});
