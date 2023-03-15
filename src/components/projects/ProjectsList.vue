<script>
import PostCard from './PostCard.vue';
export default {
    name: 'ProjectsList',
    components: { PostCard },
    props: { projects: Array }
};

</script>

<template>
    <section id="projects-list" class="my-4">
        <div v-if="projects.length">
            <PostCard v-for="project in projects" :key="project.id" :project="project" />
        </div>
        <h4 v-else class="text-center">Non ci sono Progetti</h4>
    </section>
</template>