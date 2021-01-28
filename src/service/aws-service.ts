import { BUCKET, s3Client } from "../config/aws"

export const downloadFile = async (key: string) => {
    return await (await s3Client.getObject({ Bucket: BUCKET, Key: key }).promise()).Body as Buffer;
}

export const uploadFile = (file: Buffer, key: string) => {
    s3Client.putObject({ Key: key, Bucket: BUCKET, Body: file}).send((err, data) => {
        !err ? console.log('Upload finished') : console.error(err);
    });
}