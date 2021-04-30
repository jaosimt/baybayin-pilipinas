import React from 'react';
import "./HomeTiles.scss";
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import { ellipses, baybayin } from "../../../utils";
import HideIf from "../../HideIf";
import MediaPreview from "../../MediaPreview/MediaPreview";

export default class HomeTiles extends React.Component {
	state = {
		mediaPreview: null
	};
	
	titleRef = [];
	descriptionRef = [];
	
	componentDidMount() {
		ReactTooltip.rebuild();
	}
	
	onMediaPreviewClose = () => this.setState({ mediaPreview: null });
	
	render() {
		return <div className={ 'home-tile-items' }>
			{
				this.props.data.map((d, i) => {
					const langFil = !d.language ? '' : ` lang-${ d.language }`;
					return <div
						key={ i }
						className={ `tiles${ langFil }` }
						onClick={ () => this.setState({
							mediaPreview: d
						}) }>
						
						<div
							ref={ ref => this.titleRef[ i ] = ref }
							data-tip={ langFil === ' lang-filipino' ? d.title : null }
							className={ 'title' }
							dangerouslySetInnerHTML={ { __html: langFil === ' lang-filipino' ? baybayin(d.title) : d.title } } />
						
						<div
							className={ 'image' }
							style={ {
								background: `black url(${ d.image }) no-repeat center`
							} }
						/>
						
						{
							langFil !== ' lang-filipino' &&
							<div className={ 'description' }>{ ellipses(d.description, 100) }</div>
						}
						{
							langFil === ' lang-filipino' &&
							<div
								ref={ ref => this.descriptionRef[ i ] = ref }
								data-html={ true }
								data-tip={ langFil === ' lang-filipino' ? ellipses(d.description, 100).replace(/[\n]/gm, '<br/>') : null }
								className={ 'description' }
								dangerouslySetInnerHTML={ { __html: baybayin(ellipses(d.description, 100)) } } />
						}
					</div>
				})
			}
			
			<HideIf condition={ this.state.mediaPreview === null }>
				<MediaPreview
					media={ this.state.mediaPreview || {} }
					onClose={ this.onMediaPreviewClose }
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