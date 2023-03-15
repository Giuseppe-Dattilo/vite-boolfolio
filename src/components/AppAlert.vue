<script>

export default {
    name: 'AppAlert',
    props: { isOpen: Boolean },
    emits: ['close']

};

</script>

<template>
    <div v-if="isOpen" class="alert alert-danger alert-dismissible fade show" role="alert">
        <strong>Error: </strong> Si è verificato un errore nel recupero dei progetti.
        <button type="button" class="btn-close" @click="$emit('close')"></button>
    </div>
</template>