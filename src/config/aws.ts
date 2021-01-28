import S3 from 'aws-sdk/clients/s3';

const ACCESS_KEY_ID = "ACCESS_KEY"
const SECRET_ACCESS_KEY = "SECRET_KEY"
const REGION = "sa-east-1"
export const BUCKET = "BUCKET_NAME";

export const s3Client = new S3({
    accessKeyId: ACCESS_KEY_ID,
    secretAccessKey: SECRET_ACCESS_KEY,
    region: REGION
})