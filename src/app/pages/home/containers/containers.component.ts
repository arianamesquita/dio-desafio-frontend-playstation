import { Component } from '@angular/core';

@Component({
  selector: 'app-containers',
  templateUrl: './containers.component.html',
  styleUrls: ['./containers.component.scss']
})
export class ContainersComponent {

	games = [
		{ image: "../../../../../assets/bt-5.jpg", label: "DIGITAL", type: "DIGITAL | PS4" , price: "R$ 129,99" },
		{ image: "../../../../../assets/ac-cover.jpg", label: "EXCLUSIVE", type: "DISC | PS5" , price: "R$ 99,99" },
		{ image: "../../../../../assets/bt-1.jpg", label: "Digital", type: "Digital PS4" , price: "R$ 109,99" },
		{ image: "../../../../../assets/bt-4.jpg", label: "Digital", type: "Digital PS4" , price: "R$ 119,99" },
		{ image: "../../../../../assets/bt-bad-company-2.jpg", label: "Digital", type: "Digital PS4" , price: "R$ 99,99" },
		{ image: "../../../../../assets/bt-hardline.jpg", label: "Digital", type: "Digital PS4" , price: "R$ 99,99" },
	]

}
