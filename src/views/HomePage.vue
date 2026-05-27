<script setup lang="ts">
import { ref, onMounted } from 'vue'

import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonInput,
  IonButton,
  IonText
} from '@ionic/vue'

const nome = ref('')

onMounted(() => {
  nome.value =
    localStorage.getItem(
      'nomeUsuario'
    ) || ''
})

function salvarNome() {
  if (!nome.value.trim()) {
    alert('Digite um nome')
    return
  }

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
          Home
        </ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-card>

        <ion-card-header>
          <ion-card-title>
            Bem-vindo
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>

          <ion-text>
            <p>
              Informe seu nome para
              acessar o perfil. ( Caso ele esteja vazio não é possível acessar o perfil )
            </p>
          </ion-text>

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
            Salvar nome
          </ion-button>

        </ion-card-content>

      </ion-card>

    </ion-content>
  </ion-page>
</template>