function copyPrototype(descendant, parent)
{
    var sConstructor = parent.toString();
    var aMatch = sConstructor.match( /\s*function (.*)\(/ );
    if ( aMatch != null )
    {
        descendant.prototype[aMatch[1]] = parent;
    }
    for (var m in parent.prototype)
    {
        descendant.prototype[m] = parent.prototype[m];
    }
}

Enemy = function()
{
    this.hp = 0;
    this.goldLow = 0;
    this.goldHigh = 0;
    this.expLow = 0;
    this.expHigh = 0;
}

Creep = function()
{
    this.hp = 600;
    this.goldLow = 28;
    this.goldHigh = 34;
    this.expLow = 4;
    this.expHigh = 8;
}
copyPrototype(Creep, Enemy);