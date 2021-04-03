const MAX_WIDTH: number = 1980;
const MAX_HEIGHT: number = 1980;
const DEFAULT_MIME: string = 'image/jpeg';

async function getImageDimensions(base64: string): Promise<{ w: number; h: number }> {
    return new Promise((resolved, _) => {
        const image = new Image();
        image.onload = () => {
            resolved({ w: image.width, h: image.height });
        };
        image.src = base64;
    });
}

export async function resizeImage(file: File, _?: string): Promise<string> {
    if (process.client) {
        const image = new Image();
        image.src = await readUploadedFileAsBase64(file);
        const dimention = await getImageDimensions(image.src);
        const ratio = dimention.h / dimention.w;
        let width = MAX_WIDTH;
        let height = MAX_HEIGHT;
        if (ratio > 1) {
            // 縦長の画像
            width = height / ratio;
        } else {
            // 横長の画像
            height = width * ratio;
        }
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;
        ctx!.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
        return canvas.toDataURL(file.type || DEFAULT_MIME);
    } else {
        throw new Error('not in browser');
    }
}

export function base64ToFile(base64: string, name: string, mime?: string): File {
    const bin = atob(base64.replace(/^.*,/, ''));
    // バイナリデータ化
    const buffer = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) {
        buffer[i] = bin.charCodeAt(i);
    }
    // ファイルオブジェクト生成(この例ではjpegファイル)
    return new File([buffer.buffer], name, { type: mime || DEFAULT_MIME });
}

export function imageUpload(event: any, callback: (file: File) => void) {
    Object.keys(event.target.files).forEach((key) => {
        const file = event.target.files[key] as File;
        callback(file);
    });
}

export const readUploadedFileAsBase64 = (file: File): Promise<string> => {
    const temporaryFileReader = new FileReader();
    return new Promise((resolve, reject) => {
        temporaryFileReader.onerror = () => {
            temporaryFileReader.abort();
            reject(new DOMException('Problem parsing input file.'));
        };

        temporaryFileReader.onload = () => {
            resolve(temporaryFileReader.result as string);
        };
        temporaryFileReader.readAsDataURL(file);
    });
};

/**
 * アップロード予定の画像(event)を受け取り、Base64とファイルオブジェクトを返す。
 * 単数
 * @param e
 */
export async function getImage(e?: any): Promise<{ base64: string; file: File }> {
    const file = e.target.files[0] as File;
    if (!file.name.match(/^.*(\.)((png)|(jpg)|(jpeg)|(gif)|(PNG)|(JPG)|(JPEG)|(GIF))$/)) {
        throw new Error();
    }
    // resize
    const convertedB64 = await resizeImage(file);
    const convertedFile = base64ToFile(convertedB64, file.name);
    return {
        base64: convertedB64,
        file: convertedFile,
    };
}

export function getPdf(e: any): File {
    const file = e.target.files[0] as File;
    if (!file.name.match(/^.*(\.)((pdf)|(PDF))$/)) {
        throw new Error();
    }
    // resize
    return file;
}

/**
 * アップロード予定の画像(event)を受け取り、Base64とファイルオブジェクトの配列を返す。
 * 単数
 * @param e
 */
export async function getImages(e?: any): Promise<Array<{ base64: string; file: File }>> {
    const files = e.target.files as File[];
    // Filelist はmapを使えないのでArray型に変換する
    const filesArray = [...files];
    return await Promise.all(
        filesArray.map(async (file) => {
            if (!file.name.match(/^.*(\.)((png)|(jpg)|(jpeg)|(gif)|(PNG)|(JPG)|(JPEG)|(GIF))$/)) {
                throw new Error();
            }
            const convertedB64 = await resizeImage(file);
            const convertedFile = base64ToFile(convertedB64, file.name);
            return {
                base64: convertedB64,
                file: convertedFile,
            };
        }),
    );
}
