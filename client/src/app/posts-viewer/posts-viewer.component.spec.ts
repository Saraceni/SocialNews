import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsViewerComponent } from './posts-viewer.component';

describe('PostsViewerComponent', () => {
  let component: PostsViewerComponent;
  let fixture: ComponentFixture<PostsViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
