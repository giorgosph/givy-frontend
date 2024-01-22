import informAdmin from "./APIs/informAdmin";
import { currentDate } from "./dataFormater";

const { date, time } = currentDate();

const logger = async (msg, color) => {
  if(__DEV__) return ;
  
};

const logging = {
  debug: (msg) => logger( '\x1b[0m'),
  info: (msg) => logger(`${date} | ${time} | INFO | ${msg}`, ''),
  warn: (msg) => logger(`${date} | ${time} | WARN | ${msg}`, ''),
  error: (msg) => logger(`${date} | ${time} | ERROR | ${msg}`, '\x1b[31m'),
  devNotice: (msg) => logger(` DEV NOTICE | ${msg}`, '\x1b[35m'),
};

const log = (type, message, config = false) => { 
  if(!__DEV__ && type !== 'dn') return;

  switch(type) {
    case 'd': 
      console.log(`DEBUG | ${message} \x1b[0m`);
      break;
    case 'i': 
      console.log(`\x1b[34m INFO | ${message} \x1b[0m`);
      break;
    case 'w': 
      console.log(`\x1b[33m WARNING | ${message} \x1b[0m`);
      break;
    case 'e': 
      console.log(`\x1b[31m ERROR | ${message} \x1b[0m`);
      break;
    case 'dn': 
      const msg = `\x1b[35m ${date} | ${time} | DEV NOTICE | ${message} \x1b[0m`;
      __DEV__ && console.log(msg);
      informAdmin(msg, config);
      break;
  }
}

export default log;