import React, { useState } from 'react';
import './AppXY.css';

export default function AppXY() {
	const [position, setPosition] = useState({ x: 0, y: 0, z: 0 });

	const handleMouseMove = (e) => {
		// setPosition({ x: e.clientX, y: e.clientY });
		// 만약 수평으로만 이동이 가능하다면?
		setPosition((prev) => ({ ...prev, x: e.clientX }));
	};

	return (
		<div
			className='container'
			onPointerMove={handleMouseMove}>
			<div
				className='pointer'
				style={{
					left: `${position.x}px`,
					top: `${position.y}px`,
					transform: 'translate(-50%, -50%)',
				}}
			/>
		</div>
	);
}
