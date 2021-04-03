import { ICompanyRepository, Scalars, MutationFunctionNameHost, CompanyMastValidator } from 'sup_abr';
import { CompanyMast, CompanyMastCacheAdaptor } from 'sup_abr';
import { callApi, getObjects } from './apiClient';
import { FetchCompanyByCompanyIdQuery, FetchCompanyByCompanyIdQueryVariables, AddCompanyMastMutation, AddCompanyMastMutationVariables, UpdateCompanyMastMutation, UpdateCompanyMastMutationVariables } from '~/amplify/API';
import * as queries from '~/amplify/graphql/queries';
import * as mutation from '~/amplify/graphql/mutations';
import { Auth } from '../decorator/authDecorator';

class GraphqlCompanyMastRepository implements ICompanyRepository {

    @CompanyMastValidator
    @Auth
    public async fetchCompanyByCompanyId(
        companyID: Scalars['ID'],
    ): Promise<CompanyMast> {
        const res = (await callApi<FetchCompanyByCompanyIdQuery, FetchCompanyByCompanyIdQueryVariables>(
            queries.fetchCompanyByCompanyId, {
            companyID,
        },
        )).fetchCompanyByCompanyID;
        return (await getObjects<CompanyMast>(
            [res],
        ))[0];
    }

    @CompanyMastValidator
    @Auth
    public async add(
        companyMast: CompanyMast,
    ): Promise<CompanyMast> {
        return (await callApi<AddCompanyMastMutation, AddCompanyMastMutationVariables>(
            mutation.addCompanyMast, {
            input: companyMast,
            action: MutationFunctionNameHost.addCompanyMast,
        },
        )).addCompanyMast;
    }
    @CompanyMastValidator
    @Auth
    public async update(
        companyMast: CompanyMast,
    ): Promise<CompanyMast> {
        return (await callApi<UpdateCompanyMastMutation, UpdateCompanyMastMutationVariables>(
            mutation.updateCompanyMast, {
            input: companyMast,
            action: MutationFunctionNameHost.updateCompanyMast,
        },
        )).updateCompanyMast as CompanyMast;
    }
}
const repo = new GraphqlCompanyMastRepository();
export const companyMastRepository = new CompanyMastCacheAdaptor(
    repo,
    1000,
);
