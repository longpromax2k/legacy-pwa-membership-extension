import React from 'react';

import MembershipItem from '../../components/items/index';
import InfoBox from '../../components/infobox/infobox';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';
import defaultClasses from './upgrade.module.css';

import data from './dumb.data.js';

const UpgradePage = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const { items } = data;
    return (
        <>
            <h1 className="text-2xl mb-3">Membership</h1>
            <InfoBox
                value="To upgrade your membership, click on Upgrade button to view the
                available membership packages and make purchase with good
                prices."
            />
            <h2 className="text-xl mb-1">Current Membership</h2>
            <hr />
            <MembershipItem
                key={items[0].uid}
                name={items[0].name}
                desc={items[0].description.html}
                imageurl={items[0].image.url}
                label={items[0].image.label}
                price={items[0].mpmembership_price_fixed}
                durationtype={items[0].mp_membership_attributes.sduration_type}
                button="Upgrade"
            />
        </>
    );
};

UpgradePage.propTypes = {
    classes: shape({ root: string })
};
UpgradePage.defaultProps = {};
export default UpgradePage;
