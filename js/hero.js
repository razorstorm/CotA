function Hero()
{
    this.level=1;
    this.setStats();
    this.mp=this.mpMax;
    this.damageLow = 20;
    this.damageHigh = 34;
    this.gold=800;
    this.exp=0;
    this.saveState();
    this.inventory = Inventory();
}

Hero.prototype.getDamage = function()
{
    var damageLow = this.inventory.modifyLowDamage(this.damageLow);
    var damageHigh = this.inventory.modifyHighDamage(this.damageHigh);
    
    var diff = damageHigh - damageLow;
    
    return parseInt(damageLow + (diff + 1) * Math.random());
} 
