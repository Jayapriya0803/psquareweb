import { type RouteConfig, index,route } from "@react-router/dev/routes";

export default [
    index("routes/home/index.tsx"),
    route('feedback','./routes/feedback/index.tsx'),
    route('contactus','./routes/contactus/index.tsx'),
    route('products','./routes/products/index.tsx')
    ]satisfies RouteConfig;
