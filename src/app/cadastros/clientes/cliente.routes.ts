import { Routes } from '@angular/router';

export const CLIENTES_ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'listar' },
    {
        path: 'listar',
        loadComponent: () =>
            import('./clientes-listar/clientes-listar').then(m => m.ClientesListar)
    },
    {
        path: 'novo',
        loadComponent: () =>
            import('./clientes-cadastrar/clientes-cadastrar').then(m => m.ClientesCadastrar)
    },
    {
        path: ':id/editar',
        loadComponent: () =>
            import('./clientes-cadastrar/clientes-cadastrar').then(m => m.ClientesCadastrar)
    }
];