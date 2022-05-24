import React from 'react';

import PlanList from './planlist';
import BenefitList from './benefitlist';

import { useAddToCart } from '../../talons/AddToCart/useAddToCart';
import { useGetProducts } from '../../talons/Products/useGetProducts';
import { useCustomerCart } from '../../talons/CustomerCart/useCustomerCart';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './items.module.css';

/**
 * Item container for the membership cards
 * @param {Object} props - Props passed from parent
 * @props {Object[]} data - data object from the api passed from parent
 * @return {ReactElement}
 */
const Items = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const { data, loading, error } = useGetProducts(props.name);
    const {
        data: uCartData,
        loading: uCartLoading,
        error: uCartError
    } = useCustomerCart();
    const { addToCart, error: addToCartError } = useAddToCart();

    const sku = !loading && !error && data.products.items[0].sku;
    const cartId = !uCartLoading && !uCartError && uCartData.customerCart.id;

    const handleSubmit = async e => {
        e.preventDefault();
        if (!cartId) {
            alert('Please login to add to cart');
        } else {
            try {
                await addToCart({
                    variables: { cart_id: cartId, sku: sku }
                });
            } catch (error) {
                console.error(addToCartError);
                alert(error);
            }
        }
    };

    return (
        <div className={classes.membershipItem}>
            <div className="w-full flex-grow">
                {props.featured ? (
                    <div className={classes.featuredItem}>
                        <img src={props.featuredImage} alt="featured" />
                        <span>
                            <strong>
                                {props.featuredLabel
                                    ? props.featuredLabel
                                    : 'Featured'}
                            </strong>
                        </span>
                    </div>
                ) : null}

                <div
                    className={classes.membershipItemTitle}
                    style={{ backgroundColor: props.color }}
                >
                    <h1>{props.name}</h1>
                </div>

                <div className={classes.membershipItemContent}>
                    <img
                        className={classes.membershipItemImage}
                        src={props.imageurl}
                        alt={props.label}
                    />
                    <BenefitList benefits={props.benefits} />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <PlanList price={props.price} duration={props.duration} />
                <button
                    type="submit"
                    className={classes.addToCart}
                    style={{ backgroundColor: props.color }}
                >
                    {props.button}
                </button>
            </form>
        </div>
    );
};

Items.propTypes = {
    classes: shape({ root: string })
};
Items.defaultProps = {};
export default Items;
