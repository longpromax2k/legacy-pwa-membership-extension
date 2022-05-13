export default {
    __typename: 'Products',
    total_count: 3,
    page_info: {
        __typename: 'SearchResultPageInfo',
        current_page: 1,
        page_size: 20,
        total_pages: 1
    },
    items: [
        {
            __typename: 'MembershipProduct',
            uid: 'MTE3Mw==',
            sku: 'gold-membership',
            name: 'Gold',
            description: {
                __typename: 'ComplexTextValue',
                html:
                    '<style>#html-body [data-pb-style=FX56PU7]{justify-content:flex-start;display:flex;flex-direction:column;background-position:left top;background-size:cover;background-repeat:no-repeat;background-attachment:scroll}</style><div data-content-type="row" data-appearance="contained" data-element="main"><div data-enable-parallax="0" data-parallax-speed="0.5" data-background-images="{}" data-background-type="image" data-video-loop="true" data-video-play-only-visible="true" data-video-lazy-load="true" data-video-fallback-src="" data-element="inner" data-pb-style="FX56PU7"><div data-content-type="text" data-appearance="default" data-element="main"><ul>\r\n<li>Free Shipping</li>\r\n<li>Membership</li>\r\n<li>WPA testin</li>\r\n</ul></div></div></div>'
            },
            image: {
                __typename: 'ProductImage',
                label: 'Gold',
                url:
                    'https://mp2.pwa-commerce.com/media/catalog/product/cache/2c9db5354ca799fb8463b073ee97e490/g/o/gold.png'
            },
            mp_membership_attributes: {
                __typename: 'MembershipProductAttributes',
                duration_type: 'by_default',
                membership: null,
                membership_price_fixed: 30
            },
            mpmembership_price_fixed: 30,
            mpmembership_duration_options: null,
            mpmembership: null,
            mpmembership_duration: 'by_default'
        }
    ]
};
