import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { BudgetingRoutingModule } from './budgeting-routing.module';
import { BudgetingListComponent } from '../budgeting-list/budgeting-list.component';
import { BudgetingFormComponent } from '../budgeting-form/budgeting-form.component';
import { PrimengModule } from 'src/app/shared/primeng.module';
import { SharedModule } from 'src/app/shared/shared.module';

//

// configuracao do locale pt-BR
import { registerLocaleData } from '@angular/common';
import ptBr from '@angular/common/locales/pt';
registerLocaleData(ptBr);

// configuration ng-mask
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { CurrencyMaskModule } from 'ng2-currency-mask';
const maskConfig: Partial<IConfig> = {
    validation: false,
};

@NgModule({
    declarations: [BudgetingFormComponent, BudgetingListComponent],
    imports: [
        CommonModule,
        BudgetingRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        PrimengModule,
        SharedModule,
        NgxMaskModule.forRoot(maskConfig),
        CurrencyMaskModule,
    ],
    providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }, CurrencyPipe],
})
export class BudgetingModule {}
