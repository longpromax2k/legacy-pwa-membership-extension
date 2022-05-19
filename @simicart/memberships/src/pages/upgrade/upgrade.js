import React from 'react';

import { fullPageLoadingIndicator } from '@magento/venia-ui/lib/components/LoadingIndicator';
import CardContainer from '../../components/cardcontainer/index';
import InfoBox from '../../components/infobox/infobox';

import { useUpgradePage } from '../../talons/UpgradePage/useUpgradePage';

import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import data from './dumb.data.js';

/*
 * Upgrade page that contains a card of registered memberships
 * and the ability to upgrade it.
 * @return {ReactElement}
 */
const UpgradePage = () => {
    const {
        data: mpUpdata,
        loading: mpUploading,
        error: mpUperror
    } = useUpgradePage();

    return (mpUploading && <fullPageLoadingIndicator />) || mpUperror ? (
        <>{mpUperror}</>
    ) : (
        <>
            <h1 className="text-2xl mb-3 text-center lg_text-left">
                Membership
            </h1>
            <InfoBox
                value="To upgrade your membership, click on Upgrade button to view the
                available membership packages and make purchase with good
                prices."
            />
            <h2 className="text-xl mb-1">Current Membership</h2>
            <hr />
            <CardContainer
                button="Upgrade"
                data={mpUpdata.mpMembershipUpgradePage.items}
            />
            {/* <button onClick={_ => console.log(mpUpdata)}>click</button> */}
        </>
    );
};

UpgradePage.propTypes = {
    classes: shape({ root: string })
};
UpgradePage.defaultProps = {};
export default UpgradePage;
