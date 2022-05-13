import React from 'react';
import defaultClasses from './planlist.module.css';

export default function PlanList(props) {
    console.log(props.type);
    if (props.type === 'by_default') {
        return (
            <select
                className={defaultClasses.selectMenu}
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
        <div className={defaultClasses.permanentContainer}>
            <strong className="text-xl">{'$' + props.price}</strong>
            <div>Permanent</div>
        </div>
    );
}
