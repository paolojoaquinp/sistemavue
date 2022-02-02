<template>
<v-app id="app">
    <v-navigation-drawer v-model="drawer" :clipped="$vuetify.breakpoint.lgAndUp" app v-if="logueado">
        <v-list dense>
            <template v-if="esAdministrador || esAlamacenero || esVendedor">
                <v-list-item :to="{name: 'Home'}">
                    <v-list-item-action>
                        <v-icon>home</v-icon>
                    </v-list-item-action>
                    <v-list-item-title>
                        Inicio
                    </v-list-item-title>
                </v-list-item>
            </template>
            <template v-if="esAdministrador || esAlamacenero">
                <v-list-group>
                    <v-list-item slot="activator">
                        <v-list-item-content>
                            <v-list-item-title>
                                Almacen
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item :to="{name: 'categoria'}">
                        <v-list-item-icon>
                            <v-icon>table_chart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Categorias
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="{name: 'articulo'}">
                        <v-list-item-icon>
                            <v-icon>table_chart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Articulos
                        </v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </template>
            <template v-if="esAdministrador || esAlamacenero">
                <v-list-group>
                    <v-list-item slot="activator">
                        <v-list-item-content>
                            <v-list-item-title>
                                Compras
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item :to="{name: 'ingreso'}">
                        <v-list-item-icon>
                            <v-icon>table_chart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Ingresos
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="{name: 'proveedor'}">
                        <v-list-item-icon>
                            <v-icon>table_chart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Proveedores
                        </v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </template>
            <template v-if="esAdministrador || esVendedor">
                <v-list-group>
                    <v-list-item slot="activator">
                        <v-list-item-content>
                            <v-list-item-title>
                                Ventas
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item :to="{name: 'venta'}">
                        <v-list-item-icon>
                            <v-icon>table_chart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Ventas
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="{name: 'cliente'}">
                        <v-list-item-icon>
                            <v-icon>table_chart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Clientes
                        </v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </template>
            <template v-if="esAdministrador">
                <v-list-group>
                    <v-list-item slot="activator">
                        <v-list-item-content>
                            <v-list-item-title>
                                Accesos
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item :to="{name: 'usuario'}">
                        <v-list-item-icon>
                            <v-icon>table_chart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Usuarios
                        </v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </template>
            <template v-if="esAdministrador || esAlamacenero || esVendedor">
                <v-list-group>
                    <v-list-item slot="activator">
                        <v-list-item-content>
                            <v-list-item-title>
                                Consultas
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                    <v-list-item :to="{name: ''}">
                        <v-list-item-icon>
                            <v-icon>table_chart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Consulta Compras
                        </v-list-item-title>
                    </v-list-item>
                    <v-list-item :to="{name: ''}">
                        <v-list-item-icon>
                            <v-icon>table_chart</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>
                            Consulta Ventas
                        </v-list-item-title>
                    </v-list-item>
                </v-list-group>
            </template>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar :clipped-left="$vuetify.breakpoint.lgAndUp" app color="blue darken-3" dark>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title style="width: 300px" class="ml-0 pl-4">
            <span class="hidden-sm-and-down">Sistema</span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-row align="center" justify="end" style="margin-right:2%;">
            <v-btn item @click="salir()" icon v-if="logueado">
                <v-icon left>logout</v-icon> Salir
            </v-btn>
            <v-btn item :to="{name: 'login'}" icon v-else>
                <v-icon>apps</v-icon> Login
            </v-btn>
        </v-row>
    </v-app-bar>
    <v-main>
        <v-container class="fill-height" fluid>
            <v-slide-y-transition mode="out-in">
                <router-view />
            </v-slide-y-transition>
        </v-container>
    </v-main>
    <v-footer color="primary lighten-1" padless>
        <v-row justify="center" no-gutters>
            <v-btn color="white" text rounded class="my-2">
            </v-btn>
            <v-col class="primary lighten-2 py-4 text-center white--text" cols="12">
                {{ new Date().getFullYear() }} — <strong>Paolo Joaquin</strong>
            </v-col>
        </v-row>
    </v-footer>
</v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld';

export default {
    name: 'App',
    data() {
        return {
            drawer: true,
        }
    },
    computed: {
        logueado() {
            return this.$store.state.usuario;
        },
        esAdministrador() {
            return this.$store.state.usuario && this.$store.state.usuario.rol == 'Administrador'
        },
        esAlamacenero() {
            return this.$store.state.usuario && this.$store.state.usuario.rol == 'Almacenero'
        },
        esVendedor() {
            return this.$store.state.usuario && this.$store.state.usuario.rol == 'Vendedor'
        }
    },
    created() {
        this.$store.dispatch("autoLogin");
    },
    methods: {
        salir() {
            this.$store.dispatch("salir");
        }
    },
}
</script>
