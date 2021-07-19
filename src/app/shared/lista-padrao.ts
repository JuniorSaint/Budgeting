
import { Component, OnInit, Injector, ViewChild, ElementRef, Inject } from "@angular/core";
import { IPadrao } from './interface-padrao';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { BotaoConfirmaComponent } from './botao-confirma/botao-confirma.component';
import { CrudServico } from 'src/app/shared/crud-servico';
import { Subscription } from "rxjs";
import { Message } from "@angular/compiler/src/i18n/i18n_ast";
@Component({
    selector: '',
    template: '',
    styles: ['']
}) export abstract class ListaPadrao<T extends IPadrao> implements OnInit {
    searchInput!: string;
    dataSource$!: T[];
    subscription!: Subscription;

    // Variáveis do inject 
    protected router: Router;
    protected dialog: MatDialog;
    protected snackBar: MatSnackBar;

    constructor(
        protected injector: Injector,
        protected service: CrudServico<T>
    ) {
        this.router = this.injector.get(Router);
        this.dialog = this.injector.get(MatDialog);
        this.snackBar = this.injector.get(MatSnackBar);
    }

    ngOnInit(){}

    delete(id: any): void {
        const dialogRef = this.dialog.open(BotaoConfirmaComponent, {
            panelClass: 'myapp-no-padding-dialog',
            data: {
                mensagem: 'Deseja realmente excluir?',
                botao1: 'Excluir'
            },
        });
        dialogRef.afterClosed().subscribe(
            result => {
                if (result) {
                    this.service.delete(id)
                        .subscribe(
                            () => this.snackBar.open('Deletado com sucesso', 'OK', { duration: 2000 }),
                            error => this.snackBar.open(`${error}`, '', { duration: 2000 }),
                            () => this.ngOnInit()
                        );
                }
            }
        );
    }

    CompleteList() {
        this.subscription = this.service.get()
            .subscribe(
                dados => this.dataSource$ = dados,
                erro => console.error(erro),
            );
    }
    
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
