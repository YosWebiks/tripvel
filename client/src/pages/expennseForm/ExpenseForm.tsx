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
          <Input
            appearance="underline"
            type="number"
            value={amount.toString()}
            onChange={(e) => setAmount(e.target.valueAsNumber)}
          />
          {/* action */}
          <Button appearance="primary" disabled={!amount || !expType}>
            Save
          </Button>
        </DrawerBody>
      </Drawer>
    </>
  );
}
