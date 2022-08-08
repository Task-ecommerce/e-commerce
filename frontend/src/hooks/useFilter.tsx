import { useState } from 'react';

interface TargetValues {
  name: string;
  checked: boolean;
}

interface DefaultFilters {
  name: string;
  checked: boolean;
}

export default function useFilter(defaultFilter: DefaultFilters | any) {
  const [filter, setFilter] = useState(defaultFilter);

  function handleFilter({ name, checked }: TargetValues) {
    let container;
    if (checked) {
      container = { ...filter, [name]: checked };
    } else {
      container = { ...filter, [name]: checked };
      const asArray = Object.entries(container);
      const filtered = asArray.filter(([key, value]) => value === true);
      const justString = Object.fromEntries(filtered);
      container = justString;
    }

    setFilter(container);
  }

  return [filter, handleFilter];
}
