import 'swiper/css';
import "swiper/css/navigation";
import { MainCatalog } from '../components/catalog/MainCatalog';
import Layout from '../app/Layout';


 const Catalog = () => {
  return (
    <Layout>
      <MainCatalog/>
    </Layout>
  )
}

export default Catalog