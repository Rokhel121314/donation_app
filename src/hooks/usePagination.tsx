import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import {CategoryType} from '../datas/categoryList';

const usePagination = (props: CategoryType[]) => {
  //
  const [page, setPage] = useState(1);
  const [dataList, setDataList] = useState<CategoryType[]>();
  const pageSize = 4;
  const [isLoading, setIsLoading] = useState(false);

  const paginate = (props: CategoryType[]) => {
    const startIndex = (page - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= props.length) {
      return [];
    } else {
      return props.slice(startIndex, endIndex);
    }
  };

  const loadMoreData = () => {
    // if (isLoading) {
    //   return;
    // }
    setIsLoading(true);
    let newData = paginate(props);
    if (newData.length > 0) {
      setDataList(prevState => {
        if (prevState !== undefined) {
          return [...prevState, ...newData];
        }
      });
      setPage(prev => prev + 1);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    setIsLoading(true);
    const data = paginate(props);
    setDataList(data);
    setPage(prev => prev + 1);
    setIsLoading(false);
  }, []);

  return {dataList, loadMoreData, isLoading, page, pageSize};
};

export default usePagination;
