import { useState } from 'react';

export default function ScientificCalculator() {
  const [display, setDisplay] = useState('0');
  const [equation, setEquation] = useState('');

  const handlePress = (val: string) => {
    if (display === '0' || display === 'Error') {
      setDisplay(val);
    } else {
      setDisplay(display + val);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setEquation('');
  };

  const handleEvaluate = () => {
    try {
      let parseStr = display
        .replace(/sin\(/g, 'Math.sin(')
        .replace(/cos\(/g, 'Math.cos(')
        .replace(/tan\(/g, 'Math.tan(')
        .replace(/log\(/g, 'Math.log10(')
        .replace(/ln\(/g, 'Math.log(')
        .replace(/sqrt\(/g, 'Math.sqrt(')
        .replace(/\^/g, '**')
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E');
      
      const result = new Function('return ' + parseStr)();
      setEquation(display + ' =');
      setDisplay(String(Number(result.toFixed(8))));
    } catch (err) {
      setDisplay('Error');
    }
  };

  const buttons = [
    ['sin(', 'cos(', 'tan(', 'C'],
    ['log(', 'ln(', 'sqrt(', '^'],
    ['7', '8', '9', '/'],
    ['4', '5', '6', '*'],
    ['1', '2', '3', '-'],
    ['0', '.', '=', '+'],
    ['(', ')', 'π', 'e']
  ];

  return (
    <div className="max-w-md mx-auto p-8 rounded-[32px] glass shadow-xl border border-white/50 bg-[#1E1E1E] text-white">
      <div className="bg-[#2A2A2A] rounded-2xl p-4 mb-6 text-right shadow-inner min-h-[100px] flex flex-col justify-end">
        <div className="text-gray-400 text-sm mb-1 font-mono tracking-widest">{equation}</div>
        <div className="text-4xl font-mono tracking-wider overflow-hidden">{display}</div>
      </div>
      <div className="grid gap-3">
        {buttons.map((row, i) => (
          <div key={i} className="grid grid-cols-4 gap-3">
            {row.map((btn) => (
              <button
                key={btn}
                onClick={() => {
                  if (btn === 'C') handleClear();
                  else if (btn === '=') handleEvaluate();
                  else handlePress(btn);
                }}
                className={`p-4 rounded-xl font-bold text-lg font-mono transition-all hover:scale-105 active:scale-95 ${
                  btn === '=' ? 'bg-montessori-blue text-white shadow-[0_0_15px_rgba(43,84,126,0.6)]' :
                  btn === 'C' ? 'bg-montessori-red text-white' :
                  ['/','*','-','+','^'].includes(btn) ? 'bg-white/20 text-montessori-yellow' :
                  'bg-white/10 hover:bg-white/20 text-white'
                }`}
              >
                {btn}
              </button>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
