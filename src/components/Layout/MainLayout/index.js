import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './styles.scss';

const MainLayout = (props) => {
	console.log('currentUser: ', props.currentUser);
	return(
		<React.Fragment>
			<Header {...props} />
			<div className="mainLayout">
					{ props.children }
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default MainLayout;
