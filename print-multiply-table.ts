const createTable = (arrSize: number): number[][] => {
	const arr = new Array(arrSize)
	for (let i = 0; i <= arrSize; i += 1) {
		if (i === 0) {
			arr[i] = [...new Array(arrSize + 1)].map((_, index) => index)
		} else {
			arr[i] = [...new Array(arrSize + 1)].map((_, index) => (index === 0 ? i : i * index))
		}
	}
	return arr
}

const getItem = (maxCellWidth: number, item: number) => {
	return " ".repeat(maxCellWidth - item.toString().length + 2) + (item === 0 ? " " : item)
}

const printMultiplyTable = (int: number): void => {
	const maxCellWidth = (int ** 2).toString().length
	let arr = createTable(int)

	for (let i = 0; i < arr.length; i += 1) {
		let row = ""

		for (let j = 0; j < arr[i].length; j += 1) {
			row += getItem(maxCellWidth, arr[i][j])
		}
		console.log("\x1b[34m", row)
	}
}

printMultiplyTable(10)
