class MaquinaCafe {
    constructor() {
        this.tamanosValidos = ["Pequeño", "Mediano", "Grande"];
    }

    seleccionarVaso(tamano) {
        if (!this.tamanosValidos.includes(tamano)) {
            return "Error: Tamaño de vaso no válido. Usa 'Pequeño', 'Mediano' o 'Grande'.";
        }
        return `Vaso ${tamano} seleccionado`;
    }
}

module.exports = MaquinaCafe;
