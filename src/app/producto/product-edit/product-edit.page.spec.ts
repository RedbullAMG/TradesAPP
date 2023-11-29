import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductEditPage } from './product-edit.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule} from '@angular/router/testing';


describe('ProductEditPage', () => {
  let component: ProductEditPage;
  let fixture: ComponentFixture<ProductEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductEditPage],
      imports: [HttpClientModule, RouterTestingModule],
    }).compileComponents();

    fixture = TestBed.createComponent(ProductEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});