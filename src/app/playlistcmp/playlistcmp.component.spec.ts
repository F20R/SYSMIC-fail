import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistcmpComponent } from './playlistcmp.component';

describe('PlaylistcmpComponent', () => {
  let component: PlaylistcmpComponent;
  let fixture: ComponentFixture<PlaylistcmpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaylistcmpComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaylistcmpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
