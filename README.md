# CircRef

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

It is to demonstrate an issue which I logged with the angular/cli team, whereby if I created "barrel" files, with multiple redeclarations of components and services (to provide for much tidier import statements) and then reference from those barrel files (which is the whole point) then I would get loads of warnings. ng build --prod didn't give me these warnings.

The "app" (if you can even call it that) is very simple. It contains a Hello component, which in turn contains a Goodbye component (these names don't imply anything functionality-wise; just a complete lack imagination on my part).

There is a "barrel" file "all-components", and Hello programmatical references Goodbye in order to set a property on it. Critically, it references Goodbye from the barrel file, when it is also referred to in this barrel file.

Running ng build or ng serve without the --prod switch caused the compiler warning.

Note this behaviour seemed to start with @angular/cli@1.3.0 

Note as per https://github.com/angular/angular-cli/issues/7705#issuecomment-331483572 I was advised I need to set "showCircularDependencies" to false in the angular-cli.json file. To be precise, it's under the defaults/build section (it defaults to true so you need to set it to false) - see https://github.com/angular/angular-cli/issues/7326#issuecomment-321481040

IMO they need to take another look at this, as simply switching off this warning could hide other issues, which might need to be solved by using forwardRef, for example, but this might just be my lack of understanding of the angular compilation process.