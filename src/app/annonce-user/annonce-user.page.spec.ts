import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AnnonceUserPage } from './annonce-user.page';

describe('AnnonceUserPage', () => {
  let component: AnnonceUserPage;
  let fixture: ComponentFixture<AnnonceUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AnnonceUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
