import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @ViewChild('menu', { read: ElementRef }) private menu!: ElementRef<HTMLUListElement>;
  private isBurgerMenuShown = false;

  public ShowMenu(event: any): void {
    event.cancelBubble = true;
    console.log(event, event.bubbles);
    this.menu.nativeElement.classList.add('burger-show');
    this.isBurgerMenuShown = true;
  }

  @HostListener('body:click')
  public BodyClick(): void {
    console.log('HHHH', this.isBurgerMenuShown);
    if (this.isBurgerMenuShown) {
      this.HideMenu();
      this.isBurgerMenuShown = false;
    }
  }

  private HideMenu(): void {
    this.menu.nativeElement.classList.remove('burger-show');
  }
}
