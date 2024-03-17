import { Component, HostListener, ViewChild } from '@angular/core';


@Component({
  selector: 'app-main-information',
  templateUrl: './main-information.component.html',
  styleUrl: './main-information.component.scss'
})
export class MainInformationComponent {


  minHeight: string = '150px'; 

  
  bilibolish(): void {
    if (this.minHeight === '450px') {
      this.minHeight = '150px'; 
      
    } else {
      this.minHeight = '450px'; 
    }
  }


  
  



  


}
