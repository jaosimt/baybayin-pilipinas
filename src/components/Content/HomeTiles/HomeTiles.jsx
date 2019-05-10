import React from 'react';
import "./HomeTiles.scss";
import PropTypes from 'prop-types';
import {ellipses} from "../../../utils";

export default class HomeTiles extends React.Component {
    render() {
        return <div className={'home-tile-items'}>
            {
                this.props.data.map((d, i) => {
                    return <div
                        key={i}
                        className={'tiles'}
                        onClick={() => window.open(d.url, '_blank')}
                    >
                        <div className={'title'}>{d.title}</div>
                        
                        <div
                            className={'image'}
                            style={{
                                background: `black url(${d.image}) no-repeat center`
                            }}
                        />
                        
                        <div className={'description'}>{ellipses(d.description, 100)}</div>
                    </div>
                })
            }
        </div>;
    }
}

HomeTiles.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            url: PropTypes.string,
            image: PropTypes.string,
            description: PropTypes.string
        })
    ).isRequired
};