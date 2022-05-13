import React from 'react';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import CardContainer from '../../components/CardContainer';

import { useGetProducts } from '../../talons/useGetProducts';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './memberships.module.css';

const MembershipPage = props => {
    const { mbshipData, mbshipLoading, mbshipError } = useGetProducts();
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        (mbshipLoading && <fullPageLoadingIndicator />) ||
        (mbshipError ? (
            <MembershipErrorPage error={mbshipData} />
        ) : (
            <>
                <h1 className="text-2xl mb-3">Membership</h1>
                <hr />
                <CardContainer data={mbshipData.products.items} />
            </>
        ))
    );
};

const MembershipErrorPage = ({ error }) => {
    console.error(error);
    return (
        <>
            <div className="text-center">Error</div>
            <div>{error}</div>
        </>
    );
};

MembershipPage.propTypes = {
    classes: shape({ root: string })
};
MembershipPage.defaultProps = {};
export default MembershipPage;
