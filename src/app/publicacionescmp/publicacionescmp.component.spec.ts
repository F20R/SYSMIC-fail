import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicacionescmpComponent } from './publicacionescmp.component';

describe('PublicacionescmpComponent', () => {
  let component: PublicacionescmpComponent;
  let fixture: ComponentFixture<PublicacionescmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicacionescmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublicacionescmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
