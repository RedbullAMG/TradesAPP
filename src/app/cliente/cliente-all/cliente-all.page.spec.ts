import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ClienteAllPage } from './cliente-all.page';

describe('ClienteAllPage', () => {
  let component: ClienteAllPage;
  let fixture: ComponentFixture<ClienteAllPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ClienteAllPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
