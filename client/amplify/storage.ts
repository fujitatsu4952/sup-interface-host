import Storage from '@aws-amplify/storage';
import { S3Object } from 'sup_abr';
import { awsmobile } from '../plugins/amplify';

class HostStorageInteractor {
    public getS3ObjectByKey(keyName: string) {
        return {
            bucket: awsmobile.Storage.AWSS3.bucket,
            keyName,
            region: awsmobile.Storage.AWSS3.region,
        };
    }
    /**
     * @param path パス
     * @param fileName 保存するファイル(名拡張子なし)
     * @param file ファイルオブジェクトの実態
     */
    public async uploadPublicImg(path: string, fileName: string, file: File): Promise<S3Object> {
        const suffix: string = file.name.split('.').pop()!;
        // 画像のupload
        await Storage.put(`${path}/${fileName}.${suffix}`, file, {
            level: 'public',
            cacheControl: 'public, max-age=86400',
        });
        // s3objectの返信
        return {
            bucket: awsmobile.Storage.AWSS3.bucket,
            keyName: `public/${path}/${fileName}.${suffix}`,
            region: awsmobile.Storage.AWSS3.region,
        };
    }

    public getImageUrl(s3Object: S3Object): string {
        if (!s3Object || !s3Object.keyName) {
            return '';
        }
        return `${awsmobile.Storage.AWSS3.baseUrl}${s3Object.keyName}`;
    }
}

export const hostStorageInteractor = new HostStorageInteractor();
