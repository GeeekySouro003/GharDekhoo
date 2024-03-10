import React from 'react'
import {useQuery} from 'react-query';
import { getAllProperties } from '../utils/Api';
const useProperties = () => {

    const{data,isError,isLoading,refetch}=useQuery(
        "allProperties", //queryKey
        getAllProperties,
        {refetchOnWindowFocus:false}
    );
  return (
    data,isError,isLoading,refetch
  )
}

export default useProperties