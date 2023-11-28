import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ProductListPage } from './product-list.page';
import { HttpClientModule } from '@angular/common/http'; // Agrega la importación

describe('ProductListPage', () => {
  let component: ProductListPage;
  let fixture: ComponentFixture<ProductListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProductListPage],
      imports: [HttpClientModule], // Agrega HttpClientModule al array de imports
    }).compileComponents();

    fixture = TestBed.createComponent(ProductListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
