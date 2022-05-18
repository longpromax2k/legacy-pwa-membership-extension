import React from 'react';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import CardContainer from '../../components/cardcontainer';

import { useProductPage } from '../../talons/ProductPage/useProductPage';

import { shape, string } from 'prop-types';

/*
 * Membership Page that contains a list of all the memberships
 * and the ability to add them to the cart.
 * @return {ReactElement}
 */
const MembershipPage = () => {
    const { data, loading, error } = useProductPage();

    const { items } = data.mpMembershipPage;
    
    return (
        (loading && <fullPageLoadingIndicator />) ||
        (error ? (
            <MembershipErrorPage error={error.message} />
        ) : (
            <>
                <h1 className="text-2xl mb-3 text-center lg_text-left">
                    Membership
                </h1>
                <hr />
                <CardContainer button="Add to Cart" data={items} />
            </>
        ))
    );
};

/*
 * Error Page that displays an error message if there is an error
 * in the fetching of the data.
 * @props {Object} error - The error object
 * @return {ReactElement}
 */
const MembershipErrorPage = ({ error }) => {
    console.error(error);
    return (
        <>
            <div className="text-xl">Error</div>
            <hr />
            <div>{error}</div>
        </>
    );
};

MembershipPage.propTypes = {
    classes: shape({ root: string })
};
MembershipPage.defaultProps = {};
export default MembershipPage;
