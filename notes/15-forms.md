## Forms
- In SPA we will handle form through Angular
- with Angular form, we can get Javascript objsect representation of the form and make it easy to retrive user value
- Angular offer Template-Driven or Reactive approact of form
- 1. Templete-Driven
  - Set up form in the template, in HTML code and Angular will infer the structure of the form.
- 2. Reactive 
  - Define the structure of the form in TypeScript 

## TD Form 

### Creating TD form and Registering the controls (185)
1. import angular form module into app module, with this module angular will detect the tag `<form>`
2. we use ngModel into `input` to tell angular that this input is the control of the form, we also need `name` to name the input field

### Submitting using the form 186
1. we can create a `onSubmit` method and call it in **<form>** element as **(ngSubmit)="onSubmit()"**
2. To get the object of the template, to access the form object created by angular we can add `#f` in the form **<form #f>** and pass it into the onSubmit method 
3. To create the javascript object automatically we need to add `#f="ngForm"` and in the ts file we will receive `form: NgForm`

### Accessing the For with @ViewChild
1. we can try `@ViewChild('f'): signupForm: NgForm` f as a passing refrence 
2. this method is useful when you need to access the form before the submit, the use case is form validation

### Form validation
1.  with `required` is an html attribute but angular will automatically detect it and make the form invalid if the filed is empty.
2. for email input we can add `email` as a directive to make sure it is a valid email, this is an angular only attribute 
3. https://angular.io/api/forms/Validators for more about built in angular **validators directives** that be be added to the template

### Using the form state 
1. to disable button if an input is empty we can use disabled property and bind the state of the form to to `[disabled]='!f.valid'`. f is the local reference of the form and to create local refrence we can add `#f='ngForm' ` as an attribute into form tag

### Output validation error message 
1. to output help text, we need to accessto the control created by Angular automatically. We can add **local reference** to the input element, with ngModel e.x.`#email='ngModel'`
2. now we create dynamic error messasge by adding *ngIf to check the input field state by renfrence to the speicfic field. e.x. `*ngIf='!email.valid'`

### Set default values with ngModel Property Binding
1. to bind a default value to a `<select>` we can use the property from ts file, e.x. `[ngModel]="defaultValue`
2. this mentod can be used to any field for defaultValue

### ngModel with two way binding
1. to have dynamic change field based on the input, we can use two way binding to bind the input value into a property. e.x. `[(ngModel)] = "answer"` 
2. in anguar, form required the attribute `name`
Note: 
- **no binding**: tell Angular that is an input `ngModal`
- **one way binding**: to give that control a default value `[ngModal]`
- **two way binding**: to get dynamic input `[(ngModal)]`

### Grouping form controls 
1. to group the data we can use ngModelGroup and bind it into a property. e.x. `ngModelGroup="userData"`. After this the form data will be grouped into **userData** in value object.
2. not only that in the **controls** object we will also have **userData** 
3. we can access the data in the javascript reference by adding refrence. e.x. `#userData="ngModalGroup`
4. after that we can use **ngIf** to check if the grouped data is valid
5. use case: to can be used to group username and email and check if either one of them is invalid to show error message.

### Handling Radio Buttons
1. add property for radio button as array 
2. to set the value of the radio button, we can use `[value]="gender"`

### Setting and patching form values 
1. another approach other than two way binding, we can also set value of the entire form. To do that, we can use the method **setValue** to pass in an object to the form. e.x. ```this.sigupForm.setValue({ username: 'hello' ... })```. But this approach has a downside to overwrite the existing value 
2. the better apporch we can use the **form** object with **patchValue({userData: ...})** to overwrite a specific field. **patchValue** only availabe on the form wrapped inside **ngForm** 

### Using Form Data
1. to get value from the form, we can do value function to access to the data. e.x. `form.value...`