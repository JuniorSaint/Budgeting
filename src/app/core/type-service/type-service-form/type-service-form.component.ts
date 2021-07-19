import { TypeServiceListComponent } from './../type-service-list/type-service-list.component';
import { UserListComponent } from './../../user/user-list/user-list.component';
import { Validators } from '@angular/forms';
import { ITypeService } from './../type-service-shared/type-service-interface';
import { Component, OnInit, Injector, ViewChild } from '@angular/core';
import { FormularioPadrao } from 'src/app/shared/formulario-padrao';
import { TypeServiceService } from '../type-service-shared/type-service.service';

@Component({
  selector: 'app-type-service-form',
  templateUrl: './type-service-form.component.html',
  styleUrls: ['./type-service-form.component.scss']
})
export class TypeServiceFormComponent extends FormularioPadrao<ITypeService> implements OnInit {

  @ViewChild(TypeServiceListComponent) listComponent!: TypeServiceListComponent;
  formUpdate!: ITypeService;

  constructor(
    protected injector: Injector,
    protected service: TypeServiceService
  ) { super(injector, 'typeService/new', service) }

  ngOnInit(): void {
    this.formulario = this.fb.group({
      _id: [null],
      typeService: [null, Validators.required],
      descriptionService: [null, Validators.required]  
    })

    this.popularForm();
  }

  popularForm() {
    if (this.urlAtiva !== 'new') {
      this.servico.getByID(this.urlAtiva)
        .subscribe(
          dados => this.formUpdate = dados,
          error => console.log(error),
          () => { this.patchFormUpdate(this.formUpdate) }
          )
    }}

    patchFormUpdate(formUpdate: ITypeService) {
      this.formulario.patchValue({
        _id: this.formUpdate._id,
        typeService: this.formUpdate.typeService,
        descriptionService: this.formUpdate.descriptionService,
      })
    }

  clearFields() {
    this.formulario.reset();
    this.router.navigate(['/typeService/new']);
  }

  salvar() {
    this.service.create(this.formValue)
      .subscribe(
        () => this.snackBar.open('Formulário salvo com sucesso', '', { duration: 2000 }),
        error => this.snackBar.open('Erro ao salvar o formulário', error, { duration: 2000 }),
        () => this.ngOnInit()
      )
    this.listComponent.recicleNgOn();
  }
}
