import { Injector, OnDestroy, Component, OnInit } from '@angular/core';
import { IService } from './../budgeting-shared/budgeting-interface';
import { FormArray, FormGroup, Validators } from '@angular/forms';
import { IClient } from './../../client/client-shared/cliente-interface';
import { TypeServiceService } from './../../type-service/type-service-shared/type-service.service';
import { ClientService } from './../../client/client-shared/client.service';
import { BudgetingService } from './../budgeting-shared/budgeting.service';
import { FormularioPadrao } from 'src/app/shared/formulario-padrao';
import { from } from 'rxjs';
import { IBudgeting } from '../budgeting-shared/budgeting-interface';
import { map, reduce, tap } from 'rxjs/operators';
import { SubSink } from 'subsink2';
import { ITypeService } from '../../type-service/type-service-shared/type-service-interface';

@Component({
    selector: 'app-budgeting-form',
    templateUrl: './budgeting-form.component.html',
    styleUrls: ['./budgeting-form.component.scss'],
})
export class BudgetingFormComponent
    extends FormularioPadrao<IBudgeting>
    implements OnInit, OnDestroy
{
    formUpdate!: IBudgeting;
    private subs = new SubSink();
    valueTotalUnit: number = 0;
    clients$!: IClient[];
    typeServices$!: ITypeService[];
    client$!: IClient;
    formBuilder: any;
    sub = 0;
    valueISS!: number;
    vlrtest = 0;

    constructor(
        protected injector: Injector,
        protected service: BudgetingService,
        private serviceClient: ClientService,
        private serviceType: TypeServiceService
    ) {
        super(injector, 'bedgeting', service);
    }

    ngOnInit(): void {
        this.subs.sink = this.serviceClient.getByIdName().subscribe(
            (data) => (this.clients$ = data),
            (erro) => console.error(erro)
        ); // busca do banco apenas nome e id para popular dropdown cliente

        this.subs.sink = this.serviceType.get().subscribe(
            (data) => (this.typeServices$ = data),
            (erro) => console.error(erro)
        );

        this.formulario = this.fb.group({
            _id: [],
            _idClient: [null, Validators.required],
            dateEnter: [
                new Date().toLocaleDateString('pt-BR'),
                Validators.required,
            ],
            DateDelivery: [
                new Date().toLocaleDateString('pt-BR'),
                Validators.required,
            ],
            service: this.fb.array([this.adicionarServicoFormulario()]),
            valueTotal: [0],
            valueISS: [null],
            situation: [null],
            note: [null],
            extraValue: [null],
        });

        this.popularForm();
    }

    popularForm() {
        if (this.urlAtiva !== 'new') {
            this.servico.getByID(this.urlAtiva).subscribe(
                (dados) => (this.formUpdate = dados),
                (error) => console.log(error),
                () => this.patchFormUpdate(this.formUpdate)
            );
        }
    }

    patchFormUpdate(formUpdate: IBudgeting) {
        this.formulario.patchValue({
            _id: this.formUpdate.id,
            _idClient: this.formUpdate._idClient,
            dateEnter: this.formUpdate.dateEnter,
            DateDelivery: this.formUpdate.DateDelivery,
            valueTotal: this.formUpdate.valueTotal,
            valueISS: this.formUpdate.valueISS,
            situation: this.formUpdate.situation,
            note: this.formUpdate.note,
            extraValue: this.formUpdate.extraValue,
        });
        this.formulario.setControl(
            'service',
            this.setExistingService(formUpdate.service)
        );
    }

    setExistingService(service: IService[]): FormArray {
        const formArray = new FormArray([]);
        service.forEach((ser) => {
            formArray.push(
                this.fb.group({
                    typeService: ser.typeService,
                    valueUnit: ser.valueUnit,
                    valueAmount: ser.valueAmount,
                })
            );
        });
        return formArray;
    }

    clientBudgeting() {
        let id = this.formulario.get('_idClient')?.value;
        this.serviceClient
            .getByID(id)
            .subscribe((dado) => (this.client$ = dado));
    }

    adicionarServicoFormulario(): FormGroup {
        return this.fb.group({
            typeService: [null, Validators.required],
            amount: [null, Validators.required],
            valueUnit: [null, Validators.required],
            valueAmount: [],
        });
    }

    // Adicionar Array de serviço
    adcionarServico(): void {
        this.ServiceFormControl.push(this.adicionarServicoFormulario());
    }

    removerServico(i: number) {
        this.ServiceFormControl.removeAt(i);
        this.totalUnitario();
    }

    get ServiceFormControl() {
        return this.formulario.get('service') as FormArray;
    }

    totalUnitario() {
        const myArray = from(this.formulario.get('service')?.value);

        myArray
            .pipe(
                map((res: any) => {
                    return {
                        amount: res.amount,
                        valueUnit: res.valueUnit,
                        valueAmount: res.amount * res.valueUnit,
                    };
                }),
                tap((dados) => console.log(dados)),
                map((dados) => (this.vlrtest = dados.valueAmount)),
                tap((data) => {
                    console.log(` segundo tap ${data}`);
                }),
                reduce((val, acc) => val + acc)
            )
            .subscribe(
                (dado) => (this.valueTotalUnit = dado),
                (erro) => console.error(erro),
                () => {
                    console.log(`resultado do sub ${this.valueTotalUnit}`),
                        this.totalGeral();
                }
            );
    }

    totalGeral() {
        console.log(`teste de console vlrtap ${this.vlrtest}`);
        let iss = this.formulario.get('valueISS')?.value;
        let add = this.formulario.get('extraValue')?.value;
        let vlrTotal = iss + add + this.valueTotalUnit;
        this.formulario.patchValue({ valueTotal: vlrTotal });
    }

    ngOnDestroy() {
        this.subs.unsubscribe();
    }
}
