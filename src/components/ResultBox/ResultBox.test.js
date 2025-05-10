import ResultBox from './ResultBox';
import {cleanup, render, screen} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

const testCases = [
  {
    amount: 100,
    fromPLNtoUSDExpected: 'PLN 100.00 = $28.57',
    fromPLNtoPLNExpected: 'PLN 100.00 = PLN 100.00',
    fromUSDtoPLNExpected: '$100.00 = PLN 350.00',
    fromUSDtoUSDExpected: '$100.00 = $100.00',
  },
  {
    amount: 20,
    fromPLNtoUSDExpected: 'PLN 20.00 = $5.71',
    fromPLNtoPLNExpected: 'PLN 20.00 = PLN 20.00',
    fromUSDtoPLNExpected: '$20.00 = PLN 70.00',
    fromUSDtoUSDExpected: '$20.00 = $20.00' ,
  },
  {
    amount: 200,
    fromPLNtoUSDExpected: 'PLN 200.00 = $57.14',
    fromPLNtoPLNExpected: 'PLN 200.00 = PLN 200.00',
    fromUSDtoPLNExpected: '$200.00 = PLN 700.00',
    fromUSDtoUSDExpected: '$200.00 = $200.00',
  },
  {
    amount: 345,
    fromPLNtoUSDExpected: 'PLN 345.00 = $98.57',
    fromPLNtoPLNExpected: 'PLN 345.00 = PLN 345.00',
    fromUSDtoPLNExpected: '$345.00 = PLN 1,207.50',
    fromUSDtoUSDExpected: '$345.00 = $345.00',
  },
  {
    amount: -100,
    fromPLNtoUSDExpected: 'Wrong value…',
    fromPLNtoPLNExpected: 'Wrong value…',
    fromUSDtoPLNExpected: 'Wrong value…',
    fromUSDtoUSDExpected: 'Wrong value…',
  },
  {
    amount: -40,
    fromPLNtoUSDExpected: 'Wrong value…',
    fromPLNtoPLNExpected: 'Wrong value…',
    fromUSDtoPLNExpected: 'Wrong value…',
    fromUSDtoUSDExpected: 'Wrong value…',
  },
  {
    amount: -0.1,
    fromPLNtoUSDExpected: 'Wrong value…',
    fromPLNtoPLNExpected: 'Wrong value…',
    fromUSDtoPLNExpected: 'Wrong value…',
    fromUSDtoUSDExpected: 'Wrong value…',
  },
];

describe('Component ResultBox', () => {
  it('should render without crashing', () => {
    render(<ResultBox from="PLN" to="USD" amount={100} />);
  });
  it('should render proper info about conversion when PLN -> USD', () => {
    for (const testCase of testCases) {
      render(<ResultBox from="PLN" to="USD" amount={testCase.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testCase.fromPLNtoUSDExpected);
      cleanup();
    }
  });
  it('should render proper info about conversion when USD -> PLN', () => {
    for (const testCase of testCases) {
      render(<ResultBox from="USD" to="PLN" amount={testCase.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testCase.fromUSDtoPLNExpected);
      cleanup();
    }
  });
  it('should render proper info about conversion when PLN -> PLN', () => {
    for (const testCase of testCases) {
      render(<ResultBox from="PLN" to="PLN" amount={testCase.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testCase.fromPLNtoPLNExpected);
      cleanup();
    }
  });
  it('should render proper info about conversion when USD -> USD', () => {
    for (const testCase of testCases) {
      render(<ResultBox from="USD" to="USD" amount={testCase.amount} />);
      const output = screen.getByTestId('output');
      expect(output).toHaveTextContent(testCase.fromUSDtoUSDExpected);
      cleanup();
    }
  });
});