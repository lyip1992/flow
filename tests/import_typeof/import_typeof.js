/**
 * @flow
 */

///////////////////////////////////////////////////
// == Importing Class Typeof (Default Export) == //
///////////////////////////////////////////////////

import typeof ClassFoo1T from "./ExportDefault_Class";
import ClassFoo1 from "./ExportDefault_Class";

var a1: ClassFoo1T = ClassFoo1;
var a2: ClassFoo1T = new ClassFoo1(); // Error: ClassFoo1 (inst) ~> ClassFoo1 (class)
new ClassFoo1T(); // Error: ClassFoo1T is not bound to a value

/////////////////////////////////////////////////
// == Importing Class Typeof (Named Export) == //
/////////////////////////////////////////////////

import typeof {ClassFoo2 as ClassFoo2T} from "./ExportNamed_Class";
import {ClassFoo2} from "./ExportNamed_Class";

var b1: ClassFoo2T = ClassFoo2;
var b2: ClassFoo2T = new ClassFoo2(); // Error: ClassFoo2 (inst) ~> ClassFoo2 (class)
new ClassFoo2T(); // Error: ClassFoo2T is not bound to a value

///////////////////////////////////////////////////////
// == Importing Class Typeof (CJS Default Export) == //
///////////////////////////////////////////////////////

import typeof ClassFoo3T from "./ExportCJSDefault_Class";
import ClassFoo3 from "./ExportCJSDefault_Class";

var c1: ClassFoo3T = ClassFoo3;
var c2: ClassFoo3T = new ClassFoo3(); // Error: ClassFoo3 (inst) ~> ClassFoo3 (class)

/////////////////////////////////////////////////////
// == Importing Class Typeof (CJS Named Export) == //
/////////////////////////////////////////////////////

import typeof {ClassFoo4 as ClassFoo4T} from "./ExportCJSNamed_Class";
import {ClassFoo4} from "./ExportCJSNamed_Class";

var d1: ClassFoo4T = ClassFoo4;
var d2: ClassFoo4T = new ClassFoo4(); // Error: ClassFoo4 (inst) ~> ClassFoo4 (class)

//////////////////////////////////////////////
// == Import Typeof Alias (Named Export) == //
//////////////////////////////////////////////

import typeof {AliasFoo3} from "./ExportNamed_Alias"; // Error: Can't `import typeof` type aliases!

////////////////////////////////////////////////
// == Import Typeof Alias (Default Export) == //
////////////////////////////////////////////////

// TODO: No support for this right now. It's most likely possible, but it's
//       unclear how useful it is at the moment and it entails a little
//       more work than named type exports, so I'm punting on it for now.

///////////////////////////////////////////////////////////////
// == Import Typeof With Non-Class Value (Default Export) == //
///////////////////////////////////////////////////////////////

import typeof num from "./ExportDefault_Number";

var f1: num = 42;
var f2: num = 'asdf'; // Error: string ~> number

/////////////////////////////////////////////////////////////
// == Import Typeof With Non-Class Value (Named Export) == //
/////////////////////////////////////////////////////////////

import typeof {num} from "./ExportNamed_Number";

var g1: num = 42;
var g2: num = 'asdf'; // Error: string ~> number

///////////////////////////////////////////////////////////////////
// == Import Typeof With Non-Class Value (CJS Default Export) == //
///////////////////////////////////////////////////////////////////

import typeof num from "./ExportCJSDefault_Number";

var h1: num = 42;
var h2: num = 'asdf'; // Error: string ~> number

/////////////////////////////////////////////////////////////////
// == Import Typeof With Non-Class Value (CJS Named Export) == //
/////////////////////////////////////////////////////////////////

import typeof {num} from "./ExportCJSNamed_Number";

var i1: num = 42;
var i2: num = 'asdf'; // Error: string ~> number
