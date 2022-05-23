import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './benefitlist.module.css';

/*
* @summary - BenefitList component
* @param {object} props - React props
* @props {string} classes - Additional classes
* @props {object} benefit - Benefit object
* @return {ReactElement} - Rendered component
*/
const BenefitList = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const parsedBenefits = JSON.parse(props.benefits);

    const renderList = () => {
        let result = [];
        for (const [key, value] of Object.entries(parsedBenefits)) {
            result.push(
                <li key={key}>
                    <span>{value}</span>
                </li>
            );
        }
        return result;
    };

    return (
        <div className={classes.root}>
            <ul>{!props.benefits ? <li>No benefits found</li> : renderList()}</ul>
        </div>
    );
};

BenefitList.propTypes = {
    classes: shape({ root: string })
};
BenefitList.defaultProps = {};
export default BenefitList;
