<script setup lang="ts">
import { ref } from 'vue'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonInput,
  IonButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent
} from '@ionic/vue'

const nome = ref('')

import {
  onIonViewWillEnter
} from '@ionic/vue'

onIonViewWillEnter(() => {
  nome.value =
    localStorage.getItem(
      'nomeUsuario'
    ) ?? ''
})

function salvarNome() {
  localStorage.setItem(
    'nomeUsuario',
    nome.value
  )

  alert('Nome salvo!')
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>
          Perfil
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Meu Perfil
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>

          <ion-input
            v-model="nome"
            label="Seu nome"
            label-placement="floating"
            placeholder="Digite seu nome"
          />

          <ion-button
            expand="block"
            class="ion-margin-top"
            @click="salvarNome"
          >
            Alterar seu nome
          </ion-button>

        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>