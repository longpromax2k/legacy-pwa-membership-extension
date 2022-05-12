import React from 'react';
import defaultClasses from './planlist.module.css';

export default function PlanList(props) {
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
