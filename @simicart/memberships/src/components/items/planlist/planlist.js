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
                {/* sẽ refactor lại sau khi có api */}
                <option value={'$' + props.price + ' / month'}>
                    ${props.price} / month
                </option>
                <option value={'$' + props.price * 12 + ' / month'}>
                    ${props.price * 12} / year
                </option>
            </select>
        );
    }
    return (
        <div className={classes.permanentContainer}>
            <strong className="text-xl">{'$' + props.price}</strong>
            <div>Permanent</div>
        </div>
    );
};

PlanList.propTypes = {
    classes: shape({ root: string })
};
PlanList.defaultProps = {};
export default PlanList;
