export interface FormDataType {
  transportType: { id: number; name: string } | null;
  productType: { id: number; name: string } | null;
  company: { id: number; name: string } | null;
  product: { id: number; name: string } | null;
  fromCountry: { id: number; name: string } | null;
  toCountry: { id: number; name: string } | null;
  wagonNumber: string;
  weight: string;
  barNumber: string;
  entryDateTime: any | null;
  exitDateTime: any | null;
}
