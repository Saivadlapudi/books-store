<template>
  <div>
    <q-expantion-item
    header-class="bg-primary text-weight"
    expand-icon-class="text-weight"
    class="collapsable-table"
    expand-icon-toggle
    default-opened
    >
    <template v-slot:header>
      <div class="full-width">
        <h2 class="q-mb-xs text-weight-bold">{{"header Title"}}</h2>
        <div> {{"accounts count title"}}</div>
        </template>
        <q-seperator color="grey-3"/>
        <q-table
        :rows="accounts"
        :columns="columns"
        :visible-columns="visibleColumns"
        row-key="accountNumber"
        hide-bottm
        wrap-cells
        binary-state-sort
        >
        <template v-slot:body="props">
          <q-tr
        :props="props"
        :class="hideTableBorder(props?.expand)"
        >
        <q-td
        v-for="col in props?.cols"
        :key="col?.name"
        :props="props"
        :class="activeStatusText(col?.name,col.value)"
        >{{col?.value}}</q-td>
  </div>
</template>