import React from 'react';

import PlanList from './planlist/index';

import { useHistory } from 'react-router-dom';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './items.module.css';

/*
 * Item container for the membership cards
 * @param {Object} props - Props passed from parent
 * @props {Object[]} data - data object from the api passed from parent
 */
const Items = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const history = useHistory();

    console.log(props);

    const handleSubmit = e => {
        e.preventDefault();
        history.push('/upgrade');
    };

    return (
        <div className={classes.membershipItem}>
            <div className="w-full flex-grow">
                {props.featured ? (
                    <div className={classes.featuredItem}>
                        <img
                            src="https://membership-demo.mageplaza.com/media/mageplaza/membership/default/featured.png"
                            alt="featured"
                        />
                        <span>
                            <strong>Featured</strong>
                        </span>
                    </div>
                ) : null}

                <div className={classes.membershipItemTitle}>
                    <h1>{props.name}</h1>
                </div>

                <div className={classes.membershipItemContent}>
                    <img
                        className={classes.membershipItemImage}
                        src={props.imageurl}
                        alt={props.label}
                    />
                    <div
                        className={classes.description}
                        dangerouslySetInnerHTML={{ __html: props.desc }}
                    />
                </div>
            </div>

            <form onSubmit={handleSubmit}>
                <PlanList price={props.price} type={props.durationtype} />
                <button type="submit" className={classes.addToCart}>
                    {props.button}
                </button>
            </form>
        </div>
    );
};

Items.propTypes = {
    classes: shape({ root: string })
};
Items.defaultProps = {};
export default Items;
