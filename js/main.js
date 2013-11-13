$(document).ready(function () {
    var hero = Hero();
    var currentEnemy = Creep();
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


