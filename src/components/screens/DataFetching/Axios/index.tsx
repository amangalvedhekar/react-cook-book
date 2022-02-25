import React, {useEffect, useState} from 'react';
import {getCategories} from 'src/fetcher';
import {CategoriesList} from 'src/fetcher/types';

export default function AxiosFetch() {
  const [categories, setCategories] = useState<CategoriesList[] | []>([]);
  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })()
  },[]);

  return (
    <ul>
      {categories.map((category) => (<li key={category.category_id}>{category.name}</li>))}
    </ul>
  );
}
