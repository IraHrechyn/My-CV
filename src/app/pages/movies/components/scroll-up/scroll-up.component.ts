import { Component } from '@angular/core';
import {ScrollTopModule} from "primeng/scrolltop";

@Component({
  selector: 'app-scroll-up',
  standalone: true,
  imports: [
    ScrollTopModule
  ],
  templateUrl: './scroll-up.component.html',
  styleUrl: './scroll-up.component.css'
})
export class ScrollUpComponent {

}
