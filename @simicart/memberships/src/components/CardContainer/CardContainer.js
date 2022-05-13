import React from 'react';

import MembershipItem from '../../components/items/index';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './CardContainer.module.css';

const CardContainer = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.root}>
            {props.data.length > 0 ? (
                props.data.map((item, i) => {
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
                                item.mp_membership_attributes.duration_type
                            }
                            featured={isFeatured}
                            button={props.button}
                        />
                    );
                })
            ) : (
                <div>No membership found</div>
            )}
        </div>
    );
};

CardContainer.propTypes = {
    classes: shape({ root: string })
};
CardContainer.defaultProps = {};
export default CardContainer;
