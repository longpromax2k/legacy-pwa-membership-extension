/**
 * Custom intercept file for the extension
 * By default you can only use target of @magento/pwa-buildpack.
 *
 * If do want extend @magento/peregrine or @magento/venia-ui
 * you should add them to peerDependencies to your package.json
 *
 * If you want to add overwrites for @magento/venia-ui components you can use
 * moduleOverrideWebpackPlugin and componentOverrideMapping
 */
module.exports = targets => {
    targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
        /**
         *  Wee need to activated esModules and cssModules to allow build pack to load our extension
         * {@link https://magento.github.io/pwa-studio/pwa-buildpack/reference/configure-webpack/#special-flags}.
         */
        flags[targets.name] = { esModules: true, cssModules: true };
    });

    targets.of('@magento/venia-ui').routes.tap(routesArray => {
        routesArray.push({
            name: 'SimicartMemberships',
            pattern: '/memberships',
            path: '@simicart/memberships/src/pages/membership'
        });

        routesArray.push({
            name: 'SimicartUpgrade',
            pattern: '/upgrade',
            path: '@simicart/memberships/src/pages/upgrade'
        });

        return routesArray;
    });
};
