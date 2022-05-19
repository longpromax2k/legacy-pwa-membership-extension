import { useQuery } from '@apollo/client';
import GET_UPGRADE_PAGE from './UpgradePage.gql';

/*
 * Fetch membership products from the GraphQL endpoint and return the state
 * @typedef {Object} QueryState
 * @props {Object} mbshipData - fetched data from GraphQL
 * @props {Boolean} mbshipLoading - loading state of the query
 * @props {Object} mbshipError - error state of the query
 *
 * @return {QueryState} - return the query's state
 */
const token = JSON.parse(
    localStorage.getItem('M2_VENIA_BROWSER_PERSISTENCE__cartId')
).value;

export const useUpgradePage = () => {
    const { data, loading, error } = useQuery(GET_UPGRADE_PAGE, {
        context: { headers: { authorization: `Bearer ${token}` } }
    });

    let derivedErrorMessage;
    if (error) {
        const errorTarget = error;
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

    return { data, loading, error };
};
