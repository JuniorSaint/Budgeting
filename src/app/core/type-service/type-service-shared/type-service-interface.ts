import { IPadrao } from "src/app/shared/interface-padrao";
export interface ITypeService extends IPadrao {
        _id?: number;
        typeService: string;
        descriptionService: string
}
