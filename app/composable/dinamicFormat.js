// Change space string to stript (-) for dynamic url
export function useDinamicFormat(string) {
    const arr = string.split(" ");
    return arr.join("-");
}