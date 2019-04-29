'use strict'

const MAX_RS = 999
const MAX_PRICE = 99

function normalize(rs) {
    Object.keys(rs.resources).forEach(key => {
        rs.resources[key] = Math.round(rs.resources[key])
        if (rs.resources[key] < 0) rs.resoruces[key] = 0
        if (rs.resources[key] > MAX_RS) rs.resoruces[key] = MAX_RS
    })
    Object.keys(rs.prices).forEach(key => {
        rs.prices[key] = Math.round(rs.prices[key])
        if (rs.prices[key] < 0) rs.prices[key] = 0
        if (rs.prices[key] > MAX_PRICE) rs.prices[key] = MAX_PRICE
    })
    return rs
}

module.exports = {
    genParamsForTown: function(params){
        params = params || {};
        var rs = {
            resources:{
                herbs: 10,
                crystals: 10,
                potion: 10,
                gold: 10,
            },
            prices: {
                herbs: 1,
                crystals: 2,
                potion: 3,
                gold: 5,
            },
            message:"Something strange happened, please check code"
        };
        let ev;
        if (env.turn-1 < lib.predefinedEvents.length){
            ev = lib.predefinedEvents[env.turn-1];
            rs.message = res.txt.startup[env.turn-1]
        } else {
            ev = lib.math.rnde(lib.events);
            rs.message = res.txt.event[lib.events.indexOf(ev)]
        }
        ev.exec(rs);
        return normalize(rs);
    }
}
