import { IInfoObject } from '~/store/modules/info';
import { SupError, ErrorCode } from 'sup_abr';

export function errorHandle(err: SupError): IInfoObject {
    if (process.env.ENV === 'dev' || !process.env.ENV) {
        // tslint:disable-next-line: no-console
        console.error(err);
    }
    return {
        type: 'ERROR',
        message: err.getMessage(),
        errCode: err.supErrorCode as ErrorCode
    };
}
