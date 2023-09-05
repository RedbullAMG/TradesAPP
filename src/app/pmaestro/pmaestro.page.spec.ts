import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PmaestroPage } from './pmaestro.page';

describe('PmaestroPage', () => {
  let component: PmaestroPage;
  let fixture: ComponentFixture<PmaestroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PmaestroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
