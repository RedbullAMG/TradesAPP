import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ClienteDetailPage } from './cliente-detail.page';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

describe('ClienteDetailPage', () => {
  let component: ClienteDetailPage;
  let fixture: ComponentFixture<ClienteDetailPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ClienteDetailPage],
      imports: [HttpClientModule],
      providers: [
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: {
              paramMap: {
                get: (key: string) => '1', // Cambia '1' al valor del parámetro que esperas
              },
            },
          },
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
