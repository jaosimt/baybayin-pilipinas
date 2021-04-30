import React from 'react';
import './BaybayinTranslator.scss';
import { isMobile, ___bybyn, ___ynbyby, baybayin, translate } from "../../utils";
import kudlitE from './kudlit-e.png';
import kudlitI from './kudlit-i.png';
import kudlitO from './kudlit-o.png';
import kudlitU from './kudlit-u.png';
import virama from './virama.png';
import PropTypes from 'prop-types';

export default class BaybayinTranslator extends React.Component {
	constructor(props) {
		super(props);
		
		this.componentKeyDownHandler.bind(this);
		this.componentKeyUpHandler.bind(this);
		
		this.previewMessage = `${ isMobile() ? '↑↑↑' : '← ← ←' } type or paste something there<br/>and see the translation here. ↓↓↓<br/><br/><i style="color: #ff9900"><b>Note:</b><br/>This is an assisted and automatic translator as you type.  No need to worry on the convention of typing on a baybayin keyboard.  Just type normally as you would.  But do <b>translate(tagalog, bisaya, etc...) or transliterate</b> it first.<p>"SPELL IT THE WAY YOU PRONOUNCE IT!"</p></i>`;
		this.manualKeyboardMessage = `<i style="color: #ff9900"><b>Note:</b><br/>Follow typing pattern to/off characters indicated on the keyboard.<br/><br/>Do take note that...<ul><li>this is case sensitive</li><li>copy and paste will NOT work properly</li></ul> on this setting.  For more details, visit and read <a href="//www.jaosimt.com/blogs/baybayin-keyboard" target="_blank"}>this</a> article.</i>`;
		
		this.state = {
			baybayin: '',
			translation: this.props.autoAssist ? this.previewMessage : this.manualKeyboardMessage,
			simplify: true,
			capslock: false,
			shift: false
		};
	}
	
	componentKeyDownHandler = ({ keyCode }) => {
		//console.log('keyDown', keyCode);
		if (keyCode === 20) {
			this.setState({ capslock: true });
		} else if (keyCode === 16) {
			this.setState({ shift: true });
		}
	};
	
	componentKeyUpHandler = ({ keyCode }) => {
		//console.log('keyUp', keyCode);
		if (keyCode === 20) {
			this.setState({ capslock: false });
		} else if (keyCode === 16) {
			this.setState({ shift: false });
		}
	};
	
	onTextAreaChange = (e) => {
		if (this.props.autoAssist) {
			e.target.value = baybayin(e.target.value);
			
			this.setState({
				baybayin: e.target.value,
				translation: translate(e.target.value, this.state.simplify.checked) || this.previewMessage
			})
		} else {
			e.target.value = e.target.value
				.replace(/N/gm, ___bybyn[ 'nga' ])
				.replace(/([bkdghlmnprstwy])/gm, (x) => {
					return ___bybyn[ x + 'a' ] || x;
				})
				.replace(/([ᜊᜃᜇᜄᜑᜎᜋᜈᜅᜉᜍᜐᜆᜏᜌ])([aieoug])/gm, (x, y, z) => {
					return ___bybyn[ ___ynbyby[ y ].replace(/[aeiou]/gm, '') + z ] || x
				})
				.replace(/([ᜊᜃᜇᜄᜑᜎᜋᜈᜅᜉᜍᜐᜆᜏᜌ])([=+])/gm, (x, y, z) => {
					return ___bybyn[ ___ynbyby[ y ].replace(/[aeiou]/gm, '') ] || x
				});
			
			this.setState({
				baybayin: e.target.value,
				translation: e.target.value ? translate(e.target.value, this.state.simplify.checked).toLowerCase() : this.manualKeyboardMessage
			})
		}
	};
	
	onCapslockClick = () => this.setState({ capslock: !this.state.capslock, shift: false });
	onShiftClick = () => this.setState({ shift: !this.state.shift });
	
