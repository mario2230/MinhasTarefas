<script setup lang="ts">
import {
  IonCard,
  IonCardContent,
  IonButton,
  IonIcon,
  IonText
} from '@ionic/vue'

import {
  checkmarkDoneOutline
} from 'ionicons/icons'

interface Tarefa {
  id: number
  texto: string
  feita: boolean
}

defineProps<{
  tarefa: Tarefa
}>()

const emit = defineEmits([
  'remover',
  'concluir'
])
</script>

<template>
  <ion-card class="card-tarefa">

    <ion-card-content class="conteudo">

  
      <div class="info">
        <ion-text>
          <h2
            :class="{
              concluida: tarefa.feita
            }"
          >
            {{ tarefa.texto }}
          </h2>
        </ion-text>

        <p>
          Status:
          <strong>
            {{
              tarefa.feita
                ? 'Concluída'
                : 'Pendente'
            }}
          </strong>
        </p>
      </div>

  
      <div class="acoes">


        <ion-button
          fill="clear"
          color="success"
          @click.stop="
            emit(
              'concluir',
              tarefa.id
            )
          "
        >
          <ion-icon
            :icon="
              checkmarkDoneOutline
            "
          />
        </ion-button>




      </div>

    </ion-card-content>

  </ion-card>
</template>

<style scoped>
.card-tarefa {
  margin-bottom: 12px;
}

.conteudo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.info {
  flex: 1;
}

.acoes {
  display: flex;
  gap: 8px;
}

.concluida {
  text-decoration: line-through;
  opacity: 0.7;
}
</style>