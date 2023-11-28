import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ClienteAddPage } from './cliente-add.page';
import { HttpClientTestingModule } from '@angular/common/http/testing';  // Importa HttpClientTestingModule

describe('ClienteAddPage', () => {
  let component: ClienteAddPage;
  let fixture: ComponentFixture<ClienteAddPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteAddPage],
      imports: [HttpClientTestingModule],  // Agrega HttpClientTestingModule a los imports
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClienteAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});