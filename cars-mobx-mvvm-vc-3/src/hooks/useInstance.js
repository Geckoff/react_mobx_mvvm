import { useRef } from "react";

export function useInstance(instance) {
	const ref = useRef(null);

	if (ref.current === null) {
		ref.current = instance;
	}

	return ref.current;
}
