import gql from 'graphql-tag';

const GET_MEMBERSHIP_PRODUCTS = gql`
    query {
        products(filter: { category_id: { eq: "22" } }) {
            total_count
            page_info {
                current_page
                page_size
                total_pages
            }

            items {
                uid
                sku
                name
                description {
                    html
                }
                image {
                    label
                    url
                }
                mp_membership_attributes {
                    duration_type
                    membership
                    membership_price_fixed
                }
                mpmembership_price_fixed
                mpmembership_duration_options
                mpmembership
                mpmembership_duration
            }
        }
    }
`;

export default GET_MEMBERSHIP_PRODUCTS;
