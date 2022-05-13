import React from 'react';

import MembershipItem from '../../components/items/index';
import CardContainer from '../../components/CardContainer/index';
import InfoBox from '../../components/infobox/infobox';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';
import defaultClasses from './upgrade.module.css';

import data from './dumb.data.js';

const UpgradePage = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    const { items } = data;

    console.log(items);

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
            <CardContainer button="Upgrade" data={items} />
        </>
    );
};

UpgradePage.propTypes = {
    classes: shape({ root: string })
};
UpgradePage.defaultProps = {};
export default UpgradePage;
