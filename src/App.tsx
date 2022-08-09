import React from 'react';
import './App.css';
import { useGetPosts } from './lib/api-hooks';
import { FetchState } from './types';

function App() {
   const [posts, fetchState, getPosts] = useGetPosts();
  return (
    <div className="container">
      <h1>React TypeScript API hooks practice</h1>
      {
         fetchState === FetchState.SUCCESS && (
            <>
               <p>Yo. click the button plz.</p>
               <button onClick={getPosts}>Get Posts</button>
            </>
         )
      }
    </div>
  );
}

export default App;
