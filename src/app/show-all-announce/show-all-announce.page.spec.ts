import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowAllAnnouncePage } from './show-all-announce.page';

describe('ShowAllAnnouncePage', () => {
  let component: ShowAllAnnouncePage;
  let fixture: ComponentFixture<ShowAllAnnouncePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowAllAnnouncePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
