const CWD = __dirname.replace(/(\/|\\)/g,''), BS = process.platform==='win32'?'\\':'/',
    { spawn } =ChildProcess = require('child_process'),
    running = process.argv.slice(2);

module.exports = {run:cd('').run,shell:cd('').shell,cd:cd, get "/"(){return BS;}};
function cd(path) {
    function run() {
        var params = arguments[0] instanceof Array?arguments[0]:Array.from(arguments), thread, cwd;
        return new Promise((done,fail)=>{
            try {
                cwd = rel(path)?path:process.cwd()+BS+path
                console.log(`👟  ${params.join(' ')} @ ${cwd}`)
                thread = spawn(params[0], params.slice(1), {
                    stdio:process.stdio,
                    cwd:cwd
                });
                if(thread) {
                    thread.on('exit', (code, signal)=>done({code:code,signal:signal}));                
                    thread.on('error', (data, signal)=>console.error(`${data}`));
                    thread.on('disconnect', (code, signal)=>console.info(`${code}, ${signal}`));
                    thread.on('message', (code, signal)=>console.log(`(${code}, ${signal}`));
                    thread.on('close', (code, signal)=>console.info(`${code}`));
                }
                if (thread.stdout)
                    thread.stdout.on('data', (out)=>console.info(`${out}`));
                if (thread.stderr)
                    thread.stderr.on('data', (code, signal)=>console.info(`🏁  Done (finished with code ${code})`));
            } catch (e) {

                console.error(e);
            }
        });
    }
    function shell(line) {
        return run(line.split(/\s/));
    }
    function rel(path) {
        return path[0]==='/'||path[0]==='\\';
    }
    return {run:run,shell:shell};
}
