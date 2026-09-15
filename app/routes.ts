import {
  type RouteConfig,
  index,
  route,
} from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  route("aviso-legal", "routes/avisolegal.tsx"),
  route("privacidad", "routes/privacidad.tsx"),
  route("contacto", "routes/contacto.tsx"),
  route("faq", "routes/faq.tsx"),
] satisfies RouteConfig;