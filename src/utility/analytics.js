import Analytics from 'analytics'
import googleTagManager from '@analytics/google-tag-manager'
const GTM_CONTAINER_ID = 'GTM-5MP4SF3'

const analytics = Analytics({
    app: 'larparlife', // Call this whatever you like.
    version: 100,
    plugins: [
        googleTagManager({
            containerId: GTM_CONTAINER_ID,
						enabled: true,
        }),
    ]
})

export default analytics