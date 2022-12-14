import { memo } from 'react';

const SelectCurrency = ({
  value,
  onChange,
  type = 'from',
  options,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  type: string;
  options: { [name in string]: { currency_name: string } };
}) => {
  return (
    <select
      value={value}
      className="w-full p-2 border border-stone-200 rounded-lg"
      onChange={onChange}
      name={type}
    >
      {Object.entries(options).map(([code, currency]) => (
        <option
          key={code}
          value={code}
        >{`${code} - ${currency.currency_name}`}</option>
      ))}
    </select>
  );
};

export default memo(SelectCurrency);
