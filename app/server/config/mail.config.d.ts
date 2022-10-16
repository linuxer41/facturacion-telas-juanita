declare const _default: (() => {
    port: number;
    host: string;
    user: string;
    password: string;
    defaultEmail: string;
    defaultName: string;
    ignoreTLS: boolean;
    secure: boolean;
    requireTLS: boolean;
    templatesDir: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    port: number;
    host: string;
    user: string;
    password: string;
    defaultEmail: string;
    defaultName: string;
    ignoreTLS: boolean;
    secure: boolean;
    requireTLS: boolean;
    templatesDir: string;
}>;
export default _default;
