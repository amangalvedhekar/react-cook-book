import React, {useEffect, useState} from 'react';
import {CategoriesList} from 'src/fetcher/types';

export default function Fetch() {
  const [categories, setCategories] = useState<CategoriesList[] | []>([]);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/coins/categories/list');
        if(response.ok) {
          const body = await response.json();
          setCategories(body);
        } else {
          setIsError(true);
        }
      } catch (e) {
        setIsError(true);
      }
    })();
    return () => {
      setCategories([]);
      setIsError(false);
    }
  },[]);
  return (
    <>
      {isError &&<p>error happened</p>}
      {categories.length > 0 &&<ul>
        {categories.map((category) => (<li key={category.category_id}>{category.name}</li>))}
      </ul>}
    </>
  );
}
