import { CronJob } from 'cron';

class CronUtil {
    private static instance: CronUtil;

    private constructor() { }

    static get(): CronUtil {
        if (!CronUtil.instance) CronUtil.instance = new CronUtil();
        return CronUtil.instance;
    }

    public async fetchCBSData(): Promise<void> {
        let count = 0;
        const job = new CronJob(
            '*/2 * * * * *', // cronTime
            () => {
                count++;
                console.log('Hello from cron job!', count);
            }, // onTick
            () => {
                if (count >= 5) {
                    console.log('Max count reached!', count);
                    job.stop();
                }
            }, // onComplete
            true, // start
            'America/Los_Angeles' // timeZone
        );
    }
}

const cronUtil = CronUtil.get();
export { cronUtil as CronUtil };
