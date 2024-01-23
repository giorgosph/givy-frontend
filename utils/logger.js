import informAdmin from "./APIs/informAdmin";
import { currentDate } from "./dataFormater";

const { date, time } = currentDate();

const log = (type, message, token = false, resetToken=false) => { 
  if(!__DEV__ && type !== 'dn') return;

  switch(type) {
    case 'd': 
      console.log(`${date} | ${time} | DEBUG | ${message} \x1b[0m`);
      break;
    case 'i': 
      console.log(`\x1b[34m${date} | ${time} | INFO | ${message} \x1b[0m`);
      break;
    case 'w': 
      console.log(`\x1b[33m${date} | ${time} | WARNING | ${message} \x1b[0m`);
      break;
    case 'e': 
      console.log(`\x1b[31m${date} | ${time} | ERROR | ${message} \x1b[0m`);
      break;
    case 'dn': 
      const msg = `\x1b[35m${date} | ${time} | DEV NOTICE | ${message} \x1b[0m`;
      __DEV__ && console.log(msg);
      informAdmin(msg, token, resetToken);
      break;
  }
}

export default log;