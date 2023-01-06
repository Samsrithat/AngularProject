import { HomeComponent } from "../Home/app.HomeComponent";

export const MainRoutes = [
    { path : 'Abstract', loadChildren: () => import('../Abstract/app.AbsModule').then(x => x.AbsModule)},
    { path: 'Acrylic', loadChildren: () => import('../Acrylic/app.AcrModule').then(x => x.AcrModule)},
    { path : 'Oil', loadChildren: () => import('../Oil/app.OilModule').then(x => x.OilModule)},
]