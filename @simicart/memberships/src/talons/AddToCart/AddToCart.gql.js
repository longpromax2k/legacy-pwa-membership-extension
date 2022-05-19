import gql from 'graphql-tag';

const ADD_TO_CART = gql`
    mutation($cart_id: String!, $sku: String!) {
        addMembershipProductsToCart(
            input: { cart_id: $cart_id, membership_input: { sku: $sku } }
        ) {
            cart {
                applied_coupons {
                    code
                }
                available_payment_methods {
                    code
                    title
                }
                billing_address {
                    city
                    company
                    firstname
                    lastname
                    postcode
                    region {
                        code
                        label
                        region_id
                    }
                    street
                    telephone
                }
                email
                gift_message {
                    from
                    message
                    to
                }
                items {
                    uid
                    prices {
                        discounts {
                            label
                            amount {
                                currency
                                value
                            }
                        }
                        fixed_product_taxes {
                            amount {
                                currency
                                value
                            }
                        }
                        price {
                            currency
                            value
                        }
                        row_total {
                            currency
                            value
                        }
                        row_total_including_tax {
                            currency
                            value
                        }
                        total_item_discount {
                            currency
                            value
                        }
                    }
                }
                is_virtual
                mp_share_cart_token
                selected_payment_method {
                    code
                    purchase_order_number
                    title
                }
                shipping_addresses {
                    city
                    company
                    customer_notes
                    firstname
                    lastname
                }
                total_quantity
            }
        }
    }
`;

export default ADD_TO_CART;
