import { gql, useQuery } from '@apollo/client';

const ADD_CART = gql`
    {
        customerCart {
            id
        }
    }
`;

const token = JSON.parse(
    localStorage.getItem('M2_VENIA_BROWSER_PERSISTENCE__cartId')
).value;

export const useCustomerCart = () => {
    const { data, loading, error } = useQuery(ADD_CART, {
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

    return {
        data,
        loading,
        error
    };
};
