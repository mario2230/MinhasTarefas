<script setup lang="ts">
import {
  IonPage,
  IonTabs,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonLabel
} from '@ionic/vue'

import {
  checkboxOutline,
  homeOutline,
  personOutline
} from 'ionicons/icons'
</script>

<template>
  <ion-page>
    <ion-tabs>

      <ion-router-outlet />

      <ion-tab-bar slot="bottom">

        <ion-tab-button
          tab="home"
          href="/tabs/home"
        >
          <ion-icon :icon="homeOutline" />
          <ion-label>Home</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="tarefas"
          href="/tabs/tarefas"
        >
          <ion-icon :icon="checkboxOutline" />
          <ion-label>Tarefas</ion-label>
        </ion-tab-button>

        <ion-tab-button
          tab="perfil"
          href="/tabs/perfil"
        >
          <ion-icon :icon="personOutline" />
          <ion-label>Perfil</ion-label>
        </ion-tab-button>

      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>