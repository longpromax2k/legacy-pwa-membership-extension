import React from 'react';
import Icon from '@magento/venia-ui/lib/components/Icon';
import { FastForward } from 'react-feather';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';
import { useHistory } from 'react-router-dom';
import { shape, string } from 'prop-types';

import defaultClasses from './SimiCartIcon.css';
import { FormattedMessage, useIntl } from 'react-intl';

const SimiCartIcon = () => {
    const classes = defaultClasses;
    const { formatMessage } = useIntl();
    const history = useHistory();

    return (
        <button
            aria-label={formatMessage({
                id: `blog.bloglabel`,
                defaultMessage: 'Membership'
            })}
            className={classes.root}
            onClick={() => history.push(resourceUrl('/memberships'))}
        >
            <Icon src={FastForward} />
            <span className={classes.label}>
                <FormattedMessage id={`Membership`} />
            </span>
        </button>
    );
};

SimiCartIcon.propTypes = {
    classes: shape({ root: string })
};
SimiCartIcon.defaultProps = {};

export default SimiCartIcon;
