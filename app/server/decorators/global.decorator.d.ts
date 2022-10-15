export declare class AppCrediantialDto {
    apiKey: string;
    siatApiKey: string;
}
export declare class VerificarComunicacionDto {
    codigoAmbiente: string;
}
export declare const AppCredential: (...dataOrPipes: any[]) => ParameterDecorator;
export declare function CredentialApiHeaders(): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
