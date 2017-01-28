import args from 'minimist';
let buildConfig = (env) => (require('./webpack/' + env + '.js'));
export default buildConfig(args(process.argv.slice(2)).env);
