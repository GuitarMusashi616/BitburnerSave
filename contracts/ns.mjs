
export class NS {
    /**
     * @param  {...string} args 
     */
    constructor(...args) {
        this.args = args
    }

    /**
     * @param  {string} msg 
     * @param  {...string} replacements 
     */
    tprintf(msg, ...replacements) {
        if (msg === undefined) return;
        let i = 0;
        const result = msg.replace(/%s/g, function() {
            return typeof replacements[i] !== 'undefined' ? replacements[i++] : '';
        });
        console.log(result)
    }
}

