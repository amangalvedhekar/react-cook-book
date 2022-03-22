import useSwr from 'swr';
import {getFetcher} from 'src/fetcher/swrFetcher';
import React from 'react';
import {CategoriesList} from 'src/fetcher/types';

export default function UsingSWR() {
  const {data, isValidating, error} = useSwr('/categories/list', getFetcher);
  return (
    <>
      {isValidating && <p>loading</p>}
      {data && <ul>
        {data.map((category: CategoriesList) => (<li key={category.category_id}>{category.name}</li>))}
      </ul>}
      {error && <p>Error happened</p>}
    </>
  );
}
