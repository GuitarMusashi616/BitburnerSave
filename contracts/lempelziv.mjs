const msg = "8mP27BoOI558OI47rzKG256VwlVwl681d7974sJnwZ6419XyZcqv1w509N4r51w5563161AkBHz56"
// const msg = "5aaabb450723abb"

class Parser {
    /**
     * @param {string} msg 
     */
    constructor(msg) {
        this.msg = msg
        this.mode = 0
        this.i = 0
        this.result = ""
    }

    alternate() {
        this.mode += 1
        this.mode %= 2
    }

    process() {
        if (this.mode === 0) {
            this.process0()
        }
        else {
            this.process1()
        }
        this.alternate()
    }
    process1() {
        const lchars = Number(this.msg[this.i])
        if (lchars === 0) {
            this.i += 1
            return
        }
        const xback = Number(this.msg[this.i+1])
        const clip = this.result.substring(this.result.length-xback)
        const repeated = this.getCharsFrom(clip, lchars)
        
        this.result += repeated
        this.i += 2
    }

    process0() {
        const lchars = Number(this.msg[this.i])
        if (lchars === 0) {
            this.i += 1
            return
        }
        
        this.result += this.msg.substring(this.i+1, this.i+lchars+1)
        this.i += lchars+1
    }
    /**
     * @param {string} clip 
     * @param {number} amount 
     * @return {string}
     */
    getCharsFrom(clip, amount) {
        let res = ""
        for (let i = 0; i < amount; i++) {
            res += clip[i%clip.length]
        }
        return res
    }

    run() {
        while (this.i < this.msg.length) {
            this.process()
            console.log(this)
        }
    }
}

function main(msg) {
    const parser = new Parser(msg)
    parser.run()
}

main(msg)