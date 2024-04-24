const getGCD = (numArr: number[]): number => {
	let GCD = numArr[0]

	for (let i = 1; i < numArr.length; i += 1) {
		let currentNumber = numArr[i]

		while (GCD && currentNumber) {
			GCD > currentNumber ? (GCD %= currentNumber) : (currentNumber %= GCD)
		}
		GCD += currentNumber
	}
	return GCD
}

const getCommonDivisors = (numArr: number[]): number[] => {
	const GCDArray: number[] = []
	const GCD = getGCD(numArr)

	for (let i = 2; i <= GCD; i += 1) {
		if (GCD % i === 0) {
			GCDArray.push(i)
		}
	}
	return GCDArray
}

getCommonDivisors([42, 12, 18])