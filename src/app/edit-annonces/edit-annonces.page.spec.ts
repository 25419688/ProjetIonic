import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditAnnoncesPage } from './edit-annonces.page';

describe('EditAnnoncesPage', () => {
  let component: EditAnnoncesPage;
  let fixture: ComponentFixture<EditAnnoncesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditAnnoncesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
