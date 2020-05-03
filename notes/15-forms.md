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

### Resetting Form
1. we can reset the form by calling `.reset()`


## TD Form  

### Setup form
1. In test file we need to create a `FormGroup`
2. In tamplate approach we use **ngForm** and it is actually wapping **FormGroup**. In Angular a form is a group of controls.
3. we need to import `ReactiveFromModule` 

### Creating a reactive Form in Code 
1. **ngOnInit()** need to be initiallize after the **FormGrouo** to satisfies the Angular lifecycle. 
2. We need to create `new FormGroup({ ... })` and add controls into it. Control is the object we are going to pass into this **FormGroup({})**
3. e.x. we can add add `'username': new FormControl(null)` we can pass thing into **FormControl()** such as default text or so on, but we can put **null**

### Syncing HTML and Form
1. to Syncing HTML input with **FormGroup**.  To overwrite the <From> behaviour we need to add `[formGroup]="signUpForm` and set up property binding.
2. To add control into **input field** we need to add e.x.`FormControlName="userName"` to pass the string of the name form control 

### Submitting the reactive form 
1. add `(ngSubmit)="onSubmit()"` method into form. What different from the template approach is that we dont need local refrence ex **onSubmit(f)**, because we created the from already in typescript file
2. To access to the form we can easily do it in typescript e.x. `this.signupForm`

### Adding validation for reactive form
1. we are not configuring anything like template apporach we add **required** as one of the **<input>** element. We can pass **Validator** and pass it into **FormControl**. e.x. new **FromControl(null, Validators.required)**
2. For validator field, we can have multiple validations but passing an array of validators. 

### Getting Access to Controls 
1. To diplay error we can use access to the control by accessing to the overall form. e.x. `signupForm.get('username').valid`. 
2. use case is to show error message if user did not input after touched or input a invalid input and so on
3. we can style the invalid input border by doing `input.ng-touched.ng-invalid` 

### Grouping controls in reactive form 
1. un ts file **formGroup** we can have a nested form group to wrap controls inside the a nested **formgroup**. e.x.
```
this.signupForm = new FormGroup({
  'userData': new FormGroup({
    ... //control can go in here 
  })
})
```
2. after that we need to make sure our html synchronize with the group by wrap the control field into another formgroup.
e.x. 
```
<form [formGroup="signupForm]>
  <div formGroupName="userData">
<form>
```
3. since we are using neste when we use the singupForm get method, we need to make sure the method get the correct path e.x. `singupForm.get('userData.userName')

### Arrays of Form Control 
1. Use case **dynamically add form control**, ex user add their hobby into the form. 
2. Instead of using a FromControl or Group, we need to use **FormArray** as it allows us to have multiple or no form control. 
3. To add new **formControl** into **FromArray**, We need first access to the form and get the Array. E.x. `this.signupForm.get('hobbie')` this is what we to in the past but for array `<FormArray>this.signupForm.get('hobbie')` we need to tell Angular this is a FormArray. 
4. To push new Form control we can create a const e.x. `const control = new FormControl(null, Validators.required)` for the purpose of clean code and then `<FormArray>this.signupForm.get('hobbie').push(control)` 
5. Synchronize with html code, in the **<div>** of the dyanamic field, we need to add fromArrayName as the element in the tag e.x. `<div formArrayName="hobbie">`
6. We then need a for loop to loop all of the controls 

### Creating custom validators 
1. Example we can create an array of forbidden user names and use new validators to make sure the user cannot sign up with those names. 
2. A validator is a function, return a boolen. Do a check of input and then return. **Return null** is the input pass the check. We can use indexOf to check if the input is in the array of forbidden user names. Note: index of forbidden will return -1 if the input is not inside the array. 
3. When adding a customized validators method into FormControl, we need to make sure that we use **.bind** to invoke customized validators method only when user type into the field 

### Using Error codes from custom validator
1. we fine tunning the html by making sure the invalid message is dynamic. 

### Creating a custom async validator
1. In real life, we might need to get the validate data from the server and it could take sometime. We need **async** to wait.
2. Created a mehotd, this validator will return Promise<any> or Observable<any>. 
3. create a new Promise function with resolve and reject. For this project purpose we will use set time up as example. 
4. Add it to the FromControl 

### Reacting to status or value 
1. If we want to debut the form, we can subscribe to the form and console log the status and so on. e.x. `this.signupForm.valueChanges.subscribe(value => {console.log(value)})`

### Setting and Patching values
1. we can set the value of the form by using **setValue** function. e.x. `this.signupForm.setValue({
  'userData':{
    'usernmae:""
  }
  ...
})