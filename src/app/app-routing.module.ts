import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './components/articles/articles.component';
import { PageReadMoreComponent } from './components/page-read-more/page-read-more.component';

const routes: Routes = [
  { path: 'main', component: ArticlesComponent },
  { path: 'readMore', component: PageReadMoreComponent },
  { path: '', component: ArticlesComponent },
  { path: '**', component: ArticlesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
