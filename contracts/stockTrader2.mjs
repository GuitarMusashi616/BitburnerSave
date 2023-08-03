import {NS} from "./ns.mjs"

class Option {
    None = 0;
    Buy = 1;
    Sell = 2;
}

class State {
    constructor() {
        this.stock = None
    }
}


/**
 * @param {NS} ns 
 */
export async function main(ns) {
    const prices = [195, 104, 190, 61, 59, 27, 56]

    // split into sections

    // buy or sell or none?
    // buy or sell or none?

    const result = recurse(Option.Buy, prices)
    
    let profit = 0
    let trend = "down"
    let stockOwned = -1
    for (let i = 0; i < prices.length; i++) {
        let diff = prices[i+1] - prices[i]
        if (diff > 0) {
            if (trend == "down") {
                console.log(`BOUGHT ${prices[i]}`)
                stockOwned = i
            }
            trend = "up"
        }
        else {
            if (trend == "up") {
                if (stockOwned !== -1) {
                    profit += prices[i] - prices[stockOwned]
                    console.log(`SOLD ${prices[stockOwned]} for ${prices[i]}`)
                    console.log(`Profit: ${profit}`)
                    stockOwned = -1
                }
            }
            trend = "down"
        }
    }



}

function recurse(option, remaining) {
    
}

main(new NS())