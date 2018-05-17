
// IT DOIESN'T WORK
export default function startErrorLogger() {
  window.onerror = (message, file, line, column, errorObject) => {
    column = column || (window.event && window.event.errorCharacter);  // eslint-disable-line no-param-reassign
    const stack = errorObject ? errorObject.stack : null;

    // trying to get stack from IE
    // if (!stack) {
    //   const stack = []; // eslint-disable-line no-shadow
    //   let f = arguments.callee.caller;
    //   while (f) {
    //     stack.push(f.name);
    //     f = f.caller;
    //   }
    //   errorObject.stack = stack;  // eslint-disable-line no-param-reassign
    // }

    const data = {
      message,
      file,
      line,
      column,
      errorStack: stack,
    };

    console.log(data);

        // here I make a call to the server to log the error

        // the error can still be triggered as usual, we just wanted to know what's happening on the client side
    return false;
  };
}
