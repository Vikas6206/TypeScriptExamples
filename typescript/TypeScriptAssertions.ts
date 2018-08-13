/*Type assertion exapmple 1 */
let message;
message = 'abc';
let endsWithC = (<string> message).endsWith('c');
let alternativeWay=(message as string).endsWith('c');
// Note that this does not change the type of the varibale 
// Its purily the way to tell the compiler that the given variable is of
// specific type and it helps to use the intellisense





