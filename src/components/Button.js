import { useContext } from "react"
import { CalcContext } from "../context/CalcContext"

const getStyleName = btn => {
    const className = {
        '=': 'equals',
        'x': 'opt',
        '-': 'opt',
        '+': 'opt',
        '/': 'opt'
    }
    return className[btn]
}

const Button = ({ value }) => {
    const { calc, setCalc } = useContext(CalcContext);
    console.log(setCalc)

    // User click comma
    const dotClick = () => {
        setCalc({
            ...calc,
            num: !calc.num.toString().includes('.') ? calc.num + value : calc.num,
        })
    }

    const resetClick = () => {
        setCalc({ sign: '', num: 0, res: 0 })
    }

    // User Click Number
    const handleClickButton = () => {
        const numberString = value.toString()

        let numberValue;
        if (numberString === '0' && calc.num === 0) {
            numberValue = "0"
        } else {
            numberValue = Number(calc.num + numberString)
        }

        setCalc({
            ...calc,
            num:numberValue
        })  
    } 
    // User Click Operation
    const signClick = () => {
        setCalc({
            sign:value,
            res: !calc.res && calc.num ? calc.num : calc.res,
            num: 0
        })
    }
    // User Click equals
    const equalsClick = () => {
        if(calc.res && calc.num) {
            const math = (a, b, sign) => {
                const result = {
                    '+': (a, b) => a + b, 
                    '-': (a, b) => a - b, 
                    'x': (a, b) => a * b, 
                    '/': (a, b) => a / b, 
                }
                return result[sign](a, b);
            }
            setCalc({
                res: math(calc.res, calc.num, calc.sign),
                sign: '',
                num: 0
            })
        }

    }

const handleBtnClick = () => {
    const results = {
        '.': dotClick,
        'C': resetClick,
        '/': signClick,
        'x': signClick,
        '-': signClick,
        '+': signClick,
        '=': equalsClick,
        }

    if (results[value]) {
        return results[value]()
    } else {
        return handleClickButton()
    }
}
return (
    <button onClick={handleBtnClick} className={`${getStyleName(value)} button`}>{value}</button>
)
}

export default Button