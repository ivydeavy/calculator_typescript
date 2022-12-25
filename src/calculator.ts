//Basic calculator using TypeScript
import prompts from 'prompts';

let Operator: string;
let FirstOperand: number;
let SecondOperand: number;
TakeUserInput();
async function TakeUserInput(): Promise<void> {
    // != (not equal to operator not working during making this code (reason unknown))
    const OperatorResponse = await prompts({
        type: 'text',
        name: 'operator',
        message: 'Enter operator: ',
        validate: (operator: any) => operator == "+" || operator == "-" || operator == "*" || operator == "/" || operator == "%" ? true : `Invalid Operator!`
    });
    Operator = OperatorResponse.operator;

    const FirstOperandResponse = await prompts({
        type: 'number',
        name: 'firstOperand',
        message: 'Enter first operand: ',
        validate: (firstOperand: any) => typeof firstOperand != "number" ? "Enter a valid value!" : true
    });
    FirstOperand = FirstOperandResponse.firstOperand;


    const SecondOperandResponse = await prompts({
        type: 'number',
        name: 'secondOperand',
        message: 'Enter second operand:',
        validate: (secondOperand: any) => typeof secondOperand != "number" ? "Enter a valid value!" : true
    });
    SecondOperand = SecondOperandResponse.secondOperand;

    SwitchCase(Operator, FirstOperand, SecondOperand);
}

function Addition(FirstOperand: number, SecondOperand: number) {
    console.log(`The addition of ${FirstOperand} and ${SecondOperand} is: ${FirstOperand + SecondOperand}`);
    TakeUserInput();
}

function Subtraction(FirstOperand: number, SecondOperand: number) {
    console.log(`The subtraction of ${FirstOperand} and ${SecondOperand} is: ${FirstOperand - SecondOperand}`);
    TakeUserInput();
}

function Multiplication(FirstOperand: number, SecondOperand: number) {
    console.log(`The multiplication of ${FirstOperand} and ${SecondOperand} is: ${FirstOperand * SecondOperand}`);
    TakeUserInput();
}

function Division(FirstOperand: number, SecondOperand: number) {
    console.log(`The division of ${FirstOperand} and ${SecondOperand} is: ${FirstOperand / SecondOperand}`);
    TakeUserInput();
}

function Modulas(FirstOperand: number, SecondOperand: number) {
    console.log(`The modulas of ${FirstOperand} and ${SecondOperand} is: ${FirstOperand % SecondOperand}`);
    TakeUserInput();
}

function SwitchCase(Operator: string, FirstOperand: number, SecondOperand: number): void {
    switch (Operator) {
        case "+": Addition(FirstOperand, SecondOperand);
            break;
        case "-": Subtraction(FirstOperand, SecondOperand);
            break;
        case "*": Multiplication(FirstOperand, SecondOperand);
            break;
        case "/": Division(FirstOperand, SecondOperand);
            break;
        case "%": Modulas(FirstOperand, SecondOperand);
            break;
        default: return;
    }
}