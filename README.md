# vue-ionic-example
How to start new Vue Ionic project

## Project setup

```bash
npm i -g @vue/cli
vue create vue-ionic-example
cd vue-ionic-example
vue add router
npm i -E @ionic/core @ionic/vue
```

edit `src/main.js` file:

```js
import '@ionic/core/css/ionic.bundle.css';
// import Ionic from '@ionic/vue';
import { defineCustomElements as Ionic } from "@ionic/core/loader"; // add a direct link to @ionic/core

Vue.use(Ionic);
Vue.config.ignoredElements = [/^ion-/];
```

finally use ionic in your root `Aoo.vue` component:

```vue
<template>
  <div class="ion-page">
    <ion-header>
      <ion-toolbar>
        <ion-title>My App</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <div>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view/>
    </ion-content>
  </div>
</template>

<script>
  export default {
    name: 'app',
  };
</script>
```

## npm scripts

### Compiles and hot-reloads for development

```bash
npm start
```

### Compiles and minifies for production

```bash
npm run build
```

### Run your unit tests

```bash
npm t
```

## resources

* https://github.com/ionic-team/ionic/issues/18640#issuecomment-506304099
* [Configuration Reference](https://cli.vuejs.org/config/)
