var Hero = Base.extend({
    initialize: function () {
        this.level = 1;
//        this.setStats();
        this.mp = this.mpMax;
        this.damageMin = 20;
        this.damageMax = 34;
        this.gold = 800;
        this.exp = 0;
//        this.saveState();
        this.inventory = Inventory();
    },

    getDamage: function () {
        var damageLow = this.inventory.modifyLowDamage(this.damageMin);
        var damageHigh = this.inventory.modifyHighDamage(this.damageMax);

        var diff = damageHigh - damageLow;

        return parseInt(damageLow + (diff + 1) * Math.random());
    },
    attack: function () {

    }
});