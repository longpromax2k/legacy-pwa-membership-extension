import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './planlist.module.css';

/*
 * PlanList component that displays the information of the membership
 * @params {Object} props - Props passed from parent
 * @props {string[]} benefits - the benefits of the membership
 * @return {ReactElement}
 */
const PlanList = props => {
    const classes = mergeClasses(defaultClasses, props.classes);

    if (props.type === 'by_default') {
        return (
            <select
                className={classes.selectMenu}
                name="duration"
                id="subs-duration"
            >
                {props.plans.map(plan => {
                    return (
                        <option value={plan.month + ',' + plan.price}>
                            {plan.price} /{' '}
                            {plan.month >= 12
                                ? Math.floor(plan.month / 12) + ' year(s)'
                                : plan.month + ' month(s)'}
                        </option>
                    );
                })}
            </select>
        );
    }

    return (
        <div className={classes.permanentContainer}>
            <strong className="text-xl">{props.plans[0].price}</strong>
            <div>Permanent</div>
        </div>
    );
};

PlanList.propTypes = {
    classes: shape({ root: string })
};
PlanList.defaultProps = {};
export default PlanList;
