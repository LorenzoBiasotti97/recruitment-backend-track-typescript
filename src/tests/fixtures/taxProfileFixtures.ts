import { TaxProfileInsertDto } from "../../shared/dto/taxProfileInsertDTO";


export const validTaxProfileInsertDto: TaxProfileInsertDto = {
  userId: '1', // TODO VERIFY 
  taxType: 'IVA',
  isFlatRate: true
};

export const companyTaxProfileInsertDto: TaxProfileInsertDto = {
  userId: '1',
  taxType: 'Flat Tax',
  isFlatRate: false
};