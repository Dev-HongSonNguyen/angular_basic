import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCreateComponent } from './product-create.component';

describe('ProductCreateComponent', () => {
  let component: ProductCreateComponent;
  let fixture: ComponentFixture<ProductCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCreateComponent]
    });
    fixture = TestBed.createComponent(ProductCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
