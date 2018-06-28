require('./env-task')
    .cd('ui')
    .shell('ng serve --proxy-config proxy.conf.json');