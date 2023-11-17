export type Respuesta ={
    success: boolean,
    message: string,
    dataList: Actividades[]
    dataValue: PriceSecure
}

export type Actividades = {
    codigo: number,
    actividad: string,
}

export type PriceSecure = {
    amount: number,
}