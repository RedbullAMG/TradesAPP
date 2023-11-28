import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ClienteEditPage } from './cliente-edit.page';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute, convertToParamMap } from '@angular/router'; // Importa ActivatedRoute y convertToParamMap

describe('ClienteEditPage', () => {
  let component: ClienteEditPage;
  let fixture: ComponentFixture<ClienteEditPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteEditPage],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { paramMap: convertToParamMap({ id: '1' }) },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

