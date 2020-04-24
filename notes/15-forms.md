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