# Angular notes

Angular bootstrap process

index.html => main.ts => app.module.ts => app.component.ts

Data binding:

1. Interpolation
2. Property binding
3. Event binding
4. Two-way binding

Directives:

1. Component directive
2. Structural directive:
   - @HostBinding
   - @HostListener
   - viewContainer
   - elementRef
   - Renderer2
3. Pipe
   - async
   - keyvalue

Lifecycle hooks:
   - OnChanges
   - OnInit
   - DoCheck
   - AfterContentInit
   - AfterContentChecked
   - AfterViewInit
   - AfterViewChecked
   - OnDestroy

Forms
   1. Template Driven:
      - ngForm
      - ngSubmit
      - ngModelGroup
      - #template
      - ngModel
   2. Reactive:
        - FormGroup
        - FormControl
        - FormArray
        - Validators
        - formGroup
        - formGroupName
        - ngSubmit

Services

- The services that we provide at the root module are app-scoped, which means that we can access them from every component/service within the app.

- Any service provided in the other Modules (Other than the Lazy Loaded Module) is also available for the entire application.

- The services that are provided in a Lazy Loaded Module are module scoped and available only in the Lazy loaded module.

- The services provided at the Component level are available only to the Component & and to the child components.

Dependency Injection

- Consumer
- Dependency
- Injection Token
- Provider
- Injector
- Inject()
- Injectable()
- @Self
- @SkipSelf
- @Optional
- 