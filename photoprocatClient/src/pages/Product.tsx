// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import required modules
import Layout from '../app/Layout';
import ProductMain from '../components/product/ProductMain';

const Product = () => {
  return (
    <Layout>
      <ProductMain />
    </Layout>
  );
};

export default Product;
