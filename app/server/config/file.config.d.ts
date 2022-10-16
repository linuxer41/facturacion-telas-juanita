declare const _default: (() => {
    driver: string;
    accessKeyId: string;
    secretAccessKey: string;
    awsDefaultS3Bucket: string;
    awsDefaultS3Url: string;
    awsS3Region: string;
    maxFileSize: number;
    filesLocationDir: string;
}) & import("@nestjs/config").ConfigFactoryKeyHost<{
    driver: string;
    accessKeyId: string;
    secretAccessKey: string;
    awsDefaultS3Bucket: string;
    awsDefaultS3Url: string;
    awsS3Region: string;
    maxFileSize: number;
    filesLocationDir: string;
}>;
export default _default;
