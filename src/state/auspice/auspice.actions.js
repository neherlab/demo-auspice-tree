// NOTE: These actions are not FSA-compliant. This is the format Auspice expects.
//  Be careful when using in a FSA reducer or a saga!
export const auspiceStartClean = (state) => ({ type: 'CLEAN_START', ...state })
