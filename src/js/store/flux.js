const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			cardSuits: ["♦", "♥", "♠", "♣"],
			cardNumbers: ["2","3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]
		},
		actions: {
		}
	};
};

export default getState;
