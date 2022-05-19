import React from 'react';

import { useIntl } from 'react-intl';

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
    const intl = useIntl();

    if (props.type === 'by_default') {
        return (
            <select
                className={classes.selectMenu}
                name="duration"
                id="subs-duration"
            >
                {props.plans.map((plan, index) => {
                    return (
                        <option
                            key={index}
                            value={plan.month + ',' + plan.price}
                        >
                            {intl.formatNumber(plan.price, {
                                style: 'currency',
                                currency: 'USD'
                            })}
                            {' / '}
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
            <div className="text-xl font-semibold">
                {intl.formatNumber(props.plans[0].price, {
                    style: 'currency',
                    currency: props.plans[0].currency
                })}
            </div>
            <div>Permanent</div>
        </div>
    );
};

PlanList.propTypes = {
    classes: shape({ root: string })
};
PlanList.defaultProps = {};
export default PlanList;