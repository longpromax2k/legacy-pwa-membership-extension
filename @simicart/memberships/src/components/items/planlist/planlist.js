import React from 'react';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './planlist.module.css';

/**
 * PlanList component that displays the information of the membership
 * @params {Object} props - Props passed from parent
 * @props {string[]} benefits - the benefits of the membership
 * @return {ReactElement}
 */
const PlanList = props => {
    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.permanentContainer}>
            <div className="text-xl font-semibold">{props.price}</div>
            <div>{props.duration}</div>
        </div>
    );
};

PlanList.propTypes = {
    classes: shape({ root: string })
};
PlanList.defaultProps = {};
export default PlanList;
