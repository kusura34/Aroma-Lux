import { Component } from '@angular/core';
import { HeaderComponent } from "../../shared/ui/header/header.component";
import { FooterComponent } from "../../shared/ui/footer/footer.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [HeaderComponent, FooterComponent, RouterOutlet],
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {

}
