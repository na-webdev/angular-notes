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
    