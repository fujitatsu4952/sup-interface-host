import { Component, Vue } from 'nuxt-property-decorator';
import { getShortID } from 'sup_abr';
import { infoStore } from '~/store';
import { errorHandle } from '~/utils/errorHandleUtil';
import { SupError } from 'sup_abr';

/**
 * ABRのinterceptor
 */
@Component({})
class AbrDecorator extends Vue {
    private promises: Set<string> = new Set([]);

    constructor() {
        super();
    }

    public Async() {
        const res: MethodDecorator = (_: object, __: string | symbol, descriptor: PropertyDescriptor) => {
            const method = descriptor.value; // もともとのメソッドを退避しておきます。
            const createRand = this.createRand;
            const preAsyncDescriptor = this.preAsync;
            const afterAsyncDescriptor = this.afterAsync;
            const errorHandler = this.errorHandle;
            descriptor.value = async function () {
                try {
                    const rand = createRand();
                    // 事前処理
                    await preAsyncDescriptor(rand, this as Vue);
                    // methodの実行
                    const ret = await method.apply(this, arguments);
                    // 事後処理
                    await afterAsyncDescriptor(rand, this as Vue);
                    return ret;
                } catch (err) {
                    await errorHandler(err, this as Vue);
                }
            };
        };
        return res;
    }

    public ErrorHandle() {
        const res: MethodDecorator = (_: object, __: string | symbol, descriptor: PropertyDescriptor) => {
            const method = descriptor.value; // もともとのメソッドを退避しておきます。
            const errorHandler = this.errorHandle;
            descriptor.value = async function () {
                try {
                    // methodの実行
                    const ret = await method.apply(this, arguments);
                    return ret;
                } catch (err) {
                    await errorHandler(err, this as Vue);
                }
            };
        };
        return res;
    }

    public async errorHandle(err: SupError, target: Vue) {
        this.promises.clear();
        if (!this.promises.size) {
            // loading end
            target.$nuxt.$loading.finish();
        }
        const errInfo = errorHandle(err);
        infoStore.addInfo(errInfo);
    }
    public async preAsync(rand: string, target: Vue) {
        if (process.client) {
            if (!this.promises.size) {
                // loading start
                await target.$nextTick();
                target.$nuxt.$loading.start();
            }
            this.promises.add(rand);
        }
    }
    public async afterAsync(rand: string, target: Vue) {
        if (process.client) {
            this.promises.delete(rand);
            if (!this.promises.size) {
                // loading end
                target.$nuxt.$loading.finish();
            }
        }
    }
    private createRand() {
        return getShortID(14);
    }
}

// おそらくこのインスタンス化のタイミングでInjectがうまくいっていない
const decorator = new AbrDecorator();
export const AsyncLoadingAndErrorHandle = decorator.Async;
export const AsyncErrorHandle = decorator.ErrorHandle;
export const handleErrorForCb = decorator.errorHandle;
export const preAsync = decorator.preAsync;
export const afterAsync = decorator.afterAsync;
