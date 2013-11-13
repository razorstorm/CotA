var Enemy = Base.extend({
    initialize: function () {
        this.hp = 0;
        this.goldLow = 0;
        this.goldHigh = 0;
        this.expLow = 0;
        this.expHigh = 0;
    }
});

var Creep = Enemy.extend({
    initialize: function () {
        Enemy.initialize.call(this);
        this.hp = 600;
        this.goldLow = 28;
        this.goldHigh = 34;
        this.expLow = 4;
        this.expHigh = 8;
    }
});
