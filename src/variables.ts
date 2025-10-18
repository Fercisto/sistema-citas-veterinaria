import { generarId } from "./funciones.js";
import type { Cita } from './types'

export let editando = {
    value: false
}

// Objeto de Cita
export const citaObj : Cita = {
    id: generarId(),
    paciente: '',
    propietario: '',
    email: '',
    fecha: '',
    sintomas: ''
}
