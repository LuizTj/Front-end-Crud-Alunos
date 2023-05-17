import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioDialogUpdateComponent } from './usuario-dialog-update.component';

describe('UsuarioDialogUpdateComponent', () => {
  let component: UsuarioDialogUpdateComponent;
  let fixture: ComponentFixture<UsuarioDialogUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioDialogUpdateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioDialogUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
