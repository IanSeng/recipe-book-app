## Routing 
### Setting up and Loading Routes 
1. set up route in app module. Routes hold array of routes
2. need to import router module and then we need *forRoot(...)* to register the route for the app
3. after that add special directive in the root html **<router-outlet>**
4. to change route, we use routerLink in angular which it will analyzes instead of refreshing the page 
5. RouterLink="servers" will append to the current route. For example, current route is .../user if we click on the routerLink it will be come .../user/server (/url is absolute path; url is relative path; ../url allows us to go to the path before)

### Set active route 
- We can use *routerLinkActive=""*
- to ensure that the route only active the correct path **[routerLinkActiveOptions] = "{exact: true}"**


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