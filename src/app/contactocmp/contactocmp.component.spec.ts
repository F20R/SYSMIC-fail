import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactocmpComponent } from './contactocmp.component';

describe('ContactocmpComponent', () => {
  let component: ContactocmpComponent;
  let fixture: ComponentFixture<ContactocmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactocmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactocmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
