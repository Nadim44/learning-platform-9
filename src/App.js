import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';
import Main from './components/Layouts/Main';
import Statistics from './components/Statistics/Statistics';
import TopicsDetails from './components/TopicsDetails/TopicsDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Home></Home>
        },
        {
          path: '/statistics',
          loader: async () => {
            return fetch('https://openapi.programming-hero.com/api/quiz')
          },
          element: <Statistics></Statistics>
        },
        {
          path: '/blog',
          element: <Blog></Blog>
        },
        {
          path: '/home/:TopicsId',
          loader: async ({ params }) => {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.TopicsId}`)
          },
          element: <TopicsDetails></TopicsDetails>
        }

      ]
    },

  ])
  return (
    <div className="App">
      <div>

        <RouterProvider router={router}></RouterProvider>
      </div>

    </div>
  );
}

export default App;
