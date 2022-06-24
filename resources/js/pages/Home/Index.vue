<script setup>
import { classTable, dataTable } from './config'
import AppButtonLink from '@/components/AppButtonLink.vue'
import DashboardLayout from '@/layouts/DashboardLayout.vue'

defineProps({
  data: {
    type: Object,
    required: true,
  },
  kelas: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <DashboardLayout title="Beranda">
    <div class="grid">
      <div class="col-12">
        <DataTable
          responsiveLayout="scroll"
          columnResizeMode="expand"
          :value="data"
          :rowHover="true"
          :stripedRows="true"
        >
          <template #header>
            <div class="grid">
              <div
                class="col-12 flex flex-column md:flex-row md:justify-content-between md:align-items-center"
              >
                <h1>Data</h1>

                <AppButtonLink
                  label="Tambah"
                  icon="pi pi-pencil"
                  class="p-button-outlined"
                  :href="route('data.create')"
                />
              </div>
            </div>
          </template>

          <Column
            v-for="value in dataTable"
            :field="value.field"
            :header="value.header"
            :key="value.field"
          />

          <Column>
            <template #body="{ data }">
              <AppButtonLink
                icon="pi pi-pencil"
                class="p-button-icon-only p-button-rounded p-button-text"
                v-tooltip.bottom="'Ubah'"
                :href="route('data.edit', data.id)"
              />
            </template>
          </Column>

          <Column>
            <template #body="{ data }">
              <AppButtonLink
                icon="pi pi-trash"
                class="p-button-icon-only p-button-rounded p-button-text"
                v-tooltip.bottom="'Hapus'"
                method="delete"
                :href="route('data.destroy', data.id)"
              />
            </template>
          </Column>
        </DataTable>
      </div>

      <div class="col-12">
        <DataTable
          responsiveLayout="scroll"
          columnResizeMode="expand"
          :value="kelas"
          :rowHover="true"
          :stripedRows="true"
        >
          <template #header>
            <div class="grid">
              <div
                class="col-12 flex flex-column md:flex-row md:justify-content-between md:align-items-center"
              >
                <h1>Kelas</h1>

                <AppButtonLink
                  label="Tambah"
                  icon="pi pi-pencil"
                  class="p-button-outlined"
                  :href="route('classes.create')"
                />
              </div>
            </div>
          </template>

          <Column
            v-for="value in classTable"
            :field="value.field"
            :header="value.header"
            :key="value.field"
          />

          <Column>
            <template #body="{ data }">
              <AppButtonLink
                icon="pi pi-pencil"
                class="p-button-icon-only p-button-rounded p-button-text"
                v-tooltip.bottom="'Ubah'"
                :href="route('classes.edit', data.id)"
              />
            </template>
          </Column>

          <Column>
            <template #body="{ data }">
              <AppButtonLink
                icon="pi pi-trash"
                class="p-button-icon-only p-button-rounded p-button-text"
                v-tooltip.bottom="'Hapus'"
                method="delete"
                :href="route('classes.destroy', data.id)"
              />
            </template>
          </Column>
        </DataTable>
      </div>
    </div>
  </DashboardLayout>
</template>
