## Observable

- What is an observable?
It is various data sources. It we observable and observer. It could be use as event, http requests or triggered in code. 

- Observer
It is the subcriber. It can handle data, error and completion of observable. Observable does not have to complete for example a button. But http request has an end. We also use it handle async task. 

- Note 
1. Observable is an external rxjs package adopted by Angular
2. memory leak is memory store data we no longer need. 
3. For observable provided by Angular, (ex params) it will be manage by Angular thus we dont need to manually unsubscribe it.
4. Observer is also known as **listener**
5. subscribe can take in 3 argument, next(data), error and complete.
6. we will rarely build our observable but use most the already done observable by Angular

### Core of Observables
- **interval(1000)** it will fire an event every 1000 milisec. 
- Be proactive when using observables because **it might keep on emitting value**. To stop that and prevent **memory leak** we need to unsubscribe value we are not intrested. 
- Inport **Subscription** to store whatever the subscribe return as a subscription. The idea of uisng this is to implement **OnDestry**
- **ngOnDestroy** lifecycle hook is used to clear the subscrition when we leave the component to prevent memeory leaks.

### Build a custome observable (next)
- To build an observable we need to import **Observale** and do **Observable.create()** to create a new observable and it take in function, it will take in an argument call **observer**. Ex
```
Observable.create(observer => {
    ... observer.next(); observer.error(); observer.complete();
}) 
```
- observer argument has a couple of method such as (next, error, complete). 
- when **subscribe** to an observble we can use arrow function to get the data ex
```
customObservable.subscribe(data => {
    ...
})
```

### observable (errors)
- To pass error message by doing **observer.error(new Error('Error message'))**
- As soon as observable throw error it will not emit anything and die. It is not necessary to unsubscribe in this case.
- To handle error from observable, we can add error in the subscribe. EX 

```
customObservable.subscribe(data => {
    ...
}, error => { 
    ...
}) 
```

### observable (complete)
- complete is a normal process of observable. For example **HTTP** will complete when it has the response by the server. 
- to react to complete observable, we can add thrid argument to subscribe function. Ex
```
customObservable.subscribe(data => {
    ...
}, error => { 
    ...
}, () => {

}) 
```
- complete does not take any arguments. and it is a also to good practice to unsubscribe all subscription.

## Operators (to trasnform/reshape data)

- Sometimes we dont need raw data or filter out some data points. This is where **operators** comes in handy. Data point will reach operators first before we subscribe.
- We can use by calling the method **pipe()**. We can use method like **map** from **rxjs/operators**. 
- map take a function as an argument. We can use it to return a data we want to transform. 
```
customeObservale.pipe(map((data) => {
    return ...
}))
```
- This is useful when we get complex data from the server and we want to trasnform the data before using it. With pipe we can use more than one operator (map...). ex
```
customeObservale.pipe(filter(data => {
    return ...
}),map((data) => {
    return ...
}))
```
- Operators allows us to build up a chain of steps we want to funnel our observable data, it can be very useful to **trasnform** or **filtering** data.
- linke to more about rxjs operator https://academind.com/learn/javascript/rxjs-6-what-changed/ 

## Subject 
- To emit event we can use **Subject** from rsjx, instead of using **EventEmitter<>** we can use **Subject<>** 
- If we use this we dont call emit when the function is being called, we use **next**
- We the use of object to we can call next() like observable calling next. This is perfect we when we use it as event emiter. 
- Subject is more recommended then emit 
- Remember to unsubscribe to subscribed object
- Subject is used to communicate across components through services, where we in the end subscribe somewhere. 