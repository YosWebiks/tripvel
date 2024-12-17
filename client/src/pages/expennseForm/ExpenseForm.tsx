import {
  Button,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerHeaderTitle,
  Dropdown,
  Input,
  Option,
} from '@fluentui/react-components';
import { useState } from 'react';
import { expenseCategories } from '../../types/expenseCategories';

export default function ExpenseForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [expType, setExpType] = useState('');
  const [amount, setAmount] = useState(0);
  const [desc, setDesc] = useState('');

  const handleNewExpense = async () => {
    try {
      console.log('HERE');
      const res = await fetch('http://localhost:3000/api/expenses', {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          [expType]: amount,
          desc,
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Button
        appearance="primary"
        shape="circular"
        style={{
          position: 'fixed',
          bottom: '2em',
          right: '2em',
        }}
        size="large"
        onClick={() => setIsOpen(!isOpen)}
      >
        Add Expense
      </Button>
      <Drawer open={isOpen} position="bottom">
        <DrawerHeader>
          <DrawerHeaderTitle
            action={
              <Button
                appearance="subtle"
                aria-label="Close"
                icon={<>X</>}
                onClick={() => setIsOpen(false)}
              />
            }
          >
            Add New Expense
          </DrawerHeaderTitle>
        </DrawerHeader>
        <DrawerBody>
          {/* Expense Type */}
          <Dropdown
            value={expType}
            appearance="underline"
            onOptionSelect={(e, data) => {
              setExpType(data.optionValue!);
            }}
            placeholder="Please select"
          >
            {expenseCategories.map((exc) => (
              <Option key={exc.id} value={exc.id}>
                {exc.display}
              </Option>
            ))}
            <Option key={'const'} value={'const'}>
              {'Const'}
            </Option>
          </Dropdown>
          {/* amount */}
          <div className="">
            <Input
              appearance="underline"
              type="number"
              style={{ width: '80%', margin: '2em 0' }}
              contentBefore={'₪'}
              value={amount.toString()}
              onChange={(e) => setAmount(e.target.valueAsNumber)}
            />
          </div>
          {/* description */}
          {expType == 'const' && (
            <Input
              appearance="underline"
              type="text"
              placeholder="Description"
              style={{ width: '80%', marginBottom: '2em' }}
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
            />
          )}
          {/* action */}
          <div className="">
            <Button
              appearance="primary"
              onClick={handleNewExpense}
              disabled={!amount || !expType || (!desc && expType == 'const')}
            >
              Save
            </Button>
          </div>
        </DrawerBody>
      </Drawer>
    </>
  );
}
