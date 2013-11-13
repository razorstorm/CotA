
$(document).ready(function () {
    var hero = Hero.new();
    var currentEnemy = Creep.new();
    var actionPane = $('div#actionPane');
    var enemyContainer = $('div#enemyContainer');

    setupPanes();

    function setupPanes()
    {
        enemyContainer.click(function() {
            hero.attack(currentEnemy);
        });
    }
});


