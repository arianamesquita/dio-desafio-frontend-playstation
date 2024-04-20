import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

	@Input() gameCover: string = '';
	@Input() gameLabel: string = '';
	@Input() gamePrice: string = '';
	@Input() gameType: string = '';

}
