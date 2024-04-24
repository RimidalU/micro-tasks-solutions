const getPCCount = (count: number): string => {
	const LastTwoDigit = count % 100
	const LastDigit = count % 10
	const endingVariant = ["", "а", "ов"]

	let ending = endingVariant[2]

	if (LastDigit === 1) {
		ending = endingVariant[0]
	}
	if (LastDigit > 1 && LastDigit < 5) {
		ending = endingVariant[1]
	}
	if (LastTwoDigit > 10 && LastTwoDigit < 20) {
		ending = endingVariant[2]
	}

	return `${count} компьютер${ending}`
}

getPCCount(22)
