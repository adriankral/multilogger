multilogger
===========

A Node.js wrapper of log.js and its derivatives. Its main goal is to route log messages to different logs depending on their verbosity level.

Examples
===========
var ml = require('./multilog.js');
var mlog = new ml.MultiLog();
mlog.addConsole(mlog.DEBUG);
mlog.addFile(mlog.CRITICAL, 'logger.log');
mlog.debug('Debug message!');
mlog.info('Info message!');
mlog.error('This', 'is', 'an', 'error');
mlog.emergency('EMERGENCY');

Output: