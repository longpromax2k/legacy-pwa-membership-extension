import React from 'react';
import { mergeClasses } from '@magento/venia-ui/lib/classify';
import { shape, string } from 'prop-types';

import defaultClasses from './infobox.module.css';

/*
 * InfoBox component that displays the information
 * @param {Object} props - component props
 * @props {Object} value - the value to display
 * @return {ReactElement}
 */
const InfoBox = props => {
    const classes = mergeClasses(defaultClasses, props.classes);
    return <div className={classes.root}>{props.value}</div>;
};

InfoBox.propTypes = {
    classes: shape({ root: string })
};
InfoBox.defaultProps = {};
export default InfoBox;
