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

