import { Component } from '@angular/core';
import {Heading} from './heading';
import {KeyboardButtons} from './keyboard-buttons';
import {Topics} from './topics';

@Component({
  selector: 'my-app',
  templateUrl: 'app/components/app-component/app.component.html',
  directives: [Heading, KeyboardButtons, Topics]
})
export class AppComponent { }
