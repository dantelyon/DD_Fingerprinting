import React from 'react';

class async_techniques extends React.Component {
    constructor(props) {
        super(props);
        this._isMounted = false;
        this.state = {}
    }
    
    async componentDidMount() {
        this._isMounted = true;
        this._isMounted && this.setState({
            domrect: await domRect(),
		});
		
    }
    
    componentWillUnmount() {
        this._isMounted = false;
    }
    
    render() {
          return (
				  <tr>
                      <td>DOM Rect height</td>
                      <td>{this.state.domrect}</td>
                  </tr>
          )
      }
}

export default async_techniques



function domRect(){
	let elem = document.createElement('div');
	let s = elem.style;
	s.position = 'absolute';
	s.left = '3.1px';
	s.top = '2.1px';
	s.zIndex = '-100';
	s.visibility = 'hidden';
	s.fontSize = '19.123px';
	s.transformOrigin = '0.1px 0.2px 0.3px';
	s.webkitTransformOrigin = '0.1px 0.2px 0.3px';
	s.webkitTransform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
	s.transform = 'scale(1.01123) matrix3d(0.251106, 0.0131141, 0, -0.000109893, -0.0380797, 0.349552, 0, 7.97469e-06, 0, 0, 1, 0, 575, 88, 0, 1)';
	elem.innerHTML = '<h1>Sed ut perspiciatis unde</h1>dahlberg<b>dahl<i id="target">dahl</i></b>';
	document.body.appendChild(elem);
	let rect = document.getElementById('target').getClientRects()[0];
	elem.remove();
	return rect.height // to do: turn the full domrect into a hash
}

