export function shuffleArray(array: any[]): any[] {
    for (let i: number = array.length - 1; i > 0; i--) {
        let j: number = Math.floor(Math.random() * (i + 1));
        let temp: any = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}