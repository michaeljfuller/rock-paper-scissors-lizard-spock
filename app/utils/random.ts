export function randomInt(max: number, min=0) {
    return Math.floor(Math.random() * (max-min+1)) + min;
}

export function randomIndex<T>(arr: Readonly<T[]>): number {
    return randomInt(arr.length - 1);
}

export function randomElement<T>(arr: Readonly<T[]>): T {
    const i = randomIndex(arr)
    return arr[i]
}