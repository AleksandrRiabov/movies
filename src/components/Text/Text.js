import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';

const Text = ({ children, size = 450 }) => {
	const [showMore, setShowMore] = useState(false);

	const lng = children.length;

	return (
		<Typography variant="body1">
			{showMore ? `${children}  ` : `${children.slice(0, size)}${lng > size ? '...' : ''} `}
			<span
				style={{ textDecoration: 'underline', cursor: 'pointer' }}
				onClick={() => setShowMore(!showMore)}
			>
				{showMore ? 'Show Less' : lng > size ? 'Show More' : ''}
			</span>
		</Typography>
	);
};

export default Text;