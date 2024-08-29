import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroVarejistaComponent } from './cadastro-varejista.component';

describe('CadastroVarejistaComponent', () => {
  let component: CadastroVarejistaComponent;
  let fixture: ComponentFixture<CadastroVarejistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CadastroVarejistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroVarejistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
