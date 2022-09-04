import {likesComponent} from './like.component.js'

let component = new likesComponent(10, true)
console.log(component.likesCount, component.isSelected);
component.onClick();
console.log(component.likesCount, component.isSelected);
