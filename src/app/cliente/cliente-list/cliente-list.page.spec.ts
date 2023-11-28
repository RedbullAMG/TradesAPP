import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ClienteListPage } from './cliente-list.page';
import { HttpClientModule } from '@angular/common/http';

describe('ClienteListPage', () => {
  let component: ClienteListPage;
  let fixture: ComponentFixture<ClienteListPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteListPage],
      imports: [HttpClientModule], // Agrega HttpClientModule al array de imports si es necesario
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
