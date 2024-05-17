
import styles from './main.module.css';
import { fetchProducts } from '../lib/api';
import { MdKeyboardArrowLeft } from "react-icons/md";
import Sidebar from './Sidebar';
import { truncateText } from '../lib/utils';
import { IoIosArrowDown } from "react-icons/io";

const Main = async() => {
  
    const products = await fetchProducts();
    const maxTitleLength = 20; 

    return (
      <div className={styles.container}>
        <header className={styles.mainHeader}>
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </header>
        <div className={styles.middle}>
          <span className={styles.spanLeft}>
            <p>3425 ITEMS</p>
            <span className={styles.spanRight}>
              <MdKeyboardArrowLeft />
              <p>HIDE FILTER</p>
            </span>
          </span>
          <p style={{display:"flex",alignItems:"center",gap:"1rem"}}>RECOMMENDED <IoIosArrowDown/></p>
        </div>
        <div className={styles.mainBody}>
          <Sidebar/>
        <main className={styles.main}>
          <div className={styles.grid}>
            {products.map((product) => (
              <div key={product.id} className={styles.card}>
                <div className={styles.imgContainer}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className={styles.image}
                  />
                </div>
                <div>
                  <h2>{truncateText(product.title,maxTitleLength)}</h2>
                  <p>Sign in or create an account to see pricing</p>
                </div>
              </div>
            ))}
          </div>
        </main>
        </div>
      </div>
    );
}

export default Main
