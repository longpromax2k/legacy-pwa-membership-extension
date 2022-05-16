import React from 'react';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import CardContainer from '../../components/cardcontainer';

import { useGetProducts } from '../../talons/useGetProducts';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

/*
 * Membership Page that contains a list of all the memberships
 * and the ability to add them to the cart.
 * @return {ReactElement}
 */
const MembershipPage = () => {
    const { mbshipData, mbshipLoading, mbshipError } = useGetProducts();

    return (
        (mbshipLoading && <fullPageLoadingIndicator />) ||
        (mbshipError ? (
            <MembershipErrorPage error={mbshipError} />
        ) : (
            <>
                <h1 className="text-2xl mb-3">Membership</h1>
                <hr />
                <CardContainer
                    button="Add to Cart"
                    data={mbshipData.products.items}
                />
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
