import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShowDetailsAnnoncesPage } from './show-details-annonces.page';

describe('ShowDetailsAnnoncesPage', () => {
  let component: ShowDetailsAnnoncesPage;
  let fixture: ComponentFixture<ShowDetailsAnnoncesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShowDetailsAnnoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
