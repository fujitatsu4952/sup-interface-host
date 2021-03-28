import Auth from '@aws-amplify/auth';
import { Scalars, ErrorCode } from 'sup_abr';
import { SupError } from 'sup_abr';
import { awsmobile } from '../plugins/amplify';
// import { hotelCacheClear } from '~/abr';
Auth.configure(awsmobile.Auth);

class HostUserAuthInteractor {
    public async isSignIn(): Promise<boolean> {
        try {
            await Auth.currentAuthenticatedUser({
                bypassCache: false,
            });
            return true;
        } catch (err) {
            return false;
        }
    }

    public async signIn(email: Scalars['AWSEmail'], password: string): Promise<void> {
        // hotelCacheClear.clear();
        await Auth.signIn(email, password);
    }

    public async signOut(): Promise<void> {
        // hotelCacheClear.clear();
        await Auth.signOut();
    }

    public async signUp(email: Scalars['AWSEmail'], password: string, metadata?: { [key: string]: string }): Promise<void> {
        // hotelCacheClear.clear();
        await Auth.signUp({
            username: email,
            password,
            clientMetadata: metadata,
        });
    }
    public async signUpResend(email: Scalars['AWSEmail']): Promise<void> {
        await Auth.resendSignUp(email);
    }

    public async signUpConfirmed(email: Scalars['AWSEmail'], code: string, metadata?: { [key: string]: string }): Promise<void> {
        await Auth.confirmSignUp(email, code, {
            clientMetadata: metadata,
        });
    }

    public async resetPassword(oldPassword: string, newPassword: string): Promise<void> {
        const user = await Auth.currentUserInfo();
        await Auth.changePassword(user, oldPassword, newPassword);
    }

    public async forgotPassword(email: Scalars['AWSEmail']): Promise<void> {
        await Auth.forgotPassword(email);
    }

    public async resetPasswordConfirm(email: Scalars['AWSEmail'], code: string, newPassword: string): Promise<void> {
        await Auth.forgotPasswordSubmit(email, code, newPassword);
    }

    public errorHandle(err: Error): SupError | null {
        // Auth
        switch (err.name) {
            // Auth
            case 'UserNotFoundException':
            case 'NotAuthorizedException':
                return new SupError(ErrorCode.sup_auth_userNotFound);
            case 'UsernameExistsException':
                return new SupError(ErrorCode.sup_auth_emailIsAlreadyRegistered);
            case 'CodeMismatchException':
                return new SupError(ErrorCode.sup_auth_confirmationCodeIsNotCorrect);
            case 'InvalidParameterException':
                switch (err.message) {
                    case 'Cannot reset password for the user as there is no registered/verified email or phone_number':
                        return new SupError(ErrorCode.sup_auth_confirmationCodeIsNotCorrect);
                }
            default:
                return new SupError(ErrorCode.sup_500_systemError);
        }
    }
}

export const hostUserAuthInteractor = new HostUserAuthInteractor();
