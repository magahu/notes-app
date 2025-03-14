export enum STATE {
    FINISH = 'TERMINADA',
    PENDING = 'PENDIENTE',
    IN_PROGRESS = 'EN PROCESO',
  }

export enum APP_THEMES{
    LIGHT = "light", 
     DARK = "dark",
    SYSTEM = "system",
}

export interface Note {
    state: STATE
    text: string 
    date: string
}

export interface NotesState {
    notes: Note[]
  }