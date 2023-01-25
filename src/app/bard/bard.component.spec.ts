import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BardComponent } from './bard.component';

describe('BardComponent', () => {
  let component: BardComponent;
  let fixture: ComponentFixture<BardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
