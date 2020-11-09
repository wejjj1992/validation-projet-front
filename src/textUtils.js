// Au sein du fichier textUtils.js

export function countWords(text) {
    return text.split(/\W+/u).filter(Boolean).length
}

export function normalizeSpacing(text) {
    return text.replace(/\s+/u, ' ').trim()
}