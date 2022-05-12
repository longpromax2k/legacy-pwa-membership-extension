import { useQuery } from '@apollo/client';
import GET_MEMBERSHIP_PRODUCTS from './getProducts.gql';

export const useGetProducts = () => {
    const { data: mbshipData, mbshipLoading, error: mbshipError } = useQuery(
        GET_MEMBERSHIP_PRODUCTS
    );

    let derivedErrorMessage;
    if (mbshipError) {
        const errorTarget = mbshipError;
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

    return { mbshipData, mbshipLoading, mbshipError };
};
