//Modules in typescript and here we are importing Point module
//If we want to import multiple modules we seperate them  ny commas
//For example import {Point, a , d, cmodule} from 'relative path of the module (only module name) 
// from the current file';

import { Point } from './Point';

let point =new Point(1,2);
point.draw();