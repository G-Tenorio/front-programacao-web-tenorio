import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';

@Component({
  selector: 'app-toolbar',
  imports: [ButtonModule, ToolbarModule],
  templateUrl: './toolbar.html',
  styleUrl: './toolbar.scss'
})
export class Toolbar {

}
