"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//Basic calculator using TypeScript
const prompts_1 = __importDefault(require("prompts"));
let Operator;
let FirstOperand;
let SecondOperand;
TakeUserInput();
function TakeUserInput() {
    return __awaiter(this, void 0, void 0, function* () {
        // != (not equal to operator not working during making this code (reason unknown))
        const OperatorResponse = yield (0, prompts_1.default)({
            type: 'text',
            name: 'operator',
            message: 'Enter operator: ',
            validate: (operator) => operator == "+" || operator == "-" || operator == "*" || operator == "/" || operator == "%" ? true : `Invalid Operator!`
        });
        Operator = OperatorResponse.operator;
        const FirstOperandResponse = yield (0, prompts_1.default)({
            type: 'number',
            name: 'firstOperand',
            message: 'Enter first operand: ',
            validate: (firstOperand) => typeof firstOperand != "number" ? "Enter a valid value!" : true
        });
        FirstOperand = FirstOperandResponse.firstOperand;
        const SecondOperandResponse = yield (0, prompts_1.default)({
            type: 'number',
            name: 'secondOperand',
            message: 'Enter second operand:',
            validate: (secondOperand) => typeof secondOperand != "number" ? "Enter a valid value!" : true
        });
        SecondOperand = SecondOperandResponse.secondOperand;
        SwitchCase(Operator, FirstOperand, SecondOperand);
    });
}
function Addition(FirstOperand, SecondOperand) {
    console.log(`The addition of ${FirstOperand} and ${SecondOperand} is: ${FirstOperand + SecondOperand}`);
    TakeUserInput();
}
function Subtraction(FirstOperand, SecondOperand) {
    console.log(`The subtraction of ${FirstOperand} and ${SecondOperand} is: ${FirstOperand - SecondOperand}`);
    TakeUserInput();
}
function Multiplication(FirstOperand, SecondOperand) {
    console.log(`The multiplication of ${FirstOperand} and ${SecondOperand} is: ${FirstOperand * SecondOperand}`);
    TakeUserInput();
}
function Division(FirstOperand, SecondOperand) {
    console.log(`The division of ${FirstOperand} and ${SecondOperand} is: ${FirstOperand / SecondOperand}`);
    TakeUserInput();
}
function Modulas(FirstOperand, SecondOperand) {
    console.log(`The modulas of ${FirstOperand} and ${SecondOperand} is: ${FirstOperand % SecondOperand}`);
    TakeUserInput();
}
function SwitchCase(Operator, FirstOperand, SecondOperand) {
    console.log(Operator);
    switch (Operator) {
        case "+":
            Addition(FirstOperand, SecondOperand);
            break;
        case "-":
            Subtraction(FirstOperand, SecondOperand);
            break;
        case "*":
            Multiplication(FirstOperand, SecondOperand);
            break;
        case "/":
            Division(FirstOperand, SecondOperand);
            break;
        case "%":
            Modulas(FirstOperand, SecondOperand);
            break;
        default: return;
    }
}
