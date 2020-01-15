export interface Horario {
    id: number,
    dia: string;
    horario_chegada: string,
    saida_intervalo: string,
    chegada_intervalo: string,
    horario_saida: number,
    justificativa: string,
    updated: Date,
    created: Date
}