import React, { useState, useEffect } from 'react';

const NewsApp = () => {
  const [newsData, setNewsData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(6);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=tesla&from=2024-01-16&sortBy=publishedAt&apiKey=47adf22e662d431582b2a211c66e7a6e'
        );

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setNewsData(result.articles);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const indexOfLastNews = currentPage * itemsPerPage;
  const indexOfFirstNews = indexOfLastNews - itemsPerPage;
  const currentNews = newsData.slice(indexOfFirstNews, indexOfLastNews);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className='container mx-auto mb-20 px-4'>
      <header className='bg-blue-500 p-4 mb-8'>
        <h1 className='text-white text-2xl font-bold'>AI News Agency</h1>
      </header>
      {isLoading && <p className='text-center text-gray-700'>Loading...</p>}
      {error && (
        <p className='text-center text-red-500'>Error: {error.message}</p>
      )}
      <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4'>
        {currentNews.map((article, index) => (
          <div key={index} className='bg-white p-4 rounded shadow'>
            <h2 className='text-xl font-bold mb-2'>{article.title}</h2>
            <p className='text-gray-600 mb-4'>{article.description}</p>
            <img
              src={article.urlToImage}
              alt={article.title}
              className='w-full h-48 object-cover mb-4 rounded'
            />
            <a
              href={article.url}
              className='text-blue-500 font-bold hover:underline'
              target='_blank'
              rel='noopener noreferrer'
            >
              Read More
            </a>
          </div>
        ))}
      </div>
      <div className='mt-8'>
        <nav className='flex justify-center'>
          {Array.from(
            { length: Math.ceil(newsData.length / itemsPerPage) },
            (_, index) => (
              <button
                key={index}
                className={`mx-2 p-2 rounded ${
                  index + 1 === currentPage
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-300 text-gray-700'
                }`}
                onClick={() => paginate(index + 1)}
              >
                {index + 1}
              </button>
            )
          )}
        </nav>
      </div>
    </div>
  );
};

export default NewsApp;
