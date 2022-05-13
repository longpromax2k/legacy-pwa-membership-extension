import React from 'react';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import MembershipItem from '../items/index';

import { useGetProducts } from '../../talons/useGetProducts';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './memberships.module.css';

// Main component
const MembershipPage = props => {
    const { mbshipData, mbshipLoading, mbshipError } = useGetProducts();
    const classes = mergeClasses(defaultClasses, props.classes);

    try {
        if (mbshipLoading) return <fullPageLoadingIndicator />;
        else if (mbshipError) {
            console.error(mbshipError);
            return <div className="text-center">Error</div>;
        } else {
            return (
                <>
                    <div className={classes.root}>
                        {mbshipData.products.items.length > 0 ? (
                            mbshipData.products.items.map((item, i) => {
                                let isFeatured = i !== 1 ? 0 : 1;

                                return (
                                    <MembershipItem
                                        key={item.uid}
                                        name={item.name}
                                        desc={item.description.html}
                                        imageurl={item.image.url}
                                        label={item.image.label}
                                        price={item.mpmembership_price_fixed}
                                        durationtype={
                                            item.mp_membership_attributes
                                                .duration_type
                                        }
                                        featured={isFeatured}
                                        button="Add to Cart"
                                    />
                                );
                            })
                        ) : (
                            <div>No membership found</div>
                        )}
                    </div>
                </>
            );
        }
    } catch (error) {
        return <div className="text-center">Error.</div>;
        console.error(mbshipError);
        console.error(error);
    }
};

MembershipPage.propTypes = {
    classes: shape({ root: string })
};
MembershipPage.defaultProps = {};
export default MembershipPage;
