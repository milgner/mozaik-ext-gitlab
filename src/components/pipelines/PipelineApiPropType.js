import PropTypes from 'prop-types'

export default PropTypes.shape({
    id: PropTypes.number.isRequired,
    ref: PropTypes.string.isRequired,
    web_url: PropTypes.string.isRequired,
    started_at: PropTypes.string.isRequired,
    duration: PropTypes.number,
    coverage: PropTypes.number,
    status: PropTypes.oneOf(['running', 'pending', 'success', 'failed', 'canceled', 'skipped'])
        .isRequired,
    project: PropTypes.shape({
        web_url: PropTypes.string.isRequired,
    }).isRequired,
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        web_url: PropTypes.string.isRequired,
        avatar_url: PropTypes.string.isRequired,
    }).isRequired,
    commit: PropTypes.shape({
        id: PropTypes.string.isRequired,
        short_id: PropTypes.string.isRequired,
    }).isRequired,
    stages: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            status: PropTypes.oneOf([
                'running',
                'pending',
                'success',
                'failed',
                'success_with_error',
                'canceled',
                'skipped',
                'manual',
            ]).isRequired,
        })
    ).isRequired,
})
