import {Component, OnInit} from '@angular/core';
import {GeneralModel} from "../../types/general-model";
import {AppConstants} from "../../types/constants";

@Component({
  selector: 'app-header-game',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  showInstructions: boolean = false;

  constructor(readonly m: GeneralModel) {
  }

  sound(): void {
    const soundButton = document.querySelector('.sound');

    if (soundButton!.classList.contains('sound-on')) {
      soundButton!.classList.remove('sound-on');
      soundButton!.classList.add('sound-off');
      this.m.soundOn = false;
    } else {
      soundButton!.classList.remove('sound-off');
      soundButton!.classList.add('sound-on');
      this.m.soundOn = true;

    }
  }

  ngOnInit(): void {
    const savedBestResult = localStorage.getItem(AppConstants.localStorageRecordKey);
    console.log(savedBestResult);

    if (savedBestResult !== null) {
      const {bestScore, bestTimeInt, bestTime} = JSON.parse(savedBestResult);
      console.log(bestScore)

      if(bestScore===undefined || bestTimeInt===undefined || bestTime===undefined){
        this.m.bestScore =0;
        this.m.bestTimeInt = 0;
        this.m.bestTime = "00:00";
      }
else {
        this.m.bestScore = bestScore;
        this.m.bestTimeInt = bestTimeInt;
        this.m.bestTime = bestTime;
        console.log('Best Score:', this.m.bestScore);
        console.log('Best Time:', this.m.bestTime);
      }
    }
  }
}
