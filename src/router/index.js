import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index'
import Home from '../views/Home.vue'
import Categoria from '../components/Categoria.vue'
import Login from '../components/Login.vue'
import Usuario from '../components/Usuario.vue'
import Articulo from '../components/Articulo.vue'
import Cliente from '../components/Cliente.vue'
import Proveedor from '../components/Proveedor.vue'
import Ingreso from '../components/Ingreso.vue'
import Venta from '../components/Venta.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      administador: true,
      almacenero: true,
      vendedor: true
    }
  },
  {
    path: '/categoria',
    name: 'categoria',
    component: Categoria,
    meta: {
      administador: true,
      almacenero: true
    }
  },
  {
    path: '/articulo',
    name: 'articulo',
    component: Articulo,
    meta: {
      administador: true,
      almacenero: true
    }
  },
  {
    path: '/ingreso',
    name: 'ingreso',
    component: Ingreso,
    meta: {
      administador: true,
      almacenero: true
    }
  },
  {
    path: '/cliente',
    name: 'cliente',
    component: Cliente,
    meta: {
      administador: true,
      vendedor: true
    }
  },
  {
    path: '/venta',
    name: 'venta',
    component: Venta,
    meta: {
      administador: true,
      vendedor: true
    }
  },
  {
    path: '/proveedor',
    name: 'proveedor',
    component: Proveedor,
    meta: {
      administador: true,
      almacenero: true
    }
  },
  {
    path: '/usuario',
    name: 'usuario',
    component: Usuario,
    meta: {
      administador: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      libre: true
    }
  }
];

var router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
router.beforeEach((to, from, next) => {
  if(to.matched.some(record => record.meta.libre)){
    next();
  } else if(store.state.usuario && store.state.usuario.rol == 'Administrador'){
    if(to.matched.some(record => record.meta.administador)){
      next();
    }
  } else if(store.state.usuario && store.state.usuario.rol == 'Vendedor'){
    if(to.matched.some(record => record.meta.vendedor)){
      next();
    }
  } else if(store.state.usuario && store.state.usuario.rol == 'Almacenero'){
    if(to.matched.some(record => record.meta.almacenero)){
      next();
    }
  }else{
    next({name: 'login'});
  }
});
export default router
