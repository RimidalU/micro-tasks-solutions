const isPrime = (num: number): boolean => {
	if (num <= 0) return false

	for (let i = 2; i < num; i +=1) {
		if (num % i === 0) return false
	}
	return num !== 1
}

function getPrimes(start: number, end: number): number[] {
	let primesNumbers: number[] = []
	for (let i = start; i <= end; i +=1) {
		if (isPrime(i)) primesNumbers.push(i)
	}
	return primesNumbers
}
