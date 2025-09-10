export function checkHeadings(str){
    return/^(\*)(\*)(.*)\*$/.test(str)
}
export function replaceStarHeadings(str){
    return str.replace(/^(\*)(\*)|(\*)$/g,'')
}