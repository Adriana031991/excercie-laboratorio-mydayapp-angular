export interface FilterState {
    validateFilter: Filter;
}

export enum Filter {
    All = "All",
    completed = "Completed",
    pending = "Pending",
}

//export type filtrosValidos = 'todos' | 'completados' | 'pendientes';
