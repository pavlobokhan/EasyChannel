const moment = require('moment');
const execSync = require('child_process').execSync;

const date = moment().format('MM-DD-YYYY/HH:mm:ss');

execSync(`mkdir -p ./dist_backup/${date} && cp -r ./dist/* ./dist_backup/${date}/ && vue-cli-service build`, { stdio: [0, 1, 2]} );