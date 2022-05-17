import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './benefitlist.module.css';

const BenefitList = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return (
        <div className={classes.root}>
            <ul>
                {props.benefits.map((benefit, i) => {
                    return (
                        <li key={i}>
                            <span>{benefit}</span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

BenefitList.propTypes = {
    classes: shape({ root: string })
};
BenefitList.defaultProps = {};
export default BenefitList;
