<template>
<v-layout align-center justify-center>
    <v-flex xs12 sm8 md6 lg5 x14>
        <v-toolbar dark color="blue darken-3">
            <v-toolbar-title>
                Acceso al sistema
            </v-toolbar-title>
        </v-toolbar>
        <v-card-text>
            <v-text-field v-model="email" type="email" autofocus color="accent" label="Email" required>
            </v-text-field>
            <v-text-field v-model="password" type="password" color="accent" label="Password" required>
            </v-text-field>
            <v-flex class="red--text" v-if="errorM">
                {{errorM}}
            </v-flex>
        </v-card-text>
        <v-card-actions class="px-3 pb-3">
            <v-flex text-xs-right>
                <v-btn @click="ingresar()" color="primary">Ingresar</v-btn>
            </v-flex>
        </v-card-actions>
    </v-flex>
</v-layout>
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            email: '',
            password: '',
            errorM: null
        }
    },
    methods: {
        ingresar() {
            axios.post('usuario/login', {
                    email: this.email,
                    password: this.password
                })
                .then(respuesta => {
                    return respuesta.data
                })
                .then(data => {
                    this.$store.dispatch("guardarToken", data.tokenReturn)
                    this.$router.push({
                        name: 'Home'
                    })
                })
                .catch(error => {
                    //console.log(error)
                    this.errorM = null
                    if (!this.validEmail(this.email)) {
                        this.errorM = 'Ingrese un email valido';
                    } else if (error.response.status == 404) {
                        this.errorM = 'No existe el usuario las credenciales son incorrectas';
                    } else {
                        this.errorM = 'Ocurrio un error con el servidor';
                    }
                });
        },
        validEmail: function (email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    }
}
</script>
