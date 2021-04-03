import { IInfoObject } from '~/store/modules/info';
import { SupError, ErrorCode } from 'sup_abr';

export function errorHandle(err: SupError): IInfoObject {
    // if (process.env.ENV === 'dev' || !process.env.ENV) {
    //     // tslint:disable-next-line: no-console
    //     console.error(err);
    // }
    console.log(err)
    return {
        type: 'ERROR',
        errCode: err.supErrorCode as ErrorCode,
        message: err.getMessage()
    };
}
