## Pipes to trasnform output
### What is Pieps?
1. Allows us to trasnform output in the templete. For example transform a the string out output 
2. There are pieps for async and sync. 
3. uppercase is a built in pipes to use it, **{{ "string" | uppercase }}**
4. To generate pipe **ng generate pipe name**


### Custome pipe
1. it has to be created at app folder, and create a pipes file with transfrom method
2. transform(value) class will receive value to transform the value and return
3. Add custome pipe to app module declarations
4. In every pipes there is a decorator, we can spcifcy the name
5. in transform method we can add arguments so that we can pass one parameter to the pipes **{{ data| pipename : valueToPassIn }}**
6. pipe can be also used in *ngFor
7. we can force the pipe to updated whenever the data changed by adding **pure: false** to pipe decorator. This might lead to performance issue and has to be careful when using it

