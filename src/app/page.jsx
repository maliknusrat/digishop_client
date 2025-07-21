
import Banner from "./componenets/Banner";
import Banner2 from "./componenets/BannerTwo";
import Categories from "./componenets/Categories";
import ContactUs from "./componenets/ContactUs";
import Discover from "./componenets/Discover";
import OrderProcess from "./componenets/OrderProcess";
import Subscriptions from "./componenets/Subscriptions";
import Testimonial from "./componenets/Testimonials";


export default function Home() {
  return (
    <div className="bg-gradient-to-br from-[#0d0f1a] to-[#111827]">
     <Banner></Banner>
     <OrderProcess></OrderProcess>
     <Discover></Discover>
     <Banner2></Banner2>
     <Testimonial></Testimonial>
     <Categories></Categories>
     <Subscriptions></Subscriptions>
     <ContactUs></ContactUs>
    </div>
  );
}
