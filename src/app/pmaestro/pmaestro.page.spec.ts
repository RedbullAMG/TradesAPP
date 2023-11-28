import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { PmaestroPage } from './pmaestro.page';

describe('PmaestroPage', () => {
  let component: PmaestroPage;
  let fixture: ComponentFixture<PmaestroPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(PmaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
