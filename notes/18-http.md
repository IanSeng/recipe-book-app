## Http 

### Start making call
1. add http into app module and inject HttpClient into the component.
2. to send a request, we need to subscribe to the http request.
3. We can do transform out data after getting the respond but the better way is to use pipe before subscribe. We can use **map operator** to get data and return which it is also wrapped in an observable that we can subscribe to it. 

### Using type with HTTP 
1. To make sure angular do a type check we can add type to pipe for the calling to ensure it respond with what we wanted 
2. With type check we can access to element for example we can console.log(respond[0].something)
3. Another way of adding type check instead of doing it at pipe map, we can add <type> to **get** call.Ex. 
```
get<{ [key: string]: Post}>
```

### Service for http request