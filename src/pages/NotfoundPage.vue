<script>

export default {
    name: 'NotFoundPage',

};

</script>

<template>
    <div class="d-flex vh-100 flex-column align-items-center justify-content-center">
        <h2 class="text-center text-white">404| Non Found</h2>
        <button @click="$router.back()" class="btn btn-sm btn-secondary">Indietro</button>
    </div>
</template>