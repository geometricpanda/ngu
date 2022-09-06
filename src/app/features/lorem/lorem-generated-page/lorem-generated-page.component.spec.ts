import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoremGeneratedPageComponent } from './lorem-generated-page.component';

describe('LoremGeneratedPageComponent', () => {
  let component: LoremGeneratedPageComponent;
  let fixture: ComponentFixture<LoremGeneratedPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoremGeneratedPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoremGeneratedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
