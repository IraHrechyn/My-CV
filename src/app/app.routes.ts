import { Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {ClocksComponent} from "./pages/clocks/clocks.component";
import {GameComponent} from "./pages/game/game.component";
import {TodoComponent} from "./pages/todo/todo.component";
import {CalculatorComponent} from "./pages/calculator/calculator.component";
import {MoviesComponent} from "./pages/movies/movies.component";

export const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'clock', component: ClocksComponent},
  { path: 'game', component: GameComponent },
  { path: 'todo', component: TodoComponent },
  { path: 'calculator', component: CalculatorComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
