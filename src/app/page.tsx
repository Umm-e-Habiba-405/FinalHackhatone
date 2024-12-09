import Image from "next/image";
import Hero from "./Hero";
import Header from "./Header";
import { ProductGrid } from "./ProductGrid";
import { FeaturesGrid } from "./FeaturesGrid";
import Shops from "./Shops";
import Unique from "./Unique";
import { TrendingProducts } from "./TrendingProducts";
import ContinueTrendingProducts from "./ContinueTrendingProducts";
import Discount from "./Discount";
import TopCategories from "./TopCategories";
import { Newsletter } from "./NewsLetter";
 
  import LatestBelog from "./LatestBelog";
import { Footer } from "./Footer";

export default function Home() {
  return (
    <div>
     <Hero/>
     <ProductGrid/>
     <FeaturesGrid/>
     <Shops/>
     <Unique/>
     <TrendingProducts/>
     <ContinueTrendingProducts/>
     <Discount/>
     <TopCategories/>
     <Newsletter/>
     <LatestBelog/>
     <Footer/>
   
     
    </div>
  );
}
