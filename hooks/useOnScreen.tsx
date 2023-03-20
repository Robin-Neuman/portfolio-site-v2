import React, { useEffect, useState } from 'react';

export default function useOnScreen(ref: React.RefObject<HTMLInputElement>, callback: () => void) {
	const [isIntersecting, setIntersecting] = useState(false);

	useEffect(() => {
		let mounted = true;

		const observer = new IntersectionObserver(([entry]) => {
			setIntersecting(entry.isIntersecting);
			if (entry.isIntersecting) {
				callback();
			}
		});

		if (mounted) {
			let node = ref.current;
			if (node) {
				observer.observe(node);
			}
		}
		return () => {
			observer.disconnect();
			mounted = false;
		};
	}, []);

	return isIntersecting;
}
