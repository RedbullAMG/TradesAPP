import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductAddPage } from './product-add.page';
import { HttpClientModule } from '@angular/common/http';

describe('ProductAddPage', () => {
  let component: ProductAddPage;
  let fixture: ComponentFixture<ProductAddPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductAddPage],
      imports: [HttpClientModule], // Agrega HttpClientModule al array de imports
    }).compileComponents();

    fixture = TestBed.createComponent(ProductAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
