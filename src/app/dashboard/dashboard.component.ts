import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  show:boolean = false;

  onshow() {
      this.show=true;
      setTimeout(()=> { this.show = false; }, 1000);
  }

  downloadResume() {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../assets/images/Deep_Patadiya_Resume.pdf');
    link.setAttribute('download', 'Deep_Patadiya_Resume.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}
