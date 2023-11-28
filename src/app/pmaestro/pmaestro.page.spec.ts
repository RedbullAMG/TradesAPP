import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PmaestroPage } from './pmaestro.page';
import { IonicModule } from '@ionic/angular';
import { IonicStorageModule } from '@ionic/storage-angular';

describe('PmaestroPage', () => {
  let component: PmaestroPage;
  let fixture: ComponentFixture<PmaestroPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [PmaestroPage],
      imports: [IonicModule.forRoot(), IonicStorageModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(PmaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});