import { Directive, AfterViewInit, ComponentRef, ViewContainerRef, ComponentFactoryResolver, Inject, Type, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { ValidationMessageComponent } from './../components/ValidationMessageComponent';

@Directive({
    selector: '[validation-message]'
})
export class ValidationMessageDirective implements AfterViewInit, OnDestroy {

    private validationMessageComponent: ComponentRef<ValidationMessageComponent> = null;

    ngAfterViewInit(): void {
      let factory = this.componentFactoryResolver.resolveComponentFactory(this.vmComp);
      this.ngOnDestroy();
      this.validationMessageComponent = this.viewContainer.createComponent(factory, null, this.viewContainer.injector);
      this.validationMessageComponent.changeDetectorRef.detectChanges();
    }

    ngOnDestroy(): void {
       if (this.validationMessageComponent) {
         this.validationMessageComponent.changeDetectorRef.detach();
         // this.validationMessageComponent.destroy(); Не нужно, т.к. ангуляр сам дестроит дочерний компонент
       }
    }

    constructor(
      private viewContainer: ViewContainerRef,
      private componentFactoryResolver: ComponentFactoryResolver,
      @Inject(ValidationMessageComponent) private vmComp: Type<ValidationMessageComponent>
      ) {}
}
