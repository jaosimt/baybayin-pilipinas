import React from 'react';
import "./HomeTiles.scss";
import PropTypes from 'prop-types';
import {ellipses} from "../../../utils";
import HideIf from "../../HideIf";
import MediaPreview from "../../MediaPreview/MediaPreview";

export default class HomeTiles extends React.Component {
    state = {
        mediaPreview: null
    };
    
    onMediaPreviewClose = () => this.setState({mediaPreview: null});
    
    render() {
        return <div className={'home-tile-items'}>
            {
                this.props.data.map((d, i) => {
                    return <div
                        key={i}
                        className={'tiles'}
                    >
                        <div
                            className={'title'}
                            onClick={() => window.open(d.url, '_blank')}
                        >
                            {d.title}
                        </div>
                        
                        <div
                            className={'image'}
                            style={{
                                background: `black url(${d.image}) no-repeat center`
                            }}
                            onClick={() => this.setState({
                                mediaPreview: d
                            })}
                        />
                        
                        <div
                            className={'description'}
                            onClick={() => this.setState({
                                mediaPreview: d
                            })}
                        >
                            {ellipses(d.description, 100)}
                        </div>
                    </div>
                })
            }
    
            <HideIf condition={this.state.mediaPreview === null}>
                <MediaPreview
                    media={this.state.mediaPreview || {}}
                    onClose={this.onMediaPreviewClose}
                />
            </HideIf>
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