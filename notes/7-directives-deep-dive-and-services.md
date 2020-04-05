## Directrives Deep dive 
### 1. Attribute Directives 
- look like a nomral HTML attribute (possibly with databinding or event binding)
- Only affect/ change the element they are added to 

### 2. Structural Directive
- Look like a normal HTML attribute but have '*' (for desugaring)
- Affect a whole area of the DOM (added/ removed)
- note: we cannot have more than one strcuture directive in a single element

### Directive 
- To generate directive 
```
ng g d name-of-the-directive
```
- We use ElementRef to reference the element to set style (such as background and etc)
- We can use structura directive to access to dom to change things like style 
- link https://angular.io/api/core/Renderer2 to more angular renderer2 for DOM manipulations
- To do thing like on hover effect we can use **@HostListener**
- To bind property we can also use **@HostBinding** decorator. 
- <ng-template> is special Angualr attribute thun if we use structure directive in <ng-template [ngIf]="..."> we don't have to use *ngIf