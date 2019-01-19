import models from './models';

export default callback => {
	// connect to a database if needed, then pass it to `callback`:
	models.sequelize.sync().then((d) => {
		console.log("DB IS RUNNING...");
		callback();
	})
}
