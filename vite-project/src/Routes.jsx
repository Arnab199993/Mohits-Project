import App from "./App";
import Categories from "./Components/Categories";
import Contacts from "./Components/Contacts";
import HomePage from "./Components/HomePage";
import OurBlogs from "./Components/OurBlogs";

const Routes = [
    {
        path: "/",
        element: <App />
    },
    {
        path: "homepage",
        element: <HomePage />
    },
    {
        path: "categories",
        element: <Categories />
    },
    {
        path: "contacts",
        element: <Contacts />
    },
    {
        path: "ourblogs",
        element: <OurBlogs />
    },
]
export default Routes