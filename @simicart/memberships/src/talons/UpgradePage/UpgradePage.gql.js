import gql from 'graphql-tag';

const GET_UPGRADE_PAGE = gql`
    {
        mpMembershipUpgradePage(filter: {}, pageSize: 5, currentPage: 1) {
            items {
                background_color
                benefit
                created_at
                customer_group
                default_duration_no
                default_duration_unit
                default_product
                duration
                featured_image
                featured_label
                image
                is_featured
                is_out_of_stock
                level
                membership_id
                name
                options
                price
                sort_order
                status
                store_id
                updated_at
            }
            page_info {
                currentPage
                endPage
                hasNextPage
                hasPreviousPage
                pageSize
                startPage
            }
            total_count
        }
    }
`;

export default GET_UPGRADE_PAGE;
