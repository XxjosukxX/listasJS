class Nodo {
    constructor(dato, enlace = null) {
        this.dato = dato;
        this.enlace = enlace;
    }

    toString() {
        return `${this.dato} => ${this.enlace}`;
    }

    leerDato() {
        return this.dato;
    }

    siguiente() {
        return this.enlace;
    }
}

class Lista {
    constructor() {
        this.primero = null;
    }

    leerPrimero() {
        return this.primero;
    }

    insertarCabezaLista(entrada) {
        const nuevo = new Nodo(entrada, this.primero);
        this.primero = nuevo;
    }

    insertarLista(anterior, entrada) {
        const nuevo = new Nodo(entrada, anterior.enlace);
        anterior.enlace = nuevo;
    }

    eliminar(entrada) {
        let actual = this.primero;
        let anterior = null;
        
        while (actual !== null && actual.dato !== entrada) {
            anterior = actual;
            actual = actual.enlace;
        }
        
        if (actual !== null) {
            if (actual === this.primero) {
                this.primero = actual.enlace;
            } else {
                anterior.enlace = actual.enlace;
            }
        }
    }

    buscarLista(destino) {
        let indice = this.primero;
        while (indice !== null) {
            if (indice.dato === destino) {
                return indice;
            }
            indice = indice.enlace;
        }
        return null;
    }

    visualizar() {
        let n = this.primero;
        const elementos = [];
        while (n !== null) {
            elementos.push(n.dato);
            n = n.enlace;
        }
        console.log(elementos.join(' '));
    }

    invertir() {
        let n = this.primero;
        let referencia = null;
        while(n !== null){
            let nodoTemporal = new Nodo(n.dato, referencia);
            referencia = nodoTemporal;
            n = n.enlace;
        }
        this.primero = referencia;
    }

    eliminarDuplicados() {
        let actual = this.primero;
        let valores = new Set();
        let anterior = null;
        
        while (actual !== null) {
            if (valores.has(actual.dato)) {
                anterior.enlace = actual.enlace;
            } else {
                valores.add(actual.dato);
                anterior = actual;
            }
            actual = actual.enlace;
        }
    }

    buscarDesdeFinal(posicion) {
        let longitud = 0;
        let actual = this.primero;
        
        while (actual !== null) {
            longitud++;
            actual = actual.enlace;
        }
        
        if (posicion >= longitud || posicion < 0) {
            return null;
        }
        
        let objetivo = longitud - posicion - 1;
        actual = this.primero;
        
        for (let i = 0; i < objetivo; i++) {
            actual = actual.enlace;
        }
        
        return actual ? actual.dato : null;
    }

    toString() {
        return `=> ${this.primero}`;
    }

}

/*
const lista = new Lista();
lista.insertarCabezaLista(3);
lista.insertarCabezaLista(2);
lista.insertarCabezaLista(1);

console.log("Lista inicial:");
lista.visualizar(); 

const nodo2 = lista.buscarLista(2);
if (nodo2) {
    lista.insertarLista(nodo2, 5);
}

console.log("\nDespués de insertar 5 después del 2:");
lista.visualizar(); 

lista.eliminar(5);
console.log("\nDespués de eliminar el 5:");
lista.visualizar(); 

lista.eliminar(1);
console.log("\nDespués de eliminar la cabeza (1):");
lista.visualizar(); 

console.log("\nRepresentación toString:");
console.log(lista.toString()); 
*/

const lista = new Lista();
lista.insertarCabezaLista(1);
lista.insertarCabezaLista(2);
lista.insertarCabezaLista(3);
lista.insertarCabezaLista(3);
lista.insertarCabezaLista(2);
console.log("Datos insertados");
lista.visualizar();
lista.invertir();
console.log("Datos invertidos");
lista.visualizar();
console.log("Elimina duplicados");
lista.eliminarDuplicados();
lista.visualizar();
console.log("Elemento buscado");
console.log(lista.buscarDesdeFinal(0));