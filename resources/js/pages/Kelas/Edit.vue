<script setup>
import { useForm } from '@/components/useForm'
import AppInputText from '@/components/AppInputText.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const props = defineProps({
  kelas: Object,
})

const form = useForm({
  kelas: props.kelas.kelas,
})

const onSubmit = () => {
  form.put(route('classes.update', props.kelas.id))
}
</script>

<template>
  <h1>Ubah Kelas</h1>

  <DashboardLayout title="Ubah Kelas">
    <div class="grid">
      <div class="col-12">
        <AppInputText
          label="Kelas"
          placeholder="kelas"
          v-model="form.kelas"
          :error="form.errors.kelas"
        />
      </div>
      <div class="col-12">
        <div class="flex flex-column md:flex-row justify-content-end">
          <Button
            label="Simpan"
            icon="pi pi-check"
            class="p-button-outlined"
            :disabled="form.processing"
            @click="onSubmit"
          />
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
