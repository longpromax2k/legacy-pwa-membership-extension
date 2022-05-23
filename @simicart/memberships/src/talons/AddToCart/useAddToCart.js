import { useMutation } from '@apollo/client';
import ADD_TO_CART from './AddToCart.gql';

/**
 * Add product to cart
 * @typedef {Object} QueryState
 * @props {function} addToCart - add product to cart's mutation function
 * @props {boolean} loading - loading state of the mutation
 * @props {object} error - error state of the mutation
 * @returns {QueryState}
 */
export const useAddToCart = () => {
    const [addToCart, { loading, error }] = useMutation(ADD_TO_CART);

    return {
        addToCart,
        loading,
        error
    };
};
