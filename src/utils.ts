import axios from 'axios';

export function POST(url: string, data: any): any{
    return axios.post(url, data, {
        headers: {
            'PruebaTecnica': 'PruebaTecnica'
        }
    });
}

export function GET(url: string): any{
    return axios.get(url, {
        headers: {
            'PruebaTecnica': 'PruebaTecnica'
        }
    });
}

export function GETprueba(url: string):any {
    return {
        "success": true,
        "message": "No se encontro el cliente",
        "dataList": [
            {
                "codigo": 465100,
                "actividad": "VENTA AL POR MAYOR DE COMPUTADORES, EQUIPO PERIFÉRICO Y PROGRAMAS INFORMÁTICOS"
            },
            {
                "codigo": 620100,
                "actividad": "ACTIVIDADES DE PROGRAMACIÓN INFORMÁTICA"
            }
        ],
        "dataValue": null
    }
}

export function POSTprueba(url: string, data: any):any {
    return {
        "success": true,
        "message": "Exito",
        "dataList": null,
        "dataValue": {
            "amount": 10000
        }
    }}


    export function validarRUT(rut: any) {
        // Formato válido: "12345678-9"
        rut = rut.replaceAll('.','');
        const formatoValido = /^\d{7,8}-[0-9Kk]$/;
      
        if (!formatoValido.test(rut)) {
          return false; // Formato incorrecto
        }
      
        rut = rut.replace('-', ''); // Eliminar guión
        const numero = parseInt(rut.slice(0, -1), 10); // Obtener el número del RUT
        const dv = rut.slice(-1).toUpperCase(); // Obtener el dígito verificador
      
        // Cálculo del dígito verificador esperado
        let suma = 0;
        let multiplicador = 2;
      
        for (let i = numero.toString().length - 1; i >= 0; i--) {
          suma += parseInt(numero.toString().charAt(i), 10) * multiplicador;
          multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
        }
      
        const dvEsperado = 11 - (suma % 11);
        const dvCalculado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString();
      
        return dv === dvCalculado;
      }
  