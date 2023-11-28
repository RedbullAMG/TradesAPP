import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { ClienteAddPage } from './cliente-add.page';

describe('ClienteAddPage', () => {
  let component: ClienteAddPage;
  let fixture: ComponentFixture<ClienteAddPage>;

  beforeEach(waitForAsync(() => {
    fixture = TestBed.createComponent(ClienteAddPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
