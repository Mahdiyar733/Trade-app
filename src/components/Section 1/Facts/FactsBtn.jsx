/* eslint-disable react/prop-types */
import { useState } from "react";
import { FactsModal } from "./FactsModal";
import { Btn } from "../../utilities/Btn/Btn";
import FcAsSvg from "../../../svg/FcAsSvg";

export function FactsBtn({ colors }) {
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const { color1, color2 } = colors;
	function handleIsOpen() {
		setModalIsOpen((isOpen) => !isOpen);
	}

	return (
		<>
			{!modalIsOpen ? "" : <FactsModal handler={handleIsOpen} />}
			<Btn
				bgColor={color2}
				color={color1}
				handler={handleIsOpen}
				svg={<FcAsSvg color={color1} />}>
				FcAs
			</Btn>
		</>
	);
}
