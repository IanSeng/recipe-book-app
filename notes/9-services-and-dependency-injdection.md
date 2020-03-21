## Services and Dependency injection
- **providers** property is to tell angular how to create, which mean to inject a a service into a component we need to state it in provider and constructor.
- In Angular dependency injector is hierarchical injector, the child component will receive the same instance of the service, if we provide things in AppModue, the same instance of the class of the service will be available in the whole app.
- In app componenet, the child will have the same instance of the parent component. Instance only propergate downward, thus we can pass things from child to parents. 
- If an instance is passing from parents to children, that instance does not need to be include in children's provider (depends on what we want)

### Injecting services into services 
- If we provide an instance in AppModule, everywhere in the app will be able to receive the instance and if we need to override the instance, we can provide the instance in the **provider** of child components. 
- If we inject the service into something, the something has to have metadata 
- To attach metadata we need to do add @Injectable, this will tell Angular this service is injactable, @Injectable is added to the receiving service but new Angualr recommend add @Injectable in both giving and receiving service 
- link for new service injection syntax https://howtodoinjava.com/angular/angular2-service/ 