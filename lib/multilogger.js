// MultiLogger
var Log = require('log');
var fs = require('fs');

function MultiLogger(_type)
{
	if (_type === undefined)
		this.logType = Log;
	else
		this.logType = _type;
	this.logs = [];
}

function addConsole(_level)
{
	this.logs.push(new this.logType(_level));
}

function addStream(_level, _stream)
{
	this.logs.push(new this.logType(_level, _stream));
}

function addFile(_level, _fileName)
{
	this.addStream(_level, fs.createWriteStream(_fileName));
}

function addCustomConsole(_type, _level)
{
	this.logs.push(new _type(_level));
}

function addCustomStream(_type, _level, _stream)
{
	this.logs.push(new _type(_level, _stream));
}

function addCustomFile(_type, _level, _fileName)
{
	this.addCustomStream(_type, _level, fs.createWriteStream(_fileName));
}

function logMessage(_level, _arg)
{
	for (i in this.logs) {
		this.logs[i].log(_level, _arg);
	}
}

function debug(_message)
{
	this.logMessage('DEBUG', arguments);
}

function info(_message)
{
	this.logMessage('INFO', arguments);
}

function notice(_message)
{
	this.logMessage('NOTICE', arguments);
}

function warning(_message)
{
	this.logMessage('WARNING', arguments);
}

function error(_message)
{
	this.logMessage('ERROR', arguments);
}

function critical(_message)
{
	this.logMessage('CRITICAL', arguments);
}

function emergency(_message)
{
	this.logMessage('EMERGENCY', arguments);
}

exports.DEBUG = Log.DEBUG;
exports.INFO = Log.INFO;
exports.NOTICE = Log.NOTICE;
exports.WARNING = Log.WARNING;
exports.ERROR = Log.ERROR;
exports.CRITICAL = Log.CRITICAL;
exports.EMERGENCY = Log.EMERGENCY;

MultiLogger.prototype.addConsole = addConsole;
MultiLogger.prototype.addStream = addStream;
MultiLogger.prototype.addFile = addFile;
MultiLogger.prototype.addCustomConsole = addCustomConsole;
MultiLogger.prototype.addCustomStream = addCustomStream;
MultiLogger.prototype.addCustomFile = addCustomFile;
MultiLogger.prototype.logMessage = logMessage;
MultiLogger.prototype.debug = debug;
MultiLogger.prototype.info = info;
MultiLogger.prototype.notice = notice;
MultiLogger.prototype.warning = warning;
MultiLogger.prototype.error = error;
MultiLogger.prototype.critical = critical;
MultiLogger.prototype.emergency = emergency;

exports.MultiLogger = MultiLogger;
