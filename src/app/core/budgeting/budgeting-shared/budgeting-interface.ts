import { IPadrao } from 'src/app/shared/interface-padrao';

export interface IBudgeting extends IPadrao {
    _id: string;
    _idClient: string;
    dateEnter: Date;
    DateDelivery: Date;
    service: IService[];
    valueTotal: number;
    valueISS: number;
    situation: string;
    note: string;
    extraValue: string;
}

export interface IService {
    typeService: string;
    valueUnit: number;
    amount: number;
    valueAmount: number;
}
