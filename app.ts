let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "Check";

if (typeof userInput === "string") {
  userName = userInput;
}

// This function never produces a value
function generateError(message: string, code: number): never {
  throw { message: message, errorCode: code };
}

generateError("An error occured", 500);
