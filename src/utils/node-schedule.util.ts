// var schedule = require('node-schedule');

// let uniqueJobName = specificURL;
// // Shedule job according to timed according to cron expression
// var job = schedule.scheduleJob(uniqueJobName, '*/10 * * * * *', function () {
//     //Bar the foo..
// });
// // Inspect the job object (i.E.: job.name etc.)
// console.log(`************** JOB: ******************`);
// console.log(job);

// // To cancel the job on a certain condition (uniqueJobName must be known) 
// if (<someCondition>) {
//     let current_job = schedule.scheduledJobs[uniqueJobName];
//     current_job.cancel();
// }

// const campaignId = "MY_CUSTOM_ID"
// let job = schedule.scheduleJob(campaignId, '* * * * * *', function () {
//   console.log('running campaign: ' + campaignId)
// })
// stop the custom Job:

// const campaignId = "MY_CUSTOM_ID"
// let current_job = schedule.scheduledJobs[campaignId]
// current_job.cancel()
