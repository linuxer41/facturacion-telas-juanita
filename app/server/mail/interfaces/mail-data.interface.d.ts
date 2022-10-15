export interface MailData<T = never> {
    to: string;
    data: T;
}
export interface InvoiceMailData<T = never> {
    to: string;
    data: T;
}
