import {Component, ElementRef} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'support-test';
  tabSelected = 'homeTab';

  isVisible(element: HTMLDivElement) {
    return element.id === this.tabSelected ? 'show active' : '';
  }

  isSelected(element: HTMLDivElement) {
    return element.id === `pills${this.tabSelected}` ? 'active' : '';
  }

  selectTab(str: string) {
    this.tabSelected = str;
  }
}