	onKeyClick = (e) => {
		const ds = e.currentTarget.dataset,
			{ capslock, shift } = this.state;
		
		if (ds.up || ds.down) {
			this.textAreaNode.value += capslock || shift ? ds.up : ds.down;
			this.dispatchKeyPressEvent();
		}
	};
	
	onBackspaceClick = () => {
		const ta = this.textAreaNode.value;
		if (ta.length >= 1) {
			this.textAreaNode.value = this.textAreaNode.value.slice(0, this.textAreaNode.value.length - 1);
			this.dispatchKeyPressEvent();
		}
		
	};
	
	dispatchKeyPressEvent = () => {
		const evt = new Event("keyup", { bubbles: true, cancelable: false });
		this.textAreaNode.dispatchEvent(evt);
		
		if (this.state.shift) this.setState({ shift: !this.state.shift });
	};
	
	componentDidMount() {
		if (this.textAreaNode) this.textAreaNode.focus();
		document.addEventListener('keydown', this.componentKeyDownHandler, false);
		document.addEventListener('keyup', this.componentKeyUpHandler, false);
	};
	
	componentWillUnmount() {
		document.removeEventListener('keydown', this.componentKeyDownHandler, false);
		document.removeEventListener('keyup', this.componentKeyUpHandler, false);
	}
	
	componentDidUpdate(prevProps) {
		if (prevProps.autoAssist !== this.props.autoAssist) this.onTextAreaChange({ target: { value: this.textAreaNode.value } })
	}
	
