import PropTypes from 'prop-types'

const HideIf = ({condition, children}) => {
    if(condition){
        return null;
    }
    return children;
};

HideIf.propTypes = {
    condition: PropTypes.bool.isRequired
};

export default HideIf
