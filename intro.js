const inquirer = require('inquirer');
const displayImage = require('display-image');
const sound = require('sound-play');
const path = require('path');
const chalk = require('chalk');

const start = async() => {
    await displayImage.fromURL('https://www.havenwoodacademy.org/wp-content/uploads/2016/06/what_leads_girls_to_be_targeted_by_bullies-1-1024x536.jpg').then(image => {
        console.log(image);
    });  inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('You\'re new to the neighborhood and the local bullies have discovered you already! They keep calling you a baby, no fair!'),
                name: 'intro1',
                choices: [chalk.bold.white('"I\'m no baby!" you say. (PRESS ENTER TO CONTINUE)')]
            }
        ])
        .then(answer => {
            answer ? intro2() : null; })
        .catch(error => {
            console.log(error);
        });
};

start();

const intro2 = async() => {
    await displayImage.fromURL('https://d3vhc53cl8e8km.cloudfront.net/hello-staging/wp-content/uploads/2017/09/11163558/main-972x597.jpg').then(image => {
        console.log(image);
    });
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('"I dare you to explore the abandoned house at the end of the street," says the biggest meanest bully.'),
                name: 'intro2',
                choices: [chalk.bold.white('Okay FINE," you say, and storm off toward the house.')]
            }
        ])
        .then(answer => {
            answer ? intro3() : null;})
        .catch(error => {
            console.log(error);
        });
};

const intro3 = async() => {
    inquirer
        .prompt([
            {
                type: 'list',
                message: chalk.green('You timidly walk up to the door, with all the kids watching you from the sidewalk. "GO IN!" they shout.'),
                name: 'intro3',
                choices: [chalk.bold.white('Ease open the door and walk inside.')]
            }
        ])
        .then()
        .catch(error => {
            console.log(error);
        });
};

