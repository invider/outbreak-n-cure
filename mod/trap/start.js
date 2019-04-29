'use strict'
module.exports = function() {
    // create UI container
    const hud = sys.spawn('hud/Hud', {
        Z: 10,
        name: 'hud',
    })

    const island = sys.spawn('MapScreen', {
        Z: 11,
        name: 'island',
        background: res.island,
    }, 'hud')
    island.adjust()

    const market = sys.spawn('MarketScreen', {
        Z: 12,
        name: 'market',
    }, 'hud')
    market.adjust()
    market.hide()

    const popup = sys.spawn('Popup', {
        Z: 14,
        name: 'popup'
    }, 'hud')
    popup.adjust()

    const hero = sys.spawn('Hero', {
        name: 'hero',
    }, '')
    hero.arrived(island.townList[0])

    env.day = 1
    env.turn = 0
    env.gameover = false

    setTimeout(() => popup.show(res.txt.welcome) , 1000)
    island.town['dareburg'].unlock()

    env.debug = {}
    mod.debug.env.info = env.debug
    mod.debug.hidden = true
}
