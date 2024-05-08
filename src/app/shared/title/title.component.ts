import { Component, Input, booleanAttribute } from '@angular/core';

@Component({
  selector: 'shared-title',
  standalone: true,
  imports: [],
  template: `
    <h1 class="text-3xl mb-5 font-bold">{{title}}</h1>
  `
})
export class TitleComponent {

  @Input({required: true})
  public title!: string;
  
  @Input({transform: booleanAttribute})
  public withShadow: boolean = false;
}
