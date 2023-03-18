import FilterableProductTable from '@/app/components/filterableProductTable';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from './page.module.css'
import Navigation from '@/app/components/navigation';

const PRODUCTS = [
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}
];

const Home = () => {
  return (
    <>
      <Navigation />
      <main className={styles.main}>
        <FilterableProductTable products={PRODUCTS} />
      </main>
    </>
  );
};

export default Home;
