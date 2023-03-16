<script>
import axios from 'axios';
import AppAlert from '../components/AppAlert.vue';
import AppPagination from '../components/AppPagination.vue';
import ProjectsList from '../components/Projects/ProjectsList.vue';
const apiBaseUrl = 'http://localhost:8000/api';

export default {
    name: 'HomePage',
    components: { AppAlert, ProjectsList, AppPagination },
    data: () => ({
        hasError: false,
        isLoading: false,
        projects: {
            data: [],
            links: [],
        }
    }),
    methods: {
        fetchProjects(endpoint = null) {
            this.isLoading = true;
            if (!endpoint) endpoint = apiBaseUrl + '/projects'
            axios.get(endpoint).then(res => {
                const { data, links } = res.data;
                this.projects = { data, links };
            }).catch(() => {
                this.hasError = true;
            }).then(() => {
                this.isLoading = false;
            });
        }
    },
    created() {
        this.fetchProjects();
    }

};

</script>

<template>
    <AppAlert :is-open="hasError" @close="hasError = false" class="my-3" />
    <AppLoader v-if="isLoading" />
    <ProjectsList v-else :projects="projects.data" />
    <footer>
        <AppPagination :links="projects.links" @change-page="fetchProjects" />
    </footer>
</template>