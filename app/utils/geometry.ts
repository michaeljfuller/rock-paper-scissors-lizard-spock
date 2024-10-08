export const degreesToRadians = (value: number) => value * (Math.PI / 180)

export function getCoordinatesFromAngle(degrees: number, distance = 1) {
    const radians = degreesToRadians(degrees-90)
    const x = Math.cos(radians) * distance
    const y = Math.sin(radians) * distance
    return [x, y] as [number, number]
}
