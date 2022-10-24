export declare class AppCrediantialDto {
    apiKey: string;
    siatApiKey: string;
}
export declare class VerificarComunicacionDto {
    codigoAmbiente: string;
}
export declare const AppCredential: (...dataOrPipes: any[]) => ParameterDecorator;
export declare function CredentialApiHeaders(): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
export declare const CurrentUser: (...dataOrPipes: (string | import("@nestjs/common").PipeTransform<any, any> | import("@nestjs/common").Type<import("@nestjs/common").PipeTransform<any, any>>)[]) => ParameterDecorator;
