import React from 'react';
import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import PlanList from './planlist/index';

import { useGetProducts } from '../../talons/useGetProducts';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './memberships.module.css';

// Membership items
const MembershipItem = props => {
    return (
        <div
            className={defaultClasses.membershipItem}
        >
            {props.featured ? (
                <div className={defaultClasses.featuredItem}>
                    <img
                        src="https://membership-demo.mageplaza.com/media/mageplaza/membership/default/featured.png"
                        alt="featured"
                    />
                    <span>
                        <strong>Featured</strong>
                    </span>
                </div>
            ) : null}
            <div className={defaultClasses.membershipItemTitle}>
                <h1>{props.name}</h1>
            </div>
            <div className={defaultClasses.membershipItemContent}>
                <img
                    className={defaultClasses.membershipItemImage}
                    src={props.imageurl}
                    alt={props.label}
                />
                <div
                    className={defaultClasses.description}
                    dangerouslySetInnerHTML={{ __html: props.desc }}
                />
            </div>

            <form onSubmit={handleAddToCart}>
                <PlanList price={props.price} type={props.durationtype} />
                <button type="submit" className={defaultClasses.addToCart}>
                    Add to cart
                </button>
            </form>
        </div>
    );
};

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
