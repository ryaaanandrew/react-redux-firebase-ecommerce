import React from 'react';
import Header from '../../Header';
import Footer from '../../Footer';
import './styles.scss';

const MainLayout = (props) => {
	return(
		<React.Fragment>
			<Header />
			<div className="mainLayout">
					{ props.children }
			</div>
			<Footer />
		</React.Fragment>
	);
};

export default MainLayout;