	render() {
		const leftBracket = '{';
		const rightBracket = '}';
		const {
			capslock,
			shift
		} = this.state;
		
		return <div className={ 'baybayin-translator' }>
            <textarea
	            ref={ node => this.textAreaNode = node }
	            defaultValue={ this.state.baybayin }
	            onKeyUp={ this.onTextAreaChange }
            />
			
			<div className={ 'preview' } dangerouslySetInnerHTML={ { __html: this.state.translation } } />
			
			<div className={ 'info' }>
				<div className={ 'keyboard' }>
					<div
						className={ 'key-tilde red-ish' }
						data-up="~"
						data-down="`"
						onClick={ this.onKeyClick }
					>
						<div>~<span className={ 'pink-fg' }>ᜈ᜔ᜌ</span></div>
						<div>`</div>
					</div>
					
					<div
						className={ 'key-1 gray-ish' }
						data-up="!"
						data-down="1"
						onClick={ this.onKeyClick }
					>
						<div>!</div>
						<div>1</div>
					</div>
					
					<div
						className={ 'key-2 gray-ish' }
						data-up="@"
						data-down="2"
						onClick={ this.onKeyClick }
					>
						<div>@</div>
						<div>2</div>
					</div>
					
					<div
						className={ 'key-3 gray-ish' }
						data-up="#"
						data-down="3"
						onClick={ this.onKeyClick }
					>
						<div>#</div>
						<div>3</div>
					</div>
					
					<div
						className={ 'key-4 gray-ish' }
						data-up="₱"
						data-down="4"
						onClick={ this.onKeyClick }
					>
						<div>$<span className={ 'red-fg' }>₱</span></div>
						<div>4</div>
					</div>
					
					<div
						className={ 'key-5 gray-ish' }
						data-up="%"
						data-down="5"
						onClick={ this.onKeyClick }
					>
						<div>%</div>
						<div>5</div>
					</div>
					
					<div
						className={ 'key-6 gray-ish' }
						data-up="^"
						data-down="6"
						onClick={ this.onKeyClick }
					>
						<div>^</div>
						<div>6</div>
					</div>
					
					<div
						className={ 'key-7 gray-ish' }
						data-up="&"
						data-down="7"
						onClick={ this.onKeyClick }
					>
						<div>&</div>
						<div>7</div>
					</div>
					
					<div
						className={ 'key-8 gray-ish' }
						data-up="*"
						data-down="8"
						onClick={ this.onKeyClick }
					>
						<div>*</div>
						<div>8</div>
					</div>
					
					<div
						className={ 'key-9 gray-ish' }
						data-up="("
						data-down="9"
						onClick={ this.onKeyClick }
					>
						<div>(</div>
						<div>9</div>
					</div>
					
					<div
						className={ 'key-0 gray-ish' }
						data-up=")"
						data-down="0"
						onClick={ this.onKeyClick }
					>
						<div>)</div>
						<div>0</div>
					</div>
					
					<div
						className={ 'key-dash gray-ish' }
						data-up="_"
						data-down="-"
						onClick={ this.onKeyClick }
					>
						<div>_</div>
						<div>-</div>
					</div>
					
					<div
						className={ 'key-equal blue-ish' }
						data-up="+"
						data-down="="
						onClick={ this.onKeyClick }
					>
						<div>+</div>
						<div>=<img alt="" src={ virama } /></div>
					
					</div>
					
					<div
						className={ 'key-backspace gray-bg' }
						onClick={ this.onBackspaceClick }
					>
						<div />
						<div>BackSpace</div>
					</div>
					
					<div
						className={ 'key-tab gray-bg' }
						data-up="	"
						data-down="	"
						onClick={ this.onKeyClick }
					>
						<div />
						<div>Tab</div>
					</div>
					
					<div
						className={ 'key-q red-ish' }
						data-up="Q"
						data-down="q"
						onClick={ this.onKeyClick }
					>
						<div>Q<span className={ 'pink-fg' }>ᜃ᜔ᜏ</span></div>
						<div>q<span className={ 'pink-fg' }>ᜃᜓᜏ</span></div>
					</div>
					
					<div
						className={ 'key-w green-ish' }
						data-up="W"
						data-down="w"
						onClick={ this.onKeyClick }
					>
						<div>W</div>
						<div>w<span className={ 'pink-fg' }>ᜏ</span></div>
					</div>
					
					<div
						className={ 'key-e blue-ish' }
						data-up="E"
						data-down="e"
						onClick={ this.onKeyClick }
					>
						<div>E<span className={ 'pink-fg' }>ᜁ</span></div>
						<div>e<img alt="" src={ kudlitE } /></div>
					</div>
					
					<div
						className={ 'key-r red-ish' }
						data-up="R"
						data-down="r"
						onClick={ this.onKeyClick }
					>
						<div>R</div>
						<div>r<span className={ 'pink-fg' }>ᜍ</span></div>
					</div>
					
					<div
						className={ 'key-t green-ish' }
						data-up="T"
						data-down="t"
						onClick={ this.onKeyClick }
					>
						<div>T</div>
						<div>t<span className={ 'pink-fg' }>ᜆ</span></div>
					</div>
					
					<div
						className={ 'key-y green-ish' }
						data-up="Y"
						data-down="y"
						onClick={ this.onKeyClick }
					>
						<div>Y</div>
						<div>y<span className={ 'pink-fg' }>ᜌ</span></div>
					</div>
					
					<div
						className={ 'key-u blue-ish' }
						data-up="U"
						data-down="u"
						onClick={ this.onKeyClick }
					>
						<div>U<span className={ 'pink-fg' }>ᜂ</span></div>
						<div>u<img alt="" src={ kudlitU } /></div>
					</div>
					
					<div
						className={ 'key-i blue-ish' }
						data-up="I"
						data-down="i"
						onClick={ this.onKeyClick }
					>
						<div>I<span className={ 'pink-fg' }>ᜁ</span></div>
						<div>i<img alt="" src={ kudlitI } /></div>
					</div>
					
					<div
						className={ 'key-o blue-ish' }
						data-up="O"
						data-down="o"
						onClick={ this.onKeyClick }
					>
						<div>O<span className={ 'pink-fg' }>ᜂ</span></div>
						<div>o<img alt="" src={ kudlitO } /></div>
					</div>
					
					<div
						className={ 'key-p green-ish' }
						data-up="P"
						data-down="p"
						onClick={ this.onKeyClick }
					>
						<div>P</div>
						<div>p<span className={ 'pink-fg' }>ᜉ</span></div>
					</div>
					
					<div
						className={ 'key-leftbracket gray-ish' }
						data-up="{"
						data-down="["
						onClick={ this.onKeyClick }
					>
						<div>{ leftBracket }</div>
						<div>[</div>
					</div>
					
					<div
						className={ 'key-rightbracket gray-ish' }
						data-up={ rightBracket }
						data-down="]"
						onClick={ this.onKeyClick }
					>
						<div>}</div>
						<div>]</div>
					</div>
					
					<div
						className={ 'key-backslash gray-ish' }
						data-up="|"
						data-down="\"
						onClick={ this.onKeyClick }
					>
						<div>|</div>
						<div>\</div>
					</div>
					
					<div
						className={ 'key-capslock gray-bg' }
						onClick={ this.onCapslockClick }
					>
						<div className={ 'capslight' } style={ { color: capslock ? '#FF9900' : '#FFF' } }>•</div>
						<div>Capslock</div>
					</div>
					
					<div
						className={ 'key-a blue-ish' }
						data-up="A"
						data-down="a"
						onClick={ this.onKeyClick }
					>
						<div>A<span className={ 'pink-fg' }>ᜀ</span></div>
						<div>a</div>
					</div>
					
					<div
						className={ 'key-s green-ish' }
						data-up="S"
						data-down="s"
						onClick={ this.onKeyClick }
					>
						<div>S</div>
						<div>s<span className={ 'pink-fg' }>ᜐ</span></div>
					</div>
					
					<div
						className={ 'key-d green-ish' }
						data-up="D"
						data-down="d"
						onClick={ this.onKeyClick }
					>
						<div>D</div>
						<div>d<span className={ 'pink-fg' }>ᜇ</span></div>
					</div>
					
					<div
						className={ 'key-f red-ish' }
						data-up="F"
						data-down="f"
						onClick={ this.onKeyClick }
					>
						<div>F</div>
						<div>f<span className={ 'pink-fg' }>ᜉ</span></div>
					</div>
					
					<div
						className={ 'key-g green-ish' }
						data-up="G"
						data-down="g"
						onClick={ this.onKeyClick }
					>
						<div>G</div>
						<div>g<span className={ 'pink-fg' }>ᜄ</span></div>
					</div>
					
					<div
						className={ 'key-h green-ish' }
						data-up="H"
						data-down="h"
						onClick={ this.onKeyClick }
					>
						<div>H</div>
						<div>h<span className={ 'pink-fg' }>ᜑ</span></div>
					</div>
					
					<div
						className={ 'key-j red-ish' }
						data-up="J"
						data-down="j"
						onClick={ this.onKeyClick }
					>
						<div>J<span className={ 'pink-fg' }>ᜇ᜔ᜌ</span></div>
						<div>j<span className={ 'pink-fg' }>ᜇᜒᜌ</span></div>
					</div>
					
					<div
						className={ 'key-k green-ish' }
						data-up="K"
						data-down="k"
						onClick={ this.onKeyClick }
					>
						<div>K</div>
						<div>k<span className={ 'pink-fg' }>ᜃ</span></div>
					</div>
					
					<div
						className={ 'key-l green-ish' }
						data-up="L"
						data-down="l"
						onClick={ this.onKeyClick }
					>
						<div>L</div>
						<div>l<span className={ 'pink-fg' }>ᜎ</span></div>
					</div>
					
					<div
						className={ 'key-colon gray-ish' }
						data-up=":"
						data-down=";"
						onClick={ this.onKeyClick }
					>
						<div>:</div>
						<div>;</div>
					</div>
					
					<div
						className={ 'key-quote gray-ish' }
						data-up='"'
						data-down="'"
						onClick={ this.onKeyClick }
					>
						<div>"</div>
						<div>'</div>
					</div>
					
					<div
						className={ 'key-enter gray-bg' }
						data-up="
"
						data-down="
"
						onClick={ this.onKeyClick }
					>
						<div />
						<div>Enter</div>
					</div>
					
					<div
						className={ 'key-leftshift gray-bg' + (shift ? ' pressed' : '') }
						onClick={ this.onShiftClick }
					>
						<div />
						<div>Shift</div>
					</div>
					
					<div
						className={ 'key-z red-ish' }
						data-up="Z"
						data-down="z"
						onClick={ this.onKeyClick }
					>
						<div>Z</div>
						<div>z<span className={ 'pink-fg' }>ᜐ</span></div>
					</div>
					
					<div
						className={ 'key-x red-ish' }
						data-up="X"
						data-down="x"
						onClick={ this.onKeyClick }
					>
						<div>X</div>
						<div>x<span className={ 'pink-fg' }>ᜃ᜔ᜐ</span></div>
					</div>
					
					<div
						className={ 'key-c red-ish' }
						data-up="C"
						data-down="c"
						onClick={ this.onKeyClick }
					>
						<div>C<span className={ 'pink-fg' }>ᜆ᜔ᜐ</span></div>
						<div>c<span className={ 'pink-fg' }>ᜃ</span></div>
					</div>
					
					<div
						className={ 'key-v red-ish' }
						data-up="V"
						data-down="v"
						onClick={ this.onKeyClick }
					>
						<div>V</div>
						<div>v</div>
					</div>
					
					<div
						className={ 'key-b green-ish' }
						data-up="B"
						data-down="b"
						onClick={ this.onKeyClick }
					>
						<div>B</div>
						<div>b<span className={ 'pink-fg' }>ᜊ</span></div>
					</div>
					
					<div
						className={ 'key-n green-ish' }
						data-up="N"
						data-down="n"
						onClick={ this.onKeyClick }
					>
						<div>N<span className={ 'pink-fg' }>ᜅ</span></div>
						<div>n<span className={ 'pink-fg' }>ᜈ</span></div>
					</div>
					
					<div
						className={ 'key-m green-ish' }
						data-up="M"
						data-down="m"
						onClick={ this.onKeyClick }
					>
						<div>M</div>
						<div>m<span className={ 'pink-fg' }>ᜋ</span></div>
					</div>
					
					<div
						className={ 'key-comma gray-ish' }
						data-up="<"
						data-down=","
						onClick={ this.onKeyClick }
					>
						<div>{ "<" }</div>
						<div>,</div>
					</div>
					
					<div
						className={ 'key-period gray-ish' }
						data-up=">"
						data-down="."
						onClick={ this.onKeyClick }
					>
						<div>{ ">" }</div>
						<div>.</div>
					</div>
					
					<div
						className={ 'key-slash gray-ish' }
						data-up="?"
						data-down="/"
						onClick={ this.onKeyClick }
					>
						<div>?</div>
						<div>/</div>
					</div>
					
					<div
						className={ 'key-rightshift gray-bg' + (shift ? ' pressed' : '') }
						onClick={ this.onShiftClick }
					>
						<div />
						<div>Shift</div>
					</div>
					
					<div
						className={ 'key-leftctrl gray-bg' }
					>
						<div />
						<div>Control</div>
					</div>
					
					<div
						className={ 'key-empty one gray-bg' }
					/>
					<div
						className={ 'key-leftalt gray-bg' }
					>
						<div />
						<div>Alt</div>
					</div>
					
					<div
						className={ 'key-spacebar gray-ish' }
						data-up=" "
						data-down=" "
						onClick={ this.onKeyClick }
					/>
					
					<div
						className={ 'key-rightalt gray-bg' }
					>
						<div />
						<div>Alt</div>
					</div>
					
					<div
						className={ 'key-empty two gray-bg' }
					/>
					
					<div
						className={ 'key-rightctrl gray-bg' }
					>
						<div />
						<div>Control</div>
					</div>
				</div>
			</div>
		</div>;
	}
}

BaybayinTranslator.propType = {
	autoAssist: PropTypes.bool
};

BaybayinTranslator.defaultProps = {
	autoAssist: true
};