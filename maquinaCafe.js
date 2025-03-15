class MaquinaCafe {
    seleccionarVaso(tamano) {
        return `Vaso ${tamano} seleccionado`;
    }
    seleccionarAzucar(cucharadas) {
        return `${cucharadas} cucharadas de azúcar añadidas`;
    }
}

module.exports = MaquinaCafe;
