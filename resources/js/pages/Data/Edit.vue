<script setup>
import { useForm } from '@/components/useForm'
import AppInputText from '@/components/AppInputText.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

const props = defineProps({
  data: Object,
})

const form = useForm({
  nama: props.data.nama,
  alamat: props.data.alamat,
})

const onSubmit = () => {
  form.put(route('data.update', props.data.id))
}
</script>

<template>
  <h1>Tambah Data</h1>

  <DashboardLayout title="Ubah Kelas">
    <div class="grid">
      <div class="col-12">
        <AppInputText
          label="Nama"
          placeholder="nama"
          v-model="form.nama"
          :error="form.errors.nama"
        />
      </div>
      <div class="col-12">
        <AppInputText
          label="Alamat"
          placeholder="alamat"
          v-model="form.alamat"
          :error="form.errors.alamat"
        />
      </div>
      <div class="col-12">
        <div class="flex flex-column md:flex-row justify-content-end">
          <Button
            label="Simpan"
            class="p-button-outlined"
            icon="pi pi-check"
            :disabled="form.processing"
            @click="onSubmit"
          />
        </div>
      </div>
    </div>
  </DashboardLayout>
</template>
