import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddAnnoncesPage } from './add-annonces.page';

describe('AddAnnoncesPage', () => {
  let component: AddAnnoncesPage;
  let fixture: ComponentFixture<AddAnnoncesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddAnnoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
