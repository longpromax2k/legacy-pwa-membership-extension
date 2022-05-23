import gql from 'graphql-tag';

const GET_MEMBERSHIP_PRODUCTS = gql`
    query($match: String!) {
        products(
            filter: { name: { match: $match }, category_id: { eq: "22" } }
        ) {
            items {
                sku
            }
        }
    }
`;

export default GET_MEMBERSHIP_PRODUCTS;
