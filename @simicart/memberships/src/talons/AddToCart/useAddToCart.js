import { useMutation } from '@apollo/client';
import ADD_TO_CART from './AddToCart.gql';

export const useAddToCart = () => {
    const [addToCart, { loading, error }] = useMutation(ADD_TO_CART);

    return {
        addToCart,
        loading,
        error
    };
};
