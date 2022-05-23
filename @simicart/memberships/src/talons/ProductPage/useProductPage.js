import { useQuery } from '@apollo/client';
import GET_MEMBERSHIP_PAGE from './ProductPage.gql';

/*
 * Fetch membership products from the GraphQL endpoint and return the state
 * @typedef {Object} QueryState
 * @props {Object} mbshipData - fetched data from GraphQL
 * @props {Boolean} mbshipLoading - loading state of the query
 * @props {Object} mbshipError - error state of the query
 *
 * @return {QueryState} - return the query's state
 */
export const useProductPage = () => {
    const {
        data: mpMbsdata,
        loading: mpMbsloading,
        error: mpMbserror
    } = useQuery(GET_MEMBERSHIP_PAGE);

    let derivedErrorMessage;
    if (mpMbserror) {
        const errorTarget = mpMbserror;
        if (errorTarget.graphQLErrors) {
            // Apollo prepends "GraphQL Error:" onto the message,
            // which we don't want to show to an end user.
            // Build up the error message manually without the prepended text.
            derivedErrorMessage = errorTarget.graphQLErrors
                .map(({ message }) => message)
                .join(', ');
        } else {
            // A non-GraphQL error occurred.
            derivedErrorMessage = errorTarget.message;
        }
    }

    return { mpMbsdata, mpMbsloading, mpMbserror };
};
