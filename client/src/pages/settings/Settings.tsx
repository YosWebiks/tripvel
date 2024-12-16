import { Button, Input, Label, Text } from '@fluentui/react-components';
import { FormEvent, useEffect, useState } from 'react';
import { expenseCategories } from '../../types/expenseCategories';

export default function Settings() {
  const hadnleSubmit = async (e: FormEvent) => {
    e.preventDefault();
  };
  const [state, setState] = useState<{ [key: string]: number }>({});
  const [isLoading, setIsLoading] = useState(true);

  const handleChange = (key: string, value: number) => {
    setState({ ...state, [key]: value });
  };

  const getSettingsData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/settings');
      const data = await res.json();
      setState(data);
      setIsLoading(false);
    } catch (err) {}
  };

  useEffect(() => {}, []);

  return (
    <div>
      <form onSubmit={hadnleSubmit}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '80%',
            padding: '1em',
          }}
        >
          <Label htmlFor={'total'}>Total</Label>
          <Input
            value={state.total.toString()}
            onChange={(e) => handleChange('total', e.target.valueAsNumber)}
            appearance="underline"
            type="number"
            prefix="₪"
            id={'total'}
          />
        </div>
        {expenseCategories.map((expense) => (
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '80%',
              padding: '1em',
            }}
          >
            <Label htmlFor={expense.id}>{expense.display}</Label>
            <Input
              value={state[expense.id].toString()}
              onChange={(e) => handleChange(expense.id, e.target.valueAsNumber)}
              contentBefore={'₪'}
              appearance="underline"
              type="number"
              size="large"
              id={expense.id}
            />
          </div>
        ))}
        <Button appearance="primary" type="submit">
          Save
        </Button>
      </form>
    </div>
  );
}
