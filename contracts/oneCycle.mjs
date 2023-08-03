import {NS} from "./ns.mjs"

/**
 * @param {NS} ns 
 */
export async function main(ns) {
    console.log(ns.args)
    ns.tprintf("this %s should %s replace %s", ns.args[0], ns.args[1], ns.args[2])
    ns.tprintf("this %s should %s replace %s")
    
    ns.scan()
    ns.setGraph("")
    // ns.scan("home") -> "stuff thing stuff"

}


main(new NS("hello", "every", "one"))

