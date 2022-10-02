export const fadeInParent = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

export const fadeIn = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};

export const homeParent = {
	initial: {
		opacity: 1,
	},
	animate: {
		opacity: 1,
		transition: {
			staggerChildren: 0.3,
		},
	},
};

export const toUp = {
	initial: {
		opacity: 0,
		y: 10,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const skillParent = {
	opacity: 1,
	transition: {
		staggerChildren: 0.3,
	},
};

export const projects = {
	initial: {
		opacity: 0,
	},
	animate: {
		opacity: 1,
	},
};
export const projItem = {
	initial: {
		opacity: 0.035,
		y: 70,
	},
	animate: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
		},
	},
};
