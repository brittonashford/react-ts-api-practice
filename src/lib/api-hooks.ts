import { FetchState, PostData } from "../types";
import { useState } from 'react';
import axios from "axios";

export function useGetPosts() {
   const[ fetchState, setFetchState ] = useState(FetchState.DEFAULT);
   const [ posts, setPosts ] = useState<Array<PostData>>([]);
   const getPosts = async () => {
      try {
         setFetchState(FetchState.LOADING);

         const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
         const data = response.data as Array<PostData>;

         setPosts(data);
         setFetchState(FetchState.SUCCESS);
      } catch (error) {
         setFetchState(FetchState.ERROR)
      }
   };

   return [posts, fetchState, getPosts] as const;
}