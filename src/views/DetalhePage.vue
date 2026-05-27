<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import {
  useIonRouter,
  alertController,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonText
} from '@ionic/vue'

import { useTarefas } from '@/composable/useTarefas'

const route = useRoute()
const ionRouter = useIonRouter()

const {
  tarefas,
  concluir,
  remover
} = useTarefas()

const id = computed(() =>
  Number(route.params.id)
)

const tarefa = computed(() =>
  tarefas.value.find(
    t => t.id === id.value
  )
)

function voltar() {
  if (ionRouter.canGoBack()) {
    ionRouter.back()
  } else {
    ionRouter.replace('/tabs/tarefas')
  }
}

async function confirmarExclusao(
  id: number
) {
  const alert =
    await alertController.create({
      header: 'Excluir tarefa?',
      message:
        'Esta ação não pode ser desfeita.',

      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Excluir',
          role: 'destructive',

          handler: () => {
            remover(id)
            voltar()
          }
        }
      ]
    })

  await alert.present()
}
</script>

<template>
  <ion-page>

    <ion-header>
      <ion-toolbar>

        <ion-buttons slot="start">
          <ion-back-button
            default-href="/tabs/tarefas"
          />
        </ion-buttons>

        <ion-title>
          Detalhes
        </ion-title>

      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">

      <ion-card v-if="tarefa">

        <ion-card-header>
          <ion-card-title>
            {{ tarefa.texto }}
          </ion-card-title>
        </ion-card-header>

        <ion-card-content>

          <ion-text>
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
          </ion-text>

          <ion-button
            expand="block"
            @click="concluir(tarefa.id)"
          >
            {{
              tarefa.feita
                ? 'Desmarcar'
                : 'Concluir'
            }}
          </ion-button>

  
          <ion-button
            expand="block"
            color="danger"
            @click="
              confirmarExclusao(
                tarefa.id
              )
            "
          >
            Excluir tarefa
          </ion-button>

          <ion-button
            expand="block"
            fill="outline"
            @click="voltar"
          >
            Voltar
          </ion-button>

        </ion-card-content>
      </ion-card>

      <div v-else>
        Tarefa não encontrada.
      </div>

    </ion-content>
  </ion-page>
</template>