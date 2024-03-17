import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'big-project';
  minHeight: string | null | undefined;

  funksiya(){
    console.log("bosildi");
    
  }

  bosildi0() {
    const nav = document.querySelector('nav') as HTMLElement;
    const indicator = document.getElementById('indicator') as HTMLElement;
    const currentTransform = getComputedStyle(nav).transform;
  
    if (currentTransform === 'none' || currentTransform === 'matrix(1, 0, 0, 1, 0, 0)') {
      nav.style.transition = 'transform 0.3s ease';
      nav.style.transform = 'translateY(-113px)';
      indicator.style.transform = 'rotate(0deg)';
    } else {
      nav.style.transition = 'transform 0.3s ease';
      nav.style.transform = '';
      indicator.style.transform = 'rotate(-180deg)';
    }
  }

  // bosildi00() {
  //   const nav = document.querySelector('nav') as HTMLElement;
  //   const indicator = document.getElementById('indicator') as HTMLElement;
  //   const currentheight = parseFloat(getComputedStyle(nav).width);
  
  //   if (currentheight <= 150) { // Check if navigation is closed
  //     nav.style.height = '500px'; // Expand navigation
  //     indicator.style.transform = 'rotate(0deg)';
  //   } else {
  //     nav.style.height = '150px'; // Collapse navigation
  //     indicator.style.transform = 'rotate(-180deg)';
  //   }
  // }
  







  bosildi(){
    const bottom = document.querySelector('.boxFirst') as HTMLElement;
 
  
    if (bottom.style.transform === "translateX(180px)") {
      bottom.style.transform = "translateX(0px)";
      bottom.style.transition = 'transform 0.3s ease';
    } else {
      bottom.style.transform = "translateX(180px)";
      bottom.style.transition = 'transform 0.3s ease';
    }
  }

  bosildi2(){
    const bottom = document.querySelector('.boxSecond') as HTMLElement;
 
  
    if (bottom.style.transform === "translateX(180px)") {
      bottom.style.transform = "translateX(0px)";
      bottom.style.transition = 'transform 0.3s ease';
    } else {
      bottom.style.transform = "translateX(180px)";
      bottom.style.transition = 'transform 0.3s ease';
    }

  }
  bosildi3(){
    const bottom = document.querySelector('.boxThird') as HTMLElement;
 
  
    if (bottom.style.transform === "translateX(180px)") {
      bottom.style.transform = "translateX(0px)";
      bottom.style.transition = 'transform 0.3s ease';
    } else {
      bottom.style.transform = "translateX(180px)";
      bottom.style.transition = 'transform 0.3s ease';
    }

  }

  bilibolish(): void {
    if (this.minHeight === '200px') {
      this.minHeight = '147px'; 
    } else {
      this.minHeight = '200px'; 
    }
  }








  modalVisible: boolean = false;
  

  openModal() {
    this.modalVisible = true;
  }

  closeModal() {
    this.modalVisible = false;
  }

}
