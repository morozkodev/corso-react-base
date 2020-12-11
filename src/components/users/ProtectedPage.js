import React from 'react';

import { ButtonBackToList } from './UserButton';

class ProtectedPage extends React.Component {
	render() {
		return (
			<section>
				<h1>ProtectedPage</h1>
				<br/>
				<ButtonBackToList />
			</section>
		);
	}
}
export default ProtectedPage;