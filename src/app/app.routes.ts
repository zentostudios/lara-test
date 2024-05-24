import { Route } from '@angular/router';

export const appRoutes: Route[] = [
    {
        path: 'rabbits',
        loadComponent: () =>
            import('@lara-test/rabbits').then(
                (m) => m.RabbitsComponent,
            )
    }
];
