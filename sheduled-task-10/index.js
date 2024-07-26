//node cron
const cron = require('node-cron');

// a task  run every minute
cron.schedule('* * * * *', () => {
  console.log('Running a task every minute');
});

// to run a task every day at midnight:
cron.schedule('0 0 * * *', () => {
  console.log('Running a task every day at midnight');
});

console.log('Cron jobs are running...');
