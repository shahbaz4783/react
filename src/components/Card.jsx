import React from 'react';

const cardStyle = {
	border: '1px solid #efefef',
	borderRadius: '5px',
	padding: '20px',
	margin: '20px',
	boxShadow: '5px 5px 15px rgba(0,0,0,0.1)',
};

const titleStyle = {
	fontSize: '1.5em',
	marginBottom: '0.5em',
};

const contentStyle = {
	fontSize: '1em',
};

const Card = ({ title, content }) => (
	<div style={cardStyle}>
		<h2 style={titleStyle}>{title}</h2>
		<p style={contentStyle}>{content}</p>
	</div>
);

export default Card;
