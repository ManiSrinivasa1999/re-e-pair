<template>
<v-app>
  <!-- <v-navigation-drawer app>
  </v-navigation-drawer> -->

  <v-app-bar
    dark
    app
  >
    <!-- -->
    <a href="/" class="text-h3 brand">
      Re-e-pair
    </a>
    <v-spacer></v-spacer>
    <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="red lighten-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          SignUp/Login
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Privacy Policy
        </v-card-title>

        <v-card-text>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="primary"
            text
            @click="dialog = false"
          >
            I accept
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    <v-row>
      <v-col class="text-center">
        &copy; 2020 LSM
      </v-col>
    </v-row>
  </v-footer>
</v-app>
</template>

<script lang="ts">
import { dom } from '@fortawesome/fontawesome-svg-core';

export default {
  mounted() {
    dom.watch();
  },
  data() {
    return {

    };
  },
};
</script>

<style scoped>
.brand {
  text-decoration: none;
  color: aliceblue;
}
</style>
