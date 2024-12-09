import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SortButton from './SortButton';
import data from './data.json';

const App = () => {
  const [products, setProducts] = useState([]);
  const [sortOrder, setSortOrder] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setProducts(data);
    };
    fetchData();
  }, []);

  const handleSort = () => {
    const sortedProducts = [...products].sort((a, b) =>
      sortOrder ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
    );
    setProducts(sortedProducts);
    setSortOrder(!sortOrder);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Список продуктов</h1>
      {products.length === 0 ? (
        <div className="text-center">Загрузка данных...</div>
      ) : (
        <>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>

                <th>Название</th>
                <th>Цена</th>
                <th>Количество</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <SortButton onSort={handleSort} sortOrder={sortOrder} />
        </>
      )}
    </div>
  );
};

export default App;