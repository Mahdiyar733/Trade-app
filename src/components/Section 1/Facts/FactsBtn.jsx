import { useState } from "react";
import { FactsModal } from "./FactsModal";
import { Btn } from "../../utilities/Btn/Btn";
export function FactsBtn() {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	function handleIsOpen() {
		setModalIsOpen((isOpen) => !isOpen);
	}

	return (
		<>
			{!modalIsOpen ? "" : <FactsModal handler={handleIsOpen} />}
			<Btn
				color="BG"
				handler={handleIsOpen}>
				Facts
			</Btn>
		</>
	);
}
