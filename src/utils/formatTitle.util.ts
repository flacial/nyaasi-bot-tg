export const formatTitle = (title: string) => {
    return title
        // Remove brackets
        .replaceAll(/\[(.*?)\]/g, '')
        // Remove parenthesis
        .replaceAll(/\((.*?)\)/g, '')
        // Remove extension
        .replaceAll(/\.[0-9a-z]+$/g, '')
        // Remove extra info after a minus symbol (-)
        .split('-')?.[0]
        // Remove extra spaces from both sides
        .trim()
}