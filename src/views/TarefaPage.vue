<script setup lang="ts">
import { ref } from 'vue'

import { useTarefas } from '@/composable/useTarefas'
import CardTarefa from '@/components/CardTarefa.vue'

import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonButton,
  IonIcon,
  useIonRouter
} from '@ionic/vue'

import { addOutline } from 'ionicons/icons'

const ionRouter = useIonRouter()

const {
  filtradas,
  adicionar,
  concluir
} = useTarefas()




const novaTarefa = ref('')

function adicionarNova() {
  adicionar(novaTarefa.value)
  novaTarefa.value = ''
}

function abrirDetalhe(id: number) {
  ionRouter.push(`/tabs/tarefas/${id}`)
}
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tarefas</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Nova Tarefa
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>
          <ion-input
            v-model="novaTarefa"
            label="Nome da tarefa"
            label-placement="floating"
            placeholder="Ex: Estudar Vue.js"
          />

          <ion-button
            expand="block"
            @click="adicionarNova"
          >
            <ion-icon
              slot="start"
              :icon="addOutline"
            />
            Adicionar tarefa
          </ion-button>
        </ion-card-content>
      </ion-card>

      <ion-card>
        <ion-card-header>
          <ion-card-title>
            Minhas Tarefas ({{ filtradas.length }})
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>

          <div
            v-for="tarefa in filtradas"
            :key="tarefa.id"
            @click="abrirDetalhe(tarefa.id)"
          >
            <CardTarefa
              :tarefa="tarefa"
  
              @concluir="concluir"
            />
          </div>

          <p
            v-if="filtradas.length === 0"
            class="ion-text-center ion-padding"
          >
            Nenhuma tarefa cadastrada.
          </p>

        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<style scoped>
ion-card {
  margin: 16px;
}

div {
  cursor: pointer;
}
</style>