import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { getCategories } from "../../Api";
import Loading from '../../Components/Loading';

function Welcome() {
  const [showLoading, setShowLoading] = useState(false);
  const [categoryList, setCategoryList] = useState([]);

  const getCategoryList = async () => {
    setShowLoading(true);
    const categories = await getCategories();
    setCategoryList(categories);
    setShowLoading(false)
  };

  useEffect(() => {
    getCategoryList();
  }, []);

  return (
    <div className="Welcome">
      {showLoading && (
        <Loading />
      )}

      <div className="Welcome-header">
        <h1>Welcome</h1>
        <h3>Select category</h3>

        <ol>
          {categoryList.map((category) => (
            <li key={category.idCategory}>
              <Link to={`/category/${category.idCategory}/${category.nameCategory}`}>{category.nameCategory}</Link>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Welcome;