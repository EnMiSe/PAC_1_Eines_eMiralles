/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */

const buttons = document.querySelectorAll('[data-character]');
buttons.forEach(button => {
    button.addEventListener('click', function() {
        document.body.classList.forEach(className => {
            if (className.startsWith('character-background-')) {
                document.body.classList.remove(className);
            }
        });
        const character = this.getAttribute('data-character');
        document.body.classList.add(`character-background-${character}`);
    });
});


