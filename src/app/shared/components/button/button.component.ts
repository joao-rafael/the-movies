import { Component, Input } from '@angular/core';
import { buttonType } from '../../enums/button';
/**
 * @description
 * multipurpose button component
 */
@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() type: buttonType = buttonType.primary;

}
