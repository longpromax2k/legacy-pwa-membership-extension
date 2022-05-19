import React from 'react';

import MembershipItem from '../items/index';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './CardContainer.module.css';

/*
 * Container for the membership cards
 * @param {Object} props - Props passed from parent
 * @props {string} button - button value
 * @props {Object} data - data object from the api
 * @return {ReactElement}
 */
const CardContainer = props => {
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            {props.data && props.data.length > 0 ? (
                props.data.map(item => {
                    return (
                        <MembershipItem
                            key={item.name}
                            name={item.name}
                            imageurl={item.image}
                            label={item.featured_label}
                            benefits={item.benefits}
                            price={item.price}
                            duration={item.duration}
                            featured={item.is_featured}
                            featuredImage={item.featured_image}
                            featuredLabel={item.featured_label}
                            color={item.background_color}
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
