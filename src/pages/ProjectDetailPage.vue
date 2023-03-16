<script>
import axios from 'axios';
const apiBaseUrl = 'http://localhost:8000/api';
import ProjectCard from '../components/projects/ProjectCard.vue';

export default {
    name: 'ProjectDetailPage',
    components: { ProjectCard },
    data: () => ({
        project: null,
        isLoading: false
    }),
    methods: {
        getProject() {
            this.isLoading = true;
            const endpoint = apiBaseUrl + '/projects/' + this.$route.params.id;
            axios.get(endpoint).then(res => {
                this.project = res.data;
            }).catch(() => {
                this.$router.push({ name: 'not-found' });
            }).then(() => {
                this.isLoading = false;
            });
        }
    },
    created() {
        this.getProject();
    }

};

</script>

<template>
    <AppLoader v-if="isLoading" />
    <ProjectCard v-else :project="project" :isDetail="true" />
</template>