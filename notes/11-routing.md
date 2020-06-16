## Routing 
### Setting up and Loading Routes 
1. set up route in app module. Routes hold array of routes
2. need to import router module and then we need *forRoot(...)* to register the route for the app
3. after that add special directive in the root html **<router-outlet>**
4. to change route, we use routerLink in angular which it will analyzes instead of refreshing the page 
5. RouterLink="servers" will append to the current route. For example, current route is .../user if we click on the routerLink it will be come .../user/server (/url is absolute path; url is relative path; ../url allows us to go to the path before)

### Set active route 
- We can use **routerLinkActive=""**
- to ensure that the route only active the correct path **[routerLinkActiveOptions] = "{exact: true}"**, this is to avoid the issue the home page is always active 


### Navigating Programmatically
- To route on in a function we can add *this.router.naviate([])* in the ts file for the function to call router
- To know the current activated route, we can inject **ActivatedRoute** in the component that we need 

### Passing Parameters to Routes 
- To pass id to route in the app module, we can add 'user/:id' to the path 

### Fetching Route Parameters
- Getting the data from the url, in the component we inject **ActivatedRoute** and use the **this.route.snapshot.params['..']** to get the param of the url

### Fetching Route Parameters Reactively 134/135
- to call route /users/10/Anna we can do **<a [routerLink]="['/users', 10, 'Anna']">Load Anna(10)</a>**, this will update the url but not updating the page 
- To ask Angular to re-render the component, we can subscribe to the parent during ngOnInit **this.route.params.subscribe( (params: Params) => {...});**
- Observable allows us to do async task 
- Destroy the subscription to avoid memory leak, add OnDestry and destry the subscription inside 

### Passing Query Parameters and Fragments
- To pass query parameters we can use **[queryParams]**, it is another bindable property of the routerLink directive 
- example  **[queryParams]="{ allowEdit: '1' }"** will have the output of **servers/5/edit?allowEdit=1**
- To add fregment **fragment="loading"** 
- To retrive the info from queryParam and fragment we need to inject ActivatedRoute in the model and get the info by doing **this.route.snapshot.queryParams**  **this.route.snapshot.fragment**
- **+this.route.snapshot.params['id']** the + is so make sure the id created is a number

### Setting up nested (child) route 
- In app module we need to set up chilren route **{path: 'servers', component: ServersComponent, children: [...]}**
- Child route need a saperate route outlet, to do that we can add **<router-outlet>** to the parent component

### To Query Parameters 
- we can query the by using **this.route.queryParams**
- to not loss the query after going to different route we can use queryParamsHandling: 'preserve'. Example, **this.router.navigate(['edit'], {relativeTo: this.route, queryParamsHandling: 'preserve'})**

### Redirecting and wildcard Route (route not exists)
- this will catch all of the invalid path and it has to be at the last piece in the route array because the route get parsed from top to bottom. ** is known as wilecard route **{ path: ' ** ', redirectTo:'/not-found'}** 

### Outsourcing the Route Configuration #144
- To keep the file organize, we can create a module for routes 

### Introduction to Guards
- For example we want to give the component router to different page when user is logged in. With the use of **CanActivate** Guard we could guard the route 
1. create a new **uth-guard.service**
2. create a class with the implement of **CanActivate**
3. to protect child route we can implement the interface **CanActivateChild**

### Controlling Navigation with canDeacivate 
- with this function implement, we can ask when user accidentally click back we will ask user to confirm 
- video 149 for more 

### Passing Static Data to a Route
- to do this we can add data property to the one of the path in appRoutes array and get the data by using snapshot

### Passing dynamic data with the resolve Guard
- this is very important when using async data (check back video 151)

